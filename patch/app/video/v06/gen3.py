from lib import *
LB="Physik<br>Vorlesung 3<br>2D und 3D"
LW="Physik<br>Vorlesung 3<br>Wurf"
LK="Physik<br>Vorlesung 3<br>Kreis"
LG="Physik<br>Vorlesung 3<br>Bezugssysteme"
GW=[563,173,356,34]          # Wurfdiagramm d5-08/09: x0, pt pro m, y0, pt pro m

on(5,2)
slide(5,2,"Inhalt",LB,[
 ("Teil 3: *Vorlesung 3* – Bewegung in *zwei und drei Dimensionen*","Willkommen zu Teil drei. In Vorlesung drei verlassen wir die gerade Linie: Jetzt bewegt sich etwas in der Ebene oder im Raum.",[cam([20,80,620,320])]),
 ("Fahrplan: 3D-Grundlagen → *Wurf* → *Kreisbewegung* → *Bezugssysteme*","Der Fahrplan: erst Ort, Geschwindigkeit und Beschleunigung in drei Dimensionen, dann der schiefe Wurf, dann die Kreisbewegung und am Ende bewegte Bezugssysteme.",[hl("Ortsvektor, Geschwindigkeit und Beschleunigung in 3D",c="b"),hl("Wurf ohne Luftwiderstand",c="o",at=.3),hl([46,234,510,112],c="g",at=.5),hl("Bezugssystem mit konstanter Relativgeschwindigkeit",c="p",at=.8)])])

on(5,3)
slide(5,3,"Verschiebung in drei Dimensionen",LB,[
 ("Im Raum: *drei Koordinaten* x, y, z → Ortsvektor *r*","Im Raum braucht man zu jedem Zeitpunkt drei Koordinaten: x, y und z. Zusammen bilden sie den Ortsvektor r. Er zeigt vom Ursprung zum Teilchen.",[cam([440,90,520,260]),box([468,168,166,26],c="b"),anim("ring",x=708,y=163,r=10,c="b",at=.5)]),
 ("Spitze von r über die Zeit = *Bahnkurve*","Die Spitze dieses Pfeils zeichnet während der Bewegung eine Linie in den Raum. Diese Linie heißt Bahnkurve.",[cam("full"),hl("Bahnkurve des Teilchens.",c="y")]),
 ("Später: neuer Ortsvektor r_2 → Verschiebung *Δr = r_2 − r_1*","Etwas später ist das Teilchen an einer anderen Stelle, mit dem Ortsvektor r zwei. Der rote Pfeil dazwischen ist die Verschiebung: Delta r gleich r zwei minus r eins.",[cam([440,90,520,350]),box([776,203,166,26],c="b"),box([573,341,120,26],c="r",at=.5)]),
 ("Komponentenweise: *Δx, Δy, Δz* – jede Achse für sich","Komponentenweise heißt das: Man zieht x von x ab, y von y und z von z. Heraus kommen die drei Verschiebungen Delta x, Delta y und Delta z.",[box([573,366,284,26],c="r"),box([573,397,184,26],c="g",at=.5)]),
 ("Beispiel: r_1 = (1; 2; 0) m, r_2 = (4; 6; 0) m → *Δr = (3; 4; 0) m*, Betrag *5 m*","Ein Zahlenbeispiel: r eins ist eins, zwei, null Meter, r zwei ist vier, sechs, null Meter. Dann ist Delta r gleich drei, vier, null Meter. Der Betrag ist die Wurzel aus neun plus sechzehn, also fünf Meter.",[card("Δr = (4−1; 6−2; 0−0) m = (3; 4; 0) m<br>|Δr| = √(3² + 4²) m = √25 m = <b>5 m</b>",170,600,640,"Beispiel","ok")])])

on(5,5)
slide(5,5,"3D = drei 1D-Bewegungen",LB,[
 ("3D-Bewegung = *drei unabhängige 1D-Bewegungen*","Der wichtigste Gedanke dieser Vorlesung steht hier: Eine Bewegung im Raum ist nichts anderes als drei unabhängige, eindimensionale Bewegungen, die gleichzeitig ablaufen.",[cam("full"),hl(U(F("drei unabhängigen,"),F("Bewegungen.",occ=0),m=1),c="y")]),
 ("Alles aus Vorlesung 1 gilt weiter – *pro Achse*","Alles, was du in Vorlesung eins für die x-Achse gelernt hast, gilt also weiter. Du wendest es nur auf jede Achse einzeln an.",[box([505,145,222,32],c="b"),box([496,196,278,36],c="r",at=.4)])])

