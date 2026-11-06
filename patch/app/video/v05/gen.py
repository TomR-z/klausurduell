# Lernvideo 05 – Baukonstruktion Übung 2 Lastannahmen II (quer) – schreibt script.py und spec.js
import json
SC=[]
def scene(title,kind,strip,sents,data=None): SC.append((title,kind,strip,data or {},sents))
STRIPS={
 "b3":"<b>Beispiel 3</b> · Holzbalkendecke zwischen zwei Wohnräumen · Balken C24 8/16 cm, Abstand e = 60 cm · Trockenestrich 4 cm · Trittschalldämmung 3 cm · Spanplatte 24 mm · Faserdämmstoff 5 cm (zwischen den Balken) · Ausgleichslattung · Gipskarton 1,5 cm · <b>gesucht:</b> g und q pro Balken",
 "b4":"<b>Beispiel 4</b> · Sparren eines Pfettendachs · α = 35° · Sparren 10/20 NH C24, e = 65 cm · Lattung C24 2,4/4,8 cm · Dachstuhl ausgebaut · First 8 m über GOK · Aachen, 200 m ü. NN · Grundriss 1,20 + 3,50 + 3,50 + 1,20 m, Länge 6,00 m · <b>gesucht:</b> g, s, w, Q pro Sparren",
 "sk":"<b>Sicherheitskonzept</b> · Wie werden aus den Lasten Bemessungswerte?",
}
STMT={
 "b3":"<div class='bigq'><p><b>Beispiel 3:</b> Lastannahmen „Holzbalkendecke“ zwischen zwei Wohnräumen</p><p style='font-size:31px'>{{K0}}Holzbalken C24, b/h = 8/16 cm, Balkenabstand e = 60 cm{{/K}}</p><table class='qt'><tr><th>Schicht (von oben)</th><th>Dicke</th></tr><tr><td>Trockenestrich</td><td>4 cm</td></tr><tr><td>Trittschalldämmung</td><td>3 cm</td></tr><tr><td>Spanplatte</td><td>24 mm</td></tr><tr><td>{{K1}}Faserdämmstoff (zwischen den Balken){{/K}}</td><td>5 cm</td></tr><tr><td>Ausgleichslattung</td><td>–</td></tr><tr><td>Gipskartonplatte</td><td>1,5 cm</td></tr></table><p style='font-size:31px'>{{K2}}Gesucht: Eigengewicht g<sub>k</sub> und Nutzlast q<sub>k</sub> pro Balken{{/K}}</p></div>",
 "b4":"<div class='bigq' style='font-size:30px'><p><b>Beispiel 4:</b> Lastannahmen für die Sparren eines Pfettendachs</p><table class='qt' style='font-size:27px'><tr><th>Gegeben</th><th>Dachaufbau (von oben)</th></tr><tr><td>{{K0}}Dachneigung α = 35°{{/K}}</td><td>Betondachstein, tiefliegender Längsfalz, bis 10 St./m²</td></tr><tr><td>{{K0}}Sparren 10/20 NH C24, e = 65 cm{{/K}}</td><td>Dachlattung · Konterlattung</td></tr><tr><td>Lattung NH C24, b = 4,8 cm</td><td>Unterspannbahn</td></tr><tr><td>Dachstuhl komplett ausgebaut</td><td>Wärmedämmung 20 cm</td></tr><tr><td>{{K1}}Firsthöhe 8 m über GOK{{/K}}</td><td>Dampfsperre (1 Lage)</td></tr><tr><td>{{K1}}Standort Aachen, 200 m ü. NN{{/K}}</td><td>Ausgleichslattung</td></tr><tr><td>Grundriss 1,20 + 3,50 + 3,50 + 1,20 m · Länge 6,00 m</td><td>Gipskartonplatte 1,5 cm</td></tr></table><p>{{K2}}Gesucht: Eigengewicht, Schnee, Wind und Personenlast pro Sparren – und das Lastbild{{/K}}</p></div>",
}

scene("Übung 2: Lastannahmen II","intro",None,[
 ("Übung 2: Welche *Lasten* bekommt ein einzelner Balken?","In Übung zwei geht es um Lastannahmen: Welche Lasten bekommt ein einzelner Balken oder Sparren?",None),
 ("Beispiel 3: *Holzbalkendecke* · Beispiel 4: *Sparren* eines Pfettendachs","Dazu gibt es zwei Beispiele: eine Holzbalkendecke zwischen zwei Wohnräumen und die Sparren eines Pfettendachs.",None),
 ("Jede Zahl mit *Quelle*: Aufgabe, Schneider-Tafel oder Rechnung.","Zu jeder Zahl siehst du, woher sie kommt: aus der Aufgabe, aus einer Tafel im Schneider, oder aus einem Rechenschritt davor.",None),
 ("Die *Aufgabenstellung* bleibt immer oben stehen.","Die Aufgabenstellung bleibt dabei immer oben eingeblendet.",None)])
