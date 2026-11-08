from lib import *
L1="Physik<br>Vorlesung 1<br>Einheiten"
L2="Physik<br>Vorlesung 1<br>Mechanik"

on(1,2)
slide(1,2,"Inhalt","Physik<br>Vorlesung 1",[
 ("Teil 1: *Vorlesung 1* – erst *Einheiten*, dann die *geradlinige Bewegung*.","Willkommen zu Teil eins. Wir gehen Vorlesung eins Folie für Folie durch. Zuerst geht es um Einheiten, danach um die geradlinige Bewegung.",[cam([20,60,700,230])]),
 ("Vier Fragen: Maßeinheiten · Definition · *Vorsatzsilben* · *signifikante Stellen*","Der erste Block beantwortet vier Fragen: Was sind Maßeinheiten, wie sind sie definiert, was sind Vorsatzsilben, und was sind signifikante Stellen.",[hl("Was sind Maßeinheiten?"),hl("Wie sind Maßeinheiten definiert?",at=.25),hl("Was sind Vorsatzsilben?",at=.5),hl("Was sind signifikante Stellen?",at=.72)])])
on(1,5)
slide(1,5,"Wie lang ist eine Elle?",L1,[
 ("Früher: jede Stadt ihre *eigene Elle*.","Früher hatte fast jede Stadt ihre eigene Elle. Diese Tabelle zeigt, wie viele Meter eine Elle jeweils war.",[cam("full")]),
 ("Freiburg *0,54 m* · Bayern *0,833 m*","In Freiburg war sie null Komma fünf vier Meter lang, in Bayern null Komma acht drei drei Meter.",[hl(U(F("Freiburg"),F("0,54",occ=2),m=1)),hl(U(F("Bayern"),F("0,833015"),m=1),at=.45)]),
 ("Die bayerische Elle war *über 50 %* länger.","Die bayerische Elle war also über fünfzig Prozent länger. Wer Stoff nach Ellen kaufte, musste genau wissen, welche Elle gemeint ist.",[card("0,833 m ÷ 0,54 m ≈ <b>1,54</b><br>→ gut 50 % länger",1180,520,520,"nachgerechnet")])])
on(1,7)
slide(1,7,"Was ist eine Maßeinheit?",L1,[
 ("Maßeinheit = vereinbarte *Vergleichsgröße*","Deshalb die Definition: Eine Maßeinheit ist eine international vereinbarte Vergleichsgröße.",[cam([20,100,920,160]),hl("international")]),
 ("mit *festem, jederzeit reproduzierbarem* Betrag","Entscheidend ist der zweite Teil: Sie hat einen festen Betrag, den man jederzeit und überall reproduzieren kann. Genau das konnte die Elle nicht.",[hl("festen, jederzeit reproduzierbaren Betrag",c="o")]),
 ("Heute weltweit: das *SI*, eingeführt *1960*","Heute gilt weltweit das Internationale Einheitensystem, abgekürzt S I. Es wurde neunzehnhundertsechzig eingeführt.",[hl("„SI“"),hl("1960",at=.4)])])
on(1,9)
slide(1,9,"Absturz wegen falscher Einheit",L1,[
 ("1999: Marssonde *Mars Climate Orbiter* verglüht","Wie teuer ein Einheitenfehler sein kann, zeigt die Marssonde Mars Climate Orbiter. Sie verglühte neunzehnhundertneunundneunzig in der Marsatmosphäre.",[cam([20,100,920,200])]),
 ("Daten in *Pounds of Force* statt in *Newton*","Der Hersteller lieferte Kräfte in der amerikanischen Einheit Pound-Force. Das Labor hat sie aber als Newton eingegeben.",[hl("\"Pounds of Force\"",c="r"),hl("Newton",c="g",at=.5)]),
 ("1 lbf ≈ *4,45 N* → Kräfte um Faktor 4,45 falsch","Ein Pound-Force sind etwa vier Komma vier fünf Newton. Alle Kräfte waren also um diesen Faktor falsch. Die Lehre: Schreib immer die Einheit dazu.",[card("1 lbf ≈ <b>4,45 N</b><br>Zahl ohne Einheit = <span class='R'>wertlos</span>",1130,560,560,"Merke")])])
