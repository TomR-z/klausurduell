/* Patch-Warteschlange · Bauinformatik · Musterlösung Blatt 03 (Variablen, Typumwandlung, Operatoren) · erstellt 19.11.2026 · Die meisten Aufgaben des Blatts sind schon als Fragen in der App; neu sind nur diese beiden · Ausgaben mit der Musterlösung abgeglichen */
const BI19z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);
mc("binf", "Operatoren", "Was gibt System.out.println(5.0 / 2.0 + 5 / 2.); aus?", ["5.0", "4.5", "4", "2.5"], "5 / 2. ist keine int-Division mehr: Der Punkt hinter der 2 macht sie zu einer double-Zahl, also 2.5. Insgesamt 2.5 + 2.5 = 5.0. Ohne Punkt (5 / 2) käme 2 heraus und die Ausgabe wäre 4.5.", "Bauinformatik Musterlösung Blatt 03, Aufgabe 10b");
BI19z({ st: 3 });
mc("binf", "Operatoren", "Wie schreibst du b² − 4ac in Java (alle Variablen double)?", ["b*b - 4*a*c", "b^2 - 4ac", "b² - 4*a*c", "b**2 - 4*a*c"], "Java hat keinen Potenz-Operator: ^ ist das bitweise exklusive Oder, ** gibt es nicht, und 4ac ohne * ist ein unbekannter Name. Für höhere Potenzen nimmt man Math.pow(b, 2).", "Bauinformatik Musterlösung Blatt 03, Aufgabe 11");
BI19z({ st: 2 });