scene("Der Rechenweg in drei Schritten","plan",None,[
 ("① Jede Schicht: *γ · d* = Flächenlast in kN/m²","Erster Schritt: Für jede Schicht rechnest du Wichte mal Dicke. Das ergibt eine Flächenlast in Kilonewton pro Quadratmeter.",None),
 ("② Summe mal *Einzugsbreite e* = Linienlast in kN/m","Zweiter Schritt: Die Summe aller Schichten mal die Einzugsbreite. Jeder Balken trägt genau den Streifen, der zu ihm gehört, also so breit wie der Balkenabstand e.",None),
 ("Warum mal e? *kN/m² · m = kN/m* – der Balken ist eine Linie.","Warum mal e? Quadratmeter mal Meter ergibt pro Meter. Der Balken ist für die Statik eine Linie, also braucht er eine Linienlast.",None),
 ("③ Dazu das *Eigengewicht des Balkens*: γ · b · h","Dritter Schritt: Das Eigengewicht des Balkens selbst kommt noch dazu: Wichte mal Breite mal Höhe. Das ist schon eine Linienlast.",None)])

# ---------- Beispiel 3 ----------
scene("Beispiel 3: die Aufgabenstellung","stmt","b3",[
 ("Holzbalken *C24, 8/16 cm*, alle *60 cm* ein Balken.","Beispiel drei: eine Holzbalkendecke. Die Balken sind aus Nadelholz C vierundzwanzig, acht mal sechzehn Zentimeter, und liegen alle sechzig Zentimeter.",None),
 ("Sechs Schichten – der *Faserdämmstoff* liegt nur *zwischen* den Balken.","Darauf und darunter liegt ein Aufbau aus sechs Schichten. Achtung: Der Faserdämmstoff liegt nur zwischen den Balken, nicht durchgehend.",None),
 ("Gesucht: *g_k* und *q_k* pro Balken.","Gesucht sind das Eigengewicht und die Nutzlast pro Balken.",None)],{"html":STMT["b3"]})
scene("Beispiel 3 · Eigengewicht der Schichten","b3lay","b3",[
 ("Trockenestrich: *0,22* kN/m² pro cm · *4 cm* = *0,88 kN/m²*","Für jede Schicht steht im Schneider ein Gewicht pro Zentimeter Dicke. Trockenestrich: null Komma zwei zwei Kilonewton pro Quadratmeter und Zentimeter, mal vier Zentimeter. Das sind null Komma acht acht.",None),
 ("Trittschalldämmung: *0,01* · *3 cm* = *0,03 kN/m²*","Trittschalldämmung: null Komma null eins mal drei Zentimeter, also null Komma null drei.",None),
 ("Spanplatte: Wichte *8 kN/m³* · *0,024 m* = *0,192 kN/m²*","Bei der Spanplatte steht eine Wichte in Kilonewton pro Kubikmeter: acht. Deshalb musst du die Dicke in Meter einsetzen: acht mal null Komma null zwei vier gleich null Komma eins neun zwei.",None),
 ("Ausgleichslattung: *Zuschlag geschätzt* = *0,1 kN/m²*","Für die Ausgleichslattung nimmt die Übung einfach einen geschätzten Zuschlag von null Komma eins.",None),
 ("Gipskarton: *0,09* · *1,5 cm* = *0,135 kN/m²*","Gipskarton: null Komma null neun mal eins Komma fünf Zentimeter gleich null Komma eins drei fünf.",None),
 ("Σ = 0,88 + 0,03 + 0,192 + 0,1 + 0,135 = *1,337 kN/m²*","Zusammen ergibt das eins Komma drei drei sieben Kilonewton pro Quadratmeter. Das ist das Gewicht der durchgehenden Schichten.",None)])
scene("Beispiel 3 · Balken und Dämmstreifen","b3bal","b3",[
 ("Holzbalken: *4,2 kN/m³* · *0,16 m* · *0,08 m* = *0,054 kN/m*","Jetzt der Balken selbst. Für C vierundzwanzig steht im Schneider die Wichte vier Komma zwei. Mal Höhe null Komma eins sechs, mal Breite null Komma null acht Meter. Das ergibt null Komma null fünf vier Kilonewton pro Meter.",None),
 ("Faserdämmstoff liegt *nicht durchgehend* → eigene Rechnung","Der Faserdämmstoff liegt nicht durchgehend, deshalb rechnet die Übung ihn extra, Stück für Stück.",None),
 ("Blau: 2 Seitenstreifen · *0,11 m* hoch · *5 cm · 0,01* = *0,011 kN/m*","Blau sind die zwei Streifen links und rechts am Balken: je null Komma eins eins Meter hoch, fünf Zentimeter dick, mal null Komma null eins pro Zentimeter. Zusammen null Komma null eins eins Kilonewton pro Meter.",None),
 ("Grün: Streifen unten · (0,6 − 0,08) m · *5 cm · 0,01* = *0,026 kN/m*","Grün ist der Streifen unten zwischen den Balken. Seine Breite ist der Abstand null Komma sechs minus die Balkenbreite null Komma null acht. Mal null Komma null fünf ergibt null Komma null zwei sechs.",None)])