on(1,10)
slide(1,10,"Das SI",L1,[
 ("Seit *2019*: alle SI-Einheiten über *sieben Konstanten* definiert","Seit zweitausendneunzehn sind alle S I Einheiten über sieben feste Naturkonstanten definiert. Kein Metallstab und kein Gewichtsstück mehr.",[cam([20,150,920,110]),hl("Seit 2019 sind alle SI-Einheiten über sieben physikalische"),hl("Konstanten definiert.",at=.1)]),
 ("1) *eindeutig* – jede Größe hat genau eine Einheit","Das S I hat vier Eigenschaften. Erstens: Es ist eindeutig. Jede physikalische Größe hat genau eine Einheit.",[cam([20,250,920,240]),hl("Das SI ist eindeutig:",c="b")]),
 ("2) *dezimal* – Vorsätze sind Zehnerpotenzen","Zweitens: Es ist dezimal. Kleinere und größere Einheiten entstehen durch Vorsätze, und die sind immer Zehnerpotenzen.",[hl("Das SI ist dezimal:",c="b")]),
 ("3) *effiziente Nomenklatur* · 4) *kohärent*","Drittens hat jede Größe höchstens einen eigenen Einheitennamen. Und viertens ist es kohärent: Man kann ohne zusätzliche Zahlenfaktoren umrechnen. Das schauen wir gleich an einem Beispiel an.",[hl("Das SI hat eine effiziente Nomenklatur:",c="b"),hl("Das SI ist kohärent:",c="b",at=.4)])])
on(1,11)
slide(1,11,"Die sieben definierenden Konstanten",L1,[
 ("Jede Basisgröße hängt an einer *Naturkonstante*","In dieser Tabelle steht für jede Basisgröße die Naturkonstante, an der sie hängt.",[cam("full")]),
 ("Sekunde: *9 192 631 770* Schwingungen der Cäsium-Strahlung","Die Sekunde ist die Zeit, in der die Strahlung eines Cäsium-Atoms genau neun Milliarden einhundertzweiundneunzig Millionen sechshunderteinunddreißigtausend siebenhundertsiebzig Mal schwingt.",[cam([0,100,960,130]),hl("9 192 631 770"),hl(U(F("Strahlungsfrequenz des Cäsium-Atoms"),m=1),c="b")]),
 ("Meter: Licht legt in 1/299 792 458 s *1 m* zurück","Der Meter hängt an der Lichtgeschwindigkeit: Er ist die Strecke, die Licht im Vakuum in einem zweihundertneunundneunzig-millionstel Teil einer Sekunde zurücklegt.",[hl("299 792 458"),hl("Lichtgeschwindigkeit",c="b")]),
 ("Seit 2019 auch kg, A, K, mol über *h, e, k_B, N_A*","Seit zweitausendneunzehn hängen auch Kilogramm, Ampere, Kelvin und Mol an Konstanten: am Planckschen Wirkungsquantum, an der Elementarladung, an der Boltzmann-Konstante und an der Avogadro-Konstante.",[cam("full"),hl("2019",occ=0),hl("2019",occ=1,at=.1),hl("2019",occ=2,at=.2),hl("2019",occ=3,at=.3)])])
on(1,12)
slide(1,12,"Basisgrößen und Basiseinheiten",L1,[
 ("Sieben *Basisgrößen* mit Symbol und Einheit","Die sieben Basisgrößen mit ihrem Formelzeichen und ihrer Einheit.",[cam([20,90,600,400])]),
 ("Achtung: *m* ist Masse – und *m* ist Meter!","Achtung, eine typische Verwechslung: m steht als Formelzeichen für die Masse, aber m ist auch die Einheit Meter. Und die Länge hat das Formelzeichen kleines l.",[box(U(F("Masse",occ=0),F("Kilogramm"),m=1),c="r"),hl("Meter",c="r"),hl("l (kleines „L“)",c="b",at=.6)]),
 ("Formelzeichen *kursiv* (Variable), Einheit *aufrecht*","Darum schreibt man Formelzeichen kursiv und Einheiten aufrecht. So erkennt man auch im Text sofort, was gemeint ist.",[])])
on(1,13)
slide(1,13,"Ergänzende Informationen",L1,[
 ("Kelvin: Nullpunkt = *absoluter Nullpunkt*","Diese Folie ergänzt die Tabelle. Beim Kelvin liegt der Nullpunkt dort, wo keine Molekülbewegung mehr vorliegt, beim absoluten Nullpunkt.",[cam([300,300,640,90]),hl("1 K = -273,15 °C, absoluter Nullpunkt bei dem keine",c="y")]),
 ("Hier steht 1 K = −273,15 °C – richtig ist *0 K = −273,15 °C*","Hier hat sich ein Fehler eingeschlichen: Dort steht ein Kelvin gleich minus zweihundertdreiundsiebzig Komma eins fünf Grad Celsius. Richtig ist: null Kelvin sind minus zweihundertdreiundsiebzig Komma eins fünf Grad Celsius.",[box("1 K = -273,15",c="r"),card("<span class='R'>0 K</span> = −273,15 °C<br>Δ 1 K = Δ 1 °C",1180,520,500,"Korrektur","warn")]),
 ("Ein *Temperaturunterschied* von 1 K ist gleich groß wie 1 °C.","Ein Temperaturunterschied von einem Kelvin ist dagegen genauso groß wie ein Grad Celsius. Deshalb rechnet man bei Differenzen oft einfach mit Kelvin.",[])])
