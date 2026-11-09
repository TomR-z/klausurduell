from lib import *
LK="Physik<br>Vorlesung 5<br>Kraftgesetze"
GV=[67.9,14.2,325.1,2.2325]; GA=[372.7,14.2,325.1,10.05]; GS=[687.6,13.58,325.1,0.1675]

on(7,2)
slide(7,2,"Übersicht",LK,[
 ("Vorlesung 5: *welche Kräfte* gibt es konkret?","Willkommen zu Vorlesung fünf. In Vorlesung vier haben wir gelernt, was Kräfte bewirken: F gleich m mal a. Jetzt schauen wir uns an, welche Kräfte es konkret gibt und wie man sie berechnet.",[cam("full")]),
 ("Gravitation · Normalkraft · *Reibung* · Luftwiderstand · Kreis · *Seil*","Die Reihenfolge: Gravitation und Gewichtskraft, dann Normalkraft und Reibung, Luftwiderstand, die Kraft bei der Kreisbewegung und zum Schluss Seilkraft und Rolle.",[hl("Gravitation",c="b"),hl("Normalkraft",c="g",at=.15),hl("Luftwiderstand",c="o",at=.4),hl("Kreisbewegung",c="p",at=.6),hl("Seilkraft",c="r",at=.8)])])

on(7,3)
slide(7,3,"Gravitation",LK,[
 ("*Gravitation*: alle Massen ziehen sich an – ohne Berührung","Gravitation bedeutet: Alle Körper mit Masse ziehen sich gegenseitig an, auch ohne sich zu berühren.",[cam("full"),hl([42,142,400,46],c="y")]),
 ("Apfel und Mond: *dieselbe Kraft* – der Mond fliegt *seitlich* weiter","Die Erde zieht den Apfel und den Mond an. Der Apfel fällt einfach herunter. Der Mond fällt auch ständig auf die Erde zu, bewegt sich aber gleichzeitig so schnell seitlich, dass er immer an ihr vorbeifällt. So entsteht seine Kreisbahn.",[anim("move",dur=1.6,x1=700,y1=256,x2=700,y2=300,acc=True,c="r",r=6),anim("kreis",at=.25,dur=6,x=700,y=362,r=217,p0=0.43,p1=1.0,vl=40,al=0.25,cv="g",ca="r")]),
 ("Gravitation ist *immer anziehend* und reicht *beliebig weit*","Gravitation zieht immer an, sie stößt nie ab. Und sie reicht beliebig weit, sie wird nur mit wachsendem Abstand schwächer.",[clear(),hl([24,404,420,46],c="b")])])

on(7,4)
slide(7,4,"Gravitationsgesetz",LK,[
 ("*F = G · m_1 · m_2 / r²*","Für zwei Kugeln gilt das Gravitationsgesetz: F gleich G mal m eins mal m zwei durch r Quadrat. r ist der Abstand der Mittelpunkte.",[cam("full"),box([25,210,473,77],c="r"),anim("ring",x=1556-960,y=270,r=40,c="b",at=.5),anim("ring",x=1826-960,y=270,r=40,c="b",at=.55)]),
 ("*G ≈ 6,674 · 10⁻¹¹ N·m²/kg²* – winzig","G ist die Gravitationskonstante, rund sechs Komma sechs sieben vier mal zehn hoch minus elf. Das ist winzig. Deshalb merkt man Gravitation erst bei sehr großen Massen wie der Erde.",[hl(U(F("Gravitationskonstante"),F("N·m²/kg²"),m=1),c="y")])])

on(7,5)
slide(7,5,"Masse und Abstand",LK,[
 ("Eine Masse *verdoppeln* → *2 F*","Was passiert, wenn man etwas ändert? Verdoppelt man eine der Massen, verdoppelt sich die Kraft. Sie steht ja einfach im Zähler.",[cam("full"),hl([26,255,727,28],c="g")]),
 ("Abstand *verdoppeln* → *F / 4*","Verdoppelt man den Abstand, wird die Kraft viermal kleiner. Denn r steht im Nenner im Quadrat: zwei Quadrat ist vier.",[hl([26,308,727,28],c="r"),hl(F("Die Kraft ist umgekehrt proportional zum Quadrat des Abstands."),c="b",at=.5)]),
 ("Newtons Test: Mond in *60 Erdradien* → *g / 3600 ≈ 0,0027 m/s²*","Damit hat Newton seine Idee geprüft: Der Mond ist etwa sechzig Erdradien entfernt. Die Anziehung muss dort also sechzig Quadrat, das sind dreitausendsechshundert Mal, kleiner sein. Neun Komma acht eins durch dreitausendsechshundert sind null Komma null null zwei sieben Meter pro Sekunde Quadrat. Und genau so groß ist die Zentripetalbeschleunigung, die der Mond für seine Bahn braucht.",[card("Erdoberfläche: r = 1 R<sub>E</sub> → g = 9,81 m/s²<br>Mond: r ≈ 60 R<sub>E</sub> → 9,81 / 60² = <b>0,0027 m/s²</b><br>Bahn des Mondes: 4π²r/T² ≈ 0,0027 m/s² ✓",1050,520,700,"Zusatz","ok")])])

