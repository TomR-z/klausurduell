/* Klausurduell – Fragenbank (Solo, Version 1)
   Nur Merk-, Verständnis- und Vorgehensfragen, keine Rechenaufgaben.
   Quellen: Toms Folien, Übungen und Zusammenfassungen im RWTH-Ordner (Stand 02.11.2026).
   mc: erste Antwort ist die richtige (wird beim Anzeigen gemischt)
   wf: true/false · ord: Schritte in richtiger Reihenfolge · pair: [links, rechts] */
const FRAGEN = [];
function mc(f, t, q, a, e, s) { FRAGEN.push({ f, t, typ: "mc", q, a, e, s }); }
function wf(f, t, q, c, e, s) { FRAGEN.push({ f, t, typ: "wf", q, c, e, s }); }
function ord(f, t, q, steps, e, s) { FRAGEN.push({ f, t, typ: "ord", q, steps, e, s }); }
function pair(f, t, q, pairs, e, s) { FRAGEN.push({ f, t, typ: "pair", q, pairs, e, s }); }

/* ───────── Hydromechanik ───────── */
const H1 = "Eigenschaften des Wassers", H2 = "Hydrostatik 1", H3 = "Hydrostatik 2";
mc("hydro", H1, "Bei welcher Temperatur hat Wasser seine größte Dichte?", ["4 °C", "0 °C", "10 °C", "20 °C"], "Dichteanomalie: Das Maximum liegt bei 4 °C. Beim Gefrieren sinkt die Dichte sprunghaft um rund 10 %.", "Hydromechanik V01");
wf("hydro", H1, "Eis ist dichter als flüssiges Wasser.", false, "Falsch. Eis ist rund 10 % leichter – deshalb schwimmen Eisberge und Seen frieren von oben zu.", "Hydromechanik V01");
mc("hydro", H1, "Welche Dichte nimmst du für Süßwasser, wenn die Aufgabe nichts angibt?", ["1000 kg/m³", "1025 kg/m³", "980 kg/m³", "1100 kg/m³"], "Standardwert ρ_W = 1000 kg/m³ = 1,0 t/m³. 1025 kg/m³ ist Meerwasser.", "Hydromechanik V01");
mc("hydro", H1, "Welchen Dichtewert nimmt man in Aufgaben meist für Meerwasser?", ["1025 kg/m³", "1000 kg/m³", "1220 kg/m³", "1007 kg/m³"], "Nordsee mit ca. 3,5 % Salz: 1025–1026 kg/m³. 1220 ist das Tote Meer, 1007 die Ostsee.", "Hydromechanik V01");
wf("hydro", H1, "In Hydromechanik I darf Wasser als inkompressibel angesehen werden.", true, "Richtig. E_W ≈ 2·10⁹ N/m²: Selbst 200 bar drücken Wasser nur um etwa 1 % zusammen.", "Hydromechanik V01");
mc("hydro", H1, "Was beschreibt die Viskosität?", ["Die Zähigkeit einer Flüssigkeit", "Die Zusammendrückbarkeit", "Die Oberflächenspannung", "Die Dichte bei 4 °C"], "Viskosität = Zähigkeit. Sie ist der Grund für Reibung in realen Flüssigkeiten (Honig ≫ Wasser).", "Hydromechanik V01");
pair("hydro", H1, "Ordne zu.", [["Hydrostatik", "ruhendes Wasser"], ["Hydrodynamik", "strömendes Wasser"], ["Wasser im dünnen Röhrchen", "steigt, konkaver Meniskus"], ["Quecksilber im dünnen Röhrchen", "sinkt, konvexer Meniskus"]], "Benetzende Flüssigkeiten (Randwinkel < 90°) steigen im Röhrchen (Aszension), nicht benetzende sinken (Depression).", "Hydromechanik V01");
mc("hydro", H1, "Je dünner ein Glasröhrchen, desto …", ["höher steigt das Wasser kapillar", "tiefer sinkt das Wasser", "geringer ist der Effekt", "größer ist die Dichte"], "h_kap = 4σ/(ρ·g·d): Der Durchmesser steht im Nenner.", "Hydromechanik V01");
mc("hydro", H1, "In welchem Boden ist der kapillare Aufstieg am größten?", ["Ton", "Sand", "Kies", "überall gleich"], "Ton bis ca. 400 mm, Sand 20–80 mm, Kies unter 3 mm – je feiner die Poren, desto höher.", "Hydromechanik V01");
mc("hydro", H2, "Welche Spannungen kann ruhendes Wasser aufnehmen?", ["Nur Druck", "Nur Zug", "Druck und Zug", "Druck und Schub"], "Wasser kann nur Druck aufnehmen – keinen Zug und im Ruhezustand keinen Schub.", "Hydromechanik V02");
mc("hydro", H2, "Wie wächst der hydrostatische Druck mit der Tiefe?", ["Linear", "Quadratisch", "Exponentiell", "Gar nicht"], "p = ρ·g·z – doppelte Tiefe, doppelter Druck.", "Hydromechanik V02");
mc("hydro", H2, "Wo greift die Wasserdruckkraft auf eine senkrechte Wand an?", ["⅔·h unter dem Wasserspiegel", "In halber Wassertiefe", "⅓·h unter dem Wasserspiegel", "Direkt an der Sohle"], "Im Schwerpunkt des Druckdreiecks: ⅔·h unter dem Spiegel, also h/3 über der Sohle.", "Hydromechanik V02");
mc("hydro", H2, "10 m Wassersäule entsprechen ungefähr …", ["1 bar", "10 bar", "0,1 bar", "100 bar"], "1 mWS ≈ 10 kPa, also 10 mWS ≈ 100 kPa ≈ 1 bar.", "Hydromechanik V02");
mc("hydro", H2, "Ab welchem Bezugswert wird der Relativdruck gemessen?", ["Atmosphärendruck", "Vakuum", "Druck an der Sohle", "Dampfdruck"], "p_rel = p_abs − p₀. In der Hydromechanik rechnet man standardmäßig relativ.", "Hydromechanik V02");
wf("hydro", H2, "Der Wasserdruck steht immer senkrecht auf einer Fläche.", true, "Richtig. Druck ist ein Skalar, wirkt in alle Richtungen gleich und immer senkrecht zur Fläche.", "Hydromechanik V02");
mc("hydro", H2, "Öl über Wasser: Wie sieht der Druckverlauf an der Schichtgrenze aus?", ["Knick, aber kein Sprung", "Sprung nach oben", "Sprung nach unten", "Er bleibt konstant"], "Ab der Grenze wächst der Druck mit der neuen Dichte weiter – die Steigung ändert sich, der Wert springt nicht.", "Hydromechanik V02");
mc("hydro", H2, "Goldene Regel bei kommunizierenden Röhren:", ["Gleiche Höhe in derselben ruhenden Flüssigkeit → gleicher Druck", "Gleiche Höhe → gleiche Geschwindigkeit", "Der Druck ist überall gleich", "Breitere Röhre → höherer Druck"], "Damit löst du jedes Manometer und U-Rohr.", "Hydromechanik V02");
ord("hydro", H2, "Bring das Vorgehen beim U-Rohr-Manometer in die richtige Reihenfolge.", ["Bekannten Punkt wählen (z. B. offene Oberfläche, p = 0)", "Nach unten +ρgΔh, nach oben −ρgΔh durchwandern", "Auf gleicher Höhe in derselben Flüssigkeit Drücke gleichsetzen", "Nach der gesuchten Größe auflösen"], "„Durchwandern“ vom bekannten Punkt aus – gleiche Höhe heißt gleicher Druck, solange es dieselbe zusammenhängende Flüssigkeit ist.", "Hydromechanik V02");
mc("hydro", H2, "Kraft auf eine beliebige ebene, geneigte Fläche:", ["Druck im Flächenschwerpunkt × Fläche", "Druck an der Oberkante × Fläche", "Maximaldruck × Fläche", "½ × Druck an der Unterkante"], "F = ρ·g·h_S·A mit h_S = Tiefe des Flächenschwerpunkts.", "Hydromechanik V02");
mc("hydro", H2, "Gekrümmte Fläche: Was ist die vertikale Kraftkomponente F_V?", ["Gewicht des Wassers über der Fläche", "Kraft auf die senkrechte Projektion", "Immer null", "Druck im Scheitel × Fläche"], "F_H aus der Projektion auf die Senkrechte, F_V = Gewicht des Wasserkörpers über der Fläche.", "Hydromechanik V02");
mc("hydro", H3, "Auf welcher Seite dichtet man eine Gründungsfuge ab?", ["Auf der Wasserseite", "Auf der Luftseite", "In der Mitte der Sohle", "Egal"], "Sonst drückt Wasser unter die ganze Sohle und erzeugt Sohlwasserdruck F_u = ρ·g·h·b.", "Hydromechanik V03");
mc("hydro", H3, "Prinzip des Archimedes: Der Auftrieb ist gleich …", ["dem Gewicht des verdrängten Wassers", "dem Gewicht des Körpers", "dem Druck an der Unterseite", "dem Volumen des Körpers"], "F_A = ρ_W·g·V_V – er greift im Schwerpunkt des verdrängten Volumens an.", "Hydromechanik V03");
wf("hydro", H3, "Ein vollständig getauchter Körper erfährt in größerer Tiefe mehr Auftrieb.", false, "Falsch. Der Auftrieb hängt nur vom verdrängten Volumen ab, nicht von der Tiefe.", "Hydromechanik V03");
mc("hydro", H3, "Ein Schiff fährt vom Fluss ins Meer. Was passiert?", ["Es liegt etwas höher im Wasser", "Es liegt tiefer im Wasser", "Nichts", "Es kentert leichter"], "Salzwasser ist dichter und trägt mehr – im Folienbeispiel rund 10 cm weniger Tiefgang.", "Hydromechanik V03");
wf("hydro", H3, "Wenn schwimmendes Eis schmilzt, steigt der Wasserspiegel.", false, "Falsch. Schwimmendes Eis verdrängt genau so viel Wasser, wie es wiegt – geschmolzen füllt es genau dieses Volumen.", "Hydromechanik V03");
ord("hydro", H3, "Schwimmt der Körper – und wie tief? Bring die Schritte in die richtige Reihenfolge.", ["Gewicht des Körpers G bestimmen", "Nötiges Verdrängungsvolumen V_V = G/(ρ_W·g)", "Vergleichen: V_V ≤ Körpervolumen?", "Tiefgang h_W = V_V / A"], "Erst annehmen, dass er schwimmt, dann prüfen. Ist V_V größer als das Körpervolumen, sinkt er.", "Hydromechanik V03");
ord("hydro", H3, "Wägung in Luft und in Wasser: Wie bestimmst du die Dichte?", ["Auftrieb = Gewichtsverlust (G_Luft − G_Wasser)", "Volumen V = F_A / (ρ_W·g)", "Masse m = G_Luft / g", "Dichte ρ = m / V"], "So hat Archimedes die gefälschte Krone entlarvt.", "Hydromechanik V03");
mc("hydro", H3, "Ein Wasserbehälter wird nach oben beschleunigt. Was passiert mit dem Druck?", ["Er steigt", "Er sinkt", "Er bleibt gleich", "Er wird null"], "Effektive Beschleunigung b_e = g + b → p = ρ·(g + b)·h.", "Hydromechanik V03");
mc("hydro", H3, "Wie stellt sich der Wasserspiegel in einem beschleunigten Tankwagen ein?", ["Senkrecht zur effektiven Beschleunigung", "Immer waagerecht", "Parallel zur Fahrtrichtung", "Senkrecht zur Fahrbahn"], "Die Trägheitskraft wirkt entgegen b; Isobaren und Spiegel stehen senkrecht zu b_e = g + b.", "Hydromechanik V03");
mc("hydro", H3, "Was ist der Freibord?", ["Gesamthöhe minus Tiefgang", "Tiefgang minus Gesamthöhe", "Breite der Wasserlinie", "Höhe des Schwerpunkts"], "f = H − h_W: der Teil des Körpers über der Wasserlinie.", "Hydromechanik V03");

/* ───────── Physik ───────── */
const P1 = "Einheiten", P2 = "Geradlinige Bewegung", P3 = "Vektoren", P4 = "Bewegung in 2D/3D";
mc("phys", P1, "Wie viele SI-Basiseinheiten gibt es?", ["7", "5", "6", "10"], "Meter, Kilogramm, Sekunde, Ampere, Kelvin, Mol, Candela.", "Physik V01 Einheiten");
pair("phys", P1, "Ordne die Größe ihrer SI-Basiseinheit zu.", [["Stromstärke", "Ampere"], ["Stoffmenge", "Mol"], ["Lichtstärke", "Candela"], ["Temperatur", "Kelvin"]], "Die übrigen drei: Länge (m), Masse (kg), Zeit (s).", "Physik V01 Einheiten");
pair("phys", P1, "Ordne den Vorsatz dem Faktor zu.", [["Mikro (µ)", "10⁻⁶"], ["Nano (n)", "10⁻⁹"], ["Mega (M)", "10⁶"], ["Giga (G)", "10⁹"]], "Merke: Milli 10⁻³, Kilo 10³ – dann jeweils drei Zehnerpotenzen weiter.", "Physik V01 Einheiten");
mc("phys", P1, "Wie viele signifikante Stellen hat 0,00340?", ["3", "2", "5", "6"], "Führende Nullen zählen nicht, die Null am Ende nach dem Komma schon: 3, 4, 0.", "Physik V01 Einheiten");
mc("phys", P1, "Wie schreibt man Variablen und Konstanten korrekt?", ["Variablen kursiv, Konstanten aufrecht", "Beide kursiv", "Konstanten kursiv, Variablen aufrecht", "Beide fett"], "Vektoren zusätzlich fett oder mit Pfeil.", "Physik V01");
wf("phys", P1, "Ein Diagramm ohne beschriftete Achsen gibt in Übung und Klausur trotzdem Punkte.", false, "Falsch – laut Dr. Nebel gibt es dafür keine Punkte. Achsen immer mit Größe und Einheit beschriften.", "Physik, Hinweis zur Klausur");
mc("phys", P2, "Was ist die Geschwindigkeit mathematisch?", ["Die Ableitung des Orts nach der Zeit", "Die Ableitung der Beschleunigung", "Das Integral des Orts", "Ort mal Zeit"], "v = dx/dt, a = dv/dt.", "Physik V01 Mechanik 1");
mc("phys", P2, "Was bedeutet die Fläche unter der v(t)-Kurve?", ["Die zurückgelegte Verschiebung", "Die Beschleunigung", "Die Endgeschwindigkeit", "Die Zeit"], "Integral der Geschwindigkeit über die Zeit = Verschiebung (Blatt 1, A4).", "Physik V01, Blatt 1");
mc("phys", P2, "Was zeigt die Steigung im x(t)-Diagramm?", ["Die momentane Geschwindigkeit", "Die Beschleunigung", "Den Weg", "Die Masse"], "Steigung der Tangente = dx/dt = v.", "Physik V01 Mechanik 1");
pair("phys", P2, "Ordne die Teilgebiete der Mechanik zu.", [["Kinematik", "beschreibt Bewegung ohne Ursachen"], ["Dynamik", "Bewegung mit Kräften als Ursache"], ["Statik", "Kräfte im Gleichgewicht, keine Bewegung"]], "Diese Einteilung kam gleich zu Beginn von Mechanik 1.", "Physik V01 Mechanik 1");
mc("phys", P2, "Welche Größe ist ein Skalar?", ["Masse", "Geschwindigkeit", "Kraft", "Beschleunigung"], "Skalare haben nur einen Betrag, Vektoren zusätzlich eine Richtung.", "Physik V01 Mechanik 1");
mc("phys", P2, "Gleiche Strecken mit v₁ und v₂: Welche Durchschnittsgeschwindigkeit?", ["Harmonisches Mittel 2v₁v₂/(v₁+v₂)", "Arithmetisches Mittel (v₁+v₂)/2", "Geometrisches Mittel √(v₁v₂)", "Die größere der beiden"], "Bei gleichen Zeiten wäre es das arithmetische Mittel – Blatt 1, A2.", "Physik Blatt 1");
mc("phys", P3, "Was ergibt das Skalarprodukt zweier senkrechter Vektoren?", ["0", "1", "Das Produkt der Beträge", "Einen Vektor"], "a·b = |a||b|cos 90° = 0.", "Physik V02 Vektoren");
mc("phys", P3, "Was ist das Ergebnis eines Kreuzprodukts a × b?", ["Ein Vektor senkrecht zu a und b", "Eine Zahl", "Ein Vektor parallel zu a", "Immer der Nullvektor"], "Betrag |a||b|sin φ, Richtung nach der Rechte-Hand-Regel.", "Physik V02 Vektoren");
wf("phys", P3, "Für das Kreuzprodukt gilt a × b = b × a.", false, "Falsch – es ist antikommutativ: a × b = −(b × a).", "Physik V02 Vektoren");
mc("phys", P3, "Kreuzprodukt zweier paralleler oder antiparalleler Vektoren:", ["Nullvektor", "Einheitsvektor", "Doppelter Vektor", "Nicht definiert"], "sin 0° = sin 180° = 0. Achtung Folie 24: antiparallel heißt φ = π.", "Physik V02 Vektoren");
mc("phys", P3, "Du bestimmst einen Richtungswinkel mit arctan. Worauf musst du achten?", ["Quadrant prüfen und korrigieren", "Ergebnis immer verdoppeln", "In Grad nichts beachten", "Vorzeichen ignorieren"], "arctan liefert nur −90° … 90°. Im II. und III. Quadranten +180° (bzw. π − …).", "Physik V02, Formelsammlung Vektorrechnung");
mc("phys", P3, "Mit welcher Funktion bestimmst du den Winkel θ zur z-Achse?", ["arccos(a_z / |a|)", "arctan(a_y / a_x)", "arcsin(a_x / a_y)", "arctan(a_z)"], "arccos ist eindeutig auf 0 … 180° – ideal für Winkel gegen eine Achse.", "Physik V02, Folie 19");
mc("phys", P4, "Welche Beschleunigung wirkt beim Wurf ohne Luftwiderstand?", ["Konstant −g in y-Richtung", "Null", "Abnehmend bis zum Scheitel", "Waagerecht in Wurfrichtung"], "a = −g·e_y über die ganze Flugbahn.", "Physik V03");
wf("phys", P4, "Beim schiefen Wurf ohne Luftwiderstand bleibt die horizontale Geschwindigkeit konstant.", true, "Richtig – in x-Richtung wirkt keine Kraft: v_x = v₀·cos α.", "Physik V03");
mc("phys", P4, "Was gilt im Scheitelpunkt eines Wurfs?", ["Die vertikale Geschwindigkeit ist null", "Die Geschwindigkeit ist null", "Die Beschleunigung ist null", "Die horizontale Geschwindigkeit ist null"], "Nur v_y = 0 – v_x und g bleiben.", "Physik V03");
mc("phys", P4, "Wohin zeigt die Beschleunigung bei gleichförmiger Kreisbewegung?", ["Zum Kreismittelpunkt", "Tangential", "Nach außen", "Es gibt keine"], "Zentripetalbeschleunigung a = v²/r – die Richtung von v ändert sich ständig.", "Physik V03");
wf("phys", P4, "Bei gleichförmiger Kreisbewegung ist die Beschleunigung null, weil |v| konstant ist.", false, "Falsch. Die Richtung ändert sich, also gibt es eine Beschleunigung zum Mittelpunkt.", "Physik V03");
ord("phys", P4, "Vorgehen bei einer Wurfaufgabe (wie Blatt 3): Bring die Schritte in Reihenfolge.", ["Koordinatensystem und Anfangsbedingungen festlegen", "Beschleunigung ansetzen: a = −g·e_y", "v(t) und r(t) durch Integration aufstellen", "Bedingung formulieren, z. B. x(t₁) = D → t₁", "t₁ in die Gesetze einsetzen"], "So geht auch die Musterlösung vor: Gesetze aus Anfangsbedingungen, dann die Bedingung der Aufgabe.", "Physik Blatt 3, Hinweise");

/* ───────── Baustoffkunde ───────── */
const B1 = "Einteilung und Grundlagen", B2 = "Mechanische Eigenschaften", B3 = "Physikalische Eigenschaften";
pair("bsk", B1, "Ordne den Baustoff seiner Gruppe zu.", [["Stahl", "metallisch"], ["Ziegel", "anorganisch-nichtmetallisch"], ["Holz", "organisch"], ["Stahlbeton", "Verbundwerkstoff"]], "Verbundwerkstoffe kombinieren Stärken: Beton druckfest, Stahl zugfest.", "Baustoffkunde V01");
mc("bsk", B1, "Welches Bindemittel erhärtet auch unter Wasser?", ["Zement (hydraulisch)", "Gips (hydratisch)", "Lehm", "Bitumen"], "Zement erhärtet hydraulisch und ist wasserbeständig, Gips nicht.", "Baustoffkunde V01");
wf("bsk", B1, "Gips ist wasserbeständig.", false, "Falsch – Gips ist wasserlöslich. Das ist sein Schwachpunkt bei der Dauerhaftigkeit.", "Baustoffkunde V01");
mc("bsk", B1, "Was gehört NICHT zu den vier Kriterien, nach denen man Baustoffe beurteilt?", ["Farbe", "Festigkeit", "Verformbarkeit", "Dauerhaftigkeit"], "Die vier Kriterien: Gewicht, Festigkeit, Verformbarkeit, Dauerhaftigkeit.", "Baustoffkunde V01");
pair("bsk", B1, "Vitruvs drei Anforderungen an jedes Bauwerk:", [["firmitas", "Festigkeit"], ["utilitas", "Nutzbarkeit"], ["venustas", "Schönheit"]], "Vitruv, 1. Jh. v. Chr. – heute regelt das die EU-Bauproduktenverordnung.", "Baustoffkunde V01");
mc("bsk", B1, "Seit wann gibt es etwa Stahlbeton?", ["Ca. 1850", "Ca. 100 v. Chr.", "Ca. 1930", "Ca. 1960"], "Monier-Patent 1867, Spannbeton ab ca. 1930.", "Baustoffkunde V01");
mc("bsk", B1, "Welche Einwirkung ist ein chemischer Angriff auf die Dauerhaftigkeit?", ["Karbonatisierung", "Frost-Tau-Wechsel", "UV-Strahlung", "Verschleiß"], "Chemisch: Karbonatisierung, Chloride, lösender und treibender Angriff. Frost und UV sind physikalisch.", "Baustoffkunde V01");
pair("bsk", B2, "Ordne die Beanspruchung einem Bauteil zu.", [["Druck", "Stütze"], ["Zug", "Behälterwand"], ["Biegung", "Balken"], ["Schub", "wirkt in der Schnittfläche wie eine Schere"]], "Fünfte Grundart ist Torsion. Viele Bauteile haben mehrere gleichzeitig.", "Baustoffkunde V02");
mc("bsk", B2, "Warum werden Balken hochkant eingebaut?", ["Das Widerstandsmoment wächst mit h²", "Sie sind dann leichter", "Wegen der Querdehnung", "Damit sie weniger kriechen"], "W = b·h²/6. Der Kraki-Balken ist hochkant 2,7-mal biegefester.", "Baustoffkunde V02");
mc("bsk", B2, "Welches Vorzeichen hat eine Druckspannung?", ["Negativ", "Positiv", "Kein Vorzeichen", "Je nach Baustoff"], "Druck = −, Zug = +.", "Baustoffkunde V02");
mc("bsk", B2, "Mehrachsiger Druck auf ein Bauteil …", ["erhöht die Druckfestigkeit stark", "senkt die Druckfestigkeit", "ändert nichts", "macht den Baustoff spröde"], "Dreiachsig kann die Druckfestigkeit ein Vielfaches der einachsigen erreichen.", "Baustoffkunde V02");
mc("bsk", B2, "Was bewirkt eine häufig wiederholte, schwingende Belastung?", ["Sie senkt die Festigkeit (Ermüdung)", "Sie erhöht die Festigkeit", "Nichts", "Sie erhöht den E-Modul"], "Bruch, obwohl jede einzelne Last ertragbar wäre – Wöhlerlinie.", "Baustoffkunde V02");
mc("bsk", B2, "Was ist die Steigung der σ-ε-Linie im linearen Bereich?", ["Der E-Modul", "Die Festigkeit", "Die Querdehnzahl", "Die Bruchdehnung"], "Hooke: σ = E·ε. Steigung = Steifigkeit, Höhe = Festigkeit, Länge = Verformbarkeit.", "Baustoffkunde V02");
wf("bsk", B2, "Elastisch bedeutet: Die Verformung geht bei Entlastung vollständig zurück.", true, "Richtig. Bei plastischem Verhalten bleibt ein Teil der Verformung.", "Baustoffkunde V02");
pair("bsk", B2, "Ordne die Begriffe zu.", [["Kriechen", "Last konstant, Verformung wächst"], ["Relaxation", "Verformung konstant, Spannung sinkt"], ["Ermüdung", "Bruch unter schwingender Last"], ["Dauerfestigkeit", "Wöhlerlinie wird waagerecht"]], "Kriechen kennst du von Betondecken, Relaxation von Spannstahl.", "Baustoffkunde V02");
mc("bsk", B2, "Wie groß ist die Zugfestigkeit von Beton etwa?", ["≈ 1/10 der Druckfestigkeit", "Gleich der Druckfestigkeit", "Doppelt so groß", "Null"], "Deshalb übernimmt im Stahlbeton die Bewehrung den Zug.", "Baustoffkunde V02");
mc("bsk", B2, "E-Modul von Baustahl:", ["≈ 210 000 N/mm²", "≈ 30 000 N/mm²", "≈ 10 000 N/mm²", "≈ 2 000 000 N/mm²"], "Beton 10 000–50 000, Holz längs ≈ 10 000. Stahl ist rund 7-mal steifer als Beton.", "Baustoffkunde V02, Ü01");
mc("bsk", B2, "Was bedeutet eine Querdehnzahl µ = 0,5?", ["Das Volumen bleibt gleich", "Keine Querdehnung", "Der Stoff ist spröde", "Der Stoff dehnt sich quer doppelt"], "Typisch für Gummi. Reale Baustoffe liegen darunter, Stahl bei ca. 0,3.", "Baustoffkunde V02");
wf("bsk", B2, "Beton und Stahl dehnen sich bei Erwärmung fast gleich aus.", true, "Richtig – α_T ≈ 1,2·10⁻⁵ 1/K. Ein Grund, warum Stahlbeton überhaupt funktioniert.", "Baustoffkunde V02, Ü01");
mc("bsk", B2, "Wie verhält sich Baustahl bei Kälte im Kerbschlagversuch?", ["Er wird spröde (Steilabfall)", "Er wird zäher", "Unverändert", "Er wird weicher"], "Aluminium hat keinen Steilabfall und bleibt auch kalt zäh.", "Baustoffkunde V02");
pair("bsk", B2, "Ordne den σ-ε-Typ einem Beispiel zu.", [["linear-elastisch, spröde", "Spaghetti, Glas"], ["elastisch-plastisch, duktil", "Büroklammer, Baustahl"], ["nichtlinear-elastisch mit Hysterese", "Gummiband, Elastomerlager"]], "Genau diese drei Typen kamen in Ü01, Aufgabe 2.", "Baustoffkunde Ü01");
ord("bsk", B2, "E-Modul aus einem σ-ε-Diagramm bestimmen: Reihenfolge?", ["Zwei Punkte im geraden Anfangsteil ablesen", "Dehnung von % oder ‰ in eine reine Zahl umwandeln", "Δσ und Δε bilden", "E = Δσ / Δε"], "Falle: % oder ‰ nicht umgerechnet → E um Faktor 100 oder 1000 falsch.", "Baustoffkunde V02, Ü01");
ord("bsk", B2, "Spannungsnachweis einer Stütze (wie Ü01): Reihenfolge?", ["Masse in Kraft umrechnen: F = m·g", "Querschnittsfläche A bestimmen", "σ = F / A in N/mm² berechnen", "Mit der Festigkeit vergleichen (Ausnutzung)"], "Faustregel 1 t ≈ 10 kN. Kraft in N, Fläche in mm² → N/mm².", "Baustoffkunde Ü01");
ord("bsk", B3, "Ordne die Dichten von groß nach klein.", ["Reindichte", "Kornrohdichte", "Schüttdichte"], "Je mehr Hohlraum im Bezugsvolumen steckt, desto kleiner die Dichte.", "Baustoffkunde V03");
mc("bsk", B3, "Welcher Baustoff ist pro Kilogramm am zugfestesten?", ["Holz", "Stahl", "Beton", "Ziegel"], "Reißlänge f/ρ: Fichte ≈ 20 700 m, Stahl ≈ 5 100 m – Holz fast 4-mal besser.", "Baustoffkunde V03");
mc("bsk", B3, "Was ist die Porosität?", ["Porenvolumen / Gesamtvolumen", "Masse / Volumen", "Wasseraufnahme / Masse", "Rohdichte / Reindichte"], "Meist in Vol.-%. Poren bestimmen, wie Wasser, Gase und Salze eindringen.", "Baustoffkunde V03");

