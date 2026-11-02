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
   "f": "Du kennst jetzt das Volumen. Welche zweite Größe brauchst du, um Kupfer und Zink auseinanderzurechnen?",
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
   "f": "Wie stellst du daraus die Gleichungen für m_Cu und m_Zn auf?",
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
   "f": "Zwei Gleichungen, zwei Unbekannte – wie löst du das System am schnellsten?",
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
   "f": "Zum Schluss: Wie bekommst du die Dichte des Messings?",
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
   "f": "Für Bernoulli brauchst du v₁ und v₂. Womit beginnst du?",
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
   "f": "Für die Lagehöhen z₁ und z₂: Welchen Bezugshorizont wählst du?",
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
   "f": "Was setzt du zwischen Querschnitt 1 und 2 gleich, um an p₂ zu kommen?",
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
   "f": "Druck und Geschwindigkeit haben verschiedene Einheiten. Wie bringst du sie zusammen?",
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
   "f": "Für Grenztiefe und Grenzgeschwindigkeit: Was rechnest du zuerst?",
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
   "f": "Jetzt die Mindestenergiehöhe – wie bekommst du sie?",
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
   "f": "Welcher Fließzustand liegt bei h = 1,50 m vor?",
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
   "f": "Ziel sind Biege- und Schubnachweis. Womit startest du?",
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
   "f": "Für die Kombinationen brauchst du kmod. Welche Werte gelten?",
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
   "f": "M_Ed steht fest. Wie wählst du den Querschnitt?",
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
   "f": "Gegeben ist eine Masse in Tonnen. Was ist der erste Schritt zur Spannung?",
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
   "f": "Welche Kombination aus Werkstoff und Querschnitt trägt die Last sicher?",
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
   "f": "Um die Höhe an der Wand zu finden: Was bestimmst du zuerst?",
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
   "f": "Wie groß ist die vertikale Geschwindigkeit an der Wand?",
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
   "f": "Wie bekommst du daraus die Gesamtzeit für Hin- und Rückflug?",
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
   "f": "det A ≠ 0, es gibt also genau eine Lösung. Wie findest du sie geschickt?",
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
   "f": "x₁ = 3 ist bekannt. Wie bekommst du x₂ und x₃?",
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
   "f": "In III′ steht in der zweiten Spalte noch eine 1. Wie eliminierst du sie?",
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
   "f": "Womit beginnst du die Anpassung?",
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
   "f": "Wie bringst du jetzt die Spalten auf ihre Zielwerte?",
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

/* ═════════ Patch 1.4 · eingespielt 02.11.2026 ═════════ */
/* Patch 1.4 · erstellt 02.11.2026 · Korrekturen nach Toms Test
   KORREKTUR: Felder je Frage-ID überschreiben (Lernstand bleibt). 70 ausführlichere Erklärungen, Durchbiegung als Auswahlfrage */
