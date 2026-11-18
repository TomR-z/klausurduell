/* Neue Skizzen für FIG in index.html – beim Patch vor „stuetze:“ in das FIG-Objekt einfügen (nutzt S, t, arrow, bell, ink, ink2, acc, water aus FIG)
   Stand 18.11.2026: torricelli, sparren (Meldungen) + 75 Skizzen zu bestehenden Fragen */
    torricelli: () => S(arrow("ato","var(--accent)")+`
      <rect x="40" y="40" width="150" height="110" style="${water}"/>
      <path d="M40 18V150H190V18" style="${ink};stroke-width:2.4"/>
      <path d="M40 40H190" style="stroke:var(--c-hydro);stroke-width:2"/><path d="M110 31l6 8 6-8z" style="fill:var(--c-hydro)"/>${t(50,58,"Spiegel: v ≈ 0, p = 0","start","font-size:11.5px")}
      <path d="M190 128V138" style="stroke:var(--bg);stroke-width:4"/>
      <path d="M190 133C228 133 252 146 270 172" style="stroke:color-mix(in srgb,var(--c-hydro) 70%,transparent);stroke-width:8;fill:none;stroke-linecap:round"/>
      <path d="M196 120H250" style="${acc};stroke-width:2.4" marker-end="url(#ato)"/>${t(258,124,"v = ?","start","fill:var(--accent);font-weight:700")}
      <path d="M24 40V133M18 40H30M18 133H30" style="${ink};stroke-width:1"/>${t(14,92,"h","middle","font-weight:700")}
      <path d="M40 133H190" style="stroke:var(--ink-3);stroke-dasharray:4 4"/>${t(140,172,"kleine Öffnung h unter dem Spiegel")}`, 180),
    sparren: () => S(arrow("asp","var(--accent)")+arrow("asd","var(--c-bauko)")+`
      <path d="M60.6 100.4L70.1 121.4" style="${acc};stroke-width:1.5" marker-end="url(#asp)"/><path d="M87.6 88.2L97.1 109.1" style="${acc};stroke-width:1.5" marker-end="url(#asp)"/><path d="M114.6 75.9L124.1 96.9" style="${acc};stroke-width:1.5" marker-end="url(#asp)"/><path d="M141.6 63.7L151.1 84.6" style="${acc};stroke-width:1.5" marker-end="url(#asp)"/><path d="M168.6 51.4L178.1 72.4" style="${acc};stroke-width:1.5" marker-end="url(#asp)"/><path d="M195.6 39.2L205.1 60.1" style="${acc};stroke-width:1.5" marker-end="url(#asp)"/><path d="M222.6 26.9L232.1 47.9" style="${acc};stroke-width:1.5" marker-end="url(#asp)"/>${t(93,72,"q⊥","middle","fill:var(--accent);font-weight:700")}
      <path d="M46 140L262 42" style="stroke:color-mix(in srgb,var(--c-bauko) 55%,var(--ink));stroke-width:7;stroke-linecap:round"/>
      <path d="M46 144l-8 12h16z M262 46l-8 12h16z" style="fill:var(--bg);${ink};stroke-width:1.4"/>
      <path d="M55.9 161.9L271.9 63.9" style="stroke:var(--c-bauko);stroke-width:1.6" marker-start="url(#asd)" marker-end="url(#asd)"/>
      <text x="168.5" y="122.9" text-anchor="middle" transform="rotate(-24.4 168.5 122.9)" style="fill:var(--c-bauko);font-weight:700">l (schräg entlang des Sparrens)</text>
      <path d="M46 182H262M46 176V188M262 176V188" style="${ink};stroke-width:1"/>${t(154,200,"lₕ waagerecht (Grundriss)","middle","font-size:12px")}
      <path d="M292 42V140M286 42H298M286 140H298" style="${ink};stroke-width:1"/>${t(304,95,"h","start")}
      <path d="M86 140A40 40 0 0 0 82.4 123.5" style="${ink};stroke-width:1"/><path d="M46 140H106" style="${ink};stroke-width:1;stroke-dasharray:3 3"/>${t(96,136,"α","start")}
      ${t(10,18,"l = √(lₕ² + h²)","start","font-size:12.5px;font-weight:600")}${t(10,36,"lₕ = l · cos α","start","font-size:12.5px;font-weight:600")}`, 208),
    /* v1.9 – Skizzen zu bestehenden Fragen: Baukonstruktion */
    windzonen: () => S(arrow("awz","var(--accent)")+`
      <rect x="60" y="34" width="216" height="140" style="fill:color-mix(in srgb,var(--c-bauko) 6%,transparent);${ink};stroke-width:1.6"/>
      <rect x="60" y="34" width="22" height="35" style="fill:color-mix(in srgb,var(--c-bauko) 34%,transparent)"/><rect x="60" y="139" width="22" height="35" style="fill:color-mix(in srgb,var(--c-bauko) 34%,transparent)"/>
      <rect x="60" y="69" width="22" height="70" style="fill:color-mix(in srgb,var(--c-bauko) 20%,transparent)"/>
      <rect x="168" y="34" width="22" height="140" style="fill:color-mix(in srgb,var(--ink-3) 26%,transparent)"/>
      <path d="M82 34V174M60 69H82M60 139H82M190 34V174" style="${ink};stroke-width:1"/>
      <path d="M168 26V182" style="stroke:var(--ink);stroke-width:2;stroke-dasharray:7 4"/>${t(168,20,"First")}
      ${t(71,56,"F","middle","font-weight:700")}${t(71,161,"F","middle","font-weight:700")}${t(71,108,"G","middle","font-weight:700")}${t(125,108,"H","middle","font-weight:700")}${t(179,108,"J","middle","font-weight:700")}${t(233,108,"I","middle","font-weight:700")}
      ${t(114,52,"Luv","middle","font-size:12px;fill:var(--c-bauko);font-weight:600")}${t(233,52,"Lee","middle","font-size:12px")}
      <path d="M8 84H46" style="${acc};stroke-width:2.2" marker-end="url(#awz)"/><path d="M8 104H46" style="${acc};stroke-width:2.2" marker-end="url(#awz)"/><path d="M8 124H46" style="${acc};stroke-width:2.2" marker-end="url(#awz)"/>${t(26,146,"Wind","middle","fill:var(--accent);font-weight:700")}
      <path d="M292 34V174M287 34H297M287 174H297" style="${ink};stroke-width:1"/>${t(300,108,"b","start","font-weight:700")}
      <path d="M60 188H82M60 183V193M82 183V193" style="${ink};stroke-width:1"/>${t(71,204,"0,1 · e","middle","font-size:11px")}
      <path d="M48 34V69M44 34H52M44 69H52" style="${ink};stroke-width:1"/>${t(52,26,"0,25 · e","end","font-size:11px")}
      ${t(222,204,"e = min(b; 2h)","middle","font-weight:700")}`, 212),
    lastweg: () => S(arrow("alw","var(--accent)")+arrow("alwi","var(--ink)")+`
      <path d="M12 168H170" style="${ink};stroke-width:3"/>
      <path d="M18 160L92 74L166 160" style="stroke:color-mix(in srgb,var(--c-bauko) 55%,var(--ink));stroke-width:5;fill:none;stroke-linejoin:round"/>
      <rect x="48" y="118" width="12" height="12" style="fill:var(--c-bsk)"/><rect x="124" y="118" width="12" height="12" style="fill:var(--c-bsk)"/>
      <rect x="51" y="130" width="6" height="38" style="fill:var(--ink-3)"/><rect x="127" y="130" width="6" height="38" style="fill:var(--ink-3)"/>
      ${[30,52,74].map((x,i)=>`<path d="M${x} ${118-i*25}V${136-i*25}" style="${acc};stroke-width:1.4" marker-end="url(#alw)"/>`).join("")}
      ${t(22,90,"①","middle","font-size:15px;font-weight:700;fill:var(--accent)")}${t(130,94,"②","middle","font-size:15px;font-weight:700")}${t(158,108,"③","middle","font-size:15px;font-weight:700")}${t(112,152,"④","middle","font-size:15px;font-weight:700")}${t(92,188,"⑤","middle","font-size:15px;font-weight:700")}
      ${["① Dachlast  kN/m²","② Sparren  kN/m","③ Pfette  kN/m","④ Stütze  kN","⑤ Wand, Fundament"].map((s,i)=>t(186,30+i*38,s,"start","font-size:12px"+(i===0?";fill:var(--accent);font-weight:600":""))).join("")}
      ${[0,1,2,3].map(i=>`<path d="M196 ${36+i*38}V${52+i*38}" style="${ink};stroke-width:1.2" marker-end="url(#alwi)"/>`).join("")}`, 196),
    einzug: () => S(arrow("aez","var(--accent)")+`
      <rect x="20" y="20" width="230" height="120" style="fill:color-mix(in srgb,var(--ink-3) 8%,transparent);${ink};stroke-width:1"/>
      <rect x="106" y="20" width="56" height="120" style="fill:color-mix(in srgb,var(--accent) 18%,transparent)"/>
      ${[50,78,106,134,162,190,218].map(x=>`<path d="M${x} 20V140" style="stroke:color-mix(in srgb,var(--c-bauko) 55%,var(--ink));stroke-width:${x===134?5:3}"/>`).join("")}
      <path d="M14 80H256" style="stroke:var(--c-bsk);stroke-width:7;opacity:.85"/>${t(262,84,"Pfette","start","font-weight:600")}
      <path d="M106 152H162M106 146V158M162 146V158" style="${acc};stroke-width:1.4"/>${t(134,170,"Einzugsbreite = e","middle","fill:var(--accent);font-weight:700")}
      <path d="M190 12H218M190 7V17M218 7V17" style="${ink};stroke-width:1"/>${t(224,16,"e","start","font-size:12px")}
      ${t(262,40,"Sparren","start")}<path d="M260 36H222" style="stroke:var(--ink-3);stroke-width:1"/>
      ${t(10,194,"Sparren: s = Flächenlast · e  (kN/m)","start","font-size:12px")}${t(10,212,"Pfette: q = B je Sparren ÷ e  (kN/m)","start","font-size:12px")}`, 218),
    grundriss: () => { const pan=(x0,lab1,lab2,col,mode)=>{ const x1=x0+92, y0=128, y1=78, arr=[];
        if(mode==="w"){ for(let k=1;k<=4;k++){const px=x0+k*18.4, py=y0-(y0-y1)*k/5; arr.push(`<path d="M${(px-10.3).toFixed(1)} ${(py-18.9).toFixed(1)}L${(px-1.9).toFixed(1)} ${(py-3.5).toFixed(1)}" style="stroke:${col};stroke-width:1.5" marker-end="url(#agr${mode})"/>`);} }
        else if(mode==="g"){ for(let k=0;k<5;k++){const f=(k+.5)/5, px=x0+92*f, py=y0-50*f; arr.push(`<path d="M${px.toFixed(1)} ${(py-26).toFixed(1)}V${(py-4).toFixed(1)}" style="stroke:${col};stroke-width:1.5" marker-end="url(#agr${mode})"/>`);} }
        else { for(let k=0;k<5;k++){const px=x0+9+k*18.5, py=y0-50*(px-x0)/92; arr.push(`<path d="M${px.toFixed(1)} 40V${(py-4).toFixed(1)}" style="stroke:${col};stroke-width:1.5" marker-end="url(#agr${mode})"/>`);} }
        return arrow("agr"+mode,col)+arr.join("")+`<path d="M${x0} ${y0}L${x1} ${y1}" style="stroke:color-mix(in srgb,var(--c-bauko) 55%,var(--ink));stroke-width:5;stroke-linecap:round"/>`+(mode==="s"?`<path d="M${x0} 142H${x1}" style="${ink};stroke-width:1;stroke-dasharray:3 3"/>`:"")+t(x0+46,160,lab1,"middle","font-weight:700;fill:"+col)+t(x0+46,176,lab2,"middle","font-size:11px"); };
      return S(pan(10,"g: lotrecht","je m Dachfläche","var(--ink)","g")+pan(114,"s: lotrecht","je m Grundfläche","var(--c-hydro)","s")+pan(218,"w: ⊥ Dachfläche","je m Dachfläche","var(--accent)","w")+`
        ${t(78,206,"g auf Grundfläche:","end","font-size:12px")}${t(98,206,"g′ =","middle","font-weight:700")}${t(130,198,"g","middle","font-weight:700")}<path d="M114 202H148" style="${ink};stroke-width:1.2"/>${t(130,216,"cos α","middle","font-weight:700")}
        ${t(160,206,"(schräge Länge ist länger)","start","font-size:11px")}`, 222); },
    mu1: () => S(`
      <path d="M50 18V150H300" style="${ink};stroke-width:1.5"/>${t(300,186,"Dachneigung α","end","font-size:12px")}${t(44,24,"μ₁","end","font-weight:700")}
      <path d="M50 62H130L210 150H292" style="stroke:var(--c-bauko);stroke-width:2.6;fill:none;stroke-linejoin:round"/>
      <path d="M130 62V150" style="stroke:var(--ink-3);stroke-dasharray:3 4"/>
      ${t(44,66,"0,8","end")}${t(44,154,"0","end")}${t(50,166,"0°")}${t(130,166,"30°")}${t(210,166,"60°")}${t(290,166,"90°")}
      ${t(90,54,"μ₁ = 0,8","middle","font-size:12px;font-weight:600")}
      ${t(196,72,"μ₁ = 0,8 · (60° − α)","start","font-size:11.5px;font-weight:600")}<path d="M196 79H310" style="${ink};stroke-width:1"/>${t(253,93,"30°","middle","font-size:11.5px;font-weight:600")}
      ${t(256,124,"ab 60°: μ₁ = 0","middle","font-size:12px;font-weight:600")}${t(256,140,"(Schnee rutscht ab)","middle","font-size:11px")}`, 192),
    dachtypen: () => S(arrow("adt","var(--accent)")+arrow("adh","var(--c-bauko)")+`
      <path d="M14 120L80 54L146 120" style="stroke:color-mix(in srgb,var(--c-bauko) 55%,var(--ink));stroke-width:4;fill:none;stroke-linejoin:round"/>
      <rect x="42" y="84" width="10" height="10" style="fill:var(--c-bsk)"/><rect x="108" y="84" width="10" height="10" style="fill:var(--c-bsk)"/><rect x="74" y="48" width="12" height="10" style="fill:var(--c-bsk)"/>
      <rect x="44" y="94" width="6" height="26" style="fill:var(--ink-3)"/><rect x="110" y="94" width="6" height="26" style="fill:var(--ink-3)"/>
      <path d="M4 122H156" style="${ink};stroke-width:3"/>
      <path d="M18 150V128" style="${acc};stroke-width:2" marker-end="url(#adt)"/><path d="M142 150V128" style="${acc};stroke-width:2" marker-end="url(#adt)"/>
      ${t(80,20,"Pfettendach","middle","font-weight:700")}${t(80,168,"Sparren auf Pfetten:","middle","font-size:11.5px")}${t(80,184,"nur lotrechte Kräfte","middle","font-size:11.5px")}
      <path d="M190 120L242 66L294 120" style="stroke:color-mix(in srgb,var(--c-bauko) 55%,var(--ink));stroke-width:4;fill:none;stroke-linejoin:round"/>
      <path d="M180 122H304" style="stroke:var(--ink);stroke-width:5"/>
      <path d="M190 150V128" style="${acc};stroke-width:2" marker-end="url(#adt)"/><path d="M294 150V128" style="${acc};stroke-width:2" marker-end="url(#adt)"/>
      <path d="M190 108H166" style="stroke:var(--c-bauko);stroke-width:2.4" marker-end="url(#adh)"/><path d="M294 108H318" style="stroke:var(--c-bauko);stroke-width:2.4" marker-end="url(#adh)"/>
      ${t(174,100,"H","middle","fill:var(--c-bauko);font-weight:700")}${t(310,100,"H","middle","fill:var(--c-bauko);font-weight:700")}
      ${t(242,20,"Sparrendach","middle","font-weight:700")}${t(242,168,"Füße schieben nach außen:","middle","font-size:11.5px")}${t(242,184,"Decke hält H als Zugband","middle","font-size:11.5px")}`, 192),
    kerve: () => S(`
      <path d="M24 40H214V88H150V100H24Z" style="fill:color-mix(in srgb,var(--c-bauko) 22%,transparent);stroke:var(--ink);stroke-width:1.6"/>
      <rect x="156" y="88" width="52" height="26" style="fill:var(--c-bsk);opacity:.85"/>${t(182,106,"Auflager","middle","font-size:11px;font-weight:600")}
      <path d="M14 40V100M10 40H18M10 100H18" style="${ink};stroke-width:1"/>${t(6,74,"h","middle","font-weight:700")}
      <path d="M142 88V100M138 88H146M138 100H146" style="stroke:var(--c-bauko);stroke-width:1.6"/>${t(134,98,"t","end","fill:var(--c-bauko);font-weight:700")}
      <path d="M226 40V88M222 40H230M222 88H230" style="stroke:var(--accent);stroke-width:1.6"/>${t(232,68,"h − t","start","fill:var(--accent);font-weight:700")}
      ${t(24,124,"Kerve = Ausklinkung über dem Auflager","start","font-size:11.5px")}
      <rect x="276" y="40" width="18" height="60" style="fill:color-mix(in srgb,var(--c-bauko) 22%,transparent);stroke:var(--ink);stroke-width:1.2"/><rect x="300" y="40" width="18" height="48" style="fill:color-mix(in srgb,var(--accent) 22%,transparent);stroke:var(--ink);stroke-width:1.2"/>
      ${t(285,116,"voll","middle","font-size:10.5px")}${t(309,104,"Rest","middle","font-size:10.5px")}
      ${t(70,162,"W_n =","end","font-weight:700")}${t(120,154,"b · (h − t)²","middle","font-weight:700")}<path d="M78 158H162" style="${ink};stroke-width:1.2"/>${t(120,174,"6","middle","font-weight:700")}
      ${t(178,162,"Höhe: h ≥ h_nötig + t","start","font-size:12px")}`, 182),
    momente: () => { const sup=(x,y)=>`<path d="M${x} ${y+2}l-6 10h12z" style="fill:none;stroke:var(--ink);stroke-width:1.2"/>`, cl=(x,y)=>`<path d="M${x} ${y-12}V${y+12}" style="stroke:var(--ink);stroke-width:3"/><path d="M${x-6} ${y-12}l6 6M${x-6} ${y-4}l6 6M${x-6} ${y+4}l6 6" style="${ink};stroke-width:1"/>`;
      const bm=(x,y,w)=>`<path d="M${x} ${y}H${x+w}" style="stroke:var(--ink);stroke-width:3"/>`, mf="fill:color-mix(in srgb,var(--accent) 20%,transparent);stroke:var(--accent);stroke-width:1.6", base=(x,y,w)=>`<path d="M${x} ${y}H${x+w}" style="${ink};stroke-width:.8"/>`;
      let zw="M176 158"; for(let k=0;k<=40;k++){const u=k/20, xx=u<=1?u:2-u, m=.375*xx-.5*xx*xx; zw+=`L${(176+70*u).toFixed(1)},${(158+m*160).toFixed(1)}`;} zw+="Z";
      return S(arrow("amo","var(--c-bauko)")+`
        ${cl(18,34)}${bm(18,34,120)}<path d="M138 10V30" style="stroke:var(--c-bauko);stroke-width:2" marker-end="url(#amo)"/>${t(146,20,"F","start","fill:var(--c-bauko);font-weight:700")}
        ${base(18,66,120)}<path d="M18 66V46L138 66Z" style="${mf}"/>${t(80,96,"Kragarm + F: M = −F · l","middle","font-size:11px")}
        ${sup(186,34)}${sup(306,34)}${bm(186,34,120)}<path d="M246 10V30" style="stroke:var(--c-bauko);stroke-width:2" marker-end="url(#amo)"/>${t(254,20,"F","start","fill:var(--c-bauko);font-weight:700")}
        ${base(186,62,120)}<path d="M186 62L246 82L306 62Z" style="${mf}"/>${t(246,98,"Mitte: M = 0,25 · F · l","middle","font-size:11px")}
        ${cl(18,128)}${bm(18,128,120)}<path d="M18 112H138" style="stroke:var(--c-bauko);stroke-width:1.2"/>${[30,54,78,102,126].map(x=>`<path d="M${x} 112V124" style="stroke:var(--c-bauko);stroke-width:1.2" marker-end="url(#amo)"/>`).join("")}${t(148,120,"q","start","fill:var(--c-bauko);font-weight:700")}
        ${base(18,160,120)}<path d="M18 160V140Q78 160 138 160Z" style="${mf}"/>${t(80,190,"Kragarm + q: M = −0,5 · q · l²","middle","font-size:11px")}
        ${sup(176,128)}${sup(246,128)}${sup(316,128)}${bm(176,128,140)}<path d="M176 112H316" style="stroke:var(--c-bauko);stroke-width:1.2"/>${[188,212,236,260,284,308].map(x=>`<path d="M${x} 112V124" style="stroke:var(--c-bauko);stroke-width:1.2" marker-end="url(#amo)"/>`).join("")}
        ${base(176,158,140)}<path d="${zw}" style="${mf}"/>${t(256,146,"−0,125·q·l²","start","font-size:10.5px;fill:var(--accent);font-weight:700")}
        ${t(246,190,"Zweifeld: Stütze B = 1,25 · q · l","middle","font-size:11px")}
        ${t(160,210,"Momente: Feld (+) unten, Stütze und Einspannung (−) oben","middle","font-size:10.5px")}`, 216); },
    gerber: () => { const e=.1716, sx=x=>30+130*x, sy=m=>160+m*256; let d=`M${sx(0)} 160`;
      for(let k=0;k<=60;k++){const x=2*k/60; let m; if(x<=1) m=.4142*x-.5*x*x; else if(x<=1+e){const a=1+e-x; m=-.5*a*a-.4142*a;} else {const s=x-1-e; m=.4142*s-.5*s*s;} d+=`L${sx(x).toFixed(1)},${sy(m).toFixed(1)}`;} d+="Z";
      const gx=sx(1+e).toFixed(1);
      return S(arrow("age","var(--c-bauko)")+`
      <path d="M30 42H290" style="stroke:var(--c-bauko);stroke-width:1.2"/>${[40,62,84,106,128,150,172,194,216,238,260,282].map(x=>`<path d="M${x} 42V56" style="stroke:var(--c-bauko);stroke-width:1.2" marker-end="url(#age)"/>`).join("")}${t(160,34,"q","middle","fill:var(--c-bauko);font-weight:700")}
      <path d="M30 62H${gx-4}M${+gx+4} 62H290" style="stroke:var(--ink);stroke-width:4"/><circle cx="${gx}" cy="62" r="4.5" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.6"/>
      ${[30,160,290].map(x=>`<path d="M${x} 64l-7 12h14z" style="fill:none;stroke:var(--ink);stroke-width:1.3"/>`).join("")}${t(30,92,"A")}${t(160,92,"B")}${t(290,92,"C")}
      <path d="M160 104H${gx}M160 99V109M${gx} 99V109" style="stroke:var(--c-bauko);stroke-width:1.4"/>${t(+gx+8,108,"e ≈ 0,17 · l","start","fill:var(--c-bauko);font-weight:700;font-size:12px")}
      <path d="${d}" style="fill:color-mix(in srgb,var(--accent) 20%,transparent);stroke:var(--accent);stroke-width:1.6"/>
      <path d="M30 160H290" style="${ink};stroke-width:.8"/><circle cx="${gx}" cy="160" r="3" style="fill:var(--accent)"/>${t(+gx+12,152,"Gelenk: M = 0","start","font-size:11px")}
      ${t(84,200,"Feldmoment","middle","font-size:11px")}${t(236,200,"Feldmoment","middle","font-size:11px")}${t(118,134,"Stützmoment","middle","font-size:11px")}
      ${t(160,16,"Gelenk so legen, dass Feld- und Stützmoment gleich groß sind","middle","font-size:11px")}`, 208); },
    euler: () => { const kl=4.4934, sh=[s=>1-Math.cos(Math.PI*s/2), s=>Math.sin(Math.PI*s), s=>{const v=Math.sin(kl*s)-kl*Math.cos(kl*s)-kl*s+kl;return v/6.75;}, s=>(1-Math.cos(2*Math.PI*s))/2];
      const yb=158, yt=38, cols=[46,124,202,280], beta=["2","1","0,7","0,5"];
      const fix=(x,y,top)=>`<path d="M${x-14} ${y}H${x+14}" style="stroke:var(--ink);stroke-width:3"/>`+[0,1,2,3].map(i=>`<path d="M${x-12+i*7} ${y+(top?-1:1)}l-6 ${top?-7:7}" style="${ink};stroke-width:1"/>`).join("");
      const pin=(x,y,top)=>top?`<path d="M${x} ${y-1}l-7 -11h14z" style="fill:none;stroke:var(--ink);stroke-width:1.3"/>`:`<path d="M${x} ${y+1}l-7 11h14z" style="fill:none;stroke:var(--ink);stroke-width:1.3"/>`;
      let out="";
      cols.forEach((x,i)=>{ let d=""; for(let k=0;k<=24;k++){const s=k/24; d+=(k?"L":"M")+(x+16*sh[i](s)).toFixed(1)+","+(yb-(yb-yt)*s).toFixed(1);}
        out+=`<path d="M${x} ${yb}V${yt}" style="stroke:var(--ink-3);stroke-width:5;opacity:.55"/><path d="${d}" style="stroke:var(--accent);stroke-width:2;fill:none;stroke-dasharray:5 3"/>`;
        out+= (i===1?pin(x,yb,false):fix(x,yb,false)) + (i===0?"":i===3?fix(x,yt,true):pin(x,yt,true));
        out+=t(x,16,"Fall "+(i+1),"middle","font-weight:700")+t(x,190,"β = "+beta[i],"middle","fill:var(--accent);font-weight:700"); });
      return S(out+t(160,212,"Knicklänge l_ef = β · l  (gestrichelt: Knickfigur)","middle","font-size:11.5px"), 218); },
    verbund: () => S(`
      <rect x="30" y="30" width="110" height="110" rx="3" style="fill:color-mix(in srgb,var(--ink-3) 35%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      <path d="M55 52H115V62H90V108H115V118H55V108H80V62H55Z" style="fill:var(--c-bsk);stroke:var(--ink);stroke-width:1.2"/>
      ${[[42,42],[128,42],[42,128],[128,128]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.5" style="fill:var(--ink)"/>`).join("")}
      ${t(85,162,"einbetoniertes","middle","font-weight:700;font-size:12px")}${t(85,178,"Stahlprofil","middle","font-weight:700;font-size:12px")}
      <circle cx="235" cy="85" r="56" style="fill:var(--c-bsk);stroke:var(--ink);stroke-width:1.2"/><circle cx="235" cy="85" r="49" style="fill:color-mix(in srgb,var(--ink-3) 55%,var(--bg));stroke:var(--ink);stroke-width:1"/>
      ${t(235,90,"Beton","middle","font-size:12px")}${t(235,162,"ausbetoniertes","middle","font-weight:700;font-size:12px")}${t(235,178,"Hohlprofil","middle","font-weight:700;font-size:12px")}
      <rect x="96" y="194" width="12" height="9" style="fill:var(--c-bsk)"/>${t(112,202,"Stahl","start","font-size:11px")}<rect x="160" y="194" width="12" height="9" style="fill:color-mix(in srgb,var(--ink-3) 45%,var(--bg))"/>${t(176,202,"Beton","start","font-size:11px")}`, 208),
    holzdecke: () => S(arrow("ahd","var(--accent)")+`
      ${[40,80,120,160,200,240].map(x=>`<path d="M${x} 10V30" style="${acc};stroke-width:1.4" marker-end="url(#ahd)"/>`).join("")}<path d="M30 10H250" style="${acc};stroke-width:1.2"/>${t(300,24,"kN/m²","end","font-size:12px;fill:var(--accent);font-weight:700")}
      <rect x="20" y="34" width="280" height="6" style="fill:color-mix(in srgb,var(--ink-3) 50%,var(--bg))"/><rect x="20" y="40" width="280" height="10" style="fill:color-mix(in srgb,var(--c-bauko) 25%,transparent);stroke:var(--ink);stroke-width:.8"/>
      ${[50,160,270].map(x=>`<rect x="${x-14}" y="50" width="28" height="56" style="fill:color-mix(in srgb,var(--c-bauko) 45%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>`).join("")}
      <rect x="64" y="84" width="82" height="10" style="fill:color-mix(in srgb,var(--c-bauko) 25%,transparent)"/><rect x="174" y="84" width="82" height="10" style="fill:color-mix(in srgb,var(--c-bauko) 25%,transparent)"/>
      <rect x="64" y="72" width="82" height="12" style="fill:color-mix(in srgb,var(--ink-3) 35%,transparent)"/><rect x="174" y="72" width="82" height="12" style="fill:color-mix(in srgb,var(--ink-3) 35%,transparent)"/>
      <rect x="20" y="106" width="280" height="6" style="fill:color-mix(in srgb,var(--ink-3) 25%,var(--bg));stroke:var(--ink);stroke-width:.8"/>
      <path d="M50 128H160M50 122V134M160 122V134" style="${acc};stroke-width:1.4"/>${t(105,146,"Balkenabstand e","middle","fill:var(--accent);font-weight:600;font-size:12px")}
      ${t(230,124,"Dielung oben","middle","font-size:10.5px")}${t(230,138,"Einschub + Schüttung","middle","font-size:10.5px")}${t(230,152,"Unterdecke unten","middle","font-size:10.5px")}
      ${t(10,176,"Balkenlast q = Flächenlast · e  (kN/m)","start","font-size:12px;font-weight:600")}
      ${t(10,196,"Auflagerkräfte der Balken → Linienlast auf den Unterzug","start","font-size:12px")}`, 204),
    windgfl: () => S(arrow("awg","var(--accent)")+arrow("awi","var(--c-bauko)")+`
      <path d="M40 160H250V60Z" style="fill:color-mix(in srgb,var(--ink-3) 10%,transparent);stroke:var(--ink-3);stroke-width:1;stroke-dasharray:4 4"/>
      <path d="M40 160L250 60" style="stroke:color-mix(in srgb,var(--c-bauko) 55%,var(--ink));stroke-width:5;stroke-linecap:round"/>
      ${[0.2,0.4,0.6,0.8].map(f=>{const x=40+210*f,y=160-100*f;return `<path d="M${(x-11).toFixed(1)} ${(y-23).toFixed(1)}L${(x-2).toFixed(1)} ${(y-4).toFixed(1)}" style="${acc};stroke-width:1.8" marker-end="url(#awg)"/>`;}).join("")}
      ${t(94,98,"w ⊥ Dach","end","fill:var(--accent);font-weight:700")}
      ${[75,145,215].map(x=>`<path d="M${x} 168V188" style="stroke:var(--c-bauko);stroke-width:1.6" marker-end="url(#awi)"/>`).join("")}${t(145,206,"GFL: w lotrecht, je m² Grundfläche","middle","font-size:11.5px;fill:var(--c-bauko);font-weight:600")}
      ${[80,110,140].map(y=>`<path d="M262 ${y}H282" style="stroke:var(--c-bauko);stroke-width:1.6" marker-end="url(#awi)"/>`).join("")}<text x="300" y="110" text-anchor="middle" transform="rotate(90 300 110)" style="fill:var(--c-bauko);font-weight:600;font-size:11.5px">AFL: w waagerecht</text>
      ${t(10,22,"Beide Anteile sind so groß wie w –","start","font-size:12px;font-weight:600")}${t(10,40,"nur auf eine andere Fläche bezogen.","start","font-size:12px;font-weight:600")}`, 212),
    feldweise: () => { const row=(y,f,lab)=>{ let s=`<path d="M30 ${y}H290" style="stroke:var(--ink);stroke-width:3.5"/>`+[30,117,203,290].map((x,i)=>`<path d="M${x} ${y+2}l-6 10h12z" style="fill:none;stroke:var(--ink);stroke-width:1.2"/>`+t(x,y+28,"ABCD"[i],"middle","font-size:11.5px")).join("");
        f.forEach(i=>{const x0=[30,117,203][i]; s+=`<rect x="${x0+2}" y="${y-22}" width="83" height="16" style="fill:color-mix(in srgb,var(--c-bauko) 30%,transparent);stroke:var(--c-bauko);stroke-width:1.2"/>`;});
        s+=[73,160,246].map((x,i)=>t(x,y+16,String(i+1),"middle","font-size:11px;fill:var(--ink-3)")).join("");
        return s+t(160,y-32,lab,"middle","font-size:12px;font-weight:600"); };
      return S(row(62,[0,2],"Größtes Feldmoment außen: Felder 1 und 3")+row(150,[1,2],"Größtes Stützmoment über C: Felder 2 und 3")+t(160,196,"Ständige Last g überall – Nutzlast q nur feldweise","middle","font-size:11.5px"), 204); },
    lichteweite: () => S(`
      <rect x="30" y="70" width="40" height="90" style="fill:color-mix(in srgb,var(--ink-3) 40%,transparent);stroke:var(--ink);stroke-width:1.3"/><rect x="250" y="70" width="40" height="90" style="fill:color-mix(in srgb,var(--ink-3) 40%,transparent);stroke:var(--ink);stroke-width:1.3"/>
      <rect x="40" y="56" width="240" height="14" style="fill:color-mix(in srgb,var(--c-bauko) 35%,var(--bg));stroke:var(--ink);stroke-width:1.3"/>
      <path d="M50 70V100M270 70V100" style="stroke:var(--accent);stroke-width:1;stroke-dasharray:3 3"/>
      <path d="M70 120H250M70 114V126M250 114V126" style="${ink};stroke-width:1"/>${t(160,138,"lichte Weite l_w","middle","font-size:11.5px")}
      <path d="M50 36H270M50 30V42M270 30V42" style="${acc};stroke-width:1.6"/>${t(160,26,"Stützweite l (Auflagermitte bis Auflagermitte)","middle","fill:var(--accent);font-weight:700;font-size:11.5px")}
      <path d="M40 176H70M40 170V182M70 170V182" style="${ink};stroke-width:1"/>${t(55,194,"a","middle","font-weight:700")}
      ${t(160,190,"l = l_w + ½ · a + ½ · a","middle","font-weight:700")}`, 200),
    plattescheibe: () => S(arrow("aps","var(--accent)")+`
      <path d="M20 120L80 90H160L100 120Z" style="fill:color-mix(in srgb,var(--c-bauko) 22%,transparent);stroke:var(--ink);stroke-width:1.4"/>
      ${[[48,100],[78,104],[108,104],[118,96],[88,96]].map(([x,y])=>`<path d="M${x} ${y-44}V${y-4}" style="${acc};stroke-width:1.8" marker-end="url(#aps)"/>`).join("")}
      ${t(90,150,"Platte","middle","font-weight:700")}${t(90,168,"Last senkrecht zur Fläche","middle","font-size:11.5px")}${t(90,184,"→ Biegung","middle","font-size:11.5px")}
      <rect x="200" y="40" width="90" height="80" style="fill:color-mix(in srgb,var(--c-bauko) 22%,transparent);stroke:var(--ink);stroke-width:1.4"/>
      <path d="M222 14V36" style="${acc};stroke-width:1.8" marker-end="url(#aps)"/><path d="M268 14V36" style="${acc};stroke-width:1.8" marker-end="url(#aps)"/><path d="M168 70H196" style="${acc};stroke-width:1.8" marker-end="url(#aps)"/>
      ${t(245,150,"Scheibe","middle","font-weight:700")}${t(245,168,"Last in ihrer Ebene","middle","font-size:11.5px")}${t(245,184,"z. B. Wandscheibe","middle","font-size:11.5px")}`, 192),
    /* v1.9 – Skizzen zu bestehenden Fragen: Hydromechanik */
    druckdreieck: () => S(arrow("add","var(--accent)")+arrow("adf","var(--c-bauko)")+`
      <rect x="20" y="40" width="120" height="120" style="${water}"/><path d="M20 40H140" style="stroke:var(--c-hydro);stroke-width:2"/><path d="M74 31l6 8 6-8z" style="fill:var(--c-hydro)"/>
      <rect x="140" y="20" width="14" height="140" rx="2" style="fill:var(--ink-3);opacity:.55"/><path d="M10 160H310" style="${ink};stroke-width:1.5"/>
      <path d="M154 40V160H244Z" style="fill:color-mix(in srgb,var(--accent) 14%,transparent);${acc};stroke-width:1.5"/>
      <path d="M184 70H156" style="${acc};stroke-width:1.2" marker-end="url(#add)"/><path d="M214 110H156" style="${acc};stroke-width:1.2" marker-end="url(#add)"/><path d="M240 150H156" style="${acc};stroke-width:1.2" marker-end="url(#add)"/>
      ${t(250,150,"p = ρ · g · h","start","fill:var(--accent);font-weight:700;font-size:12px")}${t(214,62,"linear","start","font-size:12px")}${t(214,78,"mit der Tiefe","start","font-size:12px")}
      <path d="M300 120H162" style="stroke:var(--c-bauko);stroke-width:2.6" marker-end="url(#adf)"/>${t(300,112,"F","end","fill:var(--c-bauko);font-weight:700")}
      <path d="M126 40V120M122 40H130M122 120H130" style="stroke:var(--c-bauko);stroke-width:1.6"/>${t(118,84,"⅔ · h","end","fill:var(--c-bauko);font-weight:700")}
      <path d="M8 40V160M4 40H12M4 160H12" style="${ink};stroke-width:1"/>${t(16,104,"h","start")}
      ${t(160,180,"F greift im Schwerpunkt des Druckdreiecks an","middle","font-size:11.5px")}`, 188),
    kapillar2: () => S(`
      <rect x="20" y="120" width="280" height="40" style="${water}"/><path d="M20 120H300" style="stroke:var(--c-hydro);stroke-width:1.5"/>
      ${[[70,24,96],[160,14,70],[240,7,36]].map(([x,w,hy])=>`<path d="M${x-w/2} 150V${hy}Q${x} ${hy+w*.6} ${x+w/2} ${hy}V150Z" style="${water}"/><path d="M${x-w/2} ${hy}Q${x} ${hy+w*.6} ${x+w/2} ${hy}" style="stroke:var(--c-hydro);stroke-width:2;fill:none"/><path d="M${x-w/2} 20V152M${x+w/2} 20V152" style="${ink};stroke-width:1.5"/>`).join("")}
      <path d="M38 120V96M34 96H42" style="stroke:var(--accent);stroke-width:1.6"/><path d="M134 120V70M130 70H138" style="stroke:var(--accent);stroke-width:1.6"/><path d="M220 120V36M216 36H224" style="stroke:var(--accent);stroke-width:1.6"/>
      ${t(70,176,"dick")}${t(160,176,"dünner")}${t(240,176,"ganz dünn")}${t(284,60,"höher","middle","fill:var(--accent);font-weight:700")}
      ${t(160,196,"Haftung am Glas zieht das Wasser hoch (hohler Meniskus)","middle","font-size:11.5px")}`, 202),
    schichtung2: () => S(`
      <rect x="30" y="30" width="100" height="50" style="fill:color-mix(in srgb,var(--warn) 24%,transparent)"/><rect x="30" y="80" width="100" height="70" style="${water}"/>
      <path d="M30 22V150H130V22" style="${ink};stroke-width:1.5"/>${t(80,60,"Öl (leichter)")}${t(80,120,"Wasser")}
      <path d="M160 30V150" style="${ink};stroke-width:1.2"/><path d="M160 30L188 80L268 150H160Z" style="fill:color-mix(in srgb,var(--accent) 14%,transparent);${acc};stroke-width:2"/>
      <path d="M30 80H300" style="stroke:var(--ink-3);stroke-dasharray:4 4"/><circle cx="188" cy="80" r="4" style="fill:var(--c-bauko)"/>
      ${t(196,72,"Knick, kein Sprung","start","fill:var(--c-bauko);font-weight:700;font-size:12px")}
      ${t(176,46,"Öl: p wächst langsamer","start","font-size:11px")}${t(316,112,"Wasser:","end","font-size:11px")}${t(316,126,"p wächst schneller","end","font-size:11px")}
      ${t(274,164,"p")}${t(150,24,"Tiefe ↓","end","font-size:11px")}
      ${t(160,186,"Druck stetig, nur die Steigung ρ · g ändert sich","middle","font-size:11.5px")}`, 192),
    freibord: () => S(arrow("afb","var(--c-bauko)")+arrow("afa","var(--c-hydro)")+`
      <rect x="20" y="96" width="280" height="70" style="${water}"/><path d="M20 96H300" style="stroke:var(--c-hydro);stroke-width:2"/>
      <rect x="100" y="50" width="110" height="90" rx="3" style="fill:color-mix(in srgb,var(--c-bauko) 18%,var(--bg));stroke:var(--ink);stroke-width:1.5"/>
      <path d="M155 70V112" style="stroke:var(--c-bauko);stroke-width:2.4" marker-end="url(#afb)"/>${t(164,92,"G","start","fill:var(--c-bauko);font-weight:700")}
      <path d="M140 162V128" style="stroke:var(--c-hydro);stroke-width:2.4" marker-end="url(#afa)"/>${t(132,160,"F_A","end","fill:var(--c-hydro);font-weight:700")}
      <path d="M232 50V140M228 50H236M228 140H236" style="${ink};stroke-width:1"/>${t(240,64,"H gesamt","start","font-size:11.5px")}
      <path d="M262 96V140M258 96H266M258 140H266" style="${ink};stroke-width:1"/>${t(270,122,"Tiefgang","start","font-size:11px")}${t(270,136,"h_W","start","font-size:11px")}
      <path d="M84 50V96M80 50H88M80 96H88" style="${acc};stroke-width:2"/>${t(74,70,"Freibord","end","fill:var(--accent);font-weight:700;font-size:12px")}${t(74,86,"= H − h_W","end","fill:var(--accent);font-size:11.5px")}
      ${t(160,186,"Schwimmen: G = F_A = ρ_W · g · V_verdrängt","middle","font-size:11.5px;font-weight:600")}`, 194),
    venturi: () => S(arrow("avt","var(--accent)")+`
      <path d="M10 92H110L170 112H230L290 92H310M10 168H110L170 148H230L290 168H310" style="${ink};stroke-width:2;fill:none"/>
      <path d="M10 92H110L170 112H230L290 92H310V168H290L230 148H170L110 168H10Z" style="${water}"/>
      <rect x="54" y="30" width="12" height="62" style="${water}"/><path d="M54 14V92M66 14V92" style="${ink};stroke-width:1.2"/><path d="M54 30H66" style="stroke:var(--c-hydro);stroke-width:2"/>
      <rect x="194" y="62" width="12" height="50" style="${water}"/><path d="M194 14V112M206 14V112" style="${ink};stroke-width:1.2"/><path d="M194 62H206" style="stroke:var(--c-hydro);stroke-width:2"/>
      <path d="M66 30H194" style="stroke:var(--ink-3);stroke-dasharray:4 4"/><path d="M220 30V62M216 30H224M216 62H224" style="stroke:var(--c-bauko);stroke-width:1.6"/>${t(228,50,"Druck sinkt","start","fill:var(--c-bauko);font-weight:700;font-size:12px")}
      <path d="M24 130H46" style="${acc};stroke-width:2" marker-end="url(#avt)"/><path d="M178 124H222" style="${acc};stroke-width:3" marker-end="url(#avt)"/>
      ${t(60,135,"v₁ klein","start","font-size:12px")}${t(200,143,"v₂ groß","middle","font-size:12px;font-weight:700")}
      ${t(60,186,"A₁ groß")}${t(200,186,"A₂ klein")}
      ${t(160,206,"Q = v₁ · A₁ = v₂ · A₂   (A ~ d²: d ein Drittel → v 9-fach)","middle","font-size:11px;font-weight:600")}`, 212),
    fliesszustand: () => S(arrow("afz","var(--accent)")+`
      <path d="M10 150H310" style="${ink};stroke-width:2"/>
      <path d="M10 60C90 60 130 66 160 96S220 130 310 132V150H10Z" style="${water}"/><path d="M10 60C90 60 130 66 160 96S220 130 310 132" style="stroke:var(--c-hydro);stroke-width:2;fill:none"/>
      <path d="M10 104H310" style="stroke:var(--c-bauko);stroke-width:1.4;stroke-dasharray:6 4"/>${t(14,120,"h_gr","start","fill:var(--c-bauko);font-weight:700")}
      <path d="M50 132H76" style="${acc};stroke-width:1.6" marker-end="url(#afz)"/><path d="M230 142H286" style="${acc};stroke-width:2.6" marker-end="url(#afz)"/>
      ${t(70,36,"Strömen","middle","font-weight:700")}${t(70,52,"h > h_gr, Fr < 1","middle","font-size:11.5px")}
      ${t(250,72,"Schießen","middle","font-weight:700")}${t(250,88,"h < h_gr, Fr > 1","middle","font-size:11.5px")}
      ${t(160,176,"Fr =","end","font-weight:700")}${t(194,170,"v","middle","font-weight:700")}<path d="M166 174H222" style="${ink};stroke-width:1.2"/>${t(194,190,"√(g · h)","middle","font-weight:700")}
      ${t(10,182,"Trägheit zu Schwere:","start","font-size:11px")}`, 196),
    kruemmerkraft: () => S(arrow("akk","var(--accent)")+arrow("akf","var(--c-bauko)")+`
      <path d="M10 92H150Q180 92 180 62V10M10 140H160Q228 140 228 72V10" style="${ink};stroke-width:2;fill:none"/>
      <path d="M10 92H150Q180 92 180 62V10H228V72Q228 140 160 140H10Z" style="${water}"/>
      <path d="M24 116H66" style="${acc};stroke-width:2.2" marker-end="url(#akk)"/>${t(44,108,"Zufluss","middle","font-size:11.5px")}
      <path d="M204 60V20" style="${acc};stroke-width:2.2" marker-end="url(#akk)"/>${t(240,30,"Abfluss","start","font-size:11.5px")}
      <path d="M216 128L276 176" style="stroke:var(--c-bauko);stroke-width:3" marker-end="url(#akf)"/>${t(282,170,"F","start","fill:var(--c-bauko);font-weight:700;font-size:15px")}
      ${t(10,172,"Wasser drückt den Krümmer nach außen:","start","font-size:11.5px")}${t(10,190,"in Zuflussrichtung und gegen die Umlenkung","start","font-size:11.5px")}`, 196),
    /* v1.9 – Skizzen zu bestehenden Fragen: Physik */
    schiefeebene: () => { const p=(x1,y1,x2,y2,col,id,w=2.4)=>`<path d="M${x1} ${y1}L${x2} ${y2}" style="stroke:${col};stroke-width:${w}" marker-end="url(#${id})"/>`;
      return S(arrow("ase","var(--c-phys)")+arrow("asg","var(--ink)")+arrow("asn","var(--ok)")+`
      <path d="M20 170H290L20 14Z" style="fill:color-mix(in srgb,var(--ink-3) 14%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      <g transform="rotate(30 150 89.2)"><rect x="128" y="55.2" width="44" height="34" rx="3" style="fill:color-mix(in srgb,var(--c-phys) 22%,var(--bg));stroke:var(--ink);stroke-width:1.4"/></g>
      ${p(158.5,74.5,158.5,144.5,"var(--ink)","asg")}${t(166,146,"m·g","start","font-weight:700")}
      ${p(158.5,74.5,188.8,92,"var(--c-phys)","ase")}${p(158.5,74.5,128.2,127,"var(--c-phys)","ase")}
      ${p(167,59.8,194.5,12.2,"var(--ok)","asn")}${t(202,18,"F_N","start","fill:var(--ok);font-weight:700")}
      ${t(196,104,"m·g·sin α","start","fill:var(--c-phys);font-weight:700;font-size:12px")}${t(196,118,"Hangabtrieb","start","font-size:11px")}
      ${t(122,140,"m·g·cos α","end","fill:var(--c-phys);font-weight:700;font-size:12px")}
      <path d="M250 170A40 40 0 0 1 255.4 150" style="${ink};stroke-width:1"/>${t(240,164,"α","middle")}
      ${t(20,192,"Rutschbeginn bei α_S: μ_S = tan α_S","start","font-size:11.5px;font-weight:600")}`, 198); },
    rampe: () => S(arrow("arp","var(--c-phys)")+`
      <path d="M150 160H300V60Z" style="fill:color-mix(in srgb,var(--ink-3) 14%,transparent);stroke:var(--ink);stroke-width:1.4"/>
      <path d="M14 160H130" style="${ink};stroke-width:1.4"/><rect x="30" y="128" width="30" height="30" rx="3" style="fill:color-mix(in srgb,var(--c-phys) 22%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>
      <path d="M45 124V64" style="stroke:var(--c-phys);stroke-width:3" marker-end="url(#arp)"/>${t(54,72,"F = m·g","start","fill:var(--c-phys);font-weight:700;font-size:12px")}
      <path d="M120 60V160M116 60H124M116 160H124" style="${ink};stroke-width:1"/>${t(112,114,"h","end")}
      <path d="M186 132L232 101" style="stroke:var(--c-phys);stroke-width:2" marker-end="url(#arp)"/>${t(194,154,"F = m·g·sin α","start","fill:var(--c-phys);font-weight:700;font-size:12px")}
      ${t(225,178,"Weg s länger","middle","font-size:11.5px")}
      ${t(160,200,"kleinere Kraft × längerer Weg: W = m · g · h bleibt gleich","middle","font-size:11.5px;font-weight:600")}`, 206),
    arbeitphi: () => S(arrow("aap","var(--c-phys)")+arrow("aas","var(--ink-2)")+`
      <path d="M10 120H310" style="${ink};stroke-width:1.5"/><rect x="40" y="94" width="60" height="24" rx="5" style="fill:color-mix(in srgb,var(--c-phys) 22%,var(--bg));stroke:var(--ink);stroke-width:1.3"/>
      <path d="M100 106L178 46" style="stroke:var(--c-phys);stroke-width:2.6" marker-end="url(#aap)"/>${t(186,62,"F","start","fill:var(--c-phys);font-weight:700;font-size:15px")}
      <path d="M100 106H170" style="stroke:var(--c-phys);stroke-width:2;stroke-dasharray:5 3" marker-end="url(#aap)"/><path d="M180 50V104" style="stroke:var(--ink-3);stroke-dasharray:3 3"/>
      ${t(204,104,"F · cos φ","start","fill:var(--c-phys);font-weight:700;font-size:12px")}
      <path d="M132 106A32 32 0 0 0 125 86" style="${ink};stroke-width:1"/>${t(138,96,"φ","start")}
      <path d="M40 138H200" style="stroke:var(--ink-2);stroke-width:1.6" marker-end="url(#aas)"/>${t(120,154,"Weg s","middle")}
      ${t(10,22,"W = F · s · cos φ","start","font-weight:700;font-size:14px")}${t(10,40,"nur der Kraftanteil längs des Weges zählt","start","font-size:11px")}
      ${t(160,180,"φ < 90°: W > 0   ·   φ = 90°: W = 0   ·   φ > 90°: W < 0","middle","font-size:11.5px;font-weight:600")}`, 188),
    federarbeit: () => S(`
      <path d="M20 140H150M20 140V24" style="${ink};stroke-width:1.4"/>${t(150,156,"x","end")}${t(14,30,"F","end")}
      <path d="M20 140L130 50V140Z" style="fill:color-mix(in srgb,var(--c-phys) 22%,transparent)"/><path d="M20 140L138 44" style="stroke:var(--c-phys);stroke-width:2.2"/>
      ${t(130,156,"x₁","middle","font-size:11px")}${t(40,40,"F = k · x","start","font-weight:700;font-size:12px")}
      ${t(96,124,"W","middle","font-weight:700")}${t(82,180,"Feder: W = ½ · k · x₁²","middle","font-size:11.5px;font-weight:600")}
      <path d="M176 92H310M176 150V20" style="${ink};stroke-width:1.4"/>${t(310,108,"x","end")}${t(170,26,"F","end")}
      <path d="M176 92C200 40 236 40 252 92Z" style="fill:color-mix(in srgb,var(--ok) 28%,transparent)"/><path d="M252 92C268 130 290 130 304 92Z" style="fill:color-mix(in srgb,var(--bad) 24%,transparent)"/>
      <path d="M176 92C200 40 236 40 252 92S290 130 304 92" style="stroke:var(--c-phys);stroke-width:2.2;fill:none"/>
      ${t(214,80,"+","middle","font-weight:700;font-size:16px;fill:var(--ok)")}${t(278,112,"−","middle","font-weight:700;font-size:18px;fill:var(--bad)")}
      ${t(243,180,"W = Fläche unter F(x)","middle","font-size:11.5px;font-weight:600")}`, 188),
    xt: () => S(`
      <path d="M40 15V150H300" style="${ink};stroke-width:1.5"/>${t(300,168,"t","end")}${t(34,22,"x","end")}
      <path d="M40 140C100 135 150 110 190 75S260 30 296 26" style="stroke:var(--c-phys);stroke-width:2.4;fill:none"/>
      <path d="M110 150L270 22" style="stroke:var(--accent);stroke-width:1.6;stroke-dasharray:6 4"/>
      <circle cx="176" cy="89" r="5" style="fill:var(--accent)"/>
      <path d="M150 110H200V70" style="stroke:var(--c-bauko);stroke-width:1.8;fill:none"/>${t(175,124,"Δt","middle","fill:var(--c-bauko);font-weight:700")}${t(206,94,"Δx","start","fill:var(--c-bauko);font-weight:700")}
      ${t(110,56,"Tangente","middle","fill:var(--accent);font-size:12px")}
      ${t(218,190,"Steigung der Tangente = v(t) =","end","font-size:12px;font-weight:600")}${t(236,182,"dx","middle","font-weight:700")}<path d="M224 186H248" style="${ink};stroke-width:1.2"/>${t(236,202,"dt","middle","font-weight:700")}`, 208),
    kreis2: () => S(arrow("akv","var(--c-phys)")+arrow("aka","var(--c-bauko)")+`
      <circle cx="130" cy="100" r="66" style="stroke:var(--ink-3);fill:none;stroke-width:1.5;stroke-dasharray:5 5"/><circle cx="130" cy="100" r="3" style="fill:var(--ink-3)"/>
      <path d="M130 100L130 42" style="stroke:var(--ink-3);stroke-width:1"/>${t(122,80,"r","end")}
      <path d="M210 34H310" style="stroke:var(--c-phys);stroke-width:1.4;stroke-dasharray:4 4"/>
      <circle cx="130" cy="34" r="7" style="fill:var(--c-phys)"/>
      <path d="M138 34H210" style="stroke:var(--c-phys);stroke-width:2.6" marker-end="url(#akv)"/>${t(196,24,"v","middle","fill:var(--c-phys);font-weight:700;font-size:15px")}
      <path d="M142 42L142 82" style="stroke:var(--c-bauko);stroke-width:2.6" marker-end="url(#aka)"/>${t(150,72,"a","start","fill:var(--c-bauko);font-weight:700;font-size:15px")}
      ${t(226,56,"Seil reißt:","start","font-size:11px")}${t(226,70,"geradeaus weiter","start","font-size:11px")}
      ${t(240,126,"a =","end","font-weight:700")}${t(262,118,"v²","middle","font-weight:700")}<path d="M248 122H276" style="${ink};stroke-width:1.2"/>${t(262,138,"r","middle","font-weight:700")}
      ${t(160,182,"a zeigt immer zum Mittelpunkt","middle","font-size:11.5px;font-weight:600")}${t(160,198,"|v| bleibt gleich, die Richtung ändert sich → a ≠ 0","middle","font-size:11.5px")}`, 204),
    skalarkreuz: () => S(arrow("ask","var(--c-phys)")+arrow("asr","var(--c-bauko)")+`
      <path d="M30 130H120" style="stroke:var(--c-phys);stroke-width:2.4" marker-end="url(#ask)"/><path d="M30 130V50" style="stroke:var(--c-phys);stroke-width:2.4" marker-end="url(#ask)"/>
      <path d="M30 118H42V130" style="${ink};stroke-width:1"/>${t(124,134,"a","start","fill:var(--c-phys);font-weight:700")}${t(20,56,"b","end","fill:var(--c-phys);font-weight:700")}
      ${t(75,162,"a ⊥ b:  a · b = 0","middle","font-weight:700;font-size:12px")}${t(75,178,"(Skalar, eine Zahl)","middle","font-size:11px")}
      <path d="M196 130L268 130L300 104L228 104Z" style="fill:color-mix(in srgb,var(--c-phys) 14%,transparent);stroke:none"/>
      <path d="M196 130H268" style="stroke:var(--c-phys);stroke-width:2.4" marker-end="url(#ask)"/><path d="M196 130L228 104" style="stroke:var(--c-phys);stroke-width:2.4" marker-end="url(#ask)"/>
      ${t(270,146,"a","middle","fill:var(--c-phys);font-weight:700")}${t(218,98,"b","end","fill:var(--c-phys);font-weight:700")}
      <path d="M196 130V40" style="stroke:var(--c-bauko);stroke-width:2.6" marker-end="url(#asr)"/>${t(204,46,"a × b","start","fill:var(--c-bauko);font-weight:700")}
      <path d="M196 130V176" style="stroke:var(--c-bauko);stroke-width:1.8;stroke-dasharray:5 3" marker-end="url(#asr)"/>${t(204,174,"b × a = −(a × b)","start","fill:var(--c-bauko);font-size:11.5px")}
      ${t(312,98,"Fläche = |a × b|","end","font-size:10.5px")}
      ${t(240,20,"Vektor senkrecht zu a und b","middle","font-size:11px")}${t(240,196,"a ∥ b → Fläche 0 → Nullvektor","middle","font-size:11px")}`, 202),
    quadrant: () => S(arrow("aqd","var(--c-phys)")+`
      <path d="M20 100H300M160 180V14" style="${ink};stroke-width:1.2"/>${t(300,116,"x","end")}${t(170,22,"y","start")}
      ${t(290,30,"I","middle","fill:var(--ink-3);font-weight:700")}${t(30,30,"II","middle","fill:var(--ink-3);font-weight:700")}${t(30,176,"III","middle","fill:var(--ink-3);font-weight:700")}${t(290,176,"IV","middle","fill:var(--ink-3);font-weight:700")}
      <path d="M160 100L76 44" style="stroke:var(--c-phys);stroke-width:2.6" marker-end="url(#aqd)"/>${t(70,48,"(−3 | 2)","end","fill:var(--c-phys);font-weight:700;font-size:12px")}
      <path d="M160 100L230 147" style="stroke:var(--c-bauko);stroke-width:1.6;stroke-dasharray:5 4"/>${t(234,144,"arctan: −33,7°","start","fill:var(--c-bauko);font-size:11px")}
      <path d="M200 100A40 40 0 0 0 126.7 77.8" style="stroke:var(--c-phys);stroke-width:1.4;fill:none"/>${t(206,84,"richtig: 146,3°","start","fill:var(--c-phys);font-weight:700;font-size:12px")}
      ${t(160,200,"x < 0 → Taschenrechner liegt um 180° daneben: +180°","middle","font-size:11.5px;font-weight:600")}`, 206),
    rollen: () => S(arrow("arl","var(--c-phys)")+arrow("arg","var(--ink)")+`
      <path d="M10 14H150M170 14H310" style="stroke:var(--ink);stroke-width:4"/>
      <path d="M80 14V40" style="${ink};stroke-width:1.5"/><circle cx="80" cy="54" r="14" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.6"/>
      <path d="M66 54V120M94 54V130" style="${ink};stroke-width:1.6"/><rect x="52" y="120" width="28" height="26" style="fill:color-mix(in srgb,var(--c-phys) 22%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>
      <path d="M94 130V164" style="stroke:var(--c-phys);stroke-width:2.4" marker-end="url(#arl)"/>${t(102,160,"F = m·g","start","fill:var(--c-phys);font-weight:700;font-size:12px")}
      ${t(78,184,"feste Rolle: lenkt nur um","middle","font-size:11px;font-weight:600")}${t(78,200,"Decke trägt 2 · F","middle","font-size:11px")}
      <path d="M214 14V96M262 38V96" style="${ink};stroke-width:1.6"/><circle cx="238" cy="96" r="24" style="fill:none;stroke:var(--ink);stroke-width:1.6"/>
      <path d="M270 14V30" style="${ink};stroke-width:1.5"/><circle cx="270" cy="38" r="8" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.4"/>
      <path d="M278 38V100" style="${ink};stroke-width:1.6"/><path d="M278 100V140" style="stroke:var(--c-phys);stroke-width:2.4" marker-end="url(#arl)"/>${t(284,130,"½·m·g","start","fill:var(--c-phys);font-weight:700;font-size:11px")}
      <path d="M238 120V132" style="${ink};stroke-width:1.5"/><rect x="222" y="132" width="32" height="26" style="fill:color-mix(in srgb,var(--c-phys) 22%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>
      ${t(242,184,"lose Rolle: 2 Seilstücke","middle","font-size:11px;font-weight:600")}${t(242,200,"halbe Kraft, doppelter Weg","middle","font-size:11px")}`, 206),
    actio: () => S(arrow("aac","var(--c-phys)")+arrow("aab","var(--c-bauko)")+`
      ${t(8,16,"gleiche Farbe = Kraft und Gegenkraft:","start","font-size:11px;font-weight:600")}${t(8,30,"gleich groß, wirken auf zwei verschiedene Körper","start","font-size:11px")}
      <rect x="100" y="100" width="130" height="12" style="fill:var(--ink-3);opacity:.7"/><path d="M112 112V184M218 112V184" style="${ink};stroke-width:3"/>
      <rect x="132" y="80" width="68" height="20" rx="2" style="fill:color-mix(in srgb,var(--c-phys) 30%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>${t(166,94,"Buch","middle","font-size:11px")}
      <path d="M150 90V140" style="stroke:var(--c-phys);stroke-width:2.4" marker-end="url(#aac)"/>${t(142,136,"G: Erde → Buch","end","fill:var(--c-phys);font-weight:700;font-size:11px")}
      <path d="M184 84V46" style="stroke:var(--c-bauko);stroke-width:2.4" marker-end="url(#aab)"/>${t(192,54,"N: Tisch → Buch","start","fill:var(--c-bauko);font-weight:700;font-size:11px")}
      <path d="M190 104V136" style="stroke:var(--c-bauko);stroke-width:2;stroke-dasharray:5 3" marker-end="url(#aab)"/>${t(226,134,"Buch → Tisch","start","fill:var(--c-bauko);font-size:11px")}
      <path d="M40 196H266" style="stroke:var(--ink-3);stroke-width:1.5"/>${t(300,200,"Erde","end","font-size:11px")}
      <path d="M150 194V158" style="stroke:var(--c-phys);stroke-width:2;stroke-dasharray:5 3" marker-end="url(#aac)"/>${t(142,174,"Buch → Erde","end","fill:var(--c-phys);font-size:11px")}
      ${t(160,218,"G und N greifen am selben Buch an: Gleichgewicht, kein Paar","middle","font-size:11px;font-weight:600")}`, 224),
    riesenrad: () => S(arrow("arn","var(--ok)")+arrow("arG","var(--ink)")+arrow("ara","var(--c-bauko)")+`
      <circle cx="110" cy="100" r="70" style="stroke:var(--ink-3);fill:none;stroke-width:1.5;stroke-dasharray:5 5"/><circle cx="110" cy="100" r="3" style="fill:var(--ink-3)"/>
      <circle cx="110" cy="30" r="8" style="fill:var(--c-phys)"/><circle cx="110" cy="170" r="8" style="fill:var(--c-phys)"/>
      <path d="M100 30V14" style="stroke:var(--ok);stroke-width:2" marker-end="url(#arn)"/><path d="M100 38V62" style="stroke:var(--ink);stroke-width:2.4" marker-end="url(#arG)"/><path d="M122 40V58" style="stroke:var(--c-bauko);stroke-width:2" marker-end="url(#ara)"/>
      <path d="M100 162V118" style="stroke:var(--ok);stroke-width:2.6" marker-end="url(#arn)"/><path d="M90 178V196" style="stroke:var(--ink);stroke-width:2.4" marker-end="url(#arG)"/><path d="M122 160V142" style="stroke:var(--c-bauko);stroke-width:2" marker-end="url(#ara)"/>
      ${t(196,24,"oben: N kleiner","start","font-weight:700;font-size:12px")}${t(196,40,"N = m·g − m·a_z","start","font-size:11.5px")}${t(196,56,"→ man fühlt sich leicht","start","font-size:11px")}
      ${t(196,150,"unten: N größer","start","font-weight:700;font-size:12px")}${t(196,166,"N = m·g + m·a_z","start","font-size:11.5px")}
      <path d="M196 96H210" style="stroke:var(--ok);stroke-width:3"/>${t(214,100,"N","start","font-size:11px")}<path d="M236 96H250" style="stroke:var(--ink);stroke-width:3"/>${t(254,100,"m·g","start","font-size:11px")}<path d="M196 114H210" style="stroke:var(--c-bauko);stroke-width:3"/>${t(214,118,"a_z zur Mitte","start","font-size:11px")}`, 200),
    kurve: () => S(arrow("aku","var(--ok)")+arrow("akg","var(--ink)")+arrow("akx","var(--c-bauko)")+arrow("akz","var(--c-phys)")+`
      <path d="M30 160L290 70V160Z" style="fill:color-mix(in srgb,var(--ink-3) 14%,transparent);stroke:var(--ink);stroke-width:1.4"/>
      <g transform="rotate(-19.1 160 115)"><rect x="136" y="92" width="48" height="22" rx="5" style="fill:color-mix(in srgb,var(--c-phys) 25%,var(--bg));stroke:var(--ink);stroke-width:1.3"/></g>
      <path d="M156 100L140 54" style="stroke:var(--ok);stroke-width:2.4" marker-end="url(#aku)"/>${t(134,50,"F_N","end","fill:var(--ok);font-weight:700")}
      <path d="M166 106V158" style="stroke:var(--ink);stroke-width:2.4" marker-end="url(#akg)"/>${t(174,152,"m·g","start","font-weight:700")}
      <path d="M200 98L250 81" style="stroke:var(--c-bauko);stroke-width:2" marker-end="url(#akx)"/>${t(312,44,"v zu klein:","end","fill:var(--c-bauko);font-size:11px")}${t(312,58,"R hangaufwärts","end","fill:var(--c-bauko);font-weight:700;font-size:11px")}
      <path d="M126 130L76 147" style="stroke:var(--c-bauko);stroke-width:2;stroke-dasharray:5 3" marker-end="url(#akx)"/>${t(18,104,"v zu groß:","start","fill:var(--c-bauko);font-size:11px")}${t(18,118,"R hangabwärts","start","fill:var(--c-bauko);font-weight:700;font-size:11px")}
      <path d="M100 30H40" style="stroke:var(--c-phys);stroke-width:2" marker-end="url(#akz)"/>${t(104,34,"zum Kurvenmittelpunkt","start","fill:var(--c-phys);font-size:11px")}
      <path d="M250 160A40 40 0 0 0 251 146" style="${ink};stroke-width:1"/>${t(240,154,"α","end")}
      ${t(222,190,"ideal (keine Reibung): tan α =","end","font-size:11.5px;font-weight:600")}${t(250,182,"v²","middle","font-weight:700")}<path d="M230 186H270" style="${ink};stroke-width:1.2"/>${t(250,202,"r · g","middle","font-weight:700")}`, 208),
    luftwiderstand: () => S(`
      <path d="M40 15V150H300" style="${ink};stroke-width:1.5"/>${t(300,168,"t","end")}${t(34,22,"v","end")}
      <path d="M40 46H300" style="stroke:var(--c-bauko);stroke-width:1.4;stroke-dasharray:6 4"/>${t(296,40,"v∞","end","fill:var(--c-bauko);font-weight:700")}
      <path d="M40 150C80 90 120 60 170 52S260 46 300 46.5" style="stroke:var(--c-phys);stroke-width:2.4;fill:none"/>
      <path d="M40 150L92 72" style="stroke:var(--accent);stroke-width:1.4;stroke-dasharray:4 4"/>${t(96,144,"Start: Steigung = g","start","fill:var(--accent);font-size:11.5px;font-weight:600")}
      ${t(120,88,"bei v∞: Luftwiderstand = Gewicht","start","font-size:11px")}${t(120,102,"→ a = 0, fällt gleichmäßig","start","font-size:11px")}${t(120,116,"weiter (bleibt nicht stehen)","start","font-size:11px")}
      ${t(78,186,"v∞ =","end","font-weight:700")}<path d="M82 182H88L94 196L102 164H152" style="${ink};stroke-width:1.3;fill:none"/>${t(127,177,"m · g","middle","font-weight:700")}<path d="M106 181H150" style="${ink};stroke-width:1.1"/>${t(127,196,"k_W","middle","font-weight:700")}`, 204),
    kistewinkel: () => S(arrow("akw","var(--c-phys)")+arrow("akn","var(--ok)")+arrow("akg2","var(--ink)")+arrow("akrr","var(--c-bauko)")+`
      <path d="M10 130H310" style="${ink};stroke-width:1.5"/><rect x="90" y="84" width="70" height="46" rx="3" style="fill:color-mix(in srgb,var(--c-phys) 20%,var(--bg));stroke:var(--ink);stroke-width:1.3"/>
      <path d="M160 100L240 54" style="stroke:var(--c-phys);stroke-width:2.6" marker-end="url(#akw)"/>${t(246,52,"F_S","start","fill:var(--c-phys);font-weight:700")}
      <path d="M160 100H236" style="stroke:var(--c-phys);stroke-width:1.6;stroke-dasharray:5 3" marker-end="url(#akw)"/>${t(242,112,"F_S · cos α","start","fill:var(--c-phys);font-size:11px")}
      <path d="M248 98V60" style="stroke:var(--c-phys);stroke-width:1.6;stroke-dasharray:5 3"/>${t(254,82,"F_S · sin α","start","fill:var(--c-phys);font-size:11px")}
      <path d="M190 100A30 30 0 0 0 186 85" style="${ink};stroke-width:1"/>${t(196,94,"α","start")}
      <path d="M110 130V74" style="stroke:var(--ok);stroke-width:2" marker-end="url(#akn)"/>${t(104,70,"F_N kleiner","end","fill:var(--ok);font-weight:700;font-size:11px")}
      <path d="M134 106V160" style="stroke:var(--ink);stroke-width:2.2" marker-end="url(#akg2)"/>${t(142,160,"m·g","start","font-weight:700")}
      <path d="M90 124H40" style="stroke:var(--c-bauko);stroke-width:2.2" marker-end="url(#akrr)"/>${t(86,116,"R = μ·F_N","end","fill:var(--c-bauko);font-weight:700;font-size:11px")}
      ${t(160,186,"schräg ziehen entlastet den Boden → weniger Reibung","middle","font-size:11.5px")}${t(160,204,"Optimum: tan α = μ_s","middle","font-size:12px;font-weight:700")}`, 210),
    blockp: () => S(arrow("abp","var(--c-phys)")+arrow("abn","var(--ok)")+arrow("abg","var(--ink)")+`
      <path d="M40 140H280" style="${ink};stroke-width:1.5"/><rect x="120" y="80" width="80" height="60" rx="3" style="fill:color-mix(in srgb,var(--c-phys) 20%,var(--bg));stroke:var(--ink);stroke-width:1.3"/>
      <path d="M160 80V24" style="stroke:var(--c-phys);stroke-width:2.6" marker-end="url(#abp)"/>${t(168,32,"P (zieht hoch)","start","fill:var(--c-phys);font-weight:700")}
      <path d="M108 140V96" style="stroke:var(--ok);stroke-width:2.2" marker-end="url(#abn)"/>${t(100,104,"F_N","end","fill:var(--ok);font-weight:700")}
      <path d="M184 110V170" style="stroke:var(--ink);stroke-width:2.4" marker-end="url(#abg)"/>${t(192,166,"m·g","start","font-weight:700")}
      ${t(160,194,"Ruhe: F_N + P = m·g  →  F_N = m·g − P","middle","font-size:12px;font-weight:600")}`, 200),
    /* v1.9 – Skizzen zu bestehenden Fragen: Baustoffkunde */
    cuni: () => { const B=(a,b,c,u)=>(1-u)*(1-u)*a+2*(1-u)*u*b+u*u*c, L=[50,146,150,60,290,42.6], So=[50,146,210,140,290,42.6];
      const xAt=(c,y)=>{let best=[1e9,0];for(let k=0;k<=400;k++){const u=k/400,yy=B(c[1],c[3],c[5],u);if(Math.abs(yy-y)<best[0])best=[Math.abs(yy-y),B(c[0],c[2],c[4],u)];}return best[1];};
      const y=108, xl=xAt(L,y), xs=xAt(So,y), x0=xl+(xs-xl)*.67, f=v=>v.toFixed(1);
      return S(`
      <path d="M50 14V170H290V14" style="${ink};stroke-width:1.4"/>${t(44,22,"T","end")}${t(170,186,"Ni-Gehalt in M.-% →","middle","font-size:11.5px")}${t(50,186,"Cu","middle","font-weight:700")}${t(290,186,"Ni","middle","font-weight:700")}
      <path d="M50 146Q150 60 290 42.6Q210 140 50 146Z" style="fill:color-mix(in srgb,var(--c-bsk) 16%,transparent)"/>
      <path d="M50 146Q150 60 290 42.6" style="stroke:var(--c-bauko);stroke-width:2.2;fill:none"/><path d="M50 146Q210 140 290 42.6" style="stroke:var(--accent);stroke-width:2.2;fill:none"/>
      ${t(44,150,"1085 °C","end","font-size:10.5px")}${t(286,36,"1455 °C","end","font-size:10.5px")}
      ${t(110,58,"Schmelze L","middle","font-weight:600")}${t(238,150,"α-Mischkristall","middle","font-weight:600")}
      ${t(124,84,"Liquidus","end","fill:var(--c-bauko);font-size:11px;font-weight:600")}${t(250,112,"Solidus","start","fill:var(--accent);font-size:11px;font-weight:600")}
      <path d="M${f(xl)} ${y}H${f(xs)}" style="stroke:var(--ink);stroke-width:1.6"/><circle cx="${f(xl)}" cy="${y}" r="3.5" style="fill:var(--c-bauko)"/><circle cx="${f(xs)}" cy="${y}" r="3.5" style="fill:var(--accent)"/>
      <path d="M${f(x0)} 30V170" style="stroke:var(--ink-2);stroke-width:1;stroke-dasharray:4 3"/>${t(+f(x0),26,"c₀","middle","font-weight:700")}
      ${t(+f(xl),y+16,"c_L","middle","fill:var(--c-bauko);font-weight:700;font-size:12px")}${t(+f(xs),y+16,"c_S","middle","fill:var(--accent);font-weight:700;font-size:12px")}${t(+f(x0)+6,y-6,"L + α","start","font-size:11px")}
      ${t(60,212,"Anteil fest =","start","font-weight:600")}${t(186,204,"c₀ − c_L","middle","font-weight:700")}<path d="M148 208H224" style="${ink};stroke-width:1.2"/>${t(186,224,"c_S − c_L","middle","font-weight:700")}${t(232,212,"· 100 %","start","font-weight:600")}`, 230); },
    pbsn: () => { const X=p=>40+2.4*p, Y=T=>180-T*150/350, E=[X(61.9),Y(183)], a=[X(18.3),Y(183)], b=[X(97.8),Y(183)], f=v=>v.toFixed(1);
      return S(`
      <path d="M40 14V180H280V14" style="${ink};stroke-width:1.4"/>${t(34,22,"T","end")}
      <path d="M40 ${f(Y(327))}L${f(E[0])} ${f(E[1])}L280 ${f(Y(232))}" style="stroke:var(--c-bauko);stroke-width:2.2;fill:none"/>
      <path d="M40 ${f(Y(327))}L${f(a[0])} ${f(a[1])}Q${f(X(10))} ${f(Y(110))} ${f(X(2))} 180" style="stroke:var(--accent);stroke-width:2;fill:none"/>
      <path d="M280 ${f(Y(232))}L${f(b[0])} ${f(b[1])}Q${f(X(99))} ${f(Y(110))} ${f(X(99))} 180" style="stroke:var(--accent);stroke-width:2;fill:none"/>
      <path d="M${f(a[0])} ${f(a[1])}H${f(b[0])}" style="stroke:var(--ink);stroke-width:1.8"/><circle cx="${f(E[0])}" cy="${f(E[1])}" r="4" style="fill:var(--c-bauko)"/>
      ${t(36,46,"327 °C","end","font-size:10.5px")}${t(284,86,"232 °C","start","font-size:10.5px")}${t(284,112,"183 °C","start","font-size:10.5px")}
      ${t(170,52,"Schmelze L (I)","middle","font-weight:600")}${t(104,90,"α + L (IV)","middle","font-size:11.5px")}${t(250,98,"β+L","middle","font-size:10px")}
      ${t(56,122,"α","middle","font-weight:700")}${t(56,135,"(II)","middle","font-size:10px")}${t(170,150,"α + β (VI)","middle","font-weight:600")}
      ${t(+f(E[0]),126,"Eutektikum: 61,9 % Sn","middle","fill:var(--c-bauko);font-size:11px;font-weight:600")}
      ${t(40,196,"Pb","middle","font-weight:700")}${t(280,196,"Sn","middle","font-weight:700")}${t(160,196,"Sn-Gehalt →","middle","font-size:11px")}
      ${t(160,212,"Löslichkeit (blaue Grenzlinien) sinkt mit fallender T","middle","font-size:11px")}`, 218); },
    abkuehl: () => { const pan=(x0,d,lab1,lab2)=>`<path d="M${x0} 20V130H${x0+92}" style="${ink};stroke-width:1.2"/>${t(x0-4,26,"T","end","font-size:11px")}${t(x0+90,144,"t","end","font-size:11px")}<path d="${d}" style="stroke:var(--c-bsk);stroke-width:2.4;fill:none;stroke-linejoin:round"/>`+t(x0+46,162,lab1,"middle","font-weight:600;font-size:11.5px")+t(x0+46,178,lab2,"middle","font-size:11px");
      return S(pan(14,"M16 28L40 64H70L100 118","reines Cu","Haltepunkt: F = 0")+`<circle cx="40" cy="64" r="3" style="fill:var(--c-bauko)"/><circle cx="70" cy="64" r="3" style="fill:var(--c-bauko)"/>`+
        pan(118,"M120 26L140 56L170 82L202 120","Cu–Ni","Knickpunkte: F = 1")+`<circle cx="140" cy="56" r="3" style="fill:var(--c-bauko)"/><circle cx="170" cy="82" r="3" style="fill:var(--c-bauko)"/>`+
        pan(222,"M224 30L246 72H276L306 120","Pb–Sn eutektisch","Haltepunkt: F = 0")+`<circle cx="246" cy="72" r="3" style="fill:var(--c-bauko)"/><circle cx="276" cy="72" r="3" style="fill:var(--c-bauko)"/>`+
        t(160,202,"Phasenregel (Druck konstant):  F = K + 1 − P","middle","font-weight:700;font-size:12px"), 210); },
    fec: () => { const X=c=>40+39*c, Y=T=>20+(1600-T)*.16, P=(c,T)=>X(c).toFixed(1)+" "+Y(T).toFixed(1);
      return S(`
      <path d="M40 12V180H300V12" style="${ink};stroke-width:1.4"/>${t(34,18,"T","end")}
      <path d="M${P(0,1536)}L${P(.51,1493)}L${P(4.3,1147)}L${P(6.67,1250)}" style="stroke:var(--c-bauko);stroke-width:2.2;fill:none"/>
      <path d="M${P(0,1536)}L${P(.16,1493)}L${P(2.06,1147)}H${X(6.67)}" style="stroke:var(--accent);stroke-width:2;fill:none"/>
      <path d="M${P(0,911)}L${P(.8,723)}L${P(2.06,1147)}" style="stroke:var(--ink-2);stroke-width:1.6;fill:none"/>
      <path d="M${P(.02,723)}H${X(6.67)}" style="stroke:var(--ink);stroke-width:1.8"/>
      <path d="M${X(2.06)} ${Y(1147)}V180" style="stroke:var(--ink-3);stroke-width:1.2;stroke-dasharray:4 3"/>
      ${[["A",0,1536,-8,0],["C",4.3,1147,0,-8],["E",2.06,1147,-8,-6],["S",.8,723,6,-6],["G",0,911,-8,4]].map(([n,c,T,dx,dy])=>`<circle cx="${X(c).toFixed(1)}" cy="${Y(T).toFixed(1)}" r="3" style="fill:var(--ink)"/>`+t(X(c)+dx,Y(T)+dy,n,dx<0?"end":"start","font-weight:700;font-size:11px")).join("")}
      ${t(36,Y(1147)+4,"1147","end","font-size:10px")}${t(36,Y(723)+4,"723","end","font-size:10px")}${t(36,Y(1536)+10,"1536","end","font-size:10px")}
      ${t(190,46,"Schmelze","middle","font-weight:600")}${t(72,114,"Austenit γ","middle","font-size:11px")}${t(160,132,"γ + Zementit","middle","font-size:11px")}
      ${t(240,108,"Ledeburit (4,3 %)","middle","font-size:10.5px")}${t(180,174,"Perlit + Zementit","middle","font-size:10.5px")}
      ${t(X(.8),196,"0,8","middle","font-size:10.5px")}${t(X(2.06),196,"2,06","middle","font-size:10.5px")}${t(X(4.3),196,"4,3","middle","font-size:10.5px")}${t(300,196,"6,67 % C","end","font-size:10.5px")}
      ${t(X(1.03),212,"← Stahl","middle","font-weight:700;font-size:11.5px")}${t(X(3.6),212,"Gusseisen →","middle","font-weight:700;font-size:11.5px")}
      ${t(304,Y(1147)+4,"ECF","start","font-size:10px")}${t(304,Y(723)+4,"PSK","start","font-size:10px")}`, 218); },
    ermuedung: () => { let d="M40 80"; for(let k=0;k<=96;k++){const x=40+k*2.6; d+=`L${x.toFixed(1)},${(80-38*Math.sin(k*Math.PI/16)).toFixed(1)}`;}
      return S(`
      <path d="M40 14V150H300" style="${ink};stroke-width:1.4"/>${t(300,166,"t","end")}${t(34,20,"σ","end")}${t(34,154,"0","end","font-size:11px")}
      <path d="M40 42H300M40 118H300" style="stroke:var(--ink-3);stroke-dasharray:3 4"/><path d="M40 80H300" style="stroke:var(--c-bauko);stroke-width:1.4;stroke-dasharray:6 4"/>
      <path d="${d}" style="stroke:var(--c-bsk);stroke-width:2.2;fill:none"/>
      ${t(34,46,"σ_o","end","font-size:12px;font-weight:700")}${t(34,122,"σ_u","end","font-size:12px;font-weight:700")}${t(34,84,"σ_m","end","font-size:12px;font-weight:700;fill:var(--c-bauko)")}
      <path d="M290 42V80M286 42H294M286 80H294" style="stroke:var(--accent);stroke-width:1.6"/>${t(284,64,"σ_a","end","fill:var(--accent);font-weight:700")}
      ${t(60,190,"σ_m =","end","font-weight:700")}${t(102,182,"σ_o + σ_u","middle","font-weight:700")}<path d="M66 186H138" style="${ink};stroke-width:1.2"/>${t(102,202,"2","middle","font-weight:700")}
      ${t(212,190,"σ_a =","end","font-weight:700")}${t(254,182,"σ_o − σ_u","middle","font-weight:700")}<path d="M218 186H290" style="${ink};stroke-width:1.2"/>${t(254,202,"2","middle","font-weight:700")}`, 208); },
    woehler2: () => S(`
      <path d="M50 14V150H305" style="${ink};stroke-width:1.5"/>${t(300,186,"Lastspielzahl N (log)","end","font-size:11.5px")}${t(44,22,"σ_a","end")}
      ${[2,4,6,8].map((e,i)=>`<path d="M${(50+i*83.3).toFixed(1)} 150V155" style="${ink}"/>`+t(50+i*83.3,170,"10"+["²","⁴","⁶","⁸"][i],"middle","font-size:11px")).join("")}
      <path d="M52 34Q130 46 180 104Q196 118 216 118H300" style="stroke:var(--c-bsk);stroke-width:2.6;fill:none"/>
      <path d="M216.6 20V150" style="stroke:var(--ink-3);stroke-dasharray:4 4"/>
      ${t(110,96,"Zeitfestigkeit","middle","font-weight:600;font-size:12px")}${t(110,112,"(begrenzte Zahl)","middle","font-size:11px")}
      ${t(268,100,"Dauerfestigkeit","middle","fill:var(--c-bsk);font-weight:700;font-size:12px")}${t(258,138,"waagerecht","middle","font-size:11px")}
      ${t(222,32,"ab ≈ 10⁶","start","font-size:11px")}`, 190),
    verbundmodell: () => S(arrow("avm","var(--accent)")+`
      <path d="M30 40H130M30 150H130" style="stroke:var(--ink);stroke-width:5"/>
      <rect x="44" y="44" width="34" height="102" style="fill:color-mix(in srgb,var(--c-bsk) 55%,var(--bg))"/><rect x="78" y="44" width="38" height="102" style="fill:color-mix(in srgb,var(--ink-3) 30%,var(--bg))"/>
      <path d="M80 36V12" style="${acc};stroke-width:2.2" marker-end="url(#avm)"/><path d="M80 154V176" style="${acc};stroke-width:2.2" marker-end="url(#avm)"/>
      ${t(61,100,"1","middle","font-weight:700")}${t(97,100,"2","middle","font-weight:700")}
      ${t(80,194,"parallel = hartes Modell","middle","font-weight:700;font-size:11.5px")}${t(80,210,"gleiche Dehnung → E oben","middle","font-size:11px")}
      <path d="M190 40H290M190 150H290" style="stroke:var(--ink);stroke-width:5"/>
      <rect x="196" y="44" width="88" height="50" style="fill:color-mix(in srgb,var(--c-bsk) 55%,var(--bg))"/><rect x="196" y="94" width="88" height="52" style="fill:color-mix(in srgb,var(--ink-3) 30%,var(--bg))"/>
      <path d="M240 36V12" style="${acc};stroke-width:2.2" marker-end="url(#avm)"/><path d="M240 154V176" style="${acc};stroke-width:2.2" marker-end="url(#avm)"/>
      ${t(240,74,"1","middle","font-weight:700")}${t(240,124,"2","middle","font-weight:700")}
      ${t(240,194,"Serie = weiches Modell","middle","font-weight:700;font-size:11.5px")}${t(240,210,"gleiche Spannung → E unten","middle","font-size:11px")}
      ${t(160,226,"GFK: längs wie parallel (steif), quer wie Serie – real liegt E dazwischen","middle","font-size:10.5px")}`, 232),
    gitter: () => { const cube=(x,y,s,extra)=>{const o=14,q=-11, c=[[0,0],[s,0],[s,s],[0,s]], at=(px,py)=>`<circle cx="${px}" cy="${py}" r="4" style="fill:var(--c-bsk);stroke:var(--ink);stroke-width:.8"/>`;
        let g=`<path d="M${x} ${y}h${s}v${s}h${-s}Z M${x+o} ${y+q}h${s}v${s}h${-s}Z M${x} ${y}l${o} ${q}M${x+s} ${y}l${o} ${q}M${x+s} ${y+s}l${o} ${q}M${x} ${y+s}l${o} ${q}" style="stroke:var(--ink-3);stroke-width:1;fill:none"/>`;
        c.forEach(([a,b])=>{g+=at(x+o+a,y+q+b);}); c.forEach(([a,b])=>{g+=at(x+a,y+b);});
        if(extra==="krz") g+=at(x+s/2+o/2,y+s/2+q/2);
        if(extra==="kfz") [[s/2+o,s/2+q],[s/2+o/2,q/2],[s/2+o/2,s+q/2],[o/2,s/2+q/2],[s+o/2,s/2+q/2],[s/2,s/2]].forEach(([a,b])=>{g+=at(x+a,y+b);});
        return g; };
      const hex=(cx,y,r)=>{const pts=k=>[0,1,2,3,4,5].map(i=>[cx+r*Math.cos(i*Math.PI/3),k+r*.38*Math.sin(i*Math.PI/3)]); const top=pts(y), bot=pts(y+46), at=(px,py)=>`<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.6" style="fill:var(--c-bsk);stroke:var(--ink);stroke-width:.8"/>`;
        let g=`<path d="M${top.map(p=>p.map(v=>v.toFixed(1)).join(" ")).join("L")}Z M${bot.map(p=>p.map(v=>v.toFixed(1)).join(" ")).join("L")}Z ${top.map((p,i)=>`M${p[0].toFixed(1)} ${p[1].toFixed(1)}L${bot[i][0].toFixed(1)} ${bot[i][1].toFixed(1)}`).join("")}" style="stroke:var(--ink-3);stroke-width:1;fill:none"/>`;
        bot.forEach(p=>g+=at(...p)); g+=at(cx,y+46); [0,2,4].forEach(i=>g+=at(cx+r*.5*Math.cos(i*Math.PI/3+Math.PI/6),y+23+r*.2*Math.sin(i*Math.PI/3+Math.PI/6))); top.forEach(p=>g+=at(...p)); g+=at(cx,y); return g; };
      const lab=(x,a,b,c)=>t(x,128,a,"middle","font-weight:700;font-size:12px")+t(x,146,b,"middle","font-size:11.5px")+t(x,162,c,"middle","font-size:10.5px");
      return S(cube(14,48,44,"")+cube(92,48,44,"krz")+cube(170,48,44,"kfz")+hex(276,44,28)+
        lab(42,"kub. primitiv","52 % · 6","")+lab(120,"krz","68 % · 8","α-Eisen")+lab(198,"kfz","74 % · 12","Al, Cu, γ-Eisen")+lab(276,"hdP","74 % · 12","Mg, Zn, Ti")+
        t(160,190,"Füllgrad · Zahl der nächsten Nachbarn","middle","font-size:11px;font-weight:600"), 198); },
    kerbe: () => S(arrow("akb","var(--ink)")+`
      <path d="M40 50H112A18 18 0 0 0 148 50H230V130H148A18 18 0 0 0 112 130H40Z" style="fill:color-mix(in srgb,var(--ink-3) 18%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      <path d="M36 90H10" style="${ink};stroke-width:2.2" marker-end="url(#akb)"/><path d="M234 90H260" style="${ink};stroke-width:2.2" marker-end="url(#akb)"/>${t(14,80,"F","middle","font-weight:700")}${t(256,80,"F","middle","font-weight:700")}
      <path d="M130 68H192C164 74 152 84 150 90C152 96 164 106 192 112H130Z" style="fill:color-mix(in srgb,var(--c-bauko) 25%,transparent);stroke:var(--c-bauko);stroke-width:1.8"/>
      <path d="M162 64V116" style="stroke:var(--accent);stroke-width:1.4;stroke-dasharray:4 3"/>${t(162,146,"σ_n (Mittel)","middle","fill:var(--accent);font-size:11px;font-weight:600")}
      ${t(196,66,"σ_max","start","fill:var(--c-bauko);font-weight:700")}
      ${t(160,176,"Spannungsspitze am Kerbgrund:","middle","font-size:11.5px")}${t(160,194,"σ_max ≈ 1,2 … 2,5 · σ_n","middle","font-weight:700")}`, 202),
    hochkant: () => S(arrow("ahk","var(--accent)")+`
      <rect x="60" y="30" width="40" height="80" style="fill:color-mix(in srgb,var(--c-bauko) 25%,var(--bg));stroke:var(--ink);stroke-width:1.5"/>
      <rect x="190" y="70" width="80" height="40" style="fill:color-mix(in srgb,var(--c-bauko) 25%,var(--bg));stroke:var(--ink);stroke-width:1.5"/>
      <path d="M80 6V26" style="${acc};stroke-width:2" marker-end="url(#ahk)"/><path d="M230 46V66" style="${acc};stroke-width:2" marker-end="url(#ahk)"/>
      ${t(80,128,"hochkant 8/16","middle","font-weight:700;font-size:12px")}${t(80,146,"W = 341 cm³","middle","fill:var(--accent);font-weight:700")}
      ${t(230,128,"flach 16/8","middle","font-weight:700;font-size:12px")}${t(230,146,"W = 171 cm³","middle","font-weight:700")}
      ${t(110,186,"W =","end","font-weight:700")}${t(140,178,"b · h²","middle","font-weight:700")}<path d="M116 182H164" style="${ink};stroke-width:1.2"/>${t(140,198,"6","middle","font-weight:700")}
      ${t(176,186,"h zählt im Quadrat","start","font-size:12px")}`, 204),
    kraftabstand: () => S(`
      <path d="M40 14V180M40 100H300" style="${ink};stroke-width:1.4"/>${t(304,136,"Abstand a","end","font-size:11.5px")}${t(34,22,"F","end")}
      <path d="M58 16C76 64 92 88 110 100S140 146 166 142S250 112 300 104" style="stroke:var(--c-bsk);stroke-width:2.4;fill:none"/>
      <path d="M90 52L130 148" style="stroke:var(--accent);stroke-width:1.6;stroke-dasharray:6 4"/>
      <circle cx="110" cy="100" r="4" style="fill:var(--accent)"/>${t(118,92,"a₀ (Ruhelage, F = 0)","start","font-size:11px;font-weight:600")}
      ${t(66,40,"Abstoßung","start","font-size:11px")}${t(210,148,"Anziehung","middle","font-size:11px")}
      ${t(160,196,"Steigung bei a₀ = Steifigkeit → E-Modul (steil = steif)","middle","font-size:11.5px;font-weight:600;fill:var(--accent)")}`, 204),
    porenarten: () => S(`
      <rect x="20" y="24" width="280" height="116" rx="3" style="fill:color-mix(in srgb,var(--ink-3) 38%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      <circle cx="60" cy="82" r="17" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.3"/>
      <path d="M160 24C148 54 178 74 162 102S168 130 166 140" style="stroke:color-mix(in srgb,var(--c-hydro) 70%,transparent);stroke-width:11;fill:none"/>
      <path d="M260 25C256 48 268 66 262 88" style="stroke:var(--bg);stroke-width:11;fill:none"/><circle cx="262" cy="96" r="13" style="fill:var(--bg)"/>
      ${t(60,160,"geschlossene Pore","middle","font-weight:700;font-size:11px")}${t(60,176,"kein Zugang, dämmt","middle","font-size:10.5px")}
      ${t(162,160,"durchg. Kapillare","middle","font-weight:700;font-size:11px")}${t(162,176,"Wasser zieht durch","middle","font-size:10.5px")}
      ${t(264,160,"Sackpore","middle","font-weight:700;font-size:11px")}${t(264,176,"nur einseitig offen","middle","font-size:10.5px")}
      ${t(160,16,"blau: Wasser in den Kapillaren","middle","font-size:11px")}`, 184),
    querdehnung: () => S(arrow("aqu","var(--accent)")+`
      <rect x="70" y="60" width="180" height="50" style="fill:none;stroke:var(--ink-3);stroke-width:1.3;stroke-dasharray:5 4"/>
      <rect x="54" y="66" width="212" height="38" style="fill:color-mix(in srgb,var(--c-bsk) 28%,transparent);stroke:var(--ink);stroke-width:1.5"/>
      <path d="M50 85H18" style="${acc};stroke-width:2.4" marker-end="url(#aqu)"/><path d="M270 85H302" style="${acc};stroke-width:2.4" marker-end="url(#aqu)"/>${t(22,76,"F","middle","fill:var(--accent);font-weight:700")}${t(298,76,"F","middle","fill:var(--accent);font-weight:700")}
      <path d="M250 124H266M250 118V130M266 118V130" style="${ink};stroke-width:1"/>${t(258,144,"Δl","middle","font-weight:700")}
      <path d="M160 60V66M160 104V110" style="stroke:var(--c-bauko);stroke-width:2.4"/>${t(168,56,"dünner (Δd)","start","fill:var(--c-bauko);font-size:11.5px;font-weight:600")}
      ${t(80,176,"μ =","end","font-weight:700")}${t(116,168,"ε_quer","middle","font-weight:700")}<path d="M88 172H144" style="${ink};stroke-width:1.2"/>${t(116,188,"ε_längs","middle","font-weight:700")}
      ${t(160,176,"μ = 0,5: Volumen bleibt gleich","start","font-size:11.5px;font-weight:600")}`, 196),
    /* v1.9 – Skizzen zu bestehenden Fragen: Bauinformatik, Statistik, DAP */
    array: () => { const mono="font-family:ui-monospace,Menlo,monospace";
      return S(`
      ${[0,1,2,3,4,5].map(i=>`<rect x="${30+i*36}" y="56" width="36" height="36" style="fill:color-mix(in srgb,var(--c-binf) ${i===5?40:16}%,var(--bg));stroke:var(--ink);stroke-width:1.3"/>`+t(48+i*36,114,String(i),"middle","font-weight:700;"+mono)).join("")}
      <rect x="246" y="56" width="36" height="36" style="fill:none;stroke:var(--bad);stroke-width:1.5;stroke-dasharray:5 4"/>${t(264,80,"✗","middle","fill:var(--bad);font-weight:700;font-size:16px")}${t(264,114,"6","middle","fill:var(--bad);font-weight:700;"+mono)}
      ${t(14,114,"Index","start","font-size:10px")}
      <path d="M30 40H246M30 34V46M246 34V46" style="${ink};stroke-width:1"/>${t(138,28,"noten.length = 6","middle","font-weight:600;"+mono)}
      ${t(10,146,"Zählung beginnt bei 0 → letzter Index = length − 1 = 5","start","font-size:11.5px")}
      ${t(10,166,"noten[6] liegt außerhalb:","start","font-size:11.5px")}${t(10,184,"ArrayIndexOutOfBoundsException","start","fill:var(--bad);font-weight:600;font-size:11.5px;"+mono)}`, 192); },
    grid2d: () => { const mono="font-family:ui-monospace,Menlo,monospace"; let g="";
      for(let r=0;r<3;r++)for(let c=0;c<5;c++) g+=`<rect x="${90+c*40}" y="${48+r*30}" width="40" height="30" style="fill:color-mix(in srgb,var(--c-binf) ${r===2&&c===4?55:(r===1?22:12)}%,var(--bg));stroke:var(--ink);stroke-width:1.1"/>`;
      return S(g+[0,1,2,3,4].map(c=>t(110+c*40,42,String(c),"middle","font-size:11px;"+mono)).join("")+[0,1,2].map(r=>t(82,68+r*30,String(r),"end","font-size:11px;"+mono)).join("")+`
      ${t(190,20,"Spalten: feld[0].length = 5","middle","font-weight:600;font-size:12px")}
      <path d="M60 48V138M54 48H66M54 138H66" style="${ink};stroke-width:1"/><text x="40" y="93" text-anchor="middle" transform="rotate(-90 40 93)" style="${ink2};font-size:11.5px;font-weight:600">Zeilen: 3</text>
      ${t(270,124,"[2][4]","middle","font-weight:700;font-size:11px;"+mono)}
      ${t(16,164,"new double[3][5] → 3 Zeilen, 5 Spalten","start","font-size:12px;"+mono)}${t(16,184,"Zugriff: feld[Zeile][Spalte], beide ab 0","start","font-size:12px")}`, 192); },
    binsuche: () => { const L=[1,3,4,5,7,11,12,27,29,30,33,35,47,49], P=[[0,13,6],[0,5,2],[3,5,4],[5,5,5]], w=20.5, x0=24; let g="";
      L.forEach((v,i)=>{g+=t(x0+i*w+w/2,32,String(i),"middle","font-size:9px;fill:var(--ink-3)");});
      P.forEach(([a,e,m],r)=>{ const y=40+r*32; g+=t(14,y+18,String(r+1)+".","end","font-size:11px;font-weight:700");
        L.forEach((v,i)=>{ const inn=i>=a&&i<=e, mid=i===m; g+=`<rect x="${(x0+i*w).toFixed(1)}" y="${y}" width="${w}" height="24" style="fill:${mid?(r===3?"color-mix(in srgb,var(--ok) 55%,var(--bg))":"color-mix(in srgb,var(--accent) 45%,var(--bg))"):inn?"color-mix(in srgb,var(--c-binf) 16%,var(--bg))":"color-mix(in srgb,var(--ink-3) 10%,var(--bg))"};stroke:${inn?"var(--ink)":"var(--ink-3)"};stroke-width:${inn?1:.6}"/>`+t(x0+i*w+w/2,y+16,String(v),"middle","font-size:10px;"+(inn?"":"fill:var(--ink-3)")+(mid?";font-weight:700":"")); }); });
      return S(g+t(10,14,"gesucht: 11  ·  blau = mitte  ·  grau = schon ausgeschlossen","start","font-size:11px")+
        t(10,190,"11 < 12 → links · 11 > 4 → rechts · 11 > 7 → rechts · gefunden","start","font-size:10.5px")+
        t(10,208,"Funktioniert nur, weil die Liste sortiert ist","start","font-size:11.5px;font-weight:600"), 214); },
    dual: () => { const R=[[13,6,1],[6,3,0],[3,1,1],[1,0,1]], mono="font-family:ui-monospace,Menlo,monospace";
      return S(arrow("adu","var(--c-binf)")+R.map(([n,q,r],i)=>t(40,40+i*30,`${n} : 2 = ${q}`,"start","font-size:13px;"+mono)+t(170,40+i*30,`Rest ${r}`,"start","font-size:13px;font-weight:700;fill:var(--c-binf);"+mono)).join("")+`
      <path d="M250 128V30" style="stroke:var(--c-binf);stroke-width:2.4" marker-end="url(#adu)"/>${t(262,74,"von unten","start","font-size:11px")}${t(262,90,"nach oben","start","font-size:11px")}${t(262,106,"lesen","start","font-size:11px")}
      ${t(160,170,"13₁₀ = 1101₂","middle","font-weight:700;font-size:16px")}${t(160,190,"bis das Ergebnis 0 ist","middle","font-size:11px")}`, 198); },
    schleifen: () => { const dia=(x,y,s)=>`<path d="M${x} ${y-16}L${x+36} ${y}L${x} ${y+16}L${x-36} ${y}Z" style="fill:color-mix(in srgb,var(--c-binf) 18%,var(--bg));stroke:var(--ink);stroke-width:1.3"/>`+t(x,y+4,s,"middle","font-size:11px");
      const box=(x,y,s)=>`<rect x="${x-34}" y="${y}" width="68" height="24" rx="5" style="fill:color-mix(in srgb,var(--accent) 14%,var(--bg));stroke:var(--ink);stroke-width:1.3"/>`+t(x,y+16,s,"middle","font-size:11px");
      const A=(d)=>`<path d="${d}" style="${ink};stroke-width:1.3;fill:none" marker-end="url(#asl)"/>`;
      return S(arrow("asl","var(--ink)")+`
      ${t(80,16,"while – kopfgesteuert","middle","font-weight:700;font-size:12px")}
      ${A("M80 24V36")}${dia(80,54,"i < 10 ?")}${A("M80 70V90")}${t(86,84,"ja","start","font-size:10.5px")}${box(80,90,"Rumpf")}${A("M80 114V124H28V54H40")}
      ${A("M116 54H140V140")}${t(122,48,"nein","start","font-size:10.5px")}${t(140,154,"Ende","middle","font-size:11px")}
      ${t(240,16,"do-while – fußgesteuert","middle","font-weight:700;font-size:12px")}
      ${A("M240 24V32")}${box(240,32,"Rumpf")}${A("M240 56V74")}${dia(240,90,"i < 10 ?")}${A("M204 90H188V44H202")}${t(192,104,"ja","middle","font-size:10.5px")}
      ${A("M240 106V140")}${t(246,124,"nein","start","font-size:10.5px")}${t(240,154,"Ende","middle","font-size:11px")}
      ${t(80,178,"i = 10: 0 Durchläufe","middle","font-size:11.5px;font-weight:600")}${t(240,178,"i = 10: 1 Durchlauf","middle","font-size:11.5px;font-weight:600")}
      ${t(160,198,"for: Zählschleife, Anzahl der Durchläufe vorher bekannt","middle","font-size:11px")}`, 204); },
    struktogramm: () => { const n=(x,y,k)=>t(x,y,["①","②","③"][k],"middle","fill:var(--accent);font-weight:700;font-size:14px");
      return S(arrow("ast","var(--ink)")+`<g transform="translate(10 0)">
      ${t(80,14,"Struktogramm","middle","font-weight:700;font-size:12px")}${t(244,14,"Aktivitätsdiagramm","middle","font-weight:700;font-size:12px")}
      <rect x="14" y="22" width="132" height="22" style="fill:color-mix(in srgb,var(--c-binf) 12%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>${t(80,37,"Anweisung","middle","font-size:11px")}
      <rect x="14" y="44" width="132" height="50" style="fill:color-mix(in srgb,var(--c-binf) 12%,var(--bg));stroke:var(--ink);stroke-width:1.2"/><path d="M14 44L80 68L146 44M80 68V94" style="${ink};stroke-width:1.1"/>
      ${t(80,58,"Bedingung?","middle","font-size:10.5px")}${t(26,64,"ja","start","font-size:10px")}${t(136,64,"nein","end","font-size:10px")}${t(47,86,"A","middle","font-size:11px")}${t(113,86,"B","middle","font-size:11px")}
      <rect x="14" y="94" width="132" height="54" style="fill:color-mix(in srgb,var(--c-binf) 12%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>${t(22,110,"solange Bedingung","start","font-size:10.5px")}
      <rect x="34" y="118" width="112" height="30" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.1"/>${t(90,137,"Rumpf","middle","font-size:11px")}
      </g>${n(10,38,0)}${n(10,74,1)}${n(10,126,2)}
      <rect x="206" y="22" width="68" height="20" rx="8" style="fill:color-mix(in srgb,var(--accent) 14%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>${t(240,36,"Aktion","middle","font-size:11px")}
      <path d="M240 42V52" style="${ink};stroke-width:1.2" marker-end="url(#ast)"/><path d="M240 54L252 64L240 74L228 64Z" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.2"/>
      <path d="M228 64H204V80" style="${ink};stroke-width:1.2;fill:none" marker-end="url(#ast)"/><path d="M252 64H276V80" style="${ink};stroke-width:1.2;fill:none" marker-end="url(#ast)"/>
      ${t(212,60,"[true]","end","font-size:9.5px")}${t(268,60,"[false]","start","font-size:9.5px")}${t(204,94,"A","middle","font-size:11px")}${t(276,94,"B","middle","font-size:11px")}
      <path d="M240 110L252 120L240 130L228 120Z" style="fill:var(--bg);stroke:var(--ink);stroke-width:1.2"/><path d="M240 130V138" style="${ink};stroke-width:1.2" marker-end="url(#ast)"/>
      <rect x="214" y="140" width="52" height="18" rx="7" style="fill:color-mix(in srgb,var(--accent) 14%,var(--bg));stroke:var(--ink);stroke-width:1.2"/>${t(240,153,"Rumpf","middle","font-size:10.5px")}
      <path d="M266 149H290V120H254" style="${ink};stroke-width:1.2;fill:none" marker-end="url(#ast)"/>
      ${n(186,36,0)}${n(186,74,1)}${n(186,126,2)}
      ${t(160,180,"① Anweisung = Aktion  ② Verzweigung = Raute","middle","font-size:11px")}${t(160,196,"③ Schleife = Pfeil zurück zur Bedingung","middle","font-size:11px")}`, 202); },
    matrix2: () => { const g=(x,y,r,c,col)=>{let s="";for(let i=0;i<r;i++)for(let j=0;j<c;j++)s+=`<rect x="${x+j*16}" y="${y+i*16}" width="14" height="14" rx="3" style="fill:color-mix(in srgb,${col} 32%,transparent)"/>`;return s;};
      return S(g(16,56,2,3,"var(--c-stat)")+t(76,82,"·","middle","font-size:24px")+g(92,40,3,4,"var(--accent)")+t(176,82,"=","middle","font-size:22px")+g(196,56,2,4,"var(--ok)")+`
      ${t(39,108,"A (2, 3)","middle","font-weight:700;font-size:12px")}${t(124,108,"B (3, 4)","middle","font-weight:700;font-size:12px")}${t(227,108,"(2, 4)","middle","font-weight:700;font-size:12px")}
      <path d="M58 128Q84 150 108 128" style="stroke:var(--c-bauko);stroke-width:1.6;fill:none"/>${t(84,160,"innen gleich: 3 = 3","middle","fill:var(--c-bauko);font-weight:600;font-size:11.5px")}
      <path d="M24 108Q130 186 238 128" style="stroke:var(--ok);stroke-width:1.4;fill:none;stroke-dasharray:4 3"/>${t(240,166,"außen → Ergebnis","middle","fill:var(--ok);font-weight:600;font-size:11.5px")}
      ${t(160,194,"Spaltenzahl von A = Zeilenzahl von B","middle","font-size:12px;font-weight:600")}`, 200); },
    boxplot: () => S(`
      <path d="M30 70H70M250 70H290M30 56V84M290 56V84" style="stroke:var(--c-stat);stroke-width:2"/>
      <rect x="70" y="46" width="180" height="48" style="fill:color-mix(in srgb,var(--c-stat) 18%,transparent);stroke:var(--c-stat);stroke-width:2"/><path d="M140 46V94" style="stroke:var(--c-stat);stroke-width:3"/>
      ${[[30,"Min"],[70,"Q1"],[140,"Median"],[250,"Q3"],[290,"Max"]].map(([x,s])=>`<path d="M${x} 100V108" style="${ink};stroke-width:1"/>`+t(x,122,s,"middle","font-size:11.5px;font-weight:600")).join("")}
      ${[[50,"25 %"],[105,"25 %"],[195,"25 %"],[270,"25 %"]].map(([x,s])=>t(x,144,s,"middle","font-size:10.5px;fill:var(--ink-3)")).join("")}
      <path d="M70 30H250M70 24V36M250 24V36" style="${ink};stroke-width:1"/>${t(160,18,"Box: Q1 bis Q3 = Interquartilsabstand (mittlere 50 %)","middle","font-size:11px;font-weight:600")}
      ${t(160,172,"Q1: 25 % darunter · Q2 = Median · Q3: 75 % darunter","middle","font-size:11px")}`, 180),
    schiefe: () => { let d="M30 150"; for(let k=0;k<=130;k++){const x=k/130*7.5, y=x*x*Math.exp(-x)*.54; d+=`L${(30+k*2).toFixed(1)},${(150-y*228).toFixed(1)}`;}
      return S(`
      <path d="${d}V150Z" style="fill:color-mix(in srgb,var(--c-stat) 18%,transparent)"/><path d="${d}" style="stroke:var(--c-stat);stroke-width:2.2;fill:none"/>
      <path d="M20 150H300" style="${ink};stroke-width:1.4"/>
      <path d="M99.3 150V32" style="stroke:var(--ink);stroke-width:1.4;stroke-dasharray:4 3"/><path d="M125 150V44" style="stroke:var(--accent);stroke-width:1.6;stroke-dasharray:4 3"/><path d="M134 150V48" style="stroke:var(--c-bauko);stroke-width:1.8"/>
      ${t(96,26,"Modus","end","font-size:11px")}${t(122,170,"Median","end","font-size:11px;fill:var(--accent);font-weight:600")}${t(138,62,"Mittelwert x̄","start","font-size:11px;fill:var(--c-bauko);font-weight:700")}
      ${t(70,64,"steil","middle","font-size:11px")}${t(240,124,"lange Flanke rechts →","middle","font-size:11px")}
      ${t(160,194,"rechtsschief: Modus < Median < Mittelwert","middle","font-size:12px;font-weight:700")}`, 200); },
    ecdf: () => { let st="", dots=""; for(let k=0;k<6;k++){const x=22+k*20, y=150-(k+1)*20; st+=`M${x} ${y}H${x+20}`; dots+=`<circle cx="${x}" cy="${y}" r="3" style="fill:var(--c-stat)"/><circle cx="${x+20}" cy="${y}" r="2.6" style="fill:var(--bg);stroke:var(--c-stat);stroke-width:1.2"/>`;}
      return S(`
      <path d="M14 150H150M14 150V20" style="${ink};stroke-width:1.2"/>${t(10,34,"1","end","font-size:11px")}<path d="M14 30H150" style="stroke:var(--ink-3);stroke-dasharray:3 4"/>
      <path d="${st}" style="stroke:var(--c-stat);stroke-width:2.4;fill:none"/>${dots}${[1,2,3,4,5,6].map(k=>t(2+k*20,164,String(k),"middle","font-size:10px")).join("")}
      ${t(82,184,"diskret (Würfel):","middle","font-weight:700;font-size:11.5px")}${t(82,200,"Treppenfunktion","middle","font-size:11.5px")}
      <path d="M174 150H310M174 150V20" style="${ink};stroke-width:1.2"/><path d="M174 30H310" style="stroke:var(--ink-3);stroke-dasharray:3 4"/>
      <path d="M184 150L210 136L236 98L262 52L288 34L304 30" style="stroke:var(--c-stat);stroke-width:2.4;fill:none"/>${[[184,150],[210,136],[236,98],[262,52],[288,34],[304,30]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.6" style="fill:var(--c-stat)"/>`).join("")}
      ${t(242,184,"stetig (klassiert):","middle","font-weight:700;font-size:11.5px")}${t(242,200,"Polygonzug","middle","font-size:11.5px")}
      ${t(160,14,"F(x) = Anteil der Werte ≤ x – steigt monoton bis 1","middle","font-size:11px;font-weight:600")}`, 206); },
    streu: () => { const pts=(x0,f)=>{let s="";const r=[.1,.8,.35,.6,.95,.2,.5,.72,.42,.88,.15,.66];for(let i=0;i<12;i++){const u=(i+.5)/12, v=f(u,r[i]);s+=`<circle cx="${(x0+6+u*82).toFixed(1)}" cy="${(132-v*96).toFixed(1)}" r="3.2" style="fill:var(--c-stat);opacity:.8"/>`;}return s;};
      const ax=x=>`<path d="M${x} 140H${x+94}M${x} 140V30" style="${ink};stroke-width:1.2"/>`;
      return S(ax(12)+pts(12,(u,r)=>u*.8+r*.2)+ax(118)+pts(118,(u,r)=>1-u*.8-r*.2)+ax(224)+pts(224,(u,r)=>r)+`
      ${t(59,162,"s_XY > 0","middle","font-weight:700;font-size:12px")}${t(59,178,"gleichsinnig","middle","font-size:11px")}
      ${t(165,162,"s_XY < 0","middle","font-weight:700;font-size:12px")}${t(165,178,"gegensinnig","middle","font-size:11px")}
      ${t(271,162,"s_XY ≈ 0","middle","font-weight:700;font-size:12px")}${t(271,178,"kein linearer","middle","font-size:11px")}${t(271,192,"Zusammenhang","middle","font-size:11px")}`, 198); },
    sigmaregeln: () => S(`
      <path d="${bell(25,295,130,160,45,100)}V130H25Z" style="fill:color-mix(in srgb,var(--c-dap) 8%,transparent)"/>
      <path d="${bell(70,250,130,160,45,100)}V130H70Z" style="fill:color-mix(in srgb,var(--c-dap) 16%,transparent)"/>
      <path d="${bell(115,205,130,160,45,100)}V130H115Z" style="fill:color-mix(in srgb,var(--c-dap) 32%,transparent)"/>
      <path d="${bell(25,295,130,160,45,100)}" style="stroke:var(--c-dap);stroke-width:2.2;fill:none"/><path d="M15 130H305" style="${ink};stroke-width:1.4"/>
      ${[[-3,"−3σ"],[-2,"−2σ"],[-1,"−σ"],[0,"μ"],[1,"+σ"],[2,"+2σ"],[3,"+3σ"]].map(([k,s])=>t(160+k*45,146,s,"middle","font-size:10.5px")).join("")}
      ${[[1,"68,3 %",168],[2,"95,5 %",186],[3,"99,7 %",204]].map(([k,s,y])=>`<path d="M${160-k*45} ${y-4}H${160+k*45}M${160-k*45} ${y-9}V${y+1}M${160+k*45} ${y-9}V${y+1}" style="stroke:var(--c-dap);stroke-width:1.2"/>`+t(160,y-7,s,"middle","font-size:11px;font-weight:700;paint-order:stroke;stroke:var(--bg);stroke-width:4px")).join("")}`, 210),
    pdfflaeche: () => S(`
      <path d="${bell(100,190,150,150,48,110)}V150H100Z" style="fill:color-mix(in srgb,var(--c-dap) 38%,transparent)"/>
      <path d="${bell(20,300,150,150,48,110)}" style="stroke:var(--c-dap);stroke-width:2.2;fill:none"/><path d="M10 150H310" style="${ink};stroke-width:1.4"/>
      <path d="M100 150V${(150-110*Math.exp(-.5*(50/48)**2)).toFixed(1)}M190 150V${(150-110*Math.exp(-.5*(40/48)**2)).toFixed(1)}" style="stroke:var(--c-dap);stroke-width:1.4"/>
      ${t(100,166,"a","middle","font-weight:700")}${t(190,166,"b","middle","font-weight:700")}${t(145,120,"Fläche","middle","font-weight:700")}
      ${t(160,190,"P(a ≤ X ≤ b) = Fläche unter f(x) von a bis b","middle","font-size:12px;font-weight:600")}${t(300,30,"Gesamtfläche = 1","end","font-size:11px")}`, 198),
    zgws: () => { const bars=[34,26,20,15,11,8,6,4,3,2].map((h,i)=>`<rect x="${14+i*12}" y="${130-h*2.6}" width="10" height="${h*2.6}" style="fill:color-mix(in srgb,var(--c-dap) 40%,transparent)"/>`).join("");
      return S(arrow("azg","var(--accent)")+bars+`
      <path d="M10 130H140" style="${ink};stroke-width:1.2"/>${t(75,148,"Grundgesamtheit (μ, σ)","middle","font-size:11px;font-weight:600")}${t(75,164,"beliebig verteilt","middle","font-size:11px")}
      <path d="M142 70H186" style="${acc};stroke-width:2.2" marker-end="url(#azg)"/>${t(164,58,"x̄ aus n","middle","font-size:10.5px")}${t(164,90,"oft wdh.","middle","font-size:10.5px")}
      <path d="${bell(196,312,130,254,17,104)}" style="stroke:var(--c-dap);stroke-width:2.2;fill:color-mix(in srgb,var(--c-dap) 16%,transparent)"/><path d="M190 130H316" style="${ink};stroke-width:1.2"/>
      <path d="M254 130V22" style="stroke:var(--ink-3);stroke-dasharray:3 3"/>${t(254,146,"μ","middle","font-weight:700")}
      ${t(254,164,"Verteilung der x̄: normal","middle","font-size:11px;font-weight:600")}
      ${t(196,192,"Streuung:","start","font-size:11.5px")}${t(272,184,"σ","middle","font-weight:700")}<path d="M260 188H286" style="${ink};stroke-width:1.2"/>${t(272,204,"√n","middle","font-weight:700")}`, 210); },
    konfint: () => S(`
      <path d="${bell(20,94,140,160,44,110)}V140H20Z" style="fill:color-mix(in srgb,var(--bad) 30%,transparent)"/><path d="${bell(226,300,140,160,44,110)}V140H226Z" style="fill:color-mix(in srgb,var(--bad) 30%,transparent)"/>
      <path d="${bell(94,226,140,160,44,110)}V140H94Z" style="fill:color-mix(in srgb,var(--c-dap) 24%,transparent)"/>
      <path d="${bell(20,300,140,160,44,110)}" style="stroke:var(--c-dap);stroke-width:2.2;fill:none"/><path d="M10 140H310" style="${ink};stroke-width:1.4"/>
      ${t(94,156,"−z","middle","font-weight:700")}${t(226,156,"+z","middle","font-weight:700")}${t(160,156,"0","middle")}
      ${t(160,104,"γ","middle","font-weight:700;font-size:16px")}${t(160,120,"(z. B. 0,95)","middle","font-size:10.5px")}
      ${t(48,112,"½ α","middle","fill:var(--bad);font-weight:700")}${t(272,112,"½ α","middle","fill:var(--bad);font-weight:700")}
      <path d="M20 172H226M20 166V178M226 166V178" style="stroke:var(--accent);stroke-width:1.4"/>${t(123,190,"Φ(z) = γ + ½ α = 0,975 → z = 1,96","middle","fill:var(--accent);font-weight:700;font-size:11.5px")}
      ${t(10,20,"γ = 1 − α","start","font-weight:700")}`, 198),
    tvert: () => { let tp="M20 150"; for(let x=20;x<=300;x+=3){const z=(x-160)/40, f=Math.pow(1+z*z/3,-2); tp+=`L${x},${(150-92*f).toFixed(1)}`;}
      return S(`
      <path d="${bell(20,300,150,160,40,118)}" style="stroke:var(--c-dap);stroke-width:2.2;fill:none"/>
      <path d="${tp}" style="stroke:var(--accent);stroke-width:2.2;fill:none;stroke-dasharray:6 4"/><path d="M10 150H310" style="${ink};stroke-width:1.4"/>
      ${t(196,30,"Normalverteilung","start","fill:var(--c-dap);font-weight:700;font-size:11.5px")}${t(236,70,"t-Verteilung:","start","fill:var(--accent);font-weight:700;font-size:11.5px")}${t(236,86,"flacher, breitere","start","fill:var(--accent);font-size:11px")}${t(236,100,"Ränder","start","fill:var(--accent);font-size:11px")}
      ${t(160,180,"größeres n → ähnlicher; ab etwa n > 30 kaum Unterschied","middle","font-size:11px;font-weight:600")}`, 188); },
    chi2: () => { const fac=n=>n<=1?1:n*fac(n-1), cols=["var(--c-dap)","var(--accent)","var(--c-stat)"];
      const cur=(k,c)=>{let d="";for(let i=0;i<=140;i++){const x=i*30/140, f=Math.pow(x,k/2-1)*Math.exp(-x/2)/(Math.pow(2,k/2)*fac(k/2-1)); d+=(d?"L":"M")+(30+i*2).toFixed(1)+","+(150-f*600).toFixed(1);}return `<path d="${d}" style="stroke:${c};stroke-width:2.2;fill:none"/>`;};
      return S(cur(4,cols[0])+cur(8,cols[1])+cur(16,cols[2])+`<path d="M20 150H310M30 150V20" style="${ink};stroke-width:1.4"/>
      ${t(68,38,"f = 4: schief","start","fill:var(--c-dap);font-weight:700;font-size:11px")}${t(124,82,"f = 8","start","fill:var(--accent);font-weight:700;font-size:11px")}${t(222,100,"f = 16:","start","fill:var(--c-stat);font-weight:700;font-size:11px")}${t(222,114,"fast symmetrisch","start","fill:var(--c-stat);font-weight:700;font-size:11px")}
      ${t(160,176,"mehr Freiheitsgrade → immer ähnlicher zur Normalverteilung","middle","font-size:11px;font-weight:600")}`, 184); },
    gleichsumme: () => S(arrow("ags","var(--accent)")+`
      <path d="M12 120H96" style="${ink};stroke-width:1.2"/><rect x="24" y="70" width="60" height="50" style="fill:color-mix(in srgb,var(--c-dap) 30%,transparent);stroke:var(--c-dap);stroke-width:2"/>
      ${t(54,140,"1 Gleich-","middle","font-size:11px;font-weight:600")}${t(54,154,"verteilung","middle","font-size:11px;font-weight:600")}
      <path d="M100 96H120" style="${acc};stroke-width:2" marker-end="url(#ags)"/>
      <path d="M124 120H208" style="${ink};stroke-width:1.2"/><path d="M130 120L166 50L202 120Z" style="fill:color-mix(in srgb,var(--c-dap) 30%,transparent);stroke:var(--c-dap);stroke-width:2"/>
      ${t(166,140,"Summe von 2:","middle","font-size:11px;font-weight:600")}${t(166,154,"Dreieck","middle","font-size:11px;font-weight:600")}
      <path d="M212 96H232" style="${acc};stroke-width:2" marker-end="url(#ags)"/>
      <path d="M236 120H316" style="${ink};stroke-width:1.2"/><path d="${bell(238,314,120,276,13,70)}V120H238Z" style="fill:color-mix(in srgb,var(--c-dap) 30%,transparent);stroke:var(--c-dap);stroke-width:2"/>
      ${t(276,140,"Summe vieler:","middle","font-size:11px;font-weight:600")}${t(276,154,"Glockenkurve","middle","font-size:11px;font-weight:600")}
      ${t(160,184,"Summen nähern sich der Normalverteilung","middle","font-size:10.5px")}`, 192),
