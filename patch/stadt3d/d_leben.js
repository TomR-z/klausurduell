
/* ── Baustelle ── */
function c3scaffold(bb){
  const K = new C3Kit(), x0 = bb.min.x - .09, x1 = bb.max.x + .09, z0 = bb.min.z - .09, z1 = bb.max.z + .09, top = Math.max(.42, Math.min(bb.max.y * .88, 2.4));
  const pts = (a, b) => { const n = Math.max(2, Math.round((b - a) / .42)); return Array.from({length: n + 1}, (_, i) => a + (b - a) * i / n); };
  for (const x of pts(x0, x1)) for (const z of [z0, z1]) K.box("scaf", .016, top + .14, .016, x, 0, z);
  for (const z of pts(z0, z1).slice(1, -1)) for (const x of [x0, x1]) K.box("scaf", .016, top + .14, .016, x, 0, z);
  for (let y = .3; y <= top + .01; y += .3) {
    K.box("plank", x1 - x0, .014, .085, (x0 + x1) / 2, y, z1 - .045); K.box("plank", x1 - x0, .014, .085, (x0 + x1) / 2, y, z0 + .045);
    K.box("plank", .085, .014, z1 - z0 - .17, x1 - .045, y, (z0 + z1) / 2); K.box("plank", .085, .014, z1 - z0 - .17, x0 + .045, y, (z0 + z1) / 2);
    K.box("orange", x1 - x0, .012, .012, (x0 + x1) / 2, y + .15, z1); K.box("orange", x1 - x0, .012, .012, (x0 + x1) / 2, y + .15, z0);
    K.box("orange", .012, .012, z1 - z0, x1, y + .15, (z0 + z1) / 2); K.box("orange", .012, .012, z1 - z0, x0, y + .15, (z0 + z1) / 2);
  }
  K.beam("scaf", [x0, .02, z1], [x1, top, z1], .012); K.beam("scaf", [x1, .02, z0], [x1, top, z1], .012); K.beam("scaf", [x0, .02, z0], [x0, top, z1], .012);
  const g = K.build(); g.userData.top = top; return g;
}
function c3fence(){
  const K = new C3Kit(), s = .9, h = .17;
  K.box("fenceM", 1.8, h, .01, 0, .025, -s); K.box("fenceM", .01, h, 1.8, s, .025, 0); K.box("fenceM", .01, h, 1.8, -s, .025, 0);
  K.box("fenceM", .58, h, .01, -.61, .025, s); K.box("fenceM", .58, h, .01, .61, .025, s);
  for (let v = -s; v <= s + .01; v += .45) { K.box("fenceR", .05, .03, .04, v, 0, -s); K.box("fenceR", .04, .03, .05, s, 0, v); K.box("fenceR", .04, .03, .05, -s, 0, v); if (Math.abs(v) > .3) K.box("fenceR", .05, .03, .04, v, 0, s); }
  K.box("yellow", .24, .1, .012, -.55, .08, s + .01); K.box("dark", .18, .012, .013, -.55, .13, s + .012);
  return K.build(false);
}
function c3stock(K){
  K.push(.66, 0, .68); K.box("wood", .22, .03, .22); K.box("brick", .18, .12, .18, 0, .03, 0); K.pop();
  K.push(.68, 0, .36); K.box("wood", .22, .03, .22); for (let i = 0; i < 3; i++) K.box("timber", .2, .03, .2, 0, .03 + i * .032, 0, i * .5); K.pop();
  K.box("white", .12, .05, .09, .38, 0, .8); K.box("white", .12, .05, .09, .38, .05, .78);
}
function c3pit(){
  const K = new C3Kit(); K.box("dirt", 1.8, .012, 1.8); K.box("pit", 1.25, .016, 1.1, -.1, 0, -.15);
  for (const [x, z, r] of [[.55, .5, .32], [.68, .05, .22]]) K.cone("dirt", r, r * .7, x, 0, z, 6);
  for (const [x, z] of [[-.72, -.7], [.52, -.7], [-.72, .4], [.52, .4]]) { K.box("wood", .02, .1, .02, x, 0, z); K.box("orange", .03, .02, .03, x, .1, z); }
  const g = K.build(); const bg = c3bagger(); bg.position.set(-.15, .016, -.1); bg.rotation.y = .4; bg.userData.anim = {type: "dig"}; g.add(bg); return g;
}
function c3worker(type, o){ const w = c3person(true); w.userData.anim = Object.assign({type, ph: Math.random() * 6}, o); return w; }
function c3lotPos(b){ return new THREE.Vector3(c3lot(b.x), .06, c3lot(b.y)); }

