from lib import *
LB="Physik<br>Vorlesung 2<br>Vektoren"
on(4,2)
slide(4,2,"Skalare und Vektoren",LB,[
 ("Teil 2: *Vorlesung 2 – Vektoren*","Willkommen zu Teil zwei. Jetzt geht es um Vektoren, das wichtigste Werkzeug für alles, was eine Richtung hat.",[cam("full")]),
 ("Skalar: *nur eine Zahl* – Masse, Temperatur, Zeit, Arbeit …","Zur Erinnerung: Ein Skalar ist nur eine Zahl mit Einheit. Beispiele sind Masse, Temperatur, Zeit und auch die Arbeit.",[cam([20,90,920,200]),hl(U(F("Masse,",occ=0),F("Massenträgheitsmoment"),m=1),c="b")]),
 ("Vektor: Zahl *und Richtung* – Weg, Geschwindigkeit, Kraft …","Ein Vektor hat zusätzlich eine Richtung. Beispiele sind Weg, Geschwindigkeit, Beschleunigung und Kraft. Für dich als Bauingenieur ist die Kraft der wichtigste Vektor.",[cam([20,190,920,280]),hl("Angabe einer Richtung",c="o"),hl(U(F("Strecke"),F("Drehmoment,"),m=1),c="g",at=.4)])])
on(4,3)
slide(4,3,"Wann sind Vektoren gleich?",LB,[
 ("Pfeil von *Anfangspunkt A* zu *Endpunkt E*","Ein Vektor ist ein Pfeil vom Anfangspunkt A zum Endpunkt E. Seine Länge ist der Betrag, seine Richtung zeigt die Pfeilspitze.",[cam([20,70,560,280]),anim("ring",x=72,y=285,r=14,c="o"),anim("ring",x=232,y=183,r=14,c="o",at=.3)]),
 ("Gleich, wenn *Betrag und Richtung* übereinstimmen","Zwei Vektoren sind gleich, wenn Betrag und Richtung übereinstimmen. Wo der Pfeil anfängt, ist egal. Die beiden Pfeile in der Mitte sind also derselbe Vektor.",[cam([300,130,560,190]),box([345,170,180,190],c="g")]),
 ("−a: *gleich lang*, aber *entgegengesetzt*","Rechts siehst du a und minus a: gleich lang, aber genau entgegengesetzt.",[box([625,170,185,190],c="r")]),
 ("Verschieben erlaubt → *freie Vektoren*","Weil man diese Pfeile beliebig parallel verschieben darf, nennt man sie freie Vektoren.",[cam("full"),hl("freie Vektoren",c="y")])])
on(4,4)
slide(4,4,"Parallel und antiparallel",LB,[
 ("*Parallel* ↑↑: gleiche Richtung (Länge egal)","Zeigen zwei Vektoren in dieselbe Richtung, heißen sie parallel. Ihre Länge darf verschieden sein.",[cam("full"),hl("parallel Vektoren"[:0] or "parallele Vektoren",c="g")]),
 ("*Antiparallel* ↑↓: entgegengesetzte Richtung","Zeigen sie genau entgegengesetzt, heißen sie antiparallel. Das brauchst du gleich beim Skalarprodukt wieder.",[hl("antiparallele Vektoren",c="r")])])
on(4,5)
slide(4,5,"Vektoren addieren",LB,[
 ("A + B: *Anfang von B an die Spitze von A* setzen","Jetzt die Addition. Man setzt den Anfang von B an die Spitze von A.",[cam([20,330,920,140]),box([60,350,170,110],c="b")]),
 ("Summe C: vom *Anfang von A* zur *Spitze von B*","Die Summe C geht dann vom Anfang von A bis zur Spitze von B. So entsteht ein Dreieck.",[box([315,350,230,110],c="g")]),
 ("Genauso: *Parallelogramm* aus A und B","Dasselbe Ergebnis liefert das Parallelogramm: A und B vom selben Punkt aus antragen, ergänzen, und die Diagonale ist die Summe.",[box([620,345,265,120],c="p")]),
 ("Im Bauwesen: zwei Kräfte → *eine Resultierende*","Genau so fasst du in der Statik mehrere Kräfte zu einer Resultierenden zusammen.",[cam("full"),hl("Resultante",c="y")])])
