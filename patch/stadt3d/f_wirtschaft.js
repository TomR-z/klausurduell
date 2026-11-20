
/* ═════════ v2.3: Wirtschaft – Ressourcen aus dem Lernen, Fabriken, Lager, Aufträge, Truhe, Serienschutz ═════════ */
const RES = {
  wasser: {n: "Wasser", c: "#3d9be0"}, kies: {n: "Kies und Sand", c: "#b39b6e"}, holz: {n: "Bauholz", c: "#b07a45"}, zement: {n: "Zement", c: "#8f969e"},
  stahl: {n: "Stahl", c: "#55687c"}, strom: {n: "Strom", c: "#e9a800"}, plan: {n: "Baupläne", c: "#2f6fb0"}, daten: {n: "Messdaten", c: "#a64fd9"}, fach: {n: "Fachkräfte", c: "#e8742c"},
  beton: {n: "Beton", c: "#7c848d", p: 1}, stein: {n: "Mauersteine", c: "#b9ad97", p: 1}, fenster: {n: "Fenster", c: "#4fa3d9", p: 1}, dach: {n: "Dachstühle", c: "#b5773d", p: 1}, fert: {n: "Fertigteile", c: "#5f6a75", p: 1}
};
const RBASE = ["wasser", "kies", "holz", "zement", "stahl", "strom", "plan", "daten", "fach"], RPROD = ["beton", "stein", "fenster", "dach", "fert"];
const RVAL = {wasser: 5, kies: 4, holz: 6, zement: 6, stahl: 8, strom: 5, plan: 8, daten: 8, fach: 6, beton: 10, stein: 8, fenster: 24, dach: 30, fert: 55};
const RICON = {
  wasser: '<path d="M12 4c3 4 5 6.6 5 9.3A5 5 0 0 1 7 13.3C7 10.6 9 8 12 4z"/>', kies: '<path d="M5 17l3-4 3 2 2-3 4 5zM7 18h10"/><circle cx="9" cy="9" r="1.6"/><circle cx="14" cy="8" r="1.3"/>',
  holz: '<rect x="4" y="9" width="16" height="6" rx="3"/><circle cx="17" cy="12" r="1.5"/>', zement: '<path d="M7 6h10l1 13H6zM9 10h6"/>',
  stahl: '<path d="M6 6h12M6 18h12M12 6v12M9 6v1.5M15 6v1.5M9 18v-1.5M15 18v-1.5"/>', strom: '<path d="M13 3L6 13h5l-1 8 7-10h-5z"/>',
  plan: '<path d="M6 4h9l3 3v13H6zM9 10h6M9 13h6M9 16h4"/>', daten: '<path d="M5 19V5M5 19h14M8 16v-4M12 16V9M16 16v-6"/>',
  fach: '<circle cx="12" cy="9" r="3"/><path d="M8 7.5a4 4 0 0 1 8 0M6 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5"/>',
  beton: '<path d="M4 9l8-4 8 4-8 4zM4 9v7l8 4 8-4V9M12 13v7"/>', stein: '<path d="M4 7h16v10H4zM4 12h16M10 7v5M15 12v5"/>',
  fenster: '<rect x="5" y="4" width="14" height="16" rx="1"/><path d="M12 4v16M5 12h14"/>', dach: '<path d="M3 17l9-10 9 10M7 17l5-5.5 5 5.5M12 7v10M3 17h18"/>',
  fert: '<path d="M3 9h18v5H3zM6 14v4M18 14v4M3 9l3-3h12l3 3"/>'
};
const ricon = (k, s = 16) => `<span class="ric" style="--rc:${RES[k].c};width:${s}px;height:${s}px"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${RICON[k]}</svg></span>`;

