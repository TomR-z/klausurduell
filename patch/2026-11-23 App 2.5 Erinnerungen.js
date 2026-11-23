/* ═════════ v2.5: Erinnerungen per Push (Cloudflare Worker „klausurduell-push“) ═════════ */
const PUSH_URL = "https://klausurduell-push.klausurduell.workers.dev";
const PUSH_VAPID = "BEsoVs5vzuccdOGA31P9wL5Ev_0l65VNJ6PBP6aUEiCJUl67kJ10Cch7f3cxmmT8FH09b95nSUcY9bOLZI8M7jY";
const PUSH_STD = {an: true, lern: "18:00", serie: "20:30", tlern: true, tserie: true, twerk: true, twoche: true};
const pushCfg = () => Object.assign({}, PUSH_STD, (S.push && S.push.cfg) || {});
const pushOn = () => !!(S.push && S.push.an);
const pushKann = () => !framed && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
const pushStandalone = () => (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
function pushId(){ if (!S.push) S.push = {}; if (!S.push.id) { const a = new Uint8Array(18); crypto.getRandomValues(a); S.push.id = btoa(String.fromCharCode(...a)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); save(); } return S.push.id; }
function pushKey(s){ s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; return Uint8Array.from(atob(s), c => c.charCodeAt(0)); }
/* Was der Server wissen muss – nur Zahlen, keine Fragen */
function pushStand(){
  const now = new Date(), fl = [];
  for (let i = 0; i < 8; i++) fl.push(FRAGEN.reduce((n, q) => { const c = card(q.id); return n + (c && c.due <= dayNum() + i ? 1 : 0); }, 0));
  let letzter = null; const ks = Object.keys(S.days).filter(k => (S.days[k] || {}).n > 0).sort(); if (ks.length) letzter = ks[ks.length - 1];
  const mo = new Date(now); mo.setDate(mo.getDate() - ((mo.getDay() + 6) % 7)); let wn = 0; const d = new Date(mo);
  for (let i = 0; i < 7; i++) { wn += (S.days[dayKey(d)] || {}).n || 0; d.setDate(d.getDate() + 1); }
  const lastF = f => { const k = Object.keys(S.df).filter(x => (S.df[x] || {})[f] > 0).sort(); return k.length ? k[k.length - 1] : null; };
  const werke = (S.game && gOn()) ? (S.game.b || []).filter(b => WERK[b.k] && b.l >= 1 && FACH[WERK[b.k].f]).map(b => ({name: GT[b.k] ? GT[b.k].n : b.k, fach: FACH[WERK[b.k].f].n, zuletzt: lastF(WERK[b.k].f)})) : [];
  return {am: dayKey(), heute: {tag: dayKey(), n: today().n}, letzter, serie: streak(), faellig: fl, werke: werke.slice(0, 20), woche: {ab: dayKey(mo), n: wn}};
}
async function pushPost(pfad, body){
  const r = await fetch(PUSH_URL + pfad, {method: "POST", body: JSON.stringify(body), keepalive: true, headers: {"Content-Type": "text/plain"}});
  return r.json().catch(() => ({ok: false}));
}
let pushLast = 0, pushSig = "";
function pushReport(force){
  if (!pushOn() || !navigator.onLine) return;
  const st = pushStand(), sig = JSON.stringify(st);
  if (!force && (sig === pushSig || Date.now() - pushLast < 60000)) return;
  pushSig = sig; pushLast = Date.now();
  pushPost("/stand", {id: pushId(), stand: st, tz: Intl.DateTimeFormat().resolvedOptions().timeZone}).then(r => { if (r && r.fehler === "unbekannt") { S.push.an = false; save(); } }).catch(() => {});
}
async function pushEinschalten(){
  if (!pushKann()) { pushHilfe(); return; }
  let p;
  try { p = await Notification.requestPermission(); } catch (e) { p = "denied"; }
  if (p !== "granted") { toast(p === "denied" ? "Mitteilungen sind aus – in den iPhone-Einstellungen bei Klausurduell erlauben" : "Ohne Erlaubnis keine Erinnerungen"); return; }
  try {
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) sub = await reg.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: pushKey(PUSH_VAPID)});
    const cfg = pushCfg(); cfg.an = true;
    const r = await pushPost("/abo", {id: pushId(), sub: sub.toJSON(), tz: Intl.DateTimeFormat().resolvedOptions().timeZone, cfg, stand: pushStand()});
    if (!r.ok) throw new Error(r.fehler || "Server");
    S.push.an = true; S.push.cfg = cfg; save(); pushSig = ""; render(); pushSheet(); toast("Erinnerungen sind an");
  } catch (e) { toast("Einschalten hat nicht geklappt: " + (e.message || e)); }
}
async function pushAusschalten(){
  try { await pushPost("/aus", {id: pushId()}); } catch (e) {}
  try { const reg = await navigator.serviceWorker.ready, sub = await reg.pushManager.getSubscription(); if (sub) await sub.unsubscribe(); } catch (e) {}
  S.push.an = false; save(); render(); closeSheet(); toast("Erinnerungen sind aus");
}
function pushHilfe(){
  openSheet(`<h2>Erinnerungen</h2><p class="sub">Geht nur in der installierten App</p>
    <p class="legend">${framed ? "Hier im Chat-Fenster kann die App keine Mitteilungen schicken." : !pushStandalone() ? "Öffne Klausurduell über das Symbol auf deinem Home-Bildschirm, nicht in Safari. Noch nicht installiert? In Safari auf Teilen → „Zum Home-Bildschirm“." : "Dieses Gerät unterstützt keine Web-Mitteilungen. Auf dem iPhone braucht es iOS 16.4 oder neuer."}</p>`);
}
function pushSheet(){
  const c = pushCfg(), on = pushOn();
  const sw = (k, t, s) => `<button class="tswitch press" data-act="push-typ" data-k="${k}" role="switch" aria-checked="${!!c[k]}"><span class="t"><b>${t}</b><small>${s}</small></span><span class="sw${c[k] ? " on" : ""}"><i></i></span></button>`;
  openSheet(`<h2>Erinnerungen</h2><p class="sub">${on ? "An · höchstens 2 am Tag, nie zwischen 22 und 8 Uhr" : "Aus"}</p>
    ${on ? `<div class="pushzeit"><label>Lernerinnerung<input type="time" id="pz-lern" value="${c.lern}" min="08:00" max="21:45" step="900"></label><label>Serie in Gefahr<input type="time" id="pz-serie" value="${c.serie}" min="08:00" max="21:45" step="900"></label></div>
    ${sw("tlern", "Lernerinnerung", "Täglich zur gewählten Zeit, nur wenn das Tagesziel noch offen ist.")}
    ${sw("tserie", "Serie in Gefahr", "Abends, wenn heute noch nichts gelernt wurde.")}
    ${sw("twerk", "Werk vor Stillstand", "Mittags, wenn ein Fach 6 Tage nicht dran war.")}
    ${sw("twoche", "Wochenrückblick", "Sonntags um 19 Uhr.")}
    <div class="btnrow"><button class="btn2 acc press" data-act="push-save">Speichern</button><button class="btn2 press" data-act="push-test">Testnachricht</button></div>
    <button class="link danger" data-act="push-aus">Erinnerungen ausschalten</button>`
    : `<p class="legend">Klausurduell erinnert dich ans Tagesziel, warnt abends, bevor deine Serie reißt, und sagt Bescheid, bevor ein Werk in der Stadt stillsteht. Dafür meldet die App nach dem Lernen ein paar Zahlen an einen kleinen Server (fällige Fragen, Serie, letzter Lerntag je Fach) – keine Fragen, keine Namen.</p>
    <div class="btnrow"><button class="btn2 acc press" data-act="push-an">Erinnerungen einschalten</button></div>`}`);
}
function pushPanel(){
  const on = pushOn(), c = pushCfg();
  return `<div class="panel glass"><div class="sec-h" style="padding:0"><h2>Erinnerungen</h2><small>${on ? `an · ${c.tlern ? c.lern + " Uhr" : "ohne Lernerinnerung"}` : "aus"}</small></div>
    <p class="legend" style="margin:0">${on ? "Mitteilungen kommen auch, wenn die App geschlossen ist." : "Mitteilungen ans Tagesziel, an deine Serie und an Werke, die bald stillstehen."}</p>
    <div class="btnrow" style="margin-top:0"><button class="btn2${on ? "" : " acc"} press" data-act="push-sheet">${on ? "Einstellungen" : "Einschalten"}</button></div></div>`;
}
function pushAct(a, d){
  if (a === "push-sheet") { pushOn() ? pushSheet() : (pushKann() ? pushSheet() : pushHilfe()); return true; }
  if (a === "push-an") { pushEinschalten(); return true; }
  if (a === "push-aus") { pushAusschalten(); return true; }
  if (a === "push-typ") { const c = pushCfg(); pushMerkeZeiten(c); c[d.k] = !c[d.k]; S.push.cfg = c; save(); pushSheet(); return true; }
  if (a === "push-save") { const c = pushCfg(); pushMerkeZeiten(c); S.push.cfg = c; save(); pushPost("/stand", {id: pushId(), cfg: c, stand: pushStand(), tz: Intl.DateTimeFormat().resolvedOptions().timeZone}).then(r => toast(r.ok ? "Gespeichert" : "Server nicht erreichbar")).catch(() => toast("Server nicht erreichbar")); render(); closeSheet(); return true; }
  if (a === "push-test") { pushPost("/test", {id: pushId()}).then(r => toast(r.ok ? "Testnachricht ist unterwegs" : "Test hat nicht geklappt (" + (r.status || r.fehler || "?") + ")")).catch(() => toast("Server nicht erreichbar")); return true; }
  return false;
}
function pushMerkeZeiten(c){ const l = $("#pz-lern"), s = $("#pz-serie"); if (l && /^\d\d:\d\d$/.test(l.value)) c.lern = l.value; if (s && /^\d\d:\d\d$/.test(s.value)) c.serie = s.value; }
document.addEventListener("visibilitychange", () => { if (document.hidden) pushReport(); else if (pushOn()) setTimeout(() => pushReport(true), 1500); });
setInterval(() => pushReport(), 120000);
/* Aus einer Mitteilung kommend: passenden Tab öffnen */
function pushGoto(h){ const t = (h || "").replace("#", ""); if (["heute", "faecher", "aufgaben", "stadt", "stand"].includes(t) && t !== tab) { if (t === "stadt" && !gOn()) return; tab = t; render(); window.scrollTo({top: 0}); } }
if (!framed && "serviceWorker" in navigator) navigator.serviceWorker.addEventListener("message", e => { if (e.data && e.data.goto) pushGoto(e.data.goto); });
window.addEventListener("hashchange", () => pushGoto(location.hash));
