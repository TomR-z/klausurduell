from lib import *
LA="Physik<br>Vorlesung 4<br>Newton"

on(6,2)
slide(6,2,"Inhalt",LA,[
 ("Vorlesung 4: *Warum* bewegt sich etwas? → *Dynamik*","Willkommen zu Vorlesung vier. Bisher haben wir beschrieben, wie sich etwas bewegt. Das war die Kinematik. Jetzt fragen wir, warum es sich so bewegt. Das ist die Dynamik.",[cam([20,70,560,260]),hl("Zusammenhang zwischen Kinematik und Dynamik",c="b")]),
 ("Kraft und Impuls · die *drei Newtonschen Axiome*","Dazu brauchen wir zwei Größen, die Kraft und den Impuls, und die drei Grundgesetze von Isaac Newton.",[hl("Zusammenhang von Kraft und Impuls",c="o"),hl("Die drei Newtonschen Axiome",c="g",at=.4)])])

on(6,3)
slide(6,3,"Bewegung hat eine Ursache",LA,[
 ("Bewegungsänderungen haben eine *Ursache*: die *Kraft F*","Bewegungen laufen nicht von selbst ab. Sie haben ihre Ursache in der Einwirkung anderer Körper. Diese Einwirkung beschreibt man mit der Vektorgröße Kraft.",[cam("full"),hl([24,133,880,46],c="y"),box(F("Diese Einwirkungen werden durch die Vektorgröße Kraft"),c="b",at=.6)]),
 ("Galilei: *ohne Kraft* → Ruhe oder *geradlinig gleichförmig*","Schon Galileo Galilei hat erkannt: Ein Körper, auf den keine Kraft wirkt, bleibt in Ruhe oder bewegt sich geradlinig und gleichförmig weiter. Das nennt man Trägheitsprinzip.",[hl([24,242,880,46],c="g")]),
 ("Alltag: alles bleibt stehen → verborgene Kraft *Reibung*","Im Alltag scheint das falsch: Ein angestoßener Körper bleibt irgendwann liegen. Der Grund ist eine verborgene Kraft aus der Umgebung, die Reibung. Ein Eishockey-Puck auf glattem Eis rutscht dagegen sehr lange.",[hl(U(F("Dies ist die Folge einer verborgenen"),F("Reibung genannt wird."),m=1),c="o")])])

on(6,4)
slide(6,4,"Kraft, Masse, Beschleunigung",LA,[
 ("Kräfte verursachen *Beschleunigung*","Kräfte rufen Beschleunigungen hervor. Darüber kann man Kräfte messen.",[cam([20,120,920,330]),hl("Kräfte rufen also Beschleunigung hervor.",c="y")]),
 ("Gleiche Kraft, *verschiedene Körper* → verschiedene Beschleunigung","Für einen bestimmten Körper ist die Beschleunigung proportional zur Kraft. Verschiedene Körper reagieren aber auf dieselbe Kraft verschieden stark.",[hl(U(F("Für einen definierten Körper"),F("Kraft proportional."),m=1),c="b"),ul("unterschiedliche Beschleunigungen.",c="r",at=.5)]),
 ("Folie: „entgegenwirkenden“ – gemeint ist die *einwirkende* Kraft","Kleiner Hinweis zur Folie: Dort steht entgegenwirkende Kraft. Gemeint ist die einwirkende Kraft, also die Kraft, die den Körper beschleunigt.",[strike(F("entgegenwirkenden")),note(F("entgegenwirkenden")[0]+60,F("entgegenwirkenden")[1]-6,"einwirkenden",c="r",fs=14)]),
 ("Widerstand gegen Bewegungsänderung = *Trägheit* → *Masse m*","Diesen Widerstand gegen eine Bewegungsänderung nennt man Trägheit. Er wird durch die Masse erfasst: Je größer die Masse, desto schwerer lässt sich der Körper beschleunigen.",[clear(cards=False),hl(U(F("Dieser Widerstand wird als"),F("(träge) Masse erfasst."),m=1),c="g"),hl(F("je größer die Masse, desto stärker widersetzt sich ein Massepunkt einer Bewegungsänderung"),c="g",at=.4)]),
 ("*a = F / m* · Einheit: *1 N = 1 kg·m/s²*","Zusammengefasst: Beschleunigung gleich Kraft durch Masse. Kräfte misst man in Newton. Ein Newton ist genau die Kraft, die ein Kilogramm mit einem Meter pro Sekunde Quadrat beschleunigt.",[box([440,342,74,58],c="r"),box(U(F("Kräfte werden in der Einheit Newton (N) gemessen:"),[440,412,105,40],m=2),c="b",at=.4),card("1 N = 1 kg · 1 m/s²<br>→ beschleunigt <b>1 kg</b> mit <b>1 m/s²</b>",1080,560,560,"Merke")])])