/* ── Gebäude: Umbenennungen und neue Typen ── */
Object.assign(GT.wasserturm, {n: "Wasserwerk", d: "Fördert Wasser für Beton und Häuser. Läuft, wenn du Hydromechanik lernst."});
Object.assign(GT.zimmerei, {d: "Liefert Bauholz für Dachstühle, Schalung und Fensterrahmen. Läuft mit Baukonstruktion."});
Object.assign(GT.betonwerk, {n: "Zementwerk", d: "Brennt Zement, den Grundstoff für Beton. Läuft mit Baustoffkunde."});
Object.assign(GT.kran, {n: "Kraftwerk", d: "Erzeugt Strom für Fabriken und Häuser. Läuft mit Physik."});
Object.assign(GT.rechenzentrum, {n: "Planungsbüro", d: "Zeichnet Baupläne – kein Bau ohne Ausführungsplan. Läuft mit Bauinformatik."});
Object.assign(GT.vermessung, {n: "Prüflabor", d: "Sammelt Messdaten. Damit machst du Fabriken effizienter. Läuft mit Statistik."});
Object.assign(GT.bahnhof, {d: "Pendler kommen mit dem Zug und arbeiten als Fachkräfte. Läuft mit Data Analysis for Planning."});
const GT23 = {
  kieswerk: {n: "Kieswerk", d: "Baggert Kies und Sand aus dem Fluss. Läuft mit Hydromechanik.", f: "hydro", max: 5, cost: [80, 160, 350, 700, 1400], time: [120, 900, 3600, 10800, 28800], ew: 6, need: ["wasserturm", 2]},
  stahlwerk: {n: "Stahlwerk", d: "Walzt Stahlträger und Bewehrung. Läuft mit Baustoffkunde.", f: "bsk", max: 5, cost: [90, 180, 380, 750, 1500], time: [120, 900, 3600, 10800, 28800], ew: 6, need: ["betonwerk", 2]},
  lagerhaus: {n: "Lagerhaus", d: "Hier lagern deine Ressourcen. Jede Stufe fasst mehr.", f: null, max: 5, cost: [60, 150, 350, 700, 1300], time: [60, 600, 2700, 7200, 21600], ew: 2, uniq: 1},
  mischanlage: {n: "Mischanlage", d: "Mischt Beton aus Zement, Kies und Sand und Wasser.", fab: 1, max: 3, cost: [150, 400, 900], time: [600, 3600, 14400], ew: 4, rat: 3, uniq: 1},
  mauersteinwerk: {n: "Mauersteinwerk", d: "Presst und härtet Kalksandsteine.", fab: 1, max: 3, cost: [200, 450, 950], time: [900, 3600, 14400], ew: 4, rat: 3, uniq: 1},
  glaserei: {n: "Glaserei", d: "Schmilzt Glas und baut Fenster mit Holzrahmen.", fab: 1, max: 3, cost: [220, 500, 1000], time: [900, 3600, 14400], ew: 4, rat: 3, uniq: 1},
  abbundhalle: {n: "Abbundhalle", d: "Schneidet Bauholz nach Plan zu Dachstühlen zu.", fab: 1, max: 3, cost: [180, 450, 950], time: [900, 3600, 14400], ew: 4, rat: 3, uniq: 1},
  fertigteilwerk: {n: "Fertigteilwerk", d: "Gießt Stahlbeton-Fertigteile für große Bauten.", fab: 1, max: 3, cost: [350, 800, 1600], time: [1800, 7200, 21600], ew: 6, rat: 4, uniq: 1},
  mehrfamilienhaus: {n: "Mehrfamilienhaus", d: "Viele Wohnungen auf einem Grundstück.", max: 3, cost: [200, 450, 900], time: [1800, 7200, 21600], ew: 24, rat: 3, cnt: 3},
  schule: {n: "Schule", d: "Lernen lohnt sich doppelt: +5 % Bitcoin auf jede Antwort.", max: 1, cost: [300], time: [3600], ew: 15, rat: 3, uniq: 1},
  feuerwache: {n: "Feuerwache", d: "Schützt deine Serie: Du kannst 2 Serienschutze ansparen.", max: 1, cost: [400], time: [5400], ew: 12, rat: 4, uniq: 1},
  buero: {n: "Bürohochhaus", d: "Firmen ziehen ein: Aufträge bringen 15 % mehr Bitcoin.", max: 1, cost: [700], time: [14400], ew: 40, rat: 5, uniq: 1},
  fernsehturm: {n: "Fernsehturm", d: "Wahrzeichen für ein Fach, das du zu 80 % beherrschst.", lm: 1, max: 1, cost: [500], time: [7200], ew: 60, uniq: 1, cond: () => Object.keys(FACH).some(f => mastery(qsOf(f)) >= .8) ? "" : "Erst ein Fach zu 80 % beherrschen"},
  stadion: {n: "Stadion", d: "Wahrzeichen für 30 Tage Lernen am Stück.", lm: 1, max: 1, cost: [600], time: [10800], ew: 60, uniq: 1, cond: () => (G().best || 0) >= 30 || streak() >= 30 ? "" : `Erst 30 Tage Serie (Rekord ${Math.max(G().best || 0, streak())})`},
  kathedrale: {n: "Kathedrale", d: "Wahrzeichen für eine bestandene Probeklausur.", lm: 1, max: 1, cost: [800], time: [14400], ew: 60, uniq: 1, cond: () => G().kath ? "" : "Erst eine Probeklausur mit mindestens 50 % bestehen"},
  bank: {n: "Bänke", d: "Ein Platz zum Ausruhen.", deko: 1, max: 1, cost: [10], time: [0], ew: 2},
  brunnen: {n: "Brunnen", d: "Plätschert auf einem kleinen Platz.", deko: 1, max: 1, cost: [30], time: [0], ew: 3},
  laterne: {n: "Laternenplatz", d: "Leuchtet nachts besonders schön.", deko: 1, max: 1, cost: [15], time: [0], ew: 2},
  statue: {n: "Statue", d: "Ein Denkmal für fleißige Bauingenieure.", deko: 1, max: 1, cost: [40], time: [0], ew: 3},
  blumen: {n: "Blumenbeet", d: "Bunte Beete. Gibt es in Truhen.", deko: 1, max: 1, cost: [0], time: [0], ew: 2, rare: 1},
  baum: {n: "Seltener Baum", d: "Ein goldener Herbstbaum. Gibt es in Truhen.", deko: 1, max: 1, cost: [0], time: [0], ew: 3, rare: 1},
  goldstatue: {n: "Goldene Statue", d: "Sehr selten in Truhen.", deko: 1, max: 1, cost: [0], time: [0], ew: 5, rare: 1}
};
Object.assign(GT, GT23);
const GCAT = [["Wohnen", ["wohnhaus", "mehrfamilienhaus", "park"]], ["Werke", ["wasserturm", "kieswerk", "zimmerei", "betonwerk", "stahlwerk", "kran", "rechenzentrum", "vermessung", "bahnhof"]],
  ["Fabriken", ["lagerhaus", "mischanlage", "mauersteinwerk", "glaserei", "abbundhalle", "fertigteilwerk"]], ["Stadt", ["schule", "feuerwache", "buero"]],
  ["Wahrzeichen", ["fernsehturm", "stadion", "kathedrale"]], ["Deko", ["bank", "brunnen", "laterne", "statue", "blumen", "baum", "goldstatue"]]];
