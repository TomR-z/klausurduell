
/* ── v2.3: Info-Karte, Lager, Aufträge, Fabriken, Prüflabor, Truhe, Verschieben ── */
const C3I2 = {
  orders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v3H8zM6 5.5H5v15h14v-15h-1M8 11h8M8 15h5"/></svg>',
  lager: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-5 9 5v11H3zM7 20v-7h10v7M7 16.5h10"/></svg>',
  move: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/></svg>',
  chest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a8 5 0 0 1 16 0v9H4zM4 12h16M11 11h2v3h-2z"/></svg>'
};
const OTXT = (k, i) => { const F = FAB[k], R0 = Object.keys(F.out)[0]; return i === 0 ? `−1 ${RES[F.o1].n} je Lauf` : i === 1 ? "25 % schneller" : F.o3 ? "Kein Bauplan mehr nötig" : `+1 ${RES[R0].n} je Lauf`; };
const TIER = ["Holztruhe", "Silbertruhe", "Goldtruhe"];

/* ── Info-Karte über dem Gebäude ── */
function c3cardOpen(b){ C3.card = b.id; C3.sel = null; if (C3.drawer) c3drawer(false); c3cardDraw(); }
function c3cardClose(){ C3.card = null; const el = $("#c3card"); if (el) el.hidden = true; }
function c3cardDraw(){
  const el = $("#c3card"), b = C3.card && G().b.find(o => o.id === C3.card); if (!el) return; if (!b) { el.hidden = true; return; }
  el.innerHTML = c3cardHTML(b); el.hidden = false; c3cardTick();
}
function c3upLine(b){
  const t = GT[b.k], L = b.l + 1; if (b.until > Date.now() || t.deko || L > t.max) return "";
  const why = gReq(b.k, L), rc = ecoCost(b.k, L), ok = !why && G().coins >= t.cost[L - 1] && ecoHave(rc);
  return `<div class="cup"><button class="cta sm press" data-act="c3-up" data-id="${b.id}"${ok ? "" : " data-off=\"1\""}>Auf Stufe ${L} ausbauen</button>${costHTML(rc, t.cost[L - 1])}${why ? `<small class="cwhy">${why}</small>` : ""}</div>`;
}
function c3cardHTML(b){
  const t = GT[b.k], g = eco(), now = Date.now(), site = b.until > now; let body = "";
  if (site) { const p = c3clamp((now - b.from) / Math.max(1, b.until - b.from), 0, 1);
    body += `<div class="cline">Baut auf Stufe ${b.next} · <b class="gtime" data-id="${b.id}">${gDur((b.until - now) / 1000)}</b></div><div class="cbar"><i style="width:${(p * 100).toFixed(0)}%"></i></div><small class="cnote">Jede richtige Antwort spart 1 Minute.</small>`;
    if (g.inv.speed > 0) body += `<button class="btn2 sm press" data-act="c3-speed" data-id="${b.id}">Bau-Beschleuniger einsetzen (−30 Min.) · ${g.inv.speed}×</button>`; }
  else if (WERK[b.k]) { const w = WERK[b.k], cap = WCAP[b.l], st = b.st || 0, idle = werkIdle(b), m = mastery(qsOf(w.f)), boost = g.boost && g.boost.k === b.k && g.boost.until > now;
    body += `<div class="cline">${ricon(w.r, 18)}<b>${Math.floor(st)}</b>&nbsp;${RES[w.r].n} im Werk <small>· passt ${cap}</small></div><div class="cbar"><i style="width:${(st / cap * 100).toFixed(0)}%;background:${RES[w.r].c}"></i></div>`;
    body += `<small class="cnote">${idle ? `Steht still: seit über 7 Tagen nichts in ${FACH[w.f].n} gelernt.` : `Pro richtiger Antwort in ${FACH[w.f].n} ≈ ${(WRATE[b.l] * (boost ? 2 : 1)).toFixed(2).replace(".", ",")} ${RES[w.r].n}${boost ? " (Messkampagne läuft)" : ""}.`} ${Math.round(m * 100)} % beherrscht.</small>`;
    body += `<div class="cbtns">${st >= 1 ? `<button class="btn2 acc sm press" data-act="c3-col" data-id="${b.id}">Abholen</button>` : ""}<button class="btn2 sm press" data-act="start-subject" data-f="${w.f}">${FACH[w.f].n} lernen</button></div>`;
    if (b.k === "bahnhof") body += `<small class="cnote">Fachkräfte im Ort: ${Math.floor(g.r.fach)} von ${extraCap("fach")}</small>${g.crew3 ? "" : `<button class="btn2 sm press" data-act="c3-crew">Dritter Bautrupp · 10 Fachkräfte + ₿ 400</button>`}`;
    if (b.k === "vermessung") body += `<button class="btn2 acc sm press" data-act="c3-lab">Optimieren und auswerten</button>`; }
  else if (FAB[b.k]) { const J = fabJobs(b), run = J.find(j => j.s <= now && j.e > now), rdy = fabReady(b), R = fabRecipe(b.k), ok = Object.keys(R.out)[0];
    body += `<div class="cline">${ricon(ok, 18)}${run ? `Läuft · noch <b>${gDur((run.e - now) / 1000)}</b>` : "Wartet auf einen Auftrag"} <small>· ${J.length}/${fabSlots(b)} in der Schlange</small></div>`;
    if (run) body += `<div class="cbar"><i style="width:${((now - run.s) / (run.e - run.s) * 100).toFixed(0)}%;background:${RES[ok].c}"></i></div>`;
    body += `<div class="cbtns">${rdy ? `<button class="btn2 acc sm press" data-act="c3-fcol" data-id="${b.id}">${rdy} fertig · abholen</button>` : ""}<button class="btn2 sm press" data-act="c3-fab" data-id="${b.id}">Produzieren</button></div>`; }
  else if (b.k === "lagerhaus") { body += `<div class="cline">${C3I2.lager}<b>${Math.floor(lagerUsed())}</b>&nbsp;von ${lagerCap()} belegt</div><div class="cbar"><i style="width:${(lagerUsed() / lagerCap() * 100).toFixed(0)}%"></i></div><button class="btn2 sm press" data-act="c3-lager">Lager ansehen</button>`; }
  else if (b.k === "rathaus") { const n = ordersReadyN(); body += `<div class="cline">Stadtstufe ${g.lv} · ${g.xp}/${xpNeed(g.lv)} XP</div><div class="cbtns"><button class="btn2 acc sm press" data-act="c3-orders">Aufträge${n ? ` · ${n} bereit` : ""}</button>${chestReady() ? `<button class="btn2 sm press" data-act="c3-chest">${TIER[chestTier()]} öffnen</button>` : ""}</div>`; }
  else body += `<small class="cnote">${t.d}${t.ew ? ` · ${t.ew * Math.max(1, b.l)} Einwohner` : ""}</small>`;
  return `<div class="ch"><div class="gico" style="${t.f ? `--c:${cssC(t.f)}` : ""}">${gIcon(b.k)}</div><div><b>${t.n}</b><small>${t.deko ? "Deko" : t.lm ? "Wahrzeichen" : `Stufe ${b.l || 0} von ${t.max}`}</small></div><button class="c3x press" data-act="c3-cclose" aria-label="Schließen">${I.close}</button></div>${body}${c3upLine(b)}
    <div class="cfoot">${site ? "" : `<button class="link press" data-act="c3-mv" data-id="${b.id}">${C3I2.move}Verschieben</button>`}<button class="link press" data-act="c3-det" data-id="${b.id}">Details</button></div>`;
}
function c3cardTick(){
  const el = $("#c3card"); if (!el || el.hidden || !C3.card) return; const g = C3.grp[C3.card]; if (!g) return;
  const v = new THREE.Vector3(0, g.userData.top + .2, 0).applyMatrix4(g.matrixWorld).project(C3.cam), w = C3.cv.clientWidth, h = C3.cv.clientHeight;
  let x = (v.x * .5 + .5) * w, y = (-v.y * .5 + .5) * h; const cw = el.offsetWidth, ch = el.offsetHeight;
  x = c3clamp(x - cw / 2, 10, w - cw - 10); y = c3clamp(y - ch - 14, 120, h - ch - 110); el.style.transform = `translate(${x}px,${y}px)`;
}