scene("Beispiel 3 · Eigengewicht pro Balken","b3sum","b3",[
 ("g = *1,337* · *0,6 m* + *0,054* + *0,011* + *0,026*","Jetzt alles zusammen. Die Flächenlast eins Komma drei drei sieben mal die Einzugsbreite null Komma sechs, plus Balken, plus die beiden Dämmstreifen.",None),
 ("1,337 · 0,6 = *0,802* → 0,802 + 0,054 + 0,011 + 0,026 = *0,893*","Eins Komma drei drei sieben mal null Komma sechs ist null Komma acht null zwei. Plus null Komma null fünf vier, plus null Komma null eins eins, plus null Komma null zwei sechs, ergibt null Komma acht neun drei.",None),
 ("→ *g_k,Balken = 0,89 kN/m*","Gerundet: null Komma acht neun Kilonewton pro Meter Balken.",None)])
scene("Beispiel 3 · Nutzlast: welche Kategorie?","b3nutz","b3",[
 ("Wohnraum → Kategorie *A* (SBT 24 S. 3.20 · 27. Aufl. S. 3.19 f.)","Jetzt die Nutzlast. In der Tafel für Nutzlasten im Schneider gehört ein Wohnraum zur Kategorie A.",None),
 ("A2 oder A3? Entscheidend: *Querverteilung* der Decke","Innerhalb von A gibt es A zwei und A drei. Der Unterschied ist die Querverteilung der Decke.",None),
 ("Stahlbetonplatte *verteilt* quer · Holzbalken trägt *nur in seiner Achse*","Eine Stahlbetonplatte verteilt eine Last auch zur Seite, die Nachbarbereiche helfen mit. Bei einer Holzbalkendecke trägt nur der Balken unter der Last, die Nachbarbalken helfen nicht.",None),
 ("Holzbalkendecke → *A3*: *q_k = 2,0 kN/m²* · *Q_k = 1,0 kN*","Deshalb ist die Holzbalkendecke Kategorie A drei: zwei Kilonewton pro Quadratmeter verteilt, und zusätzlich eine Einzellast von einem Kilonewton an der ungünstigsten Stelle.",None)])
scene("Beispiel 3 · Trennwände und Nutzlast pro Balken","b3q","b3",[
 ("Leichte Trennwände 3 < g ≤ 5 kN/m → Zuschlag *Δq = 1,2 kN/m²* (SBT 24 S. 3.19)","Dazu kommt ein Zuschlag für leichte Trennwände. Die Übung nimmt Wände mit drei bis fünf Kilonewton pro Meter an. Laut Schneider gibt das einen Zuschlag von eins Komma zwei Kilonewton pro Quadratmeter.",None),
 ("q_k,ges = *2,0* + *1,2* = 3,2 kN/m² → · *0,60 m* = *1,92 kN/m*","Zusammen drei Komma zwei Kilonewton pro Quadratmeter. Mal die Einzugsbreite null Komma sechs ergibt eins Komma neun zwei Kilonewton pro Meter Balken.",None),
 ("Für Bauteile *darunter*: 2,0 − 0,5 = *1,5* → (1,5 + 1,2) · 0,6 = *1,62 kN/m*","Fußnote zwei der Tafel: Für die Bauteile darunter, also für Weiterleitung, darf man null Komma fünf abziehen. Dann sind es eins Komma fünf plus eins Komma zwei mal null Komma sechs, also eins Komma sechs zwei. Für den Balken selbst bleibt es bei eins Komma neun zwei.",None)])
scene("Beispiel 3 · Ergebnis","b3res","b3",[
 ("Eigengewicht *g_k = 0,89 kN/m* pro Balken","Das Ergebnis von Beispiel drei: Eigengewicht null Komma acht neun Kilonewton pro Meter Balken.",None),
 ("Nutzlast *q_k = 1,92 kN/m* + Einzellast *Q_k = 1,0 kN*","Nutzlast eins Komma neun zwei Kilonewton pro Meter, und dazu die Einzellast von einem Kilonewton an der ungünstigsten Stelle.",None)])

# ---------- Beispiel 4 ----------
scene("Beispiel 4: die Aufgabenstellung","stmt","b4",[
 ("Pfettendach, *35°* · Sparren *10/20*, alle *65 cm*","Beispiel vier: die Sparren eines Pfettendachs. Das Dach ist fünfunddreißig Grad steil, die Sparren sind zehn mal zwanzig Zentimeter und liegen alle fünfundsechzig Zentimeter.",None),
 ("Für Schnee und Wind wichtig: *First 8 m*, *Aachen*, *200 m ü. NN*","Für Schnee und Wind brauchst du den Standort Aachen, zweihundert Meter über Normalnull, und die Firsthöhe von acht Metern.",None),
 ("Gesucht: *vier Lastarten* pro Sparren – und das *Lastbild*","Gesucht sind vier Lastarten pro Sparren: Eigengewicht, Schnee, Wind und Personenlast. Am Ende zeichnen wir das Lastbild.",None)],{"html":STMT["b4"]})
