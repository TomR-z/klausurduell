/* Patch-Warteschlange · Baukonstruktion · Übung 4 Dächer (11.11.2026, Geßler/Kimpeler, 51 Folien) · Beispiel 5 Sparren GZT + GZG, Beispiel 7b Gerberpfette, Beispiel 8 Deckenbalken · erstellt 11.11.2026 · alle Zahlen mit Python nachgerechnet */

/* ── Biegenachweis Sparren (GZT) ── */
mc("bauko", K4, "Der Sparren 8/16 hat am Auflager eine Kerve von 3 cm. Mit welchem Widerstandsmoment rechnest du dort?", ["W = 8 · 13² / 6 = 225 cm³", "W = 8 · 16² / 6 = 341 cm³", "W = 8 · 3² / 6 = 12 cm³", "W = 13 · 8² / 6 = 139 cm³"], "An der Kerve bleibt nur die Nettohöhe 16 − 3 = 13 cm. Im Feld ohne Kerve gilt der volle Querschnitt mit 341 cm³.", "Baukonstruktion Übung 4, Folie 13");
mc("bauko", K4, "Wie groß ist der Höhenfaktor k_h für die Nettohöhe h = 130 mm (C24)?", ["k_h = (150/130)^0,2 ≈ 1,03", "k_h = 1,0, weil h unter 150 mm liegt", "k_h = 150/130 ≈ 1,15", "k_h = 1,3"], "Unter 150 mm darf f_m,k mit k_h = (150/h)^0,2 ≤ 1,3 erhöht werden. Mit k_h = 1,0 zu rechnen ist erlaubt und liegt auf der sicheren Seite.", "Baukonstruktion Übung 4, Folien 13 und 15 (SBT 24 S. 9.8)");
mc("bauko", K4, "Du suchst die Sparrenhöhe und hast aus dem Biegenachweis h = 12 cm erhalten. Am Auflager kommt eine Kerve von 3 cm dazu. Was wählst du?", ["Mindestens h = 12 + 3 = 15 cm, gewählt 6/16", "6/12, die Kerve spielt keine Rolle", "6/9, weil die Kerve abgezogen wird", "Eine größere Breite statt einer größeren Höhe"], "Die Kerve schwächt den Querschnitt genau am Auflager, wo das große Stützmoment wirkt. Deshalb wird die gewählte Höhe um die Kerventiefe erhöht.", "Baukonstruktion Übung 4, Folien 16–17");
mc("bauko", K4, "Warum wurde der Spannungsnachweis im Feld in Beispiel 5 eigentlich nicht gebraucht?", ["Das Stützmoment an B ist maßgebend und dort ist der Querschnitt durch die Kerve zusätzlich geschwächt", "Im Feld gibt es kein Moment", "Im Feld gilt der GZG statt des GZT", "Weil der Wind im Feld nach oben wirkt"], "M_B,d = 1,26 kNm am geschwächten Querschnitt (W = 225 cm³) gegen M_F,d = 1,76 kNm am vollen Querschnitt (W = 341 cm³) mit größerem kmod: Ausnutzung 0,49 gegen 0,28.", "Baukonstruktion Übung 4, Folien 19–21");