on(6,5)
slide(6,5,"Der Impuls",LA,[
 ("Kraft über eine Zeit → *Geschwindigkeit ändert sich*","Wirkt eine Kraft eine Zeit lang auf einen frei beweglichen Körper, ändert sich seine Geschwindigkeit. Je kleiner die Masse, desto größer die Änderung.",[cam("full"),hl(U(F("Eine über eine gewisse Zeit"),F("ändert seine Geschwindigkeit."),m=1),c="y"),hl("Diese Änderung ist umso größer, je kleiner die Masse des frei beweglichen Körpers ist.",c="b",at=.5)]),
 ("*Impuls p = m · v* – Masse mal Geschwindigkeit","Deshalb fasst man Masse und Geschwindigkeit zu einer Größe zusammen: dem Impuls, p gleich m mal v.",[hl(U(F("Hierzu dient die Vektorgröße Impuls,"),F("berechnet wird."),m=1),c="g"),box([436,300,80,28],c="r",at=.4)]),
 ("Beispiel: Tischtennisball vs. Bowlingkugel bei *5 m/s*","Das erklärt das Beispiel auf der Folie: Ein Tischtennisball hat etwa zwei Komma sieben Gramm, eine Bowlingkugel etwa sieben Kilogramm. Beide mit fünf Metern pro Sekunde: Der Ball hat null Komma null eins drei fünf, die Kugel fünfunddreißig Kilogramm mal Meter pro Sekunde. Das ist gut zweitausendfünfhundertmal so viel Wucht.",[hl([24,348,880,90],c="o"),card("Tischtennisball: 0,0027 kg · 5 m/s = <b>0,0135 kg·m/s</b><br>Bowlingkugel: 7 kg · 5 m/s = <b>35 kg·m/s</b><br>35 / 0,0135 ≈ 2 600-mal so groß",160,600,660,"Beispiel","ok")])])

on(6,6)
slide(6,6,"Impuls als Vektor",LA,[
 ("p hat die *Richtung von v* · Einheit *kg·m/s*","Die Masse ist ein Skalar, also eine reine Zahl ohne Richtung. Deshalb zeigt der Impuls immer in Richtung der Geschwindigkeit. Seine Einheit ist Kilogramm mal Meter pro Sekunde.",[cam("full"),box([436,148,80,28],c="r"),hl(U(F("Die Masse ist ein Skalar,"),F("[kg m/s]."),m=1),c="y",at=.3)]),
 ("Zeitableitung bei m konstant: *ṗ = m · a* · Einheit *kg·m/s²*","Leitet man den Impuls nach der Zeit ab und die Masse bleibt gleich, erhält man Masse mal Beschleunigung. Die Einheit ist dann Kilogramm mal Meter pro Sekunde Quadrat, also Newton. Genau das braucht gleich das zweite Axiom.",[hl([24,350,880,46],c="g"),card("ṗ = d(m·v)/dt = m · dv/dt = <b>m · a</b> &nbsp;(m konstant)",1060,600,640,"Herleitung")])])