on(4,6)
slide(4,6,"Summe und Differenz",LB,[
 ("Links: c = a + b – Spitze an Anfang","Links die Summe: a, dann b an die Spitze von a. Der rote Vektor c geht vom Anfang bis zum Ende.",[cam([20,90,920,380]),box([150,140,190,230],c="r")]),
 ("Rechts: d = a − b = a + (*−b*)","Rechts die Differenz. Minus b heißt: b umdrehen und dann addieren. a minus b ist also a plus minus b.",[box([540,120,200,280],c="r")]),
 ("Merke: Subtrahieren = *Gegenvektor addieren*","Merke: Einen Vektor abziehen heißt, seinen Gegenvektor addieren.",[])])
on(4,7)
slide(4,7,"Differenz und Vielfache",LB,[
 ("A − B = A + (−B) · A − A = *Nullvektor*","Formal steht es hier noch einmal: A minus B ist A plus minus B. Und A minus A ergibt den Nullvektor, mit Betrag null und ohne Richtung.",[cam([20,100,920,150]),hl("Nullvektor",c="y")]),
 ("p · A: Länge *mal p* · p < 0 → Richtung *umgedreht*","Ein Vektor mal eine Zahl p: Die Länge wird p-mal so groß. Ist p negativ, dreht sich die Richtung um.",[cam([20,200,920,140]),hl("je nachdem, ob",c="o")]),
 ("Beispiel: 2a doppelt so lang · −½a halb so lang, entgegengesetzt","Zum Beispiel ist zwei a doppelt so lang wie a. Minus ein halb a ist halb so lang und zeigt in die Gegenrichtung.",[card("2·a → <b>doppelt</b> so lang<br>−½·a → <b>halb</b> so lang, <span class='R'>umgedreht</span>",1080,560,620,"Beispiel")])])
on(4,8)
slide(4,8,"Rechengesetze",LB,[
 ("Reihenfolge egal: *A + B = B + A*","Für Vektoren gelten die gleichen Rechengesetze wie für Zahlen. Die Reihenfolge der Summanden ist egal.",[cam([20,120,920,320]),hl("(Kommutativ-Gesetz der Addition)")]),
 ("Klammern verschieben · *ausmultiplizieren* wie gewohnt","Klammern darf man verschieben, und ausmultiplizieren funktioniert wie gewohnt. Hier gibt es also nichts Neues zu lernen.",[hl("(Assoziativ-Gesetz der Addition)",at=.1),hl("(Distributiv-Gesetz)",occ=0,at=.4),hl("(Distributiv-Gesetz)",occ=1,at=.6)])])
on(4,9)
slide(4,9,"Einheitsvektoren",LB,[
 ("Einheitsvektor: *Betrag 1* – zeigt nur die Richtung","Ein Einheitsvektor hat die Länge eins. Er trägt also nur die Richtung.",[cam([20,100,920,130]),hl("heißen Einheitsvektoren",c="y")]),
 ("Aus jedem Vektor: *a = A / |A|*","Aus jedem Vektor bekommst du ihn, indem du den Vektor durch seinen eigenen Betrag teilst.",[hl("A/A = a",c="g")]),
 ("*i, j, k*: Einheitsvektoren in *x, y, z*","Besonders wichtig sind i, j und k. Sie zeigen in Richtung der x-, y- und z-Achse und stehen senkrecht aufeinander.",[cam([20,200,920,300]),hl("i, j und k",c="b")])])
on(4,10)
slide(4,10,"Komponenten und Betrag",LB,[
 ("A = A₁ i + A₂ j + A₃ k – *Komponenten*","Jeder Vektor lässt sich aus diesen drei Einheitsvektoren zusammensetzen: A eins mal i plus A zwei mal j plus A drei mal k. Die Zahlen A eins bis A drei heißen Komponenten.",[cam([20,100,920,380]),hl([22,360,345,24],c="b")]),
 ("Betrag: *|A| = √(A₁² + A₂² + A₃²)* – Pythagoras","Der Betrag ist die Wurzel aus der Summe der Quadrate. Das ist der Satz des Pythagoras in drei Dimensionen.",[box([366,354,226,34],c="g")]),
 ("Beispiel A = (2; 3; 6): √(4 + 9 + 36) = √49 = *7*","Ein Beispiel: Für A gleich zwei, drei, sechs rechnest du vier plus neun plus sechsunddreißig, das sind neunundvierzig. Die Wurzel daraus ist sieben.",[card("A = (2; 3; 6)<br>|A| = √(2² + 3² + 6²) = √49 = <b>7</b>",1150,430,560,"Beispiel","ok")])])
