/* Klausurduell · Erinnerungs-Server (Cloudflare Worker) · Version 1 · 23.11.2026
   Speichert je Gerät nur: Push-Empfängeradresse, Zeitzone, Einstellungen, ein paar Zahlen zum Lernstand.
   Prüft alle 15 Minuten, ob eine Erinnerung fällig ist, und sendet sie verschlüsselt (Web Push, RFC 8291/8292). */

const MAX_GERAETE = 20, ZIEL = 20, MAX_PRO_TAG = 2;
const STD = { an: true, lern: "18:00", serie: "20:30", tlern: true, tserie: true, twerk: true, twoche: true };
const SUB = "https://tomr-z.github.io/klausurduell/";

const enc = new TextEncoder();
const b64u = b => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64u = s => { s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; return Uint8Array.from(atob(s), c => c.charCodeAt(0)); };
const cat = (...a) => { const n = a.reduce((x, y) => x + y.length, 0), o = new Uint8Array(n); let i = 0; for (const x of a) { o.set(x, i); i += x.length; } return o; };
async function hmac(key, data) { const k = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]); return new Uint8Array(await crypto.subtle.sign("HMAC", k, data)); }

/* ── Web Push: Inhalt verschlüsseln (aes128gcm) ── */
async function verschluesseln(sub, text) {
  const ua = unb64u(sub.keys.p256dh), auth = unb64u(sub.keys.auth);
  const as = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const asPub = new Uint8Array(await crypto.subtle.exportKey("raw", as.publicKey));
  const uaKey = await crypto.subtle.importKey("raw", ua, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const ecdh = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, as.privateKey, 256));
  const prkKey = await hmac(auth, ecdh);
  const ikm = await hmac(prkKey, cat(enc.encode("WebPush: info\0"), ua, asPub, new Uint8Array([1])));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const prk = await hmac(salt, ikm);
  const cek = (await hmac(prk, cat(enc.encode("Content-Encoding: aes128gcm\0"), new Uint8Array([1])))).slice(0, 16);
  const nonce = (await hmac(prk, cat(enc.encode("Content-Encoding: nonce\0"), new Uint8Array([1])))).slice(0, 12);
  const k = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, k, cat(enc.encode(text), new Uint8Array([2]))));
  const rs = new Uint8Array([0, 0, 16, 0]);
  return cat(salt, rs, new Uint8Array([asPub.length]), asPub, ct);
}
/* ── VAPID-Ausweis (JWT, ES256) ── */
async function vapid(env, endpoint) {
  const aud = new URL(endpoint).origin;
  const head = b64u(enc.encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
  const body = b64u(enc.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: SUB })));
  const key = await crypto.subtle.importKey("jwk", JSON.parse(env.VAPID_PRIVATE), { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, enc.encode(head + "." + body));
  return `vapid t=${head}.${body}.${b64u(sig)}, k=${env.VAPID_PUBLIC}`;
}
async function senden(env, sub, nachricht) {
  const body = await verschluesseln(sub, JSON.stringify(nachricht));
  const r = await fetch(sub.endpoint, { method: "POST", body, headers: {
    "Authorization": await vapid(env, sub.endpoint), "Content-Encoding": "aes128gcm", "Content-Type": "application/octet-stream", "TTL": "14400", "Urgency": "normal" } });
  let txt = ""; try { txt = (await r.text()).slice(0, 300); } catch (e) {}
  senden.letzte = { status: r.status, text: txt, zeit: new Date().toISOString() };
  return r.status;
}