scene("Beispiel 4 · die Geometrie","b4geo","b4",[
 ("Sparren liegt auf *Fußpfette* und *Firstpfette* – Kragarm *1,20 m*","Jeder Sparren liegt unten auf der Fußpfette und oben auf der Firstpfette. Über die Fußpfette ragt er noch eins Komma zwei Meter als Kragarm hinaus.",None),
 ("Höhen: 3,50 · tan 35° = *2,45 m* · 1,20 · tan 35° = *0,84 m*","Die Höhen folgen aus dem Winkel: drei Komma fünf mal Tangens fünfunddreißig Grad sind zwei Komma vier fünf Meter, beim Kragarm eins Komma zwei mal Tangens fünfunddreißig, also null Komma acht vier.",None),
 ("Einzugsbreite = Sparrenabstand *e = 65 cm*","Jeder Sparren trägt einen Streifen von fünfundsechzig Zentimetern Breite. Das ist seine Einzugsbreite.",None)])
scene("Beispiel 4 · Eigengewicht der Schichten","b4lay","b4",[
 ("Betondachstein (tiefliegender Längsfalz, ≤ 10 St./m²): *0,60 kN/m²* (SBT 24 S. 3.13)","Jetzt die Schichten. Betondachstein mit tiefliegendem Längsfalz, bis zehn Stück pro Quadratmeter: Laut Tafel null Komma sechs Kilonewton pro Quadratmeter.",None),
 ("Unterspannbahn: *0,02 kN/m²* (SBT 24 S. 3.14)","Die Unterspannbahn: null Komma null zwei.",None),
 ("Wärmedämmung: *0,01* · *20 cm* = *0,20 kN/m²* – sichere Seite: *durchgängig*","Wärmedämmung: null Komma null eins pro Zentimeter mal zwanzig Zentimeter, also null Komma zwei. Auf der sicheren Seite rechnet man sie durchgängig, obwohl dort eigentlich auch Sparren sind.",None),
 ("Dampfsperre (1 Lage): *0,07 kN/m²* (SBT 24 S. 3.14)","Die Dampfsperre, eine Lage: null Komma null sieben.",None),
 ("Gipskarton: *0,09* · *1,5 cm* = *0,14 kN/m²* (SBT 24 S. 3.10)","Und der Gipskarton wie im ersten Beispiel: null Komma null neun mal eins Komma fünf, gerundet null Komma eins vier.",None)])
scene("Beispiel 4 · die Lattung","b4latt","b4",[
 ("Latten sind *Linien*, keine Fläche → in *kN/m²* umrechnen","Die Lattung ist anders: Latten sind schmale Stäbe, keine Fläche. Deshalb rechnest du sie erst in eine Flächenlast um.",None),
 ("Eine Latte: *4,2* · *0,024 m* · *0,048 m* = 0,00484 kN/m","Eine Latte wiegt Wichte mal Querschnitt: vier Komma zwei mal null Komma null zwei vier mal null Komma null vier acht. Das sind null Komma null null vier acht vier Kilonewton pro Meter.",None),
 ("Pro Fläche: ÷ Abstand *0,65 m* = 0,0074 kN/m²","Liegt alle fünfundsechzig Zentimeter eine Latte, teilt man durch null Komma sechs fünf. Das gibt die Last pro Quadratmeter.",None),
 ("*3 Lagen* (Dach-, Konter-, Ausgleichslattung): · 3 = *0,02 kN/m²*","Es gibt drei Lagen Latten: Dachlattung, Konterlattung und Ausgleichslattung. Mal drei ergibt etwa null Komma null zwei. Die Übung rechnet vereinfacht für alle Lagen mit fünfundsechzig Zentimetern Abstand.",None)])
scene("Beispiel 4 · Eigengewicht pro Sparren","b4sum","b4",[
 ("Σ = 0,60 + 0,02 + 0,20 + 0,07 + 0,02 + 0,14 = *1,05 kN/m²*","Alle Schichten zusammen: eins Komma null fünf Kilonewton pro Quadratmeter.",None),
 ("Sparren: *4,2* · *0,10 m* · *0,20 m* = *0,084 kN/m*","Der Sparren selbst: vier Komma zwei mal null Komma eins mal null Komma zwei, also null Komma null acht vier.",None),
 ("g = *1,05* · *0,65* + *0,084* = 0,683 + 0,084 = *0,77 kN/m*","Pro Sparren: eins Komma null fünf mal null Komma sechs fünf ist null Komma sechs acht drei. Plus null Komma null acht vier ergibt null Komma sieben sieben Kilonewton pro Meter.",None),
 ("Achtung: g gilt *pro Meter Dachfläche* (schräg)","Wichtig für später: Dieses g gilt pro Meter entlang der schrägen Dachfläche.",None)])