on(7,6)
slide(7,6,"Gewichtskraft",LK,[
 ("Nahe der Erde: *F_g = m · g* – senkrecht nach unten","Nahe der Erdoberfläche ist der Abstand zum Erdmittelpunkt praktisch immer gleich. Dann wird aus dem Gravitationsgesetz die einfache Formel F g gleich m mal g. Sie zeigt senkrecht nach unten.",[cam("full"),box([25,265,473,62],c="r"),hl([42,142,400,46],c="y")]),
 ("Doppelte Masse → *doppelte* Gewichtskraft · *g ≈ 9,81 m/s²*","Am selben Ort bedeutet doppelte Masse doppelte Gewichtskraft. g ist die Fallbeschleunigung, rund neun Komma acht eins Meter pro Sekunde Quadrat.",[hl([42,199,460,46],c="b"),arr(742,265,742,340,c="r",at=.3)])])

on(7,7)
slide(7,7,"Zwei Kilogramm-Kugeln",LK,[
 ("Je *1 kg*, *1 m* Abstand: F = 6,7 · 10⁻¹¹ N","Warum spüren wir die Anziehung kleiner Körper nicht? Zwei Kugeln mit je einem Kilogramm im Abstand von einem Meter ziehen sich mit nur sechs Komma sieben mal zehn hoch minus elf Newton an.",[cam("full"),box([25,210,473,62],c="r"),card("F = 6,674·10⁻¹¹ · 1 kg · 1 kg / (1 m)² = <b>6,7·10⁻¹¹ N</b>",1050,560,640,"Rechnung")]),
 ("Gewichtskraft von 1 kg: *9,81 N* – rund *10¹¹-mal* größer","Die Gewichtskraft von einem Kilogramm ist dagegen neun Komma acht eins Newton. Das ist rund hundert Milliarden Mal mehr. Die Erde gewinnt, weil ihre Masse so riesig ist.",[box([25,338,473,62],c="g"),card("9,81 N / 6,7·10⁻¹¹ N ≈ <b>1,5 · 10¹¹</b>",1050,560,640,"Vergleich","ok")])])

on(7,8)
slide(7,8,"Normalkraft",LK,[
 ("Unterlage drückt *nach oben*: die *Normalkraft F_N*","Warum fällt ein Körper nicht durch den Tisch? Die Gewichtskraft zieht ihn nach unten, die Unterlage drückt ihn nach oben. Diese Kontaktkraft heißt Normalkraft.",[cam("full"),hl(F("Diese Kontaktkraft heißt Normalkraft."),c="g"),arr(727,260,727,175,c="g",at=.4)]),
 ("„Normal“ = *senkrecht zur Kontaktfläche*","Normal ist hier ein Fachwort aus der Mathematik und heißt senkrecht. Die Normalkraft steht immer senkrecht auf der Kontaktfläche.",[hl(F("Normal bedeutet: senkrecht zur Kontaktfläche."),c="b")])])

on(7,9)
slide(7,9,"Normalkraft und Waage",LK,[
 ("In Ruhe: *F_N − mg = 0 → F_N = mg*","Eine Waage misst eigentlich keine Masse, sondern eine Kraft. In Ruhe gleichen sich Gewichtskraft und Normalkraft aus. Also ist F N gleich m g.",[cam("full"),box([25,265,473,60],c="r")]),
 ("Anzeige: *m_Anzeige = F_N / g*","Die Waage rechnet die Kraft in eine Masse um: F N geteilt durch g. In Ruhe kommt genau die richtige Masse heraus.",[hl([104,368,282,24],c="g"),anim("ring",x=1635-960,y=373,r=22,c="g",at=.4)]),
 ("Zusatz Aufzug: 70 kg, a = 1 m/s² nach oben → Anzeige *77,2 kg*","Ein Zusatzbeispiel mit F gleich m a: Du stehst mit siebzig Kilogramm auf einer Waage im Aufzug, der mit einem Meter pro Sekunde Quadrat nach oben anfährt. Dann muss die Waage mehr drücken: F N gleich siebzig mal zehn Komma acht eins, also siebenhundertsiebenundfünfzig Newton. Die Waage zeigt siebenundsiebzig Komma zwei Kilogramm an.",[card("F<sub>N</sub> − m·g = m·a → F<sub>N</sub> = m(g + a) = 70 · 10,81 = <b>757 N</b><br>Anzeige: 757 N / 9,81 m/s² = <b>77,2 kg</b>",1040,600,700,"Zusatz","ok")])])

