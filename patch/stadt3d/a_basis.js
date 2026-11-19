/* ═════════ v2.2: 3D-Stadt im Vollbild – three.js, Low-Poly ═════════ */
const C3 = {ok:null, open:false, init:false, prev:"heute", grp:{}, keys:{}, labs:{}, sel:null, place:null, drawer:false, t:0, last:0, raf:0, anims:[], wob:{}, fx:[], snapT:0};
function c3Ok(){
  if (C3.ok !== null) return C3.ok;
  try { const c = document.createElement("canvas"); C3.ok = !!(window.THREE && (c.getContext("webgl2") || c.getContext("webgl"))); } catch(e) { C3.ok = false; }
  return C3.ok;
}
const c3clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const c3ss = (a, b, v) => { const t = c3clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const c3lerp = (a, b, t) => a + (b - a) * t;
function c3rng(seed){ let s = seed >>> 0 || 1; return () => { s += 0x6D2B79F5; let t = s; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

/* ── Welt-Maße: 1 Einheit ≈ 10 m. Raster 8 × 8 Grundstücke à 2 × 2, Straßen 1,6 breit ── */
const C3RD = 1.6, C3R = 9.6, C3RX = 13.8, C3FAR = 70;
const c3lot = i => (i - 3.5) * 2 + (i < 4 ? -C3RD/2 : C3RD/2);
function c3face(x, y){                                            // Gebäude schaut zur nächsten Straße
  if (y === 3 || y === 7) return 0; if (x === 3 || x === 7) return Math.PI/2;
  if (x === 0 || x === 4) return -Math.PI/2; if (y === 0 || y === 4) return Math.PI; return 0;
}
const c3zr = x => -19.5 + 3 * Math.sin(x * .055 + .6) + 1.4 * Math.sin(x * .13 + 2.1);   // Flusslauf
function c3h(x, z){                                               // Geländehöhe
  const m = c3ss(13, 30, Math.max(Math.abs(x), Math.abs(z)));
  let h = Math.max(0, Math.sin(x*.075 + 1.3) * Math.cos(z*.065 - .4) * 2.4 + Math.sin(x*.16 + z*.12) * 1.1 + Math.sin(z*.23 - x*.07 + .8) * .6 + 1.2) * m;
  const dist = Math.hypot(x, z + 10);
  h += c3ss(80, 132, dist) * (13 + 7 * Math.sin(Math.atan2(z, x) * 5 + 1) + 3 * Math.sin(x * .3) * Math.cos(z * .27));
  if (z > 8) h *= c3ss(1.6, 4.8, Math.abs(x));
  h *= c3ss(1.4, 4.2, Math.abs(x - C3RX));
  const d = Math.abs(z - c3zr(x)), w = c3ss(3.7, 1.3, d);
  return h * (1 - w) - .95 * w;
}
const c3gy = (x, z) => Math.max(0, c3h(x, z));                    // Fahrbahnhöhe (Brücken über Wasser)

/* ── Texturen aus Canvas ── */
function c3tex(n, draw){
  const c = document.createElement("canvas"); c.width = c.height = n; const g = c.getContext("2d"); draw(g, n, c3rng(n * 7 + draw.length));
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; return t;
}
function c3noise(g, n, r, a, base){ for (let i = 0; i < n * n / 10; i++) { const v = base + (r() - .5) * a; g.fillStyle = `rgba(${v},${v},${v},.18)`; g.fillRect(r() * n, r() * n, 2, 2); } }
function c3texAll(){
  const T = {};
  T.brick = c3tex(256, (g, n, r) => { g.fillStyle = "#c9bcae"; g.fillRect(0, 0, n, n); const rows = 16, bh = n / rows, bw = n / 8;
    for (let y = 0; y < rows; y++) for (let x = -1; x < 9; x++) { const o = y % 2 ? bw / 2 : 0, v = r();
      g.fillStyle = `rgb(${150 + v*45|0},${62 + v*22|0},${44 + v*14|0})`; g.fillRect(x * bw + o + 1.5, y * bh + 1.5, bw - 3, bh - 3); }
    c3noise(g, n, r, 120, 128); });
  T.roof = c3tex(256, (g, n, r) => { g.fillStyle = "#e8e8e8"; g.fillRect(0, 0, n, n); const rows = 12, h = n / rows, w = n / 10;
    for (let y = 0; y < rows; y++) { for (let x = -1; x < 11; x++) { const o = y % 2 ? w / 2 : 0, v = 205 + r() * 45 | 0; const gr = g.createLinearGradient(0, y*h, 0, y*h + h);
      gr.addColorStop(0, `rgb(${v},${v},${v})`); gr.addColorStop(1, `rgb(${v-70},${v-70},${v-70})`); g.fillStyle = gr; g.fillRect(x * w + o + 1, y * h, w - 2, h - 1); } } });
  T.wood = c3tex(256, (g, n, r) => { const k = 8, w = n / k; for (let i = 0; i < k; i++) { const v = r(); g.fillStyle = `rgb(${172 + v*30|0},${118 + v*24|0},${70 + v*18|0})`; g.fillRect(i * w, 0, w, n);
      g.strokeStyle = "rgba(80,45,20,.22)"; for (let j = 0; j < 5; j++) { g.beginPath(); const x0 = i * w + r() * w; g.moveTo(x0, 0); g.bezierCurveTo(x0 + 4, n * .3, x0 - 4, n * .6, x0 + 2, n); g.stroke(); }
      g.fillStyle = "rgba(60,35,15,.55)"; g.fillRect(i * w, 0, 2, n); } });
  T.concrete = c3tex(256, (g, n, r) => { g.fillStyle = "#c3c1bb"; g.fillRect(0, 0, n, n); c3noise(g, n, r, 160, 128);
    g.strokeStyle = "rgba(70,70,70,.35)"; g.lineWidth = 2; g.strokeRect(1, 1, n / 2 - 2, n / 2 - 2); g.strokeRect(n / 2 + 1, 1, n / 2 - 2, n / 2 - 2); g.strokeRect(1, n / 2 + 1, n - 2, n / 2 - 2);
    g.fillStyle = "rgba(60,60,60,.45)"; for (const [a, b] of [[.12,.12],[.38,.12],[.62,.12],[.88,.12],[.12,.38],[.38,.38],[.62,.38],[.88,.38],[.25,.7],[.75,.7]]) { g.beginPath(); g.arc(a * n, b * n, 2.5, 0, 7); g.fill(); } });
  T.plaster = c3tex(128, (g, n, r) => { g.fillStyle = "#f4f4f4"; g.fillRect(0, 0, n, n); c3noise(g, n, r, 90, 200); });
  T.paving = c3tex(256, (g, n, r) => { g.fillStyle = "#9c9a94"; g.fillRect(0, 0, n, n); const k = 8, s = n / k;
    for (let y = 0; y < k; y++) for (let x = 0; x < k; x++) { const v = 200 + r() * 30 | 0; g.fillStyle = `rgb(${v},${v-3},${v-8})`; g.fillRect(x * s + 1.5, y * s + 1.5, s - 3, s - 3); } });
  T.asphalt = c3tex(128, (g, n, r) => { g.fillStyle = "#4a4d53"; g.fillRect(0, 0, n, n); for (let i = 0; i < 900; i++) { const v = 50 + r() * 60 | 0; g.fillStyle = `rgb(${v},${v},${v+4})`; g.fillRect(r() * n, r() * n, 1.5, 1.5); } });
  T.metal = c3tex(128, (g, n, r) => { for (let x = 0; x < n; x += 8) { const gr = g.createLinearGradient(x, 0, x + 8, 0); gr.addColorStop(0, "#d8dde2"); gr.addColorStop(.5, "#f2f4f6"); gr.addColorStop(1, "#aab1b8"); g.fillStyle = gr; g.fillRect(x, 0, 8, n); } });
  T.facade = c3tex(256, (g, n, r) => { g.fillStyle = "#c9d3dc"; g.fillRect(0, 0, n, n); const k = 8, s = n / k;
    for (let y = 0; y < k; y++) for (let x = 0; x < k; x++) { const v = r(); g.fillStyle = `rgb(${30 + v*20|0},${48 + v*24|0},${70 + v*30|0})`; g.fillRect(x * s + 3, y * s + 3, s - 6, s - 6); } });
  T.facadeE = c3tex(256, (g, n, r) => { g.fillStyle = "#000"; g.fillRect(0, 0, n, n); const k = 8, s = n / k;
    for (let y = 0; y < k; y++) for (let x = 0; x < k; x++) { const v = r(); if (v < .55) { g.fillStyle = v < .2 ? "#7fe7ff" : v < .4 ? "#3d8cff" : "#ffd98a"; g.fillRect(x * s + 3, y * s + 3, s - 6, s - 6); } } });
  T.fence = c3tex(64, (g, n) => { g.clearRect(0, 0, n, n); g.strokeStyle = "rgba(235,235,235,.95)"; g.lineWidth = 2; for (let i = 0; i <= n; i += 8) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, n); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(n, i); g.stroke(); } g.lineWidth = 5; g.strokeRect(0, 0, n, n); });
  T.glow = c3tex(64, (g, n) => { const gr = g.createRadialGradient(n/2, n/2, 0, n/2, n/2, n/2); gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(.4, "rgba(255,255,255,.45)"); gr.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = gr; g.fillRect(0, 0, n, n); });
  return T;
}

/* ── Materialien ── */
const C3SWAY = {value: 0};
function c3sway(m){
  m.onBeforeCompile = sh => { sh.uniforms.uTime = C3SWAY;
    sh.vertexShader = "uniform float uTime;\n" + sh.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
      vec4 c3o = modelMatrix * vec4(0.,0.,0.,1.);
      #ifdef USE_INSTANCING
        c3o = modelMatrix * instanceMatrix * vec4(0.,0.,0.,1.);
      #endif
      float c3w = sin(uTime*1.7 + c3o.x*.7 + c3o.z*.5) * .05 * clamp(position.y, 0., 1.3) + sin(uTime*3.1 + c3o.z) * .012 * clamp(position.y, 0., 1.3);
      transformed.x += c3w; transformed.z += c3w * .6;`); };
  m.customProgramCacheKey = () => "c3sway"; return m;
}
const C3HUE = [0xf2b8a8, 0xf3d79a, 0xb8d9e8, 0xc5e3b4, 0xdac7ef, 0xf4cfdf];
function c3mats(T){
  const S = o => new THREE.MeshStandardMaterial(Object.assign({roughness: .88, metalness: 0, flatShading: true}, o));
  const M = {
    brick: S({map: T.brick}), plinth: S({map: T.brick, color: 0x8c8580}),
    cream: S({map: T.plaster, color: 0xf0e2c4}), white: S({map: T.plaster, color: 0xf6f5f1}), lilac: S({map: T.plaster, color: 0xe4dcf2}), grey: S({map: T.plaster, color: 0xd3d5d8}),
    roofRed: S({map: T.roof, color: 0xc0583d}), roofDark: S({map: T.roof, color: 0x6a6e76}), roofPurple: S({map: T.roof, color: 0x8b55c2}), roofPink: S({map: T.roof, color: 0xd25a83}), copper: S({map: T.roof, color: 0x74b39b}),
    roofFlat: S({color: 0x8e9196}), gold: S({color: 0xf2c14e, metalness: .6, roughness: .35}),
    wood: S({map: T.wood}), woodDark: S({map: T.wood, color: 0x8f6d55}), timber: S({map: T.wood, color: 0xf0d2a8}), trunk: S({color: 0x6e4b2e}),
    concrete: S({map: T.concrete}), raw: S({map: T.concrete, color: 0xd2cec4}), rawDark: S({color: 0x3c3a37}),
    metal: S({map: T.metal, color: 0xb9c0c8, metalness: .35, roughness: .5}), steel: S({color: 0x6f7780, metalness: .5, roughness: .45}), tank: S({color: 0x4c9fdc, metalness: .3, roughness: .45}),
    yellow: S({color: 0xf2b705, roughness: .6}), orange: S({color: 0xe8742c}), red: S({color: 0xd0392f}), dark: S({color: 0x2c3037}), black: S({color: 0x1c1e22, roughness: .7}),
    contB: S({color: 0x2f6fb0}), contG: S({color: 0xa9b0b7}), contO: S({color: 0xe08a2e}),
    glass: S({color: 0x54697e, metalness: .4, roughness: .16, emissive: 0xffc46a, emissiveIntensity: 0}),
    glassL: S({color: 0x54697e, metalness: .4, roughness: .16, emissive: 0xffc46a, emissiveIntensity: 0}),
    glassB: S({color: 0x7fb4dc, metalness: .45, roughness: .12, emissive: 0xbfe3ff, emissiveIntensity: 0}),
    rzGlass: S({map: T.facade, emissiveMap: T.facadeE, emissive: 0xffffff, emissiveIntensity: .1, metalness: .35, roughness: .25}),
    led: S({color: 0x2ee87a, emissive: 0x2ee87a, emissiveIntensity: 1}), ledR: S({color: 0xff3b30, emissive: 0xff3b30, emissiveIntensity: 1}),
    lamp: S({color: 0xfff3c4, emissive: 0xffd27a, emissiveIntensity: 0}), headL: S({color: 0xfffbe6, emissive: 0xfff2c0, emissiveIntensity: 0}), tailL: S({color: 0xb3261e, emissive: 0xff2a1a, emissiveIntensity: 0}),
    door: S({color: 0x6b4a32}), solar: S({color: 0x1f2e5a, metalness: .55, roughness: .22}), clock: S({color: 0xfdfaf0}),
    hedge: c3sway(S({color: 0x3e7d35})), leaf: c3sway(S({color: 0x4f9a3c})), leaf2: c3sway(S({color: 0x76b84a})), fir: c3sway(S({color: 0x2e6a3a})),
    grass: S({color: 0x62a346}), lawn: S({color: 0x6aab4c}), dirt: S({color: 0x8d6b48}), pit: S({color: 0x5a4330}), gravel: S({color: 0xbcae95}), sand: S({color: 0xdcc58e}),
    paving: S({map: T.paving, color: 0xe2e0da}), side: S({map: T.paving, color: 0xb9b8b3}), asphalt: S({map: T.asphalt}), line: S({color: 0xf3f3ef}), ballast: S({color: 0x8b8178}),
    water: S({color: 0x3f8fd2, metalness: .15, roughness: .1, transparent: true, opacity: .86}), jet: S({color: 0xd9f1ff, emissive: 0x9fd8ff, emissiveIntensity: .25, transparent: true, opacity: .75}),
    fenceM: S({map: T.fence, transparent: true, alphaTest: .3, side: THREE.DoubleSide, flatShading: false}), fenceR: S({color: 0xd8402f}),
    scaf: S({color: 0xbcc3cb, metalness: .5, roughness: .4}), plank: S({map: T.wood, color: 0xe6c79a}),
    flowR: S({color: 0xe5484d}), flowY: S({color: 0xf5c542}), flowP: S({color: 0xb36ae2}), flag: S({color: 0x7a3fc0, side: THREE.DoubleSide}),
    skin: S({color: 0xf0c3a0}), helmet: S({color: 0xffd21f, roughness: .5}), vest: S({color: 0xff7a1a}), pants: S({color: 0x2e3f63}),
    rail: S({color: 0x9aa0a6, metalness: .7, roughness: .35}), sleeper: S({color: 0x6a5546}), train: S({color: 0xd6372b}), trainW: S({color: 0xf3f3f0}),
    rock: S({color: 0x8e8a83}), snow: S({color: 0xf4f6f8})
  };
  C3HUE.forEach((c, i) => M["pl" + i] = S({map: T.plaster, color: c}));
  ["shirt0","shirt1","shirt2","shirt3","shirt4","shirt5","shirt6"].forEach((k, i) => M[k] = S({color: [0x3b82f6,0xe94f4f,0x2fb36d,0xf2a93b,0x8b5cf6,0xf4f4f4,0x1f2937][i]}));
  ["car0","car1","car2","car3","car4","car5"].forEach((k, i) => M[k] = S({color: [0xd63a31,0x2d6fd6,0xf0f0ec,0x2b2f36,0xf2b705,0x3aa36b][i], metalness: .35, roughness: .4}));
  Object.values(M).forEach(m => m.userData.c3 = 1);
  return M;
}

/* ── Baukasten: viele Teile je Material zu einem Mesh zusammenfassen ── */
const c3m4 = () => new THREE.Matrix4();
function c3boxG(w, h, d){
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv, S = [[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f*4 + i; uv.setXY(k, uv.getX(k) * S[f][0], uv.getY(k) * S[f][1]); }
  return g;
}
function c3merge(list){
  let n = 0; const gs = list.map(g => { const o = g.index ? g.toNonIndexed() : g; if (!o.attributes.normal) o.computeVertexNormals(); n += o.attributes.position.count; return o; });
  const P = new Float32Array(n*3), N = new Float32Array(n*3), U = new Float32Array(n*2); let o = 0;
  gs.forEach(g => { const c = g.attributes.position.count; P.set(g.attributes.position.array, o*3); N.set(g.attributes.normal.array, o*3); if (g.attributes.uv) U.set(g.attributes.uv.array.subarray(0, c*2), o*2); o += c; g.dispose(); });
  const out = new THREE.BufferGeometry(); out.setAttribute("position", new THREE.BufferAttribute(P, 3)); out.setAttribute("normal", new THREE.BufferAttribute(N, 3)); out.setAttribute("uv", new THREE.BufferAttribute(U, 2));
  out.computeBoundingSphere(); return out;
}
class C3Kit {
  constructor(raw){ this.p = {}; this.raw = raw; this.st = [c3m4()]; this.extra = []; this.emit = []; this.tops = 0; }
  push(x = 0, y = 0, z = 0, ry = 0){ const m = c3m4().makeRotationY(ry).setPosition(x, y, z); this.st.push(this.st[this.st.length-1].clone().multiply(m)); return this; }
  pop(){ this.st.pop(); return this; }
  put(mat, g, x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0){
    if (this.raw) mat = /^(glass|glassL|glassB|rzGlass)$/.test(mat) ? "rawDark" : /^(led|ledR|lamp|jet|water|flag|flow[RYP]|leaf|leaf2|fir|hedge|lawn|grass|solar|gold|clock)$/.test(mat) ? null : /^(steel|scaf|metal|yellow|rail|tank)$/.test(mat) ? "steel" : "raw";
    if (!mat) { g.dispose(); return this; }
    const m = c3m4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz, "YXZ")).setPosition(x, y, z);
    g.applyMatrix4(this.st[this.st.length-1].clone().multiply(m));
    (this.p[mat] = this.p[mat] || []).push(g); return this;
  }
  box(mat, w, h, d, x = 0, y = 0, z = 0, ry = 0){ return this.put(mat, c3boxG(w, h, d), x, y + h/2, z, ry); }
  cyl(mat, r, h, x = 0, y = 0, z = 0, seg = 10, r2 = r, open = false){ return this.put(mat, new THREE.CylinderGeometry(r, r2, h, seg, 1, open), x, y + h/2, z); }
  cone(mat, r, h, x = 0, y = 0, z = 0, seg = 8){ return this.put(mat, new THREE.ConeGeometry(r, h, seg), x, y + h/2, z); }
  ball(mat, r, x, y, z, det = 0){ return this.put(mat, new THREE.IcosahedronGeometry(r, det), x, y, z); }
  beam(mat, a, b, t = .03){                                         // Stab von Punkt a nach Punkt b (lokal)
    const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), L = A.distanceTo(B), g = c3boxG(t, L, t);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
    g.applyMatrix4(c3m4().compose(A.clone().add(B).multiplyScalar(.5), q, new THREE.Vector3(1, 1, 1)));
    return this.put(mat, g);
  }
  add(obj, type, o = {}){ if (this.raw && type !== "spin") return obj; obj.applyMatrix4(this.st[this.st.length-1]); obj.userData.anim = Object.assign({type}, o); this.extra.push(obj); return obj; }
  build(shadow = true){
    const grp = new THREE.Group();
    for (const k in this.p) { const m = new THREE.Mesh(c3merge(this.p[k]), C3.M[k]); m.castShadow = shadow && !/^(line|lamp|led|ledR|water|jet|fenceM)$/.test(k); m.receiveShadow = true; m.userData.mat = k; grp.add(m); }
    this.extra.forEach(o => grp.add(o)); grp.userData.emit = this.emit; return grp;
  }
}

/* ── Bauteile ── */
const c3lit = s => ((s * 2654435761) >>> 0) % 100 < 58;
function c3win(K, x, y, z, ry, ww, wh, seed, sill = true, mat){
  K.push(x, y, z, ry); K.box(mat || (c3lit(seed) ? "glassL" : "glass"), ww, wh, .03, 0, 0, .006);
  if (sill) K.box("white", ww + .04, .022, .05, 0, -.018, .022); K.pop();
}
function c3wins(K, w, d, fl, fh, o = {}){
  const cols = o.cols || 2, sc = o.side === undefined ? 1 : o.side, ww = o.ww || .15, wh = o.wh || fh * .46, y0 = o.y0 || 0, s = (o.seed || 1) * 97, sill = o.sill !== false;
  let n = 0;
  for (let f = 0; f < fl; f++) { const y = y0 + f * fh + fh * .3;
    for (let c = 0; c < cols; c++) { const x = -w/2 + (c + .5) * w / cols;
      if (!(o.skip !== undefined && f === 0 && c === o.skip)) c3win(K, x, y, d/2, 0, ww, wh, s + n++, sill, o.mat);
      if (o.back !== false) c3win(K, x, y, -d/2, Math.PI, ww, wh, s + n++, sill, o.mat); }
    for (let c = 0; c < sc; c++) { const z = -d/2 + (c + .5) * d / sc; c3win(K, w/2, y, z, Math.PI/2, ww, wh, s + n++, sill, o.mat); c3win(K, -w/2, y, z, -Math.PI/2, ww, wh, s + n++, sill, o.mat); }
  }
}
function c3door(K, x, z, w = .17, h = .27, ry = 0){ K.push(x, 0, z, ry); K.box("door", w, h, .03, 0, 0, .006); K.box("white", w + .06, .03, .045, 0, h, .012); K.pop(); }
function c3gable(K, wall, roof, w, d, rh, ov = .07){                // Satteldach, First entlang x, Fuß bei y = 0
  const sh = new THREE.Shape(); sh.moveTo(-d/2, 0); sh.lineTo(d/2, 0); sh.lineTo(0, rh); sh.lineTo(-d/2, 0);
  const g = new THREE.ExtrudeGeometry(sh, {depth: w, bevelEnabled: false}); g.translate(0, 0, -w/2); g.rotateY(Math.PI/2); K.put(wall, g);
  const L0 = Math.hypot(d/2, rh), a = Math.atan2(rh, d/2), t = .045, len = L0 + ov;
  for (const s of [1, -1]) { const ux = s * (d/2) / L0, uy = -rh / L0, nz = s * rh / L0, ny = (d/2) / L0;
    K.put(roof, c3boxG(w + 2*ov, t, len), 0, rh/2 + uy*ov/2 + ny*t/2, s*d/4 + ux*ov/2 + nz*t/2, 0, s*a); }
  K.put(roof, c3boxG(w + 2*ov, .05, .07), 0, rh + .015, 0);
}
function c3hip(K, mat, w, d, rh, y = 0){ const g = new THREE.ConeGeometry(1, 1, 4, 1); g.rotateY(Math.PI/4); g.translate(0, .5, 0); g.scale(w/Math.SQRT2, rh, d/Math.SQRT2); K.put(mat, g, 0, y, 0); }
function c3flat(K, w, d, y, mat = "roofFlat", par = "white"){ K.box(mat, w + .02, .04, d + .02, 0, y, 0); const t = .04, h = .07;
  K.box(par, w + .06, h, t, 0, y, d/2 + .01); K.box(par, w + .06, h, t, 0, y, -d/2 - .01); K.box(par, t, h, d + .06, w/2 + .01, y, 0); K.box(par, t, h, d + .06, -w/2 - .01, y, 0); }
function c3tree(K, x, z, s = 1, fir = false, y = 0){
  K.cyl("trunk", .03*s, .3*s, x, y, z, 5);
  if (fir) { K.cone("fir", .26*s, .45*s, x, y + .22*s, z, 7); K.cone("fir", .19*s, .36*s, x, y + .48*s, z, 7); }
  else { K.ball(((x*13 + z*7) | 0) % 2 ? "leaf" : "leaf2", .25*s, x, y + .5*s, z, 0); K.ball("leaf", .17*s, x + .1*s, y + .62*s, z - .05*s, 0); }
}
function c3lampPost(K, x, z, ry = 0){ K.push(x, 0, z, ry); K.cyl("dark", .016, .5, 0, 0, 0, 6); K.box("dark", .02, .02, .14, 0, .49, .06); K.box("lamp", .06, .03, .06, 0, .46, .12); K.pop(); }
function c3clockFace(K, y, half){
  for (let i = 0; i < 4; i++) { const ry = i * Math.PI / 2; K.push(Math.sin(ry) * half, y, Math.cos(ry) * half, ry);
    K.put("clock", new THREE.CylinderGeometry(.085, .085, .02, 14).rotateX(Math.PI/2), 0, 0, .01); K.box("dark", .012, .06, .01, 0, -.004, .024); K.box("dark", .045, .012, .01, .018, -.006, .025); K.pop(); }
}