scene("Beispiel 4 · Schnee auf dem Boden","b4sk","b4",[
 ("Aachen liegt in *Schneelastzone 2* (Karte SBT 24 S. 3.53)","Jetzt der Schnee. Zuerst die Schneelast auf dem Boden. In der Schneelastkarte liegt Aachen in Zone zwei.",None),
 ("Zone 2: s_k = 0,25 + 1,91 · ((*A* + 140) / 760)² ≥ *0,85*","Für Zone zwei steht in der Tafel eine Formel mit der Geländehöhe A, und ein Mindestwert von null Komma acht fünf.",None),
 ("(200 + 140) / 760 = 0,447 → ² = 0,200 → · 1,91 = 0,382 → + 0,25 = *0,63*","Mit A gleich zweihundert: zweihundert plus hundertvierzig ist dreihundertvierzig, durch siebenhundertsechzig gibt null Komma vier vier sieben. Zum Quadrat null Komma zwei. Mal eins Komma neun eins ist null Komma drei acht zwei, plus null Komma zwei fünf ergibt null Komma sechs drei.",None),
 ("0,63 < 0,85 → der *Mindestwert* gilt: *s_k = 0,85 kN/m²*","Null Komma sechs drei ist kleiner als der Mindestwert. Also gilt der Mindestwert: null Komma acht fünf Kilonewton pro Quadratmeter.",None)])
scene("Beispiel 4 · Schnee auf dem Dach","b4s","b4",[
 ("Satteldach, 30° < α < 60°: *μ = 0,8 · (60° − α) / 30°* (SBT 24 S. 3.54)","Auf dem Dach bleibt weniger Schnee liegen, je steiler es ist. Dafür gibt es den Formbeiwert mü. Für ein Satteldach zwischen dreißig und sechzig Grad gilt: null Komma acht mal sechzig minus alpha, durch dreißig.",None),
 ("μ = 0,8 · (60 − *35*) / 30 = 0,8 · 25 / 30 = *0,67*","Mit fünfunddreißig Grad: sechzig minus fünfunddreißig sind fünfundzwanzig, durch dreißig, mal null Komma acht. Das ergibt null Komma sechs sieben.",None),
 ("s = *μ* · C_e · C_t · *s_k* = 0,67 · 1,0 · 1,0 · 0,85 = *0,57 kN/m²*","Die Schneelast auf dem Dach ist mü mal s k. Die Beiwerte C e und C t sind hier eins. Also null Komma sechs sieben mal null Komma acht fünf gleich null Komma fünf sieben.",None),
 ("pro Sparren: s₁ = 0,57 · *0,65* = *0,37 kN/m* – pro Meter *Grundfläche*","Mal die Einzugsbreite ergibt null Komma drei sieben Kilonewton pro Meter. Achtung: Schnee bezieht sich auf die waagerechte Grundfläche, nicht auf die schräge Dachfläche.",None)])
scene("Beispiel 4 · Schneeüberhang an der Traufe","b4se","b4",[
 ("An der Traufe hängt Schnee *über* → Linienlast *S_e* (SBT 24 S. 3.57)","An der Traufe kann Schnee über die Dachkante hängen. Das ist eine Linienlast entlang der Traufe.",None),
 ("S_e = k · s² / γ = *0,4* · *0,57*² / *3* = *0,043 kN/m*","Die Formel: k mal s zum Quadrat durch gamma. k ist null Komma vier, s ist die Dachschneelast null Komma fünf sieben, und gamma ist die Wichte von Schnee, drei Kilonewton pro Kubikmeter. Das ergibt null Komma null vier drei.",None),
 ("pro Sparren: F_S = 0,043 · *0,65* = *0,03 kN* – Einzellast am Sparrenende","Jeder Sparren bekommt davon seinen fünfundsechzig Zentimeter breiten Anteil: null Komma null drei Kilonewton, als Einzellast ganz außen am Sparrenende.",None)])
scene("Beispiel 4 · Wind: der Geschwindigkeitsdruck","b4qp","b4",[
 ("Winddruck auf eine Fläche: *w = c_pe · q_p*","Jetzt der Wind. Der Winddruck auf eine Fläche ist der Außendruckbeiwert c p e mal der Geschwindigkeitsdruck q p.",None),
 ("Aachen = *Windzone 2* · First *8 m ≤ 10 m* (SBT 24 S. 3.31)","Aachen liegt in Windzone zwei, Binnenland. Die Firsthöhe ist acht Meter, also höchstens zehn.",None),
 ("Vereinfachte Tafel: Zone 2, Binnenland, h ≤ 10 m → *q_p = 0,65 kN/m²*","In der vereinfachten Tafel für Bauwerke bis fünfundzwanzig Meter liest du ab: null Komma sechs fünf Kilonewton pro Quadratmeter.",None),
 ("Für den Sparren: *w = c_pe · 0,65 · 0,65 m*","Für den Sparren kommt wieder die Einzugsbreite dazu. Es fehlt also nur noch c p e.",None)])