GORDER.splice(0, GORDER.length, ...GCAT.flatMap(c => c[1]));
const WERK = {wasserturm: {f: "hydro", r: "wasser"}, kieswerk: {f: "hydro", r: "kies"}, zimmerei: {f: "bauko", r: "holz"}, betonwerk: {f: "bsk", r: "zement"}, stahlwerk: {f: "bsk", r: "stahl"},
  kran: {f: "phys", r: "strom"}, rechenzentrum: {f: "binf", r: "plan"}, vermessung: {f: "stat", r: "daten"}, bahnhof: {f: "dap", r: "fach"}};
const WRATE = [0, .5, .65, .8, 1, 1.25], WCAP = [0, 10, 16, 24, 34, 48], LCAP = [25, 60, 100, 150, 220, 300];
const FAB = {
  mischanlage: {in: {zement: 1, kies: 2, wasser: 1}, out: {beton: 2}, t: 600, o1: "kies", n: ["Sieblinie optimiert", "Mischzeit per Regression bestimmt", "Wasserzementwert geprüft"]},
  mauersteinwerk: {in: {zement: 1, kies: 3, wasser: 1, strom: 1}, out: {stein: 4}, t: 1200, o1: "kies", n: ["Rohdichte per Stichprobe", "Härtezeit ausgewertet", "Ausschuss halbiert"]},
  glaserei: {in: {kies: 2, strom: 2, holz: 1}, out: {fenster: 1}, t: 1800, o1: "strom", n: ["Qualitätsregelkarte", "Ausreißer aussortiert", "Streuung gesenkt"]},
  abbundhalle: {in: {holz: 3, plan: 1}, out: {dach: 1}, t: 2700, o1: "holz", n: ["Holzfeuchte gemessen", "Zuschnitt optimiert", "Toleranzen statistisch abgesichert"], o3: "plan"},
  fertigteilwerk: {in: {beton: 2, stahl: 1, strom: 1, plan: 1}, out: {fert: 1}, t: 3600, o1: "strom", n: ["Bewehrung nachgerechnet", "Stichprobenprüfung", "Prüfplan nach Norm"]}
};
const OPTCOST = [[3, 30], [6, 60], [10, 120]];
const ECOST = {
  rathaus: [, , {}, {holz: 6, zement: 4, kies: 4, plan: 2, fach: 2}, {stein: 10, fenster: 4, dach: 2, plan: 3, fach: 3}, {fert: 6, fenster: 6, stahl: 4, plan: 4, fach: 4}],
  wohnhaus: [, , , {holz: 4, zement: 2, kies: 3, plan: 1, fach: 1}, {stein: 6, holz: 3, fenster: 2, dach: 1, fach: 2}, {fert: 3, fenster: 4, stahl: 2, plan: 2, fach: 3}],
  werk: [, , , {holz: 3, zement: 2, kies: 2, plan: 1, fach: 1}, {beton: 4, stein: 4, stahl: 2, plan: 2, fach: 2}, {fert: 3, fenster: 2, stahl: 3, plan: 3, fach: 3}],
  lagerhaus: [, , , {holz: 5, stahl: 2}, {stein: 8, stahl: 3}, {fert: 2, stahl: 4}],
  mischanlage: [, {zement: 3, kies: 4, holz: 2}, {stein: 4, stahl: 2, plan: 1, fach: 1}, {beton: 4, fenster: 2, stahl: 3, plan: 2, fach: 2}],
  mauersteinwerk: [, {beton: 2, holz: 3, stahl: 1}, {stein: 4, stahl: 2, plan: 1, fach: 1}, {beton: 4, fenster: 2, stahl: 3, plan: 2, fach: 2}],
  glaserei: [, {stein: 6, stahl: 2, strom: 3}, {stein: 4, stahl: 2, plan: 1, fach: 1}, {beton: 4, fenster: 2, stahl: 3, plan: 2, fach: 2}],
  abbundhalle: [, {holz: 6, stein: 4, plan: 1}, {stein: 4, stahl: 2, plan: 1, fach: 1}, {beton: 4, fenster: 2, stahl: 3, plan: 2, fach: 2}],
  fertigteilwerk: [, {beton: 6, stahl: 4, stein: 6, plan: 2}, {stein: 6, stahl: 3, plan: 2, fach: 2}, {beton: 6, fenster: 3, stahl: 4, plan: 3, fach: 3}],
  mehrfamilienhaus: [, {stein: 6, fenster: 2, holz: 2, fach: 1}, {stein: 6, fenster: 2, dach: 1, fach: 2}, {fert: 2, fenster: 3, stahl: 2, fach: 2}],
  schule: [, {stein: 6, beton: 3, plan: 2, fach: 2}], feuerwache: [, {stahl: 3, stein: 6, strom: 2, fenster: 1, fach: 2}], buero: [, {fert: 4, fenster: 4, plan: 3, strom: 3, fach: 3}],
  fernsehturm: [, {fert: 4, stahl: 4, strom: 3, fach: 3}], stadion: [, {beton: 6, stahl: 4, stein: 4, fach: 3}], kathedrale: [, {stein: 10, fenster: 6, dach: 2, fach: 3}],
  bank: [, {holz: 2}], brunnen: [, {beton: 2, wasser: 2}], laterne: [, {stahl: 1, strom: 1}], statue: [, {beton: 3, plan: 1}]
};
function ecoCost(k, L){ const row = ECOST[k] || (WERK[k] ? ECOST.werk : null); return (row && row[L]) ? Object.assign({}, row[L]) : {}; }