on(5,6)
slide(5,6,"Geschwindigkeit in 3D",LB,[
 ("1D: *v_x = ẋ* – Ableitung von x nach t","In einer Dimension war die Geschwindigkeit die Ableitung des Ortes nach der Zeit. Der Punkt über dem x ist die Kurzschreibweise für diese Zeitableitung.",[cam([460,120,500,330]),box([500,258,232,66],c="b")]),
 ("3D: *v = ṙ = ẋ e_x + ẏ e_y + ż e_z*","Im Raum machst du genau das für jede Komponente: x punkt, y punkt und z punkt. Das ist der Geschwindigkeitsvektor.",[box([508,336,374,68],c="g")]),
 ("Beispiel r(t) = (2t; 3t²; 0) m → v(t) = (2; *6t*; 0) m/s","Ein Beispiel: x gleich zwei t und y gleich drei t Quadrat. Abgeleitet: x punkt ist zwei, y punkt ist sechs t. Bei t gleich eins ist die Geschwindigkeit also zwei, sechs, null Meter pro Sekunde.",[card("r(t) = (2t; 3t²; 0) m<br>v(t) = ṙ = (2; 6t; 0) m/s<br>t = 1 s: v = <b>(2; 6; 0) m/s</b>",160,560,560,"Beispiel","ok")])])

on(5,7)
slide(5,7,"Beschleunigung in 3D",LB,[
 ("*a = dv/dt = d²r/dt²* – Ableitung der Geschwindigkeit","Die Beschleunigung ist wieder komponentenweise die Ableitung der Geschwindigkeit, also die zweite Ableitung des Ortes. Zwei Punkte bedeuten zweimal ableiten.",[cam([460,140,500,240]),box([512,172,318,64],c="b"),box([515,262,402,72],c="g",at=.45)]),
 ("Beispiel: v(t) = (2; 6t; 0) m/s → *a = (0; 6; 0) m/s²*","Im Beispiel von eben: Zwei abgeleitet ist null, sechs t abgeleitet ist sechs. Die Beschleunigung ist also null, sechs, null Meter pro Sekunde Quadrat. Sie ist konstant und zeigt nur in y-Richtung.",[cam("full"),hl(U(F("komponentenweise als"),F("Ableitung der Orts-Zeit-Funktion berechnet."),m=1),c="y"),card("v(t) = (2; 6t; 0) m/s<br>a = dv/dt = <b>(0; 6; 0) m/s²</b> – konstant",1080,560,600,"Beispiel","ok")])])

on(5,8)
slide(5,8,"Der schiefe Wurf: Ausgangslage",LW,[
 ("Wurf: Start im *Ursprung*, r_0 = 0","Jetzt der wichtigste Anwendungsfall: der Wurf ohne Luftwiderstand, zum Beispiel ein Ball. Er startet im Ursprung, der Ortsvektor am Anfang ist also null.",[cam([470,100,490,330]),box([543,396,64,26],c="b"),anim("ring",x=566,y=354,r=12,c="b",at=.3)]),
 ("Beschleunigung: nur *a = −g e_y* – nach unten","Die einzige Beschleunigung ist die Erdbeschleunigung g, und die zeigt nur nach unten. Daher das Minuszeichen vor e y.",[box([748,166,88,26],c="r")]),
 ("Abwurf: *v_0* unter dem Winkel *φ*","Der Ball wird mit der Anfangsgeschwindigkeit v null unter dem Winkel phi abgeworfen.",[box([686,394,186,28],c="g")]),
 ("Zerlegen: *v_{0x} = v_0 cos φ* · *v_{0y} = v_0 sin φ*","Wie in Vorlesung zwei zerlegt man sie in zwei Komponenten: waagerecht v null mal Kosinus phi, senkrecht v null mal Sinus phi.",[card("v<sub>0x</sub> = v<sub>0</sub> · cos φ &nbsp;→ waagerecht<br>v<sub>0y</sub> = v<sub>0</sub> · sin φ &nbsp;→ senkrecht",1060,600,640,"Zerlegung")]),
 ("Folienbild: v_0 ≈ 10 m/s, φ ≈ 86° → Gipfel *5,1 m*, Landung bei *1,4 m*","Die Kurve auf der Folie passt zu einem Ball, der mit etwa zehn Metern pro Sekunde fast senkrecht geworfen wird, mit etwa sechsundachtzig Grad. Er steigt fünf Komma eins Meter hoch und landet nach eins Komma vier Metern.",[clear(),anim("ring",x=684,y=183,r=16,c="o"),anim("ring",x=805,y=356,r=16,c="o",at=.4)])])