/* ── Blätter ── */
function c3lagerSheet(){
  const g = eco(), used = lagerUsed(), cap = lagerCap(), tile = k => `<div class="rtile">${ricon(k, 26)}<b>${Math.floor(g.r[k])}</b><small>${RES[k].n}</small></div>`;
  openSheet(`<h2>Lager</h2><p class="sub">${Math.floor(used)} von ${cap} Plätzen belegt · ${lagerL() ? `Lagerhaus Stufe ${lagerL()}` : "noch ohne Lagerhaus – baue eins für mehr Platz"}</p><div class="gbar"><i style="width:${Math.min(100, used / cap * 100)}%;background:var(--accent)"></i></div>
    <h3 class="rh">Grund-Ressourcen</h3><div class="rgrid">${RBASE.filter(k => k !== "daten" && k !== "fach").map(tile).join("")}</div>
    <h3 class="rh">Bauteile aus Fabriken</h3><div class="rgrid">${RPROD.map(tile).join("")}</div>
    <h3 class="rh">Außerhalb des Lagers</h3><div class="rgrid">${tile("daten")}${tile("fach")}</div>
    <p class="legend">Messdaten: höchstens ${extraCap("daten")}. Fachkräfte: höchstens ${extraCap("fach")} (mehr mit höherem Bahnhof). Bau-Beschleuniger: ${g.inv.speed}. Serienschutz: ${g.sh} von ${shCap()}.</p>`);
}
function c3ordersSheet(){
  const g = eco(); ordersTick(); const now = Date.now(), bonus = hasB("buero") ? 1.15 : 1;
  const card = (o, i) => { if (!o || o.wait) return `<div class="ocard wait">${C3I2.orders}<small>Neuer Auftrag in ${gDur(((o && o.wait) - now) / 1000)}</small></div>`;
    const ok = orderOk(o), rew = `<span class="orew"><i class="c3cn sm">₿</i>${fmtB(Math.round(o.rew.b * bonus))} · ${o.rew.xp} XP${o.rew.r ? ` · ${ricon(o.rew.r[0], 14)}${o.rew.r[1]}` : ""}${o.rew.speed ? " · Beschleuniger" : ""}${o.rew.deko ? ` · ${GT[o.rew.deko].n}` : ""}</span>`;
    const need = o.kind === "res" ? costHTML(o.need, undefined, true) : `<div class="gbar" style="margin:6px 0 2px"><i style="width:${Math.min(100, o.c / o.n * 100)}%;background:${o.f ? cssC(o.f) : "var(--accent)"}"></i></div><small>${Math.min(o.c, o.n)} von ${o.n}</small>`;
    return `<div class="ocard${ok ? " ok" : ""}${o.kind === "lern" ? " lern" : ""}"><b>${o.kind === "lern" ? "Lernauftrag" : esc(o.name)}</b><small>${o.kind === "lern" ? esc(o.name) : "braucht"}</small>${need}${rew}
      <div class="obtn"><button class="btn2 ${ok ? "acc " : ""}sm press" data-act="c3-odo" data-i="${i}"${ok ? "" : " data-off=\"1\""}>${o.kind === "lern" ? "Abholen" : "Liefern"}</button><button class="c3x dk press" data-act="c3-odrop" data-i="${i}" aria-label="Verwerfen">${I.x}</button></div></div>`; };
  openSheet(`<h2>Auftragsblatt</h2><p class="sub">Liefere Ressourcen oder erfülle Lernaufträge. Einen Auftrag am Tag darfst du verwerfen.${bonus > 1 ? " Bürohochhaus: +15 % Bitcoin." : ""}</p><div class="ogrid">${g.orders.map(card).join("")}</div>`);
  C3.sheet = "orders";
}
function c3fabSheet(b){
  const R = fabRecipe(b.k), J = fabJobs(b), now = Date.now(), ok = Object.keys(R.out)[0], why = b.l < 1 ? "Noch im Bau" : J.length >= fabSlots(b) ? "Warteschlange voll" : !ecoHave(R.inp) ? "Es fehlen: " + ecoMiss(R.inp) : "";
  const o = eco().opt[b.k] || 0;
  openSheet(`<div class="shh"><div class="gico big">${gIcon(b.k)}</div><div><h2>${GT[b.k].n}</h2><p class="sub" style="margin:0">Stufe ${b.l} · ${fabSlots(b)} Plätze in der Schlange</p></div></div>
    <div class="panel glass"><div class="recipe">${costHTML(R.inp, undefined, true)}<span class="arr">→</span><span class="rcs"><span class="rc">${ricon(ok, 18)}${R.out[ok]}<small>${RES[ok].n}</small></span></span></div><small class="legend">Dauer ${gDur(R.t)} je Lauf · 1 Fachkraft je Lauf</small>
    <button class="cta press" style="margin-top:10px" data-act="c3-fgo" data-id="${b.id}"${why ? " data-off=\"1\"" : ""}>Produktion starten</button>${why ? `<p class="legend" style="text-align:center;margin:6px 0 0">${why}</p>` : ""}</div>
    <div class="list glass">${J.length ? J.map(j => `<div class="row"><div class="round gico">${ricon(ok, 20)}</div><div class="t"><b>${j.out[ok]} ${RES[ok].n}</b><small>${j.e <= now ? "fertig" : j.s > now ? `startet in ${gDur((j.s - now) / 1000)}` : `noch ${gDur((j.e - now) / 1000)}`}</small></div></div>`).join("") : `<div class="row"><div class="t"><small>Nichts in der Schlange.</small></div></div>`}</div>
    ${fabReady(b) ? `<button class="btn2 acc press" style="width:100%;margin-top:10px" data-act="c3-fcol" data-id="${b.id}">${fabReady(b)} fertige Läufe abholen</button>` : ""}
    <h3 class="rh">Optimierungen aus dem Prüflabor</h3><div class="list glass">${FAB[b.k].n.map((n, i) => `<div class="row"><div class="t"><b>${i < o ? "✓ " : ""}${n}</b><small>${OTXT(b.k, i)}</small></div></div>`).join("")}</div>`);
  C3.sheet = "fab:" + b.id;
}
function c3chart(){
  const g = eco(), days = Object.keys(g.stat).sort().slice(-7), sum = (kind, k) => days.reduce((a, d) => a + ((g.stat[d][kind] || {})[k] || 0), 0);
  const ks = RBASE.concat(RPROD).filter(k => sum("p", k) + sum("u", k) + sum("m", k) > 0); if (!ks.length) return `<p class="legend">Noch keine Daten. Sammle Ressourcen und baue, dann zeigt das Labor hier, was knapp wird.</p>`;
  const mx = Math.max(1, ...ks.map(k => Math.max(sum("p", k), sum("u", k)))), score = k => sum("m", k) * 4 + sum("u", k) - sum("p", k), eng = ks.slice().sort((a, b) => score(b) - score(a))[0];
  const rows = ks.map((k, i) => { const y = 8 + i * 30, p = sum("p", k), u = sum("u", k), m = sum("m", k);
    return `<g transform="translate(0 ${y})"><text x="0" y="13" font-size="12" fill="currentColor">${RES[k].n}</text><rect x="104" y="2" width="${(p / mx * 180).toFixed(1)}" height="9" rx="3" fill="${RES[k].c}"/><rect x="104" y="13" width="${(u / mx * 180).toFixed(1)}" height="9" rx="3" fill="${RES[k].c}" opacity=".4"/>${m ? `<text x="292" y="16" font-size="11" fill="#e5342a">${m}× fehlte</text>` : ""}</g>`; }).join("");
  return `<svg viewBox="0 0 350 ${16 + ks.length * 30}" class="lchart">${rows}</svg><p class="legend"><b>Kräftig:</b> hergestellt · <b>blass:</b> verbraucht (letzte 7 Tage). Engpass: <b>${RES[eng].n}</b>${WERK[Object.keys(WERK).find(w => WERK[w].r === eng)] ? ` – mehr ${FACH[WERK[Object.keys(WERK).find(w => WERK[w].r === eng)].f].n} lernen hilft` : ""}.</p>`;
}
function c3labSheet(){
  const g = eco(), now = Date.now(), fabs = Object.keys(FAB).filter(hasB), werke = Object.keys(WERK).filter(hasB), bo = g.boost && g.boost.until > now ? g.boost : null;
  openSheet(`<h2>Prüflabor</h2><p class="sub">${ricon("daten", 16)} ${Math.floor(g.r.daten)} Messdaten · mit Statistik sammelst du mehr</p>
    <h3 class="rh">Auswertung: Was wird knapp?</h3><div class="panel glass">${c3chart()}</div>
    <h3 class="rh">Messkampagne</h3><p class="legend">Für 5 Messdaten produziert ein Werk 2 Stunden lang doppelt.${bo ? ` Läuft gerade: ${GT[bo.k].n}, noch ${gDur((bo.until - now) / 1000)}.` : ""}</p>
    <div class="chips">${werke.filter(k => k !== "vermessung").map(k => `<button class="chip press" data-act="c3-kamp" data-k="${k}">${ricon(WERK[k].r, 14)}${GT[k].n}</button>`).join("") || "<small class='legend'>Erst Werke bauen.</small>"}</div>
    <h3 class="rh">Fabriken optimieren</h3>${fabs.length ? fabs.map(k => { const o = g.opt[k] || 0; return `<div class="panel glass opt"><b>${GT[k].n}</b>${FAB[k].n.map((n, i) => `<div class="orow${i < o ? " done" : ""}"><span>${i < o ? "✓" : i + 1}</span><div><b>${n}</b><small>${OTXT(k, i)}</small></div>${i === o ? `<button class="btn2 acc sm press" data-act="c3-opt" data-k="${k}">${ricon("daten", 14)}${OPTCOST[i][0]} · ₿ ${OPTCOST[i][1]}</button>` : ""}</div>`).join("")}</div>`; }).join("") : `<p class="legend">Sobald du Fabriken hast, machst du sie hier mit Messdaten effizienter.</p>`}`);
  C3.sheet = "lab";
}
function c3chestSheet(out){
  const it = out.items.map(([k, n]) => `<div class="rtile pop">${ricon(k, 26)}<b>+${n}</b><small>${RES[k].n}</small></div>`).join("");
  openSheet(`<div class="chest t${out.tier}">${C3I2.chest}</div><h2 style="text-align:center">${TIER[out.tier]}</h2><p class="sub" style="text-align:center">Tagesziel geschafft${out.tier ? ` · ${out.tier === 2 ? "30" : "7"}+ Tage Serie` : ""}</p>
    <div class="rgrid">${it}<div class="rtile pop"><i class="c3cn">₿</i><b>+${out.b}</b><small>Bitcoin</small></div>${out.speed ? `<div class="rtile pop">${C3I.crew}<b>+1</b><small>Bau-Beschleuniger</small></div>` : ""}${out.deko ? `<div class="rtile pop">${gIcon(out.deko)}<b>+1</b><small>${GT[out.deko].n}</small></div>` : ""}${out.sh ? `<div class="rtile pop">${C3I2.chest}<b>+1</b><small>Serienschutz</small></div>` : ""}</div>
    <button class="cta press" data-act="close" style="margin-top:14px">Super</button>`);
}