on(6,7)
slide(6,7,"Die drei Newtonschen Axiome",LA,[
 ("1. *Trägheitsprinzip*: ohne Kraft keine Bewegungsänderung","Isaac Newton hat die ganze Mechanik auf drei Grundsätzen aufgebaut. Erstens das Trägheitsprinzip: Ohne Kraft bleibt ein Körper in Ruhe oder in gleichförmiger Bewegung.",[cam("full"),hl([24,197,880,46],c="b")]),
 ("2. *Aktionsprinzip*: *F = ṗ* – Kraft = Impulsänderung pro Zeit","Zweitens das Aktionsprinzip: Die Kraft ist gleich der zeitlichen Änderung des Impulses.",[hl(U(F("Die zeitliche Änderung des Impulses eines Körpers ist gleich der einwirkenden Kraft."),F("(Aktionsprinzip)"),m=1),c="g"),box([398,300,68,32],c="g",at=.5)]),
 ("3. *Reaktionsprinzip*: A auf B mit F → B auf A mit *−F*","Drittens das Reaktionsprinzip: Drückt ein Körper A mit einer Kraft auf B, drückt B mit der gleich großen, entgegengesetzten Kraft zurück. Kurz: actio gleich reactio.",[hl([25,352,880,46],c="o")])])

on(6,8)
slide(6,8,"1. Axiom: Trägheitsprinzip",LA,[
 ("*F = 0 → v = const* · Ruhe ist der Sonderfall v = 0","Das erste Axiom heißt auch galileisches Trägheitsprinzip. In einer Formel: Ist die Kraft null, bleibt die Geschwindigkeit konstant. Ruhe ist nur der Sonderfall Geschwindigkeit null.",[cam("full"),hl("Es gilt: v = const. für F = 0",c="g")]),
 ("Nicht direkt prüfbar: *Reibung* lässt sich nie ganz ausschalten","Direkt im Experiment prüfen lässt sich das nicht, weil man Reibung und andere Einflüsse nie ganz ausschalten kann.",[hl([24,284,860,46],c="o")]),
 ("Merke: *jede* Änderung von v hat eine *Kraft* als Ursache","Umgekehrt gilt: Wird ein Körper schneller, langsamer oder ändert er seine Richtung, dann wirkt eine Kraft. Daran erkennt man in jeder Aufgabe, ob Kräfte im Spiel sind.",[hl([24,349,870,46],c="b")])])

on(6,9)
slide(6,9,"2. Axiom: Kraft und Beschleunigung",LA,[
 ("Konstante Kraft → *gleichmäßig beschleunigte* Bewegung","Greift eine konstante Kraft an, bewegt sich der Körper gleichmäßig beschleunigt. Das bekannteste Beispiel ist der freie Fall.",[cam("full"),hl([24,176,880,46],c="y")]),
 ("Doppelte Kraft → *doppelte Beschleunigung*: F ~ a","Verdoppelt man die Kraft, verdoppelt sich die Beschleunigung. Kraft und Beschleunigung sind proportional, und der Proportionalitätsfaktor ist die Masse: F durch a gleich m.",[hl("Wird die Kraft auf das Doppelte erhöht, so erhöht sich die Beschleunigung auf das Doppelte.",c="b"),box([440,328,70,48],c="r",at=.5)]),
 ("Bild: Wagen m_1 auf dem Tisch, Gewicht m_2 zieht über die Rolle","Das Bild zeigt einen typischen Versuch: Ein Wagen mit der Masse m eins steht reibungsfrei auf dem Tisch. Ein Gewicht mit der Masse m zwei hängt am Seil über die Rolle und zieht ihn.",[cam([400,300,520,220]),anim("ring",x=632,y=345,r=26,c="b"),anim("ring",x=742,y=446,r=20,c="o",at=.4)]),
 ("Beispiel m_1 = 2 kg, m_2 = 1 kg → *a = 3,27 m/s²*","Ein Zahlenbeispiel: m eins zwei Kilogramm, m zwei ein Kilogramm. Die antreibende Kraft ist die Gewichtskraft des hängenden Körpers: ein Kilogramm mal neun Komma acht eins, also neun Komma acht eins Newton. Beschleunigt werden aber beide Massen zusammen, drei Kilogramm. Also a gleich neun Komma acht eins durch drei, das sind drei Komma zwei sieben Meter pro Sekunde Quadrat.",[card("antreibend: F = m<sub>2</sub>·g = 1 kg · 9,81 m/s² = 9,81 N<br>beschleunigt: m<sub>1</sub> + m<sub>2</sub> = 3 kg<br>a = F / m = 9,81 N / 3 kg = <b>3,27 m/s²</b>",160,540,700,"Beispiel","ok")])])