on(5,9)
slide(5,9,"Was passiert beim Wurf?",LW,[
 ("x-Richtung: *keine Beschleunigung* → v_x bleibt konstant","Weil die Beschleunigung keine x-Komponente hat, ändert sich die waagerechte Geschwindigkeit nie. Der Ball wandert gleichmäßig nach rechts.",[cam("full"),hl("Beschleunigung keine x-Komponente hat,",c="g"),hl([25,159,410,20],c="g",at=.2)]),
 ("y-Richtung: v_y nach oben, a nach unten → *erst bremsen, dann fallen*","In y-Richtung zeigen Geschwindigkeit und Beschleunigung in verschiedene Richtungen. Der Ball wird also erst abgebremst, bleibt im Gipfel kurz stehen und fällt dann zurück.",[hl([25,224,420,64],c="b")]),
 ("Animation: v_x bleibt, *v_y* nimmt um 9,81 m/s pro Sekunde ab","Schau auf die Animation. Der grüne Pfeil, die waagerechte Geschwindigkeit, ist hier sehr klein und bleibt gleich. Der blaue Pfeil, die senkrechte Geschwindigkeit, wird jede Sekunde um neun Komma acht eins Meter pro Sekunde kleiner und dreht im Gipfel um.",[cam([470,100,490,330]),anim("wurf",dur=7,g=GW,v0=10.03,phi=1.5022,vk=5)]),
 ("Im Gipfel: *v_y = 0* – nur v_x ist übrig","Im Gipfel ist die senkrechte Geschwindigkeit genau null. Diese Bedingung brauchen wir gleich, um die Gipfelhöhe zu berechnen.",[clear(),anim("ring",x=684,y=183,r=16,c="o"),note(684,160,"Gipfel: v_y = 0".replace("v_y","v<tspan font-size='10' dy='3'>y</tspan><tspan dy='-3'></tspan>"),c="o",fs=14,at=.2)])])

on(5,11)
slide(5,11,"Wurf: Bewegungsgleichungen",LW,[
 ("Kein neues Prinzip: *zweimal integrieren* – je Achse","Jetzt wird gerechnet. Wichtig: Hier kommt kein neues physikalisches Prinzip dazu. Wir integrieren die Beschleunigung zweimal, wie bei der geradlinigen Bewegung, nur eben für x und y getrennt.",[cam("full"),hl("kein neues",c="y"),hl("physikalisches Prinzip",c="y",at=.1)]),
 ("x: a_x = 0 → *ẋ = v_0 cos φ* (konstant)","In x-Richtung ist die Beschleunigung null. Integriert ergibt das: Die Geschwindigkeit bleibt beim Startwert v null mal Kosinus phi.",[cam([600,90,360,370]),box([630,98,226,44],c="g")]),
 ("→ *x = (v_0 cos φ) · t* – linear in t","Nochmal integriert: x gleich v null Kosinus phi mal t. Der Weg wächst also gleichmäßig mit der Zeit.",[box([630,158,204,48],c="g")]),
 ("y: a_y = −g → *ẏ = v_0 sin φ − g t*","In y-Richtung ist die Beschleunigung minus g. Integriert: Die Geschwindigkeit startet bei v null Sinus phi und nimmt pro Sekunde um g ab.",[box([630,223,258,48],c="b")]),
 ("→ *y = (v_0 sin φ) t − ½ g t²* – quadratisch in t","Nochmal integriert: y gleich v null Sinus phi mal t minus ein halb g t Quadrat. Das ist genau die Formel vom senkrechten Wurf aus Vorlesung eins.",[box([630,288,262,56],c="b")]),
 ("Zusammen: *r = x e_x + y e_y*","Beide Komponenten zusammen ergeben den Ortsvektor. Damit ist die Bewegung vollständig beschrieben.",[box([630,360,124,30],c="r"),box([626,410,156,32],c="r",at=.5)])])

