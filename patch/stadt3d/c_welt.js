
/* ── Landschaft ── */
function c3terrain(){
  const S = 250, N = 140, g0 = new THREE.PlaneGeometry(S, S, N, N); g0.rotateX(-Math.PI/2);
  const p0 = g0.attributes.position; for (let i = 0; i < p0.count; i++) p0.setY(i, c3h(p0.getX(i), p0.getZ(i)));
  const g = g0.toNonIndexed(); g0.dispose(); const p = g.attributes.position, col = new Float32Array(p.count * 3), r = c3rng(99), c = new THREE.Color(), lock = new THREE.Color(0x8d9a86);
  const pal = {bed: new THREE.Color(0x6c6250), sand: new THREE.Color(0xb9aa7c), g1: new THREE.Color(0x67a346), g2: new THREE.Color(0x538f3a), hi: new THREE.Color(0x7a9450), rock: new THREE.Color(0x8f8a80), snow: new THREE.Color(0xf2f4f7), city: new THREE.Color(0x6aa94c)};
  for (let i = 0; i < p.count; i += 3) {
    const x = (p.getX(i) + p.getX(i+1) + p.getX(i+2)) / 3, y = (p.getY(i) + p.getY(i+1) + p.getY(i+2)) / 3, z = (p.getZ(i) + p.getZ(i+1) + p.getZ(i+2)) / 3;
    const zr = c3zr(x), d = Math.abs(z - zr), n = Math.sin(x * .21) * Math.cos(z * .17) * .5 + .5;
    if (y < -.32) c.copy(pal.bed); else if (d < 3.9 && y < -.04) c.copy(pal.sand);
    else if (y > 15.5) c.copy(pal.snow); else if (y > 9.5) c.copy(pal.rock).lerp(pal.hi, c3clamp((15.5 - y) / 8, 0, .5)); else if (y > 4.5) c.copy(pal.hi).lerp(pal.g2, .3);
    else if (Math.abs(x) < 11.4 && Math.abs(z) < 11.4) c.copy(pal.city); else c.copy(pal.g1).lerp(pal.g2, n);
    if (z < zr - 3.4) c.lerp(lock, .38).multiplyScalar(.9);
    c.multiplyScalar(.95 + r() * .1);
    for (let k = 0; k < 3; k++) { col[(i+k)*3] = c.r; col[(i+k)*3+1] = c.g; col[(i+k)*3+2] = c.b; }
  }
  g.setAttribute("color", new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({vertexColors: true, flatShading: true, roughness: 1})); m.receiveShadow = true; m.userData.terrain = 1; return m;
}
function c3waterMesh(){
  const xs = []; for (let x = -125; x <= 125; x += 2.5) xs.push(x); const A = 6, pos = [], idx = [];
  xs.forEach(x => { const zr = c3zr(x); for (let j = 0; j <= A; j++) pos.push(x, -.3, zr - 3.2 + j * 6.4 / A); });
  for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < A; j++) { const a = i*(A+1) + j, b = a + A + 1; idx.push(a, a+1, b, a+1, b+1, b); }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, C3.M.water); m.receiveShadow = true; m.userData.base = Float32Array.from(pos); m.userData.water = 1; return m;
}
function c3waterTick(m, t){
  const p = m.geometry.attributes.position, b = m.userData.base;
  for (let i = 0; i < p.count; i++) { const x = b[i*3], z = b[i*3+2]; p.setY(i, -.3 + .045 * Math.sin(t*1.5 + x*.45 + z*1.3) + .03 * Math.sin(t*2.2 - x*.8 + z*.6)); }
  p.needsUpdate = true;
}
function c3roads(){
  const K = new C3Kit(), R = C3R, N = [-R, 0, R];
  for (const c of N) { K.box("asphalt", 2*R + 1.2, .02, 1.2, 0, 0, c); for (const [a, b] of [[-R + .6, -.6], [.6, R - .6]]) K.box("asphalt", 1.2, .02, b - a, c, 0, (a + b) / 2); }
  const segs = [[-R + .6, -.6], [.6, R - .6]];
  for (const c of N) for (const [a, b] of segs) { const L = b - a, m = (a + b) / 2;
    for (const s of [-1, 1]) { if (Math.abs(c) === R && s * c > 0) continue; K.box("side", L, .045, .2, m, 0, c + s * .7); K.box("side", .2, .045, L, c + s * .7, 0, m); }
    for (let x = a + .75; x < b - .7; x += .6) { K.box("line", .3, .004, .035, x + .15, .02, c); K.box("line", .035, .004, .3, c, .02, x + .15); } }
  const ex = [[-R - .8, -.6], [.6, R + .8]];                       // Außen-Gehwege, unterbrochen an Landstraße (Süd) und Bahnhofszufahrt (Ost)
  K.box("side", 2*R + 1.6, .045, .2, 0, 0, -(R + .7)); K.box("side", .2, .045, 2*R + 1.2, -(R + .7), 0, 0);
  for (const [a, b] of ex) K.box("side", b - a, .045, .2, (a + b) / 2, 0, R + .7);
  for (const [a, b] of [[-R - .6, -.6], [.6, R + .6]]) K.box("side", .2, .045, b - a, R + .7, 0, (a + b) / 2);
  for (const [cx, cz, rot] of [[0, 1.1, 0], [0, -1.1, 0], [1.1, 0, 1], [-1.1, 0, 1]]) for (let i = -2; i <= 2; i++) rot ? K.box("line", .26, .004, .1, cx, .02, cz + i * .22) : K.box("line", .1, .004, .26, cx + i * .22, .02, cz);
  K.box("asphalt", 1.2, .02, 125 - R - .6, 0, 0, (R + .6 + 125) / 2); K.box("line", .035, .004, 125 - R - 1, .0, .02, (R + 1 + 125) / 2);
  for (const s of [-1, 1]) K.box("line", .03, .004, 125 - R - 1, s * .55, .02, (R + 1 + 125) / 2);
  K.box("asphalt", C3RX - R - 1.9, .02, 1.2, (R + .6 + C3RX - 1.3) / 2, 0, 0); K.box("side", .9, .03, 1.8, C3RX - 1.35, 0, 0);
  /* Laternen */
  for (const c of N) for (const [a, b] of segs) for (let v = a + .8; v < b - .3; v += 2.2) { c3lampPost(K, v, c + .74 * (c === -R ? 1 : -1), c === -R ? Math.PI : 0); c3lampPost(K, c + .74 * (c === -R ? 1 : -1), v, c === -R ? -Math.PI/2 : Math.PI/2); }
  for (let z = R + 3; z < 40; z += 4) c3lampPost(K, .78, z, -Math.PI/2);
  /* Fußweg zum Fluss mit Brücken-Baustelle (kommt später) */
  const zr0 = c3zr(0); K.box("gravel", .5, .02, -zr0 - R - 3.6, 0, 0, (-R - .8 + zr0 + 2.8) / 2);
  for (const s of [-1, 1]) K.box("concrete", .5, .5, .5, s * .9, -.3, zr0 + 3.3);
  K.box("fenceR", 1.3, .05, .05, 0, .25, zr0 + 3.6); for (const x of [-.6, .6]) K.box("dark", .04, .3, .04, x, 0, zr0 + 3.6);
  for (let i = 0; i < 5; i++) K.box(i % 2 ? "white" : "red", .26, .05, .052, -.52 + i*.26, .25, zr0 + 3.6);
  K.push(1.6, 0, zr0 + 4.2, -.3); K.box("woodDark", .05, .5, .05, -.2); K.box("woodDark", .05, .5, .05, .2); K.box("wood", .6, .28, .04, 0, .36, 0); K.pop();
  const g = K.build(); g.children.forEach(m => m.castShadow = /^(dark|lamp|concrete|wood|woodDark)$/.test(m.userData.mat)); return g;
}
function c3lampSpots(){                                          // Lichtkegel der Laternen am Boden (nachts)
  const pts = [], R = C3R, N = [-R, 0, R], segs = [[-R + .6, -.6], [.6, R - .6]];
  for (const c of N) for (const [a, b] of segs) for (let v = a + .8; v < b - .3; v += 2.2) { const o = .74 * (c === -R ? 1 : -1), q = c === -R ? -.12 : .12; pts.push([v, c + o - q*0]); pts.push([c + o, v]); }
  for (let z = R + 3; z < 40; z += 4) pts.push([.66, z]);
  const mat = new THREE.MeshBasicMaterial({color: 0xffd27a, map: C3.T.glow, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending});
  const m = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.5, 1.5).rotateX(-Math.PI/2), mat, pts.length), o = new THREE.Object3D();
  pts.forEach(([x, z], i) => { o.position.set(x, .06, z); o.updateMatrix(); m.setMatrixAt(i, o.matrix); }); m.renderOrder = 2; return m;
}
function c3rail(){
  const K = new C3Kit(), x = C3RX, zr = c3zr(x), b0 = zr - 3.9, b1 = zr + 3.9;
  for (const [a, b] of [[-125, b0], [b1, 125]]) { K.box("ballast", .62, .05, b - a, x, 0, (a + b) / 2); }
  for (const s of [-1, 1]) K.box("rail", .03, .03, 250, x + s * .12, .065, 0);
  K.box("steel", .55, .12, b1 - b0 + .4, x, -.07, (b0 + b1) / 2); for (const s of [-1, 1]) { K.box("steel", .03, .22, b1 - b0 + .4, x + s * .3, .02, (b0 + b1) / 2);
    for (let z = b0; z <= b1; z += .7) K.beam("steel", [x + s*.3, .02, z], [x + s*.3, .24, z + .35], .02); }
  for (let z = b0 + 1.3; z < b1; z += 2.6) K.box("concrete", .4, 1.0, .4, x, -1.05, z);
  const g = K.build(); const sl = new THREE.InstancedMesh(c3boxG(.42, .025, .07), C3.M.sleeper, 820), o = new THREE.Object3D(); let n = 0;
  for (let z = -123; z < 123 && n < 820; z += .3) { o.position.set(x, .05, z); o.updateMatrix(); sl.setMatrixAt(n++, o.matrix); } sl.count = n; sl.receiveShadow = true; g.add(sl); return g;
}
function c3platform(){
  const K = new C3Kit(), x = C3RX - .62;
  K.box("concrete", .55, .1, 3.4, x, 0, 0); K.box("white", .02, .004, 3.4, x + .26, .1, 0);
  for (let z = -1.2; z <= 1.21; z += .8) K.box("steel", .03, .42, .03, x - .1, .1, z); K.put("metal", c3boxG(.5, .03, 2.8), x - .02, .53, 0, 0, 0, .12);
  K.box("glassB", .02, .3, 1.0, x - .2, .1, .4); K.box("wood", .3, .04, .1, x - .1, .17, -.4); K.push(x - .05, .1, 1.5); K.box("dark", .02, .45, .02); K.box("contB", .26, .12, .02, 0, .4, 0); K.pop();
  return K.build();
}
function c3forest(){
  const r = c3rng(1234), L = [];
  for (let i = 0; i < 2600 && L.length < 560; i++) { const x = (r() - .5) * 230, z = (r() - .5) * 230;
    if (Math.abs(x) < 12.8 && Math.abs(z) < 12.8) continue; if (z > 8 && Math.abs(x) < 3.2) continue; if (Math.abs(x - C3RX) < 2.6) continue;
    const zr = c3zr(x); if (Math.abs(z - zr) < 4.4) continue; const h = c3h(x, z); if (h > 11) continue; if (Math.hypot(x, z) > 115) continue;
    const dens = Math.sin(x*.09) * Math.cos(z*.11 + 1) + Math.sin((x + z)*.05) + (z < zr ? .7 : 0); if (dens < -.2 && r() < .75) continue;
    L.push({x, y: h, z, s: .85 + r() * .8, fir: r() < (z < zr ? .65 : .4), ry: r() * 6});
  }
  for (let v = -C3R - 1; v <= C3R + 1; v += 2.4) for (const [x, z] of [[v, -C3R - 1.45], [-C3R - 1.45, v], [C3R + 1.45, v], [v, C3R + 1.45]]) { if (Math.abs(x) < 1.6 && z > 0) continue; if (Math.abs(z) < 1.6 && x > 0) continue; L.push({x, y: 0, z, s: .8 + r() * .3, fir: false, ry: r() * 6}); }
  for (let i = 0; i < 26; i++) { const z = C3R + 3 + i * 3.2; L.push({x: (i % 2 ? 2.1 : -2.1), y: 0, z, s: .9 + r() * .3, fir: i % 3 === 0, ry: r()*6}); }
  const firG = c3merge([new THREE.ConeGeometry(.26, .45, 7).translate(0, .445, 0), new THREE.ConeGeometry(.19, .36, 7).translate(0, .66, 0)]);
  const rndG = c3merge([new THREE.IcosahedronGeometry(.27, 0).translate(0, .5, 0), new THREE.IcosahedronGeometry(.18, 0).translate(.1, .64, -.05)]);
  const trG = new THREE.CylinderGeometry(.03, .04, .32, 5).translate(0, .16, 0);
  const fir = L.filter(t => t.fir), rnd = L.filter(t => !t.fir);
  const mk = (geo, mat, list) => { const m = new THREE.InstancedMesh(geo, mat, list.length), o = new THREE.Object3D(), c = new THREE.Color();
    list.forEach((t, i) => { o.position.set(t.x, t.y - .02, t.z); o.rotation.y = t.ry; o.scale.setScalar(t.s); o.updateMatrix(); m.setMatrixAt(i, o.matrix); const v = .82 + ((i * 37) % 30) / 100; c.setRGB(v, v + .04, v * .92); m.setColorAt(i, c); });
    m.castShadow = true; m.receiveShadow = true; return m; };
  const g = new THREE.Group(); g.add(mk(firG, C3.M.fir, fir), mk(rndG, C3.M.leaf, rnd), mk(trG, C3.M.trunk, L));
  const rocks = []; for (let i = 0; i < 70; i++) { const x = (r() - .5) * 200, z = (r() - .5) * 200; if (Math.abs(x) < 14 && Math.abs(z) < 14) continue; if (Math.abs(z - c3zr(x)) < 3.6 || (z > 8 && Math.abs(x) < 3) || Math.abs(x - C3RX) < 2.4) continue; rocks.push({x, y: c3h(x, z), z, s: .4 + r() * 1.1, fir: 0, ry: r() * 6}); }
  g.add(mk(new THREE.DodecahedronGeometry(.3, 0), C3.M.rock, rocks));
  return g;
}
function c3clouds(){
  const g = new THREE.Group(), r = c3rng(7), mat = new THREE.MeshStandardMaterial({color: 0xffffff, flatShading: true, roughness: 1, emissive: 0xffffff, emissiveIntensity: .25, transparent: true, opacity: .95});
  for (let i = 0; i < 9; i++) { const parts = []; const n = 3 + (r() * 4 | 0);
    for (let j = 0; j < n; j++) parts.push(new THREE.IcosahedronGeometry(1.2 + r() * 1.4, 0).translate(j * 1.6 - n * .8, r() * .8, r() * 1.4 - .7));
    const m = new THREE.Mesh(c3merge(parts), mat); m.position.set((r() - .5) * 220, 16 + r() * 8, (r() - .5) * 160 - 20); m.scale.y = .6; g.add(m); }
  g.userData.mat = mat; return g;
}
function c3stars(){
  const r = c3rng(3), p = []; for (let i = 0; i < 420; i++) { const a = r() * Math.PI * 2, e = .12 + r() * 1.3; p.push(Math.cos(a) * Math.cos(e) * 170, Math.sin(e) * 170, Math.sin(a) * Math.cos(e) * 170); }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(p, 3));
  return new THREE.Points(g, new THREE.PointsMaterial({color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false}));
}