on(6,10)
slide(6,10,"Grundgesetz der Dynamik",LA,[
 ("Masse = Maß für die *Trägheit* eines Körpers","Die Masse beschreibt, wie stark sich ein Körper gegen eine Änderung seiner Bewegung wehrt. Sie ist ein Maß für seine Trägheit.",[cam("full"),hl([24,176,860,46],c="y")]),
 ("*F = m · a* – Grundgesetz der Dynamik","Daraus folgt das Grundgesetz der Dynamik: F gleich m mal a. Das ist die wichtigste Formel der ganzen Mechanik.",[box(F("F = m a Grundgesetz der Dynamik"),c="r",pad=5)]),
 ("Folgerungen: *Gewichtskraft* · träge/schwere Masse · *Zentripetalkraft*","Drei Folgerungen schauen wir uns gleich an: die Gewichtskraft, die Gleichheit von träger und schwerer Masse und die Zentripetalkraft auf der Kreisbahn.",[hl(U(F("- Gewichtskraft eines Körpers"),F("- Radialkraft (Zentripetalkraft)"),m=1),c="g")])])

on(6,11)
slide(6,11,"Masse oder Gewicht?",LA,[
 ("*Masse* in kg – überall gleich · *Gewicht(skraft)* in N – ortsabhängig","Ein häufiger Fehler: Masse und Gewicht verwechseln. Die Masse in Kilogramm ist überall gleich. Die Gewichtskraft in Newton hängt davon ab, wie stark die Gravitation am Ort ist.",[cam("full"),hl([24,221,860,46],c="y")]),
 ("Genauer: Masse = *Menge Materie* und *Trägheit* – „schwer“ ist das Gewicht","Kleine Präzisierung zur ersten Zeile der Folie: Die Masse sagt, wie viel Materie ein Körper hat und wie träge er ist. Wie schwer er sich anfühlt, ist eigentlich seine Gewichtskraft.",[hl(F("Die Masse eines Körpers gibt an, wie schwer er ist"),c="o"),card("Masse m: Menge Materie, Trägheit – <b>kg</b><br>Gewichtskraft F<sub>G</sub> = m·g – <b>N</b>",1080,560,560,"Genauer")]),
 ("Beispiel 70 kg: Erde *687 N*, Mond *113 N* – Masse bleibt *70 kg*","Ein Beispiel: Ein Mensch mit siebzig Kilogramm hat auf der Erde die Gewichtskraft siebzig mal neun Komma acht eins, also rund sechshundertsiebenundachtzig Newton. Auf dem Mond ist die Fallbeschleunigung nur eins Komma sechs zwei Meter pro Sekunde Quadrat. Dort wiegt er nur hundertdreizehn Newton, hat aber weiterhin siebzig Kilogramm Masse.",[clear(),card("Erde: 70 kg · 9,81 m/s² = <b>687 N</b><br>Mond: 70 kg · 1,62 m/s² = <b>113 N</b><br>Masse überall: <b>70 kg</b>",1080,560,560,"Beispiel","ok")])])