on(5,12)
slide(5,12,"Die Bahnkurve ist eine Parabel",LW,[
 ("Bahnkurve: *t eliminieren* – x-Gleichung nach t auflösen","Warum ist die Bahn eine Parabel? Dazu löst man die x-Gleichung nach t auf und setzt das Ergebnis in die y-Gleichung ein.",[cam("full"),hl([25,310,535,40],c="y")]),
 ("t = x / (v_0 cos φ) → in y einsetzen","Aus x gleich v null Kosinus phi mal t folgt: t gleich x durch v null Kosinus phi.",[cam([600,90,360,370]),box([630,158,204,48],c="g"),box([630,288,262,56],c="b",at=.4)]),
 ("*y = tan φ · x − g x² / (2 v_0² cos² φ)* → Parabel","Eingesetzt erhältst du: y gleich Tangens phi mal x, minus g mal x Quadrat durch zwei v null Quadrat Kosinus Quadrat phi. Das ist eine nach unten offene Parabel in x.",[card("y = (v<sub>0</sub> sin φ) · <span class='R'>x/(v<sub>0</sub> cos φ)</span> − ½ g · <span class='R'>x²/(v<sub>0</sub>² cos² φ)</span><br>y = <b>tan φ · x − g x² / (2 v<sub>0</sub>² cos² φ)</b>",170,560,760,"Herleitung")]),
 ("Gipfel: ẏ = 0 → *t_H = v_0 sin φ / g* · *H = v_0² sin² φ / (2g)*","Daraus folgen die wichtigen Kurzformeln. Im Gipfel ist y punkt null. Das ergibt die Steigzeit v null Sinus phi durch g. Eingesetzt in y erhältst du die Gipfelhöhe: v null Quadrat Sinus Quadrat phi durch zwei g.",[clear(),card("ẏ = 0: v<sub>0</sub> sin φ − g t = 0<br>→ t<sub>H</sub> = v<sub>0</sub> sin φ / g<br>→ H = y(t<sub>H</sub>) = <b>v<sub>0</sub>² sin² φ / (2g)</b>",170,530,620,"Gipfel")]),
 ("Landung: y = 0 → *T = 2 t_H* · Weite *W = v_0² sin(2φ) / g*","Gelandet ist der Ball, wenn y wieder null ist. Das passiert nach der doppelten Steigzeit. Setzt du diese Zeit in x ein, bekommst du die Wurfweite: v null Quadrat mal Sinus von zwei phi durch g.",[card("y = 0: T = 2 t<sub>H</sub><br>W = x(T) = v<sub>0</sub> cos φ · 2 v<sub>0</sub> sin φ / g = <b>v<sub>0</sub>² sin(2φ) / g</b>",1000,530,700,"Landung")]),
 ("Beispiel v_0 = 20 m/s, φ = 45°: H = *10,2 m*, W = *40,8 m*","Ein Beispiel: v null zwanzig Meter pro Sekunde, Winkel fünfundvierzig Grad. Gipfelhöhe: vierhundert mal ein halb durch neunzehn Komma sechs zwei, das sind zehn Komma zwei Meter. Wurfweite: vierhundert mal Sinus neunzig Grad durch neun Komma acht eins, also vierzig Komma acht Meter. Bei fünfundvierzig Grad ist die Weite am größten, weil Sinus neunzig Grad gleich eins ist.",[clear(),card("H = 20² · sin² 45° / (2 · 9,81) = 400 · 0,5 / 19,62 = <b>10,2 m</b><br>W = 20² · sin 90° / 9,81 = 400 / 9,81 = <b>40,8 m</b><br>t<sub>H</sub> = 20 · 0,707 / 9,81 = 1,44 s → T = 2,88 s",170,520,820,"Beispiel","ok")])])