/* ── Abgleich Spielstand → Szene ── */
function c3phase(b, now){
  if (!(b.until > now)) return ["done", 1];
  const p = c3clamp((now - b.from) / Math.max(1, b.until - b.from), 0, 1);
  return [b.l === 0 ? (p < .3 ? "pit" : p < .78 ? "shell" : "finish") : (p < .45 ? "old" : p < .85 ? "shell" : "finish"), p];
}
function c3dispose(o){ o.traverse(m => { if (m.geometry) m.geometry.dispose(); if (m.material && !m.material.userData.c3 && m.material !== C3.M.flag) { if (Array.isArray(m.material)) m.material.forEach(x => x.dispose()); } }); }
function c3rebuild(b, ph){
  const old = C3.grp[b.id]; if (old) { C3.world.remove(old); c3dispose(old); }
  const grp = new THREE.Group(); grp.position.copy(c3lotPos(b)); grp.rotation.y = c3face(b.x, b.y); grp.userData = {id: b.id, lot: [b.x, b.y], k: b.k};
  const L = Math.max(1, b.l);
  const ex = b.k === "lagerhaus" ? lagerUsed() / lagerCap() : 0;
  let body = ph === "done" || ph === "old" ? c3design(b.k, L, b.id, false, ex) : ph === "pit" ? c3pit() : c3design(b.k, b.next, b.id, ph === "shell", ex);
  if ((WERK[b.k] && werkIdle(b)) || (FAB[b.k] && !(eco().fj[b.id] || []).some(j => j.s <= Date.now() && j.e > Date.now()))) body.userData.emit = [];
  const bb = new THREE.Box3().setFromObject(body); grp.add(body); grp.userData.body = body; grp.userData.top = Math.max(.35, bb.max.y);
  if (ph === "shell") grp.userData.grow = b.l === 0 ? [.3, .78, .1] : [.45, .85, .62];
  if (ph !== "done") {
    grp.add(c3fence()); const sk = new C3Kit(); c3stock(sk); grp.add(sk.build());
    const fz = Math.min(.8, bb.max.z + .16), fx = c3clamp(bb.min.x + .2, -.6, .2);
    if (ph !== "pit") {
      const sc = c3scaffold(bb); grp.add(sc);
      const cr = c3siteCrane(Math.min(3.2, grp.userData.top + .7)); cr.position.set(-.74, 0, -.74); grp.add(cr);
      const lv = Math.max(.3, Math.floor(Math.min(sc.userData.top, .9) / .3 + 1e-6) * .3);
      grp.add(c3worker("scaf", {x0: bb.min.x + .05, x1: bb.max.x - .05, y: lv + .015, z: bb.max.z + .045}));
    }
    grp.add(c3worker("hammer", {p: [fx, fz], ry: Math.PI}));
    grp.add(c3worker("carry", {a: [.62, .5], b: [c3clamp(bb.max.x - .1, -.4, .45), fz], s: Math.random()}));
    if (ph === "pit") grp.add(c3worker("carry", {a: [-.6, .65], b: [.35, .25], s: .5}));
  }
  C3.world.add(grp); C3.grp[b.id] = grp; c3anims();
}
function c3anims(){ C3.anims = []; C3.emit = []; for (const id in C3.grp) C3.grp[id].traverse(o => { if (o.userData.anim) C3.anims.push(o); if (o.userData.emit && o.userData.emit.length) C3.emit.push({o, pts: o.userData.emit, t: Math.random()}); }); }
function c3sync(){
  if (!C3.init) return;
  const g = G(), now = Date.now(), seen = {};
  g.b.forEach(b => {
    seen[b.id] = 1; const [ph, p] = c3phase(b, now), key = [b.k, b.l, b.next || 0, ph, b.x, b.y, b.k === "lagerhaus" ? Math.round(lagerUsed() / lagerCap() * 9) : WERK[b.k] ? (werkIdle(b) ? "i" : "") : FAB[b.k] ? ((eco().fj[b.id] || []).some(j => j.s <= now && j.e > now) ? "w" : "") : ""].join("|");
    if (C3.keys[b.id] !== key) { const was = C3.keys[b.id]; c3rebuild(b, ph); C3.keys[b.id] = key; if (was && was.split("|")[3] !== "done" && ph === "done") c3party(b); }
    const grp = C3.grp[b.id];
    if (grp.userData.grow) { const [a, z, s0] = grp.userData.grow; grp.userData.body.scale.y = s0 + (1 - s0) * c3ss(0, 1, (p - a) / (z - a)); }
  });
  for (const id in C3.grp) if (!seen[id]) { C3.world.remove(C3.grp[id]); c3dispose(C3.grp[id]); delete C3.grp[id]; delete C3.keys[id]; c3anims(); }
  /* Grundstücke einfärben */
  const occ = {}, col = new THREE.Color(); g.b.forEach(b => occ[b.x + "," + b.y] = b); let ek = "";
  for (let i = 0; i < 64; i++) { const x = i % 8, y = i / 8 | 0, b = occ[x + "," + y];
    col.set(!b ? 0x74ad53 : b.until > now ? 0x8d7050 : b.k === "park" ? 0x6aab4c : 0xc9c7c0); C3.plates.setColorAt(i, col); if (!b) ek += i + ","; }
  C3.plates.instanceColor.needsUpdate = true;
  if (ek !== C3.emptyKey) { C3.emptyKey = ek; c3decor(occ); }
  C3.plat.visible = g.b.some(b => b.k === "bahnhof" && b.l > 0);
  /* Leben passend zur Stadtgröße */
  const ew = gEinw(), nP = c3clamp(Math.round(ew / 9), 2, 26), nC = c3clamp(1 + Math.floor(ew / 28), 1, 10);
  while (C3.peds.length < nP) C3.peds.push(c3ped()); while (C3.cars.length < nC) C3.cars.push(c3carAgent());
  C3.peds.forEach((a, i) => a.obj.userData.want = i < (C3.night > .6 ? Math.ceil(nP * .35) : nP));
  c3labsSync(); c3hl();
}
function c3decor(occ){
  if (C3.decor) { C3.sc.remove(C3.decor); c3dispose(C3.decor); }
  const K = new C3Kit();
  for (let i = 0; i < 64; i++) { const x = i % 8, y = i / 8 | 0; if (occ[x + "," + y]) continue; const r = c3rng(i * 13 + 5), cx = c3lot(x), cz = c3lot(y);
    for (let j = 0; j < 2 + (r() * 3 | 0); j++) K.ball("hedge", .06 + r() * .07, cx + (r() - .5) * 1.5, .09, cz + (r() - .5) * 1.5, 0);
    if (r() < .18) K.box(["flowR", "flowY", "flowP"][r() * 3 | 0], .2, .03, .2, cx + (r() - .5) * 1.2, .06, cz + (r() - .5) * 1.2);
    if (r() < .35) c3tree(K, cx + (r() - .5) * 1.3, cz + (r() - .5) * 1.3, .6 + r() * .3, r() < .5, .06); }
  C3.decor = K.build(); C3.sc.add(C3.decor);
}