on(1,14)
slide(1,14,"Vorsätze für große Zahlen",L1,[
 ("Vorsatz = *Zehnerpotenz* vor der Einheit","Jetzt die Vorsätze. Jeder Vorsatz steht für eine Zehnerpotenz.",[cam([100,60,760,440])]),
 ("Kilo = 10³ · Mega = 10⁶ · Giga = 10⁹","Die wichtigsten großen: Kilo ist zehn hoch drei, Mega zehn hoch sechs, Giga zehn hoch neun.",[hl(U(F("Kilo"),F("k",occ=0),m=1)) if False else hl("Kilo"),hl("Mega",at=.3),hl("Giga",at=.6)]),
 ("Im Bauwesen: *5 kN* = 5 · 10³ N = 5000 N","Im Bauwesen begegnet dir ständig das Kilonewton: Fünf Kilonewton sind fünf mal zehn hoch drei, also fünftausend Newton.",[card("5 <b>k</b>N = 5 · 10³ N = 5000 N<br>30 <b>M</b>Pa = 30 · 10⁶ Pa",1180,420,520,"Beispiele")])])
on(1,15)
slide(1,15,"Vorsätze für kleine Zahlen",L1,[
 ("Milli = 10⁻³ · Mikro = 10⁻⁶ · Nano = 10⁻⁹","Nach unten genauso: Milli ist zehn hoch minus drei, Mikro zehn hoch minus sechs, Nano zehn hoch minus neun.",[cam([100,60,760,440]),hl("Milli"),hl("Mikro",at=.3),hl("Nano",at=.6)]),
 ("Groß-/Kleinschreibung zählt: *m* = Milli, *M* = Mega","Achte auf Groß und Klein: kleines m ist Milli, großes M ist Mega. Das ist ein Faktor von einer Milliarde.",[card("1 <b>m</b>m = 10⁻³ m<br>1 <b>µ</b>m = 10⁻⁶ m<br><span class='R'>m</span> (Milli) ≠ <span class='R'>M</span> (Mega)",1180,420,520,"Beispiele")])])
on(1,17)
slide(1,17,"Das SI ist kohärent",L1,[
 ("Kohärent: Umrechnen *ohne extra Zahlenfaktoren*","Kohärent heißt: Die Einheiten passen ohne zusätzliche Zahlenfaktoren zusammen.",[cam([20,90,920,90]),hl("Alle SI-Einheiten mit eigenen Namen lassen sich ineinander umrechnen.")]),
 ("F = m · g: 0,1 kg · 9,81 m/s² = *0,981 N*","Beispiel eins: Kraft ist Masse mal Beschleunigung. Hundert Gramm Schokolade, also null Komma eins Kilogramm, mal neun Komma acht eins Meter pro Quadratsekunde, ergibt null Komma neun acht eins Newton. Ein Newton ist eben genau ein Kilogramm mal Meter pro Quadratsekunde.",[cam([20,150,920,170]),hl("100 g Schokolade bewirkt eine Kraft von 0,981 N")]),
 ("1 N/mm² = 10⁶ N/m² = *1 MPa*","Beispiel zwei ist für dich als Bauingenieur wichtig: Ein Newton pro Quadratmillimeter ist genau ein Megapascal.",[cam([20,280,920,160]),card("1 mm² = 10⁻⁶ m²<br>1 N/mm² = 10⁶ N/m²<br>= 10⁶ Pa = <b>1 MPa</b>",1180,560,500,"Herleitung","ok")])])