const KORREKTUR = {
"hydro-1aedhad": {
"e": "p = ρ·g·z: Doppelte Tiefe heißt doppelter Druck. Der Druck wächst also linear – deshalb ist die Druckfigur an einer senkrechten Wand ein Dreieck."
},
"hydro-15hgt78": {
"e": "In derselben ruhenden, zusammenhängenden Flüssigkeit herrscht auf jeder waagerechten Ebene derselbe Druck – egal wie breit die Röhre ist. Damit löst du jedes Manometer und U-Rohr."
},
"phys-2g2zee": {
"e": "Variablen wie m, v oder t stehen kursiv, Konstanten und Einheiten wie π oder m (Meter) aufrecht. Vektoren schreibt man zusätzlich fett oder mit Pfeil."
},
"phys-1lk98g4": {
"e": "v = dx/dt: Die Geschwindigkeit sagt, wie schnell sich der Ort ändert. Leitet man die Geschwindigkeit noch einmal ab, erhält man die Beschleunigung a = dv/dt."
},
"phys-y8fvi3": {
"e": "Die Steigung der Tangente im x(t)-Diagramm ist dx/dt = v. Die Beschleunigung liest man erst im v(t)-Diagramm als Steigung ab."
},
"phys-172no65": {
"e": "a·b = |a|·|b|·cos 90° = 0, weil cos 90° = 0 ist. Das Skalarprodukt ist eine Zahl, kein Vektor – deshalb prüft man damit, ob zwei Vektoren senkrecht stehen."
},
"phys-1w6izjb": {
"e": "Ohne Luftwiderstand wirkt nur die Schwerkraft: a = −g·e_y, auf der ganzen Bahn gleich – auch im Scheitel. Waagerecht gibt es keine Beschleunigung, v_x bleibt konstant."
},
"phys-1l9rk00": {
"e": "Im Scheitel ist nur v_y = 0. Der Ball fliegt mit v_x weiter, und g wirkt weiter nach unten – weder die Geschwindigkeit noch die Beschleunigung ist null."
},
"bsk-1etwl4g": {
"e": "Um 1850 entstanden die ersten Bauteile aus eisenbewehrtem Beton, 1867 folgte Moniers Patent. Spannbeton kam erst um 1930, der römische Beton (ca. 100 v. Chr.) hatte keine Bewehrung."
},
"bsk-19xavjv": {
"e": "Vereinbarung: Druck negativ, Zug positiv. Deshalb haben Stauchungen ein Minus, etwa ε = −0,6 ‰ bei der Betonstütze aus Ü01."
},
"bauko-17j0mws": {
"e": "Ständige Lasten wie das Eigengewicht kennt man genau, sie streuen wenig – deshalb reicht 1,35. Die 1,50 ist γ_Q für veränderliche Lasten wie Nutzlast, Schnee und Wind, die viel unsicherer sind. Wirkt eine ständige Last günstig, setzt man γ_G = 1,00 an."
},
"bauko-afvv76": {
"e": "Vereinbarung bei c_pe: Plus heißt Druck auf die Fläche, Minus heißt Sog – der Wind zieht an der Fläche. Das gilt in allen Bereichen gleich."
},
"bauko-zfi11p": {
"e": "Beim Durchlaufträger ist A nicht einfach q·l/2. Man nimmt Tafelwert × q × l, z. B. beim Zweifeldträger A = 0,375·q·l und B = 1,25·q·l – die Mittelstütze bekommt mehr."
},
"bauko-1j1gkm2": {
"e": "γ_M = 1,3 ist der Materialbeiwert für Holz. Damit gilt f_d = kmod · f_k / γ_M. Zum Vergleich: Baustahl γ_M0 = 1,0, Betonstahl γ_S = 1,15."
},
"bauko-h48m33": {
"e": "Hält das Eigengewicht gegen das Abheben, darf man es nicht vergrößern – das läge auf der unsicheren Seite. Deshalb γ_G = 1,0 statt 1,35. Ganz weglassen darf man es aber nicht, es ist ja vorhanden."
},
"binf-vuzr0z": {
"e": "Das JDK braucht man zum Programmieren – es enthält den Compiler javac. Das JRE reicht nur zum Ausführen. Eclipse ist die IDE aus der Übung, und javac übersetzt den Quelltext in plattformunabhängigen Bytecode."
},
"binf-17sbrm4": {
"e": "println hängt nach der Ausgabe einen Zeilenumbruch an, print nicht – die nächste Ausgabe steht dann direkt dahinter. Beide geben Texte, Zahlen und Wahrheitswerte aus."
},
"binf-1dxe92g": {
"e": "java.lang ist immer verfügbar, ohne import. Darin stecken String, System und Math. Für Scanner aus java.util brauchst du dagegen ein import."
},
"binf-1v7o0hj": {
"e": "class ist ein reserviertes Schlüsselwort, \"Hallo\" ein fester Wert (Literal), summe ein selbst gewählter Name (Bezeichner) und ; trennt Anweisungen (Separator). Dazu kommen Operatoren wie = + == &&."
},
"binf-f3uvr5": {
"e": "byte hat 8 Bit, also 256 Werte. Weil auch negative Zahlen dabei sind, reicht er von −128 bis 127. 0 … 255 wäre ein Byte ohne Vorzeichen – das gibt es in Java nicht."
},
"binf-1glct40": {
"e": "Falsch – Java nutzt den Punkt: 2.5. Das Komma trennt in Java Parameter, etwa in Math.max(2, 5)."
},
"stat-1mansf7": {
"e": "Die Länge ist die Zufallsvariable, jede Messung eine Realisierung. Alle möglichen Längen bilden die Grundgesamtheit, die wiederholten Messungen die Stichprobe. „Eine Messung ist keine Messung!“"
},
"stat-1o65oqa": {
"e": "i ist die Zeile, j die Spalte – „Zeile zuerst, Spalte später“. a₂₃ steht also in Zeile 2, Spalte 3."
},
"stat-w1qpum": {
"e": "Beim Transponieren werden Zeilen zu Spalten: Aus (m, n) wird (n, m). Quadratisch wird die Matrix dadurch nicht, und die Werte behalten ihr Vorzeichen."
},
"stat-kniqu7": {
"e": "Die inneren Zahlen müssen gleich sein (3 = 3), die äußeren bleiben übrig → (2, 4). Andersherum, (3, 4)·(2, 3), wäre das Produkt nicht definiert."
},
"stat-1k4n50j": {
"e": "Symmetrisch heißt A = A′, also spiegelgleich zur Diagonale. Die Einheitsmatrix ist eine besondere Diagonalmatrix mit lauter Einsen. Schiefsymmetrisch wäre A = −A′."
},
"stat-jb0678": {
"e": "det A = 0 heißt: Die Zeilen sind linear abhängig, A ist singulär und hat keine Inverse. Ein System Ax = b ist dann nicht eindeutig lösbar."
},
"stat-1vax8ar": {
"e": "Bei einer Dreiecksmatrix ist die Determinante das Produkt der Diagonale. Die Summe der Diagonale ist etwas anderes: die Spur."
},
"stat-5jgbsi": {
"e": "Orthogonal heißt senkrecht: a′b = 0. Parallele Vektoren haben dagegen ein Kreuzprodukt von 0. Orthonormal sind sie, wenn zusätzlich beide die Länge 1 haben."
},
"stat-600vua": {
"e": "Alle Zeilenumformungen wirken auf beide Seiten. Steht links I, steht rechts A⁻¹. Entsteht links eine Nullzeile, ist det A = 0 und es gibt keine Inverse."
},
"dap-14vjgrr": {
"e": "Ein Vektor hat nur einen Typ, eine Liste darf alles mischen. Eine Matrix ist ein Vektor mit zwei Dimensionen, ein Data Frame eine Liste gleich langer Spalten – also eine Tabelle."
},
"dap-1sgpysp": {
"e": "sd() und var() teilen durch n − 1. So schätzen sie die Streuung der Grundgesamtheit aus einer Stichprobe, ohne sie systematisch zu unterschätzen."
},
"dap-hjo7uh": {
"e": "each = 2 wiederholt jedes Element einzeln: 1 1 2 2. times = 2 wiederholt den ganzen Vektor: 1 2 1 2."
},
"dap-7so915": {
"e": "R füllt Matrizen standardmäßig Spalte für Spalte (byrow = FALSE): erste Spalte 5, 6 – zweite Spalte 7, 8. Zeilenweise füllt R nur mit byrow = TRUE, dann stünde 5, 6 in der ersten Zeile."
},
"dap-o0fj1t": {
"e": "Die Standardnormalverteilung hat Mittelwert 0 und Standardabweichung 1: z ~ N(0, 1). Ihre Verteilungsfunktion heißt Φ(z). σ = 0 hieße gar keine Streuung."
},
"hydro-d4n2dr": {
"e": "Potentialströmung heißt: keine Reibung und keine Drehung der Wasserteilchen (wirbelfrei). Das Gegenstück ist die Wirbelströmung."
},
"hydro-55jklh": {
"e": "Leistung ist Energie pro Zeit: P = E/t in Watt = J/s. Joule ist die Einheit der Energie, N·s die des Impulses, Pa die des Drucks."
},
"bauko-mqtpgg": {
"e": "s_k ist die Schneelast am Boden – sie hängt nur von der Schneelastzone und der Geländehöhe ab. Die Dachneigung kommt erst über den Formbeiwert dazu: s = μ₁ · s_k."
},
"bauko-ywnwk6": {
"e": "Zwischen zwei Tabellenwerten wird linear interpoliert, wie in Ü02 bei α = 35° zwischen 30° und 45°. Einfach den kleineren Wert zu nehmen, kann auf der unsicheren Seite liegen."
},
"bauko-14ormv2": {
"e": "k_h erhöht die Biegefestigkeit nur bei niedrigen Querschnitten. Ab h = 150 mm gilt k_h = 1,0, darunter steigt er bis höchstens 1,3."
},
"bsk-xvsjup": {
"e": "Enge Kapillaren saugen höher, weite schneller. Die Steighöhe wächst, je kleiner der Radius ist."
},
"bsk-xoj0q8": {
"e": "Luft leitet Wärme schlecht. Viele Poren heißen viel eingeschlossene Luft – deshalb dämmen leichte, poröse Stoffe gut. Feuchte verschlechtert die Dämmung, weil Wasser die Luft verdrängt."
},
"bsk-1uj5ag0": {
"e": "Bei Brinell drückt man eine Kugel ein und vermisst den Eindruck. Der Pendelschlag auf eine gekerbte Probe ist der Kerbschlagversuch, das Ziehen bis zum Bruch der Zugversuch."
},
"bsk-1a3v4cm": {
"e": "Ab etwa 10⁶ Lastspielen verläuft die Wöhlerlinie bei Stahl praktisch waagerecht. Spannungen darunter hält das Bauteil beliebig oft aus – das ist die Dauerfestigkeit."
},
"phys-1xj6od8": {
"e": "a = dv/dt = d²x/dt²: Die Beschleunigung ist die Änderung der Geschwindigkeit. Das Integral der Geschwindigkeit ergibt dagegen den Ort."
},
"phys-1spxrz1": {
"e": "Ein Einheitsvektor hat immer den Betrag 1. Man erhält ihn, indem man einen Vektor durch seinen Betrag teilt: e = a/|a|. Er gibt nur die Richtung an."
},
"phys-nnpp3p": {
"e": "Eine Umdrehung sind 2π, und sie dauert T – also ω = 2π/T. ω = 1/T wäre die Frequenz f, also Umdrehungen pro Sekunde."
},
"phys-so8o5a": {
"e": "v = ω·r: Weiter außen legt ein Punkt pro Umdrehung mehr Weg zurück. Gleichwertig ist v = 2πr/T."
},
"phys-871r7i": {
"e": "a = v²/r, sie zeigt zum Kreismittelpunkt. Gleichwertig ist a = ω²·r. Doppelte Geschwindigkeit heißt vierfache Zentripetalbeschleunigung."
},
"binf-1vnr44v": {
"e": "x++ erhöht x um 1, also von 5 auf 6. x-- würde um 1 verringern."
},
"binf-xfgu5l": {
"e": "3 > 2 ist true, das ! kehrt den Wahrheitswert um → false. Das Ergebnis ist ein boolean, keine Zahl."
},
"binf-1irnuun": {
"e": "Die Stellenwerte von rechts sind 1, 2, 4. Also 101 = 1·4 + 0·2 + 1·1 = 5."
},
"binf-ga3khu": {
"e": "1 Byte = 8 Bit. Deshalb hat der Java-Typ byte 2⁸ = 256 Werte, von −128 bis 127."
},
"binf-103nehk": {
"e": "Jeder Ganzzahltyp verdoppelt die Bits: byte 8, short 16, int 32, long 64. Bei Kommazahlen hat float 32 und double 64 Bit."
},
"binf-s5rh8q": {
"e": "IEEE 754 speichert Vorzeichen, Exponent und Mantisse: x = (−1)^v · m · 2^e. So lassen sich sehr große und sehr kleine Zahlen darstellen – mit kleinen Rundungsfehlern."
},
"binf-5y4lru": {
"e": "Java rechnet von links: \"a\" + 'b' ergibt den String \"ab\", danach wird auch die 1 als Text angehängt → ab1. Ohne den String vorne ergäbe 'b' + 1 die Zahl 99, weil b den Zeichencode 98 hat."
},
"stat-1p90efz": {
"e": "sp(A) = Σ a_ii, die Summe der Diagonale. Das Produkt der Diagonale ist nur bei Dreiecksmatrizen die Determinante."
},
"stat-1c5mqkl": {
"e": "|a| = √(a′·a): a′·a ist die Summe der Quadrate, also eine Zahl. a·a′ wäre dagegen eine (m, m)-Matrix."
},
"stat-a36j49": {
"e": "rg(A) ≤ min(m, n) = min(3, 5) = 3. Mehr unabhängige Zeilen, als es Zeilen gibt, kann es nicht geben."
},
"stat-1luocql": {
"e": "Richtig – eine Nullzeile heißt, eine Zeile hing von den anderen ab: rg(A) < n und det A = 0."
},
"stat-1xzfkgf": {
"e": "a·a′ (Spalte mal Zeile) ergibt eine (m, m)-Matrix, deren Zeilen alle Vielfache von a′ sind – Rang 1. a′·a (Zeile mal Spalte) ist dagegen eine Zahl (Ü1, Aufgabe 4)."
},
"stat-gp8y7u": {
"e": "Schiefsymmetrisch heißt a_ij = −a_ji. Auf der Diagonale gilt dann a_ii = −a_ii – das geht nur mit 0."
},
"stat-ed4rx2": {
"e": "Richtigkeit fragt nach dem besten Wert, Präzision nach der Streuung, Zuverlässigkeit nach der Verlässlichkeit der Aussage. Und ohne genug repräsentative Daten geht nichts: „Eine Messung ist keine Messung!“"
},
"stat-1tyhjvz": {
"e": "Dieselben Daten wirken auf linearer und logarithmischer Achse völlig verschieden. Deshalb immer zuerst die Achsen lesen – „Lügen, gemeine Lügen und Statistik“."
},
"bauko-qky7im": {
"e": "Bei Rechteckquerschnitten aus Vollholz gilt k_m = 0,7: Die größten Spannungen beider Biegerichtungen treffen nur an einer Ecke zusammen. Für andere Querschnitte gilt k_m = 1,0."
},
"bauko-13h07f2": {
"e": "Erst die Schnittgrößen je Lastart, dann die Kombinationen durch kmod teilen und die größte wählen. Danach Festigkeit und Ausnutzung. In Ü06 ergab das den Querschnitt 8/24 mit η = 0,99."
},
"bauko-lzv38s": {
"e": "Teil I bringt rund 20 Punkte mit Kurzfragen, Teil II rund 70 Punkte mit drei Rechenaufgaben – zusammen etwa 90 Punkte."
},
"bauko-1f66s5k": {
"e": "Holzbau (≈ 25 P.), Mauerwerk (≈ 30 P.) und Gründung (≈ 15 P.) – die Verteilung ist seit Jahren fest. Mauerwerk bringt die meisten Punkte."
},
"dap-14zztj2": {
"e": "TRUE/FALSE ist logical, das L macht 1L zur ganzen Zahl (integer), 1.5 ist numeric, Text in Anführungszeichen ist character. Ohne L wäre auch 1 numeric."
},
"bauko-nnx202": {
"typ": "mc",
"q": "Welcher Grenzwert gilt allgemein für die Enddurchbiegung w_fin eines Holzbalkens?",
"a": [
"l / 200",
"l / 300",
"l / 150",
"l / 500"
],
"e": "w_fin ist die Durchbiegung am Ende der Nutzungsdauer, inklusive Kriechen – dafür ist l / 200 erlaubt. Für die Sofortdurchbiegung w_inst und die Netto-Enddurchbiegung w_net,fin gilt das strengere l / 300. Kragarme: l_k/150, l_k/100, l_k/150."
}
};
/* Neue Fragen zur Durchbiegung (Toms Feedback 02.11.2026) */
pair("bauko", K4, "Was beschreibt welche Durchbiegung?", [["w_inst", "sofort beim Belasten, rein elastisch"], ["w_fin", "am Ende der Nutzung, mit Kriechen"], ["w_net,fin", "Endzustand aus Dauerlasten minus Überhöhung"]], "w_fin = w_inst + w_creep: Holz gibt unter Dauerlast über Jahre nach (Kriechen, Beiwert k_def). Bei w_net,fin zählen nur die quasi-ständigen Lasten, und eine Überhöhung w_c des Balkens wird abgezogen – das ist das, was man am Ende sieht.", "Baukonstruktion V03, Ü06");
mc("bauko", K4, "Welcher Grenzwert gilt allgemein für w_inst und für w_net,fin?", ["Beide l / 300", "Beide l / 200", "w_inst l / 200, w_net,fin l / 300", "Beide l / 150"], "Sofortdurchbiegung und Netto-Enddurchbiegung sind auf l / 300 begrenzt, nur die Enddurchbiegung w_fin darf mit l / 200 etwas größer sein.", "Baukonstruktion V03, SBT S. 9.15");
mc("bauko", K4, "Ein Holzbalken hat 4 m Spannweite. Was bedeutet w_inst ≤ l / 300?", ["Er darf sich sofort höchstens 13,3 mm durchbiegen", "Er darf sich höchstens 300 mm durchbiegen", "Er darf sich höchstens 3,0 mm durchbiegen", "Er muss 300 kg tragen"], "l / 300 heißt: höchstens ein Dreihundertstel der Spannweite. 4000 mm / 300 = 13,3 mm. Je länger der Balken, desto mehr Durchbiegung ist erlaubt.", "Baukonstruktion V03");
/* Patch-Warteschlange · Baustoffkunde V04 Chemische Eigenschaften · Bauinformatik Übung 01 Lösung, Übung 02, Übungshilfen · erstellt 02.11.2026 */
const B5 = "Gefüge und Kristalle";
/* Baustoffkunde – V04 Chemische Eigenschaften */
pair("bsk", B4, "Welche Bindung steckt in welchem Stoff?", [["Atombindung", "Diamant, H₂O-Molekül"], ["Ionenbindung", "Kochsalz NaCl"], ["Metallbindung", "Stahl, Aluminium"], ["Van-der-Waals", "zwischen den Ketten von Thermoplasten"]], "Atombindung: Nichtmetall + Nichtmetall. Ionenbindung: Metall + Nichtmetall. Metallbindung: Metall + Metall. Van-der-Waals-Kräfte halten unpolare Moleküle und Kunststoffketten zusammen.", "Baustoffkunde V04");
mc("bsk", B4, "Welche Hauptbindung hat laut Übersicht die höchste Bindungsenergie?", ["Ionenbindung (400–3000 kJ/mol)", "Metallbindung (100–600 kJ/mol)", "Van-der-Waals (5–50 kJ/mol)", "Wasserstoffbrücke (10–167 kJ/mol)"], "Ionenbindungen sind sehr fest, aber spröde – Risse laufen leicht durch. Die schwächste Bindung ist Van-der-Waals.", "Baustoffkunde V04");
pair("bsk", B4, "Wie leitet der Stoff elektrischen Strom?", [["Atombindung", "Nichtleiter"], ["Ionenbindung", "Ionenleiter (z. B. als Schmelze oder Lösung)"], ["Metallbindung", "Elektronenleiter"]], "Metalle leiten über das freie Elektronengas, Salze nur über bewegliche Ionen. Kovalent gebundene Stoffe haben keine freien Ladungsträger.", "Baustoffkunde V04");
wf("bsk", B4, "Wasserstoffbrücken entstehen nur, wenn Wasserstoff an Stickstoff, Sauerstoff oder Fluor gebunden ist.", true, "Richtig – die „N-O-F“-Gruppe ist so elektronegativ, dass der Wasserstoffkern teilweise frei liegt und benachbarte negative Atome anzieht. Das geht nur beim Wasserstoff, weil er nur ein Elektron hat.", "Baustoffkunde V04");
mc("bsk", B4, "Was verrät die Steigung der Kraft-Abstand-Kurve an der Ruhelage a₀?", ["Den E-Modul – steil heißt steif", "Die Schmelztemperatur", "Die Dichte", "Die Bruchdehnung"], "Kleine Abstandsänderung, große Kraftänderung → hoher E-Modul. Flache Kurve → weicher Werkstoff.", "Baustoffkunde V04");
mc("bsk", B4, "Welcher Stoff macht den größten Anteil von Portlandzement aus?", ["Calciumoxid CaO, rund 65 %", "Siliziumdioxid SiO₂, rund 65 %", "Aluminiumoxid Al₂O₃, rund 20 %", "Eisenoxid Fe₂O₃, rund 50 %"], "Portlandzement: CaO ≈ 65 %, SiO₂ ≈ 20 %, Al₂O₃ und Fe₂O₃ je 2–6 %, SO₃ 2–4 %. SiO₂ dominiert dagegen bei Glas und Keramik.", "Baustoffkunde V04");
pair("bsk", B5, "Kugelpackung – welcher Füllgrad?", [["kubisch primitiv", "52 %, 6 Nachbarn"], ["kubisch raumzentriert (krz)", "68 %, 8 Nachbarn"], ["kubisch flächenzentriert (kfz)", "74 %, 12 Nachbarn"]], "kfz und hexagonal dicht gepackt sind mit 74 % die dichtesten Packungen. Mehr Nachbarn heißt dichter gepackt.", "Baustoffkunde V04");
pair("bsk", B5, "Welche Kristallstruktur hat das Metall?", [["α-Eisen (Ferrit)", "kubisch raumzentriert"], ["Aluminium, Kupfer, γ-Eisen", "kubisch flächenzentriert"], ["Magnesium, Zink, Titan", "hexagonal dichteste Packung"]], "Eisen wechselt mit der Temperatur die Struktur: α-Eisen ist krz, γ-Eisen (Austenit) kfz.", "Baustoffkunde V04");
pair("bsk", B5, "Gitterfehler – welche Dimension?", [["0D Punktfehler", "Leerstelle, Fremdatom"], ["1D Linienfehler", "Versetzung"], ["2D Flächenfehler", "Korngrenze"], ["3D Volumenfehler", "Ausscheidung"]], "Versetzungen ermöglichen das plastische Gleiten. Die anderen Fehler beeinflussen, wie leicht sich Versetzungen bewegen.", "Baustoffkunde V04");
mc("bsk", B5, "Welcher Gitterfehler trägt die plastische Verformung von Metallen?", ["Die Versetzung", "Die Leerstelle", "Die Pore", "Die Ausscheidung"], "Plastisches Gleiten läuft über wandernde Versetzungen. Ausscheidungen und Korngrenzen bremsen sie – das macht den Werkstoff fester.", "Baustoffkunde V04");
mc("bsk", B5, "Warum lassen sich Metalle plastisch verformen, Keramik aber kaum?", ["In der Metallbindung wechseln Atome einfach ihre Nachbarn, kovalente Bindungen müssten aufbrechen", "Keramik hat keine Kristallstruktur", "Metalle haben mehr Poren", "Keramik ist leichter"], "Das Elektronengas passt sich bei der Verschiebung an, die Bindung bleibt erhalten. Kovalente und ionische Bindungen sind gerichtet – Gleiten kostet viel Energie, der Werkstoff bricht spröde.", "Baustoffkunde V04");
pair("bsk", B5, "Kunststoffe – wie sind die Ketten verbunden?", [["Thermoplast", "Van-der-Waals zwischen den Ketten"], ["Elastomer", "wenige kovalente Vernetzungen"], ["Duroplast", "stark kovalent vernetzt"]], "Thermoplaste kann man deshalb schmelzen und umformen, Duroplaste nicht. Elastomere sind weitmaschig vernetzt und daher gummielastisch.", "Baustoffkunde V04");
mc("bsk", B5, "Wie geht ein amorpher Werkstoff wie Glas vom festen in den flüssigen Zustand über?", ["Allmählich über einen Glasübergangsbereich um T_G", "Schlagartig bei einer festen Schmelztemperatur", "Gar nicht", "Erst über die Gasphase"], "Kristalline Stoffe schmelzen bei einer festen Temperatur T_S mit einem Volumensprung. Amorphe Stoffe erweichen allmählich.", "Baustoffkunde V04");
ord("bsk", B5, "Duktilität: Ordne von spröde nach zäh.", ["Salz (NaCl)", "Keramik (Al₂O₃)", "Intermetallische Phase (Fe₃C)", "Legierung (Stahl)", "Reinmetall (Eisen)"], "Je stärker ionisch oder kovalent die Bindung, desto spröder. Messen kann man das im Kerbschlagbiegeversuch.", "Baustoffkunde V04");
mc("bsk", B5, "Wie wirkt eine höhere Belastungsgeschwindigkeit auf die Duktilität?", ["Sie sinkt – der Werkstoff wird spröder", "Sie steigt", "Sie bleibt gleich", "Nur die Dichte ändert sich"], "Bei schneller Belastung bleibt keine Zeit für plastisches Fließen. Folie 35 im Überblick: Duktilität sinkt mit Belastungsgeschwindigkeit, vorheriger Verformung, Einschlüssen/Korngrenzausscheidungen und steigendem Korngrenzwinkel – sie steigt mit Temperatur und Gefügefeinheit.", "Baustoffkunde V04, Folie 35");
mc("bsk", B5, "Welche äußeren Einflüsse machen einen Werkstoff duktiler?", ["Steigende Temperatur und feineres Gefüge", "Höhere Belastungsgeschwindigkeit und Kälte", "Vorherige Verformung und Einschlüsse", "Ein größerer Korngrenzwinkel"], "Wärme erleichtert das Gleiten der Versetzungen, feine Körner verteilen die Verformung gleichmäßiger. Alle anderen Einflüsse auf Folie 35 senken die Duktilität.", "Baustoffkunde V04, Folie 35");
mc("bsk", B5, "Welche Einflüsse senken die Duktilität laut Folie 35?", ["Belastungsgeschwindigkeit, vorherige Verformung, Einschlüsse und Korngrenzausscheidungen, steigender Korngrenzwinkel", "Steigende Temperatur und feines Gefüge", "Nur die Temperatur", "Gar keine – Duktilität ist eine feste Werkstoffkonstante"], "Merkhilfe: Alles, was Versetzungen behindert oder ihnen keine Zeit lässt, macht spröder. Wärme und feines Gefüge machen zäher.", "Baustoffkunde V04, Folie 35");
mc("bsk", B5, "Wie wirkt ein feineres Gefüge (kleinere Körner) auf die Duktilität?", ["Sie steigt", "Sie sinkt", "Kein Einfluss", "Der Werkstoff wird amorph"], "Feinkörnige Stähle sind zäher und fester zugleich – deshalb steuert man die Korngröße gezielt, z. B. durch Rekristallisationsglühen.", "Baustoffkunde V04, Folie 35");
wf("bsk", B5, "Ein Stahl, der vorher kalt verformt wurde, ist danach duktiler.", false, "Falsch – vorherige Verformung senkt die Duktilität. Ein Teil des Verformungsvermögens ist schon verbraucht, die Versetzungsdichte ist hoch (Kaltverfestigung).", "Baustoffkunde V04, Folie 35");
mc("bsk", B5, "Wie wirken Einschlüsse und Ausscheidungen an den Korngrenzen auf die Duktilität?", ["Sie senken sie – dort entstehen leichter Risse", "Sie erhöhen sie", "Kein Einfluss", "Sie machen den Stahl rostfrei"], "Einschlüsse sind Fehlstellen, an denen sich Spannungen konzentrieren und Risse starten. Ausscheidungen im Korn können dagegen gezielt festigen (Ausscheidungshärtung).", "Baustoffkunde V04, Folie 35");
wf("bsk", B5, "Je größer der Korngrenzwinkel zwischen benachbarten Körnern, desto geringer die Duktilität.", true, "Richtig – steigt der Korngrenzwinkel, sinkt die Duktilität (Folie 35). Stark verdrehte Nachbarkörner lassen Versetzungen schlechter über die Grenze gleiten.", "Baustoffkunde V04, Folie 35");
pair("bsk", B5, "Bruchfläche einer duktilen Stahlprobe – was ist was?", [["Scherlippe", "schräger Rand, entsteht bei der Einschnürdehnung"], ["Wabenbildung", "raue Mitte – Zeichen für duktilen Bruch"]], "So sieht die normalgeglühte CE-45-Probe (Vergütungsstahl) auf Folie 35 aus: Erst schnürt die Probe ein, innen reißt sie unter Wabenbildung, zuletzt schert der Rand schräg ab.", "Baustoffkunde V04, Folie 35");
mc("bsk", B5, "Woran erkennst du auf einer Bruchfläche einen duktilen Bruch?", ["An einer rauen, wabenartigen Oberfläche und einer Scherlippe am Rand", "An einer glatten, glänzenden Fläche ohne Verformung", "An facettenartigen, körnigen Flächen", "An Rost auf der Bruchfläche"], "Waben entstehen, weil das Material vor dem Bruch stark fließt. Spröde Brüche sind flach und facettenartig (transgranular) oder körnig entlang der Korngrenzen (intergranular).", "Baustoffkunde V04, Folie 35");
wf("bsk", B5, "Ein Einkristall aus Kupfer ist fester als vielkristallines Kupfer.", false, "Falsch – der Einkristall ist duktiler und weniger fest. Ohne Korngrenzen können Versetzungen ungehindert durchgleiten; im Vielkristall stauen sie sich an den Korngrenzen.", "Baustoffkunde V04");
mc("bsk", B5, "Wie erhöht man die Festigkeit von Metallen gezielt?", ["Ausscheidungen und feines Korn, die Versetzungen behindern", "Gröbere Körner erzeugen", "Mehr Poren einbauen", "Den Werkstoff erwärmen und dort halten"], "Beispiele: Ausscheidungshärtung bei Aluminium (6060) und mikrolegierten Stählen mit Nb-, V- oder Ti-Carbiden sowie Kornfeinung durch Rekristallisationsglühen.", "Baustoffkunde V04");
mc("bsk", B5, "Was versagt bei Normalbeton zuerst?", ["Der Zementstein, vor der Gesteinskörnung", "Die Gesteinskörnung, vor dem Zementstein", "Die Bewehrung", "Beide gleichzeitig"], "Bei Normalbeton läuft der Bruch um die Körner herum. Bei hochfestem Beton versagen beide Bestandteile, der Riss geht durch die Körner.", "Baustoffkunde V04");
pair("bsk", B5, "Porenarten – ordne zu.", [["geschlossene Pore", "ohne Verbindung nach außen"], ["durchgängige Kapillare", "verbindet Oberflächen, transportiert Wasser"], ["Sackpore", "nur einseitig offen"]], "Porosität p = V_Poren / V_gesamt. Sie beeinflusst Rohdichte, Festigkeit, E-Modul, Dichtheit, Frostwiderstand und Wärmedämmung.", "Baustoffkunde V04");
mc("bsk", B5, "Wann verbessern Poren die Wärmedämmung am meisten?", ["Klein, gleichmäßig verteilt, trocken und nicht verbunden", "Groß und miteinander verbunden", "Mit Wasser gefüllt", "Möglichst wenige, aber sehr große"], "Große Hohlräume übertragen Wärme durch Strahlung, Wasser leitet Wärme viel besser als Luft.", "Baustoffkunde V04");
mc("bsk", B5, "Wie entstehen die Poren im Porenbeton?", ["Aluminiumpulver bildet im alkalischen Frischbeton Wasserstoff", "Sägemehl verbrennt beim Brennen", "Luft wird mit Schaum eingerührt", "Poröse Gesteinskörnung wird zugegeben"], "Die anderen Wege gibt es auch: Ausbrennen bei porosierten Ziegeln, Schaum bei Schaumbeton, poröse Zuschläge bei Leichtbeton.", "Baustoffkunde V04");
mc("bsk", B3, "Was ist eine Sackpore?", ["Eine nur einseitig offene Pore, die beim Füllen der Kapillaren leer bleibt", "Eine Pore ganz ohne Verbindung nach außen", "Eine Kapillare, die zwei Oberflächen verbindet", "Ein feiner Riss, der sich mit Wasser füllt"], "Wasser dringt von der offenen Seite ein, die eingeschlossene Luft kann aber nicht entweichen – deshalb bleibt die Sackpore leer. Die naheliegende Verwechslung ist die geschlossene Pore: Die hat überhaupt keine Öffnung.", "Baustoffkunde V04, Folie 46");
mc("bsk", B3, "Was kennzeichnet eine durchgängige Kapillare?", ["Sie verbindet zwei Oberflächen – Flüssigkeiten und Gase können durch den Baustoff wandern", "Sie ist rundum vom Feststoff eingeschlossen", "Sie ist nur an einer Seite offen", "Sie entsteht nur beim Brennen von Ziegeln"], "Nur sie bildet einen Weg quer durch das Bauteil. Eine Sackpore ist zwar auch offen, endet aber im Inneren – einen Durchgang gibt es dort nicht.", "Baustoffkunde V04, Folie 46");
mc("bsk", B3, "Was trifft auf geschlossene Poren zu?", ["Sie haben keine Verbindung nach außen, nehmen kaum Wasser auf und dämmen", "Sie transportieren Wasser durch das Bauteil", "Sie füllen sich bei Regen als Erste", "Sie zählen nicht zur Porosität"], "Geschlossene Poren sind eingeschlossene Luftbläschen. Zum Porenvolumen V_P gehören sie trotzdem – die Porosität zählt alle Poren, offene wie geschlossene.", "Baustoffkunde V04, Folie 46");
mc("bsk", B3, "Welche Poren bestimmen vor allem, wie leicht Flüssigkeiten und Gase in einen Baustoff eindringen?", ["Die durchgängigen Kapillaren", "Die geschlossenen Poren", "Die Sackporen", "Gar keine – das hängt nur von der Festigkeit ab"], "Durch durchgängige Kapillaren wandern Wasser, Gase und gelöste Schadstoffe wie Chloride ins Innere. Geschlossene Poren liegen isoliert, Sackporen enden blind – beide bieten keinen Weg hindurch.", "Baustoffkunde V04, Folie 46");
mc("bsk", B3, "Ein Baustoff bekommt mehr Poren. Wie ändern sich Rohdichte, Festigkeit und E-Modul?", ["Alle drei sinken", "Alle drei steigen", "Die Rohdichte sinkt, Festigkeit und E-Modul steigen", "Nur die Rohdichte ändert sich"], "Poren tragen nichts: Weniger Feststoff im Querschnitt heißt weniger Masse, weniger Tragfähigkeit und weniger Steifigkeit. Der Gedanke „leichter, aber fester“ passt nicht – besser wird mit mehr Poren nur die Wärmedämmung.", "Baustoffkunde V04, Folie 46");
mc("bsk", B3, "Mehr Poren im Baustoff – welche Größe bleibt gleich?", ["Die Reindichte", "Die Rohdichte", "Die Festigkeit", "Die Wärmeleitfähigkeit"], "Die Reindichte bezieht die Masse nur auf das Feststoffvolumen ohne Poren, sie hängt allein vom Material ab. Die Rohdichte zählt die Poren mit und sinkt deshalb.", "Baustoffkunde V04, Folie 46");
mc("bsk", B3, "Welche Eigenschaft nennt Folie 46 NICHT als abhängig von der Porosität?", ["Die chemische Zusammensetzung des Feststoffs", "Die Volumenstabilität", "Der Korrosions- und Frostwiderstand", "Die Wärmeleitfähigkeit"], "Die Folie nennt Rohdichte, Festigkeit, E-Modul, Widerstand gegen Flüssigkeiten und Gase, Korrosions- und Frostwiderstand, Wärmeleitfähigkeit, Volumenstabilität und Wärmedämmung. Was der Feststoff chemisch ist, ändern Poren nicht.", "Baustoffkunde V04, Folie 46");
pair("bsk", B3, "Porosität p = V_P / V – was bedeutet was?", [["p", "Porosität"], ["V_P", "Porenvolumen"], ["V", "Gesamtvolumen"]], "p wird meist in Vol.-% angegeben. V ist das Gesamtvolumen einschließlich der Poren – nicht nur das Feststoffvolumen.", "Baustoffkunde V04, Folie 46");
wf("bsk", B3, "Mehr Poren machen einen Baustoff immer dauerhafter.", false, "Falsch. Durchgängige Kapillaren lassen Wasser und Schadstoffe hinein – das senkt den Frost- und den Korrosionswiderstand, z. B. für die Bewehrung im Beton. Nur gezielt eingebrachte, geschlossene Luftporen helfen gegen Frost.", "Baustoffkunde V04, Folie 46");
wf("bsk", B3, "Die Volumenstabilität eines Baustoffs hängt von seiner Porosität ab.", true, "Richtig – sie steht auf Folie 46. Wasser, das in offene Poren ein- und wieder austritt, lässt den Baustoff quellen und schwinden.", "Baustoffkunde V04, Folie 46");
bild("bsk", B3, "Welche Porenart ist mit A markiert?", ["Geschlossene Pore", "Durchgängige Kapillare", "Sackpore", "Riss"], "A liegt rundum im Feststoff und hat keine Öffnung. Das Wasser in den Kapillaren erreicht sie nicht.", "Baustoffkunde V04, Folie 46", "poren");
bild("bsk", B3, "Die Kapillaren sind mit Wasser gefüllt. Was ist C und warum bleibt C leer?", ["Sackpore – die eingeschlossene Luft kann nicht entweichen", "Geschlossene Pore – sie hat keine Öffnung", "Durchgängige Kapillare – das Wasser ist schon durchgelaufen", "Sackpore – sie ist zu weit für Kapillarkräfte"], "C ist nach oben offen und endet im Inneren. Wasser würde die Luft einsperren, also bleibt die Pore leer. „Geschlossen“ passt nicht, denn C hat eine Öffnung an der Oberfläche.", "Baustoffkunde V04, Folie 46", "poren");
bild("bsk", B3, "Auf welchem Weg kann Wasser von oben nach unten durch das Bauteil wandern?", ["B", "A", "C", "Auf keinem"], "B ist die durchgängige Kapillare und verbindet Ober- und Unterseite. C ist zwar oben offen, endet aber blind im Inneren.", "Baustoffkunde V04, Folie 46", "poren");
mc("bsk", B5, "Warum verleimt man Sperrholz kreuzweise (0°/90°)?", ["Die Platte wird in ihrer Ebene nahezu richtungsunabhängig und quillt weniger", "Damit sie leichter wird", "Damit sie Wasser besser aufnimmt", "Damit die Fasern parallel liegen"], "Holz allein ist stark anisotrop. Je mehr Faserrichtungen, desto isotroper – solange der Kleber hält.", "Baustoffkunde V04");
THEMEN["bsk|Gefüge und Kristalle"] = "Wie die Atome angeordnet sind, entscheidet über Festigkeit und Zähigkeit: Metalle kristallisieren in dichten Packungen, in denen Versetzungen gleiten können – deshalb sind sie verformbar. Korngrenzen, Ausscheidungen und Poren bremsen oder schwächen das Gefüge und werden gezielt eingesetzt, etwa zum Härten von Stahl oder zum Dämmen.";
/* Bauinformatik – Übung 01 Lösung, Übung 02, Übungshilfen */
mc("binf", I1, "Du benennst main in moin um. Was passiert beim Start?", ["Fehler: Hauptmethode in Klasse HelloWorld nicht gefunden", "Das Programm läuft normal", "Java benennt die Methode automatisch zurück", "Es erscheint „moin“ in der Konsole"], "main ist der Einstiegspunkt für den Java-Interpreter. Ohne public static void main(String[] args) gilt die Klasse nicht als ausführbar.", "Bauinformatik Übung 01 (Lösung)");
pair("binf", I4, "Was bewirkt das + hier?", [["\"Hello \" + \"World\"", "verkettet zwei Strings"], ["(1+2)", "addiert, Ausgabe 3"], ["(\"1+2\")", "gar nichts – es ist Text"], ["\"Zahl: \" + 3", "hängt die Zahl als Text an"]], "Steht ein String im Spiel, verkettet + und wandelt Zahlen in Text um. Zwei Zahlen ohne String werden addiert.", "Bauinformatik Übung 01 (Lösung)");
mc("binf", I3, "Was ergibt \"3f\" + 4?", ["Den String 3f4", "Die Zahl 7.0", "Einen Fehler", "Die Zahl 34"], "\"3f\" steht in Anführungszeichen, ist also ein String – kein float. Mit + wird die 4 angehängt.", "Bauinformatik Übung 02");
mc("binf", I3, "Was ergibt 2 + \"3\"?", ["Den String 23", "Die Zahl 5", "Einen Fehler", "Den String 5"], "Sobald ein Operand ein String ist, verkettet +. Erst 1 + 2 + \"3\" ergäbe 33, weil Java von links rechnet.", "Bauinformatik Übung 02");
mc("binf", I3, "Was gibt System.out.println('H' + \"allo\"); aus?", ["Hallo", "169", "H allo", "Einen Fehler"], "char + String ergibt einen String. Nur 'H' + 'a' (zwei chars) würde als Zahl addiert: 72 + 97 = 169.", "Bauinformatik Übung 02");
pair("binf", I3, "Welchen Datentyp hat das Literal?", [["'x'", "char"], ["3.3f", "float"], ["12L", "long"], ["2d", "double"]], "Ohne Zusatz ist eine Ganzzahl int (7) und eine Kommazahl double (77.0). f, L und d legen den Typ ausdrücklich fest.", "Bauinformatik Übung 02");
pair("binf", I3, "Wie viele Bit hat der Datentyp laut Übungshilfe?", [["boolean", "1 Bit"], ["char", "16 Bit (Unicode)"], ["float", "32 Bit"], ["double", "64 Bit"]], "Ganzzahlen: byte 8, short 16, int 32, long 64 Bit. String ist kein primitiver Datentyp.", "Bauinformatik Übungshilfen");
mc("binf", I3, "Was gibt System.out.println(Float.MIN_VALUE); aus?", ["1.4E-45 – die kleinste positive Zahl", "−3.4028235E38 – die negativste Zahl", "0", "−2147483648"], "Bei float und double ist MIN_VALUE die kleinste positive Zahl. Bei int, long, short und byte ist MIN_VALUE dagegen der negativste Wert, etwa −2147483648 bei int.", "Bauinformatik Übung 02");
mc("binf", I3, "Welcher Datentyp passt am besten zu einer Postleitzahl?", ["String", "int", "double", "boolean"], "Mit einer PLZ rechnet man nicht, und führende Nullen (01067 Dresden) würden bei int verschwinden. Gleiches gilt für Telefonnummern.", "Bauinformatik Übung 02");
mc("binf", I3, "In welchem Datentyp speicherst du das Geschlecht als m, w oder d?", ["char", "String[]", "boolean", "int"], "Ein einzelnes Zeichen passt in char: char geschlecht = 'm'; – mit einfachen Anführungszeichen.", "Bauinformatik Übung 02");
mc("binf", I3, "Welcher Variablenname ist zulässig?", ["zahl_4", "5malX", "e-mail", "int"], "Namen dürfen nicht mit einer Ziffer beginnen, keine Leer- oder Sonderzeichen wie - oder # enthalten und keine Schlüsselwörter sein. Unterstrich und Ziffern im Namen sind erlaubt.", "Bauinformatik Übung 02");
wf("binf", I3, "double3 ist ein zulässiger Variablenname.", true, "Richtig – double allein wäre ein Schlüsselwort, double3 ist es nicht. Ziffern am Ende sind erlaubt.", "Bauinformatik Übung 02");
mc("binf", I3, "Warum ist int i1 = 12345678910; ein Fehler?", ["Die Zahl ist zu groß für int (max. 2 147 483 647)", "int kennt keine Zahlen über 1000", "Es fehlt ein Komma", "Variablen dürfen nicht i1 heißen"], "Der Compiler meldet „integer number too large“. Richtig: long i1 = 12345678910L;", "Bauinformatik Übung 02");
mc("binf", I3, "float f1 = 30.5; meldet einen Fehler. Wie korrigierst du?", ["float f1 = 30.5f;", "float f1 = 30,5;", "float f1 = \"30.5\";", "int f1 = 30.5;"], "30.5 ist ohne Zusatz ein double-Literal (64 Bit). In float (32 Bit) passt es nur mit dem f am Ende – sonst „possible lossy conversion“.", "Bauinformatik Übung 02");
mc("binf", I3, "Was ist an char c1 = \"g\"; falsch?", ["Ein char braucht einfache Anführungszeichen: 'g'", "char darf keine Buchstaben speichern", "Es fehlt ein Semikolon", "Nichts"], "Doppelte Anführungszeichen erzeugen einen String. Und 'Hello' geht gar nicht – ein char hat genau ein Zeichen, dafür nimmt man String.", "Bauinformatik Übung 02");
mc("binf", I3, "int a = 10; double b = a; – was passiert?", ["b ist 10.0, Java wandelt automatisch um", "Fehler, man muss casten", "b ist 10", "b ist 0"], "Implizite Typumwandlung: niederwertige Typen werden automatisch in höherwertige umgewandelt. Umgekehrt (double → int) braucht man einen Cast, z. B. (int) 2.9 ergibt 2.", "Bauinformatik Übungshilfen");
mc("binf", I4, "Was ergibt 20 % 6?", ["2", "3", "3.33", "120"], "% ist der Modulo-Operator: der Rest der ganzzahligen Division. 20 = 3 · 6 + 2.", "Bauinformatik Übungshilfen");
mc("binf", I4, "Was bedeutet i += 1?", ["i = i + 1", "i = 1", "i == 1", "i = i + i"], "Zuweisungsoperatoren kürzen ab: i -= 1, i *= 2 und i /= 2 funktionieren genauso.", "Bauinformatik Übungshilfen");
ord("binf", I3, "Dezimal in Dual umrechnen: Reihenfolge?", ["Zahl durch 2 teilen, Rest notieren", "Das Ergebnis wieder durch 2 teilen, Rest notieren", "Wiederholen, bis das Ergebnis 0 ist", "Die Reste von unten nach oben lesen"], "Beispiel 43: Reste 1, 1, 0, 1, 0, 1 → von unten gelesen 101011. Zurück geht es über die Stellenwerte 1, 2, 4, 8, 16, 32 …", "Bauinformatik Übung 02");
mc("binf", I3, "Welche Dezimalzahl ist 0010 1010?", ["42", "84", "21", "40"], "Die Einsen stehen bei den Stellenwerten 32, 8 und 2: 32 + 8 + 2 = 42.", "Bauinformatik Übung 02");
/* Lösungsweg-Aufgaben */
aufgabe({
 "id": "binf-ue02-dual",
 "f": "binf",
 "t": "Datentypen",
 "titel": "43 ins Dualsystem",
 "s": "Bauinformatik Übung 02, Aufgabe 2a",
 "angabe": "Rechne die Dezimalzahl 43 ins Dualsystem um.",
 "geg": [
  "43 (dezimal)"
 ],
 "ges": "43 als Dualzahl",
 "schritte": [
  {
   "f": "Welches Verfahren nimmst du für Dezimal → Dual?",
   "o": [
    [
     "Fortlaufend durch 2 teilen und die Reste notieren",
     "Das Restverfahren liefert die Dualstellen von hinten nach vorn."
    ],
    [
     "Durch 10 teilen",
     "Teilen durch 10 liefert die Dezimalziffern, nicht die Dualziffern."
    ],
    [
     "Die Ziffern 4 und 3 einzeln umrechnen und aneinanderhängen",
     "4 = 100 und 3 = 11 ergäbe 10011 = 19 – falsch, die Stellen gehören zusammen."
    ],
    [
     "Die Zahl quadrieren",
     "Quadrieren hat mit dem Zahlensystem nichts zu tun."
    ]
   ],
   "r": "43 : 2 = 21 Rest 1"
  },
  {
   "f": "Wie geht es mit 21 weiter?",
   "o": [
    [
     "Wieder durch 2 teilen und den Rest notieren",
     "Du teilst immer das letzte Ergebnis weiter durch 2."
    ],
    [
     "21 direkt dual aufschreiben",
     "Das wäre ein zweites Umrechnen – das Verfahren läuft einfach weiter."
    ],
    [
     "Den Rest 1 durch 2 teilen",
     "Reste werden nur notiert, nicht weiter geteilt."
    ],
    [
     "Aufhören, weil ein Rest 1 kam",
     "Schluss ist erst, wenn das Ergebnis 0 ist."
    ]
   ],
   "r": "21 : 2 = 10 Rest 1\n10 : 2 = 5 Rest 0\n5 : 2 = 2 Rest 1\n2 : 2 = 1 Rest 0\n1 : 2 = 0 Rest 1"
  },
  {
   "f": "Das Ergebnis ist 0. Wie liest du die Dualzahl ab?",
   "o": [
    [
     "Die Reste von unten nach oben",
     "Der letzte Rest ist die höchste Stelle. Von unten gelesen: 1, 0, 1, 0, 1, 1."
    ],
    [
     "Die Reste von oben nach unten",
     "Dann stünde die niedrigste Stelle vorn – das ergäbe 110101 = 53."
    ],
    [
     "Nur die Einsen zählen",
     "Die Nullen sind Stellen und gehören dazu."
    ],
    [
     "Die Ergebnisse statt der Reste",
     "Die Dualziffern sind die Reste, nicht die Quotienten."
    ]
   ],
   "r": "43 = 101011 (als Byte: 0010 1011)"
  },
  {
   "f": "Wie prüfst du das Ergebnis?",
   "o": [
    [
     "Stellenwerte der Einsen addieren: 32 + 8 + 2 + 1",
     "Rückrechnung über die Stellenwerte 32, 16, 8, 4, 2, 1 – passt sie, stimmt die Umrechnung."
    ],
    [
     "Die Dualzahl durch 2 teilen",
     "Das prüft nichts."
    ],
    [
     "Die Einsen zählen: vier Einsen = 4",
     "Die Anzahl der Einsen ist nicht der Wert."
    ],
    [
     "Gar nicht, das Verfahren ist sicher",
     "Ein Lesefehler (oben/unten) passiert schnell – die Probe kostet Sekunden."
    ]
   ],
   "r": "32 + 8 + 2 + 1 = 43 ✓"
  }
 ],
 "fazit": "Dezimal → Dual: fortlaufend durch 2 teilen, Reste von unten nach oben lesen. Dual → Dezimal: Stellenwerte der Einsen addieren."
});
aufgabe({
 "id": "binf-ue02-a12",
 "f": "binf",
 "t": "Datentypen",
 "titel": "Fehlerhafte Initialisierungen",
 "s": "Bauinformatik Übung 02, Aufgabe 12",
 "angabe": "Prüfe die Zeilen nacheinander. Welche sind falsch, und wie korrigierst du sie?",
 "geg": [
  "int i1 = 12345678910;",
  "float f1 = 30.5;",
  "boolean b1 = 1;",
  "char c1 = \"g\";",
  "int i2 = 2.3;",
  "char c2 = 'Hello';"
 ],
 "ges": "Fehler und Korrekturen",
 "schritte": [
  {
   "f": "int i1 = 12345678910; – was ist das Problem?",
   "o": [
    [
     "Die Zahl passt nicht in int, man braucht long mit L",
     "int reicht nur bis 2 147 483 647. Korrektur: long i1 = 12345678910L;"
    ],
    [
     "Nichts, int kann jede Ganzzahl speichern",
     "int hat 32 Bit, der Bereich ist begrenzt."
    ],
    [
     "Ein Komma fehlt",
     "Ganzzahlen haben kein Komma."
    ],
    [
     "Der Name i1 ist unzulässig",
     "i1 ist ein gültiger Name."
    ]
   ],
   "r": "long i1 = 12345678910L;"
  },
  {
   "f": "float f1 = 30.5; – was ist das Problem?",
   "o": [
    [
     "30.5 ist ein double-Literal, für float braucht es ein f",
     "Ohne f ist jede Kommazahl double. Korrektur: float f1 = 30.5f;"
    ],
    [
     "float kann keine Kommazahlen speichern",
     "float ist gerade ein Kommazahl-Typ."
    ],
    [
     "Es muss 30,5 heißen",
     "Java schreibt Kommazahlen mit Punkt."
    ],
    [
     "Nichts",
     "Der Compiler meldet „possible lossy conversion from double to float“."
    ]
   ],
   "r": "float f1 = 30.5f;"
  },
  {
   "f": "boolean b1 = 1; – was ist das Problem?",
   "o": [
    [
     "boolean kennt nur true und false",
     "Anders als in C ist 1 in Java kein Wahrheitswert. Korrektur: boolean b1 = true;"
    ],
    [
     "Es muss 1.0 heißen",
     "Auch 1.0 ist kein Wahrheitswert."
    ],
    [
     "boolean braucht Anführungszeichen",
     "\"true\" wäre ein String."
    ],
    [
     "Nichts",
     "Der Compiler meldet „int cannot be converted to boolean“."
    ]
   ],
   "r": "boolean b1 = true;"
  },
  {
   "f": "char c1 = \"g\"; und char c2 = 'Hello'; – was gilt?",
   "o": [
    [
     "char braucht einfache Anführungszeichen und genau ein Zeichen",
     "c1 → 'g'. 'Hello' sind fünf Zeichen – das geht nur als String: String c2 = \"Hello\";"
    ],
    [
     "Beide sind richtig",
     "\"g\" ist ein String und 'Hello' kein gültiges char-Literal."
    ],
    [
     "Nur c2 ist falsch",
     "Auch \"g\" ist falsch: doppelte Anführungszeichen erzeugen einen String."
    ],
    [
     "char speichert nur Zahlen",
     "char speichert ein Unicode-Zeichen."
    ]
   ],
   "r": "char c1 = 'g';  String c2 = \"Hello\";"
  },
  {
   "f": "int i2 = 2.3; – wie korrigierst du, damit der Wert 2.3 erhalten bleibt?",
   "o": [
    [
     "double i2 = 2.3;",
     "Kommazahlen brauchen double oder float. Ein Cast (int) 2.3 würde 2 ergeben – der Wert ginge verloren."
    ],
    [
     "int i2 = (int) 2.3;",
     "Das kompiliert, speichert aber 2 statt 2.3."
    ],
    [
     "int i2 = 2,3;",
     "Mit Komma ist es gar keine gültige Zahl."
    ],
    [
     "int i2 = \"2.3\";",
     "Ein String passt nicht in int."
    ]
   ],
   "r": "double i2 = 2.3;"
  }
 ],
 "fazit": "Ganzzahlen ohne Zusatz sind int, Kommazahlen double. L, f und d legen den Typ fest. char: einfache Anführungszeichen, genau ein Zeichen. boolean: nur true oder false."
});
/* Patch-Warteschlange · Durchgang aller Vorlesungen und Übungen (Lücken) · erstellt 02.11.2026
   Hydromechanik Ü01/Ü03/Ü04/Ü05 · Baukonstruktion Ü01/Ü02 · Physik Blatt 1/3 · Statistik Ü1 · DAP L03 · Baustoffkunde Umdruck
   Braucht die Skizzen vt, kruemmer, behaelter aus index.html ab Version 1.5 */
