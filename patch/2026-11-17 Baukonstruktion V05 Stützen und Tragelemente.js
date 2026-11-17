/* Patch-Warteschlange · Baukonstruktion · V05 Stützen und Tragelemente (Rauber, 44 Folien) · erstellt 17.11.2026 · Formeln an den Folien geprüft, Rechenbeispiele mit Python nachgerechnet (Querschnittswerte HEB 200 aus Bautabellen) */
const K10 = "Tragelemente", K11 = "Stützen und Knicken";
THEMEN["bauko|Tragelemente"] = "Tragwerke lassen sich nach ihrer Geometrie ordnen. Linientragwerke sind lang im Verhältnis zum Querschnitt: gerade Stäbe (Balken mit Lasten quer zur Achse, Stützen mit Lasten längs der Achse, Zugstäbe), gekrümmte Stäbe (Bogen), zusammengesetzte Systeme (Fachwerk, Rahmen) und Seile. Flächentragwerke sind dünn im Verhältnis zur Fläche: Platten tragen Lasten senkrecht zur Fläche, Scheiben Lasten in ihrer Ebene. Raumtragwerke sind gekrümmte Flächen: Schalen tragen über Druck-, Zug- und Schubkräfte, Membranen nur über Zug.";
THEMEN["bauko|Stützen und Knicken"] = "Schlanke Druckstäbe versagen nicht durch Zerdrücken, sondern weichen seitlich aus – sie knicken. Die ideale Knicklast nach Euler ist N_cr = π²·EI / l_k², mit der Knicklänge l_k = β·l aus den vier Eulerfällen (β = 2; 1; 0,7; 0,5). Im Holzbau weist man σ_c,0,d ≤ k_c·f_c,0,d nach, wobei k_c aus dem bezogenen Schlankheitsgrad λ_rel,c folgt (β_c = 0,2 für Vollholz, 0,1 für Brettschichtholz). Im Stahlbau gilt N_Ed ≤ N_b,Rd = χ·A·f_y / γ_M1; χ hängt von λ̄ = λ_k / λ_I und der Knickspannungslinie (a0 bis d) ab. Maßgebend ist die Achse mit der größeren Schlankheit, meist die schwache z-Achse.";

/* ── Rückblick ── */
pair("bauko", K10, "Rückblick Dächer – ordne zu.", [["Pfettendach, Sparren", "hauptsächlich Biegung"], ["Sparrendach, Sparren", "Biegung mit Längskraft"], ["Pfettendach unter vertikaler Last", "nur vertikale Auflagerkräfte"], ["Sparrendach unter vertikaler Last", "Horizontalkräfte am Sparrenfuß, die die Decke aufnimmt"]], "Beim Sparrendach stützen sich die beiden Sparren gegenseitig wie ein Dreigelenkbogen ab. Deshalb muss die Decke den Horizontalschub am Fuß aufnehmen.", "Baukonstruktion V05, Folie 6");