on(1,18)
slide(1,18,"Signifikante Stellen",L1,[
 ("Signifikante Stellen = Ziffern, die zur *Genauigkeit* beitragen","Signifikante Stellen sind die Ziffern einer Zahl, die etwas über die Genauigkeit aussagen.",[cam([20,100,920,150]),hl("Signifikante Stellen sind die Ziffern in einer Zahl, die zur Genauigkeit der Zahl beitragen.")]),
 ("Nicht-Null-Ziffern zählen · *eingeschlossene* Nullen zählen","Es gibt vier Regeln. Ziffern ungleich null zählen immer: hundertdreiundzwanzig hat drei. Nullen zwischen zwei Ziffern zählen auch: tausendzwei hat vier.",[cam([20,320,920,190]),hl("Alle Nicht-Null-Ziffern sind signifikant",c="g"),hl("Eingeschlossene Nullen zwischen zwei Ziffern sind signifikant",c="g",at=.5)]),
 ("*Führende* Nullen zählen nicht · *Endnullen* nach dem Komma zählen","Führende Nullen zählen nicht: null Komma null null eins zwei drei hat nur drei. Endnullen nach dem Komma zählen dagegen: zwei Komma fünf null hat drei, denn die Null sagt, dass genau gemessen wurde.",[hl("Führende Nullen sind nicht signifikant",c="r"),hl("Endnullen in einer Dezimalzahl sind signifikant",c="g",at=.5)])])
on(1,19)
slide(1,19,"Beispiele zu signifikanten Stellen",L1,[
 ("Addition: so viele *Nachkommastellen* wie der ungenaueste Wert","Beispiel eins ist eine Addition. Die Breite ist nur auf eine Nachkommastelle bekannt. Also darf auch der Umfang nur eine Nachkommastelle haben: tausenddreiundneunzig Komma acht Meter.",[cam([20,90,920,150]),hl("174,2",occ=0,c="o"),hl("U = 1093,8 m",at=.6,c="g")]),
 ("Bsp. 2: oben *6,817*, in der Rechnung *6,871* – Tippfehler","Bei Beispiel zwei steht oben eine Masse von sechs Komma acht eins sieben Kilogramm, in der Rechnung aber sechs Komma acht sieben eins. Das ist ein Tippfehler. Richtig gerechnet: sechs Komma acht eins sieben durch achtzehn Komma drei neun ergibt null Komma drei sieben null sieben.",[cam([20,230,920,170]),box("6,817",c="r"),box("6,871",c="r",at=.3)]),
 ("Mal und geteilt: so viele *signifikante Stellen* wie der ungenaueste Faktor","Außerdem gilt beim Multiplizieren und Teilen eine andere Regel als beim Addieren: Es zählt die Anzahl der signifikanten Stellen. Beide Werte haben vier, also hat auch das Ergebnis vier: null Komma drei sieben null sieben.",[card("+ und −: Nachkommastellen<br>· und ÷: <b>signifikante Stellen</b><br>6,817 / 18,39 = <span class='G'>0,3707</span> (4 Stellen)",1080,470,640,"Regel","warn")]),
 ("Plausibel? 0,37 kg/cm³ wäre *schwerer als Blei* – gemeint ist wohl dm³","Und noch ein Plausibilitätscheck: Null Komma drei sieben Kilogramm pro Kubikzentimeter wäre viel schwerer als Blei. Gemeint ist wohl ein Volumen in Kubikdezimetern.",[])])

# ---------------- Mechanik ----------------
on(2,3)
slide(2,3,"Regeln zur Notation",L2,[
 ("Variablen *kursiv*, Konstanten *aufrecht*","Jetzt die Mechanik. Zuerst zwei Regeln, die in jeder Übung und Klausur zählen. Erstens: Variablen schreibt man kursiv, Konstanten aufrecht.",[cam([20,80,920,120]),hl("Variablen werden kursiv dargestellt"),hl("Konstanten nicht kursiv",at=.4)]),
 ("x-Achse = *Abszisse* · y-Achse = *Ordinate*","Zweitens: Jedes Diagramm braucht beschriftete Achsen. Die waagerechte x-Achse heißt Abszisse, die senkrechte y-Achse heißt Ordinate.",[cam([20,190,920,100]),hl("Abszisse",c="b"),hl("Ordinate",c="g",at=.4)]),
 ("Achsen ohne Beschriftung → *keine Punkte*","Und das ist kein Detail: Für Diagramme ohne Achsenbeschriftung gibt es in Übung und Klausur keine Punkte. Also immer Größe und Einheit an jede Achse.",[cam([20,250,920,190]),box(U(F("Daher kann es keine Punkte in den Übungen bzw. in der Klausur für nicht beschriftete Achsen in"),F("Diagrammen gegeben werden!"),m=2),c="r")])])
