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
/* Patch-Warteschlange · Physik V04 Axiome von Newton · Übungsblatt 4 (Fragen + Lösungsweg-Aufgaben) · erstellt 03.11.2026 */
const P5 = "Newtonsche Axiome";
THEMEN["phys|Newtonsche Axiome"] = "Mit Newton beginnt die Dynamik: Kräfte sind die Ursache dafür, dass sich Bewegungen ändern. Das 1. Axiom sagt, ohne resultierende Kraft bleibt die Geschwindigkeit gleich, das 2. verknüpft Kraft, Masse und Beschleunigung über F = m·a, und das 3. stellt klar, dass Kräfte immer paarweise zwischen zwei Körpern auftreten. Das Handwerkszeug für jede Aufgabe ist das Freikörperbild: Körper isolieren, alle Kräfte einzeichnen, ΣF = m·a je Richtung aufschreiben.";

/* ── Vorlesung V04 ── */
pair("phys", P5, "Ordne jedem Newtonschen Axiom seinen Namen zu.", [["1. Axiom", "Trägheitsprinzip"], ["2. Axiom", "Aktionsprinzip"], ["3. Axiom", "Reaktionsprinzip (actio = reactio)"]], "1: ohne Kraft keine Bewegungsänderung. 2: F = ṗ = m·a. 3: Kraft und Gegenkraft sind gleich groß und entgegengesetzt.", "Physik V04, Folie 7");
mc("phys", P5, "Was besagt das 1. Newtonsche Axiom (Trägheitsprinzip)?", ["Ohne Kraft bleibt ein Körper in Ruhe oder bewegt sich geradlinig gleichförmig", "Ohne Kraft kommt jeder Körper irgendwann zur Ruhe", "Jede Kraft erzeugt eine gleich große Gegenkraft", "Kraft ist Masse mal Geschwindigkeit"], "Dass Körper im Alltag zur Ruhe kommen, liegt an einer verborgenen Kraft – der Reibung. Ohne sie bliebe v konstant.", "Physik V04, Folie 3/8");
wf("phys", P5, "Ein Körper, der sich mit konstanter Geschwindigkeit geradeaus bewegt, braucht keine resultierende Kraft.", true, "Richtig – nach dem 1. Axiom ist ΣF = 0 gleichbedeutend mit v = const. Eine Kraft braucht man nur, um die Geschwindigkeit zu ändern (Betrag oder Richtung).", "Physik V04, Folie 8");
mc("phys", P5, "Wie lautet das 2. Newtonsche Axiom in seiner allgemeinen Form?", ["F = dp/dt – die Kraft ist die zeitliche Änderung des Impulses", "F = m·v", "F = p·t", "F = m·g immer und überall"], "Bei konstanter Masse folgt daraus F = m·a. F = m·g ist nur der Sonderfall Gewichtskraft.", "Physik V04, Folie 7/9");
mc("phys", P5, "Wie ist der Impuls definiert?", ["p = m·v, ein Vektor in Richtung der Geschwindigkeit", "p = m·a", "p = F·s", "p = ½·m·v², ein Skalar"], "Die Masse ist ein Skalar, also zeigt p in Richtung von v. Einheit kg·m/s. ½mv² wäre die kinetische Energie.", "Physik V04, Folie 5/6");
mc("phys", P5, "Was ist 1 Newton in SI-Basiseinheiten?", ["1 kg·m/s²", "1 kg·m/s", "1 kg·m²/s²", "1 kg/s²"], "Aus F = m·a: kg mal m/s². kg·m/s ist die Einheit des Impulses, kg·m²/s² die eines Joule.", "Physik V04, Folie 4");
wf("phys", P5, "Verdoppelt man die Kraft auf einen Körper, verdoppelt sich seine Beschleunigung.", true, "Richtig – a = F/m: Die Beschleunigung ist proportional zur Kraft und umgekehrt proportional zur Masse.", "Physik V04, Folie 9/20");
mc("phys", P5, "Was beschreibt die (träge) Masse eines Körpers?", ["Wie stark er sich einer Änderung seines Bewegungszustands widersetzt", "Wie stark ihn die Erde anzieht – das ist dasselbe wie sein Gewicht", "Seine Geschwindigkeit", "Wie groß sein Volumen ist"], "Je größer die Masse, desto größer die Trägheit: Bei gleicher Kraft wird ein schwerer Körper weniger beschleunigt.", "Physik V04, Folie 4/10");
wf("phys", P5, "Masse und Gewichtskraft sind dasselbe.", false, "Falsch – die Masse (kg) ist überall gleich, die Gewichtskraft F_G = m·g (N) hängt von der Schwerebeschleunigung ab. Auf dem Mond ist die Masse gleich, das Gewicht etwa ein Sechstel.", "Physik V04, Folie 11/12");
mc("phys", P5, "Welche Kraft hält einen Körper auf einer Kreisbahn mit Radius r?", ["Die Zentripetalkraft F_r = m·ω²·r, zum Mittelpunkt gerichtet", "Die Zentrifugalkraft nach außen", "Eine Kraft tangential in Bewegungsrichtung", "Keine – die Bewegung ist ja gleichförmig"], "Folge aus dem 2. Axiom: Die Radialbeschleunigung ω²·r braucht eine Kraft m·ω²·r zur Mitte. Die Fliehkraft ist eine Scheinkraft, die im Inertialsystem nicht auftritt.", "Physik V04, Folie 13/17");
mc("phys", P5, "Was ist ein Inertialsystem?", ["Ein Bezugssystem, in dem ein kräftefreier Körper ruht oder sich gleichförmig geradlinig bewegt", "Ein Bezugssystem, das sich dreht", "Ein beschleunigtes Bezugssystem", "Das Bezugssystem der Erdachse"], "Nur dort gelten die Newtonschen Axiome ohne Scheinkräfte wie die Fliehkraft.", "Physik V04, Folie 17");
mc("phys", P5, "Ein Buch liegt auf dem Tisch. Was ist nach dem 3. Axiom die Gegenkraft zur Gewichtskraft des Buches (Erde zieht Buch)?", ["Das Buch zieht die Erde mit gleich großer Kraft an", "Der Tisch drückt das Buch nach oben", "Die Reibung zwischen Buch und Tisch", "Es gibt keine, das Buch ruht ja"], "Kraft und Gegenkraft wirken immer auf zwei VERSCHIEDENE Körper. Normalkraft und Gewicht wirken beide auf das Buch – sie heben sich auf, sind aber kein actio-reactio-Paar.", "Physik V04, Folie 15/21");
wf("phys", P5, "Kraft und Gegenkraft nach dem 3. Axiom heben sich auf, deshalb kann sich nie etwas bewegen.", false, "Falsch – die beiden Kräfte greifen an verschiedenen Körpern an. Aufheben können sich nur Kräfte, die am selben Körper wirken.", "Physik V04, Folie 15");

/* ── Übungsblatt 4 ── */
ord("phys", P5, "Rezept für jede Newton-Aufgabe: Reihenfolge?", ["Körper isolieren (Freikörperbild)", "Alle Kräfte auf diesen Körper als Pfeile einzeichnen", "Achsen festlegen, Richtung der Beschleunigung markieren", "ΣF = m·a je Richtung aufschreiben", "Gleichungen der Körper kombinieren und nach der Unbekannten auflösen"], "So ging es in allen Aufgaben von Blatt 4. Wer bei mehreren Körpern jeden einzeln isoliert, vergisst keine Kraft.", "Physik Blatt 4, Hinweise");
pair("phys", P5, "Ordne die Kraft auf der schiefen Ebene (Winkel α) zu.", [["Hangabtrieb", "m·g·sin α"], ["Normalanteil des Gewichts", "m·g·cos α"], ["Normalkraft der Ebene", "gleich groß wie m·g·cos α, entgegengesetzt"], ["Gewichtskraft", "m·g, senkrecht nach unten"]], "Bei α = 0 ist der Hangabtrieb null und die Normalkraft gleich m·g – gute Probe, ob sin und cos richtig verteilt sind.", "Physik Blatt 4, A3–A5");
mc("phys", P5, "Blatt 4, A1: Drei Kräfte erzeugen die Beschleunigung a. Wie bekommst du die fehlende Kraft F₃?", ["F₃ = m·a − F₁ − F₂, je Komponente", "F₃ = F₁ + F₂ − m·a", "F₃ = m·a, die anderen Kräfte spielen keine Rolle", "F₃ = −(F₁ + F₂)"], "Aus F₁ + F₂ + F₃ = m·a. −(F₁ + F₂) wäre nur richtig, wenn der Körper nicht beschleunigt (a = 0).", "Physik Blatt 4, Aufgabe 1");
wf("phys", P5, "In einem Freikörperbild zeichnet man m·a als zusätzliche Kraft ein.", false, "Falsch – m·a ist die Summe aller echten Kräfte, keine weitere Kraft. Im Krafteck ist es der Pfeil, der vom Anfang des ersten zur Spitze des letzten Kraftpfeils reicht.", "Physik Blatt 4, Aufgabe 1");
mc("phys", P5, "Blatt 4, A2: F schiebt zwei Blöcke (m₁ > m₂). Wann ist die Kontaktkraft zwischen den Blöcken größer?", ["Wenn F am leichten Block angreift und den schweren schiebt", "Wenn F am schweren Block angreift", "Sie ist in beiden Fällen gleich", "Das hängt nur von F ab, nicht von den Massen"], "Die Kontaktkraft muss nur den geschobenen Block beschleunigen: F_K = m_geschoben · a. Der schwere Block braucht dafür mehr Kraft.", "Physik Blatt 4, Aufgabe 2");
wf("phys", P5, "Blatt 4, A2: Beide Blöcke haben dieselbe Beschleunigung a = F / (m₁ + m₂).", true, "Richtig – sie bewegen sich zusammen. F beschleunigt die Gesamtmasse, die Kontaktkraft ist eine innere Kraft und fällt im Gesamtsystem heraus.", "Physik Blatt 4, Aufgabe 2");
mc("phys", P5, "Blatt 4, A3: Wann hängt das Seil zwischen den Kisten gerade durch?", ["Wenn beide Kisten allein genau gleich schnell beschleunigen würden: F/m₁ = g·sin α", "Wenn F = 0 ist", "Wenn m₁ = m₂ ist", "Nie, ein Seil ist immer gespannt"], "Dann zieht keine Kiste an der anderen, F_S = 0. Daraus folgt F_max = m₁·g·sin α.", "Physik Blatt 4, Aufgabe 3");
wf("phys", P5, "Ein Seil kann ziehen und drücken.", false, "Falsch – ein Seil kann nur ziehen. Kommt rechnerisch F_S < 0 heraus, ist das Seil schlaff und die Annahme „gemeinsame Beschleunigung“ falsch.", "Physik Blatt 4, Aufgabe 3");
mc("phys", P5, "Blatt 4, A4: Skifahrer mit konstanter Geschwindigkeit auf reibungsfreier Piste. Welche Kraft übt der Wind aus?", ["m·g·sin α, hangaufwärts", "m·g·sin α, hangabwärts", "m·g, waagerecht", "Keine – er fährt ja"], "Konstante Geschwindigkeit heißt ΣF = 0. Der Wind muss den Hangabtrieb genau ausgleichen.", "Physik Blatt 4, Aufgabe 4");
mc("phys", P5, "Blatt 4, A5: Was ist die Kraft des Motorrads auf den Fahrer – im Vergleich zur resultierenden Kraft m·a?", ["Viel größer: Sie trägt auch das Gewicht, F_M = m·√(a² + g² + 2ag·sin α)", "Genau m·a", "Genau m·g", "m·a − m·g"], "m·a ist die Summe aus Gewicht und Motorradkraft. Das Motorrad muss das Gewicht zusätzlich ausgleichen, deshalb zeigt F_M steil nach oben.", "Physik Blatt 4, Aufgabe 5");
mc("phys", P5, "Blatt 4, A6: Warum muss der Mann im Bootsmannsstuhl nur halb so stark ziehen wie ein Kollege am Boden?", ["Das Seil zieht zweimal an ihm: an der Hand und über die Rolle am Stuhl", "Die Rolle halbiert jede Kraft", "Er ist leichter als der Kollege", "Weil actio = reactio gilt, braucht er gar keine Kraft"], "Am System Mann + Stuhl greifen zwei Seilstücke an: 2F_S − m·g = m·a. Zieht der Kollege, hängt nur ein Seilstück am System.", "Physik Blatt 4, Aufgabe 6");
mc("phys", P5, "Blatt 4, A6: Mit welcher Kraft zieht die Rolle an der Decke?", ["2·F_S – zwei Seilstücke ziehen an der Rolle nach unten", "F_S", "m·g", "Null, die Rolle ist masselos"], "Masselos heißt nur, dass sie kein eigenes Gewicht hat. Beide Seilenden ziehen mit F_S nach unten.", "Physik Blatt 4, Aufgabe 6");

/* ── Lösungsweg-Aufgaben Blatt 4 ── */
aufgabe({
 "id": "phys-b4-a1", "f": "phys", "t": "Newtonsche Axiome", "titel": "Die fehlende dritte Kraft", "s": "Physik Übungsblatt 4, Aufgabe 1",
 "angabe": "Ein Körper (Masse m) wird auf einer reibungsfreien horizontalen Ebene (Draufsicht) mit a beschleunigt. α liegt zwischen a und der +x-Achse. F₁ zeigt nach links unten, β liegt zwischen F₁ und der −x-Achse. F₂ zeigt in +y-Richtung. Eine dritte Kraft F₃ ist unbekannt.",
 "geg": ["m", "F₁", "F₂", "a", "α", "β"],
 "ges": "F₃ in Einheitsvektoren, Betrag und Richtungswinkel",
 "schritte": [
  { "f": "Welches Gesetz setzt du an, um F₃ zu bestimmen?", "o": [
    ["2. Axiom: F₁ + F₂ + F₃ = m·a", "Drei Kräfte erzeugen zusammen die Beschleunigung a. Das ist eine Vektorgleichung."],
    ["Kräftegleichgewicht F₁ + F₂ + F₃ = 0", "Das gilt nur ohne Beschleunigung. Hier wird der Körper aber beschleunigt."],
    ["actio = reactio: F₃ = −F₁", "Das 3. Axiom verbindet Kräfte zwischen zwei Körpern. Hier wirken alle drei Kräfte auf denselben Körper."],
    ["F₃ = m·a allein", "Dann hätten F₁ und F₂ keine Wirkung. Sie gehören aber zur Summe."]],
   "r": "F₃ = m·a − F₁ − F₂" },
  { "f": "Wie schreibst du F₁ in Komponenten? (β gegen die −x-Achse, nach links unten)", "o": [
    ["F₁ = −F₁ cos β · e_x − F₁ sin β · e_y", "F₁ zeigt nach links und nach unten, also sind beide Komponenten negativ. β liegt an der x-Achse, deshalb cos für x."],
    ["F₁ = F₁ cos β · e_x + F₁ sin β · e_y", "So würde F₁ nach rechts oben zeigen – in der Abbildung zeigt er nach links unten."],
    ["F₁ = −F₁ sin β · e_x − F₁ cos β · e_y", "Sin und cos vertauscht: β wird gegen die x-Achse gemessen, also gehört cos β zur x-Komponente."],
    ["F₁ = −F₁ · e_x", "Das wäre nur richtig für β = 0."]],
   "r": "F₁ = −F₁ cos β · e_x − F₁ sin β · e_y\nF₂ = F₂ · e_y\nm·a = m a cos α · e_x + m a sin α · e_y" },
  { "f": "Wie lautet dann die x-Komponente von F₃?", "o": [
    ["F₃x = m a cos α + F₁ cos β", "m·a minus F₁: Das Minus vor der negativen Komponente von F₁ wird zum Plus. F₂ hat keinen x-Anteil."],
    ["F₃x = m a cos α − F₁ cos β", "Vorzeichenfehler: Du ziehst F₁x = −F₁ cos β ab, also kommt +F₁ cos β heraus."],
    ["F₃x = m a cos α + F₁ cos β − F₂", "F₂ zeigt genau in y-Richtung und hat keine x-Komponente."],
    ["F₃x = m a sin α + F₁ sin β", "Das ist die Form der y-Komponente (ohne F₂)."]],
   "r": "F₃x = m a cos α + F₁ cos β\nF₃y = m a sin α + F₁ sin β − F₂" },
  { "f": "Wie bekommst du Betrag und Richtungswinkel von F₃?", "o": [
    ["F₃ = √(F₃x² + F₃y²), φ = arctan(F₃y / F₃x)", "Pythagoras für den Betrag, arctan für den Winkel gegen +x. Da F₃x hier immer positiv ist, ist keine Quadrantenkorrektur nötig."],
    ["F₃ = F₃x + F₃y", "Komponenten stehen senkrecht aufeinander, man addiert die Quadrate."],
    ["φ = arctan(F₃x / F₃y)", "Das wäre der Winkel gegen die y-Achse."],
    ["F₃ = m·a", "Das ist nur der Betrag der resultierenden Kraft, nicht von F₃."]],
   "r": "Beispiel: m = 2 kg, a = 3 m/s², α = 50°, F₁ = 10 N, β = 30°, F₂ = 20 N\nF₃ = (12,5 e_x − 10,4 e_y) N, F₃ = 16,3 N, φ = −39,7°" }],
 "fazit": "Fehlende Kraft = m·a minus alle bekannten Kräfte, Komponente für Komponente. Die meisten Fehler passieren bei Vorzeichen und bei der Frage, gegen welche Achse ein Winkel gemessen wird."
});

aufgabe({
 "id": "phys-b4-a2", "f": "phys", "t": "Newtonsche Axiome", "titel": "Zwei Blöcke nebeneinander", "s": "Physik Übungsblatt 4, Aufgabe 2",
 "angabe": "Zwei Blöcke stehen auf einem reibungsfreien Tisch direkt nebeneinander (m₁ > m₂). a) F schiebt von links auf den großen Block m₁. b) F schiebt von rechts auf den kleinen Block m₂.",
 "geg": ["m₁", "m₂ < m₁", "F"],
 "ges": "Kontaktkraft zwischen den Blöcken in a) und b)",
 "schritte": [
  { "f": "Womit bestimmst du zuerst die Beschleunigung?", "o": [
    ["Gesamtsystem: F = (m₁ + m₂)·a", "Beide Blöcke bewegen sich gemeinsam. Die Kontaktkraft ist eine innere Kraft und fällt hier heraus."],
    ["F = m₁·a", "Dann würde m₂ nicht mitbeschleunigt. F muss aber beide Blöcke bewegen."],
    ["F = m₂·a", "Der kleine Block allein – aber F schiebt beide."],
    ["Die Beschleunigung ist null, weil sich die Kräfte aufheben", "Auf das Gesamtsystem wirkt waagerecht nur F, also beschleunigt es."]],
   "r": "a = F / (m₁ + m₂)" },
  { "f": "a) F wirkt auf m₁. Welchen Block isolierst du, um die Kontaktkraft zu finden?", "o": [
    ["m₂ – auf ihn wirkt waagerecht nur die Kontaktkraft", "Am Block ohne äußere Kraft gibt es genau eine waagerechte Kraft. So steht die Kontaktkraft allein in der Gleichung."],
    ["m₁ – dort greift F an", "Geht auch, ist aber umständlicher: F − F_K = m₁a. Einfacher ist der Block mit nur einer Kraft."],
    ["Keinen, die Kontaktkraft ist gleich F", "Dann bliebe für m₁ keine resultierende Kraft übrig, er würde nicht beschleunigen."],
    ["Beide zusammen", "Im Gesamtsystem fällt die Kontaktkraft gerade heraus."]],
   "r": "F_K = m₂·a = m₂ F / (m₁ + m₂)" },
  { "f": "b) Jetzt wirkt F auf m₂. Wie groß ist die Kontaktkraft?", "o": [
    ["m₁·a = m₁ F / (m₁ + m₂) – jetzt wird der schwere Block geschoben", "Isoliere m₁: Er wird nur über die Kontaktkraft beschleunigt. Da m₁ > m₂, ist die Kraft größer als in a)."],
    ["Genauso groß wie in a)", "Die Beschleunigung ist gleich, aber der geschobene Block hat eine andere Masse."],
    ["m₂·a, wie in a)", "Auf m₂ wirken jetzt F und die Kontaktkraft – du musst den anderen Block isolieren."],
    ["F", "Dann würde m₂ selbst nicht beschleunigen."]],
   "r": "F_K = m₁ F / (m₁ + m₂)\nBeispiel: m₁ = 2,3 kg, m₂ = 1,2 kg, F = 3,2 N → a) 1,10 N, b) 2,10 N" }],
 "fazit": "Die Kontaktkraft muss genau den Block beschleunigen, der geschoben wird. Isoliere immer den Körper mit den wenigsten Kräften."
});

aufgabe({
 "id": "phys-b4-a3", "f": "phys", "t": "Newtonsche Axiome", "titel": "Kiste am Seil auf der schiefen Ebene", "s": "Physik Übungsblatt 4, Aufgabe 3",
 "angabe": "Kiste m₁ liegt auf einer waagerechten, reibungsfreien Fläche und wird mit F nach rechts zur Rolle gezogen. Über die Rolle ist sie per Seil mit Kiste m₂ verbunden, die auf einer reibungsfreien schiefen Ebene (Winkel α) hängt.",
 "geg": ["m₁", "m₂", "α", "F", "g"],
 "ges": "Seilkraft F_S; größtes F, bei dem das Seil nicht durchhängt",
 "schritte": [
  { "f": "m₁ isoliert: Welche Gleichung gilt waagerecht?", "o": [
    ["F + F_S = m₁·a – beide ziehen nach rechts", "Das Seil zieht m₁ zur Rolle, also in dieselbe Richtung wie F."],
    ["F − F_S = m₁·a", "Das Seil zieht m₁ zur Rolle hin (nach rechts), nicht zurück."],
    ["F = m₁·a", "Die Seilkraft fehlt."],
    ["F_S = m₁·g", "m₁·g wirkt senkrecht und wird von der Normalkraft aufgehoben."]],
   "r": "F + F_S = m₁ a" },
  { "f": "m₂ isoliert: Welche Gleichung gilt parallel zum Hang (abwärts positiv)?", "o": [
    ["m₂ g sin α − F_S = m₂·a", "Der Hangabtrieb zieht abwärts, das Seil hält hangaufwärts dagegen."],
    ["m₂ g − F_S = m₂·a", "Nur der Hangabtrieb m₂ g sin α wirkt parallel zum Hang, nicht das ganze Gewicht."],
    ["m₂ g cos α − F_S = m₂·a", "cos α gehört zum Normalanteil, der von der Normalkraft aufgehoben wird."],
    ["m₂ g sin α + F_S = m₂·a", "Das Seil zieht m₂ zur Rolle, also hangaufwärts – mit Minus."]],
   "r": "m₂ g sin α − F_S = m₂ a" },
  { "f": "Wie eliminierst du a?", "o": [
    ["Beide Gleichungen addieren → a = (F + m₂ g sin α) / (m₁ + m₂), dann einsetzen", "Beim Addieren fällt F_S heraus. Mit a gehst du zurück in eine der Gleichungen."],
    ["a = g setzen", "Die Kisten fallen nicht frei, das Seil koppelt sie."],
    ["a = 0 setzen", "Es gibt keine Gleichgewichtsbedingung – die Kisten beschleunigen."],
    ["Die beiden Gleichungen voneinander abziehen", "Dann fällt F_S nicht heraus, sondern verdoppelt sich."]],
   "r": "F_S = m₂ g sin α − m₂ a = m₂ (m₁ g sin α − F) / (m₁ + m₂)" },
  { "f": "b) Welche Bedingung liefert das größte F, bei dem das Seil gerade noch gespannt ist?", "o": [
    ["F_S = 0 setzen", "Bei F_S = 0 hängt das Seil gerade durch. Für größere F würde F_S negativ – ein Seil kann aber nicht drücken."],
    ["a = 0 setzen", "Die Kisten müssen nicht stillstehen. Entscheidend ist, ob das Seil zieht."],
    ["F = m₂ g setzen", "Das ganze Gewicht von m₂ spielt keine Rolle, nur sein Hangabtrieb."],
    ["F_S = F setzen", "Dafür gibt es keinen physikalischen Grund."]],
   "r": "F_max = m₁ g sin α\nBeispiel: m₁ = 3,7 kg, m₂ = 2,3 kg, α = 30°, F = 2,3 N → F_S = 6,08 N, F_max = 18,1 N" }],
 "fazit": "Zwei Körper am Seil: jeden einzeln isolieren, je eine Gleichung, addieren, damit die Seilkraft herausfällt. Seil schlaff ⇔ F_S = 0."
});

aufgabe({
 "id": "phys-b4-a5", "f": "phys", "t": "Newtonsche Axiome", "titel": "Motorradfahrer auf der Rampe", "s": "Physik Übungsblatt 4, Aufgabe 5",
 "angabe": "Motorrad und Fahrer (Fahrermasse m) beschleunigen mit a eine Rampe hinauf, die den Winkel α mit der Horizontalen bildet.",
 "geg": ["m", "a", "g", "α"],
 "ges": "Resultierende Kraft auf den Fahrer; Kraft des Motorrads auf den Fahrer",
 "schritte": [
  { "f": "Wie groß ist die resultierende Kraft auf den Fahrer?", "o": [
    ["F_res = m·a, hangaufwärts", "2. Axiom: Die Summe aller Kräfte ist Masse mal Beschleunigung – und zeigt in Richtung von a."],
    ["F_res = m·g", "Das ist nur die Gewichtskraft."],
    ["F_res = m·(a + g)", "Kräfte addiert man als Vektoren, nicht als Beträge."],
    ["F_res = 0", "Der Fahrer beschleunigt, also wirkt eine resultierende Kraft."]],
   "r": "F_res = m a" },
  { "f": "Welche Kräfte wirken auf den isolierten Fahrer?", "o": [
    ["Nur F_G und die Kraft F_M vom Motorrad", "Sitz, Lenker und Fußrasten fasst man zu einer Kraft F_M zusammen. Dazu kommt das Gewicht."],
    ["F_G, F_M und m·a", "m·a ist keine eigene Kraft, sondern die Summe der echten Kräfte."],
    ["Nur F_M", "Das Gewicht wirkt immer."],
    ["F_G, F_M und die Motorkraft", "Der Motor treibt das Motorrad an, nicht direkt den Fahrer."]],
   "r": "F_G + F_M = m a (Vektoren)" },
  { "f": "Wie zerlegst du F_M am einfachsten?", "o": [
    ["Parallel und senkrecht zur Rampe: F_M∥ = m(a + g sin α), F_M⊥ = m g cos α", "Parallel muss F_M den Hangabtrieb ausgleichen und zusätzlich m·a liefern. Senkrecht gibt es keine Beschleunigung."],
    ["Waagerecht und senkrecht mit F_M = m·a", "Dann fehlt der Anteil, der das Gewicht trägt."],
    ["F_M∥ = m·a, F_M⊥ = 0", "Der Fahrer würde dann nach unten fallen – das Gewicht muss getragen werden."],
    ["F_M∥ = m g sin α, F_M⊥ = m a", "Die Beschleunigung zeigt den Hang hinauf, nicht senkrecht dazu."]],
   "r": "F_M = √(F_M∥² + F_M⊥²) = m √(a² + g² + 2 a g sin α)\nBeispiel: m = 60 kg, a = 2 m/s², α = 10° → F_res = 120 N, F_M = 621 N" }],
 "fazit": "Die Kraft, die einen Körper trägt und beschleunigt, ist viel größer als m·a, weil sie zusätzlich das Gewicht ausgleichen muss."
});

aufgabe({
 "id": "phys-b4-a6", "f": "phys", "t": "Newtonsche Axiome", "titel": "Bootsmannsstuhl", "s": "Physik Übungsblatt 4, Aufgabe 6",
 "angabe": "Ein Mann sitzt in einem Stuhl, der an einem Seil über eine masselose, reibungsfreie Rolle an der Decke hängt. a) Er hält das andere Seilende selbst und zieht. b) Ein Kollege am Boden zieht am Seilende. Masse Mann + Stuhl: m. Gewünscht ist die Beschleunigung a nach oben.",
 "geg": ["m", "a", "g"],
 "ges": "Seilkraft in a) und b), Kraft der Rolle auf die Decke",
 "schritte": [
  { "f": "a) Der Mann zieht selbst. Wie oft greift das Seil am System Mann + Stuhl an?", "o": [
    ["Zweimal: an der Hand und über die Rolle am Stuhl", "Beide Seilstücke enden am System und ziehen nach oben, jedes mit F_S."],
    ["Einmal, nur am Stuhl", "Die Hand des Mannes hält das zweite Seilende – auch dort zieht das Seil nach oben."],
    ["Gar nicht, er zieht ja an sich selbst", "Das Seil läuft über die Rolle an der Decke, also wirkt es als äußere Kraft."],
    ["Dreimal", "Es gibt nur zwei Seilstücke unterhalb der Rolle."]],
   "r": "2 F_S − m g = m a → F_S = m (g + a) / 2" },
  { "f": "b) Der Kollege zieht am Boden. Welche Gleichung gilt jetzt?", "o": [
    ["F_S − m g = m a", "Nur noch das Seilstück am Stuhl zieht am System. Der Kollege gehört nicht dazu."],
    ["2 F_S − m g = m a", "Das zweite Seilstück endet jetzt beim Kollegen, nicht am Mann."],
    ["F_S = m g", "Dann würde der Mann nicht beschleunigen."],
    ["F_S + m g = m a", "Das Gewicht zieht nach unten, also mit Minus."]],
   "r": "F_S = m (g + a)" },
  { "f": "c) Mit welcher Kraft zieht die Rolle an der Decke?", "o": [
    ["2 F_S – zwei Seilstücke ziehen an der Rolle nach unten", "Die Rolle ist masselos, aber beide Seilenden hängen daran."],
    ["F_S", "Es hängen zwei Seilstücke an der Rolle."],
    ["m g", "Das gilt nur in Ruhe und nur in Fall a)."],
    ["Null, weil die Rolle masselos ist", "Masselos heißt kein Eigengewicht – die Seilkräfte wirken trotzdem."]],
   "r": "a) 2 F_S = m (g + a)\nb) 2 F_S = 2 m (g + a)\nBeispiel: m = 95 kg, a = 1,3 m/s² → a) 528 N, b) 1055 N; Decke 1055 N bzw. 2111 N" }],
 "fazit": "Zähle immer, wie viele Seilstücke am betrachteten System angreifen. Wer an seinem eigenen Seil zieht, braucht nur die halbe Kraft."
});
/* Anmerkungen aus der App – GitHub-Issues #3 bis #9 (04.11.2026). Korrekturen nach Frage-ID, Lernstand bleibt. */
Object.assign(KORREKTUR, {
 "bauko-98wn6h": {
  "e": "Schnee ist eine veränderliche Einwirkung (Q): Er kommt und geht und liegt mal höher, mal niedriger – genau wie Nutzlast, Wind und Temperatur. Fahrzeuganprall ist dagegen außergewöhnlich (A): Ein Auto oder Lkw fährt gegen eine Stütze oder Wand. Das passiert sehr selten und nur kurz, aber mit großer Kraft – deshalb rechnet man dafür eine eigene, außergewöhnliche Bemessungssituation. Eigengewicht ist ständig (G), Vorspannung (P) zählt ebenfalls zu den ständigen Einwirkungen."
 },
 "phys-f65lrm": {
  "e": "Masse ist ein Skalar: 5 kg sind 5 kg, eine Richtung gibt es nicht. Kraft ist ein Vektor, weil es darauf ankommt, wohin sie wirkt: Drückst du eine Kiste mit 10 N nach links oder mit 10 N nach rechts, passiert etwas völlig anderes, obwohl der Betrag gleich ist. Deshalb schreibt man die Kraft mit Pfeil und braucht Betrag und Richtung. Genauso sind Geschwindigkeit und Beschleunigung Vektoren. Ein Skalar wäre dagegen das Tempo, also nur der Betrag der Geschwindigkeit."
 },
 "bsk-22yqqh": {
  "e": "Im linearen Bereich gilt das Hookesche Gesetz σ = E · ε. Die Steigung der Geraden, also Δσ / Δε, ist der E-Modul – je steiler, desto steifer der Stoff. Die Festigkeit ist nicht die Steigung, sondern die Höhe der Kurve (die größte Spannung). Die Bruchdehnung ist ihre Länge, also wie weit sich der Stoff bis zum Bruch dehnen lässt. Die Querdehnzahl sieht man in diesem Diagramm gar nicht – sie vergleicht die Dehnung quer zur Last mit der Dehnung in Lastrichtung.",
  "ev": "emodul"
 },
 "binf-xd5cv7": {
  "e": "&& ist der Kurzschluss-Operator: Steht links schon false, steht das Ergebnis fest, und die rechte Seite wird gar nicht mehr ausgewertet. & wertet immer beide Seiten aus. Beispiel mit int n = 0: Bei (n != 0 && 10 / n > 2) ist die linke Seite false, die Division wird übersprungen, das Ergebnis ist false. Bei (n != 0 & 10 / n > 2) wird 10 / 0 trotzdem gerechnet – das Programm bricht mit einer ArithmeticException ab. „Kein Unterschied“ stimmt also nicht, und & ist auch nicht nur für Zahlen: Mit boolean-Werten ist es ein logisches Und. Genauso gibt es || (Kurzschluss) und | (immer beide Seiten)."
 },
 "hydro-1wvjjtr": {
  "q": "Welche Annahmen stecken in Q₁ = Q₂ für ein Rohr? (Q = Durchfluss, 1 und 2 = zwei Querschnitte)",
  "e": "Q ist der Durchfluss, also das Wasservolumen pro Zeit in m³/s: Q = v · A (Geschwindigkeit mal Querschnittsfläche). Die Indizes 1 und 2 stehen für zwei Querschnitte im Rohr, zum Beispiel Anfang und Ende. Q₁ = Q₂ heißt: Was bei 1 hineinfließt, kommt in derselben Zeit bei 2 wieder heraus. Das gilt nur, wenn dazwischen nichts gespeichert wird, die Strömung stationär ist und sich die Dichte nicht ändert. Einen gleichen Querschnitt braucht es nicht – wird das Rohr enger, fließt das Wasser schneller (v₁ · A₁ = v₂ · A₂). Reibungsfreiheit gehört zur Bernoulli-Gleichung, nicht zur Kontinuität."
 },
 "hydro-c8zi7o": {
  "e": "Lagrange: Du setzt dich gedanklich auf ein Wasserteilchen und fährst mit – wie eine Boje mit GPS, die mit der Strömung treibt. So erfährst du, wo genau dieses eine Teilchen wann ist und wie schnell es ist (seine Bahnlinie). Euler: Du bleibst an einem festen Ort stehen und misst, was dort vorbeiströmt – wie ein Pegel oder eine Messsonde am Brückenpfeiler. Du erhältst die Geschwindigkeit an jedem Ort als Feld v(x, y, z, t), egal welches Teilchen gerade vorbeikommt. In der Hydromechanik arbeitet man fast immer mit der Eulerschen Sicht, weil feste Querschnitte interessieren, etwa ein Rohranfang oder eine Brücke."
 }
});
mc("hydro", H4, "Was bedeutet Q in der Kontinuitätsgleichung Q₁ = Q₂?", ["Den Durchfluss: Wasservolumen pro Zeit, Q = v · A in m³/s", "Die Querschnittsfläche in m²", "Die Fließgeschwindigkeit in m/s", "Den Wasserdruck in Pa"], "Q = v · A: Geschwindigkeit mal durchflossene Fläche ergibt, wie viele Kubikmeter Wasser pro Sekunde durch den Querschnitt fließen. Fläche und Geschwindigkeit sind nur die Bestandteile von Q – ändert sich der Querschnitt, ändert sich v, aber Q bleibt gleich. Die Indizes 1 und 2 bezeichnen zwei Querschnitte.", "Hydromechanik V04");
pair("hydro", H4, "v₁ · A₁ = v₂ · A₂ – was ist was?", [["Q", "Durchfluss in m³/s"], ["v", "mittlere Fließgeschwindigkeit in m/s"], ["A", "durchflossene Querschnittsfläche in m²"], ["Index 1 und 2", "zwei Querschnitte im Rohr"]], "Q = v · A ist an jedem Querschnitt gleich. Wird das Rohr enger (A₂ kleiner), muss das Wasser schneller fließen (v₂ größer).", "Hydromechanik V04");
mc("binf", I4, "int n = 0; Was ergibt (n != 0 && 10 / n > 2)?", ["false – 10 / n wird gar nicht ausgewertet", "Eine ArithmeticException wegen Division durch 0", "true", "Einen Compilerfehler"], "Links steht n != 0, und das ist false. Mit && steht das Ergebnis damit schon fest, die rechte Seite mit der Division wird übersprungen. Die Exception käme nur mit &, weil & immer beide Seiten auswertet.", "Bauinformatik Block 1");
mc("binf", I4, "int n = 0; Was passiert bei (n != 0 & 10 / n > 2)?", ["Eine ArithmeticException – 10 / 0 wird trotzdem gerechnet", "Ergebnis false, ohne Fehler", "Ergebnis true", "Einen Compilerfehler"], "& wertet immer beide Seiten aus, auch wenn links schon false steht. Eine Division ganzer Zahlen durch 0 ist in Java nicht erlaubt und wirft eine ArithmeticException. „false ohne Fehler“ wäre das Ergebnis mit && gewesen.", "Bauinformatik Block 1");
/* Selbst rechnen (App 1.6): Zwischenergebnisse je Lösungsweg-Aufgabe und Schritt (0-basiert). l = Größe, w = Wert, u = Einheit, h = Rechnung mit Zahlen (Hilfe Stufe 2), t = Toleranz (Standard 2 %). */
const RECHNEN = {
 "hydro-ue02-a27": {
  "0": [
   {
    "l": "t",
    "w": 0.8,
    "u": "m",
    "h": "800/1000 · 1 m"
   }
  ],
  "1": [
   {
    "l": "V_a",
    "w": 0.914,
    "u": "m³",
    "h": "(800 · 1 + 11 400 · 0,01) / 1000"
   }
  ],
  "3": [
   {
    "l": "V_b",
    "w": 0.81,
    "u": "m³",
    "h": "0,80 + 0,01"
   }
  ]
 },
 "hydro-ue02-a28": {
  "0": [
   {
    "l": "F_A",
    "w": 3.923,
    "u": "N",
    "h": "32,079 − 28,156"
   }
  ],
  "1": [
   {
    "l": "V",
    "w": 0.4,
    "u": "l",
    "h": "3,923 / (1000 · 9,81) m³, mal 1000 für Liter"
   }
  ],
  "2": [
   {
    "l": "m",
    "w": 3.27,
    "u": "kg",
    "h": "32,079 / 9,81"
   }
  ],
  "4": [
   {
    "l": "m_Cu",
    "w": 2.1,
    "u": "kg",
    "h": "m_Zn = 3,270 − m_Cu einsetzen: m_Cu/8930 + (3,270 − m_Cu)/7100 = 0,400 · 10⁻³ nach m_Cu auflösen",
    "t": 0.03
   },
   {
    "l": "m_Zn",
    "w": 1.17,
    "u": "kg",
    "h": "3,270 − m_Cu",
    "t": 0.03
   }
  ],
  "5": [
   {
    "l": "ρ",
    "w": 8180.0,
    "u": "kg/m³",
    "h": "3,270 / (0,400 · 10⁻³)"
   }
  ]
 },
 "hydro-ue03-a35": {
  "0": [
   {
    "l": "v₁",
    "w": 10.0,
    "u": "m/s",
    "h": "Q / A₁ = 10 / 1"
   },
   {
    "l": "v₂",
    "w": 5.0,
    "u": "m/s",
    "h": "Q / A₂ = 10 / 2"
   }
  ],
  "3": [
   {
    "l": "p₁/(ρg)",
    "w": 10.0,
    "u": "m",
    "h": "98 100 / 9810"
   },
   {
    "l": "v₁²/(2g)",
    "w": 5.1,
    "u": "m",
    "h": "10² / (2 · 9,81)"
   },
   {
    "l": "v₂²/(2g)",
    "w": 1.27,
    "u": "m",
    "h": "5² / (2 · 9,81)"
   }
  ],
  "4": [
   {
    "l": "p₂/(ρg)",
    "w": 13.82,
    "u": "m",
    "h": "10,00 + 5,10 − 1,27"
   },
   {
    "l": "p₂",
    "w": 135.6,
    "u": "kN/m²",
    "h": "13,82 · 9810 N/m², durch 1000 für kN/m²"
   }
  ]
 },
 "hydro-ue04-a43": {
  "0": [
   {
    "l": "q",
    "w": 2.0,
    "u": "m²/s",
    "h": "Q / b = 10 / 5"
   }
  ],
  "1": [
   {
    "l": "h_gr",
    "w": 0.74,
    "u": "m",
    "h": "∛(q²/g) = ∛(2² / 9,81)"
   }
  ],
  "2": [
   {
    "l": "v_gr",
    "w": 2.7,
    "u": "m/s",
    "h": "q / h_gr = 2 / 0,74"
   }
  ],
  "3": [
   {
    "l": "h_E,min",
    "w": 1.11,
    "u": "m",
    "h": "1,5 · h_gr = 1,5 · 0,74"
   }
  ],
  "4": [
   {
    "l": "v",
    "w": 5.0,
    "u": "m/s",
    "h": "q / h = 2 / 0,40"
   },
   {
    "l": "Fr",
    "w": 2.52,
    "u": "",
    "h": "v / √(g · h) = 5,0 / √(9,81 · 0,40)"
   },
   {
    "l": "h_E",
    "w": 1.67,
    "u": "m",
    "h": "h + v²/(2g) = 0,40 + 5,0² / (2 · 9,81)"
   }
  ],
  "5": [
   {
    "l": "v",
    "w": 1.33,
    "u": "m/s",
    "h": "q / h = 2 / 1,50"
   },
   {
    "l": "Fr",
    "w": 0.35,
    "u": "",
    "h": "1,33 / √(9,81 · 1,50)"
   },
   {
    "l": "h_E",
    "w": 1.59,
    "u": "m",
    "h": "1,50 + 1,33² / (2 · 9,81)"
   }
  ]
 },
 "hydro-ue04-a41": {
  "0": [
   {
    "l": "v₁",
    "w": 0.95,
    "u": "m/s",
    "h": "Q / A₁ = 0,12 / 0,126"
   },
   {
    "l": "v₂",
    "w": 3.82,
    "u": "m/s",
    "h": "Q / A₂ = 0,12 / 0,0314"
   }
  ],
  "1": [
   {
    "l": "p₁",
    "w": 55.8,
    "u": "kPa",
    "h": "49 + 0,5 · (3,82² − 0,95²)"
   }
  ],
  "2": [
   {
    "l": "S₁",
    "w": 7.13,
    "u": "kN",
    "h": "55,8 · 0,126 + 1,0 · 0,12 · 0,95"
   },
   {
    "l": "S₂",
    "w": 2.0,
    "u": "kN",
    "h": "49 · 0,0314 + 1,0 · 0,12 · 3,82"
   }
  ],
  "3": [
   {
    "l": "F_x",
    "w": 6.13,
    "u": "kN",
    "h": "7,13 − 2,00 · 0,5"
   },
   {
    "l": "F_y",
    "w": -1.73,
    "u": "kN",
    "h": "−2,00 · 0,866"
   }
  ],
  "4": [
   {
    "l": "F_K",
    "w": 6.37,
    "u": "kN",
    "h": "√(6,13² + 1,73²)"
   },
   {
    "l": "β",
    "w": 15.8,
    "u": "°",
    "h": "arctan(1,73 / 6,13)"
   }
  ]
 },
 "hydro-ue05-a54": {
  "0": [
   {
    "l": "v₃",
    "w": 6.26,
    "u": "m/s",
    "h": "√(2 · 9,81 · 2,0)"
   }
  ],
  "1": [
   {
    "l": "Q",
    "w": 1.88,
    "u": "m³/s",
    "h": "6,26 · 0,3"
   }
  ],
  "3": [
   {
    "l": "h₂",
    "w": 1.78,
    "u": "m",
    "h": "2,0 − 2,09² / (2 · 9,81)"
   }
  ]
 },
 "hydro-ue01-a11": {
  "1": [
   {
    "l": "V",
    "w": 4.71,
    "u": "l",
    "h": "π · 0,10² · 0,45 / 3 m³, mal 1000 für Liter"
   }
  ],
  "3": [
   {
    "l": "ρ",
    "w": 849.0,
    "u": "kg/m³",
    "h": "4 kg / (4,71 · 10⁻³ m³)"
   }
  ]
 },
 "hydro-ue01-a14": {
  "2": [
   {
    "l": "D",
    "w": 5.95,
    "u": "mm",
    "h": "4 · 0,073 / (1000 · 9,81 · 0,005) m, mal 1000 für mm"
   }
  ]
 },
 "hydro-ue03-a32": {
  "1": [
   {
    "l": "v",
    "w": 2.55,
    "u": "m/s",
    "h": "1,0 · 10⁻³ / 3,93 · 10⁻⁴"
   }
  ],
  "3": [
   {
    "l": "V₁",
    "w": 2.88,
    "u": "m³",
    "h": "0,8 l/s · 3600 s = 2880 l, durch 1000"
   },
   {
    "l": "V₂",
    "w": 0.72,
    "u": "m³",
    "h": "0,2 l/s · 3600 s, durch 1000"
   }
  ]
 },
 "hydro-ue03-a37": {
  "3": [
   {
    "l": "v₁",
    "w": 0.4,
    "u": "m/s",
    "h": "√(0,65 · 2 · 9,81 / 80)"
   },
   {
    "l": "v₂",
    "w": 3.59,
    "u": "m/s",
    "h": "9 · v₁",
    "t": 0.03
   },
   {
    "l": "Q",
    "w": 28.0,
    "u": "l/s",
    "h": "0,40 · π · 0,3² / 4 m³/s, mal 1000",
    "t": 0.03
   }
  ]
 },
 "bauko-ue06-balken": {
  "0": [
   {
    "l": "A_g",
    "w": 6.0,
    "u": "kN",
    "h": "3 · 4 / 2"
   },
   {
    "l": "M_g",
    "w": 6.0,
    "u": "kNm",
    "h": "3 · 4² / 8"
   },
   {
    "l": "M_q",
    "w": 3.0,
    "u": "kNm",
    "h": "1,5 · 4² / 8"
   }
  ],
  "2": [
   {
    "l": "M_Ed (nur g)",
    "w": 8.1,
    "u": "kNm",
    "h": "1,35 · 6"
   },
   {
    "l": "M_Ed / k_mod (nur g)",
    "w": 13.5,
    "u": "kNm",
    "h": "8,1 / 0,6"
   },
   {
    "l": "M_Ed (g + q)",
    "w": 12.6,
    "u": "kNm",
    "h": "1,35 · 6 + 1,5 · 3"
   },
   {
    "l": "M_Ed / k_mod (g + q)",
    "w": 14.0,
    "u": "kNm",
    "h": "12,6 / 0,9"
   }
  ],
  "3": [
   {
    "l": "f_m,d",
    "w": 16.6,
    "u": "N/mm²",
    "h": "0,9 · 24 / 1,3"
   },
   {
    "l": "erf W",
    "w": 759.0,
    "u": "cm³",
    "h": "12,6 · 10⁶ Nmm / 16,6 N/mm² ergibt mm³, durch 1000 für cm³"
   }
  ],
  "5": [
   {
    "l": "σ_m,d",
    "w": 16.4,
    "u": "N/mm²",
    "h": "12,6 · 10⁶ / (768 · 10³)"
   },
   {
    "l": "η",
    "w": 0.99,
    "u": "",
    "h": "16,4 / 16,6"
   }
  ],
  "6": [
   {
    "l": "τ_d",
    "w": 1.97,
    "u": "N/mm²",
    "h": "1,5 · 12 600 / (0,5 · 19 200)"
   },
   {
    "l": "f_v,d",
    "w": 2.77,
    "u": "N/mm²",
    "h": "0,9 · 4,0 / 1,3"
   },
   {
    "l": "η",
    "w": 0.71,
    "u": "",
    "h": "1,97 / 2,77"
   }
  ]
 },
 "bauko-ue06-querdruck": {
  "1": [
   {
    "l": "f_c,90,d",
    "w": 1.92,
    "u": "N/mm²",
    "h": "1,0 · 2,5 / 1,3"
   }
  ],
  "2": [
   {
    "l": "A_ef",
    "w": 280.0,
    "u": "cm²",
    "h": "14 · (14 + 2 · 3)"
   }
  ],
  "4": [
   {
    "l": "σ_c,90,d",
    "w": 1.91,
    "u": "N/mm²",
    "h": "53,41 kN / 280 cm² ergibt kN/cm², mal 10 für N/mm²"
   },
   {
    "l": "η",
    "w": 0.66,
    "u": "",
    "h": "1,91 / (1,5 · 1,92)"
   }
  ]
 },
 "bsk-ue01-stuetze": {
  "0": [
   {
    "l": "F",
    "w": 431.6,
    "u": "kN",
    "h": "44 000 kg · 9,81 m/s² ergibt N, durch 1000 für kN"
   }
  ],
  "1": [
   {
    "l": "A (rund)",
    "w": 17671.0,
    "u": "mm²",
    "h": "π · 150² / 4"
   },
   {
    "l": "σ (rund)",
    "w": 24.4,
    "u": "N/mm²",
    "h": "431 600 N / 17 671 mm²"
   },
   {
    "l": "σ (quadratisch)",
    "w": 19.2,
    "u": "N/mm²",
    "h": "431 600 N / 22 500 mm²"
   }
  ],
  "2": [
   {
    "l": "Auslastung Beton rund",
    "w": 49.0,
    "u": "%",
    "h": "24,4 / 50 · 100",
    "t": 0.03
   },
   {
    "l": "Auslastung Ziegel quadratisch",
    "w": 96.0,
    "u": "%",
    "h": "19,2 / 20 · 100"
   }
  ],
  "3": [
   {
    "l": "Δl",
    "w": -1.8,
    "u": "mm",
    "h": "−0,0006 · 3000 mm"
   }
  ],
  "4": [
   {
    "l": "ε_T",
    "w": 0.48,
    "u": "‰",
    "h": "1,2 · 10⁻⁵ · 40 ergibt eine reine Zahl, mal 1000 für ‰"
   },
   {
    "l": "ε_ges",
    "w": -0.12,
    "u": "‰",
    "h": "0,48 − 0,60"
   },
   {
    "l": "Δl",
    "w": -0.36,
    "u": "mm",
    "h": "−0,00012 · 3000 mm"
   }
  ]
 },
 "stat-ue01-lgs": {
  "1": [
   {
    "l": "det A",
    "w": -4.0,
    "u": "",
    "h": "16 − 20",
    "t": 0.0
   }
  ],
  "2": [
   {
    "l": "x₁",
    "w": 3.0,
    "u": "",
    "h": "(4 − 1) / (2 − 1)",
    "t": 0.0
   }
  ],
  "3": [
   {
    "l": "x₃",
    "w": -2.5,
    "u": "",
    "h": "−5 / 2",
    "t": 0.0
   },
   {
    "l": "x₂",
    "w": 0.25,
    "u": "",
    "h": "(−2 + 2,5) / 2",
    "t": 0.0
   }
  ]
 },
 "stat-ue01-rang": {
  "4": [
   {
    "l": "det A",
    "w": -5.0,
    "u": "",
    "h": "−(1 · 1 · 5)",
    "t": 0.0
   }
  ]
 },
 "dap-v02-gewichtung": {
  "1": [
   {
    "l": "w(< 30)",
    "w": 1.37,
    "u": "",
    "h": "31,0 / 22,6"
   },
   {
    "l": "w(30–60)",
    "w": 1.02,
    "u": "",
    "h": "41,7 / 40,7"
   },
   {
    "l": "w(60+)",
    "w": 0.74,
    "u": "",
    "h": "27,3 / 36,7"
   }
  ]
 },
 "dap-v02-ipf": {
  "2": [
   {
    "l": "Spaltenfaktor ohne Pkw",
    "w": 1.83,
    "u": "",
    "h": "13,2 / 7,2"
   },
   {
    "l": "Spaltenfaktor mit Pkw",
    "w": 0.94,
    "u": "",
    "h": "86,8 / 92,8"
   }
  ]
 },
 "dap-l03-normal": {
  "0": [
   {
    "l": "z",
    "w": 2.0,
    "u": "",
    "h": "(189 − 175) / 7",
    "t": 0.0
   }
  ],
  "2": [
   {
    "l": "Anteil",
    "w": 81.9,
    "u": "%",
    "h": "34,15 + 47,75"
   }
  ]
 },
 "bauko-ue01-decke": {
  "0": [
   {
    "l": "Σ g",
    "w": 1.34,
    "u": "kN/m²",
    "h": "0,88 + 0,03 + 0,19 + 0,10 + 0,14"
   }
  ],
  "3": [
   {
    "l": "q_k,ges",
    "w": 3.2,
    "u": "kN/m²",
    "h": "2,0 + 1,2"
   }
  ],
  "4": [
   {
    "l": "q_k (Balken)",
    "w": 1.92,
    "u": "kN/m",
    "h": "3,2 · 0,6"
   }
  ]
 },
 "bauko-ue02-schnee": {
  "0": [
   {
    "l": "s_k",
    "w": 0.63,
    "u": "kN/m²",
    "h": "0,25 + 1,91 · ((200 + 140) / 760)²"
   }
  ],
  "2": [
   {
    "l": "μ₁",
    "w": 0.67,
    "u": "",
    "h": "0,8 · 25 / 30"
   }
  ],
  "3": [
   {
    "l": "s",
    "w": 0.57,
    "u": "kN/m²",
    "h": "0,67 · 1,0 · 1,0 · 0,85"
   },
   {
    "l": "s pro Sparren",
    "w": 0.37,
    "u": "kN/m",
    "h": "0,57 · 0,65"
   }
  ],
  "4": [
   {
    "l": "F_S",
    "w": 0.028,
    "u": "kN",
    "h": "0,043 · 0,65"
   }
  ]
 },
 "bauko-ue02-wind": {
  "1": [
   {
    "l": "e/4",
    "w": 1.5,
    "u": "m",
    "h": "6 / 4"
   },
   {
    "l": "e/10",
    "w": 0.6,
    "u": "m",
    "h": "6 / 10"
   }
  ],
  "2": [
   {
    "l": "c_pe,10",
    "w": 0.47,
    "u": "",
    "h": "0,4 + (0,6 − 0,4) / 15 · 5"
   }
  ],
  "3": [
   {
    "l": "w_H",
    "w": 0.2,
    "u": "kN/m",
    "h": "0,47 · 0,65 · 0,65"
   }
  ]
 },
 "bauko-ak2022-stuetze": {
  "0": [
   {
    "l": "M_g",
    "w": -7.91,
    "u": "kNm",
    "h": "−0,125 · 4,50 · 3,75²"
   },
   {
    "l": "M_s",
    "w": -3.69,
    "u": "kNm",
    "h": "−0,125 · 2,10 · 3,75²"
   }
  ],
  "2": [
   {
    "l": "M_Ed",
    "w": 16.21,
    "u": "kNm",
    "h": "1,35 · 7,91 + 1,5 · 3,69"
   }
  ],
  "3": [
   {
    "l": "η",
    "w": 1.22,
    "u": "",
    "h": "2,03 / 1,66"
   }
  ]
 },
 "bauko-ak2022-durch": {
  "2": [
   {
    "l": "l/300",
    "w": 1.49,
    "u": "cm",
    "h": "447 cm / 300"
   }
  ],
  "3": [
   {
    "l": "w_fin",
    "w": 1.79,
    "u": "cm",
    "h": "0,79 · 1,8 + 0,25 + 0,6 · 0,20"
   },
   {
    "l": "l/200",
    "w": 2.24,
    "u": "cm",
    "h": "447 cm / 200"
   }
  ],
  "4": [
   {
    "l": "w_net,fin",
    "w": 1.42,
    "u": "cm",
    "h": "0,79 · 1,8"
   }
  ]
 },
 "bauko-hue1-dach": {
  "0": [
   {
    "l": "g_Sparren",
    "w": 0.064,
    "u": "kN/m",
    "h": "5,0 · 0,08 · 0,16"
   }
  ],
  "1": [
   {
    "l": "g′",
    "w": 0.73,
    "u": "kN/m",
    "h": "0,63 / cos(30°)"
   }
  ],
  "2": [
   {
    "l": "s_k",
    "w": 1.09,
    "u": "kN/m²",
    "h": "1,25 · (0,19 + 0,91 · ((519 + 140) / 760)²)"
   }
  ],
  "3": [
   {
    "l": "s",
    "w": 0.87,
    "u": "kN/m²",
    "h": "0,8 · 1,09"
   },
   {
    "l": "s pro Sparren",
    "w": 0.56,
    "u": "kN/m",
    "h": "0,87 · 0,64"
   }
  ]
 },
 "bauko-ue06-stahl": {
  "2": [
   {
    "l": "erf W",
    "w": 53.6,
    "u": "cm³",
    "h": "1260 kNcm / 23,5 kN/cm²"
   }
  ],
  "3": [
   {
    "l": "η",
    "w": 0.69,
    "u": "",
    "h": "1260 / 77,3 / 23,5"
   }
  ]
 },
 "bauko-verband": {
  "0": [
   {
    "l": "H_d",
    "w": 120.0,
    "u": "kN",
    "h": "1,5 · 80"
   }
  ],
  "1": [
   {
    "l": "Z_d",
    "w": 169.7,
    "u": "kN",
    "h": "120 / 0,707"
   }
  ],
  "2": [
   {
    "l": "A",
    "w": 722.0,
    "u": "mm²",
    "h": "169 700 N / 235 N/mm²"
   }
  ],
  "3": [
   {
    "l": "d",
    "w": 30.3,
    "u": "mm",
    "h": "√(4 · 722 / π)"
   }
  ]
 },
 "bauko-knick-stuetze": {
  "1": [
   {
    "l": "i",
    "w": 4.04,
    "u": "cm",
    "h": "14 / √12"
   },
   {
    "l": "λ",
    "w": 80.9,
    "u": "",
    "h": "327 / 4,04"
   }
  ],
  "3": [
   {
    "l": "σ_c,0,d",
    "w": 2.73,
    "u": "N/mm²",
    "h": "53,41 kN / 196 cm² ergibt kN/cm², mal 10 für N/mm²"
   },
   {
    "l": "f_c,0,d",
    "w": 16.2,
    "u": "N/mm²",
    "h": "1,0 · 21 / 1,3"
   },
   {
    "l": "η",
    "w": 0.38,
    "u": "",
    "h": "2,73 / (0,44 · 16,2)"
   }
  ]
 },
 "bauko-ue01-massivdecke": {
  "0": [
   {
    "l": "Estrich",
    "w": 1.32,
    "u": "kN/m²",
    "h": "0,22 · 6"
   }
  ],
  "3": [
   {
    "l": "g_k",
    "w": 5.56,
    "u": "kN/m²",
    "h": "1,32 + 0,02 + 0,04 + 4,0 + 0,18"
   }
  ]
 },
 "bauko-ue01-unterzug": {
  "2": [
   {
    "l": "p₂",
    "w": 3.43,
    "u": "kN/m",
    "h": "1,143 · 2,0 · 1,5"
   },
   {
    "l": "g₂",
    "w": 2.33,
    "u": "kN/m",
    "h": "1,143 · 1,24 · 1,5 + 0,2"
   }
  ],
  "3": [
   {
    "l": "P₂",
    "w": 10.71,
    "u": "kN",
    "h": "1,25 · 3,43 · 2,5"
   },
   {
    "l": "G₂",
    "w": 7.27,
    "u": "kN",
    "h": "1,25 · 2,33 · 2,5"
   }
  ]
 },
 "bauko-ak2020-decke": {
  "0": [
   {
    "l": "g_k",
    "w": 1.08,
    "u": "kN/m",
    "h": "1,51 · 0,625 + 0,05 + 0,09"
   },
   {
    "l": "q_k (A3)",
    "w": 1.25,
    "u": "kN/m",
    "h": "2,0 · 0,625"
   }
  ],
  "2": [
   {
    "l": "M_Ed",
    "w": 4.06,
    "u": "kNm",
    "h": "1,35 · 1,32 + 1,5 · 1,52"
   }
  ],
  "3": [
   {
    "l": "η",
    "w": 0.8,
    "u": "",
    "h": "1,19 / 1,48"
   }
  ],
  "4": [
   {
    "l": "τ",
    "w": 0.164,
    "u": "kN/cm²",
    "h": "1,5 · 6,99 / (0,5 · 128)"
   },
   {
    "l": "η",
    "w": 0.67,
    "u": "",
    "h": "0,164 / 0,246"
   }
  ]
 },
 "phys-b1-a1": {
  "2": [
   {
    "l": "A",
    "w": 4942.0,
    "u": "ac",
    "h": "2 · 10⁷ m² / 4046,856 m²"
   }
  ],
  "3": [
   {
    "l": "V",
    "w": 1443.0,
    "u": "ac·ft",
    "h": "4942 · 0,292"
   }
  ]
 },
 "phys-b1-a4": {
  "1": [
   {
    "l": "A₁",
    "w": 24.0,
    "u": "m",
    "h": "½ · 2 · 24"
   },
   {
    "l": "A₂",
    "w": 192.0,
    "u": "m",
    "h": "8 · 24"
   }
  ],
  "2": [
   {
    "l": "Rechteck 10–16 s",
    "w": 72.0,
    "u": "m",
    "h": "6 · 12"
   }
  ],
  "3": [
   {
    "l": "s",
    "w": 300.0,
    "u": "m",
    "h": "24 + 192 + 12 + 72"
   }
  ]
 },
 "phys-b4-a1": {
  "3": [
   {
    "l": "F₃x",
    "w": 12.5,
    "u": "N",
    "h": "2 · 3 · cos(50°) + 10 · cos(30°)"
   },
   {
    "l": "F₃y",
    "w": -10.4,
    "u": "N",
    "h": "2 · 3 · sin(50°) + 10 · sin(30°) − 20"
   },
   {
    "l": "F₃",
    "w": 16.3,
    "u": "N",
    "h": "√(12,5² + 10,4²)"
   },
   {
    "l": "φ",
    "w": -39.7,
    "u": "°",
    "h": "arctan(−10,4 / 12,5)"
   }
  ]
 },
 "phys-b4-a2": {
  "2": [
   {
    "l": "a",
    "w": 0.914,
    "u": "m/s²",
    "h": "F / (m₁ + m₂) = 3,2 / (2,3 + 1,2)"
   },
   {
    "l": "F_K (a)",
    "w": 1.1,
    "u": "N",
    "h": "m₂ · F / (m₁ + m₂) = 1,2 · 3,2 / 3,5"
   },
   {
    "l": "F_K (b)",
    "w": 2.1,
    "u": "N",
    "h": "m₁ · F / (m₁ + m₂) = 2,3 · 3,2 / 3,5"
   }
  ]
 },
 "phys-b4-a3": {
  "3": [
   {
    "l": "F_S",
    "w": 6.08,
    "u": "N",
    "h": "2,3 · (3,7 · 9,81 · sin(30°) − 2,3) / (3,7 + 2,3)"
   },
   {
    "l": "F_max",
    "w": 18.1,
    "u": "N",
    "h": "3,7 · 9,81 · sin(30°)"
   }
  ]
 },
 "phys-b4-a5": {
  "2": [
   {
    "l": "F_res",
    "w": 120.0,
    "u": "N",
    "h": "60 · 2"
   },
   {
    "l": "F_M",
    "w": 621.0,
    "u": "N",
    "h": "60 · √(2² + 9,81² + 2 · 2 · 9,81 · sin(10°))"
   }
  ]
 },
 "phys-b4-a6": {
  "2": [
   {
    "l": "F_S (a)",
    "w": 528.0,
    "u": "N",
    "h": "95 · (9,81 + 1,3) / 2"
   },
   {
    "l": "F_S (b)",
    "w": 1055.0,
    "u": "N",
    "h": "95 · (9,81 + 1,3)"
   }
  ]
 },
 "binf-ue02-dual": {
  "2": [
   {
    "l": "43 als Dualzahl",
    "w": 101011.0,
    "u": "",
    "h": "Reste von unten nach oben lesen",
    "t": 0.0
   }
  ],
  "3": [
   {
    "l": "Kontrolle",
    "w": 43.0,
    "u": "",
    "h": "32 + 8 + 2 + 1",
    "t": 0.0
   }
  ]
 }
};
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
/* Patch-Warteschlange · Angewandte Statistik · Kapitel 3 Deskriptive Statistik, Übung 1 (Folien + offizielle Lösung), Übung 2 Matrizenrechnung 2 · erstellt 05.11.2026 */
const STAT_DS = "Deskriptive Statistik";
THEMEN["stat|Deskriptive Statistik"] = "Die deskriptive Statistik beschreibt vorhandene Daten, ohne über sie hinaus zu schließen: mit Tabellen, Grafiken und Kennzahlen. Zuerst klärst du, welches Merkmal vorliegt (quantitativ diskret oder stetig, Rangmerkmal, qualitativ) und auf welcher Skala es gemessen wird, denn davon hängt ab, welche Rechnung überhaupt sinnvoll ist. Dann zählst du Häufigkeiten aus, bei vielen Werten in Klassen, und fasst die Daten über Lageparameter (Mittelwert, Median) und Streuungsparameter (Spannweite, Quartile, Varianz) zusammen. Bei zwei Merkmalen gleichzeitig kommen Kovarianz und Korrelationskoeffizient dazu.";

/* ── Kapitel 3: Grundbegriffe ── */
mc("stat", STAT_DS, "Was ist eine Stichprobe?", ["Ein repräsentativer Teil der Beobachtungen aus der Grundgesamtheit", "Die Gesamtheit aller möglichen Daten eines Objekts", "Eine einzelne Messung", "Der größte Wert einer Messreihe"], "Die Stichprobe soll die Grundgesamtheit beschreiben, deshalb muss sie repräsentativ sein. Die Gesamtheit aller möglichen Daten ist die Grundgesamtheit selbst, nicht die Stichprobe.", "Angewandte Statistik Kapitel 3, Folie 2");
mc("stat", STAT_DS, "Du misst die Länge eines Betonfertigteils immer wieder. Welche Grundgesamtheit liegt vor?", ["Eine unendliche – man könnte beliebig viele Messwerte erzeugen", "Eine endliche – es gibt ja nur ein Bauteil", "Gar keine, weil es nur ein Objekt ist", "Eine endliche mit genau 10 Werten"], "Die Folie nennt genau dieses Beispiel als unendliche Grundgesamtheit: Gezählt werden die möglichen Messwerte, nicht die Bauteile. Endlich wäre z. B. die Artikelanzahl eines Warenlagers.", "Angewandte Statistik Kapitel 3, Folie 2");
pair("stat", STAT_DS, "Ordne jedem Merkmal seine Art zu.", [["Körpergröße", "stetig quantitativ"], ["Studierendenanzahl der RWTH", "diskret quantitativ"], ["1. Halbzeit, 2. Halbzeit, Verlängerung", "Rangmerkmal"], ["Geschlecht", "qualitativ"]], "Stetig: jede Zahl im Intervall möglich. Diskret: abzählbar. Rangmerkmale haben eine Reihenfolge, aber keine Zahlenwerte. Qualitativ: Beschreibung in Worten.", "Angewandte Statistik Kapitel 3, Folie 3");
pair("stat", STAT_DS, "Ordne jeder Skala ein passendes Beispiel zu.", [["Verhältnisskala", "Länge in m (absoluter Nullpunkt)"], ["Intervallskala", "Temperatur in °C"], ["Ordinalskala", "Einkommen: gering < mittel < hoch"], ["Nominalskala", "Geschlecht"]], "Verhältnisskala hat einen absoluten Nullpunkt, Intervallskala nicht. Ordinal = Rangfolge ohne sinnvolle Rechnung, nominal = Kategorien ohne Reihenfolge.", "Angewandte Statistik Kapitel 3, Folie 4");
wf("stat", STAT_DS, "Auf einer Intervallskala wie der Temperatur in °C darf man sagen: 20 °C ist doppelt so warm wie 10 °C.", false, "Falsch – ohne absoluten Nullpunkt ist Multiplikation nicht sinnvoll. Erlaubt sind Differenzen und Verhältnisse von Differenzen. Verhältnisse wie „doppelt so viel“ gehen nur auf der Verhältnisskala (z. B. Länge).", "Angewandte Statistik Kapitel 3, Folie 4");
mc("stat", STAT_DS, "Wie hängen absolute Häufigkeit h(x_j) und relative Häufigkeit f(x_j) zusammen?", ["f(x_j) = h(x_j) / n, und alle f summieren sich zu 1", "f(x_j) = h(x_j) · n", "f(x_j) = n / h(x_j)", "f(x_j) = h(x_j) − n"], "Die relative Häufigkeit ist der Anteil an allen n Werten, liegt also zwischen 0 und 1. Die absoluten Häufigkeiten summieren sich zu n, die relativen zu 1.", "Angewandte Statistik Kapitel 3, Folie 5");
wf("stat", STAT_DS, "Summenhäufigkeiten kann man für jedes Merkmal bilden, auch für qualitative wie das Geschlecht.", false, "Falsch – dafür müssen die Ausprägungen der Größe nach geordnet werden. Das geht nur bei quantitativen Merkmalen und Rangmerkmalen. „männlich ≤ weiblich“ ergibt keinen Sinn.", "Angewandte Statistik Kapitel 3, Folie 6");
mc("stat", STAT_DS, "Was gibt der Wert F(x) der empirischen Verteilungsfunktion an?", ["Den Anteil der Beobachtungen, deren Wert nicht größer als x ist", "Den Anteil der Beobachtungen, die genau x sind", "Die Anzahl der Werte größer als x", "Den Mittelwert aller Werte bis x"], "F(x) ist die relative Summenhäufigkeit bis einschließlich x. „Genau x“ wäre die relative Häufigkeit f(x), nicht die Summe.", "Angewandte Statistik Kapitel 3, Folie 9");
pair("stat", STAT_DS, "Welche Form hat die empirische Verteilungsfunktion?", [["diskretes Merkmal (Würfel)", "Treppenfunktion"], ["stetiges Merkmal (Benzinverbrauch)", "Polygonzug"], ["jede Verteilungsfunktion", "monoton wachsend bis 1"]], "Bei diskreten Werten springt F an jeder Ausprägung, bei stetigen (klassierten) Daten verbindet man die Punkte. In jedem Fall fällt F nie, weil nur Anteile dazukommen.", "Angewandte Statistik Kapitel 3, Folie 9–11");
mc("stat", STAT_DS, "Faustregel aus Beispiel 3.4: Wie viele Klassen bildest du bei n Messwerten?", ["m ≈ 5 · log n", "m ≈ n / 2", "m ≈ √n · 10", "immer genau 10"], "Bei 90 Würfeln ergibt 5 · log 90 ≈ 9,8, also 10 Klassen. Mit n / 2 wären es 45 Klassen mit kaum zwei Werten pro Klasse – viel zu fein, um eine Verteilung zu erkennen.", "Angewandte Statistik Kapitel 3, Folie 15");
ord("stat", STAT_DS, "Klassenbildung wie in Beispiel 3.4 (90 Betonwürfel): Reihenfolge?", ["Klassenanzahl m ≈ 5 · log n", "Spannweite R = x_max − x_min", "Klassenbreite Δx ≈ R / m, sinnvoll runden", "Mitte des Wertebereichs bestimmen und die Klassen symmetrisch darum legen"], "So kam man auf 10 Klassen der Breite 1,5 N/mm² zwischen 30,25 und 45,25. Die Ränder liegen auf einer halben Nachkommastelle, damit kein Messwert genau auf einen Rand fällt.", "Angewandte Statistik Kapitel 3, Folie 12/15");
mc("stat", STAT_DS, "Warum legt man die Klassenränder z. B. auf 30,25 statt auf 30,3, wenn die Werte eine Nachkommastelle haben?", ["Damit kein Messwert genau auf einem Rand liegt", "Weil Klassenränder immer auf ,25 enden müssen", "Damit die Klassen unterschiedlich breit werden", "Damit die Spannweite kleiner wird"], "Liegt ein Wert auf dem Rand, ist unklar, zu welcher Klasse er gehört. Mit Rändern eine halbe Stelle feiner kann das nicht passieren. Üblich sind außerdem rechtsoffene Intervalle „von … bis unter …“.", "Angewandte Statistik Kapitel 3, Folie 12");
pair("stat", STAT_DS, "Welches Diagramm passt?", [["Zusammenhang zweier Merkmale", "Streudiagramm"], ["Anteile eines Ganzen", "Kreisdiagramm"], ["Häufigkeiten klassierter Daten", "Histogramm"], ["Werte geordnet nach Zehnerstellen", "Stamm-Blatt-Diagramm"]], "Im Histogramm stoßen die Säulen aneinander, weil die Klassen lückenlos aneinandergrenzen. Beim Stamm-Blatt-Diagramm bleiben die Einzelwerte sichtbar.", "Angewandte Statistik Kapitel 3, Folie 17–21");
wf("stat", STAT_DS, "Dieselben Daten können je nach Klasseneinteilung ganz unterschiedlich aussehende Histogramme ergeben.", true, "Richtig – die Folie zeigt die Tore der EM 2012 einmal in sechs und einmal in zwei Klassen. Deshalb die Klasseneinteilung immer mit angeben.", "Angewandte Statistik Kapitel 3, Folie 20");

/* ── Lageparameter ── */
mc("stat", STAT_DS, "Welche Eigenschaft hat das arithmetische Mittel immer?", ["Die Summe der Abweichungen Σ(x_i − x̄) ist null", "Die Summe der Abweichungen ist minimal, aber nicht null", "Es liegt immer genau auf einem Messwert", "Es ist immer gleich dem Median"], "Positive und negative Abweichungen heben sich genau auf. Minimal ist dagegen die Summe der QUADRATISCHEN Abweichungen – das ist die zweite Eigenschaft.", "Angewandte Statistik Kapitel 3, Folie 23");
mc("stat", STAT_DS, "Für welchen Wert M wird Σ(x_i − M)² am kleinsten?", ["Für M = arithmetisches Mittel", "Für M = Median", "Für M = größter Wert", "Für M = 0"], "Das ist die Minimum-Eigenschaft des Mittelwerts und der Grund, warum er bei der Ausgleichsrechnung eine so große Rolle spielt. Der Median minimiert stattdessen die Summe der Beträge |x_i − M|.", "Angewandte Statistik Kapitel 3, Folie 23");
mc("stat", STAT_DS, "Wie berechnest du den Mittelwert, wenn jede Ausprägung x_j mit der Häufigkeit h(x_j) vorkommt?", ["x̄ = (1/n) · Σ h(x_j) · x_j – die Häufigkeiten sind Gewichte", "x̄ = Σ x_j / m, ohne die Häufigkeiten", "x̄ = Σ h(x_j) / m", "x̄ = größte Häufigkeit mal x_j"], "Jede Ausprägung zählt so oft, wie sie vorkommt. Ohne Gewichte würde ein seltener Wert genauso stark zählen wie ein häufiger. Mit relativen Häufigkeiten: x̄ = Σ f(x_j) · x_j.", "Angewandte Statistik Kapitel 3, Folie 24");
mc("stat", STAT_DS, "Wie bestimmst du den Median bei einer geraden Anzahl n von Werten?", ["Mittelwert der beiden mittleren Werte x(n/2) und x(n/2+1)", "Den Wert x(n/2)", "Den Wert x((n+1)/2)", "Den Mittelwert aller Werte"], "Bei geradem n gibt es keinen einzelnen mittleren Wert, also mittelt man die beiden in der Mitte. x((n+1)/2) ist die Formel für ungerades n.", "Angewandte Statistik Kapitel 3, Folie 26");
mc("stat", STAT_DS, "Warum nennt man den Median „robust“?", ["Ausreißer verschieben ihn kaum – theoretisch dürfen bis zu 50 % der Daten Ausreißer sein", "Er ist immer größer als der Mittelwert", "Er lässt sich ohne Sortieren berechnen", "Er berücksichtigt jeden Wert mit seiner genauen Größe"], "Der Median hängt nur von der Reihenfolge ab. Gerade weil er die genaue Größe extremer Werte NICHT berücksichtigt, ist er robust. Der Bruchpunkt liegt bei 50 %.", "Angewandte Statistik Kapitel 3, Folie 26");
wf("stat", STAT_DS, "Liegen Mittelwert und Median weit auseinander, ist das ein Hinweis auf Ausreißer.", true, "Richtig – ohne Ausreißer sind beide etwa gleich groß, deshalb nutzt man den Median zur Fehlersuche. Beim Betonfertigteil zieht der Ausreißer 12,189 m den Mittelwert auf 12,759 m, der Median bleibt bei 12,822 m.", "Angewandte Statistik Kapitel 3, Folie 26/38");
mc("stat", STAT_DS, "Einkommen in Klassen: F = 0,4698 bis 2000 €, F = 0,6048 bis 2500 €. In welcher Klasse liegt der Median?", ["2000–2500 €", "1500–2000 €", "2500–3500 €", "Das lässt sich aus F nicht sagen"], "Der Median liegt dort, wo F die 0,5 überschreitet. Bis 2000 € sind es erst 47 %, bis 2500 € schon 60 %. Innerhalb dieser Klasse wird dann linear interpoliert.", "Angewandte Statistik Kapitel 3, Folie 27–30");
ord("stat", STAT_DS, "Median klassierter Daten: Reihenfolge?", ["Relative Summenhäufigkeiten F der Klassen bilden", "Medianklasse suchen (dort, wo F die 0,5 überschreitet)", "Fehlenden Anteil 0,5 − F(untere Grenze) bestimmen", "Durch f der Medianklasse teilen, mal Klassenbreite, zur unteren Grenze addieren"], "x_M = untere Grenze + Δx · (0,5 − F_unten) / f(x_k). Man nimmt an, dass sich die Werte in der Klasse gleichmäßig verteilen.", "Angewandte Statistik Kapitel 3, Folie 27");

/* ── Streuung ── */
mc("stat", STAT_DS, "Was ist die Schwäche der Spannweite R = x_max − x_min?", ["Sie hängt nur von den zwei Extremwerten ab – wie die übrigen Werte streuen, bleibt unberücksichtigt", "Sie ist schwer zu berechnen", "Sie kann negativ werden", "Sie berücksichtigt nur die mittleren Werte"], "Ein einziger Ausreißer macht R groß. Beim Betonfertigteil ist R = 0,640 m, der Interquartilsabstand nur 0,007 m.", "Angewandte Statistik Kapitel 3, Folie 31/38");
pair("stat", STAT_DS, "Ordne die Quartile zu.", [["Q1 = Q0,25", "unteres Quartil: 25 % der Werte liegen darunter"], ["Q2 = Q0,5", "Median"], ["Q3 = Q0,75", "oberes Quartil: 75 % der Werte liegen darunter"], ["Q3 − Q1", "Interquartilsabstand"]], "Quartile teilen die sortierten Daten in vier gleich große Teile. Der Interquartilsabstand umfasst die mittleren 50 % und reagiert kaum auf Ausreißer.", "Angewandte Statistik Kapitel 3, Folie 31/32");
mc("stat", STAT_DS, "Was zeigt die Box im Boxplot?", ["Den Bereich von Q1 bis Q3 mit dem Median als Strich", "Den Bereich vom kleinsten bis zum größten Wert", "Mittelwert ± Standardabweichung", "Die 95 %-Grenzen"], "Die Box ist der Interquartilsabstand, die Linien außen reichen bis zu den Grenzen. Liegt der Median mittig in der Box, ist die Verteilung eher symmetrisch.", "Angewandte Statistik Kapitel 3, Folie 32");
mc("stat", STAT_DS, "Eine Verteilung steigt links steil an und läuft nach rechts flach aus. Was gilt?", ["Rechtsschief – der Mittelwert ist größer als der Median", "Linksschief – der Mittelwert ist kleiner als der Median", "Symmetrisch – Mittelwert gleich Median", "Rechtsschief – der Median ist größer als der Mittelwert"], "Der lange Ausläufer nach rechts zieht den Mittelwert nach oben, der Median bleibt bei der Masse der Werte. Der Name richtet sich nach der flachen Seite, nicht nach dem steilen Anstieg.", "Angewandte Statistik Kapitel 3, Folie 33");
mc("stat", STAT_DS, "Wann teilst du bei der Varianz durch n − 1 statt durch n?", ["Wenn der Mittelwert aus denselben Daten geschätzt wurde (korrigierte empirische Varianz)", "Immer, wenn n größer als 30 ist", "Nur bei klassierten Daten", "Wenn der Mittelwert μ bekannt ist"], "Wird x̄ aus der Stichprobe selbst berechnet, ist ein Freiheitsgrad verbraucht. Nur bei bekanntem μ teilt man durch n. R rechnet in var() und sd() immer mit n − 1.", "Angewandte Statistik Kapitel 3, Folie 39/40");
mc("stat", STAT_DS, "Wovon misst die mittlere absolute Abweichung d laut Folie den Abstand?", ["Vom Median", "Vom arithmetischen Mittel", "Vom größten Wert", "Vom Nullpunkt"], "d = Σ|x_i − x_M| / n. Die Folie nimmt ausdrücklich den Median als Bezug. Die Varianz misst dagegen quadratisch vom Mittelwert.", "Angewandte Statistik Kapitel 3, Folie 39");
wf("stat", STAT_DS, "Eine Messreihe mit kleiner Standardabweichung ist automatisch nah am Sollwert.", false, "Falsch – s misst nur, wie eng die Werte untereinander liegen (Präzision). Die Folie zeigt eine präzisere Reihe, die trotzdem weiter vom Sollwert entfernt ist.", "Angewandte Statistik Kapitel 3, Folie 40");

/* ── Zwei Merkmale ── */
mc("stat", STAT_DS, "Was ist eine Randverteilung in einer zweidimensionalen Häufigkeitstabelle?", ["Die Verteilung nur eines Merkmals – die Zeilen- bzw. Spaltensummen", "Die Werte in der ersten und letzten Zeile", "Die Häufigkeiten der Extremwerte", "Die Diagonale der Tabelle"], "Summiert man über das andere Merkmal, bleibt die Verteilung eines Merkmals übrig. Im Noten-Beispiel ergeben die Spaltensummen die Mathenoten aller 100 Schüler.", "Angewandte Statistik Kapitel 3, Folie 41/47");
pair("stat", STAT_DS, "Was bedeutet das Vorzeichen der Kovarianz s_XY?", [["s_XY > 0", "gleichsinniger Zusammenhang"], ["s_XY < 0", "gegensinniger Zusammenhang"], ["s_XY = 0", "kein linearer Zusammenhang"]], "Laut Folie gilt s_XY = 0 bei unabhängigen Merkmalen. Wie stark der Zusammenhang ist, verrät die Kovarianz nicht, weil sie von den Einheiten abhängt.", "Angewandte Statistik Kapitel 3, Folie 42");
mc("stat", STAT_DS, "Warum normiert man die Kovarianz zum Korrelationskoeffizienten r = s_XY / (s_X · s_Y)?", ["Die Kovarianz ist skalenabhängig – r liegt immer zwischen −1 und +1 und ist vergleichbar", "Damit r immer positiv wird", "Weil die Kovarianz nur bei gleichen Einheiten definiert ist", "Um aus r die Steigung einer Geraden zu machen"], "Rechnet man z. B. Meter in Millimeter um, ändert sich die Kovarianz, r aber nicht. Das Vorzeichen bleibt dabei erhalten, r kann also negativ sein.", "Angewandte Statistik Kapitel 3, Folie 44");
pair("stat", STAT_DS, "Ordne |r| der Interpretation zu.", [["|r| = 0", "keine Korrelation"], ["0 < |r| < 0,5", "schwache Korrelation"], ["0,5 ≤ |r| < 0,8", "mittlere Korrelation"], ["0,8 ≤ |r| < 1", "starke Korrelation"]], "|r| = 1 heißt perfekte Korrelation, alle Punkte liegen auf einer Geraden. Bei r = −0,876 ist die Korrelation also stark, nur gegensinnig.", "Angewandte Statistik Kapitel 3, Folie 44");
wf("stat", STAT_DS, "r ≈ 0 bedeutet, dass zwischen den Merkmalen überhaupt kein Zusammenhang besteht.", false, "Falsch – r misst nur den LINEAREN Zusammenhang. Beim Blutzuckerspiegel über der Zeit nach dem Essen ist r = −0,03, obwohl die Punkte deutlich einer Kurve folgen. Darum immer auch das Streudiagramm ansehen.", "Angewandte Statistik Kapitel 3, Folie 46");

/* ── Übung 1 (Folien und offizielle Lösung) ── */
wf("stat", "Matrizen", "Elementare Zeilenumformungen ändern den Rang einer Matrix nicht – Determinante und Inverse können sich dabei aber ändern.", true, "Richtig – so steht es auf den Übungsfolien. Deshalb die Determinante in Übung 1, A3 mit Sarrus an der URSPRÜNGLICHEN Matrix berechnen, nicht an der umgeformten.", "Angewandte Statistik Übung 1, Folien 7/8 und Lösung A3");
mc("stat", "Matrizen", "Laplace-Entwicklung einer 3×3-Matrix: Welches Vorzeichen bekommt der Minor zum Element a₁₂?", ["Minus, wegen (−1)^(1+2)", "Plus, weil es in der ersten Zeile steht", "Immer das Vorzeichen von a₁₂", "Plus, wie alle Minoren"], "Die Vorzeichen wechseln schachbrettartig: + − + in der ersten Zeile. Im Übungsbeispiel ergibt sich so det A = 3·(−2) − 2·(−5) + 1·1 = 5.", "Angewandte Statistik Übung 1, Folien 11–13");
mc("stat", "Matrizen", "Knobelaufgabe Übung 1: Wie berechnest du die 4×4-Determinante der Tridiagonalmatrix am geschicktesten?", ["Laplace nach der ersten Zeile – zwei Einträge sind 0, es bleiben zwei 3×3-Determinanten", "Sarrus auf die 4×4-Matrix anwenden", "Alle 24 Produkte ausschreiben", "Die Diagonale multiplizieren"], "Sarrus gilt nur bis 3×3. Mit Laplace: 2 · 4 − 1 · 3 = 5. Die Diagonale allein reicht nur bei Dreiecksmatrizen – diese hat aber Einträge über und unter der Diagonale.", "Angewandte Statistik Übung 1, Lösung Knobelaufgabe");

/* ── Übung 2: Inverse und LGS ── */
pair("stat", "Gleichungssysteme", "Alles dieselbe Aussage über eine quadratische Matrix A – ordne zu.", [["det A ≠ 0", "A ist regulär (nicht-singulär)"], ["voller Rang", "keine linear abhängigen Zeilen"], ["A⁻¹ existiert", "Ax = b eindeutig lösbar"]], "Die Übungsfolie verbindet alle fünf Aussagen mit ⇔: Gilt eine, gelten alle. Ist det A = 0, fällt alles gemeinsam weg.", "Angewandte Statistik Übung 2, Folie 3");
mc("stat", "Gleichungssysteme", "Determinantenformel: Wie lautet die Inverse?", ["A⁻¹ = adj(A) / det A, mit adj(A) = C′ (transponierte Kofaktormatrix)", "A⁻¹ = C / det A, ohne Transponieren", "A⁻¹ = det A · C′", "A⁻¹ = A′ / det A"], "Die Kofaktormatrix muss transponiert werden. Bei symmetrischen Matrizen wie in Übung 2, A1 fällt der Fehler nicht auf, bei allen anderen schon.", "Angewandte Statistik Übung 2, Folie 9");
mc("stat", "Gleichungssysteme", "Wie berechnest du den Kofaktor c_ij?", ["c_ij = (−1)^(i+j) · m_ij, wobei m_ij die Determinante ohne Zeile i und Spalte j ist", "c_ij = a_ij · (−1)^(i+j)", "c_ij = m_ij, ohne Vorzeichen", "c_ij = a_ji"], "Erst Zeile i und Spalte j streichen, die verbleibende Determinante (Minor) berechnen, dann das Schachbrett-Vorzeichen anbringen. Der Eintrag a_ij selbst kommt im Kofaktor gar nicht vor.", "Angewandte Statistik Übung 2, Folie 10");
ord("stat", "Gleichungssysteme", "Inverse über die Determinantenformel: Reihenfolge?", ["det A berechnen und prüfen, ob sie ≠ 0 ist", "Alle Minoren m_ij bestimmen", "Vorzeichen (−1)^(i+j) anbringen → Kofaktormatrix C", "C transponieren → adj(A)", "Durch det A teilen und mit A · A⁻¹ = I prüfen"], "Ist det A = 0, kannst du dir alles Weitere sparen: Dann gibt es keine Inverse.", "Angewandte Statistik Übung 2, Folie 9–15");
mc("stat", "Gleichungssysteme", "Gauß-Jordan: Woran erkennst du, dass du fertig bist?", ["Links steht die Einheitsmatrix – rechts steht dann A⁻¹", "Links steht eine Dreiecksmatrix", "Rechts steht die Einheitsmatrix", "Alle Einträge sind positiv"], "Man schreibt (A | I) und formt so lange um, bis (I | A⁻¹) dasteht. Bei einer Dreiecksmatrix links bist du erst beim normalen Gauß-Verfahren fertig, nicht bei Gauß-Jordan.", "Angewandte Statistik Übung 2, Folie 17–19");
wf("stat", "Gleichungssysteme", "In Übung 2, A3 a) hat A die Zeilen (4 8 2), (1 3 1), (6 14 4). Das System hat eine eindeutige Lösung.", false, "Falsch – det A = 0 (Rang 2): Zeile III = Zeile I + 2 · Zeile II. Deshalb fragt die Aufgabe zuerst, OB es eine eindeutige Lösung gibt. Eigene Rechnung, Lösung kommt 1–2 Tage nach der Übung.", "Angewandte Statistik Übung 2, A3 a)");
mc("stat", "Gleichungssysteme", "Knobelaufgabe Übung 2: Die Zeilen von A sind Einheitsvektoren und stehen paarweise senkrecht aufeinander. Was folgt für A⁻¹?", ["A⁻¹ = A′ – A ist orthogonal", "A⁻¹ = A", "A⁻¹ existiert nicht", "A⁻¹ = −A"], "Bei orthogonalen Matrizen ist A · A′ = I, die Inverse ist also einfach die Transponierte. Das spart die ganze Rechnung, wie der Hinweis auf dem Blatt andeutet. Eigene Rechnung: det A = 1.", "Angewandte Statistik Übung 2, Knobelaufgabe");

aufgabe({
 "id": "stat-ue02-inverse", "f": "stat", "t": "Gleichungssysteme", "titel": "Inverse über die Kofaktormatrix", "s": "Angewandte Statistik Übung 2, Aufgabe 1 (eigene Rechnung)",
 "angabe": "Gegeben ist die Matrix A mit den Zeilen (3 2 1), (2 4 2), (1 2 3). a) Berechne det A. Ist A regulär? b) Bestimme die Kofaktormatrix C. c) Bilde A⁻¹ über Determinante und Kofaktormatrix.",
 "ges": "det A, Kofaktormatrix C, Inverse A⁻¹",
 "schritte": [
  { "f": "Wie berechnest du det A?", "o": [
    ["Sarrus: Produkte nach rechts unten minus Produkte nach links unten", "Für 3×3 ist Sarrus der schnellste Weg."],
    ["3 · 4 · 3, das Produkt der Diagonale", "Das gilt nur bei Dreiecksmatrizen."],
    ["ad − bc mit den Ecken", "Das ist die 2×2-Formel."],
    ["Summe aller Einträge", "Hat mit der Determinante nichts zu tun."]],
   "r": "rechts unten: 36 + 4 + 4 = 44 · links unten: 4 + 12 + 12 = 28\ndet A = 44 − 28 = 16 ≠ 0 → A ist regulär" },
  { "f": "Wie bekommst du c₁₁?", "o": [
    ["Zeile 1 und Spalte 1 streichen, Determinante der Rest-Matrix mit Vorzeichen +", "c₁₁ = (+1) · det((4 2),(2 3)) = 12 − 4 = 8."],
    ["c₁₁ = a₁₁ = 3", "Der Kofaktor ist eine Unterdeterminante, nicht der Eintrag selbst."],
    ["Zeile 1 und Spalte 1 streichen, Vorzeichen −", "(−1)^(1+1) = +1, nicht −1."],
    ["c₁₁ = det A / a₁₁", "So ist der Kofaktor nicht definiert."]],
   "r": "c₁₁ = +(4·3 − 2·2) = 8" },
  { "f": "Wie lautet die vollständige Kofaktormatrix?", "o": [
    ["Alle neun Minoren mit Schachbrett-Vorzeichen: C = (8 −4 0; −4 8 −4; 0 −4 8)", "z. B. c₁₂ = −(2·3 − 2·1) = −4, c₁₃ = +(2·2 − 4·1) = 0."],
    ["C = (8 4 0; 4 8 4; 0 4 8), alle positiv", "Das Schachbrett-Vorzeichen fehlt."],
    ["C = A′", "Die Kofaktormatrix ist etwas anderes als die Transponierte."],
    ["Nur die Diagonale berechnen, der Rest ist 0", "Die Nebeneinträge sind hier nicht null."]],
   "r": "C = (8 −4 0; −4 8 −4; 0 −4 8)\nC ist symmetrisch, weil A symmetrisch ist → C′ = C" },
  { "f": "Wie lautet A⁻¹?", "o": [
    ["A⁻¹ = C′ / det A = C / 16", "Weil C symmetrisch ist, ändert das Transponieren hier nichts."],
    ["A⁻¹ = 16 · C′", "Man teilt durch die Determinante, man multipliziert nicht."],
    ["A⁻¹ = C′", "Die Division durch det A fehlt."],
    ["A⁻¹ = A′ / 16", "Es muss die Kofaktormatrix sein, nicht A."]],
   "r": "A⁻¹ = (1/2 −1/4 0; −1/4 1/2 −1/4; 0 −1/4 1/2)\nProbe: Zeile 1 von A mal Spalte 1 von A⁻¹ = 3·0,5 + 2·(−0,25) + 1·0 = 1 ✓" }],
 "fazit": "Bei symmetrischen Matrizen ist auch die Inverse symmetrisch. Rechne trotzdem immer die Probe A · A⁻¹ = I, denn ein vergessenes Vorzeichen fällt sonst nicht auf."
});

aufgabe({
 "id": "stat-ue02-mischung", "f": "stat", "t": "Gleichungssysteme", "titel": "Mischwasser für Beton", "s": "Angewandte Statistik Übung 2, Aufgabe 4 (eigene Rechnung)",
 "angabe": "Wasserquelle 1: Salzgehalt 0,02 %, pH 6,5. Wasserquelle 2: Salzgehalt 2,0 %, pH 8,1. Gesucht ist ein Mischverhältnis x = (x₁, x₂)′, das einen Salzgehalt von 0,08 % und einen pH-Wert von 7,0 ergibt. Zeile 1 = Salzgehalt, Zeile 2 = pH. Lösen mit der Determinantenformel.",
 "ges": "Gleichungssystem, x₁ und x₂, Bewertung",
 "schritte": [
  { "f": "Wie lauten die beiden Gleichungen?", "o": [
    ["0,02 x₁ + 2,0 x₂ = 0,08 und 6,5 x₁ + 8,1 x₂ = 7,0", "Jede Zeile gehört zu einem Parameter, jede Spalte zu einer Quelle."],
    ["0,02 x₁ + 6,5 x₂ = 0,08 und 2,0 x₁ + 8,1 x₂ = 7,0", "Hier sind Quelle 2 und pH vertauscht: In Zeile 1 stehen beide Salzgehalte."],
    ["x₁ + x₂ = 1 und 0,02 x₁ + 2,0 x₂ = 0,08", "Die Aufgabe verlangt die Zeilen Salz und pH, nicht die Summenbedingung."],
    ["0,08 x₁ + 7,0 x₂ = 0,02", "Die Zielwerte gehören auf die rechte Seite b."]],
   "r": "A = (0,02 2,0; 6,5 8,1), b = (0,08; 7,0)" },
  { "f": "Wie berechnest du det A?", "o": [
    ["ad − bc = 0,02 · 8,1 − 2,0 · 6,5", "2×2-Formel: Hauptdiagonale minus Nebendiagonale."],
    ["0,02 · 8,1 + 2,0 · 6,5", "Das Produkt der Nebendiagonale wird abgezogen."],
    ["0,02 · 2,0 − 6,5 · 8,1", "Das multipliziert die Zeilen statt der Diagonalen."],
    ["Sarrus", "Für 2×2 reicht ad − bc."]],
   "r": "det A = 0,162 − 13 = −12,838 ≠ 0 → eindeutig lösbar" },
  { "f": "Wie lautet die Inverse einer 2×2-Matrix (a b; c d)?", "o": [
    ["(d −b; −c a) / det A", "Diagonale tauschen, Nebendiagonale mit Minus, durch die Determinante."],
    ["(a −b; −c d) / det A", "Die Hauptdiagonale muss getauscht werden."],
    ["(d b; c a) / det A", "Die Nebendiagonale bekommt ein Minus."],
    ["(−d b; c −a) · det A", "Man teilt durch det A."]],
   "r": "A⁻¹ = (8,1 −2,0; −6,5 0,02) / (−12,838)" },
  { "f": "Wie bekommst du x?", "o": [
    ["x = A⁻¹ · b ausmultiplizieren", "Zeile mal Spalte, dann durch −12,838."],
    ["x = b · A⁻¹ mit b als Zeile", "b ist ein Spaltenvektor und steht rechts."],
    ["x = A · b", "Das wäre die Mischung, die x = b ergeben würde."],
    ["x = b / det A", "Ohne die Inverse fehlt die Kopplung der Gleichungen."]],
   "r": "x₁ = (8,1 · 0,08 − 2,0 · 7,0) / (−12,838) = −13,352 / −12,838 ≈ 1,040\nx₂ = (−6,5 · 0,08 + 0,02 · 7,0) / (−12,838) = −0,38 / −12,838 ≈ 0,030" },
  { "f": "Lohnt sich Quelle 2?", "o": [
    ["Kaum – auf etwa 35 Teile Quelle 1 kommt nur 1 Teil Quelle 2", "x₂ ist so klein, dass fast nichts vom billigen Wasser genutzt wird."],
    ["Ja, sie liefert den Großteil des Wassers", "x₂ ≈ 0,03 ist viel kleiner als x₁ ≈ 1,04."],
    ["Nein, weil x₂ negativ ist", "x₂ ist positiv, nur sehr klein."],
    ["Ja, weil der pH-Wert sonst nicht erreicht wird", "Ohne Quelle 2 ginge es zwar nicht exakt, aber der Anteil bleibt winzig."]],
   "r": "x₁ : x₂ ≈ 1,040 : 0,030 ≈ 35 : 1 → der Salzgehalt begrenzt Quelle 2 auf rund 3 %" }],
 "fazit": "Bei Mischungsaufgaben steht jede Quelle für eine Spalte und jeder Parameter für eine Zeile. Prüfe das Ergebnis immer auf Plausibilität."
});

Object.assign(RECHNEN, {
 "stat-ue02-inverse": {
  "0": [{ "l": "det A", "w": 16, "u": "", "h": "(36 + 4 + 4) − (4 + 12 + 12)", "t": 0 }],
  "1": [{ "l": "c₁₁", "w": 8, "u": "", "h": "4 · 3 − 2 · 2", "t": 0 }],
  "3": [{ "l": "a⁻¹₁₁", "w": 0.5, "u": "", "h": "8 / 16", "t": 0 }, { "l": "a⁻¹₁₂", "w": -0.25, "u": "", "h": "−4 / 16", "t": 0 }]
 },
 "stat-ue02-mischung": {
  "1": [{ "l": "det A", "w": -12.838, "u": "", "h": "0,02 · 8,1 − 2,0 · 6,5" }],
  "3": [{ "l": "x₁", "w": 1.040, "u": "", "h": "(8,1 · 0,08 − 2,0 · 7,0) / (−12,838)" }, { "l": "x₂", "w": 0.0296, "u": "", "h": "(−6,5 · 0,08 + 0,02 · 7,0) / (−12,838)", "t": 0.03 }]
 }
});
/* Patch-Warteschlange · Bauinformatik · Vorlesung Block 2 Kontrollstrukturen (Folien 71–102) · erstellt 05.11.2026 · alle Codeausgaben mit Java 21 geprüft */
const BINF_KS = "Kontrollstrukturen";
THEMEN["binf|Kontrollstrukturen"] = "Ein lineares Programm arbeitet Anweisung für Anweisung ab, nach dem EVA-Prinzip: Eingabe, Verarbeitung, Ausgabe. Kontrollstrukturen machen daraus mehr. Bedingungsanweisungen (if, if-else, else if, switch) verzweigen je nach einem Boolean-Ausdruck, Schleifen (for, while, do-while) wiederholen einen Block. Ob vor dem ersten Durchlauf geprüft wird (kopfgesteuert) oder erst danach (fußgesteuert), entscheidet, ob der Block mindestens einmal läuft. break beendet eine Schleife ganz, continue nur den aktuellen Durchlauf. Darstellen lässt sich der Ablauf als Struktogramm oder Aktivitätsdiagramm.";

pair("binf", BINF_KS, "Ordne das EVA-Prinzip zu.", [["E", "Eingabe"], ["V", "Verarbeitung"], ["A", "Ausgabe"]], "Jedes Programm besteht aus diesen drei Teilen. Bei großen Programmen ist das Prinzip schwerer einzuhalten, gilt aber trotzdem.", "Bauinformatik Block 2, Folie 71");
mc("binf", BINF_KS, "Wie heißt das Struktogramm noch, und nach welcher Norm ist es geregelt?", ["Nassi-Shneiderman-Diagramm, DIN 66261", "Flussdiagramm, DIN 1045", "Aktivitätsdiagramm, UML", "Klassendiagramm, DIN 66261"], "Struktogramme zeichnen den Ablauf als ineinander geschachtelte Blöcke. Aktivitätsdiagramme gehören zur UML und arbeiten mit Knoten und Pfeilen.", "Bauinformatik Block 2, Folie 71");
pair("binf", BINF_KS, "Struktogramm und Aktivitätsdiagramm: Was entspricht sich?", [["Anweisung (Struktogramm)", "Aktion (Aktivitätsdiagramm)"], ["Verzweigungsblock mit ja/nein", "Raute mit [true]/[false]"], ["Schleifenblock „while Bedingung“", "Pfeil zurück zur Bedingung"]], "Beide Diagramme zeigen denselben Ablauf. Im Struktogramm sind Schleifen geschachtelte Blöcke, im Aktivitätsdiagramm Rückführungen.", "Bauinformatik Block 2, Folie 76–78/97");
pair("binf", BINF_KS, "Welche Anweisung gehört zu welcher Auswahl?", [["einseitige Auswahl", "if ohne else"], ["zweiseitige Auswahl", "if … else"], ["kaskadierende Auswahl", "if … else if … else"], ["mehrseitige Auswahl über einen Wert", "switch"]], "Einseitig heißt: Im false-Fall passiert gar nichts. Bei else if wird nur der erste Zweig ausgeführt, dessen Bedingung stimmt.", "Bauinformatik Block 2, Folie 77–85");
mc("binf", BINF_KS, "Was steht in den runden Klammern von if( … )?", ["Ein Boolean-Ausdruck, der true oder false ergibt", "Eine beliebige Zahl", "Eine Zuweisung wie x = 5", "Ein String"], "if prüft nur true/false. x = 5 ist eine Zuweisung und liefert in Java einen int, das lässt der Compiler bei if nicht durch – gemeint ist meist x == 5.", "Bauinformatik Block 2, Folie 78");
mc("binf", BINF_KS, "int x = 15; if (x > 10) A; else if (x > 5) B; else C; – was wird ausgeführt?", ["Nur A", "A und B", "Nur B", "A, B und C"], "15 > 10 ist true, also A. Danach wird die ganze Kaskade verlassen – B wird gar nicht mehr geprüft, obwohl 15 > 5 auch stimmt.", "Bauinformatik Block 2, Folie 83");
mc("binf", BINF_KS, "Beispiel „gerade/ungerade“: Welche Bedingung prüft, ob die Zahl z gerade ist?", ["z % 2 == 0", "z / 2 == 0", "z % 2 == 1", "z = 2"], "% liefert den Rest der Division. Gerade Zahlen haben bei 2 den Rest 0. z / 2 == 0 gilt nur für 0 und 1, und z = 2 ist eine Zuweisung, kein Vergleich.", "Bauinformatik Block 2, Folie 80");
mc("binf", BINF_KS, "Welche Werte darf man laut Folie in switch prüfen?", ["Ganzzahlen und Zeichenketten (Strings)", "Nur Kommazahlen", "Nur boolean", "Beliebige Bedingungen wie x > 5"], "switch vergleicht einen Wert mit festen case-Werten. Bereiche wie x > 5 gehen damit nicht – dafür braucht man if/else if.", "Bauinformatik Block 2, Folie 85");
mc("binf", BINF_KS, "int n = 2; switch (n) { case 1: print(\"eins\"); case 2: print(\"zwei\"); case 3: print(\"drei\"); break; default: print(\"sonst\"); } – Ausgabe?", ["zwei drei", "zwei", "eins zwei drei", "sonst"], "Ohne break nach case 2 läuft das Programm einfach in case 3 weiter (Durchfallen), bis ein break kommt. Deshalb schließt jedes case auf der Folie mit break.", "Bauinformatik Block 2, Folie 85 (eigenes Beispiel, geprüft)");
mc("binf", BINF_KS, "Wann wird der default-Zweig von switch ausgeführt?", ["Wenn der Wert keinem der case-Werte entspricht", "Immer zuerst", "Immer zusätzlich am Ende", "Nur wenn der Wert 0 ist"], "default ist das „sonst“ der switch-Anweisung. Mit break in jedem case wird er nicht zusätzlich durchlaufen.", "Bauinformatik Block 2, Folie 85");
pair("binf", BINF_KS, "Ordne die Schleifenart zu.", [["for", "Zählschleife: Anzahl der Durchläufe bekannt"], ["while", "kopfgesteuert: evtl. gar kein Durchlauf"], ["do-while", "fußgesteuert: mindestens ein Durchlauf"]], "Der Unterschied zwischen while und do-while ist nur der Zeitpunkt der Prüfung: vor oder nach dem Schleifenrumpf.", "Bauinformatik Block 2, Folie 88/96/98");
ord("binf", BINF_KS, "Bring die drei Teile im Kopf der for-Schleife in die richtige Reihenfolge.", ["Initialisierung der Laufvariable (int i = 1)", "Abbruchbedingung (i <= 10)", "Veränderung der Laufvariable (i++)"], "Die Bedingung wird VOR jedem Durchlauf geprüft, die Veränderung nach jedem Durchlauf. Solange die Bedingung true ist, läuft die Schleife weiter.", "Bauinformatik Block 2, Folie 89");
wf("binf", BINF_KS, "In der for-Schleife bedeutet die Abbruchbedingung: Die Schleife bricht ab, sobald die Bedingung erfüllt ist.", false, "Falsch – genau umgekehrt: Die Schleife läuft, SOLANGE die Bedingung true ist. Bei i <= 10 endet sie also, wenn i = 11 erreicht ist.", "Bauinformatik Block 2, Folie 89");
mc("binf", BINF_KS, "int i; for (i = 1; i <= 10; i++) { } – welchen Wert hat i nach der Schleife?", ["11", "10", "1", "0"], "Die Schleife endet erst, wenn i <= 10 false wird, also bei i = 11. Den Wert sieht man nur, weil i außerhalb der Schleife deklariert ist.", "Bauinformatik Block 2, Folie 89 (eigenes Beispiel, geprüft)");
mc("binf", BINF_KS, "Kleiner Gauß: Was gibt die for-Schleife aus, die alle Zahlen von 1 bis 100 aufaddiert?", ["5050", "5000", "10100", "100"], "1 + 2 + … + 100 = 100 · 101 / 2 = 5050. 10100 wäre 100 · 101 ohne die Halbierung.", "Bauinformatik Block 2, Folie 92 (geprüft)");
mc("binf", BINF_KS, "Was bewirkt for( ; ; )?", ["Eine Endlosschleife – der Block wird ohne Ende wiederholt", "Die Schleife läuft genau einmal", "Einen Compilerfehler", "Die Schleife wird übersprungen"], "Ohne Abbruchbedingung gilt die Bedingung als immer erfüllt. Die Folie warnt: selten sinnvoll, im schlimmsten Fall hängt der Rechner.", "Bauinformatik Block 2, Folie 95");
mc("binf", BINF_KS, "int i = 10; while (i < 10) { c++; i++; } – wie oft läuft der Block?", ["Gar nicht", "Einmal", "Zehnmal", "Endlos"], "while prüft VOR dem ersten Durchlauf. 10 < 10 ist false, also wird der Rumpf übersprungen. Mit do-while liefe er genau einmal.", "Bauinformatik Block 2, Folie 96 (geprüft)");
mc("binf", BINF_KS, "Gleiche Werte, aber als do { c++; i++; } while (i < 10); mit i = 10 – wie oft läuft der Block?", ["Einmal", "Gar nicht", "Zehnmal", "Endlos"], "do-while prüft erst NACH dem Rumpf. Der Block läuft also einmal, danach ist 11 < 10 false. Achte auf das Semikolon nach while( … ).", "Bauinformatik Block 2, Folie 98 (geprüft)");
pair("binf", BINF_KS, "break oder continue?", [["break", "beendet die ganze Schleife"], ["continue", "bricht nur den aktuellen Durchlauf ab, die Schleife geht weiter"]], "Im Folienbeispiel beendet die Zahl 5 die Schleife (break), die Zahl 0 wird nur nicht ausgegeben (continue).", "Bauinformatik Block 2, Folie 100");
mc("binf", BINF_KS, "for (int k = 0; k < 5; k++) { if (k == 2) continue; if (k == 4) break; print(k + \" \"); } – Ausgabe?", ["0 1 3", "0 1 2 3", "0 1", "0 1 3 4"], "Bei k = 2 springt continue zum nächsten Durchlauf, ohne zu drucken. Bei k = 4 beendet break die Schleife, bevor gedruckt wird.", "Bauinformatik Block 2, Folie 100 (eigenes Beispiel, geprüft)");
mc("binf", BINF_KS, "Welche Werte liefert Math.random()?", ["double-Zahlen von 0 bis kleiner als 1", "Ganzzahlen von 0 bis 10", "double-Zahlen von 0 bis einschließlich 1", "Ganzzahlen von 1 bis 6"], "Die 1 selbst wird nie erreicht. Deshalb ergibt Math.random() · 10 Werte von 0,0 bis unter 10.", "Bauinformatik Block 2, Folie 101");
mc("binf", BINF_KS, "Warum steht in int zahl = (int)(Math.random() * 10); der Cast (int)?", ["double passt nicht automatisch in int – die Umwandlung muss explizit sein und schneidet die Nachkommastellen ab", "Damit die Zahl gerundet wird", "Weil Math.random() einen String liefert", "Ohne Cast wäre die Zahl negativ"], "(int) schneidet ab, es rundet nicht: Aus 9,9 wird 9. Deshalb entstehen nur die Zahlen 0 bis 9.", "Bauinformatik Block 2, Folie 101");
wf("binf", BINF_KS, "(int)(Math.random() * 10) kann auch die Zahl 10 liefern.", false, "Falsch – Math.random() bleibt unter 1, mal 10 also unter 10. Der Cast schneidet ab, also kommt höchstens 9 heraus (z. B. 9,99 → 9).", "Bauinformatik Block 2, Folie 101 (geprüft)");
/* Patch-Warteschlange · Baukonstruktion · Übung 3 Bemessung (04.11.2026, Geßler/Kimpeler) · Beispiel 5 Sparren, Beispiel 6 Dreifeldträger · erstellt 05.11.2026 · alle Zahlen nachgerechnet */
const BK_KOMBI = "Lastfallkombination";
THEMEN["bauko|Lastfallkombination"] = "Nach den Lastannahmen rechnest du die Schnittgrößen zuerst für jeden Lastfall getrennt und charakteristisch: Eigengewicht, Schnee, Wind, Nutzlast. Erst danach kombinierst du nach der Grundkombination: ständige Lasten mal 1,35, eine veränderliche Einwirkung als „führende“ voll mit 1,5, alle weiteren zusätzlich mit ψ₀ abgemindert. Weil vorher nicht klar ist, welche veränderliche Last führend den größten Wert liefert, probierst du jede einmal als führende aus. Bei Durchlaufträgern kommt die ungünstige Laststellung dazu: Veränderliche Lasten stellst du nur auf die Felder, die das gesuchte Moment vergrößern.";

/* ── Wiederholung Sicherheitskonzept ── */
ord("bauko", BK_KOMBI, "Vorgehen bei der Bemessung laut Übung 3: Reihenfolge?", ["Charakteristische Einwirkungen F_k bestimmen (Lastannahmen)", "Charakteristische Schnittgrößen E_k je Lastfall berechnen", "Mit Teilsicherheits- und Kombinationsbeiwerten zu E_d kombinieren", "Bemessungswiderstand R_d = R_k / γ_M bestimmen", "Nachweis E_d ≤ R_d führen"], "Die Teilsicherheitsbeiwerte kommen erst nach der Schnittgrößenberechnung ins Spiel. So kann man dieselben charakteristischen Schnittgrößen in mehreren Kombinationen verwenden.", "Baukonstruktion Übung 3, Folie 4");
mc("bauko", BK_KOMBI, "Was bedeutet „führende veränderliche Einwirkung“ in der Grundkombination?", ["Die eine veränderliche Last, die voll mit γ_Q = 1,5 angesetzt wird – alle anderen bekommen zusätzlich ψ₀", "Die größte ständige Last", "Die Last, die zuerst auftritt", "Die Last mit dem größten ψ₀"], "Dass Schnee und Wind gleichzeitig mit ihrem Höchstwert auftreten, ist unwahrscheinlich. Deshalb zählt nur eine voll, die anderen abgemindert. Welche führend ist, legt man nicht fest – man probiert jede aus.", "Baukonstruktion Übung 3, Folie 33/34");
mc("bauko", BK_KOMBI, "Beispiel 5 hat Schnee und Wind. Wie viele Kombinationen mit beiden Lasten rechnest du?", ["Zwei – einmal Wind führend, einmal Schnee führend", "Eine – Schnee ist immer führend", "Eine – die größere Last ist führend", "Vier – jede Last mit jedem ψ"], "Welche Kombination maßgebend wird, sieht man erst am Ergebnis. In Beispiel 5 liegt Schnee führend nur knapp vorn: −2,09 gegen −2,0 kNm.", "Baukonstruktion Übung 3, Folie 34");
pair("bauko", BK_KOMBI, "Welche Beiwerte nutzt Übung 3?", [["γ_G", "1,35"], ["γ_Q", "1,50"], ["ψ₀ Schnee", "0,5"], ["ψ₀ Wind", "0,6"], ["ψ₀ sonstige Last (Bsp. 6)", "0,8"]], "γ_G und γ_Q gelten für alle Materialien. Die ψ₀-Werte stehen im SBT (24. Aufl. S. 3.5). Die sonstige Last in Beispiel 6 hat der Bauherr mit ψ₀ = 0,8 vorgegeben.", "Baukonstruktion Übung 3, Folie 33/50");
mc("bauko", BK_KOMBI, "Beispiel 6 ist ein Versammlungsraum. Mit welchem ψ₀ wird die Nutzlast im Ergebnis tatsächlich abgemindert?", ["0,7 – Kategorie C (Versammlungsräume)", "0,5 – wie auf der Folie notiert", "0,6 – wie Wind", "1,0 – Nutzlast wird nie abgemindert"], "Auf der Folie steht ψ₀,q = 0,5, gerechnet wird aber mit 0,7: Nur damit kommen −6,76 und 5,1 kNm heraus. 0,7 passt zur Kategorie C. Im Zweifel selbst im SBT nachschlagen.", "Baukonstruktion Übung 3, Folie 50–52 (nachgerechnet)");

/* ── Beispiel 5: Sparren ── */
mc("bauko", BK_KOMBI, "Beispiel 5: Wie kommt die ständige Last g = 0,7 kN/m (auf der Dachfläche) auf die Grundfläche?", ["g′ = g / cos α = 0,7 / cos 35,7° = 0,86 kN/m", "g′ = g · cos α = 0,57 kN/m", "g′ = g · sin α", "g′ = g, die Bezugsfläche spielt keine Rolle"], "Die schräge Dachfläche ist länger als ihre Grundfläche. Damit die Gesamtlast gleich bleibt, wird die Last je Meter Grundfläche größer, also geteilt durch cos α, nicht multipliziert.", "Baukonstruktion Übung 3, Folie 11");
mc("bauko", BK_KOMBI, "Beispiel 5: Die Formel liefert in Aachen s_k = 0,63 kN/m². Mit welchem Wert rechnest du?", ["0,85 kN/m² – der Mindestwert für Zone 2", "0,63 kN/m²", "0,63 · 1,25 = 0,79 kN/m²", "0,85 · 0,63 = 0,54 kN/m²"], "Bei 200 m Höhe ergibt die Formel weniger als den Mindestwert. In Zone 2 gilt dann 0,85 kN/m². Der Faktor 1,25 gilt nur für Zone 1a.", "Baukonstruktion Übung 3, Folie 12");
mc("bauko", BK_KOMBI, "Wie wird aus der Flächenlast eine Linienlast pro Sparren?", ["Mit der Lasteinzugsbreite (Sparrenabstand) multiplizieren: s₁ = 0,55 · 0,62 = 0,34 kN/m", "Durch den Sparrenabstand teilen", "Mit der Sparrenlänge multiplizieren", "Mit der Dachbreite 7,44 m multiplizieren"], "Jeder Sparren trägt den Streifen zwischen den Mitten zu seinen Nachbarn – das ist die Lasteinzugsbreite, hier 0,62 m. Die Dachbreite brauchst du nur für das Windmaß e.", "Baukonstruktion Übung 3, Folie 13");
mc("bauko", BK_KOMBI, "Der Sparren kragt links 0,885 m und rechts 1,47 m über die Auflager. Wo liegt das größere Stützmoment?", ["Am Auflager B mit dem längeren Kragarm (1,47 m)", "Am Auflager A", "In Feldmitte", "Beide sind gleich groß"], "Das Kragmoment wächst mit dem Quadrat der Kraglänge: −q · l²/2. Bei g: M_B = −0,93 kNm gegen M_A = −0,34 kNm. Deshalb wird an B bemessen.", "Baukonstruktion Übung 3, Folie 22/31");
mc("bauko", BK_KOMBI, "Wie groß ist das Moment am Einspannpunkt eines Kragarms unter Gleichlast q?", ["M = −q · l² / 2", "M = −q · l² / 8", "M = −q · l", "M = q · l² / 8"], "Die Resultierende q · l greift in der Mitte des Kragarms an, also mit Hebelarm l/2. q · l²/8 ist das Feldmoment eines Einfeldträgers.", "Baukonstruktion Übung 3, Folie 20");
mc("bauko", BK_KOMBI, "Wo liegt das größte Feldmoment eines Trägers unter Gleichlast?", ["Am Querkraftnullpunkt", "Immer genau in Feldmitte", "Am Auflager", "Dort, wo die Last am größten ist"], "Die Querkraft ist die Ableitung des Moments, wo sie null ist, hat M ein Extremum. Mit Kragarmen liegt der Punkt nicht in Feldmitte – in Beispiel 5 bei x = 1,98 m.", "Baukonstruktion Übung 3, Folie 20/22");
wf("bauko", BK_KOMBI, "In Beispiel 5 liegen die maximalen Feldmomente von g, s und w genau an derselben Stelle.", false, "Falsch – die Tabelle vermerkt ausdrücklich, dass M_Feld,max nicht jeweils an der gleichen Stelle liegt (Wind: x = 2,59 m statt 1,98 m). Sie trotzdem zu addieren, liegt auf der sicheren Seite.", "Baukonstruktion Übung 3, Folie 31");

/* ── Durchlaufträger ── */
mc("bauko", BK_KOMBI, "Zweifeldträger mit Gleichlast q: Wie groß ist die Auflagerkraft der Mittelstütze?", ["B = 1,25 · q · l – je Feld 5/8 · q · l", "B = q · l", "B = 0,5 · q · l", "B = 2 · q · l"], "Die Mittelstütze bekommt mehr als bei zwei Einfeldträgern (das wären 2 · q · l/2 = q · l), weil die Durchlaufwirkung Last zur Mitte zieht.", "Baukonstruktion Übung 3, Folie 36");
mc("bauko", BK_KOMBI, "Wie rechnest du in Beispiel 6 Momente am Dreifeldträger mit gleichen Stützweiten?", ["M = Tafelwert · q · l², z. B. M₁ = 0,080 · 5 · 2² = 1,6 kNm", "M = q · l² / 8 in jedem Feld", "M = Tafelwert · q · l", "M = Tafelwert / (q · l²)"], "Die Tafelwerte stehen im SBT (24. Aufl. S. 4.14), einer je Laststellung und Stelle. q · l²/8 gilt nur für einen Einfeldträger, beim Durchlaufträger sind die Feldmomente kleiner.", "Baukonstruktion Übung 3, Folie 39");
mc("bauko", BK_KOMBI, "Dreifeldträger: Wo stellst du die Nutzlast hin, um das größte Feldmoment im Außenfeld zu bekommen?", ["In beide Außenfelder, das Mittelfeld bleibt frei", "In alle drei Felder", "Nur ins Mittelfeld", "Ins Außenfeld und das benachbarte Mittelfeld"], "Last im Mittelfeld hebt die Außenfelder an und verkleinert deren Feldmoment. Volllast ergibt nur 1,28 kNm, „links/rechts“ 1,62 kNm.", "Baukonstruktion Übung 3, Folie 46/49");
mc("bauko", BK_KOMBI, "Und für das größte Stützmoment über Stütze C?", ["In die beiden Felder neben C (Mitte und rechts)", "In alle drei Felder", "Nur ins linke Außenfeld", "In beide Außenfelder"], "Die zwei an C angrenzenden Felder biegen den Träger über C am stärksten. Mitte/rechts ergibt M_c = −1,87 kNm, Volllast nur −1,6 kNm.", "Baukonstruktion Übung 3, Folie 44/52");
wf("bauko", BK_KOMBI, "Das Eigengewicht stellt man bei der ungünstigen Laststellung ebenfalls nur feldweise auf.", false, "Falsch – ständige Lasten wirken immer auf allen Feldern. Nur veränderliche Lasten wie Nutzlast dürfen feldweise fehlen.", "Baukonstruktion Übung 3, Folie 39/49");
mc("bauko", BK_KOMBI, "Wie bekommst du in Beispiel 6 das Feldmoment, wenn die Tafel nur die Stützmomente liefert?", ["q · l²/8 plus die gemittelten Stützmomente in Feldmitte einhängen", "Die Stützmomente addieren", "q · l²/8 allein", "Das Feldmoment ist dann null"], "Man hängt die Einfeldträger-Parabel zwischen die Stützmomente: M₂ = 4 · 2²/8 + (−0,53 − 1,87)/2 = 0,80 kNm. Ohne Stützmomente wäre das Feldmoment viel zu groß.", "Baukonstruktion Übung 3, Folie 44");

aufgabe({
 "id": "bauko-ue03-sparren", "f": "bauko", "t": BK_KOMBI, "titel": "Bemessungsmoment am Sparren", "s": "Baukonstruktion Übung 3, Beispiel 5",
 "angabe": "Sparren Pos. 1 eines Pfettendachs (C24) mit Kragarmen 0,885 m links und 1,47 m rechts, Feld 3,58 m. Charakteristische Momente aus den Lastfällen: Eigengewicht M_B = −0,93, M_Feld = 0,76; Schnee M_B = −0,37, M_Feld = 0,29; Wind M_B = −0,31, M_Feld = 0,33 kNm. Am Auflager A: M_A,g = −0,34 kNm. γ_G = 1,35, γ_Q = 1,5, ψ₀,s = 0,5, ψ₀,w = 0,6.",
 "geg": ["M_B,g = −0,93", "M_B,s = −0,37", "M_B,w = −0,31", "M_F,g = 0,76", "M_F,s = 0,29", "M_F,w = 0,33"],
 "ges": "Maßgebendes Bemessungsmoment an der Stütze und im Feld",
 "schritte": [
  { "f": "An welcher Stütze bemisst du?", "o": [
    ["An B – das Kragmoment ist dort betragsmäßig größer", "Der Kragarm an B ist länger (1,47 m), M_B,g = −0,93 kNm gegen M_A,g = −0,34 kNm."],
    ["An A, weil A das Festlager ist", "Die Lagerart entscheidet nicht über die Größe des Moments."],
    ["An beiden gleichzeitig mit dem Mittelwert", "Bemessen wird an der ungünstigsten Stelle, nicht im Mittel."],
    ["Nur im Feld, Stützen sind unkritisch", "Hier ist das Stützmoment sogar größer als das Feldmoment."]],
   "r": "|M_B| > |M_A| in allen Lastfällen → Stütze B" },
  { "f": "Wie lautet die Kombination nur mit Eigengewicht?", "o": [
    ["M_B,d = 1,35 · (−0,93)", "Ständige Last mit γ_G = 1,35."],
    ["M_B,d = 1,5 · (−0,93)", "1,5 ist der Beiwert für veränderliche Lasten."],
    ["M_B,d = −0,93", "Ohne Teilsicherheitsbeiwert ist es kein Bemessungswert."],
    ["M_B,d = 1,35 · (−0,93) · 0,5", "ψ₀ gilt nur für begleitende veränderliche Lasten."]],
   "r": "M_B,d = −1,26 kNm · M_F,d = 1,35 · 0,76 = 1,03 kNm" },
  { "f": "Wind führend, Schnee begleitend: Wie sieht M_B,d aus?", "o": [
    ["1,35 · (−0,93) + 1,5 · (−0,31) + 1,5 · 0,5 · (−0,37)", "Wind voll mit 1,5, Schnee zusätzlich mit ψ₀,s = 0,5."],
    ["1,35 · (−0,93) + 1,5 · (−0,31) + 1,5 · (−0,37)", "Dann wären beide veränderlichen Lasten führend – ψ₀ fehlt."],
    ["1,35 · (−0,93) + 1,5 · 0,6 · (−0,31) + 1,5 · (−0,37)", "Das ist die Kombination mit Schnee führend."],
    ["1,35 · (−0,93 − 0,31 − 0,37)", "Veränderliche Lasten bekommen 1,5, nicht 1,35."]],
   "r": "M_B,d = −1,26 − 0,47 − 0,28 = −2,0 kNm" },
  { "f": "Schnee führend, Wind begleitend: Wie groß ist M_B,d?", "o": [
    ["1,35 · (−0,93) + 1,5 · (−0,37) + 1,5 · 0,6 · (−0,31)", "Schnee voll, Wind mit ψ₀,w = 0,6."],
    ["1,35 · (−0,93) + 1,5 · (−0,37) + 1,5 · 0,5 · (−0,31)", "Für den begleitenden Wind gilt ψ₀,w = 0,6, nicht der Schneewert 0,5."],
    ["1,35 · (−0,93) + 1,5 · (−0,37)", "Der Wind darf als Begleiter nicht weggelassen werden, er vergrößert hier das Moment."],
    ["1,5 · (−0,93 − 0,37 − 0,31)", "Das Eigengewicht bekommt γ_G = 1,35."]],
   "r": "M_B,d = −1,26 − 0,56 − 0,28 = −2,09 kNm → betraglich maßgebend" },
  { "f": "Welches Feldmoment ist maßgebend?", "o": [
    ["Auch mit Schnee führend: 1,35 · 0,76 + 1,5 · 0,29 + 1,5 · 0,6 · 0,33", "Im Feld liegt Schnee führend ebenfalls knapp vorn (1,76 gegen 1,74)."],
    ["Nur Eigengewicht: 1,35 · 0,76", "Die veränderlichen Lasten vergrößern das Feldmoment, sie gehören dazu."],
    ["1,35 · 0,76 + 1,5 · 0,29 + 1,5 · 0,33", "Hier fehlt ψ₀ für die begleitende Last."],
    ["Das Feldmoment aus dem Wind allein", "Bemessen wird mit der Kombination, nicht mit einem Lastfall."]],
   "r": "M_F,d = 1,026 + 0,435 + 0,297 = 1,76 kNm (Wind führend: 1,74 kNm)" }],
 "fazit": "Jede veränderliche Last einmal führend ansetzen und vergleichen. Die Unterschiede sind oft klein, deshalb nicht raten."
});

aufgabe({
 "id": "bauko-ue03-dreifeld", "f": "bauko", "t": BK_KOMBI, "titel": "Dreifeldträger im Versammlungsraum", "s": "Baukonstruktion Übung 3, Beispiel 6",
 "angabe": "Dreifeldträger mit l = 2 m je Feld. Eigengewicht g = 5 kN/m, Nutzlast q = 4 kN/m (Versammlungsraum), sonstige veränderliche Last 3 kN/m, die nur auf zwei Feldern gleichzeitig wirkt (ψ₀ = 0,8). Tafelwerte aus der Übung: g voll M₁ = 1,6, M_b = M_c = −2,0 · q links/rechts M₁ = M₃ = 1,62 · q mitte/rechts M_c = −1,87 · sonstige (mitte/rechts) M_c = −1,40, M₃ = 0,80 kNm. γ_G = 1,35, γ_Q = 1,5, ψ₀,q = 0,7.",
 "ges": "Maximale Bemessungsmomente an der Stütze und im Feld",
 "schritte": [
  { "f": "Welche Laststellung der Nutzlast liefert das größte Stützmoment über C?", "o": [
    ["Mittelfeld und rechtes Feld belastet", "Die beiden an C angrenzenden Felder: M_c = −1,87 kNm."],
    ["Alle drei Felder", "Volllast ergibt nur −1,6 kNm."],
    ["Beide Außenfelder", "Diese Stellung liefert das größte Feldmoment, über der Stütze nur −0,8 kNm."],
    ["Nur das linke Feld", "Das entfernte Feld trägt über C sogar positiv bei (+0,27)."]],
   "r": "M_c,q = −1,87 kNm · M_c,sonst = −1,40 kNm (ebenfalls auf Mitte und rechts) · M_c,g = −2,0 kNm" },
  { "f": "Nutzlast führend: Wie groß ist M_Ed über C?", "o": [
    ["1,35 · (−2,0) + 1,5 · (−1,87) + 1,5 · 0,8 · (−1,4)", "q voll, die sonstige Last mit ihrem ψ₀ = 0,8."],
    ["1,35 · (−2,0) + 1,5 · (−1,87) + 1,5 · (−1,4)", "Die sonstige Last ist hier nur Begleiter und bekommt ψ₀."],
    ["1,35 · (−2,0 − 1,87 − 1,4)", "Veränderliche Lasten bekommen γ_Q = 1,5."],
    ["1,35 · (−2,0) + 1,5 · 0,7 · (−1,87) + 1,5 · (−1,4)", "Das ist die Kombination mit der sonstigen Last führend."]],
   "r": "M_Ed = −2,70 − 2,81 − 1,68 = −7,19 kNm" },
  { "f": "Und mit der sonstigen Last führend?", "o": [
    ["1,35 · (−2,0) + 1,5 · 0,7 · (−1,87) + 1,5 · (−1,4) = −6,76 kNm", "Jetzt wird die Nutzlast mit ψ₀ = 0,7 abgemindert. Die Kombination mit q führend bleibt maßgebend."],
    ["1,35 · (−2,0) + 1,5 · 0,5 · (−1,87) + 1,5 · (−1,4) = −6,20 kNm", "So steht ψ₀,q auf der Folie, gerechnet wird aber mit 0,7 (Kategorie C)."],
    ["Dieselbe Rechnung wie eben", "Die Rollen von führend und begleitend tauschen."],
    ["Nicht nötig, die Nutzlast ist größer", "Ob das reicht, zeigt erst die Rechnung."]],
   "r": "−6,76 kNm < 7,19 kNm (Betrag) → q führend maßgebend: M_Ed,Stütze = −7,19 kNm" },
  { "f": "Wo und mit welcher Nutzlaststellung wird das Feldmoment maximal?", "o": [
    ["In den Außenfeldern, Nutzlast auf beiden Außenfeldern", "Dann ist M₁ = M₃ = 1,62 kNm, das Mittelfeld bleibt frei."],
    ["Im Mittelfeld bei Volllast", "Bei Volllast ist M₂ = 0,4 kNm, viel kleiner."],
    ["In den Außenfeldern bei Volllast", "Volllast liefert nur 1,28 kNm, weil das Mittelfeld die Außenfelder entlastet."],
    ["Über den Stützen", "Dort entstehen Stützmomente, keine Feldmomente."]],
   "r": "maßgebend Feld 3: M_g = 1,6 · M_q = 1,62 · M_sonst = 0,80 kNm" },
  { "f": "Wie groß ist das Bemessungs-Feldmoment?", "o": [
    ["1,35 · 1,6 + 1,5 · 1,62 + 1,5 · 0,8 · 0,8", "q führend, die sonstige Last als Begleiter mit ψ₀ = 0,8."],
    ["1,35 · 1,6 + 1,5 · 1,62", "Die sonstige Last vergrößert das Moment in Feld 3 und gehört dazu."],
    ["1,5 · (1,6 + 1,62 + 0,8)", "Das Eigengewicht bekommt 1,35."],
    ["1,35 · 1,6 + 1,5 · 0,7 · 1,62 + 1,5 · 0,8", "Das ist die Variante mit der sonstigen Last führend (5,1 kNm)."]],
   "r": "M_Ed,Feld = 2,16 + 2,43 + 0,96 = 5,55 ≈ 5,5 kNm" }],
 "fazit": "Ungünstige Laststellung zuerst für jede Stelle getrennt suchen, dann jede veränderliche Last einmal führend kombinieren."
});

Object.assign(RECHNEN, {
 "bauko-ue03-sparren": {
  "1": [{ "l": "M_B,d", "w": -1.26, "u": "kNm", "h": "1,35 · (−0,93)" }],
  "2": [{ "l": "M_B,d", "w": -2.0, "u": "kNm", "h": "1,35 · (−0,93) + 1,5 · (−0,31) + 1,5 · 0,5 · (−0,37)" }],
  "3": [{ "l": "M_B,d", "w": -2.09, "u": "kNm", "h": "1,35 · (−0,93) + 1,5 · (−0,37) + 1,5 · 0,6 · (−0,31)" }],
  "4": [{ "l": "M_F,d", "w": 1.76, "u": "kNm", "h": "1,35 · 0,76 + 1,5 · 0,29 + 1,5 · 0,6 · 0,33" }]
 },
 "bauko-ue03-dreifeld": {
  "1": [{ "l": "M_Ed", "w": -7.19, "u": "kNm", "h": "1,35 · (−2,0) + 1,5 · (−1,87) + 1,5 · 0,8 · (−1,4)" }],
  "2": [{ "l": "M_Ed", "w": -6.76, "u": "kNm", "h": "1,35 · (−2,0) + 1,5 · 0,7 · (−1,87) + 1,5 · (−1,4)" }],
  "4": [{ "l": "M_Ed", "w": 5.55, "u": "kNm", "h": "1,35 · 1,6 + 1,5 · 1,62 + 1,5 · 0,8 · 0,8" }]
 }
});
/* Patch-Warteschlange · Data Analysis for Planning · Exercise 2 Descriptive Statistics with R (27.10.2026) + Skript Week 2 · erstellt 05.11.2026 */
const DAP_R2 = "R-Grundlagen";

mc("dap", DAP_R2, "Deine CSV-Datei trennt die Spalten mit Semikolon. Wie liest du sie mit Base-R ein?", ["read.csv('datei.csv', sep = ';')", "read.csv('datei.csv') – das Semikolon erkennt R automatisch", "read_excel('datei.csv')", "read.csv('datei.csv', header = ';')"], "read.csv erwartet standardmäßig ein Komma. Bei deutschen CSV-Dateien mit Semikolon zerfällt sonst jede Zeile in eine einzige Spalte. header steuert nur, ob die erste Zeile Spaltennamen enthält (Standard TRUE).", "DAP Exercise 2, Folie 5");
wf("dap", DAP_R2, "Eine .xlsx-Datei kannst du mit Base-R direkt öffnen.", false, "Falsch – dafür braucht man ein Paket wie readxl. Base-R liest nur Textformate wie .csv. Darum liegt der MiD-Datensatz als CSV vor.", "DAP Exercise 2, Folie 4");
pair("dap", DAP_R2, "Welche Funktion zeigt dir was über einen eingelesenen Datensatz?", [["head(x)", "die ersten Zeilen"], ["str(x)", "Struktur: Spalten mit Datentyp"], ["summary(x)", "Min, Q1, Median, Mittelwert, Q3, Max"], ["length(x)", "Anzahl der Elemente"]], "Mit head und str prüfst du direkt nach dem Einlesen, ob die Spalten richtig getrennt wurden. summary liefert die Kennzahlen gleich mit.", "DAP Exercise 2, Folie 5/7/15");
pair("dap", DAP_R2, "Ordne den Mittelwert seiner R-Zeile zu.", [["arithmetisch", "sum(x) / length(x)"], ["geometrisch", "prod(x)^(1 / length(x))"], ["harmonisch", "length(x) / sum(1 / x)"]], "Das harmonische Mittel nutzt man bei Raten wie Geschwindigkeiten über gleiche Strecken. Das geometrische bei Wachstumsfaktoren.", "DAP Exercise 2, Folie 8");
mc("dap", DAP_R2, "Wie bestimmst du in Base-R den Modalwert (häufigsten Wert)?", ["Gar nicht direkt – Base-R hat keine eingebaute Funktion dafür", "mode(x)", "mean(x, type = 'mode')", "median(x)"], "Laut Folie kommt das in einer späteren Übung. Vorsicht: mode(x) gibt es zwar, sie liefert aber den Speichertyp wie „numeric“, nicht den häufigsten Wert.", "DAP Exercise 2, Folie 10");
mc("dap", DAP_R2, "Was liefert range(x)?", ["Minimum und Maximum als zwei Zahlen", "Die Spannweite max − min als eine Zahl", "Den Interquartilsabstand", "Die Anzahl der Werte"], "Die Spannweite musst du daraus noch selbst bilden: max(x) − min(x) oder diff(range(x)).", "DAP Exercise 2, Folie 13");
mc("dap", DAP_R2, "Wie berechnest du in der Übung den Interquartilsabstand?", ["quantile(x, probs = 0.75) − quantile(x, probs = 0.25)", "max(x) − min(x)", "quantile(x, probs = 0.5)", "sd(x) / 2"], "probs gibt den Anteil an: 0,25 ist Q1, 0,75 ist Q3. quantile mit 0,5 wäre der Median, max − min die Spannweite.", "DAP Exercise 2, Folie 14");
mc("dap", DAP_R2, "Was macht x[order(-x), ]?", ["Sortiert die Zeilen absteigend", "Sortiert aufsteigend", "Entfernt negative Werte", "Kehrt die Vorzeichen um"], "order liefert die Reihenfolge der Indizes, das Minus dreht sie um. Das Komma danach heißt: alle Spalten behalten.", "DAP Exercise 2, Folie 16");
mc("dap", DAP_R2, "Welche Zeile wählt alle Wege unter 15 Minuten von Frauen (HP_SEX == 2) aus?", ["x[x$wegmin < 15 & x$HP_SEX == 2, ]", "x[x$wegmin < 15 | x$HP_SEX == 2, ]", "x[x$wegmin < 15 & x$HP_SEX = 2, ]", "x[, x$wegmin < 15 & x$HP_SEX == 2]"], "& verlangt beide Bedingungen, | nur eine. = ist eine Zuweisung statt eines Vergleichs, und die Bedingung muss VOR dem Komma stehen, weil Zeilen gefiltert werden.", "DAP Exercise 2, Folie 16");
mc("dap", DAP_R2, "Wie schließt du alle Personen ohne Führerschein (P_FS_PKW == 2) aus?", ["x[x$P_FS_PKW != 2, ]", "x[x$P_FS_PKW == 2, ]", "x[-2, ]", "subset(x, P_FS_PKW = 2)"], "!= heißt „ungleich“. x[-2, ] würde nur die zweite Zeile entfernen, und == 2 behielte gerade die Personen ohne Führerschein.", "DAP Exercise 2, Folie 17");
wf("dap", DAP_R2, "na.omit(x) entfernt aus einem Data Frame jede Zeile, in der mindestens ein Wert fehlt.", true, "Richtig – deshalb kann na.omit viele Zeilen kosten, auch wenn das NA in einer Spalte steht, die du gar nicht brauchst. Für einzelne Rechnungen reicht oft na.rm = TRUE.", "DAP Exercise 2, Folie 17");
mc("dap", DAP_R2, "Wozu dient factor(x, levels = c(1, 2, 3), labels = c('walk', 'bicycle', 'car'))?", ["Aus den Codes 1–3 wird eine kategoriale Variable mit lesbaren Namen", "Es multipliziert x mit 1, 2 und 3", "Es sortiert x", "Es berechnet die Häufigkeiten"], "Codes wie 1, 2, 3 sind keine Messwerte. Als factor rechnet R keinen sinnlosen Mittelwert mehr daraus, und table() zeigt die Namen.", "DAP Exercise 2, Folie 17");
pair("dap", DAP_R2, "Was liefert welche Tabelle?", [["table(x)", "Anzahlen je Ausprägung"], ["table(x, y)", "Kreuztabelle mit Anzahlen"], ["prop.table(table(x, y), margin = 1)", "Anteile je Zeile (jede Zeile ergibt 1)"], ["prop.table(table(x, y), margin = 2)", "Anteile je Spalte (jede Spalte ergibt 1)"]], "Für „Fahren Männer häufiger Auto als Frauen?“ brauchst du margin = 1 mit Geschlecht als Zeile: Dann vergleichst du Anteile innerhalb jedes Geschlechts, nicht am Gesamtdatensatz.", "DAP Exercise 2, Folie 18/19");
mc("dap", DAP_R2, "Was berechnet aggregate(wegmin ~ P_FS_PKW, data = x, FUN = mean)?", ["Die mittlere Wegedauer getrennt nach Führerscheinbesitz", "Die Wegedauer der ersten Person", "Die Korrelation von Wegedauer und Führerschein", "Den Führerscheinanteil je Wegedauer"], "Die Formel „Wert ~ Gruppe“ teilt die Daten nach der Gruppe auf und wendet FUN auf jede Gruppe an. by(x$wegmin, x$P_FS_PKW, summary) liefert dasselbe mit allen Kennzahlen.", "DAP Exercise 2, Folie 20");
wf("dap", DAP_R2, "mean(x$zweck) ergibt einen sinnvollen Wert, solange zweck als Zahl kodiert ist.", false, "Falsch – zweck ist ein Code (1 = Arbeit …). Ein Mittelwert von Codes wie 3,7 hat keine Bedeutung. Im Skript wird zweck deshalb mit as.factor umgewandelt, danach verweigert mean() die Rechnung mit NA.", "DAP Skript Week 2");
/* Patch-Warteschlange · Schneider-Wegweiser: Fundstellen in Toms 27. Auflage (aus seinem Scan der Inhaltsverzeichnisse, 05.11.2026) · Seitenzahl = Anfang des Abschnitts laut Inhaltsverzeichnis, die Tafel steht dort oder wenige Seiten danach · erstellt 05.11.2026 */
const SBT27_FUND = {
 "Wichten von Baustoffen (Eigenlasten)": "S. 3.9–3.11 (Abschn. 3 B 2, Holz S. 3.11)",
 "Nutzlasten im Hochbau (Kategorien A bis E)": "S. 3.19–3.20 (3 C 3 Nutzungskategorien, 3 C 4.1 Decken, Treppen, Balkone)",
 "Trennwandzuschlag": "S. 3.19 (3 C 2.2 Lasten aus leichten Trennwänden)",
 "Schneelastzonen und s_k am Boden": "S. 3.53 (3 F 3 Schneelast auf dem Boden)",
 "Formbeiwerte μ für Schnee auf Dächern": "S. 3.54 (3 F 4 Schneelast auf dem Dach)",
 "Geschwindigkeitsdruck q_p vereinfacht (bis 25 m)": "ab S. 3.29 (3 E 5 Windzonen, Geschwindigkeitsdrücke)",
 "Höhenabhängiger Geschwindigkeitsdruck (Regelfall)": "ab S. 3.29 (3 E 5 Windzonen, Geschwindigkeitsdrücke)",
 "Außendruckbeiwerte c_pe für Wände und Dächer": "ab S. 3.33 (3 E 7 Winddruck auf Oberflächen)",
 "Modifikationsbeiwert k_mod": "S. 9.3 (9 1.5 Widerstände)",
 "Festigkeiten und Steifigkeiten Vollholz und BSH (C24, GL24h …)": "ab S. 9.6 (9 2.2 Vollholzprodukte)",
 "Querdruckbeiwert k_c,90": "S. 9.23 (9 6.1 Auflager- und Schwellendruck)",
 "Schubnachweis und k_cr": "S. 9.21 (9 5.4 Schub infolge Querkraft)",
 "Knickbeiwert k_c": "S. 9.27 (9 7.1 Knicken)",
 "Durchbiegung: k_def und Grenzwerte": "S. 9.14 (9 3.2 Steifigkeitskennwerte) und S. 9.15 (9 4.2 Durchbiegungen)",
 "Teilsicherheits- und Kombinationsbeiwerte (γ, ψ)": "S. 3.3–3.6 (3 A 3–5, Grenzzustand der Tragfähigkeit ab S. 3.4)",
 "Stahlprofile IPE, HEA, HEB (Querschnittswerte)": "ab S. 8.187 (8 G Stahlbauprofile)"
};
SCHNEIDER.forEach(e => { if (SBT27_FUND[e.was]) e.s27 = SBT27_FUND[e.was]; });
SCHNEIDER.push({
 "was": "Durchlaufträger: Tafelwerte und ungünstige Laststellung",
 "a24": "S. 4.14 und 4.20 (laut Übung 3)",
 "fol": null,
 "kap": "Baustatik",
 "tipp": "M = Tafelwert · q · l². Veränderliche Lasten feldweise stellen: Außenfelder für das größte Feldmoment, die zwei Felder neben der Stütze für das größte Stützmoment (Übung 3, Beispiel 6).",
 "s27": "ab S. 4.7 (4 A 1.4 Durchlaufträger)"
});
/* Patch-Warteschlange · Physik · Vorlesung 5 Kraftgesetze + Übungsblatt 5 (Arbeit, Energie, Leistung) · erstellt 09.11.2026 · Formeln an den Folien geprüft, Zahlen mit Python nachgerechnet */
const PHYS_KG = "Kraftgesetze", PHYS_AE = "Arbeit und Energie";
THEMEN["phys|Kraftgesetze"] = "Vorlesung 5 sammelt die Kräfte, die in der Mechanik immer wieder auftauchen. Gravitation zieht alle Massen an (F = G·m₁m₂/r²), nahe der Erde wird daraus die Gewichtskraft F_g = mg. Die Normalkraft steht senkrecht auf der Kontaktfläche und ergibt sich aus der Kräftebilanz. Haftreibung passt sich der Zugkraft an, bis zur Grenze μ_S·F_N; Gleitreibung ist F_k = μ_k·F_N. Der Luftwiderstand wächst mit v², deshalb erreicht ein fallender Körper eine Endgeschwindigkeit. Für eine Kreisbahn braucht es die Zentripetalkraft mv²/r nach innen. Ein ideales Seil überträgt überall dieselbe Zugkraft, eine feste Rolle lenkt sie nur um.";
THEMEN["phys|Arbeit und Energie"] = "Übungsblatt 5: Eine Kraft verrichtet Arbeit, wenn sie einen Körper entlang eines Weges verschiebt. Bei konstanter Kraft ist die Arbeit das Skalarprodukt aus Kraft und Verschiebung, bei veränderlicher Kraft die Fläche unter F(x). Die gesamte Arbeit an einem Körper ändert seine kinetische Energie. Leistung ist Arbeit pro Zeit, momentan P = F·v.";

/* --- Vorlesung 5: Kraftgesetze --- */
mc("phys", PHYS_KG, "Zwei Kugeln ziehen sich an. Wie ändert sich die Kraft, wenn du den Abstand der Mittelpunkte verdoppelst?", ["Sie sinkt auf ein Viertel", "Sie halbiert sich", "Sie verdoppelt sich", "Sie bleibt gleich"], "F = G·m₁m₂/r²: Die Kraft ist umgekehrt proportional zum QUADRAT des Abstands. Doppelter Abstand → F/4. Verdoppelst du dagegen eine Masse, verdoppelt sich die Kraft.", "Physik V05, Folie 4–5");
mc("phys", PHYS_KG, "Wie groß ist die Gravitationskonstante G?", ["≈ 6,674 · 10⁻¹¹ N·m²/kg²", "≈ 9,81 m/s²", "≈ 6,674 · 10¹¹ N·m²/kg²", "≈ 1,602 · 10⁻¹⁹ N·m²/kg²"], "G ist winzig. Deshalb merkt man die Anziehung zwischen Alltagsgegenständen nicht. 9,81 m/s² ist die Fallbeschleunigung g, 1,602·10⁻¹⁹ die Elementarladung (in C).", "Physik V05, Folie 4");
mc("phys", PHYS_KG, "Zwei Körper mit je 1 kg im Abstand 1 m: Wie stark ziehen sie sich an?", ["Mit etwa 6,7 · 10⁻¹¹ N – rund 10¹¹-mal weniger als die Gewichtskraft von 1 kg", "Mit etwa 9,81 N", "Mit etwa 1 N", "Gar nicht, Gravitation wirkt nur zwischen Himmelskörpern"], "F = G · 1 kg · 1 kg / (1 m)² = 6,7·10⁻¹¹ N. Die Gewichtskraft von 1 kg ist 9,81 N. Gravitation wirkt zwischen allen Massen, ist bei kleinen Körpern aber verschwindend klein.", "Physik V05, Folie 7");
wf("phys", PHYS_KG, "Gewichtskraft und Normalkraft auf eine ruhende Kiste sind ein Kraft-Gegenkraft-Paar (actio = reactio).", false, "Falsch. Beide greifen an DERSELBEN Kiste an und heben sich nur auf, weil sie in Ruhe ist. Ein Kraft-Gegenkraft-Paar wirkt immer auf zwei verschiedene Körper: Gegenkraft zur Normalkraft ist die Kraft der Kiste auf den Boden.", "Physik V05, Folie 10 und Verständnisfrage 1");
mc("phys", PHYS_KG, "Was misst eine Waage eigentlich?", ["Die Normalkraft F_N – angezeigt wird F_N / g", "Direkt die Masse, unabhängig von Kräften", "Die Gravitationskonstante", "Die Haftreibung zwischen Körper und Waage"], "Die Waage stützt den Körper mit F_N und rechnet m_Anzeige = F_N / g. In Ruhe ist F_N = mg, also stimmt die Anzeige. Im beschleunigten Aufzug zeigt sie deshalb mehr oder weniger an.", "Physik V05, Folie 9");
mc("phys", PHYS_KG, "Eine Kiste bleibt bei 100 N waagerechter Zugkraft stehen. Wie groß ist die Haftreibung?", ["100 N", "μ_S · F_N", "0 N", "Mehr als 100 N"], "Die Haftreibung passt sich der Zugkraft an, solange ihre Grenze μ_S·F_N nicht erreicht ist. μ_S·F_N ist nur der HÖCHSTwert, nicht der gerade wirkende Betrag.", "Physik V05, Folie 12 und Verständnisfrage 2");
pair("phys", PHYS_KG, "Ordne jeder Kraft ihr Gesetz zu.", [["Gravitation", "F = G·m₁m₂/r²"], ["Gleitreibung", "F_k = μ_k·F_N"], ["Haftreibung (Grenze)", "F_S ≤ μ_S·F_N"], ["Luftwiderstand", "F_W = k_W·v²"], ["Zentripetalkraft", "F_Z = m·v²/r"]], "Normalkraft und Seilkraft haben kein eigenes Gesetz: Sie folgen jeweils aus der Kräftebilanz am Körper.", "Physik V05, Folie 32");
mc("phys", PHYS_KG, "Welche Richtwerte gelten für Gummi auf trockenem Beton?", ["μ_S ≈ 1,0 und μ_k ≈ 0,7", "μ_S ≈ 0,5 und μ_k ≈ 0,3", "μ_S ≈ 0,7 und μ_k ≈ 1,0", "μ_S ≈ 0,3 und μ_k ≈ 0,5"], "Gleitreibung ist kleiner als Haftreibung. Nass sinken die Werte auf 0,5–0,7 bzw. 0,3–0,5. Holz auf Holz: 0,5 und 0,3.", "Physik V05, Folie 14");
mc("phys", PHYS_KG, "Welche Kraft schiebt dich beim Gehen nach vorn?", ["Die Haftreibung des Bodens am Fuß", "Die Gleitreibung des Bodens am Fuß", "Die Normalkraft", "Der Luftwiderstand"], "Der Fuß drückt den Boden nach hinten, der Boden drückt den Fuß nach vorn. Weil der Fuß an der Kontaktstelle nicht rutscht, ist das Haftreibung. Auf Glatteis fehlt sie.", "Physik V05, Folie 15");
mc("phys", PHYS_KG, "Ein Klotz auf einer schiefen Ebene beginnt beim Winkel α_S gerade zu rutschen. Wie groß ist μ_S?", ["μ_S = tan α_S", "μ_S = sin α_S", "μ_S = cos α_S", "μ_S = α_S im Bogenmaß"], "Reibungskraft mg·sin α und Normalkraft mg·cos α: Ihr Verhältnis ist tan α. Die Masse kürzt sich heraus, deshalb genügt der Winkel. Bei gleichförmigem Gleiten gilt entsprechend μ_k = tan α_k.", "Physik V05, Folie 18");
mc("phys", PHYS_KG, "Ein Körper wird aus der Ruhe fallen gelassen. Wie groß ist seine Beschleunigung im ersten Moment – mit Luftwiderstand?", ["a = g, weil bei v = 0 noch kein Luftwiderstand wirkt", "a = 0", "a = g/2", "a > g"], "F_W = k_W·v² ist bei v = 0 null. Erst mit wachsender Geschwindigkeit bremst die Luft, a wird kleiner und geht gegen null.", "Physik V05, Folie 19–20");
mc("phys", PHYS_KG, "Wie groß ist die Endgeschwindigkeit beim Fall mit Luftwiderstand?", ["v∞ = √(m·g / k_W)", "v∞ = m·g / k_W", "v∞ = √(k_W / (m·g))", "v∞ = g·t"], "Im Grenzfall gleicht der Luftwiderstand die Gewichtskraft aus: k_W·v² = mg. Folienbeispiel: 100 kg, k_W = 0,6 kg/m → v∞ ≈ 40,4 m/s.", "Physik V05, Folie 22–23");
wf("phys", PHYS_KG, "Hat ein fallender Körper seine Endgeschwindigkeit erreicht, bleibt er in der Luft stehen.", false, "Falsch. Er wird nur nicht mehr schneller: Er fällt mit annähernd konstanter Geschwindigkeit weiter.", "Physik V05, Verständnisfrage 3");
mc("phys", PHYS_KG, "Du fährst doppelt so schnell. Wie ändert sich der Luftwiderstand?", ["Er vervierfacht sich", "Er verdoppelt sich", "Er bleibt gleich", "Er verachtfacht sich"], "F_W = k_W·v² mit k_W = ½·c_W·ρ·A: doppelte Geschwindigkeit → vierfache Kraft. Genauso braucht eine Kreisbahn bei doppelter Geschwindigkeit die vierfache Zentripetalkraft.", "Physik V05, Folie 21");
mc("phys", PHYS_KG, "Eine Kugel kreist an einem Seil auf einer reibungsfreien, waagerechten Ebene. Das Seil reißt. Wohin bewegt sie sich?", ["Geradeaus, tangential zur bisherigen Kreisbahn", "Radial nach außen", "Zum Mittelpunkt hin", "Auf einer Spirale nach außen"], "Ohne Seil wirkt keine Kraft mehr nach innen. Nach dem Trägheitsprinzip fliegt die Kugel geradlinig in die Richtung weiter, die sie gerade hatte – tangential.", "Physik V05, Verständnisfrage 4");
mc("phys", PHYS_KG, "Was bewirkt eine ideale feste Rolle?", ["Sie lenkt die Zugrichtung um; die Seilkraft bleibt auf beiden Seiten gleich", "Sie halbiert die nötige Zugkraft", "Sie verdoppelt die Seilkraft", "Sie verkürzt den Seilweg auf die Hälfte"], "Eine feste Rolle allein spart keine Kraft. Kraft sparen erst lose Rollen (Flaschenzug), dafür muss man mehr Seil ziehen.", "Physik V05, Folie 30");

/* --- Übungsblatt 5: Arbeit, Energie, Leistung --- */
mc("phys", PHYS_AE, "Blatt 5, A1: Drei konstante Kräfte verschieben eine Truhe um d. Wie bekommst du die Gesamtarbeit?", ["Skalarprodukt aus resultierender Kraft und Verschiebungsvektor", "Beträge der drei Kräfte addieren und mit d multiplizieren", "Kreuzprodukt aus Kraft und Verschiebung", "F·d·sin α für jede Kraft"], "Nur die Kraftkomponente in Bewegungsrichtung verrichtet Arbeit: W = F·d·cos α. Senkrechte Kräfte (z. B. Normalkraft) verrichten keine Arbeit.", "Physik Übungsblatt 5, Aufgabe 1 + Hinweise");
mc("phys", PHYS_AE, "Blatt 5, A1b: Die Gesamtarbeit an der Truhe ist negativ. Was folgt daraus?", ["E_kin nimmt ab – die Truhe kann am Anfang nicht in Ruhe gewesen sein", "E_kin nimmt zu", "E_kin bleibt gleich, nur die Richtung ändert sich", "Die Truhe muss am Anfang in Ruhe gewesen sein"], "Arbeit = Änderung der kinetischen Energie. Eine konstante Kraft beschleunigt einen ruhenden Körper in ihre Richtung, dann wäre die Arbeit positiv. Negative Arbeit heißt: Die Truhe bewegte sich schon und wird gebremst.", "Physik Übungsblatt 5, Aufgabe 1b");
pair("phys", PHYS_AE, "Blatt 5, A2: Behälter (Masse m) an einer losen Rolle, gleichmäßig um d hochgezogen. Ordne zu.", [["Nötige Zugkraft", "m·g / 2"], ["Seil, das du ziehen musst", "2d"], ["Arbeit deiner Kraft", "+m·g·d"], ["Arbeit der Gravitation", "−m·g·d"]], "Auf die lose Rolle wirken zwei Seilstücke, also die doppelte Seilkraft. Dafür musst du doppelt so viel Seil ziehen – die Arbeit bleibt mg·d. Die Gravitation zeigt gegen die Bewegung, ihre Arbeit ist negativ.", "Physik Übungsblatt 5, Aufgabe 2 + Hinweise");
mc("phys", PHYS_AE, "Blatt 5, A3: Wie liest du die Arbeit aus einem F(x)-Diagramm ab?", ["Fläche unter der Kurve – oberhalb der x-Achse positiv, unterhalb negativ", "Steigung der Kurve", "Höchster Kraftwert mal Gesamtweg", "Fläche über der Kurve"], "W = ∫F dx ist die Fläche unter F(x). Mit E_kin(0) = 80 J und dieser Fläche bekommst du E_kin an jeder Stelle.", "Physik Übungsblatt 5, Aufgabe 3 + Hinweise");
mc("phys", PHYS_AE, "Blatt 5, A4: Ein Objekt wird aus der Ruhe gleichmäßig beschleunigt. Wie groß ist die Leistung nach der halben Zeit t₁/2 im Vergleich zu t₁?", ["Halb so groß", "Gleich groß", "Ein Viertel", "Doppelt so groß"], "P = F·v. Die Kraft ist konstant, v wächst linear mit t: Nach der halben Zeit ist v halb so groß, also auch P.", "Physik Übungsblatt 5, Aufgabe 4 + Hinweise");
pair("phys", PHYS_AE, "Blatt 5, A5: Ein PKW fährt mit konstantem v, Luftwiderstand ist der einzige Widerstand. Wie hängen die Größen von v ab?", [["Antriebsleistung", "~ v³"], ["Fahrzeit für 100 km", "~ 1/v"], ["Spritverbrauch je 100 km", "~ v²"]], "Antriebskraft = Luftwiderstand k_W·v². Leistung P = F·v ~ v³. Verbrauch V = const·P·t mit t = s/v → V ~ v². 140 statt 120 km/h kostet so rund 36 % mehr Sprit.", "Physik Übungsblatt 5, Aufgabe 5 + Hinweise");
ord("phys", PHYS_AE, "Blatt 5, A6: Allradwagen soll so schnell wie möglich auf v_max beschleunigen. Bring das Vorgehen in die richtige Reihenfolge.", ["Größte Beschleunigung aus der Haftreibungsgrenze: a = μ_S·g", "Zeit t₁, bis F_S,max·v₁ = P_max erreicht ist", "Ab v₁ mit konstanter Leistung: ½m(v_max² − v₁²) = P_max·t₂", "Mindestdauer t_min = t₁ + t₂"], "Am Anfang begrenzen die Reifen (Haftreibung), nicht der Motor. Erst ab v₁ reicht die Motorleistung nicht mehr für die volle Beschleunigung.", "Physik Übungsblatt 5, Aufgabe 6 + Hinweise");

/* --- Lösungsweg-Aufgabe --- */
aufgabe({
 "id": "phys-b5-a5",
 "f": "phys",
 "t": "Arbeit und Energie",
 "titel": "Spritverbrauch bei 140 statt 120 km/h",
 "s": "Physik Übungsblatt 5, Aufgabe 5",
 "angabe": "Zwei gleiche PKW fahren auf ebener Autobahn mit konstantem v₁ = 120 km/h bzw. v₂ = 140 km/h. Der Luftwiderstand ist der einzige Fahrwiderstand.",
 "geg": ["v₁ = 120 km/h", "v₂ = 140 km/h", "F_W = k_W·v²", "V = const·P·t"],
 "ges": "Verhältnis der Antriebsleistungen und Mehrverbrauch je 100 km in Prozent",
 "schritte": [
  { "f": "Welche Antriebskraft braucht ein PKW bei konstanter Geschwindigkeit?", "o": [
    ["F_A = F_W = k_W·v², weil die resultierende Kraft null ist", "Konstantes v heißt a = 0: Antrieb und Luftwiderstand heben sich auf."],
    ["F_A = m·a", "a ist null – dann bräuchte das Auto gar keinen Antrieb, der Luftwiderstand würde es aber bremsen."],
    ["F_A = m·g", "Die Gewichtskraft wirkt senkrecht und trägt auf ebener Straße nichts zum Antrieb bei."],
    ["F_A = k_W·v", "Der Luftwiderstand wächst mit v², nicht linear."]],
   "r": "F_A = k_W·v²" },
  { "f": "Wie groß ist die Antriebsleistung?", "o": [
    ["P = F_A·v = k_W·v³", "Momentanleistung ist Kraft mal Geschwindigkeit."],
    ["P = F_A / v", "Leistung ist F·v, nicht F/v."],
    ["P = ½·m·v²", "Das ist die kinetische Energie, keine Leistung."],
    ["P = F_A·s", "F·s ist eine Arbeit."]],
   "r": "P₂/P₁ = (v₂/v₁)³ = (140/120)³ ≈ 1,59" },
  { "f": "Wie lange fährt jeder Wagen für 100 km?", "o": [
    ["t = s / v", "Konstante Geschwindigkeit: Zeit = Weg durch Geschwindigkeit."],
    ["t = v / s", "Die Einheit wäre 1/h, keine Zeit."],
    ["t = s·v", "Die Einheit passt nicht."],
    ["Bei beiden gleich lang", "Der schnellere Wagen ist früher am Ziel."]],
   "r": "t = 100 km / v" },
  { "f": "Wie hängt der Verbrauch je 100 km von v ab?", "o": [
    ["V = const·k_W·v³·s/v ~ v²", "Leistung ~ v³, Fahrzeit ~ 1/v: Übrig bleibt v²."],
    ["V ~ v³", "Die kürzere Fahrzeit des schnelleren Wagens fehlt."],
    ["V ~ v", "Die Leistung wächst mit v³, nicht mit v²."],
    ["V hängt nicht von v ab", "Nur ohne Luftwiderstand wäre das so."]],
   "r": "V₂/V₁ = (140/120)² = 1,361" },
  { "f": "Um wie viel Prozent steigt der Verbrauch?", "o": [
    ["Um etwa 36 %", "1,361 − 1 = 0,361 → 36,1 % mehr."],
    ["Um etwa 17 %", "Das ist nur der Geschwindigkeitsunterschied (140/120 = 1,167)."],
    ["Um etwa 59 %", "Das wäre der Leistungsanstieg (v³), nicht der Verbrauch je Strecke."],
    ["Um etwa 136 %", "1,361 ist das Verhältnis; der Zuwachs ist 0,361."]],
   "r": "≈ +36 % Sprit je 100 km" }],
 "fazit": "Luftwiderstand: Leistung wächst mit v³, Verbrauch je Strecke mit v²."
});
/* Patch-Warteschlange · Baukonstruktion · Vorlesung 04 Dächer (Rauber, 10.11.2026, 35 Folien) · erstellt 09.11.2026 · alle Aussagen an den Folien geprüft */
const BAUKO_DA = "Dächer";
THEMEN["bauko|Dächer"] = "Dächer teilt man nach der Neigung ein: Flachdach (2°–5°), flach geneigtes Dach (5°–20°) und Steildach (über 20°). Geneigte Holzdächer werden als Pfettendach oder als Sparrendach gebaut. Beim Pfettendach liegen die Sparren auf Pfetten und werden vor allem auf Biegung beansprucht, unter vertikaler Last entstehen nur vertikale Auflagerkräfte. Beim Sparrendach stützen sich die Sparren gegenseitig ab: Sie tragen Biegung mit Längskraft, und am Sparrenfuß entstehen Horizontalkräfte, die die Decke aufnehmen muss. Flachdächer unterscheidet man nach der Konstruktion (Warmdach oder Kaltdach) und nach der Nutzung.";

pair("bauko", BAUKO_DA, "Ordne die Dachneigung α der Dachart zu.", [["2° ≤ α ≤ 5°", "Flachdach"], ["5° < α ≤ 20°", "flach geneigtes Dach"], ["α > 20°", "Steildach"]], "Die Grenzen 5° und 20° solltest du kennen.", "Baukonstruktion V04, Folie 12");
mc("bauko", BAUKO_DA, "Wie wird ein Sparren im Pfettendach hauptsächlich beansprucht?", ["Auf Biegung", "Auf Biegung mit Längskraft", "Nur auf Zug", "Auf Torsion"], "Der Sparren liegt als Balken auf den Pfetten. Biegung mit Längskraft ist typisch für das Sparrendach.", "Baukonstruktion V04, Folie 16");
mc("bauko", BAUKO_DA, "Was entsteht beim Sparrendach unter vertikaler Last am Sparrenfuß?", ["Horizontale Kräfte, die die Decke darunter aufnehmen muss", "Nur vertikale Auflagerkräfte", "Gar keine Auflagerkräfte", "Nur ein Einspannmoment"], "Die beiden Sparren stützen sich am First gegeneinander ab wie ein Dreigelenkbogen – unten drücken sie nach außen. Beim Pfettendach gibt es unter vertikaler Last dagegen nur vertikale Auflagerkräfte.", "Baukonstruktion V04, Folie 16");
mc("bauko", BAUKO_DA, "Warum darf unter einem Sparrendach keine Holzbalkendecke liegen?", ["Die Decke muss die Horizontalkräfte der Sparrenfüße aufnehmen können", "Holz und Holz dürfen nicht verbunden werden", "Die Vertikallasten wären zu groß für Holz", "Wegen des Brandschutzes"], "Am Sparrenfuß wirken Horizontalkräfte. Eine Massivdecke kann sie als Zugband aufnehmen, eine Holzbalkendecke nicht.", "Baukonstruktion V04, Folie 28");
pair("bauko", BAUKO_DA, "Pfettendach: Ordne die gleichbedeutenden Begriffe zu.", [["Fußpfette", "Schwelle"], ["Drempel", "Kniestock"], ["Pfosten", "Stiel"]], "Der Drempel (Kniestock) ist die niedrige Wand zwischen oberster Decke und Dachfuß. Darauf liegt die Fußpfette.", "Baukonstruktion V04, Folie 17 und 20");
mc("bauko", BAUKO_DA, "Welches Bauteil verbindet beim Pfettendach den Sparren mit der Fußpfette?", ["Der Sparrenpfettenanker", "Die Firstlasche", "Die Windrispe", "Der Wechsel"], "Der Sparrenpfettenanker ist ein Stahlblechformteil, das den Sparren gegen Abheben (Windsog) sichert. Firstlaschen, Windrispen und Wechsel gehören zum Sparrendach.", "Baukonstruktion V04, Folie 20");
mc("bauko", BAUKO_DA, "Welche zwei Arten von Kehlbalkendächern unterscheidet die Vorlesung?", ["Mit verschieblichem und mit unverschieblichem Kehlbalken", "Mit und ohne Firstpfette", "Mit Holz- und mit Stahlkehlbalken", "Einfeld- und Zweifeld-Kehlbalken"], "Ob der Kehlbalken horizontal gehalten ist, ändert das statische System. Daneben gibt es das reine Sparrendach ohne Kehlbalken.", "Baukonstruktion V04, Folie 24");
mc("bauko", BAUKO_DA, "Welcher Vorteil gehört zum Sparrendach (nicht zum Pfettendach)?", ["Stützenfreie Räume im Dach", "Anspruchsloser in der Herstellung", "Geeignet für flache Dachneigungen", "Geeignet für komplizierte Grundrisse"], "Die drei anderen sind Vorteile des Pfettendachs. Weitere Vorteile des Sparrendachs: Vertikalkräfte belasten nicht die Decken darunter, gut geeignet bei steiler Dachneigung.", "Baukonstruktion V04, Folie 28");
mc("bauko", BAUKO_DA, "Welcher Nachteil gehört zum Pfettendach?", ["Stützen im Dachraum", "Dachüberstände am Ortgang schwierig", "Decke muss Horizontalkräfte aufnehmen", "Große Öffnungen schwer zu realisieren"], "Die drei anderen sind Nachteile des Sparrendachs. Weitere Nachteile des Pfettendachs: aufwendige Planung und Vertikallasten auf Innenwände und ggf. die Decke.", "Baukonstruktion V04, Folie 28");
mc("bauko", BAUKO_DA, "Wo sind beim Sparrendach Dachüberstände besonders schwierig?", ["Vor allem am Ortgang (und an der Traufe)", "Nur am First", "Nirgends, sie sind beim Sparrendach einfach", "Nur an Gauben"], "Ortgang = seitlicher Dachrand am Giebel, Traufe = untere Dachkante. Beim Sparrendach gehen Überstände dort nicht ohne Weiteres.", "Baukonstruktion V04, Folie 28");
pair("bauko", BAUKO_DA, "Flachdächer: Ordne zu.", [["Nicht belüftetes Flachdach", "Warmdach"], ["Belüftetes Flachdach", "Kaltdach"], ["Genutzte Dachfläche", "Dachbegrünung, Aufenthalt von Personen"]], "Konstruktion und Nutzung sind zwei getrennte Einteilungen. Beim Kaltdach liegt ein belüfteter Zwischenraum über der Dämmung.", "Baukonstruktion V04, Folie 32");
mc("bauko", BAUKO_DA, "Woraus werden Flachdächer laut Vorlesung tragend hergestellt?", ["Massiv, aus Holzbalken oder aus Stahltrapezblechen", "Nur aus Stahlbeton", "Nur aus Holzbalken", "Aus Mauerwerk und Glas"], "Die drei Bauarten stehen auf der Folie „Einteilung“. Dazu kommen Anforderungen an Brand-, Wärme-, Schall-, Witterungs- und Tauwasserschutz.", "Baukonstruktion V04, Folie 31 und 33");
mc("bauko", BAUKO_DA, "Welche Lasten setzt man auf geneigten Dächern an?", ["Eigenlast, Schnee, Wind und „Personen“-Last", "Nur Eigenlast und Schnee", "Eigenlast, Verkehrslast nach Kategorie A und Erdbeben", "Nur Wind"], "Die Personenlast (Mannlast für Begehen bei Wartung) steht in DIN EN 1991-1-1/NA, Tab. 6.20DE.", "Baukonstruktion V04, Folie 30");
/* Patch-Warteschlange · Bauinformatik · Übung 03 Variablen, Typumwandlung, Operatoren (09.–13.11.2026) · erstellt 09.11.2026 · Ausgaben mit IEEE-754-double nachgerechnet (wie Java) */
mc("binf", "Datentypen", "int a = 5; int b = a; a = 6; – was gibt println(\"a = \" + a + \" und b = \" + b) aus?", ["a = 6 und b = 5", "a = 6 und b = 6", "a = 5 und b = 5", "a = 5 und b = 6"], "b = a kopiert nur den WERT 5. Ändert man danach a, bleibt b bei 5 – bei primitiven Datentypen gibt es keine Verknüpfung.", "Bauinformatik Übung 03, Aufgabe 1");
mc("binf", "Datentypen", "{ int var2 = 56; } System.out.println(var2); – was passiert?", ["Compilerfehler: var2 ist außerhalb des Blocks unbekannt", "Ausgabe 56", "Ausgabe 0", "Laufzeitfehler, aber das Programm startet"], "Eine Variable gilt nur in dem Block { }, in dem sie deklariert ist. Wird sie vor dem Block deklariert und darin nur belegt (wie var1), funktioniert die Ausgabe.", "Bauinformatik Übung 03, Aufgabe 2");
mc("binf", "Datentypen", "int i; long l; float f; double d; – welche Zuweisung braucht einen Cast?", ["f = d;", "l = i;", "f = i;", "d = f;"], "Implizit geht es nur in einen größeren Typ: byte → short → int → long → float → double. f = d geht von double auf float, ebenso brauchen i = l und i = f einen Cast, z. B. f = (float) d.", "Bauinformatik Übung 03, Aufgabe 3 + Übungshilfen");
mc("binf", "Operatoren", "Welchen Wert hat long l1 = 20 / 6; ?", ["3", "3.333…", "4", "2"], "20 und 6 sind int-Literale, also ganzzahlige Division: der Rest wird abgeschnitten, nicht gerundet.", "Bauinformatik Übung 03, Aufgabe 5a");
mc("binf", "Operatoren", "Welchen Wert hat int i1 = -20 % 6; ?", ["-2", "2", "4", "-4"], "In Java hat der Rest immer das Vorzeichen des Dividenden: −20 = −3 · 6 − 2. 20 % 6 ist dagegen 2.", "Bauinformatik Übung 03, Aufgabe 5c");
mc("binf", "Operatoren", "int i2 = 5; i2 += 10; – welchen Wert hat i2?", ["15", "10", "510", "5"], "i2 += 10 ist die Kurzform von i2 = i2 + 10.", "Bauinformatik Übung 03, Aufgabe 5d");
pair("binf", "Operatoren", "Welche Ausgabe erzeugt die Anweisung?", [["println(2 + 3 * 6)", "20"], ["println((2 + 3) * 6)", "30"], ["println(\"3 + 4 = \" + 3 + 4)", "3 + 4 = 34"], ["println(\"3 + 4 = \" + (3 + 4))", "3 + 4 = 7"]], "Punkt vor Strich. „+“ wird von links nach rechts ausgewertet: Steht links schon ein String, hängt Java die Zahlen nur an. Klammern erzwingen zuerst die Addition.", "Bauinformatik Übung 03, Aufgabe 6");
mc("binf", "Operatoren", "Was gibt System.out.println(5.0 / 2.0 + 5 / 2); aus?", ["4.5", "5.0", "4", "5"], "5.0 / 2.0 = 2.5 (double), aber 5 / 2 = 2 (int-Division). 2.5 + 2 = 4.5. Mit 5 / 2. käme 5.0 heraus.", "Bauinformatik Übung 03, Aufgabe 10a/b");
mc("binf", "Operatoren", "Warum ergibt 2.3 + 7 / 2 * 4.1 nicht 16.65?", ["7 / 2 ist int-Division und ergibt 3, nicht 3.5", "Weil * vor + nicht beachtet wird", "Weil 4.1 als int gespeichert wird", "Weil 2.3 abgerundet wird"], "7 / 2 = 3, dann 3 · 4.1 ≈ 12.3 und + 2.3. Java gibt 14.599999999999998 aus – die winzige Abweichung kommt daher, dass 4.1 im Dualsystem nicht exakt darstellbar ist.", "Bauinformatik Übung 03, Aufgabe 10c");
mc("binf", "Operatoren", "Dein Rechner-Programm arbeitet mit int-Variablen 5 und 2. Was liefert die Division?", ["2", "2.5", "3", "Einen Fehler"], "Bei zwei int-Werten rechnet Java ganzzahlig. Für 2.5 muss mindestens ein Operand double sein, z. B. (double) a / b.", "Bauinformatik Übung 03, Aufgabe 9");
/* Patch-Warteschlange · Baustoffkunde · V05 Gefügeaufbau, Verbundwerkstoffe (Vollpracht, 9.11.2026, 29 Folien) · erstellt 09.11.2026 · Zahlen mit Python nachgerechnet */
const B6 = "Ermüdung und Verbundwerkstoffe";
THEMEN["bsk|Ermüdung und Verbundwerkstoffe"] = "Bauteile versagen nicht nur unter einer einmaligen großen Last. Kerben erhöhen die Spannung örtlich, und wiederholte Lastwechsel können einen Werkstoff weit unter seiner statischen Festigkeit ermüden lassen. Das beschreiben Wöhlerlinie, Dauer- und Zeitfestigkeit und die Palmgren-Miner-Regel. Verbundwerkstoffe kombinieren mehrere Werkstoffe, zum Beispiel Stahlbeton oder GFK. Ihre Kennwerte schätzt man mit zwei Grundmodellen ab: Parallelanordnung (hartes Modell, gleiche Dehnung) als obere Grenze und Serienanordnung (weiches Modell, gleiche Spannung) als untere Grenze.";

pair("bsk", B5, "Welche Struktur steuert welche Eigenschaft? Ordne zu.", [["Festigkeit", "Bindungsart (Mikrostruktur)"], ["Wärmeausdehnung und E-Modul", "Bindungsenergie (Mikrostruktur)"], ["Wasseraufnahme von Ziegel", "Porosität (Grobstruktur)"], ["Fließgrenze von Stahl", "Korngröße (Grobstruktur)"]], "Mikrostruktur = Anordnung der Atome und Moleküle, Grobstruktur = Anordnung von Komponenten und Phasen. Beim Beton steuert die Gesteinskörnung die Steifigkeit.", "Baustoffkunde V05, Folie 3");
mc("bsk", B5, "Was gilt für einen amorphen Stoff im Vergleich zum kristallinen Stoff gleicher Zusammensetzung?", ["Er ist metastabil und reaktiver", "Er ist thermodynamisch stabiler", "Er leitet Wärme besser", "Er hat einen scharfen Schmelzpunkt statt eines Übergangsbereichs"], "Amorphe Stoffe streben nach Kristallisation und reagieren deshalb leichter. Typisch sind außerdem ein Glasübergangsbereich (T_g bis T_s), stärkere Temperaturabhängigkeit, Lichtdurchlässigkeit und geringere Wärmeleitfähigkeit.", "Baustoffkunde V05, Folie 7");
mc("bsk", B5, "Wie ist die Porosität p eines Werkstoffs definiert?", ["p = V_P / V – Porenvolumen durch Gesamtvolumen", "p = V / V_P", "p = Masse der Poren / Gesamtmasse", "p = Rohdichte / Reindichte"], "Die Porosität beeinflusst Rohdichte, Festigkeit, E-Modul, Dichtigkeit, Frost- und Korrosionswiderstand, Wärmeleitfähigkeit und Volumenstabilität.", "Baustoffkunde V05, Folie 11");
mc("bsk", B5, "Bei welchem Werkstoff ist die Porosität bewusst eingestellt?", ["Porenbeton", "Bims", "Holz", "Zementstein"], "Bewusst eingestellt: Porenbeton, Leichtziegel, geschäumte Kunststoffe. Natürlich porös: Gesteine wie Tuff oder Bims, Holz, Zementstein und Beton.", "Baustoffkunde V05, Folie 12");
mc("bsk", B6, "Wie stark erhöht eine Kerbe die Spannung typischerweise gegenüber der Nennspannung σ_m?", ["Etwa auf das 1,2- bis 2,5-Fache", "Gar nicht, nur die Fläche wird kleiner", "Etwa auf das 10-Fache", "Sie senkt die Spannung"], "Die Formziffer k = σ_max / σ_m hängt von der Kerbgeometrie ab: je schärfer die Kerbe (kleines r/d), desto größer k. Bei spröden Werkstoffen senken Kerben die Festigkeit erheblich, weil sie die Spitze nicht durch Fließen abbauen können.", "Baustoffkunde V05, Folie 15");
pair("bsk", B6, "Bruchbild – ordne zu.", [["Transkristalliner Spaltbruch", "ebene Spaltflächen quer durch die Körner"], ["Interkristalliner Spaltbruch", "Bruch entlang der Korngrenzen"], ["Duktiler Bruch", "Porenbildung und Einschnürung"]], "Spaltbrüche sind spröde. Beim transkristallinen Bruch sieht man „Zungen und Flüsse“, beim interkristallinen winklig zueinander liegende Korngrenzflächen.", "Baustoffkunde V05, Folie 16");
pair("bsk", B6, "Ermüdung: Ordne die Größe ihrer Formel zu.", [["Mittelspannung σ_m", "(σ_o + σ_u) / 2"], ["Spannungsamplitude σ_a", "(σ_o − σ_u) / 2"], ["Reine Wechselbeanspruchung", "σ_m = 0"]], "σ_o ist die Oberspannung, σ_u die Unterspannung. Bei Schwellbeanspruchung bleibt die Spannung immer auf einer Seite (nur Zug oder nur Druck).", "Baustoffkunde V05, Folie 18");
pair("bsk", B6, "Welche Festigkeit ist gemeint?", [["Zeitfestigkeit", "für eine bestimmte Zahl von Lastwechseln"], ["Wechselfestigkeit", "unendlich oft ertragbar bei σ_m = 0"], ["Dauerfestigkeit", "unendlich oft ertragbare Amplitude"], ["Betriebsfestigkeit", "bei veränderlicher Schwingbreite"]], "Wechsel- und Dauerfestigkeit gelten für unendlich viele Lastwechsel, die Wechselfestigkeit ist der Sonderfall ohne Mittelspannung.", "Baustoffkunde V05, Folie 19");
mc("bsk", B6, "Was zeigt ein Smith-Diagramm?", ["Die ertragbare obere und untere Grenzspannung abhängig von der Mittelspannung", "Die Spannung über der Lastspielzahl", "Die Kerbformzahl über r/d", "Den E-Modul über dem Volumenanteil"], "Die Spannung über der Lastspielzahl (logarithmisch) ist die Wöhlerlinie. Das Smith-Diagramm fasst die Dauerfestigkeit für verschiedene Mittelspannungen zusammen.", "Baustoffkunde V05, Folie 20");
ord("bsk", B6, "Wie läuft ein Ermüdungsbruch ab? Bring in die richtige Reihenfolge.", ["Riss beginnt an einer lokalen Fehlstelle", "Riss wächst langsam, Querschnitt nimmt ab (Rastlinien)", "Restquerschnitt bricht plötzlich"], "Auf der Bruchfläche sieht man daher eine glatte Zone mit Furchen oder Schwingungsstreifen und eine raue Restbruchfläche.", "Baustoffkunde V05, Folie 21");
mc("bsk", B6, "Was besagt die Palmgren-Miner-Regel?", ["Σ n_i / N_i ≤ 1 – die Teilschädigungen aller Laststufen addieren sich", "Die größte Laststufe allein entscheidet", "n_i muss größer als N_i sein", "Die Lastspiele werden multipliziert"], "n_i: Lastspiele im Bauwerk bei einer Kombination aus σ_m und σ_a, N_i: Lastspiele bis zum Bruch im Versuch. Ist die Summe 1 erreicht, ist das Bauteil rechnerisch ermüdet.", "Baustoffkunde V05, Folie 22");
mc("bsk", B6, "Wie ordnet die Vorlesung Beton und Stahlbeton als Verbundwerkstoffe ein?", ["Beton isotrop und heterogen, Stahlbeton anisotrop und heterogen", "Beide isotrop und homogen", "Beton anisotrop, Stahlbeton isotrop", "Beide homogen, aber anisotrop"], "Beton = Zementstein + Gesteinskörnung, in alle Richtungen etwa gleich. Der Stahl im Stahlbeton liegt in bestimmten Richtungen, daher anisotrop. Ebenso anisotrop: Mauerwerk, GFK, Sandwichplatten.", "Baustoffkunde V05, Folie 23");
pair("bsk", B6, "Grundmodelle der Verbundwerkstoffe – ordne zu.", [["Serienanordnung (weiches Modell)", "gleiche Spannung in beiden Komponenten"], ["Parallelanordnung (hartes Modell)", "gleiche Dehnung in beiden Komponenten"], ["Unterer Grenzwert des E-Moduls", "1/E = V₁/E₁ + V₂/E₂"], ["Oberer Grenzwert des E-Moduls", "E = V₁·E₁ + V₂·E₂"]], "Bei Serienanordnung addieren sich die Verformungen, bei Parallelanordnung die Kräfte. Der echte Wert liegt zwischen beiden Grenzen.", "Baustoffkunde V05, Folie 24–27");
mc("bsk", B6, "Wovon hängt die Rohdichte eines Verbundwerkstoffs ab?", ["Nur von den Volumenanteilen und Rohdichten: ρ = V₁ρ₁ + V₂ρ₂", "Von der Anordnung (Serie oder parallel)", "Vom E-Modul der Komponenten", "Nur von der dichteren Komponente"], "Masse addiert sich unabhängig davon, wie die Komponenten angeordnet sind. Beim E-Modul ist die Anordnung dagegen entscheidend.", "Baustoffkunde V05, Folie 25");
mc("bsk", B6, "Warum ist GFK in Faserrichtung steifer als quer dazu?", ["Längs wirken Fasern und Harz parallel (hartes Modell), quer in Serie (weiches Modell)", "Weil das Harz längs steifer ist", "Weil quer mehr Fasern liegen", "GFK ist in beiden Richtungen gleich steif"], "Längs müssen Glas und Harz gleich weit gedehnt werden, das steife Glas trägt den Großteil. Quer hintereinander bestimmt die weiche Komponente stark mit. Folienbeispiel: 64 500 längs, 51 220 N/mm² quer.", "Baustoffkunde V05, Folie 30");
mc("bsk", B6, "Beton: hartes Modell 48 750, weiches Modell 34 286 N/mm². Was misst man real?", ["Etwa 20 000 bis 50 000 N/mm² – die Modelle sind nur Grenzabschätzungen", "Immer genau 48 750 N/mm²", "Immer genau 34 286 N/mm²", "Deutlich über 60 000 N/mm²"], "Reale Gefüge sind weder rein parallel noch rein in Serie. Genauere Modelle sind z. B. das geschichtete Modell oder das Kugelmodell.", "Baustoffkunde V05, Folie 31");

aufgabe({
 "id": "bsk-v05-gfk",
 "f": "bsk",
 "t": "Ermüdung und Verbundwerkstoffe",
 "titel": "E-Modul von GFK längs und quer",
 "s": "Baustoffkunde V05, Folie 30",
 "angabe": "Ein glasfaserverstärkter Kunststoff besteht zu 90 % aus Glasfasern und zu 10 % aus Kunststoff (Volumenanteile). Die Fasern liegen alle in einer Richtung.",
 "geg": ["E_Glas = 70 000 N/mm²", "V_Glas = 0,9", "E_KS = 15 000 N/mm²", "V_KS = 0,1"],
 "ges": "E-Modul in Faserrichtung und quer zur Faserrichtung",
 "schritte": [
  { "f": "Welches Modell gilt in Faserrichtung?", "o": [
    ["Parallelanordnung (hartes Modell): gleiche Dehnung", "Fasern und Harz liegen nebeneinander und werden gemeinsam gleich weit gedehnt."],
    ["Serienanordnung (weiches Modell): gleiche Spannung", "Das gilt quer zur Faser, wo Glas und Harz hintereinanderliegen."],
    ["Nur der E-Modul des Glases zählt", "Das Harz trägt auch mit, wenn auch wenig."],
    ["Mittelwert (70 000 + 15 000) / 2", "Die Volumenanteile müssen gewichtet werden."]],
   "r": "E = V_Glas·E_Glas + V_KS·E_KS" },
  { "f": "Wie groß ist der E-Modul in Faserrichtung?", "o": [
    ["0,9 · 70 000 + 0,1 · 15 000 = 64 500 N/mm²", "63 000 + 1 500 = 64 500 N/mm²."],
    ["0,1 · 70 000 + 0,9 · 15 000 = 20 500 N/mm²", "Die Volumenanteile sind vertauscht."],
    ["70 000 + 15 000 = 85 000 N/mm²", "Ohne Volumenanteile wäre der Verbund steifer als reines Glas."],
    ["1 / (0,9/70 000 + 0,1/15 000) = 51 220 N/mm²", "Das ist das weiche Modell für quer zur Faser."]],
   "r": "E_längs = 64 500 N/mm²" },
  { "f": "Welches Modell gilt quer zur Faser?", "o": [
    ["Serienanordnung: 1/E = V_Glas/E_Glas + V_KS/E_KS", "Quer liegen Glas und Harz hintereinander, beide tragen dieselbe Spannung, die Dehnungen addieren sich."],
    ["Parallelanordnung wie längs", "Dann wären beide Richtungen gleich steif."],
    ["E = E_Glas · E_KS", "Diese Einheit wäre (N/mm²)²."],
    ["Nur der E-Modul des Harzes zählt", "Das Glas verformt sich quer auch, nur weniger."]],
   "r": "1/E = 0,9/70 000 + 0,1/15 000" },
  { "f": "Wie groß ist der E-Modul quer zur Faser?", "o": [
    ["1/E = 1,95·10⁻⁵ mm²/N → E ≈ 51 220 N/mm²", "1,286·10⁻⁵ + 0,667·10⁻⁵ = 1,952·10⁻⁵, der Kehrwert ist 51 220."],
    ["E = 1,95·10⁻⁵ N/mm²", "Das ist erst 1/E, der Kehrwert fehlt."],
    ["E ≈ 64 500 N/mm²", "Das ist der Wert längs."],
    ["E ≈ 15 000 N/mm²", "Das wäre reines Harz; die Fasern versteifen auch quer."]],
   "r": "E_quer ≈ 51 220 N/mm² (≈ 79 % von längs)" }],
 "fazit": "Längs parallel (E-Moduln gewichtet addieren), quer in Serie (Kehrwerte gewichtet addieren)."
});
Object.assign(RECHNEN, {
 "bsk-v05-gfk": {
  "1": [{ "l": "E_längs", "w": 64500, "u": "N/mm²", "h": "0,9 · 70000 + 0,1 · 15000" }],
  "3": [{ "l": "E_quer", "w": 51220, "u": "N/mm²", "h": "1 / (0,9/70000 + 0,1/15000)" }]
 }
});
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
/* Patch-Warteschlange · Physik · Vorlesung 6 Arbeit, Leistung und kinetische Energie + Übungsblatt 5 (neue, richtige Fassung: Reibung und Kreisbewegung) · erstellt 16.11.2026
   Formeln und Zahlen an den Folien bzw. mit Python geprüft. Korrektur: Die am 9.11. eingespielten Fragen „Blatt 5“ (Arbeit, Energie) gehören zu Übungsblatt 6 – nur Text/Quelle angepasst, Lernstand bleibt. */
THEMEN["phys|Arbeit und Energie"] = "Vorlesung 6 und Übungsblatt 6: Arbeit ist Kraft mal Weg, genauer W = F·s·cos φ – nur der Kraftanteil in Wegrichtung zählt, ohne Weg keine Arbeit. Hubarbeit W = m·g·h; eine Rampe spart Kraft, aber keine Arbeit (goldene Regel). Bei veränderlicher Kraft ist die Arbeit die Fläche unter F(x). Leistung ist Arbeit pro Zeit, P = W/t = F·v, 1 kWh = 3,6 MJ. Die kinetische Energie E_kin = ½·m·v² ändert sich genau um die Arbeit der resultierenden Kraft (Arbeitssatz); doppelte Geschwindigkeit heißt vierfache Energie und vierfacher Bremsweg.";
Object.assign(KORREKTUR, {
 "phys-7d8n53": {
  "q": "Blatt 6, A1: Drei konstante Kräfte verschieben eine Truhe um d. Wie bekommst du die Gesamtarbeit?",
  "s": "Physik Übungsblatt 6, Aufgabe 1 + Hinweise"
 },
 "phys-1soiqb": {
  "q": "Blatt 6, A1b: Die Gesamtarbeit an der Truhe ist negativ. Was folgt daraus?",
  "s": "Physik Übungsblatt 6, Aufgabe 1b"
 },
 "phys-c6xfa1": {
  "q": "Blatt 6, A2: Behälter (Masse m) an einer losen Rolle, gleichmäßig um d hochgezogen. Ordne zu.",
  "s": "Physik Übungsblatt 6, Aufgabe 2 + Hinweise"
 },
 "phys-8lhei1": {
  "q": "Blatt 6, A3: Wie liest du die Arbeit aus einem F(x)-Diagramm ab?",
  "s": "Physik Übungsblatt 6, Aufgabe 3 + Hinweise"
 },
 "phys-1t2htns": {
  "q": "Blatt 6, A4: Ein Objekt wird aus der Ruhe gleichmäßig beschleunigt. Wie groß ist die Leistung nach der halben Zeit t₁/2 im Vergleich zu t₁?",
  "s": "Physik Übungsblatt 6, Aufgabe 4 + Hinweise"
 },
 "phys-i2s12e": {
  "q": "Blatt 6, A5: Ein PKW fährt mit konstantem v, Luftwiderstand ist der einzige Widerstand. Wie hängen die Größen von v ab?",
  "s": "Physik Übungsblatt 6, Aufgabe 5 + Hinweise"
 },
 "phys-17bbz7u": {
  "q": "Blatt 6, A6: Allradwagen soll so schnell wie möglich auf v_max beschleunigen. Bring das Vorgehen in die richtige Reihenfolge.",
  "s": "Physik Übungsblatt 6, Aufgabe 6 + Hinweise"
 },
 "phys-b5-a5": {
  "s": "Physik Übungsblatt 6, Aufgabe 5"
 }
});
mc("phys", "Arbeit und Energie", "Wann verrichtet eine Kraft im physikalischen Sinn Arbeit?", ["Wenn sie einen Körper entlang eines Weges bewegt", "Immer, wenn man sich dabei anstrengt", "Nur wenn der Körper schneller wird", "Nur bei Kräften nach oben"], "W = F·s: Ohne Weg keine Arbeit. Wer gegen eine Wand drückt oder eine Tasche nur festhält, verrichtet an Wand bzw. Tasche keine Arbeit – auch wenn die Muskeln müde werden.", "Physik V06, Folie 2–3 und 13");
mc("phys", "Arbeit und Energie", "Was ist 1 Joule?", ["1 N · 1 m – eine Kraft von 1 N bewegt einen Körper um 1 m", "1 N / 1 m", "1 kg · 1 m/s", "1 W · 1 h"], "1 J = 1 N·m. Anschaulich: eine Tafel Schokolade (100 g, Gewicht ≈ 1 N) 1 m hochheben. 1 W·h wären 3600 J.", "Physik V06, Folie 4");
mc("phys", "Arbeit und Energie", "Eine Person (70 kg) steigt ein Stockwerk (3 m) hoch. Welche Größenordnung hat die Hubarbeit?", ["≈ 2 kJ", "≈ 2 J", "≈ 200 kJ", "≈ 21 J"], "W = m·g·h = 70 kg · 9,81 m/s² · 3 m ≈ 2060 J ≈ 2 kJ.", "Physik V06, Folie 4 und 16");
mc("phys", "Arbeit und Energie", "Mit welcher Kraft muss ein Seil eine Last (m) gleichmäßig eine Rampe mit Neigung α hochziehen (ohne Reibung)?", ["F = m·g·sin α", "F = m·g·cos α", "F = m·g", "F = m·g / sin α"], "Die Rampe trägt den Anteil senkrecht zu ihr (m·g·cos α). Das Seil hält nur den Hangabtrieb entlang der Rampe: m·g·sin α. Bei 30° ist das die Hälfte der Gewichtskraft.", "Physik V06, Folie 7 und 10");
wf("phys", "Arbeit und Energie", "Über eine Rampe braucht man weniger Kraft – deshalb ist auch die Arbeit kleiner als beim senkrechten Heben.", false, "Falsch. Der Weg wird um genau den Faktor 1/sin α länger: W = m·g·sin α · h/sin α = m·g·h. Goldene Regel der Mechanik: Was man an Kraft spart, muss man an Weg zulegen. Beispiel 50 kg, 2 m: beide Male 981 J.", "Physik V06, Folie 8–12");
mc("phys", "Arbeit und Energie", "Ein Schlitten wird mit 100 N an einer Leine unter 60° gegen den Boden 10 m weit gezogen. Wie groß ist die Arbeit?", ["500 J", "1000 J", "866 J", "0 J"], "W = F·s·cos φ = 100 N · 10 m · cos 60° = 100 · 10 · 0,5 = 500 J. Nur der Anteil in Wegrichtung (F·cos φ) zählt.", "Physik V06, Folie 19 und Selbsttest 8");
pair("phys", "Arbeit und Energie", "Ordne das Vorzeichen der Arbeit zu (W = F·s·cos φ).", [["Wagen schieben, φ = 0°", "W > 0"], ["Tasche waagerecht tragen, φ = 90°", "W = 0"], ["Bremsen, φ = 180°", "W < 0"]], "cos 0° = 1, cos 90° = 0, cos 180° = −1. Die Haltekraft beim Tragen steht senkrecht zum Weg und verrichtet keine Arbeit.", "Physik V06, Folie 20");
mc("phys", "Arbeit und Energie", "Wie bestimmst du die Arbeit einer Kraft, die sich unterwegs ändert (z. B. eine Feder)?", ["Weg in kleine Stücke zerlegen und aufsummieren: W = ∫ F·dr – auf gerader Strecke die Fläche unter F(x)", "Anfangskraft mal Weg", "Endkraft mal Weg", "Mittelwert aus Anfangs- und Endkraft mal Zeit"], "Auf einem sehr kleinen Wegstück ist die Kraft fast konstant: dW = F·dr. Alle Stücke zusammen ergeben das Integral. Bei einer Feder ist die Fläche ein Dreieck.", "Physik V06, Folie 21–24");
mc("phys", "Arbeit und Energie", "Eine Feder (k = 200 N/m) wird um 0,20 m gedehnt. Wie groß ist die Arbeit?", ["4,0 J", "40 J", "8,0 J", "2,0 J"], "Kraft am Ende: F = k·x = 200 · 0,20 = 40 N. Die Kraft steigt gleichmäßig von 0 auf 40 N, die Fläche ist ein Dreieck: W = ½ · 0,20 m · 40 N = 4,0 J.", "Physik V06, Folie 25–26");
wf("phys", "Arbeit und Energie", "Bei einer konstanten Kraft hängt die Arbeit nur von Anfangs- und Endpunkt ab, nicht vom Verlauf der Bahn.", true, "Richtig. Bei überall gleicher Kraft gilt W = F·d mit der Verschiebung d vom Anfangs- zum Endpunkt (Skalarprodukt).", "Physik V06, Folie 27");
mc("phys", "Arbeit und Energie", "Ein Körper (50 kg) wird gleichmäßig eine Rampe 2 m hochgezogen. Seilkraft: +981 J, Gewichtskraft: −981 J. Wie groß ist die Arbeit der Normalkraft und die Gesamtarbeit?", ["W_N = 0, W_res = 0", "W_N = 981 J, W_res = 981 J", "W_N = −981 J, W_res = −981 J", "W_N = 0, W_res = 1962 J"], "Die Normalkraft steht quer zum Weg und verrichtet keine Arbeit. Superposition: Die Arbeiten aller Kräfte werden addiert: 981 − 981 + 0 = 0 – passend dazu ändert sich die Geschwindigkeit nicht.", "Physik V06, Folie 28");
mc("phys", "Arbeit und Energie", "Was ist Leistung?", ["Arbeit pro Zeit, P = W/t, Einheit Watt", "Arbeit mal Zeit", "Kraft pro Weg", "Energie pro Masse"], "P = W/t in W = J/s. Gleiche Arbeit in halber Zeit heißt doppelte Leistung. Umgekehrt ist die Arbeit die Fläche im P(t)-Diagramm: W = P·t.", "Physik V06, Folie 14–15");
mc("phys", "Arbeit und Energie", "Eine Person (70 kg) läuft in 6,0 s ein Stockwerk (3,0 m) hoch. Wie groß ist ihre Leistung?", ["≈ 343 W", "≈ 2060 W", "≈ 34 W", "≈ 12 kW"], "W = 70 · 9,81 · 3,0 ≈ 2060 J. P = W/t = 2060 J / 6,0 s ≈ 343 W.", "Physik V06, Folie 16");
mc("phys", "Arbeit und Energie", "Welche Formel verbindet Leistung, Kraft und Geschwindigkeit?", ["P = F · v", "P = F / v", "P = F · s", "P = ½·m·v²"], "P = W/t = F·s/t, und Weg pro Zeit ist die Geschwindigkeit: P = F·v (Kraft in Bewegungsrichtung).", "Physik V06, Folie 17");
pair("phys", "Arbeit und Energie", "Wie lange liefert jedes Gerät 1 kWh?", [["Wasserkocher 2 kW", "0,5 h"], ["Mikrowelle 1 kW", "1 h"], ["LED-Lampe 10 W", "100 h"]], "1 kWh = 1000 W · 3600 s = 3,6 Millionen Joule. Die kWh ist eine Einheit der Arbeit (Energie), nicht der Leistung.", "Physik V06, Folie 18");
mc("phys", "Arbeit und Energie", "Ein Wasserkocher (2 kW) läuft 3 Minuten. Wie viel Energie ist das?", ["0,1 kWh", "6 kWh", "0,6 kWh", "0,01 kWh"], "3 min = 0,05 h. W = P·t = 2 kW · 0,05 h = 0,1 kWh = 360 kJ.", "Physik V06, Selbsttest 6");
wf("phys", "Arbeit und Energie", "Eine Mikrowelle mit der Aufschrift 1000 W zieht immer 1000 W.", false, "Falsch. 1000 W ist die Nennleistung, also die größte Leistung. Auf kleiner Stufe ist die Leistung im Mittel kleiner.", "Physik V06, Folie 18 und Selbsttest 7");
mc("phys", "Arbeit und Energie", "Wie lautet der Arbeitssatz?", ["W_res = E_kin,2 − E_kin,1: Die Arbeit der resultierenden Kraft ändert die kinetische Energie", "W = m·g·h", "E_kin bleibt immer gleich", "W_res = ½·m·v"], "Positive Gesamtarbeit: der Körper wird schneller; negative: langsamer; null: gleich schnell.", "Physik V06, Folie 29–30");
mc("phys", "Arbeit und Energie", "Ein Auto fährt doppelt so schnell. Was passiert mit kinetischer Energie und Bremsweg (gleiche Bremskraft)?", ["Beide werden viermal so groß", "Beide verdoppeln sich", "Energie ×4, Bremsweg ×2", "Energie ×2, Bremsweg ×4"], "E_kin = ½·m·v²: v steht im Quadrat. Der Bremsweg folgt aus F_B·s_B = ½·m·v², wächst also ebenfalls mit v².", "Physik V06, Folie 31, 35 und Selbsttest 11");
mc("phys", "Arbeit und Energie", "Ein Auto (1000 kg) beschleunigt von 10 m/s auf 20 m/s. Wie viel Arbeit muss die resultierende Kraft verrichten?", ["150 kJ", "50 kJ", "100 kJ", "200 kJ"], "E_kin,1 = ½·1000·10² = 50 kJ, E_kin,2 = ½·1000·20² = 200 kJ. W_res = 200 − 50 = 150 kJ – nicht 50 kJ, obwohl v nur um 10 m/s steigt.", "Physik V06, Folie 32–34");
wf("phys", "Arbeit und Energie", "Kinetische Energie kann negativ werden, wenn sich ein Körper rückwärts bewegt.", false, "Falsch. E_kin = ½·m·v² ist nie negativ, die Richtung der Bewegung spielt keine Rolle. Negativ kann nur die Arbeit sein (Kraft gegen die Bewegung).", "Physik V06, Folie 31 und 38");
mc("phys", "Kraftgesetze", "Blatt 5, A1: Ein Block liegt am Boden, eine Kraft P zieht ihn senkrecht nach oben (P < mg). Wie groß ist die Normalkraft?", ["F_N = m·g − P", "F_N = m·g", "F_N = m·g + P", "F_N = P"], "Gleichgewicht senkrecht: F_N + P − m·g = 0. P entlastet den Boden, deshalb ist auch die größte Haftreibung μ_s·(mg − P) kleiner.", "Physik Übungsblatt 5 (neu), Aufgabe 1");
mc("phys", "Kraftgesetze", "Blatt 5, A1: Die waagerechte Kraft F ist kleiner als μ_s·(mg − P). Wie groß ist die Reibungskraft?", ["F_R = F, entgegen F", "F_R = μ_s·(mg − P)", "F_R = μ_k·(mg − P)", "F_R = 0"], "Der Block bleibt liegen. Haftreibung ist nur so groß wie nötig – sie gleicht F genau aus. Erst wenn F größer als μ_s·F_N ist, rutscht er und es wirkt Gleitreibung μ_k·F_N.", "Physik Übungsblatt 5 (neu), Aufgabe 1 + Hinweise");
mc("phys", "Kraftgesetze", "Blatt 5, A2: Unter welchem Winkel α zieht man eine Kiste am besten, um bei begrenzter Seilkraft möglichst viel Masse zu bewegen?", ["tan α = μ_s", "α = 0°", "α = 45°", "sin α = μ_s"], "M(α) = F(cos α + μ_s sin α)/(μ_s g) − m. Ableitung null: −sin α + μ_s cos α = 0 → tan α = μ_s. Schräg ziehen entlastet den Boden und senkt die Reibung.", "Physik Übungsblatt 5 (neu), Aufgabe 2");
pair("phys", "Kraftgesetze", "Blatt 5, A3: Überhöhte Kurve – in welche Richtung zeigt die Haftreibung im Grenzfall?", [["Untere Grenzgeschwindigkeit v_u", "hangaufwärts"], ["Obere Grenzgeschwindigkeit v_o", "hangabwärts"], ["Ideale Geschwindigkeit √(r·g·tan α)", "keine Reibung nötig"]], "Die Reibung zeigt immer gegen die Rutschrichtung: zu langsam rutscht der Wagen nach unten, zu schnell nach außen oben. Ohne Reibung gibt es nur eine passende Geschwindigkeit.", "Physik Übungsblatt 5 (neu), Aufgabe 3 + Hinweise");
wf("phys", "Kraftgesetze", "Blatt 5, A4: Am höchsten Punkt des Riesenrads ist die Normalkraft des Sitzes kleiner als das Gewicht – man fühlt sich leicht.", true, "Richtig. Oben zeigt die Resultierende nach unten zur Mitte: mg − N₁ = mv²/r > 0, also N₁ < mg. Unten ist es umgekehrt: N₂ = 2mg − N₁ > mg.", "Physik Übungsblatt 5 (neu), Aufgabe 4");
mc("phys", "Kraftgesetze", "Blatt 5, A4: Das Riesenrad dreht doppelt so schnell. Wie groß ist die Normalkraft unten?", ["N₃ = 5mg − 4N₁", "N₃ = 2mg − N₁", "N₃ = 4(2mg − N₁)", "N₃ = 3mg − 2N₁"], "mv²/r = mg − N₁ wird bei doppeltem v viermal so groß. Unten: N₃ = mg + 4(mg − N₁) = 5mg − 4N₁.", "Physik Übungsblatt 5 (neu), Aufgabe 4c");
mc("phys", "Kraftgesetze", "Blatt 5, A5: Ein Flugzeug fliegt eine waagerechte Kurve mit Querneigung α. Wie groß ist der Kurvenradius?", ["r = v² / (g·tan α)", "r = v²·tan α / g", "r = g·tan α / v²", "r = v / (g·sin α)"], "Auftrieb senkrecht zu den Tragflächen: senkrecht F_A·cos α = mg, waagerecht F_A·sin α = mv²/r. Teilen ergibt tan α = v²/(r·g).", "Physik Übungsblatt 5 (neu), Aufgabe 5");
mc("phys", "Kraftgesetze", "Blatt 5, A6: Kugel an zwei Seilen (gleichseitiges Dreieck) am rotierenden Stab, oberes Seil T₁. Wie groß ist die Kraft im unteren Seil?", ["T₂ = T₁ − 2mg", "T₂ = T₁ + 2mg", "T₂ = T₁ − mg", "T₂ = T₁"], "Senkrecht: T₁·sin 30° − T₂·sin 30° − mg = 0 → ½(T₁ − T₂) = mg. Das obere Seil trägt also zusätzlich das Gewicht; deshalb muss T₁ > 2mg sein.", "Physik Übungsblatt 5 (neu), Aufgabe 6 + Hinweise");
aufgabe({
 "id": "phys-b5n-a3",
 "f": "phys",
 "t": "Kraftgesetze",
 "titel": "Überhöhte Kurve: Geschwindigkeitsbereich",
 "s": "Physik Übungsblatt 5 (neu), Aufgabe 3",
 "angabe": "Ein Wagen (m) fährt mit konstantem v durch eine überhöhte Kurve (Neigung α, Radius r). Haftreibungszahl μ_s. In welchem Bereich muss v liegen, damit er nicht seitlich rutscht?",
 "geg": [
  "α",
  "r",
  "μ_s",
  "m",
  "g"
 ],
 "ges": "Untergrenze v_u und Obergrenze v_o",
 "schritte": [
  {
   "f": "Welche Kräfte wirken auf den Wagen, und was ist ihre Resultierende?",
   "o": [
    [
     "F_G nach unten, F_N senkrecht zur Fahrbahn, F_R entlang der Fahrbahn – Resultierende waagerecht zur Kurvenmitte, Betrag m·v²/r",
     "Die Zentripetalkraft ist keine eigene Kraft, sondern die Resultierende."
    ],
    [
     "F_G, F_N, F_R und zusätzlich die Zentripetalkraft",
     "Die Zentripetalkraft ist die Summe der anderen, keine vierte Kraft."
    ],
    [
     "Nur F_G und F_N, Reibung spielt keine Rolle",
     "Gefragt sind gerade die Grenzen, bei denen die Haftreibung voll ausgenutzt wird."
    ],
    [
     "F_G, F_N und eine Fliehkraft nach außen",
     "Im ruhenden Bezugssystem gibt es keine Fliehkraft – die Resultierende zeigt nach innen."
    ]
   ],
   "r": "F_res = m·v²/r (waagerecht)"
  },
  {
   "f": "Wohin zeigt die Haftreibung bei der Untergrenze v_u?",
   "o": [
    [
     "Hangaufwärts – zu langsam würde der Wagen nach unten rutschen",
     "Reibung wirkt gegen die Rutschrichtung."
    ],
    [
     "Hangabwärts",
     "Das gilt für die Obergrenze."
    ],
    [
     "Zur Kurvenmitte",
     "Reibung wirkt entlang der Fahrbahn, nicht waagerecht."
    ],
    [
     "Sie ist null",
     "Im Grenzfall ist sie maximal: F_R = μ_s·F_N."
    ]
   ],
   "r": "F_R = μ_s·F_N hangaufwärts"
  },
  {
   "f": "Wie kommst du ohne F_N zu v_u?",
   "o": [
    [
     "Waagerechte durch senkrechte Gleichung teilen: v_u²/(r g) = (sin α − μ_s cos α)/(cos α + μ_s sin α)",
     "So kürzt sich F_N heraus (offizieller Hinweis)."
    ],
    [
     "F_N = m·g einsetzen",
     "Auf der schrägen Fahrbahn ist F_N nicht mg."
    ],
    [
     "Energieerhaltung",
     "Es ist ein Kräftegleichgewicht, keine Energiefrage."
    ],
    [
     "μ_s = tan α setzen",
     "Das ist der Grenzwinkel der schiefen Ebene, nicht diese Aufgabe."
    ]
   ],
   "r": "v_u = √(r g (tan α − μ_s)/(1 + μ_s tan α))"
  },
  {
   "f": "Was ändert sich für die Obergrenze v_o?",
   "o": [
    [
     "Reibung zeigt hangabwärts – Vorzeichen von μ_s umdrehen",
     "v_o = √(r g (tan α + μ_s)/(1 − μ_s tan α))"
    ],
    [
     "Nichts, v_o = v_u",
     "Dann gäbe es keinen Bereich."
    ],
    [
     "Man nimmt μ_k statt μ_s",
     "Es rutscht ja noch nicht – es bleibt Haftreibung."
    ],
    [
     "v_o = 2·v_u",
     "Kein solcher fester Zusammenhang."
    ]
   ],
   "r": "Beispiel r = 50 m, α = 30°, μ_s = 0,2: 12,9 m/s ≤ v ≤ 20,8 m/s"
  }
 ],
 "fazit": "Reibungsrichtung je Grenzfall festlegen, waagerecht = m·v²/r, senkrecht = m·g, Gleichungen teilen. Mit μ_s = 0 fallen beide Grenzen auf √(r g tan α)."
});
aufgabe({
 "id": "phys-b5n-a4",
 "f": "phys",
 "t": "Kraftgesetze",
 "titel": "Riesenrad: Normalkraft oben und unten",
 "s": "Physik Übungsblatt 5 (neu), Aufgabe 4",
 "angabe": "Ein Student (Gewicht mg) fährt Riesenrad. Oben drückt der Sitz mit N₁. Gesucht: N₂ unten, und N₃ unten bei doppelter Geschwindigkeit.",
 "geg": [
  "m·g",
  "N₁"
 ],
 "ges": "N₂, N₃",
 "schritte": [
  {
   "f": "Wie lautet das Kräftegleichgewicht oben (y-Achse nach oben)?",
   "o": [
    [
     "m·g − N₁ = m·v²/r – die Mitte liegt unten",
     "Die Resultierende zeigt zur Mitte, also nach unten."
    ],
    [
     "N₁ − m·g = m·v²/r",
     "Das gilt unten, wo die Mitte oben liegt."
    ],
    [
     "N₁ = m·g",
     "Dann gäbe es keine Kreisbewegung."
    ],
    [
     "N₁ + m·g = m·v²/r",
     "Die Normalkraft zeigt nach oben, das Gewicht nach unten – sie haben verschiedene Vorzeichen."
    ]
   ],
   "r": "m·v²/r = m·g − N₁"
  },
  {
   "f": "Und unten?",
   "o": [
    [
     "N₂ − m·g = m·v²/r = m·g − N₁ → N₂ = 2mg − N₁",
     "Gleiche Geschwindigkeit, gleicher Betrag der Zentripetalkraft."
    ],
    [
     "N₂ = N₁",
     "Oben leicht, unten schwer – die Kräfte sind verschieden."
    ],
    [
     "N₂ = m·g − N₁",
     "Das ist m·v²/r, nicht die Normalkraft."
    ],
    [
     "N₂ = 2N₁ − mg",
     "Vorzeichen vertauscht."
    ]
   ],
   "r": "N₂ = 2mg − N₁"
  },
  {
   "f": "Was passiert bei doppelter Geschwindigkeit?",
   "o": [
    [
     "m·v²/r wird viermal so groß: N₃ = mg + 4(mg − N₁) = 5mg − 4N₁",
     "v steht im Quadrat."
    ],
    [
     "m·v²/r verdoppelt sich: N₃ = 3mg − 2N₁",
     "v geht quadratisch ein, nicht linear."
    ],
    [
     "N₃ = 2·N₂",
     "Nur der Zentripetalanteil wächst, nicht das Gewicht."
    ],
    [
     "Nichts ändert sich",
     "Die nötige Zentripetalkraft hängt von v ab."
    ]
   ],
   "r": "N₃ = 5mg − 4N₁ (Beispiel 70 kg, N₁ = 500 N: 873 N bzw. 1434 N)"
  }
 ],
 "fazit": "Oben und unten alle Kräfte senkrecht, Resultierende immer zur Mitte mit Betrag m·v²/r. Kontrolle: N₁ + N₂ = 2mg."
});
aufgabe({
 "id": "phys-v06-brems",
 "f": "phys",
 "t": "Arbeit und Energie",
 "titel": "Bremsweg eines Autos",
 "s": "Physik V06, Folie 36",
 "angabe": "Ein Auto (1000 kg) fährt mit 20 m/s und bremst mit konstanter Bremskraft 8000 N bis zum Stillstand. Wie lang ist der Bremsweg?",
 "geg": [
  "m = 1000 kg",
  "v = 20 m/s",
  "F_B = 8000 N"
 ],
 "ges": "Bremsweg s_B",
 "schritte": [
  {
   "f": "Welche Energie muss beim Bremsen abgebaut werden?",
   "o": [
    [
     "Die kinetische Energie E_kin = ½·m·v²",
     "Bis zum Stillstand muss die ganze Bewegungsenergie weg."
    ],
    [
     "Die Hubarbeit m·g·h",
     "Das Auto fährt waagerecht."
    ],
    [
     "m·v",
     "Das ist der Impuls, keine Energie."
    ],
    [
     "Die Leistung F·v",
     "Leistung ist Arbeit pro Zeit."
    ]
   ],
   "r": "E_kin = ½·1000·20² = 200 000 J"
  },
  {
   "f": "Welche Gleichung liefert den Bremsweg?",
   "o": [
    [
     "F_B·s_B = ½·m·v² (Arbeitssatz, Bremsarbeit negativ)",
     "Die Bremskraft zeigt gegen die Bewegung und nimmt die Energie weg."
    ],
    [
     "s_B = v·t",
     "Die Bremszeit kennen wir nicht."
    ],
    [
     "s_B = F_B / E_kin",
     "Die Einheit wäre 1/m."
    ],
    [
     "s_B = v²/g",
     "Das gälte nur für Bremsverzögerung g."
    ]
   ],
   "r": "s_B = 200 000 J / 8000 N = 25 m"
  },
  {
   "f": "Wie lang wäre der Bremsweg bei 40 m/s?",
   "o": [
    [
     "100 m – viermal so lang",
     "v steht im Quadrat."
    ],
    [
     "50 m",
     "Doppelt so schnell heißt nicht doppelter Bremsweg."
    ],
    [
     "25 m",
     "Die Energie ist viermal so groß."
    ],
    [
     "200 m",
     "Das wäre v³."
    ]
   ],
   "r": "s_B = 800 000 J / 8000 N = 100 m"
  }
 ],
 "fazit": "Bremsweg aus F_B·s_B = ½·m·v². Doppelte Geschwindigkeit, vierfacher Bremsweg."
});
/* Patch-Warteschlange · Baustoffkunde · V06 Mischen von Werkstoffkomponenten – Phasendiagramme (Vollpracht, 30 Folien) · erstellt 17.11.2026 · Werte an den Folien geprüft, Hebelgesetz und Phasenregel mit Python nachgerechnet */
const B7 = "Phasendiagramme und Legierungen";
THEMEN["bsk|Phasendiagramme und Legierungen"] = "Ein Phasendiagramm zeigt, welche Phasen bei welcher Temperatur und Zusammensetzung vorliegen. Zwei Komponenten können voll löslich sein (Cu–Ni: gleiche Kristallstruktur, ähnliche Ordnungszahl und Valenzelektronen), beschränkt löslich (Pb–Sn mit Eutektikum bei 183 °C) oder gar nicht löslich (Fe–Pb). Oberhalb der Liquiduslinie ist alles flüssig, unterhalb der Soliduslinie alles fest. Im Zweiphasengebiet liefert das Hebelgesetz die Anteile, und die Gibbs’sche Phasenregel F = K + 1 − P erklärt Halte- und Knickpunkte der Abkühlkurven. Das wichtigste Diagramm für Bauingenieure ist das Eisen-Kohlenstoff-Diagramm: Stahl hat unter etwa 2,06 M.-% Kohlenstoff, Gusseisen mehr. Merkpunkte sind das Eutektikum (4,3 % C, 1147 °C, Ledeburit), das Eutektoid (0,8 % C, 723 °C, Perlit) und das Peritektikum. Mit steigendem C-Gehalt steigen Festigkeit und Sprödigkeit, Verformbarkeit und Schweißbarkeit sinken.";

/* ── Grundbegriffe ── */
mc("bsk", B7, "Was zeigt ein Phasendiagramm?", ["Welche Phasen unter bestimmten Bedingungen (z. B. Temperatur, Druck, Zusammensetzung) vorliegen", "Wie sich die Festigkeit mit der Zeit entwickelt", "Die Spannungs-Dehnungs-Linie eines Werkstoffs", "Die Korngrößenverteilung eines Gemischs"], "Bekanntes Beispiel ist Wasser im Druck-Temperatur-Diagramm mit Eis, Wasser, Dampf, Tripelpunkt und kritischem Punkt (374 °C, 221 bar). Bei Legierungen trägt man meist Temperatur über Zusammensetzung bei konstantem Druck auf.", "Baustoffkunde V06, Folie 3");
pair("bsk", B7, "Welcher Zustand entsteht beim Mischen und Abkühlen? Ordne zu.", [["Gleichgewichtszustand", "Minimum an potenzieller Energie wird erreicht"], ["Metastabiler Zustand", "insgesamt stabil, Energieminimum aber nicht erreicht"], ["Ungleichgewichtszustand", "plötzliches Abkühlen, instabil mit hoher Energie"]], "Ein Bild dafür ist eine Kugel in einer Mulde: ganz unten (Gleichgewicht), in einer höheren Mulde (metastabil) oder auf einer Kuppe (instabil). Zementit Fe₃C ist ein Beispiel für eine metastabile Phase.", "Baustoffkunde V06, Folie 4");
mc("bsk", B7, "Welche Bedingungen müssen für volle Löslichkeit zweier Metalle erfüllt sein?", ["Gleiche Kristallstruktur, ähnliche Ordnungszahl, ähnliche Anzahl Valenzelektronen", "Gleiche Dichte und gleicher Schmelzpunkt", "Unterschiedliche Kristallstruktur, damit sich die Gitter ergänzen", "Nur ein ähnlicher Schmelzpunkt"], "Kupfer und Nickel erfüllen alles: beide kubisch-flächenzentriert (KFZ), Ordnungszahl 29 und 28. Blei (KFZ, 82) und Zinn (tetragonal, 50) erfüllen es nicht und sind nur beschränkt löslich.", "Baustoffkunde V06, Folien 5 und 11");
pair("bsk", B7, "Wie gut sind die Komponenten ineinander löslich? Ordne zu.", [["Kupfer–Nickel", "voll löslich"], ["Blei–Zinn", "beschränkt löslich"], ["Eisen–Blei", "unlöslich"]], "Auch Aluminium–Blei ist unlöslich. Dort setzt sich das schwere Blei wegen des großen Dichteunterschieds im Schmelztiegel unten ab.", "Baustoffkunde V06, Folien 5, 10 und 11");
pair("bsk", B7, "Linien im Zustandsdiagramm – ordne zu.", [["Liquiduslinie", "Beginn des Erstarrens beim Abkühlen"], ["Soliduslinie", "Ende des Erstarrens beim Abkühlen"], ["Gebiet dazwischen", "Schmelze und Mischkristalle gleichzeitig"]], "Oberhalb der Liquiduslinie ist alles flüssig (L), unterhalb der Soliduslinie liegen nur noch Mischkristalle (α) vor.", "Baustoffkunde V06, Folie 6");
mc("bsk", B7, "Hebelgesetz im Zweiphasengebiet: Wie groß ist der Anteil der festen Phase? (c₀ Legierung, c_L Schmelze, c_S Mischkristall)", ["(c₀ − c_L) / (c_S − c_L) · 100 %", "(c_S − c₀) / (c_S − c_L) · 100 %", "c₀ / c_S · 100 %", "(c_S − c_L) / c₀ · 100 %"], "Man zieht bei der Temperatur eine waagerechte Linie durchs Zweiphasengebiet. Der Anteil einer Phase ist der Hebelarm auf der gegenüberliegenden Seite. Der flüssige Anteil ist entsprechend (c_S − c₀) / (c_S − c_L).", "Baustoffkunde V06, Folie 7");
mc("bsk", B7, "Cu–Ni-Legierung mit c₀ = 40 M.-% Ni. Bei einer Temperatur gilt c_L = 30 % und c_S = 45 % Ni. Wie viel ist schon fest?", ["≈ 67 %", "≈ 33 %", "40 %", "50 %"], "Fest: (40 − 30) / (45 − 30) = 10/15 ≈ 67 %, flüssig: (45 − 40) / 15 ≈ 33 %. Kontrolle: Zusammen 100 %. Die Legierung liegt näher an der Soliduszusammensetzung, also ist mehr fest.", "Baustoffkunde V06, Folie 7 (eigenes Zahlenbeispiel)");
mc("bsk", B7, "Wie lautet die Gibbs’sche Phasenregel bei konstantem Druck?", ["F = K + 1 − P", "F = K − P + 2", "F = P + 1 − K", "F = K · P − 1"], "F ist die Zahl der Freiheitsgrade, K die Zahl der Komponenten, P die Zahl der Phasen. Bei veränderlichem Druck käme +2 statt +1 hinein.", "Baustoffkunde V06, Folie 8");
pair("bsk", B7, "Phasenregel F = K + 1 − P: Was zeigt die Abkühlkurve?", [["Reines Kupfer beim Erstarren (K = 1, P = 2)", "F = 0 → Haltepunkt"], ["Cu–Ni im Gebiet L + α (K = 2, P = 2)", "F = 1 → Knickpunkt, Temperatur sinkt langsamer"], ["Pb–Sn am Eutektikum (K = 2, P = 3)", "F = 0 → Haltepunkt bei 183 °C"]], "F = 0 heißt: Die Temperatur kann sich nicht ändern, solange die Phasen nebeneinander bestehen. Deshalb bleibt die Kurve waagerecht, bis alles erstarrt ist.", "Baustoffkunde V06, Folien 8 und 13");
wf("bsk", B7, "Eine Cu–Ni-Legierung erstarrt wie ein reines Metall bei einer festen Temperatur.", false, "Falsch. Die Legierung erstarrt über einen Temperaturbereich zwischen Liquidus und Solidus. Die Abkühlkurve zeigt dort Knickpunkte statt eines Haltepunkts.", "Baustoffkunde V06, Folie 8");
mc("bsk", B7, "Wofür werden Kupfer-Nickel-Legierungen vor allem eingesetzt?", ["Wegen der hohen Korrosionsbeständigkeit, z. B. im Schiffbau und für Münzen (CuNi25)", "Als Lötdraht wegen des niedrigen Schmelzpunkts", "Als Betonstahl", "Als Gleitlager mit Bleitröpfchen"], "Weitere Einsatzgebiete laut Folie: Offshore-Technik, Meerwasserentsalzung, LNG-Technik und Kondensatoren.", "Baustoffkunde V06, Folie 9");
mc("bsk", B7, "Blei und Aluminium lassen sich nicht legieren. Wie nutzt man die Kombination trotzdem?", ["Als Dispersionslegierung: feinste Bleitröpfchen in harter Al-Matrix, z. B. für gute Gleiteigenschaften", "Gar nicht, die Metalle reagieren explosiv", "Man erhitzt so lange, bis sie doch löslich werden", "Als Lötzinn"], "Das gelingt durch extrem schnelles Abkühlen oder Pulvermetallurgie. Streng genommen ist das ein Verbundwerkstoff, keine Legierung.", "Baustoffkunde V06, Folie 10");
pair("bsk", B7, "Pb–Sn-Diagramm: Was liegt im Bereich vor?", [["Bereich I", "nur Schmelze"], ["Bereich IV", "α-Mischkristalle und Schmelze"], ["Bereich VI", "α- und β-Mischkristalle, Schmelze erstarrt"], ["Bereich II", "nur α-Mischkristalle"]], "α ist das kfz-Gitter des Bleis mit eingelagerten Sn-Atomen, β das tetragonale Gitter des Zinns mit eingelagerten Pb-Atomen.", "Baustoffkunde V06, Folie 12");
mc("bsk", B7, "Was ist das Eutektikum im Blei-Zinn-System?", ["Die Zusammensetzung (≈ 62 % Sn) mit dem tiefsten Schmelzpunkt, 183 °C, an dem die Schmelze direkt zu α + β erstarrt", "Der Schmelzpunkt von reinem Zinn (232 °C)", "Der Punkt, an dem nur α-Mischkristalle entstehen", "Die höchste Temperatur im Diagramm"], "Die eutektische Legierung schmilzt tiefer als beide reinen Metalle (Pb 327 °C, Sn 232 °C) und erstarrt wie ein reines Metall mit Haltepunkt. Darum nutzt man SnPb37 als Lötdraht.", "Baustoffkunde V06, Folien 12–14");
wf("bsk", B7, "Im Pb–Sn-System sinkt die Löslichkeit von Sn in Pb (und umgekehrt) mit fallender Temperatur.", true, "Richtig. Deshalb ändert sich die Zusammensetzung von α und β im festen Zustand weiter, wenn die Legierung abkühlt (geneigte Grenzlinien unterhalb von 183 °C).", "Baustoffkunde V06, Folie 12");

/* ── Eisen-Kohlenstoff ── */
mc("bsk", B7, "Wo liegt die Grenze zwischen Stahl und Gusseisen?", ["Bei etwa 2,06 M.-% Kohlenstoff – darunter Stahl, darüber Gusseisen", "Bei 0,8 M.-% Kohlenstoff", "Bei 4,3 M.-% Kohlenstoff", "Bei 6,7 M.-% Kohlenstoff"], "2,06 % (gerundet 2,1 %) ist die größte Kohlenstoffmenge, die Austenit (γ-Eisen) lösen kann. 0,8 % ist das Eutektoid, 4,3 % das Eutektikum, 6,7 % reiner Zementit Fe₃C.", "Baustoffkunde V06, Folien 16 und 20");
pair("bsk", B7, "Modifikationen des reinen Eisens – ordne zu.", [["α-Eisen (Ferrit)", "unter 911 °C, KRZ"], ["γ-Eisen (Austenit)", "911 bis 1392 °C, KFZ"], ["δ-Eisen", "1392 bis 1536 °C, KRZ"], ["Schmelze", "über 1536 °C"]], "Eisen wandelt seine Kristallstruktur also auch im festen Zustand um. Das ist die Grundlage für Wärmebehandlungen von Stahl.", "Baustoffkunde V06, Folie 17");
mc("bsk", B7, "Welche Eisenmodifikation kann am meisten Kohlenstoff lösen?", ["γ-Eisen (Austenit, KFZ) mit bis zu 2,1 M.-%", "α-Eisen (Ferrit) mit bis zu 2,1 M.-%", "δ-Eisen mit bis zu 4,3 M.-%", "Alle gleich viel"], "Laut Folie nimmt α-Eisen höchstens etwa 0,1 % und δ-Eisen 0,2 % Kohlenstoff auf. Das kfz-Gitter des Austenits hat größere Lücken.", "Baustoffkunde V06, Folie 18");
pair("bsk", B7, "Besondere Punkte im Eisen-Kohlenstoff-Diagramm – ordne zu.", [["Eutektikum C", "4,3 % C, 1147 °C → Ledeburit"], ["Eutektoid S", "0,8 % C, 723 °C → Perlit"], ["Peritektikum I", "um 0,2 % C, 1493 °C"], ["Punkt A", "Schmelzpunkt des reinen Eisens, 1536 °C"]], "Eutektikum: Schmelze erstarrt zu zwei festen Phasen. Eutektoid: Umwandlung im festen Zustand. Peritektikum: feste Phase und Schmelze reagieren zu einer neuen festen Phase.", "Baustoffkunde V06, Folien 19–22");
pair("bsk", B7, "Was ist was im Fe-C-System?", [["Ferrit", "α-Mischkristall, weich und zäh"], ["Austenit", "γ-Mischkristall, kfz"], ["Zementit", "Eisencarbid Fe₃C, metastabil, hart"], ["Perlit", "eutektoides Gemisch aus Ferrit und Zementit"]], "Ledeburit ist das eutektische Gefüge bei 4,3 % C. Zementit ist am rechten Diagrammrand (6,7 % C) zu 100 % vorhanden.", "Baustoffkunde V06, Folien 19–20");
pair("bsk", B7, "Linien im Eisen-Kohlenstoff-Diagramm – ordne zu.", [["ABCD", "Liquiduslinie"], ["AHIECF", "Soliduslinie"], ["ECF", "Eutektikale (1147 °C)"], ["PSK", "Eutektoide (723 °C)"]], "Die Linie SE ist die Löslichkeits- bzw. Sättigungslinie für Kohlenstoff im Austenit (0,8 bis 2,06 %). Unterschreitet man sie, scheidet sich Sekundärzementit aus.", "Baustoffkunde V06, Folie 22");
pair("bsk", B7, "Gefüge eines Stahls bei Raumtemperatur – ordne zu.", [["0,2 % C", "Ferrit + Perlit"], ["0,8 % C", "nur Perlit"], ["1,4 % C", "Perlit + Sekundärzementit"]], "Unter 0,8 % C ist der Stahl untereutektoid, genau 0,8 % eutektoid, darüber übereutektoid. Die Folien zeigen die drei Fälle mit Schliffbildern.", "Baustoffkunde V06, Folien 23–25");
mc("bsk", B7, "Wie unterscheiden sich Primär- und Sekundärzementit?", ["Primärzementit scheidet sich direkt aus der Schmelze aus (C > 4,3 %), Sekundärzementit beim Abkühlen aus dem Austenit", "Primärzementit entsteht nur in Stahl, Sekundärzementit nur in Gusseisen", "Primärzementit ist weich, Sekundärzementit hart", "Das sind zwei Namen für Perlit"], "Beide sind chemisch Fe₃C. Der Name sagt nur, woraus und wann sie entstehen.", "Baustoffkunde V06, Folie 19");
mc("bsk", B7, "Wie verändern sich die Eigenschaften von Stahl mit steigendem Kohlenstoffgehalt?", ["Festigkeit, Sprödigkeit und Härtbarkeit steigen, die Verformbarkeit sinkt", "Festigkeit sinkt, Verformbarkeit steigt", "Nichts, nur die Farbe ändert sich", "Die Schweißbarkeit verbessert sich"], "Ferritischer Stahl ist weich und zäh. Perlitischer Stahl (0,8 %) ist fest, noch verformbar und härtbar. Mit Sekundärzementit wird er hart und spröde.", "Baustoffkunde V06, Folie 27");
mc("bsk", B7, "Warum hat Betonstahl weniger als etwa 0,22 M.-% Kohlenstoff?", ["Damit er schweißbar und gut verformbar bleibt", "Damit er rostfrei ist", "Damit er besonders spröde wird", "Weil mehr Kohlenstoff nicht löslich ist"], "Die Folie nennt als Grenze für Schweißbarkeit rund 0,2 % C. Baustahl und Betonstahl gehören zum ferritisch-perlitischen Bereich.", "Baustoffkunde V06, Folie 27");
pair("bsk", B7, "Werkstoff und typische Anwendung – ordne zu.", [["Ferritischer Stahl (< 0,02 % C)", "biegbarer Eisendraht"], ["Ferritisch-perlitischer Stahl", "Baustahl, Betonstahl"], ["Gusseisen mit Lamellengraphit", "Motoren- und Getriebegehäuse"], ["Gusseisen mit Kugelgraphit", "Kurbelwellen, Zahnräder"]], "Gusseisen ist sehr gut gießbar. Mit Kugelgraphit ist es außerdem zäh und fest.", "Baustoffkunde V06, Folie 27");
mc("bsk", B7, "Warum lässt sich Gusseisen industriell so gut gießen?", ["Mehr Kohlenstoff senkt die Schmelztemperatur deutlich (Eutektikum 1147 °C statt 1536 °C bei reinem Eisen)", "Weil es keinen Kohlenstoff enthält", "Weil es bei Raumtemperatur flüssig ist", "Weil es aus Austenit besteht"], "Die Zusammenfassung der Vorlesung nennt genau das: höherer C-Gehalt, geringere Schmelztemperatur, sehr gute gießtechnische Eigenschaften.", "Baustoffkunde V06, Folie 29");
/* Patch-Warteschlange · Data Analysis for Planning · L04 Central Limit Theorem (22 Folien), L05 Test Distributions and Confidence Intervals (30 Folien), R-Demos L04/L05, Exercise 3 Practice + Week 3.R · erstellt 17.11.2026 · alle Zahlen mit Python (scipy) nachgerechnet */
const DAP_KI = "Grenzwertsatz und Konfidenzintervalle", DAP_TV = "Testverteilungen";
THEMEN["dap|Grenzwertsatz und Konfidenzintervalle"] = "Der zentrale Grenzwertsatz (Central Limit Theorem) sagt zweierlei: Überlagern sich viele Zufallseinflüsse, entsteht annähernd eine Normalverteilung, und die Mittelwerte großer Stichproben sind normalverteilt um den wahren Mittelwert μ mit der Standardabweichung σ/√n (Standardfehler). Daraus folgt das Konfidenzintervall für den Mittelwert: x̄ ± z·σ/√n, wenn σ bekannt ist, und x̄ ± t·s/√n mit m = n − 1 Freiheitsgraden, wenn man σ durch die Stichprobenstandardabweichung s schätzen muss. Für Anteile gilt p̄ ± t·√(p̄(1 − p̄)/n). Das Konfidenzniveau γ ist die Fläche zwischen −z und +z, das Signifikanzniveau α = 1 − γ die Fläche in den beiden Rändern.";
THEMEN["dap|Testverteilungen"] = "Testverteilungen beschreiben, wie sich aus Stichproben berechnete Größen verhalten. Die Chi-Quadrat-Verteilung entsteht als Summe quadrierter standardnormalverteilter Variablen (Mittelwert n, Varianz 2n) und beschreibt z. B. Zähler von Varianzen. Die t-Verteilung entsteht, wenn man eine normalverteilte Größe durch eine geschätzte Standardabweichung teilt; sie ist breiter als die Standardnormalverteilung und nähert sich ihr ab etwa n > 30. Die F-Verteilung ist das Verhältnis zweier Chi-Quadrat-Größen. Die Binomialverteilung B(n, p) gibt die Wahrscheinlichkeit für x Erfolge in n unabhängigen Versuchen an, mit μ = n·p und σ² = n·p·(1 − p).";

/* ── L04 Central Limit Theorem ── */
mc("dap", DAP_KI, "Was passiert, wenn man viele Verteilungen (auch nicht normalverteilte) addiert?", ["Die Summe nähert sich einer Normalverteilung", "Die Summe ist immer gleichverteilt", "Die Summe behält die Form der ersten Verteilung", "Die Summe wird immer schiefer"], "Das ist die erste Interpretation des Central Limit Theorem. Im R-Demo addiert man mehrere Gleichverteilungen und sieht im Histogramm, wie aus dem Rechteck eine Glocke wird.", "DAP L04, Folie 5 + L04_Demo_CentralLimitTheorem.R");
wf("dap", DAP_KI, "Addiert man zwei Normalverteilungen, entsteht wieder eine Normalverteilung.", true, "Richtig (Observation 2). Bei nicht normalverteilten Ausgangsverteilungen ändert sich dagegen die Form der Verteilung (Observation 1).", "DAP L04, Folie 5");
mc("dap", DAP_KI, "Warum sind z. B. Körpergrößen in der Natur oft normalverteilt?", ["Weil sich viele Zufallseinflüsse überlagern – das erklärt der zentrale Grenzwertsatz", "Weil Menschen bewusst gleich groß werden wollen", "Weil die Messgeräte normalverteilt sind", "Das ist reiner Zufall ohne Erklärung"], "Die Folie zeigt die Verteilung der Körpergrößen von Männern und Frauen in Deutschland (2006) als Beispiel.", "DAP L04, Folien 5–6");
mc("dap", DAP_KI, "Man zieht viele Stichproben aus einer beliebig verteilten Grundgesamtheit (μ, σ). Wie sind die Stichprobenmittelwerte x̄ verteilt?", ["Normalverteilt mit Mittelwert μ und Standardabweichung σ/√n", "Wie die Grundgesamtheit mit Standardabweichung σ", "Normalverteilt mit Standardabweichung σ·n", "Gleichverteilt zwischen min und max"], "Das ist die zweite Interpretation des Central Limit Theorem. Die Streuung der Mittelwerte wird mit wachsendem n kleiner – vierfache Stichprobe, halbe Streuung.", "DAP L04, Folie 9");
mc("dap", DAP_KI, "Wie groß müssen die Stichproben laut Folie sein, damit der Grenzwertsatz für die Mittelwerte greift?", ["n > 30 bei symmetrischer, n > 100 bei unsymmetrischer Verteilung", "n > 5 reicht immer", "n > 1000 in jedem Fall", "Die Stichprobengröße spielt keine Rolle"], "Je schiefer die Ausgangsverteilung, desto mehr Beobachtungen braucht man, bis die Mittelwerte normalverteilt aussehen.", "DAP L04, Folie 9");
mc("dap", DAP_KI, "Wie heißt σ/√n, die Standardabweichung der Stichprobenmittelwerte?", ["Standardfehler (Standard Error, SE)", "Varianz", "Konfidenzniveau", "Freiheitsgrad"], "Der Standardfehler misst, wie stark der Stichprobenmittelwert vermutlich vom Mittelwert der Grundgesamtheit abweicht. Bei unbekanntem σ schätzt man ihn mit s/√n.", "DAP L05, Folie 13");
pair("dap", DAP_KI, "Konfidenzintervall – ordne zu.", [["Konfidenzniveau γ", "Fläche unter f(z) zwischen −z und +z"], ["Signifikanzniveau α", "Fläche in den beiden Rändern außerhalb von ±z"], ["Zusammenhang", "γ = 1 − α"]], "Typisch ist γ = 0,95 bzw. α = 0,05. Man wählt γ, und daraus folgt der passende z- oder t-Wert.", "DAP L04, Folie 14");
mc("dap", DAP_KI, "Für γ = 0,95 nimmt man z = 1,96. Bei welchem Wert der Tabelle Φ(z) liest man ab?", ["Φ(z) = 0,975", "Φ(z) = 0,95", "Φ(z) = 0,05", "Φ(z) = 0,5"], "Die Tabelle gibt die Fläche von −∞ bis z an. Damit zwischen −z und +z 95 % liegen, müssen in jedem Rand 2,5 % fehlen, also Φ(z) = 0,975.", "DAP L04, Folie 16");
pair("dap", DAP_KI, "Welcher z-Wert gehört zum Konfidenzniveau?", [["γ = 0,90", "z ≈ 1,645"], ["γ = 0,95", "z ≈ 1,96"], ["γ = 0,99", "z ≈ 2,576"]], "Je sicherer man sein will, desto breiter wird das Intervall. Die Folie zeigt außerdem: ±2σ entsprechen etwa 95,5 %.", "DAP L04, Folien 13 und 16");
mc("dap", DAP_KI, "Wie lautet das Konfidenzintervall für den Mittelwert, wenn σ der Grundgesamtheit bekannt ist?", ["[x̄ − z·σ/√n ; x̄ + z·σ/√n]", "[x̄ − z·σ ; x̄ + z·σ]", "[x̄ − t·s/√n ; x̄ + t·s/√n]", "[μ − z·σ/n ; μ + z·σ/n]"], "Mit unbekanntem σ ersetzt man σ durch s und z durch t (Variante aus L05). Ohne √n bekäme man das Streuband einzelner Werte, nicht des Mittelwerts.", "DAP L04, Folie 15");
mc("dap", DAP_KI, "Folienbeispiel: 10 Studentinnen, x̄ = 170 cm, σ = 6,2 cm bekannt, γ = 0,95. Welches Intervall ergibt sich?", ["[166,1 ; 173,9] cm", "[157,8 ; 182,2] cm", "[165,6 ; 174,4] cm", "[169,4 ; 170,6] cm"], "170 ± 1,96 · 6,2/√10 = 170 ± 3,84. [157,8; 182,2] wäre ohne √10 gerechnet, [165,6; 174,4] ist die t-Variante aus L05.", "DAP L04, Folie 16");
wf("dap", DAP_KI, "Konfidenzintervalle mit bekannter Standardabweichung σ kommen in der Praxis sehr häufig vor.", false, "Falsch – laut Folie sehr selten, weil man σ der Grundgesamtheit meist nicht kennt. Der Fall dient als Einstieg ins Prinzip: eine Größe mit bekannter Verteilung bilden (später Teststatistik) und mit deren Wahrscheinlichkeiten rechnen.", "DAP L04, Folie 17");
mc("dap", DAP_KI, "Was bedeutet „degrees of freedom“ (Freiheitsgrade)?", ["Die Anzahl unabhängiger Informationen: Stichprobengröße minus bereits geschätzte Parameter", "Immer genau die Stichprobengröße n", "Die Zahl der Variablen im Datensatz", "Die Zahl der Nachkommastellen"], "Beispiel der Folie: 4 Werte haben 4 Freiheitsgrade. Kennt man den Mittelwert, sind nur noch 3 Werte frei, mit Mittelwert und Varianz nur noch 2.", "DAP L04, Folien 19–20");
mc("dap", DAP_KI, "Warum teilt man bei der Stichprobenvarianz s² durch n − 1 statt durch n?", ["Sonst würde man die Varianz der Grundgesamtheit systematisch unterschätzen – ein Freiheitsgrad ist durch den Mittelwert schon verbraucht", "Damit das Ergebnis eine ganze Zahl wird", "Weil der erste Wert nicht zählt", "Weil R das so verlangt"], "Der Mittelwert wurde aus denselben Daten berechnet. Deshalb sind die Abweichungen nicht mehr ganz unabhängig, und es bleiben n − 1 Freiheitsgrade.", "DAP L04, Folie 21");

/* ── L05 Testverteilungen ── */
pair("dap", DAP_TV, "Welche Testverteilung entsteht? Ordne zu.", [["X₁² + X₂² + … + Xₙ² mit Xᵢ ~ N(0, 1)", "Chi-Quadrat-Verteilung, df = n"], ["X / √(Y/n) mit X ~ N(0, 1), Y ~ χ²(n)", "t-Verteilung, df = n"], ["(V₁/m) / (V₂/k) mit V₁, V₂ ~ χ²", "F-Verteilung, df = m, k"]], "Das ist die Übersichtstabelle der Vorlesung. Anwendung: Zähler von Varianzen sind χ²-verteilt, Teststatistiken der Form „normalverteilte Größe durch Standardabweichung“ t-verteilt, Verhältnisse zweier Fehlerquadratsummen F-verteilt.", "DAP L05, Folien 6 und 10");
pair("dap", DAP_TV, "Kennwerte der Testverteilungen – ordne zu.", [["χ²-Verteilung (df = n)", "μ = n, σ² = 2n"], ["t-Verteilung (df = n)", "μ = 0, symmetrisch um null"], ["Binomialverteilung B(n, p)", "μ = n·p, σ² = n·p·(1 − p)"]], "Die t-Varianz ist n/(n − 2), also etwas größer als 1 – sie ist breiter als die Standardnormalverteilung.", "DAP L05, Folien 4, 6 und 17");
mc("dap", DAP_TV, "Wie verändert sich die Chi-Quadrat-Verteilung mit wachsender Zahl der Freiheitsgrade?", ["Sie wird der Normalverteilung immer ähnlicher", "Sie wird immer schiefer", "Sie wird zur Gleichverteilung", "Sie bleibt unverändert"], "Im R-Demo quadriert man normalverteilte Werte und addiert immer weitere. Das Histogramm wandert nach rechts und wird symmetrischer.", "DAP L05, Folie 4 + L05_Demo_Test_distributions.R");
mc("dap", DAP_TV, "Wie unterscheidet sich die t-Verteilung von der Standardnormalverteilung?", ["Sie ist etwas breiter und nähert sich der Normalverteilung ab etwa n > 30 an", "Sie ist schmaler und höher", "Sie ist nur für positive Werte definiert", "Sie ist schief nach rechts"], "Das R-Demo zeichnet t-Verteilungen mit df = 2, 5, 25 neben die Standardnormalverteilung: Je kleiner df, desto dicker die Ränder.", "DAP L05, Folien 8–9");
mc("dap", DAP_TV, "Warum ist das t-Intervall breiter als das z-Intervall?", ["Weil s selbst eine Zufallsgröße ist – σ wird nur geschätzt, das bringt zusätzliche Unsicherheit", "Weil man mit n statt √n rechnet", "Weil t immer doppelt so groß ist wie z", "Weil die t-Verteilung schief ist"], "Für dasselbe γ ist t bei kleinen Stichproben größer als z, zum Beispiel t = 2,26 bei df = 9 statt z = 1,96.", "DAP L05, Folie 13");
mc("dap", DAP_TV, "Konfidenzintervall für μ mit unbekanntem σ: Wie viele Freiheitsgrade hat der t-Wert bei n = 10?", ["m = 9", "m = 10", "m = 11", "m = 8"], "m = n − 1, weil die Varianz s² schon aus der Stichprobe berechnet wurde. Für γ = 0,95 und m = 9 ist t = 2,26.", "DAP L05, Folie 12");
mc("dap", DAP_TV, "Gleiches Beispiel wie in L04, aber s = 6,2 cm aus der Stichprobe (n = 10, γ = 0,95). Welches Intervall?", ["[165,6 ; 174,4] cm", "[166,1 ; 173,9] cm", "[168,6 ; 171,4] cm", "[156,0 ; 184,0] cm"], "170 ± 2,26 · 6,2/√10 = 170 ± 4,43. Das Intervall ist breiter als mit bekanntem σ ([166,1; 173,9]). In R liefert t.test(cm, conf.level = 0.95) dasselbe.", "DAP L05, Folien 14–15");
mc("dap", DAP_TV, "Binomialverteilung: Was gibt der Binomialkoeffizient (n über x) an?", ["Die Zahl der Möglichkeiten, genau x Erfolge auf n Versuche zu verteilen", "Die Wahrscheinlichkeit eines einzelnen Erfolgs", "Den Mittelwert n·p", "Die Zahl der Misserfolge"], "Formel: n! / (x! (n − x)!). Multipliziert mit pˣ(1 − p)ⁿ⁻ˣ, der Wahrscheinlichkeit jeder einzelnen Anordnung, ergibt sich P(x).", "DAP L05, Folie 18");
mc("dap", DAP_TV, "Wie wahrscheinlich sind genau zwei Sechsen bei fünf Würfen?", ["≈ 16 %", "≈ 1,6 %", "≈ 33 %", "≈ 40 %"], "(5 über 2) = 10 Anordnungen, jede mit (1/6)² · (5/6)³ ≈ 0,016. 10 · 0,016 ≈ 0,16. In R: dbinom(2, size = 5, prob = 1/6).", "DAP L05, Folie 18 + L05_Demo_Test_distributions.R");
pair("dap", DAP_TV, "Zehnmal würfeln – erwartete Zahl der Erfolge μ = n·p. Ordne zu.", [["Eine 1 würfeln (p = 1/6)", "μ ≈ 1,67"], ["Eine 1 oder 2 (p = 2/6)", "μ ≈ 3,33"], ["Gerade Zahl (p = 3/6)", "μ = 5"]], "Je näher p an 0,5 liegt, desto symmetrischer ist die Binomialverteilung.", "DAP L05, Folie 17");
mc("dap", DAP_KI, "Wie lautet das Konfidenzintervall für einen Anteil p in der Grundgesamtheit?", ["[p̄ − t·√(p̄(1 − p̄)/n) ; p̄ + t·√(p̄(1 − p̄)/n)]", "[p̄ − t·p̄/√n ; p̄ + t·p̄/√n]", "[p̄ − z·√(n·p̄) ; p̄ + z·√(n·p̄)]", "[0 ; p̄]"], "p̄ ist der Anteil in der Stichprobe, t der Wert der t-Verteilung zu γ mit m = n − 1 Freiheitsgraden.", "DAP L05, Folie 25");
mc("dap", DAP_KI, "Warum nimmt man beim Anteils-Intervall t statt z?", ["Weil die unbekannte Streuung mit dem Stichprobenanteil p̄ geschätzt wird – das bringt zusätzliche Unsicherheit", "Weil Anteile immer t-verteilt sind", "Weil z nur für Mittelwerte über 100 gilt", "Weil t kleiner ist als z"], "σ = √(n·p·(1 − p)) hängt vom gesuchten p ab. Man setzt p̄ ein und gleicht das mit t aus.", "DAP L05, Folie 24");
mc("dap", DAP_KI, "200 Studierende, 180 mit Führerschein, γ = 0,95 (t = 1,97). Welches Intervall gilt für den Anteil?", ["[0,86 ; 0,94]", "[0,80 ; 1,00]", "[0,89 ; 0,91]", "[0,70 ; 0,95]"], "p̄ = 0,9; √(0,9 · 0,1/200) = 0,0212; 1,97 · 0,0212 = 0,042. Also 0,9 ± 0,04.", "DAP L05, Folie 26");
wf("dap", DAP_KI, "Das t-Intervall für Anteile ist besonders genau, wenn n klein und p nahe 0 oder 1 ist.", false, "Falsch. Die Näherung durch eine symmetrische Verteilung passt gut bei großem n und p um 0,5. Bei kleinem n und p nahe 0 oder 1 ist die Binomialverteilung schief; dann liefern genauere Verfahren wie Clopper-Pearson (R: BinomCI) unsymmetrische Intervalle.", "DAP L05, Folie 28");
pair("dap", DAP_KI, "Deskriptive oder induktive Statistik? Ordne zu.", [["Deskriptive Statistik", "beschreibt vorliegende Daten mit Kennzahlen und Diagrammen"], ["Induktive Statistik", "schließt von einer Stichprobe auf die Grundgesamtheit"], ["Konfidenzintervall, statistischer Test", "typische Methoden der induktiven Statistik"], ["Mittelwert, Varianz, Balkendiagramm", "typische Methoden der deskriptiven Statistik"]], "Mit L05 beginnt der induktive Teil: Ab jetzt geht es darum, wie sicher Aussagen über die Grundgesamtheit sind.", "DAP L05, Folie 29");
pair("dap", DAP_KI, "Welche R-Funktion macht was (L05-Demo)?", [["qt(0.975, 199)", "t-Wert für γ = 0,95 und 199 Freiheitsgrade"], ["dbinom(2, size = 5, prob = 1/6)", "Wahrscheinlichkeit für genau 2 Erfolge"], ["t.test(x, conf.level = 0.95)", "Konfidenzintervall für den Mittelwert"], ["BinomCI(…, method = \"clopper-pearson\")", "genaues Intervall für einen Anteil"]], "dchisq, dt und dnorm liefern die Dichten (PDF), mit curve(…) werden sie gezeichnet.", "L05_Demo_Test_distributions.R");

/* ── Exercise 3 (R, MiD-Wegedatensatz) ── */
mc("dap", DAP_R2, "Exercise 3: Wie zählst du in R die Wege mit mindestens 90 Minuten Dauer?", ["nrow(wege[wege$wegmin_imp1 >= 90, ])", "nrow(wege$wegmin_imp1 >= 90)", "count(wege, 90)", "length(wege[ , wege$wegmin_imp1 >= 90])"], "Die Bedingung steht vor dem Komma in den eckigen Klammern, weil sie Zeilen auswählt. nrow() zählt die übrigen Zeilen.", "DAP Exercise 3, Aufgabe 1c + Week 3.R");
mc("dap", DAP_R2, "Wie wählst du Wege aus, die mit dem Rad oder zu Fuß (hvm_imp < 3) in NRW (BLAND == 5) stattfanden?", ["wege[wege$hvm_imp < 3 & wege$BLAND == 5, ]", "wege[wege$hvm_imp < 3 | wege$BLAND == 5, ]", "wege[wege$hvm_imp < 3, wege$BLAND == 5]", "wege[hvm_imp < 3 and BLAND = 5]"], "& verknüpft beide Bedingungen (und). | wäre „oder“ und würde auch Autofahrten in NRW mitzählen.", "DAP Exercise 3, Aufgabe 1d + Week 3.R");
ord("dap", DAP_R2, "Datensatz mit den 5000 längsten Fußwegen: Bring die Befehle in die richtige Reihenfolge.", ["wege2 <- wege[wege$hvm_imp == 1, ] – nur Fußwege", "wege2 <- wege2[order(-wege2$wegkm_imp), ] – absteigend nach Länge sortieren", "head(wege2, n = 5000) – die ersten 5000 Zeilen nehmen"], "Das Minus in order(-…) sortiert absteigend. Ohne vorheriges Sortieren lieferte head() nur irgendwelche 5000 Wege.", "DAP Exercise 3, Aufgabe 2 + Week 3.R");
pair("dap", DAP_R2, "Runden in R – ordne zu (Wert 3,4 km).", [["round(3.4)", "3 – kaufmännisch runden"], ["floor(3.4)", "3 – abrunden"], ["ceiling(3.4)", "4 – aufrunden"]], "Für die Klassenbildung in Aufgabe 4a ist ceiling() gefragt: Die Klasse „4“ heißt dann „über 3 bis 4 km“.", "DAP Exercise 3, Aufgabe 4a + Week 3.R");
mc("dap", DAP_R2, "Wie ersetzt du die Codes 1, 2, 3 … der Altersgruppe durch lesbare Bezeichnungen?", ["factor(x, levels = c(1, 2, …), labels = c(\"0-17 years\", …))", "rename(x, \"0-17 years\")", "as.numeric(x, labels = …)", "colnames(x) <- c(\"0-17 years\", …)"], "factor() ordnet jedem Code (levels) eine Bezeichnung (labels) zu. colnames() benennt dagegen Spalten um – das war Aufgabe 3b.", "DAP Exercise 3, Aufgabe 4b + Week 3.R");
mc("dap", DAP_R2, "Was bewirkt prop.table(table(alter, klasse), 1) * 100?", ["Zeilenprozente: Jede Altersgruppe summiert sich auf 100 %", "Spaltenprozente: Jede Wegelängenklasse summiert sich auf 100 %", "Gesamtprozente der ganzen Tabelle", "Die absolute Häufigkeit mal 100"], "Das zweite Argument wählt die Richtung: 1 = Zeilen, 2 = Spalten. Ohne Argument bezieht sich der Anteil auf die ganze Tabelle.", "DAP Exercise 3, Aufgabe 4c + Week 3.R");
mc("dap", DAP_R2, "Wie berücksichtigst du in der Kreuztabelle die Gewichtungsfaktoren W_GEW?", ["wtd.table(alter, klasse, weights = W_GEW) aus dem Paket questionr", "table(alter, klasse) * W_GEW", "Gar nicht, Gewichte gelten nur für Mittelwerte", "mean(table(alter, klasse), W_GEW)"], "Gewichtete Häufigkeiten korrigieren Schichtung und Ausfälle (Thema L02). Danach geht es wie gewohnt mit prop.table weiter.", "DAP Exercise 3, Aufgabe 4d + Week 3.R");

/* ── Lösungsweg-Aufgabe ── */
aufgabe({
 "id": "dap-l05-ki-mittel", "f": "dap", "t": DAP_TV, "titel": "Konfidenzintervall für einen Mittelwert", "s": "DAP L04/L05 (eigenes Zahlenbeispiel)",
 "angabe": "Bei 25 zufällig ausgewählten Pendlern wird die tägliche Wegezeit gemessen: x̄ = 50 min. Gesucht ist das 95-%-Konfidenzintervall für die mittlere Wegezeit aller Pendler. Variante a: σ = 10 min ist aus einer Großerhebung bekannt. Variante b: σ ist unbekannt, die Stichprobe liefert s = 10 min.",
 "geg": ["n = 25", "x̄ = 50 min", "σ bzw. s = 10 min", "γ = 0,95"],
 "ges": "Konfidenzintervall in beiden Varianten",
 "schritte": [
  { "f": "Wie groß ist der Standardfehler?", "o": [
    ["σ/√n = 10/√25 = 2 min", "Die Mittelwerte streuen um den Faktor √n weniger als die Einzelwerte."],
    ["σ/n = 10/25 = 0,4 min", "Geteilt wird durch √n, nicht durch n."],
    ["σ = 10 min", "Das ist die Streuung einzelner Wegezeiten, nicht die des Mittelwerts."],
    ["σ²/n = 100/25 = 4 min", "Das wäre die Varianz des Mittelwerts (in min²), nicht die Standardabweichung."]],
   "r": "SE = 2 min" },
  { "f": "Variante a (σ bekannt): Welcher Faktor und welches Intervall?", "o": [
    ["z = 1,96 → 50 ± 3,92 = [46,1 ; 53,9] min", "σ bekannt → Standardnormalverteilung, Φ(z) = 0,975."],
    ["z = 1,645 → [46,7 ; 53,3] min", "1,645 gehört zu γ = 0,90."],
    ["t = 2,06 → [45,9 ; 54,1] min", "t braucht man nur, wenn σ geschätzt wird."],
    ["z = 1,96 → 50 ± 19,6 = [30,4 ; 69,6] min", "Hier fehlt √n – das wäre das Band für einzelne Pendler."]],
   "r": "[46,1 ; 53,9] min" },
  { "f": "Variante b (σ unbekannt): Welche Verteilung und wie viele Freiheitsgrade?", "o": [
    ["t-Verteilung mit m = n − 1 = 24", "s ist eine Schätzung, ein Freiheitsgrad ist durch den Mittelwert verbraucht."],
    ["t-Verteilung mit m = 25", "m = n − 1, nicht n."],
    ["Standardnormalverteilung, weil n > 20", "Die Folie nennt n > 30 als grobe Grenze; korrekt ist trotzdem die t-Verteilung."],
    ["χ²-Verteilung mit 24 Freiheitsgraden", "χ² beschreibt Varianzen, nicht den standardisierten Mittelwert."]],
   "r": "t(0,975; 24) = 2,064" },
  { "f": "Welches Intervall ergibt sich in Variante b?", "o": [
    ["50 ± 2,064 · 2 = [45,9 ; 54,1] min", "Etwas breiter als mit bekanntem σ, weil t > z."],
    ["50 ± 1,96 · 2 = [46,1 ; 53,9] min", "Das ist Variante a."],
    ["50 ± 2,064 · 10 = [29,4 ; 70,6] min", "Der Standardfehler s/√n fehlt."],
    ["50 ± 2,064 / 2 = [49,0 ; 51,0] min", "Mit dem Standardfehler wird multipliziert, nicht durch ihn geteilt."]],
   "r": "[45,9 ; 54,1] min" }],
 "fazit": "Rezept: Standardfehler σ/√n bzw. s/√n · passenden Faktor z oder t(m = n − 1) wählen · x̄ ± Faktor · Standardfehler. Unbekanntes σ → t → breiteres Intervall."
});
/* Patch-Warteschlange · Bauinformatik · Vorlesung Block 3 Felder (Arrays), lineare und binäre Suche (Folien 107–117) + Übungsblatt 04 Vergleichsoperatoren, logische Operatoren, if-else, switch (16.–20.11.) · erstellt 17.11.2026 · alle Code-Ausgaben mit javac/java ausgeführt und geprüft */
const BINF_AR = "Felder und Suchen";
THEMEN["binf|Felder und Suchen"] = "Ein Feld (Array) ist eine Liste von Variablen desselben Typs mit fester Länge, zum Beispiel int[] noten = new int[6]. Die Elemente spricht man über ihren Index an, und der beginnt in Java immer bei 0 – das letzte Element hat also den Index length − 1, ein Zugriff daneben löst eine ArrayIndexOutOfBoundsException aus. Zweidimensionale Felder sind Matrizen: erster Index Zeile, zweiter Spalte. Hilfreich sind die Kurzdeklaration mit geschweiften Klammern, .length, Arrays.toString und System.arraycopy. Beim Suchen prüft die lineare Suche ein Element nach dem anderen (schlimmstenfalls n Schritte), die binäre Suche halbiert bei einer sortierten Liste den Bereich in jedem Durchlauf (schlimmstenfalls log₂ n Schritte).";

/* ── Block 3: Felder ── */
mc("binf", BINF_AR, "Wozu braucht man ein Feld (Array)?", ["Um viele Werte desselben Typs unter einem Namen zu speichern und über einen Index anzusprechen", "Um Werte verschiedener Typen beliebig zu mischen", "Um eine Variable mit unbegrenzter Länge zu haben", "Um Kommazahlen genauer zu speichern"], "Statt note_1, note_2, note_3 … für jede Note eine eigene Variable anzulegen, nimmt man int[] noten. Ein Array hat einen Namen, einen Datentyp und eine feste Länge.", "Bauinformatik Block 3, Folie 107");
pair("binf", BINF_AR, "Was macht die Zeile? Ordne zu.", [["int[] noten;", "Deklaration – noch kein Speicher"], ["noten = new int[6];", "Erzeugung mit 6 Elementen"], ["int[] noten = new int[6];", "Deklaration und Erzeugung in einem"], ["int[] noten = {1, 2, 3};", "Kurzdeklaration mit Startwerten"]], "Die eckigen Klammern hinter dem Typ zeigen, dass es ein (eindimensionales) Feld ist. Die Zahl in new int[6] ist die Länge.", "Bauinformatik Block 3, Folien 108 und 111");
mc("binf", BINF_AR, "int[] noten = new int[6]; Welchen Index hat das letzte Element?", ["5", "6", "1", "0"], "Die Indexzählung beginnt in Java immer bei 0. Element 1 hat Index 0, Element 6 hat Index 5 – allgemein noten.length − 1.", "Bauinformatik Block 3, Folie 109");
mc("binf", BINF_AR, "Was passiert bei noten[6] = 3; wenn noten die Länge 6 hat?", ["Eine ArrayIndexOutOfBoundsException wird ausgelöst", "Das Feld wird automatisch verlängert", "Der Wert landet im ersten Element", "Nichts, die Zeile wird ignoriert"], "Index 6 gibt es nicht (gültig sind 0 bis 5). Java prüft das zur Laufzeit; der Compiler meldet es nicht.", "Bauinformatik Block 3, Folie 109");
mc("binf", BINF_AR, "int[] a = new int[3]; a[0] = 4; a[1] = 7; a[2] = a[1] + 1; – Welchen Wert hat a[2]?", ["8", "5", "7", "3"], "a[1] ist 7, plus 1 ergibt 8. So zeigt es auch die Folie: noten[2] = noten[1] + 1.", "Bauinformatik Block 3, Folie 109");
mc("binf", BINF_AR, "double[][] feld = new double[3][5]; – Was bedeuten die Zahlen?", ["3 Zeilen und 5 Spalten", "3 Spalten und 5 Zeilen", "Werte von 3 bis 5", "Ein Feld mit 8 Elementen"], "Der erste Index ist die Zeile, der zweite die Spalte. Das Feld hat 3 · 5 = 15 Elemente, feld[2][4] ist das letzte.", "Bauinformatik Block 3, Folie 110");
pair("binf", BINF_AR, "double[][] feld = new double[3][5]; – Was liefert der Ausdruck?", [["feld.length", "3 – Anzahl der Zeilen"], ["feld[0].length", "5 – Anzahl der Spalten"], ["feld[2][4]", "letztes Element unten rechts"]], "Ein zweidimensionales Feld ist ein Feld von Zeilen. feld[0] ist die erste Zeile, ihre Länge ist die Spaltenzahl.", "Bauinformatik Block 3, Folien 110–111");
mc("binf", BINF_AR, "int[][] m = {{1, 4, 7}, {2, 8, 1}, {9, 3, 5}}; – Welchen Wert hat m[1][2]?", ["1", "8", "7", "3"], "m[1] ist die zweite Zeile {2, 8, 1}, darin Index 2 → 1. m[2][1] wäre 3, m[0][2] wäre 7.", "Bauinformatik Block 3, Folie 111");
mc("binf", BINF_AR, "Wie gibst du ein ganzes eindimensionales Feld lesbar aus?", ["System.out.println(Arrays.toString(woche));", "System.out.println(woche);", "System.out.println(woche[]);", "System.out.println(woche.length);"], "println(woche) gibt nur eine Speicheradresse wie [Ljava.lang.String;@1b6d3586 aus. Für mehrdimensionale Felder gibt es Arrays.deepToString(feld).", "Bauinformatik Block 3, Folie 112");
mc("binf", BINF_AR, "System.arraycopy(woche, 0, arbeitswoche, 0, 5); – Was passiert?", ["Die ersten 5 Elemente von woche werden ab Index 0 nach arbeitswoche kopiert", "Das Element mit Index 5 wird kopiert", "woche wird 5-mal kopiert", "arbeitswoche wird nach woche kopiert"], "Parameter: Quellfeld (src), Startindex in der Quelle, Zielfeld (dst), Startindex im Ziel, Anzahl der Elemente. arbeitswoche enthält danach Mo bis Fr.", "Bauinformatik Block 3, Folie 113");
pair("binf", BINF_AR, "Parameter von System.arraycopy(src, src_pos, dst, dst_pos, length) – ordne zu.", [["src", "Ursprungsfeld"], ["src_pos", "Index des ersten zu kopierenden Elements"], ["dst_pos", "Zielindex für das erste Element"], ["length", "Anzahl der zu kopierenden Elemente"]], "Das Zielfeld muss vorher mit passender Länge erzeugt sein, sonst gibt es eine Exception.", "Bauinformatik Block 3, Folie 113");

/* ── Suchen ── */
mc("binf", BINF_AR, "Was versteht man unter der Zeitkomplexität eines Algorithmus?", ["Die Anzahl der Rechenschritte, die er benötigt", "Die Zeit, die man zum Programmieren braucht", "Die Uhrzeit, zu der er läuft", "Die Anzahl der Codezeilen"], "Man vergleicht den günstigsten (best case) und den ungünstigsten Fall (worst case) abhängig von der Datenmenge n.", "Bauinformatik Block 3, Folie 114");
pair("binf", BINF_AR, "Zeitkomplexität im worst case – ordne zu (n Elemente).", [["Lineare Suche", "n Schritte"], ["Binäre Suche", "log₂ n Schritte"], ["Beide im best case", "1 Schritt"]], "Bei 1000 Elementen braucht die lineare Suche schlimmstenfalls 1000 Vergleiche, die binäre nur etwa 10.", "Bauinformatik Block 3, Folien 114 und 117");
mc("binf", BINF_AR, "Was setzt die binäre Suche voraus?", ["Die Liste muss sortiert sein", "Die Liste muss eine gerade Länge haben", "Die Suchzahl muss in der Liste vorkommen", "Die Liste darf nur positive Zahlen enthalten"], "Nur in einer sortierten Liste weiß man nach dem Vergleich mit der Mitte, ob man links oder rechts weitersuchen muss.", "Bauinformatik Block 3, Folien 116–117");
mc("binf", BINF_AR, "Lineare Suche: Warum heißt die Bedingung while (i < feld.length && feld[i] != z) und nicht umgekehrt?", ["Weil && kurzschließt: Ist i schon zu groß, wird feld[i] gar nicht mehr ausgewertet", "Weil Java die Reihenfolge ohnehin vertauscht", "Weil != schneller ist als <", "Die Reihenfolge ist egal"], "Umgekehrt würde bei einer Zahl, die nicht im Feld steht, zuerst feld[14] gelesen – ArrayIndexOutOfBoundsException. Die Folie verweist dazu auf Folie 57 (Kurzschlussauswertung).", "Bauinformatik Block 3, Folie 115");
mc("binf", BINF_AR, "Lineare Suche: Woran erkennt das Programm nach der Schleife, dass z nicht im Feld steht?", ["i == feld.length", "i == 0", "feld[i] == z", "i == -1"], "Die Schleife läuft nur bis zum Ende durch, wenn kein Element gepasst hat. Sonst bricht sie bei der Fundstelle ab und gibt i + 1 Durchläufe aus.", "Bauinformatik Block 3, Folie 115");
ord("binf", BINF_AR, "Binäre Suche: Bring einen Durchlauf in die richtige Reihenfolge.", ["mitte = anfang + (ende − anfang) / 2 berechnen", "Ist z == feld[mitte]? → gefunden, Schleife mit break beenden", "Sonst: Ist z < feld[mitte]? → ende = mitte − 1", "Sonst: anfang = mitte + 1", "Zähler k um 1 erhöhen und nächster Durchlauf"], "Vor der Schleife: anfang = 0, ende = feld.length − 1, k = 1. Die Schleife ist while(true) und endet nur über break.", "Bauinformatik Block 3, Folie 117");
mc("binf", BINF_AR, "Liste {1, 3, 4, 5, 7, 11, 12, 27, 29, 30, 33, 35, 47, 49}, gesucht 11. Welches Element prüft die binäre Suche im ersten Durchlauf?", ["12 (Index 6)", "11 (Index 5)", "27 (Index 7)", "1 (Index 0)"], "anfang = 0, ende = 13, mitte = 0 + 13/2 = 6 (Ganzzahldivision). feld[6] = 12 > 11, also geht es links weiter mit ende = 5.", "Bauinformatik Block 3, Folie 116");
mc("binf", BINF_AR, "Gleiche Liste, gesucht 11: Nach wie vielen Durchläufen findet die binäre Suche die Zahl?", ["4", "6", "3", "1"], "Mitten: Index 6 (12) → 2 (4) → 4 (7) → 5 (11). Die lineare Suche bräuchte 6 Vergleiche.", "Bauinformatik Block 3, Folie 116 (mit Java nachgeprüft)");

/* ── Übung 04: Vergleichs- und logische Operatoren ── */
mc("binf", I4, "Übung 4, A1a: int a = 10, b = 11, c = 10; – Welcher Ausdruck ergibt false?", ["(a==b) && (a==c)", "a/c == 1", "(a==b) || (a==c)", "a != b"], "a == b ist false, a == c ist true. Bei && müssen beide Teile stimmen → false, bei || reicht einer → true. a/c ist 10/10 = 1 (Ganzzahldivision), also ist a/c == 1 true.", "Bauinformatik Übung 04, Aufgabe 1a (mit Java geprüft)");
mc("binf", I4, "float f = 2.0000000000001f; double d = 2.0000000000001; – Was ergeben f == 2 und d == 2?", ["f == 2 ist true, d == 2 ist false", "beide true", "beide false", "f == 2 ist false, d == 2 ist true"], "float hat nur etwa 7 gültige Stellen: Die winzige Abweichung geht verloren, f ist genau 2.0. double mit etwa 16 Stellen kann sie noch speichern. Kommazahlen deshalb besser nicht mit == vergleichen.", "Bauinformatik Übung 04, Aufgabe 1a");
mc("binf", I4, "Übung 4, A1b: boolean A = false, B = true, C = true; – Welcher Ausdruck ergibt false?", ["A && B", "A || B", "!A", "A || B && C"], "&& braucht zwei wahre Seiten, A ist aber false. A || B && C wird als A || (B && C) = false || true = true ausgewertet.", "Bauinformatik Übung 04, Aufgabe 1b (mit Java geprüft)");
mc("binf", I4, "Welcher Operator wird in A || B && C zuerst ausgewertet?", ["&& – er bindet stärker als ||", "|| – weil er links steht", "Beide gleichzeitig", "Das hängt vom Wert von A ab"], "Wie Punkt- vor Strichrechnung: && vor ||. Wer es anders will, setzt Klammern: (A || B) && C.", "Bauinformatik Übung 04, Aufgabe 1b");

/* ── Übung 04: if-else und switch ── */
mc("binf", BINF_KS, "Übung 4, A3: Welche Bedingung erkennt sicher ungerade Zahlen, auch negative?", ["a % 2 != 0", "a % 2 == 1", "a / 2 == 1", "a % 2 == -1"], "In Java hat der Rest das Vorzeichen des Dividenden: −7 % 2 ergibt −1, nicht 1. Mit a % 2 == 1 würde −7 fälschlich als gerade gelten.", "Bauinformatik Übung 04, Aufgabe 3 (mit Java geprüft)");
mc("binf", BINF_KS, "Übung 4, A3c: Wie prüfst du, ob a durch 7 teilbar ist?", ["if (a % 7 == 0)", "if (a / 7 == 0)", "if (a % 7 == 1)", "if (a == 7)"], "Teilbar heißt: kein Rest. a / 7 == 0 gilt nur für Zahlen von −6 bis 6.", "Bauinformatik Übung 04, Aufgabe 3c");
mc("binf", BINF_KS, "WhatsYourNumber: Welche Zahlen liefert (int)(Math.random() * 5 + 1)?", ["Ganze Zahlen von 1 bis 5", "Ganze Zahlen von 0 bis 5", "Ganze Zahlen von 1 bis 6", "Kommazahlen von 1 bis 5"], "Math.random() liegt in [0; 1), mal 5 in [0; 5), plus 1 in [1; 6). Der Cast schneidet ab → 1, 2, 3, 4 oder 5.", "Bauinformatik Übung 04, Aufgabe 4");
mc("binf", BINF_KS, "Warum steht in WhatsYourNumber Integer.parseInt(zahlTxt)?", ["showInputDialog liefert einen String – parseInt macht daraus eine int-Zahl zum Vergleichen", "Damit die Eingabe in Großbuchstaben erscheint", "Um eine Zufallszahl zu erzeugen", "Weil int-Werte nicht verglichen werden können"], "Ein String \"3\" ist nicht dasselbe wie die Zahl 3. Erst nach der Umwandlung funktioniert number == zahlInt.", "Bauinformatik Übung 04, Aufgabe 4");
ord("binf", BINF_KS, "WhatsYourNumber mit Tipp (A5): Bring die Prüfungen in eine sinnvolle Reihenfolge.", ["Zufallszahl erzeugen und Zahl einlesen", "if (number == zahlInt) → „Super getippt!“", "else if (number > zahlInt) → „Nein, meine Zahl ist größer als deine!“", "else → „Nein, meine Zahl ist kleiner als deine!“"], "Nach Gleichheit und „größer“ bleibt nur noch „kleiner“ übrig – dafür reicht ein einfaches else.", "Bauinformatik Übung 04, Aufgabe 5");
mc("binf", BINF_KS, "Mini-Taschenrechner (A6): Wo fängst du die Division durch 0 ab?", ["Im case \"/\" mit if (zahl2 == 0) vor der Division", "Gar nicht, Java gibt dann 0 aus", "Im default-Zweig", "Vor dem switch für alle Operatoren"], "So zeigt es das Struktogramm: Nur im Zweig „/“ steht die Abfrage „Nenner == 0?“. Bei int-Division durch 0 bricht Java mit einer ArithmeticException ab.", "Bauinformatik Übung 04, Aufgabe 6a");
mc("binf", BINF_KS, "Wofür ist der default-Zweig im Taschenrechner da?", ["Für unbekannte Operatoren: System.err.println(\"Unbekannter Operator \" + operator)", "Für die Addition als Standardfall", "Für die Division durch null", "Er wird nach jedem case zusätzlich ausgeführt"], "System.err.println schreibt auf den Fehlerkanal, die Konsole zeigt das rot an.", "Bauinformatik Übung 04, Aufgabe 6a");
mc("binf", BINF_KS, "A6b: Der Doppelpunkt „:“ soll auch dividieren. Wie geht das mit einer Zeile?", ["case \":\" direkt über case \"/\" schreiben, ohne break dazwischen", "Einen zweiten switch einbauen", "Den default-Zweig umschreiben", "Das geht in Java nicht"], "Fehlt das break, läuft Java in den nächsten case weiter (Fall-through). So teilen sich \":\" und \"/\" denselben Code.", "Bauinformatik Übung 04, Aufgabe 6b");
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
/* Patch-Warteschlange · Anmerkungen aus der App (Issues #11–#13, Tom 18.11.2026) · Frage-IDs und Lernstand bleiben (KORREKTUR) · neue Skizzen „torricelli“ und „sparren“ in FIG */
Object.assign(KORREKTUR, {
 /* #11 Unklar erklärt: Torricelli verständlicher formuliert + Skizze in der Erklärung */
 "hydro-19q2zaw": {
  "q": "Aus einer kleinen Öffnung tief unten in einem sehr großen, offenen Behälter fließt Wasser aus. Der Wasserspiegel steht h über der Öffnung. Wie schnell tritt das Wasser aus?",
  "a": ["v = √(2·g·h)", "v = 2·g·h", "v = g·h / 2", "v = √(g / h)"],
  "e": "Energiesatz (Bernoulli) vom Wasserspiegel zur Öffnung: Am Spiegel ist der Druck null (Atmosphäre) und das Wasser steht praktisch still, weil der Behälter sehr groß ist. An der Öffnung ist der Druck ebenfalls null. Die ganze Höhe h wird also zu Geschwindigkeitshöhe: h = v²/(2g), daraus v = √(2·g·h) – genauso schnell wie ein Stein, der h tief fällt (Torricelli). Beispiel: h = 5 m → v ≈ 9,9 m/s.",
  "ev": "torricelli"
 },
 /* #12 Sonstiges „Was soll mir die Frage bringen?“ → statt Zahlen aus Übung 3 auswendig: was die Beiwerte bedeuten */
 "bauko-bqaea4": {
  "q": "Lastfallkombination im GZT: Wofür steht welcher Beiwert?",
  "pairs": [["γ_G = 1,35", "Sicherheitsbeiwert für ständige Lasten (Eigengewicht)"], ["γ_Q = 1,5", "Sicherheitsbeiwert für veränderliche Lasten"], ["ψ₀ = 0,5", "Kombinationsbeiwert Schnee (bis 1000 m ü. NN)"], ["ψ₀ = 0,6", "Kombinationsbeiwert Wind"]],
  "e": "Die ständige Last bekommt immer γ_G. Von den veränderlichen Lasten nimmt man eine als Leiteinwirkung voll mit γ_Q. Alle anderen sind Begleiteinwirkungen und werden zusätzlich mit ψ₀ abgemindert, weil es unwahrscheinlich ist, dass Schnee und Sturm gleichzeitig ihren Höchstwert erreichen. Beispiel Schnee führend: 1,35·g + 1,5·s + 1,5·0,6·w. Die Werte stehen im Schneider (Kap. 3, Grundlagen der Tragwerksplanung) und werden in jeder Holzbau-Aufgabe der Klausur gebraucht.",
  "s": "Baukonstruktion V01/V02 + Übung 3 (Kombinationsregeln, Schneider Kap. 3)"
 },
 /* #13 Sonstiges: allgemein statt mit Zahlen aus Übung 4 + Skizze in der Erklärung */
 "bauko-1uhx4lc": {
  "q": "Ein geneigter Sparren wird mit Lasten senkrecht zur Dachfläche (q⊥) berechnet. Welche Spannweite setzt du für Biegung und Durchbiegung an?",
  "a": ["Die schräge Länge entlang des Sparrens: l = √(lₕ² + h²)", "Die waagerechte Stützweite lₕ im Grundriss", "Die ganze Sparrenlänge mit Dachüberständen", "Die Dachbreite von Traufe zu Traufe"],
  "e": "Lasten und Spannweite müssen zusammenpassen: Wirkt die Last senkrecht zum Sparren, gehört dazu die Länge entlang des Sparrens. Rechnest du stattdessen mit der waagerechten Länge lₕ, musst du auch die Last auf den Grundriss beziehen. Beispiel aus Übung 4: lₕ = 3,58 m, h = 2,57 m → l = √(3,58² + 2,57²) = 4,41 m. Dachüberstände (Kragarme) wurden dort vernachlässigt.",
  "ev": "sparren"
 }
});
/* Klausurduell – Patch-Warteschlange 18.11.2026: Skizzen zu bestehenden Fragen
   Ergänzt bei 219 Fragen eine Skizze in der Erklärung (Feld ev). Die Skizzen selbst stehen in „2026-11-18 neue Skizzen (FIG).js“.
   Zusammenführung: bestehende KORREKTUR-Einträge bleiben erhalten, nur ev kommt dazu. */
(() => {
  const SKIZZE = {
    /* Baukonstruktion */
    "bauko-1883085": "dachtypen",
    "bauko-1jejwky": "dachtypen",
    "bauko-1m13nn": "dachtypen",
    "bauko-1r5f7xj": "dachtypen",
    "bauko-1v63z1r": "dachtypen",
    "bauko-21co2t": "dachtypen",
    "bauko-1c4tkbo": "einzug",
    "bauko-bkwlyp": "einzug",
    "bauko-e89w9q": "einzug",
    "bauko-fgx8xm": "einzug",
    "bauko-hh3tz9": "einzug",
    "bauko-mhml0r": "einzug",
    "bauko-oap232": "einzug",
    "bauko-13ifley": "euler",
    "bauko-13tw3uu": "euler",
    "bauko-1dgqnq3": "euler",
    "bauko-1lphf7a": "euler",
    "bauko-1t3nigh": "euler",
    "bauko-60rqbd": "euler",
    "bauko-iwmgkv": "euler",
    "bauko-jwzyu2": "euler",
    "bauko-x5dkof": "euler",
    "bauko-153j3bt": "feldweise",
    "bauko-1lu3ok2": "feldweise",
    "bauko-6xtjz2": "feldweise",
    "bauko-l3bglf": "feldweise",
    "bauko-1xirmdj": "gerber",
    "bauko-30149g": "gerber",
    "bauko-irixtk": "gerber",
    "bauko-12mi4sw": "grundriss",
    "bauko-1q069cb": "grundriss",
    "bauko-1rof51c": "grundriss",
    "bauko-zfmokj": "grundriss",
    "bauko-161g8ca": "holzdecke",
    "bauko-1dm1f12": "holzdecke",
    "bauko-7a30uo": "kerve",
    "bauko-ax85c8": "kerve",
    "bauko-bmok3": "kerve",
    "bauko-19ou21o": "lastweg",
    "bauko-7f3ih6": "lastweg",
    "bauko-ts9wal": "lichteweite",
    "bauko-1f6u3op": "momente",
    "bauko-4twmxe": "momente",
    "bauko-7oyli2": "momente",
    "bauko-7td1c6": "momente",
    "bauko-lnxwia": "momente",
    "bauko-1068ry9": "mu1",
    "bauko-8dsmu0": "mu1",
    "bauko-imjnyt": "plattescheibe",
    "bauko-s51a52": "plattescheibe",
    "bauko-1o6bta5": "verbund",
    "bauko-1gfq9kl": "windgfl",
    "bauko-1tj4xui": "windgfl",
    "bauko-yxf5fu": "windgfl",
    "bauko-1erxo6z": "windzonen",
    "bauko-1j76ieg": "windzonen",
    "bauko-1k2eij6": "windzonen",
    "bauko-9asphl": "windzonen",
    "bauko-bk4jak": "windzonen",
    /* Hydromechanik */
    "hydro-1fberzo": "behaelter",
    "hydro-1innbbh": "behaelter",
    "hydro-1wfy1ow": "bleikugel",
    "hydro-1aedhad": "druckdreieck",
    "hydro-1ijl9q2": "druckdreieck",
    "hydro-xt7inu": "druckdreieck",
    "hydro-17jjex4": "fliesszustand",
    "hydro-1f2v8ot": "fliesszustand",
    "hydro-1glspxj": "fliesszustand",
    "hydro-1taypbe": "fliesszustand",
    "hydro-1xl5x4p": "fliesszustand",
    "hydro-jxkt23": "fliesszustand",
    "hydro-1gg4f1f": "freibord",
    "hydro-6t1skk": "freibord",
    "hydro-d4mrv": "freibord",
    "hydro-ex3mwj": "freibord",
    "hydro-1my7un9": "kapillar2",
    "hydro-1wbgn5t": "kapillar2",
    "hydro-fnqzjv": "kruemmer",
    "hydro-1b4zxi4": "kruemmerkraft",
    "hydro-l0tl2b": "kruemmerkraft",
    "hydro-xuuxbp": "schichtung2",
    "hydro-1cbf6ji": "venturi",
    "hydro-1x2fmbt": "venturi",
    "hydro-1x49ert": "venturi",
    "hydro-6o64wa": "venturi",
    "hydro-rzedbh": "venturi",
    "hydro-xmpbu6": "venturi",
    /* Physik */
    "phys-1pxqoez": "actio",
    "phys-kw5xlb": "actio",
    "phys-vlieak": "actio",
    "phys-ayu031": "arbeitphi",
    "phys-gq1eca": "arbeitphi",
    "phys-j55wx9": "arbeitphi",
    "phys-je69k2": "blockp",
    "phys-1hmfqtr": "federarbeit",
    "phys-8lhei1": "federarbeit",
    "phys-lggy2n": "federarbeit",
    "phys-1fv9o7b": "kistewinkel",
    "phys-11i62b7": "kreis2",
    "phys-3iinro": "kreis2",
    "phys-871r7i": "kreis2",
    "phys-8boirg": "kreis2",
    "phys-cym280": "kreis2",
    "phys-ig9f4c": "kurve",
    "phys-v733ao": "kurve",
    "phys-14ofg4v": "luftwiderstand",
    "phys-1e8asae": "luftwiderstand",
    "phys-1exj7dy": "luftwiderstand",
    "phys-p71035": "quadrant",
    "phys-k5fbbm": "rampe",
    "phys-w8a33j": "rampe",
    "phys-18xedzh": "riesenrad",
    "phys-1vyn6ls": "riesenrad",
    "phys-1q2dbfb": "rollen",
    "phys-1v9ze2x": "rollen",
    "phys-c6xfa1": "rollen",
    "phys-fdpwvr": "rollen",
    "phys-186pcgy": "schiefeebene",
    "phys-f5uf0q": "schiefeebene",
    "phys-yn4tpg": "schiefeebene",
    "phys-15jes7s": "skalarkreuz",
    "phys-16zxk29": "skalarkreuz",
    "phys-172no65": "skalarkreuz",
    "phys-1ilc9ju": "skalarkreuz",
    "phys-ec8sm3": "skalarkreuz",
    "phys-srxy2e": "vt",
    "phys-1l9rk00": "wurf",
    "phys-1w6izjb": "wurf",
    "phys-4x1yrv": "wurf",
    "phys-tdkp2p": "wurf",
    "phys-1lk98g4": "xt",
    "phys-y8fvi3": "xt",
    /* Baustoffkunde */
    "bsk-1r8d7zo": "abkuehl",
    "bsk-1v0ieke": "abkuehl",
    "bsk-1qr7c2k": "cuni",
    "bsk-1v8pzeb": "cuni",
    "bsk-fjaba8": "cuni",
    "bsk-l4jd29": "cuni",
    "bsk-l8vufp": "cuni",
    "bsk-1h1mgnk": "emodul",
    "bsk-bn8566": "ermuedung",
    "bsk-1pmsq1j": "fec",
    "bsk-1pw4ggf": "fec",
    "bsk-1y1w1ad": "fec",
    "bsk-5wn5ou": "fec",
    "bsk-nk35d": "fec",
    "bsk-v7asf4": "fec",
    "bsk-vvk85b": "fec",
    "bsk-1ox59cp": "gitter",
    "bsk-opa187": "gitter",
    "bsk-2yna6f": "hochkant",
    "bsk-xvsjup": "kapillar2",
    "bsk-1x8ccep": "kerbe",
    "bsk-1kbsffz": "kraftabstand",
    "bsk-151jijj": "pbsn",
    "bsk-1cef5w": "pbsn",
    "bsk-2gy4el": "pbsn",
    "bsk-w1hzhe": "pbsn",
    "bsk-14kfymo": "porenarten",
    "bsk-1qnzdp5": "porenarten",
    "bsk-26gd5": "porenarten",
    "bsk-dtp1hg": "porenarten",
    "bsk-ebntjg": "porenarten",
    "bsk-jupvyc": "porenarten",
    "bsk-srglpv": "porenarten",
    "bsk-ybgufs": "porenarten",
    "bsk-13k7trg": "querdehnung",
    "bsk-1lr9f7v": "verbundmodell",
    "bsk-1utyxs8": "verbundmodell",
    "bsk-d9hloa": "verbundmodell",
    "bsk-1a3v4cm": "woehler2",
    "bsk-2w9wv5": "woehler2",
    "bsk-d84mwf": "woehler2",
    /* Bauinformatik */
    "binf-13u2nqq": "array",
    "binf-15n1kh1": "array",
    "binf-4o0phs": "array",
    "binf-ae5p5j": "array",
    "binf-qrukn0": "array",
    "binf-15d0mjx": "binsuche",
    "binf-6iut34": "binsuche",
    "binf-8x7ctw": "binsuche",
    "binf-pkt6f7": "binsuche",
    "binf-uwrc6t": "binsuche",
    "binf-1gnigk4": "dual",
    "binf-1irnuun": "dual",
    "binf-1n153gw": "grid2d",
    "binf-vuisxx": "grid2d",
    "binf-xo32iy": "grid2d",
    "binf-154tj6z": "schleifen",
    "binf-155dnst": "schleifen",
    "binf-1b7hdub": "schleifen",
    "binf-1c3p3d2": "struktogramm",
    /* Statistik */
    "stat-b1wkh2": "boxplot",
    "stat-vyzr1i": "boxplot",
    "stat-1gssox7": "ecdf",
    "stat-1yijd3m": "ecdf",
    "stat-1dphzz": "matrix2",
    "stat-kniqu7": "matrix2",
    "stat-19f5ml8": "schiefe",
    "stat-5jgbsi": "skalarkreuz",
    "stat-1398zyy": "streu",
    "stat-17ggk7y": "streu",
    /* DAP */
    "dap-z7wm72": "chi2",
    "dap-iafgr7": "ecdf",
    "dap-1wg49rj": "gleichsumme",
    "dap-ayfif0": "gleichsumme",
    "dap-rh1pgs": "gleichsumme",
    "dap-1caxe6h": "konfint",
    "dap-1y0jxyb": "konfint",
    "dap-ouewco": "konfint",
    "dap-rhtmi7": "konfint",
    "dap-1ror1s3": "pdfflaeche",
    "dap-1cwy9xt": "sigmaregeln",
    "dap-ia9hi6": "sigmaregeln",
    "dap-deygws": "tvert",
    "dap-1cmfadd": "zgws",
    "dap-d6t0t0": "zgws",
    "dap-p4y6rc": "zgws",
    "dap-w0j86d": "zgws",
  };
  for (const id in SKIZZE) KORREKTUR[id] = Object.assign({}, KORREKTUR[id], { ev: SKIZZE[id] });
})();
/* Patch-Warteschlange · Bauinformatik · Musterlösung Blatt 03 (Variablen, Typumwandlung, Operatoren) · erstellt 19.11.2026 · Die meisten Aufgaben des Blatts sind schon als Fragen in der App; neu sind nur diese beiden · Ausgaben mit der Musterlösung abgeglichen */
const BI19z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);
mc("binf", "Operatoren", "Was gibt System.out.println(5.0 / 2.0 + 5 / 2.); aus?", ["5.0", "4.5", "4", "2.5"], "5 / 2. ist keine int-Division mehr: Der Punkt hinter der 2 macht sie zu einer double-Zahl, also 2.5. Insgesamt 2.5 + 2.5 = 5.0. Ohne Punkt (5 / 2) käme 2 heraus und die Ausgabe wäre 4.5.", "Bauinformatik Musterlösung Blatt 03, Aufgabe 10b");
BI19z({ st: 3 });
mc("binf", "Operatoren", "Wie schreibst du b² − 4ac in Java (alle Variablen double)?", ["b*b - 4*a*c", "b^2 - 4ac", "b² - 4*a*c", "b**2 - 4*a*c"], "Java hat keinen Potenz-Operator: ^ ist das bitweise exklusive Oder, ** gibt es nicht, und 4ac ohne * ist ein unbekannter Name. Für höhere Potenzen nimmt man Math.pow(b, 2).", "Bauinformatik Musterlösung Blatt 03, Aufgabe 11");
BI19z({ st: 2 });
/* Patch-Warteschlange · Baukonstruktion · Zusatzübung „How-To: Schneider and Nautos“ (Kimpeler, WS 26/27, 22 Folien, ausgefüllt) · erstellt 19.11.2026 · Werte an den Lösungsfolien geprüft */
const NB19 = "Normen und Bautabellen";
const NB19z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);
THEMEN["bauko|Normen und Bautabellen"] = "Normen regeln, wie sicher gebaut wird. Für die Bemessung gelten die Eurocodes: DIN EN 1990 (Grundlagen, Sicherheitskonzept), 1991 (Einwirkungen), 1992 (Stahlbeton), 1993 (Stahlbau), 1995 (Holzbau), 1996 (Mauerwerk), 1997 (Geotechnik). Normen kauft man sonst teuer bei DIN Media (früher Beuth); im RWTH-Netz (eduroam oder VPN) gibt es sie kostenlos über Nautos. Die Schneider Bautabellen fassen die Normen zusammen: Kapitel 3 Lastannahmen, 4 Statik, 5 Stahlbetonbau, 7 Mauerwerk, 8 Stahlbau, 9 Holzbau.";

mc("bauko", NB19, "Wo bekommst du als RWTH-Student Normen kostenlos?", ["Über Nautos – nur im RWTH-Netz, also mit eduroam oder VPN", "Beim Beuth Verlag bzw. DIN Media", "Gar nicht, Normen muss man immer kaufen", "Im Schneider, dort stehen alle Normen vollständig"], "Normen vertreibt DIN Media (bis 2024 Beuth Verlag) – kostenpflichtig und teuer. Die RWTH hat eine Lizenz für Nautos: Dort sucht man z. B. „DIN EN 1991“ und lädt das PDF herunter. Der Schneider fasst die Normen nur zusammen.", "Bauko Zusatzübung Schneider und Nautos, Folien 3–4");
NB19z({ st: 1 });
wf("bauko", NB19, "Ein in Nautos als „Entwurf“ gekennzeichnetes Dokument ist bereits verbindlich anzuwenden.", false, "Falsch. Ein Entwurf ist noch nicht endgültig veröffentlicht. In Nautos sieht man außerdem, ob eine Norm aktuell ist oder durch eine neuere Ausgabe überholt wurde – am besten nur gültige Normen anzeigen lassen.", "Bauko Zusatzübung Schneider und Nautos, Folien 4–5");
NB19z({ st: 2 });
pair("bauko", NB19, "Normbezeichnung DIN EN 1991-1-2/NA/A1:2015-09 – was bedeutet welcher Teil?", [["EN", "europäische Norm"], ["DIN", "als deutsche Norm übernommen"], ["1991-1-2", "Nummer 1991, Teil 1-2"], ["NA", "Nationaler Anhang"], ["A1", "Änderung 1"], ["2015-09", "Ausgabedatum (Jahr und Monat)"]], "Steht zusätzlich ISO im Namen (z. B. DIN EN ISO 6892-1), ist es eine internationale Norm, die als europäische und dann als deutsche Norm übernommen wurde.", "Bauko Zusatzübung Schneider und Nautos, Folie 7");
NB19z({ st: 2 });
mc("bauko", NB19, "Was bedeutet ISO in DIN EN ISO 6892-1?", ["Die Norm ist international (ISO) und wurde als europäische (EN) und deutsche Norm (DIN) übernommen", "Die Norm gilt nur in Deutschland", "Es ist ein Entwurf, der noch geprüft wird", "Es ist der nationale Anhang zur Norm"], "Die Reihenfolge liest sich von innen nach außen: ISO-Norm → als EN übernommen → als DIN übernommen. Die 1 hinter dem Bindestrich ist Teil 1.", "Bauko Zusatzübung Schneider und Nautos, Folie 7");
NB19z({ st: 2 });
pair("bauko", NB19, "Welcher Eurocode regelt was?", [["DIN EN 1990 (EC 0)", "Grundlagen, Sicherheitskonzept, Kombinationen"], ["DIN EN 1991 (EC 1)", "Einwirkungen: Nutzlast, Schnee, Wind"], ["DIN EN 1993 (EC 3)", "Stahlbau"], ["DIN EN 1995 (EC 5)", "Holzbau"]], "Dazu kommen DIN EN 1992 (Stahlbeton), 1996 (Mauerwerk) und 1997 (Geotechnik). In Baukonstruktion braucht man vor allem 1990, 1991, 1993 und 1995 – die Eurocodes vereinheitlichen die Bemessung europaweit.", "Bauko Zusatzübung Schneider und Nautos, Folien 8–9");
NB19z({ st: 1 });
pair("bauko", NB19, "In welchem Schneider-Kapitel suchst du?", [["Schneelast, Wind, Nutzlasten, Kombinationen", "Kapitel 3 – Lastannahmen"], ["Auflagerkräfte, Momente, Durchbiegung von Grundsystemen", "Kapitel 4 – Statik"], ["Querschnittsklassen, Schrauben, Biegeknicken von Stahl", "Kapitel 8 – Stahlbau"], ["k_mod, Knicken und Verbindungsmittel bei Holz", "Kapitel 9 – Holzbau"]], "Ebenfalls wichtig: Kapitel 5 Stahlbetonbau und Kapitel 7 Mauerwerksbau. Die Kapitel 3, 4, 8 und 9 sind für Baukonstruktion am wichtigsten.", "Bauko Zusatzübung Schneider und Nautos, Folien 9–14");
NB19z({ st: 1 });
mc("bauko", NB19, "Welche Wichten gelten laut Schneider für Normalbeton, Stahlbeton und Schwerbeton?", ["24 kN/m³, 25 kN/m³ und über 26 kN/m³", "25 kN/m³ für alle drei", "22, 24 und 30 kN/m³", "2,4, 2,5 und 2,6 kN/m³"], "Kapitel 3B (Wichten): Stahlbeton ist durch die Bewehrung 1 kN/m³ schwerer als unbewehrter Normalbeton. 2,4 kN/m³ wäre zehnmal zu leicht – das wäre die Dichte in t/m³.", "Bauko Zusatzübung Schneider und Nautos, Lösungsfolie (SBT Kap. 3B 2.1)");
NB19z({ st: 2 });
mc("bauko", NB19, "Wie groß ist der Mindestwert der Schneelast am Boden s_k in Schneelastzone 1?", ["0,65 kN/m²", "0,85 kN/m²", "1,10 kN/m²", "0,50 kN/m²"], "Kapitel 3F: In Zone 1 gilt mindestens 0,65 kN/m², in Zone 2 mindestens 0,85 kN/m². Liefert die Formel für die Geländehöhe weniger, rechnet man mit dem Mindestwert.", "Bauko Zusatzübung Schneider und Nautos, Lösungsfolie (SBT Kap. 3F 3.1)");
NB19z({ st: 2 });
mc("bauko", NB19, "Wie findest du im Schneider den Außendruckbeiwert c_pe,10 für ein Satteldach?", ["Kapitel 3 (Wind): Tafel für Satteldächer, Zeile nach Dachneigung, Spalte nach Anströmrichtung θ und Bereich F bis J – zwischen zwei Neigungen linear interpolieren", "Kapitel 4 (Statik): Tafel für Durchlaufträger", "Kapitel 9 (Holzbau): bei den Festigkeitsklassen", "Man rechnet c_pe,10 aus der Windgeschwindigkeit selbst aus"], "Beispiel aus der Übung: Satteldach 60°, θ = 0°, Bereich H → c_pe,10 = +0,7 (SBT Kap. 3E 7.2.5). Liegt die Neigung zwischen zwei Tabellenwerten, wird interpoliert.", "Bauko Zusatzübung Schneider und Nautos, Lösungsfolie");
NB19z({ st: 2, ev: "windzonen" });
mc("bauko", NB19, "Wo steht im Schneider die Formel für die Durchbiegung eines Einfeldträgers unter Gleichlast?", ["Kapitel 4A (Statik): w = 5 · q · l⁴ ÷ (384 · EI) = q · l⁴ ÷ (76,8 · EI)", "Kapitel 3 (Lastannahmen)", "Kapitel 9 (Holzbau) beim Knicknachweis", "Gar nicht, man muss sie selbst herleiten"], "Kapitel 4 enthält Tafeln für die statischen Grundsysteme: Auflagerkräfte, Momente und Durchbiegungen. 384 ÷ 5 = 76,8 – daher die kürzere Form.", "Bauko Zusatzübung Schneider und Nautos, Lösungsfolie (SBT Kap. 4A 1.1)");
NB19z({ st: 2 });
/* Patch-Warteschlange · Baustoffkunde · Übung Baustoffkenngrößen (Kamitter, 18.11.2026, 31 Folien: Dichten/Haufwerksporen, Reihen- und Parallelschaltung, Poissonzahl, Klausuraufgabe σ-ε-Linien) · erstellt 19.11.2026 · alle Zahlen mit Python nachgerechnet */
const BU19p = "Physikalische Eigenschaften", BU19m = "Mechanische Eigenschaften", BU19v = "Ermüdung und Verbundwerkstoffe";
const BU19z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);

/* ── Dichten einer Schüttung ── */
pair("bsk", BU19p, "Welche Dichte bezieht sich auf welches Volumen?", [["Reindichte", "nur der Feststoff, ohne jede Pore"], ["Kornrohdichte", "das Korn einschließlich seiner Kornporen"], ["Schüttdichte", "die ganze Schüttung mit Korn- und Haufwerksporen"]], "Die Masse ist immer dieselbe, nur das Volumen wächst: Je mehr Hohlräume mitgezählt werden, desto kleiner wird die Dichte. Darum gilt Reindichte > Kornrohdichte > Schüttdichte.", "BSK Übung Baustoffkenngrößen, Folie 7");
BU19z({ st: 1, ev: "schuettung" });
mc("bsk", BU19p, "Was sind Haufwerksporen?", ["Die Hohlräume zwischen den Körnern einer Schüttung", "Die Poren im Inneren eines einzelnen Korns", "Luftblasen im Zementstein", "Risse, die beim Brechen des Gesteins entstehen"], "Haufwerksporen entstehen, weil sich runde oder kantige Körner nicht lückenlos aneinanderlegen. Die Poren im Korn selbst heißen Kornporen.", "BSK Übung Baustoffkenngrößen, Folien 7–8");
BU19z({ st: 1, ev: "schuettung" });
mc("bsk", BU19p, "Mit welcher Dichte rechnest du, wenn du wissen willst, wie hoch eine Kiesschüttung aus einer bestellten Masse wird?", ["Mit der Schüttdichte", "Mit der Kornrohdichte", "Mit der Reindichte", "Mit der Dichte von Wasser"], "Die Schüttung besteht aus Körnern und den Lücken dazwischen. Nur die Schüttdichte (bei Kies rund 1300 kg/m³) enthält beide. Höhe = Masse ÷ (Fläche · Schüttdichte).", "BSK Übung Baustoffkenngrößen, Aufgabe 1a");
BU19z({ st: 2 });
mc("bsk", BU19p, "Jemand bestellt Kies und rechnet versehentlich mit der Kornrohdichte statt mit der Schüttdichte. Was passiert?", ["Die Schüttung wird viel höher als geplant – bei Kies etwa doppelt so hoch, weil rund die Hälfte des Schüttvolumens Lücken sind", "Es fehlt Kies, die Schüttung wird zu niedrig", "Nichts – beide Dichten sind bei Kies gleich", "Die Körner werden beim Einbau verdichtet und es passt genau"], "Kornrohdichte von Quarzkies ≈ 2600 kg/m³, Schüttdichte ≈ 1300 kg/m³. Wer mit 2600 rechnet, bestellt die Masse für das Volumen ohne Lücken – in der Übung wurden so aus geplanten 10 cm ganze 20 cm.", "BSK Übung Baustoffkenngrößen, Aufgabe 1b");
BU19z({ st: 2, ev: "schuettung" });
mc("bsk", BU19p, "Wie bestimmst du den Anteil der Haufwerksporen in einer Schüttung?", ["V_H ÷ V = 1 − ρ_Schütt ÷ ρ_Korn", "V_H ÷ V = ρ_Schütt ÷ ρ_Korn", "V_H ÷ V = 1 − ρ_Korn ÷ ρ_Rein", "V_H ÷ V = ρ_Rein − ρ_Schütt"], "Herleitung: V = V_K + V_H, also V_H ÷ V = 1 − V_K ÷ V. Mit V_K = m ÷ ρ_Korn und V = m ÷ ρ_Schütt kürzt sich die Masse: V_K ÷ V = ρ_Schütt ÷ ρ_Korn. Beispiel Kies: 1 − 1300 ÷ 2600 = 50 Vol.-%. 1 − ρ_Korn ÷ ρ_Rein wäre der Anteil der Kornporen.", "BSK Übung Baustoffkenngrößen, Aufgabe 1c");
BU19z({ st: 3, ev: "schuettung" });
mc("bsk", BU19p, "Welche Kornrohdichte ist für Quarzkies typisch?", ["Rund 2600 kg/m³", "Rund 1300 kg/m³", "Rund 1000 kg/m³", "Rund 7850 kg/m³"], "2600 kg/m³ liegt im typischen Bereich für Quarz. 1300 kg/m³ ist die Schüttdichte (mit Lücken), 1000 kg/m³ die von Wasser, 7850 kg/m³ die von Stahl.", "BSK Übung Baustoffkenngrößen, Aufgabe 1b");
BU19z({ st: 1 });

/* ── Reihe und Parallel ── */
mc("bsk", BU19v, "Zwei Schichten liegen übereinander (Holz auf Hartschaum) und werden von oben gedrückt. Was gilt?", ["Beide haben dieselbe Spannung, ihre Verkürzungen addieren sich: Δl = Δl₁ + Δl₂", "Beide haben dieselbe Dehnung, die Kräfte addieren sich", "Nur die steifere Schicht verformt sich", "Die Spannung verteilt sich nach den E-Modulen auf die Schichten"], "Das ist eine Reihen- oder Serienschaltung (weiches Modell): Dieselbe Kraft geht durch dieselbe Fläche, also σ₁ = σ₂. Die weiche Schicht verformt sich dabei viel stärker – in der Übung trug der Hartschaum 0,59 von 0,62 mm Verkürzung.", "BSK Übung Baustoffkenngrößen, Aufgabe 2a");
BU19z({ st: 2, ev: "verbundmodell" });
mc("bsk", BU19v, "Eine Stütze besteht aus einem Betonkern mit Putzschicht. Wie bekommst du den Ersatz-E-Modul E*?", ["Flächengewichtet: E* = (A₁ ÷ A) · E₁ + (A₂ ÷ A) · E₂, weil beide Teile gleich stark gestaucht werden", "Einfacher Mittelwert: E* = (E₁ + E₂) ÷ 2", "Über die Schichtdicken wie bei der Reihenschaltung", "Es zählt nur der Beton, Putz trägt nichts"], "Kern und Putz sind nebeneinander angeordnet und werden zusammen gestaucht: Parallelschaltung (hartes Modell), gleiche Dehnung ε. Die Kräfte addieren sich, darum wird nach Flächenanteilen gewichtet. In der Übung: 0,87 · 35 000 + 0,13 · 20 000 ≈ 33 050 N/mm².", "BSK Übung Baustoffkenngrößen, Aufgabe 2b");
BU19z({ st: 2, ev: "verbundmodell" });
wf("bsk", BU19v, "Bei einer Reihenschaltung aus einem steifen und einem weichen Material liegt der Ersatz-E-Modul näher am weichen Material.", true, "Richtig. Die Dehnungen addieren sich, und die weiche Schicht dehnt sich am meisten. Darum bestimmt sie die Gesamtverformung – das weiche Modell liefert den unteren Grenzwert.", "BSK Übung Baustoffkenngrößen, Folie 11 und 29");
BU19z({ st: 2, ev: "verbundmodell" });
ord("bsk", BU19v, "Verformung eines Schichtaufbaus (Reihenschaltung): Bring die Schritte in Reihenfolge.", ["Last in Kraft umrechnen: F = m · g", "Spannung aus Kraft und Fläche: σ = F ÷ A (in allen Schichten gleich)", "Dehnung jeder Schicht: ε_i = σ ÷ E_i", "Verkürzung jeder Schicht: Δl_i = ε_i · l_i", "Verkürzungen addieren: Δl = Δl₁ + Δl₂"], "Der Rechenweg aus Aufgabe 2a. Alternativ rechnet man mit dem Ersatz-E-Modul der ganzen Schichtung – das Ergebnis ist dasselbe.", "BSK Übung Baustoffkenngrößen, Aufgabe 2a");
BU19z({ st: 3 });

/* ── Poissonzahl, E-Modul aus der σ-ε-Linie ── */
mc("bsk", BU19m, "Wie berechnest du die Poissonzahl ν aus gemessenen Dehnungen?", ["ν = −ε_quer ÷ ε_längs", "ν = ε_längs ÷ ε_quer", "ν = ε_quer · ε_längs", "ν = E ÷ G"], "Die Poissonzahl ist das Verhältnis von Querdehnung zu Längsdehnung. Das Minus sorgt für einen positiven Wert, weil ein gestauchter Körper dicker wird (ε_längs < 0, ε_quer > 0). Mit ν folgt der Schubmodul: G = E ÷ (2 · (1 + ν)).", "BSK Übung Baustoffkenngrößen, Aufgabe 3 und Folie 28");
BU19z({ st: 2, ev: "querdehnung" });
mc("bsk", BU19m, "Du liest an einer σ-ε-Linie σ = 25 N/mm² bei ε = 1,25 ‰ ab. Wie rechnest du den E-Modul?", ["E = 25 ÷ 0,00125 = 20 000 N/mm² – Promille vorher durch 1000 teilen", "E = 25 ÷ 1,25 = 20 N/mm²", "E = 25 · 1,25 = 31,25 N/mm²", "E = 1,25 ÷ 25 = 0,05 N/mm²"], "E = Δσ ÷ Δε im geraden Teil der Linie. ε ist dimensionslos: 1,25 ‰ = 0,00125. Wer das Promille vergisst, liegt um den Faktor 1000 daneben.", "BSK Übung Baustoffkenngrößen, Klausuraufgabe");
BU19z({ st: 3, ev: "emodul" });
mc("bsk", BU19m, "Eine Stütze soll sich so wenig wie möglich verkürzen, damit sich die Decke darüber kaum durchbiegt. Welchen Werkstoff wählst du?", ["Den mit dem größten E-Modul – die steilste σ-ε-Linie", "Den mit der größten Bruchspannung", "Den mit der größten Bruchdehnung", "Den mit der flachsten σ-ε-Linie"], "Die Verkürzung ist Δl = σ · l ÷ E. Bei gleicher Last entscheidet also nur die Steifigkeit E, nicht die Festigkeit. In der Klausuraufgabe hatte der Werkstoff mit 20 000 N/mm² die steilste Linie.", "BSK Übung Baustoffkenngrößen, Klausuraufgabe");
BU19z({ st: 2, ev: "emodul" });

/* ── Lösungswege ── */
aufgabe({
 "id": "bsk-ue02-kies", "f": "bsk", "t": BU19p, "titel": "Kies für das Flachdach", "s": "BSK Übung Baustoffkenngrößen, Aufgabe 1",
 "angabe": "Ein Flachdach von 15 m × 15 m soll 10 cm hoch mit Kies 16/32 eingedeckt werden. Geliefert werden 58,5 t. Schüttdichte Kies ρ_Schütt ≈ 1300 kg/m³. Reicht die Menge – und wie viel Prozent der Schüttung sind Haufwerksporen?",
 "geg": ["A = 15 m · 15 m = 225 m²", "geplant h = 0,10 m", "m = 58 500 kg", "ρ_Schütt = 1300 kg/m³"],
 "ges": "Tatsächliche Höhe, Fehler bei der Bestellung, Anteil der Haufwerksporen",
 "schritte": [
  { "f": "Wie hoch wird die Schüttung mit 58,5 t?", "o": [
    ["h = m ÷ (A · ρ_Schütt) = 58 500 ÷ (225 · 1300) = 0,20 m", "ρ = m ÷ V und V = A · h, nach h umgestellt."],
    ["h = 58 500 ÷ (225 · 2600) = 0,10 m", "2600 kg/m³ ist die Kornrohdichte – die Lücken zwischen den Körnern fehlen."],
    ["h = 225 · 1300 ÷ 58 500 = 5,0 m", "Der Bruch ist umgedreht."],
    ["h = 58,5 ÷ (225 · 1300) = 0,0002 m", "Tonnen nicht in Kilogramm umgerechnet."]],
   "r": "h = 0,20 m – doppelt so hoch wie geplant" },
  { "f": "Welchen Fehler hat der Besteller vermutlich gemacht?", "o": [
    ["Er hat mit der Kornrohdichte gerechnet: 58 500 ÷ (225 · 0,1) = 2600 kg/m³ – typisch für Quarz", "Die bestellte Masse passt genau zur Kornrohdichte. Damit hat er die Hohlräume vergessen."],
    ["Er hat Kilogramm und Tonnen verwechselt", "Dann wäre der Fehler ein Faktor 1000, nicht 2."],
    ["Er hat mit der Reindichte von Wasser gerechnet", "Mit 1000 kg/m³ hätte er nur 22,5 t bestellt."],
    ["Er hat die Dachfläche doppelt gerechnet", "15 · 15 = 225 m² stimmt."]],
   "r": "Kornrohdichte statt Schüttdichte verwendet" },
  { "f": "Wie groß ist der Anteil der Haufwerksporen?", "o": [
    ["V_H ÷ V = 1 − ρ_Schütt ÷ ρ_Korn = 1 − 1300 ÷ 2600 = 0,50", "V = V_K + V_H, und V_K ÷ V = ρ_Schütt ÷ ρ_Korn, weil die Masse gleich bleibt."],
    ["V_H ÷ V = 1300 ÷ 2600 = 0,50 – das ist der Anteil der Körner", "Der Zahlenwert ist zufällig gleich, aber 1300 ÷ 2600 ist der Kornanteil. Die Poren sind 1 minus diesen Wert."],
    ["V_H ÷ V = 2600 ÷ 1300 = 2,0 = 200 %", "Mehr als 100 % geht nicht – der Bruch ist vertauscht."],
    ["V_H ÷ V = 1 − 2600 ÷ ρ_Rein", "Das wäre der Anteil der Kornporen im Korn."]],
   "r": "50 Vol.-% Haufwerksporen" }],
 "fazit": "Rezept: Für alles, was geschüttet wird, die Schüttdichte nehmen. Kornrohdichte ÷ Schüttdichte ≈ 2 heißt: Die Hälfte des Schüttvolumens ist Luft zwischen den Körnern."
});
aufgabe({
 "id": "bsk-ue02-reihe", "f": "bsk", "t": BU19v, "titel": "Fußboden unter einer Bronzefigur (Reihenschaltung)", "s": "BSK Übung Baustoffkenngrößen, Aufgabe 2a",
 "angabe": "Eine 8 t schwere Bronzefigur steht vollflächig auf 50 cm × 50 cm Fußboden. Aufbau von oben: 4 cm Holz (E = 370 N/mm²) auf 6 cm Hartschaum (E = 32 N/mm²). Wie stark drückt sich der Boden zusammen? g = 9,81 m/s².",
 "geg": ["m = 8000 kg", "A = 500 mm · 500 mm = 250 000 mm²", "Holz: l₁ = 40 mm, E₁ = 370 N/mm²", "Hartschaum: l₂ = 60 mm, E₂ = 32 N/mm²"],
 "ges": "Gesamtverkürzung Δl",
 "schritte": [
  { "f": "Wie groß ist die Spannung in den Schichten?", "o": [
    ["σ = 8000 · 9,81 ÷ 250 000 = 0,314 N/mm², in beiden Schichten gleich", "Reihenschaltung: dieselbe Kraft geht durch dieselbe Fläche."],
    ["σ = 8000 ÷ 250 000 = 0,032 N/mm²", "Masse ist keine Kraft – mit g multiplizieren."],
    ["σ₁ = 0,314, σ₂ = 0,314 · 32 ÷ 370 = 0,027 N/mm²", "Die Spannung teilt sich nicht nach den E-Modulen auf – das wäre bei der Parallelschaltung."],
    ["σ = 78 480 ÷ 0,25 = 313 920 N/mm²", "Fläche in m², Kraft in N – die Einheiten passen nicht zusammen."]],
   "r": "σ = 0,314 N/mm²" },
  { "f": "Wie stark verkürzen sich Holz und Hartschaum einzeln?", "o": [
    ["Δl₁ = 0,314 ÷ 370 · 40 = 0,03 mm; Δl₂ = 0,314 ÷ 32 · 60 = 0,59 mm", "ε_i = σ ÷ E_i, dann Δl_i = ε_i · l_i."],
    ["Δl₁ = 0,314 · 370 · 40 mm; Δl₂ = 0,314 · 32 · 60 mm", "Durch E teilen, nicht malnehmen: ε = σ ÷ E."],
    ["Δl₁ = Δl₂ = 0,314 ÷ 201 · 50 = 0,08 mm", "Die E-Module darf man nicht einfach mitteln."],
    ["Δl₁ = 0,314 ÷ 370 · 100 = 0,08 mm", "Jede Schicht nur mit ihrer eigenen Dicke."]],
   "r": "Δl₁ ≈ 0,03 mm, Δl₂ ≈ 0,59 mm" },
  { "f": "Wie groß ist die Gesamtverkürzung?", "o": [
    ["Δl = 0,03 + 0,59 = 0,62 mm", "In der Reihenschaltung addieren sich die Verkürzungen. Kontrolle über E*: ε = 0,314 · (0,4 ÷ 370 + 0,6 ÷ 32) = 6,2 ‰, mal 100 mm = 0,62 mm."],
    ["Δl = 0,59 mm – das Holz verformt sich nicht", "Es verformt sich wenig, aber nicht gar nicht."],
    ["Δl = (0,03 + 0,59) ÷ 2 = 0,31 mm", "Nicht mitteln – die Schichten liegen übereinander."],
    ["Δl = 0,03 · 0,59 = 0,02 mm", "Verkürzungen werden addiert, nicht multipliziert."]],
   "r": "Δl ≈ 0,62 mm" }],
 "fazit": "Reihenschaltung: gleiche Spannung, Dehnungen addieren sich. Die weiche Schicht macht fast die ganze Verformung (hier 95 %)."
});
aufgabe({
 "id": "bsk-ue02-parallel", "f": "bsk", "t": BU19v, "titel": "Betonstütze mit Putz (Parallelschaltung)", "s": "BSK Übung Baustoffkenngrößen, Aufgabe 2b",
 "angabe": "Unter der Figur (F = 78,48 kN) steht eine runde Stütze, Länge 3000 mm: Betonkern d = 140 mm (E = 35 000 N/mm²), außen 5 mm Putz (E = 20 000 N/mm²), Gesamtdurchmesser 150 mm. Wie stark verkürzt sie sich?",
 "geg": ["F = 78 480 N", "d_ges = 150 mm, d_Beton = 140 mm", "E_Beton = 35 000 N/mm², E_Putz = 20 000 N/mm²", "l = 3000 mm"],
 "ges": "Verkürzung Δl",
 "schritte": [
  { "f": "Wie groß ist die mittlere Spannung im Querschnitt?", "o": [
    ["σ = 78 480 ÷ (π · 150² ÷ 4) = 4,44 N/mm²", "Kraft durch die ganze Querschnittsfläche."],
    ["σ = 78 480 ÷ (π · 140² ÷ 4) = 5,10 N/mm²", "Der Putz trägt mit, die ganze Fläche zählt."],
    ["σ = 78 480 ÷ (π · 150²) = 1,11 N/mm²", "Kreisfläche ist π · d² ÷ 4."],
    ["σ = 78 480 ÷ 150² = 3,49 N/mm²", "Das wäre ein quadratischer Querschnitt."]],
   "r": "σ ≈ 4,44 N/mm²" },
  { "f": "Wie groß ist der Ersatz-E-Modul E*?", "o": [
    ["A_Beton ÷ A = 140² ÷ 150² = 0,87 → E* = 0,87 · 35 000 + 0,13 · 20 000 ≈ 33 050 N/mm²", "Parallelschaltung: gleiche Dehnung, Gewichtung nach Flächenanteilen."],
    ["E* = (35 000 + 20 000) ÷ 2 = 27 500 N/mm²", "Ohne Flächenanteile gemittelt – der dünne Putz zählt viel zu stark."],
    ["1 ÷ E* = 0,87 ÷ 35 000 + 0,13 ÷ 20 000 → E* ≈ 31 900 N/mm²", "Das ist die Formel der Reihenschaltung."],
    ["E* = 140 ÷ 150 · 35 000 + 10 ÷ 150 · 20 000 = 34 000 N/mm²", "Anteile über den Durchmesser statt über die Fläche."]],
   "r": "E* ≈ 33 050 N/mm²" },
  { "f": "Wie stark verkürzt sich die Stütze?", "o": [
    ["ε = 4,44 ÷ 33 050 = 0,13 ‰ → Δl = 0,000134 · 3000 ≈ 0,40 mm", "Die Musterlösung rundet ε auf 0,00013 und kommt so auf 0,39 mm."],
    ["Δl = 4,44 · 3000 ÷ 35 000 = 0,38 mm", "Nur mit dem Beton gerechnet – knapp daneben, weil der Putz weicher ist."],
    ["Δl = 4,44 ÷ 33 050 = 0,00013 mm", "Das ist die Dehnung, noch nicht mit der Länge multipliziert."],
    ["Δl = 33 050 · 3000 ÷ 4,44 mm", "Der Bruch ist umgedreht."]],
   "r": "Δl ≈ 0,4 mm" }],
 "fazit": "Parallelschaltung: gleiche Dehnung, Kräfte addieren sich, E* = Σ (A_i ÷ A) · E_i. Reihenschaltung dagegen: gleiche Spannung, Verformungen addieren sich."
});
/* Patch-Warteschlange · Data Analysis for Planning · Exercise 4 Data Visualization (Apriandy, 17.11.2026, 19 Folien) + R-Skript Week 4 · erstellt 19.11.2026 · Funktionen und Parameter an Folien und Skript geprüft */
const DV19 = "Diagramme in R";
const DV19z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);
THEMEN["dap|Diagramme in R"] = "Base-R hat für jede Diagrammart eine eigene Funktion: barplot() für Balken, plot() für Linien (type = 'l' oder 'o') und Streudiagramme (plot(x, y)), hist() für Histogramme, boxplot() für Boxplots und pie() für Kreisdiagramme. Fast alle teilen dieselben Parameter: main (Titel), xlab und ylab (Achsenbeschriftungen), xlim und ylim (Achsenbereich), col (Farbe). Für Anteile je Gruppe erst mit prop.table(table(...), margin = 1) * 100 Prozent bilden und dann barplot(t(...), beside = FALSE) für gestapelte Balken nutzen.";

pair("dap", DV19, "Welche R-Funktion zeichnet welches Diagramm?", [["barplot()", "Balkendiagramm"], ["hist()", "Histogramm"], ["boxplot()", "Boxplot"], ["pie()", "Kreisdiagramm"], ["plot(x, y)", "Streudiagramm"]], "plot() mit nur einem Vektor und type = 'l' oder 'o' ergibt dagegen ein Liniendiagramm. Mehr Beispiele: r-graph-gallery.com/base-R.", "DAP Exercise 4, Folien 2–18");
DV19z({ st: 1 });
pair("dap", DV19, "Welcher Parameter steuert was?", [["main", "Titel des Diagramms"], ["xlab / ylab", "Beschriftung der Achsen"], ["xlim / ylim", "Wertebereich der Achsen"], ["col", "Farbe"]], "Diese Parameter funktionieren in barplot(), plot(), hist(), boxplot() fast gleich. Bei hist() kommt border für die Randfarbe der Balken dazu.", "DAP Exercise 4, Folien 3, 6, 8, 10");
DV19z({ st: 1 });
wf("dap", DV19, "Der Parameter main beschriftet die x-Achse.", false, "Falsch. main ist der Titel über dem Diagramm. Die Achsen beschriftet man mit xlab und ylab.", "DAP Exercise 4, Folie 3");
DV19z({ st: 1 });
mc("dap", DV19, "Was zeichnet plot(wege1$wegmin_imp1, type = 'o')?", ["Punkte, die durch Linien verbunden sind", "Nur Punkte", "Nur Linien", "Ein Histogramm der Wegedauern"], "type = 'p' zeichnet nur Punkte, 'l' nur Linien und 'o' beides übereinander (overplotted).", "DAP Exercise 4, Folien 6–7");
DV19z({ st: 2 });
mc("dap", DV19, "Was bewirkt horiz = TRUE in barplot()?", ["Die Balken liegen waagerecht statt senkrecht", "Die Balken werden nebeneinander statt gestapelt gezeichnet", "Die Achsen werden vertauscht beschriftet, die Balken bleiben senkrecht", "Es wird eine waagerechte Hilfslinie eingezeichnet"], "Bei horiz = TRUE zeigen die Balken nach rechts. Achtung: Dann gehört die Einheit (z. B. km) an die x-Achse, also xlab statt ylab.", "DAP Exercise 4, Folie 4; R-Skript Week 4");
DV19z({ st: 1 });
mc("dap", DV19, "Wofür steht breaks in hist(x, breaks = 10)?", ["Für die gewünschte Anzahl der Klassen (Balken)", "Für die Breite der Balkenränder", "Für die Zahl der Ausreißer, die ausgeblendet werden", "Für den Abstand zwischen den Balken"], "breaks legt fest, in wie viele Klassen die Werte eingeteilt werden. Mehr Klassen zeigen mehr Details, aber auch mehr Zufallsschwankung – wie bei der Klassenbildung in der Statistik.", "DAP Exercise 4, Folien 8–9");
DV19z({ st: 2, ev: "ecdf" });
mc("dap", DV19, "Bis wohin reichen die Whisker in boxplot() standardmäßig?", ["Bis zum letzten Wert innerhalb von 1,5 × IQR von der Box; Werte darüber erscheinen als einzelne Punkte (Ausreißer)", "Immer bis zum Minimum und Maximum", "Bis zum 5- und 95-%-Quantil", "Bis eine Standardabweichung über und unter dem Mittelwert"], "Der Parameter range = 1.5 ist die Voreinstellung. Mit outline = FALSE blendet man die Ausreißerpunkte aus, mit notch = TRUE bekommt der Median eine Kerbe.", "DAP Exercise 4, Folie 10");
DV19z({ st: 2, ev: "boxplot" });
mc("dap", DV19, "Was zeichnet boxplot(wege2[c('wegkm_imp', 'wegmin_imp1')])?", ["Zwei Boxplots nebeneinander – einen für jede Spalte", "Einen Boxplot für die Summe beider Spalten", "Ein Streudiagramm Distanz gegen Dauer", "Eine Fehlermeldung, weil boxplot nur einen Vektor annimmt"], "Gibt man einen Data Frame mit mehreren Spalten, bekommt jede Spalte ihre eigene Box. Mit gemeinsamem ylim lassen sie sich direkt vergleichen.", "DAP Exercise 4, Folie 11");
DV19z({ st: 2 });
mc("dap", DV19, "Du willst zeigen, ob längere Wege auch länger dauern. Welches Diagramm passt?", ["Ein Streudiagramm: plot(x = wegkm, y = wegmin)", "Ein Kreisdiagramm der Wegedauern", "Ein Histogramm der Distanzen", "Ein Balkendiagramm der ersten zehn Wege"], "Ein Zusammenhang zweier metrischer Merkmale zeigt sich im Streudiagramm. Jeder Punkt ist ein Weg; steigt die Punktwolke, hängen Distanz und Dauer positiv zusammen.", "DAP Exercise 4, Folien 12–13");
DV19z({ st: 1, ev: "streu" });
mc("dap", DV19, "Du willst den Anteil der Verkehrsmittel je Altersgruppe als gestapelte Balken zeigen. Welche Zeilen passen?", ["prop_tab <- prop.table(table(hvm, alter), margin = 1) * 100 und dann barplot(t(prop_tab), beside = FALSE)", "barplot(table(hvm), horiz = TRUE)", "pie(table(hvm, alter))", "hist(prop.table(hvm), breaks = 5)"], "prop.table(…, margin = 1) bildet Anteile je Zeile. t() dreht die Tabelle, damit jede Altersgruppe ein Balken wird. beside = FALSE stapelt die Anteile, beside = TRUE würde sie nebeneinander stellen.", "DAP Exercise 4, Folie 5; R-Skript Week 4");
DV19z({ st: 3 });
mc("dap", DV19, "Was ist bei pie(table(wege2$hvm_imp), labels = c('walk', 'bicycle', …)) wichtig?", ["Die Labels müssen in derselben Reihenfolge wie die Codes 1, 2, 3 … der Tabelle stehen", "pie() sortiert die Labels automatisch alphabetisch", "Labels gehen nur mit factor(), sonst gibt es einen Fehler", "Die Zahl der Labels ist egal"], "table() zählt die Codes in aufsteigender Reihenfolge. Das erste Label gehört also zu Code 1 (walk), das zweite zu Code 2 (bicycle) und so weiter.", "DAP Exercise 4, Folie 15; R-Skript Week 4");
DV19z({ st: 2 });
/* Patch-Warteschlange · Physik · Übung zu Aufgabenblatt 6 (19.11.2026, 78 Folien, Schritt-für-Schritt-Lösungen) · erstellt 19.11.2026 · Die Fragen zu Blatt 6 sind schon in der App; neu sind zwei Lösungsweg-Aufgaben · alle Zahlen mit Python nachgerechnet */
aufgabe({
 "id": "phys-b6-a1", "f": "phys", "t": "Arbeit und Energie", "titel": "Truhe mit drei Kräften", "s": "Physik Übung 6, Aufgabe 1",
 "angabe": "Eine Truhe gleitet auf reibungsfreiem Boden um d = 3 m nach links. F₁ = 50 N zieht waagerecht nach links, F₂ = 40 N zieht schräg nach rechts oben (α = 60° zur Waagerechten), F₃ = 30 N drückt senkrecht nach unten. Teil b: wie a, aber F₁ = 15 N.",
 "geg": ["F₁ = 50 N nach links (Teil b: 15 N)", "F₂ = 40 N, α = 60°, nach rechts oben", "F₃ = 30 N nach unten", "d = 3 m nach links"],
 "ges": "Gesamtarbeit W; in Teil b Änderung der kinetischen Energie und Bewegungszustand zu Beginn",
 "schritte": [
  { "f": "Welche Kräfte verrichten überhaupt Arbeit?", "o": [
    ["Nur F₁ und der waagerechte Anteil von F₂ – F₃ und F₂,y stehen senkrecht zum Weg", "Arbeit verrichtet nur der Kraftanteil in Wegrichtung (cos 90° = 0)."],
    ["Alle drei Kräfte mit ihrem vollen Betrag", "F₃ steht senkrecht zum Weg: W = F · s · cos 90° = 0."],
    ["Nur F₁, weil nur sie genau in Wegrichtung zeigt", "F₂ hat einen waagerechten Anteil, der gegen die Bewegung wirkt."],
    ["F₃, weil sie die Truhe auf den Boden drückt", "F₃ wirkt senkrecht zum Weg. Auf dem reibungsfreien Boden ändert sie an der Arbeit nichts."]],
   "r": "F₁ und F₂,x zählen" },
  { "f": "Wie groß ist die resultierende waagerechte Kraft (links positiv)?", "o": [
    ["F₂,x = 40 · cos 60° = 20 N → F_res = 50 − 20 = 30 N nach links", "Der waagerechte Anteil ist die Ankathete: F₂ · cos α."],
    ["F₂,x = 40 · sin 60° = 34,6 N → F_res = 15,4 N", "sin α liefert den senkrechten Anteil F₂,y."],
    ["F_res = 50 + 20 = 70 N", "F₂,x zeigt nach rechts, also gegen F₁."],
    ["F_res = 50 − 40 = 10 N", "F₂ zeigt schräg, nur 20 N davon wirken waagerecht."]],
   "r": "F_res = 30 N nach links" },
  { "f": "Wie groß ist die Gesamtarbeit W in Teil a?", "o": [
    ["W = 30 N · 3 m · cos 0° = 90 J", "Kraft und Weg zeigen beide nach links."],
    ["W = 30 N · 3 m · cos 60° = 45 J", "Der Winkel 60° gehört zu F₂, nicht zur resultierenden Kraft."],
    ["W = −90 J", "Kraft und Weg zeigen in dieselbe Richtung – positiv."],
    ["W = 30 N ÷ 3 m = 10 J", "Arbeit ist Kraft mal Weg."]],
   "r": "W = 90 J" },
  { "f": "Teil b mit F₁ = 15 N: Was folgt für die Truhe?", "o": [
    ["F_res = 15 − 20 = −5 N (nach rechts) → W = −15 J → E_kin nimmt um 15 J ab; die Truhe muss sich schon zu Beginn nach links bewegt haben", "Aus der Ruhe wäre E_kin,Ende = 0 − 15 J negativ – unmöglich. Also war sie schon in Bewegung."],
    ["W = −15 J, die Truhe startet aus der Ruhe nach links", "Aus der Ruhe kann die kinetische Energie nicht weiter sinken."],
    ["W = +15 J, die Truhe wird schneller", "Die resultierende Kraft zeigt gegen die Bewegung, also negative Arbeit."],
    ["W = 0, weil sich die Kräfte aufheben", "15 N und 20 N heben sich nicht auf."]],
   "r": "ΔE_kin = −15 J, Truhe war schon in Bewegung" }],
 "fazit": "Rezept: Kräfte in Komponenten zerlegen → nur Anteile in Wegrichtung → W = F_res · d · cos θ → Arbeitssatz W = ΔE_kin. Eine negative Gesamtarbeit bremst."
});
aufgabe({
 "id": "phys-b6-a4", "f": "phys", "t": "Arbeit und Energie", "titel": "Auto beschleunigt gleichmäßig – Leistung", "s": "Physik Übung 6, Aufgabe 4",
 "angabe": "Ein Auto (m = 1200 kg) beschleunigt aus dem Stand gleichmäßig in t₁ = 10 s auf v₁ = 20 m/s. Wie viel Arbeit ist nötig, welche Leistung braucht es bei t₁ und welche nach der halben Zeit?",
 "geg": ["m = 1200 kg", "v₀ = 0, v₁ = 20 m/s", "t₁ = 10 s"],
 "ges": "Arbeit W, Leistung P₁ bei t₁, Leistung P₂ bei t₂ = 5 s",
 "schritte": [
  { "f": "Wie viel Arbeit ist nötig?", "o": [
    ["W = ΔE_kin = ½ · 1200 · 20² = 240 000 J = 240 kJ", "Arbeitssatz: Aus der Ruhe ist E_kin,0 = 0."],
    ["W = 1200 · 20² = 480 kJ", "Der Faktor ½ fehlt."],
    ["W = ½ · 1200 · 20 = 12 kJ", "v muss quadriert werden."],
    ["W = 1200 · 9,81 · 20 = 235 kJ", "Das wäre Hubarbeit – das Auto fährt waagerecht."]],
   "r": "W = 240 kJ" },
  { "f": "Wie groß sind Beschleunigung und Antriebskraft?", "o": [
    ["a = 20 ÷ 10 = 2 m/s², F = m · a = 1200 · 2 = 2400 N", "Gleichmäßig beschleunigt: a = Δv ÷ Δt, dann zweites Newtonsches Gesetz."],
    ["a = 10 ÷ 20 = 0,5 m/s², F = 600 N", "Der Bruch ist umgedreht."],
    ["a = 2 m/s², F = 1200 N", "F = m · a, nicht nur m."],
    ["F = W ÷ t = 24 000 N", "Arbeit durch Zeit ist Leistung, keine Kraft."]],
   "r": "a = 2 m/s², F = 2400 N" },
  { "f": "Welche Leistung braucht das Auto bei t₁ = 10 s?", "o": [
    ["P₁ = F · v₁ = 2400 · 20 = 48 000 W = 48 kW", "Bei einer Kraft in Bewegungsrichtung gilt P = F · v."],
    ["P = W ÷ t = 240 000 ÷ 10 = 24 kW", "Das ist die mittlere Leistung über die ganze Zeit, nicht die am Ende."],
    ["P = F ÷ v = 120 W", "P = F mal v."],
    ["P = m · v = 24 000 W", "Das ist der Impuls, keine Leistung."]],
   "r": "P₁ = 48 kW" },
  { "f": "Welche Leistung braucht es nach der halben Zeit (t₂ = 5 s)?", "o": [
    ["v₂ = 2 · 5 = 10 m/s → P₂ = 2400 · 10 = 24 kW – halb so groß", "Die Kraft bleibt gleich, die Geschwindigkeit ist halb so groß."],
    ["P₂ = P₁ = 48 kW, weil die Kraft konstant ist", "P hängt auch von v ab."],
    ["P₂ = 48 ÷ 4 = 12 kW, weil E_kin mit v² wächst", "Die Energie ist ein Viertel, die Leistung aber die Hälfte."],
    ["P₂ = 2400 · 5 = 12 kW", "In P = F · v gehört die Geschwindigkeit, nicht die Zeit."]],
   "r": "P₂ = 24 kW" }],
 "fazit": "Bei konstanter Kraft wächst die Leistung mit der Geschwindigkeit: P = F · v. Nach der halben Zeit ist P halb so groß, die kinetische Energie aber nur ein Viertel."
});
/* Patch-Warteschlange · Angewandte Statistik · Übung 03 Einführung in die Tabellenkalkulation (Martens/Özcan/Li, 18 Folien) · erstellt 19.11.2026 · Befehle an den Folien geprüft */
const TK19 = "Tabellenkalkulation";
const TK19z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);
THEMEN["stat|Tabellenkalkulation"] = "In Excel beginnt jede Formel mit „=“. Zellbezüge sind relativ (A1, wandern beim Kopieren mit), absolut ($A$1, bleiben fest) oder gemischt ($A1, A$1); F4 schaltet um. Funktionen für Bereiche: SUMME, ANZAHL, MITTELWERT, MIN, MAX, ZÄHLENWENN, SUMMEWENN; Logik mit WENN, UND, ODER. SVERWEIS ordnet über eine Tabelle zu, deren erste Spalte das Suchkriterium enthält. Matrixfunktionen (MTRANS, MMULT, MINV, MDET): Zielbereich markieren und mit Strg+Shift+Enter abschließen. Winkelfunktionen rechnen im Bogenmaß.";

mc("stat", TK19, "Womit beginnt in Excel jede Formel?", ["Mit einem Gleichheitszeichen, z. B. =3+8", "Mit einem Pluszeichen", "Mit dem Funktionsnamen, z. B. SUMME", "Mit einem Apostroph"], "Ohne „=“ hält Excel die Eingabe für Text oder eine Zahl. Das Ergebnis erscheint, sobald man die Zelle verlässt.", "Statistik Übung 03, Folie 5");
TK19z({ st: 1 });
pair("stat", TK19, "Was passiert mit dem Bezug, wenn du die Formel nach rechts und nach unten kopierst?", [["A1", "Spalte und Zeile wandern mit (relativ)"], ["$A$1", "bleibt fest (absolut)"], ["$A1", "Spalte fest, Zeile wandert mit"], ["A$1", "Zeile fest, Spalte wandert mit"]], "Das $ friert den Teil ein, vor dem es steht. Mit F4 schaltet man beim Eingeben durch die vier Varianten. Absolute Bezüge braucht man z. B. für eine Konstante oder die Tabelle im SVERWEIS.", "Statistik Übung 03, Folie 7");
TK19z({ st: 2 });
mc("stat", TK19, "Mit welcher Taste schaltest du einen markierten Zellbezug zwischen relativ, absolut und gemischt um?", ["F4", "F2", "F9", "Strg + $"], "F2 öffnet dagegen die Formel einer markierten Zelle zum Bearbeiten.", "Statistik Übung 03, Folien 6–7");
TK19z({ st: 1 });
mc("stat", TK19, "Du rechnest =SIN(30) und bekommst −0,988 statt 0,5. Warum?", ["Excel rechnet Winkelfunktionen im Bogenmaß – 30° müssen erst umgerechnet werden: =SIN(BOGENMASS(30)) oder =SIN(30*PI()/180)", "SIN funktioniert in Excel nur mit Zellbezügen", "Excel rundet falsch", "Man muss SIN klein schreiben"], "30 wird als 30 Radiant gelesen. π heißt in Excel PI(), die Wurzel WURZEL(x), die Potenz x^2. Punkt vor Strich beachtet Excel automatisch.", "Statistik Übung 03, Folie 9");
TK19z({ st: 2 });
mc("stat", TK19, "Was macht =ZÄHLENWENN(B2:B9;\">4\")?", ["Es zählt, wie viele Zellen in B2:B9 größer als 4 sind", "Es addiert alle Werte in B2:B9, die größer als 4 sind", "Es prüft, ob B2 größer als 4 ist, und gibt WAHR oder FALSCH aus", "Es zählt alle Zellen in B2:B9"], "SUMMEWENN funktioniert genauso, addiert aber die Werte statt sie zu zählen. Für einfache Bedingungen nimmt man WENN(Bedingung; dann; sonst).", "Statistik Übung 03, Folie 12");
TK19z({ st: 1 });
mc("stat", TK19, "Was gibt =UND(A1>0; B1>0) zurück?", ["WAHR nur, wenn beide Bedingungen erfüllt sind", "WAHR, wenn mindestens eine Bedingung erfüllt ist", "Die Summe von A1 und B1", "Immer den größeren der beiden Werte"], "ODER gibt WAHR, sobald mindestens eine Bedingung stimmt. Beide Funktionen nehmen auch mehr als zwei Bedingungen.", "Statistik Übung 03, Folie 13");
TK19z({ st: 1 });
mc("stat", TK19, "Was muss für SVERWEIS(Suchkriterium; Matrix; Spaltenindex; Bereich_Verweis) erfüllt sein?", ["Das Suchkriterium muss in der ersten Spalte der Matrix stehen", "Die Matrix muss sortiert absteigend sein", "Der Spaltenindex zählt ab der Spalte A des Blatts", "Die Matrix darf nur zwei Spalten haben"], "SVERWEIS sucht immer senkrecht in der ersten Spalte und gibt den Wert aus der Spalte mit dem angegebenen Index zurück (1 = erste Spalte der Matrix). Die Matrix gibt man als absoluten Bezug an, damit sie beim Kopieren nicht wegrutscht.", "Statistik Übung 03, Folie 14");
TK19z({ st: 2 });
mc("stat", TK19, "Was bewirkt der letzte Parameter Bereich_Verweis im SVERWEIS?", ["FALSCH: nur exakte Treffer. WAHR (Standard): nächstkleinerer Wert – praktisch für Notenschlüssel mit Untergrenzen", "FALSCH: sucht in Zeilen statt Spalten", "WAHR: gibt immer den ersten Wert der Tabelle zurück", "Er legt fest, wie viele Nachkommastellen angezeigt werden"], "Bei WAHR muss die erste Spalte aufsteigend sortiert sein. Bei einem Notenschlüssel mit Punkteuntergrenzen liefert WAHR dann für 47 Punkte die Note der Untergrenze 45.", "Statistik Übung 03, Folie 14");
TK19z({ st: 3 });
mc("stat", TK19, "Wie rechnest du in Excel A · B mit MMULT?", ["Den ganzen Zielbereich (Zeilen von A × Spalten von B) markieren, =MMULT(A;B) eingeben und mit Strg+Shift+Enter abschließen", "In eine einzelne Zelle =MMULT(A;B) schreiben und Enter drücken", "=A*B, Excel erkennt Matrizen selbst", "MMULT gibt es nicht, man rechnet mit SUMMENPRODUKT"], "Genauso funktionieren MTRANS, MINV und MDET (MDET liefert nur eine Zahl). Bei A (2, 3) und B (3, 4) markiert man also 2 Zeilen und 4 Spalten.", "Statistik Übung 03, Folie 16");
TK19z({ st: 3, ev: "matrix2" });
ord("stat", TK19, "Histogramm mit dem Analyse-Add-In: Bring die Schritte in Reihenfolge.", ["Add-In „Analysefunktionen“ aktivieren", "Daten → Datenanalyse → Histogramm wählen", "Eingabebereich: die Datenreihe markieren", "Klassenbereich: die Klassengrenzen angeben", "Ausgabebereich wählen und mit OK erzeugen"], "Ohne aktiviertes Add-In fehlt „Datenanalyse“ im Menü. Die Klassengrenzen legt man vorher selbst fest – z. B. mit der Faustregel m ≈ 5 · log n.", "Statistik Übung 03, Folie 18");
TK19z({ st: 3 });
/* Klausurduell – Patch-Warteschlange 19.11.2026: Tiefenstufen (Tom: „Fragen nach Tiefe einstufen … von leicht zu schwer“)
   1 = Grundlagen (Begriffe, Definitionen), 2 = Verstehen (Zusammenhänge, Warum), 3 = Anwenden (Rechnen, Vorgehen, Übungsdetails).
   Alle 876 Fragen von Hand eingestuft. Neue Fragen später mit Object.assign(STUFE, {...}) ergänzen; ohne Eintrag gilt Stufe 2. */
const STUFE = {
  /* Hydromechanik */
  "hydro-znlhn0": 1,  // Eigenschaften des Wassers: Bei welcher Temperatur hat Wasser seine größte Dichte?
  "hydro-1it3854": 1,  // Eigenschaften des Wassers: Eis ist dichter als flüssiges Wasser.
  "hydro-rm7bue": 1,  // Eigenschaften des Wassers: Welche Dichte nimmst du für Süßwasser, wenn die Aufgabe nichts angibt?
  "hydro-i7fp7v": 2,  // Eigenschaften des Wassers: Welchen Dichtewert nimmt man in Aufgaben meist für Meerwasser?
  "hydro-st3tc5": 1,  // Eigenschaften des Wassers: In Hydromechanik I darf Wasser als inkompressibel angesehen werden.
  "hydro-ixgwqx": 1,  // Eigenschaften des Wassers: Was beschreibt die Viskosität?
  "hydro-18gphow": 1,  // Eigenschaften des Wassers: Ordne zu.
  "hydro-1my7un9": 1,  // Eigenschaften des Wassers: Je dünner ein Glasröhrchen, desto …
  "hydro-1kj9das": 2,  // Eigenschaften des Wassers: In welchem Boden ist der kapillare Aufstieg am größten?
  "hydro-1lut2t5": 1,  // Hydrostatik 1: Welche Spannungen kann ruhendes Wasser aufnehmen?
  "hydro-1aedhad": 1,  // Hydrostatik 1: Wie wächst der hydrostatische Druck mit der Tiefe?
  "hydro-xt7inu": 2,  // Hydrostatik 1: Wo greift die Wasserdruckkraft auf eine senkrechte Wand an?
  "hydro-1y6rqsj": 2,  // Hydrostatik 1: 10 m Wassersäule entsprechen ungefähr …
  "hydro-ilvrv8": 1,  // Hydrostatik 1: Ab welchem Bezugswert wird der Relativdruck gemessen?
  "hydro-1ijl9q2": 1,  // Hydrostatik 1: Der Wasserdruck steht immer senkrecht auf einer Fläche.
  "hydro-xuuxbp": 1,  // Hydrostatik 1: Öl über Wasser: Wie sieht der Druckverlauf an der Schichtgrenze aus?
  "hydro-15hgt78": 2,  // Hydrostatik 1: Goldene Regel bei kommunizierenden Röhren:
  "hydro-1lwzvdz": 3,  // Hydrostatik 1: Bring das Vorgehen beim U-Rohr-Manometer in die richtige Reihenfolge.
  "hydro-19jler": 2,  // Hydrostatik 1: Kraft auf eine beliebige ebene, geneigte Fläche:
  "hydro-13ujru0": 2,  // Hydrostatik 1: Gekrümmte Fläche: Was ist die vertikale Kraftkomponente F_V?
  "hydro-e9u7cq": 2,  // Hydrostatik 2: Auf welcher Seite dichtet man eine Gründungsfuge ab?
  "hydro-ex3mwj": 1,  // Hydrostatik 2: Prinzip des Archimedes: Der Auftrieb ist gleich …
  "hydro-51q3cc": 2,  // Hydrostatik 2: Ein vollständig getauchter Körper erfährt in größerer Tiefe mehr Auftr
  "hydro-cj8x2y": 2,  // Hydrostatik 2: Ein Schiff fährt vom Fluss ins Meer. Was passiert?
  "hydro-97cbqu": 2,  // Hydrostatik 2: Wenn schwimmendes Eis schmilzt, steigt der Wasserspiegel.
  "hydro-1gg4f1f": 3,  // Hydrostatik 2: Schwimmt der Körper – und wie tief? Bring die Schritte in die richtige
  "hydro-1o00p49": 3,  // Hydrostatik 2: Wägung in Luft und in Wasser: Wie bestimmst du die Dichte?
  "hydro-nfost0": 2,  // Hydrostatik 2: Ein Wasserbehälter wird nach oben beschleunigt. Was passiert mit dem D
  "hydro-di3hec": 3,  // Hydrostatik 2: Wie stellt sich der Wasserspiegel in einem beschleunigten Tankwagen ei
  "hydro-6t1skk": 1,  // Hydrostatik 2: Was ist der Freibord?
  /* Physik */
  "phys-o9b3vr": 1,  // Einheiten: Wie viele SI-Basiseinheiten gibt es?
  "phys-1id2kws": 1,  // Einheiten: Ordne die Größe ihrer SI-Basiseinheit zu.
  "phys-ud82sv": 1,  // Einheiten: Ordne den Vorsatz dem Faktor zu.
  "phys-1f7nlmc": 2,  // Einheiten: Wie viele signifikante Stellen hat 0,00340?
  "phys-2g2zee": 2,  // Einheiten: Wie schreibt man Variablen und Konstanten korrekt?
  "phys-48qm08": 1,  // Einheiten: Ein Diagramm ohne beschriftete Achsen gibt in Übung und Klausur trotzd
  "phys-1lk98g4": 1,  // Geradlinige Bewegung: Was ist die Geschwindigkeit mathematisch?
  "phys-srxy2e": 2,  // Geradlinige Bewegung: Was bedeutet die Fläche unter der v(t)-Kurve?
  "phys-y8fvi3": 1,  // Geradlinige Bewegung: Was zeigt die Steigung im x(t)-Diagramm?
  "phys-2j5sqv": 1,  // Geradlinige Bewegung: Ordne die Teilgebiete der Mechanik zu.
  "phys-f65lrm": 1,  // Geradlinige Bewegung: Welche Größe ist ein Skalar?
  "phys-f6ln5f": 3,  // Geradlinige Bewegung: Gleiche Strecken mit v₁ und v₂: Welche Durchschnittsgeschwindigkeit?
  "phys-172no65": 1,  // Vektoren: Was ergibt das Skalarprodukt zweier senkrechter Vektoren?
  "phys-15jes7s": 1,  // Vektoren: Was ist das Ergebnis eines Kreuzprodukts a × b?
  "phys-1ilc9ju": 2,  // Vektoren: Für das Kreuzprodukt gilt a × b = b × a.
  "phys-16zxk29": 2,  // Vektoren: Kreuzprodukt zweier paralleler oder antiparalleler Vektoren:
  "phys-p71035": 2,  // Vektoren: Du bestimmst einen Richtungswinkel mit arctan. Worauf musst du achten?
  "phys-18o9616": 3,  // Vektoren: Mit welcher Funktion bestimmst du den Winkel θ zur z-Achse?
  "phys-1w6izjb": 1,  // Bewegung in 2D/3D: Welche Beschleunigung wirkt beim Wurf ohne Luftwiderstand?
  "phys-tdkp2p": 1,  // Bewegung in 2D/3D: Beim schiefen Wurf ohne Luftwiderstand bleibt die horizontale Geschwin
  "phys-1l9rk00": 1,  // Bewegung in 2D/3D: Was gilt im Scheitelpunkt eines Wurfs?
  "phys-8boirg": 1,  // Bewegung in 2D/3D: Wohin zeigt die Beschleunigung bei gleichförmiger Kreisbewegung?
  "phys-cym280": 2,  // Bewegung in 2D/3D: Bei gleichförmiger Kreisbewegung ist die Beschleunigung null, weil |v|
  "phys-1cf32wh": 3,  // Bewegung in 2D/3D: Vorgehen bei einer Wurfaufgabe (wie Blatt 3): Bring die Schritte in Re
  /* Baustoffkunde */
  "bsk-8fmkhs": 1,  // Einteilung und Grundlagen: Ordne den Baustoff seiner Gruppe zu.
  "bsk-gt8pm2": 1,  // Einteilung und Grundlagen: Welches Bindemittel erhärtet auch unter Wasser?
  "bsk-b72vun": 1,  // Einteilung und Grundlagen: Gips ist wasserbeständig.
  "bsk-1mntta1": 1,  // Einteilung und Grundlagen: Was gehört NICHT zu den vier Kriterien, nach denen man Baustoffe beurt
  "bsk-1avb9ku": 1,  // Einteilung und Grundlagen: Vitruvs drei Anforderungen an jedes Bauwerk:
  "bsk-1etwl4g": 2,  // Einteilung und Grundlagen: Seit wann gibt es etwa Stahlbeton?
  "bsk-11q6gpm": 2,  // Einteilung und Grundlagen: Welche Einwirkung ist ein chemischer Angriff auf die Dauerhaftigkeit?
  "bsk-1u9wdgu": 1,  // Mechanische Eigenschaften: Ordne die Beanspruchung einem Bauteil zu.
  "bsk-2yna6f": 2,  // Mechanische Eigenschaften: Warum werden Balken hochkant eingebaut?
  "bsk-19xavjv": 1,  // Mechanische Eigenschaften: Welches Vorzeichen hat eine Druckspannung?
  "bsk-1x369fo": 2,  // Mechanische Eigenschaften: Mehrachsiger Druck auf ein Bauteil …
  "bsk-2w9wv5": 1,  // Mechanische Eigenschaften: Was bewirkt eine häufig wiederholte, schwingende Belastung?
  "bsk-22yqqh": 1,  // Mechanische Eigenschaften: Was ist die Steigung der σ-ε-Linie im linearen Bereich?
  "bsk-1wd3gvi": 1,  // Mechanische Eigenschaften: Elastisch bedeutet: Die Verformung geht bei Entlastung vollständig zur
  "bsk-f431yn": 2,  // Mechanische Eigenschaften: Ordne die Begriffe zu.
  "bsk-1q6qprz": 1,  // Mechanische Eigenschaften: Wie groß ist die Zugfestigkeit von Beton etwa?
  "bsk-1pbmsul": 1,  // Mechanische Eigenschaften: E-Modul von Baustahl:
  "bsk-13k7trg": 2,  // Mechanische Eigenschaften: Was bedeutet eine Querdehnzahl µ = 0,5?
  "bsk-1g5sk6t": 2,  // Mechanische Eigenschaften: Beton und Stahl dehnen sich bei Erwärmung fast gleich aus.
  "bsk-f7qqma": 2,  // Mechanische Eigenschaften: Wie verhält sich Baustahl bei Kälte im Kerbschlagversuch?
  "bsk-yshq77": 2,  // Mechanische Eigenschaften: Ordne den σ-ε-Typ einem Beispiel zu.
  "bsk-1h1mgnk": 3,  // Mechanische Eigenschaften: E-Modul aus einem σ-ε-Diagramm bestimmen: Reihenfolge?
  "bsk-1yw2ld2": 3,  // Mechanische Eigenschaften: Spannungsnachweis einer Stütze (wie Ü01): Reihenfolge?
  "bsk-18plyw2": 2,  // Physikalische Eigenschaften: Ordne die Dichten von groß nach klein.
  "bsk-103008u": 2,  // Physikalische Eigenschaften: Welcher Baustoff ist pro Kilogramm am zugfestesten?
  "bsk-1qnzdp5": 1,  // Physikalische Eigenschaften: Was ist die Porosität?
  /* Baukonstruktion */
  "bauko-mctp1e": 1,  // Sicherheitskonzept: Wie lautet der Grundnachweis im Sicherheitskonzept?
  "bauko-rzenis": 1,  // Sicherheitskonzept: Ordne zu.
  "bauko-17j0mws": 1,  // Sicherheitskonzept: Teilsicherheitsbeiwert γ_G für ständige Lasten, ungünstig:
  "bauko-1ux93gw": 1,  // Sicherheitskonzept: Teilsicherheitsbeiwert γ_Q für veränderliche Lasten, ungünstig:
  "bauko-11mh47e": 1,  // Sicherheitskonzept: Ordne die Einwirkungsgruppen zu.
  "bauko-hth9ye": 2,  // Sicherheitskonzept: Ein Fahrzeug prallt gegen eine Stütze. Welche Einwirkung ist das?
  "bauko-ererno": 2,  // Sicherheitskonzept: Rechen- und Ausführungsfehler sind durch die Teilsicherheitsbeiwerte a
  "bauko-145f6od": 2,  // Sicherheitskonzept: Ordne den Kombinationsbeiwert ψ₀ zu.
  "bauko-15fn0bl": 2,  // Sicherheitskonzept: Wie lautet die Grundkombination?
  "bauko-98wn6h": 1,  // Lasten: Welche Last ist eine veränderliche Einwirkung?
  "bauko-1q069cb": 2,  // Lasten: Wie wirken die Lasten auf einen Sparren?
  "bauko-zfmokj": 2,  // Lasten: Wie rechnest du das Eigengewicht eines geneigten Sparrens auf die Grun
  "bauko-1c4tkbo": 1,  // Lasten: Wie groß ist die Einzugsbreite gleichmäßig verteilter Sparren?
  "bauko-afvv76": 1,  // Lasten: Welches Vorzeichen hat Windsog?
  "bauko-9asphl": 2,  // Lasten: Wie bestimmt man das Maß e für die Windbereiche F, G, H, J, I?
  "bauko-1das95b": 1,  // Lasten: Wie groß ist die Mannlast auf dem Dach?
  "bauko-1068ry9": 2,  // Lasten: Schneeformbeiwert μ₁ bei einer Dachneigung ab 60°:
  "bauko-vl4hbi": 2,  // Lasten: Wichten zum Auswendigkönnen:
  "bauko-pmhn93": 2,  // Lasten: Schnee und Eigengewicht addiert man gleich am Anfang zu einer Last.
  "bauko-19ou21o": 1,  // Rechenweg: Das Rezept für jede Bauko-Aufgabe: Bring die Schritte in Reihenfolge.
  "bauko-uw1gse": 2,  // Rechenweg: Ab welchem Schritt kommen die Teilsicherheitsbeiwerte dazu?
  "bauko-7f3ih6": 1,  // Rechenweg: Lastweg im Pfettendach: Bring die Bauteile in Reihenfolge.
  "bauko-12q99s6": 2,  // Rechenweg: Auflagerkräfte allgemein bestimmen: Reihenfolge?
  "bauko-1slgrhw": 2,  // Rechenweg: Einfeldträger – ordne zu.
  "bauko-e89w9q": 2,  // Rechenweg: Viele Sparren liegen auf einer Pfette. Wie wird ihre Last für die Pfet
  "bauko-zfi11p": 2,  // Rechenweg: Durchlaufträger: Wie bekommt man eine Auflagerkraft?
  "bauko-1kpche7": 2,  // Holzbemessung: Welche Kombination ist bei Holz maßgebend?
  "bauko-1ui6k8o": 2,  // Holzbemessung: Ordne die Klasse der Lasteinwirkungsdauer zu.
  "bauko-1j1gkm2": 1,  // Holzbemessung: Teilsicherheitsbeiwert γ_M für Holz:
  "bauko-h48m33": 2,  // Holzbemessung: Windsog wirkt günstig gegen das Eigengewicht (Abheben). Welches γ_G gi
  "bauko-15bpjla": 3,  // Holzbemessung: Biegenachweis Holzbalken: Bring die Schritte in Reihenfolge.
  "bauko-1ia58qg": 1,  // Holzbemessung: Biegefestigkeit f_m,k von Vollholz C24:
  /* Bauinformatik */
  "binf-1gmrfdi": 1,  // Java und JDK: Vom Quellcode zur Ausgabe: Reihenfolge?
  "binf-vuzr0z": 1,  // Java und JDK: Ordne zu.
  "binf-2rrna6": 1,  // Java und JDK: Welche Fehler findet der Compiler?
  "binf-1fh1tww": 1,  // Java und JDK: Welches Programmierparadigma ist Java?
  "binf-1bvtg57": 1,  // Programmrahmen: Wo startet jedes Java-Programm?
  "binf-1d4xamc": 1,  // Programmrahmen: Java unterscheidet Groß- und Kleinschreibung.
  "binf-17sbrm4": 1,  // Programmrahmen: Was unterscheidet println von print?
  "binf-lqvqv3": 2,  // Programmrahmen: Ordne die Escape-Sequenz zu.
  "binf-1dxe92g": 2,  // Programmrahmen: Welches Package ist immer automatisch importiert?
  "binf-1v7o0hj": 2,  // Programmrahmen: Welcher Token-Typ ist das?
  "binf-x9t0cr": 1,  // Programmrahmen: Welcher Bezeichner ist ungültig?
  "binf-1vkl5nd": 1,  // Datentypen: Welcher Datentyp ist der Standard für Kommazahlen?
  "binf-f3uvr5": 2,  // Datentypen: Welchen Wertebereich hat byte?
  "binf-vuyxih": 1,  // Datentypen: Ordne zu.
  "binf-1glct40": 1,  // Datentypen: In Java schreibt man Kommazahlen mit Komma, also 2,5.
  "binf-feqhgq": 1,  // Datentypen: String ist ein primitiver Datentyp.
  "binf-s4rgd1": 1,  // Operatoren: Was gibt System.out.println(7 / 2); aus?
  "binf-urk71c": 2,  // Operatoren: Was gibt System.out.println(1 + 2 + "3"); aus?
  "binf-olpynk": 2,  // Operatoren: Was gibt System.out.println("1" + 2 + 3); aus?
  "binf-xd5cv7": 2,  // Operatoren: Was unterscheidet && von &?
  "binf-13tkpws": 1,  // Operatoren: Was ist der Unterschied zwischen = und ==?
  /* Statistik */
  "stat-1e6lp85": 2,  // Einführung: Wann sind Daten repräsentativ?
  "stat-1mansf7": 1,  // Einführung: Begriffe am Betonfertigteil – ordne zu.
  "stat-1k16rzz": 1,  // Einführung: Wie gehst du mit einer Messreihe vor?
  "stat-1o65oqa": 1,  // Matrizen: Was bedeutet der Index bei a_ij?
  "stat-w1qpum": 1,  // Matrizen: Was passiert beim Transponieren einer (m, n)-Matrix?
  "stat-1dphzz": 1,  // Matrizen: Wann ist das Produkt A·B definiert?
  "stat-kniqu7": 2,  // Matrizen: Welche Ordnung hat das Produkt einer (2, 3)- mit einer (3, 4)-Matrix?
  "stat-14o1dxo": 1,  // Matrizen: Für Matrizen gilt immer A·B = B·A.
  "stat-1k4n50j": 1,  // Matrizen: Ordne die Sonderform zu.
  "stat-jb0678": 2,  // Matrizen: Was folgt aus det A = 0?
  "stat-wgpjz8": 1,  // Matrizen: Für welche Matrizen gilt die Regel von Sarrus?
  "stat-1vax8ar": 2,  // Matrizen: Determinante einer Dreiecksmatrix:
  "stat-5jgbsi": 1,  // Matrizen: Wann sind zwei Vektoren orthogonal?
  "stat-1td8wl9": 1,  // Matrizen: Was ist der Rang einer Matrix?
  "stat-kk7t9b": 2,  // Matrizen: Elementare Zeilenumformungen ändern den Rang nicht.
  "stat-ik4lhq": 2,  // Matrizen: Was gilt für (A·B)′?
  "stat-600vua": 3,  // Matrizen: Inverse mit Gauß-Jordan: Reihenfolge?
  "stat-qz5ec": 2,  // Matrizen: Womit kontrollierst du ein Matrixprodukt im Falk-Schema?
  /* DAP */
  "dap-1m09d52": 2,  // Daten und Befragungen: Ordne die Datenquelle ihrer Eigenschaft zu.
  "dap-1curda4": 1,  // Daten und Befragungen: Mit welcher großen deutschen Haushaltsbefragung arbeitet der Kurs?
  "dap-709jaf": 1,  // Daten und Befragungen: Ordne die Erhebungsform zu.
  "dap-1dbh746": 1,  // Daten und Befragungen: Was ist Unit-Nonresponse?
  "dap-4ps7qt": 2,  // Daten und Befragungen: Typische Folge von Item-Nonresponse in Mobilitätsbefragungen:
  "dap-1jl3b9m": 2,  // Daten und Befragungen: Ordne die passive Datenquelle ihrer Stärke zu.
  "dap-735p5p": 2,  // Daten und Befragungen: Was ist ein Triple-Frame-Sample?
  "dap-1r6a7r0": 1,  // Gewichtung und Post-Processing: Bei der Stichprobenvarianz teilt man durch n.
  "dap-1pxh2sq": 1,  // Gewichtung und Post-Processing: Welcher Lageparameter ist robust gegen Ausreißer?
  "dap-6nqleu": 1,  // Gewichtung und Post-Processing: Was ist der Variationskoeffizient?
  "dap-1byhi4b": 2,  // Gewichtung und Post-Processing: Pkw pro Einwohner von vier Millionenstädten: Wie mittelst du richtig?
  "dap-v1dr0f": 3,  // Gewichtung und Post-Processing: Die MiD-Hochrechnung ergab 58 Mio. Pkw, das KBA zählt rund 44 Mio. War
  "dap-1lzlilw": 3,  // Gewichtung und Post-Processing: Phänomen und Korrektur – ordne zu.
  "dap-aamenv": 2,  // Gewichtung und Post-Processing: Warum schichtet man disproportional (BEV-Beispiel)?
  "dap-1jmnlws": 2,  // Gewichtung und Post-Processing: Themenbezogene Selektivität lässt sich gut durch Gewichtung korrigiere
  "dap-rloqz2": 2,  // Gewichtung und Post-Processing: Wie berechnet sich das Gewicht w beim Redressment?
  "dap-814yna": 2,  // Gewichtung und Post-Processing: Junge Menschen sind in der MiD unterrepräsentiert. Wie groß ist ihr Ge
  "dap-12e446s": 3,  // Gewichtung und Post-Processing: Iterative Proportional Fitting: Bring die Schritte in Reihenfolge.
  "dap-kawpmb": 2,  // Gewichtung und Post-Processing: Post-Processing einer Befragung: Reihenfolge?
  "dap-bphyhs": 1,  // Gewichtung und Post-Processing: Was ist Imputation?
  "dap-1qg88ep": 1,  // Gewichtung und Post-Processing: Wie ist die Response Rate definiert?
  "dap-17r1ojd": 1,  // R-Grundlagen: Mit welchem Operator weist man in R einen Wert zu?
  "dap-3h4n61": 1,  // R-Grundlagen: Bei welchem Index beginnt ein Vektor in R?
  "dap-kqmnsi": 2,  // R-Grundlagen: Was ergibt c('a', 100L, TRUE, 3)?
  "dap-14vjgrr": 1,  // R-Grundlagen: Ordne die Datenstruktur zu.
  "dap-1sgpysp": 2,  // R-Grundlagen: Durch was teilen sd() und var() in R?
  "dap-hjo7uh": 2,  // R-Grundlagen: Was ergibt rep(c(1, 2), each = 2)?
  "dap-7so915": 2,  // R-Grundlagen: Wie füllt matrix(c(5, 6, 7, 8), nrow = 2) die Werte ein?
  "dap-hiurno": 2,  // R-Grundlagen: In R sind x und X dieselbe Variable.
  "dap-9u2ow8": 1,  // Verteilungen: Ordne zu.
  "dap-1ror1s3": 1,  // Verteilungen: Was bedeutet die Fläche unter der PDF zwischen a und b?
  "dap-1cwy9xt": 1,  // Verteilungen: Normalverteilung: Welcher Anteil liegt im Bereich?
  "dap-o0fj1t": 1,  // Verteilungen: Welche Parameter hat die Standardnormalverteilung?
  "dap-148scko": 2,  // Verteilungen: Wie lautet die z-Standardisierung?
  "dap-12x2kpb": 3,  // Verteilungen: Zwei unabhängige Normalverteilungen werden addiert. Welche Standardabw
  "dap-ayfif0": 2,  // Verteilungen: Addiert man zwei Gleichverteilungen, entsteht wieder eine Gleichvertei
  "dap-1ej3592": 2,  // Verteilungen: Welche Dichte hat die stetige Gleichverteilung u[a, b]?
  "dap-p4y6rc": 2,  // Verteilungen: Warum ist die Normalverteilung so wichtig?
  /* Hydromechanik */
  "hydro-c8zi7o": 1,  // Hydrodynamik: Ordne die Betrachtungsweise zu.
  "hydro-d4n2dr": 2,  // Hydrodynamik: Was ist eine Potentialströmung?
  "hydro-1cbf6ji": 1,  // Hydrodynamik: Was besagt die Kontinuitätsgleichung für inkompressible Strömung?
  "hydro-163f2x": 1,  // Hydrodynamik: Bei stationärer Strömung ändert sich die Geschwindigkeit an einem fest
  "hydro-i6zpd7": 1,  // Hydrodynamik: Was ist eine Stromröhre?
  "hydro-dg9nw9": 1,  // Energiesatz: Unter welchen Bedingungen gilt die Bernoulli-Gleichung?
  "hydro-zt7h5c": 1,  // Energiesatz: Bernoulli: Ordne die Terme zu.
  "hydro-19q2zaw": 2,  // Energiesatz: Ausfluss aus einem sehr großen Behälter (Torricelli): v = ?
  "hydro-55jklh": 1,  // Energiesatz: Welche Einheit hat die Leistung?
  "hydro-1kjtiw4": 1,  // Impulssatz: Was ist der große Vorteil des Impulssatzes?
  "hydro-1b4zxi4": 1,  // Impulssatz: Wie lautet der Impulssatz in der Hydromechanik?
  "hydro-yxmu00": 2,  // Impulssatz: Was ist die Stützkraft S?
  "hydro-183ycyj": 2,  // Impulssatz: Impulssatz anwenden: Bring die Schritte in Reihenfolge.
  "hydro-1f2v8ot": 1,  // Gerinneströmung: Ordne den Fließzustand zu.
  "hydro-19p0szi": 2,  // Gerinneströmung: Wie groß ist die Mindestenergiehöhe im Grenzzustand?
  "hydro-jxkt23": 1,  // Gerinneströmung: Was beschreibt die Froude-Zahl?
  "hydro-1taypbe": 2,  // Gerinneströmung: Wann bildet sich ein Wechselsprung?
  "hydro-17jjex4": 2,  // Gerinneströmung: Bei der Grenztiefe ist die Fließgeschwindigkeit gleich …
  /* Baukonstruktion */
  "bauko-mqtpgg": 1,  // Einwirkungen: Wovon hängt die charakteristische Schneelast am Boden s_k ab?
  "bauko-yeobhi": 2,  // Einwirkungen: Bis zu welcher Geländehöhe gilt die Schneenorm?
  "bauko-13xkdvd": 2,  // Einwirkungen: Was gilt für die Schneelastzonen 1a und 2a?
  "bauko-d0eyek": 2,  // Einwirkungen: Mindestwert der Schneelast s_k in Zone 2:
  "bauko-14n5zlt": 1,  // Einwirkungen: Was zählt laut V02 auch zur Nutzlast?
  "bauko-1jf6jlt": 2,  // Einwirkungen: Ab welcher Nutzlast entfällt der Trennwandzuschlag?
  "bauko-txmrge": 2,  // Einwirkungen: Trennwandzuschlag – ordne zu.
  "bauko-z0delh": 1,  // Einwirkungen: Wovon hängt der Geschwindigkeitsdruck q_p ab?
  "bauko-ywnwk6": 2,  // Einwirkungen: Die Dachneigung liegt zwischen zwei Tabellenwerten für c_pe. Was tust 
  "bauko-185hjzj": 1,  // Einwirkungen: Ordne die Bezeichnung zu.
  "bauko-18x0w3r": 1,  // Einwirkungen: Welche Norm regelt was?
  "bauko-1leeuhg": 2,  // Sicherheitskonzept: Auf welchem Zeitraum beruhen die charakteristischen Lasten?
  "bauko-1xbh9bh": 3,  // Sicherheitskonzept: ψ₂ für Nutzlast Kategorie A (Wohnen):
  "bauko-14ormv2": 2,  // Holzbemessung: Höhenbeiwert k_h für Vollholz mit h ≥ 150 mm:
  /* Baustoffkunde */
  "bsk-1c6gmac": 2,  // Physikalische Eigenschaften: Ordne die Porosität zu.
  "bsk-jupvyc": 2,  // Physikalische Eigenschaften: Geschlossene Poren und Sackporen leiten Wasser durch den Baustoff.
  "bsk-vteuvr": 2,  // Physikalische Eigenschaften: Warum helfen Luftporen im Beton gegen Frostschäden?
  "bsk-1f1zocn": 2,  // Physikalische Eigenschaften: Ordne dem Transportvorgang seinen Treiber zu.
  "bsk-xvsjup": 1,  // Physikalische Eigenschaften: Welche Kapillaren saugen höher?
  "bsk-xoj0q8": 1,  // Physikalische Eigenschaften: Faustregel zur Wärmedämmung:
  "bsk-j91q": 2,  // Physikalische Eigenschaften: Ordne nach Wärmeleitfähigkeit λ – von klein nach groß.
  "bsk-1bi6aw8": 1,  // Physikalische Eigenschaften: Welche Fassade wird in der Sonne am heißesten?
  "bsk-sknjqf": 2,  // Einteilung und Grundlagen: Wie ist die Kuppel des Pantheons aufgebaut?
  "bsk-y5yhgl": 3,  // Mechanische Eigenschaften: Wie hängt der Schubmodul G mit E und µ zusammen?
  "bsk-1uj5ag0": 2,  // Mechanische Eigenschaften: Wie funktioniert die Härteprüfung nach Brinell?
  "bsk-175rl0p": 2,  // Mechanische Eigenschaften: Aluminium zeigt bei Kälte im Kerbschlagversuch einen Steilabfall.
  "bsk-1a3v4cm": 2,  // Mechanische Eigenschaften: Wann ist die Wöhlerlinie praktisch waagerecht?
  /* Physik */
  "phys-16e8yld": 2,  // Einheiten: Was ist ein Joule in SI-Basiseinheiten?
  "phys-185vgmg": 1,  // Einheiten: Ordne die abgeleitete Einheit zu.
  "phys-1bq3ba4": 1,  // Einheiten: Ordne den Vorsatz dem Faktor zu.
  "phys-1xj6od8": 1,  // Geradlinige Bewegung: Was ist die Beschleunigung mathematisch?
  "phys-64fd5": 2,  // Geradlinige Bewegung: Welche Formel verbindet v, a und Weg ohne die Zeit (konstante Beschleu
  "phys-10htn2c": 1,  // Geradlinige Bewegung: Ohne Luftwiderstand fallen schwere und leichte Körper gleich schnell.
  "phys-1spxrz1": 1,  // Vektoren: Welchen Betrag hat ein Einheitsvektor?
  "phys-ec8sm3": 1,  // Vektoren: Ordne zu.
  "phys-nnpp3p": 1,  // Bewegung in 2D/3D: Wie hängen Winkelgeschwindigkeit ω und Umlaufzeit T zusammen?
  "phys-so8o5a": 1,  // Bewegung in 2D/3D: Wie groß ist die Bahngeschwindigkeit bei einer Kreisbewegung?
  "phys-871r7i": 1,  // Bewegung in 2D/3D: Wie groß ist die Zentripetalbeschleunigung?
  "phys-7iz5e0": 2,  // Bewegung in 2D/3D: Bewegtes Bezugssystem: Wie addiert man Geschwindigkeiten (klassisch)?
  "phys-1s9eco0": 3,  // Bewegung in 2D/3D: Hin und zurück mit Gegen- und Rückenwind dauert ein Flug genauso lang 
  "phys-4x1yrv": 2,  // Bewegung in 2D/3D: Bei welchem Abwurfwinkel ist die Wurfweite auf ebenem Boden maximal (o
  /* Bauinformatik */
  "binf-19kp7uy": 1,  // Operatoren: Was gibt System.out.println(7 % 3); aus?
  "binf-1vnr44v": 1,  // Operatoren: int x = 5; x++; Welchen Wert hat x danach?
  "binf-16qc5pg": 2,  // Operatoren: Was gibt System.out.println((double) 7 / 2); aus?
  "binf-1xq188r": 2,  // Datentypen: Von double nach int wandelt Java automatisch um.
  "binf-e1oef9": 1,  // Programmrahmen: Ordne die Kommentarart zu.
  "binf-1ox20x6": 1,  // Programmrahmen: Wie muss die Datei der Klasse HalloRWTH heißen?
  "binf-18xou7b": 2,  // Java und JDK: Wie startest du das kompilierte Programm auf der Konsole?
  "binf-xfgu5l": 1,  // Operatoren: Welchen Wert hat !(3 > 2)?
  "binf-1irnuun": 2,  // Datentypen: Welche Dezimalzahl ist die Dualzahl 101?
  "binf-ga3khu": 1,  // Datentypen: Wie viele Bit hat ein Byte?
  "binf-103nehk": 2,  // Datentypen: Wie groß ist der Datentyp?
  "binf-s5rh8q": 2,  // Datentypen: Woraus besteht eine Gleitkommazahl nach IEEE 754?
  "binf-1nawzzj": 2,  // Datentypen: Eine lokale Variable darf gelesen werden, bevor ihr ein Wert zugewiese
  "binf-5y4lru": 3,  // Operatoren: Was gibt System.out.println("a" + 'b' + 1); aus?
  /* Statistik */
  "stat-g0lhm0": 1,  // Gleichungssysteme: Wann ist das LGS A·x = b lösbar?
  "stat-41c0oz": 1,  // Gleichungssysteme: Wann ist ein LGS eindeutig lösbar?
  "stat-mm7e0r": 2,  // Gleichungssysteme: Gauß-Verfahren: Bring die Schritte in Reihenfolge.
  "stat-1nk4qg2": 1,  // Gleichungssysteme: A ist quadratisch und regulär. Wie lautet die Lösung von A·x = b?
  "stat-1p90efz": 1,  // Matrizen: Was ist die Spur einer quadratischen Matrix?
  "stat-mmy8wh": 2,  // Matrizen: Was passiert mit der Determinante, wenn du zwei Zeilen vertauschst?
  "stat-1c5mqkl": 2,  // Matrizen: Wie berechnet man die Norm eines Vektors a in Matrixschreibweise?
  "stat-a36j49": 2,  // Matrizen: Welchen Rang kann eine (3, 5)-Matrix höchstens haben?
  "stat-1luocql": 2,  // Gleichungssysteme: Entsteht beim Gauß-Verfahren einer quadratischen Matrix eine Nullzeile
  "stat-1xzfkgf": 3,  // Matrizen: Was ist a·a′ für einen Spaltenvektor a der Länge m?
  "stat-gp8y7u": 2,  // Matrizen: Welche Diagonalelemente hat eine schiefsymmetrische Matrix?
  "stat-ed4rx2": 2,  // Einführung: Aufgaben der Statistik im Ingenieurwesen – ordne zu.
  "stat-1tyhjvz": 1,  // Einführung: Was zeigt das Beispiel mit den EM-Toren auf linearer und logarithmisch
  /* Hydromechanik */
  "hydro-4zroku": 2,  // Eigenschaften des Wassers: Zwei Röhrchen stehen in zwei Flüssigkeiten. Welche Flüssigkeit ist rec
  "hydro-b8w4f5": 2,  // Hydrostatik 1: Das Bild zeigt den Druckverlauf in einem Behälter mit zwei Schichten. 
  "hydro-1nsef8p": 1,  // Hydrostatik 2: Ein Ponton schwimmt. Wie heißt die mit ? markierte Strecke?
  /* Baustoffkunde */
  "bsk-cwwwbt": 2,  // Mechanische Eigenschaften: Welche σ-ε-Linie gehört zu Baustahl unter Zug?
  "bsk-1aa7hb8": 2,  // Mechanische Eigenschaften: Welche σ-ε-Linie zeigt einen spröden Baustoff wie Ziegel?
  "bsk-scongt": 2,  // Mechanische Eigenschaften: Welche σ-ε-Linie passt zu Beton unter Druck?
  "bsk-9xfdm1": 1,  // Mechanische Eigenschaften: Was beschreibt der waagerechte Teil der Wöhlerlinie?
  /* Baukonstruktion */
  "bauko-7h40h8": 1,  // Rechenweg: Welches Bauteil des Pfettendachs ist mit ② markiert?
  "bauko-18lo2a2": 1,  // Rechenweg: Wo ist das Biegemoment eines Einfeldträgers unter Gleichlast am größte
  /* Physik */
  "phys-at3hk": 2,  // Bewegung in 2D/3D: In welchem Punkt der Wurfbahn ist die Geschwindigkeit am kleinsten?
  "phys-wyjj8g": 2,  // Bewegung in 2D/3D: Gleichförmige Kreisbewegung: Welcher Pfeil zeigt die Beschleunigung?
  /* DAP */
  "dap-12ldc33": 1,  // Verteilungen: Wie viel Prozent der Werte liegen in der markierten Fläche (μ ± 1σ)?
  "dap-1pkddr2": 2,  // Verteilungen: Welche Kurve ist die Verteilungsfunktion (CDF)?
  /* Hydromechanik */
  "hydro-pfwopg": 2,  // Eigenschaften des Wassers: Warum siedet Wasser im Gebirge schon unter 100 °C?
  "hydro-yf7yqs": 2,  // Eigenschaften des Wassers: Was ist Kavitation?
  "hydro-128ipkg": 2,  // Eigenschaften des Wassers: Wie viel steifer als Wasser ist Stahl ungefähr?
  "hydro-1wbgn5t": 2,  // Eigenschaften des Wassers: Was ist die Ursache der Kapillarität?
  "hydro-44o54t": 2,  // Hydrostatik 1: Der Wasserdruck in einem Punkt hängt davon ab, wie die Fläche dort aus
  "hydro-afaest": 3,  // Hydrostatik 1: Wie bestimmst du die horizontale Kraft auf eine geneigte Fläche?
  "hydro-d4mrv": 3,  // Hydrostatik 2: Ein Holzwürfel (ρ = 800 kg/m³, Kante 1 m) schwimmt in Süßwasser. Welch
  "hydro-1wfy1ow": 3,  // Hydrostatik 2: Eine Bleikugel wird einmal auf einen schwimmenden Holzklotz gelegt und
  "hydro-jtmp0l": 2,  // Hydrostatik 2: Warum ändert sich der Wasserstand im Glas nicht, wenn Eiswürfel schmel
  "hydro-1wvjjtr": 2,  // Hydrodynamik: Welche Annahmen stecken in Q₁ = Q₂ für ein Rohr?
  "hydro-3z05bt": 2,  // Hydrodynamik: Ein Zulauf teilt sich in zwei Wasserhähne. Was gilt?
  "hydro-pd2dai": 2,  // Hydrodynamik: Ein Behälter wird mit Q_zu gefüllt und läuft mit Q_ab aus. Wie ändert 
  "hydro-6o64wa": 2,  // Energiesatz: Ein Rohr wird enger. Was passiert nach Bernoulli (gleiche Höhe) mit de
  "hydro-1x2fmbt": 3,  // Energiesatz: Bernoulli-Aufgabe: Bring das Vorgehen in Reihenfolge.
  "hydro-1156wxi": 3,  // Impulssatz: Stützkraftsatz anwenden (Übung 04): Reihenfolge?
  "hydro-1q0eime": 3,  // Impulssatz: Woraus besteht die Stützkraft im Freispiegelgerinne?
  "hydro-fnqzjv": 2,  // Impulssatz: Warum darf man beim kurzen Rohrkrümmer in Übung 04 die Reibung vernach
  "hydro-gw4nki": 2,  // Impulssatz: Ein freier Wasserstrahl prallt senkrecht auf eine Platte. Welche Größe
  "hydro-1xl5x4p": 2,  // Gerinneströmung: Woran erkennst du in Übung 04 den Fließzustand im Gerinne?
  "hydro-1ir855n": 2,  // Gerinneströmung: Beim Wechselsprung bleibt die Energiehöhe erhalten.
  "hydro-1q3zanr": 2,  // Hydrostatik 1: Wasser liegt über einer gekrümmten Fläche, etwa der Oberseite eines Ro
  "hydro-kgf5rv": 1,  // Energiesatz: Für welche Strömungen gilt die Bernoulli-Gleichung laut Klausurübung?
  /* Baukonstruktion */
  "bauko-bapjj1": 2,  // Holz als Baustoff: Warum streuen die Eigenschaften von Bauholz so stark?
  "bauko-tk1tgz": 1,  // Holz als Baustoff: Wie fest ist Holz senkrecht zur Faser im Vergleich zu parallel?
  "bauko-1n37q61": 2,  // Holz als Baustoff: Warum ist bei Bauholz unter Normalbedingungen die Druckfestigkeit höhe
  "bauko-nwz1pq": 1,  // Holz als Baustoff: Welche Beanspruchung verträgt Holz am schlechtesten?
  "bauko-1ws9uhw": 1,  // Holzbemessung: KLED: Ordne die Dauer zu.
  "bauko-dvzu7y": 1,  // Holzbemessung: Wovon hängt kmod ab?
  "bauko-1ec6svn": 1,  // Holzbemessung: Ordne die Nutzungsklasse zu.
  "bauko-bwjfu4": 1,  // Holzbemessung: Was ist beim Knicknachweis eines Holzstabs der Beiwert k_c?
  "bauko-13ifley": 3,  // Holzbemessung: Knicknachweis Holzstütze: Reihenfolge?
  "bauko-qky7im": 3,  // Holzbemessung: Welcher Beiwert k_m gilt bei Doppelbiegung für Rechteckquerschnitte au
  "bauko-nnx202": 2,  // Holzbemessung: Empfohlene Grenzwerte der Durchbiegung (allgemein) – ordne zu.
  "bauko-jkwpyx": 2,  // Holzbemessung: Was beschreibt w_creep in der Enddurchbiegung?
  "bauko-1b2db7n": 1,  // Sicherheitskonzept: Was ist ein Grenzzustand der Gebrauchstauglichkeit?
  "bauko-161g8ca": 3,  // Lasten: Deckenlast für einen Unterzug (wie Ü01): Reihenfolge?
  "bauko-1dm1f12": 3,  // Lasten: Eine Holzbalkendecke liegt auf einem Stahlträger. Wie bekommst du die 
  "bauko-1tj4xui": 1,  // Einwirkungen: Wohin wirkt der Wind auf ein Satteldach?
  "bauko-1k2eij6": 2,  // Einwirkungen: Welche Seiten des Satteldachs sind die Luvseite-Bereiche?
  "bauko-1erxo6z": 3,  // Einwirkungen: In der Hausübung: Was ist b in e = min(b; 2h)?
  "bauko-13h07f2": 2,  // Holzbemessung: Nachweis eines Holzbalkens (wie Ü06): Reihenfolge?
  "bauko-7a30uo": 3,  // Holzbemessung: Ein Balken hat eine Kerve (Ausklinkung). Was ändert sich im Biegenachw
  "bauko-cq3ml3": 3,  // Lasten: Mannlast und Schnee werden zusammen überlagert.
  "bauko-lzv38s": 1,  // Klausur: Wie ist die Bauko-Klausur seit 2014 aufgebaut?
  "bauko-1f66s5k": 1,  // Klausur: Teil II – welche Aufgabe behandelt was?
  "bauko-1wcbl5x": 1,  // Klausur: Welches Thema kam in Teil I fast jedes Mal dran (23 von 24 Klausuren)?
  "bauko-718mg2": 1,  // Klausur: Eine Teilaufgabe konntest du nicht lösen. Was tust du in der Bauko-Kla
  "bauko-2f2p5m": 2,  // Klausur: Was bedeutet die Steinbezeichnung KSL 6-1,2-II?
  /* Physik */
  "phys-18b2nl": 3,  // Vektoren: Richtungswinkel einer Gesamtverschiebung (Blatt 2, A1): Reihenfolge?
  "phys-xrb5kz": 2,  // Vektoren: Eine Raumdiagonale eines Quaders mit den Kanten a, b, c hat welche Län
  "phys-fxy2p8": 2,  // Vektoren: Wie bestimmst du den Winkel zwischen zwei Vektoren a und b?
  "phys-13hjds6": 3,  // Vektoren: Wie findest du einen Vektor, der in der Ebene senkrecht auf a = (a_x, 
  "phys-8sp91r": 2,  // Vektoren: Für den Winkel eines Vektors zur y-Achse eignet sich arccos(v_y / |v|)
  /* Statistik */
  "stat-165elwk": 2,  // Matrizen: In Übung 1 ergaben A·B und B·A dieselbe Matrix.
  "stat-1p0flcd": 3,  // Matrizen: In Übung 1 hatte A′A die Determinante 0. Was folgt daraus?
  "stat-1gxb5yy": 3,  // Matrizen: Welchen Rang hat a·a′ für einen Vektor a ≠ 0?
  "stat-r0lvt3": 2,  // Matrizen: Was macht eine Drehmatrix mit einem Vektor?
  "stat-1wayb5d": 3,  // Gleichungssysteme: LGS mit der Cramerschen Regel lösen: Reihenfolge?
  /* DAP */
  "dap-1t58c4r": 1,  // R-Grundlagen: Was ist R laut Exercise 1?
  "dap-14zztj2": 1,  // R-Grundlagen: Welcher R-Datentyp ist das?
  "dap-1800d6": 1,  // R-Grundlagen: Bereiche in RStudio – ordne zu.
  "dap-1qyhkh3": 1,  // R-Grundlagen: Laut Exercise 1 soll man R-Aufgaben am besten komplett von einer KI lö
  "dap-1ry2fjf": 2,  // R-Grundlagen: Was ergibt seq(0, 10, by = 2.5)?
  "dap-l1rprk": 2,  // R-Grundlagen: Wie ignorierst du fehlende Werte beim Mittelwert in R?
  /* Baustoffkunde */
  "bsk-76tclc": 1,  // Chemische Grundlagen: Ordne das Teilchen zu.
  "bsk-154n8dr": 1,  // Chemische Grundlagen: Was sind Isotope?
  "bsk-1dspkiz": 1,  // Chemische Grundlagen: Ordne die Ionen zu.
  "bsk-1wm1a6v": 2,  // Chemische Grundlagen: Welche Elektronenkonfiguration streben Atome bei der Ionenbildung an?
  "bsk-1ncfr0a": 2,  // Chemische Grundlagen: Primäre Bindungen – ordne zu.
  "bsk-lba4y7": 2,  // Chemische Grundlagen: Ab welcher Elektronegativitätsdifferenz spricht man von Ionenbindung?
  "bsk-d7sa9h": 2,  // Chemische Grundlagen: Warum leiten Metalle elektrischen Strom gut?
  "bsk-10mm597": 1,  // Chemische Grundlagen: Welche Bindung ist die schwächste?
  "bsk-ojc8mx": 2,  // Chemische Grundlagen: Wofür brauchst du Atomaufbau und Ionen in der Baustoffkunde?
  /* Baukonstruktion */
  "bauko-6ujyfh": 2,  // Holzbemessung: Was beschreibt welche Durchbiegung?
  "bauko-jwml8k": 1,  // Holzbemessung: Welcher Grenzwert gilt allgemein für w_inst und für w_net,fin?
  "bauko-7teaua": 2,  // Holzbemessung: Ein Holzbalken hat 4 m Spannweite. Was bedeutet w_inst ≤ l / 300?
  /* Baustoffkunde */
  "bsk-vjxc07": 2,  // Chemische Grundlagen: Welche Bindung steckt in welchem Stoff?
  "bsk-101vxpr": 3,  // Chemische Grundlagen: Welche Hauptbindung hat laut Übersicht die höchste Bindungsenergie?
  "bsk-1hdjicb": 2,  // Chemische Grundlagen: Wie leitet der Stoff elektrischen Strom?
  "bsk-2zojog": 3,  // Chemische Grundlagen: Wasserstoffbrücken entstehen nur, wenn Wasserstoff an Stickstoff, Saue
  "bsk-1kbsffz": 3,  // Chemische Grundlagen: Was verrät die Steigung der Kraft-Abstand-Kurve an der Ruhelage a₀?
  "bsk-1w6ia6r": 2,  // Chemische Grundlagen: Welcher Stoff macht den größten Anteil von Portlandzement aus?
  "bsk-opa187": 2,  // Gefüge und Kristalle: Kugelpackung – welcher Füllgrad?
  "bsk-1ox59cp": 2,  // Gefüge und Kristalle: Welche Kristallstruktur hat das Metall?
  "bsk-h1j5iu": 2,  // Gefüge und Kristalle: Gitterfehler – welche Dimension?
  "bsk-1atendl": 1,  // Gefüge und Kristalle: Welcher Gitterfehler trägt die plastische Verformung von Metallen?
  "bsk-1skxh2i": 2,  // Gefüge und Kristalle: Warum lassen sich Metalle plastisch verformen, Keramik aber kaum?
  "bsk-ielby7": 2,  // Gefüge und Kristalle: Kunststoffe – wie sind die Ketten verbunden?
  "bsk-uta7rw": 2,  // Gefüge und Kristalle: Wie geht ein amorpher Werkstoff wie Glas vom festen in den flüssigen Z
  "bsk-1ty5kn": 2,  // Gefüge und Kristalle: Duktilität: Ordne von spröde nach zäh.
  "bsk-1ll4ect": 2,  // Gefüge und Kristalle: Wie wirkt eine höhere Belastungsgeschwindigkeit auf die Duktilität?
  "bsk-p2o4qo": 2,  // Gefüge und Kristalle: Welche äußeren Einflüsse machen einen Werkstoff duktiler?
  "bsk-1bf5xnj": 3,  // Gefüge und Kristalle: Welche Einflüsse senken die Duktilität laut Folie 35?
  "bsk-125l1q2": 2,  // Gefüge und Kristalle: Wie wirkt ein feineres Gefüge (kleinere Körner) auf die Duktilität?
  "bsk-19npqb3": 2,  // Gefüge und Kristalle: Ein Stahl, der vorher kalt verformt wurde, ist danach duktiler.
  "bsk-1mcz2qq": 3,  // Gefüge und Kristalle: Wie wirken Einschlüsse und Ausscheidungen an den Korngrenzen auf die D
  "bsk-1snrzkc": 3,  // Gefüge und Kristalle: Je größer der Korngrenzwinkel zwischen benachbarten Körnern, desto ger
  "bsk-1miac6l": 3,  // Gefüge und Kristalle: Bruchfläche einer duktilen Stahlprobe – was ist was?
  "bsk-9ebzno": 2,  // Gefüge und Kristalle: Woran erkennst du auf einer Bruchfläche einen duktilen Bruch?
  "bsk-gux6oi": 2,  // Gefüge und Kristalle: Ein Einkristall aus Kupfer ist fester als vielkristallines Kupfer.
  "bsk-18ayn0e": 2,  // Gefüge und Kristalle: Wie erhöht man die Festigkeit von Metallen gezielt?
  "bsk-7j0k4l": 1,  // Gefüge und Kristalle: Was versagt bei Normalbeton zuerst?
  "bsk-dtp1hg": 2,  // Gefüge und Kristalle: Porenarten – ordne zu.
  "bsk-1hxxz25": 2,  // Gefüge und Kristalle: Wann verbessern Poren die Wärmedämmung am meisten?
  "bsk-llltmt": 2,  // Gefüge und Kristalle: Wie entstehen die Poren im Porenbeton?
  "bsk-ybgufs": 1,  // Physikalische Eigenschaften: Was ist eine Sackpore?
  "bsk-26gd5": 1,  // Physikalische Eigenschaften: Was kennzeichnet eine durchgängige Kapillare?
  "bsk-srglpv": 1,  // Physikalische Eigenschaften: Was trifft auf geschlossene Poren zu?
  "bsk-ebntjg": 2,  // Physikalische Eigenschaften: Welche Poren bestimmen vor allem, wie leicht Flüssigkeiten und Gase in
  "bsk-rza2jr": 2,  // Physikalische Eigenschaften: Ein Baustoff bekommt mehr Poren. Wie ändern sich Rohdichte, Festigkeit
  "bsk-1p8ckwh": 2,  // Physikalische Eigenschaften: Mehr Poren im Baustoff – welche Größe bleibt gleich?
  "bsk-pm3zmf": 3,  // Physikalische Eigenschaften: Welche Eigenschaft nennt Folie 46 NICHT als abhängig von der Porosität
  "bsk-1cratq": 1,  // Physikalische Eigenschaften: Porosität p = V_P / V – was bedeutet was?
  "bsk-1ehm55p": 2,  // Physikalische Eigenschaften: Mehr Poren machen einen Baustoff immer dauerhafter.
  "bsk-1tpmt7d": 2,  // Physikalische Eigenschaften: Die Volumenstabilität eines Baustoffs hängt von seiner Porosität ab.
  "bsk-1epfdtm": 1,  // Physikalische Eigenschaften: Welche Porenart ist mit A markiert?
  "bsk-1m6s5qz": 2,  // Physikalische Eigenschaften: Die Kapillaren sind mit Wasser gefüllt. Was ist C und warum bleibt C l
  "bsk-tjixad": 2,  // Physikalische Eigenschaften: Auf welchem Weg kann Wasser von oben nach unten durch das Bauteil wand
  "bsk-1s4k8lu": 1,  // Gefüge und Kristalle: Warum verleimt man Sperrholz kreuzweise (0°/90°)?
  /* Bauinformatik */
  "binf-147yr7u": 2,  // Java und JDK: Du benennst main in moin um. Was passiert beim Start?
  "binf-1bzpwgx": 1,  // Operatoren: Was bewirkt das + hier?
  "binf-17tz23n": 2,  // Datentypen: Was ergibt "3f" + 4?
  "binf-2nvuc3": 2,  // Datentypen: Was ergibt 2 + "3"?
  "binf-1iykj5z": 3,  // Datentypen: Was gibt System.out.println('H' + "allo"); aus?
  "binf-3ymh7f": 1,  // Datentypen: Welchen Datentyp hat das Literal?
  "binf-14gk5sn": 2,  // Datentypen: Wie viele Bit hat der Datentyp laut Übungshilfe?
  "binf-16a93aa": 3,  // Datentypen: Was gibt System.out.println(Float.MIN_VALUE); aus?
  "binf-s7xsp9": 2,  // Datentypen: Welcher Datentyp passt am besten zu einer Postleitzahl?
  "binf-3vobnu": 1,  // Datentypen: In welchem Datentyp speicherst du das Geschlecht als m, w oder d?
  "binf-5cu956": 1,  // Datentypen: Welcher Variablenname ist zulässig?
  "binf-9k93ri": 2,  // Datentypen: double3 ist ein zulässiger Variablenname.
  "binf-1wqe03q": 2,  // Datentypen: Warum ist int i1 = 12345678910; ein Fehler?
  "binf-173ia1t": 2,  // Datentypen: float f1 = 30.5; meldet einen Fehler. Wie korrigierst du?
  "binf-paah1j": 2,  // Datentypen: Was ist an char c1 = "g"; falsch?
  "binf-56nza2": 2,  // Datentypen: int a = 10; double b = a; – was passiert?
  "binf-aoc9ln": 1,  // Operatoren: Was ergibt 20 % 6?
  "binf-1rc0rke": 1,  // Operatoren: Was bedeutet i += 1?
  "binf-1gnigk4": 2,  // Datentypen: Dezimal in Dual umrechnen: Reihenfolge?
  "binf-ccpdai": 3,  // Datentypen: Welche Dezimalzahl ist 0010 1010?
  /* Hydromechanik */
  "hydro-t4wg3p": 3,  // Eigenschaften des Wassers: Ein Schauglas zeigt den Wasserstand an. Wie verhinderst du einen zu gr
  "hydro-e8k91d": 2,  // Hydrostatik 1: Ein Becken ist 2 m tief mit Quecksilber statt Wasser gefüllt. Wie groß
  "hydro-1ys63aq": 1,  // Hydrostatik 1: Welchen absoluten Druck hat die Oberfläche eines offenen Beckens?
  "hydro-1innbbh": 2,  // Energiesatz: Welches Messrohr zeigt welche Linie?
  "hydro-1fberzo": 2,  // Energiesatz: Pitot- und Piezometerrohr stehen am selben Querschnitt. Was liest du a
  "hydro-1yg4y58": 3,  // Hydrodynamik: Zwei Wasserhähne (d₁ = 2 cm, d₂ = 1 cm) fließen mit gleicher Geschwind
  "hydro-xmpbu6": 3,  // Energiesatz: Ein Venturirohr verengt sich von d₁ auf d₂ = d₁/3. Wie ändert sich die
  "hydro-19sclao": 2,  // Impulssatz: Wie lautet die Stützkraft in einer Druckrohrströmung?
  "hydro-l0tl2b": 2,  // Impulssatz: In welche Richtung drückt das Wasser einen horizontalen Rohrkrümmer?
  "hydro-1glspxj": 2,  // Gerinneströmung: Wo breiten sich Störungen (z. B. Wellen) auch stromaufwärts aus?
  "hydro-nfxeue": 3,  // Gerinneströmung: Über einer Sohlschwelle herrscht Grenzzustand. Wie bekommst du daraus 
  /* Baukonstruktion */
  "bauko-1gq1kkh": 1,  // Lasten: Wie rechnest du eine Dachlattung (Linienbauteil) in eine Flächenlast u
  "bauko-oap232": 2,  // Lasten: Wie kommst du von der Flächenlast in kN/m² zur Last auf einem Sparren 
  "bauko-8dsmu0": 2,  // Einwirkungen: Welcher Formbeiwert μ₁ gilt für 30° < α < 60°?
  "bauko-66skr4": 3,  // Einwirkungen: Was ist der Schneeüberhang an der Traufe?
  "bauko-bkwlyp": 2,  // Einwirkungen: Wie groß ist die Windlast pro Sparren?
  "bauko-1j76ieg": 3,  // Einwirkungen: Satteldach 35°, Ü02: welcher Außendruckbeiwert c_pe,10?
  "bauko-wkcmoi": 2,  // Lasten: Welche Nutzlast gilt für eine Holzbalkendecke zwischen Wohnräumen?
  "bauko-ks883u": 2,  // Lasten: Was bedeutet „ausreichende Querverteilung“ einer Decke?
  "bauko-zd0cpm": 3,  // Lasten: Darf die Nutzlast einer Holzbalkendecke für die stützenden Bauteile da
  "bauko-cnjit1": 2,  // Lasten: Welche Nutzlast gilt für Büroflächen?
  "bauko-1ei8nwp": 2,  // Rechenweg: Durchlaufträger über mehrere Felder: Welches Auflager ist meist maßgeb
  /* Physik */
  "phys-5jxxeq": 2,  // Einheiten: US-Einheit – wie viel ist das?
  "phys-iw5kev": 3,  // Einheiten: Du rechnest 20 km² in m² um. Was ist richtig?
  "phys-1cgfyj5": 3,  // Geradlinige Bewegung: Ein Auto fährt je die halbe ZEIT mit v₁ und v₂. Wie groß ist die mittl
  "phys-gb9r0t": 3,  // Geradlinige Bewegung: x(t) = At − Bt² + Ct³. Wie bekommst du die Beschleunigung?
  "phys-1exhk1f": 2,  // Bewegung in 2D/3D: Ein Ventilator macht N Umdrehungen in der Zeit Δt. Wie groß ist die Um
  "phys-kr4vka": 3,  // Bewegung in 2D/3D: Wann erreicht ein Teilchen mit v₀ₓ > 0 und aₓ < 0 seine größte x-Koord
  /* Statistik */
  "stat-1g7k975": 2,  // Matrizen: A ist eine (2, 3)-Matrix. Welche Ordnung hat A′A?
  "stat-1vb39xx": 3,  // Matrizen: Warum ist A′A immer symmetrisch?
  "stat-u4p7oa": 3,  // Matrizen: Für eine (2, 3)-Matrix A ist A′A nie invertierbar.
  "stat-11zws9": 3,  // Matrizen: Womit prüfst du schnell, ob AB und BA richtig gerechnet sind?
  /* DAP */
  "dap-1ybn0vm": 3,  // Verteilungen: Welchen Mittelwert und welche Varianz hat die Gleichverteilung u[a, b]
  "dap-iafgr7": 2,  // Verteilungen: Wie sieht die Verteilungsfunktion (CDF) einer diskreten Verteilung, z.
  "dap-ia9hi6": 2,  // Verteilungen: Welcher Anteil liegt bei einer Normalverteilung zwischen μ − 3σ und μ 
  /* Baustoffkunde */
  "bsk-2l3872": 2,  // Gefüge und Kristalle: Homogen oder heterogen, isotrop oder anisotrop?
  "bsk-1lo1tsn": 2,  // Mechanische Eigenschaften: Kriechen oder Relaxation?
  "bsk-12vnhth": 2,  // Physikalische Eigenschaften: Welche Korrosion trifft welchen Baustoff?
  "bsk-1c4gvl9": 2,  // Physikalische Eigenschaften: Baustoffklasse nach Brennbarkeit – ordne zu.
  "bsk-129j87k": 1,  // Physikalische Eigenschaften: Was bedeutet die Feuerwiderstandsklasse F 90 für ein Bauteil?
  "bsk-cuu2kk": 2,  // Mechanische Eigenschaften: Wie verändert sich die Festigkeit von Holz mit steigendem Wassergehalt
  "bsk-obs488": 2,  // Mechanische Eigenschaften: Was passiert mit der Festigkeit von Beton im Brandfall?
  "bsk-1tmwppm": 3,  // Mechanische Eigenschaften: Manche Baustoffe, etwa feuchter Beton, werden bei Temperaturen deutlic
  /* Baukonstruktion */
  "bauko-1duhsj7": 1,  // Holz als Baustoff: Welche Holzfehler mindern die Tragfähigkeit von Bauholz?
  "bauko-7krugl": 1,  // Holz als Baustoff: Welche Holzarten sind Nadelhölzer?
  "bauko-j0tvtq": 1,  // Holz als Baustoff: Was bedeutet „Anisotropie“ am Beispiel Holz?
  "bauko-193lrhd": 2,  // Holzbemessung: Was ist bei Biegung von Holz entscheidend?
  "bauko-2zmdtl": 1,  // Holzbemessung: Wie lautet der Zugnachweis in Faserrichtung?
  "bauko-x5dkof": 3,  // Holzbemessung: Eulerfall – welcher Knicklängenbeiwert β?
  "bauko-13tw3uu": 2,  // Holzbemessung: Ein Kragstiel steht auf einem Fundament, das sich elastisch verdreht. 
  "bauko-60rqbd": 2,  // Holzbemessung: Was ist die Eulersche Knicklast?
  "bauko-veu1h3": 2,  // Sicherheitskonzept: Was gehört zu den Nachweisen im Grenzzustand der Gebrauchstauglichkeit
  "bauko-162xt11": 3,  // Holzbemessung: Wie berechnet man die Durchbiegung eines Einfeldträgers unter Gleichla
  "bauko-q9ee6p": 2,  // Holzbemessung: Bei w_net,fin zählen nur quasi-ständige Anteile. Was bleibt bei Schnee
  "bauko-1kbo35u": 2,  // Sicherheitskonzept: Welche Klimabedingungen gelten für Nutzungsklasse 1?
  "bauko-uusoxf": 3,  // Sicherheitskonzept: Welche Einwirkung gehört zur KLED „lang“ (6 Monate bis 10 Jahre)?
  "bauko-1dbkgxy": 3,  // Holzbemessung: Der Biegenachweis ist nicht erfüllt. Was kannst du – außer einem Gerbe
  "bauko-irixtk": 1,  // Schnittgrößen und Aussteifung: Was bewirkt ein Gerbergelenk in einem Durchlaufträger?
  "bauko-tf3yny": 2,  // Lasten: Welche Wichte hat das Nadelholz (SBT, V02)?
  "bauko-7xymtn": 3,  // Einwirkungen: Wie berechnet man s_k in Schneelastzone 1a?
  "bauko-t9vpdj": 2,  // Einwirkungen: Geschwindigkeitsdruck q_p im Binnenland bis 10 m Höhe – ordne zu.
  "bauko-1no0d3l": 3,  // Einwirkungen: Was ist der Unterseitendruck am Dachüberstand?
  "bauko-bk4jak": 3,  // Einwirkungen: Welche c_pe,10-Werte gelten am Satteldach mit genau 30° (Hausübung)?
  "bauko-afqlqz": 2,  // Lasten: Welche Kategorie und welche Last gelten für die Mannlast auf einem nic
  "bauko-vcsiol": 3,  // Einwirkungen: Von welchen Faktoren hängt die Schneelast auf dem Dach ab?
  "bauko-1hdowxo": 1,  // Einwirkungen: s = μ_i · C_e · C_t · s_k – was bedeutet welcher Faktor?
  "bauko-1je5oqh": 1,  // Stahl und Stahlbeton: Baustahl – Streckgrenze f_y,k ordnen.
  "bauko-1sbial9": 1,  // Stahl und Stahlbeton: Was bedeutet S 235 J2?
  "bauko-1080xc6": 2,  // Stahl und Stahlbeton: Welcher Teilsicherheitsbeiwert gilt für den Querschnittswiderstand von
  "bauko-s4q9uc": 2,  // Stahl und Stahlbeton: Wie groß ist die Fließdehnung ε_y von S 235 ungefähr?
  "bauko-1sic6g4": 2,  // Stahl und Stahlbeton: Was unterscheidet den plastischen vom elastischen Biegenachweis bei St
  "bauko-5yj65i": 1,  // Stahl und Stahlbeton: Warum trägt Beton im Stahlbeton keine Zugkräfte?
  "bauko-2bbz32": 2,  // Stahl und Stahlbeton: Nenne Gründe für eine ausreichende Betondeckung.
  "bauko-7td1c6": 1,  // Schnittgrößen und Aussteifung: Kragarm mit Einzellast am freien Ende: Wie sieht der Momentenverlauf a
  "bauko-1f6u3op": 2,  // Schnittgrößen und Aussteifung: Einfeldträger mit Einzellast F in der Mitte: Wie groß ist das größte M
  "bauko-lnxwia": 2,  // Schnittgrößen und Aussteifung: Zweifeldträger unter Gleichlast: Wo liegt das betragsmäßig größte Mome
  "bauko-s51a52": 1,  // Schnittgrößen und Aussteifung: Was ist der Unterschied zwischen Platten- und Scheibentragwirkung?
  "bauko-1xx9dvi": 1,  // Schnittgrößen und Aussteifung: Wie viel Punkte bringt die Stabilisierung (Reihen- und Scheibenstabili
  "bauko-bokpa9": 1,  // Klausur: Ab welcher Tiefe gilt eine Gründung als frostsicher?
  "bauko-fksfxc": 2,  // Klausur: Wann gilt ein Fundament in den Musterlösungen noch als kippsicher?
  "bauko-vrge8h": 2,  // Klausur: Was bedeutet HLzB 12-1,0-IIa?
  "bauko-zi4pg1": 3,  // Klausur: Wie lautet der Bemessungswert der Mauerwerksdruckfestigkeit in den Mus
  "bauko-fgx8xm": 3,  // Lasten: Von der Wichte zur Einzellast: Bring die Schritte in Reihenfolge.
  "bauko-bwp4ne": 3,  // Lasten: Wie groß ist das Eigengewicht einer 16 cm dicken Stahlbetondecke?
  "bauko-1qr723t": 3,  // Lasten: Welche Nutzlastkategorie gilt für eine Massivdecke zwischen Wohnräumen
  "bauko-1r28lws": 2,  // Rechenweg: Holzbalken laufen über mehrere Felder. Welches Auflager gibt die größt
  "bauko-1yj56s6": 3,  // Rechenweg: Wie wird aus der Deckenlast eine Streckenlast auf den Unterzug?
  "bauko-yxf5fu": 2,  // Einwirkungen: Wind wirkt senkrecht auf die Dachfläche. Wie groß sind seine Anteile a
  "bauko-1gfq9kl": 2,  // Einwirkungen: Warum zerlegt man die Windlast überhaupt in GFL- und AFL-Anteile?
  "bauko-wgd04j": 3,  // Rechenweg: Durchlaufträger mit ungleichen Feldern (l₁ : l₂ = 1 : 1,4): Wie bekomm
  "bauko-153j3bt": 2,  // Rechenweg: Warum untersucht man bei Durchlaufträgern auch Verkehrslast nur in ein
  "bauko-fvlxs1": 1,  // Klausur: Was gilt für die Dynexite-Hausübungen in Baukonstruktion?
  "bauko-s9qndb": 1,  // Klausur: Dynexite wertet Folgefehler – ein falscher Zwischenwert kostet nur ein
  /* Physik */
  "phys-1ehvw53": 1,  // Newtonsche Axiome: Ordne jedem Newtonschen Axiom seinen Namen zu.
  "phys-jexas4": 1,  // Newtonsche Axiome: Was besagt das 1. Newtonsche Axiom (Trägheitsprinzip)?
  "phys-exg2xy": 2,  // Newtonsche Axiome: Ein Körper, der sich mit konstanter Geschwindigkeit geradeaus bewegt, 
  "phys-1votdnl": 2,  // Newtonsche Axiome: Wie lautet das 2. Newtonsche Axiom in seiner allgemeinen Form?
  "phys-189v58h": 1,  // Newtonsche Axiome: Wie ist der Impuls definiert?
  "phys-11uuscx": 1,  // Newtonsche Axiome: Was ist 1 Newton in SI-Basiseinheiten?
  "phys-wi7hdu": 1,  // Newtonsche Axiome: Verdoppelt man die Kraft auf einen Körper, verdoppelt sich seine Besch
  "phys-1gocrta": 1,  // Newtonsche Axiome: Was beschreibt die (träge) Masse eines Körpers?
  "phys-1uchv4q": 1,  // Newtonsche Axiome: Masse und Gewichtskraft sind dasselbe.
  "phys-11i62b7": 2,  // Newtonsche Axiome: Welche Kraft hält einen Körper auf einer Kreisbahn mit Radius r?
  "phys-13way5w": 2,  // Newtonsche Axiome: Was ist ein Inertialsystem?
  "phys-1pxqoez": 2,  // Newtonsche Axiome: Ein Buch liegt auf dem Tisch. Was ist nach dem 3. Axiom die Gegenkraft
  "phys-kw5xlb": 2,  // Newtonsche Axiome: Kraft und Gegenkraft nach dem 3. Axiom heben sich auf, deshalb kann si
  "phys-1iy5pv3": 2,  // Newtonsche Axiome: Rezept für jede Newton-Aufgabe: Reihenfolge?
  "phys-186pcgy": 3,  // Newtonsche Axiome: Ordne die Kraft auf der schiefen Ebene (Winkel α) zu.
  "phys-nonnyj": 2,  // Newtonsche Axiome: Blatt 4, A1: Drei Kräfte erzeugen die Beschleunigung a. Wie bekommst d
  "phys-y9933v": 3,  // Newtonsche Axiome: In einem Freikörperbild zeichnet man m·a als zusätzliche Kraft ein.
  "phys-swom94": 3,  // Newtonsche Axiome: Blatt 4, A2: F schiebt zwei Blöcke (m₁ > m₂). Wann ist die Kontaktkraf
  "phys-1kgruzl": 3,  // Newtonsche Axiome: Blatt 4, A2: Beide Blöcke haben dieselbe Beschleunigung a = F / (m₁ + 
  "phys-stckh5": 1,  // Newtonsche Axiome: Blatt 4, A3: Wann hängt das Seil zwischen den Kisten gerade durch?
  "phys-6m6s3l": 3,  // Newtonsche Axiome: Ein Seil kann ziehen und drücken.
  "phys-1vl5q3z": 3,  // Newtonsche Axiome: Blatt 4, A4: Skifahrer mit konstanter Geschwindigkeit auf reibungsfrei
  "phys-1810ui4": 3,  // Newtonsche Axiome: Blatt 4, A5: Was ist die Kraft des Motorrads auf den Fahrer – im Vergl
  "phys-fdpwvr": 3,  // Newtonsche Axiome: Blatt 4, A6: Warum muss der Mann im Bootsmannsstuhl nur halb so stark 
  "phys-1q2dbfb": 3,  // Newtonsche Axiome: Blatt 4, A6: Mit welcher Kraft zieht die Rolle an der Decke?
  /* Hydromechanik */
  "hydro-1x49ert": 1,  // Hydrodynamik: Was bedeutet Q in der Kontinuitätsgleichung Q₁ = Q₂?
  "hydro-rzedbh": 1,  // Hydrodynamik: v₁ · A₁ = v₂ · A₂ – was ist was?
  /* Bauinformatik */
  "binf-1x0o3wm": 3,  // Operatoren: int n = 0; Was ergibt (n != 0 && 10 / n > 2)?
  "binf-1nsy4vx": 3,  // Operatoren: int n = 0; Was passiert bei (n != 0 & 10 / n > 2)?
  /* Statistik */
  "stat-ymj9um": 1,  // Deskriptive Statistik: Was ist eine Stichprobe?
  "stat-9ob3q7": 2,  // Deskriptive Statistik: Du misst die Länge eines Betonfertigteils immer wieder. Welche Grundge
  "stat-1ub7wk0": 1,  // Deskriptive Statistik: Ordne jedem Merkmal seine Art zu.
  "stat-aci0ry": 1,  // Deskriptive Statistik: Ordne jeder Skala ein passendes Beispiel zu.
  "stat-1vg0lz6": 2,  // Deskriptive Statistik: Auf einer Intervallskala wie der Temperatur in °C darf man sagen: 20 °
  "stat-ewqf2g": 1,  // Deskriptive Statistik: Wie hängen absolute Häufigkeit h(x_j) und relative Häufigkeit f(x_j) z
  "stat-1nb5ja2": 2,  // Deskriptive Statistik: Summenhäufigkeiten kann man für jedes Merkmal bilden, auch für qualita
  "stat-1gssox7": 1,  // Deskriptive Statistik: Was gibt der Wert F(x) der empirischen Verteilungsfunktion an?
  "stat-1yijd3m": 2,  // Deskriptive Statistik: Welche Form hat die empirische Verteilungsfunktion?
  "stat-1a2ry4i": 2,  // Deskriptive Statistik: Faustregel aus Beispiel 3.4: Wie viele Klassen bildest du bei n Messwe
  "stat-89vtd4": 3,  // Deskriptive Statistik: Klassenbildung wie in Beispiel 3.4 (90 Betonwürfel): Reihenfolge?
  "stat-z4v2ve": 3,  // Deskriptive Statistik: Warum legt man die Klassenränder z. B. auf 30,25 statt auf 30,3, wenn 
  "stat-1iymyoe": 1,  // Deskriptive Statistik: Welches Diagramm passt?
  "stat-5qtiab": 2,  // Deskriptive Statistik: Dieselben Daten können je nach Klasseneinteilung ganz unterschiedlich 
  "stat-bcn1cm": 2,  // Deskriptive Statistik: Welche Eigenschaft hat das arithmetische Mittel immer?
  "stat-op9nkd": 1,  // Deskriptive Statistik: Für welchen Wert M wird Σ(x_i − M)² am kleinsten?
  "stat-1ajgjnu": 1,  // Deskriptive Statistik: Wie berechnest du den Mittelwert, wenn jede Ausprägung x_j mit der Häu
  "stat-12knp1p": 2,  // Deskriptive Statistik: Wie bestimmst du den Median bei einer geraden Anzahl n von Werten?
  "stat-1kc0qvn": 3,  // Deskriptive Statistik: Warum nennt man den Median „robust“?
  "stat-ny6lx3": 3,  // Deskriptive Statistik: Liegen Mittelwert und Median weit auseinander, ist das ein Hinweis auf
  "stat-ht5lrp": 2,  // Deskriptive Statistik: Einkommen in Klassen: F = 0,4698 bis 2000 €, F = 0,6048 bis 2500 €. In
  "stat-bp21td": 2,  // Deskriptive Statistik: Median klassierter Daten: Reihenfolge?
  "stat-5m2e9m": 1,  // Deskriptive Statistik: Was ist die Schwäche der Spannweite R = x_max − x_min?
  "stat-vyzr1i": 1,  // Deskriptive Statistik: Ordne die Quartile zu.
  "stat-b1wkh2": 2,  // Deskriptive Statistik: Was zeigt die Box im Boxplot?
  "stat-19f5ml8": 2,  // Deskriptive Statistik: Eine Verteilung steigt links steil an und läuft nach rechts flach aus.
  "stat-149c2ar": 2,  // Deskriptive Statistik: Wann teilst du bei der Varianz durch n − 1 statt durch n?
  "stat-1vwnzwe": 2,  // Deskriptive Statistik: Wovon misst die mittlere absolute Abweichung d laut Folie den Abstand?
  "stat-jhiq3y": 2,  // Deskriptive Statistik: Eine Messreihe mit kleiner Standardabweichung ist automatisch nah am S
  "stat-1ac8ht7": 2,  // Deskriptive Statistik: Was ist eine Randverteilung in einer zweidimensionalen Häufigkeitstabe
  "stat-1398zyy": 1,  // Deskriptive Statistik: Was bedeutet das Vorzeichen der Kovarianz s_XY?
  "stat-17ggk7y": 2,  // Deskriptive Statistik: Warum normiert man die Kovarianz zum Korrelationskoeffizienten r = s_X
  "stat-tutapa": 1,  // Deskriptive Statistik: Ordne |r| der Interpretation zu.
  "stat-1ayh9q7": 2,  // Deskriptive Statistik: r ≈ 0 bedeutet, dass zwischen den Merkmalen überhaupt kein Zusammenhan
  "stat-hxsr7i": 2,  // Matrizen: Elementare Zeilenumformungen ändern den Rang einer Matrix nicht – Dete
  "stat-tdh9bu": 3,  // Matrizen: Laplace-Entwicklung einer 3×3-Matrix: Welches Vorzeichen bekommt der M
  "stat-10lnccb": 3,  // Matrizen: Knobelaufgabe Übung 1: Wie berechnest du die 4×4-Determinante der Trid
  "stat-1j79grg": 2,  // Gleichungssysteme: Alles dieselbe Aussage über eine quadratische Matrix A – ordne zu.
  "stat-1fi0qgh": 2,  // Gleichungssysteme: Determinantenformel: Wie lautet die Inverse?
  "stat-srw8qs": 2,  // Gleichungssysteme: Wie berechnest du den Kofaktor c_ij?
  "stat-1nhkaow": 2,  // Gleichungssysteme: Inverse über die Determinantenformel: Reihenfolge?
  "stat-1b34ogl": 2,  // Gleichungssysteme: Gauß-Jordan: Woran erkennst du, dass du fertig bist?
  "stat-1cd668t": 3,  // Gleichungssysteme: In Übung 2, A3 a) hat A die Zeilen (4 8 2), (1 3 1), (6 14 4). Das Sys
  "stat-dlzg9o": 3,  // Gleichungssysteme: Knobelaufgabe Übung 2: Die Zeilen von A sind Einheitsvektoren und steh
  /* Bauinformatik */
  "binf-10o1mi4": 1,  // Kontrollstrukturen: Ordne das EVA-Prinzip zu.
  "binf-1f73p40": 1,  // Kontrollstrukturen: Wie heißt das Struktogramm noch, und nach welcher Norm ist es geregelt
  "binf-1c3p3d2": 2,  // Kontrollstrukturen: Struktogramm und Aktivitätsdiagramm: Was entspricht sich?
  "binf-1scw43q": 1,  // Kontrollstrukturen: Welche Anweisung gehört zu welcher Auswahl?
  "binf-zs10dh": 1,  // Kontrollstrukturen: Was steht in den runden Klammern von if( … )?
  "binf-18iv933": 2,  // Kontrollstrukturen: int x = 15; if (x > 10) A; else if (x > 5) B; else C; – was wird ausge
  "binf-1z0vqr9": 1,  // Kontrollstrukturen: Beispiel „gerade/ungerade“: Welche Bedingung prüft, ob die Zahl z gera
  "binf-1gn9kg6": 2,  // Kontrollstrukturen: Welche Werte darf man laut Folie in switch prüfen?
  "binf-585svm": 3,  // Kontrollstrukturen: int n = 2; switch (n) { case 1: print("eins"); case 2: print("zwei"); 
  "binf-xo64ko": 1,  // Kontrollstrukturen: Wann wird der default-Zweig von switch ausgeführt?
  "binf-154tj6z": 1,  // Kontrollstrukturen: Ordne die Schleifenart zu.
  "binf-oi3e5u": 1,  // Kontrollstrukturen: Bring die drei Teile im Kopf der for-Schleife in die richtige Reihenfo
  "binf-1kfykc3": 2,  // Kontrollstrukturen: In der for-Schleife bedeutet die Abbruchbedingung: Die Schleife bricht
  "binf-10nbcb1": 2,  // Kontrollstrukturen: int i; for (i = 1; i <= 10; i++) { } – welchen Wert hat i nach der Sch
  "binf-149kdgb": 2,  // Kontrollstrukturen: Kleiner Gauß: Was gibt die for-Schleife aus, die alle Zahlen von 1 bis
  "binf-1a6radm": 2,  // Kontrollstrukturen: Was bewirkt for( ; ; )?
  "binf-155dnst": 2,  // Kontrollstrukturen: int i = 10; while (i < 10) { c++; i++; } – wie oft läuft der Block?
  "binf-1b7hdub": 2,  // Kontrollstrukturen: Gleiche Werte, aber als do { c++; i++; } while (i < 10); mit i = 10 – 
  "binf-12hab7h": 1,  // Kontrollstrukturen: break oder continue?
  "binf-18sd70s": 3,  // Kontrollstrukturen: for (int k = 0; k < 5; k++) { if (k == 2) continue; if (k == 4) break;
  "binf-erfsxq": 1,  // Kontrollstrukturen: Welche Werte liefert Math.random()?
  "binf-yyerg5": 2,  // Kontrollstrukturen: Warum steht in int zahl = (int)(Math.random() * 10); der Cast (int)?
  "binf-2zhq6d": 2,  // Kontrollstrukturen: (int)(Math.random() * 10) kann auch die Zahl 10 liefern.
  /* Baukonstruktion */
  "bauko-pd967j": 2,  // Lastfallkombination: Vorgehen bei der Bemessung laut Übung 3: Reihenfolge?
  "bauko-1unldu": 1,  // Lastfallkombination: Was bedeutet „führende veränderliche Einwirkung“ in der Grundkombinati
  "bauko-1fz3uj1": 2,  // Lastfallkombination: Beispiel 5 hat Schnee und Wind. Wie viele Kombinationen mit beiden Las
  "bauko-bqaea4": 1,  // Lastfallkombination: Welche Beiwerte nutzt Übung 3?
  "bauko-a22pty": 3,  // Lastfallkombination: Beispiel 6 ist ein Versammlungsraum. Mit welchem ψ₀ wird die Nutzlast 
  "bauko-1rof51c": 3,  // Lastfallkombination: Beispiel 5: Wie kommt die ständige Last g = 0,7 kN/m (auf der Dachfläc
  "bauko-1ivzgy1": 3,  // Lastfallkombination: Beispiel 5: Die Formel liefert in Aachen s_k = 0,63 kN/m². Mit welchem
  "bauko-mhml0r": 1,  // Lastfallkombination: Wie wird aus der Flächenlast eine Linienlast pro Sparren?
  "bauko-678v3m": 3,  // Lastfallkombination: Der Sparren kragt links 0,885 m und rechts 1,47 m über die Auflager. W
  "bauko-4twmxe": 2,  // Lastfallkombination: Wie groß ist das Moment am Einspannpunkt eines Kragarms unter Gleichla
  "bauko-2yju7q": 2,  // Lastfallkombination: Wo liegt das größte Feldmoment eines Trägers unter Gleichlast?
  "bauko-7davtd": 3,  // Lastfallkombination: In Beispiel 5 liegen die maximalen Feldmomente von g, s und w genau an
  "bauko-7oyli2": 3,  // Lastfallkombination: Zweifeldträger mit Gleichlast q: Wie groß ist die Auflagerkraft der Mi
  "bauko-5fkhi5": 2,  // Lastfallkombination: Wie rechnest du in Beispiel 6 Momente am Dreifeldträger mit gleichen S
  "bauko-l3bglf": 2,  // Lastfallkombination: Dreifeldträger: Wo stellst du die Nutzlast hin, um das größte Feldmome
  "bauko-6xtjz2": 2,  // Lastfallkombination: Und für das größte Stützmoment über Stütze C?
  "bauko-1lu3ok2": 2,  // Lastfallkombination: Das Eigengewicht stellt man bei der ungünstigen Laststellung ebenfalls
  "bauko-1fek2ej": 3,  // Lastfallkombination: Wie bekommst du in Beispiel 6 das Feldmoment, wenn die Tafel nur die S
  /* DAP */
  "dap-bukj5y": 2,  // R-Grundlagen: Deine CSV-Datei trennt die Spalten mit Semikolon. Wie liest du sie mit
  "dap-zb6qc7": 1,  // R-Grundlagen: Eine .xlsx-Datei kannst du mit Base-R direkt öffnen.
  "dap-15dca52": 1,  // R-Grundlagen: Welche Funktion zeigt dir was über einen eingelesenen Datensatz?
  "dap-s99rr9": 2,  // R-Grundlagen: Ordne den Mittelwert seiner R-Zeile zu.
  "dap-1dpx21q": 2,  // R-Grundlagen: Wie bestimmst du in Base-R den Modalwert (häufigsten Wert)?
  "dap-mom9xu": 1,  // R-Grundlagen: Was liefert range(x)?
  "dap-16xtsox": 2,  // R-Grundlagen: Wie berechnest du in der Übung den Interquartilsabstand?
  "dap-1dtzuet": 2,  // R-Grundlagen: Was macht x[order(-x), ]?
  "dap-ktknex": 3,  // R-Grundlagen: Welche Zeile wählt alle Wege unter 15 Minuten von Frauen (HP_SEX == 2)
  "dap-2xr94c": 2,  // R-Grundlagen: Wie schließt du alle Personen ohne Führerschein (P_FS_PKW == 2) aus?
  "dap-1o68nhq": 2,  // R-Grundlagen: na.omit(x) entfernt aus einem Data Frame jede Zeile, in der mindestens
  "dap-1ci8abw": 2,  // R-Grundlagen: Wozu dient factor(x, levels = c(1, 2, 3), labels = c('walk', 'bicycle'
  "dap-1o9eqd8": 3,  // R-Grundlagen: Was liefert welche Tabelle?
  "dap-ajkdjn": 2,  // R-Grundlagen: Was berechnet aggregate(wegmin ~ P_FS_PKW, data = x, FUN = mean)?
  "dap-11jm411": 3,  // R-Grundlagen: mean(x$zweck) ergibt einen sinnvollen Wert, solange zweck als Zahl kod
  /* Physik */
  "phys-16jva8e": 2,  // Kraftgesetze: Zwei Kugeln ziehen sich an. Wie ändert sich die Kraft, wenn du den Abs
  "phys-11qqueq": 1,  // Kraftgesetze: Wie groß ist die Gravitationskonstante G?
  "phys-19gmvj8": 2,  // Kraftgesetze: Zwei Körper mit je 1 kg im Abstand 1 m: Wie stark ziehen sie sich an?
  "phys-vlieak": 2,  // Kraftgesetze: Gewichtskraft und Normalkraft auf eine ruhende Kiste sind ein Kraft-Ge
  "phys-lgsdsn": 2,  // Kraftgesetze: Was misst eine Waage eigentlich?
  "phys-112e513": 2,  // Kraftgesetze: Eine Kiste bleibt bei 100 N waagerechter Zugkraft stehen. Wie groß ist
  "phys-1iq4rp5": 1,  // Kraftgesetze: Ordne jeder Kraft ihr Gesetz zu.
  "phys-nurv92": 2,  // Kraftgesetze: Welche Richtwerte gelten für Gummi auf trockenem Beton?
  "phys-1h4q9rl": 2,  // Kraftgesetze: Welche Kraft schiebt dich beim Gehen nach vorn?
  "phys-yn4tpg": 2,  // Kraftgesetze: Ein Klotz auf einer schiefen Ebene beginnt beim Winkel α_S gerade zu r
  "phys-1exj7dy": 2,  // Kraftgesetze: Ein Körper wird aus der Ruhe fallen gelassen. Wie groß ist seine Besch
  "phys-14ofg4v": 2,  // Kraftgesetze: Wie groß ist die Endgeschwindigkeit beim Fall mit Luftwiderstand?
  "phys-1e8asae": 3,  // Kraftgesetze: Hat ein fallender Körper seine Endgeschwindigkeit erreicht, bleibt er 
  "phys-wlf2d4": 2,  // Kraftgesetze: Du fährst doppelt so schnell. Wie ändert sich der Luftwiderstand?
  "phys-3iinro": 1,  // Kraftgesetze: Eine Kugel kreist an einem Seil auf einer reibungsfreien, waagerechten
  "phys-1v9ze2x": 1,  // Kraftgesetze: Was bewirkt eine ideale feste Rolle?
  "phys-7d8n53": 3,  // Arbeit und Energie: Blatt 5, A1: Drei konstante Kräfte verschieben eine Truhe um d. Wie be
  "phys-1soiqb": 3,  // Arbeit und Energie: Blatt 5, A1b: Die Gesamtarbeit an der Truhe ist negativ. Was folgt dar
  "phys-c6xfa1": 3,  // Arbeit und Energie: Blatt 5, A2: Behälter (Masse m) an einer losen Rolle, gleichmäßig um d
  "phys-8lhei1": 2,  // Arbeit und Energie: Blatt 5, A3: Wie liest du die Arbeit aus einem F(x)-Diagramm ab?
  "phys-1t2htns": 3,  // Arbeit und Energie: Blatt 5, A4: Ein Objekt wird aus der Ruhe gleichmäßig beschleunigt. Wi
  "phys-i2s12e": 3,  // Arbeit und Energie: Blatt 5, A5: Ein PKW fährt mit konstantem v, Luftwiderstand ist der ei
  "phys-17bbz7u": 3,  // Arbeit und Energie: Blatt 5, A6: Allradwagen soll so schnell wie möglich auf v_max beschle
  /* Baukonstruktion */
  "bauko-7v0o7g": 1,  // Dächer: Ordne die Dachneigung α der Dachart zu.
  "bauko-1jejwky": 1,  // Dächer: Wie wird ein Sparren im Pfettendach hauptsächlich beansprucht?
  "bauko-1m13nn": 2,  // Dächer: Was entsteht beim Sparrendach unter vertikaler Last am Sparrenfuß?
  "bauko-1v63z1r": 2,  // Dächer: Warum darf unter einem Sparrendach keine Holzbalkendecke liegen?
  "bauko-hnm61j": 1,  // Dächer: Pfettendach: Ordne die gleichbedeutenden Begriffe zu.
  "bauko-n1y1kh": 2,  // Dächer: Welches Bauteil verbindet beim Pfettendach den Sparren mit der Fußpfet
  "bauko-1m2vf8o": 2,  // Dächer: Welche zwei Arten von Kehlbalkendächern unterscheidet die Vorlesung?
  "bauko-21co2t": 2,  // Dächer: Welcher Vorteil gehört zum Sparrendach (nicht zum Pfettendach)?
  "bauko-1r5f7xj": 2,  // Dächer: Welcher Nachteil gehört zum Pfettendach?
  "bauko-fmjdx8": 3,  // Dächer: Wo sind beim Sparrendach Dachüberstände besonders schwierig?
  "bauko-1lq8eca": 2,  // Dächer: Flachdächer: Ordne zu.
  "bauko-z7qkl9": 1,  // Dächer: Woraus werden Flachdächer laut Vorlesung tragend hergestellt?
  "bauko-kh3px6": 1,  // Dächer: Welche Lasten setzt man auf geneigten Dächern an?
  /* Bauinformatik */
  "binf-phptme": 2,  // Datentypen: int a = 5; int b = a; a = 6; – was gibt println("a = " + a + " und b =
  "binf-1fkrkem": 3,  // Datentypen: { int var2 = 56; } System.out.println(var2); – was passiert?
  "binf-zt1yzg": 3,  // Datentypen: int i; long l; float f; double d; – welche Zuweisung braucht einen Cas
  "binf-mgf3fs": 3,  // Operatoren: Welchen Wert hat long l1 = 20 / 6; ?
  "binf-1yq6mpb": 2,  // Operatoren: Welchen Wert hat int i1 = -20 % 6; ?
  "binf-1s0w5pr": 3,  // Operatoren: int i2 = 5; i2 += 10; – welchen Wert hat i2?
  "binf-1g5pjdx": 1,  // Operatoren: Welche Ausgabe erzeugt die Anweisung?
  "binf-1ncf22c": 2,  // Operatoren: Was gibt System.out.println(5.0 / 2.0 + 5 / 2); aus?
  "binf-42ssdm": 3,  // Operatoren: Warum ergibt 2.3 + 7 / 2 * 4.1 nicht 16.65?
  "binf-ycudha": 3,  // Operatoren: Dein Rechner-Programm arbeitet mit int-Variablen 5 und 2. Was liefert 
  /* Baustoffkunde */
  "bsk-8mh7bt": 3,  // Gefüge und Kristalle: Welche Struktur steuert welche Eigenschaft? Ordne zu.
  "bsk-1hbtpr3": 3,  // Gefüge und Kristalle: Was gilt für einen amorphen Stoff im Vergleich zum kristallinen Stoff 
  "bsk-14kfymo": 1,  // Gefüge und Kristalle: Wie ist die Porosität p eines Werkstoffs definiert?
  "bsk-1j0xrlz": 1,  // Gefüge und Kristalle: Bei welchem Werkstoff ist die Porosität bewusst eingestellt?
  "bsk-1x8ccep": 2,  // Ermüdung und Verbundwerkstoffe: Wie stark erhöht eine Kerbe die Spannung typischerweise gegenüber der 
  "bsk-15a8ggg": 3,  // Ermüdung und Verbundwerkstoffe: Bruchbild – ordne zu.
  "bsk-bn8566": 2,  // Ermüdung und Verbundwerkstoffe: Ermüdung: Ordne die Größe ihrer Formel zu.
  "bsk-d84mwf": 1,  // Ermüdung und Verbundwerkstoffe: Welche Festigkeit ist gemeint?
  "bsk-1iy2rd1": 3,  // Ermüdung und Verbundwerkstoffe: Was zeigt ein Smith-Diagramm?
  "bsk-1b4tcl0": 2,  // Ermüdung und Verbundwerkstoffe: Wie läuft ein Ermüdungsbruch ab? Bring in die richtige Reihenfolge.
  "bsk-bjh8qu": 3,  // Ermüdung und Verbundwerkstoffe: Was besagt die Palmgren-Miner-Regel?
  "bsk-1w70lig": 2,  // Ermüdung und Verbundwerkstoffe: Wie ordnet die Vorlesung Beton und Stahlbeton als Verbundwerkstoffe ei
  "bsk-1utyxs8": 1,  // Ermüdung und Verbundwerkstoffe: Grundmodelle der Verbundwerkstoffe – ordne zu.
  "bsk-2azmwk": 2,  // Ermüdung und Verbundwerkstoffe: Wovon hängt die Rohdichte eines Verbundwerkstoffs ab?
  "bsk-d9hloa": 2,  // Ermüdung und Verbundwerkstoffe: Warum ist GFK in Faserrichtung steifer als quer dazu?
  "bsk-1lr9f7v": 3,  // Ermüdung und Verbundwerkstoffe: Beton: hartes Modell 48 750, weiches Modell 34 286 N/mm². Was misst ma
  /* Baukonstruktion */
  "bauko-ax85c8": 2,  // Holzbemessung: Der Sparren 8/16 hat am Auflager eine Kerve von 3 cm. Mit welchem Wide
  "bauko-1vkxe82": 3,  // Holzbemessung: Wie groß ist der Höhenfaktor k_h für die Nettohöhe h = 130 mm (C24)?
  "bauko-bmok3": 3,  // Holzbemessung: Du suchst die Sparrenhöhe und hast aus dem Biegenachweis h = 12 cm erh
  "bauko-pn2mf4": 3,  // Holzbemessung: Warum wurde der Spannungsnachweis im Feld in Beispiel 5 eigentlich nic
  "bauko-12mi4sw": 3,  // Holzbemessung: Für den Durchbiegungsnachweis des Sparrens brauchst du die Last senkre
  "bauko-1uhx4lc": 3,  // Holzbemessung: Welche Spannweite setzt du für die Durchbiegung des Sparrens an?
  "bauko-1bcrnhk": 3,  // Holzbemessung: Woher kommt der Faktor 76,8 in w = q · l⁴ / (76,8 · E · I)?
  "bauko-gpn9g4": 2,  // Holzbemessung: Du rechnest w = q · l⁴ / (76,8 · E · I) mit q in kN/m, l in m, E in N/
  "bauko-gdpecl": 2,  // Holzbemessung: Welcher Beiwert kommt aus welcher Tafel?
  "bauko-mmkovj": 3,  // Holzbemessung: Der Durchbiegungsnachweis ist nicht erfüllt (w_inst = 1,48 cm > l/300 
  "bauko-30149g": 2,  // Schnittgrößen und Aussteifung: Warum setzt man bei Pfetten Gerbergelenke ein?
  "bauko-1xirmdj": 3,  // Schnittgrößen und Aussteifung: Wo liegt das Gerbergelenk im Zweifeldträger mit gleichen Stützweiten l
  "bauko-18suirw": 3,  // Schnittgrößen und Aussteifung: Die Pfette hat ungleiche Felder (4,06 m und 3,38 m). Darf man die Tafe
  "bauko-hh3tz9": 3,  // Rechenweg: Wie wird aus den Sparren-Auflagerkräften die Last auf der Mittelpfette
  "bauko-ts9wal": 3,  // Rechenweg: Ein Deckenbalken hat die lichte Weite 4,50 m und liegt auf 10 cm breit
  "bauko-s1dxcw": 3,  // Holzbemessung: Holzbalkendecke im beheizten Wohnraum mit Eigengewicht und Nutzlast: W
  /* Physik */
  "phys-ayu031": 1,  // Arbeit und Energie: Wann verrichtet eine Kraft im physikalischen Sinn Arbeit?
  "phys-9d7n0o": 1,  // Arbeit und Energie: Was ist 1 Joule?
  "phys-15xksii": 2,  // Arbeit und Energie: Eine Person (70 kg) steigt ein Stockwerk (3 m) hoch. Welche Größenordn
  "phys-f5uf0q": 2,  // Arbeit und Energie: Mit welcher Kraft muss ein Seil eine Last (m) gleichmäßig eine Rampe m
  "phys-w8a33j": 2,  // Arbeit und Energie: Über eine Rampe braucht man weniger Kraft – deshalb ist auch die Arbei
  "phys-j55wx9": 3,  // Arbeit und Energie: Ein Schlitten wird mit 100 N an einer Leine unter 60° gegen den Boden 
  "phys-gq1eca": 2,  // Arbeit und Energie: Ordne das Vorzeichen der Arbeit zu (W = F·s·cos φ).
  "phys-lggy2n": 2,  // Arbeit und Energie: Wie bestimmst du die Arbeit einer Kraft, die sich unterwegs ändert (z.
  "phys-1hmfqtr": 3,  // Arbeit und Energie: Eine Feder (k = 200 N/m) wird um 0,20 m gedehnt. Wie groß ist die Arbe
  "phys-i31v78": 2,  // Arbeit und Energie: Bei einer konstanten Kraft hängt die Arbeit nur von Anfangs- und Endpu
  "phys-k5fbbm": 1,  // Arbeit und Energie: Ein Körper (50 kg) wird gleichmäßig eine Rampe 2 m hochgezogen. Seilkr
  "phys-1bmtgoj": 3,  // Arbeit und Energie: Was ist Leistung?
  "phys-1hgimvz": 2,  // Arbeit und Energie: Eine Person (70 kg) läuft in 6,0 s ein Stockwerk (3,0 m) hoch. Wie gro
  "phys-1isqrpv": 2,  // Arbeit und Energie: Welche Formel verbindet Leistung, Kraft und Geschwindigkeit?
  "phys-p5vmcc": 2,  // Arbeit und Energie: Wie lange liefert jedes Gerät 1 kWh?
  "phys-dwmyzt": 3,  // Arbeit und Energie: Ein Wasserkocher (2 kW) läuft 3 Minuten. Wie viel Energie ist das?
  "phys-131s2lt": 2,  // Arbeit und Energie: Eine Mikrowelle mit der Aufschrift 1000 W zieht immer 1000 W.
  "phys-thk6h9": 2,  // Arbeit und Energie: Wie lautet der Arbeitssatz?
  "phys-haz02v": 2,  // Arbeit und Energie: Ein Auto fährt doppelt so schnell. Was passiert mit kinetischer Energi
  "phys-1csjmdy": 3,  // Arbeit und Energie: Ein Auto (1000 kg) beschleunigt von 10 m/s auf 20 m/s. Wie viel Arbeit
  "phys-1dh1xcz": 1,  // Arbeit und Energie: Kinetische Energie kann negativ werden, wenn sich ein Körper rückwärts
  "phys-je69k2": 3,  // Kraftgesetze: Blatt 5, A1: Ein Block liegt am Boden, eine Kraft P zieht ihn senkrech
  "phys-1c276dm": 3,  // Kraftgesetze: Blatt 5, A1: Die waagerechte Kraft F ist kleiner als μ_s·(mg − P). Wie
  "phys-1fv9o7b": 3,  // Kraftgesetze: Blatt 5, A2: Unter welchem Winkel α zieht man eine Kiste am besten, um
  "phys-ig9f4c": 3,  // Kraftgesetze: Blatt 5, A3: Überhöhte Kurve – in welche Richtung zeigt die Haftreibun
  "phys-1vyn6ls": 3,  // Kraftgesetze: Blatt 5, A4: Am höchsten Punkt des Riesenrads ist die Normalkraft des 
  "phys-18xedzh": 3,  // Kraftgesetze: Blatt 5, A4: Das Riesenrad dreht doppelt so schnell. Wie groß ist die 
  "phys-v733ao": 3,  // Kraftgesetze: Blatt 5, A5: Ein Flugzeug fliegt eine waagerechte Kurve mit Querneigun
  "phys-od8ubl": 3,  // Kraftgesetze: Blatt 5, A6: Kugel an zwei Seilen (gleichseitiges Dreieck) am rotieren
  /* Baustoffkunde */
  "bsk-fjaba8": 1,  // Phasendiagramme und Legierungen: Was zeigt ein Phasendiagramm?
  "bsk-1bnpmh6": 2,  // Phasendiagramme und Legierungen: Welcher Zustand entsteht beim Mischen und Abkühlen? Ordne zu.
  "bsk-183rq9b": 2,  // Phasendiagramme und Legierungen: Welche Bedingungen müssen für volle Löslichkeit zweier Metalle erfüllt
  "bsk-1cef5w": 1,  // Phasendiagramme und Legierungen: Wie gut sind die Komponenten ineinander löslich? Ordne zu.
  "bsk-l4jd29": 1,  // Phasendiagramme und Legierungen: Linien im Zustandsdiagramm – ordne zu.
  "bsk-l8vufp": 2,  // Phasendiagramme und Legierungen: Hebelgesetz im Zweiphasengebiet: Wie groß ist der Anteil der festen Ph
  "bsk-1qr7c2k": 2,  // Phasendiagramme und Legierungen: Cu–Ni-Legierung mit c₀ = 40 M.-% Ni. Bei einer Temperatur gilt c_L = 3
  "bsk-1r8d7zo": 3,  // Phasendiagramme und Legierungen: Wie lautet die Gibbs’sche Phasenregel bei konstantem Druck?
  "bsk-1v0ieke": 2,  // Phasendiagramme und Legierungen: Phasenregel F = K + 1 − P: Was zeigt die Abkühlkurve?
  "bsk-1v8pzeb": 2,  // Phasendiagramme und Legierungen: Eine Cu–Ni-Legierung erstarrt wie ein reines Metall bei einer festen T
  "bsk-o6cyap": 3,  // Phasendiagramme und Legierungen: Wofür werden Kupfer-Nickel-Legierungen vor allem eingesetzt?
  "bsk-1ju0trf": 2,  // Phasendiagramme und Legierungen: Blei und Aluminium lassen sich nicht legieren. Wie nutzt man die Kombi
  "bsk-2gy4el": 2,  // Phasendiagramme und Legierungen: Pb–Sn-Diagramm: Was liegt im Bereich vor?
  "bsk-w1hzhe": 1,  // Phasendiagramme und Legierungen: Was ist das Eutektikum im Blei-Zinn-System?
  "bsk-151jijj": 2,  // Phasendiagramme und Legierungen: Im Pb–Sn-System sinkt die Löslichkeit von Sn in Pb (und umgekehrt) mit
  "bsk-1pmsq1j": 1,  // Phasendiagramme und Legierungen: Wo liegt die Grenze zwischen Stahl und Gusseisen?
  "bsk-nk35d": 2,  // Phasendiagramme und Legierungen: Modifikationen des reinen Eisens – ordne zu.
  "bsk-v7asf4": 2,  // Phasendiagramme und Legierungen: Welche Eisenmodifikation kann am meisten Kohlenstoff lösen?
  "bsk-1pw4ggf": 3,  // Phasendiagramme und Legierungen: Besondere Punkte im Eisen-Kohlenstoff-Diagramm – ordne zu.
  "bsk-1hxweop": 2,  // Phasendiagramme und Legierungen: Was ist was im Fe-C-System?
  "bsk-vvk85b": 3,  // Phasendiagramme und Legierungen: Linien im Eisen-Kohlenstoff-Diagramm – ordne zu.
  "bsk-5wn5ou": 3,  // Phasendiagramme und Legierungen: Gefüge eines Stahls bei Raumtemperatur – ordne zu.
  "bsk-3r8op8": 3,  // Phasendiagramme und Legierungen: Wie unterscheiden sich Primär- und Sekundärzementit?
  "bsk-rpqy5r": 2,  // Phasendiagramme und Legierungen: Wie verändern sich die Eigenschaften von Stahl mit steigendem Kohlenst
  "bsk-rp29hr": 2,  // Phasendiagramme und Legierungen: Warum hat Betonstahl weniger als etwa 0,22 M.-% Kohlenstoff?
  "bsk-vbab14": 3,  // Phasendiagramme und Legierungen: Werkstoff und typische Anwendung – ordne zu.
  "bsk-1y1w1ad": 2,  // Phasendiagramme und Legierungen: Warum lässt sich Gusseisen industriell so gut gießen?
  /* DAP */
  "dap-1wg49rj": 1,  // Grenzwertsatz und Konfidenzintervalle: Was passiert, wenn man viele Verteilungen (auch nicht normalverteilte)
  "dap-a6xsie": 2,  // Grenzwertsatz und Konfidenzintervalle: Addiert man zwei Normalverteilungen, entsteht wieder eine Normalvertei
  "dap-rh1pgs": 2,  // Grenzwertsatz und Konfidenzintervalle: Warum sind z. B. Körpergrößen in der Natur oft normalverteilt?
  "dap-w0j86d": 2,  // Grenzwertsatz und Konfidenzintervalle: Man zieht viele Stichproben aus einer beliebig verteilten Grundgesamth
  "dap-d6t0t0": 2,  // Grenzwertsatz und Konfidenzintervalle: Wie groß müssen die Stichproben laut Folie sein, damit der Grenzwertsa
  "dap-1cmfadd": 1,  // Grenzwertsatz und Konfidenzintervalle: Wie heißt σ/√n, die Standardabweichung der Stichprobenmittelwerte?
  "dap-1caxe6h": 2,  // Grenzwertsatz und Konfidenzintervalle: Konfidenzintervall – ordne zu.
  "dap-rhtmi7": 3,  // Grenzwertsatz und Konfidenzintervalle: Für γ = 0,95 nimmt man z = 1,96. Bei welchem Wert der Tabelle Φ(z) lie
  "dap-ouewco": 2,  // Grenzwertsatz und Konfidenzintervalle: Welcher z-Wert gehört zum Konfidenzniveau?
  "dap-1y0jxyb": 2,  // Grenzwertsatz und Konfidenzintervalle: Wie lautet das Konfidenzintervall für den Mittelwert, wenn σ der Grund
  "dap-ufd6d5": 3,  // Grenzwertsatz und Konfidenzintervalle: Folienbeispiel: 10 Studentinnen, x̄ = 170 cm, σ = 6,2 cm bekannt, γ = 
  "dap-1gg2liu": 2,  // Grenzwertsatz und Konfidenzintervalle: Konfidenzintervalle mit bekannter Standardabweichung σ kommen in der P
  "dap-1uojecd": 1,  // Grenzwertsatz und Konfidenzintervalle: Was bedeutet „degrees of freedom“ (Freiheitsgrade)?
  "dap-13fo4mi": 2,  // Grenzwertsatz und Konfidenzintervalle: Warum teilt man bei der Stichprobenvarianz s² durch n − 1 statt durch 
  "dap-16jbq9g": 2,  // Testverteilungen: Welche Testverteilung entsteht? Ordne zu.
  "dap-1gu344": 3,  // Testverteilungen: Kennwerte der Testverteilungen – ordne zu.
  "dap-z7wm72": 1,  // Testverteilungen: Wie verändert sich die Chi-Quadrat-Verteilung mit wachsender Zahl der 
  "dap-deygws": 1,  // Testverteilungen: Wie unterscheidet sich die t-Verteilung von der Standardnormalverteilu
  "dap-1foq1j0": 2,  // Testverteilungen: Warum ist das t-Intervall breiter als das z-Intervall?
  "dap-88jnc6": 2,  // Testverteilungen: Konfidenzintervall für μ mit unbekanntem σ: Wie viele Freiheitsgrade h
  "dap-adae9o": 3,  // Testverteilungen: Gleiches Beispiel wie in L04, aber s = 6,2 cm aus der Stichprobe (n = 
  "dap-xp0cjs": 1,  // Testverteilungen: Binomialverteilung: Was gibt der Binomialkoeffizient (n über x) an?
  "dap-1wob3n": 3,  // Testverteilungen: Wie wahrscheinlich sind genau zwei Sechsen bei fünf Würfen?
  "dap-18wir5f": 2,  // Testverteilungen: Zehnmal würfeln – erwartete Zahl der Erfolge μ = n·p. Ordne zu.
  "dap-1dnizm4": 3,  // Grenzwertsatz und Konfidenzintervalle: Wie lautet das Konfidenzintervall für einen Anteil p in der Grundgesam
  "dap-2i1cky": 3,  // Grenzwertsatz und Konfidenzintervalle: Warum nimmt man beim Anteils-Intervall t statt z?
  "dap-ckrtbf": 3,  // Grenzwertsatz und Konfidenzintervalle: 200 Studierende, 180 mit Führerschein, γ = 0,95 (t = 1,97). Welches In
  "dap-1slz1ez": 3,  // Grenzwertsatz und Konfidenzintervalle: Das t-Intervall für Anteile ist besonders genau, wenn n klein und p na
  "dap-15k32ei": 1,  // Grenzwertsatz und Konfidenzintervalle: Deskriptive oder induktive Statistik? Ordne zu.
  "dap-182zx25": 3,  // Grenzwertsatz und Konfidenzintervalle: Welche R-Funktion macht was (L05-Demo)?
  "dap-ybn4nl": 3,  // R-Grundlagen: Exercise 3: Wie zählst du in R die Wege mit mindestens 90 Minuten Daue
  "dap-s9zedh": 3,  // R-Grundlagen: Wie wählst du Wege aus, die mit dem Rad oder zu Fuß (hvm_imp < 3) in N
  "dap-r5abwf": 2,  // R-Grundlagen: Datensatz mit den 5000 längsten Fußwegen: Bring die Befehle in die ric
  "dap-18hnowe": 3,  // R-Grundlagen: Runden in R – ordne zu (Wert 3,4 km).
  "dap-762ed5": 3,  // R-Grundlagen: Wie ersetzt du die Codes 1, 2, 3 … der Altersgruppe durch lesbare Beze
  "dap-5xlmys": 3,  // R-Grundlagen: Was bewirkt prop.table(table(alter, klasse), 1) * 100?
  "dap-1vg2c3c": 3,  // R-Grundlagen: Wie berücksichtigst du in der Kreuztabelle die Gewichtungsfaktoren W_G
  /* Bauinformatik */
  "binf-qrukn0": 1,  // Felder und Suchen: Wozu braucht man ein Feld (Array)?
  "binf-1yh8dni": 1,  // Felder und Suchen: Was macht die Zeile? Ordne zu.
  "binf-4o0phs": 1,  // Felder und Suchen: int[] noten = new int[6]; Welchen Index hat das letzte Element?
  "binf-15n1kh1": 1,  // Felder und Suchen: Was passiert bei noten[6] = 3; wenn noten die Länge 6 hat?
  "binf-13u2nqq": 2,  // Felder und Suchen: int[] a = new int[3]; a[0] = 4; a[1] = 7; a[2] = a[1] + 1; – Welchen W
  "binf-xo32iy": 2,  // Felder und Suchen: double[][] feld = new double[3][5]; – Was bedeuten die Zahlen?
  "binf-1n153gw": 1,  // Felder und Suchen: double[][] feld = new double[3][5]; – Was liefert der Ausdruck?
  "binf-vuisxx": 2,  // Felder und Suchen: int[][] m = {{1, 4, 7}, {2, 8, 1}, {9, 3, 5}}; – Welchen Wert hat m[1]
  "binf-a6hqo": 2,  // Felder und Suchen: Wie gibst du ein ganzes eindimensionales Feld lesbar aus?
  "binf-26mzq1": 2,  // Felder und Suchen: System.arraycopy(woche, 0, arbeitswoche, 0, 5); – Was passiert?
  "binf-1rshaxt": 3,  // Felder und Suchen: Parameter von System.arraycopy(src, src_pos, dst, dst_pos, length) – o
  "binf-169x9uj": 3,  // Felder und Suchen: Was versteht man unter der Zeitkomplexität eines Algorithmus?
  "binf-uwrc6t": 1,  // Felder und Suchen: Zeitkomplexität im worst case – ordne zu (n Elemente).
  "binf-15d0mjx": 2,  // Felder und Suchen: Was setzt die binäre Suche voraus?
  "binf-2azvzp": 1,  // Felder und Suchen: Lineare Suche: Warum heißt die Bedingung while (i < feld.length && fel
  "binf-ae5p5j": 3,  // Felder und Suchen: Lineare Suche: Woran erkennt das Programm nach der Schleife, dass z ni
  "binf-pkt6f7": 2,  // Felder und Suchen: Binäre Suche: Bring einen Durchlauf in die richtige Reihenfolge.
  "binf-6iut34": 2,  // Felder und Suchen: Liste {1, 3, 4, 5, 7, 11, 12, 27, 29, 30, 33, 35, 47, 49}, gesucht 11.
  "binf-8x7ctw": 3,  // Felder und Suchen: Gleiche Liste, gesucht 11: Nach wie vielen Durchläufen findet die binä
  "binf-9t2z1k": 2,  // Operatoren: Übung 4, A1a: int a = 10, b = 11, c = 10; – Welcher Ausdruck ergibt fa
  "binf-i2ypu7": 3,  // Operatoren: float f = 2.0000000000001f; double d = 2.0000000000001; – Was ergeben 
  "binf-1cvm4gb": 2,  // Operatoren: Übung 4, A1b: boolean A = false, B = true, C = true; – Welcher Ausdruc
  "binf-1k332dt": 2,  // Operatoren: Welcher Operator wird in A || B && C zuerst ausgewertet?
  "binf-bzcwb1": 3,  // Kontrollstrukturen: Übung 4, A3: Welche Bedingung erkennt sicher ungerade Zahlen, auch neg
  "binf-1t1upcb": 2,  // Kontrollstrukturen: Übung 4, A3c: Wie prüfst du, ob a durch 7 teilbar ist?
  "binf-1v3zbk2": 2,  // Kontrollstrukturen: WhatsYourNumber: Welche Zahlen liefert (int)(Math.random() * 5 + 1)?
  "binf-1jiqt08": 2,  // Kontrollstrukturen: Warum steht in WhatsYourNumber Integer.parseInt(zahlTxt)?
  "binf-15f1b93": 3,  // Kontrollstrukturen: WhatsYourNumber mit Tipp (A5): Bring die Prüfungen in eine sinnvolle R
  "binf-p1ih2b": 3,  // Kontrollstrukturen: Mini-Taschenrechner (A6): Wo fängst du die Division durch 0 ab?
  "binf-a8x6kn": 2,  // Kontrollstrukturen: Wofür ist der default-Zweig im Taschenrechner da?
  "binf-b4ifaa": 3,  // Kontrollstrukturen: A6b: Der Doppelpunkt „:“ soll auch dividieren. Wie geht das mit einer 
  /* Baukonstruktion */
  "bauko-1883085": 2,  // Tragelemente: Rückblick Dächer – ordne zu.
  "bauko-19vobaw": 1,  // Tragelemente: Zu welcher Gruppe gehört das Tragelement?
  "bauko-1g6069m": 1,  // Tragelemente: Wie wird der Stab belastet? Ordne zu.
  "bauko-1kar3c5": 1,  // Tragelemente: Stabtragwerk und Achsform – ordne zu.
  "bauko-imjnyt": 1,  // Tragelemente: Platte oder Scheibe?
  "bauko-1860lhs": 2,  // Tragelemente: Schale oder Membran?
  "bauko-167402s": 2,  // Tragelemente: Bauwerk und Tragelement – ordne zu.
  "bauko-190opb2": 1,  // Tragelemente: Welche Bauteile bilden laut Vorlesung das Deckensystem?
  "bauko-1dgqnq3": 1,  // Stützen und Knicken: Wie lautet die Eulersche Knicklast?
  "bauko-jwzyu2": 1,  // Stützen und Knicken: Eulerfälle – ordne den Knicklängenbeiwert β zu.
  "bauko-1lphf7a": 2,  // Stützen und Knicken: Eine gelenkige Stütze wird unten eingespannt (Fall 2 → Fall 3). Wie än
  "bauko-1t3nigh": 2,  // Stützen und Knicken: Eine Fahnenmast-Stütze (unten eingespannt, oben frei) hat die gleiche 
  "bauko-vm3r5a": 2,  // Stützen und Knicken: Wie lautet der Knicknachweis einer Holzstütze (Ersatzstabverfahren)?
  "bauko-1d9y0m8": 3,  // Stützen und Knicken: Welcher Imperfektionsbeiwert β_c gilt für Vollholz?
  "bauko-1mmopj0": 3,  // Stützen und Knicken: Wie lautet der bezogene Schlankheitsgrad im Holzbau?
  "bauko-iwmgkv": 2,  // Stützen und Knicken: Formelteile des Holz-Knicknachweises – ordne zu.
  "bauko-1fm8mgt": 2,  // Stützen und Knicken: Ausbildung von Holzstützen – ordne zu.
  "bauko-1y0mgea": 3,  // Stützen und Knicken: Ungleiche Knicklängen: Eine Stahlstütze ist um die z-Achse in halber H
  "bauko-zwp1z7": 2,  // Stützen und Knicken: Stahl: Systemgrößen – ordne zu.
  "bauko-mh5qs6": 3,  // Stützen und Knicken: Welcher Bezugsschlankheitsgrad λ_I gehört zur Stahlsorte?
  "bauko-1wu1229": 2,  // Stützen und Knicken: Wie lautet der Biegeknicknachweis im Stahlbau?
  "bauko-1c7tlp6": 3,  // Stützen und Knicken: Imperfektionsbeiwert α der Knickspannungslinie – ordne zu.
  "bauko-1dehwnh": 3,  // Stützen und Knicken: Wie berechnet man den Abminderungsbeiwert χ?
  "bauko-ag13sx": 2,  // Stützen und Knicken: Stahlstützenfuß – welche Lasten werden aufgenommen?
  "bauko-1o6bta5": 1,  // Stützen und Knicken: Welche Bauweisen von Verbundstützen zeigt die Vorlesung?
};
/* Patch-Warteschlange · 2.3 · neue Skizzen für Fragen ohne Bild (Sicherheitskonzept, Grundkombination, Skalarprodukt, Datentypen, krz/kfz, Gewichtung, Data Frame) · erstellt 20.11.2026 */
for (const [id, ev] of Object.entries({"bauko-mctp1e":"sicherheit","bauko-15fn0bl":"grundkombi","bauko-1unldu":"grundkombi","phys-fxy2p8":"skalarprod","binf-103nehk":"datentypen","dap-rloqz2":"gewichtung","dap-814yna":"gewichtung","dap-ktknex":"dataframe","bsk-1hxweop":"krzkfz","bsk-183rq9b":"krzkfz","phys-7d8n53":"skalarprod"})) KORREKTUR[id] = Object.assign({}, KORREKTUR[id], {ev});
/* Patch-Warteschlange · Physik · Vorlesung 7 Potenzielle Energie, Energiesatz (Nebel, 23.11.2026, 59 Folien) · erstellt 23.11.2026
   Neues Thema phys|Energie und Energiesatz. Zahlen an den Folien bzw. mit Python geprüft. Neue Skizzen wegunabh, epotdiag in „2026-11-23 neue Skizzen Physik V07 (FIG).js“. */
const PH7 = "Energie und Energiesatz";
const PH7z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);
THEMEN["phys|" + PH7] = "Vorlesung 7: Konservative Kräfte (Gewichtskraft, Federkraft) verrichten eine Arbeit, die nur vom Anfangs- und Endpunkt abhängt – auf einem geschlossenen Weg ist sie null. Dazu gehört eine potenzielle Energie: W = −ΔE_pot, umgekehrt F_x = −dE_pot/dx. Gewichtskraft in Erdnähe: E_pot = m·g·y; Feder: F_x = −k·x, E_pot = ½·k·x² (doppelte Auslenkung, vierfache Energie). Gleitreibung ist nicht konservativ: W_R = −F_R·s = −ΔE_th. Energiesatz: Die Gesamtenergie E_kin + E_pot + E_th + E_inn ändert sich nur durch Arbeit äußerer Kräfte, W = ΔE_ges; ohne äußere Arbeit bleibt sie konstant. Im Energiediagramm ist E_kin der Abstand zwischen E_mech und E_pot(x); Umkehrpunkte liegen bei E_pot = E_mech, Minima von E_pot sind stabile Gleichgewichtslagen.";

/* ── Konservative Kräfte ── */
mc("phys", PH7, "Woran erkennst du eine konservative Kraft?", ["Ihre Arbeit hängt nur vom Anfangs- und Endpunkt ab, nicht vom Weg dazwischen", "Sie ist immer konstant", "Sie zeigt immer nach unten", "Ihre Arbeit ist immer positiv"], "Bei einer konservativen Kraft ist es egal, ob der Körper über Weg A oder Weg B von 1 nach 2 kommt – die Arbeit ist gleich. Daraus folgt: Auf einem geschlossenen Weg (zurück zum Start) ist die Arbeit null. Beispiele: Gewichtskraft, Federkraft.", "Physik V07, Folien 3–5");
PH7z({ st: 1, ev: "wegunabh" });
pair("phys", PH7, "Konservativ oder nicht? Ordne zu.", [["Gewichtskraft", "konservativ – Arbeit wird als E_pot gespeichert"], ["Federkraft", "konservativ – Energie steckt in der gedehnten Feder"], ["Gleitreibung", "nicht konservativ – Arbeit wird zu Wärme"], ["Luftwiderstand", "nicht konservativ – bremst auf jedem Weg"]], "Hebst du eine Kiste, holst du die Arbeit beim Fallen zurück (konservativ). Schiebst du sie über den Boden, wird die Arbeit zu Wärme und ist weg (nicht konservativ).", "Physik V07, Folien 3 und 28");
PH7z({ st: 1 });
wf("phys", PH7, "Für eine konservative Kraft gilt: Die Arbeit auf einem geschlossenen Weg ist null.", true, "Richtig. Auf dem Rückweg ist die Arbeit genauso groß, aber mit umgekehrtem Vorzeichen – die Summe ist null. Das Integralzeichen mit Kreis ∮ F · ds = 0 steht genau dafür: Der Weg endet am Startpunkt.", "Physik V07, Folie 5");
PH7z({ st: 2, ev: "wegunabh" });
mc("phys", PH7, "Ein Wanderer steigt einmal über einen steilen und einmal über einen flachen, langen Weg auf denselben Gipfel. Was gilt für die Arbeit der Gewichtskraft?", ["Sie ist auf beiden Wegen gleich", "Auf dem langen Weg ist sie größer", "Auf dem steilen Weg ist sie größer", "Auf dem flachen Weg ist sie null"], "Die Gewichtskraft ist konservativ, nur der Höhenunterschied zählt: W_G = −m·g·(y₂ − y₁). Der flache Weg ist länger, aber die Kraft hat entlang des Weges einen kleineren Anteil – das gleicht sich genau aus.", "Physik V07, Folien 4 und 11–12");
PH7z({ st: 2, ev: "wegunabh" });

/* ── Potenzielle Energie ── */
mc("phys", PH7, "Wie hängen die Arbeit einer konservativen Kraft und die potenzielle Energie zusammen?", ["W = −ΔE_pot", "W = +ΔE_pot", "W = E_pot", "W = ΔE_kin − E_pot"], "Die Arbeit der konservativen Kraft ist gleich der Abnahme der potenziellen Energie: W = −(E_pot(r₂) − E_pot(r₁)). Leistet die Kraft positive Arbeit (Stein fällt), nimmt E_pot ab.", "Physik V07, Folie 6");
PH7z({ st: 1 });
mc("phys", PH7, "Ein Stein fällt nach unten. Was gilt?", ["Die Gewichtskraft verrichtet positive Arbeit, E_pot nimmt ab", "Die Gewichtskraft verrichtet negative Arbeit, E_pot nimmt zu", "Die Gewichtskraft verrichtet keine Arbeit", "E_pot bleibt gleich, nur E_kin ändert sich"], "Kraft (nach unten) und Weg (nach unten) zeigen in dieselbe Richtung → W > 0. Mit W = −ΔE_pot folgt ΔE_pot < 0. Beim Heben ist es genau umgekehrt.", "Physik V07, Folie 8");
PH7z({ st: 1 });
pair("phys", PH7, "Ordne die Eigenschaften der potenziellen Energie zu.", [["Hängt vom …", "Ort ab: E_pot(x, y, z)"], ["Gehört zum …", "System, z. B. Körper und Erde"], ["Ist ein …", "Skalar – Zahlenwert ohne Richtung"], ["Einheit", "Joule = N · m"]], "Potenzielle Energie ist Lageenergie. Sie steckt nicht im Stein allein, sondern im System Stein + Erde. Sie hat keine Richtung, nur einen Betrag in Joule.", "Physik V07, Folie 7");
PH7z({ st: 1 });
mc("phys", PH7, "Warum darfst du den Nullpunkt der potenziellen Energie (Boden, Tisch, Keller) frei wählen?", ["Physikalisch zählen nur Änderungen ΔE_pot – eine Konstante fällt bei der Differenz heraus", "Weil E_pot immer null ist", "Weil die Erdanziehung überall gleich ist", "Das darf man nicht, es muss immer der Erdboden sein"], "Der Wert von E_pot hängt von der Wahl ab, die Änderung ΔE_pot nicht. Darum gilt der Merksatz: Physikalisch wichtig ist nur ΔE_pot, nie der Absolutwert.", "Physik V07, Folie 9");
PH7z({ st: 2 });
mc("phys", PH7, "Wie bekommst du aus der Kurve E_pot(x) die Kraft auf den Körper?", ["F_x = −dE_pot/dx – die Kraft zeigt in der Kurve bergab", "F_x = +dE_pot/dx – die Kraft zeigt bergauf", "F_x = E_pot · x", "Gar nicht, dafür braucht man die Masse"], "Arbeit ist das Integral der Kraft, umgekehrt ist die Kraft die negative Ableitung der potenziellen Energie. Wo die Kurve fällt, zeigt die Kraft nach rechts, wo sie steigt, nach links – immer bergab.", "Physik V07, Folie 10");
PH7z({ st: 2, ev: "epotdiag" });

/* ── Gewichtskraft in Erdnähe ── */
mc("phys", PH7, "Welche Formel gilt für die potenzielle Energie der Gewichtskraft in Erdnähe?", ["E_pot = m · g · y", "E_pot = ½ · m · g · y²", "E_pot = m · g / y", "E_pot = ½ · m · v²"], "Die Gewichtskraft ist in Erdnähe konstant (Betrag m·g, nach unten). Mit W_G = −m·g·(y₂ − y₁) = −ΔE_pot folgt E_pot = m·g·y. Gleiche Höhe heißt gleiche E_pot – im Raum sind das waagerechte Ebenen.", "Physik V07, Folien 11–12");
PH7z({ st: 1 });
mc("phys", PH7, "Eine Getränkekiste (12 kg) wird 6,0 m hoch in den 2. Stock getragen. Wie groß sind ΔE_pot und die Arbeit der Gewichtskraft?", ["ΔE_pot ≈ +706 J, W_G ≈ −706 J", "ΔE_pot ≈ −706 J, W_G ≈ +706 J", "ΔE_pot ≈ 72 J, W_G ≈ −72 J", "Hängt davon ab, ob Treppe oder Aufzug"], "ΔE_pot = m·g·Δy = 12 kg · 9,81 m/s² · 6,0 m ≈ 706 J. Die Gewichtskraft zeigt gegen die Bewegung, ihre Arbeit ist W_G = −ΔE_pot ≈ −706 J. Treppe oder Aufzug spielt keine Rolle – nur die Höhe zählt.", "Physik V07, Folien 13–14");
PH7z({ st: 3 });

/* ── Federkraft ── */
mc("phys", PH7, "Was sagt das Hookesche Gesetz F_x = −k · x?", ["Die Federkraft ist proportional zur Auslenkung und zeigt zurück zur Ruhelage", "Die Federkraft ist immer konstant", "Die Federkraft zeigt in Richtung der Auslenkung", "Die Federkraft wächst mit x²"], "Ziehst du den Klotz nach rechts (x > 0), zieht die Feder nach links (F_x < 0) – daher das Minuszeichen. k ist die Federkonstante in N/m: Je größer k, desto steifer die Feder.", "Physik V07, Folie 16");
PH7z({ st: 1 });
mc("phys", PH7, "Welche Energie speichert eine um x ausgelenkte Feder?", ["E_pot = ½ · k · x²", "E_pot = k · x", "E_pot = ½ · k · x", "E_pot = k · x²"], "Die Arbeit ist die Dreiecksfläche unter der Geraden F = k·x: ½ · x · (k·x) = ½·k·x². Nullpunkt ist die Ruhelage; Dehnen und Stauchen speichern beide Energie, weil x quadratisch eingeht.", "Physik V07, Folien 17–18");
PH7z({ st: 1, ev: "federarbeit" });
mc("phys", PH7, "Die Auslenkung einer Feder wird verdoppelt. Wie ändern sich Federkraft und gespeicherte Energie?", ["Kraft doppelt, Energie vierfach", "Kraft und Energie doppelt", "Kraft vierfach, Energie doppelt", "Beides vierfach"], "F = k·x wächst linear, E_pot = ½·k·x² quadratisch. Expander mit k = 500 N/m: 0,20 m → 100 N und 10 J; 0,40 m → 200 N und 40 J.", "Physik V07, Folien 18 und 20–22");
PH7z({ st: 2 });
mc("phys", PH7, "Eine Feder mit 400 N/m wird um 5,0 cm gedehnt. Wie groß sind Federkraft und gespeicherte Energie?", ["20 N und 0,50 J", "2000 N und 500 J", "20 N und 1,0 J", "8 N und 0,20 J"], "F = k·x = 400 N/m · 0,050 m = 20 N. E_pot = ½ · 400 N/m · (0,050 m)² = 0,50 J. Achtung: Zentimeter vorher in Meter umrechnen.", "Physik V07, Selbsttest Frage 5");
PH7z({ st: 3 });
wf("phys", PH7, "Auch Stahl, Glas und Keramik verhalten sich bei kleinen Verformungen wie eine Feder.", true, "Richtig. Die Verformung ist proportional zur Kraft, ohne Kraft kehren sie in ihre Form zurück. Grund: Die Atome hängen über chemische Bindungen zusammen und schwingen wie an einer Feder – deshalb gilt das Hookesche Gesetz auch für Baustoffe (Verbindung zum E-Modul in Baustoffkunde).", "Physik V07, Folie 19");
PH7z({ st: 2 });

/* ── Gleitreibung ── */
mc("phys", PH7, "Warum ist die Gleitreibung nicht konservativ?", ["Ihre Arbeit ist immer negativ und wächst mit der Länge des Wegs – auf einem geschlossenen Weg ist sie nicht null", "Weil sie zu klein ist", "Weil sie senkrecht zur Bewegung wirkt", "Weil sie nur bei Bewegung nach unten auftritt"], "Die Gleitreibung zeigt immer gegen die Verschiebung: W_R = −F_R · s. Ein längerer Weg heißt mehr Reibungsarbeit. Deshalb gibt es zur Gleitreibung keine potenzielle Energie.", "Physik V07, Folien 24–26");
PH7z({ st: 1 });
mc("phys", PH7, "Wohin geht die Arbeit der Gleitreibung?", ["In thermische Energie von Körper und Unterlage: W_R = −ΔE_th", "In potenzielle Energie des Körpers", "Sie geht vollständig verloren und ist nirgends mehr", "In kinetische Energie der Unterlage"], "Reibung erzeugt Wärme (Hände reiben, heiße Bremsscheibe, warmer Hosenboden auf der Rutsche). ΔE_th ≥ 0 – thermische Energie kann durch Reibung nur zunehmen.", "Physik V07, Folien 23 und 27");
PH7z({ st: 1 });
mc("phys", PH7, "Eine Kiste wird 10 m weit über den Boden geschoben, die Gleitreibungskraft beträgt 50 N. Wie groß sind W_R und ΔE_th?", ["W_R = −500 J, ΔE_th = +500 J", "W_R = +500 J, ΔE_th = −500 J", "W_R = −5 J, ΔE_th = +5 J", "W_R = 0, weil die Kiste wieder stillsteht"], "W_R = −F_R · s = −50 N · 10 m = −500 J. Diese Energie wird zu Wärme: ΔE_th = −W_R = +500 J.", "Physik V07, Selbsttest Frage 8");
PH7z({ st: 3 });

/* ── Energiesatz ── */
pair("phys", PH7, "Ordne die Kräfte der richtigen Gruppe im Energiesatz zu.", [["Gewichtskraft, Federkraft", "W_kons = −ΔE_pot"], ["Gleitreibung, Luftwiderstand", "W_R = −ΔE_th"], ["Zug an einem Seil von außen", "W_sonst"]], "Die Arbeit der resultierenden Kraft ist die Summe: W_res = W_kons + W_R + W_sonst. Mit dem Arbeitssatz W_res = ΔE_kin folgt ΔE_kin + ΔE_pot + ΔE_th = W_sonst.", "Physik V07, Folien 28–29");
PH7z({ st: 2 });
mc("phys", PH7, "Was ist die mechanische Energie?", ["E_mech = E_kin + E_pot", "E_mech = E_kin − E_pot", "E_mech = E_pot + E_th", "E_mech = m · g · h · v"], "Bewegungsenergie und Lageenergie zusammen. Kommen thermische und innere (chemische) Energie dazu, hat man die Gesamtenergie E_ges = E_kin + E_pot + E_th + E_inn.", "Physik V07, Folien 29 und 31");
PH7z({ st: 1 });
mc("phys", PH7, "Wodurch kann sich die Gesamtenergie eines Systems ändern?", ["Nur durch Arbeit äußerer Kräfte: W = ΔE_ges", "Durch jede Kraft im System", "Durch Reibung im System", "Gar nicht – sie ist immer konstant"], "Merksatz der Vorlesung: Die Gesamtenergie eines Systems ändert sich nur durch Arbeit äußerer Kräfte. Reibung im System wandelt nur um (E_kin → E_th), die Summe bleibt.", "Physik V07, Folie 32");
PH7z({ st: 1 });
mc("phys", PH7, "Was beschreibt der Energiesatz pro Zeit, dE_ges/dt = P?", ["Wie schnell sich die Gesamtenergie ändert – gleich der Leistung der äußeren Kräfte", "Die Geschwindigkeit des Körpers", "Die Reibungskraft pro Sekunde", "Die potenzielle Energie pro Meter"], "Gleiche Aussage wie W = ΔE_ges, nur für eine kurze Zeitspanne. P ist die Leistung der äußeren Kräfte in Watt = J/s, z. B. ein Wasserkocher mit 2000 W.", "Physik V07, Folie 33");
PH7z({ st: 2 });
mc("phys", PH7, "Masse am Seil über eine Rolle an der Decke, System = Masse, Erde, Seil, Rolle. Welche Kraft ist eine innere Kraft?", ["Die Gewichtskraft F_G – sie steckt in E_pot", "Die Kraft am Seilende F_S", "Die Kraft der Decke F_D", "Keine – alle drei sind äußere Kräfte"], "Seilkraft und Deckenkraft greifen von außen an. F_S verrichtet die Arbeit W, F_D nicht (die Aufhängung ruht). Die Gewichtskraft wirkt zwischen Masse und Erde, beide gehören zum System – ihre Arbeit steckt in E_pot.", "Physik V07, Folien 34–35");
PH7z({ st: 2 });
mc("phys", PH7, "Das Seil reißt, Luftwiderstand vernachlässigt. Was gilt für die Masse?", ["ΔE_kin + ΔE_pot = 0 – E_pot nimmt ab, E_kin um denselben Betrag zu", "E_kin bleibt gleich", "Die Gesamtenergie nimmt ab", "E_pot wird zu Wärme"], "Ohne äußere Arbeit (W = 0) bleibt die mechanische Energie konstant. Aus ½·m·v² = m·g·h folgt v = √(2·g·h) – unabhängig von der Masse. Aus 5,0 m: v ≈ 9,9 m/s ≈ 36 km/h.", "Physik V07, Folien 37–40");
PH7z({ st: 2 });
mc("phys", PH7, "Ein Ball fällt ohne Luftwiderstand aus 1,25 m Höhe. Mit welcher Geschwindigkeit trifft er auf?", ["≈ 4,95 m/s", "≈ 24,5 m/s", "≈ 12,3 m/s", "Das hängt von der Masse ab"], "Energieerhaltung: ½·m·v² = m·g·h → v = √(2·g·h) = √(2 · 9,81 m/s² · 1,25 m) ≈ 4,95 m/s. Die Masse kürzt sich heraus.", "Physik V07, Selbsttest Frage 10");
PH7z({ st: 3 });
pair("phys", PH7, "Auto rollt mit abgeschaltetem Motor auf ebener Straße aus. Ordne zu.", [["ΔE_inn", "= 0 – kein Benzinverbrauch"], ["ΔE_pot", "= 0 – Straße eben"], ["ΔE_th", "> 0 – Luftwiderstand, Reibung"], ["ΔE_kin", "< 0 – Auto wird langsamer"]], "Keine Arbeit von außen, die Gesamtenergie bleibt. Die kinetische Energie wird bis zum Stillstand vollständig in thermische Energie umgewandelt.", "Physik V07, Folie 42");
PH7z({ st: 2 });

/* ── Energiediagramm ── */
mc("phys", PH7, "Wie liest du im Energiediagramm die kinetische Energie ab?", ["Als Abstand zwischen der waagerechten Linie E_mech und der Kurve E_pot(x)", "Als Höhe der Kurve E_pot(x)", "Als Steigung der Kurve E_pot(x)", "Als Fläche unter der Kurve"], "Ohne Reibung ist E_mech = E_kin + E_pot konstant – eine waagerechte Gerade. Also E_kin = E_mech − E_pot: Wo die Kurve tief liegt, ist der Körper schnell.", "Physik V07, Folien 44–45");
PH7z({ st: 2, ev: "epotdiag" });
mc("phys", PH7, "Was gilt an einem Umkehrpunkt im Energiediagramm?", ["E_pot = E_mech, also E_kin = 0 – der Körper steht kurz und kehrt um", "E_kin ist maximal", "E_pot ist minimal", "Die Kraft ist dort null"], "Am Umkehrpunkt berührt die Kurve E_pot(x) die Linie E_mech. Der Körper hat keine kinetische Energie mehr; die Kraft −dE_pot/dx zeigt zurück, er kehrt um. Bereiche mit E_pot > E_mech sind nicht erreichbar.", "Physik V07, Folien 46–47");
PH7z({ st: 2, ev: "epotdiag" });
mc("phys", PH7, "Liegt eine stabile Gleichgewichtslage im Minimum oder im Maximum von E_pot?", ["Im Minimum – nach kleiner Auslenkung zeigt die Kraft zurück", "Im Maximum – dort ist die Kraft am größten", "Überall, wo E_pot konstant ist", "Am Umkehrpunkt"], "Merksatz: Minima von E_pot sind stabile Gleichgewichtslagen (wie eine Kugel in einer Mulde). In einem Maximum würde die Kraft nach kleiner Auslenkung weiter wegtreiben.", "Physik V07, Folie 48");
PH7z({ st: 2, ev: "epotdiag" });

/* ── Lösungsweg-Aufgabe ── */
aufgabe({
 "id": "phys-v07-seilriss", "f": "phys", "t": PH7, "titel": "Fall nach dem Seilriss", "s": "Physik V07, Folien 38–40",
 "angabe": "Eine Masse m = 2,0 kg hängt in Ruhe h = 5,0 m über dem Boden. Das Seil reißt, der Luftwiderstand wird vernachlässigt. Mit welcher Geschwindigkeit trifft die Masse auf?",
 "geg": ["m = 2,0 kg", "h = 5,0 m", "v₁ = 0", "g = 9,81 m/s²"],
 "ges": "Aufprallgeschwindigkeit v₂",
 "schritte": [
  { "f": "Welcher Ansatz passt?", "o": [
    ["Energiesatz ohne äußere Arbeit: ΔE_kin + ΔE_pot = 0", "Nach dem Riss wirkt nur noch die Gewichtskraft – eine innere, konservative Kraft. W = 0, E_mech bleibt konstant."],
    ["W = F · s mit der Seilkraft", "Das Seil ist gerissen, die Seilkraft ist null."],
    ["ΔE_th = W_R", "Ohne Luftwiderstand entsteht keine Wärme."],
    ["F = m · a mit a = 0", "Die Masse wird beschleunigt, a = g."]],
   "r": "ΔE_kin + ΔE_pot = 0" },
  { "f": "Wie sehen die einzelnen Änderungen aus?", "o": [
    ["(½·m·v₂² − 0) + (0 − m·g·h) = 0", "E_kin wächst von 0 auf ½·m·v₂², E_pot sinkt von m·g·h auf 0 (Nullpunkt am Boden)."],
    ["(½·m·v₂²) + (m·g·h) = 0", "E_pot nimmt ab, die Änderung ist negativ: 0 − m·g·h."],
    ["½·m·v₂ = m·g·h", "In E_kin steht v im Quadrat."],
    ["m·v₂ = m·g·h", "Das wäre ein Impuls, keine Energie."]],
   "r": "½·m·v₂² = m·g·h" },
  { "f": "Wie stellst du nach v₂ um?", "o": [
    ["Masse kürzen, mal 2, Wurzel: v₂ = √(2·g·h)", "Das Ergebnis hängt nicht von der Masse ab."],
    ["v₂ = 2·g·h", "Es fehlt noch die Wurzel."],
    ["v₂ = √(g·h)", "Der Faktor ½ wurde vergessen: mal 2 auf beiden Seiten."],
    ["v₂ = √(2·m·g·h)", "Die Masse steht auf beiden Seiten und kürzt sich."]],
   "r": "v₂ = √(2·g·h)" },
  { "f": "Welcher Wert kommt heraus?", "o": [
    ["v₂ = √(2 · 9,81 · 5,0) ≈ 9,9 m/s ≈ 36 km/h", "2 · 9,81 · 5,0 = 98,1, Wurzel ≈ 9,9."],
    ["v₂ ≈ 98 m/s", "Die Wurzel fehlt."],
    ["v₂ ≈ 7,0 m/s", "Das wäre √(g·h) – der Faktor 2 fehlt."],
    ["v₂ ≈ 14 m/s", "Hier wurde mit der Masse 2,0 kg statt mit dem Faktor 2 gerechnet – die Masse kürzt sich."]],
   "r": "v₂ ≈ 9,9 m/s" }],
 "fazit": "Rezept: System festlegen → äußere Arbeit prüfen (hier W = 0) → ΔE_kin + ΔE_pot = 0 aufschreiben → umstellen. Fallgeschwindigkeit ohne Luftwiderstand: v = √(2·g·h), unabhängig von der Masse."
});
/* Patch-Warteschlange · Hydromechanik · Übung 1 und 2 in neuer Fassung (IWW, Stand 09./10.11.2026) · erstellt 23.11.2026
   Nur Inhalte, die in der alten Fassung fehlten: Kohäsion/Adhäsion, Siedepunkt, Druck vs. Druckkraft, Auflastfläche, Moment um den Fußpunkt (A2.10). */
const HUz = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);

pair("hydro", H1, "Welche Kraft wirkt wo? Ordne zu.", [["Kohäsion", "zwischen den Wassermolekülen untereinander"], ["Adhäsion", "zwischen Wasser und Wandoberfläche"], ["Gewichtskraft der Wassersäule", "zieht die Säule in der Kapillare nach unten"]], "In der Kapillare zieht die Adhäsion das Wasser an der Wand hoch, die Kohäsion hält die Wassersäule zusammen. Die Säule steigt, bis Kapillarkraft und Gewicht gleich groß sind: F_kap = F_G,W (Gleichgewichtszustand).", "Hydromechanik Übung 01 (Fassung 09.11.2026), Kapillarität");
HUz({ st: 1, ev: "kapillar" });

wf("hydro", H1, "Ob Wasser siedet, hängt sowohl von der Temperatur als auch vom Druck ab.", true, "Richtig. Der Übergang flüssig → gasförmig ist temperatur- und druckabhängig. Darum siedet Wasser im Gebirge (geringerer Luftdruck) schon unter 100 °C, und bei starkem Unterdruck in einer Strömung entstehen Dampfblasen (Kavitation).", "Hydromechanik Übung 01 (Fassung 09.11.2026), Dampfdruck");
HUz({ st: 1 });

mc("hydro", H2, "Eine senkrechte Wand hält Wasser der Tiefe h. Was ist der Unterschied zwischen Druck und Druckkraft?", ["Druck an der Sohle: p = ρ·g·h · Druckkraft je Meter Wand: F = ρ·g·h·h/2 (Fläche des Druckdreiecks)", "Beides ist dasselbe, nur in anderer Einheit", "Druck: ρ·g·h/2 · Druckkraft: ρ·g·h", "Druck: ρ·g·h² · Druckkraft: ρ·g·h"], "Der Druck ist ein Wert an einer Stelle (Pa) und wächst linear mit der Tiefe. Die Druckkraft ist das Integral über die dreieckige Druckfläche – je Meter Wandbreite also ½·ρ·g·h·h (N/m).", "Hydromechanik Übung 01 (Fassung 09.11.2026), Druck und Druckkraft");
HUz({ st: 1, ev: "druckdreieck" });

mc("hydro", H3, "Was ist die Auflastfläche bei einer geneigten Wand?", ["Die Fläche senkrecht über dem geneigten Wandabschnitt bis zum Wasserspiegel", "Die Projektion der Wand auf eine senkrechte Ebene", "Die gesamte Wasserfläche im Behälter", "Die benetzte Wandfläche selbst"], "F_vert = g·ρ_W·A_V: Man nimmt das Wasser, das senkrecht über (oder unter) dem geneigten Abschnitt bis zum Wasserspiegel steht. Liegt es oberhalb der Wand, zeigt F_vert nach unten, liegt es unterhalb, nach oben. Für die horizontale Kraft nimmt man dagegen die senkrechte Projektion.", "Hydromechanik Übung 02 (Fassung 10.11.2026), Zerlegung der Druckkräfte");
HUz({ st: 2 });

mc("hydro", H3, "Wo liegt der Schwerpunkt einer zusammengesetzten Druckfläche (z. B. Rechteck + Dreieck)?", ["x_S = Σ(Schwerpunktabstand der Teilfläche · Teilfläche) / Gesamtfläche", "In der Mitte der größten Teilfläche", "Immer bei 1/3 der Höhe", "x_S = Gesamtfläche / Anzahl der Teilflächen"], "Man zerlegt die Druckfigur in einfache Teile, multipliziert jeden Teilschwerpunkt mit seiner Fläche, summiert und teilt durch die Gesamtfläche. So bekommt man den Hebelarm der resultierenden Kraft.", "Hydromechanik Übung 02 (Fassung 10.11.2026), Aufgabe 2.10");
HUz({ st: 2 });

wf("hydro", H3, "Beim Moment um den Wandfuß (Aufgabe 2.10) werden alle Teilkräfte einfach addiert, egal von welcher Seite sie drücken.", false, "Falsch. Jede Teilkraft wird mit ihrem Hebelarm multipliziert und bekommt ein Vorzeichen nach Drehsinn: M_A = F_H1·a_H1 − F_H2·a_H2 + F_V1·a_V1 + F_V2·a_V2. F_H2 dreht hier entgegen und wird abgezogen. Ergebnis der Übung: M_A = 1540,16 kNm/m.", "Hydromechanik Übung 02 (Fassung 10.11.2026), Aufgabe 2.10");
HUz({ st: 2 });

/* Patch-Warteschlange · Physik · Übungsblatt 7 (Energiesatz-Anwendungen, Moodle 24.11.2026) · erstellt 24.11.2026
   Thema phys|Energie und Energiesatz (seit 2.4 vorhanden). Ergebnisse eigene Rechnung, Zahlenbeispiele mit Python geprüft. */
const PB7 = "Energie und Energiesatz";
const PB7z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);

/* ── Vorgehen ── */
mc("phys", PB7, "Was ist bei Energiesatz-Aufgaben fast immer der erste Schritt nach der Skizze?", ["Den Nullpunkt der potenziellen Energie festlegen", "Die Beschleunigung ausrechnen", "Alle Kräfte in x und y zerlegen", "Die Zeit bestimmen"], "Ohne Nullpunkt kannst du E_pot nicht aufschreiben. Wo er liegt, ist egal – geschickt ist ein Punkt, an dem möglichst viele Energien null sind, z. B. die Höhe des Pflocks oder die entspannte Feder.", "Physik Übungsblatt 7, Hinweise A1–A3");
PB7z({ st: 1 });
wf("phys", PB7, "Bei einer Feder, die von Anfang an gestaucht war, rechnet man die Federenergie mit der gesamten Stauchung, nicht nur mit dem zusätzlichen Stück.", true, "Richtig. E_pot = ½·k·x² gilt für die Auslenkung aus der entspannten Lage. Liegt ein Stein schon um Δl₁ auf der Feder und drückt man um Δl₂ weiter, ist x = Δl₁ + Δl₂.", "Physik Übungsblatt 7, Aufgabe 3");
PB7z({ st: 2, ev: "federarbeit" });
mc("phys", PB7, "Ein Stein ruht auf einer Feder und drückt sie um Δl₁ zusammen. Wie bekommst du die Federkonstante?", ["k = m·g / Δl₁ aus dem Kräftegleichgewicht", "k = ½·m·g·Δl₁", "k = m·g·Δl₁", "k = Δl₁ / (m·g)"], "Ruht der Stein, heben sich Federkraft und Gewicht auf: k·Δl₁ = m·g. Daraus k = m·g/Δl₁ – ganz ohne Energie.", "Physik Übungsblatt 7, Aufgabe 3a");
PB7z({ st: 1 });
mc("phys", PB7, "Ein Kletterseil reißt bei der Kraft F_R und ist dann um ε_R·L gedehnt. Wie lautet die Federkonstante?", ["k = F_R / (ε_R·L)", "k = F_R · ε_R · L", "k = ε_R·L / F_R", "k = ½·F_R·ε_R·L"], "Hooke gilt bis zum Reißen: F_R = k·Δl_R mit Δl_R = ε_R·L. Umgestellt: k = F_R/(ε_R·L). Längeres Seil → kleineres k, das Seil ist weicher.", "Physik Übungsblatt 7, Aufgabe 2 (Hinweis)");
PB7z({ st: 2 });
mc("phys", PB7, "Wann ist die Beschleunigung einer gestürzten Kletterin im Seil am größten?", ["Im tiefsten Punkt, wenn das Seil am stärksten gedehnt ist", "In dem Moment, in dem das Seil straff wird", "Mitten im freien Fall", "Wenn sie am schnellsten ist"], "Die Seilkraft k·Δl wächst mit der Dehnung. Im tiefsten Punkt steht sie kurz still, die Dehnung ist maximal – dort gilt k·Δl − m·g = m·a mit dem größten a, nach oben gerichtet.", "Physik Übungsblatt 7, Aufgabe 2");
PB7z({ st: 2 });
wf("phys", PB7, "Beim Sturz ins Seil reicht es, im Energiesatz nur die Fallhöhe bis zum Straffwerden des Seils einzusetzen.", false, "Falsch. Während sich das Seil um ΔL dehnt, fällt die Kletterin noch weiter. Im Energiesatz steht deshalb m·g·(2L + ΔL) = ½·k·ΔL² – das ergibt eine quadratische Gleichung, nur die positive Lösung zählt.", "Physik Übungsblatt 7, Aufgabe 2");
PB7z({ st: 3 });

/* ── Kreis mit Pflock ── */
mc("phys", PB7, "Ein Ball an einer Schnur soll einen vollen Kreis um einen Pflock fliegen. Welche Bedingung gilt im höchsten Punkt?", ["v² ≥ g·r – das Gewicht allein darf höchstens die nötige Zentripetalkraft liefern", "v > 0 reicht", "v² ≥ 2·g·r", "Die Schnurkraft muss dort gleich m·g sein"], "Im Grenzfall ist die Schnurkraft oben null, dann liefert nur das Gewicht die Kraft zur Mitte: m·g = m·v²/r. Ist der Ball langsamer, wird die Schnur schlaff und er fällt aus dem Kreis.", "Physik Übungsblatt 7, Aufgabe 1 (Hinweis)");
PB7z({ st: 2 });
mc("phys", PB7, "Ball an der Schnur (Länge L), Pflock im Abstand d unter dem Aufhängepunkt. Ab welchem d schafft er den vollen Kreis um den Pflock?", ["d ≥ 0,6·L", "d ≥ 0,5·L", "d ≥ L", "d ≥ 0,25·L"], "Mit r = L − d: Energie bis oben v² = 2g(2d − L), Bedingung v² ≥ g(L − d). Daraus 4d − 2L ≥ L − d, also 5d ≥ 3L. Mit nur d > L/2 wäre v zwar reell, die Schnur aber oben schon schlaff.", "Physik Übungsblatt 7, Aufgabe 1c");
PB7z({ st: 3 });

/* ── Energiediagramm ── */
mc("phys", PB7, "Im E_pot(x)-Diagramm fällt die Kurve an einer Stelle mit −28 J pro Meter. Welche Kraft wirkt dort?", ["+28 N, also in +x-Richtung", "−28 N, also in −x-Richtung", "28 J", "Keine – Kraft hängt nur von E_kin ab"], "F_x = −dE_pot/dx = −(−28 J/m) = +28 N. Die Kraft zeigt immer „bergab“ in der E_pot-Landschaft – hier nach rechts.", "Physik Übungsblatt 7, Aufgabe 4a");
PB7z({ st: 2, ev: "epotdiag" });
mc("phys", PB7, "Wie findest du im Energiediagramm die Grenzen, zwischen denen sich ein Teilchen bewegt?", ["E_mech als waagerechte Linie einzeichnen und mit der E_pot-Kurve schneiden", "Die Nullstellen von E_pot suchen", "Die Minima von E_pot ablesen", "Dort, wo die Kraft am größten ist"], "E_mech = E_kin + E_pot ist konstant. Wo die Linie die Kurve schneidet, ist E_kin = 0 – das Teilchen kehrt um. Dahinter wäre E_kin negativ, das geht nicht.", "Physik Übungsblatt 7, Aufgabe 4b");
PB7z({ st: 1, ev: "epotdiag" });
wf("phys", PB7, "Hat ein Teilchen die Geschwindigkeit −½ m/s, ist seine kinetische Energie negativ.", false, "Falsch. In E_kin = ½·m·v² steht v im Quadrat – das Vorzeichen zeigt nur die Richtung. Bei 56 kg und ½ m/s sind es +7 J.", "Physik Übungsblatt 7, Aufgabe 4");
PB7z({ st: 1 });

/* ── Reibung ── */
mc("phys", PB7, "Eine Rutsche ist ein Kreisbogen (Radius r, Winkel φ). Wie lang ist sie?", ["L = r·φ mit φ in Radiant", "L = r·φ mit φ in Grad", "L = 2·π·r", "L = r·sin φ"], "Bogenlänge = Radius mal Winkel im Bogenmaß. Mit Grad käme ein viel zu großer Wert heraus – Taschenrechner auf RAD oder mit π/180 umrechnen.", "Physik Übungsblatt 7, Aufgabe 5 (Hinweis)");
PB7z({ st: 1 });
mc("phys", PB7, "Ein Kind kommt unten langsamer an, als es ohne Reibung wäre. Wie bekommst du die mittlere Reibungskraft?", ["F̄ = (m·g·h − ½·m·v²) / L", "F̄ = μ·m·g", "F̄ = ½·m·v² / L", "F̄ = m·g·h / L"], "Fehlende mechanische Energie = Wärme = F̄·L. Die Reibung ist auf dem Bogen nicht konstant (die Normalkraft ändert sich), darum nur der Mittelwert über den Weg.", "Physik Übungsblatt 7, Aufgabe 5b");
PB7z({ st: 2 });
mc("phys", PB7, "Eine Kiste fällt auf ein Förderband mit Geschwindigkeit v und rutscht, bis sie mitfährt. Wie viel Wärme entsteht?", ["½·m·v² – genauso viel, wie die Kiste an Bewegungsenergie bekommt", "Null, weil das Band gleichmäßig läuft", "m·v²", "μ_k·m·g·v"], "Die Kiste rutscht relativ zum Band die Strecke v²/(2μ_k g). Wärme = μ_k·m·g · v²/(2μ_k g) = ½·m·v² – μ_k kürzt sich. Der Motor liefert deshalb insgesamt m·v².", "Physik Übungsblatt 7, Aufgabe 6");
PB7z({ st: 3 });
wf("phys", PB7, "Für die Reibungswärme zählt der Weg, den die Kiste relativ zum Band rutscht – nicht der Weg relativ zur Fabrik.", true, "Richtig. Wärme entsteht nur, wo Flächen aufeinander gleiten. Die Kiste fährt in der Fabrik v²/(2μ_k g), das Band aber doppelt so weit – gerutscht ist die Differenz.", "Physik Übungsblatt 7, Aufgabe 6 (Hinweis)");
PB7z({ st: 3 });

/* ── Lösungsweg-Aufgaben (eigene Zahlen) ── */
aufgabe({
 "id": "phys-b07-stein-feder", "f": "phys", "t": PB7, "titel": "Stein auf der Feder", "s": "Physik Übungsblatt 7, Aufgabe 3 (eigene Zahlen)",
 "angabe": "Ein Stein (m = 8,0 kg) liegt auf einer Feder und drückt sie um Δl₁ = 10 cm zusammen. Er wird um weitere Δl₂ = 30 cm nach unten gedrückt und losgelassen. Wie hoch steigt er über den Loslasspunkt?",
 "geg": ["m = 8,0 kg", "Δl₁ = 0,10 m", "Δl₂ = 0,30 m", "g = 9,81 m/s²"],
 "ges": "Steighöhe h über dem Loslasspunkt",
 "schritte": [
  { "f": "Wie bekommst du die Federkonstante?", "o": [
    ["k·Δl₁ = m·g → k = m·g/Δl₁ = 785 N/m", "Der ruhende Stein ist im Gleichgewicht: Federkraft = Gewicht. 8,0 · 9,81 / 0,10 = 784,8 N/m."],
    ["k = m·g·Δl₁ = 7,8 N/m", "Durch Δl₁ teilen, nicht mal nehmen – die Einheit wäre sonst N·m."],
    ["½·k·Δl₁² = m·g·Δl₁ → k = 1570 N/m", "Ruht der Stein, gilt das Kräftegleichgewicht. Die Energiebilanz passt hier nicht, weil er nicht aus der entspannten Lage fällt."],
    ["Aus der Steighöhe", "Die kennst du noch nicht – erst k, dann die Höhe."]],
   "r": "k = 785 N/m" },
  { "f": "Wie viel Energie steckt beim Loslassen in der Feder?", "o": [
    ["½·k·(Δl₁ + Δl₂)² = ½·785·0,40² ≈ 62,8 J", "Die Feder ist insgesamt um 40 cm gestaucht."],
    ["½·k·Δl₂² = 35,3 J", "Δl₁ fehlt – die Feder war schon vorher gestaucht."],
    ["k·(Δl₁ + Δl₂) = 314 J", "Das wäre eine Kraft in N, keine Energie. Es fehlt ½ und das Quadrat."],
    ["½·k·Δl₁² + ½·k·Δl₂² = 39,2 J", "Quadrate addieren sich nicht so: (a + b)² ≠ a² + b²."]],
   "r": "E_el ≈ 62,8 J" },
  { "f": "Welche Energiebilanz gilt bis zum höchsten Punkt?", "o": [
    ["E_el = m·g·h (unten und oben jeweils E_kin = 0)", "Die ganze Federenergie wird zu Lageenergie des Steins."],
    ["E_el = ½·m·v²", "Im höchsten Punkt steht der Stein kurz still."],
    ["E_el = m·g·(h − Δl₁ − Δl₂)", "h wird ab dem Loslasspunkt gemessen – die Stauchung steckt schon in h."],
    ["E_el + m·g·h = 0", "Die Federenergie nimmt ab, die Lageenergie zu – das Vorzeichen passt nicht."]],
   "r": "E_el = m·g·h" },
  { "f": "Wie hoch steigt der Stein?", "o": [
    ["h = 62,8 / (8,0 · 9,81) = 0,80 m", "Allgemein h = (Δl₁ + Δl₂)²/(2·Δl₁) = 0,16/0,2 = 0,8 m."],
    ["h = 0,45 m", "Das kommt heraus, wenn man nur Δl₂ quadriert."],
    ["h = 0,40 m", "Das ist nur die Stauchung. Der Stein fliegt darüber hinaus."],
    ["h = 7,85 m", "Die Masse wurde vergessen: durch m·g teilen, nicht nur durch g."]],
   "r": "h = 0,80 m" }],
 "fazit": "Rezept: k aus dem Gleichgewicht, Federenergie mit der gesamten Stauchung, dann Federenergie = m·g·h. Kontrolle: h = 0,8 m > 0,4 m – der Stein löst sich wirklich von der Feder."
});
aufgabe({
 "id": "phys-b07-foerderband", "f": "phys", "t": PB7, "titel": "Kiste auf dem Förderband", "s": "Physik Übungsblatt 7, Aufgabe 6 (eigene Zahlen)",
 "angabe": "Eine Kiste (m = 2,0 kg) fällt senkrecht auf ein Förderband, das mit v = 1,5 m/s läuft (μ_k = 0,40). Sie rutscht, bis sie mitfährt. Wie viel Energie muss der Motor dafür liefern?",
 "geg": ["m = 2,0 kg", "v = 1,5 m/s", "μ_k = 0,40", "g = 9,81 m/s²"],
 "ges": "Energie W des Motors",
 "schritte": [
  { "f": "Wie viel kinetische Energie bekommt die Kiste?", "o": [
    ["½·m·v² = ½·2,0·1,5² = 2,25 J", "Sie startet waagerecht mit 0 und endet mit der Bandgeschwindigkeit."],
    ["m·v² = 4,5 J", "In E_kin steht ½."],
    ["½·m·v = 1,5 J", "v muss quadriert werden."],
    ["0 J, weil sich v nicht ändert", "Das Band ändert seine Geschwindigkeit nicht – die Kiste schon."]],
   "r": "ΔE_kin = 2,25 J" },
  { "f": "Wie weit rutscht die Kiste relativ zum Band?", "o": [
    ["L_C = x_Band − x_Kiste = v²/(μ_k g) − v²/(2μ_k g) = 0,29 m", "Zeit bis zum Mitfahren t₁ = v/(μ_k g) = 0,38 s. Das Band fährt v·t₁ = 0,57 m, die Kiste ½·a·t₁² = 0,29 m."],
    ["L_C = v²/(μ_k g) = 0,57 m", "Das ist der Weg des Bandes. Die Kiste bewegt sich in der Zeit ja auch."],
    ["L_C = v·t₁ + ½·a·t₁² = 0,86 m", "Die Wege werden abgezogen, nicht addiert."],
    ["L_C = 0, weil die Kiste mitfährt", "Erst nach dem Rutschen fährt sie mit."]],
   "r": "L_C = 0,29 m" },
  { "f": "Wie viel Wärme entsteht?", "o": [
    ["ΔE_th = μ_k·m·g·L_C = 7,85 N · 0,287 m ≈ 2,25 J", "Genau so viel wie die kinetische Energie – μ_k kürzt sich allgemein heraus."],
    ["ΔE_th = μ_k·m·g·0,57 m = 4,5 J", "Wärme entsteht nur auf dem Weg, den die Kiste relativ zum Band rutscht."],
    ["ΔE_th = 0", "Beim Rutschen entsteht immer Wärme."],
    ["ΔE_th = μ_k·m·g = 7,85 J", "Das ist die Reibungskraft in N – sie muss noch mit dem Weg multipliziert werden."]],
   "r": "ΔE_th ≈ 2,25 J" },
  { "f": "Was liefert der Motor?", "o": [
    ["W = ΔE_kin + ΔE_th = 4,5 J = m·v²", "Kontrolle: Der Motor schiebt das Band mit 7,85 N über 0,57 m → 4,5 J ✓"],
    ["W = 2,25 J", "Die Wärme muss der Motor mitbezahlen."],
    ["W = ΔE_kin − ΔE_th = 0", "Beide Energien kommen vom Motor, sie addieren sich."],
    ["W = 9,0 J", "Das wäre doppelt gezählt."]],
   "r": "W = 4,5 J" }],
 "fazit": "Merke: Beim Mitnehmen durch Gleitreibung geht genau die Hälfte der Motorarbeit als Wärme verloren – egal wie groß μ_k ist."
});