on(7,10)
slide(7,10,"Normalkraft auf der schiefen Fläche",LK,[
 ("F_N steht *senkrecht zur Fläche* – F_g zeigt *nach unten*","Auf einer geneigten Fläche steht die Normalkraft weiterhin senkrecht zur Fläche, also schräg. Die Gewichtskraft zeigt aber weiter senkrecht nach unten.",[cam("full"),arr(743,300,698,203,c="g",at=.1),arr(743,300,743,412,c="r",at=.4)]),
 ("F_g und F_N: *kein* Kraft-Gegenkraft-Paar – *selber Körper*","Ganz wichtig: Gewichtskraft und Normalkraft sind kein Kraft-Gegenkraft-Paar im Sinne von actio gleich reactio. Beide greifen an demselben Körper an. Hier sind sie nicht einmal gleich groß, denn die Normalkraft ist nur m g mal Kosinus Alpha.",[hl([24,404,440,68],c="o")])])

on(7,11)
slide(7,11,"Reibung beobachten",LK,[
 ("Langsam stärker ziehen: Kiste *bleibt erst stehen*","Jetzt die Reibung. Wir ziehen langsam immer stärker an einer Kiste. Zuerst bleibt sie stehen.",[cam("full"),hl(F("Zunächst bleibt die Kiste stehen."),c="g")]),
 ("*Haftreibung* gleicht die Zugkraft aus – bis zu einer *Grenze*","Solange sie steht, gleicht die Haftreibung die Zugkraft genau aus. Erst wenn eine Grenze überschritten wird, beginnt die Kiste zu gleiten.",[hl(F("Die Haftreibung gleicht die Zugkraft aus."),c="b"),hl([42,211,410,46],c="r",at=.5)]),
 ("Animation: Holz auf Holz, F_N = 60 N → Grenze *30 N*, dann Gleiten mit *18 N*","Schau dir die Animation an: Holzkiste auf Holzboden mit sechzig Newton Normalkraft. Die Zugkraft wächst. Die Haftreibung wächst genau mit, bis zur Grenze von dreißig Newton. Dann rutscht die Kiste los, und die Reibung springt auf die kleinere Gleitreibung von achtzehn Newton. Weil die Zugkraft jetzt größer ist als die Reibung, wird die Kiste beschleunigt.",[cam([480,110,480,380]),anim("reib",dur=10,x=490,y=120,w=455,h=340,FS=30,Fk=18,Fe=40,k=1.9,pe=.85)])])

on(7,12)
slide(7,12,"Haftreibung",LK,[
 ("Haftreibung *passt sich an* – höchstens *F_S,max = μ_S · F_N*","Die Haftreibung passt sich der Zugkraft an. Ihr Höchstwert ist proportional zur Normalkraft: F S max gleich mü S mal F N.",[cam("full"),hl(F("Der gerade wirkende Betrag passt sich der Zugkraft an."),c="g"),box([25,245,473,60],c="r",at=.4)]),
 ("*μ_S*: Haftreibungszahl, hängt vom *Oberflächenpaar* ab","Mü S ist die Haftreibungszahl. Sie hängt davon ab, welche Oberflächen sich berühren.",[hl([42,176,420,46],c="b")]),
 ("Beispiel F_N = 60 N, μ_S = 0,5 → *F_S,max = 30 N*","Beispiel aus der Animation: Normalkraft sechzig Newton, Holz auf Holz mit mü S null Komma fünf. Die Kiste haftet also bis dreißig Newton Zugkraft. Ziehst du mit zwanzig Newton, ist die Haftreibung auch nur zwanzig Newton.",[hl([24,404,440,46],c="y"),card("F<sub>S,max</sub> = μ<sub>S</sub>·F<sub>N</sub> = 0,5 · 60 N = <b>30 N</b><br>Zugkraft 20 N → Haftreibung <b>20 N</b> (nicht 30 N)",160,560,640,"Beispiel","ok")])])

on(7,13)
slide(7,13,"Gleitreibung",LK,[
 ("Gleitet die Kiste: *F_k = μ_k · F_N*","Gleitet die Kiste schon, wirkt die Gleitreibung F k gleich mü k mal F N. Sie zeigt gegen die Gleitrichtung.",[cam("full"),box([25,265,473,60],c="r"),hl([42,142,440,46],c="y",at=.4)]),
 ("Zugkraft größer als F_k → Kiste wird *beschleunigt*","Ist die Zugkraft größer als die Gleitreibung, wird die Kiste weiter beschleunigt. Nach Newton zwei gilt dann: m a gleich F minus F k.",[hl([42,199,380,46],c="b"),card("m·a = F − F<sub>k</sub><br>z. B. 6,1 kg, F = 40 N: a = (40 − 18) / 6,1 = <b>3,6 m/s²</b>",1040,560,640,"Mit Newton 2","ok")]),
 ("Coulomb-Modell: F_k *unabhängig von v*","Im einfachen Coulomb-Modell ist die Gleitreibung unabhängig davon, wie schnell die Kiste rutscht.",[hl([24,404,440,46],c="o")])])