on(4,12)
slide(4,12,"Komponenten in der Ebene",LB,[
 ("Lot von der Spitze auf die Achsen → *a_x* und *a_y*","In der Ebene zerlegt man so: Von der Spitze fällt man das Lot auf die x-Achse und auf die y-Achse.",[cam([480,140,460,260]),anim("ring",x=737,y=205,r=12,c="o")]),
 ("a = a_x e_x + a_y e_y – *Summe der roten Pfeile*","Der Vektor ist dann die Summe der beiden roten Pfeile: a x mal e x plus a y mal e y. Die Zahlen a x und a y sind die Komponenten.",[box([603,268,140,32],c="r"),box([720,190,40,100],c="r",at=.3)]),
 ("Hier beide *positiv* → erster Quadrant","Hier sind beide Komponenten positiv, der Vektor liegt also im ersten Quadranten.",[cam("full"),hl("Diese sind im Beispiel beide positiv und der",c="y")])])
on(4,13)
slide(4,13,"Der Betrag",LB,[
 ("Betrag = *Länge* – egal in welchem Quadranten","Der Betrag ist die Länge des Pfeils. Er ist in jedem Quadranten gleich, egal welche Vorzeichen die Komponenten haben.",[cam([400,110,500,360])]),
 ("*a = √(a_x² + a_y²)* – Quadrate machen alles positiv","Gerechnet wird mit Pythagoras. Durch das Quadrieren spielen die Vorzeichen keine Rolle mehr.",[box([550,412,160,42],c="g")]),
 ("Beispiel a = (−3; 4): √(9 + 16) = *5*","Zum Beispiel a gleich minus drei und vier: neun plus sechzehn ist fünfundzwanzig, die Wurzel ist fünf. Der Betrag wird ohne Pfeil geschrieben.",[card("a = (−3; 4)<br>a = √((−3)² + 4²) = √25 = <b>5</b>",200,560,520,"Beispiel","ok")])])
on(4,15)
slide(4,15,"Der Richtungswinkel",LB,[
 ("Winkel φ: von der *positiven x-Achse*, *gegen* den Uhrzeigersinn","Die Richtung gibt man mit dem Richtungswinkel phi an. Er wird von der positiven x-Achse aus gegen den Uhrzeigersinn gemessen.",[cam([20,110,920,170]),hl("positiven x-Richtung aus im Gegenuhrzeigersinn",c="y")]),
 ("1. Quadrant: *φ = arctan(a_y / a_x)*","Im ersten Quadranten gilt einfach: phi gleich Arkustangens von a y durch a x.",[cam([460,110,500,380]),box([705,145,120,40],c="g")]),
 ("Taschenrechner liefert nur −90° … +90° → *Quadrant prüfen*","Aber der Taschenrechner liefert nur Winkel zwischen minus neunzig und plus neunzig Grad. Deshalb musst du den Quadranten prüfen.",[cam("full"),hl("Der Arkustangens hat Funktionswerte zwischen",c="r")]),
 ("2. und 3. Quadrant: *+ π (180°)* · 4. Quadrant: *+ 2π (360°)*","Im zweiten und dritten Quadranten addierst du pi, also hundertachtzig Grad. Im vierten Quadranten zwei pi, also dreihundertsechzig Grad.",[cam([460,110,500,380]),box([550,145,165,40],c="r"),box([550,415,165,40],c="r",at=.2),box([735,415,170,40],c="r",at=.4)]),
 ("a = (−3; 4): arctan(4/−3) = −53,1° → +180° = *126,9°*","Beispiel minus drei und vier: Der Taschenrechner sagt minus dreiundfünfzig Komma eins Grad. Der Vektor liegt aber im zweiten Quadranten, also plus hundertachtzig: hundertsechsundzwanzig Komma neun Grad.",[card("a = (−3; 4) → 2. Quadrant<br>arctan(4 / −3) = −53,1°<br>φ = −53,1° + 180° = <b>126,9°</b>",1110,500,600,"Beispiel","ok")])])