on(5,13)
slide(5,13,"Kreisbewegung: Winkelposition",LK,[
 ("Kreisbewegung: Spitze von r läuft auf einem *Kreis* mit Radius r","Die zweite wichtige ebene Bewegung ist die Kreisbewegung, zum Beispiel ein Auto in einer Kurve mit festem Radius. Die Spitze des Ortsvektors läuft dabei auf einem Kreis.",[cam([520,90,440,360]),anim("kreis",dur=6,x=708,y=270,r=159,p0=0.2,p1=2.6,vl=0.01,al=0.01)]),
 ("r konstant → nur der *Winkel φ(t)* ändert sich","Weil der Radius konstant ist, reicht eine einzige Angabe: der Winkel phi. Kennst du phi als Funktion der Zeit, kennst du die ganze Bewegung.",[cam("full"),hl([24,370,172,22],c="y"),hl("Winkelposition des Teilchens genannt.",c="y",at=.3)]),
 ("x = r cos φ · y = r sin φ","Die Koordinaten sind dann x gleich r Kosinus phi und y gleich r Sinus phi.",[cam([520,90,440,360]),box([742,135,26,22],c="b"),box([818,205,24,26],c="b",at=.3)]),
 ("Bogenmaß: *φ = s / r* – Einheit *rad*","Der Winkel wird im Bogenmaß angegeben: Bogenlänge s geteilt durch den Radius. Die Einheit ist Radiant.",[box([748,312,52,42],c="r"),box([750,360,72,22],c="r",at=.3),anim("ring",x=862,y=190,r=12,c="r",at=.5)]),
 ("Beispiel: s = r → φ = *1 rad ≈ 57,3°* · Vollkreis 2π rad = 360°","Zum Beispiel: Ist der Bogen genau so lang wie der Radius, ist phi gleich ein Radiant, das sind etwa siebenundfünfzig Komma drei Grad. Ein voller Kreis hat zwei pi Radiant, also dreihundertsechzig Grad.",[card("φ = s / r = r / r = <b>1 rad</b> = 180°/π ≈ 57,3°<br>Vollkreis: s = 2πr → φ = <b>2π rad</b> = 360°",1080,470,640,"Beispiel","ok")])])

on(5,15)
slide(5,15,"Winkelgeschwindigkeit und -beschleunigung",LK,[
 ("Verdrehung *Δφ = φ_2 − φ_1*","Das Teilchen ist erst beim Winkel phi eins und kurz danach bei phi zwei. Es hat sich also um Delta phi gedreht.",[cam([500,110,460,320]),box([818,214,100,30],c="r")]),
 ("*ω = dφ/dt* – Winkelgeschwindigkeit in rad/s","Die Winkelgeschwindigkeit omega ist die Ableitung des Winkels nach der Zeit. Sie sagt, wie viele Radiant pro Sekunde überstrichen werden.",[box([596,323,120,42],c="r"),box([602,369,70,42],c="r",at=.5)]),
 ("*α = dω/dt = d²φ/dt²* – Winkelbeschleunigung in rad/s²","Die Winkelbeschleunigung alpha ist die zweite Ableitung. Sie sagt, wie schnell sich omega ändert.",[box([732,323,124,42],c="g"),box([734,369,70,42],c="g",at=.5)]),
 ("Merke: φ, ω, α ↔ *x, v, a* aus Vorlesung 1","Merke dir die Analogie: phi, omega und alpha verhalten sich wie x, v und a bei der geradlinigen Bewegung. Alle Formeln von dort gelten mit diesen Buchstaben weiter.",[cam("full"),hl(U(F("Diese Definitionen sind analog"),F("Bewegung.",occ=0),m=1),c="y"),card("x → φ &nbsp;(rad)<br>v → ω &nbsp;(rad/s)<br>a → α &nbsp;(rad/s²)",1240,450,380,"Analogie")])])

on(5,16)
slide(5,16,"Der radiale Einheitsvektor",LK,[
 ("*e_r = r / r* – zeigt vom Mittelpunkt nach außen","Für die Kreisbewegung ist ein neuer Einheitsvektor praktisch: e r. Man bekommt ihn, indem man den Ortsvektor durch seine Länge teilt. Er zeigt immer vom Mittelpunkt nach außen.",[cam([560,110,400,330]),box([755,228,56,40],c="r")]),
 ("Damit: *r = r · e_r* – ganz einfach","Der Ortsvektor ist dann einfach Radius mal e r.",[box([744,310,56,24],c="r")]),
 ("Aber: e_r *dreht sich mit* – seine Richtung ändert sich ständig","Der Haken: e r dreht sich mit dem Teilchen mit. Seine Länge bleibt eins, aber seine Richtung ändert sich ständig. Deshalb ist seine Ableitung nicht null.",[cam("full"),hl("seine Richtung ständig.",c="o"),hl("ändert allerdings",c="o")])])