on(7,14)
slide(7,14,"Reibungszahlen",LK,[
 ("Gummi/Beton trocken: *μ_S = 1,0*, *μ_k = 0,7*","Hier typische Richtwerte. Gummi auf trockenem Beton: mü S eins, mü k null Komma sieben. Gleitreibung ist immer kleiner als Haftreibung.",[cam("full"),hl([26,205,540,28],c="g")]),
 ("Nass: *0,5–0,7* bzw. *0,3–0,5* · Holz/Holz: *0,5* / *0,3*","Ist der Beton nass, sinken die Werte deutlich. Deshalb ist der Bremsweg auf nasser Straße länger. Holz auf Holz: null Komma fünf und null Komma drei.",[hl([26,255,540,28],c="b"),hl([26,306,540,28],c="o",at=.5)]),
 ("μ_S beschreibt die *Grenze*, nicht den gerade wirkenden Betrag","Und noch einmal der Merksatz: Mü S beschreibt die Grenze der Haftreibung, nicht den Wert, der gerade wirkt.",[hl(U(F("Für die Haftreibung"),F("Betrag."),m=1),c="y")])])

on(7,15)
slide(7,15,"Reibung beim Gehen",LK,[
 ("Fuß drückt Boden *nach hinten* → Boden drückt Fuß *nach vorn*","Ohne Reibung könnten wir nicht laufen. Der Fuß drückt den Boden nach hinten. Nach actio gleich reactio drückt der Boden den Fuß nach vorn.",[cam("full"),hl(F("Der Fuß drückt den Boden nach hinten."),c="r"),hl(F("Der Boden drückt den Fuß nach vorn."),c="g",at=.4)]),
 ("Diese Kraft ist *Haftreibung* – der Fuß rutscht nicht","Diese Kraft nach vorn ist Haftreibung, denn der Fuß rutscht an der Kontaktstelle nicht. Auf Glatteis fehlt sie, dann rutscht man weg.",[hl([42,211,440,46],c="b"),anim("ring",x=840-960+960,y=300,r=24,c="g",at=.4)])])

on(7,16)
slide(7,16,"Gewichtskraft am Hang",LK,[
 ("Zerlegen: *Hangabtrieb F_H = mg sin α*","Am Hang zerlegt man die Gewichtskraft in zwei Teile. Der Teil entlang der Ebene heißt Hangabtriebskraft: m g mal Sinus Alpha.",[cam("full"),box([25,215,473,60],c="r")]),
 ("Senkrecht zur Ebene: *F_⊥ = mg cos α* (= F_N)","Der Teil senkrecht zur Ebene ist m g mal Kosinus Alpha. Genau diesen Teil gleicht die Normalkraft aus.",[box([25,320,473,58],c="b")]),
 ("Beispiel 10 kg, α = 30°: *F_H = 49,1 N*, *F_⊥ = 85,0 N*","Ein Beispiel: zehn Kilogramm bei dreißig Grad. m g sind achtundneunzig Komma eins Newton. Mal Sinus dreißig Grad, also mal null Komma fünf: neunundvierzig Komma eins Newton Hangabtrieb. Mal Kosinus dreißig Grad, null Komma acht sechs sechs: fünfundachtzig Newton senkrecht. Probe mit Pythagoras: Die Wurzel aus der Summe der Quadrate ergibt wieder achtundneunzig Komma eins.",[card("m·g = 10 · 9,81 = 98,1 N<br>F<sub>H</sub> = 98,1 · sin 30° = 98,1 · 0,5 = <b>49,1 N</b><br>F<sub>⊥</sub> = 98,1 · cos 30° = 98,1 · 0,866 = <b>85,0 N</b><br>Probe: √(49,1² + 85,0²) = 98,1 N ✓",1050,470,680,"Beispiel","ok")])])

on(7,17)
slide(7,17,"Reibung auf der schiefen Ebene",LK,[
 ("*Haftgrenze*: Winkel langsam erhöhen → Klotz steht *gerade noch* → α_S","Mit der schiefen Ebene kann man Reibungszahlen messen. Erster Versuch: Man kippt die Ebene langsam immer steiler. Der Winkel, bei dem der Klotz gerade noch steht, heißt Alpha S.",[cam("full"),hl([24,142,400,78],c="b")]),
 ("*Gleichförmiges Gleiten*: v konstant → α_k","Zweiter Versuch: Man sucht den Winkel, bei dem der Klotz mit konstanter Geschwindigkeit rutscht. Das ist Alpha k. Er ist kleiner als Alpha S.",[hl([524,142,330,78],c="g")])])