/* ── Auswahl-Markierung ── */
function c3hl(){
  const key = [C3.place, GMOVE, !!C3.drag, C3.sel && C3.sel.join(","), G().b.length, G().b.map(b => b.x + "" + b.y).join("")].join("|"); if (key === C3.hlKey) return; C3.hlKey = key;
  while (C3.hl.children.length) { const c = C3.hl.children.pop(); c.geometry.dispose(); }
  const occ = {}; G().b.forEach(b => occ[b.x + "," + b.y] = 1);
  if (C3.place || GMOVE || C3.drag) for (let i = 0; i < 64; i++) { const x = i % 8, y = i / 8 | 0; if (occ[x + "," + y]) continue;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.8).rotateX(-Math.PI / 2), C3.hlMat); m.position.set(c3lot(x), .07, c3lot(y)); C3.hl.add(m); }
  if (C3.sel) { const [x, y] = C3.sel, K = new C3Kit(); for (const [w, d, ox, oz] of [[1.9, .06, 0, .92], [1.9, .06, 0, -.92], [.06, 1.9, .92, 0], [.06, 1.9, -.92, 0]]) K.box("white", w, .03, d, c3lot(x) + ox, .06, c3lot(y) + oz);
    const g = K.build(false); g.children.forEach(m => { m.material = C3.selMat; C3.hl.add(m); }); }
}

/* ── Wege für Autos und Fußgänger ── */
function c3graph(){
  const R = C3R, N = [];
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) N.push({x: [-R, 0, R][i], z: [-R, 0, R][j], n: []});
  const link = (a, b) => { N[a].n.push(b); N[b].n.push(a); };
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { const k = i * 3 + j; if (i < 2) link(k, k + 3); if (j < 2) link(k, k + 1); }
  N.push({x: 0, z: C3FAR, n: []}); link(9, 5); N.push({x: C3RX - 1.5, z: 0, n: []}); link(10, 7);
  return N;
}
function c3walk(ag, dt, ok){
  const N = C3.N; ag.s += ag.sp * dt; let A = N[ag.a], B = N[ag.b], L = Math.hypot(B.x - A.x, B.z - A.z);
  let guard = 0;
  while (ag.s >= L && guard++ < 5) { ag.s -= L; const nb = N[ag.b].n.filter(k => k !== ag.a && ok(k)); const nx = nb.length ? nb[Math.random() * nb.length | 0] : ag.a; ag.a = ag.b; ag.b = nx; A = N[ag.a]; B = N[ag.b]; L = Math.hypot(B.x - A.x, B.z - A.z); }
  const t = ag.s / L, dx = (B.x - A.x) / L, dz = (B.z - A.z) / L; return {x: A.x + (B.x - A.x) * t, z: A.z + (B.z - A.z) * t, dx, dz};
}
function c3turn(o, ang, k){ let d = ang - o.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); o.rotation.y += d * k; }
function c3ped(){
  const o = c3person(false, "shirt" + (Math.random() * 7 | 0)); C3.sc.add(o); const a = Math.random() * 9 | 0;
  const ag = {obj: o, a, b: C3.N[a].n[0], s: Math.random() * 4, sp: .28 + Math.random() * .18, side: Math.random() < .5 ? -1 : 1, ph: Math.random() * 6}; o.position.set(C3.N[a].x, .045, C3.N[a].z); return ag;
}
function c3carAgent(){
  const o = c3car("car" + (Math.random() * 6 | 0)); C3.sc.add(o); const a = Math.random() * 9 | 0;
  const ag = {obj: o, a, b: C3.N[a].n[Math.random() * C3.N[a].n.length | 0], s: Math.random() * 5, sp: 1.1 + Math.random() * .7}; o.position.set(C3.N[a].x, .02, C3.N[a].z); return ag;
}
function c3route(from, to){
  const prev = {[from]: -1}, q = [from];
  while (q.length) { const k = q.shift(); if (k === to) break; for (const n of C3.N[k].n) if (prev[n] === undefined && n !== 10) { prev[n] = k; q.push(n); } }
  const p = []; for (let k = to; k !== -1 && k !== undefined; k = prev[k]) p.unshift(k); return p;
}
function c3roadPt(x, z){
  let best = null; const N = C3.N;
  N.forEach((A, a) => A.n.forEach(b => { if (b < a || a > 8 || b > 8) return; const B = N[b], vx = B.x - A.x, vz = B.z - A.z, L2 = vx * vx + vz * vz, t = c3clamp(((x - A.x) * vx + (z - A.z) * vz) / L2, .08, .92);
    const px = A.x + vx * t, pz = A.z + vz * t, d = Math.hypot(x - px, z - pz); if (!best || d < best.d) best = {d, a, b, x: px, z: pz, t}; }));
  return best;
}
function c3truckTick(dt, t){
  const T = C3.truck, now = Date.now();
  if (T.st === "idle") { T.wait -= dt; if (T.wait > 0) return;
    const site = G().b.find(b => { const ph = c3phase(b, now)[0]; return ph === "shell" || ph === "finish"; }); if (!site) { T.wait = 3; return; }
    const rp = c3roadPt(c3lot(site.x), c3lot(site.y)), ea = c3route(9, rp.a), eb = c3route(9, rp.b), path = (ea.length <= eb.length ? ea : eb).map(k => [C3.N[k].x, C3.N[k].z]);
    path[0] = [0, 26]; path.push([rp.x, rp.z]); T.path = path; T.i = 0; T.s = 0; T.st = "go"; T.obj.visible = true; T.obj.position.set(path[0][0], .02, path[0][1]); return; }
  if (T.st === "go" || T.st === "back") {
    const P = T.path; let A = P[T.i], B = P[T.i + 1]; if (!B) { T.st = T.st === "go" ? "pour" : "idle"; T.wait = T.st === "pour" ? 8 : 30; return; }
    let L = Math.hypot(B[0] - A[0], B[1] - A[1]); T.s += 1.8 * dt * (T.i === P.length - 2 && L - T.s < 1 ? .5 : 1);
    if (T.s >= L) { T.i++; T.s = 0; return; }
    const dx = (B[0] - A[0]) / L, dz = (B[1] - A[1]) / L, x = A[0] + dx * T.s - dz * .3, z = A[1] + dz * T.s + dx * .3;
    T.obj.position.x += (x - T.obj.position.x) * Math.min(1, dt * 8); T.obj.position.z += (z - T.obj.position.z) * Math.min(1, dt * 8); T.obj.position.y = c3gy(x, z) + .02; c3turn(T.obj, Math.atan2(-dz, dx), Math.min(1, dt * 6));
    T.obj.userData.drum.rotation.x += dt * 2; return; }
  if (T.st === "pour") { T.obj.userData.drum.rotation.x += dt * 6; T.wait -= dt; if (T.wait <= 0) { T.path = T.path.slice().reverse(); T.i = 0; T.s = 0; T.st = "back"; } }
}
function c3trainTick(dt, t){
  const tr = C3.train, stop = C3.plat.visible, cyc = stop ? 60 : 75, u = (t + 20) % cyc; let z, on = true;
  if (stop) { if (u < 16) { const k = u / 16; z = -125 * (1 - k) * (1 - k); } else if (u < 22) z = 0; else if (u < 38) { const k = (u - 22) / 16; z = 125 * k * k; } else on = false; }
  else { if (u < 30) z = -125 + 250 * u / 30; else on = false; }
  tr.visible = on; if (!on) return; tr.userData.cars.forEach((c, i) => c.position.set(C3RX, .09, z - i * 1.02));
  if (stop && u >= 16 && u < 22) { const cyc0 = Math.floor((t + 20) / cyc); if (C3.pendC !== cyc0) { C3.pendC = cyc0; const n = 2 + Math.min(3, Math.floor(((G().b.find(b => b.k === "bahnhof") || {}).st || 0) / 3));
      for (let i = 0; i < n; i++) { const o = c3person(false, "shirt" + (Math.random() * 7 | 0)); o.position.set(C3RX - .55, .1, -1 + i * .5); C3.sc.add(o); C3.fx.push({m: o, kind: "pend", to: [C3R + .8 + Math.random() * .3, (Math.random() - .5) * .8], life: 30, ph: i}); } } }
}

