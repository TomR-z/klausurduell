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
