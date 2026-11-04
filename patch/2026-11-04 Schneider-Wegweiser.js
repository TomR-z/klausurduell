/* Schneider-Wegweiser (App 1.6): wo steht was in den Schneider Bautabellen. a24 = Fundstelle laut Vorlesungsfolien (24. Auflage), s27 = Fundstelle in Toms 27. Auflage (folgt nach seinen Scans). Keine Inhalte aus dem Buch. */
const SCHNEIDER = [
{
"was": "Wichten von Baustoffen (Eigenlasten)",
"a24": "S. 3.9–3.11",
"fol": "bauko-v02-19",
"kap": "Lastannahmen",
"tipp": "Beton, Mauerwerk, Holz, Estrich, Putz – Grundlage jeder Eigenlast g = γ · d.",
"s27": null
},
{
"was": "Nutzlasten im Hochbau (Kategorien A bis E)",
"a24": "Tafel 3.20",
"fol": "bauko-v02-23",
"kap": "Lastannahmen",
"tipp": "q_k und Q_k je Nutzung, z. B. Wohnraum A2/A3, Büro B1.",
"s27": null
},
{
"was": "Trennwandzuschlag",
"a24": "Tafel 3.19b",
"fol": "bauko-v02-26",
"kap": "Lastannahmen",
"tipp": "Leichte Trennwände als Zuschlag auf die Nutzlast statt als Einzellast.",
"s27": null
},
{
"was": "Schneelastzonen und s_k am Boden",
"a24": "Tafel 3.53a",
"fol": "bauko-v02-29",
"kap": "Lastannahmen",
"tipp": "Zone 1 bis 3 mit Formel über die Geländehöhe A und Mindestwert.",
"s27": null
},
{
"was": "Formbeiwerte μ für Schnee auf Dächern",
"a24": "Tafel 3.55a",
"fol": "bauko-v02-33",
"kap": "Lastannahmen",
"tipp": "μ₁ und μ₂ je Dachneigung, auch gereihte und Sheddächer.",
"s27": null
},
{
"was": "Geschwindigkeitsdruck q_p vereinfacht (bis 25 m)",
"a24": "Tafel 3.31",
"fol": "bauko-v02-41",
"kap": "Lastannahmen",
"tipp": "Windzone und Gebäudehöhe → q_p in kN/m².",
"s27": null
},
{
"was": "Höhenabhängiger Geschwindigkeitsdruck (Regelfall)",
"a24": "Tafel 3.32a",
"fol": null,
"kap": "Lastannahmen",
"tipp": "Für höhere Gebäude oder genauere Berechnung.",
"s27": null
},
{
"was": "Außendruckbeiwerte c_pe für Wände und Dächer",
"a24": "Tafeln 3.34 ff.",
"fol": "bauko-v02-45",
"kap": "Lastannahmen",
"tipp": "Bereiche F bis J, c_pe,1 und c_pe,10 – Zwischenwerte linear interpolieren.",
"s27": null
},
{
"was": "Modifikationsbeiwert k_mod",
"a24": "Tafel 9.3",
"fol": "bauko-v03-36",
"kap": "Holzbau",
"tipp": "Nach Nutzungsklasse und KLED – maßgebend ist die kürzeste Lasteinwirkung der Kombination.",
"s27": null
},
{
"was": "Festigkeiten und Steifigkeiten Vollholz und BSH (C24, GL24h …)",
"a24": "Tafeln 9.8 und 9.9",
"fol": "bauko-v03-37",
"kap": "Holzbau",
"tipp": "f_m,k, f_t,0,k, f_c,0,k, f_c,90,k, f_v,k, E-Modul.",
"s27": null
},
{
"was": "Querdruckbeiwert k_c,90",
"a24": "Tafel 9.24",
"fol": "bauko-v03-40",
"kap": "Holzbau",
"tipp": "Je nach Lagerung (Schwellendruck oder Auflagerdruck) und Holzart.",
"s27": null
},
{
"was": "Schubnachweis und k_cr",
"a24": "S. 9.21",
"fol": "bauko-v03-42",
"kap": "Holzbau",
"tipp": "τ_d = 1,5 · V_d / (k_cr · b · h).",
"s27": null
},
{
"was": "Knickbeiwert k_c",
"a24": "Tafel 9.29a",
"fol": "bauko-v03-45",
"kap": "Holzbau",
"tipp": "Über die Schlankheit λ bzw. λ_rel ablesen.",
"s27": null
},
{
"was": "Durchbiegung: k_def und Grenzwerte",
"a24": "Tafel 9.14 / S. 9.14 f.",
"fol": "bauko-v03-48",
"kap": "Holzbau",
"tipp": "Kriechbeiwert je Nutzungsklasse, Grenzwerte l/300 und l/200.",
"s27": null
},
{
"was": "Teilsicherheits- und Kombinationsbeiwerte (γ, ψ)",
"a24": "Kap. Grundlagen der Tragwerksplanung",
"fol": "bauko-v01-52",
"kap": "Sicherheitskonzept",
"tipp": "γ_G = 1,35, γ_Q = 1,5, ψ₀/ψ₁/ψ₂ je Einwirkung.",
"s27": null
},
{
"was": "Stahlprofile IPE, HEA, HEB (Querschnittswerte)",
"a24": "Kap. Stahlbau – Profiltafeln",
"fol": null,
"kap": "Stahlbau",
"tipp": "W_y, I_y, A für den Biegenachweis, z. B. IPE 140.",
"s27": null
}
];
