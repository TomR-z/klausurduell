# Lernvideo 03 – Bauinformatik: Dezimal → Dual, von Hand (Übung 02, A1/A2) und als Java-Schleife (VL Block 2)
# Regeln: Herkunft jeder Zahl sagen, Zwischenrechnungen im Bild, Betonung am Satzende, *Betonung* im Untertitel
S = [
 ("Dualzahlen mit Schleifen", [
  ("Übung 2 will, dass du *43* ins Dualsystem umrechnest.", "Übung zwei will, dass du dreiundvierzig ins Dualsystem umrechnest."),
  ("Heute machen wir das erst *von Hand* – und dann lassen wir *Java* rechnen.", "Heute machen wir das erst von Hand. Und dann lassen wir Java rechnen."),
  ("Dafür brauchst du die *Schleifen* aus Vorlesung Block 2.", "Dafür brauchst du genau die Schleifen aus Vorlesung Block zwei.")]),
 ("Wie eine Dualzahl funktioniert", [
  ("Jede Stelle ist eine *Zweierpotenz*: 1, 2, 4, 8 … bis 128.", "Im Dualsystem ist jede Stelle eine Zweierpotenz. Von rechts: eins, zwei, vier, acht, und so weiter bis hundertachtundzwanzig."),
  ("Woher? Jede Stelle nach links ist *doppelt* so viel wert – wie im Zehnersystem *zehnmal*.", "Warum? Jede Stelle nach links ist doppelt so viel wert. Im Zehnersystem wäre es das Zehnfache."),
  ("Aufgabe 1a: 0010 1010 → nur die Stellen mit *1* zählen.", "Nimm Aufgabe eins a. Du zählst nur die Stellen, an denen eine Eins steht."),
  ("32 + 8 + 2 = *42*", "Das sind zweiunddreißig, acht und zwei. Zusammen: zweiundvierzig.")]),
 ("Von Hand: das Restverfahren", [
  ("Umgekehrt teilst du immer wieder *durch 2* und merkst dir den *Rest*.", "Für die Gegenrichtung teilst du immer wieder durch zwei. Und du merkst dir jedes Mal den Rest."),
  ("Der Rest ist *0 oder 1* – genau die zwei Ziffern des Dualsystems.", "Der Rest kann nur null oder eins sein. Das sind genau die beiden Ziffern des Dualsystems."),
  ("43 : 2 = 21 Rest *1* · 21 : 2 = 10 Rest *1* · 10 : 2 = 5 Rest *0* …", "Dreiundvierzig durch zwei gibt einundzwanzig, Rest eins. Dann einundzwanzig durch zwei, und so weiter."),
  ("… bis die Zahl *0* ist.", "Du hörst auf, wenn nichts mehr übrig ist, also bei null.")]),
 ("Achtung: von unten lesen", [
  ("Die Reste von *unten nach oben* gelesen: *101011*.", "Jetzt kommt der häufigste Fehler. Die Reste werden von unten nach oben gelesen."),
  ("Warum? Der *erste* Rest gehört zur *1er-Stelle* – also ganz nach rechts.", "Denn der erste Rest sagt, ob die Zahl gerade ist. Er gehört also zur Einerstelle, ganz nach rechts."),
  ("Probe: 32 + 8 + 2 + 1 = *43* ✓", "Die Probe: zweiunddreißig plus acht plus zwei plus eins. Das sind wieder dreiundvierzig.")]),
 ("Ab in Java: die Variablen", [
  ("Zuerst die Variablen – wie in Übung 2, Aufgabe 8.", "Jetzt in Java. Zuerst brauchen wir Variablen, wie in Übung zwei."),
  ("*int zahl = 43;* – eine ganze Zahl, die wir gleich halbieren.", "Die Zahl selbst ist ganzzahlig, also int."),
  ("*String dual = \"\";* – das Ergebnis als Text, am Anfang *leer*.", "Das Ergebnis speichern wir als Text, also als String. Am Anfang ist er leer."),
  ("Warum String? Wir *hängen Ziffern aneinander* – und 101011 wäre als int eine ganz andere Zahl.", "Warum kein int? Weil wir Ziffern aneinanderhängen. Und hunderteintausendelf wäre als int eine völlig andere Zahl.")]),
 ("Welche Schleife?", [
  ("Wie oft geteilt wird, weißt du *vorher nicht* – das hängt von der Zahl ab.", "Wie oft wir teilen müssen, wissen wir vorher nicht. Das hängt von der Zahl ab."),
  ("Laut Vorlesung: Anzahl unbekannt → *while*-Schleife, keine for-Schleife.", "Die Vorlesung sagt: Ist die Anzahl der Durchläufe unbekannt, nimmst du eine while-Schleife."),
  ("Bedingung: *while (zahl > 0)* – teilen, *solange* noch etwas übrig ist.", "Die Bedingung: solange die Zahl größer als null ist. Genau wie beim Rechnen von Hand.")]),
 ("Der Schleifenrumpf", [
  ("*rest = zahl % 2;* – Modulo liefert den *Rest* der Division.", "Erste Zeile: Der Modulo-Operator liefert den Rest der Division durch zwei."),
  ("*dual = rest + dual;* – der neue Rest kommt *vorne* dran.", "Zweite Zeile: Der neue Rest kommt vorne an den Text."),
  ("int + String ergibt Text – wie *2 + \"3\" = \"23\"* aus Übung 2.", "Das klappt, weil int plus String einen Text ergibt. Wie in Übung zwei: zwei plus drei in Anführungszeichen ergibt dreiundzwanzig als Text."),
  ("Vorne anhängen ersetzt das *Lesen von unten*.", "Und das Vorne-Anhängen erledigt automatisch das Lesen von unten."),
  ("*zahl = zahl / 2;* – int geteilt durch int *schneidet ab*: 43 / 2 = 21.", "Dritte Zeile: zahl durch zwei. Bei int fällt der Rest einfach weg. Dreiundvierzig durch zwei ergibt einundzwanzig.")]),
 ("Die Schleife läuft", [
  ("Durchlauf 1: zahl = 43 → rest 1 → dual \"1\" → zahl 21", "Schauen wir zu. Erster Durchlauf: dreiundvierzig, Rest eins, die Zahl wird einundzwanzig."),
  ("Mit jedem Durchlauf wächst dual *nach links*.", "Mit jedem Durchlauf wächst das Ergebnis nach links."),
  ("Nach Durchlauf 6 ist zahl = 0 → Bedingung *false* → Schluss.", "Nach dem sechsten Durchlauf ist die Zahl null. Die Bedingung ist falsch, die Schleife endet."),
  ("Ergebnis: *101011* – wie von Hand.", "Heraus kommt eins null eins null eins eins. Genau wie von Hand.")]),
 ("Sonderfall: die Zahl 0", [
  ("Und bei *zahl = 0*? while prüft *vorher* – der Rumpf läuft *gar nicht*.", "Was passiert bei null? Die while-Schleife prüft vorher. Also läuft sie kein einziges Mal."),
  ("Ausgabe: ein *leerer* String statt \"0\".", "Die Ausgabe wäre ein leerer Text. Richtig wäre aber eine Null."),
  ("Lösung: *do‑while* – fußgesteuert, läuft *mindestens einmal*.", "Die Lösung aus der Vorlesung: die do-while-Schleife. Sie prüft erst danach und läuft mindestens einmal."),
  ("Für 43 ändert sich nichts – für 0 kommt jetzt *\"0\"* heraus.", "Für dreiundvierzig ändert sich nichts. Und für null kommt jetzt richtig eine Null heraus.")]),
 ("Merke", [
  ("Dezimal → Dual: *durch 2 teilen*, Reste *von unten* lesen.", "Merke: Durch zwei teilen und die Reste von unten lesen."),
  ("In Java: *% 2* für den Rest, */ 2* zum Halbieren, Rest *vorne* anhängen.", "In Java: Modulo für den Rest, durch zwei zum Halbieren, und den Rest vorne anhängen."),
  ("Anzahl unbekannt → *while*. Mindestens einmal → *do‑while*.", "Unbekannte Anzahl heißt while. Mindestens einmal heißt do-while.")]),
 ("Selbst üben", [
  ("Jetzt du: *56* und *112* aus Aufgabe 2 – von Hand, dann mit deinem Programm.", "Jetzt du: sechsundfünfzig und hundertzwölf. Erst von Hand, dann mit deinem Programm in Eclipse.")]),
]