on(7,18)
slide(7,18,"Reibungszahl aus dem Winkel",LK,[
 ("Krafteck: *F_R / F_N = mg sin α / mg cos α = tan α*","Warum genügt der Winkel? Bei beiden Versuchen ist der Klotz im Gleichgewicht. Dann ist die Reibung gleich dem Hangabtrieb m g Sinus Alpha und die Normalkraft gleich m g Kosinus Alpha. Ihr Verhältnis ist Tangens Alpha. Die Masse kürzt sich heraus.",[cam("full"),box([26,210,472,84],c="r")]),
 ("*μ_S = tan α_S* · *μ_k = tan α_k*","Also gilt: mü S gleich Tangens Alpha S und mü k gleich Tangens Alpha k.",[box([210,314,288,52],c="b"),box([210,384,288,54],c="g",at=.4)]),
 ("Beispiel: α_S = 26,6° → μ_S = *0,50* · α_k = 16,7° → μ_k = *0,30*","Ein Beispiel: Rutscht ein Holzklotz bei sechsundzwanzig Komma sechs Grad los, ist mü S gleich Tangens davon, also null Komma fünf. Gleitet er bei sechzehn Komma sieben Grad gleichmäßig, ist mü k null Komma drei. Das passt genau zur Tabelle für Holz auf Holz.",[card("tan 26,6° = <b>0,50</b> = μ<sub>S</sub><br>tan 16,7° = <b>0,30</b> = μ<sub>k</sub> → Holz auf Holz ✓",1060,560,600,"Beispiel","ok")])])

on(7,19)
slide(7,19,"Fall mit Luftwiderstand: Start",LK,[
 ("Start aus Ruhe: *F_W = 0* → *a = g*","Jetzt der Luftwiderstand. Ein Körper wird aus der Ruhe losgelassen. Im ersten Moment ist er noch nicht schnell, also gibt es noch keinen Luftwiderstand. Er fällt zuerst genau mit g.",[cam("full"),box([25,245,473,57],c="r"),anim("ring",x=773,y=233,r=22,c="r",at=.4)]),
 ("Nach unten positiv · *Auftrieb vernachlässigt*","Dabei zählen wir nach unten positiv und vernachlässigen den Auftrieb in der Luft.",[hl(F("Nach unten positiv; Auftrieb vernachlässigt."),c="y")])])

on(7,20)
slide(7,20,"Beschleunigung nimmt ab",LK,[
 ("Schneller → *mehr Luftwiderstand* → *F_res = mg − F_W* wird kleiner","Mit wachsender Geschwindigkeit wächst der Luftwiderstand. Die verbleibende Kraft nach unten, m g minus F W, wird kleiner, also auch die Beschleunigung.",[cam("full"),box([25,278,473,58],c="r"),hl([42,142,380,46],c="b")]),
 ("Aber: Er wird *trotzdem noch schneller* (0 < a < g)","Aber Achtung: Er wird trotzdem noch schneller. Die Beschleunigung ist kleiner als g, aber noch größer als null.",[hl(F("Der Körper wird trotzdem noch schneller."),c="o")])])

on(7,21)
slide(7,21,"Luftwiderstand",LK,[
 ("*F_W = k_W · v²* mit *k_W = ½ c_W ρ A*","Der Luftwiderstand ist proportional zum Quadrat der Geschwindigkeit: F W gleich k W mal v Quadrat. Die Konstante k W ist ein halb mal c W mal rho mal A.",[cam("full"),box([25,265,473,123],c="r")]),
 ("c_W Form · ρ Luftdichte *1,2 kg/m³* · A Stirnfläche","c W beschreibt die Form, rho ist die Luftdichte, etwa eins Komma zwei Kilogramm pro Kubikmeter, und A ist die Stirnfläche, also die Fläche, die man von vorn sieht.",[hl([1493-960,280,380,128],c="b")]),
 ("*Doppelte v → vierfacher* Widerstand","Wichtigste Folge: Doppelte Geschwindigkeit heißt vierfacher Luftwiderstand. Das kennst du vom Spritverbrauch auf der Autobahn aus Blatt fünf.",[hl([42,199,420,46],c="g"),card("k<sub>W</sub> = ½ · 1 · 1,2 kg/m³ · 1 m² = <b>0,6 kg/m</b><br>v = 10 m/s → F<sub>W</sub> = 60 N · v = 20 m/s → <b>240 N</b>",1050,560,640,"Beispiel","ok")])])

on(7,22)
slide(7,22,"Endgeschwindigkeit",LK,[
 ("Grenzfall: *F_W = F_g* → *a = 0*","Irgendwann ist der Luftwiderstand so groß wie die Gewichtskraft. Dann ist die resultierende Kraft null und damit auch die Beschleunigung.",[cam("full"),box([25,265,473,62],c="r")]),
 ("v wächst nicht weiter – der Körper *fällt aber weiter*","Die Geschwindigkeit wächst dann nicht mehr. Der Körper bleibt aber nicht stehen, er fällt mit dieser konstanten Endgeschwindigkeit weiter.",[hl([42,199,450,46],c="b")])])