scene("Beispiel 4 · Wind: die Bereiche auf dem Dach","b4zon","b4",[
 ("e = min(*b*; 2·*h*) = min(6 m; 2·8 m) = *6 m*","Das Dach wird in Bereiche eingeteilt. Ihr Maß ist e gleich das Minimum aus b und zweimal h. b ist die Breite quer zum Wind, sechs Meter. Zweimal die Firsthöhe sind sechzehn. Also ist e gleich sechs Meter.",None),
 ("Luvseite: *F* und *G* am Rand (Tiefe e/10 = 0,6 m), dahinter *H*","Auf der Luvseite, also dem Wind zugewandt, liegen am Rand die Bereiche F und G, null Komma sechs Meter tief. Dahinter bis zum First kommt H.",None),
 ("Leeseite: *J* hinter dem First (e/10 = 0,6 m), dann *I*","Auf der windabgewandten Leeseite kommt direkt hinter dem First der Streifen J, wieder null Komma sechs Meter, und dann I.",None),
 ("F ist e/4 = *1,5 m* breit, G liegt dazwischen.","F liegt an den Ecken und ist ein Viertel von e breit, also eins Komma fünf Meter. G liegt dazwischen. Hier haben F und G aber denselben Wert.",None)])
scene("Beispiel 4 · Wind: c_pe für 35° interpolieren","b4cpe","b4",[
 ("Die Tafel hat *30°* und *45°* – wir brauchen *35°* → interpolieren","Die Tafel der Außendruckbeiwerte hat Zeilen für dreißig und fünfundvierzig Grad. Unser Dach hat fünfunddreißig, also wird linear interpoliert.",None),
 ("c(35°) = c(30°) + *Δc / 15°* · *5°*","Die Formel: Wert bei dreißig Grad, plus die Änderung bis fünfundvierzig Grad geteilt durch fünfzehn Grad, mal die fünf Grad, die wir über dreißig liegen.",None),
 ("F, G: 0,7 → 0,7 → *0,7*","F und G haben bei beiden Winkeln plus null Komma sieben. Da gibt es nichts zu interpolieren.",None),
 ("H: 0,4 + (0,6 − 0,4)/15 · 5 = 0,4 + 0,067 = *0,47*","H geht von null Komma vier auf null Komma sechs, also um null Komma zwei. Ein Drittel davon, weil fünf von fünfzehn Grad: plus null Komma null sechs sieben. Ergibt null Komma vier sieben.",None),
 ("I: −0,4 + 0,2/15 · 5 = *−0,33* · J: −0,5 + 0,2/15 · 5 = *−0,43*","I geht von minus null Komma vier auf minus null Komma zwei, J von minus null Komma fünf auf minus null Komma drei. Mit demselben Drittel: minus null Komma drei drei und minus null Komma vier drei.",None),
 ("Plus = *Druck* aufs Dach · Minus = *Sog* weg vom Dach","Plus bedeutet Druck auf die Fläche, minus bedeutet Sog von der Fläche weg. Für F, G und H gibt es in der Tafel auch Sog-Werte. Die Übung rechnet hier den Druckfall.",None)])
scene("Beispiel 4 · Wind pro Sparren","b4w","b4",[
 ("q_p · e = *0,65* · *0,65 m* = 0,4225 kN/m","Für jeden Bereich gilt: c p e mal null Komma sechs fünf mal null Komma sechs fünf Meter. Das Produkt der letzten beiden ist null Komma vier zwei zwei fünf.",None),
 ("F/G: *0,7* · 0,4225 = *0,30 kN/m*","F und G: null Komma sieben mal null Komma vier zwei zwei fünf, das sind null Komma drei.",None),
 ("H: *0,47* · 0,4225 = *0,20 kN/m*","H: null Komma vier sieben mal das Gleiche, null Komma zwei.",None),
 ("I: *−0,33* · 0,4225 = *−0,14 kN/m* · J: *−0,43* · 0,4225 = *−0,18 kN/m*","I ergibt minus null Komma eins vier, und J minus null Komma eins acht. Beides ist Sog.",None)])
scene("Beispiel 4 · Wind unter dem Dachüberstand","b4de","b4",[
 ("Unterseite des Überstands = Wert der *Wand darunter* (D bzw. E)","Unter dem Dachüberstand drückt der Wind von unten. Dort gilt laut Schneider der Wert der Wand darunter: auf der Luvseite Bereich D, auf der Leeseite E.",None),
 ("b = 6 m < h = 8 m ≤ 2b = 12 m → *z_e = h = 8 m* (q konstant)","Für die Wand prüfst du zuerst die Höhe: Sechs ist kleiner als acht, und acht ist höchstens zwölf. Die Übung nimmt den Geschwindigkeitsdruck über die ganze Höhe gleich an.",None),
 ("h / d = 8 / *7* = 1,14 ≈ *1* (d = 2 · 3,5 m aus dem Grundriss)","Dann das Verhältnis h durch d. d ist die Gebäudetiefe: zweimal drei Komma fünf, also sieben Meter. Acht durch sieben ist eins Komma eins vier, also etwa eins.",None),
 ("Zeile h/d = 1: *D = +0,8* · *E = −0,5* (SBT 24 S. 3.35)","In der Zeile für h durch d gleich eins steht: D plus null Komma acht, E minus null Komma fünf.",None),
 ("w_D = 0,8 · 0,4225 = *0,34 kN/m* · w_E = −0,5 · 0,4225 = *−0,21 kN/m*","Mal null Komma vier zwei zwei fünf: w D gleich null Komma drei vier und w E gleich minus null Komma zwei eins.",None)])