/* ── Tragelemente ── */
pair("bauko", K10, "Zu welcher Gruppe gehört das Tragelement?", [["Balken, Stütze, Seil", "Linientragwerk"], ["Platte, Scheibe", "Flächentragwerk"], ["Schale, Membran", "Raumtragwerk"]], "Linientragwerke sind lang und schlank, Flächentragwerke eben und dünn, Raumtragwerke gekrümmte dünne Flächen.", "Baukonstruktion V05, Folien 9–24");
pair("bauko", K10, "Wie wird der Stab belastet? Ordne zu.", [["Balken", "Lasten rechtwinklig zur Stabachse"], ["Stütze", "Lasten parallel zur Stabachse (Druck)"], ["Zugstab", "Zug längs der Stabachse"]], "Balken, Stütze und Zugstab sind alles Stäbe mit gerader Achse. Bogen haben eine gekrümmte Achse, Fachwerk und Rahmen sind aus Stäben zusammengesetzt.", "Baukonstruktion V05, Folien 10–12");
pair("bauko", K10, "Stabtragwerk und Achsform – ordne zu.", [["Balken", "gerade Stabachse"], ["Bogen", "gekrümmte Stabachse"], ["Fachwerk", "zusammengesetzt"], ["Rahmen", "zusammengesetzt, biegesteife Ecken"]], "Seile gehören auch zu den Linientragwerken, tragen aber nur Zug.", "Baukonstruktion V05, Folien 13–18");
pair("bauko", K10, "Platte oder Scheibe?", [["Platte", "Beanspruchung senkrecht zu ihrer Fläche"], ["Scheibe", "Beanspruchung in Richtung ihrer Mittelfläche"]], "Eine Geschossdecke unter Nutzlast wirkt als Platte. Dieselbe Decke, die Windkräfte zu den Wänden leitet, wirkt als Scheibe – das wird bei der Aussteifung wichtig.", "Baukonstruktion V05, Folien 21–22");
pair("bauko", K10, "Schale oder Membran?", [["Schale", "einfach oder doppelt gekrümmt, Druck-, Zug- und Schubkräfte"], ["Membran", "doppelt gekrümmt, nur Zugkräfte"]], "Beispiele der Vorlesung: Schale – Café „Los Manantiales“ (1958); Membran – Olympiastadion München, Sportstadion Harbin.", "Baukonstruktion V05, Folien 24–25");
pair("bauko", K10, "Bauwerk und Tragelement – ordne zu.", [["Golden Gate Bridge", "Seil"], ["Hancock Center, Chicago", "Fachwerk"], ["Olympiastadion München", "Membran"], ["Café „Los Manantiales“", "Schale"]], "Die Bilder in der Vorlesung zeigen jeweils das Tragelement in Reinform.", "Baukonstruktion V05, Folien 16, 19, 24, 25");
mc("bauko", K10, "Welche Bauteile bilden laut Vorlesung das Deckensystem?", ["Decke und Unterzug", "Stütze und Wand", "Decke und Stütze", "Wand und Unterzug"], "Die Decke gibt ihre Last an Unterzüge, diese an Stützen oder Wände und weiter in die Gründung.", "Baukonstruktion V05, Folie 27");

/* ── Euler-Knicken ── */
mc("bauko", K11, "Wie lautet die Eulersche Knicklast?", ["N_cr = π²·EI / l_k²", "N_cr = EI / l_k", "N_cr = π·EA / l_k", "N_cr = f_y·A"], "Sie folgt aus der Differentialgleichung EI·w'' + N·w = 0 mit dem Ansatz w = A·sin(πx/l). Die Knicklänge geht quadratisch ein: doppelte Länge, ein Viertel der Knicklast.", "Baukonstruktion V05, Folien 28–29");
pair("bauko", K11, "Eulerfälle – ordne den Knicklängenbeiwert β zu.", [["Fall 1: unten eingespannt, oben frei", "β = 2"], ["Fall 2: beidseitig gelenkig", "β = 1"], ["Fall 3: eingespannt und gelenkig", "β = 0,7"], ["Fall 4: beidseitig eingespannt", "β = 0,5"]], "Knicklänge l_k = β·l ist der Abstand der Wendepunkte der Knickfigur. Je steifer gehalten, desto kürzer die Knicklänge.", "Baukonstruktion V05, Folie 29");
mc("bauko", K11, "Eine gelenkige Stütze wird unten eingespannt (Fall 2 → Fall 3). Wie ändert sich die Euler-Knicklast?", ["Sie steigt auf etwa das Doppelte (1/0,7² ≈ 2,04)", "Sie bleibt gleich", "Sie halbiert sich", "Sie steigt um 30 %"], "N_cr ist proportional zu 1/l_k². Mit l_k = 0,7·l statt 1,0·l wird sie um den Faktor 1/0,49 größer.", "Baukonstruktion V05, Folie 29");
wf("bauko", K11, "Eine Fahnenmast-Stütze (unten eingespannt, oben frei) hat die gleiche Knicklänge wie eine beidseitig gelenkige Stütze gleicher Höhe.", false, "Falsch. Beim Kragstützen-Fall ist β = 2, die Knicklänge also doppelt so groß wie die Stützenhöhe – die Knicklast nur ein Viertel.", "Baukonstruktion V05, Folie 29");