/* ── Bauleiste mit Kategorien ── */
function c3drawerHTML(){
  const g = eco(), s = C3.sel, cat = C3.cat || 0;
  const tabs = GCAT.map((c, i) => `<button class="c3tab press${i === cat ? " on" : ""}" data-act="c3-cat" data-i="${i}">${c[0]}</button>`).join("");
  const cards = GCAT[cat][1].map(k => { const t = GT[k], why = gReq(k, 1), free = t.deko && (g.inv.deko[k] || 0) > 0, rc = free ? {} : ecoCost(k, 1), c = free ? 0 : t.cost[0], poor = !why && g.coins < c, lack = !why && !ecoHave(rc);
    return `<button class="c3card press${why || poor || lack ? " off" : ""}" data-act="c3-card" data-k="${k}" style="${t.f ? `--c:${cssC(t.f)}` : ""}"><div class="gico">${gIcon(k)}</div><b>${t.n}</b>${free ? `<span class="c3pr">${g.inv.deko[k]}× gratis</span>` : costHTML(rc, c)}<small>${why || (t.time[0] ? `Bauzeit ${gDur(t.time[0])} · ` : "") + t.d}</small></button>`; }).join("");
  return `<div class="c3dh"><div><b>${s ? `Bauen auf Feld ${s[0] + 1}·${s[1] + 1}` : "Was möchtest du bauen?"}</b><small>Du hast ₿ ${fmtB(g.coins)}${s ? "" : " · danach Fläche antippen"}</small></div><button class="c3x press" data-act="c3-drawer" aria-label="Schließen">${I.close}</button></div><div class="c3tabs">${tabs}</div><div class="c3cards">${cards}</div>`;
}