on(5,17)
slide(5,17,"Wie ändert sich e_r?",LK,[
 ("Spitzen von e_r liegen auf einem Kreis mit *Radius 1*","Schauen wir, wie sich e r ändert. Die Spitzen von e r zu zwei Zeitpunkten liegen auf einem Kreis mit dem Radius eins.",[cam([480,140,480,330]),anim("ring",x=745,y=182,r=12,c="b"),anim("ring",x=775,y=205,r=12,c="b",at=.2)]),
 ("Bogen auf dem Einheitskreis = *Δφ*","Der Bogen dazwischen ist auf dem Einheitskreis genau so lang wie die Winkeländerung Delta phi.",[]),
 ("Δe_r / Δφ → Richtung der *Tangente* = *e_{φ}*","Teilt man die Änderung von e r durch Delta phi und lässt Delta phi gegen null gehen, zeigt das Ergebnis tangential. Diesen tangentialen Einheitsvektor nennt man e phi.",[box([800,182,160,40],c="r")])])

on(5,18)
slide(5,18,"Wie ändert sich e_φ?",LK,[
 ("Genauso für e_{φ}: Änderung zeigt *nach innen*","Mit e phi macht man dasselbe. Seine Änderung zeigt aber nicht tangential, sondern zum Mittelpunkt hin, also genau gegen e r.",[cam([480,140,480,320]),box([510,312,140,42],c="r")]),
 ("Merke: *de_r/dφ = e_{φ}* · *de_{φ}/dφ = −e_r*","Merke dir die beiden Ergebnisse: e r abgeleitet nach phi ergibt e phi. e phi abgeleitet nach phi ergibt minus e r.",[box([806,182,120,40],c="r"),card("de<sub>r</sub>/dφ = e<sub>φ</sub> &nbsp;(tangential)<br>de<sub>φ</sub>/dφ = −e<sub>r</sub> &nbsp;(nach innen)",1080,560,600,"Merke")])])

on(5,19)
slide(5,19,"Zeitableitung der Einheitsvektoren",LK,[
 ("Kettenregel: *de_r/dt = (dφ/dt) · e_{φ} = ω e_{φ}*","Wir brauchen aber die Ableitung nach der Zeit. Mit der Kettenregel multipliziert man einfach mit phi punkt, also mit omega: e r punkt gleich omega mal e phi.",[cam([480,130,480,300]),box([836,170,96,34],c="r")]),
 ("Genauso: *de_{φ}/dt = −ω e_r*","Genauso gilt: e phi punkt gleich minus omega mal e r.",[box([560,218,70,28],c="b")])])

on(5,20)
slide(5,20,"Geschwindigkeit auf dem Kreis",LK,[
 ("v = ṙ = r · ė_r = *r ω e_{φ}* (r konstant)","Jetzt ist die Geschwindigkeit ganz einfach. Der Radius ist konstant, also leitet man nur e r ab: v gleich r mal omega mal e phi.",[cam([540,100,420,340]),box([742,316,142,28],c="g")]),
 ("Richtung: *tangential* · Betrag: *v = r ω*","Die Geschwindigkeit zeigt also immer tangential, und ihr Betrag ist r mal omega.",[box([862,132,64,26],c="r"),box([866,164,56,24],c="r",at=.2),anim("kreis",at=.3,dur=4,x=720,y=273,r=147,p0=0.4,p1=1.6,vl=55,al=0.001)]),
 ("Beispiel: Rad r = 0,3 m, ω = 10 rad/s → v = *3 m/s*","Ein Beispiel: Ein Rad mit dreißig Zentimetern Radius dreht sich mit zehn Radiant pro Sekunde. Der Rand bewegt sich dann mit null Komma drei mal zehn, also drei Metern pro Sekunde.",[card("v = r · ω = 0,3 m · 10 1/s = <b>3 m/s</b>",160,560,560,"Beispiel","ok")])])

on(5,21)
slide(5,21,"Beschleunigung auf dem Kreis",LK,[
 ("a = dv/dt: *Produktregel*, weil ω und e_{φ} sich ändern","Für die Beschleunigung leitet man v ab. Hier ändern sich sowohl omega als auch e phi, deshalb braucht man die Produktregel.",[cam([600,140,360,320]),box([692,333,256,28],c="b")]),
 ("*a = r α e_{φ} − r ω² e_r*","Heraus kommen zwei Teile: r mal alpha in tangentialer Richtung und minus r mal omega Quadrat in radialer Richtung.",[box([752,366,132,28],c="b")]),
 ("Tangential *a_{φ} = r α* · radial *a_r = r ω² = v²/r*","Der tangentiale Teil a phi gleich r alpha ändert den Betrag der Geschwindigkeit. Der radiale Teil a r gleich r omega Quadrat ändert die Richtung. Wegen v gleich r omega kann man ihn auch als v Quadrat durch r schreiben.",[box([820,182,66,24],c="r"),box([820,200,100,40],c="g",at=.3),anim("kreis",at=.5,dur=4,x=672,y=292,r=142,p0=0.3,p1=1.4,vl=45,al=0.4)])])

