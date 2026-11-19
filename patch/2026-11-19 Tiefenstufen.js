/* Klausurduell – Patch-Warteschlange 19.11.2026: Tiefenstufen (Tom: „Fragen nach Tiefe einstufen … von leicht zu schwer“)
   1 = Grundlagen (Begriffe, Definitionen), 2 = Verstehen (Zusammenhänge, Warum), 3 = Anwenden (Rechnen, Vorgehen, Übungsdetails).
   Alle 876 Fragen von Hand eingestuft. Neue Fragen später mit Object.assign(STUFE, {...}) ergänzen; ohne Eintrag gilt Stufe 2. */
const STUFE = {
  /* Hydromechanik */
  "hydro-znlhn0": 1,  // Eigenschaften des Wassers: Bei welcher Temperatur hat Wasser seine größte Dichte?
  "hydro-1it3854": 1,  // Eigenschaften des Wassers: Eis ist dichter als flüssiges Wasser.
  "hydro-rm7bue": 1,  // Eigenschaften des Wassers: Welche Dichte nimmst du für Süßwasser, wenn die Aufgabe nichts angibt?
  "hydro-i7fp7v": 2,  // Eigenschaften des Wassers: Welchen Dichtewert nimmt man in Aufgaben meist für Meerwasser?
  "hydro-st3tc5": 1,  // Eigenschaften des Wassers: In Hydromechanik I darf Wasser als inkompressibel angesehen werden.
  "hydro-ixgwqx": 1,  // Eigenschaften des Wassers: Was beschreibt die Viskosität?
  "hydro-18gphow": 1,  // Eigenschaften des Wassers: Ordne zu.
  "hydro-1my7un9": 1,  // Eigenschaften des Wassers: Je dünner ein Glasröhrchen, desto …
  "hydro-1kj9das": 2,  // Eigenschaften des Wassers: In welchem Boden ist der kapillare Aufstieg am größten?
  "hydro-1lut2t5": 1,  // Hydrostatik 1: Welche Spannungen kann ruhendes Wasser aufnehmen?
  "hydro-1aedhad": 1,  // Hydrostatik 1: Wie wächst der hydrostatische Druck mit der Tiefe?
  "hydro-xt7inu": 2,  // Hydrostatik 1: Wo greift die Wasserdruckkraft auf eine senkrechte Wand an?
  "hydro-1y6rqsj": 2,  // Hydrostatik 1: 10 m Wassersäule entsprechen ungefähr …
  "hydro-ilvrv8": 1,  // Hydrostatik 1: Ab welchem Bezugswert wird der Relativdruck gemessen?
  "hydro-1ijl9q2": 1,  // Hydrostatik 1: Der Wasserdruck steht immer senkrecht auf einer Fläche.
  "hydro-xuuxbp": 1,  // Hydrostatik 1: Öl über Wasser: Wie sieht der Druckverlauf an der Schichtgrenze aus?
  "hydro-15hgt78": 2,  // Hydrostatik 1: Goldene Regel bei kommunizierenden Röhren:
  "hydro-1lwzvdz": 3,  // Hydrostatik 1: Bring das Vorgehen beim U-Rohr-Manometer in die richtige Reihenfolge.
  "hydro-19jler": 2,  // Hydrostatik 1: Kraft auf eine beliebige ebene, geneigte Fläche:
  "hydro-13ujru0": 2,  // Hydrostatik 1: Gekrümmte Fläche: Was ist die vertikale Kraftkomponente F_V?
  "hydro-e9u7cq": 2,  // Hydrostatik 2: Auf welcher Seite dichtet man eine Gründungsfuge ab?
  "hydro-ex3mwj": 1,  // Hydrostatik 2: Prinzip des Archimedes: Der Auftrieb ist gleich …
  "hydro-51q3cc": 2,  // Hydrostatik 2: Ein vollständig getauchter Körper erfährt in größerer Tiefe mehr Auftr
  "hydro-cj8x2y": 2,  // Hydrostatik 2: Ein Schiff fährt vom Fluss ins Meer. Was passiert?
  "hydro-97cbqu": 2,  // Hydrostatik 2: Wenn schwimmendes Eis schmilzt, steigt der Wasserspiegel.
  "hydro-1gg4f1f": 3,  // Hydrostatik 2: Schwimmt der Körper – und wie tief? Bring die Schritte in die richtige
  "hydro-1o00p49": 3,  // Hydrostatik 2: Wägung in Luft und in Wasser: Wie bestimmst du die Dichte?
  "hydro-nfost0": 2,  // Hydrostatik 2: Ein Wasserbehälter wird nach oben beschleunigt. Was passiert mit dem D
  "hydro-di3hec": 3,  // Hydrostatik 2: Wie stellt sich der Wasserspiegel in einem beschleunigten Tankwagen ei
  "hydro-6t1skk": 1,  // Hydrostatik 2: Was ist der Freibord?
  /* Physik */
  "phys-o9b3vr": 1,  // Einheiten: Wie viele SI-Basiseinheiten gibt es?
  "phys-1id2kws": 1,  // Einheiten: Ordne die Größe ihrer SI-Basiseinheit zu.
  "phys-ud82sv": 1,  // Einheiten: Ordne den Vorsatz dem Faktor zu.
  "phys-1f7nlmc": 2,  // Einheiten: Wie viele signifikante Stellen hat 0,00340?
  "phys-2g2zee": 2,  // Einheiten: Wie schreibt man Variablen und Konstanten korrekt?
  "phys-48qm08": 1,  // Einheiten: Ein Diagramm ohne beschriftete Achsen gibt in Übung und Klausur trotzd
  "phys-1lk98g4": 1,  // Geradlinige Bewegung: Was ist die Geschwindigkeit mathematisch?
  "phys-srxy2e": 2,  // Geradlinige Bewegung: Was bedeutet die Fläche unter der v(t)-Kurve?
  "phys-y8fvi3": 1,  // Geradlinige Bewegung: Was zeigt die Steigung im x(t)-Diagramm?
  "phys-2j5sqv": 1,  // Geradlinige Bewegung: Ordne die Teilgebiete der Mechanik zu.
  "phys-f65lrm": 1,  // Geradlinige Bewegung: Welche Größe ist ein Skalar?
  "phys-f6ln5f": 3,  // Geradlinige Bewegung: Gleiche Strecken mit v₁ und v₂: Welche Durchschnittsgeschwindigkeit?
  "phys-172no65": 1,  // Vektoren: Was ergibt das Skalarprodukt zweier senkrechter Vektoren?
  "phys-15jes7s": 1,  // Vektoren: Was ist das Ergebnis eines Kreuzprodukts a × b?
  "phys-1ilc9ju": 2,  // Vektoren: Für das Kreuzprodukt gilt a × b = b × a.
  "phys-16zxk29": 2,  // Vektoren: Kreuzprodukt zweier paralleler oder antiparalleler Vektoren:
  "phys-p71035": 2,  // Vektoren: Du bestimmst einen Richtungswinkel mit arctan. Worauf musst du achten?
  "phys-18o9616": 3,  // Vektoren: Mit welcher Funktion bestimmst du den Winkel θ zur z-Achse?
  "phys-1w6izjb": 1,  // Bewegung in 2D/3D: Welche Beschleunigung wirkt beim Wurf ohne Luftwiderstand?
  "phys-tdkp2p": 1,  // Bewegung in 2D/3D: Beim schiefen Wurf ohne Luftwiderstand bleibt die horizontale Geschwin
  "phys-1l9rk00": 1,  // Bewegung in 2D/3D: Was gilt im Scheitelpunkt eines Wurfs?
  "phys-8boirg": 1,  // Bewegung in 2D/3D: Wohin zeigt die Beschleunigung bei gleichförmiger Kreisbewegung?
  "phys-cym280": 2,  // Bewegung in 2D/3D: Bei gleichförmiger Kreisbewegung ist die Beschleunigung null, weil |v|
  "phys-1cf32wh": 3,  // Bewegung in 2D/3D: Vorgehen bei einer Wurfaufgabe (wie Blatt 3): Bring die Schritte in Re
  /* Baustoffkunde */
  "bsk-8fmkhs": 1,  // Einteilung und Grundlagen: Ordne den Baustoff seiner Gruppe zu.
  "bsk-gt8pm2": 1,  // Einteilung und Grundlagen: Welches Bindemittel erhärtet auch unter Wasser?
  "bsk-b72vun": 1,  // Einteilung und Grundlagen: Gips ist wasserbeständig.
  "bsk-1mntta1": 1,  // Einteilung und Grundlagen: Was gehört NICHT zu den vier Kriterien, nach denen man Baustoffe beurt
  "bsk-1avb9ku": 1,  // Einteilung und Grundlagen: Vitruvs drei Anforderungen an jedes Bauwerk:
  "bsk-1etwl4g": 2,  // Einteilung und Grundlagen: Seit wann gibt es etwa Stahlbeton?
  "bsk-11q6gpm": 2,  // Einteilung und Grundlagen: Welche Einwirkung ist ein chemischer Angriff auf die Dauerhaftigkeit?
  "bsk-1u9wdgu": 1,  // Mechanische Eigenschaften: Ordne die Beanspruchung einem Bauteil zu.
  "bsk-2yna6f": 2,  // Mechanische Eigenschaften: Warum werden Balken hochkant eingebaut?
  "bsk-19xavjv": 1,  // Mechanische Eigenschaften: Welches Vorzeichen hat eine Druckspannung?
  "bsk-1x369fo": 2,  // Mechanische Eigenschaften: Mehrachsiger Druck auf ein Bauteil …
  "bsk-2w9wv5": 1,  // Mechanische Eigenschaften: Was bewirkt eine häufig wiederholte, schwingende Belastung?
  "bsk-22yqqh": 1,  // Mechanische Eigenschaften: Was ist die Steigung der σ-ε-Linie im linearen Bereich?
  "bsk-1wd3gvi": 1,  // Mechanische Eigenschaften: Elastisch bedeutet: Die Verformung geht bei Entlastung vollständig zur
  "bsk-f431yn": 2,  // Mechanische Eigenschaften: Ordne die Begriffe zu.
  "bsk-1q6qprz": 1,  // Mechanische Eigenschaften: Wie groß ist die Zugfestigkeit von Beton etwa?
  "bsk-1pbmsul": 1,  // Mechanische Eigenschaften: E-Modul von Baustahl:
  "bsk-13k7trg": 2,  // Mechanische Eigenschaften: Was bedeutet eine Querdehnzahl µ = 0,5?
  "bsk-1g5sk6t": 2,  // Mechanische Eigenschaften: Beton und Stahl dehnen sich bei Erwärmung fast gleich aus.
  "bsk-f7qqma": 2,  // Mechanische Eigenschaften: Wie verhält sich Baustahl bei Kälte im Kerbschlagversuch?
  "bsk-yshq77": 2,  // Mechanische Eigenschaften: Ordne den σ-ε-Typ einem Beispiel zu.
  "bsk-1h1mgnk": 3,  // Mechanische Eigenschaften: E-Modul aus einem σ-ε-Diagramm bestimmen: Reihenfolge?
  "bsk-1yw2ld2": 3,  // Mechanische Eigenschaften: Spannungsnachweis einer Stütze (wie Ü01): Reihenfolge?
  "bsk-18plyw2": 2,  // Physikalische Eigenschaften: Ordne die Dichten von groß nach klein.
  "bsk-103008u": 2,  // Physikalische Eigenschaften: Welcher Baustoff ist pro Kilogramm am zugfestesten?
  "bsk-1qnzdp5": 1,  // Physikalische Eigenschaften: Was ist die Porosität?
  /* Baukonstruktion */
  "bauko-mctp1e": 1,  // Sicherheitskonzept: Wie lautet der Grundnachweis im Sicherheitskonzept?
  "bauko-rzenis": 1,  // Sicherheitskonzept: Ordne zu.
  "bauko-17j0mws": 1,  // Sicherheitskonzept: Teilsicherheitsbeiwert γ_G für ständige Lasten, ungünstig:
  "bauko-1ux93gw": 1,  // Sicherheitskonzept: Teilsicherheitsbeiwert γ_Q für veränderliche Lasten, ungünstig:
  "bauko-11mh47e": 1,  // Sicherheitskonzept: Ordne die Einwirkungsgruppen zu.
  "bauko-hth9ye": 2,  // Sicherheitskonzept: Ein Fahrzeug prallt gegen eine Stütze. Welche Einwirkung ist das?
  "bauko-ererno": 2,  // Sicherheitskonzept: Rechen- und Ausführungsfehler sind durch die Teilsicherheitsbeiwerte a
  "bauko-145f6od": 2,  // Sicherheitskonzept: Ordne den Kombinationsbeiwert ψ₀ zu.
  "bauko-15fn0bl": 2,  // Sicherheitskonzept: Wie lautet die Grundkombination?
  "bauko-98wn6h": 1,  // Lasten: Welche Last ist eine veränderliche Einwirkung?
  "bauko-1q069cb": 2,  // Lasten: Wie wirken die Lasten auf einen Sparren?
  "bauko-zfmokj": 2,  // Lasten: Wie rechnest du das Eigengewicht eines geneigten Sparrens auf die Grun
  "bauko-1c4tkbo": 1,  // Lasten: Wie groß ist die Einzugsbreite gleichmäßig verteilter Sparren?
  "bauko-afvv76": 1,  // Lasten: Welches Vorzeichen hat Windsog?
  "bauko-9asphl": 2,  // Lasten: Wie bestimmt man das Maß e für die Windbereiche F, G, H, J, I?
  "bauko-1das95b": 1,  // Lasten: Wie groß ist die Mannlast auf dem Dach?
  "bauko-1068ry9": 2,  // Lasten: Schneeformbeiwert μ₁ bei einer Dachneigung ab 60°:
  "bauko-vl4hbi": 2,  // Lasten: Wichten zum Auswendigkönnen:
  "bauko-pmhn93": 2,  // Lasten: Schnee und Eigengewicht addiert man gleich am Anfang zu einer Last.
  "bauko-19ou21o": 1,  // Rechenweg: Das Rezept für jede Bauko-Aufgabe: Bring die Schritte in Reihenfolge.
  "bauko-uw1gse": 2,  // Rechenweg: Ab welchem Schritt kommen die Teilsicherheitsbeiwerte dazu?
  "bauko-7f3ih6": 1,  // Rechenweg: Lastweg im Pfettendach: Bring die Bauteile in Reihenfolge.
  "bauko-12q99s6": 2,  // Rechenweg: Auflagerkräfte allgemein bestimmen: Reihenfolge?
  "bauko-1slgrhw": 2,  // Rechenweg: Einfeldträger – ordne zu.
  "bauko-e89w9q": 2,  // Rechenweg: Viele Sparren liegen auf einer Pfette. Wie wird ihre Last für die Pfet
  "bauko-zfi11p": 2,  // Rechenweg: Durchlaufträger: Wie bekommt man eine Auflagerkraft?
  "bauko-1kpche7": 2,  // Holzbemessung: Welche Kombination ist bei Holz maßgebend?
  "bauko-1ui6k8o": 2,  // Holzbemessung: Ordne die Klasse der Lasteinwirkungsdauer zu.
  "bauko-1j1gkm2": 1,  // Holzbemessung: Teilsicherheitsbeiwert γ_M für Holz:
  "bauko-h48m33": 2,  // Holzbemessung: Windsog wirkt günstig gegen das Eigengewicht (Abheben). Welches γ_G gi
  "bauko-15bpjla": 3,  // Holzbemessung: Biegenachweis Holzbalken: Bring die Schritte in Reihenfolge.
  "bauko-1ia58qg": 1,  // Holzbemessung: Biegefestigkeit f_m,k von Vollholz C24:
  /* Bauinformatik */
  "binf-1gmrfdi": 1,  // Java und JDK: Vom Quellcode zur Ausgabe: Reihenfolge?
  "binf-vuzr0z": 1,  // Java und JDK: Ordne zu.
  "binf-2rrna6": 1,  // Java und JDK: Welche Fehler findet der Compiler?
  "binf-1fh1tww": 1,  // Java und JDK: Welches Programmierparadigma ist Java?
  "binf-1bvtg57": 1,  // Programmrahmen: Wo startet jedes Java-Programm?
  "binf-1d4xamc": 1,  // Programmrahmen: Java unterscheidet Groß- und Kleinschreibung.
  "binf-17sbrm4": 1,  // Programmrahmen: Was unterscheidet println von print?
  "binf-lqvqv3": 2,  // Programmrahmen: Ordne die Escape-Sequenz zu.
  "binf-1dxe92g": 2,  // Programmrahmen: Welches Package ist immer automatisch importiert?
  "binf-1v7o0hj": 2,  // Programmrahmen: Welcher Token-Typ ist das?
  "binf-x9t0cr": 1,  // Programmrahmen: Welcher Bezeichner ist ungültig?
  "binf-1vkl5nd": 1,  // Datentypen: Welcher Datentyp ist der Standard für Kommazahlen?
  "binf-f3uvr5": 2,  // Datentypen: Welchen Wertebereich hat byte?
  "binf-vuyxih": 1,  // Datentypen: Ordne zu.
  "binf-1glct40": 1,  // Datentypen: In Java schreibt man Kommazahlen mit Komma, also 2,5.
  "binf-feqhgq": 1,  // Datentypen: String ist ein primitiver Datentyp.
  "binf-s4rgd1": 1,  // Operatoren: Was gibt System.out.println(7 / 2); aus?
  "binf-urk71c": 2,  // Operatoren: Was gibt System.out.println(1 + 2 + "3"); aus?
  "binf-olpynk": 2,  // Operatoren: Was gibt System.out.println("1" + 2 + 3); aus?
  "binf-xd5cv7": 2,  // Operatoren: Was unterscheidet && von &?
  "binf-13tkpws": 1,  // Operatoren: Was ist der Unterschied zwischen = und ==?
  /* Statistik */
  "stat-1e6lp85": 2,  // Einführung: Wann sind Daten repräsentativ?
  "stat-1mansf7": 1,  // Einführung: Begriffe am Betonfertigteil – ordne zu.
  "stat-1k16rzz": 1,  // Einführung: Wie gehst du mit einer Messreihe vor?
  "stat-1o65oqa": 1,  // Matrizen: Was bedeutet der Index bei a_ij?
  "stat-w1qpum": 1,  // Matrizen: Was passiert beim Transponieren einer (m, n)-Matrix?
  "stat-1dphzz": 1,  // Matrizen: Wann ist das Produkt A·B definiert?
  "stat-kniqu7": 2,  // Matrizen: Welche Ordnung hat das Produkt einer (2, 3)- mit einer (3, 4)-Matrix?
  "stat-14o1dxo": 1,  // Matrizen: Für Matrizen gilt immer A·B = B·A.
  "stat-1k4n50j": 1,  // Matrizen: Ordne die Sonderform zu.
  "stat-jb0678": 2,  // Matrizen: Was folgt aus det A = 0?
  "stat-wgpjz8": 1,  // Matrizen: Für welche Matrizen gilt die Regel von Sarrus?
  "stat-1vax8ar": 2,  // Matrizen: Determinante einer Dreiecksmatrix:
  "stat-5jgbsi": 1,  // Matrizen: Wann sind zwei Vektoren orthogonal?
  "stat-1td8wl9": 1,  // Matrizen: Was ist der Rang einer Matrix?
  "stat-kk7t9b": 2,  // Matrizen: Elementare Zeilenumformungen ändern den Rang nicht.
  "stat-ik4lhq": 2,  // Matrizen: Was gilt für (A·B)′?
  "stat-600vua": 3,  // Matrizen: Inverse mit Gauß-Jordan: Reihenfolge?
  "stat-qz5ec": 2,  // Matrizen: Womit kontrollierst du ein Matrixprodukt im Falk-Schema?
  /* DAP */
  "dap-1m09d52": 2,  // Daten und Befragungen: Ordne die Datenquelle ihrer Eigenschaft zu.
  "dap-1curda4": 1,  // Daten und Befragungen: Mit welcher großen deutschen Haushaltsbefragung arbeitet der Kurs?
  "dap-709jaf": 1,  // Daten und Befragungen: Ordne die Erhebungsform zu.
  "dap-1dbh746": 1,  // Daten und Befragungen: Was ist Unit-Nonresponse?
  "dap-4ps7qt": 2,  // Daten und Befragungen: Typische Folge von Item-Nonresponse in Mobilitätsbefragungen:
  "dap-1jl3b9m": 2,  // Daten und Befragungen: Ordne die passive Datenquelle ihrer Stärke zu.
  "dap-735p5p": 2,  // Daten und Befragungen: Was ist ein Triple-Frame-Sample?
  "dap-1r6a7r0": 1,  // Gewichtung und Post-Processing: Bei der Stichprobenvarianz teilt man durch n.
  "dap-1pxh2sq": 1,  // Gewichtung und Post-Processing: Welcher Lageparameter ist robust gegen Ausreißer?
  "dap-6nqleu": 1,  // Gewichtung und Post-Processing: Was ist der Variationskoeffizient?
  "dap-1byhi4b": 2,  // Gewichtung und Post-Processing: Pkw pro Einwohner von vier Millionenstädten: Wie mittelst du richtig?
  "dap-v1dr0f": 3,  // Gewichtung und Post-Processing: Die MiD-Hochrechnung ergab 58 Mio. Pkw, das KBA zählt rund 44 Mio. War
  "dap-1lzlilw": 3,  // Gewichtung und Post-Processing: Phänomen und Korrektur – ordne zu.
  "dap-aamenv": 2,  // Gewichtung und Post-Processing: Warum schichtet man disproportional (BEV-Beispiel)?
  "dap-1jmnlws": 2,  // Gewichtung und Post-Processing: Themenbezogene Selektivität lässt sich gut durch Gewichtung korrigiere
  "dap-rloqz2": 2,  // Gewichtung und Post-Processing: Wie berechnet sich das Gewicht w beim Redressment?
  "dap-814yna": 2,  // Gewichtung und Post-Processing: Junge Menschen sind in der MiD unterrepräsentiert. Wie groß ist ihr Ge
  "dap-12e446s": 3,  // Gewichtung und Post-Processing: Iterative Proportional Fitting: Bring die Schritte in Reihenfolge.
  "dap-kawpmb": 2,  // Gewichtung und Post-Processing: Post-Processing einer Befragung: Reihenfolge?
  "dap-bphyhs": 1,  // Gewichtung und Post-Processing: Was ist Imputation?
  "dap-1qg88ep": 1,  // Gewichtung und Post-Processing: Wie ist die Response Rate definiert?
  "dap-17r1ojd": 1,  // R-Grundlagen: Mit welchem Operator weist man in R einen Wert zu?
  "dap-3h4n61": 1,  // R-Grundlagen: Bei welchem Index beginnt ein Vektor in R?
  "dap-kqmnsi": 2,  // R-Grundlagen: Was ergibt c('a', 100L, TRUE, 3)?
  "dap-14vjgrr": 1,  // R-Grundlagen: Ordne die Datenstruktur zu.
  "dap-1sgpysp": 2,  // R-Grundlagen: Durch was teilen sd() und var() in R?
  "dap-hjo7uh": 2,  // R-Grundlagen: Was ergibt rep(c(1, 2), each = 2)?
  "dap-7so915": 2,  // R-Grundlagen: Wie füllt matrix(c(5, 6, 7, 8), nrow = 2) die Werte ein?
  "dap-hiurno": 2,  // R-Grundlagen: In R sind x und X dieselbe Variable.
  "dap-9u2ow8": 1,  // Verteilungen: Ordne zu.
  "dap-1ror1s3": 1,  // Verteilungen: Was bedeutet die Fläche unter der PDF zwischen a und b?
  "dap-1cwy9xt": 1,  // Verteilungen: Normalverteilung: Welcher Anteil liegt im Bereich?
  "dap-o0fj1t": 1,  // Verteilungen: Welche Parameter hat die Standardnormalverteilung?
  "dap-148scko": 2,  // Verteilungen: Wie lautet die z-Standardisierung?
  "dap-12x2kpb": 3,  // Verteilungen: Zwei unabhängige Normalverteilungen werden addiert. Welche Standardabw
  "dap-ayfif0": 2,  // Verteilungen: Addiert man zwei Gleichverteilungen, entsteht wieder eine Gleichvertei
  "dap-1ej3592": 2,  // Verteilungen: Welche Dichte hat die stetige Gleichverteilung u[a, b]?
  "dap-p4y6rc": 2,  // Verteilungen: Warum ist die Normalverteilung so wichtig?
  /* Hydromechanik */
  "hydro-c8zi7o": 1,  // Hydrodynamik: Ordne die Betrachtungsweise zu.
  "hydro-d4n2dr": 2,  // Hydrodynamik: Was ist eine Potentialströmung?
  "hydro-1cbf6ji": 1,  // Hydrodynamik: Was besagt die Kontinuitätsgleichung für inkompressible Strömung?
  "hydro-163f2x": 1,  // Hydrodynamik: Bei stationärer Strömung ändert sich die Geschwindigkeit an einem fest
  "hydro-i6zpd7": 1,  // Hydrodynamik: Was ist eine Stromröhre?
  "hydro-dg9nw9": 1,  // Energiesatz: Unter welchen Bedingungen gilt die Bernoulli-Gleichung?
  "hydro-zt7h5c": 1,  // Energiesatz: Bernoulli: Ordne die Terme zu.
  "hydro-19q2zaw": 2,  // Energiesatz: Ausfluss aus einem sehr großen Behälter (Torricelli): v = ?
  "hydro-55jklh": 1,  // Energiesatz: Welche Einheit hat die Leistung?
  "hydro-1kjtiw4": 1,  // Impulssatz: Was ist der große Vorteil des Impulssatzes?
  "hydro-1b4zxi4": 1,  // Impulssatz: Wie lautet der Impulssatz in der Hydromechanik?
  "hydro-yxmu00": 2,  // Impulssatz: Was ist die Stützkraft S?
  "hydro-183ycyj": 2,  // Impulssatz: Impulssatz anwenden: Bring die Schritte in Reihenfolge.
  "hydro-1f2v8ot": 1,  // Gerinneströmung: Ordne den Fließzustand zu.
  "hydro-19p0szi": 2,  // Gerinneströmung: Wie groß ist die Mindestenergiehöhe im Grenzzustand?
  "hydro-jxkt23": 1,  // Gerinneströmung: Was beschreibt die Froude-Zahl?
  "hydro-1taypbe": 2,  // Gerinneströmung: Wann bildet sich ein Wechselsprung?
  "hydro-17jjex4": 2,  // Gerinneströmung: Bei der Grenztiefe ist die Fließgeschwindigkeit gleich …
  /* Baukonstruktion */
  "bauko-mqtpgg": 1,  // Einwirkungen: Wovon hängt die charakteristische Schneelast am Boden s_k ab?
  "bauko-yeobhi": 2,  // Einwirkungen: Bis zu welcher Geländehöhe gilt die Schneenorm?
  "bauko-13xkdvd": 2,  // Einwirkungen: Was gilt für die Schneelastzonen 1a und 2a?
  "bauko-d0eyek": 2,  // Einwirkungen: Mindestwert der Schneelast s_k in Zone 2:
  "bauko-14n5zlt": 1,  // Einwirkungen: Was zählt laut V02 auch zur Nutzlast?
  "bauko-1jf6jlt": 2,  // Einwirkungen: Ab welcher Nutzlast entfällt der Trennwandzuschlag?
  "bauko-txmrge": 2,  // Einwirkungen: Trennwandzuschlag – ordne zu.
  "bauko-z0delh": 1,  // Einwirkungen: Wovon hängt der Geschwindigkeitsdruck q_p ab?
  "bauko-ywnwk6": 2,  // Einwirkungen: Die Dachneigung liegt zwischen zwei Tabellenwerten für c_pe. Was tust 
  "bauko-185hjzj": 1,  // Einwirkungen: Ordne die Bezeichnung zu.
  "bauko-18x0w3r": 1,  // Einwirkungen: Welche Norm regelt was?
  "bauko-1leeuhg": 2,  // Sicherheitskonzept: Auf welchem Zeitraum beruhen die charakteristischen Lasten?
  "bauko-1xbh9bh": 3,  // Sicherheitskonzept: ψ₂ für Nutzlast Kategorie A (Wohnen):
  "bauko-14ormv2": 2,  // Holzbemessung: Höhenbeiwert k_h für Vollholz mit h ≥ 150 mm:
  /* Baustoffkunde */
  "bsk-1c6gmac": 2,  // Physikalische Eigenschaften: Ordne die Porosität zu.
  "bsk-jupvyc": 2,  // Physikalische Eigenschaften: Geschlossene Poren und Sackporen leiten Wasser durch den Baustoff.
  "bsk-vteuvr": 2,  // Physikalische Eigenschaften: Warum helfen Luftporen im Beton gegen Frostschäden?
  "bsk-1f1zocn": 2,  // Physikalische Eigenschaften: Ordne dem Transportvorgang seinen Treiber zu.
  "bsk-xvsjup": 1,  // Physikalische Eigenschaften: Welche Kapillaren saugen höher?
  "bsk-xoj0q8": 1,  // Physikalische Eigenschaften: Faustregel zur Wärmedämmung:
  "bsk-j91q": 2,  // Physikalische Eigenschaften: Ordne nach Wärmeleitfähigkeit λ – von klein nach groß.
  "bsk-1bi6aw8": 1,  // Physikalische Eigenschaften: Welche Fassade wird in der Sonne am heißesten?
  "bsk-sknjqf": 2,  // Einteilung und Grundlagen: Wie ist die Kuppel des Pantheons aufgebaut?
  "bsk-y5yhgl": 3,  // Mechanische Eigenschaften: Wie hängt der Schubmodul G mit E und µ zusammen?
  "bsk-1uj5ag0": 2,  // Mechanische Eigenschaften: Wie funktioniert die Härteprüfung nach Brinell?
  "bsk-175rl0p": 2,  // Mechanische Eigenschaften: Aluminium zeigt bei Kälte im Kerbschlagversuch einen Steilabfall.
  "bsk-1a3v4cm": 2,  // Mechanische Eigenschaften: Wann ist die Wöhlerlinie praktisch waagerecht?
  /* Physik */
  "phys-16e8yld": 2,  // Einheiten: Was ist ein Joule in SI-Basiseinheiten?
  "phys-185vgmg": 1,  // Einheiten: Ordne die abgeleitete Einheit zu.
  "phys-1bq3ba4": 1,  // Einheiten: Ordne den Vorsatz dem Faktor zu.
  "phys-1xj6od8": 1,  // Geradlinige Bewegung: Was ist die Beschleunigung mathematisch?
  "phys-64fd5": 2,  // Geradlinige Bewegung: Welche Formel verbindet v, a und Weg ohne die Zeit (konstante Beschleu
  "phys-10htn2c": 1,  // Geradlinige Bewegung: Ohne Luftwiderstand fallen schwere und leichte Körper gleich schnell.
  "phys-1spxrz1": 1,  // Vektoren: Welchen Betrag hat ein Einheitsvektor?
  "phys-ec8sm3": 1,  // Vektoren: Ordne zu.
  "phys-nnpp3p": 1,  // Bewegung in 2D/3D: Wie hängen Winkelgeschwindigkeit ω und Umlaufzeit T zusammen?
  "phys-so8o5a": 1,  // Bewegung in 2D/3D: Wie groß ist die Bahngeschwindigkeit bei einer Kreisbewegung?
  "phys-871r7i": 1,  // Bewegung in 2D/3D: Wie groß ist die Zentripetalbeschleunigung?
  "phys-7iz5e0": 2,  // Bewegung in 2D/3D: Bewegtes Bezugssystem: Wie addiert man Geschwindigkeiten (klassisch)?
  "phys-1s9eco0": 3,  // Bewegung in 2D/3D: Hin und zurück mit Gegen- und Rückenwind dauert ein Flug genauso lang 
  "phys-4x1yrv": 2,  // Bewegung in 2D/3D: Bei welchem Abwurfwinkel ist die Wurfweite auf ebenem Boden maximal (o
  /* Bauinformatik */
  "binf-19kp7uy": 1,  // Operatoren: Was gibt System.out.println(7 % 3); aus?
  "binf-1vnr44v": 1,  // Operatoren: int x = 5; x++; Welchen Wert hat x danach?
  "binf-16qc5pg": 2,  // Operatoren: Was gibt System.out.println((double) 7 / 2); aus?
  "binf-1xq188r": 2,  // Datentypen: Von double nach int wandelt Java automatisch um.
  "binf-e1oef9": 1,  // Programmrahmen: Ordne die Kommentarart zu.
  "binf-1ox20x6": 1,  // Programmrahmen: Wie muss die Datei der Klasse HalloRWTH heißen?
  "binf-18xou7b": 2,  // Java und JDK: Wie startest du das kompilierte Programm auf der Konsole?
  "binf-xfgu5l": 1,  // Operatoren: Welchen Wert hat !(3 > 2)?
  "binf-1irnuun": 2,  // Datentypen: Welche Dezimalzahl ist die Dualzahl 101?
  "binf-ga3khu": 1,  // Datentypen: Wie viele Bit hat ein Byte?
  "binf-103nehk": 2,  // Datentypen: Wie groß ist der Datentyp?
  "binf-s5rh8q": 2,  // Datentypen: Woraus besteht eine Gleitkommazahl nach IEEE 754?
  "binf-1nawzzj": 2,  // Datentypen: Eine lokale Variable darf gelesen werden, bevor ihr ein Wert zugewiese
  "binf-5y4lru": 3,  // Operatoren: Was gibt System.out.println("a" + 'b' + 1); aus?
  /* Statistik */
  "stat-g0lhm0": 1,  // Gleichungssysteme: Wann ist das LGS A·x = b lösbar?
  "stat-41c0oz": 1,  // Gleichungssysteme: Wann ist ein LGS eindeutig lösbar?
  "stat-mm7e0r": 2,  // Gleichungssysteme: Gauß-Verfahren: Bring die Schritte in Reihenfolge.
  "stat-1nk4qg2": 1,  // Gleichungssysteme: A ist quadratisch und regulär. Wie lautet die Lösung von A·x = b?
  "stat-1p90efz": 1,  // Matrizen: Was ist die Spur einer quadratischen Matrix?
  "stat-mmy8wh": 2,  // Matrizen: Was passiert mit der Determinante, wenn du zwei Zeilen vertauschst?
  "stat-1c5mqkl": 2,  // Matrizen: Wie berechnet man die Norm eines Vektors a in Matrixschreibweise?
  "stat-a36j49": 2,  // Matrizen: Welchen Rang kann eine (3, 5)-Matrix höchstens haben?
  "stat-1luocql": 2,  // Gleichungssysteme: Entsteht beim Gauß-Verfahren einer quadratischen Matrix eine Nullzeile
  "stat-1xzfkgf": 3,  // Matrizen: Was ist a·a′ für einen Spaltenvektor a der Länge m?
  "stat-gp8y7u": 2,  // Matrizen: Welche Diagonalelemente hat eine schiefsymmetrische Matrix?
  "stat-ed4rx2": 2,  // Einführung: Aufgaben der Statistik im Ingenieurwesen – ordne zu.
  "stat-1tyhjvz": 1,  // Einführung: Was zeigt das Beispiel mit den EM-Toren auf linearer und logarithmisch
  /* Hydromechanik */
  "hydro-4zroku": 2,  // Eigenschaften des Wassers: Zwei Röhrchen stehen in zwei Flüssigkeiten. Welche Flüssigkeit ist rec
  "hydro-b8w4f5": 2,  // Hydrostatik 1: Das Bild zeigt den Druckverlauf in einem Behälter mit zwei Schichten. 
  "hydro-1nsef8p": 1,  // Hydrostatik 2: Ein Ponton schwimmt. Wie heißt die mit ? markierte Strecke?
  /* Baustoffkunde */
  "bsk-cwwwbt": 2,  // Mechanische Eigenschaften: Welche σ-ε-Linie gehört zu Baustahl unter Zug?
  "bsk-1aa7hb8": 2,  // Mechanische Eigenschaften: Welche σ-ε-Linie zeigt einen spröden Baustoff wie Ziegel?
  "bsk-scongt": 2,  // Mechanische Eigenschaften: Welche σ-ε-Linie passt zu Beton unter Druck?
  "bsk-9xfdm1": 1,  // Mechanische Eigenschaften: Was beschreibt der waagerechte Teil der Wöhlerlinie?
  /* Baukonstruktion */
  "bauko-7h40h8": 1,  // Rechenweg: Welches Bauteil des Pfettendachs ist mit ② markiert?
  "bauko-18lo2a2": 1,  // Rechenweg: Wo ist das Biegemoment eines Einfeldträgers unter Gleichlast am größte
  /* Physik */
  "phys-at3hk": 2,  // Bewegung in 2D/3D: In welchem Punkt der Wurfbahn ist die Geschwindigkeit am kleinsten?
  "phys-wyjj8g": 2,  // Bewegung in 2D/3D: Gleichförmige Kreisbewegung: Welcher Pfeil zeigt die Beschleunigung?
  /* DAP */
  "dap-12ldc33": 1,  // Verteilungen: Wie viel Prozent der Werte liegen in der markierten Fläche (μ ± 1σ)?
  "dap-1pkddr2": 2,  // Verteilungen: Welche Kurve ist die Verteilungsfunktion (CDF)?
  /* Hydromechanik */
  "hydro-pfwopg": 2,  // Eigenschaften des Wassers: Warum siedet Wasser im Gebirge schon unter 100 °C?
  "hydro-yf7yqs": 2,  // Eigenschaften des Wassers: Was ist Kavitation?
  "hydro-128ipkg": 2,  // Eigenschaften des Wassers: Wie viel steifer als Wasser ist Stahl ungefähr?
  "hydro-1wbgn5t": 2,  // Eigenschaften des Wassers: Was ist die Ursache der Kapillarität?
  "hydro-44o54t": 2,  // Hydrostatik 1: Der Wasserdruck in einem Punkt hängt davon ab, wie die Fläche dort aus
  "hydro-afaest": 3,  // Hydrostatik 1: Wie bestimmst du die horizontale Kraft auf eine geneigte Fläche?
  "hydro-d4mrv": 3,  // Hydrostatik 2: Ein Holzwürfel (ρ = 800 kg/m³, Kante 1 m) schwimmt in Süßwasser. Welch
  "hydro-1wfy1ow": 3,  // Hydrostatik 2: Eine Bleikugel wird einmal auf einen schwimmenden Holzklotz gelegt und
  "hydro-jtmp0l": 2,  // Hydrostatik 2: Warum ändert sich der Wasserstand im Glas nicht, wenn Eiswürfel schmel
  "hydro-1wvjjtr": 2,  // Hydrodynamik: Welche Annahmen stecken in Q₁ = Q₂ für ein Rohr?
  "hydro-3z05bt": 2,  // Hydrodynamik: Ein Zulauf teilt sich in zwei Wasserhähne. Was gilt?
  "hydro-pd2dai": 2,  // Hydrodynamik: Ein Behälter wird mit Q_zu gefüllt und läuft mit Q_ab aus. Wie ändert 
  "hydro-6o64wa": 2,  // Energiesatz: Ein Rohr wird enger. Was passiert nach Bernoulli (gleiche Höhe) mit de
  "hydro-1x2fmbt": 3,  // Energiesatz: Bernoulli-Aufgabe: Bring das Vorgehen in Reihenfolge.
  "hydro-1156wxi": 3,  // Impulssatz: Stützkraftsatz anwenden (Übung 04): Reihenfolge?
  "hydro-1q0eime": 3,  // Impulssatz: Woraus besteht die Stützkraft im Freispiegelgerinne?
  "hydro-fnqzjv": 2,  // Impulssatz: Warum darf man beim kurzen Rohrkrümmer in Übung 04 die Reibung vernach
  "hydro-gw4nki": 2,  // Impulssatz: Ein freier Wasserstrahl prallt senkrecht auf eine Platte. Welche Größe
  "hydro-1xl5x4p": 2,  // Gerinneströmung: Woran erkennst du in Übung 04 den Fließzustand im Gerinne?
  "hydro-1ir855n": 2,  // Gerinneströmung: Beim Wechselsprung bleibt die Energiehöhe erhalten.
  "hydro-1q3zanr": 2,  // Hydrostatik 1: Wasser liegt über einer gekrümmten Fläche, etwa der Oberseite eines Ro
  "hydro-kgf5rv": 1,  // Energiesatz: Für welche Strömungen gilt die Bernoulli-Gleichung laut Klausurübung?
  /* Baukonstruktion */
  "bauko-bapjj1": 2,  // Holz als Baustoff: Warum streuen die Eigenschaften von Bauholz so stark?
  "bauko-tk1tgz": 1,  // Holz als Baustoff: Wie fest ist Holz senkrecht zur Faser im Vergleich zu parallel?
  "bauko-1n37q61": 2,  // Holz als Baustoff: Warum ist bei Bauholz unter Normalbedingungen die Druckfestigkeit höhe
  "bauko-nwz1pq": 1,  // Holz als Baustoff: Welche Beanspruchung verträgt Holz am schlechtesten?
  "bauko-1ws9uhw": 1,  // Holzbemessung: KLED: Ordne die Dauer zu.
  "bauko-dvzu7y": 1,  // Holzbemessung: Wovon hängt kmod ab?
  "bauko-1ec6svn": 1,  // Holzbemessung: Ordne die Nutzungsklasse zu.
  "bauko-bwjfu4": 1,  // Holzbemessung: Was ist beim Knicknachweis eines Holzstabs der Beiwert k_c?
  "bauko-13ifley": 3,  // Holzbemessung: Knicknachweis Holzstütze: Reihenfolge?
  "bauko-qky7im": 3,  // Holzbemessung: Welcher Beiwert k_m gilt bei Doppelbiegung für Rechteckquerschnitte au
  "bauko-nnx202": 2,  // Holzbemessung: Empfohlene Grenzwerte der Durchbiegung (allgemein) – ordne zu.
  "bauko-jkwpyx": 2,  // Holzbemessung: Was beschreibt w_creep in der Enddurchbiegung?
  "bauko-1b2db7n": 1,  // Sicherheitskonzept: Was ist ein Grenzzustand der Gebrauchstauglichkeit?
  "bauko-161g8ca": 3,  // Lasten: Deckenlast für einen Unterzug (wie Ü01): Reihenfolge?
  "bauko-1dm1f12": 3,  // Lasten: Eine Holzbalkendecke liegt auf einem Stahlträger. Wie bekommst du die 
  "bauko-1tj4xui": 1,  // Einwirkungen: Wohin wirkt der Wind auf ein Satteldach?
  "bauko-1k2eij6": 2,  // Einwirkungen: Welche Seiten des Satteldachs sind die Luvseite-Bereiche?
  "bauko-1erxo6z": 3,  // Einwirkungen: In der Hausübung: Was ist b in e = min(b; 2h)?
  "bauko-13h07f2": 2,  // Holzbemessung: Nachweis eines Holzbalkens (wie Ü06): Reihenfolge?
  "bauko-7a30uo": 3,  // Holzbemessung: Ein Balken hat eine Kerve (Ausklinkung). Was ändert sich im Biegenachw
  "bauko-cq3ml3": 3,  // Lasten: Mannlast und Schnee werden zusammen überlagert.
  "bauko-lzv38s": 1,  // Klausur: Wie ist die Bauko-Klausur seit 2014 aufgebaut?
  "bauko-1f66s5k": 1,  // Klausur: Teil II – welche Aufgabe behandelt was?
  "bauko-1wcbl5x": 1,  // Klausur: Welches Thema kam in Teil I fast jedes Mal dran (23 von 24 Klausuren)?
  "bauko-718mg2": 1,  // Klausur: Eine Teilaufgabe konntest du nicht lösen. Was tust du in der Bauko-Kla
  "bauko-2f2p5m": 2,  // Klausur: Was bedeutet die Steinbezeichnung KSL 6-1,2-II?
  /* Physik */
  "phys-18b2nl": 3,  // Vektoren: Richtungswinkel einer Gesamtverschiebung (Blatt 2, A1): Reihenfolge?
  "phys-xrb5kz": 2,  // Vektoren: Eine Raumdiagonale eines Quaders mit den Kanten a, b, c hat welche Län
  "phys-fxy2p8": 2,  // Vektoren: Wie bestimmst du den Winkel zwischen zwei Vektoren a und b?
  "phys-13hjds6": 3,  // Vektoren: Wie findest du einen Vektor, der in der Ebene senkrecht auf a = (a_x, 
  "phys-8sp91r": 2,  // Vektoren: Für den Winkel eines Vektors zur y-Achse eignet sich arccos(v_y / |v|)
  /* Statistik */
  "stat-165elwk": 2,  // Matrizen: In Übung 1 ergaben A·B und B·A dieselbe Matrix.
  "stat-1p0flcd": 3,  // Matrizen: In Übung 1 hatte A′A die Determinante 0. Was folgt daraus?
  "stat-1gxb5yy": 3,  // Matrizen: Welchen Rang hat a·a′ für einen Vektor a ≠ 0?
  "stat-r0lvt3": 2,  // Matrizen: Was macht eine Drehmatrix mit einem Vektor?
  "stat-1wayb5d": 3,  // Gleichungssysteme: LGS mit der Cramerschen Regel lösen: Reihenfolge?
  /* DAP */
  "dap-1t58c4r": 1,  // R-Grundlagen: Was ist R laut Exercise 1?
  "dap-14zztj2": 1,  // R-Grundlagen: Welcher R-Datentyp ist das?
  "dap-1800d6": 1,  // R-Grundlagen: Bereiche in RStudio – ordne zu.
  "dap-1qyhkh3": 1,  // R-Grundlagen: Laut Exercise 1 soll man R-Aufgaben am besten komplett von einer KI lö
  "dap-1ry2fjf": 2,  // R-Grundlagen: Was ergibt seq(0, 10, by = 2.5)?
  "dap-l1rprk": 2,  // R-Grundlagen: Wie ignorierst du fehlende Werte beim Mittelwert in R?
  /* Baustoffkunde */
  "bsk-76tclc": 1,  // Chemische Grundlagen: Ordne das Teilchen zu.
  "bsk-154n8dr": 1,  // Chemische Grundlagen: Was sind Isotope?
  "bsk-1dspkiz": 1,  // Chemische Grundlagen: Ordne die Ionen zu.
  "bsk-1wm1a6v": 2,  // Chemische Grundlagen: Welche Elektronenkonfiguration streben Atome bei der Ionenbildung an?
  "bsk-1ncfr0a": 2,  // Chemische Grundlagen: Primäre Bindungen – ordne zu.
  "bsk-lba4y7": 2,  // Chemische Grundlagen: Ab welcher Elektronegativitätsdifferenz spricht man von Ionenbindung?
  "bsk-d7sa9h": 2,  // Chemische Grundlagen: Warum leiten Metalle elektrischen Strom gut?
  "bsk-10mm597": 1,  // Chemische Grundlagen: Welche Bindung ist die schwächste?
  "bsk-ojc8mx": 2,  // Chemische Grundlagen: Wofür brauchst du Atomaufbau und Ionen in der Baustoffkunde?
  /* Baukonstruktion */
  "bauko-6ujyfh": 2,  // Holzbemessung: Was beschreibt welche Durchbiegung?
  "bauko-jwml8k": 1,  // Holzbemessung: Welcher Grenzwert gilt allgemein für w_inst und für w_net,fin?
  "bauko-7teaua": 2,  // Holzbemessung: Ein Holzbalken hat 4 m Spannweite. Was bedeutet w_inst ≤ l / 300?
  /* Baustoffkunde */
  "bsk-vjxc07": 2,  // Chemische Grundlagen: Welche Bindung steckt in welchem Stoff?
  "bsk-101vxpr": 3,  // Chemische Grundlagen: Welche Hauptbindung hat laut Übersicht die höchste Bindungsenergie?
  "bsk-1hdjicb": 2,  // Chemische Grundlagen: Wie leitet der Stoff elektrischen Strom?
  "bsk-2zojog": 3,  // Chemische Grundlagen: Wasserstoffbrücken entstehen nur, wenn Wasserstoff an Stickstoff, Saue
  "bsk-1kbsffz": 3,  // Chemische Grundlagen: Was verrät die Steigung der Kraft-Abstand-Kurve an der Ruhelage a₀?
  "bsk-1w6ia6r": 2,  // Chemische Grundlagen: Welcher Stoff macht den größten Anteil von Portlandzement aus?
  "bsk-opa187": 2,  // Gefüge und Kristalle: Kugelpackung – welcher Füllgrad?
  "bsk-1ox59cp": 2,  // Gefüge und Kristalle: Welche Kristallstruktur hat das Metall?
  "bsk-h1j5iu": 2,  // Gefüge und Kristalle: Gitterfehler – welche Dimension?
  "bsk-1atendl": 1,  // Gefüge und Kristalle: Welcher Gitterfehler trägt die plastische Verformung von Metallen?
  "bsk-1skxh2i": 2,  // Gefüge und Kristalle: Warum lassen sich Metalle plastisch verformen, Keramik aber kaum?
  "bsk-ielby7": 2,  // Gefüge und Kristalle: Kunststoffe – wie sind die Ketten verbunden?
  "bsk-uta7rw": 2,  // Gefüge und Kristalle: Wie geht ein amorpher Werkstoff wie Glas vom festen in den flüssigen Z
  "bsk-1ty5kn": 2,  // Gefüge und Kristalle: Duktilität: Ordne von spröde nach zäh.
  "bsk-1ll4ect": 2,  // Gefüge und Kristalle: Wie wirkt eine höhere Belastungsgeschwindigkeit auf die Duktilität?
  "bsk-p2o4qo": 2,  // Gefüge und Kristalle: Welche äußeren Einflüsse machen einen Werkstoff duktiler?
  "bsk-1bf5xnj": 3,  // Gefüge und Kristalle: Welche Einflüsse senken die Duktilität laut Folie 35?
  "bsk-125l1q2": 2,  // Gefüge und Kristalle: Wie wirkt ein feineres Gefüge (kleinere Körner) auf die Duktilität?
  "bsk-19npqb3": 2,  // Gefüge und Kristalle: Ein Stahl, der vorher kalt verformt wurde, ist danach duktiler.
  "bsk-1mcz2qq": 3,  // Gefüge und Kristalle: Wie wirken Einschlüsse und Ausscheidungen an den Korngrenzen auf die D
  "bsk-1snrzkc": 3,  // Gefüge und Kristalle: Je größer der Korngrenzwinkel zwischen benachbarten Körnern, desto ger
  "bsk-1miac6l": 3,  // Gefüge und Kristalle: Bruchfläche einer duktilen Stahlprobe – was ist was?
  "bsk-9ebzno": 2,  // Gefüge und Kristalle: Woran erkennst du auf einer Bruchfläche einen duktilen Bruch?
  "bsk-gux6oi": 2,  // Gefüge und Kristalle: Ein Einkristall aus Kupfer ist fester als vielkristallines Kupfer.
  "bsk-18ayn0e": 2,  // Gefüge und Kristalle: Wie erhöht man die Festigkeit von Metallen gezielt?
  "bsk-7j0k4l": 1,  // Gefüge und Kristalle: Was versagt bei Normalbeton zuerst?
  "bsk-dtp1hg": 2,  // Gefüge und Kristalle: Porenarten – ordne zu.
  "bsk-1hxxz25": 2,  // Gefüge und Kristalle: Wann verbessern Poren die Wärmedämmung am meisten?
  "bsk-llltmt": 2,  // Gefüge und Kristalle: Wie entstehen die Poren im Porenbeton?
  "bsk-ybgufs": 1,  // Physikalische Eigenschaften: Was ist eine Sackpore?
  "bsk-26gd5": 1,  // Physikalische Eigenschaften: Was kennzeichnet eine durchgängige Kapillare?
  "bsk-srglpv": 1,  // Physikalische Eigenschaften: Was trifft auf geschlossene Poren zu?
  "bsk-ebntjg": 2,  // Physikalische Eigenschaften: Welche Poren bestimmen vor allem, wie leicht Flüssigkeiten und Gase in
  "bsk-rza2jr": 2,  // Physikalische Eigenschaften: Ein Baustoff bekommt mehr Poren. Wie ändern sich Rohdichte, Festigkeit
  "bsk-1p8ckwh": 2,  // Physikalische Eigenschaften: Mehr Poren im Baustoff – welche Größe bleibt gleich?
  "bsk-pm3zmf": 3,  // Physikalische Eigenschaften: Welche Eigenschaft nennt Folie 46 NICHT als abhängig von der Porosität
  "bsk-1cratq": 1,  // Physikalische Eigenschaften: Porosität p = V_P / V – was bedeutet was?
  "bsk-1ehm55p": 2,  // Physikalische Eigenschaften: Mehr Poren machen einen Baustoff immer dauerhafter.
  "bsk-1tpmt7d": 2,  // Physikalische Eigenschaften: Die Volumenstabilität eines Baustoffs hängt von seiner Porosität ab.
  "bsk-1epfdtm": 1,  // Physikalische Eigenschaften: Welche Porenart ist mit A markiert?
  "bsk-1m6s5qz": 2,  // Physikalische Eigenschaften: Die Kapillaren sind mit Wasser gefüllt. Was ist C und warum bleibt C l
  "bsk-tjixad": 2,  // Physikalische Eigenschaften: Auf welchem Weg kann Wasser von oben nach unten durch das Bauteil wand
  "bsk-1s4k8lu": 1,  // Gefüge und Kristalle: Warum verleimt man Sperrholz kreuzweise (0°/90°)?
  /* Bauinformatik */
  "binf-147yr7u": 2,  // Java und JDK: Du benennst main in moin um. Was passiert beim Start?
  "binf-1bzpwgx": 1,  // Operatoren: Was bewirkt das + hier?
  "binf-17tz23n": 2,  // Datentypen: Was ergibt "3f" + 4?
  "binf-2nvuc3": 2,  // Datentypen: Was ergibt 2 + "3"?
  "binf-1iykj5z": 3,  // Datentypen: Was gibt System.out.println('H' + "allo"); aus?
  "binf-3ymh7f": 1,  // Datentypen: Welchen Datentyp hat das Literal?
  "binf-14gk5sn": 2,  // Datentypen: Wie viele Bit hat der Datentyp laut Übungshilfe?
  "binf-16a93aa": 3,  // Datentypen: Was gibt System.out.println(Float.MIN_VALUE); aus?
  "binf-s7xsp9": 2,  // Datentypen: Welcher Datentyp passt am besten zu einer Postleitzahl?
  "binf-3vobnu": 1,  // Datentypen: In welchem Datentyp speicherst du das Geschlecht als m, w oder d?
  "binf-5cu956": 1,  // Datentypen: Welcher Variablenname ist zulässig?
  "binf-9k93ri": 2,  // Datentypen: double3 ist ein zulässiger Variablenname.
  "binf-1wqe03q": 2,  // Datentypen: Warum ist int i1 = 12345678910; ein Fehler?
  "binf-173ia1t": 2,  // Datentypen: float f1 = 30.5; meldet einen Fehler. Wie korrigierst du?
  "binf-paah1j": 2,  // Datentypen: Was ist an char c1 = "g"; falsch?
  "binf-56nza2": 2,  // Datentypen: int a = 10; double b = a; – was passiert?
  "binf-aoc9ln": 1,  // Operatoren: Was ergibt 20 % 6?
  "binf-1rc0rke": 1,  // Operatoren: Was bedeutet i += 1?
  "binf-1gnigk4": 2,  // Datentypen: Dezimal in Dual umrechnen: Reihenfolge?
  "binf-ccpdai": 3,  // Datentypen: Welche Dezimalzahl ist 0010 1010?
  /* Hydromechanik */
  "hydro-t4wg3p": 3,  // Eigenschaften des Wassers: Ein Schauglas zeigt den Wasserstand an. Wie verhinderst du einen zu gr
  "hydro-e8k91d": 2,  // Hydrostatik 1: Ein Becken ist 2 m tief mit Quecksilber statt Wasser gefüllt. Wie groß
  "hydro-1ys63aq": 1,  // Hydrostatik 1: Welchen absoluten Druck hat die Oberfläche eines offenen Beckens?
  "hydro-1innbbh": 2,  // Energiesatz: Welches Messrohr zeigt welche Linie?
  "hydro-1fberzo": 2,  // Energiesatz: Pitot- und Piezometerrohr stehen am selben Querschnitt. Was liest du a
  "hydro-1yg4y58": 3,  // Hydrodynamik: Zwei Wasserhähne (d₁ = 2 cm, d₂ = 1 cm) fließen mit gleicher Geschwind
  "hydro-xmpbu6": 3,  // Energiesatz: Ein Venturirohr verengt sich von d₁ auf d₂ = d₁/3. Wie ändert sich die
  "hydro-19sclao": 2,  // Impulssatz: Wie lautet die Stützkraft in einer Druckrohrströmung?
  "hydro-l0tl2b": 2,  // Impulssatz: In welche Richtung drückt das Wasser einen horizontalen Rohrkrümmer?
  "hydro-1glspxj": 2,  // Gerinneströmung: Wo breiten sich Störungen (z. B. Wellen) auch stromaufwärts aus?
  "hydro-nfxeue": 3,  // Gerinneströmung: Über einer Sohlschwelle herrscht Grenzzustand. Wie bekommst du daraus 
  /* Baukonstruktion */
  "bauko-1gq1kkh": 1,  // Lasten: Wie rechnest du eine Dachlattung (Linienbauteil) in eine Flächenlast u
  "bauko-oap232": 2,  // Lasten: Wie kommst du von der Flächenlast in kN/m² zur Last auf einem Sparren 
  "bauko-8dsmu0": 2,  // Einwirkungen: Welcher Formbeiwert μ₁ gilt für 30° < α < 60°?
  "bauko-66skr4": 3,  // Einwirkungen: Was ist der Schneeüberhang an der Traufe?
  "bauko-bkwlyp": 2,  // Einwirkungen: Wie groß ist die Windlast pro Sparren?
  "bauko-1j76ieg": 3,  // Einwirkungen: Satteldach 35°, Ü02: welcher Außendruckbeiwert c_pe,10?
  "bauko-wkcmoi": 2,  // Lasten: Welche Nutzlast gilt für eine Holzbalkendecke zwischen Wohnräumen?
  "bauko-ks883u": 2,  // Lasten: Was bedeutet „ausreichende Querverteilung“ einer Decke?
  "bauko-zd0cpm": 3,  // Lasten: Darf die Nutzlast einer Holzbalkendecke für die stützenden Bauteile da
  "bauko-cnjit1": 2,  // Lasten: Welche Nutzlast gilt für Büroflächen?
  "bauko-1ei8nwp": 2,  // Rechenweg: Durchlaufträger über mehrere Felder: Welches Auflager ist meist maßgeb
  /* Physik */
  "phys-5jxxeq": 2,  // Einheiten: US-Einheit – wie viel ist das?
  "phys-iw5kev": 3,  // Einheiten: Du rechnest 20 km² in m² um. Was ist richtig?
  "phys-1cgfyj5": 3,  // Geradlinige Bewegung: Ein Auto fährt je die halbe ZEIT mit v₁ und v₂. Wie groß ist die mittl
  "phys-gb9r0t": 3,  // Geradlinige Bewegung: x(t) = At − Bt² + Ct³. Wie bekommst du die Beschleunigung?
  "phys-1exhk1f": 2,  // Bewegung in 2D/3D: Ein Ventilator macht N Umdrehungen in der Zeit Δt. Wie groß ist die Um
  "phys-kr4vka": 3,  // Bewegung in 2D/3D: Wann erreicht ein Teilchen mit v₀ₓ > 0 und aₓ < 0 seine größte x-Koord
  /* Statistik */
  "stat-1g7k975": 2,  // Matrizen: A ist eine (2, 3)-Matrix. Welche Ordnung hat A′A?
  "stat-1vb39xx": 3,  // Matrizen: Warum ist A′A immer symmetrisch?
  "stat-u4p7oa": 3,  // Matrizen: Für eine (2, 3)-Matrix A ist A′A nie invertierbar.
  "stat-11zws9": 3,  // Matrizen: Womit prüfst du schnell, ob AB und BA richtig gerechnet sind?
  /* DAP */
  "dap-1ybn0vm": 3,  // Verteilungen: Welchen Mittelwert und welche Varianz hat die Gleichverteilung u[a, b]
  "dap-iafgr7": 2,  // Verteilungen: Wie sieht die Verteilungsfunktion (CDF) einer diskreten Verteilung, z.
  "dap-ia9hi6": 2,  // Verteilungen: Welcher Anteil liegt bei einer Normalverteilung zwischen μ − 3σ und μ 
  /* Baustoffkunde */
  "bsk-2l3872": 2,  // Gefüge und Kristalle: Homogen oder heterogen, isotrop oder anisotrop?
  "bsk-1lo1tsn": 2,  // Mechanische Eigenschaften: Kriechen oder Relaxation?
  "bsk-12vnhth": 2,  // Physikalische Eigenschaften: Welche Korrosion trifft welchen Baustoff?
  "bsk-1c4gvl9": 2,  // Physikalische Eigenschaften: Baustoffklasse nach Brennbarkeit – ordne zu.
  "bsk-129j87k": 1,  // Physikalische Eigenschaften: Was bedeutet die Feuerwiderstandsklasse F 90 für ein Bauteil?
  "bsk-cuu2kk": 2,  // Mechanische Eigenschaften: Wie verändert sich die Festigkeit von Holz mit steigendem Wassergehalt
  "bsk-obs488": 2,  // Mechanische Eigenschaften: Was passiert mit der Festigkeit von Beton im Brandfall?
  "bsk-1tmwppm": 3,  // Mechanische Eigenschaften: Manche Baustoffe, etwa feuchter Beton, werden bei Temperaturen deutlic
  /* Baukonstruktion */
  "bauko-1duhsj7": 1,  // Holz als Baustoff: Welche Holzfehler mindern die Tragfähigkeit von Bauholz?
  "bauko-7krugl": 1,  // Holz als Baustoff: Welche Holzarten sind Nadelhölzer?
  "bauko-j0tvtq": 1,  // Holz als Baustoff: Was bedeutet „Anisotropie“ am Beispiel Holz?
  "bauko-193lrhd": 2,  // Holzbemessung: Was ist bei Biegung von Holz entscheidend?
  "bauko-2zmdtl": 1,  // Holzbemessung: Wie lautet der Zugnachweis in Faserrichtung?
  "bauko-x5dkof": 3,  // Holzbemessung: Eulerfall – welcher Knicklängenbeiwert β?
  "bauko-13tw3uu": 2,  // Holzbemessung: Ein Kragstiel steht auf einem Fundament, das sich elastisch verdreht. 
  "bauko-60rqbd": 2,  // Holzbemessung: Was ist die Eulersche Knicklast?
  "bauko-veu1h3": 2,  // Sicherheitskonzept: Was gehört zu den Nachweisen im Grenzzustand der Gebrauchstauglichkeit
  "bauko-162xt11": 3,  // Holzbemessung: Wie berechnet man die Durchbiegung eines Einfeldträgers unter Gleichla
  "bauko-q9ee6p": 2,  // Holzbemessung: Bei w_net,fin zählen nur quasi-ständige Anteile. Was bleibt bei Schnee
  "bauko-1kbo35u": 2,  // Sicherheitskonzept: Welche Klimabedingungen gelten für Nutzungsklasse 1?
  "bauko-uusoxf": 3,  // Sicherheitskonzept: Welche Einwirkung gehört zur KLED „lang“ (6 Monate bis 10 Jahre)?
  "bauko-1dbkgxy": 3,  // Holzbemessung: Der Biegenachweis ist nicht erfüllt. Was kannst du – außer einem Gerbe
  "bauko-irixtk": 1,  // Schnittgrößen und Aussteifung: Was bewirkt ein Gerbergelenk in einem Durchlaufträger?
  "bauko-tf3yny": 2,  // Lasten: Welche Wichte hat das Nadelholz (SBT, V02)?
  "bauko-7xymtn": 3,  // Einwirkungen: Wie berechnet man s_k in Schneelastzone 1a?
  "bauko-t9vpdj": 2,  // Einwirkungen: Geschwindigkeitsdruck q_p im Binnenland bis 10 m Höhe – ordne zu.
  "bauko-1no0d3l": 3,  // Einwirkungen: Was ist der Unterseitendruck am Dachüberstand?
  "bauko-bk4jak": 3,  // Einwirkungen: Welche c_pe,10-Werte gelten am Satteldach mit genau 30° (Hausübung)?
  "bauko-afqlqz": 2,  // Lasten: Welche Kategorie und welche Last gelten für die Mannlast auf einem nic
  "bauko-vcsiol": 3,  // Einwirkungen: Von welchen Faktoren hängt die Schneelast auf dem Dach ab?
  "bauko-1hdowxo": 1,  // Einwirkungen: s = μ_i · C_e · C_t · s_k – was bedeutet welcher Faktor?
  "bauko-1je5oqh": 1,  // Stahl und Stahlbeton: Baustahl – Streckgrenze f_y,k ordnen.
  "bauko-1sbial9": 1,  // Stahl und Stahlbeton: Was bedeutet S 235 J2?
  "bauko-1080xc6": 2,  // Stahl und Stahlbeton: Welcher Teilsicherheitsbeiwert gilt für den Querschnittswiderstand von
  "bauko-s4q9uc": 2,  // Stahl und Stahlbeton: Wie groß ist die Fließdehnung ε_y von S 235 ungefähr?
  "bauko-1sic6g4": 2,  // Stahl und Stahlbeton: Was unterscheidet den plastischen vom elastischen Biegenachweis bei St
  "bauko-5yj65i": 1,  // Stahl und Stahlbeton: Warum trägt Beton im Stahlbeton keine Zugkräfte?
  "bauko-2bbz32": 2,  // Stahl und Stahlbeton: Nenne Gründe für eine ausreichende Betondeckung.
  "bauko-7td1c6": 1,  // Schnittgrößen und Aussteifung: Kragarm mit Einzellast am freien Ende: Wie sieht der Momentenverlauf a
  "bauko-1f6u3op": 2,  // Schnittgrößen und Aussteifung: Einfeldträger mit Einzellast F in der Mitte: Wie groß ist das größte M
  "bauko-lnxwia": 2,  // Schnittgrößen und Aussteifung: Zweifeldträger unter Gleichlast: Wo liegt das betragsmäßig größte Mome
  "bauko-s51a52": 1,  // Schnittgrößen und Aussteifung: Was ist der Unterschied zwischen Platten- und Scheibentragwirkung?
  "bauko-1xx9dvi": 1,  // Schnittgrößen und Aussteifung: Wie viel Punkte bringt die Stabilisierung (Reihen- und Scheibenstabili
  "bauko-bokpa9": 1,  // Klausur: Ab welcher Tiefe gilt eine Gründung als frostsicher?
  "bauko-fksfxc": 2,  // Klausur: Wann gilt ein Fundament in den Musterlösungen noch als kippsicher?
  "bauko-vrge8h": 2,  // Klausur: Was bedeutet HLzB 12-1,0-IIa?
  "bauko-zi4pg1": 3,  // Klausur: Wie lautet der Bemessungswert der Mauerwerksdruckfestigkeit in den Mus
  "bauko-fgx8xm": 3,  // Lasten: Von der Wichte zur Einzellast: Bring die Schritte in Reihenfolge.
  "bauko-bwp4ne": 3,  // Lasten: Wie groß ist das Eigengewicht einer 16 cm dicken Stahlbetondecke?
  "bauko-1qr723t": 3,  // Lasten: Welche Nutzlastkategorie gilt für eine Massivdecke zwischen Wohnräumen
  "bauko-1r28lws": 2,  // Rechenweg: Holzbalken laufen über mehrere Felder. Welches Auflager gibt die größt
  "bauko-1yj56s6": 3,  // Rechenweg: Wie wird aus der Deckenlast eine Streckenlast auf den Unterzug?
  "bauko-yxf5fu": 2,  // Einwirkungen: Wind wirkt senkrecht auf die Dachfläche. Wie groß sind seine Anteile a
  "bauko-1gfq9kl": 2,  // Einwirkungen: Warum zerlegt man die Windlast überhaupt in GFL- und AFL-Anteile?
  "bauko-wgd04j": 3,  // Rechenweg: Durchlaufträger mit ungleichen Feldern (l₁ : l₂ = 1 : 1,4): Wie bekomm
  "bauko-153j3bt": 2,  // Rechenweg: Warum untersucht man bei Durchlaufträgern auch Verkehrslast nur in ein
  "bauko-fvlxs1": 1,  // Klausur: Was gilt für die Dynexite-Hausübungen in Baukonstruktion?
  "bauko-s9qndb": 1,  // Klausur: Dynexite wertet Folgefehler – ein falscher Zwischenwert kostet nur ein
  /* Physik */
  "phys-1ehvw53": 1,  // Newtonsche Axiome: Ordne jedem Newtonschen Axiom seinen Namen zu.
  "phys-jexas4": 1,  // Newtonsche Axiome: Was besagt das 1. Newtonsche Axiom (Trägheitsprinzip)?
  "phys-exg2xy": 2,  // Newtonsche Axiome: Ein Körper, der sich mit konstanter Geschwindigkeit geradeaus bewegt, 
  "phys-1votdnl": 2,  // Newtonsche Axiome: Wie lautet das 2. Newtonsche Axiom in seiner allgemeinen Form?
  "phys-189v58h": 1,  // Newtonsche Axiome: Wie ist der Impuls definiert?
  "phys-11uuscx": 1,  // Newtonsche Axiome: Was ist 1 Newton in SI-Basiseinheiten?
  "phys-wi7hdu": 1,  // Newtonsche Axiome: Verdoppelt man die Kraft auf einen Körper, verdoppelt sich seine Besch
  "phys-1gocrta": 1,  // Newtonsche Axiome: Was beschreibt die (träge) Masse eines Körpers?
  "phys-1uchv4q": 1,  // Newtonsche Axiome: Masse und Gewichtskraft sind dasselbe.
  "phys-11i62b7": 2,  // Newtonsche Axiome: Welche Kraft hält einen Körper auf einer Kreisbahn mit Radius r?
  "phys-13way5w": 2,  // Newtonsche Axiome: Was ist ein Inertialsystem?
  "phys-1pxqoez": 2,  // Newtonsche Axiome: Ein Buch liegt auf dem Tisch. Was ist nach dem 3. Axiom die Gegenkraft
  "phys-kw5xlb": 2,  // Newtonsche Axiome: Kraft und Gegenkraft nach dem 3. Axiom heben sich auf, deshalb kann si
  "phys-1iy5pv3": 2,  // Newtonsche Axiome: Rezept für jede Newton-Aufgabe: Reihenfolge?
  "phys-186pcgy": 3,  // Newtonsche Axiome: Ordne die Kraft auf der schiefen Ebene (Winkel α) zu.
  "phys-nonnyj": 2,  // Newtonsche Axiome: Blatt 4, A1: Drei Kräfte erzeugen die Beschleunigung a. Wie bekommst d
  "phys-y9933v": 3,  // Newtonsche Axiome: In einem Freikörperbild zeichnet man m·a als zusätzliche Kraft ein.
  "phys-swom94": 3,  // Newtonsche Axiome: Blatt 4, A2: F schiebt zwei Blöcke (m₁ > m₂). Wann ist die Kontaktkraf
  "phys-1kgruzl": 3,  // Newtonsche Axiome: Blatt 4, A2: Beide Blöcke haben dieselbe Beschleunigung a = F / (m₁ + 
  "phys-stckh5": 1,  // Newtonsche Axiome: Blatt 4, A3: Wann hängt das Seil zwischen den Kisten gerade durch?
  "phys-6m6s3l": 3,  // Newtonsche Axiome: Ein Seil kann ziehen und drücken.
  "phys-1vl5q3z": 3,  // Newtonsche Axiome: Blatt 4, A4: Skifahrer mit konstanter Geschwindigkeit auf reibungsfrei
  "phys-1810ui4": 3,  // Newtonsche Axiome: Blatt 4, A5: Was ist die Kraft des Motorrads auf den Fahrer – im Vergl
  "phys-fdpwvr": 3,  // Newtonsche Axiome: Blatt 4, A6: Warum muss der Mann im Bootsmannsstuhl nur halb so stark 
  "phys-1q2dbfb": 3,  // Newtonsche Axiome: Blatt 4, A6: Mit welcher Kraft zieht die Rolle an der Decke?
  /* Hydromechanik */
  "hydro-1x49ert": 1,  // Hydrodynamik: Was bedeutet Q in der Kontinuitätsgleichung Q₁ = Q₂?
  "hydro-rzedbh": 1,  // Hydrodynamik: v₁ · A₁ = v₂ · A₂ – was ist was?
  /* Bauinformatik */
  "binf-1x0o3wm": 3,  // Operatoren: int n = 0; Was ergibt (n != 0 && 10 / n > 2)?
  "binf-1nsy4vx": 3,  // Operatoren: int n = 0; Was passiert bei (n != 0 & 10 / n > 2)?
  /* Statistik */
  "stat-ymj9um": 1,  // Deskriptive Statistik: Was ist eine Stichprobe?
  "stat-9ob3q7": 2,  // Deskriptive Statistik: Du misst die Länge eines Betonfertigteils immer wieder. Welche Grundge
  "stat-1ub7wk0": 1,  // Deskriptive Statistik: Ordne jedem Merkmal seine Art zu.
  "stat-aci0ry": 1,  // Deskriptive Statistik: Ordne jeder Skala ein passendes Beispiel zu.
  "stat-1vg0lz6": 2,  // Deskriptive Statistik: Auf einer Intervallskala wie der Temperatur in °C darf man sagen: 20 °
  "stat-ewqf2g": 1,  // Deskriptive Statistik: Wie hängen absolute Häufigkeit h(x_j) und relative Häufigkeit f(x_j) z
  "stat-1nb5ja2": 2,  // Deskriptive Statistik: Summenhäufigkeiten kann man für jedes Merkmal bilden, auch für qualita
  "stat-1gssox7": 1,  // Deskriptive Statistik: Was gibt der Wert F(x) der empirischen Verteilungsfunktion an?
  "stat-1yijd3m": 2,  // Deskriptive Statistik: Welche Form hat die empirische Verteilungsfunktion?
  "stat-1a2ry4i": 2,  // Deskriptive Statistik: Faustregel aus Beispiel 3.4: Wie viele Klassen bildest du bei n Messwe
  "stat-89vtd4": 3,  // Deskriptive Statistik: Klassenbildung wie in Beispiel 3.4 (90 Betonwürfel): Reihenfolge?
  "stat-z4v2ve": 3,  // Deskriptive Statistik: Warum legt man die Klassenränder z. B. auf 30,25 statt auf 30,3, wenn 
  "stat-1iymyoe": 1,  // Deskriptive Statistik: Welches Diagramm passt?
  "stat-5qtiab": 2,  // Deskriptive Statistik: Dieselben Daten können je nach Klasseneinteilung ganz unterschiedlich 
  "stat-bcn1cm": 2,  // Deskriptive Statistik: Welche Eigenschaft hat das arithmetische Mittel immer?
  "stat-op9nkd": 1,  // Deskriptive Statistik: Für welchen Wert M wird Σ(x_i − M)² am kleinsten?
  "stat-1ajgjnu": 1,  // Deskriptive Statistik: Wie berechnest du den Mittelwert, wenn jede Ausprägung x_j mit der Häu
  "stat-12knp1p": 2,  // Deskriptive Statistik: Wie bestimmst du den Median bei einer geraden Anzahl n von Werten?
  "stat-1kc0qvn": 3,  // Deskriptive Statistik: Warum nennt man den Median „robust“?
  "stat-ny6lx3": 3,  // Deskriptive Statistik: Liegen Mittelwert und Median weit auseinander, ist das ein Hinweis auf
  "stat-ht5lrp": 2,  // Deskriptive Statistik: Einkommen in Klassen: F = 0,4698 bis 2000 €, F = 0,6048 bis 2500 €. In
  "stat-bp21td": 2,  // Deskriptive Statistik: Median klassierter Daten: Reihenfolge?
  "stat-5m2e9m": 1,  // Deskriptive Statistik: Was ist die Schwäche der Spannweite R = x_max − x_min?
  "stat-vyzr1i": 1,  // Deskriptive Statistik: Ordne die Quartile zu.
  "stat-b1wkh2": 2,  // Deskriptive Statistik: Was zeigt die Box im Boxplot?
  "stat-19f5ml8": 2,  // Deskriptive Statistik: Eine Verteilung steigt links steil an und läuft nach rechts flach aus.
  "stat-149c2ar": 2,  // Deskriptive Statistik: Wann teilst du bei der Varianz durch n − 1 statt durch n?
  "stat-1vwnzwe": 2,  // Deskriptive Statistik: Wovon misst die mittlere absolute Abweichung d laut Folie den Abstand?
  "stat-jhiq3y": 2,  // Deskriptive Statistik: Eine Messreihe mit kleiner Standardabweichung ist automatisch nah am S
  "stat-1ac8ht7": 2,  // Deskriptive Statistik: Was ist eine Randverteilung in einer zweidimensionalen Häufigkeitstabe
  "stat-1398zyy": 1,  // Deskriptive Statistik: Was bedeutet das Vorzeichen der Kovarianz s_XY?
  "stat-17ggk7y": 2,  // Deskriptive Statistik: Warum normiert man die Kovarianz zum Korrelationskoeffizienten r = s_X
  "stat-tutapa": 1,  // Deskriptive Statistik: Ordne |r| der Interpretation zu.
  "stat-1ayh9q7": 2,  // Deskriptive Statistik: r ≈ 0 bedeutet, dass zwischen den Merkmalen überhaupt kein Zusammenhan
  "stat-hxsr7i": 2,  // Matrizen: Elementare Zeilenumformungen ändern den Rang einer Matrix nicht – Dete
  "stat-tdh9bu": 3,  // Matrizen: Laplace-Entwicklung einer 3×3-Matrix: Welches Vorzeichen bekommt der M
  "stat-10lnccb": 3,  // Matrizen: Knobelaufgabe Übung 1: Wie berechnest du die 4×4-Determinante der Trid
  "stat-1j79grg": 2,  // Gleichungssysteme: Alles dieselbe Aussage über eine quadratische Matrix A – ordne zu.
  "stat-1fi0qgh": 2,  // Gleichungssysteme: Determinantenformel: Wie lautet die Inverse?
  "stat-srw8qs": 2,  // Gleichungssysteme: Wie berechnest du den Kofaktor c_ij?
  "stat-1nhkaow": 2,  // Gleichungssysteme: Inverse über die Determinantenformel: Reihenfolge?
  "stat-1b34ogl": 2,  // Gleichungssysteme: Gauß-Jordan: Woran erkennst du, dass du fertig bist?
  "stat-1cd668t": 3,  // Gleichungssysteme: In Übung 2, A3 a) hat A die Zeilen (4 8 2), (1 3 1), (6 14 4). Das Sys
  "stat-dlzg9o": 3,  // Gleichungssysteme: Knobelaufgabe Übung 2: Die Zeilen von A sind Einheitsvektoren und steh
  /* Bauinformatik */
  "binf-10o1mi4": 1,  // Kontrollstrukturen: Ordne das EVA-Prinzip zu.
  "binf-1f73p40": 1,  // Kontrollstrukturen: Wie heißt das Struktogramm noch, und nach welcher Norm ist es geregelt
  "binf-1c3p3d2": 2,  // Kontrollstrukturen: Struktogramm und Aktivitätsdiagramm: Was entspricht sich?
  "binf-1scw43q": 1,  // Kontrollstrukturen: Welche Anweisung gehört zu welcher Auswahl?
  "binf-zs10dh": 1,  // Kontrollstrukturen: Was steht in den runden Klammern von if( … )?
  "binf-18iv933": 2,  // Kontrollstrukturen: int x = 15; if (x > 10) A; else if (x > 5) B; else C; – was wird ausge
  "binf-1z0vqr9": 1,  // Kontrollstrukturen: Beispiel „gerade/ungerade“: Welche Bedingung prüft, ob die Zahl z gera
  "binf-1gn9kg6": 2,  // Kontrollstrukturen: Welche Werte darf man laut Folie in switch prüfen?
  "binf-585svm": 3,  // Kontrollstrukturen: int n = 2; switch (n) { case 1: print("eins"); case 2: print("zwei"); 
  "binf-xo64ko": 1,  // Kontrollstrukturen: Wann wird der default-Zweig von switch ausgeführt?
  "binf-154tj6z": 1,  // Kontrollstrukturen: Ordne die Schleifenart zu.
  "binf-oi3e5u": 1,  // Kontrollstrukturen: Bring die drei Teile im Kopf der for-Schleife in die richtige Reihenfo
  "binf-1kfykc3": 2,  // Kontrollstrukturen: In der for-Schleife bedeutet die Abbruchbedingung: Die Schleife bricht
  "binf-10nbcb1": 2,  // Kontrollstrukturen: int i; for (i = 1; i <= 10; i++) { } – welchen Wert hat i nach der Sch
  "binf-149kdgb": 2,  // Kontrollstrukturen: Kleiner Gauß: Was gibt die for-Schleife aus, die alle Zahlen von 1 bis
  "binf-1a6radm": 2,  // Kontrollstrukturen: Was bewirkt for( ; ; )?
  "binf-155dnst": 2,  // Kontrollstrukturen: int i = 10; while (i < 10) { c++; i++; } – wie oft läuft der Block?
  "binf-1b7hdub": 2,  // Kontrollstrukturen: Gleiche Werte, aber als do { c++; i++; } while (i < 10); mit i = 10 – 
  "binf-12hab7h": 1,  // Kontrollstrukturen: break oder continue?
  "binf-18sd70s": 3,  // Kontrollstrukturen: for (int k = 0; k < 5; k++) { if (k == 2) continue; if (k == 4) break;
  "binf-erfsxq": 1,  // Kontrollstrukturen: Welche Werte liefert Math.random()?
  "binf-yyerg5": 2,  // Kontrollstrukturen: Warum steht in int zahl = (int)(Math.random() * 10); der Cast (int)?
  "binf-2zhq6d": 2,  // Kontrollstrukturen: (int)(Math.random() * 10) kann auch die Zahl 10 liefern.
  /* Baukonstruktion */
  "bauko-pd967j": 2,  // Lastfallkombination: Vorgehen bei der Bemessung laut Übung 3: Reihenfolge?
  "bauko-1unldu": 1,  // Lastfallkombination: Was bedeutet „führende veränderliche Einwirkung“ in der Grundkombinati
  "bauko-1fz3uj1": 2,  // Lastfallkombination: Beispiel 5 hat Schnee und Wind. Wie viele Kombinationen mit beiden Las
  "bauko-bqaea4": 1,  // Lastfallkombination: Welche Beiwerte nutzt Übung 3?
  "bauko-a22pty": 3,  // Lastfallkombination: Beispiel 6 ist ein Versammlungsraum. Mit welchem ψ₀ wird die Nutzlast 
  "bauko-1rof51c": 3,  // Lastfallkombination: Beispiel 5: Wie kommt die ständige Last g = 0,7 kN/m (auf der Dachfläc
  "bauko-1ivzgy1": 3,  // Lastfallkombination: Beispiel 5: Die Formel liefert in Aachen s_k = 0,63 kN/m². Mit welchem
  "bauko-mhml0r": 1,  // Lastfallkombination: Wie wird aus der Flächenlast eine Linienlast pro Sparren?
  "bauko-678v3m": 3,  // Lastfallkombination: Der Sparren kragt links 0,885 m und rechts 1,47 m über die Auflager. W
  "bauko-4twmxe": 2,  // Lastfallkombination: Wie groß ist das Moment am Einspannpunkt eines Kragarms unter Gleichla
  "bauko-2yju7q": 2,  // Lastfallkombination: Wo liegt das größte Feldmoment eines Trägers unter Gleichlast?
  "bauko-7davtd": 3,  // Lastfallkombination: In Beispiel 5 liegen die maximalen Feldmomente von g, s und w genau an
  "bauko-7oyli2": 3,  // Lastfallkombination: Zweifeldträger mit Gleichlast q: Wie groß ist die Auflagerkraft der Mi
  "bauko-5fkhi5": 2,  // Lastfallkombination: Wie rechnest du in Beispiel 6 Momente am Dreifeldträger mit gleichen S
  "bauko-l3bglf": 2,  // Lastfallkombination: Dreifeldträger: Wo stellst du die Nutzlast hin, um das größte Feldmome
  "bauko-6xtjz2": 2,  // Lastfallkombination: Und für das größte Stützmoment über Stütze C?
  "bauko-1lu3ok2": 2,  // Lastfallkombination: Das Eigengewicht stellt man bei der ungünstigen Laststellung ebenfalls
  "bauko-1fek2ej": 3,  // Lastfallkombination: Wie bekommst du in Beispiel 6 das Feldmoment, wenn die Tafel nur die S
  /* DAP */
  "dap-bukj5y": 2,  // R-Grundlagen: Deine CSV-Datei trennt die Spalten mit Semikolon. Wie liest du sie mit
  "dap-zb6qc7": 1,  // R-Grundlagen: Eine .xlsx-Datei kannst du mit Base-R direkt öffnen.
  "dap-15dca52": 1,  // R-Grundlagen: Welche Funktion zeigt dir was über einen eingelesenen Datensatz?
  "dap-s99rr9": 2,  // R-Grundlagen: Ordne den Mittelwert seiner R-Zeile zu.
  "dap-1dpx21q": 2,  // R-Grundlagen: Wie bestimmst du in Base-R den Modalwert (häufigsten Wert)?
  "dap-mom9xu": 1,  // R-Grundlagen: Was liefert range(x)?
  "dap-16xtsox": 2,  // R-Grundlagen: Wie berechnest du in der Übung den Interquartilsabstand?
  "dap-1dtzuet": 2,  // R-Grundlagen: Was macht x[order(-x), ]?
  "dap-ktknex": 3,  // R-Grundlagen: Welche Zeile wählt alle Wege unter 15 Minuten von Frauen (HP_SEX == 2)
  "dap-2xr94c": 2,  // R-Grundlagen: Wie schließt du alle Personen ohne Führerschein (P_FS_PKW == 2) aus?
  "dap-1o68nhq": 2,  // R-Grundlagen: na.omit(x) entfernt aus einem Data Frame jede Zeile, in der mindestens
  "dap-1ci8abw": 2,  // R-Grundlagen: Wozu dient factor(x, levels = c(1, 2, 3), labels = c('walk', 'bicycle'
  "dap-1o9eqd8": 3,  // R-Grundlagen: Was liefert welche Tabelle?
  "dap-ajkdjn": 2,  // R-Grundlagen: Was berechnet aggregate(wegmin ~ P_FS_PKW, data = x, FUN = mean)?
  "dap-11jm411": 3,  // R-Grundlagen: mean(x$zweck) ergibt einen sinnvollen Wert, solange zweck als Zahl kod
  /* Physik */
  "phys-16jva8e": 2,  // Kraftgesetze: Zwei Kugeln ziehen sich an. Wie ändert sich die Kraft, wenn du den Abs
  "phys-11qqueq": 1,  // Kraftgesetze: Wie groß ist die Gravitationskonstante G?
  "phys-19gmvj8": 2,  // Kraftgesetze: Zwei Körper mit je 1 kg im Abstand 1 m: Wie stark ziehen sie sich an?
  "phys-vlieak": 2,  // Kraftgesetze: Gewichtskraft und Normalkraft auf eine ruhende Kiste sind ein Kraft-Ge
  "phys-lgsdsn": 2,  // Kraftgesetze: Was misst eine Waage eigentlich?
  "phys-112e513": 2,  // Kraftgesetze: Eine Kiste bleibt bei 100 N waagerechter Zugkraft stehen. Wie groß ist
  "phys-1iq4rp5": 1,  // Kraftgesetze: Ordne jeder Kraft ihr Gesetz zu.
  "phys-nurv92": 2,  // Kraftgesetze: Welche Richtwerte gelten für Gummi auf trockenem Beton?
  "phys-1h4q9rl": 2,  // Kraftgesetze: Welche Kraft schiebt dich beim Gehen nach vorn?
  "phys-yn4tpg": 2,  // Kraftgesetze: Ein Klotz auf einer schiefen Ebene beginnt beim Winkel α_S gerade zu r
  "phys-1exj7dy": 2,  // Kraftgesetze: Ein Körper wird aus der Ruhe fallen gelassen. Wie groß ist seine Besch
  "phys-14ofg4v": 2,  // Kraftgesetze: Wie groß ist die Endgeschwindigkeit beim Fall mit Luftwiderstand?
  "phys-1e8asae": 3,  // Kraftgesetze: Hat ein fallender Körper seine Endgeschwindigkeit erreicht, bleibt er 
  "phys-wlf2d4": 2,  // Kraftgesetze: Du fährst doppelt so schnell. Wie ändert sich der Luftwiderstand?
  "phys-3iinro": 1,  // Kraftgesetze: Eine Kugel kreist an einem Seil auf einer reibungsfreien, waagerechten
  "phys-1v9ze2x": 1,  // Kraftgesetze: Was bewirkt eine ideale feste Rolle?
  "phys-7d8n53": 3,  // Arbeit und Energie: Blatt 5, A1: Drei konstante Kräfte verschieben eine Truhe um d. Wie be
  "phys-1soiqb": 3,  // Arbeit und Energie: Blatt 5, A1b: Die Gesamtarbeit an der Truhe ist negativ. Was folgt dar
  "phys-c6xfa1": 3,  // Arbeit und Energie: Blatt 5, A2: Behälter (Masse m) an einer losen Rolle, gleichmäßig um d
  "phys-8lhei1": 2,  // Arbeit und Energie: Blatt 5, A3: Wie liest du die Arbeit aus einem F(x)-Diagramm ab?
  "phys-1t2htns": 3,  // Arbeit und Energie: Blatt 5, A4: Ein Objekt wird aus der Ruhe gleichmäßig beschleunigt. Wi
  "phys-i2s12e": 3,  // Arbeit und Energie: Blatt 5, A5: Ein PKW fährt mit konstantem v, Luftwiderstand ist der ei
  "phys-17bbz7u": 3,  // Arbeit und Energie: Blatt 5, A6: Allradwagen soll so schnell wie möglich auf v_max beschle
  /* Baukonstruktion */
  "bauko-7v0o7g": 1,  // Dächer: Ordne die Dachneigung α der Dachart zu.
  "bauko-1jejwky": 1,  // Dächer: Wie wird ein Sparren im Pfettendach hauptsächlich beansprucht?
  "bauko-1m13nn": 2,  // Dächer: Was entsteht beim Sparrendach unter vertikaler Last am Sparrenfuß?
  "bauko-1v63z1r": 2,  // Dächer: Warum darf unter einem Sparrendach keine Holzbalkendecke liegen?
  "bauko-hnm61j": 1,  // Dächer: Pfettendach: Ordne die gleichbedeutenden Begriffe zu.
  "bauko-n1y1kh": 2,  // Dächer: Welches Bauteil verbindet beim Pfettendach den Sparren mit der Fußpfet
  "bauko-1m2vf8o": 2,  // Dächer: Welche zwei Arten von Kehlbalkendächern unterscheidet die Vorlesung?
  "bauko-21co2t": 2,  // Dächer: Welcher Vorteil gehört zum Sparrendach (nicht zum Pfettendach)?
  "bauko-1r5f7xj": 2,  // Dächer: Welcher Nachteil gehört zum Pfettendach?
  "bauko-fmjdx8": 3,  // Dächer: Wo sind beim Sparrendach Dachüberstände besonders schwierig?
  "bauko-1lq8eca": 2,  // Dächer: Flachdächer: Ordne zu.
  "bauko-z7qkl9": 1,  // Dächer: Woraus werden Flachdächer laut Vorlesung tragend hergestellt?
  "bauko-kh3px6": 1,  // Dächer: Welche Lasten setzt man auf geneigten Dächern an?
  /* Bauinformatik */
  "binf-phptme": 2,  // Datentypen: int a = 5; int b = a; a = 6; – was gibt println("a = " + a + " und b =
  "binf-1fkrkem": 3,  // Datentypen: { int var2 = 56; } System.out.println(var2); – was passiert?
  "binf-zt1yzg": 3,  // Datentypen: int i; long l; float f; double d; – welche Zuweisung braucht einen Cas
  "binf-mgf3fs": 3,  // Operatoren: Welchen Wert hat long l1 = 20 / 6; ?
  "binf-1yq6mpb": 2,  // Operatoren: Welchen Wert hat int i1 = -20 % 6; ?
  "binf-1s0w5pr": 3,  // Operatoren: int i2 = 5; i2 += 10; – welchen Wert hat i2?
  "binf-1g5pjdx": 1,  // Operatoren: Welche Ausgabe erzeugt die Anweisung?
  "binf-1ncf22c": 2,  // Operatoren: Was gibt System.out.println(5.0 / 2.0 + 5 / 2); aus?
  "binf-42ssdm": 3,  // Operatoren: Warum ergibt 2.3 + 7 / 2 * 4.1 nicht 16.65?
  "binf-ycudha": 3,  // Operatoren: Dein Rechner-Programm arbeitet mit int-Variablen 5 und 2. Was liefert 
  /* Baustoffkunde */
  "bsk-8mh7bt": 3,  // Gefüge und Kristalle: Welche Struktur steuert welche Eigenschaft? Ordne zu.
  "bsk-1hbtpr3": 3,  // Gefüge und Kristalle: Was gilt für einen amorphen Stoff im Vergleich zum kristallinen Stoff 
  "bsk-14kfymo": 1,  // Gefüge und Kristalle: Wie ist die Porosität p eines Werkstoffs definiert?
  "bsk-1j0xrlz": 1,  // Gefüge und Kristalle: Bei welchem Werkstoff ist die Porosität bewusst eingestellt?
  "bsk-1x8ccep": 2,  // Ermüdung und Verbundwerkstoffe: Wie stark erhöht eine Kerbe die Spannung typischerweise gegenüber der 
  "bsk-15a8ggg": 3,  // Ermüdung und Verbundwerkstoffe: Bruchbild – ordne zu.
  "bsk-bn8566": 2,  // Ermüdung und Verbundwerkstoffe: Ermüdung: Ordne die Größe ihrer Formel zu.
  "bsk-d84mwf": 1,  // Ermüdung und Verbundwerkstoffe: Welche Festigkeit ist gemeint?
  "bsk-1iy2rd1": 3,  // Ermüdung und Verbundwerkstoffe: Was zeigt ein Smith-Diagramm?
  "bsk-1b4tcl0": 2,  // Ermüdung und Verbundwerkstoffe: Wie läuft ein Ermüdungsbruch ab? Bring in die richtige Reihenfolge.
  "bsk-bjh8qu": 3,  // Ermüdung und Verbundwerkstoffe: Was besagt die Palmgren-Miner-Regel?
  "bsk-1w70lig": 2,  // Ermüdung und Verbundwerkstoffe: Wie ordnet die Vorlesung Beton und Stahlbeton als Verbundwerkstoffe ei
  "bsk-1utyxs8": 1,  // Ermüdung und Verbundwerkstoffe: Grundmodelle der Verbundwerkstoffe – ordne zu.
  "bsk-2azmwk": 2,  // Ermüdung und Verbundwerkstoffe: Wovon hängt die Rohdichte eines Verbundwerkstoffs ab?
  "bsk-d9hloa": 2,  // Ermüdung und Verbundwerkstoffe: Warum ist GFK in Faserrichtung steifer als quer dazu?
  "bsk-1lr9f7v": 3,  // Ermüdung und Verbundwerkstoffe: Beton: hartes Modell 48 750, weiches Modell 34 286 N/mm². Was misst ma
  /* Baukonstruktion */
  "bauko-ax85c8": 2,  // Holzbemessung: Der Sparren 8/16 hat am Auflager eine Kerve von 3 cm. Mit welchem Wide
  "bauko-1vkxe82": 3,  // Holzbemessung: Wie groß ist der Höhenfaktor k_h für die Nettohöhe h = 130 mm (C24)?
  "bauko-bmok3": 3,  // Holzbemessung: Du suchst die Sparrenhöhe und hast aus dem Biegenachweis h = 12 cm erh
  "bauko-pn2mf4": 3,  // Holzbemessung: Warum wurde der Spannungsnachweis im Feld in Beispiel 5 eigentlich nic
  "bauko-12mi4sw": 3,  // Holzbemessung: Für den Durchbiegungsnachweis des Sparrens brauchst du die Last senkre
  "bauko-1uhx4lc": 3,  // Holzbemessung: Welche Spannweite setzt du für die Durchbiegung des Sparrens an?
  "bauko-1bcrnhk": 3,  // Holzbemessung: Woher kommt der Faktor 76,8 in w = q · l⁴ / (76,8 · E · I)?
  "bauko-gpn9g4": 2,  // Holzbemessung: Du rechnest w = q · l⁴ / (76,8 · E · I) mit q in kN/m, l in m, E in N/
  "bauko-gdpecl": 2,  // Holzbemessung: Welcher Beiwert kommt aus welcher Tafel?
  "bauko-mmkovj": 3,  // Holzbemessung: Der Durchbiegungsnachweis ist nicht erfüllt (w_inst = 1,48 cm > l/300 
  "bauko-30149g": 2,  // Schnittgrößen und Aussteifung: Warum setzt man bei Pfetten Gerbergelenke ein?
  "bauko-1xirmdj": 3,  // Schnittgrößen und Aussteifung: Wo liegt das Gerbergelenk im Zweifeldträger mit gleichen Stützweiten l
  "bauko-18suirw": 3,  // Schnittgrößen und Aussteifung: Die Pfette hat ungleiche Felder (4,06 m und 3,38 m). Darf man die Tafe
  "bauko-hh3tz9": 3,  // Rechenweg: Wie wird aus den Sparren-Auflagerkräften die Last auf der Mittelpfette
  "bauko-ts9wal": 3,  // Rechenweg: Ein Deckenbalken hat die lichte Weite 4,50 m und liegt auf 10 cm breit
  "bauko-s1dxcw": 3,  // Holzbemessung: Holzbalkendecke im beheizten Wohnraum mit Eigengewicht und Nutzlast: W
  /* Physik */
  "phys-ayu031": 1,  // Arbeit und Energie: Wann verrichtet eine Kraft im physikalischen Sinn Arbeit?
  "phys-9d7n0o": 1,  // Arbeit und Energie: Was ist 1 Joule?
  "phys-15xksii": 2,  // Arbeit und Energie: Eine Person (70 kg) steigt ein Stockwerk (3 m) hoch. Welche Größenordn
  "phys-f5uf0q": 2,  // Arbeit und Energie: Mit welcher Kraft muss ein Seil eine Last (m) gleichmäßig eine Rampe m
  "phys-w8a33j": 2,  // Arbeit und Energie: Über eine Rampe braucht man weniger Kraft – deshalb ist auch die Arbei
  "phys-j55wx9": 3,  // Arbeit und Energie: Ein Schlitten wird mit 100 N an einer Leine unter 60° gegen den Boden 
  "phys-gq1eca": 2,  // Arbeit und Energie: Ordne das Vorzeichen der Arbeit zu (W = F·s·cos φ).
  "phys-lggy2n": 2,  // Arbeit und Energie: Wie bestimmst du die Arbeit einer Kraft, die sich unterwegs ändert (z.
  "phys-1hmfqtr": 3,  // Arbeit und Energie: Eine Feder (k = 200 N/m) wird um 0,20 m gedehnt. Wie groß ist die Arbe
  "phys-i31v78": 2,  // Arbeit und Energie: Bei einer konstanten Kraft hängt die Arbeit nur von Anfangs- und Endpu
  "phys-k5fbbm": 1,  // Arbeit und Energie: Ein Körper (50 kg) wird gleichmäßig eine Rampe 2 m hochgezogen. Seilkr
  "phys-1bmtgoj": 3,  // Arbeit und Energie: Was ist Leistung?
  "phys-1hgimvz": 2,  // Arbeit und Energie: Eine Person (70 kg) läuft in 6,0 s ein Stockwerk (3,0 m) hoch. Wie gro
  "phys-1isqrpv": 2,  // Arbeit und Energie: Welche Formel verbindet Leistung, Kraft und Geschwindigkeit?
  "phys-p5vmcc": 2,  // Arbeit und Energie: Wie lange liefert jedes Gerät 1 kWh?
  "phys-dwmyzt": 3,  // Arbeit und Energie: Ein Wasserkocher (2 kW) läuft 3 Minuten. Wie viel Energie ist das?
  "phys-131s2lt": 2,  // Arbeit und Energie: Eine Mikrowelle mit der Aufschrift 1000 W zieht immer 1000 W.
  "phys-thk6h9": 2,  // Arbeit und Energie: Wie lautet der Arbeitssatz?
  "phys-haz02v": 2,  // Arbeit und Energie: Ein Auto fährt doppelt so schnell. Was passiert mit kinetischer Energi
  "phys-1csjmdy": 3,  // Arbeit und Energie: Ein Auto (1000 kg) beschleunigt von 10 m/s auf 20 m/s. Wie viel Arbeit
  "phys-1dh1xcz": 1,  // Arbeit und Energie: Kinetische Energie kann negativ werden, wenn sich ein Körper rückwärts
  "phys-je69k2": 3,  // Kraftgesetze: Blatt 5, A1: Ein Block liegt am Boden, eine Kraft P zieht ihn senkrech
  "phys-1c276dm": 3,  // Kraftgesetze: Blatt 5, A1: Die waagerechte Kraft F ist kleiner als μ_s·(mg − P). Wie
  "phys-1fv9o7b": 3,  // Kraftgesetze: Blatt 5, A2: Unter welchem Winkel α zieht man eine Kiste am besten, um
  "phys-ig9f4c": 3,  // Kraftgesetze: Blatt 5, A3: Überhöhte Kurve – in welche Richtung zeigt die Haftreibun
  "phys-1vyn6ls": 3,  // Kraftgesetze: Blatt 5, A4: Am höchsten Punkt des Riesenrads ist die Normalkraft des 
  "phys-18xedzh": 3,  // Kraftgesetze: Blatt 5, A4: Das Riesenrad dreht doppelt so schnell. Wie groß ist die 
  "phys-v733ao": 3,  // Kraftgesetze: Blatt 5, A5: Ein Flugzeug fliegt eine waagerechte Kurve mit Querneigun
  "phys-od8ubl": 3,  // Kraftgesetze: Blatt 5, A6: Kugel an zwei Seilen (gleichseitiges Dreieck) am rotieren
  /* Baustoffkunde */
  "bsk-fjaba8": 1,  // Phasendiagramme und Legierungen: Was zeigt ein Phasendiagramm?
  "bsk-1bnpmh6": 2,  // Phasendiagramme und Legierungen: Welcher Zustand entsteht beim Mischen und Abkühlen? Ordne zu.
  "bsk-183rq9b": 2,  // Phasendiagramme und Legierungen: Welche Bedingungen müssen für volle Löslichkeit zweier Metalle erfüllt
  "bsk-1cef5w": 1,  // Phasendiagramme und Legierungen: Wie gut sind die Komponenten ineinander löslich? Ordne zu.
  "bsk-l4jd29": 1,  // Phasendiagramme und Legierungen: Linien im Zustandsdiagramm – ordne zu.
  "bsk-l8vufp": 2,  // Phasendiagramme und Legierungen: Hebelgesetz im Zweiphasengebiet: Wie groß ist der Anteil der festen Ph
  "bsk-1qr7c2k": 2,  // Phasendiagramme und Legierungen: Cu–Ni-Legierung mit c₀ = 40 M.-% Ni. Bei einer Temperatur gilt c_L = 3
  "bsk-1r8d7zo": 3,  // Phasendiagramme und Legierungen: Wie lautet die Gibbs’sche Phasenregel bei konstantem Druck?
  "bsk-1v0ieke": 2,  // Phasendiagramme und Legierungen: Phasenregel F = K + 1 − P: Was zeigt die Abkühlkurve?
  "bsk-1v8pzeb": 2,  // Phasendiagramme und Legierungen: Eine Cu–Ni-Legierung erstarrt wie ein reines Metall bei einer festen T
  "bsk-o6cyap": 3,  // Phasendiagramme und Legierungen: Wofür werden Kupfer-Nickel-Legierungen vor allem eingesetzt?
  "bsk-1ju0trf": 2,  // Phasendiagramme und Legierungen: Blei und Aluminium lassen sich nicht legieren. Wie nutzt man die Kombi
  "bsk-2gy4el": 2,  // Phasendiagramme und Legierungen: Pb–Sn-Diagramm: Was liegt im Bereich vor?
  "bsk-w1hzhe": 1,  // Phasendiagramme und Legierungen: Was ist das Eutektikum im Blei-Zinn-System?
  "bsk-151jijj": 2,  // Phasendiagramme und Legierungen: Im Pb–Sn-System sinkt die Löslichkeit von Sn in Pb (und umgekehrt) mit
  "bsk-1pmsq1j": 1,  // Phasendiagramme und Legierungen: Wo liegt die Grenze zwischen Stahl und Gusseisen?
  "bsk-nk35d": 2,  // Phasendiagramme und Legierungen: Modifikationen des reinen Eisens – ordne zu.
  "bsk-v7asf4": 2,  // Phasendiagramme und Legierungen: Welche Eisenmodifikation kann am meisten Kohlenstoff lösen?
  "bsk-1pw4ggf": 3,  // Phasendiagramme und Legierungen: Besondere Punkte im Eisen-Kohlenstoff-Diagramm – ordne zu.
  "bsk-1hxweop": 2,  // Phasendiagramme und Legierungen: Was ist was im Fe-C-System?
  "bsk-vvk85b": 3,  // Phasendiagramme und Legierungen: Linien im Eisen-Kohlenstoff-Diagramm – ordne zu.
  "bsk-5wn5ou": 3,  // Phasendiagramme und Legierungen: Gefüge eines Stahls bei Raumtemperatur – ordne zu.
  "bsk-3r8op8": 3,  // Phasendiagramme und Legierungen: Wie unterscheiden sich Primär- und Sekundärzementit?
  "bsk-rpqy5r": 2,  // Phasendiagramme und Legierungen: Wie verändern sich die Eigenschaften von Stahl mit steigendem Kohlenst
  "bsk-rp29hr": 2,  // Phasendiagramme und Legierungen: Warum hat Betonstahl weniger als etwa 0,22 M.-% Kohlenstoff?
  "bsk-vbab14": 3,  // Phasendiagramme und Legierungen: Werkstoff und typische Anwendung – ordne zu.
  "bsk-1y1w1ad": 2,  // Phasendiagramme und Legierungen: Warum lässt sich Gusseisen industriell so gut gießen?
  /* DAP */
  "dap-1wg49rj": 1,  // Grenzwertsatz und Konfidenzintervalle: Was passiert, wenn man viele Verteilungen (auch nicht normalverteilte)
  "dap-a6xsie": 2,  // Grenzwertsatz und Konfidenzintervalle: Addiert man zwei Normalverteilungen, entsteht wieder eine Normalvertei
  "dap-rh1pgs": 2,  // Grenzwertsatz und Konfidenzintervalle: Warum sind z. B. Körpergrößen in der Natur oft normalverteilt?
  "dap-w0j86d": 2,  // Grenzwertsatz und Konfidenzintervalle: Man zieht viele Stichproben aus einer beliebig verteilten Grundgesamth
  "dap-d6t0t0": 2,  // Grenzwertsatz und Konfidenzintervalle: Wie groß müssen die Stichproben laut Folie sein, damit der Grenzwertsa
  "dap-1cmfadd": 1,  // Grenzwertsatz und Konfidenzintervalle: Wie heißt σ/√n, die Standardabweichung der Stichprobenmittelwerte?
  "dap-1caxe6h": 2,  // Grenzwertsatz und Konfidenzintervalle: Konfidenzintervall – ordne zu.
  "dap-rhtmi7": 3,  // Grenzwertsatz und Konfidenzintervalle: Für γ = 0,95 nimmt man z = 1,96. Bei welchem Wert der Tabelle Φ(z) lie
  "dap-ouewco": 2,  // Grenzwertsatz und Konfidenzintervalle: Welcher z-Wert gehört zum Konfidenzniveau?
  "dap-1y0jxyb": 2,  // Grenzwertsatz und Konfidenzintervalle: Wie lautet das Konfidenzintervall für den Mittelwert, wenn σ der Grund
  "dap-ufd6d5": 3,  // Grenzwertsatz und Konfidenzintervalle: Folienbeispiel: 10 Studentinnen, x̄ = 170 cm, σ = 6,2 cm bekannt, γ = 
  "dap-1gg2liu": 2,  // Grenzwertsatz und Konfidenzintervalle: Konfidenzintervalle mit bekannter Standardabweichung σ kommen in der P
  "dap-1uojecd": 1,  // Grenzwertsatz und Konfidenzintervalle: Was bedeutet „degrees of freedom“ (Freiheitsgrade)?
  "dap-13fo4mi": 2,  // Grenzwertsatz und Konfidenzintervalle: Warum teilt man bei der Stichprobenvarianz s² durch n − 1 statt durch 
  "dap-16jbq9g": 2,  // Testverteilungen: Welche Testverteilung entsteht? Ordne zu.
  "dap-1gu344": 3,  // Testverteilungen: Kennwerte der Testverteilungen – ordne zu.
  "dap-z7wm72": 1,  // Testverteilungen: Wie verändert sich die Chi-Quadrat-Verteilung mit wachsender Zahl der 
  "dap-deygws": 1,  // Testverteilungen: Wie unterscheidet sich die t-Verteilung von der Standardnormalverteilu
  "dap-1foq1j0": 2,  // Testverteilungen: Warum ist das t-Intervall breiter als das z-Intervall?
  "dap-88jnc6": 2,  // Testverteilungen: Konfidenzintervall für μ mit unbekanntem σ: Wie viele Freiheitsgrade h
  "dap-adae9o": 3,  // Testverteilungen: Gleiches Beispiel wie in L04, aber s = 6,2 cm aus der Stichprobe (n = 
  "dap-xp0cjs": 1,  // Testverteilungen: Binomialverteilung: Was gibt der Binomialkoeffizient (n über x) an?
  "dap-1wob3n": 3,  // Testverteilungen: Wie wahrscheinlich sind genau zwei Sechsen bei fünf Würfen?
  "dap-18wir5f": 2,  // Testverteilungen: Zehnmal würfeln – erwartete Zahl der Erfolge μ = n·p. Ordne zu.
  "dap-1dnizm4": 3,  // Grenzwertsatz und Konfidenzintervalle: Wie lautet das Konfidenzintervall für einen Anteil p in der Grundgesam
  "dap-2i1cky": 3,  // Grenzwertsatz und Konfidenzintervalle: Warum nimmt man beim Anteils-Intervall t statt z?
  "dap-ckrtbf": 3,  // Grenzwertsatz und Konfidenzintervalle: 200 Studierende, 180 mit Führerschein, γ = 0,95 (t = 1,97). Welches In
  "dap-1slz1ez": 3,  // Grenzwertsatz und Konfidenzintervalle: Das t-Intervall für Anteile ist besonders genau, wenn n klein und p na
  "dap-15k32ei": 1,  // Grenzwertsatz und Konfidenzintervalle: Deskriptive oder induktive Statistik? Ordne zu.
  "dap-182zx25": 3,  // Grenzwertsatz und Konfidenzintervalle: Welche R-Funktion macht was (L05-Demo)?
  "dap-ybn4nl": 3,  // R-Grundlagen: Exercise 3: Wie zählst du in R die Wege mit mindestens 90 Minuten Daue
  "dap-s9zedh": 3,  // R-Grundlagen: Wie wählst du Wege aus, die mit dem Rad oder zu Fuß (hvm_imp < 3) in N
  "dap-r5abwf": 2,  // R-Grundlagen: Datensatz mit den 5000 längsten Fußwegen: Bring die Befehle in die ric
  "dap-18hnowe": 3,  // R-Grundlagen: Runden in R – ordne zu (Wert 3,4 km).
  "dap-762ed5": 3,  // R-Grundlagen: Wie ersetzt du die Codes 1, 2, 3 … der Altersgruppe durch lesbare Beze
  "dap-5xlmys": 3,  // R-Grundlagen: Was bewirkt prop.table(table(alter, klasse), 1) * 100?
  "dap-1vg2c3c": 3,  // R-Grundlagen: Wie berücksichtigst du in der Kreuztabelle die Gewichtungsfaktoren W_G
  /* Bauinformatik */
  "binf-qrukn0": 1,  // Felder und Suchen: Wozu braucht man ein Feld (Array)?
  "binf-1yh8dni": 1,  // Felder und Suchen: Was macht die Zeile? Ordne zu.
  "binf-4o0phs": 1,  // Felder und Suchen: int[] noten = new int[6]; Welchen Index hat das letzte Element?
  "binf-15n1kh1": 1,  // Felder und Suchen: Was passiert bei noten[6] = 3; wenn noten die Länge 6 hat?
  "binf-13u2nqq": 2,  // Felder und Suchen: int[] a = new int[3]; a[0] = 4; a[1] = 7; a[2] = a[1] + 1; – Welchen W
  "binf-xo32iy": 2,  // Felder und Suchen: double[][] feld = new double[3][5]; – Was bedeuten die Zahlen?
  "binf-1n153gw": 1,  // Felder und Suchen: double[][] feld = new double[3][5]; – Was liefert der Ausdruck?
  "binf-vuisxx": 2,  // Felder und Suchen: int[][] m = {{1, 4, 7}, {2, 8, 1}, {9, 3, 5}}; – Welchen Wert hat m[1]
  "binf-a6hqo": 2,  // Felder und Suchen: Wie gibst du ein ganzes eindimensionales Feld lesbar aus?
  "binf-26mzq1": 2,  // Felder und Suchen: System.arraycopy(woche, 0, arbeitswoche, 0, 5); – Was passiert?
  "binf-1rshaxt": 3,  // Felder und Suchen: Parameter von System.arraycopy(src, src_pos, dst, dst_pos, length) – o
  "binf-169x9uj": 3,  // Felder und Suchen: Was versteht man unter der Zeitkomplexität eines Algorithmus?
  "binf-uwrc6t": 1,  // Felder und Suchen: Zeitkomplexität im worst case – ordne zu (n Elemente).
  "binf-15d0mjx": 2,  // Felder und Suchen: Was setzt die binäre Suche voraus?
  "binf-2azvzp": 1,  // Felder und Suchen: Lineare Suche: Warum heißt die Bedingung while (i < feld.length && fel
  "binf-ae5p5j": 3,  // Felder und Suchen: Lineare Suche: Woran erkennt das Programm nach der Schleife, dass z ni
  "binf-pkt6f7": 2,  // Felder und Suchen: Binäre Suche: Bring einen Durchlauf in die richtige Reihenfolge.
  "binf-6iut34": 2,  // Felder und Suchen: Liste {1, 3, 4, 5, 7, 11, 12, 27, 29, 30, 33, 35, 47, 49}, gesucht 11.
  "binf-8x7ctw": 3,  // Felder und Suchen: Gleiche Liste, gesucht 11: Nach wie vielen Durchläufen findet die binä
  "binf-9t2z1k": 2,  // Operatoren: Übung 4, A1a: int a = 10, b = 11, c = 10; – Welcher Ausdruck ergibt fa
  "binf-i2ypu7": 3,  // Operatoren: float f = 2.0000000000001f; double d = 2.0000000000001; – Was ergeben 
  "binf-1cvm4gb": 2,  // Operatoren: Übung 4, A1b: boolean A = false, B = true, C = true; – Welcher Ausdruc
  "binf-1k332dt": 2,  // Operatoren: Welcher Operator wird in A || B && C zuerst ausgewertet?
  "binf-bzcwb1": 3,  // Kontrollstrukturen: Übung 4, A3: Welche Bedingung erkennt sicher ungerade Zahlen, auch neg
  "binf-1t1upcb": 2,  // Kontrollstrukturen: Übung 4, A3c: Wie prüfst du, ob a durch 7 teilbar ist?
  "binf-1v3zbk2": 2,  // Kontrollstrukturen: WhatsYourNumber: Welche Zahlen liefert (int)(Math.random() * 5 + 1)?
  "binf-1jiqt08": 2,  // Kontrollstrukturen: Warum steht in WhatsYourNumber Integer.parseInt(zahlTxt)?
  "binf-15f1b93": 3,  // Kontrollstrukturen: WhatsYourNumber mit Tipp (A5): Bring die Prüfungen in eine sinnvolle R
  "binf-p1ih2b": 3,  // Kontrollstrukturen: Mini-Taschenrechner (A6): Wo fängst du die Division durch 0 ab?
  "binf-a8x6kn": 2,  // Kontrollstrukturen: Wofür ist der default-Zweig im Taschenrechner da?
  "binf-b4ifaa": 3,  // Kontrollstrukturen: A6b: Der Doppelpunkt „:“ soll auch dividieren. Wie geht das mit einer 
  /* Baukonstruktion */
  "bauko-1883085": 2,  // Tragelemente: Rückblick Dächer – ordne zu.
  "bauko-19vobaw": 1,  // Tragelemente: Zu welcher Gruppe gehört das Tragelement?
  "bauko-1g6069m": 1,  // Tragelemente: Wie wird der Stab belastet? Ordne zu.
  "bauko-1kar3c5": 1,  // Tragelemente: Stabtragwerk und Achsform – ordne zu.
  "bauko-imjnyt": 1,  // Tragelemente: Platte oder Scheibe?
  "bauko-1860lhs": 2,  // Tragelemente: Schale oder Membran?
  "bauko-167402s": 2,  // Tragelemente: Bauwerk und Tragelement – ordne zu.
  "bauko-190opb2": 1,  // Tragelemente: Welche Bauteile bilden laut Vorlesung das Deckensystem?
  "bauko-1dgqnq3": 1,  // Stützen und Knicken: Wie lautet die Eulersche Knicklast?
  "bauko-jwzyu2": 1,  // Stützen und Knicken: Eulerfälle – ordne den Knicklängenbeiwert β zu.
  "bauko-1lphf7a": 2,  // Stützen und Knicken: Eine gelenkige Stütze wird unten eingespannt (Fall 2 → Fall 3). Wie än
  "bauko-1t3nigh": 2,  // Stützen und Knicken: Eine Fahnenmast-Stütze (unten eingespannt, oben frei) hat die gleiche 
  "bauko-vm3r5a": 2,  // Stützen und Knicken: Wie lautet der Knicknachweis einer Holzstütze (Ersatzstabverfahren)?
  "bauko-1d9y0m8": 3,  // Stützen und Knicken: Welcher Imperfektionsbeiwert β_c gilt für Vollholz?
  "bauko-1mmopj0": 3,  // Stützen und Knicken: Wie lautet der bezogene Schlankheitsgrad im Holzbau?
  "bauko-iwmgkv": 2,  // Stützen und Knicken: Formelteile des Holz-Knicknachweises – ordne zu.
  "bauko-1fm8mgt": 2,  // Stützen und Knicken: Ausbildung von Holzstützen – ordne zu.
  "bauko-1y0mgea": 3,  // Stützen und Knicken: Ungleiche Knicklängen: Eine Stahlstütze ist um die z-Achse in halber H
  "bauko-zwp1z7": 2,  // Stützen und Knicken: Stahl: Systemgrößen – ordne zu.
  "bauko-mh5qs6": 3,  // Stützen und Knicken: Welcher Bezugsschlankheitsgrad λ_I gehört zur Stahlsorte?
  "bauko-1wu1229": 2,  // Stützen und Knicken: Wie lautet der Biegeknicknachweis im Stahlbau?
  "bauko-1c7tlp6": 3,  // Stützen und Knicken: Imperfektionsbeiwert α der Knickspannungslinie – ordne zu.
  "bauko-1dehwnh": 3,  // Stützen und Knicken: Wie berechnet man den Abminderungsbeiwert χ?
  "bauko-ag13sx": 2,  // Stützen und Knicken: Stahlstützenfuß – welche Lasten werden aufgenommen?
  "bauko-1o6bta5": 1,  // Stützen und Knicken: Welche Bauweisen von Verbundstützen zeigt die Vorlesung?
};