/* ── Blasen über Werken und Fabriken ── */
function c3bubs(){
  const out = [];
  G().b.forEach(b => { if (b.until > Date.now() && b.l < 1) return;
    if (WERK[b.k] && (b.st || 0) >= 1) out.push([b.id, "w", `${ricon(WERK[b.k].r, 18)}<b>${Math.floor(b.st)}</b>`]);
    else if (FAB[b.k] && fabReady(b)) out.push([b.id, "f", `${ricon(Object.keys(FAB[b.k].out)[0], 18)}<b>✓</b>`]);
    else if (WERK[b.k] && werkIdle(b)) out.push([b.id, "z", "<b>Zz</b>"]);
    if (b.k === "rathaus" && chestReady()) out.push([b.id, "c", `${C3I2.chest}<b>Truhe</b>`]); });
  return out;
}
function c3bubSync(){
  const box = $("#c3labs"); if (!box) return; C3.bub = C3.bub || {}; const want = {};
  c3bubs().forEach(([id, kind, html]) => { const key = id + kind; want[key] = 1; let o = C3.bub[key];
    if (!o) { const el = document.createElement("button"); el.className = "c3bub press k" + kind; if (kind !== "z") { el.dataset.act = kind === "c" ? "c3-chest" : kind === "w" ? "c3-col" : "c3-fcol"; el.dataset.id = id; } box.appendChild(el); o = C3.bub[key] = {el, id, kind}; }
    if (o.html !== html) { o.el.innerHTML = html; o.html = html; } });
  for (const k in C3.bub) if (!want[k]) { C3.bub[k].el.remove(); delete C3.bub[k]; }
}
function c3bubTick(){
  if (!C3.bub) return; const v = new THREE.Vector3(), w = C3.cv.clientWidth, h = C3.cv.clientHeight, t = performance.now() / 1000;
  for (const k in C3.bub) { const o = C3.bub[k], g = C3.grp[o.id]; if (!g || (C3.drag && C3.drag.b.id === o.id)) { o.el.style.display = "none"; continue; }
    v.set(o.kind === "c" ? .55 : 0, g.userData.top + (o.kind === "c" ? .1 : .5), o.kind === "c" ? .6 : 0).applyMatrix4(g.matrixWorld).project(C3.cam);
    if (v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1) { o.el.style.display = "none"; continue; }
    o.el.style.display = ""; o.el.style.transform = `translate(${(v.x * .5 + .5) * w}px,${(-v.y * .5 + .5) * h + Math.sin(t * 3 + o.id) * 3}px)`; }
}
/* Kisten fliegen ins Lagerhaus */
function c3crates(b, n, res){
  const from = C3.grp[b.id]; if (!from || !n) return; const lb = G().b.find(o => o.k === "lagerhaus" && o.l > 0) || G().b.find(o => o.k === "rathaus"), to = lb && C3.grp[lb.id]; if (!to) return;
  const A = new THREE.Vector3(0, from.userData.top, 0).applyMatrix4(from.matrixWorld), B = new THREE.Vector3(0, to.userData.top * .7, 0).applyMatrix4(to.matrixWorld);
  const mat = new THREE.MeshStandardMaterial({color: new THREE.Color(RES[res].c), flatShading: true, roughness: .7});
  for (let i = 0; i < Math.min(6, n); i++) { const m = new THREE.Mesh(C3.G.crate || (C3.G.crate = c3boxG(.16, .16, .16)), mat); m.position.copy(A); m.visible = false; C3.sc.add(m);
    C3.fx.push({m, kind: "crate", A: A.clone().add(new THREE.Vector3((Math.random() - .5) * .3, 0, (Math.random() - .5) * .3)), B, t: -i * .12, life: 9, id: lb.id, own: i === 0 ? mat : null}); }
}
function c3crateTick(f, dt){
  f.t += dt; const k = f.t / 1.1; if (k < 0) return; f.m.visible = true;
  if (k >= 1) { f.life = 0; c3wobble(f.id, .05); return; }
  const mid = f.A.clone().lerp(f.B, .5); mid.y += 2.2; const a = f.A.clone().lerp(mid, k), b2 = mid.clone().lerp(f.B, k); f.m.position.copy(a.lerp(b2, k)); f.m.rotation.set(k * 5, k * 4, 0);
}