on(5,22)
slide(5,22,"Zentripetalbeschleunigung",LK,[
 ("Radialer Anteil = *Zentripetalbeschleunigung* – nach innen","Der radiale Anteil heißt Zentripetalbeschleunigung. Zentripetal heißt: zum Zentrum hin. Das steckt im Minuszeichen vor e r, denn e r zeigt ja nach außen.",[cam("full"),hl("Zentripetalbeschleunigung.",c="g"),hl("negative",c="o",at=.4),box([752,366,132,28],c="g",at=.6)]),
 ("Ohne Zentripetalbeschleunigung *keine Kurve*","Ohne diese Beschleunigung würde der Körper geradeaus weiterfliegen. In der Kurve muss also immer eine Kraft nach innen wirken, beim Auto die Reibung der Reifen.",[])])

on(5,23)
slide(5,23,"Gleichförmige Kreisbewegung",LK,[
 ("Gleichförmig: *ω konstant* → α = 0","Ein wichtiger Spezialfall ist die gleichförmige Kreisbewegung: omega ist konstant, also ist alpha null. Beispiele sind ein Satellit oder ein Auto, das gleichmäßig durch eine Kurve fährt.",[cam([520,140,440,320]),box([783,183,150,34],c="r")]),
 ("Ein Umlauf in T: *ω = 2π / T* · *v = 2π r / T*","Ein Umlauf dauert die Zeit T. Dabei werden zwei pi Radiant überstrichen. Also ist omega gleich zwei pi durch T und die Bahngeschwindigkeit zwei pi r durch T.",[box([803,245,140,48],c="r"),anim("kreis",at=.3,dur=5,x=668,y=307,r=129,p0=0.8,p1=3.6,vl=40,al=0.35)]),
 ("*a_r = v² / r* – konstant, immer *nach innen*","Die Beschleunigung ist rein radial, zeigt immer nach innen und hat den konstanten Betrag v Quadrat durch r.",[box([803,352,134,52],c="g")]),
 ("Beispiel Kurve r = 50 m, v = 72 km/h = 20 m/s → a_r = *8 m/s²*","Ein Beispiel aus dem Straßenbau: Kurvenradius fünfzig Meter, Geschwindigkeit zweiundsiebzig Kilometer pro Stunde, das sind zwanzig Meter pro Sekunde. Die Zentripetalbeschleunigung ist vierhundert durch fünfzig, also acht Meter pro Sekunde Quadrat. Das ist fast so viel wie die Erdbeschleunigung.",[clear(),card("v = 72 km/h : 3,6 = 20 m/s<br>a<sub>r</sub> = v²/r = 20² / 50 = 400 / 50 = <b>8 m/s²</b><br>ω = v/r = 0,4 1/s → T = 2π/ω ≈ 15,7 s",1060,500,660,"Beispiel","ok")])])

on(5,24)
slide(5,24,"Beschleunigt trotz gleichem Tempo",LK,[
 ("Tempo konstant – trotzdem *beschleunigt*","Merke dir diesen Satz für die Klausur: Obwohl der Betrag der Geschwindigkeit konstant ist, ist die gleichförmige Kreisbewegung eine beschleunigte Bewegung.",[cam("full"),hl("trotzdem beschleunigt.",c="r"),hl("Obwohl das Teilchen sich mit konstantem",c="y",at=.2)]),
 ("Grund: Die *Richtung* von v ändert sich ständig","Der Grund ist die Richtung. Sie ändert sich ständig, und jede Änderung des Geschwindigkeitsvektors ist eine Beschleunigung.",[hl("wegen der Richtungsänderung der Geschwindigkeit",c="o")])])