/* ── Spielstand ── */
function ecoInit(){
  const g = G();
  if (!g.r) g.r = {}; RBASE.concat(RPROD).forEach(k => { if (typeof g.r[k] !== "number") g.r[k] = 0; });
  if (!g.fj) g.fj = {}; if (!g.opt) g.opt = {}; if (!g.inv) g.inv = {speed: 0, deko: {}}; if (!g.inv.deko) g.inv.deko = {};
  if (!g.orders) g.orders = []; if (typeof g.xp !== "number") g.xp = 0; if (!g.lv) g.lv = 1; if (!g.sd) g.sd = []; if (typeof g.sh !== "number") g.sh = 1; if (!g.stat) g.stat = {};
  return g;
}
const eco = () => ecoInit();
const hasB = k => G().b.some(b => b.k === k && b.l > 0);
const lagerL = () => { const b = G().b.find(o => o.k === "lagerhaus"); return b ? b.l : 0; };
const lagerCap = () => LCAP[lagerL()];
const lagerUsed = () => { const r = eco().r; return Object.keys(r).filter(k => k !== "daten" && k !== "fach").reduce((a, k) => a + r[k], 0); };
const extraCap = k => k === "daten" ? 40 : k === "fach" ? 10 + 6 * ((G().b.find(o => o.k === "bahnhof") || {l: 0}).l) : 0;
function ecoRoom(k){ return (k === "daten" || k === "fach") ? Math.max(0, extraCap(k) - eco().r[k]) : Math.max(0, lagerCap() - lagerUsed()); }
function ecoStat(kind, k, n){ const g = eco(), d = dayKey(), s = g.stat[d] || (g.stat[d] = {p: {}, u: {}, m: {}}); s[kind][k] = (s[kind][k] || 0) + n;
  const keys = Object.keys(g.stat).sort(); while (keys.length > 14) delete g.stat[keys.shift()]; }
