/* Neue Skizzen für FIG in index.html – beim Patch vor „stuetze:“ in das FIG-Objekt einfügen (nutzt S, t, arrow, ink, acc, water aus FIG) */
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