/* ───────── Baukonstruktion ───────── */
const K1 = "Sicherheitskonzept", K2 = "Lasten", K3 = "Rechenweg", K4 = "Holzbemessung";
mc("bauko", K1, "Wie lautet der Grundnachweis im Sicherheitskonzept?", ["E_d ≤ R_d", "E_k ≤ R_k", "R_d ≤ E_d", "E_d = R_d"], "Bemessungswert der Einwirkung ≤ Bemessungswert des Widerstands.", "Baukonstruktion V01");
pair("bauko", K1, "Ordne zu.", [["GZT (ULS)", "Festigkeit, Lagesicherheit, Stabilität"], ["GZG (SLS)", "Durchbiegung, Schwingung, Risse"], ["E_d", "Bemessungswert der Einwirkung"], ["R_d", "Bemessungswert des Widerstands"]], "GZT = Tragfähigkeit, GZG = Gebrauchstauglichkeit.", "Baukonstruktion V01");
mc("bauko", K1, "Teilsicherheitsbeiwert γ_G für ständige Lasten, ungünstig:", ["1,35", "1,50", "1,00", "1,15"], "Günstig wirkend: γ_G = 1,00.", "Baukonstruktion V01");
mc("bauko", K1, "Teilsicherheitsbeiwert γ_Q für veränderliche Lasten, ungünstig:", ["1,50", "1,35", "1,00", "0"], "Günstig wirkend wird die veränderliche Last weggelassen: γ_Q = 0.", "Baukonstruktion V01");
pair("bauko", K1, "Ordne die Einwirkungsgruppen zu.", [["G", "ständig (Eigengewicht)"], ["Q", "veränderlich (Nutzlast, Schnee, Wind)"], ["A", "außergewöhnlich (Anprall, Explosion)"], ["P", "Vorspannung"]], "Dazu kommen Erdbeben A_E und vorübergehende Situationen (Montage).", "Baukonstruktion V01");
mc("bauko", K1, "Ein Fahrzeug prallt gegen eine Stütze. Welche Einwirkung ist das?", ["Außergewöhnlich (A)", "Veränderlich (Q)", "Ständig (G)", "Vorspannung (P)"], "Anprall und Explosion sind außergewöhnliche Einwirkungen.", "Baukonstruktion V01");
wf("bauko", K1, "Rechen- und Ausführungsfehler sind durch die Teilsicherheitsbeiwerte abgedeckt.", false, "Falsch – das steht ausdrücklich in V01. Absolute Sicherheit gibt es nicht.", "Baukonstruktion V01");
pair("bauko", K1, "Ordne den Kombinationsbeiwert ψ₀ zu.", [["Nutzlast Kat. A (Wohnen)", "0,7"], ["Wind", "0,6"], ["Schnee bis NN + 1000 m", "0,5"]], "ψ₀ gilt für die begleitenden veränderlichen Lasten in der Grundkombination.", "Baukonstruktion V01");
mc("bauko", K1, "Wie lautet die Grundkombination?", ["1,35·G_k + 1,5·Q_k,1 + 1,5·ψ₀·Q_k,i", "1,5·G_k + 1,35·Q_k", "G_k + Q_k", "1,35·(G_k + Q_k)"], "Eine Last ist führend (voller Wert), alle weiteren werden mit ψ₀ abgemindert.", "Baukonstruktion V01");
mc("bauko", K2, "Welche Last ist eine veränderliche Einwirkung?", ["Schnee", "Eigengewicht", "Fahrzeuganprall", "Vorspannung"], "Q: Nutzlast, Schnee, Wind, Temperatur, Erd- und Wasserdruck, Setzung.", "Baukonstruktion V01");
pair("bauko", K2, "Wie wirken die Lasten auf einen Sparren?", [["Eigengewicht", "lotrecht, je m Dachfläche"], ["Schnee", "lotrecht, je m² Grundfläche"], ["Wind", "senkrecht zur Dachfläche"]], "Deshalb darf man die Lastbilder nicht einfach addieren.", "Leitfaden Rechenweg, Schritt 4");
mc("bauko", K2, "Wie rechnest du das Eigengewicht eines geneigten Sparrens auf die Grundfläche um?", ["g / cos α", "g · cos α", "g · sin α", "g / sin α"], "g_Gfl = g / cos α – dann rechnest du mit der Grundriss-Spannweite wie beim waagerechten Träger.", "Leitfaden Rechenweg, Schritt 4");
mc("bauko", K2, "Wie groß ist die Einzugsbreite gleichmäßig verteilter Sparren?", ["Ihr Abstand e", "Die halbe Spannweite", "Die Sparrenbreite b", "Die Dachlänge"], "Jeder Sparren trägt die halbe Strecke zum linken und zum rechten Nachbarn.", "Leitfaden Rechenweg, Schritt 4");
mc("bauko", K2, "Welches Vorzeichen hat Windsog?", ["Negativ", "Positiv", "Kein Vorzeichen", "Je nach Bereich F oder G"], "+ = Druck, − = Sog.", "Baukonstruktion V02");
mc("bauko", K2, "Wie bestimmt man das Maß e für die Windbereiche F, G, H, J, I?", ["e = min(b; 2h)", "e = max(b; 2h)", "e = h / 2", "e = b / 4"], "Bei der Hausübung: b = Länge des Dachgrundrisses inkl. Dachüberstände.", "Baukonstruktion V02, HÜ 1");
mc("bauko", K2, "Wie groß ist die Mannlast auf dem Dach?", ["Q_k = 1 kN als Einzellast", "1 kN/m²", "2 kN/m", "0,5 kN"], "An der ungünstigsten Stelle: Feldmitte für M, auflagernah für V.", "Leitfaden Rechenweg, Schritt 3");
mc("bauko", K2, "Schneeformbeiwert μ₁ bei einer Dachneigung ab 60°:", ["0", "0,8", "1,0", "0,5"], "0°–30°: 0,8 · 30°–60°: linear auf 0 · ab 60° rutscht der Schnee ab.", "Leitfaden Rechenweg, Schritt 3");
pair("bauko", K2, "Wichten zum Auswendigkönnen:", [["Nadelholz C24", "4,2 kN/m³"], ["Stahlbeton", "25 kN/m³"], ["Stahl", "78,5 kN/m³"]], "Achte auf die Einheit des Tabellenwerts: „je cm“ oder kN/m³.", "Leitfaden Rechenweg, Schritt 2");
wf("bauko", K2, "Schnee und Eigengewicht addiert man gleich am Anfang zu einer Last.", false, "Falsch. Jede veränderliche Last ist ein eigener Lastfall – sie bekommt später andere Beiwerte und ein anderes kmod.", "Leitfaden Rechenweg, Schritt 3");
ord("bauko", K3, "Das Rezept für jede Bauko-Aufgabe: Bring die Schritte in Reihenfolge.", ["Lasten aufstellen (ständig, veränderlich)", "Umrechnen: kN/m² × Einzugsbreite = kN/m", "Auflagerkräfte je Lastart", "Schnittgrößen M und V je Lastart", "Kombinieren mit γ und ψ₀ (Holz: durch kmod)", "Nachweis: η = E_d / R_d ≤ 1"], "Bis einschließlich Schnittgrößen rechnest du charakteristisch und getrennt nach Lastart.", "Leitfaden Rechenweg, 8 Schritte");
mc("bauko", K3, "Ab welchem Schritt kommen die Teilsicherheitsbeiwerte dazu?", ["Erst bei der Kombination", "Schon bei den Lasten", "Bei den Auflagerkräften", "Erst beim Nachweis"], "Vorher alles charakteristisch und getrennt nach g, q, s, w.", "Leitfaden Rechenweg, Schritt 7");
ord("bauko", K3, "Lastweg im Pfettendach: Bring die Bauteile in Reihenfolge.", ["Dachlast (kN/m²)", "Sparren (Streckenlast)", "Pfette (Sparrenkräfte als Linienlast)", "Stütze (Einzellast)", "Decke, Wand, Fundament"], "Jedes Bauteil gibt seine Auflagerkräfte an das nächste weiter.", "Leitfaden Rechenweg, Überblick");
ord("bauko", K3, "Auflagerkräfte allgemein bestimmen: Reihenfolge?", ["Streckenlasten durch Resultierende ersetzen", "Momentensumme um A → B", "Momentensumme um B → A", "Probe: A + B = Summe aller Lasten"], "Um A gedreht fällt A heraus, weil sein Hebelarm null ist.", "Leitfaden Rechenweg, Schritt 5");
pair("bauko", K3, "Einfeldträger – ordne zu.", [["Auflager bei Gleichlast q", "q·l / 2"], ["Max. Moment bei Gleichlast", "q·l² / 8"], ["Max. Moment, Einzellast in Feldmitte", "F·l / 4"]], "Diese drei Formeln solltest du ohne Tafel können.", "Leitfaden Rechenweg, Schritt 5");
mc("bauko", K3, "Viele Sparren liegen auf einer Pfette. Wie wird ihre Last für die Pfette angesetzt?", ["Als Linienlast q = B / e", "Als eine Einzellast in Feldmitte", "Gar nicht, nur das Eigengewicht", "Als Flächenlast"], "Weil e klein ist, verschmiert man die Einzellasten zu einer Linienlast.", "Leitfaden Rechenweg, Schritt 5");
mc("bauko", K3, "Durchlaufträger: Wie bekommt man eine Auflagerkraft?", ["Tafelwert × q × l", "q × l / 2", "Tafelwert / (q · l)", "q × l²"], "Zweifeldträger: A = 0,375·q·l, B = 1,25·q·l.", "Leitfaden Rechenweg, Schritt 5");
mc("bauko", K4, "Welche Kombination ist bei Holz maßgebend?", ["Die mit dem größten E_d / kmod", "Die mit dem größten E_d", "Immer nur Eigengewicht", "Die mit dem kleinsten kmod"], "Jede Kombination durch das kmod ihrer kürzesten Last teilen. Bemessen wird dann mit E_d und diesem kmod.", "Leitfaden Rechenweg, Schritt 7");
pair("bauko", K4, "Ordne die Klasse der Lasteinwirkungsdauer zu.", [["Eigengewicht", "ständig, kmod 0,6"], ["Nutzlast Wohnen", "mittel, kmod 0,8"], ["Schnee bis 1000 m", "kurz, kmod 0,9"], ["Wind", "kurz/sehr kurz, kmod 1,0"]], "Werte für Vollholz, Nutzungsklasse 1/2 (SBT Tafel 9.3).", "Leitfaden Rechenweg, Schritt 7");
mc("bauko", K4, "Teilsicherheitsbeiwert γ_M für Holz:", ["1,3", "1,0", "1,5", "1,1"], "f_d = kmod · f_k / γ_M.", "Baukonstruktion V03");
mc("bauko", K4, "Windsog wirkt günstig gegen das Eigengewicht (Abheben). Welches γ_G gilt dann?", ["1,0", "1,35", "1,5", "0"], "Günstig wirkende ständige Last: γ_G = 1,0.", "Leitfaden Rechenweg, Schritt 7");
ord("bauko", K4, "Biegenachweis Holzbalken: Bring die Schritte in Reihenfolge.", ["Maßgebende Kombination M_Ed mit kmod bestimmen", "f_m,d = kmod · f_m,k / γ_M", "Widerstandsmoment W = b·h² / 6", "η = (M_Ed / W) / f_m,d ≤ 1"], "Ü06: 8/24 mit η = 0,99 – knapp, aber erfüllt.", "Leitfaden Rechenweg, Schritt 8");
mc("bauko", K4, "Biegefestigkeit f_m,k von Vollholz C24:", ["24 N/mm²", "21 N/mm²", "14,5 N/mm²", "2,5 N/mm²"], "Die Zahl steckt im Namen. 21 ist Druck ∥, 14,5 Zug ∥, 2,5 Druck ⊥.", "Baukonstruktion V03, SBT 9.8");

/* ───────── Bauinformatik ───────── */
const I1 = "Java und JDK", I2 = "Programmrahmen", I3 = "Datentypen", I4 = "Operatoren";
ord("binf", I1, "Vom Quellcode zur Ausgabe: Reihenfolge?", ["Quellcode schreiben (HalloRWTH.java)", "Mit javac kompilieren", "Bytecode entsteht (HalloRWTH.class)", "JVM in der JRE führt aus"], "Der Bytecode ist plattformunabhängig – das macht Java portabel.", "Bauinformatik Block 1");
pair("binf", I1, "Ordne zu.", [["JDK", "zum Entwickeln, enthält javac"], ["JRE", "Laufzeitumgebung zum Ausführen"], ["IDE", "Editor, Compiler und Debugger in einem"], ["Bytecode", "plattformunabhängige .class-Datei"]], "Eclipse ist die IDE aus der Übung.", "Bauinformatik Block 1");
mc("binf", I1, "Welche Fehler findet der Compiler?", ["Syntaxfehler, z. B. ein fehlendes Semikolon", "Logikfehler im Ergebnis", "Falsche Eingaben des Nutzers", "Gar keine"], "javac übersetzt das ganze Programm und meldet dabei Syntaxfehler.", "Bauinformatik Block 1");
mc("binf", I1, "Welches Programmierparadigma ist Java?", ["Objektorientiert", "Rein prozedural", "Deklarativ wie SQL", "Assembler"], "Klassen und Objekte; dazu imperativ: eine Abfolge von Anweisungen.", "Bauinformatik Block 1");
mc("binf", I2, "Wo startet jedes Java-Programm?", ["public static void main(String[] args)", "public void start()", "class Main", "System.out.println"], "Die main-Methode wird beim Start automatisch aufgerufen.", "Bauinformatik Block 1");
wf("binf", I2, "Java unterscheidet Groß- und Kleinschreibung.", true, "Richtig. System ≠ system, main ≠ Main – einer der häufigsten Fehler (Übung 01).", "Bauinformatik Block 1, Übung 01");
mc("binf", I2, "Was unterscheidet println von print?", ["println macht danach einen Zeilenumbruch", "println gibt nur Zahlen aus", "print ist schneller", "Kein Unterschied"], "print bleibt in derselben Zeile.", "Bauinformatik Block 1");
pair("binf", I2, "Ordne die Escape-Sequenz zu.", [["\\n", "neue Zeile"], ["\\t", "Tabulator"], ["\\\\", "Backslash"], ["\\\"", "Anführungszeichen"]], "Kam in Übung 01 vor (Faust-Zitat mit einem println).", "Bauinformatik Übung 01");
mc("binf", I2, "Welches Package ist immer automatisch importiert?", ["java.lang", "java.util", "java.io", "java.awt"], "Darin stecken String und System.", "Bauinformatik Block 1");
pair("binf", I2, "Welcher Token-Typ ist das?", [["class", "Schlüsselwort"], ["\"Hallo\"", "Literal"], ["summe", "Bezeichner"], [";", "Separator"]], "Dazu kommen Operatoren wie = + == &&.", "Bauinformatik Block 1");
mc("binf", I2, "Welcher Bezeichner ist ungültig?", ["1summe", "summe1", "_summe", "$summe"], "Das erste Zeichen muss ein Buchstabe, _ oder $ sein.", "Bauinformatik Block 1");
mc("binf", I3, "Welcher Datentyp ist der Standard für Kommazahlen?", ["double", "float", "int", "long"], "Ganzzahl → int, Kommazahl → double, Ja/Nein → boolean, Text → String.", "Bauinformatik Block 1");
mc("binf", I3, "Welchen Wertebereich hat byte?", ["−128 … 127", "0 … 255", "−256 … 255", "−32 768 … 32 767"], "8 Bit, das höchste Bit zählt −128.", "Bauinformatik Block 1");
pair("binf", I3, "Ordne zu.", [["'A'", "char"], ["\"A\"", "String"], ["true", "boolean"], ["2.5", "double"]], "char in einfachen, String in doppelten Anführungszeichen.", "Bauinformatik Block 1");
wf("binf", I3, "In Java schreibt man Kommazahlen mit Komma, also 2,5.", false, "Falsch – mit Punkt: 2.5.", "Bauinformatik Block 1");
wf("binf", I3, "String ist ein primitiver Datentyp.", false, "Falsch. String ist ein Referenztyp (Klasse) – daher großgeschrieben.", "Bauinformatik Block 1");
mc("binf", I4, "Was gibt System.out.println(7 / 2); aus?", ["3", "3.5", "4", "Fehler"], "Beide Operanden int → Ganzzahldivision, der Rest fällt weg.", "Bauinformatik Block 1");
mc("binf", I4, "Was gibt System.out.println(1 + 2 + \"3\"); aus?", ["33", "123", "6", "15"], "Von links: 1 + 2 = 3, dann wird \"3\" angehängt → 33.", "Bauinformatik Block 1");
mc("binf", I4, "Was gibt System.out.println(\"1\" + 2 + 3); aus?", ["123", "15", "6", "33"], "Ab dem ersten String wird nur noch verkettet.", "Bauinformatik Block 1");
mc("binf", I4, "Was unterscheidet && von &?", ["&& wertet die rechte Seite nur aus, wenn nötig", "& ist nur für Zahlen", "&& ist ein Vergleich", "Kein Unterschied"], "&& ist der Kurzschlussoperator; & wertet immer beide Seiten aus.", "Bauinformatik Block 1");
mc("binf", I4, "Was ist der Unterschied zwischen = und ==?", ["= weist zu, == vergleicht", "Beide vergleichen", "= vergleicht, == weist zu", "== gibt es nicht"], "x = 5 setzt x, x == 5 liefert true oder false.", "Bauinformatik Block 1");