function ecoHave(c){ const r = eco().r; return Object.keys(c).every(k => (r[k] || 0) >= c[k]); }
function ecoMiss(c, note){ const r = eco().r, m = Object.keys(c).filter(k => (r[k] || 0) < c[k]); if (note) m.forEach(k => ecoStat("m", k, 1)); return m.map(k => `${c[k] - (r[k] || 0)} ${RES[k].n}`).join(", "); }
function ecoPay(c){ const r = eco().r; Object.keys(c).forEach(k => { r[k] -= c[k]; ecoStat("u", k, c[k]); }); }
function ecoAdd(k, n){ const take = Math.min(n, ecoRoom(k)); eco().r[k] += take; return take; }
function costHTML(c, coins, names){
  const r = eco().r, parts = Object.keys(c).map(k => `<span class="rc${(r[k] || 0) < c[k] ? " miss" : ""}" title="${RES[k].n}">${ricon(k, 15)}${r[k] >= c[k] ? c[k] : `${Math.floor(r[k] || 0)}/${c[k]}`}${names ? `<small>${c[k] === 1 && k === "fach" ? "Fachkraft" : RES[k].n}</small>` : ""}</span>`);
  if (coins !== undefined) parts.unshift(`<span class="rc${G().coins < coins ? " miss" : ""}"><i class="c3cn sm">₿</i>${fmtB(coins)}</span>`);
  return `<span class="rcs">${parts.join("")}</span>`;
}
const gTr = () => 2 + (S.game && S.game.crew3 ? 1 : 0);

/* ── Werke: Produktion nur durch Lernen ── */
function ecoLastDays(f){
  const ks = Object.keys(S.df).filter(k => (S.df[k] || {})[f] > 0).sort(); if (!ks.length) return 999;
  const [y, m, d] = ks[ks.length - 1].split("-").map(Number); return dayNum() - dayNum(new Date(y, m - 1, d));
}
const werkIdle = b => WERK[b.k] && ecoLastDays(WERK[b.k].f) >= 7;
function ecoFeed(f, pts){
  const g = eco(), now = Date.now(); let any = 0;
  g.b.forEach(b => { const w = WERK[b.k]; if (!w || w.f !== f || b.l < 1) return;
    const boost = g.boost && g.boost.k === b.k && g.boost.until > now ? 2 : 1, cap = WCAP[b.l], before = b.st || 0;
    b.st = Math.min(cap, before + pts * WRATE[b.l] * boost); if (b.st > before) { ecoStat("p", w.r, b.st - before); any = 1; } });
  return any;
}
function ecoCollect(b){
  const w = WERK[b.k]; if (!w) return 0; const n = Math.floor(b.st || 0); if (n < 1) return 0;
  const take = ecoAdd(w.r, n); b.st -= take; save();
  if (take < n) toast(w.r === "fach" ? "Mehr Fachkräfte passen nicht – baue den Bahnhof aus" : w.r === "daten" ? "Mehr Messdaten passen nicht – setze sie im Prüflabor ein" : "Das Lager ist voll – baue das Lagerhaus aus");
  return take;
}