on(2,4)
slide(2,4,"Skalare und Vektoren",L2,[
 ("Skalar: *eine Zahl* genügt (Länge, Masse, Zeit)","Skalare sind Größen, für die eine einzige Zahl genügt. Zum Beispiel Länge, Masse und Zeit.",[cam([20,100,920,160]),hl("Skalare",occ=1,c="b")]),
 ("Vektor: Betrag *und Richtung* (z. B. Verschiebung)","Vektoren brauchen zusätzlich eine Richtung. Beispiel Verschiebung: Fünf Meter allein reichen nicht, man muss sagen, wohin.",[cam([20,250,920,190]),hl("Richtung",c="o"),hl("Vektoren",occ=1,c="b",at=.2)]),
 ("Schreibweise: *fett* oder mit *Pfeil* über dem Buchstaben","Vektoren schreibt man fett oder mit einem Pfeil über dem Buchstaben. Auf Papier nimmst du den Pfeil.",[hl("„Fett“",c="y"),hl("Pfeil",c="y",at=.3)])])
on(2,5)
slide(2,5,"Bezugssystem, Ortsvektor, Bahnkurve",L2,[
 ("*Bezugssystem* = Koordinatensystem","Um eine Bewegung zu beschreiben, braucht man ein Koordinatensystem. In der Physik heißt das Bezugssystem.",[cam([20,90,920,140]),hl("Bezugsystem",occ=0,c="b")]),
 ("*Ortsvektor r(t)* – wo ist der Massepunkt zur Zeit t?","Der Ortsvektor r zeigt vom Ursprung zum Massepunkt. Weil sich der Punkt bewegt, ist r eine Funktion der Zeit.",[hl("Ortsvektor",c="o")]),
 ("*Bahnkurve* = alle Orte nacheinander","Alle Orte, die der Punkt nacheinander durchläuft, bilden die Bahnkurve.",[cam([20,200,920,130]),hl("Bahnkurve",c="g")]),
 ("Mittlere Geschwindigkeit: *v_m = Δr / Δt*","Die Position allein sagt noch nicht, wie schnell sich der Punkt bewegt. Dafür gibt es die mittlere Geschwindigkeit: Verschiebung geteilt durch Zeitintervall.",[cam([20,240,920,190]),box([22,390,72,42],c="r")])])
on(2,6)
slide(2,6,"Der Massepunkt",L2,[
 ("Modell *Massepunkt*: alle Teile bewegen sich gleich","Wir rechnen mit Massepunkten. Das passt, wenn sich alle Teile eines Körpers gleich bewegen, wie bei der rutschenden Kugel: Alle Pfeile sind gleich lang.",[cam([200,120,520,210]),anim("ring",x=322,y=217,r=60,c="g")]),
 ("Rollende Kugel: außen *schneller* als innen → kein Massepunkt","Bei der rollenden Kugel ist das anders: Oben bewegt sie sich schneller als in der Mitte, am Boden steht sie kurz still. Dann reicht das Modell Massepunkt nicht.",[anim("ring",x=590,y=217,r=60,c="r")])])
on(2,9)
slide(2,9,"Ort und Verschiebung",L2,[
 ("Zur Zeit t₁ ist der Punkt bei *x₁ = +3 m*","Jetzt die geradlinige Bewegung entlang der x-Achse. Zur Zeit t eins ist der Massepunkt bei x eins gleich plus drei Meter.",[cam([0,60,960,280]),note(373,232,"x₁ = +3 m","b",15)]),
 ("Später, zur Zeit t₂: *x₂ = −3 m*","Zur späteren Zeit t zwei ist er bei x zwei gleich minus drei Meter.",[anim("nline",xa=373,xb=133,y=262,dur=1.6),note(133,232,"x₂ = −3 m","b",15,at=.5)]),
 ("Δx = x₂ − x₁ = −3 − 3 = *−6 m*","Die Verschiebung ist immer Endort minus Anfangsort: minus drei minus drei, also minus sechs Meter.",[box([18,170,105,26],c="r"),card("Δx = x₂ − x₁<br>= −3 m − (+3 m) = <span class='R'>−6 m</span>",1170,470,540,"gerechnet")]),
 ("Zeitintervall *Δt = t₂ − t₁*","Genauso ist das Zeitintervall definiert: später minus früher.",[box([18,368,80,26],c="b")])])
on(2,10)
slide(2,10,"Vorzeichen der Verschiebung",L2,[
 ("Minus = nach *links* (kleinere x) · Plus = nach *rechts*","Das Vorzeichen der Verschiebung verrät die Richtung. Minus heißt: Bewegung zu kleineren x-Werten, also nach links. Plus heißt: nach rechts.",[cam([20,90,920,130]),hl("negatives Vorzeichen",c="r"),hl("positives Vorzeichen",c="g",at=.4)]),
 ("Verschiebung = *Betrag* + *Richtung* → Vektor","Die Verschiebung hat also einen Betrag, hier sechs Meter, und eine Richtung, hier nach links. Damit ist sie ein Vektor.",[cam([20,300,920,160]),hl("Betrag",c="b"),hl("Richtung",occ=0,c="b",at=.3)])])