/* ── Effekte ── */
function c3party(b){
  const p = c3lotPos(b), top = (C3.grp[b.id] && C3.grp[b.id].userData.top) || 1; c3wobble(b.id, .14);
  for (let i = 0; i < 26; i++) { const m = new THREE.Mesh(C3.G.spark, i % 3 ? C3.M.gold : C3.M.white), a = Math.random() * 6.3, s = .8 + Math.random() * 1.6;
    m.position.set(p.x, p.y + top * .8, p.z); C3.sc.add(m); C3.fx.push({m, v: new THREE.Vector3(Math.cos(a) * s, 1.5 + Math.random() * 2.4, Math.sin(a) * s), life: 1.4, kind: "spark"}); }
}
function c3wobble(id, a = .09){ C3.wob[id] = {t: 0, a}; }
function c3coinRain(n){
  const rh = G().b.find(b => b.k === "rathaus"); if (!rh) return; const p = c3lotPos(rh), top = (C3.grp[rh.id] && C3.grp[rh.id].userData.top) || 1.5;
  for (let i = 0; i < n; i++) { const m = new THREE.Mesh(C3.G.coin, C3.M.gold); m.position.set(p.x + (Math.random() - .5) * 1.2, top + 4 + i * .35 + Math.random(), p.z + (Math.random() - .5) * 1.2); m.rotation.set(Math.random() * 3, Math.random() * 3, 0); C3.sc.add(m);
    C3.fx.push({m, v: new THREE.Vector3(0, -1, 0), life: 6, kind: "coin", floor: p.y + top * .55, id: rh.id}); }
}
function c3fxTick(dt, t){
  /* Rauch */
  C3.emit.forEach(e => { e.t -= dt; if (e.t > 0) return; e.t = .5; e.pts.forEach(pt => { const v = new THREE.Vector3(...pt); e.o.localToWorld(v);
    const m = new THREE.Mesh(C3.G.puff, C3.smoke.clone()); m.position.copy(v); m.scale.setScalar(.6); C3.sc.add(m); C3.fx.push({m, v: new THREE.Vector3(.12, .38, .04), life: 4.2, max: 4.2, kind: "smoke"}); }); });
  for (let i = C3.fx.length - 1; i >= 0; i--) { const f = C3.fx[i]; f.life -= dt; const m = f.m;
    if (f.kind === "smoke") { m.position.addScaledVector(f.v, dt); const k = 1 - f.life / f.max; m.scale.setScalar(.6 + k * 2.2); m.material.opacity = .55 * (1 - k) * (C3.night > .5 ? .6 : 1); m.rotation.y += dt * .3; }
    else if (f.kind === "spark") { f.v.y -= 6 * dt; m.position.addScaledVector(f.v, dt); m.rotation.x += dt * 8; m.scale.setScalar(Math.max(.01, f.life / 1.4)); }
    else if (f.kind === "crate") c3crateTick(f, dt);
    else if (f.kind === "pend") { const o = f.m, dx = f.to[0] - o.position.x, dz = f.to[1] - o.position.z, d = Math.hypot(dx, dz); if (d < .05) f.life = 0; else { const s = Math.min(d, dt * .45); o.position.x += dx / d * s; o.position.z += dz / d * s; o.rotation.y = Math.atan2(dx, dz); c3walkPose(o, performance.now() / 120 + f.ph, .5); } }
    else if (f.kind === "coin") { f.v.y -= 7 * dt; m.position.addScaledVector(f.v, dt); m.rotation.y += dt * 9; if (m.position.y < f.floor) { f.life = 0; c3wobble(f.id, .05); } }
    if (f.life <= 0) { C3.sc.remove(m); if (f.kind === "smoke" || f.own) (f.own || m.material).dispose(); C3.fx.splice(i, 1); } }
}
function c3animTick(dt, t){
  C3.M.led.emissiveIntensity = .7 + .5 * Math.sin(t * 5); C3.M.ledR.emissiveIntensity = (t % 1.3) < .55 ? 1.6 : .1;
  C3.anims.forEach(o => { const a = o.userData.anim;
    if (a.type === "spin") o.rotation.y = (a.ph || 0) + Math.sin(t * a.sp + (a.ph || 0)) * a.amp;
    else if (a.type === "jet") o.scale.y = 1 + .18 * Math.sin(t * 9 + o.position.x * 5);
    else if (a.type === "flag") o.rotation.y = .4 + Math.sin(t * 2.3) * .3;
    else if (a.type === "rotor") o.rotation.z += dt * a.sp;
    else if (a.type === "drone") { o.position.y = 1.6 + Math.sin(t * 1.3) * .15; o.rotation.y += dt * .8; }
    else if (a.type === "dig") { const d = o.userData.dig; d.up.rotation.y = Math.sin(t * .6) * 1.1; d.boom.rotation.z = -.35 + Math.sin(t * 1.3) * .28; d.stick.rotation.z = -.7 + Math.sin(t * 1.3 + 1.2) * .45; }
    else if (a.type === "hammer") { o.position.set(a.p[0], 0, a.p[1]); o.rotation.y = a.ry; const p = o.userData.p; p.armR.rotation.x = -1.4 + Math.max(0, Math.sin(t * 7 + a.ph)) * 1.3; p.armL.rotation.x = -.5; }
    else if (a.type === "carry") { a.s += dt * .22 / Math.max(.3, Math.hypot(a.b[0] - a.a[0], a.b[1] - a.a[1])); const u = a.s % 2, k = u < 1 ? u : 2 - u, x = c3lerp(a.a[0], a.b[0], k), z = c3lerp(a.a[1], a.b[1], k);
      o.position.set(x, 0, z); const dx = (a.b[0] - a.a[0]) * (u < 1 ? 1 : -1), dz = (a.b[1] - a.a[1]) * (u < 1 ? 1 : -1); o.rotation.y = Math.atan2(dx, dz);
      c3walkPose(o, t * 9 + a.ph, .5); if (o.userData.p.box) { o.userData.p.box.visible = u < 1; if (u < 1) { o.userData.p.armL.rotation.x = o.userData.p.armR.rotation.x = -1.2; } } }
    else if (a.type === "scaf") { a.s = (a.s || 0) + dt * .12; const u = a.s % 2, k = u < 1 ? u : 2 - u, x = c3lerp(a.x0, a.x1, c3ss(0, 1, k));
      o.position.set(x, a.y, a.z); const still = Math.abs(k - .5) < .12 || k < .06 || k > .94; o.rotation.y = still ? Math.PI : (u < 1 ? Math.PI / 2 : -Math.PI / 2);
      if (still) { const p = o.userData.p; p.armR.rotation.x = -1.4 + Math.max(0, Math.sin(t * 7 + a.ph)) * 1.3; p.legL.rotation.x = p.legR.rotation.x = 0; } else c3walkPose(o, t * 9, .45); }
  });
  for (const id in C3.wob) { const w = C3.wob[id], g = C3.grp[id]; w.t += dt; if (!g || w.t > 1.3) { if (g) g.scale.set(1, 1, 1); delete C3.wob[id]; continue; }
    const s = 1 + w.a * Math.sin(w.t * 19) * Math.exp(-w.t * 4.5); g.scale.set(1 / Math.sqrt(s), s, 1 / Math.sqrt(s)); }
}
function c3agentsTick(dt, t){
  const k = 1 - Math.exp(-dt * 10);
  C3.cars.forEach(c => { const p = c3walk(c, dt, () => true), x = p.x - p.dz * .28, z = p.z + p.dx * .28, o = c.obj;
    o.position.x += (x - o.position.x) * k; o.position.z += (z - o.position.z) * k; o.position.y = c3gy(o.position.x, o.position.z) + .015; c3turn(o, Math.atan2(-p.dz, p.dx), k); });
  const far = C3CAM.r > 30; C3.peds.forEach(c => { const o = c.obj; o.visible = !!o.userData.want && !far; if (!o.visible) return; const p = c3walk(c, dt, n => n !== 9), hz = Math.abs(p.dz) < .5;
    const x = p.x + (hz ? 0 : c.side * .7), z = p.z + (hz ? c.side * .7 : 0); o.position.x += (x - o.position.x) * k; o.position.z += (z - o.position.z) * k; o.position.y = .045;
    c3turn(o, Math.atan2(p.dx, p.dz), k); c3walkPose(o, t * 8 * c.sp / .35 + c.ph, .5); });
  c3truckTick(dt, t); c3trainTick(dt, t);
  const day = C3.night < .5; C3.birds.forEach((b, i) => { b.visible = day; if (!day) return; const a = t * .07 + i * .16, R = 13 + Math.sin(i * 1.7) * 2;
    b.position.set(Math.cos(a) * R + Math.sin(t * .5 + i) * .4, 6.5 + Math.sin(t * .8 + i * 2) * .5 + i * .08, Math.sin(a) * R - 2); b.rotation.y = -a; const f = Math.sin(t * 11 + i * 1.3) * .7; b.userData.w[0].rotation.z = f; b.userData.w[1].rotation.z = -f; });
  C3.clouds.children.forEach((c, i) => { c.position.x += dt * (.35 + i * .04); if (c.position.x > 140) c.position.x = -140; });
}

