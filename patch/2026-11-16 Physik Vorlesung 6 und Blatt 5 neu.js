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