on(2,11)
slide(2,11,"Die Orts-Zeit-Kurve",L2,[
 ("Orts-Zeit-Diagramm: *Zeit t* waagerecht, *Ort x* senkrecht","Trägt man den Ort über der Zeit auf, entsteht die Orts-Zeit-Kurve. Waagerecht steht die Zeit in Sekunden, senkrecht der Ort in Metern.",[cam([230,120,470,360]),hl([466,406,62,26],c="b"),hl([280,212,22,64],c="b")]),
 ("Der Punkt läuft vor, *zurück* und wieder vor.","Folge dem Punkt: Bis zwei Sekunden läuft er nach vorne auf zwanzig Meter. Dann geht er zurück bis sechzehn Meter. Ab vier Sekunden läuft er wieder vor, bis sechsunddreißig Meter.",[anim("pt",f="x",t1=0,t2=6,g=[328,55,386,6.89],axisX=328,axisY=386,lend=560,dur=6.5)]),
 ("Δx = *16 m* (0 → 1 s) · *−4 m* (2 → 4 s) · *16 m* (5 → 6 s)","Die roten Werte sind Verschiebungen: in der ersten Sekunde sechzehn Meter, von zwei bis vier Sekunden minus vier Meter, also zurück, und in der letzten Sekunde wieder sechzehn Meter.",[clear(),hl([344,322,96,24],c="r"),hl([348,256,96,24],c="r",at=.35),hl([340,195,96,24],c="r",at=.7)])])
on(2,13)
slide(2,13,"Durchschnittsgeschwindigkeit",L2,[
 ("v_m = Δx / Δt – Steigung der *Sekante*","Die Durchschnittsgeschwindigkeit ist Verschiebung durch Zeit. Im Diagramm ist das die Steigung der Geraden durch zwei Kurvenpunkte, der Sekante.",[cam([20,110,700,330]),box([22,128,82,40],c="p")]),
 ("1 → 2 s: (20 − 16) m / 1 s = *4 m/s*","Von einer bis zwei Sekunden: Der Ort geht von sechzehn auf zwanzig Meter. Vier Meter in einer Sekunde, also vier Meter pro Sekunde.",[box([440,200,88,36],c="g"),card("Δx = 20 m − 16 m = 4 m<br>Δt = 2 s − 1 s = 1 s<br>v<sub>m</sub> = <span class='G'>4 m/s</span>",200,560,470,"1 s → 2 s","ok")]),
 ("2 → 4 s: (16 − 20) m / 2 s = *−2 m/s*","Von zwei bis vier Sekunden: von zwanzig auf sechzehn Meter, also minus vier Meter in zwei Sekunden. Das sind minus zwei Meter pro Sekunde. Minus heißt: Er läuft zurück.",[clear(),box([538,296,98,36],c="r"),card("Δx = 16 m − 20 m = −4 m<br>Δt = 4 s − 2 s = 2 s<br>v<sub>m</sub> = <span class='R'>−2 m/s</span>",200,560,470,"2 s → 4 s","warn")])])
on(2,14)
slide(2,14,"Von der Sekante zur Tangente",L2,[
 ("Intervall immer kleiner → Sekante wird zur *Tangente*","Jetzt machen wir das Zeitintervall immer kleiner. Schau, wie sich die Sekante durch den Punkt bei einer Sekunde dreht.",[cam([440,110,420,310]),anim("sec",f="x",t0=1,h1=2,h2=0.004,ext=.6,g=[503,55.5,385,6.89],lx=600,ly=380,dur=6,at=.15)]),
 ("Steigung: 6 → … → *9 m/s* = Geschwindigkeit genau bei t = 1 s","Die Steigung geht von sechs über acht immer näher an neun Meter pro Sekunde. Das ist die Geschwindigkeit genau im Moment t gleich eine Sekunde.",[]),
 ("Tangentensteigung = *1. Ableitung* x′(t)","Mathematisch ist die Steigung der Tangente die erste Ableitung der Orts-Zeit-Funktion nach der Zeit.",[cam("full"),hl("erste Ableitung",c="g"),hl("der Orts-Zeit-Funktion nach der Zeit.",c="g",at=.2)])])