/* ── Durchbiegung (GZG) ── */
mc("bauko", K4, "Für den Durchbiegungsnachweis des Sparrens brauchst du die Last senkrecht zur Dachfläche. Wie rechnest du das Eigengewicht g′ (je m Grundfläche) um?", ["g⊥ = g′ · cos²α", "g⊥ = g′ · cos α", "g⊥ = g′ / cos α", "g⊥ = g′ · sin α"], "Ein cos α macht aus der Grundfläche die Dachfläche, der zweite zerlegt die lotrechte Last in den Anteil senkrecht zum Sparren. Mit α = 35,7°: 0,86 · cos²35,7° = 0,57 kN/m. Wind wirkt ohnehin senkrecht zur Dachfläche.", "Baukonstruktion Übung 4, Folie 27");
mc("bauko", K4, "Welche Spannweite setzt du für die Durchbiegung des Sparrens an?", ["Die schräge Länge auf der Dachfläche: l = √(2,572² + 3,58²) = 4,41 m", "Die waagerechte Stützweite 3,58 m", "Die ganze Sparrenlänge mit Kragarmen", "Die Dachbreite 7,44 m"], "Weil die Lasten senkrecht zum Sparren angesetzt werden, gehört dazu auch die Länge entlang des Sparrens. Die Kragarme werden in diesem Beispiel vernachlässigt.", "Baukonstruktion Übung 4, Folien 26–27");
mc("bauko", K4, "Woher kommt der Faktor 76,8 in w = q · l⁴ / (76,8 · E · I)?", ["384 / 5 = 76,8 – das ist die Formel 5ql⁴/(384EI) des Einfeldträgers", "Aus γ_M = 1,3 und k_def", "Aus der Umrechnung kN in N", "Er ist ein Erfahrungswert für Holz"], "SBT 24 S. 4.2 schreibt die Biegelinie des Einfeldträgers unter Gleichlast als w_Mitte = ql⁴/(76,8 EI).", "Baukonstruktion Übung 4, Folie 28");
mc("bauko", K4, "Du rechnest w = q · l⁴ / (76,8 · E · I) mit q in kN/m, l in m, E in N/mm² und I in cm⁴. Mit welchem Faktor kommst du auf cm?", ["· 10⁷", "· 10³", "· 10⁻⁷", "Gar keinem, die Einheiten passen schon"], "kN/m · m⁴ = 10⁶ kN·cm³, N/mm² · cm⁴ = 10⁻¹ kN·cm². Der Quotient ist 10⁷ cm. Die Übung schreibt dazu: „Auf Einheiten achten!!!“", "Baukonstruktion Übung 4, Folie 28");
pair("bauko", K4, "Welcher Beiwert kommt aus welcher Tafel?", [["ψ₀, ψ₂", "Tafel 3.5b Kombinationsbeiwerte"], ["Nutzungsklasse", "Tafel 9.4a"], ["k_def", "Tafel 9.14"], ["E₀,mean = 11 000 N/mm² (C24)", "Tafel 9.8"]], "Für den Sparren in Beispiel 5: NKL 2, Vollholz → k_def = 0,8; Schnee und Wind haben ψ₂ = 0.", "Baukonstruktion Übung 4, Folien 25 und 28 (SBT 24)");
mc("bauko", K4, "Der Durchbiegungsnachweis ist nicht erfüllt (w_inst = 1,48 cm > l/300 = 1,47 cm). Welche Maßnahme nennt die Übung NICHT?", ["k_def verkleinern", "Querschnittshöhe steigern", "Holzklasse mit höherem E-Modul wählen", "Überhöhung vorsehen"], "k_def ist ein Materialbeiwert aus der Tafel und kein Stellrad. Weitere Maßnahme laut Übung: anderer Querschnitt mit größerem I. Achtung: Ein größerer Querschnitt erhöht auch das Eigengewicht.", "Baukonstruktion Übung 4, Folie 31");

/* ── Gerberträger ── */
mc("bauko", K9, "Warum setzt man bei Pfetten Gerbergelenke ein?", ["Vollholz ist nur bis etwa 14 m lieferbar, Biegemomente und Durchbiegung werden kleiner, und es ist billiger als ein biegesteifer Stoß", "Weil Gelenke die Pfette steifer machen", "Damit keine Auflagerkräfte entstehen", "Damit der Träger statisch unbestimmt wird"], "Das Gelenk ist ein planmäßiger Momentennullpunkt. Richtig platziert, sind Feld- und Stützmoment gleich groß und der Querschnitt wird gut ausgenutzt.", "Baukonstruktion Übung 4, Folie 33");
mc("bauko", K9, "Wo liegt das Gerbergelenk im Zweifeldträger mit gleichen Stützweiten l, wenn Feld- und Stützmoment gleich groß sein sollen?", ["Im Abstand e = 0,1716 · l von der Mittelstütze", "Genau über der Mittelstütze", "In Feldmitte", "Bei l/4 vom Endauflager"], "Aus |M_Feld| = |M_Stütz| folgt eine quadratische Gleichung. Für l = 4,06 m: e = 0,70 m. Dann gilt A = 0,414 · q · l (SBT 24 S. 4.13).", "Baukonstruktion Übung 4, Folien 37–38");
mc("bauko", K9, "Die Pfette hat ungleiche Felder (4,06 m und 3,38 m). Darf man die Tafel für gleiche Stützweiten trotzdem nutzen?", ["Ja, mit der größeren Stützweite – das liegt auf der sicheren Seite", "Nein, nie", "Ja, mit dem Mittelwert der beiden Felder", "Ja, mit der kleineren Stützweite"], "Die kleinere Stützweite fließt dann nicht in die Gelenklage und in A ein. B und C rechnest du anschließend von Hand über das Gleichgewicht am rechten Teilsystem.", "Baukonstruktion Übung 4, Folien 38–39");
mc("bauko", K3, "Wie wird aus den Sparren-Auflagerkräften die Last auf der Mittelpfette?", ["q = B / e + Eigengewicht der Pfette, mit e = Sparrenabstand", "q = B · e", "q = B / Pfettenlänge", "Jeder Sparren bleibt eine Einzellast, Pfetteneigengewicht entfällt"], "Beispiel 7b: g = 2,97 / 0,62 + 0,14 · 0,22 · 4,2 = 4,92 kN/m (Pfette 14/22, C24 mit 4,2 kN/m³).", "Baukonstruktion Übung 4, Folie 35");