/* ── Zeit in der Zeitzone des Geräts ── */
function lokal(tz, d = new Date()) {
  const p = {}; new Intl.DateTimeFormat("de-DE", { timeZone: tz || "Europe/Berlin", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", weekday: "short", hourCycle: "h23" })
    .formatToParts(d).forEach(x => p[x.type] = x.value);
  return { tag: `${p.year}-${p.month}-${p.day}`, min: +p.hour * 60 + +p.minute, wt: p.weekday };
}
const tagNr = s => Math.floor(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5);
const minVon = s => { const m = /^(\d{1,2}):(\d{2})$/.exec(s || ""); return m ? Math.min(21 * 60 + 45, Math.max(8 * 60, +m[1] * 60 + +m[2])) : null; };
const imFenster = (jetzt, s) => { const t = minVon(s); return t != null && jetzt >= t && jetzt < t + 45; };

/* ── Welche Nachricht ist jetzt dran? ── */
function faellig(u, jetzt) {
  const c = Object.assign({}, STD, u.cfg || {}), st = u.stand || {}, L = lokal(u.tz, jetzt);
  if (!c.an || L.min < 8 * 60 || L.min >= 22 * 60) return [];
  const log = u.log && u.log.tag === L.tag ? u.log : { tag: L.tag, n: [] };
  if (log.n.length >= MAX_PRO_TAG) return [];
  const heute = tagNr(L.tag), alter = st.am ? heute - tagNr(st.am) : 99;
  const nHeute = st.heute && st.heute.tag === L.tag ? st.heute.n : 0;
  const out = [];
  /* Serie in Gefahr */
  if (c.tserie && !log.n.includes("serie") && imFenster(L.min, c.serie) && nHeute === 0 && st.letzter && heute - tagNr(st.letzter) === 1 && (st.serie || 0) >= 2)
    out.push(["serie", { title: `${st.serie} Tage in Folge`, body: `Deine Serie endet um Mitternacht. Ein paar Fragen reichen, um sie zu halten.`, url: "./#heute" }]);
  /* Lernerinnerung */
  if (c.tlern && !log.n.includes("lern") && imFenster(L.min, c.lern) && nHeute < ZIEL) {
    const f = Array.isArray(st.faellig) ? (st.faellig[Math.min(st.faellig.length - 1, Math.max(0, alter))] || 0) : 0;
    const plan = st.plan && st.am === L.tag && st.plan.text ? st.plan.text + ". " : "";   // 3.0: Pensum aus dem Klausur-Countdown
    const body = plan ? plan + (nHeute < ZIEL ? `Tagesziel: noch ${ZIEL - nHeute} Fragen.` : "") : nHeute > 0 ? `Noch ${ZIEL - nHeute} Fragen bis zum Tagesziel.` : f > 0 ? `${f} Fragen sind fällig – etwa ${Math.max(3, Math.round(f * 0.4))} Minuten.` : `Zeit fürs Tagesziel: 20 Fragen, etwa 8 Minuten.`;
    out.push(["lern", { title: "Klausurduell", body, url: "./#heute" }]);
  }
  /* Endspurt eine Woche vor einer Klausur */
  if (c.tlern && !log.n.includes("endspurt") && imFenster(L.min, c.lern) && st.plan && Array.isArray(st.plan.exams)) {
    const e = st.plan.exams.find(x => x.ex && tagNr(x.ex) - heute === 7);
    if (e) out.unshift(["endspurt", { title: `${e.f}: noch eine Woche`, body: "Der Endspurt beginnt – jetzt Probeklausuren schreiben und Schwachstellen üben.", url: "./#heute" }]);
  }
  /* Werk steht bald still (Stillstand nach 7 Tagen ohne Fach) */
  if (c.twerk && !log.n.includes("werk") && imFenster(L.min, "12:00") && Array.isArray(st.werke)) {
    const bald = st.werke.filter(w => w.zuletzt && heute - tagNr(w.zuletzt) === 6);
    if (bald.length) out.push(["werk", { title: bald.length === 1 ? `${bald[0].name}: morgen Stillstand` : `${bald.length} Werke: morgen Stillstand`,
      body: `Lerne heute kurz ${[...new Set(bald.map(w => w.fach))].join(" und ")}, dann produziert ${bald.length === 1 ? "es" : "alles"} weiter.`, url: "./#stadt" }]);
  }
  /* Wochenrückblick am Sonntag */
  if (c.twoche && !log.n.includes("woche") && L.wt.startsWith("So") && imFenster(L.min, "19:00")) {
    const mo = heute - ((new Date(heute * 864e5).getUTCDay() + 6) % 7);
    const n = st.woche && tagNr(st.woche.ab || "1970-01-01") === mo ? st.woche.n : 0;
    out.push(["woche", { title: "Deine Woche", body: n ? `${n} Fragen beantwortet${st.serie ? `, Serie ${st.serie} Tage` : ""}. Weiter so!` : "Diese Woche noch keine Fragen – morgen ist ein guter Start.", url: "./#stand" }]);
  }
  return out.slice(0, MAX_PRO_TAG - log.n.length).map(x => [x[0], x[1], log]);
}

async function rundgang(env, jetzt = new Date()) {
  const keys = (await env.KD.list({ prefix: "u:" })).keys;
  /* Diagnose: Testnachricht an alle Geräte, wenn der Schlüssel "diag:test" gesetzt ist */
  if (await env.KD.get("diag:test")) {
    await env.KD.delete("diag:test");
    for (const k of keys) { const u = await env.KD.get(k.name, "json"); if (!u || !u.sub) continue;
      try { await senden(env, u.sub, { tag: "test", title: "Klausurduell", body: "Testnachricht vom Server.", url: "./#stand" }); u.letzterTest = senden.letzte; }
      catch (e) { u.letzterTest = { fehler: String(e && e.stack || e) }; }
      await env.KD.put(k.name, JSON.stringify(u)); }
  }
  for (const k of keys) {
    const u = await env.KD.get(k.name, "json"); if (!u || !u.sub) continue;
    const todo = faellig(u, jetzt); if (!todo.length) continue;
    const log = todo[0][2];
    for (const [art, msg] of todo) {
      const s = await senden(env, u.sub, Object.assign({ tag: art }, msg));
      if (s === 404 || s === 410) { await env.KD.delete(k.name); break; }
      if (s < 300) log.n.push(art);
      u.letzterStatus = s;
    }
    u.log = log; await env.KD.put(k.name, JSON.stringify(u));
  }
}

/* ── HTTP-Schnittstelle für die App ── */
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" };
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: Object.assign({ "Content-Type": "application/json; charset=utf-8" }, CORS) });
const idOk = id => typeof id === "string" && /^[A-Za-z0-9_-]{20,64}$/.test(id);