/* ── Fabriken ── */
function fabRecipe(k){
  const F = FAB[k], o = eco().opt[k] || 0, inp = Object.assign({fach: 1}, F.in), out = Object.assign({}, F.out);
  if (o >= 1 && inp[F.o1] > 0) inp[F.o1] -= 1; if (o >= 3) { if (F.o3) delete inp[F.o3]; else out[Object.keys(out)[0]] += 1; }
  Object.keys(inp).forEach(x => { if (!inp[x]) delete inp[x]; });
  const L = (G().b.find(b => b.k === k) || {l: 1}).l || 1;
  return {inp, out, t: Math.round(F.t * (o >= 2 ? .75 : 1) * [1, 1, .85, .7][L])};
}
const fabSlots = b => (b.l || 1) + 1;
function fabJobs(b){ const g = eco(); return g.fj[b.id] || (g.fj[b.id] = []); }
function fabStart(b){
  const g = eco(), R = fabRecipe(b.k), J = fabJobs(b), now = Date.now();
  if (b.l < 1) return "Die Fabrik ist noch im Bau"; if (J.length >= fabSlots(b)) return "Die Warteschlange ist voll";
  if (!ecoHave(R.inp)) return "Es fehlen: " + ecoMiss(R.inp, true);
  ecoPay(R.inp); const s = J.length ? Math.max(now, J[J.length - 1].e) : now; J.push({s, e: s + R.t * 1000, out: R.out}); save(); return "";
}
function fabCollect(b){
  const J = fabJobs(b), now = Date.now(); let got = 0, full = 0;
  while (J.length && J[0].e <= now) { const job = J[0], k = Object.keys(job.out)[0], n = job.out[k]; if (ecoRoom(k) < n) { full = 1; break; } ecoAdd(k, n); ecoStat("p", k, n); got += n; J.shift(); }
  if (full) toast("Das Lager ist voll – baue das Lagerhaus aus"); if (got) save(); return got;
}
const fabReady = b => (eco().fj[b.id] || []).filter(j => j.e <= Date.now()).length;
function optBuy(k){
  const g = eco(), o = g.opt[k] || 0; if (o >= 3) return "Alle Optimierungen erledigt"; const [d, c] = OPTCOST[o];
  if (g.r.daten < d) { ecoStat("m", "daten", 1); return `Es fehlen ${d - Math.floor(g.r.daten)} Messdaten`; } if (g.coins < c) return `Noch ${fmtB(c - g.coins)} ₿ zu wenig`;
  g.r.daten -= d; ecoStat("u", "daten", d); g.coins -= c; g.opt[k] = o + 1; save(); return "";
}
function kampagne(k){ const g = eco(); if (g.r.daten < 5) { ecoStat("m", "daten", 1); return "Es fehlen Messdaten (5 nötig)"; } g.r.daten -= 5; ecoStat("u", "daten", 5); g.boost = {k, until: Date.now() + 2 * 3600e3}; save(); return ""; }

/* ── Stadtstufe ── */
const xpNeed = L => 60 + 40 * L;
function ecoXP(n){
  const g = eco(); g.xp += Math.round(n); let up = 0;
  while (g.xp >= xpNeed(g.lv)) { g.xp -= xpNeed(g.lv); g.lv++; up++; g.coins += 25 * g.lv; g.total += 25 * g.lv; g.inv.speed++; }
  if (up) setTimeout(() => toast(`Stadtstufe ${g.lv}! +₿ ${25 * g.lv} und ein Bau-Beschleuniger`), 400);
}