/* ── Tag und Nacht nach Uhrzeit ── */
function c3day(){
  const d = new Date(), h = d.getHours() + d.getMinutes() / 60, day = c3ss(6, 8.2, h) * (1 - c3ss(18.2, 20.4, h)), dusk = Math.max(0, 1 - Math.abs(day - .5) * 2);
  C3.night = 1 - day; const C = (a, b, t) => new THREE.Color(a).lerp(new THREE.Color(b), t);
  const top = C(0x081028, 0x3d8fe2, day).lerp(new THREE.Color(0x5a58b8), dusk * .45), hor = C(0x1b2a58, 0xcde9ff, day).lerp(new THREE.Color(0xffa877), dusk * .7);
  C3.skyTop = "#" + top.getHexString(); C3.skyHor = "#" + hor.getHexString();
  const el = $("#c3"); el.style.setProperty("--c3top", C3.skyTop); el.style.setProperty("--c3hor", C3.skyHor); el.classList.toggle("night", C3.night > .55);
  C3.sc.fog.color.copy(hor);
  const tt = c3clamp((h - 6) / 14, 0, 1), sx = Math.cos(tt * Math.PI) * 22, sy = 6 + Math.sin(tt * Math.PI) * 26, sz = 10 + Math.sin(tt * Math.PI) * 8;
  if (day > .02) C3.sun.position.set(sx, sy, sz); else C3.sun.position.set(-12, 30, 14);
  C3.sun.color.copy(C(0xa9bcff, 0xfff6e8, day).lerp(new THREE.Color(0xffb27a), dusk * .75)); C3.sun.intensity = .42 + day * .42;
  C3.hemi.color.copy(C(0x5a6cae, 0xdcecff, day)); C3.hemi.groundColor.copy(C(0x1c2436, 0x76805a, day)); C3.hemi.intensity = .52 + .04 * day;
  const n = C3.night, M = C3.M; M.glassL.emissiveIntensity = n * .95; M.glassB.emissiveIntensity = n * .45; M.rzGlass.emissiveIntensity = .1 + n * .9; M.lamp.emissiveIntensity = n * 1.4; M.headL.emissiveIntensity = n * 1.5; M.tailL.emissiveIntensity = .2 + n;
  M.jet.emissiveIntensity = .25 + n * .5; C3.spots.material.opacity = n * .55; C3.stars.material.opacity = c3ss(.5, .95, n) * .9;
  C3.clouds.userData.mat.color.copy(C(0x5b6380, 0xffffff, day)); C3.clouds.userData.mat.emissiveIntensity = .05 + .25 * day; M.water.color.copy(C(0x1c3a66, 0x3f8fd2, day));
}