/* ── Holz ── */
mc("bauko", K11, "Wie lautet der Knicknachweis einer Holzstütze (Ersatzstabverfahren)?", ["σ_c,0,d / (k_c·f_c,0,d) ≤ 1", "σ_c,0,d / f_c,0,d ≤ k_c", "N_Ed / N_cr ≤ 1", "σ_m,d / f_m,d ≤ 1"], "k_c ≤ 1 mindert die Druckfestigkeit wegen der Knickgefahr ab. Gleichwertig: N_Ed / (k_c·N_u,d) ≤ 1.", "Baukonstruktion V05, Folien 30–31");
mc("bauko", K11, "Welcher Imperfektionsbeiwert β_c gilt für Vollholz?", ["0,2", "0,1", "0,49", "0,7"], "Brettschichtholz und Furnierschichtholz sind gleichmäßiger und bekommen β_c = 0,1. Ein kleineres β_c ergibt ein größeres k_c.", "Baukonstruktion V05, Folie 32");
mc("bauko", K11, "Wie lautet der bezogene Schlankheitsgrad im Holzbau?", ["λ_rel,c = l_ef / (π·i) · √(f_c,0,k / E_0,05)", "λ_rel,c = l_ef / i", "λ_rel,c = π · √(E / f_y)", "λ_rel,c = i / l_ef"], "Mit i = √(I/A), beim Rechteck i = h/√12. Charakteristische Festigkeit und 5-%-Quantil des E-Moduls stehen unter der Wurzel.", "Baukonstruktion V05, Folie 32");
pair("bauko", K11, "Formelteile des Holz-Knicknachweises – ordne zu.", [["i = √(I/A)", "Trägheitsradius"], ["l_ef = β·s bzw. β·h", "Ersatzstablänge"], ["k = 0,5·[1 + β_c·(λ_rel,c − 0,3) + λ_rel,c²]", "Hilfswert"], ["k_c = 1 / (k + √(k² − λ_rel,c²)) ≤ 1", "Knickbeiwert"]], "Bis λ_rel,c ≤ 0,3 gibt es keine Abminderung (k_c = 1). In der Klausur liest man k_c oft aus Tabellen ab.", "Baukonstruktion V05, Folien 31–32");
pair("bauko", K11, "Ausbildung von Holzstützen – ordne zu.", [["Nicht gespreizte Stütze", "Teile direkt miteinander verbunden"], ["Gespreizte Stütze", "Einzelstäbe mit Zwischenhölzern oder Vergitterung auf Abstand"], ["Fußpunkt mit Stabdübel und Stahlteil", "gelenkig"], ["Fußpunkt mit Passbolzen oder eingespanntem Mast", "Einspannung"]], "Spreizen vergrößert das Trägheitsmoment und damit den Knickwiderstand. Ein eingespannter Rundholzmast steckt 1,30 bis 1,80 m tief im Fundament.", "Baukonstruktion V05, Folien 33–35");