on(7,23)
slide(7,23,"Endgeschwindigkeit berechnen",LK,[
 ("*k_W v∞² = mg → v∞ = √(mg / k_W)*","Aus F W gleich m g folgt: k W mal v unendlich Quadrat gleich m g. Nach v aufgelöst: Wurzel aus m g durch k W.",[cam("full"),box([25,257,473,132],c="r"),card("k<sub>W</sub>·v∞² = m·g → v∞² = m·g / k<sub>W</sub> → v∞ = √(m·g / k<sub>W</sub>)",1040,600,660,"Herleitung")]),
 ("100 kg, k_W = 0,6 kg/m → *v∞ = √1635 ≈ 40,4 m/s*","Mit hundert Kilogramm und k W null Komma sechs: hundert mal neun Komma acht eins durch null Komma sechs sind sechzehnhundertfünfunddreißig. Die Wurzel daraus ist vierzig Komma vier Meter pro Sekunde, also etwa hundertfünfundvierzig Kilometer pro Stunde.",[clear(),card("v∞ = √(100 · 9,81 / 0,6) m/s = √1635 m/s = <b>40,4 m/s</b> ≈ 145 km/h",1040,600,660,"Beispiel","ok")]),
 ("Tabelle: nach 15 s *147,2* ohne – *40,4 m/s* mit Luftwiderstand","Die Tabelle vergleicht: Ohne Luft wäre der Körper nach fünf Sekunden schon neunundvierzig Meter pro Sekunde schnell, mit Luft nur vierunddreißig. Nach fünfzehn Sekunden: hundertsiebenundvierzig gegen vierzig Komma vier. Die Endgeschwindigkeit ist praktisch erreicht.",[hl([533,281,380,26],c="b"),hl([533,348,380,26],c="g",at=.5)])])

on(7,24)
slide(7,24,"v, a und s beim Fall",LK,[
 ("v(t): steigt schnell, nähert sich *40,4 m/s*","Die drei Diagramme zeigen den Fall mit Luftwiderstand über sechzehn Sekunden. Links die Geschwindigkeit: Sie steigt am Anfang fast so schnell wie im freien Fall und nähert sich dann vierzig Komma vier Meter pro Sekunde.",[cam([20,190,320,170]),anim("pt",dur=7,f="vf",t1=0,t2=15,g=GV,axisX=67.9,axisY=325.1,sym="v",unit="m/s",dec=1,lend=200)]),
 ("a(t): startet bei *g = 9,81* und geht gegen *0*","In der Mitte die Beschleunigung: Sie beginnt bei neun Komma acht eins und geht gegen null. Das ist die Steigung der linken Kurve.",[cam([330,190,300,170]),anim("pt",dur=6,f="af",t1=0,t2=15,g=GA,axisX=372.7,axisY=325.1,sym="a",unit="m/s²",dec=2,lend=480,c="b")]),
 ("s(t): später fast eine *Gerade* – v ist konstant","Rechts der Weg: Am Anfang eine Parabel wie beim freien Fall, später fast eine Gerade. Eine Gerade im Weg-Zeit-Diagramm heißt konstante Geschwindigkeit. Nach fünfzehn Sekunden ist der Körper etwa fünfhundert Meter gefallen.",[cam([640,190,300,170]),anim("pt",dur=6,f="sf",t1=0,t2=15,g=GS,axisX=687.6,axisY=325.1,sym="s",unit="m",dec=0,lend=790,c="g")]),
 ("Merke: *v → 40,4 m/s*, *a → 0*, s wächst *gleichmäßig*","Genau das steht unten auf der Folie: v nähert sich vierzig Komma vier, a nähert sich null, und der Weg wächst später gleichmäßig.",[cam("full"),hl(F("v nähert sich 40,4 m/s; a nähert sich null. Der Weg wächst später nahezu gleichmäßig."),c="y")])])

on(7,25)
slide(7,25,"Kreisbewegung braucht eine Kraft",LK,[
 ("Betrag von v gleich, *Richtung ändert sich* → Kraft nötig","Auch eine gleichförmige Kreisbewegung braucht eine Kraft. Der Betrag der Geschwindigkeit bleibt zwar gleich, aber ihre Richtung ändert sich ständig. Und jede Änderung der Geschwindigkeit braucht nach Newton eine Kraft.",[cam("full"),hl([42,142,410,46],c="y")]),
 ("Kraft *nach innen*: Zentripetalkraft · hier liefert sie das *Seil*","Diese Kraft zeigt nach innen und heißt Zentripetalkraft. Im Bild liefert sie das Seil, an dem die Kugel kreist. Rot: die Geschwindigkeit, grün: die Kraft zum Mittelpunkt.",[hl([42,199,420,46],c="b"),anim("kreis",at=.2,dur=7,x=720,y=300,r=120,p0=0,p1=6.28,vl=45,al=0.45,rope=True,cv="r",ca="g")])])