on(2,15)
slide(2,15,"Die Geschwindigkeit",L2,[
 ("Durchschnitt: *v_m = Δx/Δt = (x₂ − x₁)/(t₂ − t₁)*","Hier die beiden Definitionen. Die Durchschnittsgeschwindigkeit ist Δx durch Δt, also Ortsdifferenz durch Zeitdifferenz.",[cam([20,200,920,170]),box([44,303,146,46],c="p")]),
 ("Momentan: *v = lim Δx/Δt = dx/dt = ẋ*","Die momentane Geschwindigkeit ist der Grenzwert für Δt gegen null. Das ist die Ableitung dx nach dt. Physiker schreiben dafür auch x Punkt: Der Punkt bedeutet immer Ableitung nach der Zeit.",[cam([20,280,920,180]),box([44,406,166,44],c="g"),card("ẋ = dx/dt<br>Punkt = <b>Ableitung nach der Zeit</b>",1180,470,500,"Schreibweise")]),
 ("Einheit: *m/s*","Die Einheit ist in beiden Fällen Meter pro Sekunde.",[])])
on(2,17)
slide(2,17,"Geschwindigkeits-Zeit-Kurve",L2,[
 ("v(t) aus der Steigung der x-t-Kurve","Trägt man die Geschwindigkeit über der Zeit auf, erhält man die Geschwindigkeits-Zeit-Kurve. Sie gehört zur selben Bewegung wie eben.",[cam([440,110,440,330])]),
 ("v = 0 bei *2 s* und *4 s* – genau da kehrt der Punkt um","Bei zwei und bei vier Sekunden ist die Geschwindigkeit null. Genau dort hatte die Orts-Zeit-Kurve ihren Hochpunkt und ihren Tiefpunkt: Der Punkt kehrt um.",[anim("pt",f="v",t1=0,t2=6,g=[504,55.3,369,9.04],axisX=504,axisY=405,sym="v",unit="m/s",lend=700,dur=6)]),
 ("v < 0 zwischen 2 s und 4 s: er läuft *zurück*","Dazwischen ist die Geschwindigkeit negativ, der Punkt läuft zurück. Am kleinsten ist sie bei drei Sekunden: minus drei Meter pro Sekunde.",[clear(),hl([612,365,116,34],c="r")])])
on(2,18)
slide(2,18,"Die Beschleunigung",L2,[
 ("Beschleunigung = *Änderungsrate der Geschwindigkeit*","Die Beschleunigung beschreibt, wie schnell sich die Geschwindigkeit ändert. Wieder ist es die Steigung einer Sekante, jetzt in der v-t-Kurve.",[cam([20,120,920,300]),hl("Die zeitliche Rate der Änderung")]),
 ("1 → 2 s: v fällt von *9* auf *0 m/s*","Zwischen einer und zwei Sekunden fällt die Geschwindigkeit von neun auf null Meter pro Sekunde.",[box([555,250,40,60],c="o")]),
 ("a_m = Δv/Δt = (0 − 9) m/s / 1 s = *−9 m/s²*","Also minus neun Meter pro Sekunde in einer Sekunde. Die mittlere Beschleunigung ist minus neun Meter pro Quadratsekunde.",[card("Δv = 0 − 9 m/s = −9 m/s<br>Δt = 1 s<br>a<sub>m</sub> = <span class='R'>−9 m/s²</span>",1190,480,500,"gerechnet")])])
on(2,19)
slide(2,19,"Definition der Beschleunigung",L2,[
 ("Durchschnitt: *a_m = Δv/Δt* · Einheit *m/s²*","Die Definitionen sind genauso gebaut wie bei der Geschwindigkeit. Die mittlere Beschleunigung ist Δv durch Δt, die Einheit ist Meter pro Quadratsekunde.",[cam([20,200,920,170]),box([44,303,146,46],c="p")]),
 ("Momentan: *a = dv/dt = v̇ = ẍ* – zweite Ableitung von x","Die momentane Beschleunigung ist die Ableitung der Geschwindigkeit, also v Punkt. Weil v schon die Ableitung von x ist, ist a die zweite Ableitung: x zwei Punkt.",[cam([20,280,920,180]),box([44,406,200,44],c="g"),card("x(t) → <b>ableiten</b> → v(t) → <b>ableiten</b> → a(t)",1080,470,640,"Kette")])])