export default {
  async fetch(req, env) {
    const url = new URL(req.url), p = url.pathname;
    if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (p === "/" || p === "/vapid") return json({ ok: true, dienst: "Klausurduell Erinnerungen", vapid: env.VAPID_PUBLIC });
    if (req.method !== "POST") return json({ ok: false, fehler: "nur POST" }, 405);
    const txt = await req.text(); if (txt.length > 8000) return json({ ok: false, fehler: "zu groß" }, 413);
    let b; try { b = JSON.parse(txt); } catch (e) { return json({ ok: false, fehler: "kein JSON" }, 400); }
    if (!idOk(b.id)) return json({ ok: false, fehler: "id" }, 400);
    const key = "u:" + b.id, u = (await env.KD.get(key, "json")) || null;
    if (p === "/abo") {
      if (!b.sub || !b.sub.endpoint || !b.sub.keys || !/^https:\/\//.test(b.sub.endpoint)) return json({ ok: false, fehler: "sub" }, 400);
      if (!u && (await env.KD.list({ prefix: "u:" })).keys.length >= MAX_GERAETE) return json({ ok: false, fehler: "voll" }, 403);
      const n = Object.assign(u || {}, { sub: b.sub, tz: b.tz || "Europe/Berlin", cfg: Object.assign({}, STD, b.cfg || {}), seit: (u && u.seit) || new Date().toISOString() });
      if (b.stand) n.stand = b.stand;
      await env.KD.put(key, JSON.stringify(n)); return json({ ok: true });
    }
    if (!u) return json({ ok: false, fehler: "unbekannt" }, 404);
    if (p === "/stand") { u.stand = b.stand || u.stand; if (b.cfg) u.cfg = Object.assign({}, STD, b.cfg); if (b.tz) u.tz = b.tz; await env.KD.put(key, JSON.stringify(u)); return json({ ok: true }); }
    if (p === "/test") { let s; try { s = await senden(env, u.sub, { tag: "test", title: "Klausurduell", body: "Erinnerungen funktionieren. So sehen sie später aus.", url: "./#stand" }); u.letzterTest = senden.letzte; } catch (e) { u.letzterTest = { fehler: String(e && e.stack || e) }; s = 599; } await env.KD.put(key, JSON.stringify(u)); return json({ ok: s < 300, status: s }); }
    if (p === "/aus") { await env.KD.delete(key); return json({ ok: true }); }
    return json({ ok: false, fehler: "unbekannter Pfad" }, 404);
  },
  async scheduled(ev, env, ctx) { ctx.waitUntil(rundgang(env, new Date(ev.scheduledTime))); }
};