on(7,26)
slide(7,26,"Zentripetalkraft",LK,[
 ("*F_Z = m v² / r*","Wie groß muss diese Kraft sein? F Z gleich m mal v Quadrat durch r. Das folgt aus F gleich m a mit der Zentripetalbeschleunigung v Quadrat durch r aus Vorlesung drei.",[cam("full"),box([25,278,473,70],c="r")]),
 ("~ m · *doppelte v → vierfache Kraft* · ~ 1/r","Daraus liest man ab: Die Kraft ist proportional zur Masse. Doppelte Geschwindigkeit braucht die vierfache Kraft. Und bei gleicher Geschwindigkeit braucht ein kleinerer Radius mehr Kraft. Deshalb sind enge Kurven bei hohem Tempo gefährlich.",[hl([42,141,232,24],c="g"),hl(U(F("Doppelte Geschwindigkeit erfordert"),F("Kraft."),m=1),c="b",at=.3),hl([42,211,400,46],c="o",at=.6)])])

on(7,27)
slide(7,27,"Beispiel: Seilkraft",LK,[
 ("m = 0,20 kg, v = 2,0 m/s, r = 0,50 m","Ein Beispiel: Kugel mit zweihundert Gramm, zwei Meter pro Sekunde, Radius fünfzig Zentimeter.",[cam("full"),hl([24,140,100,96],c="y")]),
 ("F_Z = 0,20 · 2,0² / 0,50 = *1,6 N*","Eingesetzt: null Komma zwei mal vier durch null Komma fünf, das sind eins Komma sechs Newton. Genau diese Kraft muss das Seil liefern.",[box([25,257,473,82],c="r"),card("0,20 kg · (2,0 m/s)² / 0,50 m = 0,20 · 4,0 / 0,50 N = <b>1,6 N</b><br>Probe: ω = v/r = 4 1/s → m·ω²·r = 0,2 · 16 · 0,5 = 1,6 N ✓",1050,560,660,"Rechnung","ok")]),
 ("Seil reißt → Kugel fliegt *tangential geradeaus* weiter","Und was passiert, wenn das Seil reißt? Dann fehlt die Kraft nach innen. Nach dem Trägheitsprinzip fliegt die Kugel geradeaus weiter, und zwar tangential, also in die Richtung, in die sie gerade fliegt. Nicht nach außen!",[clear(),anim("kreis",dur=7,x=720,y=300,r=120,p0=0,p1=4.0,vl=40,al=0.4,rope=True,cut=0.45,cv="r",ca="g")])])

on(7,28)
slide(7,28,"Seilkraft",LK,[
 ("Seil überträgt *nur Zug* – entlang des Seils","Ein straffes Seil überträgt nur Zugkräfte, und zwar entlang des Seils. Drücken kann man mit einem Seil nicht.",[cam("full"),hl(F("Ein straffes Seil überträgt Zugkräfte entlang des Seils."),c="y")]),
 ("Hand zieht am Seil, Seil zieht *gleich stark* an der Hand","Die Hand zieht am Seil, das Seil zieht genauso stark an der Hand. Das ist wieder actio gleich reactio: Die beiden Kräfte greifen an verschiedenen Körpern an.",[hl([42,177,440,46],c="b"),hl([42,231,410,46],c="g",at=.5)])])

on(7,29)
slide(7,29,"Ideales Seil",LK,[
 ("Seilmasse vernachlässigt → *F_1 = F_2* überall gleich","Beim idealen Seil vernachlässigen wir die Masse. Dann ist die Zugkraft überall im Seil gleich groß: F eins gleich F zwei.",[cam("full"),hl(F("Wir vernachlässigen die Masse des Seils."),c="y"),box([25,298,473,56],c="r",at=.4)]),
 ("Warum? Masseloses Stück: *m·a = F_2 − F_1 = 0*","Warum? Nimm ein Stück Seil heraus. Es hat keine Masse, also ist m mal a gleich null. Dann müssen die Kräfte an beiden Enden gleich groß sein, egal wie das Seil beschleunigt.",[anim("ring",x=1688-960,y=821-540,r=26,c="p"),card("Seilstück: m·a = F<sub>2</sub> − F<sub>1</sub>, m = 0<br>→ <b>F<sub>1</sub> = F<sub>2</sub></b>",160,600,560,"Begründung")])])

on(7,30)
slide(7,30,"Feste Rolle",LK,[
 ("Feste Rolle *lenkt nur um* – Seilkraft bleibt gleich","Eine feste Rolle lenkt die Zugrichtung um. Ist sie masselos und reibungsfrei, ist die Seilkraft auf beiden Seiten gleich groß.",[cam("full"),hl(F("Die feste Rolle lenkt die Zugrichtung um."),c="b"),hl([42,177,430,46],c="g",at=.4)]),
 ("*Spart keine Kraft*: Last m·g → Zug m·g","Eine feste Rolle allein spart also keine Kraft. Um einen Eimer mit hundert Newton Gewicht gleichmäßig hochzuziehen, brauchst du auch hundert Newton. Bequemer ist nur die Richtung: Du ziehst nach unten. Kraft sparen erst lose Rollen, wie in Blatt fünf.",[hl(F("Eine feste Rolle allein spart keine Zugkraft."),c="r"),card("Eimer 100 N, gleichmäßig hochziehen<br>feste Rolle: Zug = <b>100 N</b> (nur nach unten)<br>lose Rolle: <b>50 N</b>, aber doppelter Seilweg",1050,540,660,"Beispiel","ok")])])