/* ── Stahl ── */
mc("bauko", K11, "Ungleiche Knicklängen: Eine Stahlstütze ist um die z-Achse in halber Höhe gehalten, um die y-Achse nicht. Was folgt?", ["Beide Achsen getrennt nachweisen: l_cr,y > l_cr,z – maßgebend ist die größere Schlankheit", "Nur die y-Achse prüfen, weil sie stärker ist", "Nur die z-Achse prüfen", "Die Knicklängen werden gemittelt"], "Die schwache z-Achse hat das kleinere i, dafür hier die kürzere Knicklänge. Erst λ = l_cr / i je Achse zeigt, welche maßgebend ist.", "Baukonstruktion V05, Folie 36");
pair("bauko", K11, "Stahl: Systemgrößen – ordne zu.", [["λ_k = L_cr / i", "Schlankheitsgrad"], ["λ_I = π·√(E / f_y)", "Bezugsschlankheitsgrad"], ["λ̄ = λ_k / λ_I", "bezogener Schlankheitsgrad"]], "λ_I gilt für Erzeugnisdicken t ≤ 40 mm.", "Baukonstruktion V05, Folie 37");
pair("bauko", K11, "Welcher Bezugsschlankheitsgrad λ_I gehört zur Stahlsorte?", [["S 235 (f_y = 235 N/mm²)", "λ_I = 93,9"], ["S 355 (f_y = 355 N/mm²)", "λ_I = 76,4"]], "λ_I = π·√(210 000 / f_y). Höherfester Stahl ist bei gleicher Geometrie bezogen schlanker.", "Baukonstruktion V05, Folie 37");
mc("bauko", K11, "Wie lautet der Biegeknicknachweis im Stahlbau?", ["N_Ed / N_b,Rd ≤ 1 mit N_b,Rd = χ·A·f_y / γ_M1", "N_Ed / (A·f_y) ≤ χ²", "N_Ed ≤ N_cr", "σ ≤ f_y / χ"], "χ (0 ≤ χ ≤ 1) erfasst elastisches und plastisches Verhalten sowie Imperfektionen. Ohne Knickgefahr wäre χ = 1 und N_b,Rd die plastische Normalkraft.", "Baukonstruktion V05, Folie 38");
pair("bauko", K11, "Imperfektionsbeiwert α der Knickspannungslinie – ordne zu.", [["a0", "0,13"], ["a", "0,21"], ["b", "0,34"], ["c", "0,49"]], "Linie d hat α = 0,76. Welche Linie gilt, hängt von Querschnitt, Ausweichachse und Herstellung ab (Tabelle auf Folie 40, auch im Schneider).", "Baukonstruktion V05, Folie 39");
mc("bauko", K11, "Wie berechnet man den Abminderungsbeiwert χ?", ["χ = 1 / (φ + √(φ² − λ̄²)) mit φ = 0,5·[1 + α·(λ̄ − 0,2) + λ̄²]", "χ = λ̄ / φ", "χ = 1 − α·λ̄", "χ = π² / λ̄²"], "Die Formel ist genauso aufgebaut wie k_c im Holzbau, nur mit Plateau bis 0,2 statt 0,3 und α statt β_c.", "Baukonstruktion V05, Folie 39");
pair("bauko", K11, "Stahlstützenfuß – welche Lasten werden aufgenommen?", [["Fußplatte mit Ankerschrauben", "nur Vertikallasten"], ["Fußplatte mit Knagge", "Horizontal- und Vertikallasten"], ["Einspannung mit Ankerbarren (Hammerkopf)", "Momente, verkürzt die Knicklänge"]], "Die Knagge greift in eine Aussparung im Fundament und leitet Querkraft ein. Für die Einspannung braucht man einen Hebelarm zwischen den Ankern.", "Baukonstruktion V05, Folie 41");
mc("bauko", K11, "Welche Bauweisen von Verbundstützen zeigt die Vorlesung?", ["Einbetonierte Stahlprofile und ausbetonierte Hohlprofile", "Holz mit Stahlblech verklebt", "Mauerwerk mit Stahlankern", "Glasfaserverstärkter Kunststoff"], "Stahl und Beton wirken zusammen: Der Beton trägt mit und schützt im Brandfall, das Stahlprofil bringt Duktilität.", "Baukonstruktion V05, Folie 43");