/* ── Deckenbalken ── */
mc("bauko", K3, "Ein Deckenbalken hat die lichte Weite 4,50 m und liegt auf 10 cm breiten Auflagern. Welche Stützweite setzt du an?", ["l = 4,50 + 2 · 0,10/2 = 4,60 m", "l = 4,50 m", "l = 4,50 + 2 · 0,10 = 4,70 m", "l = 4,50 − 0,10 = 4,40 m"], "Gerechnet wird von Auflagermitte zu Auflagermitte: lichte Weite plus je eine halbe Auflagerbreite.", "Baukonstruktion Übung 4, Folie 41");
mc("bauko", K4, "Holzbalkendecke im beheizten Wohnraum mit Eigengewicht und Nutzlast: Welches kmod gilt für die Kombination g + p?", ["0,8 – NKL 1, die Nutzlast (mittel) bestimmt das größte kmod der Kombination", "0,6 – ständig, wegen des Eigengewichts", "0,9 – kurz", "1,0 – sehr kurz"], "Bei mehreren Lasten zählt das kmod der kürzesten Einwirkung. Prüfen: 20,22 / 0,8 = 25,3 kNm schlägt 13,68 / 0,6 = 22,8 kNm (nur ständig).", "Baukonstruktion Übung 4, Folie 44");