on(7,31)
slide(7,31,"Bewegung an der festen Rolle",LK,[
 ("Seillänge konstant: *Δl_1 = −Δl_2*","Weil das Seil straff bleibt und seine Länge gleich bleibt, gilt: Geht ein Ende nach unten, geht das andere um genau denselben Betrag nach oben.",[cam("full"),box([25,300,473,55],c="r"),anim("move",dur=4,at=.3,x1=1658-960,y1=362,x2=1658-960,y2=302,c="b",r=8,trail=True),anim("move",dur=4,at=.3,x1=1695-960,y1=332,x2=1695-960,y2=392,c="r",r=6,trail=True)]),
 ("Auch *v* und *a* an beiden Enden gleich groß","Daraus folgt durch Ableiten: Auch Geschwindigkeit und Beschleunigung sind an beiden Enden gleich groß. Das brauchst du für jede Aufgabe mit zwei Massen an einer Rolle.",[hl([42,233,430,46],c="g")])])

on(7,32)
slide(7,32,"Kraftgesetze im Überblick",LK,[
 ("*Gesetze*: Gravitation, Gewicht, Reibung, Luft, Zentripetal","Hier alles auf einen Blick. Für Gravitation, Gewichtskraft, Haft- und Gleitreibung, Luftwiderstand und Zentripetalkraft gibt es eine Formel.",[cam("full"),hl([26,176,898,26],c="b"),hl([26,211,898,26],c="b",at=.1),hl([26,282,898,26],c="g",at=.25),hl([26,318,898,26],c="g",at=.35),hl([26,353,898,26],c="o",at=.5),hl([26,389,898,26],c="p",at=.65)]),
 ("Normalkraft und Seilkraft: *aus der Kräftebilanz*","Normalkraft und Seilkraft haben keine eigene Formel. Man berechnet sie immer aus der Kräftebilanz am Körper, also mit Newton zwei.",[hl([26,246,898,26],c="r"),hl([26,424,898,26],c="r",at=.3)]),
 ("Zentripetalkraft ist *keine eigene Kraftart*: m v²/r ist, was *nötig* ist","Achte auf das Wort nötig bei der Zentripetalkraft. Sie ist keine eigene Kraftart, sondern die Kraft, die für die Kreisbahn nötig ist. Geliefert wird sie von einer echten Kraft, zum Beispiel vom Seil, der Reibung oder der Gravitation.",[box([330,389,80,26],c="r")])])

on(7,33)
slide(7,33,"Verständnisfragen",LK,[
 ("Vier Fragen – *überleg kurz selbst*","Zum Schluss vier Verständnisfragen. Halte kurz an und überlege selbst, bevor wir die Lösung anschauen.",[cam("full"),hl(U(F("Sind Gewichtskraft"),F("Kraft-Gegenkraft-Paar?"),m=1),c="b",at=.2),hl(U(F("Eine Kiste bleibt"),F("Haftreibung?"),m=1),c="g",at=.4),hl(U(F("Steht ein Körper"),F("erreicht?"),m=1),c="o",at=.6),hl([26,267,880,46],c="p",at=.8)])])

on(7,34)
slide(7,34,"Auflösung",LK,[
 ("1. *Nein* – beide greifen am *selben Körper* an","Erstens: Nein. Gewichtskraft und Normalkraft greifen am selben Körper an. Ein Kraft-Gegenkraft-Paar wirkt immer auf zwei verschiedene Körper.",[cam("full"),hl(F("Nein. Beide Kräfte greifen am selben Körper an."),c="b")]),
 ("2. *100 N* – nicht μ_S · F_N","Zweitens: hundert Newton. Die Haftreibung ist genau so groß wie die Zugkraft, solange ihre Grenze reicht.",[hl(U(F("100 N."),F("ausreicht."),m=1),c="g")]),
 ("3. *Nein* – er fällt mit *konstanter v* weiter","Drittens: Nein. Mit Endgeschwindigkeit fällt der Körper mit konstanter Geschwindigkeit weiter.",[hl(F("Nein. Der Körper fällt mit annähernd konstanter Geschwindigkeit weiter."),c="o")]),
 ("4. *Tangential* geradeaus – *nicht* nach außen","Viertens: Die Kugel fliegt tangential geradeaus weiter, nicht nach außen. Damit ist Vorlesung fünf geschafft.",[hl([26,267,880,46],c="p")])])

write("t5","Teil 5")
