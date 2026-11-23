/* Neue Skizzen für FIG in index.html – beim Patch vor „stuetze:“ einfügen (nutzt S, t, arrow, ink aus FIG). Stand 23.11.2026: wegunabh, epotdiag (Physik V07) */
    /* v2.4 – Skizzen zu Physik V07 */
    wegunabh: () => S(arrow("awa","var(--c-phys)")+arrow("awb","var(--accent)")+`
      <circle cx="46" cy="146" r="6" style="fill:var(--ink)"/>${t(34,166,"1","middle","font-weight:700")}
      <circle cx="262" cy="40" r="6" style="fill:var(--ink)"/>${t(278,36,"2","middle","font-weight:700")}
      <path d="M50 140C60 60 150 30 256 38" style="stroke:var(--c-phys);stroke-width:2.4;fill:none;marker-end:url(#awa)"/>${t(150,24,"Weg A","middle","font-weight:600;fill:var(--c-phys)")}
      <path d="M52 146C140 150 190 150 220 110S240 60 256 44" style="stroke:var(--accent);stroke-width:2.4;fill:none;marker-end:url(#awb)"/>${t(196,160,"Weg B","middle","font-weight:600;fill:var(--accent)")}
      ${t(160,104,"W<tspan baseline-shift='sub' font-size='8'>A</tspan> = W<tspan baseline-shift='sub' font-size='8'>B</tspan>","middle","font-weight:700;font-size:13px")}${t(160,178,"konservativ: nur Anfang und Ende zählen · ∮ F·ds = 0","middle","font-size:11px")}`, 186),
    epotdiag: () => S(arrow("aep","var(--ink-2)")+`
      <path d="M24 150H306M24 150V14" style="${ink};stroke-width:1.4"/>${t(304,166,"x","end")}${t(18,22,"E","end")}
      <path d="M40 30C70 120 100 140 130 110S170 40 200 70S250 150 296 30" style="stroke:var(--c-phys);stroke-width:2.4;fill:none"/>${t(292,24,"E<tspan baseline-shift='sub' font-size='8'>pot</tspan>(x)","end","font-size:11px;font-weight:600;fill:var(--c-phys)")}
      <path d="M24 84H306" style="stroke:var(--accent);stroke-width:2;stroke-dasharray:6 4"/>${t(306,78,"E<tspan baseline-shift='sub' font-size='8'>mech</tspan>","end","font-size:11px;font-weight:700;fill:var(--accent)")}
      <path d="M100 84V129" style="stroke:var(--ok);stroke-width:3"/>${t(108,112,"E<tspan baseline-shift='sub' font-size='8'>kin</tspan>","start","font-size:11px;font-weight:700;fill:var(--ok)")}
      <circle cx="57" cy="84" r="4.5" style="fill:var(--bad)"/><circle cx="160" cy="84" r="4.5" style="fill:var(--bad)"/>${t(57,74,"x<tspan baseline-shift='sub' font-size='8'>u</tspan>","middle","font-size:11px")}${t(160,74,"x<tspan baseline-shift='sub' font-size='8'>u</tspan>","middle","font-size:11px")}
      <circle cx="101" cy="130" r="4" style="fill:var(--ink)"/>${t(104,168,"Minimum: stabil","middle","font-size:11px;font-weight:600")}
      ${t(230,178,"E<tspan baseline-shift='sub' font-size='8'>kin</tspan> = E<tspan baseline-shift='sub' font-size='8'>mech</tspan> − E<tspan baseline-shift='sub' font-size='8'>pot</tspan>","middle","font-size:11.5px;font-weight:600")}`, 186),