/* ── Kamera und Gesten ── */
const C3CAM = {tx: -1.7, tz: -.6, r: 18, az: Math.PI / 4, po: .98};
function c3camApply(){
  const c = C3CAM, sp = Math.sin(c.po), cam = C3.cam;
  cam.position.set(c.tx + c.r * sp * Math.sin(c.az), c.r * Math.cos(c.po) + .4, c.tz + c.r * sp * Math.cos(c.az)); cam.lookAt(c.tx, .4, c.tz);
}
function c3camTick(dt){
  const c = C3CAM;
  if (C3.anim) { const A = C3.anim; A.t = Math.min(1, A.t + dt / A.d); const e = A.t < .5 ? 2 * A.t * A.t : 1 - Math.pow(-2 * A.t + 2, 2) / 2;
    for (const k of ["tx", "tz", "r", "po"]) c[k] = c3lerp(A.f[k], A.to[k], e); c.az = A.f.az + Math.atan2(Math.sin(A.to.az - A.f.az), Math.cos(A.to.az - A.f.az)) * e; if (A.t >= 1) C3.anim = null; }
  else if (Math.abs(C3.vel.x) + Math.abs(C3.vel.z) > .01 && !C3.ptr) { c.tx += C3.vel.x * dt; c.tz += C3.vel.z * dt; const f = Math.exp(-dt * 4); C3.vel.x *= f; C3.vel.z *= f; }
  c.r = c3clamp(c.r, 4.5, 62); c.po = c3clamp(c.po, .22, 1.28); c.tx = c3clamp(c.tx, -26, 26); c.tz = c3clamp(c.tz, -24, 30);
  c3camApply();
}
function c3fit(asp, fov){
  let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9; G().b.forEach(b => { const x = c3lot(b.x), z = c3lot(b.y); x0 = Math.min(x0, x - 1.1); x1 = Math.max(x1, x + 1.1); z0 = Math.min(z0, z - 1.1); z1 = Math.max(z1, z + 1.1); });
  const rad = Math.max(5.4, Math.hypot(x1 - x0, z1 - z0) / 2), vf = fov * Math.PI / 360, hf = Math.atan(Math.tan(vf) * asp);
  return {tx: (x0 + x1) / 2, tz: (z0 + z1) / 2 + .3, r: c3clamp(rad * .82 / Math.tan(Math.min(vf, hf)), 14, 36), az: .62, po: 1.07};
}
function c3fly(to, d = .9){ C3.anim = {f: Object.assign({}, C3CAM), to: Object.assign({}, C3CAM, to), t: 0, d}; C3.vel.x = C3.vel.z = 0; }
function c3focus(x, y, r = 8){ c3fly({tx: c3lot(x), tz: c3lot(y), r: Math.min(C3CAM.r, r)}); }
function c3pan(dx, dy){
  const c = C3CAM, s = 2 * c.r * Math.tan(C3.cam.fov * Math.PI / 360) / Math.max(1, C3.cv.clientHeight), ca = Math.cos(c.az), sa = Math.sin(c.az), k = 1 / Math.max(.4, Math.cos(c.po));
  const vx = (-ca * dx - sa * dy * k) * s, vz = (sa * dx - ca * dy * k) * s; c.tx += vx; c.tz += vz; return [vx, vz];
}
function c3pick(cx, cy, only){
  const r = C3.cv.getBoundingClientRect(); C3.ndc.set((cx - r.left) / r.width * 2 - 1, -(cy - r.top) / r.height * 2 + 1); C3.rc.setFromCamera(C3.ndc, C3.cam);
  const hits = C3.rc.intersectObjects(only ? [C3.plates] : [C3.world, C3.plates, C3.terrain, C3.water], true);
  for (const h of hits) { let o = h.object; if (o === C3.plates) return {lot: [h.instanceId % 8, h.instanceId / 8 | 0], p: h.point};
    while (o && !o.userData.lot) o = o.parent; if (o) return {lot: o.userData.lot, id: o.userData.id, p: h.point}; return {p: h.point}; }
  return null;
}
function c3tap(cx, cy){
  const h = c3pick(cx, cy, !!(C3.place || GMOVE)); if (!h) return;
  if (h.lot) { const [x, y] = h.lot, b = G().b.find(o => o.x === x && o.y === y);
    if (GMOVE) { const m = G().b.find(o => o.id === GMOVE); if (m && !(m.x === x && m.y === y)) c3swapTo(m, x, y); else { GMOVE = null; C3.hlKey = ""; c3hl(); c3hud(); } return; }
    if (b && C3.place) { c3wobble(b.id); toast("Hier steht schon etwas – wähle eine freie Fläche"); return; }
    if (b) { c3wobble(b.id); C3.sel = null; if (C3.drawer) c3drawer(false); if (C3.place) { C3.place = null; c3hud(); }
      if (WERK[b.k] && (b.st || 0) >= 1 && !(b.until > Date.now() && b.l < 1)) c3Act23("c3-col", {id: b.id}); else if (FAB[b.k] && fabReady(b)) c3Act23("c3-fcol", {id: b.id});
      c3cardOpen(b); return; }
    if (C3.place) { c3buildAt(C3.place, x, y); return; }
    C3.sel = [x, y]; c3drawer(true); return; }
  if (h.p && h.p.z < c3zr(h.p.x) - 2.2) { toast("Hinter dem Fluss liegt Neuland – bald kannst du eine Brücke hinüber bauen"); return; }
  C3.sel = null; c3cardClose(); if (C3.drawer) c3drawer(false); c3hl();
}
function c3dbl(cx, cy){
  const h = c3pick(cx, cy); if (C3CAM.r < 9.5 || !h) { c3fly(c3fit(C3.cam.aspect, C3.cam.fov)); return; }
  if (h.lot) c3focus(h.lot[0], h.lot[1], 7); else c3fly({tx: h.p.x, tz: h.p.z, r: Math.max(6, C3CAM.r * .5)});
}
function c3controls(cv){
  const P = new Map(); let lpT = 0, g0 = null, moved = false, multi = false, t0 = 0, sx = 0, sy = 0, lastTap = 0, lx = 0, ly = 0, tapT = 0, vx = 0, vz = 0;
  const gest = () => { const [a, b] = [...P.values()]; return {d: Math.hypot(a.x - b.x, a.y - b.y) || 1, a: Math.atan2(b.y - a.y, b.x - a.x), my: (a.y + b.y) / 2}; };
  cv.addEventListener("pointerdown", e => { try { cv.setPointerCapture(e.pointerId); } catch(_) {} P.set(e.pointerId, {x: e.clientX, y: e.clientY, b: e.button}); C3.ptr = true; C3.anim = null;
    if (P.size === 1) { moved = false; multi = false; t0 = performance.now(); sx = e.clientX; sy = e.clientY; C3.vel.x = C3.vel.z = 0; vx = vz = 0;
      const X = e.clientX, Y = e.clientY, grab = () => { if (moved || multi || P.size !== 1 || C3.drag) return; const h = c3pick(X, Y); const b = h && h.id && G().b.find(o => o.id === h.id); if (b && c3dragStart(b)) { clearTimeout(tapT); lastTap = 0; } };
      clearTimeout(lpT); if (C3.umbau) grab(); else lpT = setTimeout(grab, 450); }
    else { multi = true; g0 = gest(); clearTimeout(lpT); if (C3.drag) { const D = C3.drag; C3.drag = null; D.grp.position.set(c3lot(D.b.x), .06, c3lot(D.b.y)); C3.sel = null; C3.hlKey = ""; c3hl(); } } });
  cv.addEventListener("pointermove", e => { const p = P.get(e.pointerId); if (!p) return; const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    if (C3.drag) { c3dragMove(e.clientX, e.clientY); return; }
    if (P.size === 1 && !multi) { if (!moved && Math.hypot(e.clientX - sx, e.clientY - sy) > 7) moved = true; if (!moved) return;
      if (p.b === 2 || e.shiftKey) { C3CAM.az -= dx * .008; C3CAM.po -= dy * .005; } else { const [a, b] = c3pan(dx, dy); vx = vx * .6 + a * 24; vz = vz * .6 + b * 24; } }
    else if (P.size >= 2 && g0) { const g = gest(); C3CAM.r *= g0.d / g.d; let da = g.a - g0.a; da = Math.atan2(Math.sin(da), Math.cos(da)); C3CAM.az += da; C3CAM.po -= (g.my - g0.my) * .004; g0 = g; moved = true; } });
  const up = e => { if (!P.has(e.pointerId)) return; P.delete(e.pointerId); clearTimeout(lpT);
    if (C3.drag && P.size === 0) { C3.ptr = false; c3dragEnd(); return; }
    if (P.size === 1) { g0 = null; return; }
    if (P.size === 0) { C3.ptr = false;
      if (!moved && !multi && performance.now() - t0 < 450) { const now = performance.now();
        if (now - lastTap < 320 && Math.hypot(e.clientX - lx, e.clientY - ly) < 34) { clearTimeout(tapT); lastTap = 0; c3dbl(e.clientX, e.clientY); }
        else { lastTap = now; lx = e.clientX; ly = e.clientY; const X = e.clientX, Y = e.clientY; tapT = setTimeout(() => c3tap(X, Y), 240); } }
      else if (moved && !multi) { C3.vel.x = vx; C3.vel.z = vz; } } };
  cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
  cv.addEventListener("wheel", e => { e.preventDefault(); C3.anim = null; C3CAM.r *= Math.exp(e.deltaY * .0012); }, {passive: false});
  cv.addEventListener("contextmenu", e => e.preventDefault());
  ["gesturestart", "gesturechange"].forEach(n => document.addEventListener(n, e => { if (C3.open) e.preventDefault(); }, {passive: false}));
}

