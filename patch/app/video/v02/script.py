# (Untertitel mit *Betonung*, gesprochen oder None)
S = [
 ("Holzbalken bemessen", [
  ("Ein Holzbalken über vier Meter trägt sein *Eigengewicht* und eine *Nutzlast*.", None),
  ("Welche Lastkombination ist *maßgebend* – und welcher Querschnitt reicht?", None),
  ("Der Trick bei Holz: Die größte Last ist *nicht automatisch* die maßgebende.", "Der Trick bei Holz: Die größte Last ist nicht automatisch die maßgebende!")]),
 ("Gegeben", [
  ("Spannweite *4 m*, Vollholz *C24*, Nutzungsklasse *2*.", "Gegeben: Spannweite vier Meter, Vollholz C vierundzwanzig, Nutzungsklasse zwei."),
  ("Ständige Last *g = 3,0 kN/m*, Nutzlast *q = 1,5 kN/m* mit kurzer Dauer.", "Ständige Last g: drei Kilonewton pro Meter. Nutzlast q: eineinhalb Kilonewton pro Meter, mit kurzer Lasteinwirkungsdauer."),
  ("Festigkeiten: Biegung *24*, Schub *4,0 N/mm²*, Teilsicherheit *γ_M = 1,3*.", "Dazu die Festigkeiten: Biegung vierundzwanzig, Schub vier Newton pro Quadratmillimeter. Und der Teilsicherheitsbeiwert: eins Komma drei.")]),
 ("Schritt 1: Schnittgrößen getrennt", [
  ("Erster Schritt: die Schnittgrößen – für jede Lastart *getrennt*.", "Erster Schritt: die Schnittgrößen. Und zwar für jede Lastart getrennt."),
  ("Einfeldträger mit Streckenlast: *max M = q · l² / 8*.", "Beim Einfeldträger mit Streckenlast ist das größte Moment: q mal l Quadrat, durch acht."),
  ("Für g: 3 · 16 / 8 = *6 kNm*. Für q: die Hälfte, *3 kNm*.", "Für g: drei mal sechzehn durch acht, also sechs Kilonewtonmeter. Für q die Hälfte: drei Kilonewtonmeter."),
  ("Getrennt, weil gleich jede Kombination ihr *eigenes k_mod* bekommt.", "Getrennt rechnen wir, weil gleich jede Kombination ihr eigenes k mod bekommt.")]),
 ("Schritt 2: k_mod", [
  ("k_mod berücksichtigt, *wie lange* eine Last wirkt – und wie feucht das Holz ist.", "k mod berücksichtigt, wie lange eine Last wirkt. Und wie feucht das Holz ist."),
  ("Nutzungsklasse 2: ständig *0,6*, kurz *0,9*.", "In Nutzungsklasse zwei gilt: ständige Last, null Komma sechs. Kurze Last, null Komma neun."),
  ("Je länger die Last, desto *kleiner* k_mod – Holz kriecht unter Dauerlast.", "Je länger eine Last wirkt, desto kleiner ist k mod. Denn unter Dauerlast kriecht Holz.")]),
 ("Schritt 3: die maßgebende Kombination", [
  ("Jetzt der wichtigste Schritt: die *maßgebende* Kombination.", "Jetzt kommt der wichtigste Schritt: die maßgebende Kombination."),
  ("Nur ständig: 1,35 · 6 = *8,1 kNm*.", "Kombination eins, nur ständig: eins Komma drei fünf mal sechs. Das sind acht Komma eins Kilonewtonmeter."),
  ("Ständig + Nutzlast: 8,1 + 1,5 · 3 = *12,6 kNm*.", "Kombination zwei, ständig plus Nutzlast: acht Komma eins, plus eins Komma fünf mal drei. Also zwölf Komma sechs."),
  ("Vergleichbar wird es erst *geteilt durch k_mod* – bei g + q zählt die *kürzeste* Last: 0,9.", "Vergleichen kann man sie aber erst, wenn man jede durch ihr k mod teilt. Bei Kombination zwei zählt das k mod der kürzesten Last: null Komma neun."),
  ("8,1 / 0,6 = *13,5* · 12,6 / 0,9 = *14,0*", "Acht Komma eins durch null Komma sechs: dreizehn Komma fünf. Zwölf Komma sechs durch null Komma neun: vierzehn."),
  ("14,0 ist größer – maßgebend ist *g + q* mit *M_Ed = 12,6 kNm*.", "Vierzehn ist größer. Maßgebend ist also ständig plus Nutzlast, mit zwölf Komma sechs Kilonewtonmetern.")]),
 ("Achtung: knapp!", [
  ("Achtung: Der Unterschied ist *knapp*.", "Aber Achtung: Der Unterschied ist knapp."),
  ("Mit etwas weniger Nutzlast wird *nur g* maßgebend – obwohl es die *kleinere* Last ist.", "Wäre die Nutzlast etwas kleiner, würde die Kombination nur aus Eigengewicht maßgebend. Obwohl sie die kleinere Last ist!"),
  ("Deshalb bei Holz *immer beide* Kombinationen prüfen.", "Deshalb gilt bei Holz: immer beide Kombinationen prüfen.")]),
 ("Schritt 4: Querschnitt wählen", [
  ("Bemessungsfestigkeit: f_m,d = 0,9 · 24 / 1,3 = *16,6 N/mm²*.", "Jetzt der Querschnitt. Die Bemessungsfestigkeit: null Komma neun mal vierundzwanzig, durch eins Komma drei. Rund sechzehn Komma sechs."),
  ("erf W = M_Ed / f_m,d ≈ *759 cm³*.", "Das erforderliche Widerstandsmoment: Moment durch Festigkeit. Rund siebenhundertsechzig Kubikzentimeter."),
  ("Gewählt: *8/24 cm* mit W = b · h² / 6 = *768 cm³*.", "Gewählt wird der nächstgrößere Balken: acht mal vierundzwanzig Zentimeter. Sein Widerstandsmoment: siebenhundertachtundsechzig."),
  ("Höher als 15 cm – *kein Höhenbonus*: k_h = 1,0.", "Weil er höher als fünfzehn Zentimeter ist, gibt es keinen Höhenbonus. k h bleibt eins.")]),
 ("Schritt 5: Biegenachweis", [
  ("σ_m,d = M_Ed / W = *16,4 N/mm²*.", "Der Biegenachweis: Spannung gleich Moment durch Widerstandsmoment. Sechzehn Komma vier Newton pro Quadratmillimeter."),
  ("Ausnutzung η = 16,4 / 16,6 = *0,99*.", "Geteilt durch die Festigkeit, sechzehn Komma sechs: Die Ausnutzung ist null Komma neun neun."),
  ("Kleiner als 1 – *erfüllt*, aber fast voll ausgenutzt.", "Kleiner als eins. Der Nachweis ist erfüllt, aber der Balken ist fast voll ausgenutzt.")]),
 ("Schritt 6: Schubnachweis", [
  ("Bei Vollholz mindern *Schwindrisse* die Breite: *k_cr = 0,5*.", "Zum Schluss der Schub. Bei Vollholz mindern Schwindrisse die wirksame Breite: k c r ist null Komma fünf."),
  ("Mit dem Faktor *1,5* fürs Rechteck: τ_d = *1,97 N/mm²*.", "Mit dem Faktor eins Komma fünf für das Rechteck ergibt sich die Schubspannung: eins Komma neun sieben."),
  ("f_v,d = 2,77 N/mm² → η = *0,71* – auch erfüllt.", "Die Schubfestigkeit liegt bei zwei Komma sieben sieben. Ausnutzung null Komma sieben eins. Auch erfüllt.")]),
 ("Merke", [
  ("Das Schema für *jeden* Holzbalken:", "Das Schema für jeden Holzbalken:"),
  ("Schnittgrößen je Lastart → Kombinationen *durch k_mod* teilen → die *größte* ist maßgebend.", "Schnittgrößen je Lastart. Kombinationen durch k mod teilen. Die größte ist maßgebend."),
  ("Dann Querschnitt wählen und *Biegung* und *Schub* nachweisen.", "Dann den Querschnitt wählen, und Biegung und Schub nachweisen.")]),
 ("Selbst üben", [
  ("Jetzt selbst rechnen: Klausurduell → *Holzbalken bemessen* → „Selbst rechnen“.", "Probier es jetzt selbst in Klausurduell: Aufgabe Holzbalken bemessen, im Modus Selbst rechnen.")]),
]