/* ── Lösungsweg-Aufgaben ── */
aufgabe({
 "id": "bauko-v05-holzstuetze", "f": "bauko", "t": K11, "titel": "Knicknachweis Holzstütze", "s": "Baukonstruktion V05, Folien 29–32 (eigenes Zahlenbeispiel)",
 "angabe": "Innenstütze aus Vollholz C24, Querschnitt 14/14 cm, Höhe 3,00 m, oben und unten gelenkig gehalten. Bemessungsdruckkraft N_Ed = 100 kN (KLED mittel, NKL 1 → k_mod = 0,8; γ_M = 1,3). C24 nach Schneider Tafel 9.8: f_c,0,k = 21 N/mm², E_0,mean = 11 000 N/mm², für Nadelholz E_0,05 = ⅔ · E_0,mean (Fußnote 3).",
 "geg": ["b = h = 140 mm", "l = 3000 mm, Eulerfall 2", "N_Ed = 100 kN", "f_c,0,k = 21 N/mm²", "E_0,05 = ⅔ · 11 000 = 7333 N/mm²", "k_mod = 0,8, γ_M = 1,3"],
 "ges": "Knicknachweis σ_c,0,d / (k_c·f_c,0,d) ≤ 1",
 "schritte": [
  { "f": "Wie groß sind Knicklänge und Trägheitsradius?", "o": [
    ["l_ef = 1,0 · 3000 = 3000 mm; i = 140/√12 = 40,4 mm", "Beidseitig gelenkig ist Eulerfall 2 mit β = 1. Für das Rechteck gilt i = h/√12."],
    ["l_ef = 2,0 · 3000 = 6000 mm; i = 40,4 mm", "β = 2 gilt für die Kragstütze (unten eingespannt, oben frei)."],
    ["l_ef = 3000 mm; i = 140/12 = 11,7 mm", "Die Wurzel fehlt: i = √(I/A) = h/√12."],
    ["l_ef = 0,7 · 3000 = 2100 mm; i = 40,4 mm", "0,7 gilt nur, wenn ein Ende eingespannt ist."]],
   "r": "l_ef = 3000 mm, i = 40,4 mm" },
  { "f": "Wie groß ist der bezogene Schlankheitsgrad λ_rel,c?", "o": [
    ["3000/(π · 40,4) · √(21/7333) = 1,26", "λ = 74,2 geteilt durch π, mal √(f_c,0,k / E_0,05)."],
    ["3000/40,4 = 74,2", "Das ist der Schlankheitsgrad λ, noch nicht der bezogene."],
    ["3000/(π · 40,4) · √(7333/21) = 442", "Der Bruch unter der Wurzel ist vertauscht."],
    ["74,2 / 93,9 = 0,79", "93,9 ist der Bezugswert für Stahl S 235, nicht für Holz."]],
   "r": "λ_rel,c = 1,26" },
  { "f": "Wie groß ist k_c?", "o": [
    ["k = 0,5·[1 + 0,2·(1,26 − 0,3) + 1,26²] = 1,40 → k_c = 1/(1,40 + √(1,40² − 1,26²)) = 0,503", "β_c = 0,2 für Vollholz. Kontrolle mit Schneider Tafel 9.29a: zwischen λ = 70 (0,550) und 75 (0,495) interpoliert ebenfalls 0,503."],
    ["k = 0,5·[1 + 0,1·(1,26 − 0,3) + 1,26²] = 1,35 → k_c = 0,55", "β_c = 0,1 gilt für Brettschichtholz."],
    ["k_c = 1,0, weil λ_rel,c > 0,3", "Über 0,3 wird abgemindert, nicht darunter."],
    ["k_c = 1/1,26² = 0,63", "Das ist die reine Euler-Kurve ohne Imperfektionen."]],
   "r": "k_c = 0,503" },
  { "f": "Ist der Nachweis erfüllt?", "o": [
    ["σ = 100 000/19 600 = 5,10 N/mm²; f_c,0,d = 0,8 · 21/1,3 = 12,9 N/mm²; 5,10/(0,503 · 12,9) = 0,78 ≤ 1 ✓", "Die Stütze ist zu 78 % ausgenutzt."],
    ["5,10/12,9 = 0,40 ≤ 1 ✓", "Das ist nur der Spannungsnachweis ohne Knicken – k_c fehlt."],
    ["5,10/(0,503 · 21) = 0,48 ≤ 1 ✓", "Mit dem charakteristischen Wert statt des Bemessungswerts gerechnet."],
    ["100/(0,503 · 12,9) = 15,4 > 1 ✗", "Kraft in kN durch Spannung in N/mm² – die Einheiten passen nicht."]],
   "r": "η = 0,78 → Nachweis erfüllt" }],
 "fazit": "Rezept: Eulerfall → l_ef · i = h/√12 · E_0,05 = ⅔ · E_0,mean · λ_rel,c · k und k_c (β_c = 0,2 Vollholz) · f_c,0,d = k_mod·f_c,0,k/γ_M · σ_c,0,d/(k_c·f_c,0,d) ≤ 1. Mit β = 2 (Kragstütze) wäre λ_rel,c = 2,53 und k_c nur 0,14 – der Nachweis wäre klar verfehlt."
});