/* ── Lösungsweg-Aufgaben ── */
aufgabe({
 "id": "bauko-ue04-durchbiegung", "f": "bauko", "t": K4, "titel": "Durchbiegungsnachweis Sparren", "s": "Baukonstruktion Übung 4, Beispiel 5",
 "angabe": "Sparren 8/16, C24 (E₀,mean = 11 000 N/mm²), NKL 2, Spannweite entlang der Dachfläche l = 4,41 m, Einfeldträger ohne Kragarme. Lasten senkrecht zur Dachfläche: g⊥ = 0,57 kN/m, Wind w⊥ = 0,19 kN/m, Schnee s⊥ = 0,22 kN/m. ψ₀,s = 0,5, ψ₀,w = 0,6, ψ₂ = 0 für Schnee und Wind, k_def = 0,8, keine Überhöhung.",
 "geg": ["l = 4,41 m", "I = 8 · 16³ / 12 = 2731 cm⁴", "g⊥ = 0,57 kN/m", "w⊥ = 0,19 kN/m", "s⊥ = 0,22 kN/m", "k_def = 0,8"],
 "ges": "w_inst, w_fin und w_net,fin mit Nachweis",
 "schritte": [
  { "f": "Wie groß ist die Anfangsdurchbiegung aus Eigengewicht?", "o": [
    ["w_G,inst = 0,57 · 4,41⁴ / (76,8 · 11 000 · 2731) · 10⁷ = 0,93 cm", "Einfeldträger unter Gleichlast: 5ql⁴/(384EI) = ql⁴/(76,8EI), Faktor 10⁷ für die Einheiten."],
    ["w_G,inst = 0,57 · 4,41² / 8 = 1,39 cm", "Das ist die Momentenformel ql²/8, keine Durchbiegung."],
    ["w_G,inst = 0,57 · 4,41⁴ / (76,8 · 11 000 · 2731) = 9,3·10⁻⁸ cm", "Der Einheitenfaktor 10⁷ fehlt."],
    ["w_G,inst = 0,86 · 4,41⁴ / (76,8 · 11 000 · 2731) · 10⁷ = 1,41 cm", "0,86 kN/m ist die lotrechte Last je m Grundfläche. Für die Durchbiegung brauchst du den Anteil senkrecht zum Sparren."]],
   "r": "w_G = 0,93 cm · genauso w_w = 0,31 cm, w_s = 0,36 cm" },
  { "f": "Welche Kombination ist für w_inst maßgebend und erfüllt sie l/300?", "o": [
    ["Schnee führend: 0,93 + 0,36 + 0,6 · 0,31 = 1,48 cm > 441/300 = 1,47 cm → nicht erfüllt", "Schnee führend liefert den größeren Wert als Wind führend (1,42 cm)."],
    ["Wind führend: 0,93 + 0,31 + 0,5 · 0,36 = 1,42 cm < 1,47 cm → erfüllt", "Das ist nicht die ungünstigste Kombination."],
    ["Alles voll: 0,93 + 0,36 + 0,31 = 1,60 cm", "Die begleitende Einwirkung wird mit ψ₀ abgemindert."],
    ["Nur 0,93 cm, veränderliche Lasten zählen im GZG nicht", "Für w_inst zählen alle Lasten der charakteristischen Kombination."]],
   "r": "w_inst = 1,48 cm > 1,47 cm → nicht erbracht (knapp)" },
  { "f": "Wie groß ist die Enddurchbiegung w_fin (Grenze l/200)?", "o": [
    ["0,93 · (1 + 0,8) + 0,36 + 0,6 · 0,31 = 2,22 cm > 2,21 cm → nicht erfüllt", "Kriechen nur auf den quasi-ständigen Anteil; bei Schnee und Wind ist ψ₂ = 0, also bleiben sie ohne k_def."],
    ["(0,93 + 0,36 + 0,6 · 0,31) · 1,8 = 2,66 cm", "Schnee und Wind kriechen hier nicht, weil ψ₂ = 0."],
    ["0,93 + 0,36 + 0,6 · 0,31 = 1,48 cm", "Das ist w_inst ohne Kriechen."],
    ["0,93 · 0,8 = 0,74 cm", "Das ist nur der Kriechanteil des Eigengewichts."]],
   "r": "w_fin = 2,22 cm > 441/200 = 2,21 cm → nicht erbracht" },
  { "f": "Wie groß ist die Netto-Enddurchbiegung w_net,fin (Grenze l/300)?", "o": [
    ["0,93 · 1,8 = 1,67 cm > 1,47 cm → nicht erfüllt", "Quasi-ständig bleibt nur das Eigengewicht, mit Kriechen, ohne Überhöhung."],
    ["0,93 cm < 1,47 cm → erfüllt", "Das Kriechen mit (1 + k_def) fehlt."],
    ["2,22 cm", "Das ist w_fin; bei w_net,fin entfallen Lasten mit ψ₂ = 0."],
    ["1,67 − 1,47 = 0,20 cm", "Das ist nur die Überschreitung."]],
   "r": "w_net,fin = 1,67 cm > 1,47 cm → Querschnitt vergrößern oder überhöhen" }],
 "fazit": "Last senkrecht zum Sparren (cos²α), Länge entlang des Sparrens, Einheitenfaktor 10⁷. Kriechen nur mit ψ₂-Anteilen."
});

