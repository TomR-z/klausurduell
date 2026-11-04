/* Abbildungen für Bildfragen (SVG, Farben aus den Theme-Tokens) */
const FIG = (() => {
  const S = (inner, h=180) => `<svg viewBox="0 0 320 ${h}" role="img" aria-hidden="true">${inner}</svg>`;
  const ink = "stroke:var(--ink);fill:none", ink2 = "fill:var(--ink-2)", acc = "stroke:var(--accent)";
  const water = "fill:color-mix(in srgb,var(--c-hydro) 24%,transparent)";
  const t = (x,y,s,anchor="middle",extra="") => `<text x="${x}" y="${y}" text-anchor="${anchor}" style="${ink2};${extra}">${s}</text>`;
  const arrow = (id,col) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" style="fill:${col}"/></marker></defs>`;
  const bell = (x0,x1,base,mu,sig,amp) => { let d=""; for(let x=x0;x<=x1;x+=3){const z=(x-mu)/sig;d+=(d?"L":"M")+x+","+(base-amp*Math.exp(-.5*z*z)).toFixed(1);} return d; };
  return {
    druck: () => S(arrow("ad","var(--accent)")+`
      <rect x="40" y="35" width="130" height="115" style="${water}"/>
      <path d="M40 35H170" style="stroke:var(--c-hydro);stroke-width:2"/><path d="M58 26l6 8 6-8z" style="fill:var(--c-hydro)"/>
      <rect x="170" y="20" width="14" height="130" rx="2" style="fill:var(--ink-3);opacity:.55"/>
      <path d="M20 150H300" style="${ink};stroke-width:1.5"/>
      <path d="M184 35V150H274Z" style="fill:color-mix(in srgb,var(--accent) 16%,transparent);${acc};stroke-width:1.5"/>
      <path d="M220 90H186M247 120H186M262 140H186" style="${acc};stroke-width:1.2" marker-end="url(#ad)"/>
      <path d="M28 35V150M24 35H32M24 150H32" style="${ink};stroke-width:1"/>${t(16,97,"h")}
      ${t(229,168,"ρ·g·h")}${t(296,96,"F = ?","middle","fill:var(--accent);font-weight:700")}`),
    poren: () => S(`
      <rect x="30" y="28" width="260" height="124" rx="3" style="fill:color-mix(in srgb,var(--ink-3) 38%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      <circle cx="82" cy="92" r="17" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.3"/>${t(82,97,"A","middle","font-weight:700")}
      <path d="M162 28C150 58 180 78 164 106S170 138 168 152" style="stroke:color-mix(in srgb,var(--c-hydro) 70%,transparent);stroke-width:11;fill:none"/>
      ${t(194,96,"B","middle","font-weight:700")}
      <path d="M244 29C240 52 252 70 246 92" style="stroke:var(--bg);stroke-width:11;fill:none"/>
      <circle cx="246" cy="100" r="13" style="fill:var(--bg)"/>${t(246,105,"C","middle","font-weight:700")}
      ${t(160,172,"blau: Wasser in den Kapillaren")}`),
    emodul: () => S(arrow("ae","var(--ink-2)")+`
      <path d="M40 18V150H300" style="${ink};stroke-width:1.5"/>${t(304,154,"ε","start")}${t(32,24,"σ","end")}
      <path d="M40 40H200" style="stroke:var(--ink-3);stroke-dasharray:4 4"/>${t(46,33,"Festigkeit (größte Spannung)","start","font-size:12px")}
      <path d="M40 150L110 70C140 40 175 36 200 40S250 48 265 54" style="${acc};stroke-width:2.5;fill:none"/>
      <path d="M259 47l12 14" style="${ink};stroke-width:1.5"/>
      <path d="M60 127H90V93" style="stroke:var(--warn);stroke-width:2;fill:none"/>
      ${t(75,141,"Δε","middle","font-size:12px")}${t(96,114,"Δσ","start","font-size:12px")}
      ${t(124,104,"Steigung = E = Δσ / Δε","start","fill:var(--accent);font-weight:700;font-size:12.5px")}
      <path d="M42 170H263" style="stroke:var(--ink-2);stroke-width:1" marker-start="url(#ae)" marker-end="url(#ae)"/>${t(152,185,"Bruchdehnung (wie weit bis zum Bruch)","middle","font-size:12px")}`, 192),
    kapillar: () => S(`
      <rect x="20" y="110" width="120" height="50" style="${water}"/><path d="M20 110H140" style="stroke:var(--c-hydro);stroke-width:1.5"/>
      <path d="M72 150V62Q80 70 88 62V150Z" style="${water}"/><path d="M72 62Q80 70 88 62" style="stroke:var(--c-hydro);stroke-width:2;fill:none"/>
      <path d="M72 30V152M88 30V152" style="${ink};stroke-width:1.5"/>
      <rect x="180" y="110" width="120" height="50" style="fill:color-mix(in srgb,var(--ink-3) 45%,transparent)"/><path d="M180 110H300" style="stroke:var(--ink-3);stroke-width:1.5"/>
      <path d="M232 152V128Q240 120 248 128V152Z" style="fill:color-mix(in srgb,var(--ink-3) 45%,transparent)"/><path d="M232 128Q240 120 248 128" style="stroke:var(--ink-3);stroke-width:2;fill:none"/>
      <path d="M232 30V152M248 30V152" style="${ink};stroke-width:1.5"/>
      ${t(80,176,"links: Wasser")}${t(240,176,"rechts: ?")}`),
    schichtung: () => S(`
      <rect x="40" y="30" width="100" height="50" style="fill:color-mix(in srgb,var(--warn) 22%,transparent)"/>
      <rect x="40" y="80" width="100" height="70" style="${water}"/>
      <path d="M40 22V150H140V22" style="${ink};stroke-width:1.5"/>${t(90,60,"?")}${t(90,120,"Wasser")}
      <path d="M160 30V150" style="${ink};stroke-width:1.2"/><path d="M160 30L190 80L260 150H160Z" style="fill:color-mix(in srgb,var(--accent) 16%,transparent);${acc};stroke-width:1.8"/>
      <path d="M40 80H290" style="stroke:var(--ink-3);stroke-dasharray:4 4"/>${t(262,166,"p")}${t(168,22,"Tiefe ↓","start")}`),
    schwimmen: () => S(`
      <rect x="20" y="95" width="280" height="70" style="${water}"/><path d="M20 95H300" style="stroke:var(--c-hydro);stroke-width:2"/>
      <rect x="110" y="60" width="100" height="80" rx="4" style="fill:var(--glass-strong);stroke:var(--ink);stroke-width:1.5"/>
      <path d="M234 60V140M230 60H238M230 140H238" style="${ink};stroke-width:1"/>${t(244,104,"H","start")}
      <path d="M266 95V140M262 95H270M262 140H270" style="${ink};stroke-width:1"/>${t(274,122,"h_W","start")}
      <path d="M92 60V95M88 60H96M88 95H96" style="${acc};stroke-width:2"/>${t(82,82,"?","end","fill:var(--accent);font-weight:700;font-size:16px")}`),
    sigeps: () => S(`
      <path d="M40 15V155H305" style="${ink};stroke-width:1.5"/>${t(300,172,"ε","end")}${t(30,22,"σ","end")}
      <path d="M40 155L112 50" style="stroke:var(--c-bauko);stroke-width:2.2;fill:none"/><path d="M106 44l12 12M118 44l-12 12" style="stroke:var(--c-bauko);stroke-width:1.5"/>${t(124,42,"A","start","font-weight:700")}
      <path d="M40 155L70 82H130Q190 82 232 48L255 58" style="stroke:var(--accent);stroke-width:2.2;fill:none"/>${t(262,60,"B","start","font-weight:700")}
      <path d="M40 155Q210 152 292 92" style="stroke:var(--c-stat);stroke-width:2.2;fill:none"/>${t(296,92,"C","start","font-weight:700")}
      <path d="M40 155Q75 95 120 98Q160 102 190 132" style="stroke:var(--c-bsk);stroke-width:2.2;fill:none"/>${t(118,90,"D","middle","font-weight:700")}`),
    woehler: () => S(`
      <path d="M45 15V150H305" style="${ink};stroke-width:1.5"/>${t(300,168,"Lastspiele N (log)","end")}${t(38,24,"σ_a","end")}
      <path d="M52 34Q120 50 175 108Q190 116 205 116H300" style="${acc};stroke-width:2.4;fill:none"/>
      <path d="M205 116H300" style="stroke:var(--accent);stroke-width:5;opacity:.25"/>${t(252,104,"?","middle","fill:var(--accent);font-weight:700")}`),
    pfettendach: () => S(`
      <path d="M30 142H290" style="${ink};stroke-width:3"/>
      <path d="M40 140L160 38L280 140" style="stroke:var(--c-bsk);stroke-width:5;fill:none;stroke-linejoin:round"/>
      <rect x="94" y="90" width="13" height="13" style="fill:var(--c-bauko)"/><rect x="214" y="90" width="13" height="13" style="fill:var(--c-bauko)"/>
      <rect x="97" y="103" width="7" height="38" style="fill:var(--ink-3)"/><rect x="217" y="103" width="7" height="38" style="fill:var(--ink-3)"/>
      ${t(56,98,"①","middle","font-size:17px;font-weight:700")}${t(132,108,"②","middle","font-size:17px;font-weight:700")}${t(84,130,"③","middle","font-size:17px;font-weight:700")}`),
    traeger: () => S(arrow("aq","var(--accent)")+`
      <path d="M50 36H270" style="${acc};stroke-width:1.5"/>${[50,72,94,116,138,160,182,204,226,248,270].map(x=>`<path d="M${x} 36V64" style="${acc};stroke-width:1.2" marker-end="url(#aq)"/>`).join("")}${t(160,28,"q","middle","fill:var(--accent);font-weight:700")}
      <path d="M50 70H270" style="stroke:var(--ink);stroke-width:5"/>
      <path d="M50 72l-10 18h20z" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><circle cx="270" cy="80" r="8" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><path d="M36 92H64M256 90H284" style="${ink};stroke-width:1.5"/>
      ${t(50,110,"A")}${t(270,110,"B")}<path d="M50 128H270M50 122V134M270 122V134" style="${ink};stroke-width:1"/>${t(160,148,"l")}`),
    wurf: () => S(`
      <path d="M20 150H300" style="${ink};stroke-width:1.5"/><path d="M40 150Q160 -30 280 150" style="stroke:var(--accent);stroke-width:2.2;fill:none;stroke-dasharray:6 5"/>
      <circle cx="40" cy="150" r="6" style="fill:var(--accent)"/><circle cx="160" cy="60" r="6" style="fill:var(--accent)"/><circle cx="280" cy="150" r="6" style="fill:var(--accent)"/>
      ${t(40,172,"① Abwurf")}${t(160,46,"② Scheitel")}${t(280,172,"③ Aufprall")}`),
    kreis: () => S(arrow("ak","var(--ink)")+`
      <circle cx="160" cy="98" r="62" style="stroke:var(--ink-3);fill:none;stroke-width:1.5;stroke-dasharray:5 5"/><circle cx="160" cy="98" r="3" style="fill:var(--ink-3)"/>${t(170,112,"M","start")}
      <circle cx="160" cy="36" r="6" style="fill:var(--accent)"/>
      <path d="M166 36H226" style="${ink};stroke-width:2" marker-end="url(#ak)"/>${t(236,40,"A","start","font-weight:700")}
      <path d="M160 42V80" style="${ink};stroke-width:2" marker-end="url(#ak)"/>${t(146,72,"B","end","font-weight:700")}
      <path d="M160 30V6" style="${ink};stroke-width:2" marker-end="url(#ak)"/>${t(146,14,"C","end","font-weight:700")}`),
    normal: () => S(`
      <path d="${bell(30,290,150,160,45,115)}V150H30Z" style="fill:color-mix(in srgb,var(--c-dap) 10%,transparent)"/>
      <path d="${bell(115,205,150,160,45,115)}V150H115Z" style="fill:color-mix(in srgb,var(--c-dap) 35%,transparent)"/>
      <path d="${bell(30,290,150,160,45,115)}" style="stroke:var(--c-dap);stroke-width:2.2;fill:none"/>
      <path d="M20 150H300" style="${ink};stroke-width:1.5"/><path d="M160 150V35" style="stroke:var(--ink-3);stroke-dasharray:4 4"/>
      ${t(115,168,"μ − σ")}${t(160,168,"μ")}${t(205,168,"μ + σ")}`),
    pdfcdf: () => S(`
      <path d="M20 140H150M20 140V30" style="${ink};stroke-width:1.2"/><path d="${bell(22,148,140,85,24,95)}" style="stroke:var(--c-dap);stroke-width:2.2;fill:none"/>${t(85,162,"Kurve A","middle","font-weight:700")}
      <path d="M170 140H300M170 140V30" style="${ink};stroke-width:1.2"/><path d="M172 138C215 138 222 44 298 42" style="stroke:var(--accent);stroke-width:2.2;fill:none"/><path d="M170 42H300" style="stroke:var(--ink-3);stroke-dasharray:3 4"/>${t(165,46,"1","end")}${t(235,162,"Kurve B","middle","font-weight:700")}`),
    /* v1.3 – Skizzen für Lösungsweg-Aufgaben */
    bleikugel: () => S(`
      <rect x="10" y="100" width="140" height="62" style="${water}"/><path d="M10 100H150" style="stroke:var(--c-hydro);stroke-width:2"/>
      <rect x="45" y="58" width="70" height="70" rx="3" style="fill:color-mix(in srgb,var(--c-bsk) 30%,var(--glass-strong));stroke:var(--ink);stroke-width:1.5"/>
      <circle cx="80" cy="49" r="9" style="fill:var(--ink-2)"/>${t(80,180,"a) Kugel auf dem Holz")}
      <rect x="170" y="100" width="140" height="62" style="${water}"/><path d="M170 100H310" style="stroke:var(--c-hydro);stroke-width:2"/>
      <rect x="205" y="64" width="70" height="70" rx="3" style="fill:color-mix(in srgb,var(--c-bsk) 30%,var(--glass-strong));stroke:var(--ink);stroke-width:1.5"/>
      <circle cx="290" cy="153" r="9" style="fill:var(--ink-2)"/><path d="M170 162H310" style="${ink};stroke-width:1.5"/>${t(240,180,"b) Kugel im Wasser")}`, 190),
    messing: () => S(arrow("am","var(--accent)")+`
      <path d="M70 18V58" style="${ink};stroke-width:1.2"/><rect x="55" y="58" width="30" height="34" rx="4" style="fill:color-mix(in srgb,var(--c-bsk) 45%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      ${t(70,118,"in Luft")}${t(70,136,"F_G = 32,079 N","middle","font-weight:700")}
      <rect x="180" y="60" width="110" height="80" style="${water}"/><path d="M180 60H290" style="stroke:var(--c-hydro);stroke-width:2"/><path d="M180 52V140H290V52" style="${ink};stroke-width:1.5"/>
      <path d="M235 18V82" style="${ink};stroke-width:1.2"/><rect x="220" y="82" width="30" height="34" rx="4" style="fill:color-mix(in srgb,var(--c-bsk) 45%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      ${t(235,158,"in Wasser: 28,156 N","middle","font-weight:700")}`, 170),
    rohr: () => S(arrow("ar","var(--accent)")+`
      <path d="M20 70H130L170 45H300M20 110H130L170 135H300" style="${ink};stroke-width:2;fill:none"/>
      <path d="M20 70H130L170 45H300V135H170L130 110H20Z" style="${water}"/>
      <path d="M20 90H300" style="stroke:var(--ink-3);stroke-dasharray:6 5"/>
      <path d="M70 60V120M240 35V145" style="stroke:var(--ink);stroke-width:1.3;stroke-dasharray:3 3"/>
      ${t(70,52,"1","middle","font-weight:700")}${t(240,27,"2","middle","font-weight:700")}
      <path d="M30 90H58" style="${acc};stroke-width:2" marker-end="url(#ar)"/><path d="M252 90H272" style="${acc};stroke-width:2" marker-end="url(#ar)"/>
      ${t(70,140,"A₁ = 1 m²")}${t(240,165,"A₂ = 2 m²")}${t(160,104,"Rohrachse","middle","font-size:11px")}`, 175),
    gerinne: () => S(`
      <path d="M60 30V140H260V30" style="${ink};stroke-width:2.2;fill:none"/>
      <rect x="62" y="70" width="196" height="68" style="${water}"/><path d="M62 70H258" style="stroke:var(--c-hydro);stroke-width:2"/><path d="M152 61l6 8 6-8z" style="fill:var(--c-hydro)"/>
      <path d="M60 156H260M60 150V162M260 150V162" style="${ink};stroke-width:1"/>${t(160,174,"b = 5 m")}
      <path d="M278 70V140M274 70H282M274 140H282" style="${acc};stroke-width:1.6"/>${t(288,110,"h","start","fill:var(--accent);font-weight:700")}
      ${t(160,108,"Q = 10 m³/s","middle","font-weight:700")}`, 185),
    stuetze: () => S(arrow("as","var(--accent)")+`
      <path d="M160 6V36" style="${acc};stroke-width:2.4" marker-end="url(#as)"/>${t(176,24,"44 t","start","fill:var(--accent);font-weight:700")}
      <rect x="146" y="42" width="28" height="110" rx="3" style="fill:color-mix(in srgb,var(--ink-3) 35%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      <path d="M120 152H200" style="${ink};stroke-width:2"/>${t(160,170,"l = 3 m")}
      <circle cx="60" cy="96" r="34" style="fill:color-mix(in srgb,var(--c-bsk) 22%,transparent);stroke:var(--ink);stroke-width:1.5"/>${t(60,100,"d = 150")}${t(60,150,"rund")}
      <rect x="226" y="62" width="68" height="68" style="fill:color-mix(in srgb,var(--c-bsk) 22%,transparent);stroke:var(--ink);stroke-width:1.5"/>${t(260,100,"a = 150")}${t(260,150,"quadratisch")}`, 180),
    wand: () => S(arrow("aw","var(--accent)")+`
      <path d="M20 150H300" style="${ink};stroke-width:1.5"/><rect x="262" y="30" width="16" height="120" style="fill:var(--ink-3);opacity:.5"/>
      <path d="M40 150Q150 20 262 80" style="stroke:var(--accent);stroke-width:2.2;fill:none;stroke-dasharray:6 5"/>
      <circle cx="40" cy="150" r="6" style="fill:var(--accent)"/><circle cx="262" cy="80" r="6" style="fill:var(--c-bauko)"/>
      <path d="M40 150L82 108" style="${acc};stroke-width:2.2" marker-end="url(#aw)"/>${t(92,104,"v₀","start","fill:var(--accent);font-weight:700")}
      <path d="M78 150A38 38 0 0 0 67 123" style="${ink};stroke-width:1"/>${t(88,142,"α","start")}
      <path d="M40 166H262M40 160V172M262 160V172" style="${ink};stroke-width:1"/>${t(150,182,"D")}
      <path d="M248 80V150M244 80H252M244 150H252" style="stroke:var(--c-bauko);stroke-width:1.6"/>${t(240,120,"h = ?","end","fill:var(--c-bauko);font-weight:700")}`, 190),
    flug: () => S(arrow("af","var(--ink-2)")+arrow("ag","var(--accent)")+`
      <circle cx="50" cy="90" r="7" style="fill:var(--ink)"/><circle cx="270" cy="90" r="7" style="fill:var(--ink)"/>${t(50,118,"A","middle","font-weight:700")}${t(270,118,"B","middle","font-weight:700")}
      <path d="M62 82H258" style="${acc};stroke-width:2" marker-end="url(#ag)"/><path d="M258 98H62" style="${acc};stroke-width:2" marker-end="url(#ag)"/>${t(160,74,"Hinflug")}${t(160,116,"Rückflug")}
      <path d="M250 30H200M180 30H130" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:5 4" marker-end="url(#af)"/>${t(160,20,"Wind von B nach A")}
      <path d="M50 146H270M50 140V152M270 140V152" style="${ink};stroke-width:1"/>${t(160,166,"D")}`, 175),
    /* v1.5 – weitere Skizzen für Lösungswege */
    vt: () => S(`
      <path d="M40 15V150H300" style="${ink};stroke-width:1.5"/>${t(300,184,"t in s","end")}${t(34,22,"v","end")}
      <path d="M40 150L72 54H200L232 102H296" style="stroke:var(--accent);stroke-width:2.4;fill:none;stroke-linejoin:round"/>
      <path d="M40 150L72 54H200L232 102H296V150Z" style="fill:color-mix(in srgb,var(--accent) 14%,transparent)"/>
      <path d="M40 54H72M40 102H232" style="stroke:var(--ink-3);stroke-dasharray:3 4"/>${t(34,58,"24","end")}${t(34,106,"12","end")}
      ${t(72,166,"2")}${t(200,166,"10")}${t(232,166,"12")}${t(296,166,"16")}${t(40,166,"0")}${t(186,30,"v in m/s","middle","font-size:11px")}`, 190),
    kruemmer: () => S(arrow("akr","var(--accent)")+`
      <path d="M20 70H150Q190 70 215 30L232 4M20 130H150Q215 130 262 52L282 22" style="${ink};stroke-width:2;fill:none"/>
      <path d="M20 70H150Q190 70 215 30L232 4L282 22L262 52Q215 130 150 130H20Z" style="${water}"/>
      <path d="M60 60V140" style="stroke:var(--ink);stroke-width:1.3;stroke-dasharray:3 3"/>${t(60,54,"1","middle","font-weight:700")}
      <path d="M236 2L290 26" style="stroke:var(--ink);stroke-width:1.3;stroke-dasharray:3 3"/>${t(296,22,"2","start","font-weight:700")}
      <path d="M26 100H54" style="${acc};stroke-width:2" marker-end="url(#akr)"/>${t(40,92,"v₁")}
      <path d="M100 160H40" style="${ink};stroke-width:1"/>${t(110,164,"x","start")}
      ${t(60,154,"D₁ = 0,4 m")}${t(250,80,"D₂ = 0,2 m","start")}${t(206,110,"60°","middle","font-weight:700")}`, 175),
    behaelter: () => S(arrow("abh","var(--accent)")+`
      <rect x="21" y="45" width="58" height="114" style="${water}"/><path d="M21 45H79" style="stroke:var(--c-hydro);stroke-width:2"/>
      <path d="M20 25V160H80V147M80 133V25" style="${ink};stroke-width:2;fill:none"/>
      <rect x="80" y="133" width="60" height="14" style="${water}"/><rect x="140" y="118" width="90" height="44" style="${water}"/><rect x="230" y="128" width="58" height="24" style="${water}"/>
      <path d="M80 133H140V118H230V128H288M80 147H140V162H230V152H288" style="${ink};stroke-width:2;fill:none"/>
      <path d="M100 140H112V45" style="stroke:var(--accent);stroke-width:3;fill:none"/><path d="M108 45H116" style="stroke:var(--c-hydro);stroke-width:2"/>
      <path d="M185 118V40" style="stroke:var(--accent);stroke-width:3"/><path d="M181 55H189" style="stroke:var(--c-hydro);stroke-width:2"/>
      ${t(112,36,"1 Pitot","middle","font-weight:700")}${t(185,32,"2 Piezometer","middle","font-weight:700")}
      <path d="M290 140H312" style="${acc};stroke-width:2" marker-end="url(#abh)"/>${t(300,124,"3","middle","font-weight:700")}
      <path d="M4 140H316" style="stroke:var(--ink-3);stroke-dasharray:6 5"/>${t(316,176,"Bezugshorizont = Rohrachse","end","font-size:11px")}
      <path d="M10 45V140M6 45H14M6 140H14" style="${ink};stroke-width:1"/>${t(14,96,"h₀","start")}`, 185),
    matrix: () => { const g=(x,y,r,c,col)=>{let s="";for(let i=0;i<r;i++)for(let j=0;j<c;j++)s+=`<rect x="${x+j*16}" y="${y+i*16}" width="14" height="14" rx="3" style="fill:color-mix(in srgb,${col} 30%,transparent)"/>`;return s;};
      return S(g(20,60,2,3,"var(--c-stat)")+t(94,82,"·","middle","font-size:24px")+g(112,44,3,4,"var(--accent)")+t(196,82,"=","middle","font-size:22px")+`<rect x="214" y="50" width="70" height="50" rx="8" style="fill:none;stroke:var(--ink-3);stroke-dasharray:5 4"/>`+t(249,82,"?","middle","font-size:20px;font-weight:700")+t(44,124,"(2, 3)")+t(144,124,"(3, 4)"), 150); }
  };
})();