/* ── Figuren und Fahrzeuge ── */
function c3person(worker, shirt){
  const M = C3.M, g = new THREE.Group(), bx = (w, h, d) => c3boxG(w, h, d);
  const mk = (geo, mat, x, y, z, par = g) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); par.add(m); return m; };
  const leg = s => { const p = new THREE.Group(); p.position.set(s * .03, .115, 0); g.add(p); mk(bx(.045, .115, .05), M.pants, 0, -.057, 0, p); return p; };
  const arm = s => { const p = new THREE.Group(); p.position.set(s * .078, .225, 0); g.add(p); mk(bx(.034, .13, .036), worker ? M.vest : M[shirt], 0, -.065, 0, p); return p; };
  const legL = leg(-1), legR = leg(1), armL = arm(-1), armR = arm(1);
  mk(bx(.125, .125, .078), worker ? M.vest : M[shirt], 0, .175, 0); mk(new THREE.IcosahedronGeometry(.043, 1), M.skin, 0, .28, 0);
  let box = null;
  if (worker) { mk(new THREE.SphereGeometry(.05, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), M.helmet, 0, .29, 0); mk(bx(.128, .02, .08), M.white, 0, .16, 0);
    const h = new THREE.Group(); h.position.set(0, -.13, .02); armR.add(h); mk(bx(.012, .012, .1), M.woodDark, 0, 0, .04, h); mk(bx(.05, .025, .025), M.dark, 0, 0, .09, h);
    box = mk(bx(.09, .07, .07), M.timber, 0, .19, .07); box.visible = false; }
  else mk(new THREE.SphereGeometry(.046, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2.4), M[["black","trunk","dark","gold"][(shirt.charCodeAt(5) || 0) % 4]], 0, .287, 0);
  g.userData.p = {legL, legR, armL, armR, box}; return g;
}
function c3walkPose(g, ph, amp = .55){ const p = g.userData.p, s = Math.sin(ph) * amp; p.legL.rotation.x = s; p.legR.rotation.x = -s; p.armL.rotation.x = -s * .8; p.armR.rotation.x = s * .8; }
function c3car(mat){
  const K = new C3Kit(); K.box(mat, .56, .11, .27, 0, .05, 0); K.box(mat, .3, .11, .25, -.04, .16, 0); K.box("glass", .31, .075, .256, -.04, .175, 0);
  for (const [x, z] of [[.18, .13], [-.18, .13], [.18, -.13], [-.18, -.13]]) K.put("black", new THREE.CylinderGeometry(.055, .055, .04, 10).rotateX(Math.PI / 2), x, .055, z);
  for (const z of [-.08, .08]) { K.box("headL", .012, .03, .05, .28, .08, z); K.box("tailL", .012, .03, .05, -.28, .08, z); }
  return K.build();
}
function c3truck(){
  const K = new C3Kit(); K.box("dark", .95, .06, .28, 0, .06, 0); K.box("orange", .26, .24, .3, .36, .08, 0); K.box("glass", .02, .1, .26, .495, .19, 0); K.box("glass", .2, .08, .305, .36, .2, 0);
  for (const x of [.36, -.08, -.3]) for (const z of [.14, -.14]) K.put("black", new THREE.CylinderGeometry(.06, .06, .05, 10).rotateX(Math.PI / 2), x, .06, z);
  K.box("headL", .012, .035, .06, .495, .11, .09); K.box("headL", .012, .035, .06, .495, .11, -.09);
  const g = K.build(), dk = new C3Kit(); dk.put("white", new THREE.CylinderGeometry(.13, .1, .52, 12).rotateZ(Math.PI / 2), 0, 0, 0);
  for (let i = 0; i < 6; i++) { const a = i * 1.05; dk.put("orange", c3boxG(.06, .02, .04), -.2 + i * .08, Math.cos(a) * .125, Math.sin(a) * .125, 0, a); }
  const drum = dk.build(), tilt = new THREE.Group(); tilt.position.set(-.12, .3, 0); tilt.rotation.z = .16; tilt.add(drum); g.add(tilt); g.userData.drum = drum; return g;
}
function c3trainSet(){
  const g = new THREE.Group(); g.userData.cars = [];
  for (let i = 0; i < 3; i++) { const K = new C3Kit(); K.box("train", .26, .25, .98, 0, .07, 0); K.box("trainW", .262, .035, .98, 0, .14, 0);
    K.box(c3lit(i) ? "glassL" : "glass", .265, .07, .82, 0, .19, 0); K.box("grey", .22, .03, .96, 0, .32, 0); K.box("dark", .2, .06, .2, 0, .02, .32); K.box("dark", .2, .06, .2, 0, .02, -.32);
    if (i === 0) { K.box("dark", .22, .1, .02, 0, .18, .495); K.box("headL", .05, .03, .012, -.07, .1, .495); K.box("headL", .05, .03, .012, .07, .1, .495); }
    const c = K.build(); g.add(c); g.userData.cars.push(c); }
  return g;
}
function c3bagger(){
  const K = new C3Kit(); K.box("dark", .34, .07, .08, 0, 0, .1); K.box("dark", .34, .07, .08, 0, 0, -.1); K.box("steel", .1, .05, .1, 0, .06, 0);
  const g = K.build(), up = new THREE.Group(); up.position.y = .1; g.add(up);
  const uk = new C3Kit(); uk.box("yellow", .3, .12, .24, -.03, 0, 0); uk.box("yellow", .12, .14, .12, .06, .12, .06); uk.box("glass", .125, .08, .125, .06, .16, .06); uk.box("dark", .08, .1, .22, -.16, 0, 0); up.add(uk.build());
  const boom = new THREE.Group(); boom.position.set(.12, .1, -.04); up.add(boom); const bk = new C3Kit(); bk.box("yellow", .36, .05, .05, .18, -.025, 0); boom.add(bk.build());
  const stick = new THREE.Group(); stick.position.set(.36, 0, 0); boom.add(stick); const sk = new C3Kit(); sk.box("yellow", .26, .04, .04, .13, -.02, 0); sk.box("dark", .07, .07, .08, .27, -.06, 0); stick.add(sk.build());
  g.userData.dig = {up, boom, stick}; return g;
}
function c3siteCrane(H){
  const K = new C3Kit(); K.box("concrete", .24, .05, .24);
  for (const [a, b] of [[-1,-1],[1,-1],[-1,1],[1,1]]) K.box("yellow", .025, H, .025, a*.06, .05, b*.06);
  for (let y = .05; y < H; y += .22) { K.beam("yellow", [-.06, y, .06], [.06, y + .22, .06], .01); K.beam("yellow", [.06, y, -.06], [-.06, y + .22, -.06], .01); K.beam("yellow", [.06, y, .06], [.06, y + .22, -.06], .01); K.beam("yellow", [-.06, y, -.06], [-.06, y + .22, .06], .01); }
  const g = K.build(), sk = new C3Kit(), J = 1.05;
  sk.box("yellow", .16, .05, .16); sk.box("yellow", .1, .1, .1, .08, -.12, .1); sk.box("glassB", .012, .07, .09, .132, -.1, .1);
  sk.beam("yellow", [0, .05, 0], [J, .05, 0], .04); sk.beam("yellow", [0, .05, 0], [-.45, .05, 0], .05); sk.box("concrete", .14, .12, .12, -.38, .05, 0);
  sk.box("yellow", .025, .35, .025, 0, .05, 0); sk.beam("dark", [0, .4, 0], [J * .8, .07, 0], .006); sk.beam("dark", [0, .4, 0], [-.4, .07, 0], .006);
  sk.box("dark", .005, .55, .005, J * .7, -.5, 0); sk.box("wood", .14, .02, .14, J * .7, -.55, 0); sk.box("brick", .1, .06, .1, J * .7, -.53, 0);
  const spin = sk.build(); spin.position.y = H + .05; spin.userData.anim = {type: "spin", sp: .3, amp: 1.3, ph: H * 3}; g.add(spin); return g;
}
function c3bird(){
  const g = new THREE.Group(), mat = new THREE.MeshBasicMaterial({color: 0x2a2f38, side: THREE.DoubleSide});
  const wg = s => { const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, -.05, 0, 0, .06, s * .26, 0, -.02], 3)); const m = new THREE.Mesh(geo, mat); g.add(m); return m; };
  g.userData.w = [wg(1), wg(-1)]; const b = new THREE.Mesh(c3boxG(.04, .04, .16), mat); g.add(b); return g;
}