aufgabe({
 "id": "bauko-ue04-gerber", "f": "bauko", "t": K9, "titel": "Gerbergelenk in der Mittelpfette", "s": "Baukonstruktion Übung 4, Beispiel 7b",
 "angabe": "Mittelpfette Pos. 2 als Zweifeldträger mit Gerbergelenk im längeren Feld: Feld 1 (A–B) l = 4,06 m, Feld 2 (B–C) 3,38 m, Gesamtlänge 7,44 m. Maßgebend ist die Kombination nur Eigengewicht: q_d = 1,35 · 4,92 = 6,64 kN/m (größter Wert q_d / kmod = 11,07).",
 "geg": ["l₁ = 4,06 m", "l₂ = 3,38 m", "q_d = 6,64 kN/m"],
 "ges": "Lage x des Gelenks und Auflagerkräfte A, B, C",
 "schritte": [
  { "f": "Welche Bedingung legt die Gelenklage fest?", "o": [
    ["|M_Feld| = |M_Stütz|: q(4,06 − x)²/8 = q · 4,06 · x / 2", "So wird der Querschnitt im Feld und über der Stütze gleich ausgenutzt."],
    ["M_Stütz = 0", "Ein Gelenk über der Stütze ergibt zwei Einfeldträger mit großem Feldmoment."],
    ["x = l / 2", "Das Gelenk in Feldmitte würde das Feldmoment kaum verkleinern."],
    ["A = B", "Die Auflagerkräfte sind nicht das Kriterium."]],
   "r": "x² − 24,36 · x + 16,48 = 0" },
  { "f": "Wo liegt das Gelenk?", "o": [
    ["x = 12,18 − 11,48 = 0,70 m von B (= 0,1716 · 4,06)", "Die zweite Lösung 23,7 m liegt außerhalb des Trägers."],
    ["x = 12,18 + 11,48 = 23,66 m", "Länger als der ganze Träger."],
    ["x = 4,06 / 2 = 2,03 m", "Feldmitte, nicht die Gleichgewichtsbedingung."],
    ["x = 0,1716 · 7,44 = 1,28 m", "Der Tafelwert gilt mit der Feldlänge, nicht der Gesamtlänge."]],
   "r": "x = 0,70 m" },
  { "f": "Wie groß sind A und die Gelenkkraft G?", "o": [
    ["A = G = q(4,06 − x)/2 = 6,64 · 3,36 / 2 = 11,16 kN", "Der Einhängeträger zwischen A und Gelenk ist ein Einfeldträger."],
    ["A = 6,64 · 4,06 / 2 = 13,48 kN", "Ohne Gelenk gerechnet."],
    ["A = 0,414 · 6,64 · 7,44 = 20,45 kN", "Tafelwert mit falscher Länge."],
    ["A = 6,64 · 0,70 = 4,65 kN", "Das ist nur die Last auf dem Kragstück."]],
   "r": "A = G = 11,16 kN" },
  { "f": "Wie groß ist B (ΣM um C am rechten Teilsystem)?", "o": [
    ["B = [11,16 · 4,08 + 6,64 · 4,08² / 2] / 3,38 = 29,82 kN", "Hebelarme zu C: Gelenk 0,70 + 3,38 = 4,08 m, Streckenlast über 4,08 m mit Schwerpunkt bei 2,04 m."],
    ["B = 1,25 · 6,64 · 4,06 = 33,70 kN", "Das ist die Formel für den Zweifeldträger ohne Gelenk mit gleichen Feldern."],
    ["B = 6,64 · 7,44 / 2 = 24,70 kN", "Halbe Gesamtlast – kein Gleichgewicht."],
    ["B = 11,16 · 4,08 / 3,38 = 13,47 kN", "Die Streckenlast auf dem rechten Teilsystem fehlt."]],
   "r": "B = 29,82 kN · C = 6,64 · 7,44 − 11,16 − 29,82 = 8,42 kN" }],
 "fazit": "Gelenk aus |M_Feld| = |M_Stütz| oder Tafel e = 0,1716 l; danach Einhängeträger, dann Gleichgewicht am Kragträger."
});

