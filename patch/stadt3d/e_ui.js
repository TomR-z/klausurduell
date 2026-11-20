
/* ── Oberfläche über der 3D-Stadt ── */
const C3I = {
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.6v.1"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/></svg>',
  ew: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3.4 2.8-5 5.5-5s4.9 1.6 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.2c2.4 0 4 1.4 4.5 4.3"/></svg>',
  crew: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15a8 8 0 0 1 16 0zM3 15h18M10 7V5h4v2"/><path d="M8 19h8"/></svg>',
  crane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21V4M4 21h8M7 4l13 3H7M17 7v5M15.5 12h3v2.5h-3z"/><path d="M7 9l3-2M7 13l3-3"/></svg>'
};
function c3dom(){
  if ($("#c3")) return;
  const el = document.createElement("section"); el.className = "c3"; el.id = "c3"; el.hidden = true; el.setAttribute("aria-label", "Deine Stadt");
  el.innerHTML = `<canvas id="c3cv"></canvas><div class="c3labs" id="c3labs"></div><div class="c3tag" id="c3tag">Neuland<small>bald mit Brücke</small></div>
    <div class="c3top"><button class="c3btn c3g press" data-act="c3-back" aria-label="Zurück">${C3I.back}</button>
      <div class="c3mid"><div class="c3chips"><div class="c3chip c3g" id="c3coinChip"><i class="c3cn">₿</i><b id="c3coins">0</b></div><div class="c3chip c3g">${C3I.ew}<b id="c3ew">0</b></div><div class="c3chip c3g">${C3I.crew}<b id="c3crew">0/2</b></div></div><div class="c3sub" id="c3sub"></div></div>
      <div class="c3col"><button class="c3btn c3g press" data-act="g-info" aria-label="So verdienst du Bitcoin">${C3I.info}</button><button class="c3btn c3g press" data-act="c3-home" aria-label="Ansicht zurücksetzen">${C3I.home}</button><button class="c3btn c3g press" id="c3umb" data-act="c3-umbau" aria-label="Stadt umbauen">${C3I2.move}</button></div></div>
    <div class="c3wel c3g" id="c3wel" hidden></div>
    <div class="c3hint c3g" id="c3hint" hidden></div>
    <div class="c3drawer c3g" id="c3drawer" hidden></div>
    <div class="c3bot" id="c3bot"><button class="c3round learn press" data-act="start-mix">${I.play}<span>Lernen</span></button><div class="c3mini"><button class="c3sm c3g press" data-act="c3-orders">${C3I2.orders}<span>Aufträge</span><em id="c3ob" hidden></em></button><button class="c3sm c3g press" data-act="c3-lager">${C3I2.lager}<span>Lager</span></button></div><button class="c3round build press" data-act="c3-drawer">${C3I.crane}<span>Bauen</span></button></div>
    <div class="c3card2 c3g" id="c3card" hidden></div><div class="c3undo c3g" id="c3undo" hidden></div>
    <div class="c3fly" id="c3fly"></div>`;
  document.body.insertBefore(el, $("#scrim"));
  window.addEventListener("resize", () => { if (C3.open) c3resize(); });
  document.addEventListener("visibilitychange", () => { if (C3.open && !document.hidden) { C3.last = 0; c3sync(); } });
}
function c3hud(){
  if (!$("#c3")) return;
  const g = G(), busy = gBusy(), tg = gToday();
  if (C3.shown === undefined) C3.shown = g.seenC !== undefined ? Math.min(g.seenC, g.coins) : g.coins;
  if (g.coins > C3.shown + .5 && !C3.counting) c3count(C3.shown, g.coins); else if (!C3.counting) { C3.shown = g.coins; $("#c3coins").textContent = fmtB(g.coins); if (g.seenC !== g.coins) { g.seenC = g.coins; save(); } }
  $("#c3ew").textContent = fmtB(gEinw()); $("#c3crew").textContent = `${busy.length}/${gTr()}`;
  const st = streak(), eg = eco(); $("#c3sub").innerHTML = `Stadtstufe ${eg.lv} <i class="xpb"><em style="width:${Math.min(100, eg.xp / xpNeed(eg.lv) * 100).toFixed(0)}%"></em></i> · +${fmtB(tg.e)} ₿ heute${st ? ` · ${st} ${st === 1 ? "Tag" : "Tage"} Serie` : ""}`;
  const on = ordersReadyN(), ob = $("#c3ob"); ob.hidden = !on; ob.textContent = on; $("#c3umb").classList.toggle("on", !!C3.umbau);
  const w = $("#c3wel"); w.hidden = !g.welcome;
  if (g.welcome) w.innerHTML = `<h2>Willkommen in deiner Stadt</h2><p>Für dein bisheriges Lernen bekommst du ein Startkapital. Ab jetzt bringt jede Antwort Bitcoin – richtige mehr, Serien und schwere Fragen noch mehr.</p><button class="cta press" data-act="g-welcome">₿ ${fmtB(g.welcome)} abholen</button>`;
  const h = $("#c3hint"), mv = GMOVE && g.b.find(b => b.id === GMOVE);
  h.hidden = !(C3.place || mv || C3.umbau);
  if (C3.umbau && !C3.place && !mv) h.innerHTML = `<span><b>Umbau-Modus:</b> Gebäude ziehen, auf ein anderes ziehen tauscht</span><button class="btn2 sm acc press" data-act="c3-umbau">Fertig</button>`;
  if (C3.place) h.innerHTML = `<span>Tippe auf eine freie Fläche für <b>${GT[C3.place].n}</b></span><button class="c3x press" data-act="c3-cancel" aria-label="Abbrechen">${I.close}</button>`;
  else if (mv) h.innerHTML = `<span>Wohin mit <b>${GT[mv.k].n}</b>? Fläche antippen – auf einem Gebäude wird getauscht</span><button class="c3x press" data-act="c3-cancel" aria-label="Abbrechen">${I.close}</button>`;
  if (C3.drawer) $("#c3drawer").innerHTML = c3drawerHTML();
  $("#c3bot").classList.toggle("hide", C3.drawer || !!g.welcome);
  c3bubSync(); if (C3.card) c3cardDraw();
}
function c3drawer(on){
  C3.drawer = on; const d = $("#c3drawer");
  if (on) { d.innerHTML = c3drawerHTML(); d.hidden = false; requestAnimationFrame(() => d.classList.add("show")); }
  else { d.classList.remove("show"); setTimeout(() => { if (!C3.drawer) d.hidden = true; }, 280); C3.sel = null; }
  c3hl(); c3hud();
}
function c3buildAt(k, x, y){
  const g = G(), t = GT[k], why = gReq(k, 1), free = t.deko && (eco().inv.deko[k] || 0) > 0;
  if (why) { toast(why); return; } if (!free && g.coins < t.cost[0]) { toast(`Noch ${fmtB(t.cost[0] - g.coins)} ₿ – lerne ein paar Fragen`); return; }
  GSEL = [x, y]; C3.place = null; C3.sel = null; if (C3.drawer) c3drawer(false);
  gAct("g-build", {k}); C3.shown = G().coins; c3sync(); c3focus(x, y, 9);
}
function c3Act(a, ds){
  if (c3Act23(a, ds)) return true;
  if (a === "c3-back") { C3.place = null; C3.sel = null; GMOVE = null; tab = C3.prev && C3.prev !== "stadt" ? C3.prev : "heute"; render(); }
  else if (a === "c3-drawer") c3drawer(!C3.drawer);
  else if (a === "c3-home") c3fly(c3fit(C3.cam.aspect, C3.cam.fov));
  else if (a === "c3-cancel") { C3.place = null; GMOVE = null; C3.hlKey = ""; c3hl(); c3hud(); }
  else if (a === "c3-card") { const k = ds.k, t = GT[k], why = gReq(k, 1);
    const free = t.deko && (eco().inv.deko[k] || 0) > 0, rc = free ? {} : ecoCost(k, 1);
    if (why) { toast(why); return true; } if (!free && G().coins < t.cost[0]) { toast(`Noch ${fmtB(t.cost[0] - G().coins)} ₿ – lerne ein paar Fragen`); return true; }
    if (!ecoHave(rc)) { toast("Es fehlen: " + ecoMiss(rc, true)); return true; }
    if (C3.sel) c3buildAt(k, C3.sel[0], C3.sel[1]); else { C3.place = k; c3drawer(false); c3hud(); } }
  else return false;
  return true;
}
/* Münzen fliegen in den Zähler */
function c3count(from, to){
  C3.counting = true; const el = $("#c3coins"), chip = $("#c3coinChip"), d = to - from, n = c3clamp(Math.ceil(d / 12), 3, 14), t0 = performance.now(), dur = 900 + n * 70;
  const fly = $("#c3fly"), s = $(".c3round.learn").getBoundingClientRect(), e = chip.getBoundingClientRect();
  const sx = s.left + s.width / 2, sy = s.top + s.height / 2, ex = e.left + 22, ey = e.top + e.height / 2;
  for (let i = 0; i < n; i++) { const c = document.createElement("i"); c.className = "c3c"; c.textContent = "₿"; c.style.left = sx + "px"; c.style.top = sy + "px"; fly.appendChild(c);
    const mx = (sx + ex) / 2 + (Math.random() - .5) * 160, my = Math.min(sy, ey) + (sy - ey) * .35 + (Math.random() - .5) * 80;
    const an = c.animate([{transform: "translate(-50%,-50%) scale(.4)", opacity: 0}, {transform: `translate(calc(${mx - sx}px - 50%),calc(${my - sy}px - 50%)) scale(1.15)`, opacity: 1, offset: .45}, {transform: `translate(calc(${ex - sx}px - 50%),calc(${ey - sy}px - 50%)) scale(.7)`, opacity: .9}],
      {duration: 850, delay: i * 70, easing: "cubic-bezier(.45,0,.3,1)", fill: "both"});
    an.onfinish = () => { c.remove(); chip.classList.remove("pulse"); void chip.offsetWidth; chip.classList.add("pulse"); }; }
  const step = now => { const k = c3clamp((now - t0) / dur, 0, 1); el.textContent = fmtB(from + d * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step); else { C3.counting = false; C3.shown = to; const g = G(); g.seenC = g.coins; save(); if (g.coins !== to) c3hud(); } };
  requestAnimationFrame(step); if (C3.init) c3coinRain(c3clamp(Math.ceil(d / 8), 4, 22));
}
/* Bauschilder mit Restzeit und Stufen */
function c3labsSync(){
  const box = $("#c3labs"), now = Date.now(), want = {};
  G().b.forEach(b => { const site = b.until > now, key = site ? "s" : b.k === "park" ? "" : "l" + b.l; if (!key) return; want[b.id] = 1;
    let L = C3.labs[b.id]; if (L && L.key !== key) { L.el.remove(); L = null; }
    if (!L) { const el = document.createElement("div"); el.className = site ? "c3lab" : "c3lv";
      el.innerHTML = site ? `<b class="gtime" data-id="${b.id}">${gDur((b.until - now) / 1000)}</b><i><em></em></i>` : `<b>${b.l}</b>`; box.appendChild(el); L = C3.labs[b.id] = {el, key, b}; }
    L.b = b; });
  for (const id in C3.labs) if (!want[id]) { C3.labs[id].el.remove(); delete C3.labs[id]; }
}
function c3labsTick(){
  const v = new THREE.Vector3(), w = C3.cv.clientWidth, h = C3.cv.clientHeight, now = Date.now(), near = C3CAM.r < 13;
  for (const id in C3.labs) { const L = C3.labs[id], g = C3.grp[id]; if (!g) continue; const site = L.key === "s";
    if (!site && !near) { L.el.style.display = "none"; continue; }
    v.set(0, g.userData.top + (site ? .35 : .18), 0).applyMatrix4(g.matrixWorld); v.project(C3.cam);
    if (v.z > 1 || Math.abs(v.x) > 1.2 || Math.abs(v.y) > 1.2) { L.el.style.display = "none"; continue; }
    L.el.style.display = ""; L.el.style.transform = `translate(${(v.x * .5 + .5) * w}px,${(-v.y * .5 + .5) * h}px)`;
    if (site) { const b = L.b, p = c3clamp((now - b.from) / Math.max(1, b.until - b.from), 0, 1); L.el.lastChild.firstChild.style.width = (p * 100).toFixed(1) + "%"; } }
  const tg = $("#c3tag"); v.set(0, 1.2, c3zr(0) - 9).project(C3.cam);
  if (v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1 || C3CAM.r < 7) tg.style.display = "none"; else { tg.style.display = ""; tg.style.transform = `translate(${(v.x * .5 + .5) * w}px,${(-v.y * .5 + .5) * h}px)`; }
}
/* Vorschaubild für „Heute“ */
function c3snap(){
  if (!C3.init) return;
  try { const W = 1200, H = 680, rt = C3.rt || (C3.rt = new THREE.WebGLRenderTarget(W, H)), cam = new THREE.PerspectiveCamera(34, W / H, .1, 420), v = c3fit(W / H, 34), sp = Math.sin(v.po);
    v.r = Math.max(v.r * .9, 11); cam.position.set(v.tx + v.r * sp * Math.sin(v.az), v.r * Math.cos(v.po) + .4, v.tz + v.r * sp * Math.cos(v.az)); cam.lookAt(v.tx, .4, v.tz);
    const hid = [C3.hl.visible]; C3.hl.visible = false; C3.r.setRenderTarget(rt); C3.r.render(C3.sc, cam); const buf = new Uint8Array(W * H * 4); C3.r.readRenderTargetPixels(rt, 0, 0, W, H, buf); C3.r.setRenderTarget(null); C3.hl.visible = hid[0];
    const t = document.createElement("canvas"); t.width = W; t.height = H; const tx = t.getContext("2d"), img = tx.createImageData(W, H);
    for (let y = 0; y < H; y++) img.data.set(buf.subarray((H - 1 - y) * W * 4, (H - y) * W * 4), y * W * 4); tx.putImageData(img, 0, 0);
    const c = document.createElement("canvas"); c.width = 600; c.height = 340; const x = c.getContext("2d"), gr = x.createLinearGradient(0, 0, 0, 340);
    gr.addColorStop(0, C3.skyTop || "#3d8fe2"); gr.addColorStop(.62, C3.skyHor || "#cde9ff"); x.fillStyle = gr; x.fillRect(0, 0, 600, 340); x.drawImage(t, 0, 0, 600, 340);
    const url = c.toDataURL("image/jpeg", .74); C3.snapUrl = url; localStorage.setItem("klausurduell.stadtbild", url); } catch (e) {}
}
function c3snapUrl(){ if (C3.snapUrl) return C3.snapUrl; try { return C3.snapUrl = localStorage.getItem("klausurduell.stadtbild") || ""; } catch (e) { return ""; } }