/* ── Szene einmalig aufbauen ── */
function c3setup(){
  C3.T = c3texAll(); C3.M = c3mats(C3.T); C3.N = c3graph();
  const cv = $("#c3cv"); C3.cv = cv;
  const r = new THREE.WebGLRenderer({canvas: cv, antialias: true, alpha: true}); r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; r.setClearColor(0x000000, 0); C3.r = r;
  const sc = new THREE.Scene(); C3.sc = sc; sc.fog = new THREE.Fog(0xcfeaff, 62, 175);
  C3.cam = new THREE.PerspectiveCamera(50, 1, .1, 420);
  C3.hemi = new THREE.HemisphereLight(0xd6ecff, 0x6b7f4f, .65); sc.add(C3.hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); const s = sun.shadow.camera; s.left = s.bottom = -17; s.right = s.top = 17; s.near = 1; s.far = 90;
  sun.shadow.bias = -.0004; sun.shadow.normalBias = .025; sun.target.position.set(0, 0, 0); sc.add(sun, sun.target); C3.sun = sun;
  C3.G = {spark: new THREE.OctahedronGeometry(.05, 0), coin: new THREE.CylinderGeometry(.09, .09, .022, 14).rotateX(Math.PI / 2), puff: new THREE.IcosahedronGeometry(.11, 0)};
  C3.smoke = new THREE.MeshStandardMaterial({color: 0xe6e6e2, roughness: 1, flatShading: true, transparent: true, opacity: .5, depthWrite: false});
  C3.hlMat = new THREE.MeshBasicMaterial({color: 0x5cff8a, transparent: true, opacity: .3, depthWrite: false}); C3.selMat = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: .9});
  C3.terrain = c3terrain(); sc.add(C3.terrain); C3.water = c3waterMesh(); sc.add(C3.water);
  sc.add(c3roads()); C3.spots = c3lampSpots(); sc.add(C3.spots); sc.add(c3rail()); C3.plat = c3platform(); C3.plat.visible = false; sc.add(C3.plat);
  sc.add(c3forest()); C3.clouds = c3clouds(); sc.add(C3.clouds); C3.stars = c3stars(); sc.add(C3.stars);
  C3.plates = new THREE.InstancedMesh(c3boxG(1.9, .06, 1.9).translate(0, .03, 0), new THREE.MeshStandardMaterial({color: 0xffffff, roughness: .95, flatShading: true}), 64);
  const o = new THREE.Object3D(); for (let i = 0; i < 64; i++) { o.position.set(c3lot(i % 8), 0, c3lot(i / 8 | 0)); o.updateMatrix(); C3.plates.setMatrixAt(i, o.matrix); C3.plates.setColorAt(i, new THREE.Color(0x86c463)); }
  C3.plates.receiveShadow = true; sc.add(C3.plates);
  C3.world = new THREE.Group(); sc.add(C3.world); C3.hl = new THREE.Group(); sc.add(C3.hl);
  C3.peds = []; C3.cars = []; C3.vel = {x: 0, z: 0}; C3.rc = new THREE.Raycaster(); C3.ndc = new THREE.Vector2(); C3.night = 0;
  C3.truck = {obj: c3truck(), st: "idle", wait: 4, path: [], i: 0, s: 0}; C3.truck.obj.visible = false; sc.add(C3.truck.obj);
  C3.train = c3trainSet(); sc.add(C3.train);
  C3.birds = Array.from({length: 9}, () => { const b = c3bird(); sc.add(b); return b; });
  c3controls(cv); C3.init = true; c3day();
  Object.assign(C3CAM, c3fit(.5, 50));
}
function c3resize(){
  if (!C3.init) return; const el = $("#c3"), w = el.clientWidth || innerWidth, h = el.clientHeight || innerHeight;
  C3.r.setSize(w, h, false); C3.cam.aspect = w / h; C3.cam.fov = w / h < 1 ? 50 : 40; C3.cam.updateProjectionMatrix();
}