aufgabe({
 "id": "bauko-ue04-deckenbalken", "f": "bauko", "t": K4, "titel": "Deckenbalken mit Stützenlasten", "s": "Baukonstruktion Übung 4, Beispiel 8",
 "angabe": "Holzbalkendecke im beheizten Wohnraum (NKL 1), C24, Balkenabstand e = 0,60 m, lichte Weite 4,50 m, Auflagerbreite je 10 cm. g_k = 1,50 kN/m², p_k = 2,75 kN/m². Zusätzlich je 5,0 kN ständige Last aus zwei Holzstützen im Abstand 1,55 m von den Auflagern.",
 "geg": ["l_w = 4,50 m", "t = 0,10 m", "e = 0,60 m", "g_k = 1,50 kN/m²", "p_k = 2,75 kN/m²", "G_k = 2 × 5,0 kN bei 1,55 m"],
 "ges": "erforderliches W und gewählter Querschnitt",
 "schritte": [
  { "f": "Stützweite und Linienlasten?", "o": [
    ["l = 4,60 m · g = 0,6 · 1,5 = 0,90 kN/m · p = 0,6 · 2,75 = 1,65 kN/m", "Stützweite von Auflagermitte zu Auflagermitte, Flächenlast mal Balkenabstand."],
    ["l = 4,50 m · g = 1,50 kN/m · p = 2,75 kN/m", "Lichte Weite statt Stützweite, und die Einzugsbreite fehlt."],
    ["l = 4,70 m · g = 0,90 · p = 1,65 kN/m", "Es kommt nur je eine halbe Auflagerbreite dazu."],
    ["l = 4,60 m · g = 2,50 · p = 4,58 kN/m", "Durch e geteilt statt mal e."]],
   "r": "l = 4,60 m, g = 0,90 kN/m, p = 1,65 kN/m" },
  { "f": "Charakteristische Momente in Feldmitte?", "o": [
    ["M_g = 0,9 · 4,6²/8 = 2,38 · M_p = 1,65 · 4,6²/8 = 4,36 · M_G = 5,0 · 1,55 = 7,75 kNm", "Zwei symmetrische Einzellasten: zwischen ihnen ist M konstant = G · a."],
    ["M_G = 5,0 · 4,6 / 4 = 5,75 kNm", "Das wäre eine Einzellast in Feldmitte."],
    ["M_G = 2 · 5,0 · 1,55 = 15,5 kNm", "Jede Auflagerkraft ist nur 5 kN, nicht 10 kN."],
    ["M_g = 0,9 · 4,6² / 2 = 9,52 kNm", "ql²/2 gilt für den Kragarm."]],
   "r": "M_g = 2,38 · M_p = 4,36 · M_G = 7,75 kNm" },
  { "f": "Maßgebende Kombination mit kmod?", "o": [
    ["1,35 · (2,38 + 7,75) + 1,5 · 4,36 = 20,22 kNm, durch kmod = 0,8 → 25,28 kNm (maßgebend)", "Nur ständig: 1,35 · 10,13 = 13,68 / 0,6 = 22,79 kNm – kleiner."],
    ["Nur ständig 13,68 kNm, weil kmod dort am kleinsten ist", "Verglichen wird E_d / kmod: 22,79 < 25,28."],
    ["1,5 · (2,38 + 7,75 + 4,36) = 21,74 kNm", "Ständige Lasten mit γ_G = 1,35."],
    ["20,22 / 0,6 = 33,70 kNm", "Für die Kombination gilt das kmod der kürzesten Einwirkung (Nutzlast, mittel)."]],
   "r": "M_Ed = 20,22 kNm mit kmod = 0,8" },
  { "f": "Erforderliches W und Querschnittswahl?", "o": [
    ["W_erf = 2022 / (1,0 · 2,4 · 0,8 / 1,3) = 1369 ≈ 1400 cm³ → 12/28 mit W = 1568 cm³", "Kontrolle: 2022 / 1568 = 1,29 ≤ 1,48 kN/cm², h = 280 mm > 150 mm → k_h = 1,0 passt."],
    ["W_erf = 2022 / 2,4 = 843 cm³ → 10/24", "f_m,k ohne kmod und γ_M ist kein Bemessungswert."],
    ["W_erf = 2528 / 1,48 = 1708 cm³ → 14/28", "M_Ed / kmod war nur zum Vergleich der Kombinationen; im Nachweis steht M_Ed mit f_m,d."],
    ["W_erf = 1369 cm³ → 12/26 mit 1352 cm³", "1352 < 1369 cm³ reicht nicht."]],
   "r": "gewählt 12/28 NH C24, η = 1,29 / 1,48 = 0,87" }],
 "fazit": "Stützweite bis Auflagermitte, Lasten getrennt, E_d / kmod vergleichen, dann mit M_Ed und f_m,d bemessen."
});

Object.assign(RECHNEN, {
 "bauko-ue04-durchbiegung": {
  "1": [{ "l": "w_G,inst", "w": 0.93, "u": "cm", "h": "0,57 · 4,41⁴ / (76,8 · 11000 · 2731) · 10⁷" }],
  "2": [{ "l": "w_inst", "w": 1.48, "u": "cm", "h": "0,93 + 0,36 + 0,6 · 0,31" }],
  "3": [{ "l": "w_fin", "w": 2.22, "u": "cm", "h": "0,93 · 1,8 + 0,36 + 0,6 · 0,31" }],
  "4": [{ "l": "w_net,fin", "w": 1.67, "u": "cm", "h": "0,93 · 1,8" }]
 },
 "bauko-ue04-gerber": {
  "2": [{ "l": "x", "w": 0.70, "u": "m", "h": "12,18 − √(12,18² − 4,06²)" }],
  "3": [{ "l": "A", "w": 11.16, "u": "kN", "h": "6,64 · (4,06 − 0,70) / 2" }],
  "4": [{ "l": "B", "w": 29.82, "u": "kN", "h": "(11,16 · 4,08 + 6,64 · 4,08² / 2) / 3,38" }]
 },
 "bauko-ue04-deckenbalken": {
  "2": [{ "l": "M_G", "w": 7.75, "u": "kNm", "h": "5,0 · 1,55" }],
  "3": [{ "l": "M_Ed", "w": 20.22, "u": "kNm", "h": "1,35 · (2,38 + 7,75) + 1,5 · 4,36" }],
  "4": [{ "l": "W_erf", "w": 1369, "u": "cm³", "h": "2022 / (2,4 · 0,8 / 1,3)" }]
 }
});
