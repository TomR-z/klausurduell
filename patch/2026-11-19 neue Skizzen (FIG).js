/* Neue Skizze für FIG in index.html – beim Patch vor „stuetze:“ einfügen (nutzt S, t, arrow, ink aus FIG). Stand 19.11.2026: schuettung (BSK Übung Baustoffkenngrößen) */
    /* v2.0 – Skizze zur BSK-Übung Baustoffkenngrößen */
    schuettung: () => { const g=[[44,58,15],[78,52,13],[110,60,16],[60,88,14],[94,86,15],[128,92,13],[42,118,14],[76,118,16],[112,122,14],[140,64,10],[146,120,9]];
      return S(arrow("asu","var(--ink-2)")+`
      <rect x="24" y="36" width="140" height="106" rx="4" style="fill:color-mix(in srgb,var(--c-hydro) 10%,transparent);${ink};stroke-width:1.5"/>
      ${g.map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:color-mix(in srgb,var(--c-bsk) 45%,var(--bg));stroke:var(--ink);stroke-width:1"/>`).join("")}
      <circle cx="250" cy="74" r="40" style="fill:color-mix(in srgb,var(--c-bsk) 45%,var(--bg));stroke:var(--ink);stroke-width:1.4"/>
      ${[[236,62,4],[262,58,3],[248,84,5],[270,86,3.5],[232,90,3],[256,70,2.5]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:var(--bg);stroke:var(--ink-2);stroke-width:.8"/>`).join("")}
      <path d="M110 60L210 74" style="stroke:var(--ink-3);stroke-dasharray:3 3"/>
      <path d="M282 126L266 96" style="stroke:var(--ink-2);stroke-width:1.2" marker-end="url(#asu)"/>${t(300,140,"Kornporen","end","font-size:11.5px;font-weight:600")}
      <path d="M96 156L95 104" style="stroke:var(--ink-2);stroke-width:1.2" marker-end="url(#asu)"/>${t(96,170,"Haufwerksporen (Lücken)","middle","font-size:11.5px;font-weight:600")}
      ${t(94,26,"Schüttung","middle","font-weight:700")}${t(250,26,"ein Korn","middle","font-weight:700")}
      ${t(160,196,"ρ_Rein  >  ρ_Korn  >  ρ_Schütt   (mehr Hohlraum im Volumen)","middle","font-size:11.5px")}
      ${t(150,224,"Anteil Haufwerksporen = 1 −","end","font-size:12px;font-weight:600")}${t(188,216,"ρ_Schütt","middle","font-weight:700;font-size:12px")}<path d="M160 220H216" style="${ink};stroke-width:1.2"/>${t(188,236,"ρ_Korn","middle","font-weight:700;font-size:12px")}`, 242); },