scene("Beispiel 4 · Personenlast","b4Q","b4",[
 ("Nicht begehbares Dach → Kategorie *H* → *Q_k = 1 kN* (SBT 24 S. 3.23)","Die letzte Lastart: Bei einem nicht begehbaren Dach ist das Kategorie H. Für Wartung und Reparatur setzt man eine Einzellast von einem Kilonewton an.",None),
 ("Steht dort, wo es am *ungünstigsten* ist:","Diese Person steht immer dort, wo sie am meisten schadet.",None),
 ("Feldmitte → größtes *Feldmoment* · Kragarmende → größtes *Stützmoment*","In der Feldmitte macht sie das größte Feldmoment. Ganz außen am Kragarm macht sie das größte Moment über der Fußpfette.",None)])
scene("Beispiel 4 · das Lastbild","b4bild","b4",[
 ("*rot* Eigengewicht g = 0,77 · *blau* Schnee s = 0,37 · *grün* Wind","Jetzt alles in einem Bild: rot das Eigengewicht, blau der Schnee, grün der Wind.",None),
 ("g wirkt *senkrecht*, aber verteilt *entlang der Schräge*","Das Eigengewicht zeigt senkrecht nach unten, ist aber entlang der schrägen Dachfläche verteilt.",None),
 ("s wirkt senkrecht, verteilt auf die *Grundfläche* · w *rechtwinklig* zur Dachfläche","Der Schnee zeigt auch nach unten, ist aber auf die waagerechte Grundfläche bezogen. Und der Wind wirkt rechtwinklig auf die Dachfläche.",None),
 ("→ *drei verschiedene Bezugsflächen* – so nicht kombinierbar","Drei verschiedene Bezugsflächen: So kann man die Lasten nicht einfach addieren. Deshalb rechnet man um.",None)])
scene("Beispiel 4 · Umrechnen: Eigengewicht","b4gfl","b4",[
 ("Dachfläche *l′* ist länger als Grundfläche *l*: l′ = l / cos α","Die schräge Länge l strich ist länger als die waagerechte Länge l. Aus dem Dreieck: l strich gleich l durch Kosinus alpha.",None),
 ("Gleiche Gesamtlast: *g · l′* = *g_GFL · l*","Die Gesamtlast bleibt gleich, egal wie man sie beschreibt: g mal l strich ist gleich g auf der Grundfläche mal l.",None),
 ("Einsetzen: g · l / cos α = g_GFL · l → *g_GFL = g / cos α*","Setzt man l strich ein und kürzt l heraus, bleibt: g auf der Grundfläche ist g durch Kosinus alpha.",None),
 ("g_GFL = 0,77 / cos 35° = 0,77 / 0,819 = *0,94 kN/m*","Mit unseren Zahlen: null Komma sieben sieben durch null Komma acht eins neun ergibt null Komma neun vier Kilonewton pro Meter Grundfläche.",None)])
scene("Beispiel 4 · Umrechnen: Wind und Schnee","b4wfl","b4",[
 ("Wind auf l′: Resultierende *R = w · l′*, rechtwinklig zur Dachfläche","Beim Wind ist die Resultierende w mal l strich, und sie steht rechtwinklig auf der Dachfläche.",None),
 ("senkrecht: R · cos α = w · l′ · cos α = *w · l* → *w_GFL = w*","Der senkrechte Anteil ist R mal Kosinus alpha. Weil l strich mal Kosinus alpha genau l ist, wird daraus w mal l. Auf der Grundfläche gilt also derselbe Wert w.",None),
 ("waagerecht: R · sin α = w · l′ · sin α = *w · h* → *w_AFL = w*","Der waagerechte Anteil ist R mal Sinus alpha, und l strich mal Sinus alpha ist die Höhe h. Auf der senkrechten Aufrissfläche gilt also auch w.",None),
 ("Wind: *Zahl bleibt*, nur aufgeteilt · Schnee: ist schon GFL → *bleibt*","Beim Wind bleibt die Zahl also gleich, sie wird nur in einen senkrechten und einen waagerechten Teil aufgeteilt. Der Schnee ist schon auf die Grundfläche bezogen und bleibt sowieso.",None)])
