# Lernvideo 04 – Angewandte Statistik Übung 2 (Matrizenrechnung 2), alle Aufgaben Schritt für Schritt, quer
# Regeln: Herkunft jeder Zahl, Zwischenrechnungen im Bild, Betonung am Satzende
S = [
 ("Übung 2 Schritt für Schritt", [
  ("Übung 2: *Matrizen invertieren* und *Gleichungssysteme* lösen.", "In Übung zwei geht es darum, Matrizen zu invertieren und Gleichungssysteme zu lösen."),
  ("Drei Werkzeuge: *Kofaktormatrix*, *Gauß-Jordan*, *Determinantenformel*.", "Dafür gibt es drei Werkzeuge: die Kofaktormatrix, das Gauß-Jordan-Verfahren und die Determinantenformel."),
  ("Und immer zuerst: die *Determinante*.", "Und bei jeder Aufgabe kommt zuerst dasselbe: die Determinante.")]),
 ("Aufgabe 1: die Determinante", [
  ("Sarrus: die ersten *zwei Spalten* noch einmal rechts daneben schreiben.", "Für drei mal drei nimmst du die Regel von Sarrus. Schreib die ersten zwei Spalten noch einmal rechts daneben."),
  ("Nach *rechts unten*: 3·4·3 + 2·2·1 + 1·2·2 = *44*", "Dann die drei Diagonalen nach rechts unten multiplizieren und addieren. Das ergibt vierundvierzig."),
  ("Nach *links unten*: 1·4·1 + 2·2·3 + 3·2·2 = *28* – wird *abgezogen*.", "Die drei Diagonalen nach links unten ergeben achtundzwanzig. Die werden abgezogen."),
  ("det A = 44 − 28 = *16 ≠ 0* → A ist *regulär*.", "Sechzehn ist nicht null. Also ist A regulär, und die Inverse existiert.")]),
 ("Aufgabe 1: die Kofaktormatrix", [
  ("Für c₁₁: *Zeile 1 und Spalte 1* abdecken.", "Für den ersten Kofaktor deckst du Zeile eins und Spalte eins ab."),
  ("Übrig bleibt 2×2: 4·3 − 2·2 = *8* – das ist der *Minor*.", "Übrig bleibt eine kleine Matrix. Ihre Determinante, vier mal drei minus zwei mal zwei, ist acht. Das nennt man den Minor."),
  ("Das Vorzeichen kommt aus dem *Schachbrett*: plus, minus, plus …", "Das Vorzeichen kommt aus dem Schachbrettmuster. Oben links plus, daneben minus, und so weiter."),
  ("c₁₂: Minor 2·3 − 2·1 = 4, Schachbrett *minus* → *−4*", "Für c eins zwei ist der Minor vier. Das Schachbrett sagt hier minus, also minus vier."),
  ("A ist *symmetrisch* – also auch C. Nur *6* von 9 Einträgen rechnen.", "Weil A symmetrisch ist, ist auch C symmetrisch. Du musst nur sechs der neun Einträge rechnen.")]),
 ("Aufgabe 1: die Inverse", [
  ("Determinantenformel: A⁻¹ = *C′ / det A* – C wird *transponiert*.", "Die Inverse ist die transponierte Kofaktormatrix, geteilt durch die Determinante."),
  ("C ist symmetrisch → *C′ = C*. Nur noch *durch 16* teilen.", "Weil C symmetrisch ist, ändert das Transponieren nichts. Du teilst nur noch durch sechzehn."),
  ("Probe: Zeile 1 von A mal Spalte 1 von A⁻¹ = 3·½ − 2·¼ + 0 = *1* ✓", "Zur Probe: Zeile eins von A mal Spalte eins der Inversen muss eins ergeben. Passt.")]),
 ("Aufgabe 2: Determinante mit Nullen", [
  ("Jetzt ist A *nicht symmetrisch* – hier zählt das Transponieren.", "Bei Aufgabe zwei ist A nicht symmetrisch. Hier merkst du, ob du ans Transponieren denkst."),
  ("Die *Nullen* machen Sarrus kurz: zwei Produkte fallen weg.", "Die Nullen machen es kurz: Zwei der sechs Produkte fallen einfach weg."),
  ("det A = 24 − 32 = *−8*", "Es bleibt vierundzwanzig minus zweiunddreißig. Also minus acht. Nicht null, also invertierbar.")]),
 ("Aufgabe 2: Kofaktoren und Transponieren", [
  ("c₁₂ = −(0·6 − 2·8) = −(−16) = *+16* – zwei Minus ergeben Plus.", "Achtung bei c eins zwei: Der Minor ist minus sechzehn, das Schachbrett gibt noch ein Minus. Zwei Minus ergeben plus sechzehn."),
  ("Alle neun Kofaktoren → *C*.", "So rechnest du alle neun Kofaktoren aus."),
  ("Transponieren: *Zeilen werden Spalten*.", "Jetzt transponieren: Die erste Zeile wird zur ersten Spalte, und so weiter."),
  ("Ohne Transponieren wäre *jede Zeile falsch*.", "Ohne diesen Schritt wäre hier jede Zeile der Inversen falsch.")]),
 ("Aufgabe 2: der Lösungsvektor", [
  ("A⁻¹ = C′ / (−8) – das *Minus* steckt in jedem Eintrag.", "Jetzt durch minus acht teilen. Das Minus steckt dann in jedem Eintrag."),
  ("x = A⁻¹ · b: *Zeile mal Spalte*.", "Dann die Inverse mal b, Zeile mal Spalte."),
  ("b₁ = 0 → die *erste Spalte* von A⁻¹ fällt weg.", "Weil der erste Eintrag von b null ist, spielt die erste Spalte der Inversen keine Rolle."),
  ("x = (−3; −4; 6) · Probe A·x = (0; 8; 4) ✓", "Heraus kommt minus drei, minus vier, sechs. Die Probe, A mal x, ergibt wieder b.")]),
 ("Aufgabe 3 A: lösbar?", [
  ("Die Aufgabe fragt zuerst *ob* – also zuerst die Determinante.", "Aufgabe drei a fragt zuerst, ob es eine eindeutige Lösung gibt. Also zuerst die Determinante."),
  ("Sarrus: 124 − 124 = *0* → *keine* eindeutige Lösung.", "Sarrus ergibt hundertvierundzwanzig minus hundertvierundzwanzig. Null. Damit gibt es keine eindeutige Lösung."),
  ("Warum? Zeile III = Zeile I + *2 · Zeile II*.", "Der Grund: Die dritte Zeile ist die erste plus zweimal die zweite."),
  ("Rechts: 4 + 2·3 = 10, aber da steht *7* → 0 = −3 → *gar keine* Lösung.", "Rechts müsste dann vier plus sechs, also zehn stehen. Es steht aber sieben. Das System hat sogar gar keine Lösung.")]),
 ("Aufgabe 3 B: Gauß-Jordan", [
  ("det = 1·6 − 4·2 = *−2* → eindeutig lösbar.", "Bei drei b ist die Determinante minus zwei. Also eindeutig lösbar."),
  ("Schreib *(A | I)* nebeneinander – Ziel: links die *Einheitsmatrix*.", "Für Gauß-Jordan schreibst du A und die Einheitsmatrix nebeneinander. Ziel: Links soll die Einheitsmatrix stehen."),
  ("*II − 2·I*: unter der 1 entsteht eine *0*.", "Erster Schritt: Zeile zwei minus zweimal Zeile eins. So entsteht unter der Eins eine Null."),
  ("*II : (−2)*: auf der Diagonale eine *1*.", "Dann Zeile zwei durch minus zwei. Jetzt steht auf der Diagonale eine Eins."),
  ("*I − 4·II*: über der 1 eine *0* – rechts steht *A⁻¹*.", "Zum Schluss Zeile eins minus viermal Zeile zwei. Links steht die Einheitsmatrix, rechts die Inverse."),
  ("x = A⁻¹ · b = (−3·6 + 2·4; 6 − 2) = *(−10; 4)*", "Mal b ergibt minus zehn und vier.")]),
 ("Aufgabe 3 C: Determinantenformel", [
  ("Sarrus: 106 − 105 = *1*.", "Bei drei c ergibt Sarrus genau eins."),
  ("det = 1 → *A⁻¹ = C′* – ganz *ohne Brüche*.", "Das ist ein Geschenk: Durch eins teilen ändert nichts. Die Inverse ist einfach die transponierte Kofaktormatrix."),
  ("Kofaktoren wie gehabt, z. B. c₁₂ = −(16 − 21) = *5*.", "Die Kofaktoren rechnest du wie vorher. Zum Beispiel c eins zwei: minus, mal minus fünf, ergibt fünf."),
  ("x = C′ · b = *(−5; 23; −8)* · Probe Zeile 1: −5 + 46 − 40 = 1 ✓", "Mal b ergibt minus fünf, dreiundzwanzig, minus acht. Die Probe mit der ersten Zeile ergibt eins.")]),
 ("Aufgabe 4: das System aufstellen", [
  ("Textaufgabe: *Zeile = Eigenschaft*, *Spalte = Quelle*.", "Aufgabe vier ist eine Textaufgabe. Die Regel zum Übersetzen: Jede Zeile ist eine Eigenschaft, jede Spalte eine Wasserquelle."),
  ("Zeile 1 Salz: 0,02 x₁ + 2,0 x₂ = *0,08*", "Zeile eins ist der Salzgehalt: null Komma null zwei mal x eins, plus zwei mal x zwei. Das soll null Komma null acht ergeben."),
  ("Zeile 2 pH: 6,5 x₁ + 8,1 x₂ = *7,0*", "Zeile zwei genauso mit den pH-Werten und dem Ziel sieben."),
  ("Die Zielwerte kommen nach *rechts* in b.", "Die Zielwerte stehen rechts im Vektor b.")]),
 ("Aufgabe 4: lösen und bewerten", [
  ("det A = 0,02·8,1 − 2,0·6,5 = *−12,838*", "Die Determinante: Hauptdiagonale minus Nebendiagonale. Minus zwölf Komma acht drei acht."),
  ("2×2-Inverse: Diagonale *tauschen*, Nebendiagonale *Minus*, durch det.", "Für zwei mal zwei gibt es die Kurzform: Diagonale tauschen, Nebendiagonale mit Minus, durch die Determinante."),
  ("x₁ ≈ *1,040* · x₂ ≈ *0,030*", "Heraus kommt x eins etwa eins Komma null vier und x zwei etwa null Komma null drei."),
  ("Verhältnis ≈ *35 : 1* → Quelle 2 bringt *kaum* etwas.", "Das Verhältnis ist etwa fünfunddreißig zu eins. Vom billigen Wasser darf also kaum etwas rein. Es lohnt sich eher nicht.")]),
 ("Knobelaufgabe: der Trick", [
  ("4×4 mit Wurzeln – Sarrus geht *nicht*, Gauß-Jordan dauert *ewig*.", "Bei der Knobelaufgabe funktioniert Sarrus nicht mehr, und Gauß-Jordan mit Wurzeln dauert ewig."),
  ("Jede Zeile hat die *Länge 1*: 4 · 0,25 = 1 bzw. ½ + ½ = 1.", "Der Trick: Rechne die Länge jeder Zeile aus. Jede hat genau die Länge eins."),
  ("Je zwei Zeilen sind *senkrecht*: Skalarprodukt 0.", "Und je zwei Zeilen stehen senkrecht aufeinander. Ihr Skalarprodukt ist null."),
  ("→ A · A′ = I → *A⁻¹ = A′* (orthogonale Matrix)", "Dann ist A mal A transponiert die Einheitsmatrix. Die Inverse ist einfach die Transponierte.")]),
 ("Altklausur: nur über Kofaktoren", [
  ("Achtung: *nur* der Weg über die *Kofaktormatrix* gibt Punkte.", "In der Altklausuraufgabe zählt nur der Weg über die Kofaktormatrix. Gauß gibt keine Punkte."),
  ("Lösbar? det A = −4, det B = −1 – *beide* ≠ 0 (aus Übung 1).", "Die Determinanten kennst du aus Übung eins: minus vier und minus eins. Beide sind eindeutig lösbar."),
  ("A und B unterscheiden sich nur in *Zeile 3* → c₃₁, c₃₂, c₃₃ sind *gleich*.", "A und B unterscheiden sich nur in der dritten Zeile. Die Kofaktoren, bei denen Zeile drei gestrichen wird, sind daher bei beiden gleich."),
  ("x_A = (3; 0,25; −2,5) · x_B = (3; 3; −8) – *wie in Übung 1* ✓", "Heraus kommen dieselben Lösungen wie in Übung eins. Das ist deine Kontrolle.")]),
 ("Merke", [
  ("1. *det A* – ist sie 0, gibt es *keine* Inverse.", "Merke: Zuerst immer die Determinante. Ist sie null, bist du fertig."),
  ("2. Verlangtes Verfahren: *Kofaktoren* oder *Gauß-Jordan*.", "Dann genau das Verfahren, das die Aufgabe verlangt."),
  ("3. Kofaktormatrix *transponieren*, durch det teilen.", "Bei den Kofaktoren nie das Transponieren vergessen."),
  ("4. *Probe*: A · x = b.", "Und am Ende die Probe. Sie findet fast jeden Vorzeichenfehler.")]),
 ("Selbst üben", [
  ("Rechne alles in deiner GoodNotes-Datei „Übung 02 ausführlich“ nach.", "Rechne jetzt alles selbst in deiner GoodNotes-Datei nach. Die Schablonen sind schon vorgezeichnet.")]),
]
