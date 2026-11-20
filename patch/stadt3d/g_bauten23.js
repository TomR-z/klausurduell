
/* ── v2.3: neue Gebäude in 3D ── */
function c3rotor(K, x, y, z, r = .32, ry = 0){
  const rk = new C3Kit(); rk.ball("white", .03, 0, 0, 0, 0);
  for (let i = 0; i < 3; i++) { const a = i * 2.094; rk.put("white", c3boxG(.035, r, .012).translate(0, r / 2, 0), 0, 0, .02, 0, 0, a); }
  const g = rk.build(false); K.add(g, "rotor", {sp: 2 + Math.random()}).position.set(x, y, z); g.rotation.y = ry;
}
function c3kraftwerk(K, L){
  K.box("gravel", 1.8, .01, 1.8);
  K.push(-.3, 0, -.45); K.box("metal", 1.0, .5 + .05 * L, .6); K.box("red", 1.02, .05, .62, 0, .32, 0); K.box("glassL", .9, .1, .02, 0, .18, .305); K.box("roofFlat", 1.06, .04, .66, 0, .5 + .05 * L, 0);
  c3door(K, -.3, .3, .2, .26); K.pop();
  const ch = 1.1 + .15 * L; for (let i = 0; i < 4; i++) K.cyl(i % 2 ? "white" : "red", .07 - i * .004, ch / 4, .12, i * ch / 4, -.62, 8); K.emit.push([.12, ch + .05, -.62]);
  K.push(.55, 0, -.45); K.box("concrete", .5, .04, .5); for (const x of [-.12, .12]) { K.box("dark", .16, .2, .22, x, .04, 0); for (let i = 0; i < 4; i++) K.box("dark", .17, .015, .23, x, .07 + i * .04, 0); K.cyl("white", .015, .1, x, .24, .06, 6); K.cyl("white", .015, .1, x, .24, -.06, 6); } K.pop();
  K.push(.62, 0, .45); for (const [a, b] of [[-1,-1],[1,-1],[-1,1],[1,1]]) K.beam("steel", [a * .1, 0, b * .1], [a * .03, 1.3, b * .03], .02);
  for (const y of [.5, .9, 1.2]) { K.box("steel", .4, .015, .02, 0, y, 0); } K.beam("steel", [-.1, 0, .1], [.1, .6, .1], .01); K.beam("steel", [.1, 0, -.1], [-.1, .6, -.1], .01); K.pop();
  const nT = Math.min(3, Math.max(0, L - 1));
  for (let i = 0; i < nT; i++) { const x = -.7 + i * .42, z = .55; K.cyl("white", .03, 1.35, x, 0, z, 8, .045); K.box("white", .08, .07, .14, x, 1.33, z); c3rotor(K, x, 1.37, z + .08, .34); }
  if (L >= 3) for (let i = 0; i < 3; i++) K.put("solar", c3boxG(.32, .02, .16), -.55 + i * .36, .12, .15, 0, -.45);
  if (L >= 5) { K.box("contB", .4, .2, .2, .1, 0, .2); K.box("contB", .4, .2, .2, .1, 0, .0); }
}
function c3kieswerk(K, L){
  K.box("sand", 1.8, .01, 1.8);
  K.cyl("water", .42, .02, -.45, 0, -.45, 12); K.box("yellow", .22, .08, .12, -.45, .02, -.45); K.beam("yellow", [-.4, .1, -.45], [-.15, .25, -.45], .03);
  K.push(.35, 0, -.35); for (const [a, b] of [[-1,-1],[1,-1],[-1,1],[1,1]]) K.box("steel", .03, .5, .03, a * .15, 0, b * .15); K.box("metal", .4, .3, .4, 0, .5, 0); K.box("roofFlat", .44, .03, .44, 0, .8, 0);
  for (let i = 0; i < 3; i++) K.beam("steel", [-.15 + i * .15, .5, .2], [-.25 + i * .15, .12, .45], .03); K.pop();
  K.beam("dark", [-.15, .12, -.45], [.2, .7, -.35], .06);
  const piles = 2 + Math.min(3, L); for (let i = 0; i < piles; i++) K.cone(i % 2 ? "gravel" : "sand", .22 + .02 * L, .2 + .02 * L, -.6 + i * .32, 0, .55, 7);
  if (L >= 3) { K.beam("dark", [.6, .1, .2], [.75, .5, -.2], .05); K.cone("gravel", .25, .25, .65, 0, .3, 7); }
  if (L >= 4) { K.box("orange", .32, .1, .2, .1, .02, .15); K.box("orange", .12, .12, .2, .22, .1, .15); K.box("glass", .02, .07, .16, .28, .14, .15); }
}
function c3stahlwerk(K, L){
  K.box("concrete", 1.8, .01, 1.8);
  const w = 1.1 + .05 * L; K.push(-.15, 0, -.35); K.box("steel", w, .55 + .05 * L, .7);
  for (let i = 0; i < 4; i++) K.put("metal", c3boxG(w / 4, .04, .38), -w / 2 + w / 8 + i * w / 4, .62 + .05 * L, -.12, 0, .45);
  K.box("glow", .3, .22, .02, -.15, 0, .355); K.box("dark", .34, .02, .03, -.15, .22, .36); K.pop();
  for (let i = 0; i < Math.min(3, 1 + Math.floor(L / 2)); i++) { const x = .25 + i * .25, h = 1.3 + .15 * L; K.cyl("dark", .07, h, x - .15, 0, -.7, 8); K.cyl("red", .072, .06, x - .15, h - .12, -.7, 8); K.emit.push([x - .15, h + .05, -.7]); }
  K.push(.35, 0, .45); for (let l = 0; l < 2 + (L > 2); l++) for (let i = 0; i < 4; i++) { K.box("steel", .6, .04, .03, 0, l * .05, -.12 + i * .08); } K.pop();
  K.push(-.55, 0, .5); for (let i = 0; i < 2 + (L > 3); i++) K.put("steel", new THREE.CylinderGeometry(.09, .09, .1, 10).rotateX(Math.PI / 2), i * .22, .09, 0); K.pop();
}
function c3lager(K, L, fill){
  K.box("paving", 1.8, .012, 1.8);
  const w = 1.2 + .06 * L, d = .8; K.push(0, 0, -.25); K.box("plinth", w, .12, d); K.box("metal", w, .4 + .05 * L, d, 0, .12, 0);
  K.push(0, .52 + .05 * L, 0); c3gable(K, "metal", "roofDark", w, d, .25, .05); K.pop();
  for (const x of [-w / 3, 0, w / 3]) { K.box("dark", .26, .32, .02, x, .02, d / 2 + .005); for (let i = 0; i < 6; i++) K.box("grey", .26, .006, .021, x, .05 + i * .05, d / 2 + .006); }
  K.box("concrete", w, .08, .2, 0, 0, d / 2 + .1); K.pop();
  if (L >= 4) { K.push(-.62, 0, .45); K.box("brick", .5, .4, .4); K.push(0, .4, 0); c3gable(K, "brick", "roofDark", .5, .4, .14, .04); K.pop(); K.pop(); }
  const n = Math.round(c3clamp(fill, 0, 1) * 9);
  for (let i = 0; i < n; i++) { const x = .1 + (i % 3) * .22, z = .38 + Math.floor(i / 3) * .2; K.box("wood", .18, .025, .16, x, 0, z); K.box(["timber", "brick", "concrete"][i % 3], .15, .12, .14, x, .025, z); }
  K.push(-.25, 0, .55); K.box("yellow", .16, .07, .1); K.box("yellow", .05, .1, .1, -.05, .07, 0); K.box("dark", .02, .2, .08, .09, 0, 0); K.pop();
}
function c3fabBase(K, w, d, h, wall, roof, x = 0, z = -.3){
  K.push(x, 0, z); K.box("plinth", w + .02, .08, d + .02); K.box(wall, w, h, d);
  K.push(0, h, 0); c3gable(K, wall, roof, w, d, .22, .05); K.pop();
  c3door(K, -w / 4, d / 2, .26, .3); c3win(K, w / 4, h * .45, d / 2, 0, .3, .12, w * 10, false); K.pop();
}
function c3misch(K, L){
  K.box("concrete", 1.8, .012, 1.8);
  K.push(.35, 0, -.35); K.box("concrete", .45, 1.0 + .1 * L, .45); K.box("metal", .5, .35, .5, 0, 1.0 + .1 * L, 0); K.box("roofFlat", .54, .03, .54, 0, 1.35 + .1 * L, 0); K.box("yellow", .48, .03, .48, 0, .9 + .1 * L, 0);
  K.box("dark", .5, .12, .6, 0, .3, 0); K.pop();
  for (let i = 0; i < 2; i++) { const x = -.25 + i * .3; K.cyl("grey", .13, .8, x, .3, -.55, 10); K.put("concrete", new THREE.ConeGeometry(.13, .2, 10).rotateX(Math.PI), x, .2, -.55); for (const a of [-1, 1]) K.box("steel", .025, .3, .025, x + a * .09, 0, -.55); }
  K.beam("steel", [-.55, .1, .45], [.2, .95, -.25], .07); K.beam("dark", [-.55, .16, .45], [.2, 1.0, -.25], .02);
  for (let i = 0; i < 3; i++) { K.box("concrete", .3, .14, .03, -.65 + i * .33, 0, .72); K.cone(["gravel", "sand", "gravel"][i], .14, .12, -.65 + i * .33, 0, .58, 7); }
  K.push(.45, 0, .45); K.box("dark", .45, .05, .2, 0, .04, 0); K.box("orange", .14, .15, .2, .17, .06, 0); K.put("white", new THREE.CylinderGeometry(.09, .07, .26, 10).rotateZ(Math.PI / 2 - .16), -.05, .18, 0); K.pop();
}
function c3mauer(K, L){
  K.box("paving", 1.8, .012, 1.8);
  c3fabBase(K, 1.3, .65, .42 + .04 * L, "brick", "roofDark", -.15, -.45);
  K.push(.62, 0, .1); for (let i = 0; i < 1 + (L > 1); i++) { K.put("steel", new THREE.CylinderGeometry(.13, .13, .9, 12).rotateX(Math.PI / 2), i * -.32, .2, 0); K.box("steel", .04, .08, .04, i * -.32, 0, .3); K.box("steel", .04, .08, .04, i * -.32, 0, -.3); } K.pop();
  for (let p = 0; p < 2 + L; p++) { const x = -.7 + p * .3, z = .6; K.box("wood", .22, .025, .2, x, 0, z); for (let l = 0; l < 3; l++) K.box("white", .2, .05, .18, x, .025 + l * .052, z); }
}
function c3glas(K, L){
  K.box("paving", 1.8, .012, 1.8);
  K.push(-.1, 0, -.35); K.box("white", 1.3, .45 + .04 * L, .7); for (let i = 0; i < 4; i++) { K.put("glassB", c3boxG(.325, .03, .42), -.49 + i * .325, .55 + .04 * L, -.08, 0, .55); K.put("white", c3boxG(.325, .2, .03), -.49 + i * .325, .45 + .04 * L, .12, 0, 0); }
  c3door(K, -.35, .35, .26, .3); c3win(K, .25, .2, .35, 0, .4, .14, 5, false, "glassB"); K.pop();
  K.cyl("brick", .08, 1.3 + .1 * L, .7, 0, -.7, 8); K.emit.push([.7, 1.35 + .1 * L, -.7]);
  for (let r = 0; r < 1 + (L > 1); r++) { K.push(-.4 + r * .7, 0, .55); K.beam("steel", [-.25, 0, -.08], [-.25, .35, 0], .02); K.beam("steel", [.25, 0, -.08], [.25, .35, 0], .02); K.box("steel", .52, .02, .2, 0, 0, 0);
    for (let i = 0; i < 4; i++) { K.put("timber", c3boxG(.18, .26, .02), -.18 + i * .12, .16, .02 + i * .01, 0, -.15); K.put("glassB", c3boxG(.15, .22, .022), -.18 + i * .12, .16, .02 + i * .01, 0, -.15); } K.pop(); }
}
function c3abbund(K, L){
  K.box("gravel", 1.8, .01, 1.8);
  K.push(-.15, 0, -.35); for (const x of [-.6, -.2, .2, .6]) for (const z of [-.3, .3]) K.box("woodDark", .05, .5, .05, x, 0, z);
  K.push(0, .5, 0); c3gable(K, "timber", "roofDark", 1.3, .7, .25, .06); K.pop(); K.box("dark", .3, .2, .3, -.2, 0, 0); K.box("yellow", .06, .25, .06, -.2, .2, 0); K.box("timber", .7, .04, .06, .15, .18, 0); K.pop();
  for (let i = 0; i < 1 + L; i++) { K.push(-.6 + i * .32, 0, .55); K.beam("timber", [-.14, .02, 0], [0, .26, 0], .03); K.beam("timber", [.14, .02, 0], [0, .26, 0], .03); K.beam("timber", [-.14, .03, 0], [.14, .03, 0], .03); K.beam("timber", [0, .03, 0], [0, .26, 0], .02); K.pop(); }
  K.push(.62, 0, .2); for (let l = 0; l < 3; l++) for (let i = 0; i < 4; i++) K.box("timber", .07, .05, .45, -.12 + i * .08, l * .055, 0); K.pop();
}
function c3fertig(K, L){
  K.box("concrete", 1.8, .012, 1.8);
  c3fabBase(K, 1.5, .75, .55 + .05 * L, "metal", "roofDark", 0, -.45);
  for (const x of [-.85, .85]) K.box("yellow", .06, .62, .06, x, 0, .45); K.box("yellow", 1.76, .07, .08, 0, .62, .45); K.box("dark", .14, .08, .12, .2, .55, .45); K.box("dark", .006, .3, .006, .2, .25, .45);
  K.box("concrete", .5, .05, .3, .2, .2, .45);
  for (let s = 0; s < 2 + L; s++) K.box("concrete", .55, .05, .32, -.45, s * .055, .45);
  K.push(.55, 0, .45); K.box("steel", .3, .02, .2); for (let i = 0; i < 2; i++) K.put("concrete", c3boxG(.3, .32, .04), 0, .18, -.04 + i * .08, 0, .08); K.pop();
}
function c3mfh(K, L, id){
  const pm = "pl" + ((id + 2) % 6), fl = 2 + L, fh = .3, w = 1.55, d = 1.05, h = fl * fh + .05;
  K.box("paving", 1.8, .012, .4, 0, 0, .7); K.push(0, 0, -.15); K.box("plinth", w + .02, .07, d + .02); K.box(pm, w, h, d);
  c3wins(K, w, d, fl, fh, {cols: 5, side: 3, seed: id * 3, skip: 2, wh: .15}); c3door(K, 0, d / 2, .24, .26); K.box("white", .5, .03, .2, 0, .28, d / 2 + .1);
  for (let f = 1; f < fl; f++) for (const x of [-.5, .5]) { K.push(x, f * fh + .02, d / 2); K.box("white", .36, .03, .18, 0, 0, .09); K.box("steel", .36, .09, .012, 0, .03, .18); K.pop(); }
  if (L < 3) { K.push(0, h, 0); c3gable(K, pm, "roofRed", w, d, .4); K.pop(); } else { c3flat(K, w, d, h); K.box("lawn", .6, .05, .5, .4, h + .04, 0); c3tree(K, .4, 0, .45, false, h + .09); K.box("wood", .5, .02, .3, -.4, h + .04, .1); }
  K.pop(); c3tree(K, -.75, .75, .6); c3tree(K, .75, .75, .6, true);
}
function c3schule(K){
  K.box("paving", 1.8, .012, .9, 0, 0, .45); for (const [w, d, x, z] of [[.9, .02, 0, .2], [.9, .02, 0, .7], [.02, .5, -.45, .45], [.02, .5, .45, .45]]) K.box("line", w, .004, d, x, .013, z);
  K.push(-.2, 0, -.5); K.box("plinth", 1.32, .07, .62); K.box("pl1", 1.3, .7, .6); c3wins(K, 1.3, .6, 2, .34, {cols: 6, side: 2, seed: 12, skip: 2, wh: .17}); c3door(K, 0, .3, .26, .3);
  c3flat(K, 1.3, .6, .72); K.box("white", .26, .3, .26, 0, .72, 0); c3clockFace(K, .92, .13); K.pop();
  K.push(.62, 0, .05); K.box("pl1", .45, .55, .8); c3wins(K, .45, .8, 1, .5, {cols: 1, side: 3, seed: 30, wh: .25}); K.box("roofFlat", .5, .04, .85, 0, .55, 0); K.pop();
  K.cyl("steel", .012, .9, -.8, 0, .1, 6); const f = K.add(new THREE.Mesh(c3boxG(.24, .14, .01).translate(.12, 0, 0), C3.M.flag), "flag"); f.position.set(-.8, .82, .1);
  K.box("dark", .03, .3, .03, .4, 0, .45); K.box("white", .14, .1, .01, .4, .3, .45);
}
function c3feuer(K){
  K.box("concrete", 1.8, .012, .7, 0, 0, .55);
  K.push(-.1, 0, -.3); K.box("brick", 1.3, .55, .75); for (let i = 0; i < 3; i++) { const x = -.42 + i * .42; K.box("red", .34, .38, .02, x, 0, .38); for (let j = 0; j < 4; j++) K.box("white", .34, .008, .021, x, .08 + j * .08, .385); }
  K.box("white", 1.32, .06, .77, 0, .55, 0); K.box("roofFlat", 1.32, .03, .77, 0, .61, 0); K.box("red", .5, .08, .01, 0, .44, .39); K.pop();
  K.push(.7, 0, -.4); K.box("brick", .3, 1.5, .3); K.box("red", .34, .08, .34, 0, 1.5, 0); K.box("roofFlat", .34, .03, .34, 0, 1.58, 0); for (let y = .4; y < 1.4; y += .35) c3win(K, 0, y, .15, 0, .1, .16, y * 9, false); K.pop();
  K.push(-.1, 0, .55); K.box("red", .7, .18, .26, 0, .05, 0); K.box("red", .2, .14, .26, .3, .23, 0); K.box("glass", .02, .08, .22, .405, .26, 0); K.box("white", .7, .03, .262, 0, .14, 0); K.box("steel", .5, .03, .1, -.08, .26, 0);
  for (const x of [.22, -.05, -.25]) for (const z of [.13, -.13]) K.put("black", new THREE.CylinderGeometry(.05, .05, .04, 10).rotateX(Math.PI / 2), x, .05, z); K.box("ledR", .06, .03, .08, .3, .37, 0); K.pop();
}
function c3buero(K){
  K.box("paving", 1.8, .012, 1.8);
  K.push(0, 0, -.1); K.box("concrete", 1.0, .25, 1.0); K.box("glassB", .95, .2, .95, 0, .02, 0);
  const H = 3.3; K.box("glassB", .8, H, .8, 0, .25, 0); for (let y = .55; y < H + .2; y += .3) K.box("white", .82, .025, .82, 0, y, 0);
  for (const [x, z] of [[-.4, -.4], [.4, -.4], [-.4, .4], [.4, .4]]) K.box("white", .04, H, .04, x, .25, z);
  K.box("white", .84, .08, .84, 0, H + .25, 0); K.box("metal", .3, .2, .3, .1, H + .33, -.1); K.cyl("steel", .012, .5, -.25, H + .33, .2, 6); K.ball("ledR", .02, -.25, H + .84, .2, 1); K.pop();
  K.box("white", .7, .03, .3, 0, .3, .55); c3tree(K, -.75, .75, .6); c3tree(K, .75, .75, .6);
}
function c3turm(K){
  K.box("paving", 1.8, .012, 1.8); K.cyl("concrete", .55, .3, 0, 0, 0, 10); c3door(K, 0, .55, .2, .24);
  K.cyl("concrete", .1, 3.6, 0, .3, 0, 10, .16); K.cyl("glassB", .32, .2, 0, 2.8, 0, 14); K.cyl("white", .34, .04, 0, 3.0, 0, 14); K.cyl("white", .34, .04, 0, 2.76, 0, 14); K.ball("white", .2, 0, 3.15, 0, 1);
  for (let i = 0; i < 5; i++) K.cyl(i % 2 ? "white" : "red", .04 - i * .006, .16, 0, 3.6 + i * .16, 0, 6); K.ball("ledR", .03, 0, 4.42, 0, 1);
}
function c3stadion(K){
  K.box("paving", 1.86, .012, 1.86);
  K.put("concrete", new THREE.CylinderGeometry(.9, .92, .42, 28, 1, true).scale(1, 1, .74), 0, .21, 0);
  for (let i = 0; i < 5; i++) { const r0 = .5 + i * .08; K.put(["red", "white", "red", "white", "red"][i], new THREE.RingGeometry(r0, r0 + .085, 28).rotateX(-Math.PI / 2).scale(1, 1, .74), 0, .06 + i * .075, 0);
    K.put("concrete", new THREE.CylinderGeometry(r0, r0, .075, 28, 1, true).scale(1, 1, .74), 0, .025 + i * .075, 0); }
  K.put("lawn", new THREE.CylinderGeometry(.5, .5, .03, 28).scale(1, 1, .74), 0, .015, 0);
  K.box("line", .66, .004, .012, 0, .032, 0); K.box("line", .012, .004, .66, 0, .032, 0); K.put("line", new THREE.TorusGeometry(.09, .006, 4, 20).rotateX(Math.PI / 2), 0, .033, 0);
  K.box("white", .03, .06, .14, -.52, .03, 0); K.box("white", .03, .06, .14, .52, .03, 0);
  K.put("metal", new THREE.CylinderGeometry(.95, .95, .03, 28, 1, false, -0.9, 1.8).scale(1, 1, .74), 0, .5, 0);
  for (const [x, z] of [[-.86, -.62], [.86, -.62], [-.86, .62], [.86, .62]]) { K.box("steel", .03, .95, .03, x, 0, z); K.box("lamp", .16, .07, .05, x, .95, z); }
}
function c3kathe(K){
  K.box("paving", 1.8, .012, 1.8);
  K.push(0, 0, -.2); K.box("cream", .62, .8, 1.2); K.push(0, .8, 0, Math.PI / 2); c3gable(K, "cream", "roofDark", 1.2, .62, .5, .04); K.pop();
  for (let i = 0; i < 4; i++) for (const s of [-1, 1]) { K.box("cream", .08, .55, .12, s * .35, 0, -.45 + i * .3); c3win(K, s * .31, .2, -.3 + i * .3 - .15, s * Math.PI / 2, .1, .35, i * 3 + s, false, "glassB"); }
  for (const s of [-1, 1]) { K.push(s * .22, 0, .62); K.box("cream", .26, 1.5, .26); c3win(K, 0, .9, .13, 0, .08, .25, s * 7, false, "glassB"); K.push(0, 1.5, 0); c3hip(K, "roofDark", .3, .3, .8); K.pop(); K.ball("gold", .03, 0, 2.33, 0, 1); K.pop(); }
  K.put("glassB", new THREE.CylinderGeometry(.13, .13, .02, 14).rotateX(Math.PI / 2), 0, .95, .61); c3door(K, 0, .6, .2, .34); K.pop();
}
function c3deko(K, k, id){
  const r = c3rng(id * 17 + 3);
  K.box("paving", 1.8, .012, 1.8); K.box("lawn", 1.6, .015, .3, 0, 0, -.72); K.box("lawn", 1.6, .015, .3, 0, 0, .72);
  const bench = (x, z, ry) => { K.push(x, 0, z, ry); K.box("wood", .3, .02, .08, 0, .07, 0); K.box("wood", .3, .08, .02, 0, .09, -.04); K.box("dark", .02, .07, .07, -.13, 0, 0); K.box("dark", .02, .07, .07, .13, 0, 0); K.pop(); };
  if (k === "bank") { bench(-.35, .3, 0); bench(.35, .3, 0); bench(0, -.35, Math.PI); c3tree(K, -.65, -.2, .8); c3tree(K, .65, -.2, .75, true); K.box("flowY", .4, .04, .1, 0, 0, .05); }
  else if (k === "brunnen") { K.cyl("concrete", .5, .1, 0, 0, 0, 16); K.cyl("water", .44, .105, 0, 0, 0, 16); K.cyl("concrete", .08, .35, 0, .1, 0, 10); K.cyl("concrete", .2, .05, 0, .45, 0, 12); K.cyl("water", .17, .055, 0, .45, 0, 12);
    K.add(new THREE.Mesh(new THREE.CylinderGeometry(.012, .03, .25, 6), C3.M.jet), "jet").position.set(0, .5, 0); bench(-.7, 0, Math.PI / 2); bench(.7, 0, -Math.PI / 2); }
  else if (k === "laterne") { for (const [x, z] of [[-.5, -.5], [.5, -.5], [-.5, .5], [.5, .5], [0, 0]]) c3lampPost(K, x, z, r() * 6); bench(0, .4, 0); bench(0, -.4, Math.PI); K.box("flowR", .3, .04, .3, -.5, 0, 0); K.box("flowP", .3, .04, .3, .5, 0, 0); }
  else if (k === "statue" || k === "goldstatue") { const m = k === "goldstatue" ? "gold" : "white"; K.box("concrete", .4, .3, .4); K.box("concrete", .46, .06, .46, 0, .3, 0);
    K.box(m, .1, .2, .08, 0, .36, 0); K.box(m, .16, .2, .1, 0, .56, 0); K.ball(m, .06, 0, .82, 0, 1); K.box(m, .05, .2, .05, .11, .6, .04); K.box("yellow", .1, .04, .1, .11, .8, .04);
    bench(-.55, .55, 0); bench(.55, .55, 0); c3tree(K, -.65, -.6, .7); c3tree(K, .65, -.6, .7, true); }
  else if (k === "blumen") { for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { K.box("dirt", .3, .05, .3, -.6 + i * .4, 0, -.6 + j * .4); for (let f = 0; f < 4; f++) K.box(["flowR", "flowY", "flowP", "white"][(i + j + f) % 4], .05, .05, .05, -.66 + i * .4 + (f % 2) * .12, .05, -.66 + j * .4 + (f > 1) * .12); } }
  else if (k === "baum") { K.cyl("trunk", .07, .6, 0, 0, 0, 7); K.ball("gold", .5, 0, 1.0, 0, 0); K.ball("orange", .32, .25, 1.25, .1, 0); K.ball("gold", .28, -.25, 1.2, -.1, 0); bench(0, .65, 0); for (let i = 0; i < 6; i++) K.box("orange", .05, .01, .04, (r() - .5) * 1.2, .015, (r() - .5) * 1.2); }
}
const C3D23 = {kieswerk: (K, L) => c3kieswerk(K, L), stahlwerk: (K, L) => c3stahlwerk(K, L), mischanlage: (K, L) => c3misch(K, L), mauersteinwerk: (K, L) => c3mauer(K, L), glaserei: (K, L) => c3glas(K, L),
  abbundhalle: (K, L) => c3abbund(K, L), fertigteilwerk: (K, L) => c3fertig(K, L), mehrfamilienhaus: (K, L, id) => c3mfh(K, L, id), schule: K => c3schule(K), feuerwache: K => c3feuer(K), buero: K => c3buero(K),
  fernsehturm: K => c3turm(K), stadion: K => c3stadion(K), kathedrale: K => c3kathe(K)};
