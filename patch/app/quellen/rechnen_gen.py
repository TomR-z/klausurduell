import json
# (Aufgabe, Schritt 1-basiert, Bezeichnung, Wert, Einheit, Rechnung mit Zahlen, [Toleranz])
D = r"""
hydro-ue02-a27|1|t|0.80|m|800/1000 · 1 m
hydro-ue02-a27|2|V_a|0.914|m³|(800 · 1 + 11 400 · 0,01) / 1000
hydro-ue02-a27|4|V_b|0.81|m³|0,80 + 0,01
hydro-ue02-a28|1|F_A|3.923|N|32,079 − 28,156
hydro-ue02-a28|2|V|0.400|l|3,923 / (1000 · 9,81) m³, mal 1000 für Liter
hydro-ue02-a28|3|m|3.270|kg|32,079 / 9,81
hydro-ue02-a28|5|m_Cu|2.10|kg|m_Zn = 3,270 − m_Cu einsetzen: m_Cu/8930 + (3,270 − m_Cu)/7100 = 0,400 · 10⁻³ nach m_Cu auflösen|0.03
hydro-ue02-a28|5|m_Zn|1.17|kg|3,270 − m_Cu|0.03
hydro-ue02-a28|6|ρ|8180|kg/m³|3,270 / (0,400 · 10⁻³)
hydro-ue03-a35|1|v₁|10|m/s|Q / A₁ = 10 / 1
hydro-ue03-a35|1|v₂|5|m/s|Q / A₂ = 10 / 2
hydro-ue03-a35|4|p₁/(ρg)|10.00|m|98 100 / 9810
hydro-ue03-a35|4|v₁²/(2g)|5.10|m|10² / (2 · 9,81)
hydro-ue03-a35|4|v₂²/(2g)|1.27|m|5² / (2 · 9,81)
hydro-ue03-a35|5|p₂/(ρg)|13.82|m|10,00 + 5,10 − 1,27
hydro-ue03-a35|5|p₂|135.6|kN/m²|13,82 · 9810 N/m², durch 1000 für kN/m²
hydro-ue04-a43|1|q|2.0|m²/s|Q / b = 10 / 5
hydro-ue04-a43|2|h_gr|0.74|m|∛(q²/g) = ∛(2² / 9,81)
hydro-ue04-a43|3|v_gr|2.70|m/s|q / h_gr = 2 / 0,74
hydro-ue04-a43|4|h_E,min|1.11|m|1,5 · h_gr = 1,5 · 0,74
hydro-ue04-a43|5|v|5.0|m/s|q / h = 2 / 0,40
hydro-ue04-a43|5|Fr|2.52||v / √(g · h) = 5,0 / √(9,81 · 0,40)
hydro-ue04-a43|5|h_E|1.67|m|h + v²/(2g) = 0,40 + 5,0² / (2 · 9,81)
hydro-ue04-a43|6|v|1.33|m/s|q / h = 2 / 1,50
hydro-ue04-a43|6|Fr|0.35||1,33 / √(9,81 · 1,50)
hydro-ue04-a43|6|h_E|1.59|m|1,50 + 1,33² / (2 · 9,81)
hydro-ue04-a41|1|v₁|0.95|m/s|Q / A₁ = 0,12 / 0,126
hydro-ue04-a41|1|v₂|3.82|m/s|Q / A₂ = 0,12 / 0,0314
hydro-ue04-a41|2|p₁|55.8|kPa|49 + 0,5 · (3,82² − 0,95²)
hydro-ue04-a41|3|S₁|7.13|kN|55,8 · 0,126 + 1,0 · 0,12 · 0,95
hydro-ue04-a41|3|S₂|2.00|kN|49 · 0,0314 + 1,0 · 0,12 · 3,82
hydro-ue04-a41|4|F_x|6.13|kN|7,13 − 2,00 · 0,5
hydro-ue04-a41|4|F_y|-1.73|kN|−2,00 · 0,866
hydro-ue04-a41|5|F_K|6.37|kN|√(6,13² + 1,73²)
hydro-ue04-a41|5|β|15.8|°|arctan(1,73 / 6,13)
hydro-ue05-a54|1|v₃|6.26|m/s|√(2 · 9,81 · 2,0)
hydro-ue05-a54|2|Q|1.88|m³/s|6,26 · 0,3
hydro-ue05-a54|4|h₂|1.78|m|2,0 − 2,09² / (2 · 9,81)
hydro-ue01-a11|2|V|4.71|l|π · 0,10² · 0,45 / 3 m³, mal 1000 für Liter
hydro-ue01-a11|4|ρ|849|kg/m³|4 kg / (4,71 · 10⁻³ m³)
hydro-ue01-a14|3|D|5.95|mm|4 · 0,073 / (1000 · 9,81 · 0,005) m, mal 1000 für mm
hydro-ue03-a32|2|v|2.55|m/s|1,0 · 10⁻³ / 3,93 · 10⁻⁴
hydro-ue03-a32|4|V₁|2.88|m³|0,8 l/s · 3600 s = 2880 l, durch 1000
hydro-ue03-a32|4|V₂|0.72|m³|0,2 l/s · 3600 s, durch 1000
hydro-ue03-a37|4|v₁|0.40|m/s|√(0,65 · 2 · 9,81 / 80)
hydro-ue03-a37|4|v₂|3.59|m/s|9 · v₁|0.03
hydro-ue03-a37|4|Q|28|l/s|0,40 · π · 0,3² / 4 m³/s, mal 1000|0.03
bauko-ue06-balken|1|A_g|6|kN|3 · 4 / 2
bauko-ue06-balken|1|M_g|6|kNm|3 · 4² / 8
bauko-ue06-balken|1|M_q|3|kNm|1,5 · 4² / 8
bauko-ue06-balken|3|M_Ed (nur g)|8.1|kNm|1,35 · 6
bauko-ue06-balken|3|M_Ed / k_mod (nur g)|13.5|kNm|8,1 / 0,6
bauko-ue06-balken|3|M_Ed (g + q)|12.6|kNm|1,35 · 6 + 1,5 · 3
bauko-ue06-balken|3|M_Ed / k_mod (g + q)|14.0|kNm|12,6 / 0,9
bauko-ue06-balken|4|f_m,d|16.6|N/mm²|0,9 · 24 / 1,3
bauko-ue06-balken|4|erf W|759|cm³|12,6 · 10⁶ Nmm / 16,6 N/mm² ergibt mm³, durch 1000 für cm³
bauko-ue06-balken|6|σ_m,d|16.4|N/mm²|12,6 · 10⁶ / (768 · 10³)
bauko-ue06-balken|6|η|0.99||16,4 / 16,6
bauko-ue06-balken|7|τ_d|1.97|N/mm²|1,5 · 12 600 / (0,5 · 19 200)
bauko-ue06-balken|7|f_v,d|2.77|N/mm²|0,9 · 4,0 / 1,3
bauko-ue06-balken|7|η|0.71||1,97 / 2,77
bauko-ue06-querdruck|2|f_c,90,d|1.92|N/mm²|1,0 · 2,5 / 1,3
bauko-ue06-querdruck|3|A_ef|280|cm²|14 · (14 + 2 · 3)
bauko-ue06-querdruck|5|σ_c,90,d|1.91|N/mm²|53,41 kN / 280 cm² ergibt kN/cm², mal 10 für N/mm²
bauko-ue06-querdruck|5|η|0.66||1,91 / (1,5 · 1,92)
bsk-ue01-stuetze|1|F|431.6|kN|44 000 kg · 9,81 m/s² ergibt N, durch 1000 für kN
bsk-ue01-stuetze|2|A (rund)|17671|mm²|π · 150² / 4
bsk-ue01-stuetze|2|σ (rund)|24.4|N/mm²|431 600 N / 17 671 mm²
bsk-ue01-stuetze|2|σ (quadratisch)|19.2|N/mm²|431 600 N / 22 500 mm²
bsk-ue01-stuetze|3|Auslastung Beton rund|49|%|24,4 / 50 · 100|0.03
bsk-ue01-stuetze|3|Auslastung Ziegel quadratisch|96|%|19,2 / 20 · 100
bsk-ue01-stuetze|4|Δl|-1.8|mm|−0,0006 · 3000 mm
bsk-ue01-stuetze|5|ε_T|0.48|‰|1,2 · 10⁻⁵ · 40 ergibt eine reine Zahl, mal 1000 für ‰
bsk-ue01-stuetze|5|ε_ges|-0.12|‰|0,48 − 0,60
bsk-ue01-stuetze|5|Δl|-0.36|mm|−0,00012 · 3000 mm
stat-ue01-lgs|2|det A|-4||16 − 20|0
stat-ue01-lgs|3|x₁|3||(4 − 1) / (2 − 1)|0
stat-ue01-lgs|4|x₃|-2.5||−5 / 2|0
stat-ue01-lgs|4|x₂|0.25||(−2 + 2,5) / 2|0
stat-ue01-rang|5|det A|-5||−(1 · 1 · 5)|0
dap-v02-gewichtung|2|w(< 30)|1.37||31,0 / 22,6
dap-v02-gewichtung|2|w(30–60)|1.02||41,7 / 40,7
dap-v02-gewichtung|2|w(60+)|0.74||27,3 / 36,7
dap-v02-ipf|3|Spaltenfaktor ohne Pkw|1.83||13,2 / 7,2
dap-v02-ipf|3|Spaltenfaktor mit Pkw|0.94||86,8 / 92,8
dap-l03-normal|1|z|2||(189 − 175) / 7|0
dap-l03-normal|3|Anteil|81.9|%|34,15 + 47,75
bauko-ue01-decke|1|Σ g|1.34|kN/m²|0,88 + 0,03 + 0,19 + 0,10 + 0,14
bauko-ue01-decke|4|q_k,ges|3.2|kN/m²|2,0 + 1,2
bauko-ue01-decke|5|q_k (Balken)|1.92|kN/m|3,2 · 0,6
bauko-ue02-schnee|1|s_k|0.63|kN/m²|0,25 + 1,91 · ((200 + 140) / 760)²
bauko-ue02-schnee|3|μ₁|0.67||0,8 · 25 / 30
bauko-ue02-schnee|4|s|0.57|kN/m²|0,67 · 1,0 · 1,0 · 0,85
bauko-ue02-schnee|4|s pro Sparren|0.37|kN/m|0,57 · 0,65
bauko-ue02-schnee|5|F_S|0.028|kN|0,043 · 0,65
bauko-ue02-wind|2|e/4|1.5|m|6 / 4
bauko-ue02-wind|2|e/10|0.6|m|6 / 10
bauko-ue02-wind|3|c_pe,10|0.47||0,4 + (0,6 − 0,4) / 15 · 5
bauko-ue02-wind|4|w_H|0.20|kN/m|0,47 · 0,65 · 0,65
bauko-ak2022-stuetze|1|M_g|-7.91|kNm|−0,125 · 4,50 · 3,75²
bauko-ak2022-stuetze|1|M_s|-3.69|kNm|−0,125 · 2,10 · 3,75²
bauko-ak2022-stuetze|3|M_Ed|16.21|kNm|1,35 · 7,91 + 1,5 · 3,69
bauko-ak2022-stuetze|4|η|1.22||2,03 / 1,66
bauko-ak2022-durch|3|l/300|1.49|cm|447 cm / 300
bauko-ak2022-durch|4|w_fin|1.79|cm|0,79 · 1,8 + 0,25 + 0,6 · 0,20
bauko-ak2022-durch|4|l/200|2.24|cm|447 cm / 200
bauko-ak2022-durch|5|w_net,fin|1.42|cm|0,79 · 1,8
bauko-hue1-dach|1|g_Sparren|0.064|kN/m|5,0 · 0,08 · 0,16
bauko-hue1-dach|2|g′|0.73|kN/m|0,63 / cos(30°)
bauko-hue1-dach|3|s_k|1.09|kN/m²|1,25 · (0,19 + 0,91 · ((519 + 140) / 760)²)
bauko-hue1-dach|4|s|0.87|kN/m²|0,8 · 1,09
bauko-hue1-dach|4|s pro Sparren|0.56|kN/m|0,87 · 0,64
bauko-ue06-stahl|3|erf W|53.6|cm³|1260 kNcm / 23,5 kN/cm²
bauko-ue06-stahl|4|η|0.69||1260 / 77,3 / 23,5
bauko-verband|1|H_d|120|kN|1,5 · 80
bauko-verband|2|Z_d|169.7|kN|120 / 0,707
bauko-verband|3|A|722|mm²|169 700 N / 235 N/mm²
bauko-verband|4|d|30.3|mm|√(4 · 722 / π)
bauko-knick-stuetze|2|i|4.04|cm|14 / √12
bauko-knick-stuetze|2|λ|80.9||327 / 4,04
bauko-knick-stuetze|4|σ_c,0,d|2.73|N/mm²|53,41 kN / 196 cm² ergibt kN/cm², mal 10 für N/mm²
bauko-knick-stuetze|4|f_c,0,d|16.2|N/mm²|1,0 · 21 / 1,3
bauko-knick-stuetze|4|η|0.38||2,73 / (0,44 · 16,2)
bauko-ue01-massivdecke|1|Estrich|1.32|kN/m²|0,22 · 6
bauko-ue01-massivdecke|4|g_k|5.56|kN/m²|1,32 + 0,02 + 0,04 + 4,0 + 0,18
bauko-ue01-unterzug|3|p₂|3.43|kN/m|1,143 · 2,0 · 1,5
bauko-ue01-unterzug|3|g₂|2.33|kN/m|1,143 · 1,24 · 1,5 + 0,2
bauko-ue01-unterzug|4|P₂|10.71|kN|1,25 · 3,43 · 2,5
bauko-ue01-unterzug|4|G₂|7.27|kN|1,25 · 2,33 · 2,5
bauko-ak2020-decke|1|g_k|1.08|kN/m|1,51 · 0,625 + 0,05 + 0,09
bauko-ak2020-decke|1|q_k (A3)|1.25|kN/m|2,0 · 0,625
bauko-ak2020-decke|3|M_Ed|4.06|kNm|1,35 · 1,32 + 1,5 · 1,52
bauko-ak2020-decke|4|η|0.80||1,19 / 1,48
bauko-ak2020-decke|5|τ|0.164|kN/cm²|1,5 · 6,99 / (0,5 · 128)
bauko-ak2020-decke|5|η|0.67||0,164 / 0,246
phys-b1-a1|3|A|4942|ac|2 · 10⁷ m² / 4046,856 m²
phys-b1-a1|4|V|1443|ac·ft|4942 · 0,292
phys-b1-a4|2|A₁|24|m|½ · 2 · 24
phys-b1-a4|2|A₂|192|m|8 · 24
phys-b1-a4|3|Rechteck 10–16 s|72|m|6 · 12
phys-b1-a4|4|s|300|m|24 + 192 + 12 + 72
phys-b4-a1|4|F₃x|12.5|N|2 · 3 · cos(50°) + 10 · cos(30°)
phys-b4-a1|4|F₃y|-10.4|N|2 · 3 · sin(50°) + 10 · sin(30°) − 20
phys-b4-a1|4|F₃|16.3|N|√(12,5² + 10,4²)
phys-b4-a1|4|φ|-39.7|°|arctan(−10,4 / 12,5)
phys-b4-a2|3|a|0.914|m/s²|F / (m₁ + m₂) = 3,2 / (2,3 + 1,2)
phys-b4-a2|3|F_K (a)|1.10|N|m₂ · F / (m₁ + m₂) = 1,2 · 3,2 / 3,5
phys-b4-a2|3|F_K (b)|2.10|N|m₁ · F / (m₁ + m₂) = 2,3 · 3,2 / 3,5
phys-b4-a3|4|F_S|6.08|N|2,3 · (3,7 · 9,81 · sin(30°) − 2,3) / (3,7 + 2,3)
phys-b4-a3|4|F_max|18.1|N|3,7 · 9,81 · sin(30°)
phys-b4-a5|3|F_res|120|N|60 · 2
phys-b4-a5|3|F_M|621|N|60 · √(2² + 9,81² + 2 · 2 · 9,81 · sin(10°))
phys-b4-a6|3|F_S (a)|528|N|95 · (9,81 + 1,3) / 2
phys-b4-a6|3|F_S (b)|1055|N|95 · (9,81 + 1,3)
binf-ue02-dual|3|43 als Dualzahl|101011||Reste von unten nach oben lesen|0
binf-ue02-dual|4|Kontrolle|43||32 + 8 + 2 + 1|0
"""
R = {}
for line in D.strip().split("\n"):
    p = line.split("|")
    tid, st, l, w, u, h = p[:6]
    e = {"l": l, "w": float(w), "u": u, "h": h}
    if len(p) > 6: e["t"] = float(p[6])
    R.setdefault(tid, {}).setdefault(str(int(st)-1), []).append(e)
open("../patch/2026-11-04 Rechenwerte Selbst rechnen.js","w",encoding="utf-8").write(
 "/* Selbst rechnen (App 1.6): Zwischenergebnisse je Lösungsweg-Aufgabe und Schritt (0-basiert). l = Größe, w = Wert, u = Einheit, h = Rechnung mit Zahlen (Hilfe Stufe 2), t = Toleranz (Standard 2 %). */\nconst RECHNEN = " + json.dumps(R, ensure_ascii=False, indent=1) + ";\n")
print(sum(len(v) for t in R.values() for v in t.values()), "Eingaben in", len(R), "Aufgaben")
