# v2 (Tom 05.11.: "Du liest sehr viele Zahlen vor, aber erklärst nicht ausführlich genug, wo diese herkommen")
# Regel: Zu jeder Zahl sagen, WOHER sie kommt (Aufgabe, Tabelle, Formel). Zwischenergebnisse stehen im Bild, gesprochen wird der Grund.
# (Untertitel mit *Betonung*, gesprochen oder None)
S = [
 ("Holzbalken bemessen", [
  ("Ein Holzbalken über vier Meter trägt sein *Eigengewicht* und eine *Nutzlast*.", None),
  ("Welche Lastkombination ist *maßgebend* – und welcher Querschnitt reicht?", None),
  ("Der Trick bei Holz: Die größte Last ist *nicht automatisch* die maßgebende.", "Der Trick bei Holz: Die größte Last ist nicht automatisch die maßgebende!")]),
 ("Gegeben – und woher die Werte kommen", [
  ("Aus der Aufgabe: *l = 4 m*, *g = 3,0* und *q = 1,5 kN/m*, q wirkt *kurz*.", "Aus der Aufgabe: vier Meter, drei Kilonewton pro Meter Eigengewicht, eineinhalb Nutzlast, und die wirkt nur kurz."),
  ("*C24* ist die Festigkeitsklasse – die *24* ist direkt die Biegefestigkeit f_m,k.", "C vierundzwanzig ist die Festigkeitsklasse des Holzes. Die Zahl im Namen ist direkt die Biegefestigkeit: vierundzwanzig Newton pro Quadratmillimeter."),
  ("Die Schubfestigkeit *4,0* steht in der Tabelle zur Klasse C24.", "Die Schubfestigkeit, vier, liest man in der Tabelle zu C vierundzwanzig ab."),
  ("*γ_M = 1,3* ist der Sicherheitsbeiwert für *Vollholz* – aus der Norm.", "Und eins Komma drei ist der Sicherheitsbeiwert für Vollholz. Den gibt die Norm vor.")]),
 ("Schritt 1: Schnittgrößen getrennt", [
  ("Erster Schritt: die Momente – für jede Lastart *getrennt*.", "Erster Schritt: die Momente. Und zwar für jede Lastart getrennt."),
  ("Einfeldträger mit Streckenlast: *max M = q · l² / 8* – Standardformel aus der Tafel.", "Für den Einfeldträger mit Streckenlast steht das größte Moment in jeder Tafel: Last mal Spannweite zum Quadrat, durch acht."),
  ("l² = 16 → für g: 3 · 16 / 8 = *6 kNm*.", "Vier Meter zum Quadrat sind sechzehn. Für das Eigengewicht also: drei mal sechzehn durch acht, sechs Kilonewtonmeter."),
  ("q ist *halb so groß* wie g – also auch das Moment: *3 kNm*.", "Die Nutzlast ist halb so groß wie das Eigengewicht. Also ist auch ihr Moment halb so groß: drei."),
  ("Getrennt, weil jede Lastart eine *eigene Dauer* hat.", "Getrennt, weil jede Lastart eine eigene Einwirkungsdauer hat.")]),
 ("Schritt 2: k_mod aus der Tabelle", [
  ("k_mod *mindert die Festigkeit* – je nachdem, wie *lange* die Last wirkt.", "k mod mindert die Festigkeit des Holzes. Je nachdem, wie lange die Last wirkt."),
  ("Holz *kriecht*: Unter Dauerlast hält es *weniger* aus als bei kurzer Last.", "Denn Holz kriecht. Unter einer Last, die jahrelang drückt, hält es weniger aus als bei einem kurzen Stoß."),
  ("Ablesen: Tabelle k_mod → Zeile *Vollholz*, Spalte *Nutzungsklasse 2*.", "Abgelesen wird k mod in einer Tabelle: Zeile Vollholz, Spalte Nutzungsklasse zwei. Das heißt: überdacht, mit etwas Feuchte."),
  ("Eigengewicht = *ständig* → *0,6*. Nutzlast = *kurz* → *0,9*.", "Eigengewicht wirkt immer, also ständig: null Komma sechs. Die Nutzlast wirkt kurz: null Komma neun.")]),
 ("Schritt 3: die maßgebende Kombination", [
  ("Jetzt die *Lastkombinationen* – mit Sicherheitsbeiwerten auf die Lasten.", "Jetzt die Kombinationen. Auch die Lasten bekommen Sicherheitsbeiwerte."),
  ("*1,35* für ständige, *1,5* für veränderliche Lasten – feste Werte aus der Norm.", "Eins Komma drei fünf für ständige Lasten, eins Komma fünf für veränderliche. Feste Werte aus der Norm, für jedes Material."),
  ("Nur g: 1,35 · 6 = *8,1*. g + q: 8,1 + 1,5 · 3 = *12,6 kNm*.", "Nur Eigengewicht ergibt acht Komma eins. Mit Nutzlast kommt eins Komma fünf mal drei dazu: zwölf Komma sechs."),
  ("Aber: Jede Kombination hat ein *anderes k_mod* – also eine andere Festigkeit.", "Der Haken: Jede Kombination hat ein anderes k mod, also eine andere Festigkeit."),
  ("g + q bekommt das k_mod der *kürzesten* Last: *0,9* – Regel aus der Norm.", "Bei einer Kombination gilt das k mod der kürzesten Last darin. Für ständig plus Nutzlast also null Komma neun."),
  ("Fairer Vergleich: *E_d ÷ k_mod*. 8,1 / 0,6 = *13,5* · 12,6 / 0,9 = *14,0*", "Fair vergleichen kann man nur, wenn man jede Kombination durch ihr k mod teilt. Dann steht die Festigkeit auf beiden Seiten gleich da."),
  ("14,0 > 13,5 → maßgebend ist *g + q* mit *M_Ed = 12,6 kNm*.", "Vierzehn ist größer als dreizehn Komma fünf. Maßgebend ist also die Kombination mit Nutzlast.")]),
 ("Achtung: knapp!", [
  ("Der Unterschied ist *knapp*.", "Aber Achtung: Der Unterschied ist knapp."),
  ("Ab q < 1,35 kN/m wird *nur g* maßgebend – obwohl es die *kleinere* Last ist.", "Wäre die Nutzlast etwas kleiner, würde die Kombination nur aus Eigengewicht maßgebend. Obwohl sie die kleinere Last ist!"),
  ("Deshalb bei Holz *immer beide* Kombinationen prüfen.", "Deshalb gilt bei Holz: immer beide Kombinationen prüfen.")]),
 ("Schritt 4: Querschnitt wählen", [
  ("Bemessungsfestigkeit: f_m,d = *k_mod* · f_m,k / *γ_M*.", "Jetzt der Querschnitt. Zuerst die Bemessungsfestigkeit: k mod mal Biegefestigkeit, durch den Sicherheitsbeiwert."),
  ("k_mod = *0,9* aus der maßgebenden Kombination → 0,9 · 24 / 1,3 = *16,6 N/mm²*.", "Das k mod ist null Komma neun, aus der maßgebenden Kombination. Das ergibt rund sechzehn Komma sechs."),
  ("Erforderlich: *W = M_Ed / f_m,d*. kNm in Nmm: *mal 10⁶*.", "Das erforderliche Widerstandsmoment ist Moment durch Festigkeit. Dabei Einheiten beachten: Kilonewtonmeter mal eine Million ergibt Newtonmillimeter."),
  ("12,6 · 10⁶ / 16,6 ≈ 759 000 mm³ = *759 cm³*.", "Rund siebenhundertneunundfünfzig Kubikzentimeter."),
  ("Rechteck: *W = b · h² / 6*. Probiert: *8/24* → 8 · 576 / 6 = *768 cm³* ✓", "Fürs Rechteck gilt: Breite mal Höhe zum Quadrat, durch sechs. Wir probieren einen Standardbalken, acht mal vierundzwanzig: Das ergibt siebenhundertachtundsechzig. Passt."),
  ("Bonus k_h gibt es nur unter *15 cm* Höhe → hier *k_h = 1,0*.", "Einen Höhenbonus gibt es nur für Balken unter fünfzehn Zentimetern. Hier also nicht.")]),
 ("Schritt 5: Biegenachweis", [
  ("Spannung = *Moment ÷ Widerstandsmoment*.", "Die Spannung ist Moment durch Widerstandsmoment."),
  ("12,6 · 10⁶ Nmm / 768 000 mm³ = *16,4 N/mm²*.", "Mit dem gewählten Balken sind das sechzehn Komma vier Newton pro Quadratmillimeter."),
  ("Ausnutzung *η = vorhanden ÷ aufnehmbar* = 16,4 / 16,6 = *0,99*.", "Die Ausnutzung vergleicht, was da ist, mit dem, was der Balken kann: neunundneunzig Prozent."),
  ("*≤ 1* → erfüllt, aber *fast voll* ausgenutzt.", "Das ist kleiner als eins. Erfüllt, aber fast voll ausgenutzt.")]),
 ("Schritt 6: Schubnachweis", [
  ("Querkraft am Auflager: *V = q_d · l / 2*, mit q_d = 1,35 · 3 + 1,5 · 1,5 = *6,3 kN/m*.", "Zum Schluss der Schub. Die Querkraft ist am Auflager am größten: Bemessungslast mal Spannweite, durch zwei. Die Bemessungslast ist sechs Komma drei, mit denselben Beiwerten wie vorhin."),
  ("V = 6,3 · 4 / 2 = *12,6 kN* – zufällig dieselbe Zahl wie M.", "Das ergibt zwölf Komma sechs Kilonewton. Zufällig dieselbe Zahl wie beim Moment."),
  ("*Schwindrisse* verkleinern die wirksame Breite: *k_cr = 2,0 / f_v,k = 0,5*.", "Vollholz bekommt beim Trocknen Schwindrisse. Deshalb zählt nur ein Teil der Breite. Der deutsche Anhang sagt: zwei durch die Schubfestigkeit, also die Hälfte."),
  ("Faktor *1,5*: Schub ist *parabelförmig* verteilt, in der Mitte 1,5 × der Mittelwert.", "Und der Faktor eins Komma fünf: Die Schubspannung ist parabelförmig verteilt. In der Mitte ist sie eineinhalbmal so groß wie im Schnitt."),
  ("τ = 1,5 · 12 600 / (0,5 · 80 · 240) = *1,97* ≤ f_v,d = 0,9 · 4,0 / 1,3 = *2,77* ✓", "Die Schubspannung ist knapp zwei, die Festigkeit zwei Komma sieben sieben. Ausnutzung einundsiebzig Prozent, erfüllt.")]),
 ("Merke", [
  ("Das Schema für *jeden* Holzbalken:", "Das Schema für jeden Holzbalken:"),
  ("Schnittgrößen je Lastart → Kombinationen *durch k_mod* teilen → die *größte* ist maßgebend.", "Schnittgrößen je Lastart. Kombinationen durch k mod teilen. Die größte ist maßgebend."),
  ("Dann Querschnitt wählen und *Biegung* und *Schub* nachweisen.", "Dann den Querschnitt wählen, und Biegung und Schub nachweisen.")]),
 ("Selbst üben", [
  ("Jetzt selbst rechnen: Klausurduell → *Holzbalken bemessen* → „Selbst rechnen“.", "Probier es jetzt selbst in Klausurduell: Aufgabe Holzbalken bemessen, im Modus Selbst rechnen.")]),
]