/* ───────── Angewandte Statistik ───────── */
const S1 = "Einführung", S2 = "Matrizen";
mc("stat", S1, "Wann sind Daten repräsentativ?", ["Identisch verteilt und stochastisch unabhängig", "Wenn es mehr als 100 sind", "Wenn sie normalverteilt sind", "Wenn sie gerundet sind"], "Drei Wege: Totalerhebung, Zufallsstichprobe, Wiederholung.", "Angewandte Statistik Kap. 1");
pair("stat", S1, "Begriffe am Betonfertigteil – ordne zu.", [["Zufallsvariable", "die Länge des Bauteils"], ["Realisierungen", "die Werte der Einzelmessungen"], ["Grundgesamtheit", "alle Längen, die das Bauteil annehmen kann"], ["Stichprobe", "Ergebnis des wiederholten Messens"]], "„Eine Messung ist keine Messung!“", "Angewandte Statistik Kap. 1");
ord("stat", S1, "Wie gehst du mit einer Messreihe vor?", ["Mehrfach messen", "Plausibilisieren: grobe Fehler erkennen", "Ausreißer begründet ausschließen", "Erst dann auswerten (z. B. Mittelwert)"], "Beim Fertigteil hat ein Ausreißer (12,189 m) den Mittelwert verfälscht.", "Angewandte Statistik Kap. 1");
mc("stat", S2, "Was bedeutet der Index bei a_ij?", ["i = Zeile, j = Spalte", "i = Spalte, j = Zeile", "i = Rang, j = Ordnung", "Beides Spalten"], "„Zeile zuerst, Spalte später.“", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Was passiert beim Transponieren einer (m, n)-Matrix?", ["Sie wird zur (n, m)-Matrix", "Sie bleibt (m, n)", "Sie wird quadratisch", "Alle Vorzeichen drehen sich"], "Zeilen und Spalten tauschen.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Wann ist das Produkt A·B definiert?", ["Spaltenzahl von A = Zeilenzahl von B", "Zeilenzahl von A = Zeilenzahl von B", "Nur bei quadratischen Matrizen", "Immer"], "Die inneren Zahlen müssen gleich sein, die äußeren ergeben die Ordnung.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Welche Ordnung hat das Produkt einer (2, 3)- mit einer (3, 4)-Matrix?", ["(2, 4)", "(3, 3)", "(4, 2)", "nicht definiert"], "Die äußeren Zahlen bleiben übrig.", "Angewandte Statistik Kap. 2");
wf("stat", S2, "Für Matrizen gilt immer A·B = B·A.", false, "Falsch – die Matrixmultiplikation ist nicht kommutativ (siehe Ü1: AB ≠ BA).", "Angewandte Statistik Ü1");
pair("stat", S2, "Ordne die Sonderform zu.", [["symmetrisch", "A = A′"], ["Diagonalmatrix", "nur die Hauptdiagonale ≠ 0"], ["Einheitsmatrix I", "Diagonale 1, sonst 0"], ["Dreiecksmatrix", "auf einer Seite der Diagonale nur Nullen"]], "Schiefsymmetrisch wäre A = −A′.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Was folgt aus det A = 0?", ["A ist singulär und hat keine Inverse", "A ist die Einheitsmatrix", "A hat vollen Rang", "A ist symmetrisch"], "det A = 0 ⇔ linear abhängig ⇔ singulär.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Für welche Matrizen gilt die Regel von Sarrus?", ["Nur für 3×3", "Für alle quadratischen", "Für 2×2 und 4×4", "Für Dreiecksmatrizen"], "Für größere Matrizen: Entwicklung nach einer Zeile oder Spalte.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Determinante einer Dreiecksmatrix:", ["Produkt der Diagonalelemente", "Summe der Diagonalelemente", "Immer 0", "Immer 1"], "Die Summe der Diagonale ist die Spur.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Wann sind zwei Vektoren orthogonal?", ["Wenn ihr Skalarprodukt 0 ist", "Wenn ihre Norm 1 ist", "Wenn sie parallel sind", "Wenn ihr Kreuzprodukt 0 ist"], "Orthonormal: zusätzlich beide Norm 1.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Was ist der Rang einer Matrix?", ["Max. Zahl linear unabhängiger Zeilen", "Zahl aller Zeilen", "Die Determinante", "Die Spur"], "rg(A) ≤ min(m, n). Voller Rang bei quadratischen Matrizen = regulär.", "Angewandte Statistik Kap. 2");
wf("stat", S2, "Elementare Zeilenumformungen ändern den Rang nicht.", true, "Richtig. Die Determinante kann sich aber ändern – Faktoren mitzählen!", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Was gilt für (A·B)′?", ["B′·A′", "A′·B′", "A·B", "(B·A)′"], "Beim Transponieren dreht sich die Reihenfolge um.", "Angewandte Statistik Kap. 2");
ord("stat", S2, "Inverse mit Gauß-Jordan: Reihenfolge?", ["[A | I] nebeneinander schreiben", "Zeilenumformungen, bis links I steht", "Rechts steht jetzt A⁻¹", "Probe: A·A⁻¹ = I"], "Die Inverse existiert nur, wenn det A ≠ 0.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Womit kontrollierst du ein Matrixprodukt im Falk-Schema?", ["Kontrollspalte mit Zeilensummen (Einsvektor)", "Mit der Determinante", "Durch Transponieren", "Gar nicht möglich"], "A·(B·e) muss gleich den Zeilensummen von C sein.", "Angewandte Statistik Kap. 2");

/* ───────── Ergänzung 02.11.2026: Data Analysis for Planning + weitere Fragen ───────── */
const D1 = "Daten und Befragungen", D2 = "Gewichtung und Post-Processing", D3 = "R-Grundlagen", D4 = "Verteilungen";
pair("dap", D1, "Ordne die Datenquelle ihrer Eigenschaft zu.", [["Register (official registers)", "vollständige Abdeckung, deskriptive Statistik"], ["Befragung (household survey)", "Stichprobe, induktive Statistik"], ["Passive Daten (mobile phone, GPS)", "riesige Mengen, oft unklar, was drinsteckt"]], "Das sind typische Zuordnungen – es gibt auch amtliche Daten aus Befragungen.", "DAP L01 Introduction & Surveys");
mc("dap", D1, "Mit welcher großen deutschen Haushaltsbefragung arbeitet der Kurs?", ["Mobilität in Deutschland (MiD)", "Mikrozensus", "KBA-Fahrzeugregister", "Verkehrszählung der Länder"], "MiD 2017, neu MiD 2023 – jede Person berichtet alle Wege an einem Stichtag.", "DAP L01");
pair("dap", D1, "Ordne die Erhebungsform zu.", [["CAWI", "online"], ["CATI", "Telefon"], ["PAPI", "Papier"]], "Computer Assisted Web / Telephone Interview, Paper and Pencil Interview.", "DAP L01");
mc("dap", D1, "Was ist Unit-Nonresponse?", ["Ganze Haushalte oder Personen antworten nicht", "Einzelne Fragen bleiben leer", "Falsch geschätzte Entfernungen", "Doppelt erfasste Wege"], "Unit = ganze Einheit fehlt, Item = einzelne Angabe fehlt. Wird gern gefragt.", "DAP L01");
mc("dap", D1, "Typische Folge von Item-Nonresponse in Mobilitätsbefragungen:", ["Kurze Wege werden vergessen → Verkehr wird unterschätzt", "Lange Wege werden überschätzt", "Ältere werden überrepräsentiert", "Die Stichprobe wird größer"], "Recall effect: Vor allem kurze Wege fallen beim Berichten weg.", "DAP L01");
pair("dap", D1, "Ordne die passive Datenquelle ihrer Stärke zu.", [["Floating Phone Data", "Funkzellen, gut für Nachfragematrizen"], ["Floating Car Data", "Fahrzeugortung, gut für Geschwindigkeiten"], ["Smartphone-Apps", "GPS, räumlich genau"], ["Smart-Card-Ticketing", "fast vollständige Matrix bei Zugangskontrolle"]], "GPS-Tracking per App gilt als wahrscheinliche Zukunft der Mobilitätserhebung.", "DAP L01");
mc("dap", D1, "Was ist ein Triple-Frame-Sample?", ["Ziehung aus Melderegister, Festnetz- und Mobilfunknummern", "Drei Befragungswellen nacheinander", "Haushalts-, Personen- und Wegefragebogen", "Drei Bundesländer als Stichprobe"], "Wer Festnetz und Handy hat, wird eher gezogen – das gleichen Designgewichte aus.", "DAP L01, L02");
wf("dap", D2, "Bei der Stichprobenvarianz teilt man durch n.", false, "Falsch – durch n − 1. Durch N teilt man nur bei der Grundgesamtheit.", "DAP L02");
mc("dap", D2, "Welcher Lageparameter ist robust gegen Ausreißer?", ["Median", "Mittelwert", "Spannweite", "Varianz"], "Median = 50. Perzentil. Ein extremer Wert verschiebt ihn kaum.", "DAP L02");
mc("dap", D2, "Was ist der Variationskoeffizient?", ["Standardabweichung / Mittelwert", "Varianz / Mittelwert", "Mittelwert / Median", "Spannweite / n"], "CV = σ/μ bzw. s/x̄ – Streuung relativ zum Mittel.", "DAP L02");
mc("dap", D2, "Pkw pro Einwohner von vier Millionenstädten: Wie mittelst du richtig?", ["Gewichtet mit der Einwohnerzahl", "Einfacher Durchschnitt der vier Werte", "Median der vier Werte", "Geometrisches Mittel ohne Gewichte"], "Nicht den Durchschnitt der Durchschnitte nehmen – Berlin zählt mehr als Köln.", "DAP L02");
mc("dap", D2, "Die MiD-Hochrechnung ergab 58 Mio. Pkw, das KBA zählt rund 44 Mio. Warum?", ["Die Stichprobe ist verzerrt – Haushalte mit Auto nehmen eher teil", "Das KBA zählt falsch", "Rundungsfehler beim Hochrechnungsfaktor", "Firmenwagen fehlen in der MiD"], "Einfaches Hochrechnen reicht nicht – man muss gewichten.", "DAP L02");
pair("dap", D2, "Phänomen und Korrektur – ordne zu.", [["disproportionale Schichtung", "gut korrigierbar: Designgewichtung"], ["sozioökonomische Selektivität", "gut korrigierbar: Redressment"], ["themenbezogene Selektivität", "kaum korrigierbar: nur Studiendesign"], ["schlechte Berichtsqualität", "teilweise: Imputation"]], "Diese Tabelle (Folie 32) fasst L02 zusammen – lerne sie frei wiederzugeben.", "DAP L02, Folie 32");
mc("dap", D2, "Warum schichtet man disproportional (BEV-Beispiel)?", ["Damit auch eine kleine Gruppe genug Antworten liefert", "Damit die Stichprobe unverzerrt ist", "Um Kosten zu sparen", "Weil Register das verlangen"], "Bei 0,8 % E-Autos kämen sonst nur ≈ 8 Antworten. Die Verzerrung gleicht man danach aus.", "DAP L02, Folie 11");
wf("dap", D2, "Themenbezogene Selektivität lässt sich gut durch Gewichtung korrigieren.", false, "Falsch. Wenn wenig mobile Menschen seltener antworten, hilft nur ein gutes Studiendesign.", "DAP L02");
mc("dap", D2, "Wie berechnet sich das Gewicht w beim Redressment?", ["Anteil in der Bevölkerung / Anteil in der Stichprobe", "Anteil in der Stichprobe / Anteil in der Bevölkerung", "Bevölkerung / Stichprobengröße", "1 / n"], "Der Hochrechnungsfaktor ef arbeitet mit absoluten Zahlen, w mit Anteilen (Mittel = 1).", "DAP L02");
mc("dap", D2, "Junge Menschen sind in der MiD unterrepräsentiert. Wie groß ist ihr Gewicht w?", ["Größer als 1", "Kleiner als 1", "Genau 1", "Null"], "Im Beispiel w = 1,37 für unter 30, 0,74 für 60+.", "DAP L02");
ord("dap", D2, "Iterative Proportional Fitting: Bring die Schritte in Reihenfolge.", ["Zeilenfaktoren bestimmen: Ziel / jetzt", "Ganze Zeilen mit ihrem Faktor multiplizieren", "Spaltenfaktoren bestimmen", "Ganze Spalten multiplizieren", "Wiederholen, bis Zeilen und Spalten passen"], "Meist reichen wenige Runden – im Folienbeispiel passt nach Schritt 3 alles auf 0,1 %.", "DAP L02");
ord("dap", D2, "Post-Processing einer Befragung: Reihenfolge?", ["Prüfen: Plausibilität, fehlende Werte", "Imputieren", "Designgewichte", "Redressment / IPF", "Hochrechnen auf die Grundgesamtheit"], "Erst die Daten säubern, dann gewichten, zuletzt hochrechnen.", "DAP L02");
mc("dap", D2, "Was ist Imputation?", ["Fehlende oder unplausible Werte durch plausible ersetzen", "Werte gewichten", "Ausreißer löschen", "Die Stichprobe vergrößern"], "Erleichtert Analysen – falsch gemacht bringt sie aber neue Fehler.", "DAP L02");
mc("dap", D2, "Wie ist die Response Rate definiert?", ["Teilnehmende / ausgewählte Stichprobe", "Ausgewählte Stichprobe / Grundgesamtheit", "Berichtete Wege / Personen", "Fehlende Angaben / alle Angaben"], "Response Rate = B / A. Mit jeder Stufe kann sich die Stichprobe verzerren.", "DAP L02");
mc("dap", D3, "Mit welchem Operator weist man in R einen Wert zu?", ["<-", "==", ":=", "=>"], "= setzt üblicherweise Argumente einer Funktion.", "DAP Exercise 1");
mc("dap", D3, "Bei welchem Index beginnt ein Vektor in R?", ["1", "0", "−1", "frei wählbar"], "x[1] ist das erste Element – anders als in Java.", "DAP Exercise 1");
mc("dap", D3, "Was ergibt c('a', 100L, TRUE, 3)?", ["Vier Texte: \"a\" \"100\" \"TRUE\" \"3\"", "Eine Fehlermeldung", "Eine Liste mit vier Typen", "Nur die Zahlen 100 und 3"], "Ein Vektor hat nur einen Typ; R wandelt in den allgemeinsten um (logical → integer → numeric → character).", "DAP Exercise 1");
pair("dap", D3, "Ordne die Datenstruktur zu.", [["Vektor", "nur ein Typ"], ["Liste", "beliebig gemischt"], ["Matrix", "Vektor mit zwei Dimensionen"], ["Data Frame", "Liste gleich langer Vektoren, also eine Tabelle"]], "Der Grunddatentyp in R ist der Vektor.", "DAP Exercise 1");
mc("dap", D3, "Durch was teilen sd() und var() in R?", ["n − 1", "n", "N der Grundgesamtheit", "n + 1"], "Sie liefern also die Stichproben-Kennwerte.", "DAP Exercise 1");
mc("dap", D3, "Was ergibt rep(c(1, 2), each = 2)?", ["1 1 2 2", "1 2 1 2", "2 4", "1 2"], "times = 2 ergäbe 1 2 1 2.", "DAP Exercise 1");
mc("dap", D3, "Wie füllt matrix(c(5, 6, 7, 8), nrow = 2) die Werte ein?", ["Spaltenweise", "Zeilenweise", "Zufällig", "Diagonal"], "Erste Spalte 5, 6 – zweite Spalte 7, 8.", "DAP Exercise 1");
wf("dap", D3, "In R sind x und X dieselbe Variable.", false, "Falsch – R ist case-sensitive. Dezimaltrennzeichen ist der Punkt.", "DAP Exercise 1");
pair("dap", D4, "Ordne zu.", [["Empirische Verteilung", "tatsächlich beobachtet, z. B. 100 Würfe"], ["Theoretische Verteilung", "Modell der Grundgesamtheit"], ["PDF f(x)", "Wahrscheinlichkeitsdichte"], ["CDF F(a)", "Wahrscheinlichkeit, dass x ≤ a"]], "Bei stetigen Verteilungen ist die Fläche unter der PDF die Wahrscheinlichkeit.", "DAP L03 Probability Distributions");
mc("dap", D4, "Was bedeutet die Fläche unter der PDF zwischen a und b?", ["Wahrscheinlichkeit, dass x zwischen a und b liegt", "Mittelwert zwischen a und b", "Varianz", "Wert der CDF bei a"], "Für stetige Verteilungen gilt P(a ≤ x ≤ b) = F(b) − F(a).", "DAP L03");
pair("dap", D4, "Normalverteilung: Welcher Anteil liegt im Bereich?", [["μ ± 1σ", "68,3 %"], ["μ ± 2σ", "95,5 %"], ["μ ± 3σ", "99,7 %"]], "„I’m 99.7 % confident that I fall within three standard deviations.“", "DAP L03");
mc("dap", D4, "Welche Parameter hat die Standardnormalverteilung?", ["μ = 0, σ = 1", "μ = 1, σ = 0", "μ = 0, σ = 0", "μ = 1, σ = 1"], "Kurz z ~ N(0, 1), CDF heißt Φ(z).", "DAP L03");
mc("dap", D4, "Wie lautet die z-Standardisierung?", ["z = (x − μ) / σ", "z = (x − σ) / μ", "z = x · σ − μ", "z = μ / σ"], "So wird aus jeder Normalverteilung N(μ, σ) die Standardnormalverteilung N(0, 1).", "DAP L03");
mc("dap", D4, "Zwei unabhängige Normalverteilungen werden addiert. Welche Standardabweichung hat die Summe?", ["√(σ₁² + σ₂²)", "σ₁ + σ₂", "(σ₁ + σ₂) / 2", "σ₁ · σ₂"], "Die Varianzen addieren sich; der Mittelwert ist μ₁ + μ₂. Ergebnis ist wieder normalverteilt.", "DAP L03");
wf("dap", D4, "Addiert man zwei Gleichverteilungen, entsteht wieder eine Gleichverteilung.", false, "Falsch – die Form ändert sich. Zwei Würfel: Die Summe 7 ist am häufigsten (Dreiecksform).", "DAP L03");
mc("dap", D4, "Welche Dichte hat die stetige Gleichverteilung u[a, b]?", ["Konstant 1 / (b − a)", "Konstant b − a", "Steigend von a nach b", "Glockenförmig"], "Wie ein Würfel, nur mit beliebigen Werten zwischen a und b.", "DAP L03");
mc("dap", D4, "Warum ist die Normalverteilung so wichtig?", ["Wegen des zentralen Grenzwertsatzes", "Weil sie immer symmetrisch ist", "Weil sie nur einen Parameter hat", "Weil sie diskret ist"], "Viele natürliche Größen sind deshalb annähernd normalverteilt – Thema der nächsten Vorlesung.", "DAP L03");

/* Hydromechanik: Hydrodynamik bis lokale Verluste (V04–V07) */
const H4 = "Hydrodynamik", H5 = "Energiesatz", H6 = "Impulssatz", H7 = "Gerinneströmung";
pair("hydro", H4, "Ordne die Betrachtungsweise zu.", [["Lagrange", "ein Teilchen auf seinem Weg verfolgen"], ["Euler", "einen festen Ort beobachten"]], "Pegelmessung ist das typische Beispiel für die Eulersche Sicht.", "Hydromechanik V04");
mc("hydro", H4, "Was ist eine Potentialströmung?", ["Drehungs- und reibungsfrei", "Drehungs- und reibungsbehaftet", "Immer instationär", "Nur in Rohren"], "Das Gegenstück ist die Wirbelströmung.", "Hydromechanik V04");
mc("hydro", H4, "Was besagt die Kontinuitätsgleichung für inkompressible Strömung?", ["Q = v · A bleibt konstant", "v bleibt konstant", "p · A bleibt konstant", "Q nimmt mit der Länge ab"], "Engere Stelle → schnellere Strömung (Venturirohr im Lehrlabor).", "Hydromechanik V04");
wf("hydro", H4, "Bei stationärer Strömung ändert sich die Geschwindigkeit an einem festen Ort nicht mit der Zeit.", true, "Richtig: ∂v/∂t = 0. Gleichförmig hieße zusätzlich: keine Änderung entlang des Weges.", "Hydromechanik V04");
mc("hydro", H4, "Was ist eine Stromröhre?", ["Ein Bündel von Stromlinien, begrenzt durch eine Mantelfläche", "Ein Rohr mit Kreisquerschnitt", "Die Bahn eines Teilchens", "Ein Messgerät"], "Durch die Mantelfläche fließt nichts hindurch.", "Hydromechanik V04");
mc("hydro", H5, "Unter welchen Bedingungen gilt die Bernoulli-Gleichung?", ["Stationär, reibungsfrei, inkompressibel, entlang einer Stromlinie", "Nur bei ruhendem Wasser", "Nur bei turbulenter Strömung", "Immer, auch mit Verlusten"], "Reale Verluste kommen über Verlusthöhen dazu (V07).", "Hydromechanik V05");
pair("hydro", H5, "Bernoulli: Ordne die Terme zu.", [["v² / (2g)", "Geschwindigkeitshöhe"], ["p / (ρ·g)", "Druckhöhe"], ["z", "geodätische Höhe"], ["Summe aller drei", "Energiehöhe h_E"]], "Entlang einer Stromlinie bleibt die Energiehöhe konstant.", "Hydromechanik V05");
mc("hydro", H5, "Ausfluss aus einem sehr großen Behälter (Torricelli): v = ?", ["√(2·g·h)", "2·g·h", "g·h / 2", "√(g / h)"], "Gilt, weil der Spiegel im großen Behälter praktisch stillsteht (A₂ ≪ A₁).", "Hydromechanik V05");
mc("hydro", H5, "Welche Einheit hat die Leistung?", ["Watt = J/s", "Joule", "N·s", "Pa"], "P = E / t. Energie in J = N·m = W·s.", "Hydromechanik V05");
mc("hydro", H6, "Was ist der große Vorteil des Impulssatzes?", ["Man braucht nur Anfangs- und Endzustand, nicht die inneren Verluste", "Er gilt nur ohne Reibung", "Er ersetzt die Kontinuitätsgleichung", "Er liefert direkt den Druck"], "Deshalb nutzt man ihn, wo der Energiesatz wegen Verlusten schwierig wird.", "Hydromechanik V06");
mc("hydro", H6, "Wie lautet der Impulssatz in der Hydromechanik?", ["F = ρ·Q·(v₂ − v₁)", "F = m·g", "F = ρ·g·h·A", "F = Q / v"], "Summe aller Kräfte = Änderung des Impulsstroms.", "Hydromechanik V06");
mc("hydro", H6, "Was ist die Stützkraft S?", ["Druckkraft + Impulsstrom am Querschnitt", "Nur die Gewichtskraft", "Widerlagerkraft minus Druck", "Auftrieb"], "Ähnlich einer Schnittkraft in der Stabstatik.", "Hydromechanik V06");
ord("hydro", H6, "Impulssatz anwenden: Bring die Schritte in Reihenfolge.", ["Strömungsraum mit Kontrollschnitten abgrenzen", "Alle angreifenden Kräfte einzeichnen", "Übrige Kräfte bestimmen (Gewicht, Widerlager)", "Kräftegleichgewicht aufstellen und lösen"], "Genau diese vier Schritte stehen auf den Folien.", "Hydromechanik V06");
pair("hydro", H7, "Ordne den Fließzustand zu.", [["h < h_gr", "Schießen (überkritisch, Fr > 1)"], ["h > h_gr", "Strömen (unterkritisch, Fr < 1)"], ["h = h_gr", "Grenzzustand (Fr = 1)"]], "Zu jeder Energiehöhe gibt es für denselben Abfluss zwei konjugierte Wassertiefen.", "Hydromechanik V07");
mc("hydro", H7, "Wie groß ist die Mindestenergiehöhe im Grenzzustand?", ["1,5 · h_gr", "h_gr", "2 · h_gr", "0,5 · h_gr"], "Bei der Grenztiefe ist außerdem die Stützkraft minimal.", "Hydromechanik V07");
mc("hydro", H7, "Was beschreibt die Froude-Zahl?", ["Trägheitskräfte zu Schwerkräften (v zu √(g·h))", "Reibung zu Trägheit", "Druck zu Dichte", "Durchfluss zu Fläche"], "Fr = v / √(g·h). Auch im wasserbaulichen Versuchswesen wichtig.", "Hydromechanik V07");
mc("hydro", H7, "Wann bildet sich ein Wechselsprung?", ["Beim Übergang vom Schießen ins Strömen (Fr₁ > 1)", "Bei Fr₁ < 1", "Nur in Rohren", "Bei stehendem Wasser"], "Je größer Fr₁, desto ausgeprägter und turbulenter der Sprung und der Energieverlust.", "Hydromechanik V04, V07");
mc("hydro", H7, "Bei der Grenztiefe ist die Fließgeschwindigkeit gleich …", ["der Wellenschnelligkeit c = √(g·h)", "null", "der doppelten Wellenschnelligkeit", "√(2·g·h)"], "Deshalb können Wellen bei Schießen nicht mehr stromauf laufen.", "Hydromechanik V07");

/* Baukonstruktion: Einwirkungen (V02) */
const K5 = "Einwirkungen";
mc("bauko", K5, "Wovon hängt die charakteristische Schneelast am Boden s_k ab?", ["Schneelastzone und Geländehöhe", "Dachneigung und Dachfarbe", "Gebäudehöhe und Windzone", "Nur vom Bundesland"], "Die Dachneigung kommt erst über μ₁ dazu.", "Baukonstruktion V02");
mc("bauko", K5, "Bis zu welcher Geländehöhe gilt die Schneenorm?", ["1500 m ü. NN", "1000 m ü. NN", "500 m ü. NN", "3000 m ü. NN"], "Über NN + 1000 m gelten andere ψ-Werte (0,7 / 0,5 / 0,2).", "Baukonstruktion V02");
mc("bauko", K5, "Was gilt für die Schneelastzonen 1a und 2a?", ["Wert der Grundzone × 1,25", "Wert der Grundzone × 0,8", "Kein Schnee", "Wie Zone 3"], "Die Mindestwerte steigen entsprechend (0,81 bzw. 1,06 kN/m²).", "Baukonstruktion V02");
mc("bauko", K5, "Mindestwert der Schneelast s_k in Zone 2:", ["0,85 kN/m²", "0,65 kN/m²", "1,10 kN/m²", "0,50 kN/m²"], "Aachen auf 200 m ergibt rechnerisch 0,63 → maßgebend ist der Mindestwert 0,85.", "Leitfaden Rechenweg, Schritt 3");
mc("bauko", K5, "Was zählt laut V02 auch zur Nutzlast?", ["Leichte Trennwände", "Estrich", "Schnee", "Eigengewicht der Decke"], "Dazu Kies- und Bodenschüttungen auf Dächern sowie Anschüttungen gegen Wände.", "Baukonstruktion V02");
mc("bauko", K5, "Ab welcher Nutzlast entfällt der Trennwandzuschlag?", ["≥ 5 kN/m²", "≥ 2 kN/m²", "≥ 3 kN/m²", "Er entfällt nie"], "Dann sind leichte Trennwände in der Nutzlast schon abgedeckt.", "Baukonstruktion V02");
pair("bauko", K5, "Trennwandzuschlag – ordne zu.", [["Trennwände bis 3 kN/m", "+0,8 kN/m²"], ["Trennwände 3–5 kN/m", "+1,2 kN/m²"]], "Schwerere Wände werden als Linienlast angesetzt.", "Leitfaden Rechenweg, Schritt 3");
mc("bauko", K5, "Wovon hängt der Geschwindigkeitsdruck q_p ab?", ["Windzone und Gebäudehöhe", "Dachneigung", "Schneelastzone", "Baustoff"], "Werte aus SBT Tafel 3.31, z. B. Windzone 2 → 0,65 kN/m² bei kleiner Höhe.", "Baukonstruktion V02");
mc("bauko", K5, "Die Dachneigung liegt zwischen zwei Tabellenwerten für c_pe. Was tust du?", ["Linear interpolieren", "Den kleineren Wert nehmen", "Den Mittelwert aller Zeilen nehmen", "Immer 1,0 ansetzen"], "Beispiel Ü02: α = 35° zwischen 30° und 45°.", "Leitfaden Rechenweg, Schritt 3");
pair("bauko", K5, "Ordne die Bezeichnung zu.", [["g_k", "Eigengewicht, verteilt"], ["Δg_k", "Ausbaulast"], ["q_k", "Nutzlast, verteilt"], ["s_k", "Schnee"]], "Kleinbuchstaben = verteilte Last, Großbuchstaben = Einzellast (G_k, Q_k).", "Baukonstruktion V01–V02");
pair("bauko", K5, "Welche Norm regelt was?", [["DIN EN 1990", "Grundlagen und Sicherheitskonzept"], ["DIN EN 1991", "Einwirkungen (Lasten)"], ["DIN EN 1992", "Betonbau"], ["DIN EN 1995", "Holzbau"]], "Lastannahmen sind für alle Bauweisen gleich, die Bemessungsnormen nicht.", "Baukonstruktion V01, HÜ-Hinweise");
mc("bauko", K1, "Auf welchem Zeitraum beruhen die charakteristischen Lasten?", ["Jahresextremwerte über 50 Jahre", "Mittelwerte über 1 Jahr", "Höchstwert der letzten 10 Jahre", "Tageswerte"], "Charakteristische Werte liegen am Rand der Verteilung, Bemessungswerte noch weiter außen.", "Baukonstruktion V01");
mc("bauko", K1, "ψ₂ für Nutzlast Kategorie A (Wohnen):", ["0,3", "0,5", "0,7", "0"], "ψ₀ / ψ₁ / ψ₂ = 0,7 / 0,5 / 0,3. ψ₂ steht für den quasi-ständigen Anteil.", "Baukonstruktion V01");
mc("bauko", K4, "Höhenbeiwert k_h für Vollholz mit h ≥ 150 mm:", ["1,0", "1,3", "0,8", "1,5"], "Kleinere Querschnitte bekommen bis zu 1,3.", "Leitfaden Rechenweg, Schritt 8");

/* Baustoffkunde: physikalische Eigenschaften (V03) und Prüfungen */
pair("bsk", B3, "Ordne die Porosität zu.", [["Ziegel", "20–40 Vol.-%"], ["Beton", "10–15 Vol.-%"], ["Granit", "unter 3 Vol.-%"]], "Klinker und Kalkstein liegen bei etwa 5–10 Vol.-%.", "Baustoffkunde V03");
wf("bsk", B3, "Geschlossene Poren und Sackporen leiten Wasser durch den Baustoff.", false, "Falsch. Nur durchgängige Kapillaren transportieren Wasser.", "Baustoffkunde V03");
mc("bsk", B3, "Warum helfen Luftporen im Beton gegen Frostschäden?", ["Sie bieten Platz für das sich ausdehnende Eis", "Sie machen den Beton fester", "Sie leiten Wärme besser", "Sie saugen Wasser schneller ab"], "Sie füllen sich nicht mit Wasser und puffern den Eisdruck.", "Baustoffkunde V03");
pair("bsk", B3, "Ordne dem Transportvorgang seinen Treiber zu.", [["Diffusion", "Konzentrationsgefälle"], ["Permeation", "Druckgefälle"], ["Kapillarsaugen", "Oberflächenkräfte"], ["Ionentransport", "elektrische Spannung"]], "Beispiele: Chlorid wandert in Beton (Diffusion), Mauerwerk saugt Wasser (kapillar).", "Baustoffkunde V03");
mc("bsk", B3, "Welche Kapillaren saugen höher?", ["Enge Kapillaren", "Weite Kapillaren", "Beide gleich", "Nur geschlossene Poren"], "Weite saugen schneller, enge höher.", "Baustoffkunde V03");
mc("bsk", B3, "Faustregel zur Wärmedämmung:", ["Leicht = porös = dämmt gut", "Schwer = dicht = dämmt gut", "Dunkel = dämmt gut", "Feucht = dämmt gut"], "Luft in den Poren leitet Wärme schlecht.", "Baustoffkunde V03");
ord("bsk", B3, "Ordne nach Wärmeleitfähigkeit λ – von klein nach groß.", ["Schaumkunststoff", "Holz", "Normalbeton", "Stahl"], "Rund 0,03 · 0,1–0,2 · ≈ 2 · ≈ 50 W/(m·K). λ steigt mit der Rohdichte.", "Baustoffkunde V03");
mc("bsk", B3, "Welche Fassade wird in der Sonne am heißesten?", ["Dunkler Putz", "Weißer Putz", "Beide gleich", "Glas"], "Dunkle Putze bis ≈ 65 °C, weiße bleiben nahe der Lufttemperatur – das erzeugt Spannungen.", "Baustoffkunde V03");
mc("bsk", B1, "Wie ist die Kuppel des Pantheons aufgebaut?", ["Nach oben immer leichter (geringere Rohdichte)", "Überall gleich schwer", "Oben am schwersten", "Aus Stahlbeton"], "Rohdichte von 1,75 unten bis 1,35 kg/dm³ oben – weniger Gewicht, wo es am meisten stört.", "Baustoffkunde V01");
mc("bsk", B2, "Wie hängt der Schubmodul G mit E und µ zusammen?", ["G = E / (2·(1 + µ))", "G = E · µ", "G = 2·E·(1 + µ)", "G = E / µ"], "Stahl: E = 210 000, µ = 0,3 → G ≈ 81 000 N/mm².", "Baustoffkunde V02");
mc("bsk", B2, "Wie funktioniert die Härteprüfung nach Brinell?", ["Stahlkugel eindrücken, Eindruck vermessen", "Pendelschlag auf eine gekerbte Probe", "Probe bis zum Bruch ziehen", "Kratzen mit Diamant"], "Für Baustähle gilt: härter ↔ fester.", "Baustoffkunde V02");
wf("bsk", B2, "Aluminium zeigt bei Kälte im Kerbschlagversuch einen Steilabfall.", false, "Falsch – Aluminium bleibt auch kalt zäh. Baustahl wird spröde.", "Baustoffkunde V02");
mc("bsk", B2, "Wann ist die Wöhlerlinie praktisch waagerecht?", ["Ab sehr vielen Lastspielen (≈ 10⁶ und mehr)", "Ab 10 Lastspielen", "Nie", "Nur bei Druck"], "Dort liegt die Dauerfestigkeit.", "Baustoffkunde V02");

/* Physik */
mc("phys", P1, "Was ist ein Joule in SI-Basiseinheiten?", ["kg·m²/s²", "kg·m/s²", "kg·m²/s³", "kg/(m·s²)"], "kg·m/s² ist Newton, kg·m²/s³ Watt, kg/(m·s²) Pascal.", "Physik V01 Einheiten");
pair("phys", P1, "Ordne die abgeleitete Einheit zu.", [["Newton", "kg·m/s²"], ["Pascal", "N/m²"], ["Watt", "J/s"], ["Joule", "N·m"]], "Alle lassen sich auf m, kg und s zurückführen.", "Physik V01 Einheiten");
pair("phys", P1, "Ordne den Vorsatz dem Faktor zu.", [["Milli (m)", "10⁻³"], ["Zenti (c)", "10⁻²"], ["Kilo (k)", "10³"], ["Tera (T)", "10¹²"]], "Achtung bei der Groß-/Kleinschreibung: m = Milli, M = Mega.", "Physik V01 Einheiten");
mc("phys", P2, "Was ist die Beschleunigung mathematisch?", ["Ableitung der Geschwindigkeit nach der Zeit", "Ableitung des Orts nach der Geschwindigkeit", "Integral der Geschwindigkeit", "Geschwindigkeit mal Zeit"], "a = dv/dt = d²x/dt².", "Physik V01 Mechanik 1");
mc("phys", P2, "Welche Formel verbindet v, a und Weg ohne die Zeit (konstante Beschleunigung)?", ["v² = v₀² + 2·a·Δx", "v = a·t", "x = v·t", "a = v/x"], "Damit lösen sich Bremsweg-Aufgaben wie Blatt 1, A6 und A7.", "Physik Blatt 1");
wf("phys", P2, "Ohne Luftwiderstand fallen schwere und leichte Körper gleich schnell.", true, "Richtig – alle erfahren dieselbe Beschleunigung g.", "Physik V01");
mc("phys", P3, "Welchen Betrag hat ein Einheitsvektor?", ["1", "0", "Je nach Richtung", "√2"], "e = a / |a| zeigt nur die Richtung an.", "Physik V02 Vektoren");
pair("phys", P3, "Ordne zu.", [["Skalarprodukt a·b", "|a|·|b|·cos φ"], ["Betrag des Kreuzprodukts |a × b|", "|a|·|b|·sin φ"], ["Betrag |a|", "√(a_x² + a_y² + a_z²)"]], "Das Kreuzprodukt entspricht der Fläche des aufgespannten Parallelogramms.", "Physik V02 Vektoren");
mc("phys", P4, "Wie hängen Winkelgeschwindigkeit ω und Umlaufzeit T zusammen?", ["ω = 2π / T", "ω = T / 2π", "ω = 2π·T", "ω = 1 / T"], "Eine volle Umdrehung entspricht 2π.", "Physik V03");
mc("phys", P4, "Wie groß ist die Bahngeschwindigkeit bei einer Kreisbewegung?", ["v = ω·r", "v = ω / r", "v = r / T", "v = ω²·r"], "Bzw. v = 2πr / T.", "Physik V03");
mc("phys", P4, "Wie groß ist die Zentripetalbeschleunigung?", ["a = v² / r", "a = v·r", "a = r / v²", "a = v / r²"], "Gleichwertig: a = ω²·r.", "Physik V03");
mc("phys", P4, "Bewegtes Bezugssystem: Wie addiert man Geschwindigkeiten (klassisch)?", ["v_PA = v_PB + v_BA (vektoriell)", "Man multipliziert sie", "Nur die Beträge addieren", "Gar nicht – v bleibt gleich"], "Galilei-Transformation (auf der Folie „Galileo-“).", "Physik V03");
wf("phys", P4, "Hin und zurück mit Gegen- und Rückenwind dauert ein Flug genauso lang wie bei Windstille.", false, "Falsch – er dauert länger. Gegen den Wind verliert man mehr Zeit, als man mit Rückenwind gewinnt (Blatt 3, A4).", "Physik Blatt 3");
mc("phys", P4, "Bei welchem Abwurfwinkel ist die Wurfweite auf ebenem Boden maximal (ohne Luftwiderstand)?", ["45°", "30°", "60°", "90°"], "Die Wurfweite hängt von sin 2α ab, maximal bei 2α = 90°.", "Physik V03");

/* Bauinformatik */
mc("binf", I4, "Was gibt System.out.println(7 % 3); aus?", ["1", "2", "2.33", "0"], "% ist der Rest der Ganzzahldivision (Modulo).", "Bauinformatik Block 1");
mc("binf", I4, "int x = 5; x++; Welchen Wert hat x danach?", ["6", "5", "4", "10"], "++ erhöht um 1, -- verringert um 1.", "Bauinformatik Block 1");
mc("binf", I4, "Was gibt System.out.println((double) 7 / 2); aus?", ["3.5", "3", "3.0", "4"], "Der Cast wirkt zuerst auf die 7 – dann wird mit Kommazahlen gerechnet.", "Bauinformatik Block 1");
wf("binf", I3, "Von double nach int wandelt Java automatisch um.", false, "Falsch – dabei gehen Nachkommastellen verloren, also braucht man einen expliziten Cast: (int) x. Von int nach double geht es automatisch.", "Bauinformatik Block 1");
pair("binf", I2, "Ordne die Kommentarart zu.", [["// …", "einzeiliger Kommentar"], ["/* … */", "mehrzeiliger Kommentar"], ["/** … */", "Dokumentationskommentar (Javadoc)"]], "Gute Kommentare sind für die spätere Interpretation des Codes fundamental.", "Bauinformatik Block 1");
mc("binf", I2, "Wie muss die Datei der Klasse HalloRWTH heißen?", ["HalloRWTH.java", "hallorwth.java", "HalloRWTH.class", "Main.java"], "Klassenname = Dateiname, Groß-/Kleinschreibung zählt.", "Bauinformatik Block 1");
mc("binf", I1, "Wie startest du das kompilierte Programm auf der Konsole?", ["java HalloRWTH", "java HalloRWTH.class", "javac HalloRWTH", "run HalloRWTH.java"], "javac kompiliert, java führt aus – ohne .class.", "Bauinformatik Block 1");
mc("binf", I4, "Welchen Wert hat !(3 > 2)?", ["false", "true", "3", "Fehler"], "3 > 2 ist true, ! dreht es um.", "Bauinformatik Block 1");
mc("binf", I3, "Welche Dezimalzahl ist die Dualzahl 101?", ["5", "3", "101", "6"], "1·4 + 0·2 + 1·1 = 5.", "Bauinformatik Block 1");
mc("binf", I3, "Wie viele Bit hat ein Byte?", ["8", "4", "16", "10"], "Daher reicht byte von −128 bis 127.", "Bauinformatik Block 1");
pair("binf", I3, "Wie groß ist der Datentyp?", [["byte", "8 Bit"], ["short", "16 Bit"], ["int", "32 Bit"], ["long", "64 Bit"]], "float hat 32, double 64 Bit.", "Bauinformatik Block 1");
mc("binf", I3, "Woraus besteht eine Gleitkommazahl nach IEEE 754?", ["Vorzeichen, Exponent, Mantisse", "Nur aus Mantisse", "Ganzzahl und Rest", "Basis und Index"], "x = (−1)^v · m · 2^e.", "Bauinformatik Block 1");
wf("binf", I3, "Eine lokale Variable darf gelesen werden, bevor ihr ein Wert zugewiesen wurde.", false, "Falsch – der Compiler meldet dann einen Fehler. Erst deklarieren und initialisieren.", "Bauinformatik Block 1");
mc("binf", I4, "Was gibt System.out.println(\"a\" + 'b' + 1); aus?", ["ab1", "a99", "Fehler", "a b 1"], "Nach dem String wird alles verkettet.", "Bauinformatik Block 1");

/* Angewandte Statistik */
const S3 = "Gleichungssysteme";
mc("stat", S3, "Wann ist das LGS A·x = b lösbar?", ["Wenn rg(A) = rg(A | b)", "Wenn det A = 0", "Immer", "Wenn b = 0"], "Ist der Rang der erweiterten Matrix größer, widersprechen sich die Gleichungen.", "Angewandte Statistik Kap. 2");
mc("stat", S3, "Wann ist ein LGS eindeutig lösbar?", ["rg(A) = rg(A | b) = Zahl der Unbekannten", "rg(A) < Zahl der Unbekannten", "Wenn A rechteckig ist", "Wenn b der Nullvektor ist"], "Bei Rangdefekt gibt es unendlich viele Lösungen oder keine.", "Angewandte Statistik Kap. 2");
ord("stat", S3, "Gauß-Verfahren: Bring die Schritte in Reihenfolge.", ["Erweiterte Matrix [A | b] aufschreiben", "Nullen unter der Diagonale erzeugen (Dreiecksform)", "Von unten nach oben rückwärts einsetzen", "Probe in den Originalgleichungen"], "Zeilentausch, Vielfache addieren und Skalieren sind erlaubt.", "Angewandte Statistik Kap. 2, Ü1");
mc("stat", S3, "A ist quadratisch und regulär. Wie lautet die Lösung von A·x = b?", ["x = A⁻¹·b", "x = b·A⁻¹", "x = A·b", "x = b / A"], "Reihenfolge beachten – Matrizen sind nicht kommutativ.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Was ist die Spur einer quadratischen Matrix?", ["Summe der Diagonalelemente", "Produkt der Diagonalelemente", "Anzahl der Zeilen", "Die Determinante"], "sp(A) = Σ a_ii.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Was passiert mit der Determinante, wenn du zwei Zeilen vertauschst?", ["Das Vorzeichen dreht sich", "Sie bleibt gleich", "Sie verdoppelt sich", "Sie wird 0"], "Multiplizierst du eine Zeile mit λ, ändert sie sich um den Faktor λ.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Wie berechnet man die Norm eines Vektors a in Matrixschreibweise?", ["√(a′·a)", "a·a′", "a′ + a", "det(a)"], "Euklidische Norm, 2-Norm.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Welchen Rang kann eine (3, 5)-Matrix höchstens haben?", ["3", "5", "8", "15"], "rg(A) ≤ min(m, n).", "Angewandte Statistik Kap. 2");
wf("stat", S3, "Entsteht beim Gauß-Verfahren einer quadratischen Matrix eine Nullzeile, ist die Matrix singulär.", true, "Richtig – dann ist rg(A) < n und det A = 0.", "Angewandte Statistik Kap. 2");
mc("stat", S2, "Was ist a·a′ für einen Spaltenvektor a der Länge m?", ["Eine (m, m)-Matrix mit Rang 1", "Eine Zahl", "Ein Zeilenvektor", "Die Einheitsmatrix"], "a′·a ist dagegen eine Zahl (Ü1, Aufgabe 4).", "Angewandte Statistik Ü1");
mc("stat", S2, "Welche Diagonalelemente hat eine schiefsymmetrische Matrix?", ["Alle 0", "Alle 1", "Beliebige", "Alle gleich"], "Aus a_ii = −a_ii folgt a_ii = 0.", "Angewandte Statistik Kap. 2");
pair("stat", S1, "Aufgaben der Statistik im Ingenieurwesen – ordne zu.", [["Richtigkeit", "optimaler Wert trotz Abweichungen"], ["Präzision", "wie genau der Wert angesichts der Streuung ist"], ["Zuverlässigkeit", "wie verlässlich die Aussage ist"], ["Datenerhebung", "genug und repräsentativ messen"]], "„Eine Messung ist keine Messung!“", "Angewandte Statistik Kap. 1");
mc("stat", S1, "Was zeigt das Beispiel mit den EM-Toren auf linearer und logarithmischer Achse?", ["Darstellungen können täuschen – Achsen genau lesen", "Logarithmische Achsen sind immer falsch", "Tore fallen meist am Ende", "Man braucht mehr Daten"], "„Lügen, gemeine Lügen und Statistik.“", "Angewandte Statistik Kap. 1");

/* ───────── Version 1.2 (02.11.2026): Bildfragen, „Mehr erfahren“, klarere Formulierungen ───────── */
function bild(f, t, q, a, e, s, v) { FRAGEN.push({ f, t, typ: "mc", q, a, e, s, v }); }

bild("hydro", H1, "Zwei Röhrchen stehen in zwei Flüssigkeiten. Welche Flüssigkeit ist rechts?", ["Quecksilber", "Wasser", "Alkohol", "Öl"], "Rechts sinkt der Spiegel ab und der Meniskus ist nach oben gewölbt (konvex): Depression einer nicht benetzenden Flüssigkeit. Links steigt Wasser mit konkavem Meniskus.", "Hydromechanik V01", "kapillar");
bild("hydro", H2, "Das Bild zeigt den Druckverlauf in einem Behälter mit zwei Schichten. Was steht im oberen Bereich?", ["Eine leichtere Flüssigkeit, z. B. Öl", "Eine schwerere Flüssigkeit", "Luft unter Überdruck", "Dieselbe Flüssigkeit wie unten"], "Oben steigt der Druck flacher an – dort ist die Dichte kleiner. An der Grenze knickt die Linie, sie springt aber nicht.", "Hydromechanik V02", "schichtung");
bild("hydro", H3, "Ein Ponton schwimmt. Wie heißt die mit ? markierte Strecke?", ["Freibord f", "Tiefgang h_W", "Gesamthöhe H", "Wasserlinie"], "Freibord = Gesamthöhe minus Tiefgang: der Teil über Wasser.", "Hydromechanik V03", "schwimmen");
bild("bsk", B2, "Welche σ-ε-Linie gehört zu Baustahl unter Zug?", ["Linie B", "Linie A", "Linie C", "Linie D"], "B steigt linear an, fließt dann (Plateau) und verfestigt sich wieder – typisch duktiler Baustahl.", "Baustoffkunde V02", "sigeps");
bild("bsk", B2, "Welche σ-ε-Linie zeigt einen spröden Baustoff wie Ziegel?", ["Linie A", "Linie B", "Linie C", "Linie D"], "Linear bis zum plötzlichen Bruch, ohne plastischen Bereich – keine Vorwarnung.", "Baustoffkunde V02", "sigeps");
bild("bsk", B2, "Welche σ-ε-Linie passt zu Beton unter Druck?", ["Linie D", "Linie A", "Linie B", "Linie C"], "Beton erreicht ein Maximum und fällt danach ab (Entfestigung).", "Baustoffkunde V02", "sigeps");
bild("bsk", B2, "Was beschreibt der waagerechte Teil der Wöhlerlinie?", ["Die Dauerfestigkeit", "Die Bruchfestigkeit unter statischer Last", "Den E-Modul", "Die Kerbschlagarbeit"], "Unterhalb dieser Spannungsamplitude hält das Bauteil praktisch beliebig viele Lastwechsel aus.", "Baustoffkunde V02", "woehler");
bild("bauko", K3, "Welches Bauteil des Pfettendachs ist mit ② markiert?", ["Pfette", "Sparren", "Stütze", "First"], "① Sparren tragen die Dachlast zur ② Pfette, diese gibt sie an die ③ Stütze weiter.", "Leitfaden Rechenweg, Überblick", "pfettendach");
bild("bauko", K3, "Wo ist das Biegemoment eines Einfeldträgers unter Gleichlast am größten?", ["In Feldmitte", "An den Auflagern", "Im Viertelpunkt", "Überall gleich"], "Die Momentenlinie ist eine Parabel mit dem Maximum q·l²/8 in Feldmitte; an den Auflagern ist M = 0.", "Leitfaden Rechenweg, Schritt 5", "traeger");
bild("phys", P4, "In welchem Punkt der Wurfbahn ist die Geschwindigkeit am kleinsten?", ["Im Scheitel ②", "Beim Abwurf ①", "Beim Aufprall ③", "Überall gleich"], "Im Scheitel ist v_y = 0, es bleibt nur die konstante horizontale Komponente v_x.", "Physik V03", "wurf");
bild("phys", P4, "Gleichförmige Kreisbewegung: Welcher Pfeil zeigt die Beschleunigung?", ["Pfeil B", "Pfeil A", "Pfeil C", "Es gibt keine Beschleunigung"], "A ist die Geschwindigkeit (tangential), B zeigt zum Mittelpunkt: Zentripetalbeschleunigung.", "Physik V03", "kreis");
bild("dap", D4, "Wie viel Prozent der Werte liegen in der markierten Fläche (μ ± 1σ)?", ["68,3 %", "95,5 %", "99,7 %", "50 %"], "Rund zwei Drittel liegen innerhalb einer Standardabweichung um den Mittelwert.", "DAP L03", "normal");
bild("dap", D4, "Welche Kurve ist die Verteilungsfunktion (CDF)?", ["Kurve B", "Kurve A", "Beide", "Keine"], "Die CDF steigt S-förmig von 0 auf 1. Kurve A ist die Dichte (PDF).", "DAP L03", "pdfcdf");

/* Bilder zu bestehenden Fragen, Umformulierungen und Zusatzinfos.
   Schlüssel = ursprünglicher Fragetext, damit der Lernstand erhalten bleibt. */
const EXTRA = {
  "Wo greift die Wasserdruckkraft auf eine senkrechte Wand an?": { v: "druck" },
  "Welche Ordnung hat das Produkt einer (2, 3)- mit einer (3, 4)-Matrix?": { v: "matrix" },
  "Einfeldträger – ordne zu.": { q: "Einfeldträger: Ordne die Formel der Größe zu.", v: "traeger" },
  "Ordne zu.": null,
  "Goldene Regel bei kommunizierenden Röhren:": { q: "Was gilt in kommunizierenden Röhren immer?" },
  "Kraft auf eine beliebige ebene, geneigte Fläche:": { q: "Wie berechnest du die Wasserdruckkraft auf eine schräge, ebene Fläche?" },
  "Gekrümmte Fläche: Was ist die vertikale Kraftkomponente F_V?": { q: "Wasser drückt auf eine gekrümmte Fläche. Wie groß ist die senkrechte Kraftkomponente F_V?" },
  "Kreuzprodukt zweier paralleler oder antiparalleler Vektoren:": { q: "Was ergibt das Kreuzprodukt zweier paralleler Vektoren?" },
  "Mehrachsiger Druck auf ein Bauteil …": { q: "Ein Bauteil wird von mehreren Seiten zugleich gedrückt (mehrachsiger Druck). Was passiert mit seiner Druckfestigkeit?", a: ["Sie steigt stark", "Sie sinkt", "Sie bleibt gleich", "Der Baustoff wird spröde"] },
  "E-Modul von Baustahl:": { q: "Wie groß ist der E-Modul von Baustahl ungefähr?" },
  "Schneeformbeiwert μ₁ bei einer Dachneigung ab 60°:": { q: "Ein Dach ist 60° oder steiler geneigt. Welchen Schneeformbeiwert μ₁ setzt du an?" },
  "Wichten zum Auswendigkönnen:": { q: "Welche Wichte hat der Baustoff?" },
  "Durchlaufträger: Wie bekommt man eine Auflagerkraft?": { q: "Wie berechnest du die Auflagerkraft eines Durchlaufträgers mit gleich langen Feldern?" },
  "Welche Kombination ist bei Holz maßgebend?": { q: "Bei Holz gibt es mehrere Lastkombinationen. Welche ist maßgebend?" },
  "Ordne die Klasse der Lasteinwirkungsdauer zu.": { q: "Wie lange wirkt die Last – und welches kmod gehört dazu?" },
  "Biegefestigkeit f_m,k von Vollholz C24:": { q: "Wie groß ist die charakteristische Biegefestigkeit f_m,k von Vollholz C24?" },
  "Welcher Token-Typ ist das?": { q: "Zu welcher Art von Token gehört der Codeschnipsel?" },
  "Begriffe am Betonfertigteil – ordne zu.": { q: "Ein Betonfertigteil wird zehnmal vermessen. Ordne die Begriffe zu." },
  "Determinante einer Dreiecksmatrix:": { q: "Wie berechnest du die Determinante einer Dreiecksmatrix am schnellsten?" },
  "Typische Folge von Item-Nonresponse in Mobilitätsbefragungen:": { q: "Befragte lassen einzelne Angaben weg (Item-Nonresponse). Was ist die typische Folge in Mobilitätsbefragungen?" },
  "Phänomen und Korrektur – ordne zu.": { q: "Welche Verzerrung lässt sich wie korrigieren?" },
  "ψ₂ für Nutzlast Kategorie A (Wohnen):": { q: "Welchen Beiwert ψ₂ hat die Nutzlast im Wohnungsbau (Kategorie A)?" },
  "Höhenbeiwert k_h für Vollholz mit h ≥ 150 mm:": { q: "Ein Vollholzbalken ist mindestens 150 mm hoch. Welchen Höhenbeiwert k_h hat er?" },
  "Faustregel zur Wärmedämmung:": { q: "Welche Faustregel gilt für die Wärmedämmung von Baustoffen?" },
  "Vitruvs drei Anforderungen an jedes Bauwerk:": { q: "Vitruv nennt drei Anforderungen an jedes Bauwerk. Was bedeuten sie?" },
  "Gleiche Strecken mit v₁ und v₂: Welche Durchschnittsgeschwindigkeit?": { q: "Du fährst eine Strecke mit v₁ hin und mit v₂ zurück. Wie groß ist die Durchschnittsgeschwindigkeit?" },
  "Was gilt im Scheitelpunkt eines Wurfs?": { v: "wurf" }
};
/* Mehrere Fragen heißen „Ordne zu.“ – je nach Fach eigener Titel */
const ORDNE_ZU = {
  hydro: "Begriffe aus V01 – ordne zu.", bauko: "Sicherheitskonzept – ordne die Begriffe zu.",
  binf_tools: "Werkzeuge rund um Java – ordne zu.", binf_typ: "Welcher Datentyp passt zum Wert?",
  dap: "Begriffe zu Verteilungen – ordne zu.", phys: "Vektorformeln – ordne zu."
};

/* „Mehr erfahren“: 2–3 Sätze Hintergrund je Thema */
const THEMEN = {
  "hydro|Eigenschaften des Wassers": "Wasser ist fast inkompressibel, hat bei 4 °C seine größte Dichte und haftet an Oberflächen. Diese drei Eigenschaften erklären, warum man in HM I mit konstanter Dichte rechnet, warum Seen von oben zufrieren und warum Wasser im Boden und im Mauerwerk kapillar aufsteigt.",
  "hydro|Hydrostatik 1": "In ruhendem Wasser gibt es nur Druck, und der hängt allein von der Tiefe ab: p = ρ·g·z. Daraus folgen alle Kräfte auf Wände, Schütze und Klappen – man integriert den Druck über die Fläche, was bei Rechtecken auf das Druckdreieck mit Angriffspunkt bei ⅔·h führt.",
  "hydro|Hydrostatik 2": "Auftrieb ist nichts anderes als der Druckunterschied zwischen Unter- und Oberseite eines Körpers. Daraus ergeben sich Schwimmen, Tiefgang und Freibord. Wird der Behälter beschleunigt, rechnet man einfach mit der effektiven Beschleunigung g + b weiter.",
  "hydro|Hydrodynamik": "Sobald Wasser strömt, braucht man Begriffe für die Bewegung: Stromlinien, stationär oder instationär, Euler- oder Lagrange-Sicht. Die wichtigste Gleichung ist die Kontinuität: Was vorne hineinfließt, muss hinten herauskommen, Q = v·A bleibt konstant.",
  "hydro|Energiesatz": "Bernoulli ist eine Energiebilanz entlang einer Stromlinie: Geschwindigkeitshöhe, Druckhöhe und Lagehöhe tauschen sich aus, ihre Summe bleibt gleich. In realen Strömungen kommen Verlusthöhen dazu, die die Energielinie absinken lassen.",
  "hydro|Impulssatz": "Der Impulssatz betrachtet nur den Zustand am Ein- und Austritt eines Kontrollraums. Damit lassen sich Kräfte auf Krümmer, Düsen oder Wehre bestimmen, ohne die Verluste im Inneren zu kennen.",
  "hydro|Gerinneströmung": "Im offenen Gerinne entscheidet die Froude-Zahl über den Fließzustand: unter 1 strömt das Wasser ruhig, über 1 schießt es. Beim Übergang vom Schießen ins Strömen entsteht ein Wechselsprung, der viel Energie vernichtet – erwünscht etwa im Tosbecken unter einem Wehr.",
  "phys|Einheiten": "Alle physikalischen Größen lassen sich auf sieben SI-Basiseinheiten zurückführen. Wer Einheiten mitschreibt, findet Fehler sofort: Eine Rechnung, die am Ende kg·m/s² statt N/m² liefert, ist falsch, egal wie die Zahl aussieht.",
  "phys|Geradlinige Bewegung": "Ort, Geschwindigkeit und Beschleunigung hängen über Ableitungen zusammen. Im Diagramm heißt das: Steigung von x(t) ist v, Steigung von v(t) ist a, und die Fläche unter v(t) ist der zurückgelegte Weg.",
  "phys|Vektoren": "Vektoren haben Betrag und Richtung. Das Skalarprodukt misst, wie stark zwei Vektoren in dieselbe Richtung zeigen, das Kreuzprodukt liefert einen senkrechten Vektor, dessen Betrag der aufgespannten Fläche entspricht.",
  "phys|Bewegung in 2D/3D": "Beim Wurf zerlegt man die Bewegung in zwei unabhängige Richtungen: waagerecht gleichförmig, senkrecht gleichmäßig beschleunigt. Bei der Kreisbewegung ändert sich die Richtung ständig, deshalb gibt es auch bei konstantem Tempo eine Beschleunigung zum Mittelpunkt.",
  "bsk|Einteilung und Grundlagen": "Baustoffe werden nach ihrem Aufbau in vier Gruppen eingeteilt und nach Gewicht, Festigkeit, Verformbarkeit und Dauerhaftigkeit bewertet. Verbundwerkstoffe wie Stahlbeton kombinieren gezielt die Stärken zweier Baustoffe.",
  "bsk|Mechanische Eigenschaften": "Die σ-ε-Linie ist der Fingerabdruck eines Baustoffs: Die Steigung zeigt die Steifigkeit (E-Modul), die Höhe die Festigkeit und die Länge die Verformbarkeit. Zeitabhängige Effekte wie Kriechen, Relaxation und Ermüdung kommen bei realen Bauwerken dazu.",
  "bsk|Physikalische Eigenschaften": "Poren bestimmen, wie Wasser, Salze und Wärme durch einen Baustoff wandern. Viele kleine, durchgängige Kapillaren saugen Wasser hoch; viele luftgefüllte Poren dämmen gut. Deshalb ist ein leichter, poriger Stoff meist ein guter Dämmstoff, aber ein schwacher Tragstoff.",
  "bauko|Sicherheitskonzept": "Lasten und Tragfähigkeit streuen. Statt mit einem globalen Sicherheitsfaktor arbeitet die Norm mit Teilsicherheitsbeiwerten: Lasten werden erhöht, Festigkeiten abgemindert, bis E_d ≤ R_d erfüllt ist. So bleibt die Versagenswahrscheinlichkeit sehr klein.",
  "bauko|Lasten": "Lasten werden immer getrennt nach Art aufgestellt, weil Eigengewicht, Schnee, Wind und Nutzlast unterschiedlich lange wirken und andere Beiwerte bekommen. Entscheidend ist auch die Bezugsfläche: Schnee je m² Grundfläche, Eigengewicht je m² Dachfläche, Wind senkrecht zur Dachfläche.",
  "bauko|Einwirkungen": "Schnee, Wind und Nutzlasten stammen aus der DIN EN 1991 und hängen vom Standort, der Höhe und der Nutzung ab. Die Werte sind charakteristisch, also so gewählt, dass sie in 50 Jahren nur selten überschritten werden.",
  "bauko|Rechenweg": "Jede Bauko-Aufgabe folgt derselben Kette: Lasten, Lastweg, Auflagerkräfte, Schnittgrößen, Kombination, Nachweis. Die Auflagerkraft eines Bauteils ist immer die Last auf das nächste Bauteil darunter.",
  "bauko|Holzbemessung": "Holz wird fester, je kürzer eine Last wirkt. Deshalb teilt man jede Lastkombination durch das kmod ihrer kürzesten Last und sucht so die maßgebende. Der Nachweis selbst ist immer eine Ausnutzung η = Beanspruchung / Festigkeit ≤ 1.",
  "binf|Java und JDK": "Java-Code wird zuerst in plattformunabhängigen Bytecode übersetzt und erst beim Ausführen von der JVM in Maschinencode verwandelt. Deshalb läuft dieselbe .class-Datei auf Windows, macOS und Linux.",
  "binf|Programmrahmen": "Jedes Programm steckt in einer Klasse, und gestartet wird immer die main-Methode. Java ist streng: Groß- und Kleinschreibung zählt, jede Anweisung endet mit einem Semikolon, und Klassen- und Dateiname müssen übereinstimmen.",
  "binf|Datentypen": "Primitive Typen speichern den Wert direkt und haben feste Größen – mehr Bits heißen größerer Wertebereich. Referenztypen wie String verweisen auf Objekte. Beim Umwandeln von groß nach klein, etwa double → int, braucht man einen expliziten Cast.",
  "binf|Operatoren": "Java wertet Ausdrücke von links nach rechts aus. Zwei int-Werte ergeben bei Division wieder ein int, und sobald ein String im Spiel ist, wird + zur Verkettung. Code-Ausgaben vorherzusagen ist genau das, was in den eTests gefragt wird.",
  "stat|Einführung": "Statistik schließt von einer Stichprobe auf das Ganze. Das funktioniert nur mit repräsentativen Daten, und vorher müssen grobe Fehler aussortiert werden – eine einzelne falsche Messung kann den Mittelwert stark verzerren.",
  "stat|Matrizen": "Matrizen sind das Werkzeug für die späteren Kapitel: Ausgleichsrechnung, Varianzfortpflanzung und Regression werden alle in Matrixform geschrieben. Wichtig sind die Regeln fürs Multiplizieren, Transponieren und Invertieren.",
  "stat|Gleichungssysteme": "Ein lineares Gleichungssystem lässt sich als A·x = b schreiben. Ob und wie viele Lösungen es gibt, verrät der Rang. Mit dem Gauß-Verfahren bringt man A auf Dreiecksform und setzt dann rückwärts ein.",
  "dap|Daten und Befragungen": "Verkehrsplanung stützt sich auf Register, Befragungen und passive Daten. Befragungen wie die MiD liefern die reichsten Informationen über Wege und Gründe, haben aber typische Schwächen wie Nichtteilnahme und vergessene Wege.",
  "dap|Gewichtung und Post-Processing": "Eine Stichprobe bildet die Bevölkerung nie perfekt ab. Mit Design- und Redressment-Gewichten, IPF und Imputation korrigiert man bekannte Verzerrungen, bevor hochgerechnet wird. Was durch das Thema der Befragung selbst verzerrt ist, lässt sich so aber kaum heilen.",
  "dap|R-Grundlagen": "R arbeitet vektorbasiert: Fast alles ist ein Vektor, und Funktionen wirken auf alle Elemente zugleich. Typische Stolpersteine sind der Index ab 1, die automatische Typumwandlung in Vektoren und die Groß-/Kleinschreibung.",
  "dap|Verteilungen": "Verteilungen beschreiben, wie wahrscheinlich welche Werte sind. Die Normalverteilung ist zentral, weil sich viele Summen zufälliger Einflüsse ihr annähern – das ist der zentrale Grenzwertsatz aus der nächsten Vorlesung."
};

/* ═════════ Patch 1.3 · eingespielt 02.11.2026 ═════════ */

/* Patch-Warteschlange · Hydromechanik · Übung 01–04 + Klausurübung (Übung 05) · erstellt 02.11.2026 */
mc("hydro", H1, "Warum siedet Wasser im Gebirge schon unter 100 °C?", ["Der Luftdruck ist geringer, der Dampfdruck wird früher erreicht", "Das Wasser ist dort weicher", "Die Dichte ist dort größer", "Die Oberflächenspannung ist kleiner"], "Sieden beginnt, wenn der Dampfdruck des Wassers den Umgebungsdruck erreicht – und der ist in der Höhe kleiner.", "Hydromechanik Übung 01");
mc("hydro", H1, "Was ist Kavitation?", ["Dampfblasen in einer Strömung infolge von Unterdruck", "Luftblasen durch Wellen", "Eisbildung im Rohr", "Kapillarer Aufstieg in Poren"], "Sinkt der Druck lokal unter den Dampfdruck, bilden sich Dampfblasen, die beim Zusammenfallen Bauteile wie Pumpen oder Turbinen schädigen.", "Hydromechanik Übung 01");
mc("hydro", H1, "Wie viel steifer als Wasser ist Stahl ungefähr?", ["Rund 100-mal", "Rund 10-mal", "Rund 1000-mal", "Gleich steif"], "E_W ≈ 2,1·10³ MN/m², E_Stahl ≈ 2,1·10⁵ MN/m².", "Hydromechanik Übung 01");
mc("hydro", H1, "Was ist die Ursache der Kapillarität?", ["Unterschiedliche Oberflächenspannungen zwischen Flüssigkeit, Gas und Gefäßwand", "Der Luftdruck über der Flüssigkeit", "Die Viskosität", "Die Dichteanomalie"], "Kohäsion (Flüssigkeit–Flüssigkeit) und Adhäsion (Flüssigkeit–Wand) bestimmen, ob die Flüssigkeit steigt oder sinkt.", "Hydromechanik Übung 01");
wf("hydro", H2, "Der Wasserdruck in einem Punkt hängt davon ab, wie die Fläche dort ausgerichtet ist.", false, "Falsch – Druck ist ein Skalar und wirkt in alle Richtungen gleich. Er steht aber immer senkrecht auf der jeweiligen Fläche.", "Hydromechanik Übung 02");
mc("hydro", H2, "Wie bestimmst du die horizontale Kraft auf eine geneigte Fläche?", ["Druckfigur über die senkrechte Projektion der Fläche", "Gewicht des Wassers über der Fläche", "Druck an der Oberkante mal Fläche", "Gar nicht, sie ist null"], "Horizontal zählt nur die Projektion auf eine senkrechte Ebene; vertikal die Auflast des Wassers über der Fläche.", "Hydromechanik Übung 02, Übung 05");
mc("hydro", H3, "Ein Holzwürfel (ρ = 800 kg/m³, Kante 1 m) schwimmt in Süßwasser. Welcher Anteil taucht ein?", ["80 %", "20 %", "50 %", "100 %"], "Schwimmen: ρ_Holz · V = ρ_W · V_eingetaucht → Anteil = 800/1000.", "Hydromechanik Übung 02");
wf("hydro", H3, "Eine Bleikugel wird einmal auf einen schwimmenden Holzklotz gelegt und einmal unten an ihn gehängt. Das insgesamt verdrängte Wasservolumen ist in beiden Fällen gleich.", true, "Richtig – das Gesamtgewicht ist gleich, also auch die Verdrängung. Hängt die Kugel unten, verdrängt sie selbst Wasser, und der Klotz taucht weniger tief ein.", "Hydromechanik Übung 02");
mc("hydro", H3, "Warum ändert sich der Wasserstand im Glas nicht, wenn Eiswürfel schmelzen?", ["Schwimmendes Eis verdrängt genau sein eigenes Gewicht an Wasser", "Eis hat dieselbe Dichte wie Wasser", "Das Schmelzwasser verdunstet", "Eis taucht vollständig ein"], "Das Schmelzwasser füllt exakt das Volumen, das das Eis vorher verdrängt hat.", "Hydromechanik Übung 02");
mc("hydro", H4, "Welche Annahmen stecken in Q₁ = Q₂ für ein Rohr?", ["Keine Speicherung, stationäre Verhältnisse, ρ konstant", "Reibungsfreiheit und gleicher Druck", "Gleicher Querschnitt", "Freier Wasserspiegel"], "Was in das Kontrollvolumen hineinfließt, muss in derselben Zeit wieder heraus.", "Hydromechanik Übung 03");
mc("hydro", H4, "Ein Zulauf teilt sich in zwei Wasserhähne. Was gilt?", ["Q₀ = Q₁ + Q₂", "Q₀ = Q₁ = Q₂", "v₀ = v₁ + v₂", "A₀ = A₁ + A₂"], "Kontinuität an der Verzweigung: Die Summe der abfließenden Ströme ist gleich dem Zufluss.", "Hydromechanik Übung 03");
mc("hydro", H4, "Ein Behälter wird mit Q_zu gefüllt und läuft mit Q_ab aus. Wie ändert sich das Volumen?", ["dV/dt = Q_zu − Q_ab", "dV/dt = Q_zu + Q_ab", "V bleibt konstant", "dV/dt = Q_zu · Q_ab"], "Bei Speicherung gilt die Kontinuität in Bilanzform – so bestimmt man Füllzeiten.", "Hydromechanik Übung 03");
mc("hydro", H5, "Ein Rohr wird enger. Was passiert nach Bernoulli (gleiche Höhe) mit dem Druck?", ["Er sinkt, weil die Geschwindigkeit steigt", "Er steigt", "Er bleibt gleich", "Er wird negativ unendlich"], "Mehr Geschwindigkeitshöhe heißt weniger Druckhöhe – das Prinzip des Venturirohrs.", "Hydromechanik Übung 03, Lehrlabor Venturirohr");
ord("hydro", H5, "Bernoulli-Aufgabe: Bring das Vorgehen in Reihenfolge.", ["Bezugshorizont z = 0 festlegen", "Zwei Punkte mit möglichst vielen bekannten Größen wählen", "Energiehöhen beider Punkte gleichsetzen", "Fehlende Geschwindigkeit über die Kontinuität ersetzen", "Nach der gesuchten Größe auflösen"], "Gute Punkte: freie Oberflächen (p = 0, v ≈ 0) und Austrittsöffnungen (p = 0).", "Hydromechanik Übung 03");
ord("hydro", H6, "Stützkraftsatz anwenden (Übung 04): Reihenfolge?", ["Kontrollvolumen festlegen", "Koordinatensystem festlegen", "Alle Kräfte am Kontrollvolumen einzeichnen", "Stützkraftsatz anwenden (ggf. Momente)", "Kontinuität und Bernoulli für fehlende Größen nutzen"], "Genau so steht es in der Übung: erst abgrenzen und orientieren, dann bilanzieren.", "Hydromechanik Übung 04");
pair("hydro", H6, "Woraus besteht die Stützkraft im Freispiegelgerinne?", [["ρ·g·b·h²/2", "Druckkraft (hydrostatisch)"], ["ρ·Q·v", "Impulsstrom"], ["Summe beider", "Stützkraft S"]], "Annahme: hydrostatische Druckverteilung im Querschnitt.", "Hydromechanik Übung 04");
mc("hydro", H6, "Warum darf man beim kurzen Rohrkrümmer in Übung 04 die Reibung vernachlässigen?", ["Die Fließstrecke ist sehr kurz", "Wasser hat keine Viskosität", "Der Durchfluss ist klein", "Weil der Krümmer horizontal liegt"], "Kurze Strecke → kaum Reibungsverluste; der Impulssatz liefert dann die Widerlagerkraft.", "Hydromechanik Übung 04");
mc("hydro", H6, "Ein freier Wasserstrahl prallt senkrecht auf eine Platte. Welche Größe bestimmt die Aufprallkraft?", ["ρ·Q·v", "ρ·g·h", "½·ρ·v²", "Q / v"], "Der Strahl hat Atmosphärendruck, also zählt nur der Impulsstrom, der an der Platte umgelenkt wird.", "Hydromechanik Übung 04");
mc("hydro", H7, "Woran erkennst du in Übung 04 den Fließzustand im Gerinne?", ["An der Froude-Zahl", "An der Reynolds-Zahl", "Am Gefälle allein", "An der Wassertemperatur"], "Fr < 1 Strömen, Fr > 1 Schießen, Fr = 1 Grenzzustand.", "Hydromechanik Übung 04");
wf("hydro", H7, "Beim Wechselsprung bleibt die Energiehöhe erhalten.", false, "Falsch – im Wechselsprung wird Energie vernichtet (Walze, Turbulenz). Das muss man bei der Energiebilanz berücksichtigen.", "Hydromechanik Übung 04");
mc("hydro", H2, "Wasser liegt über einer gekrümmten Fläche, etwa der Oberseite eines Rohres. In welche Richtung wirkt die senkrechte Wasserkraft?", ["Nach unten – Auflast des Wassers darüber", "Nach oben", "Gar nicht", "Schräg nach oben"], "Liegt das Wasser über der Fläche, ist F_V das Gewicht dieses Wasserkörpers. Drückt Wasser von unten gegen eine Fläche, zeigt F_V nach oben.", "Hydromechanik Übung 05 Klausurübung");
mc("hydro", H5, "Für welche Strömungen gilt die Bernoulli-Gleichung laut Klausurübung?", ["Stationär, reibungsfrei, inkompressibel", "Instationär und turbulent", "Nur für Gase", "Nur bei freiem Wasserspiegel"], "Bei realen Strömungen kommen Verlusthöhen dazu.", "Hydromechanik Übung 05 Klausurübung");

/* Patch-Warteschlange · Baukonstruktion · V03 Widerstände und Bemessung, Ü01/Ü02/Ü06, Hausübung 1, Klausuranalyse · erstellt 02.11.2026 */
const K6 = "Holz als Baustoff", K7 = "Klausur";
mc("bauko", K6, "Warum streuen die Eigenschaften von Bauholz so stark?", ["Sie variieren im Stamm und von Baum zu Baum (Äste, Faserneigung, Wuchs)", "Wegen der Trocknung im Werk", "Weil Holz isotrop ist", "Sie streuen kaum"], "Holz ist ein gewachsener, anisotroper und poröser Baustoff – Hirn-, Radial- und Tangentialschnitt unterscheiden sich.", "Baukonstruktion V03");
mc("bauko", K6, "Wie fest ist Holz senkrecht zur Faser im Vergleich zu parallel?", ["Nur etwa 1/10", "Etwa gleich", "Etwa doppelt so fest", "Etwa halb so fest"], "Parallel zur Faser hohe Festigkeit und Steifigkeit, quer dazu werden die Zellen zusammengedrückt.", "Baukonstruktion V03");
mc("bauko", K6, "Warum ist bei Bauholz unter Normalbedingungen die Druckfestigkeit höher als die Zugfestigkeit (parallel zur Faser)?", ["Äste und Wuchsunregelmäßigkeiten mindern vor allem die Zugfestigkeit", "Holzfasern können keinen Zug aufnehmen", "Wegen der Feuchte", "Das stimmt nicht"], "Ideal wäre Zug sogar stärker; in der Praxis machen Fehlstellen den Zug schwächer.", "Baukonstruktion V03");
mc("bauko", K6, "Welche Beanspruchung verträgt Holz am schlechtesten?", ["Querzug", "Druck parallel zur Faser", "Zug parallel zur Faser", "Biegung"], "Bei Querzug lösen sich die Fasern voneinander – sehr geringe Festigkeit und kaum Verformung.", "Baukonstruktion V03");
pair("bauko", K4, "KLED: Ordne die Dauer zu.", [["ständig", "länger als 10 Jahre (Eigenlast)"], ["mittel", "1 Woche bis 6 Monate (Nutzlast Decke)"], ["kurz", "kürzer als 1 Woche (Schnee bis 1000 m)"], ["sehr kurz", "kürzer als 1 Minute (Anprall)"]], "Für Wind darf man „kurz/sehr kurz“ kombinieren und das kmod mitteln.", "Baukonstruktion V03, SBT Tafel 9.3");
mc("bauko", K4, "Wovon hängt kmod ab?", ["Baustoff, Nutzungsklasse und KLED", "Nur von der Holzart", "Von der Spannweite", "Von γ_M"], "Das kommt in der Klausur regelmäßig als Kurzfrage.", "Baukonstruktion V03, Klausuranalyse");
pair("bauko", K4, "Ordne die Nutzungsklasse zu.", [["NKL 1", "beheizter Innenraum"], ["NKL 2", "überdacht, aber offen"], ["NKL 3", "frei bewittert"]], "Die NKL musst du in der Klausur meist selbst aus dem Text ableiten.", "Klausuranalyse Baukonstruktion");
mc("bauko", K4, "Was ist beim Knicknachweis eines Holzstabs der Beiwert k_c?", ["Ein Abminderungsfaktor ≤ 1,0 wegen Knickgefahr", "Der Höhenbeiwert", "Ein Erhöhungsfaktor für kurze Stäbe", "Die Knicklänge"], "N_d / A ≤ k_c · f_c,0,d. Er hängt vom bezogenen Schlankheitsgrad ab.", "Baukonstruktion V03");
ord("bauko", K4, "Knicknachweis Holzstütze: Reihenfolge?", ["Knicklänge l_ef aus dem Eulerfall bestimmen", "Trägheitsradius i = h/√12", "Schlankheit λ = l_ef / i", "k_c aus Tabelle ablesen (interpolieren)", "N_d / A ≤ k_c · f_c,0,d nachweisen"], "So steht es auch im Rechenweg der Musterlösungen.", "Baukonstruktion V03, Klausuranalyse");
mc("bauko", K4, "Welcher Beiwert k_m gilt bei Doppelbiegung für Rechteckquerschnitte aus Vollholz?", ["0,7", "1,0", "0,5", "1,3"], "k_m = 1,0 gilt für andere Querschnitte.", "Baukonstruktion V03");
pair("bauko", K4, "Empfohlene Grenzwerte der Durchbiegung (allgemein) – ordne zu.", [["w_inst", "l / 300"], ["w_fin", "l / 200"], ["w_net,fin", "l / 300"]], "Kragarme: l_k/150, l_k/100, l_k/150.", "Baukonstruktion V03, SBT S. 9.15");
mc("bauko", K4, "Was beschreibt w_creep in der Enddurchbiegung?", ["Die Kriechverformung über die Zeit (mit k_def)", "Die elastische Sofortverformung", "Die Überhöhung", "Die Verformung durch Wind"], "w_fin = w_inst + w_creep. k_def: NKL 1 = 0,6 · NKL 2 = 0,8 · NKL 3 = 2,0.", "Baukonstruktion V03, Klausuranalyse");
mc("bauko", K1, "Was ist ein Grenzzustand der Gebrauchstauglichkeit?", ["Ein Zustand, ab dem die Brauchbarkeit eingeschränkt ist", "Der Zustand kurz vor dem Einsturz", "Die maximale Nutzlast", "Ein Brandschutznachweis"], "Typisch: zu große Durchbiegung, Schwingungen, Risse.", "Baukonstruktion V03");
ord("bauko", K2, "Deckenlast für einen Unterzug (wie Ü01): Reihenfolge?", ["Deckenaufbau Schicht für Schicht in kN/m²", "Nutzlast und Trennwandzuschlag ergänzen", "Balkenlast: kN/m² × Balkenabstand", "Auflagerkräfte der Balken (Tafelwerte bei Durchlaufträgern)", "Auflagerkräfte als Linienlast auf den Unterzug"], "Jede Lastart einzeln weiterleiten, erst am Ende kombinieren.", "Baukonstruktion Ü01, Leitfaden Rechenweg");
mc("bauko", K2, "Eine Holzbalkendecke liegt auf einem Stahlträger. Wie bekommst du die Linienlast auf den Träger aus einem Durchlaufträger-Tafelwert?", ["Tafelwert × p_k × l", "Tafelwert × p_k × l × e", "p_k / l", "Tafelwert × e"], "Der Balkenabstand steckt schon in der Einheit – nicht noch einmal mit e multiplizieren (Falle aus Ü01).", "Baukonstruktion Ü01");
mc("bauko", K5, "Wohin wirkt der Wind auf ein Satteldach?", ["Senkrecht zur Dachfläche", "Immer waagerecht", "Immer lotrecht", "Parallel zum First"], "Deshalb zerlegt man ihn für die Grundriss-Spannweite in lotrechte und waagerechte Anteile.", "Baukonstruktion Ü02, Leitfaden");
mc("bauko", K5, "Welche Seiten des Satteldachs sind die Luvseite-Bereiche?", ["F, G, H", "J, I", "Alle fünf", "Nur F"], "F, G, H liegen auf der Luvseite (dem Wind zugewandt), J und I auf der Leeseite.", "Baukonstruktion Ü02, Leitfaden");
mc("bauko", K5, "In der Hausübung: Was ist b in e = min(b; 2h)?", ["Länge des Dachgrundrisses inklusive Dachüberstände", "Gebäudebreite ohne Überstände", "Sparrenlänge", "Firsthöhe"], "So hat es Dynexite gewertet (10,815 m = 10,045 + 2 · 0,385 m).", "Baukonstruktion Hausübung 1");
ord("bauko", K4, "Nachweis eines Holzbalkens (wie Ü06): Reihenfolge?", ["Auflagerkräfte und Momente je Lastart", "Alle Kombinationen bilden und durch kmod teilen", "Maßgebende Kombination wählen (größtes E_d / kmod)", "Bemessungsfestigkeit f_d = kmod · f_k / γ_M", "Ausnutzung η ≤ 1 für Biegung, Schub, Querdruck"], "Ü06: 8/24 mit η = 0,99.", "Baukonstruktion Ü06");
mc("bauko", K4, "Ein Balken hat eine Kerve (Ausklinkung). Was ändert sich im Biegenachweis?", ["Die wirksame Höhe wird kleiner: W_n = b·(h − t_Kerve)²/6", "Die Last wird kleiner", "Nichts", "kmod wird kleiner"], "Typische Falle aus den Musterlösungen: Die Kerve verringert die Höhe, nicht die Last.", "Klausuranalyse Baukonstruktion");
wf("bauko", K2, "Mannlast und Schnee werden zusammen überlagert.", false, "Falsch – laut Musterlösungen werden sie nicht gleichzeitig angesetzt.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Wie ist die Bauko-Klausur seit 2014 aufgebaut?", ["Teil I Kurzfragen (≈ 20 P.), Teil II drei Rechenaufgaben (≈ 70 P.)", "Nur Rechenaufgaben", "Nur Multiple Choice", "Mündliche Prüfung"], "Insgesamt rund 90 Punkte.", "Klausuranalyse Baukonstruktion");
pair("bauko", K7, "Teil II – welche Aufgabe behandelt was?", [["Aufgabe 1", "Holzbau (≈ 25 P.)"], ["Aufgabe 2", "Mauerwerk (≈ 30 P.)"], ["Aufgabe 3", "Gründung / Fundament (≈ 15 P.)"]], "Die Verteilung ist seit Jahren fest.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Welches Thema kam in Teil I fast jedes Mal dran (23 von 24 Klausuren)?", ["Stabilisierung mit möglichst wenigen Diagonalen", "Wichten der Baustoffe", "Ringanker", "Anforderungen an Flachdächer"], "Jedes Mal 7–10 Punkte – der sicherste Punktelieferant.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Eine Teilaufgabe konntest du nicht lösen. Was tust du in der Bauko-Klausur?", ["Mit dem angegebenen Ersatzwert weiterrechnen", "Die Folgeaufgaben auslassen", "Einen eigenen Wert raten", "Die Aufgabe abbrechen"], "Fast jede Teilaufgabe nennt einen Ersatzwert („Falls a) nicht gelöst wurde …“).", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Was bedeutet die Steinbezeichnung KSL 6-1,2-II?", ["Kalksand-Lochstein, Druckfestigkeitsklasse 6, Rohdichteklasse 1,2", "Klinker, 6 cm dick, 1,2 m lang", "Kalksandstein, 6 Löcher, Klasse II", "Kunststoff-Leichtstein"], "So erwartet es die Musterlösung bei der Kurzfrage zur Steinbezeichnung.", "Klausuranalyse Baukonstruktion");
THEMEN["bauko|Holz als Baustoff"] = "Holz ist gewachsen, anisotrop und porös: Entlang der Faser ist es fest und steif, quer dazu nur etwa ein Zehntel davon. Äste, Faserneigung und Feuchte lassen die Werte stark streuen – deshalb arbeitet die Norm mit Festigkeitsklassen wie C24 und Beiwerten wie kmod und k_h.";
THEMEN["bauko|Klausur"] = "Die Klausur ist seit Jahren gleich aufgebaut: Kurzfragen in Teil I, dann je eine Rechenaufgabe zu Holzbau, Mauerwerk und Gründung. Wer die rund zehn Standard-Rechenwege sicher kann und die Stabilisierung beherrscht, holt den Großteil der Punkte.";

/* Patch-Warteschlange · Physik Blatt 2 · Statistik Übung 1 · DAP Exercise 1 · Baustoffkunde NaWi 01 · erstellt 02.11.2026 */
/* Physik – Übungsblatt 2 (Vektoren) */
ord("phys", P3, "Richtungswinkel einer Gesamtverschiebung (Blatt 2, A1): Reihenfolge?", ["Teilverschiebungen in x- und y-Komponenten zerlegen", "Komponenten addieren: R_x, R_y", "Betrag R = √(R_x² + R_y²)", "Quadrant aus den Vorzeichen bestimmen", "Winkel mit arctan und Quadrantenkorrektur"], "In A1 lag R im II. Quadranten: φ = 180° − arctan(|R_y / R_x|) bzw. π − …", "Physik Blatt 2");
mc("phys", P3, "Eine Raumdiagonale eines Quaders mit den Kanten a, b, c hat welche Länge?", ["√(a² + b² + c²)", "a + b + c", "√(a² + b²) + c", "(a + b + c) / 3"], "Der Betrag eines 3D-Vektors – genau das war Blatt 2, A2.", "Physik Blatt 2");
mc("phys", P3, "Wie bestimmst du den Winkel zwischen zwei Vektoren a und b?", ["cos θ = (a·b) / (|a|·|b|)", "tan θ = a_y / a_x", "sin θ = |a × b|", "θ = a·b"], "Mit arccos ist der Winkel eindeutig zwischen 0° und 180° (Blatt 2, A3).", "Physik Blatt 2");
mc("phys", P3, "Wie findest du einen Vektor, der in der Ebene senkrecht auf a = (a_x, a_y) steht?", ["Komponenten tauschen und ein Vorzeichen ändern: (a_y, −a_x)", "Beide Komponenten negieren", "a mit 2 multiplizieren", "Den Einheitsvektor von a nehmen"], "Probe: a_x·a_y + a_y·(−a_x) = 0 → senkrecht (Blatt 2, A3).", "Physik Blatt 2");
wf("phys", P3, "Für den Winkel eines Vektors zur y-Achse eignet sich arccos(v_y / |v|).", true, "Richtig – wie bei θ zur z-Achse. arctan nimmt man für den Richtungswinkel in der xy-Ebene.", "Physik Blatt 2, A2c");

/* Angewandte Statistik – Übung 1 */
wf("stat", S2, "In Übung 1 ergaben A·B und B·A dieselbe Matrix.", false, "Falsch – AB und BA waren verschieden. Die Matrixmultiplikation ist nicht kommutativ.", "Angewandte Statistik Übung 1");
mc("stat", S2, "In Übung 1 hatte A′A die Determinante 0. Was folgt daraus?", ["A′A ist singulär und hat keine Inverse", "A′A ist die Einheitsmatrix", "A′A hat vollen Rang", "Man hat sich verrechnet"], "det = 0 ⇔ Zeilen linear abhängig ⇔ keine Inverse.", "Angewandte Statistik Übung 1");
mc("stat", S2, "Welchen Rang hat a·a′ für einen Vektor a ≠ 0?", ["1", "0", "So viele wie a Elemente hat", "2"], "Alle Zeilen sind Vielfache von a′ – nur eine ist unabhängig (Übung 1).", "Angewandte Statistik Übung 1");
mc("stat", S2, "Was macht eine Drehmatrix mit einem Vektor?", ["Sie dreht ihn, seine Länge bleibt gleich", "Sie verlängert ihn", "Sie spiegelt ihn immer", "Sie macht ihn zum Nullvektor"], "Drehmatrizen sind orthogonal: R′R = I. In Übung 1 wurde um 45° gedreht.", "Angewandte Statistik Übung 1");
ord("stat", S3, "LGS mit der Cramerschen Regel lösen: Reihenfolge?", ["det A berechnen und prüfen, dass sie ≠ 0 ist", "Spalte i von A durch b ersetzen → A_i", "det A_i berechnen", "x_i = det A_i / det A"], "Für 3×3 ist Sarrus der schnellste Weg zu den Determinanten. (Ergänzung: Die Cramersche Regel ist Standard der linearen Algebra.)", "Angewandte Statistik Kap. 2 (Ergänzung)");

/* DAP – Exercise 1 Introduction to R */
mc("dap", D3, "Was ist R laut Exercise 1?", ["Statistikumgebung und Programmiersprache, Open Source", "Ein Tabellenprogramm wie Excel", "Eine kostenpflichtige Statistik-Software", "Eine Datenbank"], "Erweiterbar über Packages (library), Grunddatentyp ist der Vektor.", "DAP Exercise 1");
pair("dap", D3, "Welcher R-Datentyp ist das?", [["TRUE", "logical"], ["1L", "integer"], ["1.5", "numeric"], ["'Aachen'", "character"]], "Meist wählt R den passenden Typ automatisch.", "DAP Exercise 1");
pair("dap", D3, "Bereiche in RStudio – ordne zu.", [["Source / Script", "hier schreibst du Code (.R)"], ["Console", "Ausgabe und schnelles Testen"], ["Environment", "angelegte Variablen"], ["Files / Plots / Help", "Dateien, Grafiken, Hilfe"]], "Code gehört ins Skript, damit er reproduzierbar bleibt.", "DAP Exercise 1");
wf("dap", D3, "Laut Exercise 1 soll man R-Aufgaben am besten komplett von einer KI lösen lassen.", false, "Falsch – einfache Aufgaben kann KI lösen, aber Ziel ist, R zu lernen und den Code zu verstehen.", "DAP Exercise 1");
mc("dap", D3, "Was ergibt seq(0, 10, by = 2.5)?", ["0.0 2.5 5.0 7.5 10.0", "0 10 2.5", "2.5 5.0 7.5 10.0", "0 2 4 6 8 10"], "seq erzeugt eine Folge von from bis to im Abstand by.", "DAP Exercise 1");
mc("dap", D3, "Wie ignorierst du fehlende Werte beim Mittelwert in R?", ["mean(x, na.rm = TRUE)", "mean(x, na = FALSE)", "mean(!is.na)", "mean(x) ohne Zusatz"], "Ohne na.rm = TRUE liefert mean() bei fehlenden Werten NA.", "DAP Exercise 1");

/* Baustoffkunde – Naturwissenschaftliche Grundlagen 01 */
const B4 = "Chemische Grundlagen";
pair("bsk", B4, "Ordne das Teilchen zu.", [["Proton", "positiv, im Kern"], ["Neutron", "neutral, im Kern"], ["Elektron", "negativ, in der Hülle"]], "Die Zahl der Protonen bestimmt die Ordnungszahl im Periodensystem.", "Baustoffkunde NaWi 01");
mc("bsk", B4, "Was sind Isotope?", ["Atome mit gleicher Protonenzahl, aber unterschiedlicher Neutronenzahl", "Atome mit unterschiedlicher Protonenzahl", "Geladene Atome", "Moleküle aus zwei Elementen"], "Beispiel: ¹²C und ¹³C. Chemisch verhalten sie sich fast gleich.", "Baustoffkunde NaWi 01");
pair("bsk", B4, "Ordne die Ionen zu.", [["Kation", "positiv, Elektronenmangel (meist Metall)"], ["Anion", "negativ, Elektronenüberschuss (meist Nichtmetall)"]], "Bei NaCl gibt Natrium ein Elektron an Chlor ab.", "Baustoffkunde NaWi 01");
mc("bsk", B4, "Welche Elektronenkonfiguration streben Atome bei der Ionenbildung an?", ["Die eines Edelgases (8 Valenzelektronen)", "Möglichst viele Elektronen", "Gar keine Valenzelektronen", "Immer 2 Elektronen"], "Metalle erreichen sie durch Abgabe, Nichtmetalle durch Aufnahme von Elektronen.", "Baustoffkunde NaWi 01");
pair("bsk", B4, "Primäre Bindungen – ordne zu.", [["Ionenbindung", "elektrostatische Anziehung von Kationen und Anionen"], ["Metallbindung", "delokalisierte Elektronen (Elektronengas)"], ["Kovalente Bindung", "gemeinsames bindendes Elektronenpaar"]], "Dazu kommen schwächere sekundäre Bindungen wie Wasserstoffbrücken und Van-der-Waals-Kräfte.", "Baustoffkunde NaWi 01");
mc("bsk", B4, "Ab welcher Elektronegativitätsdifferenz spricht man von Ionenbindung?", ["Über 1,7", "Über 0,5", "Über 4,0", "Genau 0"], "Stoffe mit Ionenbindung bilden Kristalle und lösen sich oft in Wasser.", "Baustoffkunde NaWi 01");
mc("bsk", B4, "Warum leiten Metalle elektrischen Strom gut?", ["Die Valenzelektronen sind frei beweglich (Elektronengas)", "Sie haben viele Neutronen", "Wegen der Ionenbindung", "Weil sie Kristalle bilden"], "Beim Anlegen einer Spannung wandern die delokalisierten Elektronen.", "Baustoffkunde NaWi 01");
mc("bsk", B4, "Welche Bindung ist die schwächste?", ["Van-der-Waals-Bindung", "Ionenbindung", "Kovalente Bindung", "Metallbindung"], "Sehr kleine Dipolmomente, äußerst geringe Reichweite – sie nimmt mit steigender Temperatur ab.", "Baustoffkunde NaWi 01");
mc("bsk", B4, "Wofür brauchst du Atomaufbau und Ionen in der Baustoffkunde?", ["Z. B. für Korrosion von Bewehrungsstahl (Redoxreaktionen)", "Nur für die Prüfung, sonst nicht", "Für Lastannahmen", "Für die Bemessung von Holz"], "Bindungen bestimmen Materialeigenschaften; Redox und Ionen erklären Korrosion.", "Baustoffkunde NaWi 01");
THEMEN["bsk|Chemische Grundlagen"] = "Wie Atome aufgebaut sind und wie sie sich binden, erklärt viele Baustoffeigenschaften: Metallbindung macht Stahl leitfähig und verformbar, Ionenbindung bildet spröde Kristalle, und Redoxreaktionen stecken hinter der Korrosion von Bewehrungsstahl.";

/* Patch-Warteschlange · Lösungsweg-Aufgaben (neu in 1.3) · erstellt 02.11.2026
   aufgabe({...}): schritte[].o = [[Möglichkeit, Erklärung] × 4], die erste ist richtig; r = Zwischenergebnis */
const AUFGABEN = [];
function aufgabe(a) { AUFGABEN.push(a); }
aufgabe({
 "id": "hydro-ue02-a27",
 "f": "hydro",
 "t": "Hydrostatik 2",
 "titel": "Holzwürfel mit Bleikugel",
 "s": "Hydromechanik Übung 02, Aufgabe 2.7",
 "v": "bleikugel",
 "angabe": "Ein Holzwürfel schwimmt im Wasser. Eine Bleikugel wird a) oben auf den Würfel gelegt oder b) ins Wasser geworfen, wo sie auf den Grund sinkt.",
 "geg": [
  "Würfel h = l = b = 1 m",
  "ρ_Holz = 800 kg/m³",
  "V_Kugel = 0,01 m³",
  "ρ_Blei = 11 400 kg/m³",
  "ρ_W = 1000 kg/m³"
 ],
 "ges": "Eintauchtiefe ohne Kugel, verdrängtes Volumen in a) und b), in welchem Fall der Wasserstand niedriger ist",
 "schritte": [
  {
   "f": "Wie tief taucht der Würfel ohne Kugel ein – was setzt du an?",
   "o": [
    [
     "Gleichgewicht: Auftrieb = Gewicht des Würfels",
     "Ein schwimmender Körper ist im Gleichgewicht. Der Auftrieb ist das Gewicht des verdrängten Wassers, also ρ_W · g · l · b · t."
    ],
    [
     "Bernoulli zwischen Oberfläche und Unterseite",
     "Bernoulli beschreibt Strömungen. Hier ruht das Wasser – es geht um ein Kräftegleichgewicht."
    ],
    [
     "Druck an der Unterseite gleich Luftdruck setzen",
     "An der Unterseite herrscht Wasserdruck ρ·g·t. Ohne Kräftebilanz bekommst du keine Tiefe."
    ],
    [
     "Eintauchtiefe = halbe Würfelhöhe annehmen",
     "Halb eingetaucht ist der Würfel nur bei ρ = 500 kg/m³. Die Tiefe hängt vom Dichteverhältnis ab."
    ]
   ],
   "r": "ρ_W · g · (l·b·t) = ρ_Holz · g · V\nt = 800/1000 · 1 m = 0,80 m"
  },
  {
   "f": "Fall a: Die Kugel liegt auf dem Holz. Wie bekommst du das verdrängte Volumen?",
   "o": [
    [
     "Gesamtgewicht von Holz und Kugel durch ρ_W · g teilen",
     "Holz und Kugel schwimmen zusammen. Ein schwimmender Körper verdrängt genau sein Gewicht an Wasser."
    ],
    [
     "Holzvolumen plus Kugelvolumen nehmen",
     "Das gilt nur, wenn beides komplett untertaucht. Ein Schwimmkörper verdrängt sein Gewicht, nicht sein Volumen."
    ],
    [
     "Nur das Holzgewicht betrachten",
     "Die Kugel lastet auf dem Holz und muss mitgetragen werden – ihr Gewicht gehört in die Bilanz."
    ],
    [
     "Kugelvolumen vom Holzvolumen abziehen",
     "Die Kugel macht den Körper schwerer, nicht leichter. Es wird mehr Wasser verdrängt."
    ]
   ],
   "r": "V_a = (800 · 1 + 11 400 · 0,01) / 1000 = 0,914 m³\nDer Würfel taucht 0,914 m ein und schwimmt noch."
  },
  {
   "f": "Fall b: Die Kugel liegt auf dem Grund. Wie viel Wasser verdrängt sie?",
   "o": [
    [
     "Nur ihr eigenes Volumen",
     "Sie ist untergegangen. Ein untergetauchter Körper verdrängt sein Volumen – den Rest seines Gewichts trägt der Boden."
    ],
    [
     "Ihr Gewicht durch ρ_W · g, wie beim Schwimmen",
     "Das gilt nur für schwimmende Körper. Die Kugel wird vom Boden getragen."
    ],
    [
     "Gar nichts, sie liegt ja am Boden",
     "Sie ist trotzdem von Wasser umgeben und nimmt Platz ein – sie verdrängt ihr Volumen."
    ],
    [
     "Das 11,4-Fache ihres Volumens wegen der Dichte",
     "So viel verdrängt sie nur, solange sie auf dem Holz schwimmt (Fall a)."
    ]
   ],
   "r": "V_Kugel = 0,01 m³"
  },
  {
   "f": "Wie viel Wasser verdrängen Holz und Kugel in Fall b zusammen?",
   "o": [
    [
     "Schwimmender Würfel allein plus Kugelvolumen",
     "Der Würfel schwimmt wieder ohne Last (0,80 m³), dazu kommt das Volumen der Kugel."
    ],
    [
     "Wie in Fall a – das Gesamtgewicht ist ja gleich",
     "Die Falle: Der Boden trägt jetzt einen Teil des Kugelgewichts. Der Auftrieb ist nicht mehr gleich dem Gesamtgewicht."
    ],
    [
     "Ganzes Würfelvolumen 1 m³ plus Kugel",
     "Der Würfel taucht nicht ganz ein, er schwimmt mit t = 0,80 m."
    ],
    [
     "Nur der Würfel zählt",
     "Die Kugel verdrängt auch am Grund ihr eigenes Volumen."
    ]
   ],
   "r": "V_b = 0,80 + 0,01 = 0,81 m³"
  },
  {
   "f": "In welchem Fall steht das Wasser niedriger?",
   "o": [
    [
     "In Fall b – dort wird weniger verdrängt",
     "0,81 m³ < 0,914 m³. Weniger Verdrängung heißt niedrigerer Spiegel – wie beim Stein, der aus dem Boot in den See fällt."
    ],
    [
     "In Fall a",
     "In Fall a wird mehr verdrängt (0,914 m³), der Spiegel steht also höher."
    ],
    [
     "Gleich hoch, das Gewicht ist gleich",
     "Gleiches Gewicht heißt nur dann gleiche Verdrängung, wenn alles schwimmt."
    ],
    [
     "Ohne Behältergröße nicht zu sagen",
     "Der Behälter bestimmt nur, um wie viel sich der Spiegel ändert. Die Richtung folgt aus dem Volumenvergleich."
    ]
   ],
   "r": "0,81 m³ < 0,914 m³ → in b steht das Wasser niedriger"
  }
 ],
 "fazit": "Schwimmende Körper verdrängen ihr Gewicht, untergegangene nur ihr Volumen. Darum sinkt der Wasserspiegel, wenn schwere Last vom Schwimmkörper ins Wasser fällt."
});
aufgabe({
 "id": "hydro-ue02-a28",
 "f": "hydro",
 "t": "Hydrostatik 2",
 "titel": "Messing-Werkstück wiegen",
 "s": "Hydromechanik Übung 02, Aufgabe 2.8",
 "v": "messing",
 "angabe": "Ein Werkstück aus Messing (Kupfer und Zink) wird in Luft und in Wasser gewogen.",
 "geg": [
  "F_G = 32,079 N (Luft)",
  "F′_G = 28,156 N (Wasser)",
  "ρ_Cu = 8930 kg/m³",
  "ρ_Zn = 7100 kg/m³",
  "ρ_W = 1000 kg/m³"
 ],
 "ges": "Massen von Kupfer und Zink, Dichte des Messings",
 "schritte": [
  {
   "f": "Was sagt dir der Unterschied der beiden Wägungen?",
   "o": [
    [
     "Er ist die Auftriebskraft: F_A = F_G − F′_G",
     "Im Wasser drückt der Auftrieb das Werkstück nach oben, die Waage zeigt genau um F_A weniger an."
    ],
    [
     "Er ist das Gewicht des Zinks",
     "Die Differenz hat mit der Zusammensetzung nichts zu tun – sie kommt vom Wasser."
    ],
    [
     "Er ist der Wasserdruck auf die Oberseite",
     "Druck auf die Oberseite drückt nach unten. Die Differenz ist die Resultierende aller Drücke, der Auftrieb."
    ],
    [
     "Er ist ein Messfehler",
     "Die Differenz ist physikalisch: Auftrieb nach Archimedes."
    ]
   ],
   "r": "F_A = 32,079 − 28,156 = 3,923 N"
  },
  {
   "f": "Wie kommst du vom Auftrieb zum Volumen?",
   "o": [
    [
     "V = F_A / (ρ_W · g)",
     "Archimedes: Der Auftrieb ist das Gewicht des verdrängten Wassers. Das Werkstück ist ganz untergetaucht, also ist V sein Volumen."
    ],
    [
     "V = F_G / (ρ_W · g)",
     "Das wäre das Volumen von Wasser mit dem Gewicht des Werkstücks – nicht das Volumen des Werkstücks."
    ],
    [
     "V = F_A / (ρ_Cu · g)",
     "Verdrängt wird Wasser, also gehört ρ_W in den Nenner."
    ],
    [
     "V = m / ρ_Zn",
     "Messing ist kein reines Zink – die Dichte ist gerade unbekannt."
    ]
   ],
   "r": "V = 3,923 / (1000 · 9,81) = 0,400 · 10⁻³ m³ = 0,400 l"
  },
  {
   "f": "Was brauchst du außerdem?",
   "o": [
    [
     "Die Masse m = F_G / g",
     "Aus dem Gewicht in Luft folgt die echte Masse – die Grundlage für die Aufteilung."
    ],
    [
     "Die Masse aus der Wägung im Wasser F′_G / g",
     "Das ist nur eine scheinbare Masse. Die Stoffmenge ändert sich im Wasser nicht."
    ],
    [
     "Die Dichte von Messing aus einer Tabelle",
     "Die Dichte ist gesucht – und hängt vom Mischungsverhältnis ab."
    ],
    [
     "Nichts, das Volumen reicht",
     "Mit dem Volumen allein kannst du zwei unbekannte Massen nicht bestimmen."
    ]
   ],
   "r": "m = 32,079 / 9,81 = 3,270 kg"
  },
  {
   "f": "Wie bestimmst du m_Cu und m_Zn?",
   "o": [
    [
     "Zwei Gleichungen: Massen addieren sich, Volumina addieren sich",
     "m_Cu + m_Zn = m und m_Cu/ρ_Cu + m_Zn/ρ_Zn = V – zwei Gleichungen für zwei Unbekannte."
    ],
    [
     "Die Masse im Verhältnis der Dichten aufteilen",
     "Das Verhältnis der Dichten sagt nichts über das Mischungsverhältnis."
    ],
    [
     "Halb Kupfer, halb Zink annehmen",
     "Das Verhältnis ist gerade gesucht."
    ],
    [
     "Den Mittelwert der Dichten nehmen",
     "Damit unterstellst du schon ein Mischungsverhältnis, statt es zu berechnen."
    ]
   ],
   "r": "m_Cu + m_Zn = 3,270 kg\nm_Cu/8930 + m_Zn/7100 = 0,400 · 10⁻³ m³"
  },
  {
   "f": "Wie löst du das System am schnellsten?",
   "o": [
    [
     "Eine Gleichung nach m_Zn umstellen und in die andere einsetzen",
     "Einsetzverfahren: m_Zn = 3,270 − m_Cu in die Volumengleichung, dann nach m_Cu auflösen."
    ],
    [
     "Beide Gleichungen addieren",
     "Die Gleichungen haben verschiedene Einheiten (kg und m³) – Addieren ergibt keinen Sinn."
    ],
    [
     "Ausprobieren und Probe machen",
     "Geht, kostet aber in der Klausur viel Zeit."
    ],
    [
     "Gar nicht, es ist nicht lösbar",
     "Zwei unabhängige Gleichungen für zwei Unbekannte sind eindeutig lösbar."
    ]
   ],
   "r": "m_Cu ≈ 2,10 kg · m_Zn ≈ 1,17 kg"
  },
  {
   "f": "Und die Dichte des Messings?",
   "o": [
    [
     "ρ = m / V",
     "Masse durch Volumen – beides hast du schon. Der Wert muss zwischen den Dichten von Zink und Kupfer liegen."
    ],
    [
     "Mittelwert (8930 + 7100)/2",
     "Das ungewichtete Mittel stimmt nur bei gleichen Volumenanteilen."
    ],
    [
     "ρ = F_A / V",
     "Das ergibt ρ_W · g – die Wichte des Wassers, nicht die Dichte des Messings."
    ],
    [
     "ρ = ρ_Cu − ρ_Zn",
     "Die Differenz der Dichten hat keine Bedeutung für die Mischung."
    ]
   ],
   "r": "ρ = 3,270 / 0,400 · 10⁻³ ≈ 8180 kg/m³ (liegt zwischen 7100 und 8930 ✓)"
  }
 ],
 "fazit": "Wägung in Luft und Wasser ist eine Volumenmessung: Die Differenz ist der Auftrieb ρ_W · g · V. So bestimmt man Dichten auch von unregelmäßigen Körpern."
});
aufgabe({
 "id": "hydro-ue03-a35",
 "f": "hydro",
 "t": "Energiesatz",
 "titel": "Druck in der Rohrerweiterung",
 "s": "Hydromechanik Übung 03, Aufgabe 3.5",
 "v": "rohr",
 "angabe": "Ein Rohr erweitert sich von Querschnitt 1 auf Querschnitt 2. Reibungsverluste werden vernachlässigt.",
 "geg": [
  "A₁ = 1 m²",
  "A₂ = 2 m²",
  "Q = 10 m³/s",
  "p₁ = 98 100 N/m²",
  "ρ_W = 1000 kg/m³",
  "g = 9,81 m/s²"
 ],
 "ges": "Druck p₂ im Querschnitt 2, Verlauf von Energie- und Drucklinie",
 "schritte": [
  {
   "f": "Womit beginnst du?",
   "o": [
    [
     "Geschwindigkeiten aus der Kontinuität v = Q/A",
     "Bernoulli braucht v₁ und v₂. Beide folgen direkt aus Q = v · A."
    ],
    [
     "Bernoulli sofort nach p₂ auflösen",
     "Dafür fehlen dir noch v₁ und v₂."
    ],
    [
     "Impulssatz am Kontrollvolumen",
     "Der Impulssatz liefert Kräfte. Gesucht ist ein Druck."
    ],
    [
     "p₂ = p₁ · A₁/A₂",
     "Druck ist keine Kraft – er verteilt sich nicht einfach auf die größere Fläche."
    ]
   ],
   "r": "v₁ = 10/1 = 10 m/s · v₂ = 10/2 = 5 m/s"
  },
  {
   "f": "Welchen Bezugshorizont wählst du?",
   "o": [
    [
     "Die Rohrachse – dann ist z₁ = z₂ = 0",
     "Die Achse ist horizontal, die Lagehöhen fallen weg. Das spart Arbeit."
    ],
    [
     "Den Wasserspiegel",
     "Ein Druckrohr hat keinen freien Wasserspiegel."
    ],
    [
     "Für jeden Querschnitt einen eigenen Horizont",
     "Bernoulli vergleicht Energiehöhen – beide müssen sich auf denselben Bezugshorizont beziehen."
    ],
    [
     "Keinen, den braucht man nicht",
     "Ohne Bezugshorizont sind die Lagehöhen nicht definiert."
    ]
   ],
   "r": "z₁ = z₂ = 0"
  },
  {
   "f": "Was setzt du zwischen 1 und 2 gleich?",
   "o": [
    [
     "Die Energiehöhen: p/(ρg) + v²/(2g) in 1 und 2",
     "Ohne Verluste ist die Energiehöhe in beiden Querschnitten gleich (Bernoulli)."
    ],
    [
     "Die Drücke: p₁ = p₂",
     "Der Druck ändert sich, sobald sich die Geschwindigkeit ändert."
    ],
    [
     "Die Impulsströme ρ · Q · v",
     "Die Impulsströme sind verschieden – die Differenz wäre eine Kraft auf das Rohr."
    ],
    [
     "Die Geschwindigkeitshöhen",
     "Die sind verschieden, weil v₁ ≠ v₂."
    ]
   ],
   "r": "p₁/(ρg) + v₁²/(2g) = p₂/(ρg) + v₂²/(2g)"
  },
  {
   "f": "Wie rechnest du am bequemsten weiter?",
   "o": [
    [
     "Alles in Höhen [m] umrechnen",
     "Druckhöhe p/(ρg) und Geschwindigkeitshöhe v²/(2g) lassen sich direkt addieren – handliche Zahlen in Metern."
    ],
    [
     "Alles in bar umrechnen",
     "Geschwindigkeiten lassen sich nicht sinnvoll in bar ausdrücken."
    ],
    [
     "Geschwindigkeiten einfach addieren",
     "Bernoulli enthält v², nicht v."
    ],
    [
     "Erst die Kraft auf die Erweiterung berechnen",
     "Die Kraft ist nicht gefragt und hilft für p₂ nicht."
    ]
   ],
   "r": "p₁/(ρg) = 98 100/9810 = 10,00 m\nv₁²/(2g) = 5,10 m · v₂²/(2g) = 1,27 m"
  },
  {
   "f": "Nach p₂ auflösen – was kommt heraus?",
   "o": [
    [
     "p₂ ist größer als p₁",
     "In der Erweiterung wird das Wasser langsamer. Geschwindigkeitshöhe wird zu Druckhöhe."
    ],
    [
     "p₂ ist kleiner als p₁",
     "Kleiner wäre der Druck in einer Verengung, wo das Wasser schneller wird."
    ],
    [
     "p₂ = p₁",
     "Das gälte nur bei gleicher Geschwindigkeit."
    ],
    [
     "p₂ ist negativ",
     "Die Druckhöhe steigt hier, sie wird nicht negativ."
    ]
   ],
   "r": "p₂/(ρg) = 10,00 + 5,10 − 1,27 = 13,82 m\np₂ = 13,82 · 9810 ≈ 135,6 kN/m²"
  },
  {
   "f": "Wie verlaufen Energie- und Drucklinie?",
   "o": [
    [
     "Energielinie waagerecht, Drucklinie steigt in der Erweiterung",
     "Ohne Verluste bleibt die Energiehöhe konstant. Der Abstand zur Drucklinie ist v²/(2g) und schrumpft von 5,10 m auf 1,27 m."
    ],
    [
     "Beide fallen in Fließrichtung",
     "Ein Gefälle der Energielinie gäbe es nur mit Reibungsverlusten."
    ],
    [
     "Drucklinie waagerecht, Energielinie steigt",
     "Ohne Pumpe kann die Energielinie nicht steigen."
    ],
    [
     "Beide liegen übereinander",
     "Sie fallen nur bei v = 0 zusammen."
    ]
   ],
   "r": "Abstand Energie- zu Drucklinie: 5,10 m → 1,27 m"
  }
 ],
 "fazit": "Erweiterung heißt Verzögerung und damit Druckanstieg. Erst Kontinuität für die Geschwindigkeiten, dann Bernoulli in Höhen – so bleiben die Zahlen handlich."
});
aufgabe({
 "id": "hydro-ue04-a43",
 "f": "hydro",
 "t": "Gerinneströmung",
 "titel": "Grenztiefe im Rechteckgerinne",
 "s": "Hydromechanik Übung 04, Aufgabe 4.3",
 "v": "gerinne",
 "angabe": "Ein Rechteckgerinne führt einen konstanten Abfluss.",
 "geg": [
  "Q = 10 m³/s",
  "b = 5 m",
  "g = 9,81 m/s²"
 ],
 "ges": "Grenztiefe, Grenzgeschwindigkeit, Mindestenergiehöhe und der Fließzustand bei h = 0,40 m und h = 1,50 m",
 "schritte": [
  {
   "f": "Was rechnest du zuerst?",
   "o": [
    [
     "Den Abfluss pro Meter Breite q = Q/b",
     "Im Rechteckgerinne hängen alle Grenzwerte nur von q ab."
    ],
    [
     "Die Froude-Zahl",
     "Für Fr brauchst du eine Wassertiefe – die ist noch unbekannt."
    ],
    [
     "Die Reynolds-Zahl",
     "Re unterscheidet laminar und turbulent, nicht Strömen und Schießen."
    ],
    [
     "Die Energiehöhe für h = 1 m",
     "Ohne Grenztiefe weißt du nicht, wo du auf der Kurve bist."
    ]
   ],
   "r": "q = 10/5 = 2 m³/(s·m)"
  },
  {
   "f": "Welche Formel liefert die Grenztiefe?",
   "o": [
    [
     "h_gr = ∛(q²/g)",
     "Im Grenzzustand ist Fr = 1 und h_E minimal. Für das Rechteck folgt h_gr = ∛(q²/g)."
    ],
    [
     "h_gr = q/g",
     "Die Einheiten passen nicht: q/g ergibt s, keine Länge."
    ],
    [
     "h_gr = √(2g · q)",
     "Das ähnelt Torricelli und gehört zum Ausfluss, nicht zum Gerinne."
    ],
    [
     "h_gr = v²/(2g)",
     "Das ist eine Geschwindigkeitshöhe, keine Wassertiefe."
    ]
   ],
   "r": "h_gr = ∛(2²/9,81) = 0,74 m"
  },
  {
   "f": "Wie bekommst du die Grenzgeschwindigkeit?",
   "o": [
    [
     "v_gr = q/h_gr – zur Probe √(g · h_gr)",
     "Kontinuität pro Meter Breite. Im Grenzzustand ist v gleich der Wellengeschwindigkeit √(g·h)."
    ],
    [
     "v_gr = √(2g · h_gr)",
     "Das ist die Ausflussgeschwindigkeit nach Torricelli, nicht die Grenzgeschwindigkeit."
    ],
    [
     "v_gr = Q/h_gr",
     "Hier fehlt die Breite b im Nenner."
    ],
    [
     "v_gr = g · h_gr",
     "Die Einheit wäre m²/s² – keine Geschwindigkeit."
    ]
   ],
   "r": "v_gr = 2/0,74 = 2,70 m/s · Probe: √(9,81 · 0,74) = 2,70 m/s ✓"
  },
  {
   "f": "Und die Mindestenergiehöhe?",
   "o": [
    [
     "h_E,min = 1,5 · h_gr",
     "Im Grenzzustand ist v²/(2g) = h_gr/2. Zusammen mit der Tiefe ergibt das 1,5 · h_gr."
    ],
    [
     "h_E,min = h_gr",
     "Dabei fehlt die Geschwindigkeitshöhe."
    ],
    [
     "h_E,min = 2 · h_gr",
     "Zu groß: Die Geschwindigkeitshöhe ist nur die halbe Grenztiefe."
    ],
    [
     "h_E,min = h_gr + q",
     "Tiefe und Abfluss haben verschiedene Einheiten."
    ]
   ],
   "r": "h_E,min = 1,5 · 0,74 = 1,11 m\n(0,74 m Tiefe + 0,37 m Geschwindigkeitshöhe)"
  },
  {
   "f": "Bei h = 0,40 m: Welcher Fließzustand liegt vor?",
   "o": [
    [
     "Schießen – h liegt unter der Grenztiefe, Fr > 1",
     "Flach und schnell: Das Wasser ist schneller als eine Oberflächenwelle."
    ],
    [
     "Strömen",
     "Strömen liegt oberhalb der Grenztiefe vor."
    ],
    [
     "Grenzzustand",
     "Der gilt nur bei h = h_gr = 0,74 m."
    ],
    [
     "Ohne Gefälle nicht bestimmbar",
     "Der Fließzustand folgt aus h und v über die Froude-Zahl."
    ]
   ],
   "r": "v = 2/0,40 = 5,0 m/s · Fr = 5,0/√(9,81 · 0,40) = 2,52 > 1\nh_E = 0,40 + 5,0²/(2 · 9,81) = 1,67 m"
  },
  {
   "f": "Und bei h = 1,50 m?",
   "o": [
    [
     "Strömen – h liegt über der Grenztiefe, Fr < 1",
     "Tief und langsam: Wellen können sich auch stromauf ausbreiten."
    ],
    [
     "Schießen",
     "Schießen liegt unterhalb der Grenztiefe vor."
    ],
    [
     "Wechselsprung",
     "Ein Wechselsprung ist der Übergang von Schießen zu Strömen, kein Zustand bei einer Tiefe."
    ],
    [
     "Grenzzustand",
     "1,50 m liegt deutlich über h_gr = 0,74 m."
    ]
   ],
   "r": "v = 1,33 m/s · Fr = 1,33/√(9,81 · 1,50) = 0,35 < 1\nh_E = 1,50 + 0,09 = 1,59 m"
  },
  {
   "f": "Wie sieht die Kurve h_E(h) aus?",
   "o": [
    [
     "Minimum bei h_gr, links steiler Anstieg, rechts Annäherung an h_E = h",
     "Für kleine h wächst v²/(2g) stark (Schießen), für große h wird die Geschwindigkeitshöhe vernachlässigbar (Strömen)."
    ],
    [
     "Gerade durch den Ursprung",
     "Dann gäbe es kein Minimum und keine Grenztiefe."
    ],
    [
     "Maximum bei h_gr",
     "Bei h_gr ist die Energiehöhe minimal, nicht maximal."
    ],
    [
     "Parabel mit Scheitel bei h = 0",
     "Bei h → 0 geht h_E gegen unendlich."
    ]
   ]
  }
 ],
 "fazit": "Rechteckgerinne: q = Q/b, h_gr = ∛(q²/g), h_E,min = 1,5 · h_gr. Unter h_gr schießt das Wasser, darüber strömt es."
});
aufgabe({
 "id": "bauko-ue06-balken",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Holzbalken bemessen",
 "s": "Baukonstruktion Übung 06, Beispiel a",
 "v": "traeger",
 "angabe": "Ein Einfeldträger aus Vollholz C24 wird im Grenzzustand der Tragfähigkeit auf Biegung und Querkraft bemessen.",
 "geg": [
  "l = 4 m",
  "g_k = 3,0 kN/m (ständig)",
  "q_k = 1,5 kN/m (KLED kurz)",
  "NKL 2",
  "C24: f_m,k = 24 N/mm²",
  "f_v,k = 4,0 N/mm²",
  "γ_M = 1,3"
 ],
 "ges": "Querschnitt, Biege- und Schubnachweis",
 "schritte": [
  {
   "f": "Womit startest du?",
   "o": [
    [
     "Schnittgrößen je Lastart getrennt berechnen",
     "Erst A, B und max M für g und q getrennt – nur so kannst du die Kombinationen später mit ihrem kmod vergleichen."
    ],
    [
     "Lasten sofort mit 1,35 und 1,5 addieren",
     "Dann fehlt der Vergleich „nur g“ gegen „g + q“, der bei Holz wegen kmod nötig ist."
    ],
    [
     "Einen Querschnitt schätzen und nachweisen",
     "Ohne Schnittgrößen kannst du nichts nachweisen."
    ],
    [
     "Mit der Durchbiegung anfangen",
     "Zuerst kommt die Tragfähigkeit (GZT), danach die Gebrauchstauglichkeit."
    ]
   ],
   "r": "A_g = 3 · 4/2 = 6 kN · M_g = 3 · 4²/8 = 6 kNm\nA_q = 3 kN · M_q = 1,5 · 4²/8 = 3 kNm"
  },
  {
   "f": "Welche kmod-Werte gelten?",
   "o": [
    [
     "g ständig → 0,6 · q kurz → 0,9",
     "kmod hängt von NKL und KLED ab. Für Vollholz in NKL 2: ständig 0,6, kurz 0,9."
    ],
    [
     "Beide 0,8 (mittel)",
     "„Mittel“ gilt für Nutzlasten von Decken, nicht für diese Lasten."
    ],
    [
     "Immer 1,0",
     "1,0 ergibt sich etwa bei Wind als Mittel aus „kurz“ und „sehr kurz“. Für ständige Lasten wäre es viel zu günstig."
    ],
    [
     "g → 0,9 · q → 0,6",
     "Vertauscht: Lange Einwirkungen bekommen den kleineren Beiwert."
    ]
   ],
   "r": "k_mod,g = 0,6 · k_mod,q = 0,9"
  },
  {
   "f": "Wie findest du die maßgebende Kombination?",
   "o": [
    [
     "Jede Kombination durch ihr kmod teilen, die größte nehmen",
     "E_d/kmod macht die Kombinationen vergleichbar. Maßgebend ist der größte Wert."
    ],
    [
     "Die Kombination mit der größten Last nehmen",
     "Nicht immer richtig: Die kleinere Kombination aus nur ständigen Lasten kann wegen kmod = 0,6 maßgebend werden."
    ],
    [
     "Immer nur g nehmen",
     "Dann fehlt die Nutzlast ganz."
    ],
    [
     "Die kmod-Werte mitteln",
     "Bei mehreren Lastarten zählt das kmod der kürzesten Einwirkung der Kombination."
    ]
   ],
   "r": "nur g: 1,35 · 6 = 8,1 kNm → /0,6 = 13,5\ng + q: 1,35 · 6 + 1,5 · 3 = 12,6 kNm → /0,9 = 14,0 ✓\nM_Ed = 12,6 kNm · V_Ed = 12,6 kN · k_mod = 0,9"
  },
  {
   "f": "Wie wählst du den Querschnitt?",
   "o": [
    [
     "erf W aus M_Ed/(k_h · f_m,d), dann aus der Tabelle wählen",
     "Mit k_h = 1,0 angenommen ergibt sich das nötige Widerstandsmoment. Gewählt wird der nächstgrößere Tabellenquerschnitt."
    ],
    [
     "Höhe als l/20 schätzen",
     "Eine Faustregel ersetzt keinen Nachweis."
    ],
    [
     "Fläche A ≥ M/f",
     "Für Biegung zählt das Widerstandsmoment W, nicht die Fläche."
    ],
    [
     "Trägheitsmoment aus der Durchbiegung",
     "Das ist der GZG-Nachweis, erst danach."
    ]
   ],
   "r": "f_m,d = 0,9 · 24/1,3 = 16,6 N/mm²\nerf W = 12,6 · 10⁶/16,6 = 758 cm³ → gewählt 8/24 mit W = 768 cm³"
  },
  {
   "f": "Darf k_h = 1,0 bleiben?",
   "o": [
    [
     "Ja – h = 240 mm > 150 mm, es gibt keinen Höhenbonus",
     "k_h > 1 gibt es nur für niedrige Vollholzquerschnitte unter 150 mm."
    ],
    [
     "Nein, k_h = 1,3 ansetzen",
     "1,3 ist der Höchstwert für sehr niedrige Querschnitte – nicht für 24 cm."
    ],
    [
     "k_h ist gleich kmod",
     "Zwei verschiedene Beiwerte: k_h für die Höhe, kmod für Dauer und Feuchte."
    ],
    [
     "k_h gibt es nur bei Stahl",
     "k_h ist ein Holzbeiwert."
    ]
   ],
   "r": "k_h = 1,0 (Annahme bestätigt)"
  },
  {
   "f": "Biegenachweis: Was prüfst du?",
   "o": [
    [
     "η = σ_m,d / (k_h · f_m,d) ≤ 1",
     "Bemessungsspannung gegen Bemessungsfestigkeit – beide mit Teilsicherheiten."
    ],
    [
     "σ_m,d ≤ f_m,k",
     "f_m,k ist der charakteristische Wert ohne kmod und γ_M – das wäre unsicher."
    ],
    [
     "M_Ed ≤ W",
     "Moment und Widerstandsmoment haben verschiedene Einheiten."
    ],
    [
     "η ≥ 1",
     "Eine Ausnutzung über 1 heißt: Nachweis nicht erfüllt."
    ]
   ],
   "r": "σ_m,d = 12,6 · 10⁶/768 · 10³ = 16,4 N/mm²\nη = 16,4/16,6 = 0,99 ≤ 1 ✓"
  },
  {
   "f": "Schubnachweis: Worauf musst du bei Vollholz achten?",
   "o": [
    [
     "Rissbeiwert k_cr = 2,0/f_v,k = 0,5 – nur die halbe Breite wirkt",
     "Schwindrisse mindern die wirksame Fläche. Dazu kommt beim Rechteck der Faktor 1,5 für die maximale Schubspannung."
    ],
    [
     "τ = V/A ohne weitere Faktoren",
     "Beim Rechteck ist τ_max = 1,5 · V/A, und bei Vollholz zählt nur k_cr · b."
    ],
    [
     "Schub muss man bei Holz nicht nachweisen",
     "Der Schubnachweis gehört bei Balken immer dazu."
    ],
    [
     "k_cr = 1,3 wie γ_M",
     "k_cr und γ_M sind verschiedene Werte."
    ]
   ],
   "r": "τ_d = 1,5 · 12 600/(0,5 · 19 200) = 1,97 N/mm²\nf_v,d = 0,9 · 4,0/1,3 = 2,77 N/mm² → η = 0,71 ✓"
  }
 ],
 "fazit": "Holzbalken-Schema: Schnittgrößen je Lastart → Kombinationen durch kmod teilen → maßgebend wählen → erf W → Querschnitt → Biegung und Schub nachweisen."
});
aufgabe({
 "id": "bauko-ue06-querdruck",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Querdruck an der Pfette",
 "s": "Baukonstruktion Übung 06, Beispiel Hausarbeit",
 "v": "pfettendach",
 "angabe": "Eine Stütze aus Vollholz drückt auf eine Pfette. Nachzuweisen ist die Pressung quer zur Faser im Lasteinleitungspunkt.",
 "geg": [
  "F_c,90,d = 53,41 kN",
  "Stütze 14/14, NH C24",
  "f_c,90,k = 2,5 N/mm²",
  "k_mod = 1,0",
  "γ_M = 1,3",
  "l₁ = 3,27 m"
 ],
 "ges": "Querdrucknachweis",
 "schritte": [
  {
   "f": "Wo entsteht der Querdruck?",
   "o": [
    [
     "In der Pfette – die Stütze drückt quer zu deren Faser",
     "Die Pfettenfasern laufen waagerecht, die Last kommt von oben: Druck rechtwinklig zur Faser."
    ],
    [
     "In der Stütze längs der Faser",
     "Das ist Druck parallel zur Faser – dafür gibt es den Knicknachweis."
    ],
    [
     "Im Fundament",
     "Hier geht es um den Holz-Holz-Kontakt an der Pfette."
    ],
    [
     "Gar nicht, Holz trägt Druck immer längs",
     "Die Pfette liegt quer – sie wird zwangsläufig quer zur Faser gedrückt."
    ]
   ],
   "r": "F_c,90,d = 53,41 kN"
  },
  {
   "f": "Welche Festigkeit nimmst du?",
   "o": [
    [
     "f_c,90,d = k_mod · f_c,90,k / γ_M",
     "Quer zur Faser ist Holz rund zehnmal weicher als längs – deshalb der eigene Kennwert f_c,90."
    ],
    [
     "f_c,0,d",
     "Das ist die Druckfestigkeit längs der Faser – viel zu günstig."
    ],
    [
     "f_m,d",
     "Die Biegefestigkeit gehört zum Biegenachweis."
    ],
    [
     "f_c,90,k ohne Beiwerte",
     "Ohne kmod und γ_M fehlt das Sicherheitskonzept."
    ]
   ],
   "r": "f_c,90,d = 1,0 · 2,5/1,3 = 1,92 N/mm²"
  },
  {
   "f": "Welche Fläche setzt du an?",
   "o": [
    [
     "Kontaktlänge plus je bis zu 30 mm Überstand in Faserrichtung",
     "Die Pressung verteilt sich etwas über die Kontaktfläche hinaus: A_ef = b · (l_A + ü₁ + ü₂)."
    ],
    [
     "Nur die Kontaktfläche 14 × 14 cm",
     "Auf der sicheren Seite, aber zu ungünstig – die Norm erlaubt die Überstände."
    ],
    [
     "Die ganze Pfettenlänge",
     "Die Last verteilt sich nicht über die ganze Länge."
    ],
    [
     "Den Querschnitt der Pfette",
     "Der Querschnitt steht senkrecht zur Faser – gedrückt wird aber die Oberseite."
    ]
   ],
   "r": "ü = min(30 mm; l_A; l₁/2) = 30 mm\nA_ef = 14 · (14 + 2 · 3) = 280 cm²"
  },
  {
   "f": "Darfst du k_c,90 größer als 1 ansetzen?",
   "o": [
    [
     "Ja: k_c,90 = 1,5, weil l₁ > 2h ist",
     "Liegt die nächste Last weit genug entfernt, darf die Teilflächenpressung erhöht werden."
    ],
    [
     "Nein, k_c,90 ist immer 1,0",
     "Bei ausreichendem Abstand darf der Wert erhöht werden."
    ],
    [
     "k_c,90 = k_mod",
     "Zwei verschiedene Beiwerte: kmod für Dauer und Feuchte, k_c,90 für die Teilflächenpressung."
    ],
    [
     "k_c,90 = 2,0 für Vollholz",
     "Für diesen Fall gilt laut Übung 1,5."
    ]
   ],
   "r": "k_c,90 = 1,5"
  },
  {
   "f": "Wie führst du den Nachweis?",
   "o": [
    [
     "σ_c,90,d / (k_c,90 · f_c,90,d) ≤ 1",
     "Spannung aus Kraft und wirksamer Fläche, verglichen mit der erhöhten Bemessungsfestigkeit."
    ],
    [
     "σ_c,90,d / f_c,90,d ≤ 1 ohne k_c,90",
     "Geht, verschenkt aber Tragfähigkeit."
    ],
    [
     "F ≤ f_c,90,d · Kontaktfläche",
     "Damit fehlen die Überstände und k_c,90."
    ],
    [
     "η = f/σ ≤ 1",
     "Verkehrt herum: Die Ausnutzung ist Einwirkung durch Widerstand."
    ]
   ],
   "r": "σ_c,90,d = 53,41/280 = 0,191 kN/cm² = 1,91 N/mm²\nη = 1,91/(1,5 · 1,92) = 0,66 ≤ 1 ✓"
  }
 ],
 "fazit": "Querdruck ist die schwächste Druckrichtung im Holz: f_c,90 statt f_c,0, wirksame Fläche mit bis zu 30 mm Überstand je Seite und der Beiwert k_c,90."
});
aufgabe({
 "id": "bsk-ue01-stuetze",
 "f": "bsk",
 "t": "Mechanische Eigenschaften",
 "titel": "Stütze für 44 Tonnen",
 "s": "Baustoffkunde Übung 01 Spannung und Dehnung",
 "v": "stuetze",
 "angabe": "Eine 3 m hohe Stütze soll eine Masse von 44 t tragen. Zur Wahl stehen ein runder und ein quadratischer Querschnitt sowie zwei Werkstoffe aus Laborversuchen.",
 "geg": [
  "m = 44 t",
  "rund d = 150 mm",
  "quadratisch a = 150 mm",
  "Beton f ≈ 50 N/mm²",
  "Ziegel f ≈ 20 N/mm²",
  "l = 3 m",
  "α_T = 1,2 · 10⁻⁵ 1/K",
  "20 °C → 60 °C"
 ],
 "ges": "Druckspannungen, geeigneter Werkstoff, Stauchung mit und ohne Erwärmung",
 "schritte": [
  {
   "f": "Womit beginnst du?",
   "o": [
    [
     "Die Masse in eine Kraft umrechnen: F = m · g",
     "Spannungen rechnet man mit Kräften in Newton, nicht mit Massen."
    ],
    [
     "Spannung = Masse/Fläche",
     "Masse ist keine Kraft. Erst mit g wird daraus eine Gewichtskraft."
    ],
    [
     "Mit der Dehnung anfangen",
     "Die Dehnung folgt erst aus der Spannung."
    ],
    [
     "Den E-Modul nachschlagen",
     "Der E-Modul hilft erst bei der Verformung."
    ]
   ],
   "r": "F = 44 000 kg · 9,81 m/s² = 431,6 kN (Faustregel: 1 t ≈ 10 kN)"
  },
  {
   "f": "Wie bekommst du die Druckspannungen?",
   "o": [
    [
     "σ = F/A mit der jeweiligen Querschnittsfläche",
     "Gleiche Kraft, andere Fläche, andere Spannung."
    ],
    [
     "σ = F · A",
     "Die Spannung sinkt mit wachsender Fläche – also teilen."
    ],
    [
     "σ = F/Umfang",
     "Die Last verteilt sich auf die Fläche, nicht auf den Rand."
    ],
    [
     "σ = F/l",
     "Die Länge spielt für die Spannung keine Rolle."
    ]
   ],
   "r": "rund: A = π · 150²/4 = 17 671 mm² → σ = 24,4 N/mm²\nquadratisch: A = 22 500 mm² → σ = 19,2 N/mm²"
  },
  {
   "f": "Welche Kombination ist geeignet?",
   "o": [
    [
     "Beton mit rundem Querschnitt: Ausnutzung rund 49 %",
     "24,4 von 50 N/mm² – deutliche Reserve für Streuung und Imperfektionen."
    ],
    [
     "Ziegel mit rundem Querschnitt",
     "24,4 N/mm² liegt über der Ziegelfestigkeit von 20 N/mm² – die Stütze versagt."
    ],
    [
     "Ziegel quadratisch, das reicht sicher",
     "19,2 von 20 N/mm² sind 96 %. Ohne Sicherheitsbeiwerte ist das viel zu knapp."
    ],
    [
     "Egal, beide Werkstoffe halten 44 t",
     "Ziegel rund versagt rechnerisch."
    ]
   ],
   "r": "Beton rund: 24,4/50 ≈ 49 %\nZiegel quadratisch: 19,2/20 = 96 % · Ziegel rund: 24,4 > 20 ✗"
  },
  {
   "f": "Wie stark staucht sich die Betonstütze?",
   "o": [
    [
     "ε aus dem σ-ε-Diagramm ablesen, dann Δl = ε · l",
     "Zur Spannung 24,4 N/mm² gehört eine Stauchung von etwa 0,6 ‰."
    ],
    [
     "Δl = σ · l",
     "Da fehlt der Werkstoff: Die Spannung muss erst über das Diagramm oder E in eine Dehnung übersetzt werden."
    ],
    [
     "Δl = F/E",
     "Die Einheiten passen nicht – es fehlen Fläche und Länge."
    ],
    [
     "ε = σ/l",
     "Die Dehnung hängt vom Werkstoff ab, nicht von der Länge."
    ]
   ],
   "r": "σ = 24,4 N/mm² → ε ≈ −0,6 ‰\nΔl = −0,0006 · 3000 mm = −1,8 mm"
  },
  {
   "f": "Im Sommer wird die Stütze 60 °C warm. Wie berücksichtigst du das?",
   "o": [
    [
     "Temperaturdehnung ε_T = α_T · ΔT dazuaddieren",
     "Last und Wärme verformen unabhängig voneinander. Die Dehnungen addieren sich mit Vorzeichen."
    ],
    [
     "Die Spannung um ΔT erhöhen",
     "Eine frei verformbare Stütze dehnt sich, die Spannung bleibt gleich."
    ],
    [
     "Ignorieren, Beton dehnt sich nicht",
     "Beton dehnt sich ähnlich wie Stahl, α_T ≈ 1,2 · 10⁻⁵ 1/K."
    ],
    [
     "Δl mit ΔT multiplizieren",
     "Es fehlt der Wärmeausdehnungskoeffizient – das Ergebnis wäre viel zu groß."
    ]
   ],
   "r": "ε_T = 1,2 · 10⁻⁵ · 40 K = +0,48 ‰\nε_ges = 0,48 − 0,60 = −0,12 ‰ → Δl = −0,36 mm"
  }
 ],
 "fazit": "Erst Kraft, dann Spannung σ = F/A, dann mit der Festigkeit vergleichen. Dehnungen aus Last und Temperatur addieren sich mit Vorzeichen."
});
aufgabe({
 "id": "phys-b3-a1",
 "f": "phys",
 "t": "Bewegung in 2D/3D",
 "titel": "Ball gegen die Wand",
 "s": "Physik Übungsblatt 3, Aufgabe 1",
 "v": "wand",
 "angabe": "Ein Ball wird im Winkel α über der Horizontalen mit v₀ gegen eine Wand im Abstand D geworfen. Die y-Achse zeigt nach oben.",
 "geg": [
  "α",
  "v₀",
  "D",
  "g"
 ],
 "ges": "Auftreffhöhe h, Geschwindigkeitskomponenten an der Wand, ob der Scheitel schon überflogen ist",
 "schritte": [
  {
   "f": "Wie zerlegst du die Bewegung?",
   "o": [
    [
     "x gleichförmig, y gleichmäßig beschleunigt mit −g",
     "Die Schwerkraft wirkt nur vertikal. Horizontal bleibt die Geschwindigkeit konstant."
    ],
    [
     "Beide Richtungen beschleunigt mit g",
     "In x wirkt keine Kraft (ohne Luftwiderstand)."
    ],
    [
     "Als Kreisbewegung",
     "Die Bahn ist eine Parabel, kein Kreis."
    ],
    [
     "x beschleunigt, y gleichförmig",
     "Genau vertauscht."
    ]
   ],
   "r": "x(t) = v₀ cos α · t\ny(t) = v₀ sin α · t − ½ g t²"
  },
  {
   "f": "Was bestimmst du zuerst?",
   "o": [
    [
     "Die Flugzeit bis zur Wand aus x(t) = D",
     "Von der Wand kennst du die x-Koordinate. Daraus folgt direkt die Zeit."
    ],
    [
     "Die Scheitelhöhe",
     "Sie ist nicht gefragt und hilft für die Höhe an der Wand nicht."
    ],
    [
     "Die Flugzeit aus y(t) = 0",
     "Das wäre die Landung auf dem Boden, nicht der Aufprall an der Wand."
    ],
    [
     "Die Wurfweite auf ebenem Boden",
     "Die Wand stoppt den Ball vorher."
    ]
   ],
   "r": "t_W = D / (v₀ cos α)"
  },
  {
   "f": "Wie bekommst du die Auftreffhöhe?",
   "o": [
    [
     "t_W in y(t) einsetzen",
     "Die Höhe zur Zeit des Aufpralls ist die gesuchte Auftreffhöhe."
    ],
    [
     "h = D · tan α",
     "Das wäre eine gerade Linie – ohne Schwerkraft."
    ],
    [
     "h = v₀²/(2g)",
     "Das ist die maximale Steighöhe beim senkrechten Wurf."
    ],
    [
     "h = ½ g t_W²",
     "Das ist nur der Fallanteil, der Wurf nach oben fehlt."
    ]
   ],
   "r": "h = D tan α − g D² / (2 v₀² cos² α)"
  },
  {
   "f": "Wie groß ist die horizontale Geschwindigkeit an der Wand?",
   "o": [
    [
     "Unverändert v₀ cos α",
     "In x wirkt keine Kraft, die Komponente bleibt konstant."
    ],
    [
     "Null",
     "Null wird sie erst durch den Aufprall."
    ],
    [
     "v₀",
     "v₀ ist der Betrag der gesamten Anfangsgeschwindigkeit."
    ],
    [
     "v₀ cos α − g t_W",
     "g wirkt nicht in x-Richtung."
    ]
   ],
   "r": "v_x = v₀ cos α"
  },
  {
   "f": "Und die vertikale Geschwindigkeit?",
   "o": [
    [
     "v_y = v₀ sin α − g · t_W",
     "Die vertikale Komponente nimmt pro Sekunde um g ab."
    ],
    [
     "v_y = v₀ sin α",
     "Das ist nur der Anfangswert."
    ],
    [
     "v_y = −v₀ sin α",
     "So wäre es erst bei der Landung auf Abwurfhöhe."
    ],
    [
     "v_y = g · t_W",
     "Der Anfangswert v₀ sin α fehlt."
    ]
   ],
   "r": "v_y = v₀ sin α − g D / (v₀ cos α)"
  },
  {
   "f": "Woran erkennst du, ob der Scheitel schon überflogen ist?",
   "o": [
    [
     "Am Vorzeichen von v_y",
     "Positiv: Der Ball steigt noch. Negativ: Er fällt schon, der Scheitel liegt hinter ihm."
    ],
    [
     "Am Vorzeichen von h",
     "h kann auch nach dem Scheitel noch positiv sein."
    ],
    [
     "Am Betrag von v_x",
     "v_x ist auf der ganzen Bahn gleich."
    ],
    [
     "Daran, ob h > D ist",
     "Höhe und Abstand zu vergleichen sagt nichts über den Scheitel."
    ]
   ],
   "r": "v_y > 0: steigt noch · v_y < 0: Scheitel überflogen"
  }
 ],
 "fazit": "Schräger Wurf: x und y getrennt ansetzen, die Zeit aus der bekannten Koordinate (hier x = D) bestimmen und einsetzen. Das Vorzeichen von v_y zeigt, ob der Ball steigt oder fällt."
});
aufgabe({
 "id": "phys-b3-a4",
 "f": "phys",
 "t": "Bewegung in 2D/3D",
 "titel": "Flugzeug mit Wind",
 "s": "Physik Übungsblatt 3, Aufgabe 4",
 "v": "flug",
 "angabe": "Ein Flugzeug fliegt mit v_FL relativ zur Luft von A nach B und zurück. Zeiten für Start, Landung und Wende werden vernachlässigt.",
 "geg": [
  "v_FL",
  "D",
  "v_LB (Wind)"
 ],
 "ges": "Flugzeit hin und zurück: windstill, mit Wind von B nach A, mit Seitenwind",
 "schritte": [
  {
   "f": "Windstill: Wie lange dauern Hin- und Rückflug?",
   "o": [
    [
     "t₀ = 2D / v_FL",
     "Zweimal die Strecke D mit konstanter Geschwindigkeit."
    ],
    [
     "t₀ = D / v_FL",
     "Das ist nur eine Richtung."
    ],
    [
     "t₀ = 2D · v_FL",
     "Zeit ist Strecke durch Geschwindigkeit."
    ],
    [
     "t₀ = D / (2 v_FL)",
     "Die Strecke ist 2D, nicht D/2."
    ]
   ],
   "r": "t₀ = 2D / v_FL"
  },
  {
   "f": "Wind weht von B nach A. Wie schnell ist das Flugzeug über Grund?",
   "o": [
    [
     "Hin v_FL − v_LB, zurück v_FL + v_LB",
     "Auf dem Hinweg nach B kommt der Wind von vorn, auf dem Rückweg von hinten."
    ],
    [
     "Hin v_FL + v_LB, zurück v_FL − v_LB",
     "Vertauscht: Der Wind weht von B nach A, also gegen den Hinflug."
    ],
    [
     "Beide Male v_FL",
     "Der Wind trägt die Luft und damit das Flugzeug mit."
    ],
    [
     "Beide Male √(v_FL² − v_LB²)",
     "Das gilt für Seitenwind."
    ]
   ],
   "r": "v_hin = v_FL − v_LB · v_rück = v_FL + v_LB"
  },
  {
   "f": "Wie kombinierst du die beiden Zeiten?",
   "o": [
    [
     "Beide Zeiten einzeln berechnen und addieren",
     "Jede Teilstrecke hat ihre eigene Geschwindigkeit."
    ],
    [
     "Mit v_FL rechnen – der Wind hebt sich auf",
     "Die Falle: Gegen den Wind ist das Flugzeug länger unterwegs, als es mit Rückenwind gewinnt."
    ],
    [
     "Die beiden Geschwindigkeiten addieren",
     "Das ergibt 2 v_FL und keine Zeit."
    ],
    [
     "Nur den Hinflug doppelt nehmen",
     "Der Rückflug ist schneller."
    ]
   ],
   "r": "t = D/(v_FL − v_LB) + D/(v_FL + v_LB) = 2D · v_FL / (v_FL² − v_LB²)"
  },
  {
   "f": "Ist das länger oder kürzer als ohne Wind?",
   "o": [
    [
     "Länger – der Nenner v_FL² − v_LB² ist kleiner",
     "t/t₀ = 1/(1 − v_LB²/v_FL²) > 1 für jeden Wind."
    ],
    [
     "Gleich lang",
     "Die Zeitverluste gegen den Wind sind größer als die Gewinne mit dem Wind."
    ],
    [
     "Kürzer",
     "Wind kostet hier immer Zeit."
    ],
    [
     "Hängt von D ab",
     "D kürzt sich im Verhältnis t/t₀ heraus."
    ]
   ],
   "r": "t / t₀ = 1 / (1 − v_LB²/v_FL²) > 1"
  },
  {
   "f": "Seitenwind: Wie muss das Flugzeug fliegen?",
   "o": [
    [
     "Schräg gegen den Wind vorhalten",
     "Nur so bleibt es auf der Linie AB. Die Windkomponente muss aufgehoben werden."
    ],
    [
     "Geradeaus auf B zielen",
     "Dann treibt der Wind es seitlich ab."
    ],
    [
     "Sich mit dem Wind treiben lassen",
     "Dann kommt es nicht in B an."
    ],
    [
     "Einfach schneller fliegen",
     "v_FL ist vorgegeben."
    ]
   ],
   "r": "Vektordreieck: v_FL ist die Hypotenuse, v_LB eine Kathete"
  },
  {
   "f": "Welche Geschwindigkeit bleibt längs AB?",
   "o": [
    [
     "√(v_FL² − v_LB²) nach Pythagoras",
     "Die Geschwindigkeit über Grund ist die zweite Kathete im Vektordreieck."
    ],
    [
     "v_FL − v_LB",
     "Das gilt für Gegenwind, nicht für Seitenwind."
    ],
    [
     "v_FL + v_LB",
     "Seitenwind bringt keinen Schub nach vorn."
    ],
    [
     "v_FL",
     "Ein Teil der Geschwindigkeit geht für das Vorhalten verloren."
    ]
   ],
   "r": "t = 2D / √(v_FL² − v_LB²)"
  }
 ],
 "fazit": "Relativbewegung ist Vektoraddition: v_Grund = v_Luft + v_Wind. Gegen- und Rückenwind heben sich zeitlich nie auf, auch Seitenwind kostet Zeit – nur weniger."
});
aufgabe({
 "id": "binf-ue01-a8",
 "f": "binf",
 "t": "Programmrahmen",
 "titel": "Zitat mit einem println",
 "s": "Bauinformatik Übung 01, Aufgabe 8",
 "angabe": "Mit genau einem println()-Aufruf soll diese Ausgabe entstehen:\n\"Allwissend bin ich nicht;\ndoch viel ist mir bewusst.\"\n(Faust I, Vers 1582 / Mephistopheles)",
 "ges": "Die vollständige Anweisung System.out.println(…);",
 "schritte": [
  {
   "f": "Wie beginnt der String, damit das erste Anführungszeichen ausgegeben wird?",
   "o": [
    [
     "\"\\\"Allwissend …",
     "\\\" ist die Escape-Sequenz für ein Anführungszeichen im String."
    ],
    [
     "\"\"Allwissend …",
     "Das zweite \" beendet den String sofort – der Compiler meldet einen Fehler."
    ],
    [
     "'\"Allwissend …",
     "Einfache Anführungszeichen sind für einzelne Zeichen (char), nicht für Strings."
    ],
    [
     "\"\\'Allwissend …",
     "\\' gibt ein Apostroph aus, kein Anführungszeichen."
    ]
   ],
   "r": "System.out.println(\"\\\"Allwissend bin ich nicht;"
  },
  {
   "f": "Wie kommt „doch viel …“ in die nächste Zeile?",
   "o": [
    [
     "Mit \\n im String",
     "\\n ist der Zeilenvorschub. Die Ausgabe springt an dieser Stelle in die nächste Zeile."
    ],
    [
     "Mit \\t",
     "\\t ist ein Tabulator, kein Zeilenumbruch."
    ],
    [
     "Enter im Quelltext drücken",
     "Ein String-Literal darf im Quelltext nicht über mehrere Zeilen gehen – Compilerfehler."
    ],
    [
     "Einen zweiten println-Aufruf",
     "Erlaubt ist nur ein println()."
    ]
   ],
   "r": "… nicht;\\ndoch viel ist mir bewusst.\\\""
  },
  {
   "f": "Die Quellenangabe soll in eine eigene Zeile. Was folgt?",
   "o": [
    [
     "\\n(Faust I, Vers 1582 / Mephistopheles)",
     "Klammern und Schrägstrich sind normale Zeichen und brauchen kein Escape."
    ],
    [
     "\\\\n(Faust I, …)",
     "\\\\ gibt einen Backslash aus. Dann stünde „\\n“ als Text in der Ausgabe."
    ],
    [
     "/n(Faust I, …)",
     "Der Schrägstrich ist der falsche – Escape-Sequenzen beginnen mit dem Backslash."
    ],
    [
     "\\n(Faust I, Vers 1582 \\/ Mephistopheles)",
     "\\/ ist in Java keine gültige Escape-Sequenz – Compilerfehler."
    ]
   ],
   "r": "… bewusst.\\\"\\n(Faust I, Vers 1582 / Mephistopheles)"
  },
  {
   "f": "Wie endet die Anweisung?",
   "o": [
    [
     "\");",
     "String schließen, Klammer schließen, Semikolon."
    ],
    [
     "\")",
     "Ohne Semikolon ist die Anweisung nicht beendet."
    ],
    [
     "\";)",
     "Das Semikolon gehört hinter die schließende Klammer."
    ],
    [
     "\"}",
     "Die geschweifte Klammer schließt Blöcke, nicht den Methodenaufruf."
    ]
   ],
   "r": "System.out.println(\"\\\"Allwissend bin ich nicht;\\ndoch viel ist mir bewusst.\\\"\\n(Faust I, Vers 1582 / Mephistopheles)\");"
  },
  {
   "f": "Was ändert sich, wenn du print statt println nimmst?",
   "o": [
    [
     "Am Ende fehlt der Zeilenvorschub",
     "Die nächste Ausgabe hängt direkt hinter „Mephistopheles)“ in derselben Zeile."
    ],
    [
     "print versteht keine Escape-Sequenzen",
     "Escape-Sequenzen gehören zum String, nicht zur Methode – sie wirken bei print genauso."
    ],
    [
     "print gibt gar nichts aus",
     "print gibt alles aus, nur ohne Zeilenumbruch am Schluss."
    ],
    [
     "Kein Unterschied",
     "println hängt einen Zeilenvorschub an, print nicht."
    ]
   ]
  }
 ],
 "fazit": "Escape-Sequenzen: \\\" Anführungszeichen, \\n neue Zeile, \\t Tabulator, \\\\ Backslash. Ein String-Literal darf im Quelltext nicht über mehrere Zeilen gehen."
});
aufgabe({
 "id": "stat-ue01-lgs",
 "f": "stat",
 "t": "Gleichungssysteme",
 "titel": "Ist Ax = b lösbar?",
 "s": "Angewandte Statistik Übung 1, Altklausuraufgabe",
 "v": "matrix",
 "angabe": "Gegeben sind die Matrix A mit den Zeilen (1 2 1), (2 2 1), (3 2 3) und der Vektor b = (1, 4, 2)′.",
 "ges": "Ob Ax = b lösbar ist, und die Lösung",
 "schritte": [
  {
   "f": "Wie prüfst du am schnellsten, ob das System eindeutig lösbar ist?",
   "o": [
    [
     "Die Determinante von A berechnen",
     "Ist det A ≠ 0, ist Ax = b für jedes b eindeutig lösbar."
    ],
    [
     "Den Rang von b bestimmen",
     "b ist ein Vektor – entscheidend ist die Matrix A."
    ],
    [
     "A · b ausrechnen",
     "Das Produkt sagt nichts über die Lösbarkeit."
    ],
    [
     "Gauß bis zum Ende rechnen und schauen",
     "Geht auch, dauert aber länger als die Determinante."
    ]
   ]
  },
  {
   "f": "Wie berechnest du die 3×3-Determinante?",
   "o": [
    [
     "Sarrus: Produkte nach rechts unten minus nach links unten",
     "Die Regel von Sarrus gilt genau für 3×3-Matrizen."
    ],
    [
     "Die Hauptdiagonale multiplizieren",
     "Das reicht nur bei Dreiecksmatrizen."
    ],
    [
     "ad − bc",
     "Das ist die Formel für 2×2."
    ],
    [
     "Alle Einträge addieren",
     "Die Summe der Einträge hat nichts mit der Determinante zu tun."
    ]
   ],
   "r": "rechts unten: 6 + 6 + 4 = 16 · links unten: 6 + 2 + 12 = 20\ndet A = 16 − 20 = −4 ≠ 0 → eindeutig lösbar"
  },
  {
   "f": "Wie löst du das System geschickt?",
   "o": [
    [
     "II − I bilden: x₂ und x₃ fallen weg",
     "In I und II stehen bei x₂ und x₃ dieselben Koeffizienten – die Differenz liefert x₁ sofort."
    ],
    [
     "Cramersche Regel mit vier Determinanten",
     "Funktioniert, ist hier aber viel mehr Arbeit."
    ],
    [
     "A invertieren",
     "Die Inverse zu bestimmen dauert länger als das System selbst."
    ],
    [
     "x₃ = 0 annehmen",
     "Eine Unbekannte darf man nicht einfach festlegen."
    ]
   ],
   "r": "(2 − 1)x₁ = 4 − 1 → x₁ = 3"
  },
  {
   "f": "Wie geht es weiter?",
   "o": [
    [
     "x₁ einsetzen und III − I bilden",
     "Nach dem Einsetzen bleiben I: 2x₂ + x₃ = −2 und III: 2x₂ + 3x₃ = −7. Die Differenz eliminiert x₂."
    ],
    [
     "x₁ in II einsetzen",
     "II liefert nach dem Einsetzen dieselbe Gleichung wie I – keine neue Information."
    ],
    [
     "Alle Gleichungen addieren",
     "Das eliminiert nichts gezielt."
    ],
    [
     "Noch einmal Sarrus rechnen",
     "Die Determinante ist schon bekannt."
    ]
   ],
   "r": "2x₃ = −5 → x₃ = −2,5\n2x₂ = −2 + 2,5 → x₂ = 0,25"
  },
  {
   "f": "Wie sicherst du das Ergebnis ab?",
   "o": [
    [
     "Probe: Lösung in die Originalgleichung III einsetzen",
     "Stimmt die Probe in den ursprünglichen Zahlen, ist die Lösung richtig."
    ],
    [
     "Die Determinante nochmal rechnen",
     "Die Determinante prüft nur die Lösbarkeit, nicht die Lösung."
    ],
    [
     "Den Rang prüfen",
     "Der Rang sagt nichts über Rechenfehler in x."
    ],
    [
     "Gar nicht nötig",
     "Eine Probe kostet 20 Sekunden und rettet Punkte."
    ]
   ],
   "r": "3 · 3 + 2 · 0,25 + 3 · (−2,5) = 2 ✓ → x = (3; 0,25; −2,5)′"
  }
 ],
 "fazit": "Lösbarkeit: det A ≠ 0 genügt als Begründung. Wäre det A = 0, entscheidet rg(A) = rg(A|b): gleich → unendlich viele Lösungen, verschieden → keine."
});
aufgabe({
 "id": "stat-ue01-rang",
 "f": "stat",
 "t": "Matrizen",
 "titel": "Rang und Determinante mit Gauß",
 "s": "Angewandte Statistik Übung 1, Aufgabe 3",
 "angabe": "Gegeben ist die Matrix A mit den Zeilen (0 1 −3), (1 0 4), (−1 1 −2).",
 "ges": "Rang und Determinante von A",
 "schritte": [
  {
   "f": "Wie bestimmst du den Rang?",
   "o": [
    [
     "Mit Gauß auf Stufenform bringen und Nicht-Null-Zeilen zählen",
     "Der Rang ist die Zahl der linear unabhängigen Zeilen – in der Stufenform direkt ablesbar."
    ],
    [
     "Die Einträge ungleich 0 zählen",
     "Der Rang zählt unabhängige Zeilen, nicht einzelne Zahlen."
    ],
    [
     "Die Zahl der Spalten nehmen",
     "Das ist nur die Obergrenze."
    ],
    [
     "Rang = Determinante",
     "Die Determinante ist eine Zahl, der Rang eine Anzahl. Nur det ≠ 0 zeigt vollen Rang an."
    ]
   ]
  },
  {
   "f": "Oben links steht eine 0. Was tust du?",
   "o": [
    [
     "Zeile I und II tauschen",
     "Dann steht oben links eine 1 als Pivot. Merken: Ein Zeilentausch kehrt das Vorzeichen der Determinante um."
    ],
    [
     "Durch 0 teilen",
     "Teilen durch null ist nicht erlaubt."
    ],
    [
     "Die erste Spalte streichen",
     "Spalten zu streichen verändert die Matrix."
    ],
    [
     "Der Rang ist dann höchstens 2",
     "Eine Null an einer Stelle sagt nichts über den Rang."
    ]
   ],
   "r": "Neue Reihenfolge: (1 0 4), (0 1 −3), (−1 1 −2)"
  },
  {
   "f": "Wie eliminierst du die −1 in der dritten Zeile?",
   "o": [
    [
     "III + I",
     "(−1 1 −2) + (1 0 4) = (0 1 2). Das Addieren einer Zeile ändert die Determinante nicht."
    ],
    [
     "III − I",
     "Das ergibt −2 statt 0 in der ersten Spalte."
    ],
    [
     "III · (−1)",
     "Damit eliminierst du nichts, und die Determinante ändert das Vorzeichen."
    ],
    [
     "III + II",
     "In der ersten Spalte von II steht eine 0 – die −1 bleibt."
    ]
   ],
   "r": "III′ = (0 1 2)"
  },
  {
   "f": "Und die 1 in der zweiten Spalte von III′?",
   "o": [
    [
     "III′ − II",
     "(0 1 2) − (0 1 −3) = (0 0 5). Jetzt ist die Stufenform erreicht."
    ],
    [
     "III′ + II",
     "Das ergibt 2 statt 0."
    ],
    [
     "III′ streichen",
     "Zeilen darf man nicht einfach weglassen."
    ],
    [
     "III′ · 5",
     "Multiplizieren eliminiert nichts."
    ]
   ],
   "r": "Stufenform: (1 0 4), (0 1 −3), (0 0 5) → drei Nicht-Null-Zeilen, rg A = 3"
  },
  {
   "f": "Wie bekommst du jetzt die Determinante?",
   "o": [
    [
     "Diagonale der Stufenform multiplizieren, Vorzeichen wegen des Tauschs umkehren",
     "Zeilenadditionen ändern det nicht, jeder Zeilentausch kehrt das Vorzeichen um."
    ],
    [
     "Diagonale multiplizieren, Vorzeichen bleibt",
     "Der Zeilentausch am Anfang dreht das Vorzeichen."
    ],
    [
     "Jetzt nur noch mit Sarrus",
     "Sarrus geht auch, ist aber unnötig – die Stufenform liefert det direkt."
    ],
    [
     "det = Rang = 3",
     "Rang und Determinante sind verschiedene Größen."
    ]
   ],
   "r": "det A = −(1 · 1 · 5) = −5 ≠ 0 – passt zum vollen Rang"
  }
 ],
 "fazit": "Gauß liefert beides: den Rang (Nicht-Null-Zeilen zählen) und die Determinante (Diagonalprodukt, bei jedem Zeilentausch Vorzeichen umkehren). Voller Rang ⇔ det ≠ 0."
});
aufgabe({
 "id": "dap-v02-gewichtung",
 "f": "dap",
 "t": "Gewichtung und Post-Processing",
 "titel": "Tagesstrecke gewichten",
 "s": "DAP Lecture 02, MiD-Beispiel Alter",
 "angabe": "In der MiD-Stichprobe sind die Altersgruppen anders verteilt als in der Bevölkerung. Gesucht ist die mittlere Tagesstrecke pro Person.",
 "geg": [
  "< 30: N = 67 854, 34,0 km",
  "30–60: N = 122 519, 50,2 km",
  "60+: N = 110 455, 28,0 km",
  "Bevölkerung: 25,4 · 34,3 · 22,5 Mio."
 ],
 "ges": "Gewichte je Gruppe und gewichteter Mittelwert",
 "schritte": [
  {
   "f": "Warum reicht der einfache Mittelwert hier nicht?",
   "o": [
    [
     "Die Altersgruppen sind in der Stichprobe anders verteilt als in der Bevölkerung",
     "Junge sind unter-, Ältere überrepräsentiert. Ohne Korrektur zählen die Älteren zu viel."
    ],
    [
     "Die Stichprobe ist zu klein",
     "300 000 Personen sind riesig. Das Problem ist die Verzerrung, nicht die Größe."
    ],
    [
     "km pro Tag sind nicht normalverteilt",
     "Die Verteilungsform ist hier nicht das Problem."
    ],
    [
     "Es fehlen Werte",
     "Fehlende Werte behandelt man mit Imputation – hier geht es um die Zusammensetzung."
    ]
   ],
   "r": "Stichprobe: 22,6 % · 40,7 % · 36,7 %\nBevölkerung: 31,0 % · 41,7 % · 27,3 %"
  },
  {
   "f": "Wie berechnest du das Gewicht einer Gruppe?",
   "o": [
    [
     "w = Anteil in der Bevölkerung / Anteil in der Stichprobe",
     "Soll durch Ist: Unterrepräsentierte Gruppen bekommen w > 1."
    ],
    [
     "w = Anteil in der Stichprobe / Anteil in der Bevölkerung",
     "Umgekehrt würde die Verzerrung noch verstärkt."
    ],
    [
     "w = N / Bevölkerung",
     "Das ist der Kehrwert des Hochrechnungsfaktors, kein Gewicht mit Mittel 1."
    ],
    [
     "w = Bevölkerungsanteil − Stichprobenanteil",
     "Gewichte sind Faktoren, keine Differenzen."
    ]
   ],
   "r": "w(< 30) = 31,0/22,6 = 1,37\nw(30–60) = 1,02 · w(60+) = 0,74"
  },
  {
   "f": "Was bedeutet w = 1,37 für die unter 30-Jährigen?",
   "o": [
    [
     "Sie sind unterrepräsentiert – jede Antwort zählt 1,37-fach",
     "So bekommt die Gruppe im Ergebnis ihr richtiges Gewicht."
    ],
    [
     "Sie sind überrepräsentiert",
     "Bei w > 1 sind sie in der Stichprobe zu selten."
    ],
    [
     "37 % von ihnen werden gestrichen",
     "Gewichten streicht niemanden, es zählt Antworten unterschiedlich stark."
    ],
    [
     "Sie fahren 37 % mehr",
     "Das Gewicht sagt nichts über das Verhalten, nur über die Repräsentation."
    ]
   ]
  },
  {
   "f": "Wie bildest du den gewichteten Mittelwert?",
   "o": [
    [
     "Σ(N · w · km) / Σ(N · w)",
     "Jede Person zählt mit dem Gewicht ihrer Gruppe."
    ],
    [
     "(34,0 + 50,2 + 28,0)/3",
     "Der Durchschnitt der Durchschnitte ignoriert die Gruppengrößen – der typische Fehler."
    ],
    [
     "Σ(N · km) / Σ N",
     "Das ist der ungewichtete Mittelwert der Stichprobe."
    ],
    [
     "Σ(w · km) / 3",
     "Damit fehlen die Gruppengrößen."
    ]
   ],
   "r": "x̄_gewichtet = 39,1 km pro Person und Tag (ungewichtet 38,4 km)"
  },
  {
   "f": "Warum steigt der Wert durch die Gewichtung?",
   "o": [
    [
     "Gewicht wandert von den Älteren (28 km) zu den Jüngeren (34 km), die mehr fahren",
     "Gewichtung verschiebt den Mittelwert in Richtung der unterrepräsentierten Gruppe – hier die Jüngeren."
    ],
    [
     "Gewichte erhöhen immer den Mittelwert",
     "Er kann genauso sinken – je nachdem, welche Gruppe unterrepräsentiert ist."
    ],
    [
     "Das ist ein Rundungsfehler",
     "0,7 km Unterschied sind ein echter Effekt der Verzerrung."
    ],
    [
     "Weil die mittlere Altersgruppe mehr zählt",
     "w ≈ 1,02 – an der mittleren Gruppe ändert sich kaum etwas."
    ]
   ]
  },
  {
   "f": "Was liefert stattdessen der Hochrechnungsfaktor ef = Bevölkerung / N?",
   "o": [
    [
     "Denselben Mittelwert und zusätzlich absolute Summen für die Grundgesamtheit",
     "ef arbeitet mit absoluten Zahlen, w mit Anteilen. Der Mittelwert ist gleich, ef rechnet zusätzlich hoch."
    ],
    [
     "Einen anderen Mittelwert",
     "Beide führen zum selben gewichteten Mittel."
    ],
    [
     "Die Rücklaufquote",
     "Die Rücklaufquote ist B/A aus dem Erhebungsprozess."
    ],
    [
     "Er ist nur für IPF da",
     "Hochrechnungsfaktoren nutzt man auch ohne IPF."
    ]
   ],
   "r": "ef = 375 · 280 · 203 Personen pro Antwort"
  }
 ],
 "fazit": "Gewicht = Soll-Anteil / Ist-Anteil, gewichteter Mittelwert = Σ w·x / Σ w. Nie den Durchschnitt der Durchschnitte bilden."
});
aufgabe({
 "id": "dap-v02-ipf",
 "f": "dap",
 "t": "Gewichtung und Post-Processing",
 "titel": "IPF nach Alter und Pkw-Besitz",
 "s": "DAP Lecture 02, Iterative Proportional Fitting",
 "angabe": "Die Stichprobe weicht bei zwei Merkmalen gleichzeitig von der Bevölkerung ab: Alter (Zeilen) und Pkw-Besitz (Spalten). Bekannt sind nur die Randverteilungen der Bevölkerung.",
 "geg": [
  "Zeilen jetzt: 22,6 · 40,7 · 36,7 %",
  "Zeilen Ziel: 31,0 · 41,7 · 27,3 %",
  "Spalten jetzt: ohne Pkw 7,3 · mit 92,7 %",
  "Spalten Ziel: 13,2 · 86,8 %"
 ],
 "ges": "Zellanteile, die zu beiden Randverteilungen passen",
 "schritte": [
  {
   "f": "Zwei Merkmale weichen ab. Wie gehst du vor?",
   "o": [
    [
     "IPF: abwechselnd Zeilen und Spalten an die Ziele anpassen",
     "Iterative Proportional Fitting braucht nur die Randverteilungen und nähert sich Schritt für Schritt an."
    ],
    [
     "Nur nach dem Alter gewichten",
     "Dann stimmt der Pkw-Besitz weiterhin nicht."
    ],
    [
     "Beide Faktoren einmal multiplizieren, fertig",
     "Die Merkmale hängen zusammen. Ein Durchgang reicht nicht, die Ränder verschieben sich gegenseitig."
    ],
    [
     "Die Zellen direkt auf ihre Zielwerte setzen",
     "Die Zielwerte der Zellen sind gar nicht bekannt – nur die Ränder."
    ]
   ]
  },
  {
   "f": "Was ist der erste Schritt?",
   "o": [
    [
     "Zeilenfaktor = Ziel / jetzt, ganze Zeile damit multiplizieren",
     "Danach stimmen die Zeilensummen genau."
    ],
    [
     "Zeilenfaktor = jetzt / Ziel",
     "Verkehrt herum – die Abweichung würde größer."
    ],
    [
     "Nur die Zellen „mit Pkw“ anpassen",
     "Die ganze Zeile wird mit dem Faktor multipliziert."
    ],
    [
     "Jede Zeilensumme durch 3 teilen",
     "Das hat keinen Bezug zu den Zielwerten."
    ]
   ],
   "r": "Zeilenfaktoren: < 30: 31,0/22,6 = 1,37 · 30–60: 1,02 · 60+: 0,74"
  },
  {
   "f": "Nach Schritt 1 stimmen die Zeilen. Was ist mit den Spalten?",
   "o": [
    [
     "Sie weichen noch ab: 7,2 % statt 13,2 % ohne Pkw",
     "Die Zeilenanpassung hat die Spalten kaum verbessert."
    ],
    [
     "Sie stimmen automatisch mit",
     "Zeilen und Spalten sind verschiedene Ränder."
    ],
    [
     "Sie spielen keine Rolle mehr",
     "Beide Merkmale sollen am Ende passen."
    ],
    [
     "Sie sind jetzt doppelt so groß",
     "Die Summe bleibt 100 %, nur die Aufteilung stimmt nicht."
    ]
   ],
   "r": "Spaltenfaktoren: ohne Pkw 13,2/7,2 = 1,83 · mit Pkw 86,8/92,8 = 0,94"
  },
  {
   "f": "Was ist der zweite Schritt?",
   "o": [
    [
     "Jede Spalte mit ihrem Spaltenfaktor multiplizieren",
     "Jetzt stimmen die Spalten. Die Zeilen weichen wieder leicht ab, aber viel weniger als am Anfang."
    ],
    [
     "Zurück zur Ausgangstabelle",
     "Dann geht Schritt 1 verloren."
    ],
    [
     "Die Zeilen nochmal mit denselben Faktoren",
     "Die Zeilen stimmen schon, das verzerrt sie wieder."
    ],
    [
     "Den Mittelwert aus beiden Tabellen bilden",
     "So arbeitet IPF nicht."
    ]
   ],
   "r": "Spalten stimmen · Zeilen: 31,1 · 41,4 · 27,5 % (Ziel 31,0 · 41,7 · 27,3 %)"
  },
  {
   "f": "Wann hörst du auf?",
   "o": [
    [
     "Wenn Zeilen und Spalten innerhalb einer Toleranz passen",
     "Meist reichen wenige Runden – hier passt nach Schritt 3 alles auf 0,1 %."
    ],
    [
     "Nach genau einem Durchgang",
     "Ein Durchgang lässt meist noch Abweichungen."
    ],
    [
     "Wenn alle Gewichte 1 sind",
     "Die Faktoren nähern sich 1, die Gewichte der Zellen bleiben verschieden."
    ],
    [
     "Nie, IPF konvergiert nicht",
     "IPF konvergiert in der Regel schnell."
    ]
   ],
   "r": "Schritt 3 (Zeilen erneut) → alles passt auf 0,1 %"
  }
 ],
 "fazit": "IPF: Zeilen anpassen, Spalten anpassen, wiederholen. Es braucht nur die Randverteilungen der Grundgesamtheit, nicht die einzelnen Zellen."
});
