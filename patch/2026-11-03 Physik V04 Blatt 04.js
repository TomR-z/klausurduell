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