on(4,16)
slide(4,16,"Sonderfall a_x = 0",LB,[
 ("a_x = 0: Division durch null → *Sonderfall*","Ist die x-Komponente null, kann man nicht durch sie teilen. Dann gilt:",[cam("full")]),
 ("a_y > 0 → *φ = π/2 = 90°* · a_y < 0 → *φ = 3π/2 = 270°*","Zeigt der Vektor nach oben, ist phi gleich pi halbe, also neunzig Grad. Zeigt er nach unten, ist phi gleich drei pi halbe, also zweihundertsiebzig Grad.",[cam([380,120,480,380]),box([652,220,140,80],c="g"),box([483,360,135,100],c="g",at=.4)])])
on(4,17)
slide(4,17,"Einheitsvektor mit cos und sin",LB,[
 ("Einheitsvektor: *e_a = a / a*","Den Einheitsvektor in Richtung von a bekommst du, indem du a durch seinen Betrag teilst.",[cam([20,90,920,140]),hl("Vektor durch seinen Betrag dividiert wird.")]),
 ("Oder über den Winkel: *e_a = cos φ e_x + sin φ e_y*","Er ist auch schon durch den Winkel festgelegt: Seine x-Komponente ist Kosinus phi, seine y-Komponente Sinus phi. Weil Kosinus Quadrat plus Sinus Quadrat eins ist, hat er die Länge eins.",[cam([20,200,920,280]),box([718,350,208,28],c="r")]),
 ("Komponenten: *a_x = a cos φ* · *a_y = a sin φ*","Damit gilt für jeden Vektor: a x ist Betrag mal Kosinus phi, a y ist Betrag mal Sinus phi.",[hl("a cos 𝜑",c="y") if False else hl([30,366,145,24],c="y")]),
 ("Probe: 5 · cos 126,9° = *−3* · 5 · sin 126,9° = *4* ✓","Probe mit unserem Beispiel: fünf mal Kosinus hundertsechsundzwanzig Komma neun Grad ist minus drei, fünf mal Sinus ist vier. Passt.",[card("5 · cos 126,9° = <b>−3</b><br>5 · sin 126,9° = <b>4</b> ✓",1180,520,500,"Probe","ok")])])
on(4,18)
slide(4,18,"Vektoren komponentenweise addieren",LB,[
 ("Summe: *x mit x, y mit y* addieren","Rechnerisch addiert man Vektoren komponentenweise: die x-Komponenten zusammen und die y-Komponenten zusammen.",[cam([20,100,920,300]),hl("Die x-Komponente des Summenvektors ist die Summe",c="y")]),
 ("c = (a_x + b_x) e_x + (a_y + b_y) e_y","Das steht unten links in rot. Beachte: Im Bild ist die x-Komponente von b negativ. Das Vorzeichen wird einfach mitgenommen.",[cam([440,150,520,280]),box([545,365,190,28],c="r")]),
 ("Beispiel: (3; 1) + (−1; 2) = *(2; 3)* · (3; 1) − (−1; 2) = *(4; −1)*","Ein Zahlenbeispiel: drei, eins plus minus eins, zwei ergibt zwei, drei. Und die Differenz: drei minus minus eins ist vier, eins minus zwei ist minus eins.",[card("a = (3; 1), b = (−1; 2)<br>a + b = (3−1; 1+2) = <b>(2; 3)</b><br>a − b = (3+1; 1−2) = <b>(4; −1)</b>",200,560,640,"Beispiel","ok")])])
on(4,19)
slide(4,19,"Vektoren im Raum",LB,[
 ("3D: dazu kommt die *z-Komponente*","In drei Dimensionen kommt die z-Achse dazu. Der Vektor hat dann drei Komponenten.",[cam([20,100,920,380])]),
 ("Betrag: *a = √(a_x² + a_y² + a_z²)*","Der Betrag ist wieder Pythagoras: die Wurzel aus der Summe der drei Quadrate.",[box([780,345,165,35],c="g")]),
 ("Zweiter Winkel: *θ = arccos(a_z / a)* gegen die z-Achse","Für die Richtung braucht man zwei Winkel: phi in der x-y-Ebene, wie bisher, und theta, gemessen von der z-Achse. Theta ist der Arkuskosinus von a z durch a.",[box([780,395,100,40],c="r")]),
 ("Beispiel A = (2; 3; 6): θ = arccos(6/7) ≈ *31°*","Für unser Beispiel zwei, drei, sechs mit Betrag sieben ist theta gleich Arkuskosinus von sechs Siebteln, etwa einunddreißig Grad.",[card("θ = arccos(6 / 7) ≈ <b>31,0°</b>",1180,520,500,"Beispiel","ok")])])