aufgabe({
 "id": "bauko-v05-stahlstuetze", "f": "bauko", "t": K11, "titel": "Biegeknicken Stahlstütze HEB 200", "s": "Baukonstruktion V05, Folien 37–40 (eigenes Zahlenbeispiel)",
 "angabe": "Stütze HEB 200 aus S 235, Höhe 4,00 m, oben und unten gelenkig, in beiden Richtungen nicht zwischengehalten. N_Ed = 800 kN, γ_M1 = 1,1. Querschnittswerte: A = 78,1 cm², i_y = 8,54 cm, i_z = 5,07 cm. Knickspannungslinien für gewalzte I-Profile mit h/b ≤ 1,2 und t_f ≤ 100 mm: um y → b, um z → c.",
 "geg": ["L_cr = 4000 mm (beide Achsen)", "A = 7810 mm²", "i_y = 85,4 mm, i_z = 50,7 mm", "f_y = 235 N/mm², λ_I = 93,9", "N_Ed = 800 kN"],
 "ges": "Nachweis N_Ed / N_b,Rd ≤ 1",
 "schritte": [
  { "f": "Welche Achse ist maßgebend?", "o": [
    ["Die z-Achse: λ_z = 4000/50,7 = 78,9 > λ_y = 46,8, dazu die ungünstigere Linie c", "Gleiche Knicklänge, kleineres i → größere Schlankheit um die schwache Achse."],
    ["Die y-Achse, weil sie die starke Achse ist", "Die starke Achse hat das größere i und knickt deshalb später."],
    ["Beide sind gleich, weil die Knicklänge gleich ist", "Die Trägheitsradien unterscheiden sich deutlich."],
    ["Keine, eine HEB-Stütze knickt nicht", "Jeder schlanke Druckstab kann knicken."]],
   "r": "maßgebend z-Achse, λ_z = 78,9" },
  { "f": "Wie groß ist der bezogene Schlankheitsgrad λ̄_z?", "o": [
    ["78,9 / 93,9 = 0,84", "λ̄ = λ_k / λ_I mit λ_I = 93,9 für S 235."],
    ["78,9 / 76,4 = 1,03", "76,4 gilt für S 355."],
    ["78,9", "Das ist λ_k, noch nicht bezogen."],
    ["93,9 / 78,9 = 1,19", "Der Bruch ist umgedreht."]],
   "r": "λ̄_z = 0,84" },
  { "f": "Wie groß ist χ_z (Linie c, α = 0,49)?", "o": [
    ["φ = 0,5·[1 + 0,49·(0,84 − 0,2) + 0,84²] = 1,01 → χ = 1/(1,01 + √(1,01² − 0,84²)) = 0,637", "α = 0,49 für Knickspannungslinie c."],
    ["φ mit α = 0,34 → χ = 0,70", "0,34 gehört zur Linie b (y-Achse)."],
    ["χ = 1/0,84² = 1,42", "χ ist nie größer als 1; das wäre die reine Euler-Hyperbel."],
    ["χ = 1,0, weil λ̄ < 1", "Abgemindert wird schon ab λ̄ > 0,2."]],
   "r": "χ_z = 0,637" },
  { "f": "Ist der Nachweis erfüllt?", "o": [
    ["N_b,Rd = 0,637 · 7810 · 235 / 1,1 = 1063 kN → 800/1063 = 0,75 ≤ 1 ✓", "Die Stütze ist zu 75 % ausgenutzt."],
    ["N_b,Rd = 7810 · 235 / 1,1 = 1669 kN → 0,48 ✓", "Das ist N_pl,Rd ohne Knickabminderung."],
    ["N_b,Rd = 0,637 · 7810 · 235 = 1169 kN → 0,68 ✓", "γ_M1 = 1,1 fehlt."],
    ["N_b,Rd = 0,637 · 78,1 · 235 / 1,1 = 10,6 kN → nicht erfüllt", "A in cm² mit f_y in N/mm² – erst in mm² umrechnen."]],
   "r": "η = 0,75 → Nachweis erfüllt" }],
 "fazit": "Rezept: λ_k = L_cr/i je Achse · λ̄ = λ_k/λ_I · Knickspannungslinie → α · φ und χ · N_b,Rd = χ·A·f_y/γ_M1. Um y wäre χ_y = 0,88 (Linie b) – die schwache Achse entscheidet."
});

/* Korrektur älterer Aufgabe: E_0,05 nach Schneider Tafel 9.8 (Fußnote 3) = ⅔ · E_0,mean = 7333 N/mm² – auf diesen Wert ist auch Tafel 9.29a (k_c) gerechnet. Ergebnis k_c = 0,44 bleibt. */
Object.assign(KORREKTUR, { "bauko-knick-stuetze": { "geg": ["14/14 NH C24", "l = 3,27 m", "N_d = 53,41 kN", "k_mod = 1,0", "f_c,0,k = 21 N/mm²", "E_0,05 = ⅔ · 11 000 = 7333 N/mm² (Schneider Tafel 9.8, Fußnote 3)", "β_c = 0,2"] } });