/* ── Aufträge ── */
const OKUNDE = ["Kindergarten", "Spielplatz", "Bushaltestelle", "Radweg", "Gartenhaus", "Steg am Fluss", "Sporthalle", "Bäckerei", "Stadtfest-Bühne", "Hochbeete", "Carport", "Jugendzentrum", "Bibliothek", "Fahrradständer", "Pausenhof", "Arztpraxis", "Eisdiele", "Hundewiese"];
function ecoAvail(){
  const g = G(), a = [];
  Object.keys(WERK).forEach(k => { if (hasB(k) && WERK[k].r !== "fach" && WERK[k].r !== "daten") a.push(WERK[k].r); });
  Object.keys(FAB).forEach(k => { if (hasB(k)) a.push(Object.keys(FAB[k].out)[0]); });
  return [...new Set(a)];
}
function neglectW(f){ return 1 + Math.min(10, ecoLastDays(f)); }
function pickF(){ const fs = Object.keys(FACH), w = fs.map(neglectW), sum = w.reduce((a, b) => a + b, 0); let x = Math.random() * sum; for (let i = 0; i < fs.length; i++) { x -= w[i]; if (x <= 0) return fs[i]; } return fs[0]; }
function orderNew(lern){
  const g = eco(), av = ecoAvail(), id = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  if (!lern && av.length) {
    const rf = r => Object.keys(WERK).filter(k => WERK[k].r === r).map(k => WERK[k].f)[0], w = av.map(r => RES[r].p ? 2 : neglectW(rf(r)));
    const pick = []; const n = Math.min(av.length, 1 + (Math.random() < .55) + (Math.random() < .3));
    while (pick.length < n) { const sum = w.reduce((a, b, i) => a + (pick.includes(av[i]) ? 0 : b), 0); let x = Math.random() * sum; for (let i = 0; i < av.length; i++) { if (pick.includes(av[i])) continue; x -= w[i]; if (x <= 0) { pick.push(av[i]); break; } } }
    const need = {}, RL = gRat(); pick.forEach(r => need[r] = RES[r].p ? 1 + Math.floor(Math.random() * Math.min(3, RL)) : 2 + Math.floor(Math.random() * (2 + RL)));
    const val = Object.keys(need).reduce((a, r) => a + RVAL[r] * need[r], 0), rew = {b: Math.round(val * 1.3 / 5) * 5, xp: 5 + Math.round(val / 6)};
    const x = Math.random(); if (x < .1) rew.speed = 1; else if (x < .2) rew.deko = ["bank", "laterne", "blumen", "brunnen"][Math.random() * 4 | 0];
    return {id, kind: "res", name: OKUNDE[Math.random() * OKUNDE.length | 0], need, rew};
  }
  const f = pickF(), types = [["ok", 6, `6 richtige Antworten in ${FACH[f].n}`], ["st3", 3, `3 Anwenden-Fragen in ${FACH[f].n} richtig`], ["fix", 3, "3 frühere Fehler ausbügeln"], ["due", 5, "5 fällige Wiederholungen richtig"], ["task", 1, "Einen Lösungsweg fehlerfrei lösen"]];
  const t = types[Math.random() < .6 ? (Math.random() < .55 ? 0 : 1) : 2 + (Math.random() * 3 | 0)];
  const wr = Object.keys(WERK).find(k => WERK[k].f === f && !["kieswerk", "stahlwerk"].includes(k));
  return {id, kind: "lern", t: t[0], f, n: t[1], c: 0, name: t[2], rew: {b: 30 + 10 * t[1] + (t[0] === "task" ? 40 : 0), xp: 20 + (t[0] === "task" ? 10 : 0), r: WERK[wr] ? [WERK[wr].r, 4] : null}};
}
function ordersTick(){
  const g = eco(), now = Date.now(); let ch = 0;
  for (let i = 0; i < 8; i++) { const o = g.orders[i]; if (!o || (o.wait && o.wait <= now)) { g.orders[i] = orderNew(i >= 6); ch = 1; } }
  if (ch) save();
}
function orderOk(o){ return o && !o.wait && (o.kind === "res" ? ecoHave(o.need) : o.c >= o.n); }
function orderDeliver(i){
  const g = eco(), o = g.orders[i]; if (!o || o.wait) return "";
  if (o.kind === "res") { if (!ecoHave(o.need)) return "Es fehlen: " + ecoMiss(o.need, true); ecoPay(o.need); } else if (o.c < o.n) return "Noch nicht geschafft";
  const bonus = hasB("buero") ? 1.15 : 1, b = Math.round(o.rew.b * bonus); g.coins += b; g.total += b;
  if (o.rew.speed) g.inv.speed++; if (o.rew.deko) g.inv.deko[o.rew.deko] = (g.inv.deko[o.rew.deko] || 0) + 1; if (o.rew.r) ecoAdd(o.rew.r[0], o.rew.r[1]);
  ecoXP(o.rew.xp); g.orders[i] = {wait: Date.now() + 10 * 60e3}; save(); return "";
}
function orderDrop(i){ const g = eco(); if (g.oDrop === dayKey()) return "Heute hast du schon einen Auftrag verworfen"; g.oDrop = dayKey(); g.orders[i] = {wait: Date.now() + 10 * 60e3}; save(); return ""; }