on(4,14)
slide(4,14,"Das Skalarprodukt",LB,[
 ("Skalarprodukt: zwei Vektoren → *eine Zahl*","Jetzt die zwei Produkte. Zuerst das Skalarprodukt: Es macht aus zwei Vektoren eine Zahl.",[cam([20,100,920,250]),hl("Das Ergebnis ist eine Zahl.",c="y")]),
 ("*A · B = A B cos θ* – Beträge mal Kosinus des Winkels","Definiert ist es als Betrag von A mal Betrag von B mal Kosinus des eingeschlossenen Winkels theta.",[box([22,312,135,28],c="g")]),
 ("Folie: „Vektorprodukt“ – gemeint ist das *Skalarprodukt*","Kleiner Fehler auf der Folie: Dort steht Vektorprodukt. Gemeint ist das Skalarprodukt. Das Vektorprodukt ist etwas anderes und liefert einen Vektor.",[box("Vektorprodukt",c="r"),card("A · B: <b>Skalar</b>produkt → Zahl<br>A × B: <b>Vektor</b>produkt → Vektor",1100,520,600,"Korrektur","warn")])])
on(4,20)
slide(4,20,"Skalarprodukt: die Kiste auf der Rampe",LB,[
 ("Kiste mit Seil (F) die Rampe hinauf (d)","Stell dir vor, du ziehst eine Kiste mit einem Seil eine Rampe hinauf. F ist die Seilkraft, d die Verschiebung entlang der Rampe.",[cam([420,110,540,300])]),
 ("Nur der Anteil *F cos φ* in Richtung d zählt","Für die Bewegung zählt nur der Teil der Kraft, der entlang der Rampe zeigt. Den bekommst du mit dem Lot: F mal Kosinus phi, die rote Strecke.",[anim("ring",x=578,y=300,r=30,c="r")]),
 ("F · d = (F cos φ) · d","Das Skalarprodukt ist dieser Anteil mal die Länge von d. Physikalisch ist das die Arbeit.",[cam([420,330,540,180]),box([425,372,135,28],c="g")]),
 ("Mit Komponenten: *F_x d_x + F_y d_y + F_z d_z*","Mit Komponenten rechnest du einfach: x mal x plus y mal y plus z mal z.",[box([425,420,210,30],c="b")]),
 ("Beispiel F = (3; 4) N, d = (2; 0) m: 3·2 + 4·0 = *6 N·m*","Ein Beispiel: F gleich drei, vier Newton, d gleich zwei, null Meter. Drei mal zwei plus vier mal null ist sechs Newtonmeter. Probe: F ist fünf Newton, Kosinus phi ist drei Fünftel, fünf mal drei Fünftel mal zwei ist auch sechs.",[card("F · d = 3·2 + 4·0 = <b>6 N·m</b><br>Probe: 5 N · (3/5) · 2 m = 6 N·m ✓",160,600,640,"Beispiel","ok")])])
on(4,21)
slide(4,21,"Wann ist das Skalarprodukt null?",LB,[
 ("*Senkrecht*: cos 90° = 0 → Skalarprodukt *null*","Daraus folgen drei wichtige Fälle. Stehen die Vektoren senkrecht aufeinander, ist der Kosinus von neunzig Grad null, also auch das Skalarprodukt.",[cam([20,70,520,340]),hl("Das Skalarprodukt ist Null, wenn die",c="g"),hl("Vektoren senkrecht aufeinander stehen:",c="g",at=.1)]),
 ("*Parallel*: maximal · *antiparallel*: minimal (negativ)","Sind sie parallel, ist das Skalarprodukt maximal. Sind sie antiparallel, ist es minimal, nämlich negativ, weil der Kosinus von hundertachtzig Grad minus eins ist.",[hl("Skalarprodukt ist maximal, wenn die",c="b"),hl("es minimal:",c="r",at=.5)]),
 ("Test: (1; 2) · (2; −1) = 2 − 2 = *0* → senkrecht","Das ist ein schneller Test auf senkrecht: eins, zwei mal zwei, minus eins ergibt zwei minus zwei, also null. Die beiden stehen senkrecht.",[card("(1; 2) · (2; −1) = 1·2 + 2·(−1) = <b>0</b><br>→ senkrecht ⟂",1100,520,600,"Senkrecht-Test","ok")])])