scene("Beispiel 4 · das umgerechnete Lastbild","b4alt","b4",[
 ("Senkrecht auf die Grundfläche: *g′ = 0,94* · *s = 0,37* · Wind senkrecht","Im neuen Lastbild wirkt alles Senkrechte auf die Grundfläche: g strich null Komma neun vier, Schnee null Komma drei sieben, und der senkrechte Teil vom Wind.",None),
 ("Am Überstand wirken *oben und unten* Lasten → Differenz","Am Dachüberstand wirkt der Wind von oben und von unten gleichzeitig. Dort zählt die Differenz.",None),
 ("Luv, Bereich F: w_D = *0,34* nach oben − w_F = *0,30* nach unten = *0,04 ↑*","Auf der Luvseite, im Bereich F: Von unten drückt w D mit null Komma drei vier nach oben, von oben w F mit null Komma drei nach unten. Bleiben null Komma null vier nach oben.",None),
 ("Luv, Rest Überstand (H): 0,34 − *0,20* = *0,14 ↑*","Im Rest des Überstands liegt oben schon Bereich H: null Komma drei vier minus null Komma zwei, also null Komma eins vier nach oben.",None),
 ("Lee: Sog oben w_I = *0,14 ↑* · Sog unten w_E = *0,21 ↓* → *0,07 ↓*","Auf der Leeseite ziehen beide: Oben zieht der Sog von I mit null Komma eins vier nach oben, unten zieht E mit null Komma zwei eins nach unten. Netto null Komma null sieben nach unten.",None)])
scene("Sicherheitskonzept: was danach kommt","sich","sk",[
 ("Charakteristische Werte *F_k* → Schnittgrößen *E_k*","Alles bisher sind charakteristische Werte, also die Lasten, wie sie realistisch auftreten. Daraus rechnet man die Schnittgrößen.",None),
 ("Bemessungswert: *E_d = γ_F · E_k* – auf der Folie steht hier γ_M, gemeint ist *γ_F*","Für die Bemessung werden sie mit einem Teilsicherheitsbeiwert vergrößert: E d gleich gamma F mal E k. Auf der Folie steht an dieser Stelle gamma M. Gemeint ist der Beiwert für Einwirkungen, gamma F.",None),
 ("Widerstand: *R_d = R_k / γ_M* · Nachweis *E_d ≤ R_d*","Der Widerstand wird durch gamma M kleiner gemacht. Der Nachweis lautet dann: E d höchstens R d.",None),
 ("GZT: *Sicherheit* (Bruch) · GZG: *Nutzung* (Durchbiegung, Schwingung)","Dabei gibt es zwei Grenzzustände: die Tragfähigkeit, wo Menschen gefährdet wären, und die Gebrauchstauglichkeit, wo nur die Nutzung leidet.",None),
 ("Übung 3 bemisst *genau diesen Sparren* weiter.","In Übung drei geht es mit genau diesem Sparren weiter: Lasten kombinieren und bemessen.",None)])
scene("Merke","merke",None,[
 ("1. Schicht: *γ · d* → Summe → *mal e* → plus Balken *γ · b · h*","Merke: Schichten mit Wichte mal Dicke, aufsummieren, mal Einzugsbreite, plus das Eigengewicht des Balkens.",None),
 ("2. Nutzlast: Kategorie aus der Tafel – *Querverteilung* entscheidet A2/A3.","Bei der Nutzlast die Kategorie aus der Tafel. Ob die Decke Lasten quer verteilt, entscheidet über A zwei oder A drei.",None),
 ("3. Schnee: s_k (Zone, Höhe, *Mindestwert*) · *μ* · e – bezogen auf die *Grundfläche*","Beim Schnee: s k aus Zone und Höhe, Mindestwert beachten, mal mü und mal e. Bezogen auf die Grundfläche.",None),
 ("4. Wind: *q_p* · *c_pe* (Bereich, interpolieren) · e – *rechtwinklig* zur Fläche","Beim Wind: q p mal c p e mal e, c p e je Bereich und bei Zwischenwinkeln interpoliert. Wind wirkt rechtwinklig zur Fläche.",None),
 ("5. Vor dem Kombinieren *umrechnen*: g / cos α · Wind bleibt · Schnee bleibt","Und vor dem Kombinieren alles auf dieselbe Bezugsfläche bringen: Eigengewicht durch Kosinus alpha, Wind und Schnee bleiben.",None)])
scene("Selbst üben","end",None,[
 ("Genau dieser Weg ist *Hausübung 1* (Dachtragwerk) – Abgabe bis *Mo 09.11.*","Genau dieser Rechenweg ist deine Hausübung eins zum Dachtragwerk. Sie läuft noch bis Montag, den neunten November.",None)])

S=[(t,[(c,sp) for c,sp,_ in ss]) for t,_,_,_,ss in SC]
open("script.py","w").write("# Lernvideo 05 – erzeugt von gen.py\nS = "+repr(S)+"\n")
SPEC=[{"kind":k,"strip":st,"data":d,"tags":[tg for _,_,tg in ss]} for _,k,st,d,ss in SC]
open("spec.js","w").write("window.SPEC="+json.dumps(SPEC,ensure_ascii=False)+";\nwindow.STRIPS="+json.dumps(STRIPS,ensure_ascii=False)+";\n")
print("Szenen",len(S),"Zeichen",sum(len(sp) for _,ss in S for _,sp in ss))