/* ── Truhe nach dem Tagesziel ── */
const chestReady = () => gOn() && today().n >= GOAL && eco().chestDay !== dayKey();
const chestTier = () => { const s = streak(); return s >= 30 ? 2 : s >= 7 ? 1 : 0; };
function chestOpen(){
  const g = eco(); if (!chestReady()) return null; const tier = chestTier(), out = {tier, items: []};
  const base = RBASE.filter(r => r !== "fach" && r !== "daten" && Object.keys(WERK).some(k => WERK[k].r === r && hasB(k)));
  const pool = base.length ? base : ["holz", "zement", "wasser"];
  for (let i = 0; i < [2, 3, 4][tier]; i++) { const r = pool[Math.random() * pool.length | 0], n = [3, 4, 5][tier] + (Math.random() * 3 | 0); const got = ecoAdd(r, n); if (got) out.items.push([r, got]); }
  if (tier === 2) { const pr = RPROD.filter(p => Object.keys(FAB).some(k => hasB(k) && FAB[k].out[p])); if (pr.length) { const p = pr[Math.random() * pr.length | 0], got = ecoAdd(p, 2); if (got) out.items.push([p, got]); } }
  const b = [20, 40, 80][tier] + (Math.random() * [20, 40, 70][tier] | 0); g.coins += b; g.total += b; out.b = b;
  if (tier === 2 || Math.random() < [.25, .45, 1][tier]) { g.inv.speed++; out.speed = 1; }
  if (Math.random() < [.1, .2, .35][tier]) { const d = tier === 2 && Math.random() < .3 ? "goldstatue" : ["blumen", "baum", "blumen", "bank"][Math.random() * 4 | 0]; g.inv.deko[d] = (g.inv.deko[d] || 0) + 1; out.deko = d; }
  if (Math.random() < [.03, .08, .15][tier] && g.sh < shCap()) { g.sh++; out.sh = 1; }
  g.chestDay = dayKey(); ecoXP(10 + 10 * tier); save(); return out;
}

/* ── Serienschutz: einmal pro Woche ein Tag Pause ohne Serienbruch ── */
const shCap = () => 1 + (hasB("feuerwache") ? 1 : 0);
function ecoDaily(){
  if (!S.game) return; const g = eco(), wk = Math.floor((dayNum() + 3) / 7);
  if (g.shW !== wk) { if (g.shW !== undefined) g.sh = Math.min(shCap(), g.sh + 1); g.shW = wk; }
  const d1 = new Date(); d1.setDate(d1.getDate() - 1); const d2 = new Date(); d2.setDate(d2.getDate() - 2);
  const k1 = dayKey(d1), k2 = dayKey(d2), act = k => (S.days[k] || {}).n > 0 || g.sd.includes(k);
  if (!act(k1) && act(k2) && g.sh > 0 && g.sdCheck !== dayKey()) { g.sh--; g.sd.push(k1); g.sd = g.sd.slice(-20); g.shUsed = k1; setTimeout(() => toast("Serienschutz eingesetzt – deine Serie läuft weiter"), 1200); }
  g.sdCheck = dayKey(); g.best = Math.max(g.best || 0, streak()); ordersTick(); save();
}

/* ── Anbindung ans Lernen ── */
function ecoAnswer(q, ok, p){
  if (!S.game) return; const g = eco(), pts = (ok ? 1 : .5) * [1, 1, 1.25, 1.6][q.st || 2];
  ecoFeed(q.f, pts);
  g.orders.forEach(o => { if (!o || o.kind !== "lern" || o.wait || o.c >= o.n || !ok) return;
    if ((o.t === "ok" && q.f === o.f) || (o.t === "st3" && q.f === o.f && q.st === 3) || (o.t === "fix" && p && p.had && p.last === false) || (o.t === "due" && p && p.due)) o.c++; });
  g.best = Math.max(g.best || 0, streak()); save();
}
function ecoTask(a, p){ if (!S.game) return; const g = eco(); ecoFeed(a.f, 4 + 4 * p); if (p === 1) g.orders.forEach(o => { if (o && o.kind === "lern" && o.t === "task" && !o.wait && o.c < o.n) o.c++; }); save(); }
function ecoExam(p){ if (!S.game) return; if (p >= .5) { eco().kath = 1; save(); } }
const ordersReadyN = () => (eco().orders || []).filter(orderOk).length;