on(4,22)
slide(4,22,"Das Vektorprodukt",LB,[
 ("Tür: r vom *Scharnier* zur Klinke, F = Seilkraft","Beim Vektorprodukt interessiert das Gegenteil: der senkrechte Anteil. Denk an eine Tür. r zeigt vom Scharnier zur Klinke, F ist die Kraft am Seil.",[cam([20,110,920,380])]),
 ("Drehen kann nur der *senkrechte* Anteil: *r sin φ*","Die Tür dreht sich nur durch den Anteil, der senkrecht steht. Das ist r mal Sinus phi.",[box([552,301,64,22],c="r")]),
 ("Betrag: *M = r F sin φ* (Drehmoment)","Der Betrag des Vektorprodukts ist also r mal F mal Sinus phi. Das ist das Drehmoment.",[box([560,337,234,24],c="g")]),
 ("Winkel: Folie 0 … π/2 – allgemein 0 … π, Betrag gleich wegen sin φ = sin(π − φ)","Auf der Folie steht, der Winkel liegt zwischen null und pi halbe. Allgemein liegt er zwischen null und pi. Für den Betrag ist das egal, denn Sinus phi ist gleich Sinus von pi minus phi.",[cam("full"),hl("er liegt immer zwischen 0 und",c="o")])])
on(4,23)
slide(4,23,"Richtung des Vektorprodukts",LB,[
 ("M = r × F steht *senkrecht* auf r und F","Das Ergebnis ist ein Vektor, der senkrecht auf beiden steht.",[cam([20,100,920,400]),hl("Der Vektor 𝑀 steht immer senkrecht auf 𝑟 und 𝐹.",c="y") if False else hl("steht immer senkrecht auf",c="y")]),
 ("Richtung: *Rechtsschraube* – r auf kürzestem Weg zu F drehen","Seine Richtung bestimmst du mit der Schraubenregel: Dreh den ersten Vektor r auf kürzestem Weg zu F. In diese Richtung würde sich eine normale Rechtsschraube bewegen.",[hl("Rechtsschraube",c="b")]),
 ("Reihenfolge zählt: *F × r = −r × F*","Wichtig: Beim Vektorprodukt zählt die Reihenfolge. F kreuz r ist minus r kreuz F.",[box([728,384,62,22],c="r")])])
on(4,24)
slide(4,24,"Vektorprodukt mit Komponenten",LB,[
 ("Hier: Drehung gegen den Uhrzeigersinn → M zeigt *aus der Ebene* (+z)","Im Beispiel muss r gegen den Uhrzeigersinn gedreht werden. Die Rechtsschraube kommt aus der Zeichenebene heraus, also in plus z-Richtung.",[cam([20,100,920,160]),hl("positive",c="b")]),
 ("In der Ebene: *M_z = r_x F_y − r_y F_x*","Für Vektoren in der x-y-Ebene gilt mit Komponenten: M z gleich r x mal F y minus r y mal F x.",[card("M<sub>z</sub> = r<sub>x</sub>·F<sub>y</sub> − r<sub>y</sub>·F<sub>x</sub>",1100,455,600,"Komponenten")]),
 ("Beispiel r = (1; 0) m, F = (0; 10) N: M_z = 1·10 − 0·0 = *10 N·m*","Ein Beispiel: r gleich ein Meter in x-Richtung, F gleich zehn Newton in y-Richtung. Eins mal zehn minus null mal null gibt zehn Newtonmeter, positiv, also aus der Ebene heraus.",[card("r = (1; 0) m · F = (0; 10) N<br>M<sub>z</sub> = 1·10 − 0·0 = <b>10 N·m</b> (+z)",1100,575,600,"Beispiel","ok")]),
 ("*Parallel* oder antiparallel → sin 0 = 0 → M = 0","Und sind r und F parallel, ist der Sinus null. Dann gibt es kein Drehmoment. Damit ist Vorlesung zwei geschafft.",[cam("full"),hl("Der Betrag des Kreuzproduktes ist Null, wenn die",c="g")])])
write("t2","Teil 2")
