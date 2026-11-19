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