on(2,20)
slide(2,20,"Wann wird eine Bewegung langsamer?",L2,[
 ("Rot: v(t) · Blau: *a(t)* – eine Gerade","Hier stehen Geschwindigkeit und Beschleunigung im selben Diagramm. Rot die Geschwindigkeit, blau die Beschleunigung. Sie steigt gleichmäßig von minus achtzehn auf plus achtzehn.",[cam([440,110,440,330])]),
 ("*Verzögert*, wenn v und a *verschiedene Vorzeichen* haben","Die Regel: Die Bewegung wird langsamer, wenn Geschwindigkeit und Beschleunigung verschiedene Vorzeichen haben. Das sind die blauen Bereiche.",[cam("full"),hl("Die Bewegung verläuft verzögert, wenn die"),hl("Vorzeichen von Geschwindigkeit und",at=.1),hl("Beschleunigung verschieden sind.",at=.2)]),
 ("0–2 s: v > 0, a < 0 → langsamer · 3–4 s: v < 0, a > 0 → langsamer","Von null bis zwei Sekunden ist v positiv und a negativ, er bremst. Von drei bis vier ist v negativ und a positiv, er bremst wieder.",[cam([440,110,440,330]),note(560,135,"bremst","r",15),note(697,135,"bremst","r",15)]),
 ("2–3 s: *beide negativ* → er wird *schneller* (rückwärts)","Zwischen zwei und drei Sekunden sind beide negativ. Obwohl a negativ ist, wird er dort schneller, nämlich rückwärts. Negative Beschleunigung heißt also nicht automatisch bremsen.",[hl([614,128,54,250],c="g"),note(641,124,"schneller","g",14)])])
on(2,21)
slide(2,21,"x, v und a im Überblick",L2,[
 ("Steigung von x(t) → *v(t)*","Zusammengefasst: Die Steigung der Orts-Zeit-Kurve ist die Geschwindigkeit.",[cam("full"),box([100,140,240,240],c="b"),arr(345,250,368,250,"p")]),
 ("Steigung von v(t) → *a(t)*","Und die Steigung der Geschwindigkeits-Zeit-Kurve ist die Beschleunigung. Wo x waagerecht verläuft, ist v null. Wo v am tiefsten ist, ist a null.",[box([360,140,230,240],c="r"),box([620,140,240,240],c="g",at=.2),arr(595,250,618,250,"p")])])
on(2,23)
slide(2,23,"Rechenbeispiel: v und a bei t = 6 s",L2,[
 ("Gegeben: *x = t³ − 9 t² + 24 t* – genau unsere Kurve","Jetzt rechnen wir. Gegeben ist x gleich t hoch drei minus neun t Quadrat plus vierundzwanzig t. Das ist übrigens genau die Kurve aus allen Diagrammen dieser Vorlesung.",[cam([20,80,920,180]),hl([125,133,180,24])]),
 ("v = ẋ = *3 t² − 18 t + 24* (1. Ableitung)","Für die Geschwindigkeit leitest du einmal ab. Aus t hoch drei wird drei t Quadrat, aus minus neun t Quadrat wird minus achtzehn t, aus vierundzwanzig t wird vierundzwanzig.",[cam([20,180,920,220]),hl([22,260,270,28],c="b")]),
 ("t = 6 s: 3 · 36 − 18 · 6 + 24 = 108 − 108 + 24 = *24 m/s*","Bei sechs Sekunden: drei mal sechsunddreißig ist hundertacht, achtzehn mal sechs ist auch hundertacht. Die heben sich weg, übrig bleiben vierundzwanzig Meter pro Sekunde.",[hl([118,304,240,26],c="g")]),
 ("a = v̇ = *6 t − 18* → t = 6 s: 36 − 18 = *18 m/s²*","Für die Beschleunigung leitest du noch einmal ab: sechs t minus achtzehn. Bei sechs Sekunden sind das sechsunddreißig minus achtzehn, also achtzehn Meter pro Quadratsekunde.",[hl([22,349,205,26],c="b"),hl([22,390,200,28],c="g",at=.5)])])
on(2,24)
slide(2,24,"Blitz und Donner",L2,[
 ("Schall: *c_S ≈ 343 m/s* · Licht: praktisch sofort","Zum Schluss eine Anwendung: Wie weit ist ein Gewitter weg? Schall ist mit etwa dreihundertdreiundvierzig Metern pro Sekunde unterwegs, Licht ist praktisch sofort da.",[cam([20,90,920,240]),hl("343 m/s"),hl("unendlich schnell",at=.5)]),
 ("1 km braucht 1000 m / 343 m/s ≈ *3 s*","Für einen Kilometer braucht der Schall also tausend durch dreihundertdreiundvierzig, etwa drei Sekunden.",[cam([20,260,920,200]),box([630,405,160,62],c="g")]),
 ("Regel: *Sekunden ÷ 3 = Kilometer*","Daher die Regel: Zähl die Sekunden zwischen Blitz und Donner und teil sie durch drei. Das ist die Entfernung in Kilometern. Damit ist Vorlesung eins geschafft.",[cam([20,90,920,240]),hl("Die Zeit in s wird zwischen Blitz und Donner durch 3 geteilt.",c="g")])])
write("t1","Teil 1")