/* ── 3D-Truhe am Rathaus ── */
function c3chestObj(){
  if (C3.chest) return C3.chest; const K = new C3Kit(); K.box("wood", .3, .16, .2); K.box("gold", .31, .03, .21, 0, .07, 0); K.box("gold", .04, .17, .21, -.1, 0, 0); K.box("gold", .04, .17, .21, .1, 0, 0);
  K.put("wood", new THREE.CylinderGeometry(.1, .1, .3, 10, 1, false, 0, Math.PI).rotateZ(Math.PI / 2), 0, .16, 0); K.box("gold", .05, .06, .02, 0, .1, .105);
  const g = K.build(); const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({color: 0xffd36a, map: C3.T.glow, transparent: true, opacity: .7, depthWrite: false, blending: THREE.AdditiveBlending}));
  glow.position.y = .02; g.add(glow); C3.sc.add(g); C3.chest = g; return g;
}
function c3chestTick(t){
  const rh = G().b.find(b => b.k === "rathaus"), on = !!(rh && chestReady() && C3.grp[rh.id]); if (!on) { if (C3.chest) C3.chest.visible = false; return; }
  const c = c3chestObj(), g = C3.grp[rh.id]; c.visible = true; const p = new THREE.Vector3(.55, 0, .6).applyMatrix4(g.matrixWorld); c.position.set(p.x, .07 + Math.abs(Math.sin(t * 2.5)) * .06, p.z); c.rotation.y = g.rotation.y + Math.sin(t) * .2;
}