on(6,12)
slide(6,12,"Gewichtskraft",LA,[
 ("Masse bestimmt *Trägheit* und *Schwere*","Die Masse bestimmt nicht nur die Trägheit eines Körpers, sondern auch seine Schwere, also wie stark ihn die Erde anzieht.",[cam("full"),hl(U(F("Die Masse eines Körpers kennzeichnet"),F("Schwere."),m=1),c="y")]),
 ("Faden spannen → *Gewichtskraft F_G* · Faden durch → *g = 9,81 m/s²*","Hängt ein Körper am Faden, spannt er ihn mit der Gewichtskraft. Schneidet man den Faden durch, fällt er frei mit der Erdbeschleunigung g gleich neun Komma acht eins Meter pro Sekunde Quadrat.",[hl([25,265,850,50],c="b"),hl([25,330,820,42],c="g",at=.5)]),
 ("*F_G = m · g* – 1 kg wiegt *9,81 N ≈ 10 N*","Daraus folgt die Formel F G gleich m mal g. Merkhilfe: Ein Kilogramm hat eine Gewichtskraft von neun Komma acht eins, also knapp zehn Newton.",[box([22,430,90,28],c="r"),card("F<sub>G</sub> = 1 kg · 9,81 m/s² = <b>9,81 N</b> ≈ 10 N<br>Pack Mehl, 1 kg ≈ 10 N",1080,560,560,"Merkhilfe","ok")])])

on(6,13)
slide(6,13,"Zentripetalkraft",LA,[
 ("Kreisbahn braucht *a_r = ω² r* zum Mittelpunkt","Aus Vorlesung drei wissen wir: Auf einer Kreisbahn braucht ein Körper die Radialbeschleunigung omega Quadrat mal r. Das Minus in der Formel heißt nur: Sie zeigt zum Mittelpunkt.",[cam("full"),hl([25,180,900,40],c="y")]),
 ("Mit F = m a: *F_r = m ω² r* – die *Zentripetalkraft*","Mit dem Grundgesetz F gleich m a wird daraus eine Kraft, die zum Mittelpunkt zeigt: die Zentripetalkraft, m mal omega Quadrat mal r.",[hl([25,244,880,44],c="b"),box([22,303,200,30],c="r",at=.5)]),
 ("Beispiel 0,2 kg, r = 0,5 m, ω = 4 1/s → *F_r = 1,6 N*","Ein Beispiel: Eine Kugel mit zweihundert Gramm kreist an einem fünfzig Zentimeter langen Seil mit omega gleich vier pro Sekunde. Dann ist die Beschleunigung sechzehn mal null Komma fünf, also acht Meter pro Sekunde Quadrat, und die Kraft null Komma zwei mal acht gleich eins Komma sechs Newton. Dieses Beispiel kommt in Vorlesung fünf wieder.",[card("a<sub>r</sub> = ω²·r = 4² · 0,5 m/s² = <b>8 m/s²</b><br>F<sub>r</sub> = m·a<sub>r</sub> = 0,2 kg · 8 m/s² = <b>1,6 N</b>",1080,520,600,"Beispiel","ok")])])

on(6,14)
slide(6,14,"3. Axiom: actio = reactio",LA,[
 ("*F_12 = −F_21* – Kraft und Gegenkraft","Das dritte Axiom: Übt Körper eins auf Körper zwei die Kraft F eins zwei aus, wirkt Körper zwei mit F zwei eins zurück. Beide sind gleich groß und entgegengesetzt.",[cam("full"),hl([24,203,860,44],c="y"),box([22,262,250,30],c="r",at=.5)]),
 ("Achtung: Kraft und Gegenkraft wirken auf *verschiedene Körper* – sie heben sich *nicht* auf","Achtung, die fett gedruckte Zeile ist missverständlich. Kraft und Gegenkraft greifen an zwei verschiedenen Körpern an. Deshalb halten sie sich nicht im Gleichgewicht und heben sich nicht auf. Gleichgewicht gibt es nur zwischen Kräften am selben Körper. Vorlesung fünf sagt das ausdrücklich.",[strike(F("Kraft und Gegenkraft halten sich stets im Gleichgewicht.")),card("Kraft am Körper 2 + Gegenkraft am Körper 1<br>→ <b>verschiedene</b> Körper, kein Gleichgewicht<br>Gleichgewicht: Kräfte am <b>selben</b> Körper",1060,560,660,"Korrektur","warn")]),
 ("Welche „Kraft“ und welche „Gegenkraft“ ist: *egal*","Welche der beiden man Kraft und welche Gegenkraft nennt, ist egal. Sie sind gleichberechtigt.",[clear(),hl([24,351,880,46],c="g")])])

