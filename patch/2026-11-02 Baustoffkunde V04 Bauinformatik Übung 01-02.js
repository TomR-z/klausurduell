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
mc("bsk", B5, "Wie wirkt eine höhere Belastungsgeschwindigkeit auf die Duktilität?", ["Sie sinkt – der Werkstoff wird spröder", "Sie steigt", "Sie bleibt gleich", "Nur die Dichte ändert sich"], "Spröder machen auch Einschlüsse und Vorverformung. Höhere Temperatur und feineres Gefüge machen zäher.", "Baustoffkunde V04");
wf("bsk", B5, "Ein Einkristall aus Kupfer ist fester als vielkristallines Kupfer.", false, "Falsch – der Einkristall ist duktiler und weniger fest. Ohne Korngrenzen können Versetzungen ungehindert durchgleiten; im Vielkristall stauen sie sich an den Korngrenzen.", "Baustoffkunde V04");
mc("bsk", B5, "Wie erhöht man die Festigkeit von Metallen gezielt?", ["Ausscheidungen und feines Korn, die Versetzungen behindern", "Gröbere Körner erzeugen", "Mehr Poren einbauen", "Den Werkstoff erwärmen und dort halten"], "Beispiele: Ausscheidungshärtung bei Aluminium (6060) und mikrolegierten Stählen mit Nb-, V- oder Ti-Carbiden sowie Kornfeinung durch Rekristallisationsglühen.", "Baustoffkunde V04");
mc("bsk", B5, "Was versagt bei Normalbeton zuerst?", ["Der Zementstein, vor der Gesteinskörnung", "Die Gesteinskörnung, vor dem Zementstein", "Die Bewehrung", "Beide gleichzeitig"], "Bei Normalbeton läuft der Bruch um die Körner herum. Bei hochfestem Beton versagen beide Bestandteile, der Riss geht durch die Körner.", "Baustoffkunde V04");
pair("bsk", B5, "Porenarten – ordne zu.", [["geschlossene Pore", "ohne Verbindung nach außen"], ["durchgängige Kapillare", "verbindet Oberflächen, transportiert Wasser"], ["Sackpore", "nur einseitig offen"]], "Porosität p = V_Poren / V_gesamt. Sie beeinflusst Rohdichte, Festigkeit, E-Modul, Dichtheit, Frostwiderstand und Wärmedämmung.", "Baustoffkunde V04");
mc("bsk", B5, "Wann verbessern Poren die Wärmedämmung am meisten?", ["Klein, gleichmäßig verteilt, trocken und nicht verbunden", "Groß und miteinander verbunden", "Mit Wasser gefüllt", "Möglichst wenige, aber sehr große"], "Große Hohlräume übertragen Wärme durch Strahlung, Wasser leitet Wärme viel besser als Luft.", "Baustoffkunde V04");
mc("bsk", B5, "Wie entstehen die Poren im Porenbeton?", ["Aluminiumpulver bildet im alkalischen Frischbeton Wasserstoff", "Sägemehl verbrennt beim Brennen", "Luft wird mit Schaum eingerührt", "Poröse Gesteinskörnung wird zugegeben"], "Die anderen Wege gibt es auch: Ausbrennen bei porosierten Ziegeln, Schaum bei Schaumbeton, poröse Zuschläge bei Leichtbeton.", "Baustoffkunde V04");
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
