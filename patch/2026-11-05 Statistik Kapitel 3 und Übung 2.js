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