on(6,15)
slide(6,15,"Wechselwirkung",LA,[
 ("Immer *zwei Körper*: Kräfte sind *Wechselwirkungen*","An jeder Kraft sind immer zwei Körper beteiligt. Sie stehen in Wechselwirkung. Eine einzelne Kraft ist nur die Hälfte davon.",[cam("full"),hl([24,200,880,46],c="y"),hl("Die Kraft stellt nur eine einseitige Wirkung und somit auch nur die Hälfte der Wechselwirkung dar.",c="b",at=.5)]),
 ("Beispiel: Buch auf Tisch · Rakete stößt Gas aus","Zwei Beispiele: Ein Buch drückt auf den Tisch, der Tisch drückt das Buch nach oben. Eine Rakete drückt die Abgase nach hinten, die Abgase drücken die Rakete nach vorn. So fliegt sie auch im leeren Weltall.",[hl([24,351,880,46],c="g"),card("Buch → Tisch nach unten · Tisch → Buch nach oben<br>Rakete → Gas nach hinten · Gas → Rakete nach vorn",1040,600,680,"Beispiele")])])

on(6,17)
slide(6,17,"Inertialsysteme",LA,[
 ("*Inertialsystem*: kräftefreier Körper ruht oder bewegt sich gleichförmig","Das erste Axiom gilt nicht in jedem Bezugssystem. Ein Inertialsystem ist ein Bezugssystem, in dem ein kräftefreier Körper ruht oder sich gleichförmig geradeaus bewegt.",[cam("full"),hl([24,197,340,86],c="y")]),
 ("System B fährt mit *v_BA = const* → auch ein Inertialsystem","Das Bild kennst du aus Vorlesung drei: B bewegt sich mit konstanter Geschwindigkeit gegenüber A. Dann messen beide dieselbe Beschleunigung. Ist P kräftefrei, ist sie für beide null. Also sind beide Inertialsysteme.",[cam([360,170,560,310]),box([718,293,145,28],c="g"),anim("ring",x=470,y=302,r=14,c="b",at=.3)]),
 ("In Inertialsystemen *keine Scheinkräfte* (z. B. Fliehkraft)","In Inertialsystemen gelten die Newtonschen Axiome ohne Zusatz. Es tauchen keine Scheinkräfte auf. Die Fliehkraft, die du im Karussell spürst, gibt es nur im mitdrehenden, also beschleunigten System.",[cam("full"),hl([24,305,320,86],c="o")])])

on(6,18)
slide(6,18,"Impuls eines Teilchens",LA,[
 ("*p = m · v* · Einheit *kg·m/s*","Hier noch einmal der Impuls: p gleich m mal v, Einheit Kilogramm mal Meter pro Sekunde.",[cam("full"),box([552,150,96,34],c="b"),box([555,196,145,50],c="b",at=.3)]),
 ("m konstant: *ṗ = m · a* – Einheit kg·m/s² (Folie: [p] statt [ṗ])","Bei konstanter Masse ist die Ableitung des Impulses Masse mal Beschleunigung. Die untere Einheit gehört zu p Punkt, auf der Folie steht versehentlich nur p.",[box([555,343,255,34],c="r"),box([555,383,145,62],c="r",at=.4),note(720,425,"gemeint: [ṗ]",c="r",fs=14,at=.6)]),
 ("Ohne äußere Kräfte: *Gesamtimpuls bleibt erhalten*","Der Text links meint: Wirken keine äußeren Kräfte, heben sich die inneren Kräfte paarweise auf, wegen actio gleich reactio. Dann bleibt der Gesamtimpuls konstant. Das ist die Impulserhaltung.",[hl(U(F("Die Änderung des Impulses eines Körpers mit der Zeit"),F("große, aber entgegengesetzt wirkende Kraft geben."),m=1),c="y"),card("keine äußere Kraft → innere Kräfte paarweise F und −F<br>→ Σ p = <b>konstant</b> (Impulserhaltung)",160,600,660,"Gemeint")])])