on(5,25)
slide(5,25,"Bezugssysteme: Zug und Bahnsteig",LG,[
 ("Ball im Zug: *Bahnsteig sieht etwas anderes*","Zum Schluss die Bezugssysteme. Wirft jemand im fahrenden Zug einen Ball senkrecht hoch, sieht der Mitfahrer eine gerade Linie. Vom Bahnsteig aus sieht man dagegen eine Wurfparabel.",[cam("full"),hl("eines in einem fahrenden Zug nach oben geworfenen",c="y")]),
 ("Beobachter *A* (Bahnsteig), Beobachterin *B* (Zug), Teilchen *P*","Beobachter A steht am Bahnsteig, Beobachterin B sitzt im Zug. Beide schauen auf dasselbe Teilchen P.",[cam([500,240,320,190]),anim("ring",x=568,y=410,r=14,c="b"),anim("ring",x=718,y=372,r=14,c="r",at=.3),anim("ring",x=640,y=285,r=14,c="o",at=.6)]),
 ("Doppelindex: *r_{PA}* = Ort von P *aus Sicht von A*","Der Doppelindex wird so gelesen: r P A ist der Ort von P relativ zu A.",[cam("full"),hl("Der Doppelindex PA bedeutet P relativ zu A.",c="b")])])

on(5,26)
slide(5,26,"Galilei-Transformation herleiten",LG,[
 ("B fährt mit *v_{BA}* konstant → r_{BA} = v_{BA} t","B bewegt sich relativ zu A mit der konstanten Geschwindigkeit v B A. Starten beide am selben Ort, ist B nach der Zeit t bei v B A mal t.",[cam([500,170,460,270]),box([627,354,78,22],c="r")]),
 ("Vektoraddition: *r_{PA} = v_{BA} t + r_{PB}*","Nach der Regel der Vektoraddition gilt: Der Ort von P aus Sicht von A ist der Weg von A nach B plus der Ort von P aus Sicht von B.",[box([798,198,124,24],c="b")]),
 ("Ableiten: *v_{PA} = v_{BA} + v_{PB}*","Einmal nach der Zeit abgeleitet: Die Geschwindigkeiten addieren sich einfach.",[box([798,234,114,24],c="b")]),
 ("Nochmal: *a_{PA} = a_{PB}* – weil v_{BA} konstant","Und nochmal abgeleitet: Die Beschleunigungen sind gleich, weil die Ableitung der konstanten Relativgeschwindigkeit null ist.",[box([798,270,80,24],c="g")])])

on(5,27)
slide(5,27,"Galilei-Transformation",LG,[
 ("Beide messen *dieselbe Beschleunigung*","Das wichtige Ergebnis: Beide Beobachter messen dieselbe Beschleunigung. Im Zug und am Bahnsteig fällt der Ball also mit g.",[cam("full"),hl("beider Beobachter gleich sind",c="g"),box([798,270,80,24],c="g")]),
 ("Diese Umrechnung heißt *Galilei-Transformation*","Diese Umrechnung heißt Galilei-Transformation. Die Geschwindigkeitsgleichung ist die klassische Addition der Geschwindigkeiten.",[hl("Galileo-Transformation",c="y"),box([798,234,114,24],c="b")]),
 ("Gilt nur für v ≪ *Lichtgeschwindigkeit*","Sie gilt, solange alle Geschwindigkeiten klein gegen die Lichtgeschwindigkeit sind. Im Bauwesen ist das immer erfüllt.",[hl("Lichtgeschwindigkeit sind.",c="o")]),
 ("Beispiel: Zug 30 m/s, Ball 5 m/s hoch → vom Bahnsteig *(30; 5) m/s*","Ein Beispiel: Der Zug fährt mit dreißig Metern pro Sekunde, der Ball wird im Zug mit fünf Metern pro Sekunde senkrecht hochgeworfen. Vom Bahnsteig aus hat er die Geschwindigkeit dreißig, fünf, mit dem Betrag von etwa dreißig Komma vier Metern pro Sekunde. Die Beschleunigung ist für beide minus g. Damit ist Vorlesung drei geschafft.",[card("v<sub>PA</sub> = v<sub>BA</sub> + v<sub>PB</sub> = (30; 0) + (0; 5) = <b>(30; 5) m/s</b><br>|v<sub>PA</sub>| = √(900 + 25) ≈ 30,4 m/s<br>a<sub>PA</sub> = a<sub>PB</sub> = (0; −9,81) m/s²",160,560,700,"Beispiel","ok")])])

write("t3","Teil 3")
