/* Formelsammlung (App 1.6): eigene Zusammenstellung je Fach und Thema, in der App durchsuchbar und von den Fragen verlinkt */
const FORMELN = [
{
"f": "hydro",
"t": "Eigenschaften des Wassers",
"n": "Dichte und Wichte",
"x": "ρ ≈ 1000 kg/m³ · γ = ρ · g ≈ 9,81 kN/m³",
"e": "Dichte = Masse pro Volumen, Wichte = Gewicht pro Volumen. Wasser ist bei 4 °C am dichtesten."
},
{
"f": "hydro",
"t": "Eigenschaften des Wassers",
"n": "Kapillare Steighöhe",
"x": "h = 4 · σ / (ρ · g · d)",
"e": "σ ≈ 0,073 N/m (Oberflächenspannung Wasser), d = Röhrchendurchmesser. Je enger, desto höher. Quecksilber sinkt dagegen ab."
},
{
"f": "hydro",
"t": "Eigenschaften des Wassers",
"n": "Kinematische Viskosität",
"x": "ν = η / ρ",
"e": "η = dynamische Viskosität in Pa·s, ν in m²/s. Beide sinken mit steigender Temperatur."
},
{
"f": "hydro",
"t": "Hydrostatik 1",
"n": "Hydrostatischer Druck",
"x": "p = ρ · g · h",
"e": "Überdruck in der Tiefe h, wächst linear. Wirkt in alle Richtungen gleich und immer senkrecht auf eine Fläche."
},
{
"f": "hydro",
"t": "Hydrostatik 1",
"n": "Absoluter Druck",
"x": "p_abs = p_atm + ρ · g · h",
"e": "p_atm ≈ 101 325 Pa ≈ 1 bar. Im Bauwesen rechnet man meist mit dem Überdruck."
},
{
"f": "hydro",
"t": "Hydrostatik 1",
"n": "Geschichtete Flüssigkeiten",
"x": "p = Σ ρᵢ · g · hᵢ",
"e": "Druck an der Unterkante aufsummieren: Jede Schicht trägt mit ihrer eigenen Dichte bei, der Druckverlauf knickt an der Grenze."
},
{
"f": "hydro",
"t": "Hydrostatik 1",
"n": "Druckkraft auf eine ebene Fläche",
"x": "F = ρ · g · h_s · A",
"e": "h_s = Tiefe des Flächenschwerpunkts. Bei einer Rechteckwand bis zur Oberfläche greift F in 2/3 der Wassertiefe an."
},
{
"f": "hydro",
"t": "Hydrostatik 2",
"n": "Auftrieb (Archimedes)",
"x": "F_A = ρ_W · g · V_verdrängt",
"e": "Der Auftrieb ist das Gewicht des verdrängten Wassers – egal, wie tief der Körper liegt."
},
{
"f": "hydro",
"t": "Hydrostatik 2",
"n": "Schwimmen",
"x": "F_A = F_G  →  ρ_W · V_eingetaucht = ρ_K · V_K",
"e": "Ein Körper schwimmt, wenn der Auftrieb das Gewicht ausgleicht. Tiefgang t = ρ_K / ρ_W · Höhe (bei einem Quader)."
},
{
"f": "hydro",
"t": "Hydrostatik 2",
"n": "Gekrümmte Flächen",
"x": "F_H = Druckkraft auf die senkrechte Projektion · F_V = Gewicht des Wasserkörpers über der Fläche",
"e": "Die Gesamtkraft ist F = √(F_H² + F_V²)."
},
{
"f": "hydro",
"t": "Hydrodynamik",
"n": "Durchfluss",
"x": "Q = v · A  [m³/s]",
"e": "v = mittlere Fließgeschwindigkeit, A = durchflossene Fläche. Kreisrohr: A = π · d² / 4."
},
{
"f": "hydro",
"t": "Hydrodynamik",
"n": "Kontinuitätsgleichung",
"x": "Q₁ = Q₂  →  v₁ · A₁ = v₂ · A₂",
"e": "Gilt ohne Speicherung, stationär und bei konstanter Dichte. Engeres Rohr → schnelleres Wasser."
},
{
"f": "hydro",
"t": "Energiesatz",
"n": "Bernoulli (Energiehöhe)",
"x": "z + p/(ρ·g) + v²/(2·g) = H = konst.",
"e": "Lagehöhe + Druckhöhe + Geschwindigkeitshöhe, alles in Metern. Mit Verlusten: H₁ = H₂ + h_v."
},
{
"f": "hydro",
"t": "Energiesatz",
"n": "Ausfluss (Torricelli)",
"x": "v = √(2 · g · h)",
"e": "Ausflussgeschwindigkeit aus einer Öffnung in der Tiefe h unter dem Wasserspiegel."
},
{
"f": "hydro",
"t": "Energiesatz",
"n": "Örtlicher Verlust",
"x": "h_v = ζ · v² / (2 · g)",
"e": "ζ = Verlustbeiwert (Einlauf, Krümmer, Schieber …). Plötzliche Erweiterung (Borda-Carnot): h_v = (v₁ − v₂)² / (2 · g)."
},
{
"f": "hydro",
"t": "Impulssatz",
"n": "Impulssatz",
"x": "Σ F = ρ · Q · (v₂ − v₁)",
"e": "Vektoriell, für jede Richtung einzeln. Rechne mit Stützkräften an den Schnitten des Kontrollvolumens."
},
{
"f": "hydro",
"t": "Impulssatz",
"n": "Stützkraft",
"x": "S = p · A + ρ · Q · v",
"e": "Druckkraft plus Impulsstrom, wirkt immer auf das Kontrollvolumen hin. Kraft auf einen Krümmer: Vektorsumme der Stützkräfte."
},
{
"f": "hydro",
"t": "Gerinneströmung",
"n": "Abfluss pro Meter Breite",
"x": "q = Q / b  [m²/s]",
"e": "Bezugsgröße im Rechteckgerinne."
},
{
"f": "hydro",
"t": "Gerinneströmung",
"n": "Grenztiefe",
"x": "h_gr = ∛(q² / g) · v_gr = √(g · h_gr) · h_E,min = 1,5 · h_gr",
"e": "Bei der Grenztiefe ist die Energiehöhe minimal und Fr = 1."
},
{
"f": "hydro",
"t": "Gerinneströmung",
"n": "Froude-Zahl",
"x": "Fr = v / √(g · h)",
"e": "Fr < 1 strömend (ruhig), Fr > 1 schießend, Fr = 1 Grenzzustand."
},
{
"f": "hydro",
"t": "Gerinneströmung",
"n": "Spezifische Energiehöhe",
"x": "h_E = h + v² / (2 · g)",
"e": "Bezogen auf die Sohle. Zu jedem h_E > h_E,min gibt es eine strömende und eine schießende Wassertiefe."
},
{
"f": "phys",
"t": "Einheiten",
"n": "SI-Basiseinheiten",
"x": "m · kg · s · A · K · mol · cd",
"e": "Alle anderen Einheiten sind daraus abgeleitet, z. B. 1 N = 1 kg · m/s², 1 Pa = 1 N/m², 1 J = 1 N · m."
},
{
"f": "phys",
"t": "Einheiten",
"n": "Vorsätze",
"x": "k = 10³ · M = 10⁶ · G = 10⁹ · m = 10⁻³ · µ = 10⁻⁶ · n = 10⁻⁹",
"e": "Beim Umrechnen von Flächen und Volumen die Potenz mitnehmen: 1 m² = 10⁶ mm², 1 m³ = 1000 l."
},
{
"f": "phys",
"t": "Geradlinige Bewegung",
"n": "Geschwindigkeit und Beschleunigung",
"x": "v = Δx / Δt · a = Δv / Δt",
"e": "Momentanwerte: v = dx/dt, a = dv/dt. Weg = Fläche unter der v(t)-Kurve."
},
{
"f": "phys",
"t": "Geradlinige Bewegung",
"n": "Gleichmäßig beschleunigt",
"x": "v = v₀ + a · t · x = x₀ + v₀ · t + ½ · a · t²",
"e": "Gilt nur für konstante Beschleunigung. Freier Fall: a = g ≈ 9,81 m/s²."
},
{
"f": "phys",
"t": "Geradlinige Bewegung",
"n": "Ohne Zeit",
"x": "v² = v₀² + 2 · a · Δx",
"e": "Praktisch, wenn die Zeit nicht gegeben ist, z. B. Bremsweg."
},
{
"f": "phys",
"t": "Vektoren",
"n": "Betrag",
"x": "|a| = √(a_x² + a_y² + a_z²)",
"e": "Länge des Vektors. Komponenten aus Betrag und Winkel: a_x = |a| · cos α, a_y = |a| · sin α."
},
{
"f": "phys",
"t": "Vektoren",
"n": "Skalarprodukt",
"x": "a · b = |a| · |b| · cos φ = a_x b_x + a_y b_y + a_z b_z",
"e": "Ergibt eine Zahl. Null, wenn die Vektoren senkrecht stehen."
},
{
"f": "phys",
"t": "Vektoren",
"n": "Kreuzprodukt",
"x": "|a × b| = |a| · |b| · sin φ",
"e": "Ergibt einen Vektor senkrecht zu a und b (Rechte-Hand-Regel). Betrag = aufgespannte Fläche."
},
{
"f": "phys",
"t": "Bewegung in 2D/3D",
"n": "Schiefer Wurf",
"x": "x = v₀ · cos α · t · y = v₀ · sin α · t − ½ · g · t²",
"e": "Waagerecht gleichförmig, senkrecht gleichmäßig beschleunigt. Wurfweite auf gleicher Höhe: W = v₀² · sin 2α / g (größte bei 45°)."
},
{
"f": "phys",
"t": "Bewegung in 2D/3D",
"n": "Kreisbewegung",
"x": "v = 2π · r / T · a_z = v² / r",
"e": "Gleichförmige Kreisbewegung: Betrag von v konstant, die Beschleunigung zeigt zum Mittelpunkt."
},
{
"f": "phys",
"t": "Bewegung in 2D/3D",
"n": "Relativbewegung",
"x": "v_A,Boden = v_A,Luft + v_Luft,Boden",
"e": "Geschwindigkeiten vektoriell addieren, z. B. Flugzeug mit Wind."
},
{
"f": "phys",
"t": "Newtonsche Axiome",
"n": "2. Axiom",
"x": "Σ F = m · a  (allgemein F = dp/dt, p = m · v)",
"e": "Die resultierende Kraft bestimmt die Beschleunigung. Ohne resultierende Kraft bleibt v konstant (1. Axiom)."
},
{
"f": "phys",
"t": "Newtonsche Axiome",
"n": "3. Axiom",
"x": "F₁₂ = −F₂₁",
"e": "Kräfte treten immer paarweise auf, an zwei verschiedenen Körpern – sie heben sich deshalb nicht auf."
},
{
"f": "phys",
"t": "Newtonsche Axiome",
"n": "Gewichtskraft",
"x": "F_G = m · g",
"e": "Masse in kg ist überall gleich, die Gewichtskraft hängt vom Ort ab."
},
{
"f": "phys",
"t": "Newtonsche Axiome",
"n": "Schiefe Ebene",
"x": "F_H = m · g · sin α · F_N = m · g · cos α",
"e": "Hangabtrieb parallel, Normalkraft senkrecht zur Ebene."
},
{
"f": "phys",
"t": "Newtonsche Axiome",
"n": "Zentripetalkraft",
"x": "F_Z = m · v² / r",
"e": "Die Kraft, die einen Körper auf der Kreisbahn hält, zeigt zum Mittelpunkt."
},
{
"f": "bsk",
"t": "Mechanische Eigenschaften",
"n": "Spannung und Dehnung",
"x": "σ = F / A · ε = Δl / l₀",
"e": "σ in N/mm², ε dimensionslos (oft in ‰ oder %)."
},
{
"f": "bsk",
"t": "Mechanische Eigenschaften",
"n": "Hookesches Gesetz",
"x": "σ = E · ε",
"e": "Gilt im linear-elastischen Bereich. E = Steigung der σ-ε-Linie (Steifigkeit)."
},
{
"f": "bsk",
"t": "Mechanische Eigenschaften",
"n": "Querdehnzahl",
"x": "ν = −ε_quer / ε_längs",
"e": "Beton ≈ 0,2, Stahl ≈ 0,3. Zieht man einen Stab, wird er dünner."
},
{
"f": "bsk",
"t": "Mechanische Eigenschaften",
"n": "Auslastung",
"x": "η = σ / f",
"e": "Spannung im Verhältnis zur Festigkeit, ≤ 1 bzw. ≤ 100 %."
},
{
"f": "bsk",
"t": "Physikalische Eigenschaften",
"n": "Rohdichte und Reindichte",
"x": "ρ_R = m / V (mit Poren) · ρ = m / V_Feststoff",
"e": "Die Reindichte hängt nur vom Material ab, die Rohdichte sinkt mit jedem Porenanteil."
},
{
"f": "bsk",
"t": "Physikalische Eigenschaften",
"n": "Porosität",
"x": "p = V_P / V = 1 − ρ_R / ρ",
"e": "Porenvolumen im Verhältnis zum Gesamtvolumen."
},
{
"f": "bsk",
"t": "Physikalische Eigenschaften",
"n": "Wasseraufnahme",
"x": "W_m = (m_nass − m_trocken) / m_trocken",
"e": "Massebezogen, in %."
},
{
"f": "bsk",
"t": "Physikalische Eigenschaften",
"n": "Wärmedehnung",
"x": "ε_T = α_T · ΔT · Δl = α_T · ΔT · l",
"e": "Beton und Stahl α_T ≈ 1,0–1,2 · 10⁻⁵ 1/K – deshalb funktioniert Stahlbeton."
},
{
"f": "bsk",
"t": "Physikalische Eigenschaften",
"n": "Wärmedurchgang",
"x": "R = d / λ · U = 1 / (R_si + Σ dᵢ/λᵢ + R_se)",
"e": "λ = Wärmeleitfähigkeit in W/(m·K). Kleines λ und große Dicke dämmen gut."
},
{
"f": "bsk",
"t": "Chemische Grundlagen",
"n": "Bindungsart nach ΔEN",
"x": "ΔEN > 1,7 ionisch · 0,4–1,7 polar kovalent · < 0,4 unpolar kovalent",
"e": "Je größer der Unterschied der Elektronegativitäten, desto ionischer die Bindung. Metalle untereinander: metallische Bindung."
},
{
"f": "bsk",
"t": "Chemische Grundlagen",
"n": "pH-Wert",
"x": "pH = −lg c(H₃O⁺)",
"e": "pH 7 neutral, darunter sauer, darüber basisch. Frischer Beton ist mit pH ≈ 13 stark basisch und schützt so den Stahl."
},
{
"f": "bsk",
"t": "Gefüge und Kristalle",
"n": "Packungsdichte",
"x": "kfz und hdp ≈ 74 % · krz ≈ 68 %",
"e": "Kubisch flächenzentriert und hexagonal dichteste Packung sind am dichtesten gepackt."
},
{
"f": "bsk",
"t": "Gefüge und Kristalle",
"n": "Feinkorn (Hall-Petch)",
"x": "σ_y = σ₀ + k / √d",
"e": "Kleinere Körner d → höhere Streckgrenze. Feinkorn macht Stahl fester und zugleich zäher."
},
{
"f": "bauko",
"t": "Sicherheitskonzept",
"n": "Grundprinzip",
"x": "E_d ≤ R_d  ·  η = E_d / R_d ≤ 1",
"e": "Bemessungswert der Einwirkung höchstens so groß wie der Bemessungswert des Widerstands."
},
{
"f": "bauko",
"t": "Sicherheitskonzept",
"n": "Grundkombination (GZT)",
"x": "E_d = 1,35 · G_k + 1,5 · Q_k,1 + 1,5 · Σ ψ₀,ᵢ · Q_k,ᵢ",
"e": "Leiteinwirkung voll, weitere veränderliche Einwirkungen mit ψ₀ abgemindert. Günstig wirkendes G mit 1,0, günstiges Q mit 0."
},
{
"f": "bauko",
"t": "Sicherheitskonzept",
"n": "Widerstand",
"x": "R_d = k_mod · R_k / γ_M",
"e": "Holz: γ_M = 1,3. k_mod hängt von Nutzungsklasse und Lasteinwirkungsdauer (KLED) ab – maßgebend ist die kürzeste Last der Kombination."
},
{
"f": "bauko",
"t": "Lasten",
"n": "Flächenlast aus Wichte",
"x": "g = γ · d",
"e": "γ in kN/m³, d in m → kN/m². Beispiel Stahlbeton 25 kN/m³ · 0,16 m = 4,0 kN/m²."
},
{
"f": "bauko",
"t": "Lasten",
"n": "Flächenlast → Streckenlast",
"x": "q [kN/m] = q [kN/m²] · e",
"e": "e = Einzugsbreite bzw. Achsabstand, z. B. Balkenabstand."
},
{
"f": "bauko",
"t": "Lasten",
"n": "Last auf geneigtem Dach",
"x": "g′ = g / cos α",
"e": "Eigenlast entlang der Dachfläche, umgerechnet auf die Grundrissprojektion. Schnee wird schon auf die Grundfläche bezogen."
},
{
"f": "bauko",
"t": "Einwirkungen",
"n": "Schneelast auf dem Dach",
"x": "s = μ₁ · C_e · C_t · s_k",
"e": "Meist C_e = C_t = 1,0. μ₁ = 0,8 bis 30°, 0,8 · (60° − α)/30° bis 60°, darüber 0."
},
{
"f": "bauko",
"t": "Einwirkungen",
"n": "Schnee am Boden (Zone 2)",
"x": "s_k = 0,25 + 1,91 · ((A + 140) / 760)²  ≥ 0,85 kN/m²",
"e": "A = Geländehöhe über NN in m. Zone 1: 0,19 + 0,91 · (…)² ≥ 0,65; Zone 1a und 2a: Zone-Wert · 1,25."
},
{
"f": "bauko",
"t": "Einwirkungen",
"n": "Wind",
"x": "w_e = c_pe · q_p",
"e": "q_p = Geschwindigkeitsdruck (nach Windzone und Höhe), c_pe aus den Bereichen F, G, H, I, J; Zwischenwerte linear interpolieren. e = min(b; 2h)."
},
{
"f": "bauko",
"t": "Rechenweg",
"n": "Einfeldträger mit Streckenlast",
"x": "max M = q · l² / 8 · A = B = q · l / 2",
"e": "Moment in Feldmitte, Querkraft am Auflager."
},
{
"f": "bauko",
"t": "Rechenweg",
"n": "Einfeldträger mit Einzellast in der Mitte",
"x": "max M = F · l / 4 · A = B = F / 2",
"e": ""
},
{
"f": "bauko",
"t": "Rechenweg",
"n": "Kragarm",
"x": "M = q · l² / 2 bzw. M = F · l",
"e": "Größtes Moment an der Einspannung."
},
{
"f": "bauko",
"t": "Holzbemessung",
"n": "Querschnittswerte Rechteck",
"x": "A = b · h · W = b · h² / 6 · I = b · h³ / 12",
"e": "Die Höhe geht ins Quadrat bzw. in die dritte Potenz ein – hochkant ist viel tragfähiger."
},
{
"f": "bauko",
"t": "Holzbemessung",
"n": "Biegung",
"x": "σ_m,d = M_d / W ≤ f_m,d = k_mod · f_m,k / γ_M",
"e": "Erforderliches Widerstandsmoment: erf W = M_d / f_m,d."
},
{
"f": "bauko",
"t": "Holzbemessung",
"n": "Schub",
"x": "τ_d = 1,5 · V_d / (k_cr · b · h) ≤ f_v,d",
"e": "k_cr berücksichtigt Risse im Holz."
},
{
"f": "bauko",
"t": "Holzbemessung",
"n": "Querdruck",
"x": "σ_c,90,d = F_d / A_ef ≤ k_c,90 · f_c,90,d",
"e": "A_ef: Aufstandslänge auf jeder Seite um bis zu 30 mm verlängern."
},
{
"f": "bauko",
"t": "Holzbemessung",
"n": "Knicken",
"x": "λ = l_ef / i · i = h / √12 · σ_c,0,d ≤ k_c · f_c,0,d",
"e": "l_ef = β · l aus dem Eulerfall, k_c aus der Tabelle über λ_rel."
},
{
"f": "bauko",
"t": "Holzbemessung",
"n": "Durchbiegung Einfeldträger",
"x": "w = 5 · q · l⁴ / (384 · E · I)",
"e": "Grenzen: w_inst ≤ l/300, w_net,fin ≤ l/300, w_fin ≤ l/200. Kriechen: w_fin = w_G · (1 + k_def) + w_Q · (1 + ψ₂ · k_def)."
},
{
"f": "bauko",
"t": "Stahl und Stahlbeton",
"n": "Stahl auf Biegung",
"x": "σ = M_Ed / W ≤ f_y,d = f_y / γ_M0",
"e": "S235: f_y = 23,5 kN/cm², γ_M0 = 1,0. erf W = M_Ed / f_y,d, dann Profil aus der Tabelle wählen."
},
{
"f": "bauko",
"t": "Stahl und Stahlbeton",
"n": "Zugstab",
"x": "erf A = N_Ed / f_y,d",
"e": "Rundstab: d = √(4 · A / π)."
},
{
"f": "bauko",
"t": "Schnittgrößen und Aussteifung",
"n": "Gleichgewicht",
"x": "Σ H = 0 · Σ V = 0 · Σ M = 0",
"e": "Drei Bedingungen in der Ebene – damit lassen sich bei statisch bestimmten Systemen alle Auflagerkräfte bestimmen."
},
{
"f": "bauko",
"t": "Schnittgrößen und Aussteifung",
"n": "Diagonale im Verband",
"x": "Z = H / cos α",
"e": "α = Winkel zwischen Diagonale und Horizontalkraft-Richtung."
},
{
"f": "binf",
"t": "Programmrahmen",
"n": "Grundgerüst",
"x": "public class Name { public static void main(String[] args) { … } }",
"e": "Dateiname = Klassenname + .java. Jede Anweisung endet mit ;"
},
{
"f": "binf",
"t": "Programmrahmen",
"n": "Ausgabe und Escape-Sequenzen",
"x": "System.out.println(…) · \\n Zeilenumbruch · \\t Tab · \\\" Anführungszeichen · \\\\ Backslash",
"e": "print ohne, println mit Zeilenumbruch am Ende."
},
{
"f": "binf",
"t": "Java und JDK",
"n": "Übersetzen und Ausführen",
"x": "javac Name.java  →  java Name",
"e": "javac erzeugt Bytecode (Name.class), die JVM führt ihn aus."
},
{
"f": "binf",
"t": "Datentypen",
"n": "Ganzzahlen",
"x": "byte 8 · short 16 · int 32 · long 64 Bit",
"e": "long-Literale mit L, z. B. 12345678910L. Wertebereich int etwa ±2,1 · 10⁹."
},
{
"f": "binf",
"t": "Datentypen",
"n": "Kommazahlen, Zeichen, Wahrheitswerte",
"x": "float 32 (Literal 30.5f) · double 64 · char 16 ('a') · boolean (true/false)",
"e": "Kommazahlen mit Punkt. String ist kein primitiver Typ und steht in \"…\"."
},
{
"f": "binf",
"t": "Datentypen",
"n": "Dualsystem",
"x": "n Bit → 2ⁿ Werte · Dezimal → dual: fortgesetzt durch 2 teilen, Reste von unten lesen",
"e": "Stellenwerte 1, 2, 4, 8, 16, 32, … Beispiel: 43 = 32 + 8 + 2 + 1 = 101011."
},
{
"f": "binf",
"t": "Operatoren",
"n": "Rechnen mit Ganzzahlen",
"x": "7 / 2 = 3 · 7 % 2 = 1 · 7.0 / 2 = 3.5",
"e": "/ bei zwei int schneidet ab, % liefert den Rest."
},
{
"f": "binf",
"t": "Operatoren",
"n": "Logik",
"x": "&& und · ",
"e": ""
},
{
"f": "binf",
"t": "Operatoren",
"n": "Kurzformen",
"x": "x++ · x-- · x += 5 · x *= 2",
"e": "x++ liefert erst den alten Wert und erhöht dann, ++x erhöht zuerst."
},
{
"f": "stat",
"t": "Matrizen",
"n": "Transponieren",
"x": "(A′)′ = A · (A + B)′ = A′ + B′ · (A · B)′ = B′ · A′",
"e": "Beim Produkt dreht sich die Reihenfolge um. A′A ist immer symmetrisch."
},
{
"f": "stat",
"t": "Matrizen",
"n": "Matrixprodukt",
"x": "(A · B)ᵢⱼ = Σₖ aᵢₖ · bₖⱼ",
"e": "Zeile mal Spalte. Nur möglich, wenn Spaltenzahl von A = Zeilenzahl von B. Im Allgemeinen A · B ≠ B · A."
},
{
"f": "stat",
"t": "Matrizen",
"n": "Determinante",
"x": "2×2: det A = a · d − b · c · 3×3: Regel von Sarrus",
"e": "det A = 0 heißt: A ist singulär und nicht invertierbar."
},
{
"f": "stat",
"t": "Matrizen",
"n": "Inverse 2×2",
"x": "A⁻¹ = 1/(a·d − b·c) · (d −b / −c a)",
"e": "Diagonale tauschen, Nebendiagonale mit Minus, durch die Determinante teilen."
},
{
"f": "stat",
"t": "Matrizen",
"n": "Norm",
"x": "‖x‖ = √(x′x)",
"e": "Länge eines Vektors. x′y = 0 heißt orthogonal."
},
{
"f": "stat",
"t": "Gleichungssysteme",
"n": "Lösbarkeit",
"x": "A · x = b eindeutig lösbar ⇔ det A ≠ 0 ⇔ rg A = n",
"e": "Dann ist x = A⁻¹ · b. Lösen in der Praxis mit dem Gauß-Verfahren (Stufenform)."
},
{
"f": "dap",
"t": "Gewichtung und Post-Processing",
"n": "Gewichtungsfaktor",
"x": "w = Anteil in der Grundgesamtheit / Anteil in der Stichprobe",
"e": "w > 1: Gruppe ist in der Stichprobe unterrepräsentiert."
},
{
"f": "dap",
"t": "Gewichtung und Post-Processing",
"n": "Gewichteter Mittelwert",
"x": "x̄_w = Σ wᵢ · xᵢ / Σ wᵢ",
"e": "Mit den Gewichten werden die Gruppen auf ihren wahren Anteil gebracht."
},
{
"f": "dap",
"t": "Gewichtung und Post-Processing",
"n": "Hochrechnungsfaktor",
"x": "ef = N / n",
"e": "Wie viele Personen der Grundgesamtheit eine Antwort vertritt."
},
{
"f": "dap",
"t": "Verteilungen",
"n": "Standardisieren",
"x": "z = (x − μ) / σ",
"e": "Standardnormalverteilung: μ = 0, σ = 1."
},
{
"f": "dap",
"t": "Verteilungen",
"n": "68-95-99,7-Regel",
"x": "μ ± 1σ ≈ 68 % · μ ± 2σ ≈ 95 % · μ ± 3σ ≈ 99,7 %",
"e": "Gilt für die Normalverteilung."
},
{
"f": "dap",
"t": "Verteilungen",
"n": "R-Funktionen",
"x": "pnorm(x, μ, σ) Anteil unter x · qnorm(p) Quantil · dnorm Dichte · rnorm(n) Zufallszahlen",
"e": "p- = Verteilungsfunktion, q- = Quantil, d- = Dichte, r- = Zufallszahlen – auch für binom, pois, unif."
},
{
"f": "dap",
"t": "R-Grundlagen",
"n": "Grundbefehle",
"x": "x <- c(1, 2, 3) · mean(x) · sd(x) · summary(x) · df$spalte",
"e": "<- weist zu, c() baut einen Vektor, $ greift auf eine Spalte eines data.frame zu."
}
];