/* Hydromechanik */
mc("hydro", H1, "Ein Schauglas zeigt den Wasserstand an. Wie verhinderst du einen zu großen Anzeigefehler durch Kapillarität?", ["Den Rohrdurchmesser groß genug wählen: D ≥ 4σ/(ρ·g·f)", "Das Röhrchen möglichst dünn machen", "Ein längeres Röhrchen nehmen", "Das Wasser erwärmen"], "Die kapillare Steighöhe ist h = 4σ/(ρ·g·d) – je dicker das Rohr, desto kleiner der Fehler. In Übung 01 reichen für f = 5 mm rund 6 mm Durchmesser.", "Hydromechanik Übung 01, Aufgabe 1.4");
mc("hydro", H2, "Ein Becken ist 2 m tief mit Quecksilber statt Wasser gefüllt. Wie groß ist der Bodendruck?", ["Rund 13,6-mal so groß wie bei Wasser", "Genauso groß", "Halb so groß", "Doppelt so groß"], "p = ρ·g·h: Bei gleicher Tiefe zählt nur die Dichte. Wasser 19,6 kN/m², Quecksilber (13 600 kg/m³) 266,8 kN/m².", "Hydromechanik Übung 01, Aufgabe 2.1");
mc("hydro", H2, "Welchen absoluten Druck hat die Oberfläche eines offenen Beckens?", ["Etwa 100 kPa, den Luftdruck", "0 kPa", "Etwa 10 kPa", "Das hängt von der Tiefe ab"], "Absolut: p_abs = p_atm + ρ·g·z mit p_atm ≈ 100 kPa ≈ 10 m Wassersäule. Der Relativdruck ist an der Oberfläche dagegen 0.", "Hydromechanik Übung 01");
pair("hydro", H5, "Welches Messrohr zeigt welche Linie?", [["Piezometerrohr", "Drucklinie (Lagehöhe + Druckhöhe)"], ["Pitotrohr", "Energielinie (zusätzlich v²/2g)"]], "Das Pitotrohr ist zur Strömung hin geöffnet und staut sie auf – deshalb zeigt es zusätzlich die Geschwindigkeitshöhe. Der Höhenunterschied der beiden Messrohre ist v²/(2g).", "Hydromechanik Übung 05, Aufgabe 5.3/5.4");
mc("hydro", H5, "Pitot- und Piezometerrohr stehen am selben Querschnitt. Was liest du am Höhenunterschied ab?", ["Die Geschwindigkeitshöhe v²/(2g)", "Den Luftdruck", "Die Lagehöhe z", "Den Durchfluss direkt"], "Energiehöhe minus Druckhöhe ergibt v²/(2g). Daraus folgt v = √(2g·Δh) – so misst man Strömungsgeschwindigkeiten.", "Hydromechanik Übung 05");
mc("hydro", H4, "Zwei Wasserhähne (d₁ = 2 cm, d₂ = 1 cm) fließen mit gleicher Geschwindigkeit. Wie teilt sich der Durchfluss auf?", ["4 : 1 – wie die Querschnittsflächen", "2 : 1 – wie die Durchmesser", "1 : 1", "1 : 4"], "Q = v·A und A ~ d². Doppelter Durchmesser heißt vierfache Fläche, also vierfacher Durchfluss.", "Hydromechanik Übung 03, Aufgabe 3.2");
mc("hydro", H5, "Ein Venturirohr verengt sich von d₁ auf d₂ = d₁/3. Wie ändert sich die Geschwindigkeit?", ["Sie wird 9-mal so groß", "Sie wird 3-mal so groß", "Sie bleibt gleich", "Sie wird 3-mal kleiner"], "Kontinuität: v₂/v₁ = A₁/A₂ = (d₁/d₂)² = 9. Den Druckunterschied nutzt man zur Durchflussmessung.", "Hydromechanik Übung 03, Aufgabe 3.7");
mc("hydro", H6, "Wie lautet die Stützkraft in einer Druckrohrströmung?", ["S = p·A + ρ·Q·v", "S = ρ·g·b·h²/2 + ρ·Q·v", "S = ρ·Q·v allein", "S = p·A allein"], "Im Rohr wirkt der Innendruck auf den Querschnitt. Beim Freispiegel tritt an seine Stelle die hydrostatische Kraft ρ·g·b·h²/2, beim freien Strahl (Luftdruck) bleibt nur ρ·Q·v.", "Hydromechanik Übung 05");
mc("hydro", H6, "In welche Richtung drückt das Wasser einen horizontalen Rohrkrümmer?", ["Nach außen, gegen die Umlenkung und in Zuflussrichtung", "Nach innen, zur Krümmungsmitte", "Gar nicht, Druck und Impuls heben sich auf", "Nur senkrecht nach unten"], "Das Wasser muss umgelenkt werden – der Krümmer übt die Kraft dafür aus, und das Wasser drückt mit gleich großer Gegenkraft nach außen. Deshalb braucht man Widerlager.", "Hydromechanik Übung 04, Aufgabe 4.1");
mc("hydro", H7, "Wo breiten sich Störungen (z. B. Wellen) auch stromaufwärts aus?", ["Beim Strömen (Fr < 1)", "Beim Schießen (Fr > 1)", "Nur im Grenzzustand", "Nirgends"], "Beim Strömen ist das Wasser langsamer als eine Oberflächenwelle, die Welle kommt also gegen die Strömung voran. Beim Schießen wird sie mitgerissen.", "Hydromechanik Übung 05");
mc("hydro", H7, "Über einer Sohlschwelle herrscht Grenzzustand. Wie bekommst du daraus den spezifischen Abfluss q?", ["q = √(g·h_gr³)", "q = g·h_gr", "q = h_gr / g", "q = √(2g·h_gr)"], "Aus h_gr = ∛(q²/g) folgt umgekehrt q = √(g·h_gr³). Eine Schwelle mit Grenzzustand ist deshalb ein einfaches Messwehr.", "Hydromechanik Übung 05, Aufgabe 5.6");
/* Baukonstruktion */
mc("bauko", K2, "Wie rechnest du eine Dachlattung (Linienbauteil) in eine Flächenlast um?", ["γ · b · h · Anzahl Lagen / Lattenabstand", "γ · b · h", "γ · Lattenabstand", "Lattung lässt man immer weg"], "Ü02: 4,2 kN/m³ · 0,048 m · 0,024 m · 3 / 0,65 m ≈ 0,02 kN/m². Klein, aber das Verfahren ist das gleiche wie bei Balken.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K2, "Wie kommst du von der Flächenlast in kN/m² zur Last auf einem Sparren in kN/m?", ["Mal Lasteinzugsbreite (Sparrenabstand)", "Mal Sparrenlänge", "Durch den Sparrenabstand", "Mal Dachneigung"], "Ü02: 1,05 kN/m² · 0,65 m + Eigengewicht des Sparrens 0,084 kN/m = 0,77 kN/m.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K5, "Welcher Formbeiwert μ₁ gilt für 30° < α < 60°?", ["μ₁ = 0,8 · (60° − α) / 30°", "μ₁ = 0,8", "μ₁ = 0", "μ₁ = 1,6"], "Bis 30° ist μ₁ = 0,8, ab 60° bleibt kein Schnee liegen (μ₁ = 0). Dazwischen linear: bei 35° ergibt das 0,67.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K5, "Was ist der Schneeüberhang an der Traufe?", ["Eine Linienlast S_e = k · s²/γ entlang der Traufe", "Die Schneelast auf der Leeseite", "Eine zusätzliche Flächenlast auf dem ganzen Dach", "Schnee, der vom Dach rutscht"], "Er wirkt nur am Dachrand. Pro Sparren wird er zur kleinen Einzellast am Sparrenende (Ü02: 0,03 kN).", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K5, "Wie groß ist die Windlast pro Sparren?", ["w = c_pe · q_p · Lasteinzugsbreite", "w = q_p allein", "w = c_pe · Firsthöhe", "w = q_p / c_pe"], "q_p kommt aus Windzone und Höhe, c_pe aus Bereich und Dachneigung. Der Wind wirkt senkrecht zur Dachfläche.", "Baukonstruktion Übung 02, Beispiel 4");
pair("bauko", K5, "Satteldach 35°, Ü02: welcher Außendruckbeiwert c_pe,10?", [["Dachbereich H", "+0,47 (Druck)"], ["Dachbereich I", "−0,33 (Sog)"], ["Dachbereich J", "−0,43 (Sog)"], ["Wand D (Luv)", "+0,8 (Druck)"], ["Wand E (Lee)", "−0,5 (Sog)"]], "Für 35° wird zwischen den Tabellenwerten für 30° und 45° interpoliert. Die Wand auf der Windseite bekommt Druck, die Leeseite Sog.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K2, "Welche Nutzlast gilt für eine Holzbalkendecke zwischen Wohnräumen?", ["Kategorie A3: q_k = 2,0 kN/m², zusätzlich Q_k = 1,0 kN", "Kategorie A1: q_k = 1,0 kN/m²", "Kategorie B2: q_k = 3,0 kN/m²", "Kategorie H: Q_k = 1,0 kN"], "Holzbalkendecken haben keine ausreichende Querverteilung – deshalb A3 mit 2,0 kN/m² und einer Einzellast an der ungünstigsten Stelle.", "Baukonstruktion Übung 01, Beispiel 3");
mc("bauko", K2, "Was bedeutet „ausreichende Querverteilung“ einer Decke?", ["Lasten verteilen sich quer zur Tragrichtung auf benachbarte Bereiche", "Die Decke hat viele Querbalken", "Die Decke ist quer bewehrt", "Die Last wirkt quer zum Bauteil"], "Massivdecken verteilen Lasten in die Breite. Bei Holzbalkendecken trägt jeder Balken für sich – benachbarte Balken helfen nicht mit.", "Baukonstruktion Übung 01, Exkurs");
mc("bauko", K2, "Darf die Nutzlast einer Holzbalkendecke für die stützenden Bauteile darunter abgemindert werden?", ["Ja, um 0,5 kN/m²", "Nein, nie", "Ja, um die Hälfte", "Nur bei Dächern"], "Für den Balken selbst gilt 2,0 kN/m², für Unterzug oder Wand darunter nur 1,5 kN/m² (Ü01: 1,92 → 1,62 kN/m pro Balken).", "Baukonstruktion Übung 01, Beispiel 3");
mc("bauko", K2, "Welche Nutzlast gilt für Büroflächen?", ["Kategorie B1: 2,0 kN/m²", "Kategorie A2: 1,5 kN/m²", "Kategorie C5: 5,0 kN/m²", "Kategorie H: 1,0 kN"], "So in Ü01, Beispiel 2 (Unterzug unter einer Bürodecke).", "Baukonstruktion Übung 01, Beispiel 2");
mc("bauko", K3, "Durchlaufträger über mehrere Felder: Welches Auflager ist meist maßgebend?", ["Das mittlere – es hat den größten Tafelwert", "Das linke Endauflager", "Alle sind gleich", "Das rechte Endauflager"], "Beim Zweifeldträger ist B = 1,25 · q · l, die Endauflager nur 0,375 · q · l.", "Baukonstruktion Übung 01, Beispiel 2");
/* Physik */
pair("phys", P1, "US-Einheit – wie viel ist das?", [["1 inch", "25,4 mm"], ["1 foot", "0,3048 m"], ["1 acre", "4046,856 m²"]], "Die Faktoren stehen in der PTB-Broschüre „Die gesetzlichen Einheiten“. Beim Umrechnen multiplizierst du mit Brüchen, die genau 1 ergeben, z. B. 25,4 mm / 1 in.", "Physik Blatt 1, Aufgabe 1");
mc("phys", P1, "Du rechnest 20 km² in m² um. Was ist richtig?", ["20 · (1000 m)² = 2 · 10⁷ m²", "20 · 1000 m² = 2 · 10⁴ m²", "20 · 100 m² = 2000 m²", "20 · 10⁹ m²"], "Bei Flächen wird der Umrechnungsfaktor quadriert, bei Volumen hoch drei. Das ist der häufigste Fehler beim Umrechnen.", "Physik Blatt 1, Aufgabe 1");
mc("phys", P2, "Ein Auto fährt je die halbe ZEIT mit v₁ und v₂. Wie groß ist die mittlere Geschwindigkeit?", ["(v₁ + v₂) / 2", "2v₁v₂ / (v₁ + v₂)", "v₁ · v₂", "√(v₁ · v₂)"], "Bei gleichen Zeiten zählt das arithmetische Mittel. Bei gleichen STRECKEN dagegen das harmonische: 2v₁v₂/(v₁ + v₂) – dann ist man länger mit der kleinen Geschwindigkeit unterwegs.", "Physik Blatt 1, Aufgabe 2b");
mc("phys", P2, "x(t) = At − Bt² + Ct³. Wie bekommst du die Beschleunigung?", ["Zweimal ableiten: a(t) = −2B + 6Ct", "Einmal ableiten: a(t) = A − 2Bt + 3Ct²", "Integrieren", "x(t) durch t² teilen"], "Erste Ableitung ist die Geschwindigkeit, zweite die Beschleunigung. Danach setzt man t₁ ein.", "Physik Blatt 1, Aufgabe 3");
mc("phys", P4, "Ein Ventilator macht N Umdrehungen in der Zeit Δt. Wie groß ist die Umlaufzeit?", ["T = Δt / N", "T = N / Δt", "T = N · Δt", "T = 2π · N"], "Eine Umdrehung dauert den N-ten Teil der Zeit. Damit ist v = 2πr/T = 2πrN/Δt.", "Physik Blatt 3, Aufgabe 3");
mc("phys", P4, "Wann erreicht ein Teilchen mit v₀ₓ > 0 und aₓ < 0 seine größte x-Koordinate?", ["Wenn v_x = 0 ist, also bei t = −v₀ₓ/aₓ", "Bei t = 0", "Wenn a = 0 ist", "Nie, x wächst immer weiter"], "Solange v_x > 0 ist, wächst x. Die Bremsbeschleunigung aₓ dreht die Bewegung bei v_x = 0 um.", "Physik Blatt 3, Aufgabe 2");
/* Angewandte Statistik */
mc("stat", S2, "A ist eine (2, 3)-Matrix. Welche Ordnung hat A′A?", ["(3, 3)", "(2, 2)", "(2, 3)", "(3, 2)"], "A′ ist (3, 2), also (3, 2)·(2, 3) = (3, 3). AA′ wäre dagegen (2, 2).", "Angewandte Statistik Übung 1, Aufgabe 2");
mc("stat", S2, "Warum ist A′A immer symmetrisch?", ["Weil (A′A)′ = A′(A′)′ = A′A ist", "Weil A quadratisch ist", "Weil die Determinante 0 ist", "Das gilt nur für Diagonalmatrizen"], "Eintrag b_ij ist das Skalarprodukt von Spalte i und Spalte j – und das ist dasselbe wie für j und i.", "Angewandte Statistik Übung 1, Aufgabe 2");
wf("stat", S2, "Für eine (2, 3)-Matrix A ist A′A nie invertierbar.", true, "Richtig – rg(A′A) = rg(A) ≤ 2, aber A′A ist 3×3. Ohne vollen Rang ist die Determinante 0.", "Angewandte Statistik Übung 1, Aufgabe 2");
mc("stat", S2, "Womit prüfst du schnell, ob AB und BA richtig gerechnet sind?", ["Die Spur: sp(AB) = sp(BA)", "Die Determinante: det(AB) = 0", "Die Summe aller Einträge muss gleich sein", "AB = BA muss gelten"], "Die Diagonalsummen stimmen immer überein, auch wenn AB ≠ BA ist. In Übung 1: 29 + 18 + 5 = 52 = 11 + 16 + 25.", "Angewandte Statistik Übung 1, Aufgabe 1");
/* Data Analysis for Planning */
mc("dap", D4, "Welchen Mittelwert und welche Varianz hat die Gleichverteilung u[a, b]?", ["μ = (a + b)/2, σ² = (b − a)²/12", "μ = b − a, σ² = (b − a)²", "μ = (a + b)/2, σ² = (b − a)/2", "μ = 0, σ² = 1"], "Der Mittelwert liegt genau in der Mitte. Die 12 im Nenner kommt aus dem Integral über die Rechteckdichte.", "DAP L03");
mc("dap", D4, "Wie sieht die Verteilungsfunktion (CDF) einer diskreten Verteilung, z. B. beim Würfeln, aus?", ["Wie eine Treppe", "Wie eine Glocke", "Wie eine Gerade durch den Ursprung", "Wie ein Rechteck"], "Bei jedem möglichen Wert springt sie um dessen Wahrscheinlichkeit, beim Würfel um je 1/6, bis sie 1 erreicht.", "DAP L03");
mc("dap", D4, "Welcher Anteil liegt bei einer Normalverteilung zwischen μ − 3σ und μ + 3σ?", ["99,7 %", "95,5 %", "68,3 %", "100 %"], "68,3 % (±1σ), 95,5 % (±2σ), 99,7 % (±3σ). 100 % erreicht die Normalverteilung nie.", "DAP L03");
/* Baustoffkunde – Umdruck Grundlagen */
pair("bsk", B5, "Homogen oder heterogen, isotrop oder anisotrop?", [["Holz", "homogen, anisotrop"], ["Eisen", "homogen, isotrop"], ["GFK", "heterogen, anisotrop"], ["Beton", "heterogen, isotrop"]], "Heterogen heißt: aus verschiedenen Phasen. Anisotrop heißt: richtungsabhängig. Beton hat viele Phasen, verhält sich im Ganzen aber in alle Richtungen gleich.", "Umdruck Baustoffkunde 1, Kap. 6.1.1");
pair("bsk", B2, "Kriechen oder Relaxation?", [["Kriechen", "Verformung wächst unter konstanter Last"], ["Relaxation", "Spannung sinkt bei konstanter Verformung"]], "Beides hängt von Werkstoff, Spannung, Dauer und Temperatur ab. Kriechen kann zur Ruhe kommen oder zum Versagen führen.", "Umdruck Baustoffkunde 1, Kap. 4.4");
pair("bsk", B3, "Welche Korrosion trifft welchen Baustoff?", [["Metalle", "elektrolytisch: Feuchte, Sauerstoff, Chloride"], ["Beton, Mauerwerk", "chemisch und Frost, z. B. Sulfate"], ["Kunststoffe", "Alterung durch UV-Strahlung"], ["Holz", "biologisch: Pilze, Bakterien, Insekten"]], "Korrosion ist jede Zerstörung durch nicht-mechanischen Angriff. Ob es dazu kommt, hängt von der Angriffs- und der Widerstandsseite ab.", "Umdruck Baustoffkunde 1, Kap. 5.1");
pair("bsk", B3, "Baustoffklasse nach Brennbarkeit – ordne zu.", [["A1", "nicht brennbar, z. B. Beton, Stahl, Glas"], ["B1", "schwer entflammbar, z. B. Holzwolle-Leichtbauplatten"], ["B2", "normal entflammbar, z. B. Holz dicker als 2 mm"], ["B3", "leicht entflammbar, z. B. Papier, Stroh"]], "Baustoffe teilt man nach ihrer Brennbarkeit ein, Bauteile nach ihrem Feuerwiderstand (F 30 bis F 180).", "Umdruck Baustoffkunde 1, Kap. 5.2");
mc("bsk", B3, "Was bedeutet die Feuerwiderstandsklasse F 90 für ein Bauteil?", ["Es hält einem Brand mindestens 90 Minuten stand", "Es ist bis 90 °C beständig", "Es verbrennt in 90 Sekunden", "Es besteht zu 90 % aus nicht brennbarem Material"], "Die Zahl ist die Feuerwiderstandsdauer in Minuten, von F 30 bis F 180.", "Umdruck Baustoffkunde 1, Kap. 5.2");
mc("bsk", B2, "Wie verändert sich die Festigkeit von Holz mit steigendem Wassergehalt?", ["Sie sinkt deutlich", "Sie steigt", "Sie bleibt gleich", "Sie steigt erst und fällt dann auf null"], "Deshalb gibt es im Holzbau Nutzungsklassen und kmod-Werte für die Feuchte.", "Umdruck Baustoffkunde 1, Kap. 3.4");
mc("bsk", B2, "Was passiert mit der Festigkeit von Beton im Brandfall?", ["Sie kann nahezu auf null sinken", "Sie steigt", "Sie bleibt bis 1000 °C gleich", "Beton schmilzt bei 100 °C"], "Im üblichen Gebrauchsbereich sind Beton, Stahl und Holz temperaturunabhängig. Bei Brandtemperaturen sind nur keramische Werkstoffe weitgehend unempfindlich.", "Umdruck Baustoffkunde 1, Kap. 3.3");
wf("bsk", B2, "Manche Baustoffe, etwa feuchter Beton, werden bei Temperaturen deutlich unter null fester.", true, "Richtig – laut Umdruck steigt die Festigkeit bei tiefen Temperaturen teils erheblich. Baustahl wird dafür spröder (Kerbschlagversuch).", "Umdruck Baustoffkunde 1, Kap. 3.3");
/* Lösungsweg-Aufgaben */
aufgabe({
 "id": "hydro-ue01-a11",
 "f": "hydro",
 "t": "Eigenschaften des Wassers",
 "titel": "Dichte einer Flüssigkeit im Kegel",
 "s": "Hydromechanik Übung 01, Aufgabe 1.1",
 "angabe": "Ein kegelförmiges Gefäß ist mit einer unbekannten Flüssigkeit gefüllt. Es fasst insgesamt 4 kg.",
 "geg": [
  "h = 45 cm",
  "r = 10 cm",
  "m = 4 kg"
 ],
 "ges": "Dichte ρ_Fl",
 "schritte": [
  {
   "f": "Gesucht ist eine Dichte. Welche Beziehung nutzt du?",
   "o": [
    [
     "ρ = m / V",
     "Dichte ist Masse pro Volumen – die Masse ist gegeben, das Volumen folgt aus der Geometrie."
    ],
    [
     "ρ = F / A",
     "Kraft pro Fläche ist ein Druck, keine Dichte."
    ],
    [
     "ρ = m · V",
     "Die Einheit wäre kg·m³ – keine Dichte."
    ],
    [
     "ρ = 1000 kg/m³, weil es Wasser ist",
     "Die Flüssigkeit ist unbekannt – genau das ist gesucht."
    ]
   ]
  },
  {
   "f": "Wie bekommst du das Volumen des Kegels?",
   "o": [
    [
     "V = π · r² · h / 3",
     "Ein Kegel hat ein Drittel des Volumens des Zylinders mit gleicher Grundfläche und Höhe."
    ],
    [
     "V = π · r² · h",
     "Das ist der Zylinder – dreimal zu groß."
    ],
    [
     "V = 4/3 · π · r³",
     "Das ist die Kugel."
    ],
    [
     "V = r · h / 2",
     "Das ist die Fläche eines Dreiecks, kein Volumen."
    ]
   ],
   "r": "V = π · 0,10² · 0,45 / 3 = 4,71 · 10⁻³ m³ = 4,71 l"
  },
  {
   "f": "Worauf achtest du beim Einsetzen?",
   "o": [
    [
     "Alles in m und kg umrechnen",
     "Mit cm gerechnet käme ein Volumen in cm³ heraus, und die Dichte wäre um den Faktor 10⁶ falsch."
    ],
    [
     "Die Masse in Tonnen angeben",
     "Dann stimmt die Einheit kg/m³ nicht mehr."
    ],
    [
     "Den Radius verdoppeln",
     "Der Durchmesser wäre 20 cm, in die Formel gehört aber der Radius."
    ],
    [
     "Nichts, die Einheiten kürzen sich",
     "Sie kürzen sich nur, wenn sie zusammenpassen."
    ]
   ]
  },
  {
   "f": "Was kommt heraus – und ist das plausibel?",
   "o": [
    [
     "Rund 849 kg/m³ – leichter als Wasser, etwa wie ein Öl",
     "Werte zwischen 700 und 1000 kg/m³ sind typisch für Öle oder Alkohole."
    ],
    [
     "Rund 0,85 kg/m³",
     "So leicht ist nur ein Gas – hier wurde ein Faktor 1000 vergessen."
    ],
    [
     "Rund 8490 kg/m³",
     "So schwer wie Stahl – das passt nicht zu 4 kg in 4,7 Litern."
    ],
    [
     "Genau 1000 kg/m³",
     "4 kg in 4,71 l sind weniger als Wasser."
    ]
   ],
   "r": "ρ = 4 kg / 4,71 · 10⁻³ m³ ≈ 849 kg/m³"
  }
 ],
 "fazit": "Dichte = Masse / Volumen. Erst die Geometrie (Kegel: π r² h / 3), dann konsequent in m und kg rechnen und das Ergebnis auf Plausibilität prüfen."
});
aufgabe({
 "id": "hydro-ue01-a14",
 "f": "hydro",
 "t": "Eigenschaften des Wassers",
 "titel": "Mindestdurchmesser eines Schauglases",
 "s": "Hydromechanik Übung 01, Aufgabe 1.4",
 "v": "kapillar",
 "angabe": "Ein seitliches Glasröhrchen zeigt den Wasserstand in einem Behälter an. Durch Kapillarität steht das Wasser darin höher als im Behälter. Der Anzeigefehler soll kleiner als f sein.",
 "geg": [
  "f = 5 mm",
  "σ = 0,073 N/m (20 °C)",
  "ρ_W = 1000 kg/m³",
  "vollständige Benetzung"
 ],
 "ges": "Mindestdurchmesser D",
 "schritte": [
  {
   "f": "Woher kommt der Anzeigefehler?",
   "o": [
    [
     "Vom kapillaren Aufstieg im dünnen Röhrchen",
     "Die Oberflächenspannung zieht das Wasser an der Glaswand hoch."
    ],
    [
     "Vom Luftdruck über dem Röhrchen",
     "Der Luftdruck wirkt auf Behälter und Röhrchen gleich."
    ],
    [
     "Von der Viskosität",
     "Viskosität bremst Bewegung, im Ruhezustand spielt sie keine Rolle."
    ],
    [
     "Von der Temperaturdehnung des Glases",
     "Die ist vernachlässigbar klein."
    ]
   ]
  },
  {
   "f": "Welches Gleichgewicht setzt du für die Steighöhe an?",
   "o": [
    [
     "Kapillarkraft am Umfang = Gewicht der gehobenen Wassersäule",
     "σ · π · D = ρ · g · h · π D²/4 – daraus folgt h = 4σ / (ρ · g · D)."
    ],
    [
     "Druck oben = Druck unten",
     "Damit fehlt die Kraft aus der Oberflächenspannung."
    ],
    [
     "Bernoulli zwischen Behälter und Röhrchen",
     "Es strömt nichts – Bernoulli hilft hier nicht."
    ],
    [
     "Auftrieb = Gewicht",
     "Im Röhrchen schwimmt nichts."
    ]
   ],
   "r": "h_kap = 4σ / (ρ · g · D)"
  },
  {
   "f": "Wie bekommst du daraus den Mindestdurchmesser?",
   "o": [
    [
     "h_kap ≤ f setzen und nach D auflösen",
     "D ≥ 4σ / (ρ · g · f): Je kleiner der erlaubte Fehler, desto dicker muss das Röhrchen sein."
    ],
    [
     "D = f setzen",
     "Fehler und Durchmesser sind verschiedene Größen."
    ],
    [
     "D = h_kap",
     "Die Steighöhe ist kein Durchmesser."
    ],
    [
     "Den Durchmesser möglichst klein wählen",
     "Dünne Röhrchen machen den Fehler größer."
    ]
   ],
   "r": "D ≥ 4 · 0,073 / (1000 · 9,81 · 0,005) = 5,95 · 10⁻³ m"
  },
  {
   "f": "Welchen Durchmesser wählst du?",
   "o": [
    [
     "Mindestens 6 mm",
     "5,95 mm aufgerundet – mit dickerem Rohr wird der Fehler noch kleiner."
    ],
    [
     "5 mm",
     "Bei 5 mm stiege das Wasser um 6 mm – zu viel."
    ],
    [
     "0,6 mm",
     "Faktor 10 vertan, dann stiege das Wasser fast 6 cm."
    ],
    [
     "60 mm",
     "Das ginge, ist aber unnötig dick."
    ]
   ],
   "r": "gewählt D = 6 mm"
  }
 ],
 "fazit": "Kapillare Steighöhe h = 4σ / (ρ g d): umgekehrt proportional zum Durchmesser. Für einen kleinen Anzeigefehler braucht man ein ausreichend dickes Röhrchen."
});
aufgabe({
 "id": "hydro-ue03-a32",
 "f": "hydro",
 "t": "Hydrodynamik",
 "titel": "Wasseruhr mit zwei Hähnen",
 "s": "Hydromechanik Übung 03, Aufgabe 3.2",
 "angabe": "Eine Wasseruhr zeigt bei zwei geöffneten Wasserhähnen einen Durchfluss Q₀ an. Beide Hähne haben die gleiche Ausflussgeschwindigkeit.",
 "geg": [
  "Q₀ = 1,0 l/s",
  "d₀ = 4 cm",
  "d₁ = 2 cm",
  "d₂ = 1 cm",
  "v₁ = v₂"
 ],
 "ges": "Wassermengen V₁ und V₂ in einer Stunde",
 "schritte": [
  {
   "f": "Welche Gleichung beschreibt die Verzweigung?",
   "o": [
    [
     "Kontinuität: Q₀ = Q₁ + Q₂",
     "Was in die Verzweigung hineinfließt, fließt auch wieder heraus."
    ],
    [
     "Q₀ = Q₁ = Q₂",
     "Dann käme doppelt so viel heraus wie hinein."
    ],
    [
     "Bernoulli zwischen Uhr und Hahn",
     "Die Geschwindigkeiten sind nicht gefragt und unnötig."
    ],
    [
     "v₀ = v₁ + v₂",
     "Geschwindigkeiten addieren sich nicht, Durchflüsse schon."
    ]
   ],
   "r": "Q₀ = v₁ · A₁ + v₂ · A₂"
  },
  {
   "f": "Wie nutzt du v₁ = v₂ = v?",
   "o": [
    [
     "v ausklammern: Q₀ = v · (A₁ + A₂)",
     "Mit einer gemeinsamen Geschwindigkeit bleibt nur eine Unbekannte."
    ],
    [
     "v = Q₀ / A₀ setzen",
     "Das ist die Geschwindigkeit in der Zuleitung, nicht an den Hähnen."
    ],
    [
     "v₁ = Q₀ / A₁",
     "Dann flösse alles aus Hahn 1."
    ],
    [
     "Gar nicht – die Bedingung ist überflüssig",
     "Ohne sie gäbe es zwei Unbekannte für eine Gleichung."
    ]
   ],
   "r": "A₁ = 3,14 cm² · A₂ = 0,785 cm²\nv = 1,0 · 10⁻³ / 3,93 · 10⁻⁴ = 2,55 m/s"
  },
  {
   "f": "Wie teilt sich der Durchfluss auf?",
   "o": [
    [
     "Im Verhältnis der Flächen: Q₁ : Q₂ = 4 : 1",
     "Gleiche Geschwindigkeit, also Q ~ A ~ d². Doppelter Durchmesser heißt vierfacher Durchfluss."
    ],
    [
     "Je zur Hälfte",
     "Das gälte nur bei gleich großen Hähnen."
    ],
    [
     "Im Verhältnis der Durchmesser 2 : 1",
     "Der Durchmesser geht quadratisch ein."
    ],
    [
     "Q₂ ist größer, weil der Hahn kleiner ist",
     "Bei gleicher Geschwindigkeit fließt durch den kleineren Querschnitt weniger."
    ]
   ],
   "r": "Q₁ = 0,8 l/s · Q₂ = 0,2 l/s"
  },
  {
   "f": "Wie kommst du zur Wassermenge in einer Stunde?",
   "o": [
    [
     "V = Q · t mit t = 3600 s",
     "Der Durchfluss ist Volumen pro Zeit – mal Zeit ergibt das Volumen."
    ],
    [
     "V = Q / t",
     "Dann käme ein winziges Volumen pro Quadratsekunde heraus."
    ],
    [
     "V = Q · 60",
     "60 s sind eine Minute, nicht eine Stunde."
    ],
    [
     "V = v · A",
     "Das ist wieder ein Durchfluss, kein Volumen."
    ]
   ],
   "r": "V₁ = 0,8 l/s · 3600 s = 2,88 m³\nV₂ = 0,2 l/s · 3600 s = 0,72 m³"
  }
 ],
 "fazit": "Verzweigungen: Q₀ = Q₁ + Q₂. Bei gleicher Geschwindigkeit teilt sich der Durchfluss im Verhältnis der Flächen, also mit d²."
});
aufgabe({
 "id": "hydro-ue03-a37",
 "f": "hydro",
 "t": "Energiesatz",
 "titel": "Durchfluss im Venturirohr",
 "s": "Hydromechanik Übung 03, Aufgabe 3.7",
 "angabe": "Ein waagerechtes Rohr verengt sich von d₁ auf d₂. Gemessen wird der Druckunterschied zwischen weitem und engem Querschnitt.",
 "geg": [
  "d₁ = 0,3 m",
  "d₂ = 0,1 m",
  "Δp/(ρ·g) = 0,65 m",
  "ρ_W = 1,0 t/m³",
  "g = 9,81 m/s²"
 ],
 "ges": "v₁, v₂ und Durchfluss Q",
 "schritte": [
  {
   "f": "Welche zwei Gleichungen brauchst du?",
   "o": [
    [
     "Kontinuität und Bernoulli",
     "Zwei Unbekannte (v₁, v₂) – Kontinuität verknüpft sie, Bernoulli bringt den gemessenen Druckunterschied ins Spiel."
    ],
    [
     "Nur Bernoulli",
     "Dann bleiben zwei unbekannte Geschwindigkeiten in einer Gleichung."
    ],
    [
     "Impulssatz und Kontinuität",
     "Der Impulssatz liefert Kräfte, die hier nicht gefragt sind."
    ],
    [
     "Hydrostatik",
     "Das Wasser strömt."
    ]
   ]
  },
  {
   "f": "Was liefert die Kontinuität?",
   "o": [
    [
     "v₂ = v₁ · (d₁/d₂)² = 9 · v₁",
     "Ein Drittel des Durchmessers heißt ein Neuntel der Fläche."
    ],
    [
     "v₂ = 3 · v₁",
     "Der Durchmesser geht quadratisch ein."
    ],
    [
     "v₂ = v₁",
     "Dann gäbe es keinen Druckunterschied."
    ],
    [
     "v₂ = v₁ / 9",
     "Im engen Querschnitt wird das Wasser schneller, nicht langsamer."
    ]
   ],
   "r": "v₂ = 9 · v₁"
  },
  {
   "f": "Wie setzt du Bernoulli an (Rohr waagerecht)?",
   "o": [
    [
     "Δp/(ρg) = (v₂² − v₁²)/(2g)",
     "Die Lagehöhe fällt weg. Der Druckabfall ist genau der Zuwachs an Geschwindigkeitshöhe."
    ],
    [
     "Δp/(ρg) = v₂²/(2g)",
     "Die Geschwindigkeit im weiten Rohr darf man hier nicht weglassen."
    ],
    [
     "Δp/(ρg) = (v₂ − v₁)²/(2g)",
     "Bernoulli enthält die Differenz der Quadrate, nicht das Quadrat der Differenz."
    ],
    [
     "Δp = ρ · g · v",
     "Die Einheiten passen nicht."
    ]
   ],
   "r": "0,65 m = (81 − 1) · v₁² / (2 · 9,81)"
  },
  {
   "f": "Wie bekommst du den Durchfluss?",
   "o": [
    [
     "Q = v₁ · A₁ (oder v₂ · A₂)",
     "Der Durchfluss ist in beiden Querschnitten gleich."
    ],
    [
     "Q = (v₁ + v₂) · A₁",
     "Geschwindigkeiten aus verschiedenen Querschnitten nicht mischen."
    ],
    [
     "Q = v₂ · A₁",
     "Geschwindigkeit und Fläche müssen zum selben Querschnitt gehören."
    ],
    [
     "Q = Δp · A₂",
     "Ein Druck mal Fläche ist eine Kraft."
    ]
   ],
   "r": "v₁ = 0,40 m/s · v₂ = 3,59 m/s\nQ = 0,40 · π · 0,3²/4 = 0,028 m³/s = 28 l/s"
  }
 ],
 "fazit": "Venturi-Messung: Kontinuität v₂ = v₁ (d₁/d₂)², Bernoulli Δp/(ρg) = (v₂² − v₁²)/(2g), dann Q = v₁ A₁."
});
aufgabe({
 "id": "hydro-ue04-a41",
 "f": "hydro",
 "t": "Impulssatz",
 "titel": "Kraft auf einen Rohrkrümmer",
 "s": "Hydromechanik Übung 04, Aufgabe 4.1",
 "v": "kruemmer",
 "angabe": "Ein horizontaler 60°-Krümmer verjüngt sich in Fließrichtung. Am Ausgang ist der Druck bekannt. Reibung wird wegen der kurzen Strecke vernachlässigt.",
 "geg": [
  "D₁ = 0,4 m",
  "D₂ = 0,2 m",
  "α = 60°",
  "p₂ = 49 kPa",
  "Q = 120 l/s"
 ],
 "ges": "Betrag und Richtung der Krümmerkraft F_K",
 "schritte": [
  {
   "f": "Was brauchst du zuerst?",
   "o": [
    [
     "Die Geschwindigkeiten aus der Kontinuität",
     "Für Bernoulli und die Impulsströme brauchst du v₁ und v₂."
    ],
    [
     "Sofort den Impulssatz",
     "Dafür fehlen noch v₁, v₂ und p₁."
    ],
    [
     "Das Gewicht des Wassers",
     "Der Krümmer liegt horizontal – das Gewicht wirkt senkrecht zur betrachteten Ebene."
    ],
    [
     "Die Reibungsverluste",
     "Die werden laut Aufgabe vernachlässigt."
    ]
   ],
   "r": "v₁ = 0,12/0,126 = 0,95 m/s · v₂ = 0,12/0,0314 = 3,82 m/s"
  },
  {
   "f": "Der Druck p₁ fehlt noch. Wie bekommst du ihn?",
   "o": [
    [
     "Bernoulli zwischen 1 und 2",
     "Horizontal, ohne Verluste: p₁ = p₂ + ρ/2 · (v₂² − v₁²)."
    ],
    [
     "p₁ = p₂",
     "Im engeren Querschnitt ist das Wasser schneller, also der Druck kleiner."
    ],
    [
     "p₁ = p₂ · A₂/A₁",
     "Drücke rechnet man nicht über Flächenverhältnisse um."
    ],
    [
     "Aus der Hydrostatik",
     "Das Wasser strömt."
    ]
   ],
   "r": "p₁ = 49 + 0,5 · (3,82² − 0,95²) = 55,8 kPa"
  },
  {
   "f": "Wie setzt du den Stützkraftsatz an?",
   "o": [
    [
     "S = p·A + ρ·Q·v in jedem Schnitt, Kraft = S₁ − S₂ vektoriell",
     "Druckkraft und Impulsstrom zusammen geben die Stützkraft. Die Differenz der Vektoren nimmt der Krümmer auf."
    ],
    [
     "Nur die Druckkräfte p·A",
     "Ohne Impulsströme fehlt der Anteil der Umlenkung."
    ],
    [
     "Nur die Impulsströme ρ·Q·v",
     "Die Druckkräfte sind hier sogar der größere Anteil."
    ],
    [
     "S₁ + S₂ als Zahlen addieren",
     "S₁ und S₂ zeigen in verschiedene Richtungen – nur vektoriell rechnen."
    ]
   ],
   "r": "S₁ = 55,8 · 0,126 + 1,0 · 0,12 · 0,95 = 7,13 kN\nS₂ = 49 · 0,0314 + 1,0 · 0,12 · 3,82 = 2,00 kN"
  },
  {
   "f": "Wie zerlegst du in x- und y-Richtung?",
   "o": [
    [
     "F_x = S₁ − S₂·cos 60°, F_y = −S₂·sin 60°",
     "S₁ liegt in x-Richtung, S₂ ist um 60° gedreht und wird zerlegt."
    ],
    [
     "F_x = S₁ − S₂, F_y = 0",
     "Das gälte nur ohne Umlenkung."
    ],
    [
     "F_x = S₁ · cos 60°",
     "S₁ liegt genau in x-Richtung, da gibt es nichts zu zerlegen."
    ],
    [
     "Mit sin und cos vertauscht",
     "cos gehört zur Komponente entlang der x-Achse."
    ]
   ],
   "r": "F_x = 7,13 − 2,00 · 0,5 = 6,13 kN\nF_y = −2,00 · 0,866 = −1,73 kN"
  },
  {
   "f": "Wie bekommst du Betrag und Winkel?",
   "o": [
    [
     "Pythagoras und arctan(|F_y|/F_x)",
     "Der Krümmer wird mit 6,4 kN schräg nach außen gedrückt – das muss ein Widerlager aufnehmen."
    ],
    [
     "Die Komponenten addieren",
     "Komponenten addiert man vektoriell, nicht als Zahlen."
    ],
    [
     "Nur F_x nehmen",
     "Dann fehlt die Querkomponente aus der Umlenkung."
    ],
    [
     "Winkel = 60°",
     "Der Winkel der Kraft ist nicht der Umlenkwinkel."
    ]
   ],
   "r": "F_K = √(6,13² + 1,73²) = 6,37 kN\nβ = arctan(1,73/6,13) = 15,8° zur x-Achse, nach außen"
  }
 ],
 "fazit": "Krümmerkraft: Kontinuität → Bernoulli für den fehlenden Druck → Stützkräfte S = pA + ρQv je Schnitt → vektoriell S₁ − S₂ → Betrag und Winkel."
});
aufgabe({
 "id": "hydro-ue05-a54",
 "f": "hydro",
 "t": "Energiesatz",
 "titel": "Pitot- und Piezometerrohr am Behälter",
 "s": "Hydromechanik Übung 05, Aufgabe 5.4",
 "v": "behaelter",
 "angabe": "Aus einem großen Behälter fließt Wasser durch ein Rohr mit wechselndem Querschnitt frei aus. Die Rohrachse liegt auf dem Bezugshorizont. Bei 1 steht ein Pitotrohr, bei 2 ein Piezometerrohr. Verluste werden vernachlässigt.",
 "geg": [
  "h₀ = 2,0 m",
  "v₀ = 0",
  "A₁ = 0,2 m²",
  "A₂ = 0,9 m²",
  "A₃ = 0,3 m² (Austritt)"
 ],
 "ges": "Wasserstände h₁ und h₂",
 "schritte": [
  {
   "f": "Womit beginnst du?",
   "o": [
    [
     "Bernoulli von der Behälteroberfläche bis zum freien Austritt 3",
     "Dort sind beide Drücke bekannt (Luftdruck) – es bleibt nur v₃ unbekannt."
    ],
    [
     "Bernoulli zwischen 1 und 2",
     "Dort sind Drücke und Geschwindigkeiten noch unbekannt."
    ],
    [
     "Kontinuität zwischen 0 und 1",
     "Im Behälter ist v₀ ≈ 0 – daraus folgt nichts."
    ],
    [
     "Impulssatz am Austritt",
     "Gesucht sind Höhen, keine Kräfte."
    ]
   ],
   "r": "v₃ = √(2 · g · h₀) = √(2 · 9,81 · 2,0) = 6,26 m/s"
  },
  {
   "f": "Wie kommst du zu den Geschwindigkeiten in 1 und 2?",
   "o": [
    [
     "Q = v₃ · A₃, dann v = Q / A",
     "Der Durchfluss ist im ganzen Rohr gleich."
    ],
    [
     "v₁ = v₂ = v₃",
     "Die Querschnitte sind verschieden."
    ],
    [
     "v = √(2g·h) an jeder Stelle",
     "Torricelli gilt nur am freien Austritt."
    ],
    [
     "Aus dem Pitotrohr ablesen",
     "Dazu bräuchtest du zusätzlich ein Piezometer an derselben Stelle."
    ]
   ],
   "r": "Q = 6,26 · 0,3 = 1,88 m³/s\nv₁ = 9,40 m/s · v₂ = 2,09 m/s"
  },
  {
   "f": "Was zeigt das Pitotrohr bei 1?",
   "o": [
    [
     "Die Energiehöhe – ohne Verluste also h₁ = h₀ = 2,0 m",
     "Das Pitotrohr staut die Strömung auf und zeigt Druck- plus Geschwindigkeitshöhe, also die Energielinie."
    ],
    [
     "Nur die Druckhöhe",
     "Das wäre ein Piezometerrohr."
    ],
    [
     "Die Geschwindigkeitshöhe allein",
     "Es zeigt die Summe."
    ],
    [
     "Null, weil das Wasser dort schnell ist",
     "Gerade die Geschwindigkeit wird im Pitotrohr in Höhe umgesetzt."
    ]
   ],
   "r": "h₁ = 2,0 m (die Druckhöhe selbst wäre 2,0 − 4,5 = −2,5 m, also Unterdruck)"
  },
  {
   "f": "Was zeigt das Piezometerrohr bei 2?",
   "o": [
    [
     "Die Druckhöhe: h₂ = h₀ − v₂²/(2g)",
     "Energiehöhe minus Geschwindigkeitshöhe ergibt die Drucklinie."
    ],
    [
     "Die Energiehöhe h₀",
     "Das zeigt nur das Pitotrohr."
    ],
    [
     "h₂ = v₂²/(2g)",
     "Das ist der Abstand zwischen Energie- und Drucklinie."
    ],
    [
     "h₂ = h₁",
     "Bei 2 ist das Wasser langsamer, die Druckhöhe also anders."
    ]
   ],
   "r": "h₂ = 2,0 − 2,09²/(2 · 9,81) = 1,78 m"
  }
 ],
 "fazit": "Pitotrohr = Energielinie, Piezometer = Drucklinie. Erst v am freien Austritt (Torricelli), dann Q, dann alle anderen Geschwindigkeiten über die Kontinuität."
});
aufgabe({
 "id": "bauko-ue01-decke",
 "f": "bauko",
 "t": "Lasten",
 "titel": "Lasten einer Holzbalkendecke",
 "s": "Baukonstruktion Übung 01, Beispiel 3",
 "angabe": "Holzbalkendecke zwischen zwei Wohnräumen. Gesucht sind Eigengewicht und Nutzlast als Streckenlast pro Balken.",
 "geg": [
  "Trockenestrich 4 cm",
  "Trittschalldämmung 3 cm",
  "Spanplatte 24 mm",
  "Ausgleichslattung",
  "Gipskarton 1,5 cm",
  "Balken C24 8/16, e = 60 cm",
  "leichte Trennwände 3–5 kN/m"
 ],
 "ges": "g_k und q_k pro Balken",
 "schritte": [
  {
   "f": "Womit beginnst du beim Eigengewicht?",
   "o": [
    [
     "Jede Schicht als Flächenlast in kN/m² ermitteln und addieren",
     "Wichte · Dicke oder Tabellenwert pro cm aus den Bautabellen, Schicht für Schicht."
    ],
    [
     "Gleich mit dem Balkenabstand multiplizieren",
     "Erst die Schichten summieren, dann umrechnen – sonst verrechnet man sich leicht."
    ],
    [
     "Nur den Balken ansetzen",
     "Der Aufbau ist hier der größte Anteil."
    ],
    [
     "Pauschal 5 kN/m² annehmen",
     "Das wäre für eine Holzbalkendecke viel zu viel."
    ]
   ],
   "r": "Estrich 0,88 · Dämmung 0,03 · Spanplatte 0,19 · Lattung 0,10 · Gipskarton 0,14\nΣ = 1,34 kN/m²"
  },
  {
   "f": "Wie wird daraus eine Last pro Balken?",
   "o": [
    [
     "Flächenlast × Balkenabstand, dazu das Eigengewicht des Balkens",
     "1,34 · 0,6 m plus Balken 4,2 kN/m³ · 0,08 · 0,16 m und die Dämmstreifen."
    ],
    [
     "Flächenlast ÷ Balkenabstand",
     "Teilen ergäbe eine falsche Einheit."
    ],
    [
     "Flächenlast × Spannweite",
     "Die Spannweite spielt erst bei den Auflagerkräften eine Rolle."
    ],
    [
     "Nur den Balken, der Aufbau zählt für die Decke",
     "Der Balken trägt den Aufbau seines Streifens mit."
    ]
   ],
   "r": "g_k = 1,34 · 0,6 + 0,054 + Dämmstreifen ≈ 0,89 kN/m"
  },
  {
   "f": "Welche Nutzlast setzt du an?",
   "o": [
    [
     "Kategorie A3: 2,0 kN/m², dazu Q_k = 1,0 kN",
     "Holzbalkendecken haben keine ausreichende Querverteilung."
    ],
    [
     "Kategorie A2: 1,5 kN/m²",
     "A2 gilt für Wohndecken mit ausreichender Querverteilung, etwa Massivdecken."
    ],
    [
     "Kategorie B1: 2,0 kN/m² für Büros",
     "Es sind Wohnräume."
    ],
    [
     "Keine, Wohnräume sind leicht",
     "Nutzlast ist immer anzusetzen."
    ]
   ],
   "r": "q_k = 2,0 kN/m² · Q_k = 1,0 kN"
  },
  {
   "f": "Was gehört noch zur Nutzlast?",
   "o": [
    [
     "Trennwandzuschlag 1,2 kN/m² für Wände von 3 bis 5 kN/m",
     "Leichte, versetzbare Trennwände werden als Zuschlag zur Nutzlast angesetzt."
    ],
    [
     "Nichts weiter",
     "Leichte Trennwände muss man berücksichtigen."
    ],
    [
     "Die Wände als Eigengewicht",
     "Versetzbare Trennwände zählen zur Nutzlast."
    ],
    [
     "Schnee",
     "Die Decke liegt zwischen zwei Wohnräumen."
    ]
   ],
   "r": "q_k,ges = 2,0 + 1,2 = 3,2 kN/m²"
  },
  {
   "f": "Wie groß ist die Nutzlast pro Balken – und für den Unterzug darunter?",
   "o": [
    [
     "3,2 · 0,6 = 1,92 kN/m, für stützende Bauteile (2,0 − 0,5 + 1,2) · 0,6 = 1,62 kN/m",
     "Für die Weiterleitung auf stützende Bauteile darf die Nutzlast um 0,5 kN/m² abgemindert werden."
    ],
    [
     "3,2 · 0,6 = 1,92 kN/m für alles",
     "Erlaubt, aber unwirtschaftlich – die Abminderung darf man nutzen."
    ],
    [
     "3,2 / 0,6 = 5,33 kN/m",
     "Durch den Abstand zu teilen ist falsch."
    ],
    [
     "2,0 · 0,6 = 1,2 kN/m",
     "Der Trennwandzuschlag fehlt."
    ]
   ],
   "r": "Balken: q_k = 1,92 kN/m (+ Q_k = 1,0 kN)\nUnterzug: 1,62 kN/m pro Balken"
  }
 ],
 "fazit": "Lastaufstellung: Schicht für Schicht in kN/m², mal Einzugsbreite, plus Eigengewicht des Trägers. Nutzlast nach Kategorie plus Trennwandzuschlag – bei Holzbalkendecken für stützende Bauteile um 0,5 kN/m² abgemindert."
});
aufgabe({
 "id": "bauko-ue02-schnee",
 "f": "bauko",
 "t": "Einwirkungen",
 "titel": "Schneelast auf einem Sparren",
 "s": "Baukonstruktion Übung 02, Beispiel 4",
 "v": "pfettendach",
 "angabe": "Pfettendach eines Wohnhauses in Aachen. Gesucht ist die Schneelast pro Sparren.",
 "geg": [
  "Aachen, 200 m ü. NN (Zone 2)",
  "α = 35°",
  "Sparrenabstand 0,65 m",
  "C_e = C_t = 1,0",
  "γ_Schnee = 3 kN/m³, k = 0,4"
 ],
 "ges": "s pro Sparren und Schneeüberhang",
 "schritte": [
  {
   "f": "Womit startest du?",
   "o": [
    [
     "Charakteristische Schneelast am Boden s_k aus Zone und Geländehöhe",
     "s_k ist der Ausgangswert. Die Dachform kommt erst danach."
    ],
    [
     "Direkt mit der Dachneigung",
     "Ohne s_k gibt es nichts, was man abmindern könnte."
    ],
    [
     "Mit der Windzone",
     "Wind und Schnee sind getrennte Einwirkungen."
    ],
    [
     "Mit der Sparrenlänge",
     "Schnee wird auf die Grundfläche bezogen."
    ]
   ],
   "r": "s_k = 0,25 + 1,91 · ((200 + 140)/760)² = 0,63 kN/m²"
  },
  {
   "f": "Die Formel liefert 0,63 kN/m². Was gilt?",
   "o": [
    [
     "Mindestwert Zone 2: s_k = 0,85 kN/m²",
     "Liegt der Formelwert darunter, ist der Mindestwert maßgebend."
    ],
    [
     "0,63 kN/m², die Formel ist genau",
     "Die Norm verlangt den Mindestwert."
    ],
    [
     "Mittelwert aus beiden",
     "Es gilt der größere Wert, nicht der Mittelwert."
    ],
    [
     "0 kN/m², Aachen hat kaum Schnee",
     "Schnee muss immer angesetzt werden."
    ]
   ],
   "r": "s_k = 0,85 kN/m²"
  },
  {
   "f": "Wie berücksichtigst du die Dachneigung?",
   "o": [
    [
     "Formbeiwert μ₁ = 0,8 · (60° − α)/30°",
     "Zwischen 30° und 60° nimmt μ₁ linear von 0,8 auf 0 ab."
    ],
    [
     "μ₁ = 0,8 wie bei flachen Dächern",
     "Das gilt nur bis 30°."
    ],
    [
     "μ₁ = cos α",
     "Der Formbeiwert ist tabelliert, nicht der Kosinus."
    ],
    [
     "Gar nicht",
     "Steile Dächer tragen weniger Schnee – das darf man nutzen."
    ]
   ],
   "r": "μ₁ = 0,8 · 25/30 = 0,67"
  },
  {
   "f": "Wie kommst du zur Last pro Sparren?",
   "o": [
    [
     "s = μ₁ · C_e · C_t · s_k, dann × Sparrenabstand",
     "Schnee wirkt auf die Grundrissfläche, der Sparren trägt einen Streifen von 0,65 m."
    ],
    [
     "s_k × Sparrenlänge",
     "Der Formbeiwert fehlt, und die Länge ist die falsche Bezugsgröße."
    ],
    [
     "s × Dachneigung",
     "Das ergibt keine Linienlast."
    ],
    [
     "s ÷ 0,65 m",
     "Teilen ist falsch – der Streifen wird mitgenommen, nicht herausgerechnet."
    ]
   ],
   "r": "s = 0,67 · 1,0 · 1,0 · 0,85 = 0,57 kN/m²\npro Sparren 0,57 · 0,65 = 0,37 kN/m"
  },
  {
   "f": "Was kommt an der Traufe noch dazu?",
   "o": [
    [
     "Schneeüberhang S_e = k · s²/γ als Einzellast am Sparrenende",
     "S_e = 0,4 · 0,57²/3 = 0,043 kN/m, pro Sparren × 0,65 m."
    ],
    [
     "Nichts",
     "Der Überhang muss bei Dachüberständen berücksichtigt werden."
    ],
    [
     "Doppelte Schneelast am ganzen Dach",
     "Der Überhang betrifft nur den Rand."
    ],
    [
     "Die Mannlast",
     "Mannlast und Schnee werden nicht überlagert."
    ]
   ],
   "r": "F_S = 0,043 · 0,65 = 0,03 kN"
  }
 ],
 "fazit": "Schnee: s_k aus Zone und Höhe (Mindestwert beachten) → μ₁ aus der Dachneigung → s = μ₁ C_e C_t s_k → × Lasteinzugsbreite. Bezug ist die Grundfläche."
});
aufgabe({
 "id": "bauko-ue02-wind",
 "f": "bauko",
 "t": "Einwirkungen",
 "titel": "Windlast im Dachbereich H",
 "s": "Baukonstruktion Übung 02, Beispiel 4",
 "angabe": "Satteldach, Wind senkrecht zum First. Gesucht ist die Windlast auf einen Sparren im Bereich H.",
 "geg": [
  "Firsthöhe 8 m (< 10 m)",
  "Aachen",
  "Breite quer zum Wind b = 6 m",
  "α = 35°",
  "Sparrenabstand 0,65 m",
  "c_pe,10 für H: 0,4 bei 30°, 0,6 bei 45°"
 ],
 "ges": "w_H pro Sparren",
 "schritte": [
  {
   "f": "Welche Größe holst du zuerst aus den Tabellen?",
   "o": [
    [
     "Den Geschwindigkeitsdruck q_p aus Windzone und Höhe",
     "Er gilt für das ganze Gebäude – bei Höhen bis 10 m vereinfacht ein Wert."
    ],
    [
     "Den Außendruckbeiwert c_pe",
     "Den brauchst du auch, aber er wird mit q_p multipliziert."
    ],
    [
     "Die Schneelast",
     "Wind und Schnee sind getrennte Einwirkungen."
    ],
    [
     "Die Sparrenlänge",
     "Der Wind wird auf die Dachfläche bezogen."
    ]
   ],
   "r": "q_p = 0,65 kN/m²"
  },
  {
   "f": "Wie legst du die Bereichsgrenzen fest?",
   "o": [
    [
     "e = min(b; 2h)",
     "Damit werden F, G, H, I, J abgegrenzt, etwa e/4 und e/10."
    ],
    [
     "e = Firsthöhe",
     "Dann fehlt die Gebäudebreite."
    ],
    [
     "e = b + h",
     "Es ist das Minimum, keine Summe."
    ],
    [
     "Alle Bereiche gleich groß",
     "Die Randbereiche sind kleiner, aber stärker belastet."
    ]
   ],
   "r": "e = min(6 m; 16 m) = 6 m → e/4 = 1,5 m, e/10 = 0,6 m"
  },
  {
   "f": "35° steht nicht in der Tabelle. Wie bekommst du c_pe,10 für H?",
   "o": [
    [
     "Linear zwischen 30° und 45° interpolieren",
     "Zwischenwerte werden geradlinig berechnet."
    ],
    [
     "Den Wert für 30° nehmen",
     "Das liegt hier auf der unsicheren Seite."
    ],
    [
     "Den Mittelwert von 30° und 45°",
     "35° liegt nicht in der Mitte."
    ],
    [
     "c_pe = 1,0 setzen",
     "Der Beiwert ist tabelliert."
    ]
   ],
   "r": "c_pe,10 = 0,4 + (0,6 − 0,4)/15° · 5° = 0,47"
  },
  {
   "f": "Wie groß ist die Windlast pro Sparren?",
   "o": [
    [
     "w = c_pe · q_p · Sparrenabstand",
     "Senkrecht zur Dachfläche, positiv heißt Druck."
    ],
    [
     "w = q_p · Sparrenabstand",
     "Der Beiwert fehlt."
    ],
    [
     "w = c_pe · q_p",
     "Das ist eine Flächenlast, noch keine Last pro Sparren."
    ],
    [
     "w = c_pe · q_p · Firsthöhe",
     "Die Höhe steckt schon in q_p."
    ]
   ],
   "r": "w_H = 0,47 · 0,65 · 0,65 = 0,20 kN/m (Druck)"
  },
  {
   "f": "Welches Vorzeichen haben die Bereiche I und J auf der Leeseite?",
   "o": [
    [
     "Negativ – Sog",
     "Auf der windabgewandten Seite zieht der Wind an der Dachfläche (I: −0,14, J: −0,18 kN/m)."
    ],
    [
     "Positiv – Druck",
     "Druck gibt es auf der Leeseite nicht."
    ],
    [
     "Null",
     "Auch die Leeseite wird belastet."
    ],
    [
     "Wie H",
     "Luv und Lee unterscheiden sich gerade im Vorzeichen."
    ]
   ],
   "r": "w_I = −0,14 kN/m · w_J = −0,18 kN/m"
  }
 ],
 "fazit": "Wind: q_p aus Zone und Höhe → Bereiche über e = min(b; 2h) → c_pe je Bereich (interpolieren) → w = c_pe · q_p · Einzugsbreite, senkrecht zur Fläche, + Druck, − Sog."
});
aufgabe({
 "id": "phys-b1-a1",
 "f": "phys",
 "t": "Einheiten",
 "titel": "Regen in acre-feet",
 "s": "Physik Übungsblatt 1, Aufgabe 1",
 "angabe": "Über einer Stadt fallen bei einem Gewitter in 30 Minuten 3,5 inch Regen. In den USA misst man Wasservolumen in acre-feet (1 acre Fläche, 1 foot tief).",
 "geg": [
  "A = 20 km²",
  "h = 3,5 in",
  "1 in = 25,4 mm",
  "1 ft = 304,8 mm",
  "1 ac = 4046,856 m²"
 ],
 "ges": "Regenmenge in ac·ft",
 "schritte": [
  {
   "f": "Wie gehst du vor?",
   "o": [
    [
     "V = h · A, dabei h in ft und A in ac umrechnen",
     "Rechnest du beide Größen gleich in die Zieleinheit um, entsteht direkt ac·ft."
    ],
    [
     "Alles in m³ rechnen und am Ende raten",
     "Am Ende brauchst du trotzdem einen Umrechnungsfaktor."
    ],
    [
     "Die Zeit 30 min einsetzen",
     "Die Dauer ist für das Volumen unwichtig."
    ],
    [
     "h und A addieren",
     "Ein Volumen ist ein Produkt."
    ]
   ]
  },
  {
   "f": "Wie rechnest du die Regenhöhe in Fuß um?",
   "o": [
    [
     "3,5 in · (25,4 mm / 1 in) · (1 ft / 304,8 mm)",
     "Jeder Bruch ist genau 1 – die Einheiten kürzen sich bis auf ft."
    ],
    [
     "3,5 · 304,8 / 25,4",
     "Der Bruch steht falsch herum – dann kämen 42 ft heraus."
    ],
    [
     "3,5 / 12 · 25,4",
     "Einheiten durcheinander."
    ],
    [
     "3,5 in = 3,5 ft",
     "Ein Fuß hat 12 inch."
    ]
   ],
   "r": "h = 0,292 ft"
  },
  {
   "f": "Und die Fläche in acre?",
   "o": [
    [
     "20 km² · (1000 m / 1 km)² · (1 ac / 4046,856 m²)",
     "Bei Flächen wird der Längenfaktor quadriert: 1 km² = 10⁶ m²."
    ],
    [
     "20 km² · 1000 / 4046,856",
     "Der Faktor 1000 muss quadriert werden."
    ],
    [
     "20 / 4046,856",
     "km² und m² passen nicht zusammen."
    ],
    [
     "20 km² = 20 ac",
     "Ein acre ist viel kleiner als ein km²."
    ]
   ],
   "r": "A = 2 · 10⁷ m² / 4046,856 = 4942 ac"
  },
  {
   "f": "Wie viel Wasser fiel?",
   "o": [
    [
     "V = 0,292 ft · 4942 ac ≈ 1440 ac·ft",
     "Rund 1,8 Millionen m³ Wasser."
    ],
    [
     "V = 4942 ac / 0,292 ft",
     "Volumen ist Fläche mal Höhe."
    ],
    [
     "V = 0,292 + 4942",
     "Ein Volumen ist ein Produkt."
    ],
    [
     "V = 1440 m³",
     "Die Einheit ist ac·ft, nicht m³."
    ]
   ],
   "r": "V ≈ 1441 ac·ft"
  }
 ],
 "fazit": "Einheiten umrechnen: mit Brüchen multiplizieren, die genau 1 ergeben, bis nur die Zieleinheit übrig bleibt. Bei Flächen den Faktor quadrieren, bei Volumen hoch drei."
});
aufgabe({
 "id": "phys-b1-a4",
 "f": "phys",
 "t": "Geradlinige Bewegung",
 "titel": "Weg aus dem v(t)-Diagramm",
 "s": "Physik Übungsblatt 1, Aufgabe 4",
 "v": "vt",
 "angabe": "Das Diagramm zeigt die Geschwindigkeit eines Fahrzeugs über 16 s.",
 "geg": [
  "0–2 s: 0 → 24 m/s",
  "2–10 s: 24 m/s",
  "10–12 s: 24 → 12 m/s",
  "12–16 s: 12 m/s"
 ],
 "ges": "Zurückgelegter Weg in 16 s",
 "schritte": [
  {
   "f": "Wie bekommst du aus v(t) den Weg?",
   "o": [
    [
     "Fläche unter der v(t)-Kurve",
     "Der Weg ist das Integral der Geschwindigkeit über die Zeit."
    ],
    [
     "Steigung der Kurve",
     "Die Steigung von v(t) ist die Beschleunigung."
    ],
    [
     "Höchste Geschwindigkeit × Gesamtzeit",
     "Damit überschätzt du den Weg – das Fahrzeug fährt nicht immer 24 m/s."
    ],
    [
     "Mittelwert der Eckwerte",
     "Die Abschnitte dauern unterschiedlich lang."
    ]
   ]
  },
  {
   "f": "Wie berechnest du die Fläche?",
   "o": [
    [
     "In Dreiecke und Rechtecke zerlegen",
     "Jeder Abschnitt ist eine einfache Figur."
    ],
    [
     "Alles als ein Rechteck",
     "Die Anfahr- und Bremsabschnitte sind schräg."
    ],
    [
     "Integrieren nach x",
     "Integriert wird nach der Zeit."
    ],
    [
     "Mit der Formel s = ½at²",
     "Die Beschleunigung ist nicht überall gleich."
    ]
   ],
   "r": "A₁ = ½ · 2 · 24 = 24 m\nA₂ = 8 · 24 = 192 m"
  },
  {
   "f": "Wie behandelst du den Abschnitt 10–12 s?",
   "o": [
    [
     "Dreieck über einem Rechteck: ½ · 2 · 12 + 2 · 12",
     "Die Geschwindigkeit sinkt von 24 auf 12 m/s – also ein Trapez."
    ],
    [
     "Nur das Dreieck ½ · 2 · 24",
     "Das Fahrzeug bremst nicht bis 0."
    ],
    [
     "Gar nicht, dort bremst es",
     "Auch beim Bremsen legt es Weg zurück."
    ],
    [
     "2 · 24 = 48 m",
     "Damit wäre es mit voller Geschwindigkeit weitergefahren."
    ]
   ],
   "r": "A₃ = 12 m (Dreieck) · Rechteck 10–16 s: 6 · 12 = 72 m"
  },
  {
   "f": "Wie weit ist das Fahrzeug gefahren?",
   "o": [
    [
     "Alle Teilflächen addieren",
     "24 + 192 + 12 + 72 = 300 m."
    ],
    [
     "Nur die größte Fläche",
     "Alle Abschnitte zählen."
    ],
    [
     "Die Flächen multiplizieren",
     "Wege addieren sich."
    ],
    [
     "Die Flächen mitteln",
     "Gesucht ist der Gesamtweg."
    ]
   ],
   "r": "s = 300 m"
  }
 ],
 "fazit": "Weg = Fläche unter v(t). Komplizierte Verläufe in Dreiecke, Rechtecke und Trapeze zerlegen und addieren."
});
aufgabe({
 "id": "phys-b3-a3",
 "f": "phys",
 "t": "Bewegung in 2D/3D",
 "titel": "Spitze eines Ventilatorblatts",
 "s": "Physik Übungsblatt 3, Aufgabe 3",
 "angabe": "Ein Ventilator dreht mit konstanter Winkelgeschwindigkeit und macht N Umdrehungen in der Zeit Δt. Betrachtet wird die Spitze eines Blatts mit Radius r.",
 "geg": [
  "N",
  "Δt",
  "r"
 ],
 "ges": "Weg pro Umdrehung, Bahngeschwindigkeit, Beschleunigung, Umlaufzeit",
 "schritte": [
  {
   "f": "Welchen Weg legt die Spitze bei einer Umdrehung zurück?",
   "o": [
    [
     "Den Kreisumfang 2πr",
     "Eine Umdrehung ist einmal um den Kreis."
    ],
    [
     "πr²",
     "Das ist die Kreisfläche."
    ],
    [
     "2r",
     "Das ist der Durchmesser."
    ],
    [
     "N · r",
     "Die Anzahl der Umdrehungen gehört nicht zum Weg einer Umdrehung."
    ]
   ],
   "r": "s = 2πr"
  },
  {
   "f": "Wie lange dauert eine Umdrehung?",
   "o": [
    [
     "T = Δt / N",
     "N Umdrehungen dauern Δt, eine also den N-ten Teil."
    ],
    [
     "T = N / Δt",
     "Das ist die Frequenz."
    ],
    [
     "T = Δt · N",
     "Das wäre die Zeit für N² Umdrehungen."
    ],
    [
     "T = 2π / Δt",
     "Damit fehlt N."
    ]
   ],
   "r": "T = Δt / N"
  },
  {
   "f": "Wie groß ist die Bahngeschwindigkeit?",
   "o": [
    [
     "v = 2πr / T = 2πrN / Δt",
     "Weg einer Umdrehung durch ihre Dauer."
    ],
    [
     "v = ω",
     "ω hat die Einheit 1/s – es fehlt der Radius."
    ],
    [
     "v = r / T",
     "Der Faktor 2π fehlt."
    ],
    [
     "v = 2πr · T",
     "Weg durch Zeit, nicht mal Zeit."
    ]
   ],
   "r": "v = 2πrN / Δt"
  },
  {
   "f": "Welche Beschleunigung hat die Spitze?",
   "o": [
    [
     "a = v²/r, zum Mittelpunkt gerichtet",
     "Bei gleichförmiger Kreisbewegung ändert sich nur die Richtung von v – das erzeugt die Zentripetalbeschleunigung."
    ],
    [
     "a = 0, weil |v| konstant ist",
     "Die Richtung ändert sich ständig, also gibt es eine Beschleunigung."
    ],
    [
     "a = v/r",
     "Die Einheit passt nicht."
    ],
    [
     "a = g",
     "Die Schwerkraft hat mit der Rotation nichts zu tun."
    ]
   ],
   "r": "a = v²/r = 4π²rN² / Δt²"
  }
 ],
 "fazit": "Kreisbewegung: T = Δt/N, v = 2πr/T, a = v²/r zum Mittelpunkt. Konstanter Betrag heißt nicht: keine Beschleunigung."
});
aufgabe({
 "id": "phys-b3-a2",
 "f": "phys",
 "t": "Bewegung in 2D/3D",
 "titel": "Teilchen mit Bremsbeschleunigung",
 "s": "Physik Übungsblatt 3, Aufgabe 2",
 "angabe": "Ein Teilchen startet im Ursprung mit v₀ = v₀ₓ e_x und hat eine konstante Beschleunigung a = aₓ e_x + a_y e_y.",
 "geg": [
  "v₀ₓ > 0",
  "aₓ < 0",
  "a_y < 0"
 ],
 "ges": "v und r beim Erreichen der größten x-Koordinate",
 "schritte": [
  {
   "f": "Wie behandelst du die Bewegung?",
   "o": [
    [
     "x und y getrennt, beide gleichmäßig beschleunigt",
     "Die Beschleunigung ist konstant – jede Richtung folgt v = v₀ + at und r = v₀t + ½at²."
    ],
    [
     "Als Kreisbewegung",
     "Die Beschleunigung ist konstant, nicht zum Mittelpunkt gerichtet."
    ],
    [
     "Nur in x-Richtung",
     "Auch in y wirkt eine Beschleunigung."
    ],
    [
     "Als gleichförmige Bewegung",
     "Es gibt eine Beschleunigung."
    ]
   ],
   "r": "v_x = v₀ₓ + aₓt · v_y = a_y t"
  },
  {
   "f": "Woran erkennst du die größte x-Koordinate?",
   "o": [
    [
     "v_x = 0",
     "Solange v_x > 0, wächst x weiter. Danach läuft das Teilchen zurück."
    ],
    [
     "a_x = 0",
     "aₓ ist konstant und nie null."
    ],
    [
     "y = 0",
     "Das betrifft die andere Richtung."
    ],
    [
     "v = 0",
     "v_y ist dann nicht null."
    ]
   ],
   "r": "t* = −v₀ₓ / aₓ (positiv, da aₓ < 0)"
  },
  {
   "f": "Welche Geschwindigkeit hat das Teilchen dann?",
   "o": [
    [
     "Nur noch eine y-Komponente: v = a_y t* e_y",
     "v_x ist gerade null geworden."
    ],
    [
     "v = 0",
     "In y-Richtung beschleunigt es weiter."
    ],
    [
     "v = v₀",
     "Es wurde abgebremst und umgelenkt."
    ],
    [
     "v = aₓ t* e_x",
     "Die x-Komponente ist in diesem Moment null."
    ]
   ],
   "r": "v = −a_y v₀ₓ / aₓ · e_y"
  },
  {
   "f": "Und der Ort?",
   "o": [
    [
     "t* in x(t) und y(t) einsetzen",
     "x = v₀ₓt* + ½aₓt*², y = ½a_y t*²."
    ],
    [
     "r = v · t*",
     "Die Bewegung ist beschleunigt."
    ],
    [
     "r = ½ a t*² allein",
     "In x fehlt der Anteil v₀ₓt*."
    ],
    [
     "r = 0",
     "Das Teilchen hat sich bewegt."
    ]
   ],
   "r": "r = −v₀ₓ²/(2aₓ) · e_x + a_y v₀ₓ²/(2aₓ²) · e_y"
  }
 ],
 "fazit": "Konstante Beschleunigung: Richtungen getrennt behandeln. Extremwerte einer Koordinate liegen dort, wo die zugehörige Geschwindigkeitskomponente null ist."
});
aufgabe({
 "id": "stat-ue01-ata",
 "f": "stat",
 "t": "Matrizen",
 "titel": "A′A berechnen und deuten",
 "s": "Angewandte Statistik Übung 1, Aufgabe 2",
 "angabe": "Gegeben ist A mit den Zeilen (1 1 4) und (0 3 2). Berechne B = A′A, nenne Eigenschaften und prüfe, ob B invertierbar ist.",
 "ges": "B, Eigenschaften, Invertierbarkeit",
 "schritte": [
  {
   "f": "Welche Ordnung hat B = A′A?",
   "o": [
    [
     "(3, 3)",
     "A′ ist (3, 2), mal (2, 3) ergibt (3, 3)."
    ],
    [
     "(2, 2)",
     "Das wäre AA′."
    ],
    [
     "(2, 3)",
     "Das ist A selbst."
    ],
    [
     "Nicht definiert",
     "A′ hat 2 Spalten, A hat 2 Zeilen – das passt."
    ]
   ]
  },
  {
   "f": "Wie rechnest du die Einträge am schnellsten?",
   "o": [
    [
     "b_ij = Spalte i von A mal Spalte j von A",
     "Jeder Eintrag ist ein Skalarprodukt zweier Spalten von A, und b_ij = b_ji spart die Hälfte."
    ],
    [
     "Jede Zeile von A mit sich selbst",
     "Das ergäbe AA′."
    ],
    [
     "A und A′ elementweise multiplizieren",
     "Matrizen multipliziert man Zeile mal Spalte."
    ],
    [
     "Mit Sarrus",
     "Sarrus berechnet Determinanten, keine Produkte."
    ]
   ],
   "r": "Spalten von A: (1, 0)′, (1, 3)′, (4, 2)′\nB = (1 1 4 / 1 10 10 / 4 10 20)"
  },
  {
   "f": "Welche Eigenschaft siehst du sofort?",
   "o": [
    [
     "B ist symmetrisch",
     "(A′A)′ = A′A. Die Diagonale ist nicht negativ, weil sie Quadratsummen enthält."
    ],
    [
     "B ist die Einheitsmatrix",
     "Die Diagonale ist 1, 10, 20."
    ],
    [
     "B ist eine Dreiecksmatrix",
     "Oberhalb und unterhalb der Diagonale stehen Werte."
    ],
    [
     "B ist schiefsymmetrisch",
     "Dafür müsste b_ij = −b_ji gelten."
    ]
   ]
  },
  {
   "f": "Ist B invertierbar?",
   "o": [
    [
     "Nein – rg(B) ≤ rg(A) = 2 < 3, also det B = 0",
     "Eine 3×3-Matrix ohne vollen Rang ist singulär. Sarrus bestätigt: 280 − 280 = 0."
    ],
    [
     "Ja, weil B symmetrisch ist",
     "Symmetrie sagt nichts über die Invertierbarkeit."
    ],
    [
     "Ja, weil alle Einträge positiv sind",
     "Positive Einträge garantieren keinen vollen Rang."
    ],
    [
     "Das lässt sich nicht sagen",
     "Rang oder Determinante entscheiden es eindeutig."
    ]
   ],
   "r": "det B = 0 → B ist singulär"
  }
 ],
 "fazit": "A′A ist immer quadratisch und symmetrisch. Hat A mehr Spalten als Zeilen, ist A′A nie invertierbar – das spart in der Klausur die Rechnung."
});
aufgabe({
 "id": "dap-l03-normal",
 "f": "dap",
 "t": "Verteilungen",
 "titel": "Anteile einer Normalverteilung",
 "s": "DAP L03 (Übungsaufgabe zur 68-95-99,7-Regel)",
 "v": "normal",
 "angabe": "Körpergrößen seien normalverteilt mit μ = 175 cm und σ = 7 cm.",
 "geg": [
  "μ = 175 cm",
  "σ = 7 cm"
 ],
 "ges": "Anteil über 189 cm und Anteil zwischen 168 und 189 cm",
 "schritte": [
  {
   "f": "Wie vergleichst du 189 cm mit der Verteilung?",
   "o": [
    [
     "z-standardisieren: z = (x − μ)/σ",
     "So sieht man, wie viele Standardabweichungen der Wert vom Mittelwert entfernt ist."
    ],
    [
     "189 durch 175 teilen",
     "Ein Verhältnis zum Mittelwert sagt nichts über die Streuung."
    ],
    [
     "189 − 175 = 14 % über dem Mittel",
     "Die Differenz in cm ist kein Anteil."
    ],
    [
     "Gar nicht, man braucht die Rohdaten",
     "Für eine Normalverteilung reichen μ und σ."
    ]
   ],
   "r": "z = (189 − 175)/7 = 2"
  },
  {
   "f": "Welcher Anteil liegt über z = 2?",
   "o": [
    [
     "(100 % − 95,5 %)/2 ≈ 2,3 %",
     "95,5 % liegen innerhalb ±2σ, der Rest verteilt sich symmetrisch auf beide Seiten."
    ],
    [
     "4,5 %",
     "Das sind beide Ränder zusammen."
    ],
    [
     "95,5 %",
     "Das ist der Anteil innerhalb von ±2σ."
    ],
    [
     "50 %",
     "Über dem Mittelwert liegen 50 %, über 2σ viel weniger."
    ]
   ],
   "r": "Anteil über 189 cm ≈ 2,3 %"
  },
  {
   "f": "Wie bekommst du den Anteil zwischen 168 und 189 cm?",
   "o": [
    [
     "Grenzen standardisieren (z = −1 und z = 2) und die Hälften der Regelbereiche addieren",
     "Zwischen −1σ und μ liegen 68,3/2 %, zwischen μ und +2σ 95,5/2 %."
    ],
    [
     "68,3 % + 95,5 %",
     "Damit wäre der Bereich um μ doppelt gezählt."
    ],
    [
     "95,5 % − 68,3 %",
     "Das ist der Anteil zwischen 1σ und 2σ auf beiden Seiten."
    ],
    [
     "Die Fläche ist ein Rechteck",
     "Unter einer Glockenkurve nicht."
    ]
   ],
   "r": "34,15 % + 47,75 % ≈ 81,9 %"
  },
  {
   "f": "Wie prüfst du das in R?",
   "o": [
    [
     "1 - pnorm(189, 175, 7) und pnorm(189, 175, 7) - pnorm(168, 175, 7)",
     "pnorm ist die Verteilungsfunktion (CDF) – Differenzen ergeben Anteile."
    ],
    [
     "dnorm(189, 175, 7)",
     "dnorm ist die Dichte, kein Anteil."
    ],
    [
     "mean(189)",
     "Der Mittelwert einer Zahl ist sie selbst."
    ],
    [
     "rnorm(189)",
     "rnorm erzeugt Zufallszahlen."
    ]
   ],
   "r": "R: 0,0228 und 0,8186"
  }
 ],
 "fazit": "Normalverteilung: z = (x − μ)/σ, dann 68,3 / 95,5 / 99,7 % für ±1/2/3σ. Ränder sind symmetrisch. In R: pnorm für Anteile."
});
/* Patch-Warteschlange · Baukonstruktion vertieft: V03 (Holz, Stahl, Stahlbeton), Ü06, Hausübung 1, Klausuranalyse, Altklausur 09/2022 · erstellt 02.11.2026
   Nutzt K7 aus Patch 1.3; definiert K8, K9 */
const K8 = "Stahl und Stahlbeton", K9 = "Schnittgrößen und Aussteifung";
mc("bauko", K6, "Welche Holzfehler mindern die Tragfähigkeit von Bauholz?", ["Äste, Risse, Faserneigung und Reaktionsholz", "Nur die Farbe", "Die Jahresringbreite allein", "Harzgehalt und Geruch"], "Faserneigung entsteht z. B. durch Drehwuchs, Reaktionsholz durch exzentrischen Wuchs. Diese Fehler sind der Grund, warum Holz in Festigkeitsklassen sortiert wird.", "Baukonstruktion V03");
mc("bauko", K6, "Welche Holzarten sind Nadelhölzer?", ["Fichte, Tanne, Kiefer, Lärche", "Eiche und Buche", "Fichte und Eiche", "Buche und Kiefer"], "Eiche und Buche sind Laubhölzer (Hartholz). Im Hochbau wird überwiegend Nadelholz verwendet, etwa als NH C24.", "Baukonstruktion V03");
mc("bauko", K6, "Was bedeutet „Anisotropie“ am Beispiel Holz?", ["Die Eigenschaften hängen von der Richtung ab – längs zur Faser fest und steif, quer dazu schwach", "Holz ist überall gleich fest", "Holz ist ein Verbundwerkstoff aus Stahl und Fasern", "Holz quillt nicht"], "Parallel zur Faser ist Holz rund zehnmal fester als quer dazu. Diese Frage kam in Teil I schon mehrfach.", "Baukonstruktion V03, Klausuranalyse Baukonstruktion");
mc("bauko", K4, "Was ist bei Biegung von Holz entscheidend?", ["Die Biegezugfestigkeit", "Die Querdruckfestigkeit", "Die Härte", "Die Rohdichte allein"], "Holz versagt bei Biegung meist auf der Zugseite, an Ästen und Fehlstellen. Die wirkliche Spannungsverteilung ist nicht linear – das Rechenmodell vereinfacht.", "Baukonstruktion V03");
mc("bauko", K4, "Wie lautet der Zugnachweis in Faserrichtung?", ["σ_t,0,d / (k_h · f_t,0,d) ≤ 1 mit σ = F/A_n", "σ_t,0,d / f_c,0,d ≤ 1", "F ≤ f_t,0,k · A", "σ_t,0,d / (k_c · f_t,0,d) ≤ 1"], "A_n ist der Nettoquerschnitt (ohne Bohrungen, Schwächungen). k_c gehört zum Knicken, nicht zum Zug. Diese Formel war schon dreimal Klausurfrage.", "Baukonstruktion V03, Klausuranalyse Baukonstruktion");
pair("bauko", K4, "Eulerfall – welcher Knicklängenbeiwert β?", [["Fall 1: unten eingespannt, oben frei", "β = 2"], ["Fall 2: beidseitig gelenkig", "β = 1"], ["Fall 3: eingespannt und gelenkig", "β = 0,7"], ["Fall 4: beidseitig eingespannt", "β = 0,5"]], "Knicklänge l_ef = β · l. Je besser gehalten, desto kürzer die Knicklänge und desto weniger knickgefährdet.", "Baukonstruktion V03, Ü06");
mc("bauko", K4, "Ein Kragstiel steht auf einem Fundament, das sich elastisch verdreht. Welche Knicklänge setzt man an?", ["l_ef = 1,2 · 2 · h = 2,4 · h", "l_ef = 2 · h", "l_ef = h", "l_ef = 0,7 · h"], "Die elastische Fundamentsohle ist keine perfekte Einspannung. Deshalb wird die Knicklänge des Eulerfalls 1 um 20 % vergrößert.", "Baukonstruktion V03");
mc("bauko", K4, "Was ist die Eulersche Knicklast?", ["N_cr = π² · E · I / l_ef²", "N_cr = E · A", "N_cr = f_c · A", "N_cr = π · E · I / l"], "Je länger der Stab, desto kleiner die Knicklast – mit dem Quadrat der Länge. Für die Bemessung ist sie über k_c in Tabellen aufbereitet.", "Baukonstruktion V03");
mc("bauko", K1, "Was gehört zu den Nachweisen im Grenzzustand der Gebrauchstauglichkeit bei Holz?", ["Durchbiegung und Schwingungen", "Biegung und Schub", "Knicken und Querdruck", "Zug in Faserrichtung"], "GZT: Zug, Druck, Biegung, Querkraft, Knicken. GZG: Verformungen und (Schwingungen). „Zwei Grenzzustände mit je zwei Holz-Nachweisen“ kam in 10 von 24 Klausuren.", "Baukonstruktion V03, Klausuranalyse Baukonstruktion");
mc("bauko", K4, "Wie berechnet man die Durchbiegung eines Einfeldträgers unter Gleichlast?", ["w = 5 · q · l⁴ / (384 · E · I)", "w = q · l² / 8", "w = q · l / (E · A)", "w = 5 · q · l³ / (384 · E · I)"], "Die Spannweite geht mit der vierten Potenz ein – doppelte Spannweite heißt 16-fache Durchbiegung. 384/5 = 76,8 steht so in der Musterlösung.", "Bauko-Altklausur 09/2022");
mc("bauko", K4, "Bei w_net,fin zählen nur quasi-ständige Anteile. Was bleibt bei Schnee und Wind (ψ₂ = 0) übrig?", ["Nur das Eigengewicht mit Kriechen: w_G · (1 + k_def)", "Alles wie bei w_fin", "Nur Schnee", "Nur Wind"], "Mit ψ₂ = 0 fallen Schnee und Wind heraus. In der Altklausur 09/2022: w_net,fin = 0,79 · 1,8 = 1,42 cm ≤ l/300.", "Bauko-Altklausur 09/2022");
mc("bauko", K1, "Welche Klimabedingungen gelten für Nutzungsklasse 1?", ["20 °C und höchstens 65 % relative Luftfeuchte", "20 °C und höchstens 85 % relative Luftfeuchte", "Frei bewittert", "Unter Wasser"], "NKL 2: bis 85 % Luftfeuchte (überdacht, offen). NKL 3: alles andere, z. B. frei bewittert.", "Baukonstruktion V03");
mc("bauko", K1, "Welche Einwirkung gehört zur KLED „lang“ (6 Monate bis 10 Jahre)?", ["Nutzlasten in Lagerhäusern", "Eigengewicht", "Wind", "Fahrzeuganprall"], "Eigenlast ist ständig, Verkehrslast auf Decken mittel, Wind kurz/sehr kurz, Anprall sehr kurz.", "Baukonstruktion V03");
mc("bauko", K4, "Der Biegenachweis ist nicht erfüllt. Was kannst du – außer einem Gerbergelenk – ändern?", ["Größeren Querschnitt oder höhere Festigkeitsklasse wählen", "Die Last weglassen", "kmod erhöhen", "γ_M auf 1,0 setzen"], "So steht es in der Musterlösung der Altklausur 09/2022. kmod und γ_M sind festgelegt und keine Stellschrauben.", "Bauko-Altklausur 09/2022");
mc("bauko", K9, "Was bewirkt ein Gerbergelenk in einem Durchlaufträger?", ["Es erzeugt einen Momentennullpunkt und gleicht Feld- und Stützmoment aus", "Es verstärkt den Träger über der Stütze", "Es verhindert Durchbiegung", "Es ersetzt ein Auflager"], "Liegt das Gelenk bei e = 0,1716 · l neben der Stütze, sind Feld- und Stützmoment gleich groß: ± 0,0858 · q · l².", "Bauko-Altklausur 09/2022");
pair("bauko", K2, "Welche Wichte hat das Nadelholz (SBT, V02)?", [["C16", "3,7 kN/m³"], ["C24", "4,2 kN/m³"], ["C30", "4,6 kN/m³"], ["C40", "5,0 kN/m³"]], "Höhere Festigkeitsklasse, dichteres Holz. In der Hausübung war C40 gefragt – wer 4,2 nimmt, verliert den Punkt.", "Baukonstruktion Hausübung 1");
mc("bauko", K5, "Wie berechnet man s_k in Schneelastzone 1a?", ["1,25 × Formelwert der Zone 1", "Wie Zone 1", "Wie Zone 2", "Immer 0,85 kN/m²"], "Die Zonen 1a und 2a liegen 25 % über ihrer Grundzone. München ist Zone 1a: s_k = 1,25 · (0,19 + 0,91 · ((A + 140)/760)²).", "Baukonstruktion Hausübung 1");
pair("bauko", K5, "Geschwindigkeitsdruck q_p im Binnenland bis 10 m Höhe – ordne zu.", [["Windzone 1", "0,50 kN/m²"], ["Windzone 2", "0,65 kN/m²"], ["Windzone 3", "0,80 kN/m²"], ["Windzone 4", "0,95 kN/m²"]], "Die Windzone nicht aus dem Kartenbild schätzen – in der Hausübung war München Zone 2, nicht 1.", "Baukonstruktion Hausübung 1");
mc("bauko", K5, "Was ist der Unterseitendruck am Dachüberstand?", ["Der Außendruck der Wand darunter, z. B. D = +0,8, E = −0,5", "Immer null", "Derselbe Wert wie auf der Dachoberseite", "Der halbe Geschwindigkeitsdruck"], "Der Wind drückt von unten gegen den Überstand. Man nimmt den Beiwert der darunterliegenden Wandfläche.", "Baukonstruktion Hausübung 1");
mc("bauko", K5, "Welche c_pe,10-Werte gelten am Satteldach mit genau 30° (Hausübung)?", ["F, G +0,7 · H +0,4 · J −0,5 · I −0,4", "Alle −0,5", "F +0,8, sonst 0", "Wie bei 35°, interpoliert"], "Bei 30° steht der Wert direkt in der Tabelle, Interpolieren ist nicht nötig. Sog mit Minus eintragen.", "Baukonstruktion Hausübung 1");
mc("bauko", K2, "Welche Kategorie und welche Last gelten für die Mannlast auf einem nicht begehbaren Dach?", ["Kategorie H: Q_k = 1,0 kN", "Kategorie A: 2,0 kN/m²", "Kategorie H: 2,0 kN", "Keine"], "1 kN entspricht etwa 100 kg – genau das wurde in einer Klausur gefragt.", "Baukonstruktion Hausübung 1, Klausuranalyse Baukonstruktion");
mc("bauko", K5, "Von welchen Faktoren hängt die Schneelast auf dem Dach ab?", ["Schneelastzone, Geländehöhe, Dachform/-neigung, Umgebung und Wärmedurchgang", "Nur von der Dachfarbe", "Nur vom Gewicht der Dachsteine", "Von der Windrichtung allein"], "s = μ_i · C_e · C_t · s_k: Zone und Höhe stecken in s_k, die Dachform in μ_i, die Umgebung in C_e und der Wärmedurchgang in C_t.", "Klausuranalyse Baukonstruktion");
pair("bauko", K5, "s = μ_i · C_e · C_t · s_k – was bedeutet welcher Faktor?", [["μ_i", "Formbeiwert (Dachform und -neigung)"], ["C_e", "Umgebungskoeffizient"], ["C_t", "Temperaturkoeffizient"], ["s_k", "charakteristische Schneelast am Boden"]], "Im Normalfall sind C_e = C_t = 1,0. Die Formel samt Komponenten war Teil-I-Frage.", "Klausuranalyse Baukonstruktion");
pair("bauko", K8, "Baustahl – Streckgrenze f_y,k ordnen.", [["S 235", "235 N/mm²"], ["S 355", "355 N/mm²"], ["S 460", "460 N/mm²"]], "Die Zahl im Namen ist die Streckgrenze. Die Zugfestigkeiten f_u liegen bei 360, 510 und 560 N/mm².", "Baukonstruktion V03");
pair("bauko", K8, "Was bedeutet S 235 J2?", [["S", "Baustahl (structural steel)"], ["235", "Streckgrenze in N/mm²"], ["J2", "Gütegruppe: Kerbschlagarbeit bei −20 °C"]], "Die Gütegruppe beschreibt die Zähigkeit aus dem Kerbschlagversuch.", "Baukonstruktion V03");
mc("bauko", K8, "Welcher Teilsicherheitsbeiwert gilt für den Querschnittswiderstand von Baustahl?", ["γ_M0 = 1,0", "γ_M = 1,3", "γ_S = 1,15", "γ_M = 1,5"], "Stahl ist sehr gleichmäßig. Holz 1,3, Betonstahl 1,15, Mauerwerk 1,5.", "Baukonstruktion V03, Ü06");
mc("bauko", K8, "Wie groß ist die Fließdehnung ε_y von S 235 ungefähr?", ["Rund 1 ‰", "Rund 10 %", "Rund 0,01 ‰", "Rund 5 %"], "ε_y = f_y / E = 235 / 210 000 ≈ 1,1 ‰. Danach fließt der Stahl, ohne dass die Spannung weiter steigt.", "Baukonstruktion V03");
mc("bauko", K8, "Was unterscheidet den plastischen vom elastischen Biegenachweis bei Stahl?", ["Plastisch zählt W_pl statt W_el – der ganze Querschnitt fließt", "Plastisch rechnet man ohne γ_M0", "Plastisch ist nur für Holz", "Es gibt keinen Unterschied"], "Das Verhältnis M_pl/M_el heißt plastischer Formbeiwert: rund 1,15 beim I-Profil, 1,5 beim Rechteck.", "Baukonstruktion V03");
mc("bauko", K8, "Warum trägt Beton im Stahlbeton keine Zugkräfte?", ["Seine Zugfestigkeit ist sehr gering und wird rechnerisch nicht angesetzt", "Beton ist zu schwer", "Zement löst sich unter Zug", "Er trägt Zug, aber nur bei Frost"], "Den Zug übernimmt der Betonstahl, den Druck der Beton. Spannstahl ist noch fester, aber teuer und sehr korrosionsanfällig.", "Baukonstruktion V03");
mc("bauko", K8, "Nenne Gründe für eine ausreichende Betondeckung.", ["Korrosionsschutz der Bewehrung, Verbund und Brandschutz", "Damit der Beton leichter wird", "Damit die Bewehrung sichtbar bleibt", "Damit Wasser abfließen kann"], "Die Deckung schützt den Stahl vor Feuchte und Feuer und sorgt dafür, dass Kräfte zwischen Stahl und Beton übertragen werden. Kam in 4 von 24 Klausuren.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Kragarm mit Einzellast am freien Ende: Wie sieht der Momentenverlauf aus?", ["Linear (Dreieck), Maximum an der Einspannung", "Parabel mit Maximum in der Mitte", "Konstant über die ganze Länge", "Null an der Einspannung"], "M = F · x wächst linear zur Einspannung hin. Bei Gleichlast wäre es eine Parabel mit q · l²/2 an der Einspannung.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Einfeldträger mit Einzellast F in der Mitte: Wie groß ist das größte Moment?", ["F · l / 4 in Feldmitte", "F · l / 8", "F · l", "F · l / 2 am Auflager"], "Der Verlauf ist ein Dreieck. Unter Gleichlast wäre es die Parabel mit q · l²/8.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Zweifeldträger unter Gleichlast: Wo liegt das betragsmäßig größte Moment?", ["Über der Mittelstütze: −0,125 · q · l²", "In Feldmitte: 0,070 · q · l²", "An den Endauflagern", "Überall gleich"], "Deshalb wird der Biegenachweis über der Stütze geführt (Altklausur 09/2022).", "Bauko-Altklausur 09/2022");
mc("bauko", K9, "Was ist der Unterschied zwischen Platten- und Scheibentragwirkung?", ["Platte: Last senkrecht zur Ebene (Biegung). Scheibe: Last in der Ebene", "Platten sind aus Holz, Scheiben aus Beton", "Scheiben tragen nur Eigengewicht", "Es gibt keinen Unterschied"], "Eine Decke trägt Nutzlast als Platte und Windlast als Scheibe zu den aussteifenden Wänden.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Wie viel Punkte bringt die Stabilisierung (Reihen- und Scheibenstabilisierung) in Teil I?", ["7–10 Punkte, in 23 von 24 Klausuren", "1 Punkt, selten", "Gar keine", "Sie kommt nur in Teil II"], "Die Aufgabe heißt meist: „Stabilisieren Sie die Konstruktion mit möglichst wenigen Diagonalen“ – einmal als reine Reihen-, einmal als reine Scheibenstabilisierung. Das Thema kommt in V07 (Aussteifung).", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Ab welcher Tiefe gilt eine Gründung als frostsicher?", ["Ab etwa 0,8 m", "Ab 0,2 m", "Ab 2 m", "Frost spielt keine Rolle"], "Wird in Gründungsaufgaben gern nebenbei abgefragt. Das Thema kommt in V11.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Wann gilt ein Fundament in den Musterlösungen noch als kippsicher?", ["Ausmitte e = M/N ≤ b/3", "e ≤ b/2", "e ≤ b", "Nur bei e = 0"], "Ohne klaffende Fuge muss e ≤ b/6 sein. Beim Kippen wirkt das Eigengewicht günstig, also γ = 1,0.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Was bedeutet HLzB 12-1,0-IIa?", ["Hochlochziegel B, Steinfestigkeitsklasse 12, Rohdichteklasse 1,0, Mörtelgruppe IIa", "Hohlblockstein, 12 cm dick", "Holz-Leichtbau, 12 Lagen", "Hochlochziegel mit 12 Löchern"], "Aus Festigkeitsklasse und Mörtelgruppe liest man f_k aus der Tabelle ab. Mauerwerk kommt in V09–V10.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Wie lautet der Bemessungswert der Mauerwerksdruckfestigkeit in den Musterlösungen?", ["f_d = 0,85 · f_k / 1,5", "f_d = f_k / 1,3", "f_d = kmod · f_k / 1,3", "f_d = f_k"], "Der Faktor 0,85 berücksichtigt Dauerstandseinflüsse, γ_M = 1,5 für Mauerwerk. Damit n_Rd = Φ · t · f_d.", "Klausuranalyse Baukonstruktion");
THEMEN["bauko|Stahl und Stahlbeton"] = "Baustahl ist gleichmäßig, zäh und fließt ab etwa 1 ‰ Dehnung – deshalb rechnet man mit γ_M0 = 1,0 und darf plastische Reserven nutzen. Im Stahlbeton teilen sich die Baustoffe die Arbeit: Beton nimmt Druck auf, der Betonstahl den Zug, und die Betondeckung schützt den Stahl vor Korrosion und Feuer.";
THEMEN["bauko|Schnittgrößen und Aussteifung"] = "Wer Momentenverläufe skizzieren kann, findet die maßgebende Stelle für den Nachweis sofort – beim Kragarm an der Einspannung, beim Durchlaufträger über der Stütze. Aussteifung sorgt dafür, dass Horizontallasten wie Wind sicher in den Baugrund kommen; in der Klausur ist die Stabilisierung mit möglichst wenigen Diagonalen fast immer dabei.";
/* Lösungsweg-Aufgaben */
aufgabe({
 "id": "bauko-ak2022-stuetze",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Zweifeldträger über der Stütze",
 "s": "Bauko-Altklausur 09/2022, Teil II, Aufgabe 1 b–d",
 "angabe": "Pos. 1 einer Scheune ist ein Zweifeldträger mit gleichen Feldern. Nachzuweisen ist die Biegung über der Mittelstütze, danach die Variante als Gerberträger. Überdachtes, offenes Tragwerk.",
 "geg": [
  "NH C24, 12/20",
  "l = 3,75 m je Feld",
  "g = 4,40 + 0,10 = 4,50 kN/m",
  "Schnee s = 2,10 kN/m",
  "200 m ü. NN"
 ],
 "ges": "Ausnutzung über der Stütze, mit und ohne Gerbergelenk",
 "schritte": [
  {
   "f": "Wo liegt das maßgebende Moment und wie bekommst du es?",
   "o": [
    [
     "Über der Mittelstütze: M = −0,125 · q · l² je Lastfall",
     "Beim Zweifeldträger unter Gleichlast ist das Stützmoment betragsmäßig am größten (Tafelwert)."
    ],
    [
     "In Feldmitte mit q · l²/8",
     "Das gilt für den Einfeldträger. Beim Zweifeldträger ist das Feldmoment kleiner (0,070 · q · l²)."
    ],
    [
     "Am Endauflager",
     "Dort ist das Moment null."
    ],
    [
     "Mit beiden Lastfällen zusammen, ohne Trennung",
     "Die Lastfälle müssen getrennt bleiben, damit man sie mit kmod vergleichen kann."
    ]
   ],
   "r": "M_g = −0,125 · 4,50 · 3,75² = −7,91 kNm\nM_s = −0,125 · 2,10 · 3,75² = −3,69 kNm"
  },
  {
   "f": "Welche Nutzungsklasse und welche kmod-Werte gelten?",
   "o": [
    [
     "NKL 2 (überdacht, offen): ständig 0,6 · Schnee kurz 0,9",
     "Schnee unter 1000 m ist „kurz“."
    ],
    [
     "NKL 1: alles 0,8",
     "Ein offenes Tragwerk ist nicht beheizt – NKL 2."
    ],
    [
     "NKL 3: Schnee 0,7",
     "NKL 3 gilt für frei bewitterte Bauteile."
    ],
    [
     "Schnee mittel: 0,8",
     "Mittel gilt für Schnee erst über 1000 m."
    ]
   ]
  },
  {
   "f": "Welche Kombination ist maßgebend?",
   "o": [
    [
     "Beide bilden und durch kmod teilen – der größere Quotient entscheidet",
     "1,35 · 7,91 / 0,6 = 17,8 gegen (1,35 · 7,91 + 1,5 · 3,69) / 0,9 = 18,0."
    ],
    [
     "Immer die mit der größten Last",
     "Ohne kmod-Vergleich ist das nicht gesichert."
    ],
    [
     "Nur Eigengewicht, weil kmod klein ist",
     "Hier gewinnt knapp die Kombination mit Schnee."
    ],
    [
     "Schnee allein",
     "Eigengewicht wirkt immer mit."
    ]
   ],
   "r": "M_Ed = 1,35 · 7,91 + 1,5 · 3,69 = 16,21 kNm (k_mod = 0,9)"
  },
  {
   "f": "Ist der Biegenachweis über der Stütze erfüllt?",
   "o": [
    [
     "Nein: σ = 16,21 · 100 / 800 = 2,03 kN/cm² > 1,66 kN/cm²",
     "W = 12 · 20²/6 = 800 cm³, f_m,d = 0,9 · 24/1,3 = 16,6 N/mm²."
    ],
    [
     "Ja, η = 0,82",
     "Dann wäre mit dem Feldmoment gerechnet worden."
    ],
    [
     "Ja, weil k_h = 1,3 gilt",
     "Bei h = 200 mm ist k_h = 1,0."
    ],
    [
     "Das hängt von der Durchbiegung ab",
     "Biegung im GZT ist ein eigener Nachweis."
    ]
   ],
   "r": "η = 2,03 / 1,66 = 1,22 > 1 → nicht erfüllt"
  },
  {
   "f": "Jetzt mit Gerbergelenk bei e = 0,1716 · l. Was ändert sich?",
   "o": [
    [
     "Feld- und Stützmoment werden gleich: ± 0,0858 · q · l²",
     "Das Gelenk schafft einen Momentennullpunkt – das Stützmoment sinkt deutlich."
    ],
    [
     "Das Stützmoment verdoppelt sich",
     "Das Gelenk entlastet die Stütze."
    ],
    [
     "Nichts",
     "Genau das Moment über der Stütze ändert sich."
    ],
    [
     "Das Moment wird überall null",
     "Im Feld und über der Stütze bleibt ein Moment."
    ]
   ],
   "r": "M_g = 5,43 kNm · M_s = 2,53 kNm → M_Ed = 11,13 kNm\nσ = 1,39 kN/cm² → η = 0,84 ✓"
  }
 ],
 "fazit": "Durchlaufträger: Stützmoment ist maßgebend. Kombinationen immer über M_Ed/kmod vergleichen. Reicht der Querschnitt nicht: Gerbergelenk, größerer Querschnitt oder höhere Festigkeitsklasse."
});
aufgabe({
 "id": "bauko-ak2022-durch",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Durchbiegung eines Sparrens",
 "s": "Bauko-Altklausur 09/2022, Teil II, Aufgabe 1 e",
 "angabe": "Pos. 2 (Sparren) wird als Einfeldträger betrachtet. Die Lasten wirken senkrecht zur Dachfläche. Überdachtes, offenes Tragwerk.",
 "geg": [
  "NH C30, 10/16",
  "Grundrissspannweite 4,0 m, α = 26,57°",
  "g⊥ = 0,62 kN/m",
  "s⊥ = 0,20 kN/m",
  "w = 0,16 kN/m",
  "E = 12 000 N/mm², I = 3413 cm⁴"
 ],
 "ges": "Nachweise w_inst, w_fin, w_net,fin",
 "schritte": [
  {
   "f": "Welche Spannweite setzt du an?",
   "o": [
    [
     "Die Länge entlang des Sparrens: l = 4,0 / cos 26,57° = 4,47 m",
     "Die Lasten wirken senkrecht zur Dachfläche – also gilt die schräge Länge."
    ],
    [
     "Die Grundrissspannweite 4,0 m",
     "Dann passen Last und Spannweite nicht zusammen."
    ],
    [
     "4,0 · cos 26,57° = 3,58 m",
     "Der Sparren ist länger als sein Grundriss, nicht kürzer."
    ],
    [
     "Die Firsthöhe",
     "Die Höhe ist keine Spannweite."
    ]
   ],
   "r": "l = 4,47 m"
  },
  {
   "f": "Wie bekommst du die Einzeldurchbiegungen?",
   "o": [
    [
     "w = q · l⁴ / (76,8 · E · I) je Lastart",
     "Das ist 5 · q · l⁴/(384 · E · I) für den Einfeldträger, getrennt für g, s und w."
    ],
    [
     "w = q · l² / 8",
     "Das ist ein Moment, keine Durchbiegung."
    ],
    [
     "Alle Lasten addieren und einmal rechnen",
     "Für die Kombination brauchst du die Anteile einzeln."
    ],
    [
     "w = q · l / (E · A)",
     "Das wäre eine Längenänderung unter Normalkraft."
    ]
   ],
   "r": "w_G = 0,79 cm · w_S = 0,25 cm · w_W = 0,20 cm"
  },
  {
   "f": "Wie kombinierst du für w_inst?",
   "o": [
    [
     "Eine Last führend, die andere mit ψ₀ (Schnee 0,5 · Wind 0,6) – beide Varianten prüfen",
     "Schnee führend: 0,79 + 0,25 + 0,6 · 0,20 = 1,16 cm. Wind führend: 1,12 cm."
    ],
    [
     "Alles voll addieren",
     "Zwei veränderliche Lasten treten selten gleichzeitig voll auf – deshalb ψ₀."
    ],
    [
     "Nur das Eigengewicht",
     "Die veränderlichen Lasten gehören zu w_inst dazu."
    ],
    [
     "Mit Teilsicherheitsbeiwerten 1,35 und 1,5",
     "Im GZG wird ohne Teilsicherheitsbeiwerte gerechnet."
    ]
   ],
   "r": "w_inst = 1,16 cm ≤ l/300 = 1,49 cm ✓"
  },
  {
   "f": "Was kommt bei w_fin dazu?",
   "o": [
    [
     "Das Kriechen: w_G · (1 + k_def) mit k_def = 0,8 für NKL 2",
     "Schnee und Wind haben ψ₂ = 0 und kriechen deshalb nicht mit."
    ],
    [
     "Nichts, w_fin = w_inst",
     "Holz verformt sich unter Dauerlast weiter."
    ],
    [
     "Alles mal 1,8",
     "Nur der quasi-ständige Anteil kriecht."
    ],
    [
     "k_def = 2,0",
     "Das gilt für NKL 3."
    ]
   ],
   "r": "w_fin = 0,79 · 1,8 + 0,25 + 0,6 · 0,20 = 1,79 cm ≤ l/200 = 2,24 cm ✓"
  },
  {
   "f": "Und die Netto-Enddurchbiegung?",
   "o": [
    [
     "Nur quasi-ständige Lasten mit Kriechen: w_G · (1 + k_def)",
     "Mit ψ₂ = 0 für Schnee und Wind bleibt nur das Eigengewicht, eine Überhöhung gibt es nicht."
    ],
    [
     "w_fin minus w_inst",
     "So ist w_net,fin nicht definiert."
    ],
    [
     "Wie w_inst",
     "Kriechen gehört dazu."
    ],
    [
     "Null",
     "Das Eigengewicht bleibt."
    ]
   ],
   "r": "w_net,fin = 0,79 · 1,8 = 1,42 cm ≤ l/300 = 1,49 cm ✓"
  }
 ],
 "fazit": "GZG: Einzeldurchbiegungen je Last, ohne Teilsicherheiten. w_inst mit ψ₀, w_fin mit Kriechen (k_def), w_net,fin nur quasi-ständig. Grenzwerte l/300, l/200, l/300."
});
aufgabe({
 "id": "bauko-hue1-dach",
 "f": "bauko",
 "t": "Lasten",
 "titel": "Lastermittlung Hausübung 1",
 "s": "Baukonstruktion Hausübung 1 (Übungsmodus)",
 "v": "pfettendach",
 "angabe": "Sparren eines Satteldachs in München. Die Fallen aus der Dynexite-Auswertung stecken in den Schritten.",
 "geg": [
  "Sparren NH C40, 8/16, e = 64 cm",
  "Dachaufbau Σ = 0,882 kN/m²",
  "α = 30°",
  "München, 519 m ü. NN",
  "Gebäude 10,045 m + 2 × 0,385 m Überstand",
  "Firsthöhe 9,11 m"
 ],
 "ges": "g pro Sparren (auch auf Grundfläche), Schnee, Windbereich-Grenze e",
 "schritte": [
  {
   "f": "Welche Wichte nimmst du für den Sparren?",
   "o": [
    [
     "5,0 kN/m³ – C40 laut Tabelle",
     "Die Wichte hängt von der Festigkeitsklasse ab: C24 4,2 · C30 4,6 · C40 5,0."
    ],
    [
     "4,2 kN/m³ wie immer",
     "4,2 gilt nur für C24 – genau dieser Fehler kostet in Dynexite den Punkt."
    ],
    [
     "25 kN/m³",
     "Das ist Stahlbeton."
    ],
    [
     "7,85 kN/m³",
     "Das ist eine falsche Einheit für Stahl (78,5 kN/m³)."
    ]
   ],
   "r": "g_Sparren = 5,0 · 0,08 · 0,16 = 0,064 kN/m"
  },
  {
   "f": "Wie kommst du auf die Last pro Sparren – und auf die Grundfläche?",
   "o": [
    [
     "0,882 · 0,64 + 0,064, dann durch cos 30° teilen",
     "Das Eigengewicht wirkt pro m Dachfläche. Auf die Grundrisslänge bezogen wird es größer."
    ],
    [
     "Mit cos 30° multiplizieren",
     "Dann würde die Last kleiner – sie muss auf die kürzere Grundlänge größer werden."
    ],
    [
     "Nur den Aufbau, ohne Sparren",
     "Der Sparren trägt sein eigenes Gewicht mit."
    ],
    [
     "Mit tan 30° umrechnen",
     "Die Umrechnung läuft über cos α."
    ]
   ],
   "r": "g = 0,63 kN/m · g′ = 0,63 / cos 30° = 0,73 kN/m"
  },
  {
   "f": "Wie bekommst du s_k für München (Zone 1a)?",
   "o": [
    [
     "Formel der Zone 1 mal 1,25",
     "Zone 1a liegt 25 % über Zone 1."
    ],
    [
     "Formel der Zone 2",
     "München liegt nicht in Zone 2 – das ergäbe 1,69 kN/m²."
    ],
    [
     "Mindestwert 0,65 kN/m²",
     "Der Formelwert liegt hier deutlich darüber."
    ],
    [
     "Formel der Zone 1 ohne Faktor",
     "Dann fehlen 25 %."
    ]
   ],
   "r": "s_k = 1,25 · (0,19 + 0,91 · ((519 + 140)/760)²) = 1,09 kN/m²"
  },
  {
   "f": "Welcher Formbeiwert gilt bei genau 30°?",
   "o": [
    [
     "μ₁ = 0,8",
     "Bis einschließlich 30° gilt 0,8; erst darüber wird abgemindert."
    ],
    [
     "μ₁ = 0,67",
     "Das wäre für 35°."
    ],
    [
     "μ₁ = 0",
     "Das gilt ab 60°."
    ],
    [
     "μ₁ = 1,0",
     "Den Wert gibt es für μ₁ nicht."
    ]
   ],
   "r": "s = 0,8 · 1,09 = 0,87 kN/m² → pro Sparren 0,87 · 0,64 = 0,56 kN/m"
  },
  {
   "f": "Was ist b in e = min(b; 2h)?",
   "o": [
    [
     "Die Länge des Dachgrundrisses inklusive Überstände",
     "So wertet Dynexite: 10,045 + 2 · 0,385 = 10,815 m."
    ],
    [
     "Die reine Gebäudelänge 10,045 m",
     "Diese Eingabe wurde als falsch gewertet."
    ],
    [
     "Die Gebäudetiefe in Windrichtung",
     "Das ist d, nicht b."
    ],
    [
     "Die Firsthöhe",
     "Die steckt in 2h."
    ]
   ],
   "r": "e = min(10,815; 18,22) = 10,815 m"
  }
 ],
 "fazit": "Hausübungs-Fallen: Wichte nach Festigkeitsklasse, g auf die Grundfläche mit /cos α, Zone 1a = 1,25 × Zone 1, μ₁ = 0,8 bis 30°, b inklusive Dachüberstand, Windzone nicht schätzen."
});
aufgabe({
 "id": "bauko-ue06-stahl",
 "f": "bauko",
 "t": "Stahl und Stahlbeton",
 "titel": "Stahlträger bemessen",
 "s": "Baukonstruktion Übung 06, Beispiel b",
 "v": "traeger",
 "angabe": "Der Einfeldträger aus Ü06 soll als Walzprofil der IPE-Reihe aus S 235 auf reine Biegung bemessen werden.",
 "geg": [
  "l = 4 m",
  "M_Ed = 12,6 kNm",
  "S 235: f_y,k = 235 N/mm²",
  "γ_M0 = 1,0"
 ],
 "ges": "IPE-Profil und Ausnutzung",
 "schritte": [
  {
   "f": "Braucht der Stahlträger auch einen kmod-Vergleich der Kombinationen?",
   "o": [
    [
     "Nein – kmod gibt es nur bei Holz, maßgebend ist das größte M_Ed",
     "Stahl hängt nicht von der Lastdauer ab. Hier ist M_Ed = 1,35 · 6 + 1,5 · 3 = 12,6 kNm."
    ],
    [
     "Ja, mit den gleichen kmod-Werten",
     "kmod ist ein Holzbeiwert."
    ],
    [
     "Ja, mit kmod = 1,0",
     "Den Beiwert gibt es bei Stahl gar nicht."
    ],
    [
     "Nur für Wind",
     "Auch dann nicht."
    ]
   ],
   "r": "M_Ed = 12,6 kNm"
  },
  {
   "f": "Wie groß ist die Bemessungsfestigkeit?",
   "o": [
    [
     "f_y,d = f_y,k / γ_M0 = 235 N/mm²",
     "Mit γ_M0 = 1,0 bleibt die Streckgrenze unverändert."
    ],
    [
     "235 / 1,3",
     "1,3 ist der Beiwert für Holz."
    ],
    [
     "235 / 1,15",
     "1,15 gilt für Betonstahl."
    ],
    [
     "360 N/mm² (f_u)",
     "Bemessen wird gegen Fließen, also mit f_y."
    ]
   ],
   "r": "f_y,d = 23,5 kN/cm²"
  },
  {
   "f": "Welches Widerstandsmoment brauchst du?",
   "o": [
    [
     "erf W = M_Ed / f_y,d",
     "Elastischer Biegenachweis: σ = M/W ≤ f_y,d."
    ],
    [
     "erf W = M_Ed · f_y,d",
     "Das ergibt eine falsche Einheit."
    ],
    [
     "erf A = M_Ed / f_y,d",
     "Für Biegung zählt W, nicht A."
    ],
    [
     "erf I = M_Ed / E",
     "Das wäre ein Verformungsansatz."
    ]
   ],
   "r": "erf W = 1260 kNcm / 23,5 kN/cm² = 53,6 cm³"
  },
  {
   "f": "Welches Profil wählst du?",
   "o": [
    [
     "IPE 140 mit W_el,y = 77,3 cm³ – das kleinste ausreichende",
     "IPE 120 hat nur 53,0 cm³ und reicht knapp nicht."
    ],
    [
     "IPE 100",
     "Viel zu klein."
    ],
    [
     "IPE 300",
     "Reicht, ist aber völlig überdimensioniert."
    ],
    [
     "Ein Profil mit W = 53,6 cm³ genau",
     "Man wählt aus der Tabelle das nächstgrößere."
    ]
   ],
   "r": "IPE 140: η = 1260 / 77,3 / 23,5 = 0,69 ≤ 1 ✓"
  }
 ],
 "fazit": "Stahl: kein kmod, γ_M0 = 1,0, erf W = M_Ed / f_y,d, nächstgrößeres Profil aus der Tabelle. Bei gleicher Last braucht der Stahlträger viel weniger W als Holz (53,6 statt 758 cm³)."
});
aufgabe({
 "id": "bauko-verband",
 "f": "bauko",
 "t": "Schnittgrößen und Aussteifung",
 "titel": "Zugkraft in einer Verbanddiagonale",
 "s": "Übungsaufgabe im Stil der Klausur Teil I (Verband, 5 von 24 Klausuren)",
 "angabe": "Ein Feld wird mit einer Stahldiagonale unter 45° ausgesteift. Oben greift eine horizontale Windlast an. Die Diagonale soll aus einem Vollkreisprofil bestehen und nicht fließen.",
 "geg": [
  "H_k = 80 kN (Wind)",
  "Diagonale unter 45°",
  "S 235: f_y = 235 N/mm²"
 ],
 "ges": "Zugkraft Z_d und erforderlicher Durchmesser d",
 "schritte": [
  {
   "f": "Wie bekommst du den Bemessungswert der Horizontallast?",
   "o": [
    [
     "H_d = 1,5 · H_k",
     "Wind ist eine veränderliche Einwirkung."
    ],
    [
     "H_d = 1,35 · H_k",
     "1,35 gilt für ständige Lasten."
    ],
    [
     "H_d = H_k",
     "Im GZT braucht es Teilsicherheitsbeiwerte."
    ],
    [
     "H_d = H_k / 1,5",
     "Einwirkungen werden vergrößert, nicht verkleinert."
    ]
   ],
   "r": "H_d = 1,5 · 80 = 120 kN"
  },
  {
   "f": "Wie groß ist die Zugkraft in der Diagonale?",
   "o": [
    [
     "Z_d = H_d / cos 45°",
     "Die Diagonale muss die waagerechte Last aufnehmen – ihre Horizontalkomponente ist Z · cos α."
    ],
    [
     "Z_d = H_d · cos 45°",
     "Dann wäre die Diagonalkraft kleiner als die Last – sie muss größer sein."
    ],
    [
     "Z_d = H_d",
     "Das gälte nur für einen waagerechten Stab."
    ],
    [
     "Z_d = H_d · tan 45°",
     "tan verknüpft Komponenten, nicht Stabkraft und Last."
    ]
   ],
   "r": "Z_d = 120 / 0,707 = 169,7 kN"
  },
  {
   "f": "Welche Fläche braucht der Stab mindestens?",
   "o": [
    [
     "A = Z_d / f_y",
     "Spannung σ = Z/A darf die Fließgrenze nicht überschreiten."
    ],
    [
     "A = Z_d · f_y",
     "Falsche Einheit."
    ],
    [
     "A = Z_d / f_u",
     "Gefordert ist „nicht fließen“ – also f_y."
    ],
    [
     "A = f_y / Z_d",
     "Kehrwert, falsche Einheit."
    ]
   ],
   "r": "A = 169 700 N / 235 N/mm² = 722 mm²"
  },
  {
   "f": "Wie bekommst du den Durchmesser?",
   "o": [
    [
     "d = √(4 · A / π), dann aufrunden",
     "Kreisfläche A = π · d²/4."
    ],
    [
     "d = A / π",
     "Das ergibt keine Länge."
    ],
    [
     "d = √A",
     "Das wäre die Seite eines Quadrats."
    ],
    [
     "d = 2 · A",
     "Falsche Einheit."
    ]
   ],
   "r": "d = √(4 · 722 / π) = 30,3 mm → gewählt d = 32 mm"
  }
 ],
 "fazit": "Verband: H_d mit γ_Q, Diagonalkraft Z_d = H_d / cos α, A = Z_d / f_y, d = √(4A/π). Diagonalen bekommen immer mehr Kraft als die Last selbst."
});
aufgabe({
 "id": "bauko-knick-stuetze",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Knicknachweis einer Holzstütze",
 "s": "Baukonstruktion V03/Ü06, Werte der Stütze Pos. 9 (Hausarbeitsbeispiel)",
 "angabe": "Die Stütze aus dem Querdruckbeispiel wird auf Knicken nachgewiesen (Kopf und Fuß gelenkig). Gerechnet wird mit der Formel aus Ü06 statt mit der Tabelle.",
 "geg": [
  "14/14 NH C24",
  "l = 3,27 m",
  "N_d = 53,41 kN",
  "k_mod = 1,0",
  "f_c,0,k = 21 N/mm²",
  "E_0,05 = 7400 N/mm²",
  "β_c = 0,2"
 ],
 "ges": "k_c und Ausnutzung",
 "schritte": [
  {
   "f": "Welche Knicklänge gilt?",
   "o": [
    [
     "Eulerfall 2, β = 1: l_ef = 3,27 m",
     "Beidseitig gelenkig gelagert – die Knicklänge ist die Stablänge."
    ],
    [
     "β = 2: l_ef = 6,54 m",
     "Das wäre ein Kragstiel."
    ],
    [
     "β = 0,5: l_ef = 1,64 m",
     "Das gilt für beidseitige Einspannung."
    ],
    [
     "β = 0,7",
     "Das wäre eingespannt und gelenkig."
    ]
   ],
   "r": "l_ef = 327 cm"
  },
  {
   "f": "Wie bekommst du die Schlankheit?",
   "o": [
    [
     "λ = l_ef / i mit i = h/√12",
     "Für den Rechteckquerschnitt ist der Trägheitsradius i = h/√12."
    ],
    [
     "λ = l_ef / h",
     "Dann fehlt der Faktor √12."
    ],
    [
     "λ = h / l_ef",
     "Kehrwert – je länger, desto schlanker."
    ],
    [
     "λ = l_ef · i",
     "Falsche Einheit."
    ]
   ],
   "r": "i = 14/√12 = 4,04 cm · λ = 327/4,04 = 80,9"
  },
  {
   "f": "Wie geht es zur bezogenen Schlankheit und zu k_c?",
   "o": [
    [
     "λ_rel = λ/π · √(f_c,0,k/E_0,05), dann k und k_c nach Formel oder Tabelle",
     "λ_rel = 1,37 → k = 0,5 · (1 + 0,2 · (1,37 − 0,3) + 1,37²) = 1,55 → k_c = 1/(k + √(k² − λ_rel²)) = 0,44."
    ],
    [
     "k_c = 1,0, weil die Stütze kurz ist",
     "Bei λ = 81 ist sie deutlich knickgefährdet."
    ],
    [
     "k_c = λ/100",
     "So ist k_c nicht definiert."
    ],
    [
     "k_c aus der Durchbiegung",
     "k_c hängt von der Schlankheit ab."
    ]
   ],
   "r": "λ_rel = 1,37 · k_c = 0,44"
  },
  {
   "f": "Wie lautet der Nachweis?",
   "o": [
    [
     "σ_c,0,d / (k_c · f_c,0,d) ≤ 1",
     "Druckspannung gegen die abgeminderte Druckfestigkeit."
    ],
    [
     "σ_c,0,d / f_c,0,d ≤ 1",
     "Ohne k_c fehlt die Knickgefahr."
    ],
    [
     "σ_c,0,d · k_c ≤ f_c,0,k",
     "k_c gehört zum Widerstand, und es fehlen kmod und γ_M."
    ],
    [
     "N_d ≤ N_cr",
     "Die ideale Knicklast allein ist kein Bemessungsnachweis."
    ]
   ],
   "r": "σ = 53,41 kN / 196 cm² = 2,73 N/mm² · f_c,0,d = 1,0 · 21/1,3 = 16,2 N/mm²\nη = 2,73 / (0,44 · 16,2) = 0,38 ✓"
  }
 ],
 "fazit": "Knicken: l_ef = β · l → i = h/√12 → λ → λ_rel → k_c (Tabelle oder Formel) → σ_c,0,d / (k_c · f_c,0,d) ≤ 1. Je schlanker, desto kleiner k_c."
});
/* Patch-Warteschlange · Baukonstruktion Übung 01 (Beispiele 1, 2, Selbstrechenaufgabe = Altklausur 09/2020) und Übung 02 (Einschub DFL/AFL/GFL, Hausübungen) · erstellt 02.11.2026
   Nutzt K7, K9 (aus „Baukonstruktion vertieft“) */
ord("bauko", K2, "Von der Wichte zur Einzellast: Bring die Schritte in Reihenfolge.", ["Wichte γ in kN/m³", "× Dicke → Flächenlast in kN/m²", "× Einzugsbreite → Streckenlast in kN/m", "× Länge → Einzellast in kN"], "Mit jedem Schritt kommt eine Länge dazu und eine Potenz von m fällt weg. Beispiel Stahlbeton: 25 kN/m³ · 0,16 m = 4,0 kN/m².", "Baukonstruktion Übung 01");
mc("bauko", K2, "Wie groß ist das Eigengewicht einer 16 cm dicken Stahlbetondecke?", ["4,0 kN/m²", "0,4 kN/m²", "16 kN/m²", "2,5 kN/m²"], "25 kN/m³ · 0,16 m = 4,0 kN/m². Bei Massivdecken ist die Rohdecke der mit Abstand größte Anteil – in Ü01 sind es 4,0 von 5,56 kN/m².", "Baukonstruktion Übung 01");
mc("bauko", K2, "Welche Nutzlastkategorie gilt für eine Massivdecke zwischen Wohnräumen?", ["A2: 1,5 kN/m² – mit ausreichender Querverteilung", "A3: 2,0 kN/m²", "A1: 1,0 kN/m²", "B1: 2,0 kN/m²"], "Massivdecken verteilen Lasten quer zur Spannrichtung. Holzbalkendecken können das nicht und bekommen deshalb A3 mit 2,0 kN/m².", "Baukonstruktion Übung 01");
mc("bauko", K3, "Holzbalken laufen über mehrere Felder. Welches Auflager gibt die größte Last an den Unterzug weiter?", ["Das erste Innenauflager (B) – größter Tafelwert", "Das Endauflager A", "Alle gleich viel", "Das letzte Auflager"], "Beim Vierfeldträger in Ü01: A = 0,393 · q · l, B = 1,143 · q · l, C = 0,929 · q · l. Der Unterzug unter B ist am stärksten belastet.", "Baukonstruktion Übung 01");
mc("bauko", K3, "Wie wird aus der Deckenlast eine Streckenlast auf den Unterzug?", ["Tafelwert × Flächenlast × Spannweite der Balken", "Flächenlast × Balkenabstand", "Tafelwert × Flächenlast", "Flächenlast / Spannweite"], "Die Auflagerkraft pro Meter Deckenbreite ist kN/m² · m = kN/m – genau die Last pro Meter Unterzug. Das Eigengewicht des Trägers kommt noch dazu.", "Baukonstruktion Übung 01");
mc("bauko", K5, "Wind wirkt senkrecht auf die Dachfläche. Wie groß sind seine Anteile auf Grundfläche (GFL) und Aufrissfläche (AFL)?", ["Beide sind so groß wie w – nur auf eine andere Bezugsfläche bezogen", "Auf der GFL w · cos α, auf der AFL w · sin α", "Auf beiden null", "Doppelt so groß wie w"], "Die Kraft auf das schräge Dach wird zerlegt, gleichzeitig wird die Bezugslänge kürzer. Beides hebt sich auf: w_GFL = w_AFL = w. Beim Eigengewicht ist das anders: g_GFL = g / cos α.", "Baukonstruktion Übung 02");
mc("bauko", K5, "Warum zerlegt man die Windlast überhaupt in GFL- und AFL-Anteile?", ["Damit sie sich mit den lotrechten Lasten (Eigengewicht, Schnee auf der Grundfläche) kombinieren lässt", "Weil der Wind sonst nicht wirkt", "Damit die Lasten kleiner werden", "Das ist nur bei Flachdächern nötig"], "Lasten mit verschiedenen Bezugsflächen kann man nicht einfach addieren. In Ü02 heißt es: „Lasten so nicht kombinierbar → Umrechnung in AFL und GFL“.", "Baukonstruktion Übung 02");
mc("bauko", K3, "Durchlaufträger mit ungleichen Feldern (l₁ : l₂ = 1 : 1,4): Wie bekommst du die Momente?", ["Mit der Tabelle für ungleiche Stützweiten: Beiwert · q · l₁²", "Mit q · l²/8 für jedes Feld", "Mit dem Mittelwert der Feldlängen", "Mit den Beiwerten für gleiche Felder"], "Die Tabelle liefert die Beiwerte für das Längenverhältnis. In der Altklausur 09/2020: M_b = −0,195 · q · 2,5².", "Bauko-Altklausur 09/2020 (Selbstrechenaufgabe Ü01)");
mc("bauko", K3, "Warum untersucht man bei Durchlaufträgern auch Verkehrslast nur in einzelnen Feldern?", ["Weil die feldweise Laststellung die größten Feldmomente liefern kann", "Weil Verkehr nie überall gleichzeitig steht", "Damit die Rechnung kürzer wird", "Das macht man nur bei Stahl"], "Altklausur 09/2020: Verkehr nur links ergibt im zweiten Feld 1,40 kNm, Verkehr überall nur 1,23 kNm. Für das Stützmoment ist dagegen die Vollbelastung maßgebend.", "Bauko-Altklausur 09/2020 (Selbstrechenaufgabe Ü01)");
mc("bauko", K7, "Was gilt für die Dynexite-Hausübungen in Baukonstruktion?", ["Alle 6 müssen mit mindestens 60 % bestanden sein; im Prüfungsmodus zählt der beste von 3 Versuchen", "Eine bestandene Hausübung reicht", "Die Hausübungen zählen zur Note", "Man hat unbegrenzt viele Prüfungsversuche"], "Sie sind Voraussetzung für die Klausur. Im Übungsmodus darf man beliebig oft üben, dort werden auch die Lösungen angezeigt.", "Baukonstruktion Übung 02");
wf("bauko", K7, "Dynexite wertet Folgefehler – ein falscher Zwischenwert kostet nur einen Punkt.", false, "Falsch – systembedingt gibt es keine Folgefehler. Ein falscher Zwischenwert macht alle Folgewerte falsch. Deshalb jede Zahl einzeln prüfen und auf Papier rechnen.", "Baukonstruktion Übung 02");
/* Lösungsweg-Aufgaben */
aufgabe({
 "id": "bauko-ue01-massivdecke",
 "f": "bauko",
 "t": "Lasten",
 "titel": "Eigengewicht einer Massivdecke",
 "s": "Baukonstruktion Übung 01, Beispiel 1",
 "angabe": "Massivdecke zwischen zwei Wohnräumen mit schwimmendem Estrich auf Trittschalldämmung.",
 "geg": [
  "Zementestrich 6 cm",
  "PE-Folie",
  "Trittschalldämmung 4 cm",
  "Stahlbeton 16 cm",
  "Gipsputz"
 ],
 "ges": "Eigengewicht g_k in kN/m²",
 "schritte": [
  {
   "f": "Wie gehst du beim Deckenaufbau vor?",
   "o": [
    [
     "Jede Schicht einzeln als Flächenlast aus den Bautabellen, dann summieren",
     "Für Estrich und Dämmung gibt es Werte je cm Dicke, für Folien und Putz feste Werte je m²."
    ],
    [
     "Nur den Stahlbeton ansetzen",
     "Die übrigen Schichten machen hier über 1,5 kN/m² aus."
    ],
    [
     "Alle Dicken addieren und mal 25 nehmen",
     "Jede Schicht hat ihre eigene Wichte."
    ],
    [
     "Einen Pauschalwert von 1 kN/m² nehmen",
     "Viel zu wenig für eine Massivdecke."
    ]
   ],
   "r": "Estrich: 0,22 kN/m² je cm · 6 cm = 1,32 kN/m²"
  },
  {
   "f": "Wie behandelst du dünne Lagen wie PE-Folie und Trittschalldämmung?",
   "o": [
    [
     "Mit den kleinen Tabellenwerten – sie gehören vollständig in die Summe",
     "PE-Folie 0,02 kN/m², Dämmung 0,01 kN/m² je cm · 4 cm = 0,04 kN/m²."
    ],
    [
     "Weglassen, sie wiegen nichts",
     "Klein, aber in der Aufstellung erwartet."
    ],
    [
     "Mit 25 kN/m³ rechnen",
     "Das ist die Wichte von Stahlbeton."
    ],
    [
     "Doppelt ansetzen zur Sicherheit",
     "Sicherheit kommt über γ_G, nicht über doppelte Lasten."
    ]
   ],
   "r": "PE-Folie 0,02 · Trittschalldämmung 0,04 kN/m²"
  },
  {
   "f": "Wie groß ist die Stahlbetonplatte?",
   "o": [
    [
     "25 kN/m³ · 0,16 m = 4,0 kN/m²",
     "Wichte mal Dicke ergibt die Flächenlast."
    ],
    [
     "25 · 16 = 400 kN/m²",
     "Die Dicke muss in Metern eingesetzt werden."
    ],
    [
     "24 kN/m³ · 0,16 m",
     "24 gilt für unbewehrten Beton."
    ],
    [
     "0,16 kN/m²",
     "Die Wichte fehlt."
    ]
   ],
   "r": "Stahlbeton 4,0 · Gipsputz 0,18 kN/m²"
  },
  {
   "f": "Wie lautet das Ergebnis – und welche Nutzlast gehört dazu?",
   "o": [
    [
     "g_k = 5,56 kN/m², Nutzlast A2 mit 1,5 kN/m² (Querverteilung vorhanden)",
     "Massivdecken verteilen Lasten quer, deshalb A2."
    ],
    [
     "g_k = 5,56 kN/m², Nutzlast A3",
     "A3 gilt für Decken ohne Querverteilung wie Holzbalkendecken."
    ],
    [
     "g_k = 4,0 kN/m²",
     "Der Fußbodenaufbau fehlt."
    ],
    [
     "g_k = 55,6 kN/m²",
     "Faktor 10 vertan."
    ]
   ],
   "r": "g_k = 1,32 + 0,02 + 0,04 + 4,0 + 0,18 = 5,56 kN/m²"
  }
 ],
 "fazit": "Deckenaufbau Schicht für Schicht aus den Tabellen aufsummieren. Bei Massivdecken dominiert die Rohdecke (25 kN/m³ · d)."
});
aufgabe({
 "id": "bauko-ue01-unterzug",
 "f": "bauko",
 "t": "Schnittgrößen und Aussteifung",
 "titel": "Lasten auf einen Unterzug",
 "s": "Baukonstruktion Übung 01, Beispiel 2",
 "angabe": "Eine Holzbalkendecke über einem Abstellraum (Büronutzung darüber) liegt auf Stahlträgern. Die Balken laufen über vier gleiche Felder von 1,5 m. Gesucht sind die Lasten auf den meistbelasteten Unterzug und dessen Last auf die Mittelstütze.",
 "geg": [
  "Estrich 4 cm, Dämmung 4 cm, 2 × Spanplatte 2 cm",
  "Balken: Vierfeldträger, l = 1,5 m",
  "Tafelwerte A 0,393 · B 1,143 · C 0,929",
  "Unterzug: Zweifeldträger, l = 2,5 m, Mitte 1,25",
  "Eigengewicht Träger 0,2 kN/m (Annahme)"
 ],
 "ges": "p und g auf den Unterzug B, Lasten auf die Mittelstütze",
 "schritte": [
  {
   "f": "Wie groß sind Eigengewicht und Nutzlast der Decke?",
   "o": [
    [
     "g_k = 1,24 kN/m², p_k = 2,0 kN/m² (Büro, B1)",
     "Estrich 0,88 + Dämmung 0,04 + Spanplatten 8 kN/m³ · 0,02 m · 2 = 0,32."
    ],
    [
     "p_k = 1,5 kN/m² (Wohnen)",
     "Es ist eine Bürofläche."
    ],
    [
     "g_k = 0,88 kN/m²",
     "Dämmung und Spanplatten fehlen."
    ],
    [
     "p_k = 5,0 kN/m²",
     "Das wäre eine Versammlungsfläche."
    ]
   ],
   "r": "g_k = 1,24 kN/m² · p_k = 2,0 kN/m²"
  },
  {
   "f": "Welcher Unterzug bekommt die meiste Last?",
   "o": [
    [
     "Der unter Auflager B – Tafelwert 1,143",
     "Beim Vierfeldträger ist das erste Innenauflager am stärksten belastet."
    ],
    [
     "Der unter A – Endauflager",
     "A bekommt nur 0,393 · q · l."
    ],
    [
     "Alle gleich viel",
     "Die Tafelwerte sind verschieden."
    ],
    [
     "Der unter der Mitte (C)",
     "C liegt mit 0,929 darunter."
    ]
   ]
  },
  {
   "f": "Wie groß ist die Streckenlast auf diesen Unterzug?",
   "o": [
    [
     "Tafelwert × Flächenlast × Balkenspannweite, beim Eigengewicht plus Träger",
     "Das ist die Auflagerkraft pro Meter Deckenbreite – also kN/m auf dem Unterzug."
    ],
    [
     "Flächenlast × 1,5 m ohne Tafelwert",
     "Der Tafelwert verteilt die Last auf die Auflager – ohne ihn fehlen 14 %."
    ],
    [
     "Tafelwert × Flächenlast",
     "Es fehlt die Spannweite, die Einheit wäre kN/m²."
    ],
    [
     "Tafelwert × Flächenlast × 2,5 m",
     "2,5 m ist die Spannweite des Unterzugs, nicht der Balken."
    ]
   ],
   "r": "p₂ = 1,143 · 2,0 · 1,5 = 3,43 kN/m\ng₂ = 1,143 · 1,24 · 1,5 + 0,2 = 2,33 kN/m"
  },
  {
   "f": "Welche Last gibt der Unterzug an die Mittelstütze ab?",
   "o": [
    [
     "Zweifeldträger: 1,25 · q · l je Lastart",
     "Das mittlere Auflager ist maßgebend, weil es den größten Tafelwert hat."
    ],
    [
     "q · l / 2",
     "Das gilt für den Einfeldträger."
    ],
    [
     "0,375 · q · l",
     "Das ist das Endauflager."
    ],
    [
     "p und g addieren und mit 1,35 multiplizieren",
     "Charakteristisch bleiben die Lastarten getrennt."
    ]
   ],
   "r": "P₂ = 1,25 · 3,43 · 2,5 = 10,71 kN\nG₂ = 1,25 · 2,33 · 2,5 = 7,27 kN"
  }
 ],
 "fazit": "Lastweitergabe: Flächenlast → über Tafelwerte des Durchlaufträgers zur Streckenlast auf den Unterzug → wieder über Tafelwerte zur Einzellast auf die Stütze. Lastarten bis zum Schluss getrennt halten.\nHinweis: Auf der Folie steht beim Eigengewicht g₂ = 2,236 kN/m – richtig ist 2,326 (damit stimmt G₂ = 7,27 kN)."
});
aufgabe({
 "id": "bauko-ak2020-decke",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Holzbalkendecke im Reihenhaus",
 "s": "Bauko-Altklausur 09/2020, Teil II, Aufgabe 1 (Selbstrechenaufgabe Ü01)",
 "angabe": "Holzbalkendecke ohne ausreichende Querverteilung, Balken als Zweifeldträger über eine Mittelwand. Die Ausgleichsfeuchte liegt unter 12 %.",
 "geg": [
  "NH C24, 8/16, e = 62,5 cm",
  "Fliesen 1 cm · Gipsestrich 4 cm · Spanplatte 2 cm · Dampfsperre · Sparschalung 2,4 cm · Gipskarton 1,5 cm · Dämmung 16 cm",
  "Stützweiten 2,5 m und 3,5 m (1 : 1,4)"
 ],
 "ges": "g_k und q_k pro Balken, Biege- und Schubnachweis",
 "schritte": [
  {
   "f": "Wie groß ist die Last pro Balken aus dem Aufbau?",
   "o": [
    [
     "Σ Schichten · e + Balken + Dämmung zwischen den Balken",
     "Der Aufbau ergibt 1,51 kN/m². Die Dämmung liegt nur zwischen den Balken: 0,16 · (0,625 − 0,08)."
    ],
    [
     "Σ Schichten · e, Balken und Dämmung weglassen",
     "Beides gehört zur ständigen Last."
    ],
    [
     "Σ Schichten / e",
     "Durch den Abstand zu teilen ist falsch."
    ],
    [
     "Dämmung über die volle Breite e",
     "Wo der Balken liegt, ist keine Dämmung."
    ]
   ],
   "r": "g_k = 1,51 · 0,625 + 0,05 + 0,09 = 1,08 kN/m\nq_k (A3) = 2,0 · 0,625 = 1,25 kN/m"
  },
  {
   "f": "Welche Nutzungsklasse und kmod-Werte gelten?",
   "o": [
    [
     "NKL 1 (Ausgleichsfeuchte < 12 %): g ständig 0,6 · q mittel 0,8",
     "Nutzlast auf Wohndecken ist „mittel“."
    ],
    [
     "NKL 2: q kurz 0,9",
     "Nutzlast ist nicht kurz, und die Feuchte spricht für NKL 1."
    ],
    [
     "NKL 3",
     "Innenraum mit trockenem Holz ist nicht NKL 3."
    ],
    [
     "kmod = 1,0 für alles",
     "Das gäbe es nur für Wind."
    ]
   ]
  },
  {
   "f": "Welche Kombination ist maßgebend?",
   "o": [
    [
     "g + q: (1,35 · 1,32 + 1,5 · 1,52) / 0,8 = 5,08 gegen nur g: 1,78 / 0,6 = 2,97",
     "Mit dem Stützmoment M_b = −0,195 · q · l₁² je Lastart."
    ],
    [
     "Nur g, weil kmod klein ist",
     "Hier überwiegt die Nutzlast deutlich."
    ],
    [
     "Das Feldmoment mit Verkehr links",
     "Das Stützmoment ist betragsmäßig größer."
    ],
    [
     "Ohne kmod nur M_Ed vergleichen",
     "Das kann die falsche Kombination liefern."
    ]
   ],
   "r": "M_Ed = 1,35 · 1,32 + 1,5 · 1,52 = 4,06 kNm (k_mod = 0,8)"
  },
  {
   "f": "Ist der Biegenachweis erfüllt?",
   "o": [
    [
     "Ja: σ = 406 / 341,3 = 1,19 kN/cm² ≤ 1,48 kN/cm², η = 0,80",
     "W = 8 · 16²/6 = 341,3 cm³, f_m,d = 0,8 · 2,4/1,3 = 1,48 kN/cm²."
    ],
    [
     "Nein, η = 1,19",
     "Dann wurde σ mit der Festigkeit verwechselt."
    ],
    [
     "Ja, η = 0,49",
     "Dann fehlt der Faktor 1,5 der Nutzlast."
    ],
    [
     "Nein, weil k_h = 1,3",
     "k_h ändert sich nicht zum Nachteil."
    ]
   ],
   "r": "η = 1,19 / 1,48 = 0,80 ✓"
  },
  {
   "f": "Und der Schubnachweis mit V_Ed aus dem Tafelwert 0,839?",
   "o": [
    [
     "τ = 1,5 · V_Ed / (k_cr · A) ≤ f_v,d",
     "V_Ed = 1,35 · 0,839 · 1,08 · 2,5 + 1,5 · 0,839 · 1,25 · 2,5 = 6,99 kN, k_cr = 0,5."
    ],
    [
     "τ = V_Ed / A ohne Faktoren",
     "Rechteck: Faktor 1,5, Vollholz: k_cr = 0,5."
    ],
    [
     "Schub muss man bei Decken nicht nachweisen",
     "Er ist Teil der Klausuraufgabe."
    ],
    [
     "τ = M_Ed / W",
     "Das ist die Biegespannung."
    ]
   ],
   "r": "τ = 1,5 · 6,99 / (0,5 · 128) = 0,164 kN/cm² ≤ 0,246 → η = 0,67 ✓"
  }
 ],
 "fazit": "Klausur-Holzbau in Kurzform: Lasten pro Balken (Dämmung nur zwischen den Balken!) → Momente mit Tabellen → Kombinationen über M_Ed/kmod → Biegung → Schub mit 1,5 und k_cr."
});
