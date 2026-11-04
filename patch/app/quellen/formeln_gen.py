import json
# Fach | Thema | Name | Formel | Erklärung
D = r"""
hydro|Eigenschaften des Wassers|Dichte und Wichte|ρ ≈ 1000 kg/m³ · γ = ρ · g ≈ 9,81 kN/m³|Dichte = Masse pro Volumen, Wichte = Gewicht pro Volumen. Wasser ist bei 4 °C am dichtesten.
hydro|Eigenschaften des Wassers|Kapillare Steighöhe|h = 4 · σ / (ρ · g · d)|σ ≈ 0,073 N/m (Oberflächenspannung Wasser), d = Röhrchendurchmesser. Je enger, desto höher. Quecksilber sinkt dagegen ab.
hydro|Eigenschaften des Wassers|Kinematische Viskosität|ν = η / ρ|η = dynamische Viskosität in Pa·s, ν in m²/s. Beide sinken mit steigender Temperatur.
hydro|Hydrostatik 1|Hydrostatischer Druck|p = ρ · g · h|Überdruck in der Tiefe h, wächst linear. Wirkt in alle Richtungen gleich und immer senkrecht auf eine Fläche.
hydro|Hydrostatik 1|Absoluter Druck|p_abs = p_atm + ρ · g · h|p_atm ≈ 101 325 Pa ≈ 1 bar. Im Bauwesen rechnet man meist mit dem Überdruck.
hydro|Hydrostatik 1|Geschichtete Flüssigkeiten|p = Σ ρᵢ · g · hᵢ|Druck an der Unterkante aufsummieren: Jede Schicht trägt mit ihrer eigenen Dichte bei, der Druckverlauf knickt an der Grenze.
hydro|Hydrostatik 1|Druckkraft auf eine ebene Fläche|F = ρ · g · h_s · A|h_s = Tiefe des Flächenschwerpunkts. Bei einer Rechteckwand bis zur Oberfläche greift F in 2/3 der Wassertiefe an.
hydro|Hydrostatik 2|Auftrieb (Archimedes)|F_A = ρ_W · g · V_verdrängt|Der Auftrieb ist das Gewicht des verdrängten Wassers – egal, wie tief der Körper liegt.
hydro|Hydrostatik 2|Schwimmen|F_A = F_G  →  ρ_W · V_eingetaucht = ρ_K · V_K|Ein Körper schwimmt, wenn der Auftrieb das Gewicht ausgleicht. Tiefgang t = ρ_K / ρ_W · Höhe (bei einem Quader).
hydro|Hydrostatik 2|Gekrümmte Flächen|F_H = Druckkraft auf die senkrechte Projektion · F_V = Gewicht des Wasserkörpers über der Fläche|Die Gesamtkraft ist F = √(F_H² + F_V²).
hydro|Hydrodynamik|Durchfluss|Q = v · A  [m³/s]|v = mittlere Fließgeschwindigkeit, A = durchflossene Fläche. Kreisrohr: A = π · d² / 4.
hydro|Hydrodynamik|Kontinuitätsgleichung|Q₁ = Q₂  →  v₁ · A₁ = v₂ · A₂|Gilt ohne Speicherung, stationär und bei konstanter Dichte. Engeres Rohr → schnelleres Wasser.
hydro|Energiesatz|Bernoulli (Energiehöhe)|z + p/(ρ·g) + v²/(2·g) = H = konst.|Lagehöhe + Druckhöhe + Geschwindigkeitshöhe, alles in Metern. Mit Verlusten: H₁ = H₂ + h_v.
hydro|Energiesatz|Ausfluss (Torricelli)|v = √(2 · g · h)|Ausflussgeschwindigkeit aus einer Öffnung in der Tiefe h unter dem Wasserspiegel.
hydro|Energiesatz|Örtlicher Verlust|h_v = ζ · v² / (2 · g)|ζ = Verlustbeiwert (Einlauf, Krümmer, Schieber …). Plötzliche Erweiterung (Borda-Carnot): h_v = (v₁ − v₂)² / (2 · g).
hydro|Impulssatz|Impulssatz|Σ F = ρ · Q · (v₂ − v₁)|Vektoriell, für jede Richtung einzeln. Rechne mit Stützkräften an den Schnitten des Kontrollvolumens.
hydro|Impulssatz|Stützkraft|S = p · A + ρ · Q · v|Druckkraft plus Impulsstrom, wirkt immer auf das Kontrollvolumen hin. Kraft auf einen Krümmer: Vektorsumme der Stützkräfte.
hydro|Gerinneströmung|Abfluss pro Meter Breite|q = Q / b  [m²/s]|Bezugsgröße im Rechteckgerinne.
hydro|Gerinneströmung|Grenztiefe|h_gr = ∛(q² / g) · v_gr = √(g · h_gr) · h_E,min = 1,5 · h_gr|Bei der Grenztiefe ist die Energiehöhe minimal und Fr = 1.
hydro|Gerinneströmung|Froude-Zahl|Fr = v / √(g · h)|Fr < 1 strömend (ruhig), Fr > 1 schießend, Fr = 1 Grenzzustand.
hydro|Gerinneströmung|Spezifische Energiehöhe|h_E = h + v² / (2 · g)|Bezogen auf die Sohle. Zu jedem h_E > h_E,min gibt es eine strömende und eine schießende Wassertiefe.
phys|Einheiten|SI-Basiseinheiten|m · kg · s · A · K · mol · cd|Alle anderen Einheiten sind daraus abgeleitet, z. B. 1 N = 1 kg · m/s², 1 Pa = 1 N/m², 1 J = 1 N · m.
phys|Einheiten|Vorsätze|k = 10³ · M = 10⁶ · G = 10⁹ · m = 10⁻³ · µ = 10⁻⁶ · n = 10⁻⁹|Beim Umrechnen von Flächen und Volumen die Potenz mitnehmen: 1 m² = 10⁶ mm², 1 m³ = 1000 l.
phys|Geradlinige Bewegung|Geschwindigkeit und Beschleunigung|v = Δx / Δt · a = Δv / Δt|Momentanwerte: v = dx/dt, a = dv/dt. Weg = Fläche unter der v(t)-Kurve.
phys|Geradlinige Bewegung|Gleichmäßig beschleunigt|v = v₀ + a · t · x = x₀ + v₀ · t + ½ · a · t²|Gilt nur für konstante Beschleunigung. Freier Fall: a = g ≈ 9,81 m/s².
phys|Geradlinige Bewegung|Ohne Zeit|v² = v₀² + 2 · a · Δx|Praktisch, wenn die Zeit nicht gegeben ist, z. B. Bremsweg.
phys|Vektoren|Betrag|\|a\| = √(a_x² + a_y² + a_z²)|Länge des Vektors. Komponenten aus Betrag und Winkel: a_x = \|a\| · cos α, a_y = \|a\| · sin α.
phys|Vektoren|Skalarprodukt|a · b = \|a\| · \|b\| · cos φ = a_x b_x + a_y b_y + a_z b_z|Ergibt eine Zahl. Null, wenn die Vektoren senkrecht stehen.
phys|Vektoren|Kreuzprodukt|\|a × b\| = \|a\| · \|b\| · sin φ|Ergibt einen Vektor senkrecht zu a und b (Rechte-Hand-Regel). Betrag = aufgespannte Fläche.
phys|Bewegung in 2D/3D|Schiefer Wurf|x = v₀ · cos α · t · y = v₀ · sin α · t − ½ · g · t²|Waagerecht gleichförmig, senkrecht gleichmäßig beschleunigt. Wurfweite auf gleicher Höhe: W = v₀² · sin 2α / g (größte bei 45°).
phys|Bewegung in 2D/3D|Kreisbewegung|v = 2π · r / T · a_z = v² / r|Gleichförmige Kreisbewegung: Betrag von v konstant, die Beschleunigung zeigt zum Mittelpunkt.
phys|Bewegung in 2D/3D|Relativbewegung|v_A,Boden = v_A,Luft + v_Luft,Boden|Geschwindigkeiten vektoriell addieren, z. B. Flugzeug mit Wind.
phys|Newtonsche Axiome|2. Axiom|Σ F = m · a  (allgemein F = dp/dt, p = m · v)|Die resultierende Kraft bestimmt die Beschleunigung. Ohne resultierende Kraft bleibt v konstant (1. Axiom).
phys|Newtonsche Axiome|3. Axiom|F₁₂ = −F₂₁|Kräfte treten immer paarweise auf, an zwei verschiedenen Körpern – sie heben sich deshalb nicht auf.
phys|Newtonsche Axiome|Gewichtskraft|F_G = m · g|Masse in kg ist überall gleich, die Gewichtskraft hängt vom Ort ab.
phys|Newtonsche Axiome|Schiefe Ebene|F_H = m · g · sin α · F_N = m · g · cos α|Hangabtrieb parallel, Normalkraft senkrecht zur Ebene.
phys|Newtonsche Axiome|Zentripetalkraft|F_Z = m · v² / r|Die Kraft, die einen Körper auf der Kreisbahn hält, zeigt zum Mittelpunkt.
bsk|Mechanische Eigenschaften|Spannung und Dehnung|σ = F / A · ε = Δl / l₀|σ in N/mm², ε dimensionslos (oft in ‰ oder %).
bsk|Mechanische Eigenschaften|Hookesches Gesetz|σ = E · ε|Gilt im linear-elastischen Bereich. E = Steigung der σ-ε-Linie (Steifigkeit).
bsk|Mechanische Eigenschaften|Querdehnzahl|ν = −ε_quer / ε_längs|Beton ≈ 0,2, Stahl ≈ 0,3. Zieht man einen Stab, wird er dünner.
bsk|Mechanische Eigenschaften|Auslastung|η = σ / f|Spannung im Verhältnis zur Festigkeit, ≤ 1 bzw. ≤ 100 %.
bsk|Physikalische Eigenschaften|Rohdichte und Reindichte|ρ_R = m / V (mit Poren) · ρ = m / V_Feststoff|Die Reindichte hängt nur vom Material ab, die Rohdichte sinkt mit jedem Porenanteil.
bsk|Physikalische Eigenschaften|Porosität|p = V_P / V = 1 − ρ_R / ρ|Porenvolumen im Verhältnis zum Gesamtvolumen.
bsk|Physikalische Eigenschaften|Wasseraufnahme|W_m = (m_nass − m_trocken) / m_trocken|Massebezogen, in %.
bsk|Physikalische Eigenschaften|Wärmedehnung|ε_T = α_T · ΔT · Δl = α_T · ΔT · l|Beton und Stahl α_T ≈ 1,0–1,2 · 10⁻⁵ 1/K – deshalb funktioniert Stahlbeton.
bsk|Physikalische Eigenschaften|Wärmedurchgang|R = d / λ · U = 1 / (R_si + Σ dᵢ/λᵢ + R_se)|λ = Wärmeleitfähigkeit in W/(m·K). Kleines λ und große Dicke dämmen gut.
bsk|Chemische Grundlagen|Bindungsart nach ΔEN|ΔEN > 1,7 ionisch · 0,4–1,7 polar kovalent · < 0,4 unpolar kovalent|Je größer der Unterschied der Elektronegativitäten, desto ionischer die Bindung. Metalle untereinander: metallische Bindung.
bsk|Chemische Grundlagen|pH-Wert|pH = −lg c(H₃O⁺)|pH 7 neutral, darunter sauer, darüber basisch. Frischer Beton ist mit pH ≈ 13 stark basisch und schützt so den Stahl.
bsk|Gefüge und Kristalle|Packungsdichte|kfz und hdp ≈ 74 % · krz ≈ 68 %|Kubisch flächenzentriert und hexagonal dichteste Packung sind am dichtesten gepackt.
bsk|Gefüge und Kristalle|Feinkorn (Hall-Petch)|σ_y = σ₀ + k / √d|Kleinere Körner d → höhere Streckgrenze. Feinkorn macht Stahl fester und zugleich zäher.
bauko|Sicherheitskonzept|Grundprinzip|E_d ≤ R_d  ·  η = E_d / R_d ≤ 1|Bemessungswert der Einwirkung höchstens so groß wie der Bemessungswert des Widerstands.
bauko|Sicherheitskonzept|Grundkombination (GZT)|E_d = 1,35 · G_k + 1,5 · Q_k,1 + 1,5 · Σ ψ₀,ᵢ · Q_k,ᵢ|Leiteinwirkung voll, weitere veränderliche Einwirkungen mit ψ₀ abgemindert. Günstig wirkendes G mit 1,0, günstiges Q mit 0.
bauko|Sicherheitskonzept|Widerstand|R_d = k_mod · R_k / γ_M|Holz: γ_M = 1,3. k_mod hängt von Nutzungsklasse und Lasteinwirkungsdauer (KLED) ab – maßgebend ist die kürzeste Last der Kombination.
bauko|Lasten|Flächenlast aus Wichte|g = γ · d|γ in kN/m³, d in m → kN/m². Beispiel Stahlbeton 25 kN/m³ · 0,16 m = 4,0 kN/m².
bauko|Lasten|Flächenlast → Streckenlast|q [kN/m] = q [kN/m²] · e|e = Einzugsbreite bzw. Achsabstand, z. B. Balkenabstand.
bauko|Lasten|Last auf geneigtem Dach|g′ = g / cos α|Eigenlast entlang der Dachfläche, umgerechnet auf die Grundrissprojektion. Schnee wird schon auf die Grundfläche bezogen.
bauko|Einwirkungen|Schneelast auf dem Dach|s = μ₁ · C_e · C_t · s_k|Meist C_e = C_t = 1,0. μ₁ = 0,8 bis 30°, 0,8 · (60° − α)/30° bis 60°, darüber 0.
bauko|Einwirkungen|Schnee am Boden (Zone 2)|s_k = 0,25 + 1,91 · ((A + 140) / 760)²  ≥ 0,85 kN/m²|A = Geländehöhe über NN in m. Zone 1: 0,19 + 0,91 · (…)² ≥ 0,65; Zone 1a und 2a: Zone-Wert · 1,25.
bauko|Einwirkungen|Wind|w_e = c_pe · q_p|q_p = Geschwindigkeitsdruck (nach Windzone und Höhe), c_pe aus den Bereichen F, G, H, I, J; Zwischenwerte linear interpolieren. e = min(b; 2h).
bauko|Rechenweg|Einfeldträger mit Streckenlast|max M = q · l² / 8 · A = B = q · l / 2|Moment in Feldmitte, Querkraft am Auflager.
bauko|Rechenweg|Einfeldträger mit Einzellast in der Mitte|max M = F · l / 4 · A = B = F / 2|
bauko|Rechenweg|Kragarm|M = q · l² / 2 bzw. M = F · l|Größtes Moment an der Einspannung.
bauko|Holzbemessung|Querschnittswerte Rechteck|A = b · h · W = b · h² / 6 · I = b · h³ / 12|Die Höhe geht ins Quadrat bzw. in die dritte Potenz ein – hochkant ist viel tragfähiger.
bauko|Holzbemessung|Biegung|σ_m,d = M_d / W ≤ f_m,d = k_mod · f_m,k / γ_M|Erforderliches Widerstandsmoment: erf W = M_d / f_m,d.
bauko|Holzbemessung|Schub|τ_d = 1,5 · V_d / (k_cr · b · h) ≤ f_v,d|k_cr berücksichtigt Risse im Holz.
bauko|Holzbemessung|Querdruck|σ_c,90,d = F_d / A_ef ≤ k_c,90 · f_c,90,d|A_ef: Aufstandslänge auf jeder Seite um bis zu 30 mm verlängern.
bauko|Holzbemessung|Knicken|λ = l_ef / i · i = h / √12 · σ_c,0,d ≤ k_c · f_c,0,d|l_ef = β · l aus dem Eulerfall, k_c aus der Tabelle über λ_rel.
bauko|Holzbemessung|Durchbiegung Einfeldträger|w = 5 · q · l⁴ / (384 · E · I)|Grenzen: w_inst ≤ l/300, w_net,fin ≤ l/300, w_fin ≤ l/200. Kriechen: w_fin = w_G · (1 + k_def) + w_Q · (1 + ψ₂ · k_def).
bauko|Stahl und Stahlbeton|Stahl auf Biegung|σ = M_Ed / W ≤ f_y,d = f_y / γ_M0|S235: f_y = 23,5 kN/cm², γ_M0 = 1,0. erf W = M_Ed / f_y,d, dann Profil aus der Tabelle wählen.
bauko|Stahl und Stahlbeton|Zugstab|erf A = N_Ed / f_y,d|Rundstab: d = √(4 · A / π).
bauko|Schnittgrößen und Aussteifung|Gleichgewicht|Σ H = 0 · Σ V = 0 · Σ M = 0|Drei Bedingungen in der Ebene – damit lassen sich bei statisch bestimmten Systemen alle Auflagerkräfte bestimmen.
bauko|Schnittgrößen und Aussteifung|Diagonale im Verband|Z = H / cos α|α = Winkel zwischen Diagonale und Horizontalkraft-Richtung.
binf|Programmrahmen|Grundgerüst|public class Name { public static void main(String[] args) { … } }|Dateiname = Klassenname + .java. Jede Anweisung endet mit ;
binf|Programmrahmen|Ausgabe und Escape-Sequenzen|System.out.println(…) · \\n Zeilenumbruch · \\t Tab · \\" Anführungszeichen · \\\\ Backslash|print ohne, println mit Zeilenumbruch am Ende.
binf|Java und JDK|Übersetzen und Ausführen|javac Name.java  →  java Name|javac erzeugt Bytecode (Name.class), die JVM führt ihn aus.
binf|Datentypen|Ganzzahlen|byte 8 · short 16 · int 32 · long 64 Bit|long-Literale mit L, z. B. 12345678910L. Wertebereich int etwa ±2,1 · 10⁹.
binf|Datentypen|Kommazahlen, Zeichen, Wahrheitswerte|float 32 (Literal 30.5f) · double 64 · char 16 ('a') · boolean (true/false)|Kommazahlen mit Punkt. String ist kein primitiver Typ und steht in "…".
binf|Datentypen|Dualsystem|n Bit → 2ⁿ Werte · Dezimal → dual: fortgesetzt durch 2 teilen, Reste von unten lesen|Stellenwerte 1, 2, 4, 8, 16, 32, … Beispiel: 43 = 32 + 8 + 2 + 1 = 101011.
binf|Operatoren|Rechnen mit Ganzzahlen|7 / 2 = 3 · 7 % 2 = 1 · 7.0 / 2 = 3.5|/ bei zwei int schneidet ab, % liefert den Rest.
binf|Operatoren|Logik|&& und · || oder · ! nicht|&& und || sind Kurzschluss-Operatoren: Die rechte Seite wird nur ausgewertet, wenn nötig. & und | werten immer beide Seiten aus.
binf|Operatoren|Kurzformen|x++ · x-- · x += 5 · x *= 2|x++ liefert erst den alten Wert und erhöht dann, ++x erhöht zuerst.
stat|Matrizen|Transponieren|(A′)′ = A · (A + B)′ = A′ + B′ · (A · B)′ = B′ · A′|Beim Produkt dreht sich die Reihenfolge um. A′A ist immer symmetrisch.
stat|Matrizen|Matrixprodukt|(A · B)ᵢⱼ = Σₖ aᵢₖ · bₖⱼ|Zeile mal Spalte. Nur möglich, wenn Spaltenzahl von A = Zeilenzahl von B. Im Allgemeinen A · B ≠ B · A.
stat|Matrizen|Determinante|2×2: det A = a · d − b · c · 3×3: Regel von Sarrus|det A = 0 heißt: A ist singulär und nicht invertierbar.
stat|Matrizen|Inverse 2×2|A⁻¹ = 1/(a·d − b·c) · (d −b / −c a)|Diagonale tauschen, Nebendiagonale mit Minus, durch die Determinante teilen.
stat|Matrizen|Norm|‖x‖ = √(x′x)|Länge eines Vektors. x′y = 0 heißt orthogonal.
stat|Gleichungssysteme|Lösbarkeit|A · x = b eindeutig lösbar ⇔ det A ≠ 0 ⇔ rg A = n|Dann ist x = A⁻¹ · b. Lösen in der Praxis mit dem Gauß-Verfahren (Stufenform).
dap|Gewichtung und Post-Processing|Gewichtungsfaktor|w = Anteil in der Grundgesamtheit / Anteil in der Stichprobe|w > 1: Gruppe ist in der Stichprobe unterrepräsentiert.
dap|Gewichtung und Post-Processing|Gewichteter Mittelwert|x̄_w = Σ wᵢ · xᵢ / Σ wᵢ|Mit den Gewichten werden die Gruppen auf ihren wahren Anteil gebracht.
dap|Gewichtung und Post-Processing|Hochrechnungsfaktor|ef = N / n|Wie viele Personen der Grundgesamtheit eine Antwort vertritt.
dap|Verteilungen|Standardisieren|z = (x − μ) / σ|Standardnormalverteilung: μ = 0, σ = 1.
dap|Verteilungen|68-95-99,7-Regel|μ ± 1σ ≈ 68 % · μ ± 2σ ≈ 95 % · μ ± 3σ ≈ 99,7 %|Gilt für die Normalverteilung.
dap|Verteilungen|R-Funktionen|pnorm(x, μ, σ) Anteil unter x · qnorm(p) Quantil · dnorm Dichte · rnorm(n) Zufallszahlen|p- = Verteilungsfunktion, q- = Quantil, d- = Dichte, r- = Zufallszahlen – auch für binom, pois, unif.
dap|R-Grundlagen|Grundbefehle|x <- c(1, 2, 3) · mean(x) · sd(x) · summary(x) · df$spalte|<- weist zu, c() baut einen Vektor, $ greift auf eine Spalte eines data.frame zu.
"""
F=[]
for line in D.strip().split("\n"):
    f,t,n,x,e = (line.replace("\\|","¦").split("|")+[""])[:5]
    F.append({"f":f,"t":t,"n":n,"x":x.replace("¦","|").replace("\\\\","\\"),"e":e.replace("¦","|")})
open("../patch/2026-11-04 Formelsammlung.js","w",encoding="utf-8").write("/* Formelsammlung (App 1.6): eigene Zusammenstellung je Fach und Thema, in der App durchsuchbar und von den Fragen verlinkt */\nconst FORMELN = " + json.dumps(F, ensure_ascii=False, indent=0) + ";\n")
print(len(F),"Formeln")