on(6,19)
slide(6,19,"2. Axiom mit mehreren Kräften",LA,[
 ("Mehrere Kräfte → *Vektorsumme* F_res","Wirken mehrere Kräfte, zählt nur ihre Vektorsumme, die resultierende Kraft. Im Bild ergeben F eins und F zwei zusammen die rote Kraft F res.",[cam([160,140,600,280]),anim("ring",x=243,y=373,r=22,c="r")]),
 ("*ṗ = m a = F_res* · [F] = kg·m/s² = *N*","Das zweite Axiom lautet dann: p Punkt gleich m mal a gleich F res. Die Beschleunigung zeigt also in Richtung der resultierenden Kraft.",[cam("full"),box([388,308,375,80],c="r"),box([368,425,260,30],c="b",at=.5)])])

on(6,20)
slide(6,20,"Masse vergleichen",LA,[
 ("a ~ F und *a ~ 1/m*","Die Beschleunigung ist proportional zur Kraft und umgekehrt proportional zur Masse. Je größer die Masse, desto größer die Trägheit.",[cam("full"),hl(U(F("Die Beschleunigung ist dabei direkt proportional"),F("Körpers."),m=1),c="y")]),
 ("Gleiche Kraft: *m_1 / m_2 = a_2 / a_1*","Wirkt dieselbe Kraft auf zwei Körper, verhalten sich die Massen umgekehrt wie die Beschleunigungen. So kann man Massen vergleichen, ohne sie zu wiegen.",[box([478,232,445,186],c="b")]),
 ("Beispiel F = 10 N: 2 kg → *5 m/s²*, 5 kg → *2 m/s²*","Beispiel: Zehn Newton auf zwei Kilogramm ergeben fünf Meter pro Sekunde Quadrat, auf fünf Kilogramm nur zwei. Probe: zwei durch fünf ist gleich zwei durch fünf.",[card("a<sub>1</sub> = 10 N / 2 kg = <b>5 m/s²</b> · a<sub>2</sub> = 10 N / 5 kg = <b>2 m/s²</b><br>m<sub>1</sub>/m<sub>2</sub> = 2/5 = a<sub>2</sub>/a<sub>1</sub> = 2/5 ✓",160,600,700,"Beispiel","ok")])])

on(6,21)
slide(6,21,"actio = reactio im Bild",LA,[
 ("*F_AB = −F_BA* – gleich groß, entgegengesetzt","Das Bild zeigt das dritte Axiom: A zieht B an, B zieht A gleich stark zurück. F A B gleich minus F B A.",[cam([400,180,520,240]),box([541,348,196,80],c="r"),anim("ring",x=548,y=292,r=20,c="b",at=.3),anim("ring",x=746,y=292,r=20,c="b",at=.4)]),
 ("Gleiche Kraft, *verschiedene Beschleunigung*: 100 N auf 50 kg und 80 kg","Gleiche Kräfte heißt aber nicht gleiche Wirkung. Zwei Eisläufer stoßen sich mit hundert Newton ab. Der mit fünfzig Kilogramm wird mit zwei Meter pro Sekunde Quadrat beschleunigt, der mit achtzig Kilogramm nur mit eins Komma zwei fünf.",[card("A: a = 100 N / 50 kg = <b>2 m/s²</b><br>B: a = 100 N / 80 kg = <b>1,25 m/s²</b>",160,560,560,"Beispiel","ok")]),
 ("Vorlesung 4 geschafft – weiter mit den *Kraftgesetzen*","Damit hast du die Grundgesetze. In Vorlesung fünf geht es darum, welche Kräfte es konkret gibt: Gravitation, Normalkraft, Reibung, Luftwiderstand und Seilkraft.",[cam("full")])])

write("t4","Teil 4")
