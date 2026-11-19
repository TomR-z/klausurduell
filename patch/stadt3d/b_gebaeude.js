
/* ── Gebäude je Typ und Stufe (lokal: Vorderseite zeigt nach +z, Boden y = 0, Grundstück 1,8 × 1,8) ── */
function c3wohn(K, L, id){
  const pm = "pl" + (id % 6);
  K.box("paving", .24, .012, .62, 0, 0, .6);
  if (L <= 2) {
    const w = L === 1 ? 1.0 : 1.14, d = L === 1 ? .78 : .9, fl = L, fh = .32, h = fl*fh + .05;
    K.push(0, 0, -.12); K.box("plinth", w + .02, .07, d + .02); K.box(pm, w, h, d);
    c3wins(K, w, d, fl, fh, {cols: L === 1 ? 2 : 3, side: 1, seed: id, skip: L === 1 ? undefined : 1}); c3door(K, 0, d/2);
    K.push(0, h, 0); c3gable(K, pm, "roofRed", w, d, .34 + .05*L); K.pop();
    K.box("brick", .1, .34, .1, w*.28, h + .08, -.18);
    if (L === 2) { K.push(-.22, h + .08, d*.2); K.box(pm, .26, .16, .22); c3win(K, 0, .03, .11, 0, .13, .1, id + 5, false); K.push(0, .16, 0); c3gable(K, pm, "roofRed", .26, .24, .12, .03); K.pop(); K.pop(); }
    K.pop();
    K.box("hedge", .6, .14, .12, -.56, 0, .82); K.box("hedge", .6, .14, .12, .56, 0, .82);
    c3tree(K, .62, .45, .85 + (id % 3) * .1, id % 2 === 0);
    if (L === 2) { K.box("wood", .3, .02, .3, -.6, 0, .45); K.box("flowR", .5, .05, .08, .55, 0, .66); }
  } else if (L === 3) {
    const w = 1.22, d = 1.0, fh = .31, h = 3*fh + .05;
    K.push(0, 0, -.1); K.box("brick", w, h, d);
    for (let f = 1; f <= 3; f++) K.box("white", w + .03, .03, d + .03, 0, f*fh + .02, 0);
    c3wins(K, w, d, 3, fh, {cols: 4, side: 2, seed: id, skip: 1, wh: .16});
    c3door(K, -.15, d/2); K.box("white", .34, .04, .14, -.15, 0, d/2 + .06);
    K.push(.15, fh*2 + .03, d/2); K.box("white", .42, .03, .2, 0, 0, .1); K.box("steel", .42, .1, .012, 0, .03, .2); K.box("steel", .012, .1, .2, .21, .03, .1); K.box("steel", .012, .1, .2, -.21, .03, .1); K.pop();
    K.push(0, h, 0); c3gable(K, "brick", "roofDark", w, d, .44);
    for (const x of [-.3, .3]) { K.push(x, .08, .22); K.box("white", .2, .16, .2); c3win(K, 0, .03, .1, 0, .11, .09, id + x*10, false); K.push(0, .16, 0); c3gable(K, "white", "roofDark", .2, .22, .1, .03); K.pop(); K.pop(); }
    K.pop(); K.box("brick", .1, .3, .1, -.4, h + .05, -.3); K.pop();
    c3tree(K, .7, .62, .75); K.box("hedge", .5, .13, .1, .55, 0, .85);
  } else if (L === 4) {
    const w = 1.44, d = 1.2, fh = .31, h = 4*fh + .04;
    K.push(0, 0, -.08); K.box("brick", w, fh + .02, d); K.box(pm, w, h - fh, d, 0, fh + .02, 0);
    c3wins(K, w, d, 4, fh, {cols: 4, side: 3, seed: id, skip: 1, wh: .16});
    c3door(K, -.18, d/2, .22, .26); K.box("white", .5, .03, .22, -.18, .28, d/2 + .1);
    for (let f = 1; f < 4; f++) for (const x of [-.36, .36]) { K.push(x, f*fh + .02, d/2); K.box("white", .32, .03, .2, 0, 0, .1); K.box("glassB", .32, .09, .012, 0, .03, .2); K.pop(); }
    c3flat(K, w, d, h);
    for (let i = 0; i < 3; i++) K.put("solar", c3boxG(.32, .02, .22), -.4 + i*.4, h + .12, -.15, 0, -.45);
    K.box("metal", .2, .14, .2, .45, h + .04, .3); K.pop();
    K.box("lawn", 1.6, .012, .3, 0, 0, .75); c3tree(K, -.72, .72, .7); c3tree(K, .72, .72, .65, true);
  } else {
    const w = 1.5, d = 1.32, fh = .3, fl = 6, h = fl*fh + .04;
    K.push(0, 0, -.06); K.box("glassB", w - .1, fh, d - .1); K.box("white", w, h - fh, d, 0, fh, 0); K.box("dark", w + .02, .04, d + .02, 0, fh - .02, 0);
    for (let f = 1; f < fl; f++) { const y = f*fh + .08;
      K.box(c3lit(id + f) ? "glassL" : "glass", w * .9, .15, .02, 0, y, d/2 + .005); K.box(c3lit(id + f + 9) ? "glassL" : "glass", w * .9, .15, .02, 0, y, -d/2 - .005);
      K.box(c3lit(id + f + 3) ? "glassL" : "glass", .02, .15, d * .86, w/2 + .005, y, 0); K.box(c3lit(id + f + 5) ? "glassL" : "glass", .02, .15, d * .86, -w/2 - .005, y, 0);
      if (f % 2) { K.box("white", .5, .03, .22, f % 4 === 1 ? -.38 : .38, f*fh, d/2 + .11); K.box("glassB", .5, .09, .012, f % 4 === 1 ? -.38 : .38, f*fh + .03, d/2 + .22); } }
    c3flat(K, w, d, h); K.box("glassB", .8, .28, .6, -.25, h + .04, -.2); K.box("white", .9, .03, .7, -.25, h + .32, -.2);
    K.box("lawn", .5, .05, .5, .4, h + .04, .3); c3tree(K, .4, .3, .5, false, h + .09); K.pop();
    K.box("paving", 1.7, .012, .3, 0, 0, .76); c3lampPost(K, .78, .8); c3lampPost(K, -.78, .8);
  }
}
function c3rathaus(K, L){
  const w = L >= 5 ? 1.24 : 1.36, d = 1.0, fh = .34, fl = L >= 3 ? 3 : 2, h = fl*fh + .06;
  K.box("paving", 1.8, .012, .55, 0, 0, .62);
  K.push(0, 0, -.12);
  K.box("plinth", w + .02, .22, d + .02); K.box("cream", w, h - .22, d, 0, .22, 0); K.box("white", w + .05, .045, d + .05, 0, h - .02, 0);
  for (let f = 1; f < fl; f++) K.box("white", w + .03, .025, d + .03, 0, f*fh, 0);
  c3wins(K, w, d, fl, fh, {cols: 5, side: 3, ww: .12, wh: .2, seed: 3, skip: 2});
  c3door(K, 0, d/2, .26, .32); K.box("white", .54, .035, .16, 0, 0, d/2 + .08); K.box("white", .44, .035, .08, 0, .035, d/2 + .05);
  K.push(0, h + .025, 0); c3hip(K, "roofRed", w + .1, d + .1, .32); K.pop();
  const tw = .36, th = .55 + .2*L;
  K.box("cream", tw, th, tw, 0, h, 0); K.box("white", tw + .04, .035, tw + .04, 0, h + th - .02, 0);
  c3clockFace(K, h + th - .16, tw/2);
  for (let i = 0; i < 4; i++) { const ry = i*Math.PI/2; c3win(K, Math.sin(ry)*tw/2, h + th*.45, Math.cos(ry)*tw/2, ry, .08, .16, 40 + i, false); }
  if (L < 3) { K.push(0, h + th + .015, 0); c3hip(K, "roofRed", tw + .06, tw + .06, .32); K.pop(); }
  else { K.push(0, h + th + .015, 0); c3hip(K, "copper", tw + .06, tw + .06, .6 + .05*L); K.pop(); K.ball("gold", .035, 0, h + th + .68 + .05*L, 0, 1); }
  if (L >= 4) {
    for (const x of [-.27, -.09, .09, .27]) K.cyl("white", .04, .5, x, .07, d/2 + .2, 8);
    K.box("white", .7, .05, .3, 0, .57, d/2 + .14); K.push(0, .62, d/2 + .14); c3gable(K, "white", "white", .66, .3, .14, .03); K.pop();
    K.box("white", .7, .035, .32, 0, 0, d/2 + .16);
  }
  if (L >= 5) for (const s of [-1, 1]) { K.push(s * (w/2 + .14), 0, .05); K.box("plinth", .28, .2, .74); K.box("cream", .28, .55, .74, 0, .2, 0); c3wins(K, .28, .74, 2, .34, {cols: 1, side: 2, ww: .1, wh: .18, seed: 60 + s, back: true});
    K.push(0, .75, 0); c3hip(K, "roofRed", .34, .8, .2); K.pop(); K.pop(); }
  K.pop();
  if (L >= 2) { K.cyl("concrete", .17, .07, .55, 0, .66, 12); K.cyl("water", .14, .075, .55, 0, .66, 12); K.add(new THREE.Mesh(new THREE.CylinderGeometry(.015, .03, .2, 6), C3.M.jet), "jet").position.set(.55, .08, .66); }
  if (L >= 3) { K.cyl("steel", .012, 1.0, -.7, 0, .7, 6); const f = K.add(new THREE.Mesh(c3boxG(.28, .17, .01).translate(.14, 0, 0), C3.M.flag), "flag"); f.position.set(-.7, .88, .7); }
  c3tree(K, -.75, .3, .7); c3tree(K, .78, .3, .7);
  c3lampPost(K, -.3, .82); c3lampPost(K, .3, .82, Math.PI);
}
function c3park(K, id){
  const r = c3rng(id * 31);
  K.box("lawn", 1.86, .01, 1.86); K.box("gravel", 1.86, .016, .2); K.box("gravel", .2, .016, 1.86);
  K.cyl("concrete", .27, .07, 0, 0, 0, 12); K.cyl("water", .23, .075, 0, 0, 0, 12);
  K.add(new THREE.Mesh(new THREE.CylinderGeometry(.012, .028, .22, 6), C3.M.jet), "jet").position.set(0, .08, 0);
  for (const [qx, qz] of [[-1,-1],[1,-1],[-1,1],[1,1]]) { const n = 1 + (r() < .6 ? 1 : 0);
    for (let i = 0; i < n; i++) c3tree(K, qx * (.42 + r() * .35), qz * (.42 + r() * .35), .75 + r() * .45, r() < .35); }
  for (const [x, z, ry] of [[.42, .16, 0], [-.42, -.16, Math.PI]]) { K.push(x, 0, z, ry); K.box("wood", .3, .02, .08, 0, .07, 0); K.box("wood", .3, .08, .02, 0, .09, -.04); K.box("dark", .02, .07, .07, -.13, 0, 0); K.box("dark", .02, .07, .07, .13, 0, 0); K.pop(); }
  K.box("flowR", .3, .04, .08, -.4, 0, .82); K.box("flowY", .3, .04, .08, .4, 0, .82); K.box("flowP", .08, .04, .3, -.82, 0, -.4);
  c3lampPost(K, .16, .5); c3lampPost(K, -.16, -.5, Math.PI);
}
function c3wasser(K, L){
  const H = 1.2 + .3*L, tr = .34 + .03*L, th = .42 + .04*L;
  K.box("concrete", .72, .06, .72);
  if (L === 1) { for (const [x, z] of [[-1,-1],[1,-1],[-1,1],[1,1]]) K.beam("steel", [x*.3, .06, z*.3], [x*.17, H, z*.17], .045);
    for (const y of [.5, 1.0]) { K.beam("steel", [-.25, y, .25], [.25, y + .35, .25], .02); K.beam("steel", [.25, y, -.25], [-.25, y + .35, -.25], .02); K.beam("steel", [.25, y, .25], [.25, y + .35, -.25], .02); K.beam("steel", [-.25, y, -.25], [-.25, y + .35, .25], .02); } }
  else { K.cyl("concrete", .17 + .01*L, H - .06, 0, .06, 0, 12); c3door(K, 0, .18, .12, .22);
    for (let y = .5; y < H - .3; y += .45) c3win(K, 0, y, .18 + .01*L, 0, .05, .12, y*10, false); }
  K.cyl("tank", tr, .22, 0, H - .22, 0, 14, .17); K.cyl("tank", tr, th, 0, H, 0, 14); K.cyl("white", tr + .006, .05, 0, H + th*.55, 0, 14); K.cone("metal", tr + .04, .2, 0, H + th, 0, 14);
  if (L >= 3) { K.cyl("steel", tr + .1, .02, 0, H - .02, 0, 16); K.put("steel", new THREE.CylinderGeometry(tr + .1, tr + .1, .07, 16, 1, true), 0, H + .035, 0); }
  if (L >= 4) { K.push(.58, 0, -.52); for (const [x, z] of [[-1,-1],[1,-1],[-1,1],[1,1]]) K.beam("steel", [x*.12, 0, z*.12], [x*.08, .5, z*.08], .03); K.cyl("tank", .2, .36, 0, .5, 0, 12); K.cone("metal", .22, .1, 0, .86, 0, 12); K.pop(); }
  if (L >= 5) K.ball("ledR", .035, 0, H + th + .22, 0, 1);
  K.push(-.56, 0, .5); K.box("brick", .42, .3, .32); K.box("roofFlat", .46, .03, .36, 0, .3, 0); c3door(K, 0, .16, .12, .2); K.pop();
  K.put("steel", new THREE.CylinderGeometry(.035, .035, .6, 8).rotateZ(Math.PI/2), -.12, .07, .52); K.put("steel", new THREE.CylinderGeometry(.035, .035, .4, 8).rotateX(Math.PI/2), .2, .07, .3);
}
function c3zimmerei(K, L){
  const w = .95 + .07*L, d = .9, h = .42 + .04*L;
  K.box("gravel", 1.8, .01, .7, 0, 0, .55);
  K.push(-.2, 0, -.25); K.box("wood", d, h, w, 0, 0, 0, Math.PI/2); K.box("plinth", d + .02, .06, w + .02, 0, 0, 0, Math.PI/2);
  K.box("woodDark", .44, .36, .03, 0, 0, w/2 + .005); for (let i = 0; i < 4; i++) K.box("dark", .44, .01, .032, 0, .06 + i*.09, w/2 + .006);
  for (const s of [-1, 1]) for (let i = 0; i < 2; i++) c3win(K, s*d/2, h*.5, -w/4 + i*w/2.2, s*Math.PI/2, .14, .12, 70 + i + s, false);
  K.push(0, h, 0, Math.PI/2); c3gable(K, "wood", "roofDark", w, d, .36, .08); K.pop(); K.pop();
  K.push(.6, 0, .5); for (let l = 0; l < 3 + (L > 2 ? 1 : 0); l++) { K.box("dark", .5, .02, .04, 0, l*.075, -.14); K.box("dark", .5, .02, .04, 0, l*.075, .14); for (let i = 0; i < 5; i++) K.box("timber", .07, .05, .4, -.2 + i*.1, l*.075 + .02, 0); } K.pop();
  K.push(-.55, 0, .62); for (let i = 0; i < 4; i++) K.put("trunk", new THREE.CylinderGeometry(.055, .055, .55, 7).rotateZ(Math.PI/2), 0, .055 + (i > 2 ? .095 : 0), -.12 + (i % 3)*.12 + (i > 2 ? .06 : 0)); K.pop();
  if (L >= 2) { K.box("woodDark", .3, .14, .12, .1, 0, .2); K.cone("sand", .1, .07, .32, 0, .28, 6); }
  if (L >= 3) { K.push(.62, 0, -.45); for (const [x, z] of [[-.2,-.25],[.2,-.25],[-.2,.25],[.2,.25]]) K.box("woodDark", .04, .45, .04, x, 0, z);
    K.box("roofDark", .5, .03, .62, 0, .45, 0); K.beam("timber", [-.2, .45, .25], [.2, .3, .25], .025); K.beam("timber", [.2, .45, .25], [-.2, .3, .25], .025); K.pop(); }
  if (L >= 4) { K.push(.05, 0, .72); K.beam("timber", [-.3, .02, 0], [0, .34, 0], .035); K.beam("timber", [.3, .02, 0], [0, .34, 0], .035); K.beam("timber", [-.3, .04, 0], [.3, .04, 0], .035); K.beam("timber", [0, .04, 0], [0, .34, 0], .03); K.pop(); }
  if (L >= 5) { for (const x of [-.85, .85]) K.box("yellow", .05, .75, .05, x, 0, .4); K.box("yellow", 1.76, .06, .06, 0, .75, .4); K.box("dark", .1, .08, .1, .3, .67, .4); K.beam("dark", [.3, .67, .4], [.3, .35, .4], .01); }
}
function c3beton(K, L){
  const n = [1, 2, 2, 3, 3][L-1], sh = .95 + .12*L;
  K.box("concrete", 1.8, .012, 1.8);
  for (let i = 0; i < n; i++) { const x = -.6 + i*.36, z = -.5;
    for (const [a, b] of [[-1,-1],[1,-1],[-1,1],[1,1]]) K.box("steel", .03, .32, .03, x + a*.11, 0, z + b*.11);
    K.put("concrete", new THREE.ConeGeometry(.17, .22, 10).rotateX(Math.PI), x, .43, z); K.cyl("grey", .17, sh, x, .54, z, 12); K.cone("metal", .18, .1, x, .54 + sh, z, 12); K.cyl("white", .172, .04, x, .54 + sh*.7, z, 12); }
  const th = 1.15 + .15*L;
  K.push(.42, 0, -.28); K.box("concrete", .46, th, .46); K.box("metal", .5, .3, .5, 0, th, 0); K.box("roofFlat", .54, .03, .54, 0, th + .3, 0);
  for (let y = .25; y < th - .1; y += .3) c3win(K, 0, y, .23, 0, .3, .08, y*7, false); c3door(K, 0, .23, .14, .2); K.pop();
  K.beam("steel", [-.05, .12, .5], [.32, th - .1, -.1], .07); K.beam("dark", [-.05, .2, .5], [.32, th - .02, -.1], .02);
  const ch = 1.6 + .2*L; for (let i = 0; i < 6; i++) K.cyl(i % 2 ? "white" : "red", .065 - i*.003, ch/6, .78, i*ch/6, .22, 8);
  K.emit.push([.78, ch + .05, .22]);
  K.cone("gravel", .3, .22, -.45, 0, .55, 7); K.cone("sand", .22, .16, -.05, 0, .68, 7);
  if (L >= 2) { K.box("contB", .5, .22, .22, .45, 0, .62); c3win(K, .2, .08, .74, 0, .1, .08, 3, false, "glass"); }
  if (L >= 4) { K.push(-.7, 0, .1); K.box("yellow", .1, .5, .1); K.beam("yellow", [0, .5, 0], [.35, .7, 0], .04); K.pop(); }
}
function c3kranHof(K, L){
  K.box("gravel", 1.8, .01, 1.8); K.box("concrete", .5, .12, .5, .1, 0, -.1);
  const H = 2.0 + .4*L, m = .1;
  K.push(.1, .12, -.1);
  for (const [a, b] of [[-1,-1],[1,-1],[-1,1],[1,1]]) K.box("yellow", .035, H, .035, a*m, 0, b*m);
  for (let y = 0; y < H - .1; y += .3) { K.box("yellow", .22, .02, .02, 0, y, m); K.box("yellow", .22, .02, .02, 0, y, -m); K.box("yellow", .02, .02, .22, m, y, 0); K.box("yellow", .02, .02, .22, -m, y, 0);
    K.beam("yellow", [-m, y, m], [m, y + .3, m], .015); K.beam("yellow", [m, y, -m], [-m, y + .3, -m], .015); K.beam("yellow", [m, y, m], [m, y + .3, -m], .015); K.beam("yellow", [-m, y, -m], [-m, y + .3, m], .015); }
  K.pop();
  const sk = new C3Kit(), jib = 1.35 + .15*L;
  sk.box("yellow", .26, .06, .26, 0, 0, 0); sk.box("yellow", .16, .14, .16, .12, -.16, .14); sk.box("glassB", .02, .1, .14, .205, -.14, .14);
  sk.box("yellow", .035, .55, .035, 0, .06, 0); sk.beam("yellow", [0, .06, .05], [jib, .06, .05], .035); sk.beam("yellow", [0, .06, -.05], [jib, .06, -.05], .035); sk.beam("yellow", [0, .2, 0], [jib - .1, .2, 0], .03);
  for (let x = .2; x < jib; x += .2) { sk.beam("yellow", [x, .06, .05], [x - .1, .2, 0], .012); sk.beam("yellow", [x, .06, -.05], [x - .1, .2, 0], .012); }
  sk.beam("yellow", [0, .06, 0], [-.6, .06, 0], .06); sk.box("concrete", .2, .16, .16, -.5, .07, 0); if (L >= 3) sk.box("concrete", .14, .12, .16, -.34, .07, 0);
  sk.beam("dark", [0, .6, 0], [jib * .75, .2, 0], .008); sk.beam("dark", [0, .6, 0], [-.55, .12, 0], .008);
  const tx = jib * (.55 + .05*L); sk.box("dark", .08, .04, .1, tx, .02, 0); const hookY = -(.9 + .1*L);
  sk.box("dark", .006, -hookY, .006, tx, hookY, 0); sk.box("dark", .05, .04, .03, tx, hookY - .04, 0);
  if (L >= 2) { sk.box("wood", .2, .03, .2, tx, hookY - .1, 0); sk.box("brick", .16, .08, .16, tx, hookY - .07, 0); }
  if (L >= 5) sk.ball("ledR", .03, 0, .64, 0, 1);
  const spin = sk.build(); K.add(spin, "spin", {sp: .18, amp: .9}).position.set(.1, .12 + H, -.1);
  K.box("contB", .55, .26, .24, -.55, 0, .62); c3win(K, -.65, .08, .74, 0, .12, .1, 1, false); c3door(K, -.42, .741, .09, .2);
  if (L >= 2) K.box("contG", .55, .26, .24, -.55, 0, .3);
  if (L >= 4) K.box("contO", .55, .26, .24, -.55, .26, .62);
  K.push(.6, 0, .6); K.box("wood", .3, .03, .3); K.box("brick", .24, .12, .24, 0, .03, 0); K.pop();
  K.push(.62, 0, .18); K.box("wood", .3, .03, .3); K.box("concrete", .26, .06, .26, 0, .03, 0); K.pop();
}
function c3rechen(K, L){
  const w = 1.36, d = 1.1, h = .5 + .2*L;
  K.box("paving", 1.8, .012, .5, 0, 0, .68);
  K.push(0, 0, -.08); K.box("concrete", w + .04, .08, d + .04); K.box("rzGlass", w, h - .08, d, 0, .08, 0);
  for (let y = .3; y < h - .05; y += .3) { K.box("led", w + .012, .015, .012, 0, y, d/2 + .002); K.box("led", .012, .015, d + .012, w/2 + .002, y, 0); K.box("led", .012, .015, d + .012, -w/2 - .002, y, 0); }
  K.box("concrete", w + .06, .06, d + .06, 0, h, 0);
  for (let i = 0; i < 2 + (L > 2 ? 1 : 0); i++) { K.box("metal", .26, .14, .26, -.4 + i*.36, h + .06, .25); K.cyl("dark", .09, .01, -.4 + i*.36, h + .2, .25, 10); }
  K.box("dark", .3, .34, .03, 0, 0, d/2 + .006); K.box("glassB", .26, .3, .012, 0, 0, d/2 + .02); K.box("white", .6, .03, .24, 0, .36, d/2 + .12);
  K.cyl("steel", .014, .55 + .1*L, w/2 - .12, h + .06, -d/2 + .12, 6); K.ball("ledR", .025, w/2 - .12, h + .62 + .1*L, -d/2 + .12, 1);
  if (L >= 3) { K.push(-.35, h + .06, -.25); K.cyl("steel", .02, .16, 0, 0, 0, 6); K.put("white", new THREE.SphereGeometry(.2, 12, 6, 0, Math.PI*2, 0, 1.1).rotateX(-.9), 0, .38, .12); K.pop(); }
  if (L >= 4) for (let i = 0; i < 2; i++) K.put("solar", c3boxG(.3, .02, .2), .15 + i*.32, h + .14, -.25, 0, -.4);
  if (L >= 5) { K.box("glassB", .56, .62, .46, .1, h + .06, -.05); K.box("led", .58, .02, .48, .1, h + .68, -.05); }
  K.pop();
  for (const x of [-.8, .8]) K.box("hedge", .12, .14, 1.0, x, 0, -.1);
}
function c3vermess(K, L){
  const w = 1.1, d = .86, fh = .32, fl = L >= 5 ? 3 : L >= 3 ? 2 : 1, h = fl*fh + .05;
  K.box("lawn", 1.8, .01, .6, 0, 0, .6);
  K.push(.1, 0, -.2); K.box("plinth", w + .02, .07, d + .02); K.box("lilac", w, h, d);
  c3wins(K, w, d, fl, fh, {cols: 3, side: 2, seed: 77, skip: 1}); c3door(K, 0, d/2);
  if (L < 3) { K.push(0, h, 0); c3gable(K, "lilac", "roofPurple", w, d, .38); K.pop(); }
  else { c3flat(K, w, d, h, "roofFlat", "lilac"); K.put("white", new THREE.SphereGeometry(.24, 12, 6, 0, Math.PI*2, 0, Math.PI/2), -.2, h + .04, -.05); K.box("dark", .06, .2, .3, -.2, h + .06, .02); }
  if (L >= 4) { K.cyl("steel", .015, .5, .35, h + .04, .2, 6); K.cyl("white", .09, .03, .35, h + .54, .2, 12); }
  K.pop();
  K.push(-.55, 0, .62); for (let i = 0; i < 3; i++) { const a = i * 2.094; K.beam("yellow", [0, .34, 0], [Math.sin(a)*.12, 0, Math.cos(a)*.12], .015); }
  K.box("yellow", .09, .07, .07, 0, .34, 0); K.put("dark", new THREE.CylinderGeometry(.022, .022, .1, 8).rotateX(Math.PI/2), 0, .39, .02); K.pop();
  for (let i = 0; i < 5; i++) K.cyl(i % 2 ? "white" : "red", .012, .1, .55, i*.1, .62, 6);
  if (L >= 2) for (const [x, z] of [[.2, .5], [.35, .8], [-.2, .85], [-.75, .35]]) K.box("orange", .03, .06, .03, x, 0, z);
  if (L >= 5) { const dk = new C3Kit(); dk.box("dark", .12, .03, .12, 0, 0, 0); for (const [a, b] of [[-1,-1],[1,-1],[-1,1],[1,1]]) { dk.beam("dark", [0, .015, 0], [a*.1, .02, b*.1], .012); dk.cyl("steel", .04, .005, a*.1, .03, b*.1, 8); } dk.ball("ledR", .012, 0, -.005, .07, 0);
    K.add(dk.build(false), "drone").position.set(.4, 1.6, .3); }
}
function c3bahnhof(K, L){
  const w = 1.15 + .06*L, d = .56, fl = L >= 3 ? 2 : 1, fh = .34, h = fl*fh + .05;
  K.box("ballast", 1.86, .03, .34, 0, 0, .68); for (let x = -.88; x < .9; x += .12) K.box("sleeper", .04, .012, .3, x, .03, .68);
  K.box("rail", 1.86, .02, .015, 0, .042, .6); K.box("rail", 1.86, .02, .015, 0, .042, .76);
  K.box("concrete", 1.8, .08, .26, 0, 0, .37); K.box("white", 1.8, .005, .02, 0, .08, .49);
  K.push(0, 0, -.25); K.box("brick", w, h, d); K.box("white", w + .03, .03, d + .03, 0, fh, 0);
  for (let f = 0; f < fl; f++) for (let c = 0; c < 5; c++) { const x = -w/2 + (c + .5)*w/5; if (!(f === 0 && c === 2)) { c3win(K, x, f*fh + .07, d/2, 0, .12, .22, 90 + c + f*7, false); c3win(K, x, f*fh + .07, -d/2, Math.PI, .12, .22, 95 + c + f*5, false); } }
  c3door(K, 0, d/2, .2, .28);
  K.push(0, h, 0); c3hip(K, "roofPink", w + .08, d + .1, .3); K.pop();
  if (L >= 3) { K.push(w/2 - .12, 0, 0); K.box("brick", .26, h + .55, .26); c3clockFace(K, h + .38, .13); K.push(0, h + .55, 0); c3hip(K, "roofPink", .32, .32, .3); K.pop(); K.pop(); }
  K.pop();
  if (L >= 2) { for (let x = -.7; x <= .71; x += .35) K.box("steel", .03, .4, .03, x, .08, .4); K.put("metal", c3boxG(1.6, .03, .34), 0, .5, .43, 0, -.12); }
  if (L >= 4) { K.push(-.75, 0, .1); for (let i = 0; i < 4; i++) K.box("dark", .01, .06, .1, i*.05, 0, 0); K.pop(); c3lampPost(K, .82, .32); }
  if (L >= 5) { K.put("glassB", new THREE.CylinderGeometry(.32, .32, 1.7, 10, 1, true, 0, Math.PI).rotateZ(Math.PI/2).rotateY(0), 0, .5, .6); }
  if (L >= 2) { K.push(.35, .05, .68); K.box("train", .7, .2, .2); K.box("trainW", .7, .03, .202, 0, .06, 0); K.box("glass", .6, .06, .205, 0, .11, 0); K.box("grey", .66, .03, .18, 0, .2, 0); K.pop(); }
}
function c3design(k, L, id, raw){
  const K = new C3Kit(raw);
  ({rathaus: () => c3rathaus(K, L), wohnhaus: () => c3wohn(K, L, id), park: () => c3park(K, id), wasserturm: () => c3wasser(K, L), zimmerei: () => c3zimmerei(K, L),
    betonwerk: () => c3beton(K, L), kran: () => c3kranHof(K, L), rechenzentrum: () => c3rechen(K, L), vermessung: () => c3vermess(K, L), bahnhof: () => c3bahnhof(K, L)}[k] || (() => {}))();
  return K.build();
}