/* ── Verschieben: lange drücken und ziehen, Tauschen, Rückgängig ── */
function c3lotAt(p){ let best = null, bd = 1.3; for (let i = 0; i < 64; i++) { const x = i % 8, y = i / 8 | 0, d = Math.hypot(c3lot(x) - p.x, c3lot(y) - p.z); if (d < bd) { bd = d; best = [x, y]; } } return best; }
function c3dragStart(b){
  if (b.until > Date.now()) { toast("Baustellen lassen sich nicht verschieben"); return false; }
  const grp = C3.grp[b.id]; if (!grp) return false; c3cardClose(); if (C3.drawer) c3drawer(false);
  C3.drag = {b, grp, tx: b.x, ty: b.y}; C3.sel = [b.x, b.y]; C3.hlKey = ""; c3hl(); grp.position.y = .45; return true;
}
function c3dragMove(cx, cy){
  const D = C3.drag, r = C3.cv.getBoundingClientRect(); C3.ndc.set((cx - r.left) / r.width * 2 - 1, -(cy - r.top) / r.height * 2 + 1); C3.rc.setFromCamera(C3.ndc, C3.cam);
  const p = new THREE.Vector3(); if (!C3.rc.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), p)) return;
  D.grp.position.x += (p.x - D.grp.position.x) * .5; D.grp.position.z += (p.z - D.grp.position.z) * .5; const l = c3lotAt(p); if (l && (l[0] !== D.tx || l[1] !== D.ty)) { D.tx = l[0]; D.ty = l[1]; C3.sel = l; C3.hlKey = ""; c3hl(); }
}
function c3dragEnd(){
  const D = C3.drag; C3.drag = null; if (!D) return; const b = D.b, g = G(), o = g.b.find(x => x.x === D.tx && x.y === D.ty && x.id !== b.id);
  const back = () => { D.grp.position.set(c3lot(b.x), .06, c3lot(b.y)); C3.sel = null; C3.hlKey = ""; c3hl(); };
  if (D.tx === b.x && D.ty === b.y) return back();
  if (o && o.until > Date.now()) { toast("Baustellen lassen sich nicht verschieben"); return back(); }
  C3.undo = [[b.id, b.x, b.y]]; if (o) { C3.undo.push([o.id, o.x, o.y]); o.x = b.x; o.y = b.y; } b.x = D.tx; b.y = D.ty; save();
  C3.sel = null; C3.hlKey = ""; c3sync(); c3undoShow(o ? `${GT[b.k].n} und ${GT[o.k].n} getauscht` : `${GT[b.k].n} verschoben`);
}
function c3undoShow(txt){ const el = $("#c3undo"); el.innerHTML = `<span>${txt}</span><button class="press" data-act="c3-undo">Rückgängig</button>`; el.hidden = false; clearTimeout(C3.undoT); C3.undoT = setTimeout(() => { el.hidden = true; C3.undo = null; }, 6000); }
function c3swapTo(b, x, y){ const g = G(), o = g.b.find(q => q.x === x && q.y === y && q.id !== b.id); if (o && o.until > Date.now()) { toast("Baustellen lassen sich nicht verschieben"); return; }
  C3.undo = [[b.id, b.x, b.y]]; if (o) { C3.undo.push([o.id, o.x, o.y]); o.x = b.x; o.y = b.y; } b.x = x; b.y = y; save(); GMOVE = null; C3.hlKey = ""; c3sync(); c3hud(); c3undoShow(o ? "Getauscht" : `${GT[b.k].n} verschoben`); }