/* ── Öffnen, Schließen, Schleife ── */
function c3Open(){
  c3dom(); const el = $("#c3");
  if (!C3.open) { el.hidden = false; document.body.classList.add("c3on"); C3.open = true;
    try { if (!C3.init) c3setup(); } catch (e) { console.error(e); C3.ok = false; C3.open = false; el.hidden = true; document.body.classList.remove("c3on"); render(); return; }
    c3resize(); c3day(); C3.last = 0; cancelAnimationFrame(C3.raf); C3.raf = requestAnimationFrame(c3loop);
    G().news = false; ecoDaily(); if (!c3snapUrl()) setTimeout(() => { if (C3.open) c3snap(); }, 1500); }
  c3sync(); c3hud();
}
function c3Close(){
  if (!C3.open) return; C3.open = false; cancelAnimationFrame(C3.raf);
  if (C3.drawer) { C3.drawer = false; $("#c3drawer").hidden = true; $("#c3drawer").classList.remove("show"); } C3.place = null; C3.sel = null; C3.umbau = false; c3cardClose();
  c3snap(); $("#c3").hidden = true; document.body.classList.remove("c3on");
}
function c3Refresh(){ if (C3.open) { c3sync(); c3hud(); } }
function c3loop(ts){
  if (!C3.open) return; C3.raf = requestAnimationFrame(c3loop);
  const dt = C3.last ? Math.min(.05, (ts - C3.last) / 1000) : .016; C3.last = ts;
  if (!$("#quiz").hidden || document.hidden) return;
  C3.t += dt; const t = C3.t;
  c3camTick(dt); if ((C3.dayT = (C3.dayT || 0) - dt) <= 0) { C3.dayT = 1; c3day(); }
  C3SWAY.value = t; c3waterTick(C3.water, t);
  if ((C3.syncT = (C3.syncT || 0) - dt) <= 0) { C3.syncT = 1; c3sync(); }
  C3.hlMat.opacity = .22 + .14 * Math.sin(t * 4); C3.selMat.opacity = .65 + .3 * Math.sin(t * 5);
  c3animTick(dt, t); c3agentsTick(dt, t); c3fxTick(dt, t); c3labsTick(); c3bubTick(); c3cardTick(); c3chestTick(t);
  C3.r.render(C3.sc, C3.cam);
  /* langsames Gerät: Auflösung schrittweise senken */
  C3.pf = (C3.pf || 0) + dt; C3.pn = (C3.pn || 0) + 1;
  if (C3.pf > 2.5) { const avg = C3.pf / C3.pn, pr = C3.r.getPixelRatio(); C3.pf = 0; C3.pn = 0;
    if (avg > .034 && pr > 1) { C3.r.setPixelRatio(Math.max(1, pr - .25)); c3resize(); } }
}