/* ── Aktionen ── */
function c3Act23(a, ds){
  const g = eco(), b = ds.id ? g.b.find(o => o.id === +ds.id) : null;
  if (ds.off) { if (a === "c3-up" && b) { const L = b.l + 1, w = gReq(b.k, L), rc = ecoCost(b.k, L); toast(w || (g.coins < GT[b.k].cost[L - 1] ? `Noch ${fmtB(GT[b.k].cost[L - 1] - g.coins)} ₿ zu wenig` : "Es fehlen: " + ecoMiss(rc, true))); }
    else if (a === "c3-fgo" && b) toast(fabStart(b) || "Gestartet"); else if (a === "c3-odo") { const o = g.orders[+ds.i]; toast(o && o.kind === "res" ? "Es fehlen: " + ecoMiss(o.need, true) : "Noch nicht geschafft"); } return true; }
  if (a === "c3-cclose") c3cardClose();
  else if (a === "c3-up" && b) { gAct("g-up", {id: b.id}); C3.shown = G().coins; c3cardDraw(); }
  else if (a === "c3-det" && b) { c3cardClose(); gBuildingSheet(b); }
  else if (a === "c3-mv" && b) { c3cardClose(); GMOVE = b.id; C3.hlKey = ""; c3hl(); c3hud(); }
  else if (a === "c3-col" && b) { const n = ecoCollect(b); if (n) { c3crates(b, n, WERK[b.k].r); toast(`+${n} ${RES[WERK[b.k].r].n}`); } c3cardDraw(); c3bubSync(); }
  else if (a === "c3-fcol" && b) { const res = Object.keys(FAB[b.k].out)[0], n = fabCollect(b); if (n) { c3crates(b, n, res); toast(`+${n} ${RES[res].n}`); } c3cardDraw(); c3bubSync(); if (C3.sheet === "fab:" + b.id && !$("#sheet").hidden) c3fabSheet(b); }
  else if (a === "c3-fab" && b) { c3cardClose(); c3fabSheet(b); }
  else if (a === "c3-fgo" && b) { const e = fabStart(b); toast(e || `${GT[b.k].n}: Produktion gestartet`); c3fabSheet(b); C3.keys[b.id] = ""; }
  else if (a === "c3-lager") { c3cardClose(); c3lagerSheet(); }
  else if (a === "c3-orders") { c3cardClose(); c3ordersSheet(); }
  else if (a === "c3-odo") { const e = orderDeliver(+ds.i); if (e) toast(e); else { toast("Auftrag erledigt"); C3.shown = C3.shown; } c3ordersSheet(); c3hud(); }
  else if (a === "c3-odrop") { const e = orderDrop(+ds.i); toast(e || "Auftrag verworfen – ein neuer kommt in 10 Minuten"); c3ordersSheet(); }
  else if (a === "c3-lab") { c3cardClose(); c3labSheet(); }
  else if (a === "c3-opt") { const e = optBuy(ds.k); toast(e || "Optimierung freigeschaltet"); c3labSheet(); c3hud(); }
  else if (a === "c3-kamp") { const e = kampagne(ds.k); toast(e || `Messkampagne: ${GT[ds.k].n} produziert 2 Stunden doppelt`); c3labSheet(); }
  else if (a === "c3-chest") { c3cardClose(); const out = chestOpen(); if (out) { c3chestSheet(out); c3hud(); } }
  else if (a === "c3-crew") { if (g.crew3) return true; if (g.r.fach < 10) toast(`Es fehlen ${10 - Math.floor(g.r.fach)} Fachkräfte`); else if (g.coins < 400) toast(`Noch ${fmtB(400 - g.coins)} ₿ zu wenig`); else { g.r.fach -= 10; g.coins -= 400; g.crew3 = 1; save(); toast("Dritter Bautrupp eingestellt"); c3cardDraw(); c3hud(); } }
  else if (a === "c3-speed" && b) { if (g.inv.speed > 0 && b.until > Date.now()) { g.inv.speed--; b.until = Math.max(Date.now(), b.until - 1800e3); save(); gFinalize(); toast("Bau um 30 Minuten beschleunigt"); c3sync(); c3cardDraw(); } }
  else if (a === "c3-cat") { C3.cat = +ds.i; $("#c3drawer").innerHTML = c3drawerHTML(); }
  else if (a === "c3-umbau") { C3.umbau = !C3.umbau; c3cardClose(); if (C3.drawer) c3drawer(false); c3hud(); toast(C3.umbau ? "Umbau-Modus: Gebäude einfach ziehen" : "Umbau beendet"); }
  else if (a === "c3-undo") { (C3.undo || []).forEach(([id, x, y]) => { const o = g.b.find(q => q.id === id); if (o) { o.x = x; o.y = y; } }); C3.undo = null; save(); $("#c3undo").hidden = true; c3sync(); }
  else return false;
  return true;
}
