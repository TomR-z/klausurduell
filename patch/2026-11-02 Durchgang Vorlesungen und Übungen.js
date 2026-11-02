/* Patch-Warteschlange · Durchgang aller Vorlesungen und Übungen (Lücken) · erstellt 02.11.2026
   Hydromechanik Ü01/Ü03/Ü04/Ü05 · Baukonstruktion Ü01/Ü02 · Physik Blatt 1/3 · Statistik Ü1 · DAP L03 · Baustoffkunde Umdruck
   Braucht die Skizzen vt, kruemmer, behaelter aus index.html ab Version 1.5 */
/* Hydromechanik */
mc("hydro", H1, "Ein Schauglas zeigt den Wasserstand an. Wie verhinderst du einen zu großen Anzeigefehler durch Kapillarität?", ["Den Rohrdurchmesser groß genug wählen: D ≥ 4σ/(ρ·g·f)", "Das Röhrchen möglichst dünn machen", "Ein längeres Röhrchen nehmen", "Das Wasser erwärmen"], "Die kapillare Steighöhe ist h = 4σ/(ρ·g·d) – je dicker das Rohr, desto kleiner der Fehler. In Übung 01 reichen für f = 5 mm rund 6 mm Durchmesser.", "Hydromechanik Übung 01, Aufgabe 1.4");
mc("hydro", H2, "Ein Becken ist 2 m tief mit Quecksilber statt Wasser gefüllt. Wie groß ist der Bodendruck?", ["Rund 13,6-mal so groß wie bei Wasser", "Genauso groß", "Halb so groß", "Doppelt so groß"], "p = ρ·g·h: Bei gleicher Tiefe zählt nur die Dichte. Wasser 19,6 kN/m², Quecksilber (13 600 kg/m³) 266,8 kN/m².", "Hydromechanik Übung 01, Aufgabe 2.1");
mc("hydro", H2, "Welchen absoluten Druck hat die Oberfläche eines offenen Beckens?", ["Etwa 100 kPa, den Luftdruck", "0 kPa", "Etwa 10 kPa", "Das hängt von der Tiefe ab"], "Absolut: p_abs = p_atm + ρ·g·z mit p_atm ≈ 100 kPa ≈ 10 m Wassersäule. Der Relativdruck ist an der Oberfläche dagegen 0.", "Hydromechanik Übung 01");
pair("hydro", H5, "Welches Messrohr zeigt welche Linie?", [["Piezometerrohr", "Drucklinie (Lagehöhe + Druckhöhe)"], ["Pitotrohr", "Energielinie (zusätzlich v²/2g)"]], "Das Pitotrohr ist zur Strömung hin geöffnet und staut sie auf – deshalb zeigt es zusätzlich die Geschwindigkeitshöhe. Der Höhenunterschied der beiden Messrohre ist v²/(2g).", "Hydromechanik Übung 05, Aufgabe 5.3/5.4");
mc("hydro", H5, "Pitot- und Piezometerrohr stehen am selben Querschnitt. Was liest du am Höhenunterschied ab?", ["Die Geschwindigkeitshöhe v²/(2g)", "Den Luftdruck", "Die Lagehöhe z", "Den Durchfluss direkt"], "Energiehöhe minus Druckhöhe ergibt v²/(2g). Daraus folgt v = √(2g·Δh) – so misst man Strömungsgeschwindigkeiten.", "Hydromechanik Übung 05");
mc("hydro", H4, "Zwei Wasserhähne (d₁ = 2 cm, d₂ = 1 cm) fließen mit gleicher Geschwindigkeit. Wie teilt sich der Durchfluss auf?", ["4 : 1 – wie die Querschnittsflächen", "2 : 1 – wie die Durchmesser", "1 : 1", "1 : 4"], "Q = v·A und A ~ d². Doppelter Durchmesser heißt vierfache Fläche, also vierfacher Durchfluss.", "Hydromechanik Übung 03, Aufgabe 3.2");
mc("hydro", H5, "Ein Venturirohr verengt sich von d₁ auf d₂ = d₁/3. Wie ändert sich die Geschwindigkeit?", ["Sie wird 9-mal so groß", "Sie wird 3-mal so groß", "Sie bleibt gleich", "Sie wird 3-mal kleiner"], "Kontinuität: v₂/v₁ = A₁/A₂ = (d₁/d₂)² = 9. Den Druckunterschied nutzt man zur Durchflussmessung.", "Hydromechanik Übung 03, Aufgabe 3.7");
mc("hydro", H6, "Wie lautet die Stützkraft in einer Druckrohrströmung?", ["S = p·A + ρ·Q·v", "S = ρ·g·b·h²/2 + ρ·Q·v", "S = ρ·Q·v allein", "S = p·A allein"], "Im Rohr wirkt der Innendruck auf den Querschnitt. Beim Freispiegel tritt an seine Stelle die hydrostatische Kraft ρ·g·b·h²/2, beim freien Strahl (Luftdruck) bleibt nur ρ·Q·v.", "Hydromechanik Übung 05");
mc("hydro", H6, "In welche Richtung drückt das Wasser einen horizontalen Rohrkrümmer?", ["Nach außen, gegen die Umlenkung und in Zuflussrichtung", "Nach innen, zur Krümmungsmitte", "Gar nicht, Druck und Impuls heben sich auf", "Nur senkrecht nach unten"], "Das Wasser muss umgelenkt werden – der Krümmer übt die Kraft dafür aus, und das Wasser drückt mit gleich großer Gegenkraft nach außen. Deshalb braucht man Widerlager.", "Hydromechanik Übung 04, Aufgabe 4.1");
mc("hydro", H7, "Wo breiten sich Störungen (z. B. Wellen) auch stromaufwärts aus?", ["Beim Strömen (Fr < 1)", "Beim Schießen (Fr > 1)", "Nur im Grenzzustand", "Nirgends"], "Beim Strömen ist das Wasser langsamer als eine Oberflächenwelle, die Welle kommt also gegen die Strömung voran. Beim Schießen wird sie mitgerissen.", "Hydromechanik Übung 05");
mc("hydro", H7, "Über einer Sohlschwelle herrscht Grenzzustand. Wie bekommst du daraus den spezifischen Abfluss q?", ["q = √(g·h_gr³)", "q = g·h_gr", "q = h_gr / g", "q = √(2g·h_gr)"], "Aus h_gr = ∛(q²/g) folgt umgekehrt q = √(g·h_gr³). Eine Schwelle mit Grenzzustand ist deshalb ein einfaches Messwehr.", "Hydromechanik Übung 05, Aufgabe 5.6");
/* Baukonstruktion */
mc("bauko", K2, "Wie rechnest du eine Dachlattung (Linienbauteil) in eine Flächenlast um?", ["γ · b · h · Anzahl Lagen / Lattenabstand", "γ · b · h", "γ · Lattenabstand", "Lattung lässt man immer weg"], "Ü02: 4,2 kN/m³ · 0,048 m · 0,024 m · 3 / 0,65 m ≈ 0,02 kN/m². Klein, aber das Verfahren ist das gleiche wie bei Balken.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K2, "Wie kommst du von der Flächenlast in kN/m² zur Last auf einem Sparren in kN/m?", ["Mal Lasteinzugsbreite (Sparrenabstand)", "Mal Sparrenlänge", "Durch den Sparrenabstand", "Mal Dachneigung"], "Ü02: 1,05 kN/m² · 0,65 m + Eigengewicht des Sparrens 0,084 kN/m = 0,77 kN/m.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K5, "Welcher Formbeiwert μ₁ gilt für 30° < α < 60°?", ["μ₁ = 0,8 · (60° − α) / 30°", "μ₁ = 0,8", "μ₁ = 0", "μ₁ = 1,6"], "Bis 30° ist μ₁ = 0,8, ab 60° bleibt kein Schnee liegen (μ₁ = 0). Dazwischen linear: bei 35° ergibt das 0,67.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K5, "Was ist der Schneeüberhang an der Traufe?", ["Eine Linienlast S_e = k · s²/γ entlang der Traufe", "Die Schneelast auf der Leeseite", "Eine zusätzliche Flächenlast auf dem ganzen Dach", "Schnee, der vom Dach rutscht"], "Er wirkt nur am Dachrand. Pro Sparren wird er zur kleinen Einzellast am Sparrenende (Ü02: 0,03 kN).", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K5, "Wie groß ist die Windlast pro Sparren?", ["w = c_pe · q_p · Lasteinzugsbreite", "w = q_p allein", "w = c_pe · Firsthöhe", "w = q_p / c_pe"], "q_p kommt aus Windzone und Höhe, c_pe aus Bereich und Dachneigung. Der Wind wirkt senkrecht zur Dachfläche.", "Baukonstruktion Übung 02, Beispiel 4");
pair("bauko", K5, "Satteldach 35°, Ü02: welcher Außendruckbeiwert c_pe,10?", [["Dachbereich H", "+0,47 (Druck)"], ["Dachbereich I", "−0,33 (Sog)"], ["Dachbereich J", "−0,43 (Sog)"], ["Wand D (Luv)", "+0,8 (Druck)"], ["Wand E (Lee)", "−0,5 (Sog)"]], "Für 35° wird zwischen den Tabellenwerten für 30° und 45° interpoliert. Die Wand auf der Windseite bekommt Druck, die Leeseite Sog.", "Baukonstruktion Übung 02, Beispiel 4");
mc("bauko", K2, "Welche Nutzlast gilt für eine Holzbalkendecke zwischen Wohnräumen?", ["Kategorie A3: q_k = 2,0 kN/m², zusätzlich Q_k = 1,0 kN", "Kategorie A1: q_k = 1,0 kN/m²", "Kategorie B2: q_k = 3,0 kN/m²", "Kategorie H: Q_k = 1,0 kN"], "Holzbalkendecken haben keine ausreichende Querverteilung – deshalb A3 mit 2,0 kN/m² und einer Einzellast an der ungünstigsten Stelle.", "Baukonstruktion Übung 01, Beispiel 3");
mc("bauko", K2, "Was bedeutet „ausreichende Querverteilung“ einer Decke?", ["Lasten verteilen sich quer zur Tragrichtung auf benachbarte Bereiche", "Die Decke hat viele Querbalken", "Die Decke ist quer bewehrt", "Die Last wirkt quer zum Bauteil"], "Massivdecken verteilen Lasten in die Breite. Bei Holzbalkendecken trägt jeder Balken für sich – benachbarte Balken helfen nicht mit.", "Baukonstruktion Übung 01, Exkurs");
mc("bauko", K2, "Darf die Nutzlast einer Holzbalkendecke für die stützenden Bauteile darunter abgemindert werden?", ["Ja, um 0,5 kN/m²", "Nein, nie", "Ja, um die Hälfte", "Nur bei Dächern"], "Für den Balken selbst gilt 2,0 kN/m², für Unterzug oder Wand darunter nur 1,5 kN/m² (Ü01: 1,92 → 1,62 kN/m pro Balken).", "Baukonstruktion Übung 01, Beispiel 3");
mc("bauko", K2, "Welche Nutzlast gilt für Büroflächen?", ["Kategorie B1: 2,0 kN/m²", "Kategorie A2: 1,5 kN/m²", "Kategorie C5: 5,0 kN/m²", "Kategorie H: 1,0 kN"], "So in Ü01, Beispiel 2 (Unterzug unter einer Bürodecke).", "Baukonstruktion Übung 01, Beispiel 2");
mc("bauko", K3, "Durchlaufträger über mehrere Felder: Welches Auflager ist meist maßgebend?", ["Das mittlere – es hat den größten Tafelwert", "Das linke Endauflager", "Alle sind gleich", "Das rechte Endauflager"], "Beim Zweifeldträger ist B = 1,25 · q · l, die Endauflager nur 0,375 · q · l.", "Baukonstruktion Übung 01, Beispiel 2");
/* Physik */
pair("phys", P1, "US-Einheit – wie viel ist das?", [["1 inch", "25,4 mm"], ["1 foot", "0,3048 m"], ["1 acre", "4046,856 m²"]], "Die Faktoren stehen in der PTB-Broschüre „Die gesetzlichen Einheiten“. Beim Umrechnen multiplizierst du mit Brüchen, die genau 1 ergeben, z. B. 25,4 mm / 1 in.", "Physik Blatt 1, Aufgabe 1");
mc("phys", P1, "Du rechnest 20 km² in m² um. Was ist richtig?", ["20 · (1000 m)² = 2 · 10⁷ m²", "20 · 1000 m² = 2 · 10⁴ m²", "20 · 100 m² = 2000 m²", "20 · 10⁹ m²"], "Bei Flächen wird der Umrechnungsfaktor quadriert, bei Volumen hoch drei. Das ist der häufigste Fehler beim Umrechnen.", "Physik Blatt 1, Aufgabe 1");
mc("phys", P2, "Ein Auto fährt je die halbe ZEIT mit v₁ und v₂. Wie groß ist die mittlere Geschwindigkeit?", ["(v₁ + v₂) / 2", "2v₁v₂ / (v₁ + v₂)", "v₁ · v₂", "√(v₁ · v₂)"], "Bei gleichen Zeiten zählt das arithmetische Mittel. Bei gleichen STRECKEN dagegen das harmonische: 2v₁v₂/(v₁ + v₂) – dann ist man länger mit der kleinen Geschwindigkeit unterwegs.", "Physik Blatt 1, Aufgabe 2b");
mc("phys", P2, "x(t) = At − Bt² + Ct³. Wie bekommst du die Beschleunigung?", ["Zweimal ableiten: a(t) = −2B + 6Ct", "Einmal ableiten: a(t) = A − 2Bt + 3Ct²", "Integrieren", "x(t) durch t² teilen"], "Erste Ableitung ist die Geschwindigkeit, zweite die Beschleunigung. Danach setzt man t₁ ein.", "Physik Blatt 1, Aufgabe 3");
mc("phys", P4, "Ein Ventilator macht N Umdrehungen in der Zeit Δt. Wie groß ist die Umlaufzeit?", ["T = Δt / N", "T = N / Δt", "T = N · Δt", "T = 2π · N"], "Eine Umdrehung dauert den N-ten Teil der Zeit. Damit ist v = 2πr/T = 2πrN/Δt.", "Physik Blatt 3, Aufgabe 3");
mc("phys", P4, "Wann erreicht ein Teilchen mit v₀ₓ > 0 und aₓ < 0 seine größte x-Koordinate?", ["Wenn v_x = 0 ist, also bei t = −v₀ₓ/aₓ", "Bei t = 0", "Wenn a = 0 ist", "Nie, x wächst immer weiter"], "Solange v_x > 0 ist, wächst x. Die Bremsbeschleunigung aₓ dreht die Bewegung bei v_x = 0 um.", "Physik Blatt 3, Aufgabe 2");
/* Angewandte Statistik */
mc("stat", S2, "A ist eine (2, 3)-Matrix. Welche Ordnung hat A′A?", ["(3, 3)", "(2, 2)", "(2, 3)", "(3, 2)"], "A′ ist (3, 2), also (3, 2)·(2, 3) = (3, 3). AA′ wäre dagegen (2, 2).", "Angewandte Statistik Übung 1, Aufgabe 2");
mc("stat", S2, "Warum ist A′A immer symmetrisch?", ["Weil (A′A)′ = A′(A′)′ = A′A ist", "Weil A quadratisch ist", "Weil die Determinante 0 ist", "Das gilt nur für Diagonalmatrizen"], "Eintrag b_ij ist das Skalarprodukt von Spalte i und Spalte j – und das ist dasselbe wie für j und i.", "Angewandte Statistik Übung 1, Aufgabe 2");
wf("stat", S2, "Für eine (2, 3)-Matrix A ist A′A nie invertierbar.", true, "Richtig – rg(A′A) = rg(A) ≤ 2, aber A′A ist 3×3. Ohne vollen Rang ist die Determinante 0.", "Angewandte Statistik Übung 1, Aufgabe 2");
mc("stat", S2, "Womit prüfst du schnell, ob AB und BA richtig gerechnet sind?", ["Die Spur: sp(AB) = sp(BA)", "Die Determinante: det(AB) = 0", "Die Summe aller Einträge muss gleich sein", "AB = BA muss gelten"], "Die Diagonalsummen stimmen immer überein, auch wenn AB ≠ BA ist. In Übung 1: 29 + 18 + 5 = 52 = 11 + 16 + 25.", "Angewandte Statistik Übung 1, Aufgabe 1");
/* Data Analysis for Planning */
mc("dap", D4, "Welchen Mittelwert und welche Varianz hat die Gleichverteilung u[a, b]?", ["μ = (a + b)/2, σ² = (b − a)²/12", "μ = b − a, σ² = (b − a)²", "μ = (a + b)/2, σ² = (b − a)/2", "μ = 0, σ² = 1"], "Der Mittelwert liegt genau in der Mitte. Die 12 im Nenner kommt aus dem Integral über die Rechteckdichte.", "DAP L03");
mc("dap", D4, "Wie sieht die Verteilungsfunktion (CDF) einer diskreten Verteilung, z. B. beim Würfeln, aus?", ["Wie eine Treppe", "Wie eine Glocke", "Wie eine Gerade durch den Ursprung", "Wie ein Rechteck"], "Bei jedem möglichen Wert springt sie um dessen Wahrscheinlichkeit, beim Würfel um je 1/6, bis sie 1 erreicht.", "DAP L03");
mc("dap", D4, "Welcher Anteil liegt bei einer Normalverteilung zwischen μ − 3σ und μ + 3σ?", ["99,7 %", "95,5 %", "68,3 %", "100 %"], "68,3 % (±1σ), 95,5 % (±2σ), 99,7 % (±3σ). 100 % erreicht die Normalverteilung nie.", "DAP L03");
/* Baustoffkunde – Umdruck Grundlagen */
pair("bsk", B5, "Homogen oder heterogen, isotrop oder anisotrop?", [["Holz", "homogen, anisotrop"], ["Eisen", "homogen, isotrop"], ["GFK", "heterogen, anisotrop"], ["Beton", "heterogen, isotrop"]], "Heterogen heißt: aus verschiedenen Phasen. Anisotrop heißt: richtungsabhängig. Beton hat viele Phasen, verhält sich im Ganzen aber in alle Richtungen gleich.", "Umdruck Baustoffkunde 1, Kap. 6.1.1");
pair("bsk", B2, "Kriechen oder Relaxation?", [["Kriechen", "Verformung wächst unter konstanter Last"], ["Relaxation", "Spannung sinkt bei konstanter Verformung"]], "Beides hängt von Werkstoff, Spannung, Dauer und Temperatur ab. Kriechen kann zur Ruhe kommen oder zum Versagen führen.", "Umdruck Baustoffkunde 1, Kap. 4.4");
pair("bsk", B3, "Welche Korrosion trifft welchen Baustoff?", [["Metalle", "elektrolytisch: Feuchte, Sauerstoff, Chloride"], ["Beton, Mauerwerk", "chemisch und Frost, z. B. Sulfate"], ["Kunststoffe", "Alterung durch UV-Strahlung"], ["Holz", "biologisch: Pilze, Bakterien, Insekten"]], "Korrosion ist jede Zerstörung durch nicht-mechanischen Angriff. Ob es dazu kommt, hängt von der Angriffs- und der Widerstandsseite ab.", "Umdruck Baustoffkunde 1, Kap. 5.1");
pair("bsk", B3, "Baustoffklasse nach Brennbarkeit – ordne zu.", [["A1", "nicht brennbar, z. B. Beton, Stahl, Glas"], ["B1", "schwer entflammbar, z. B. Holzwolle-Leichtbauplatten"], ["B2", "normal entflammbar, z. B. Holz dicker als 2 mm"], ["B3", "leicht entflammbar, z. B. Papier, Stroh"]], "Baustoffe teilt man nach ihrer Brennbarkeit ein, Bauteile nach ihrem Feuerwiderstand (F 30 bis F 180).", "Umdruck Baustoffkunde 1, Kap. 5.2");
mc("bsk", B3, "Was bedeutet die Feuerwiderstandsklasse F 90 für ein Bauteil?", ["Es hält einem Brand mindestens 90 Minuten stand", "Es ist bis 90 °C beständig", "Es verbrennt in 90 Sekunden", "Es besteht zu 90 % aus nicht brennbarem Material"], "Die Zahl ist die Feuerwiderstandsdauer in Minuten, von F 30 bis F 180.", "Umdruck Baustoffkunde 1, Kap. 5.2");
mc("bsk", B2, "Wie verändert sich die Festigkeit von Holz mit steigendem Wassergehalt?", ["Sie sinkt deutlich", "Sie steigt", "Sie bleibt gleich", "Sie steigt erst und fällt dann auf null"], "Deshalb gibt es im Holzbau Nutzungsklassen und kmod-Werte für die Feuchte.", "Umdruck Baustoffkunde 1, Kap. 3.4");
mc("bsk", B2, "Was passiert mit der Festigkeit von Beton im Brandfall?", ["Sie kann nahezu auf null sinken", "Sie steigt", "Sie bleibt bis 1000 °C gleich", "Beton schmilzt bei 100 °C"], "Im üblichen Gebrauchsbereich sind Beton, Stahl und Holz temperaturunabhängig. Bei Brandtemperaturen sind nur keramische Werkstoffe weitgehend unempfindlich.", "Umdruck Baustoffkunde 1, Kap. 3.3");
wf("bsk", B2, "Manche Baustoffe, etwa feuchter Beton, werden bei Temperaturen deutlich unter null fester.", true, "Richtig – laut Umdruck steigt die Festigkeit bei tiefen Temperaturen teils erheblich. Baustahl wird dafür spröder (Kerbschlagversuch).", "Umdruck Baustoffkunde 1, Kap. 3.3");
/* Lösungsweg-Aufgaben */
aufgabe({
 "id": "hydro-ue01-a11",
 "f": "hydro",
 "t": "Eigenschaften des Wassers",
 "titel": "Dichte einer Flüssigkeit im Kegel",
 "s": "Hydromechanik Übung 01, Aufgabe 1.1",
 "angabe": "Ein kegelförmiges Gefäß ist mit einer unbekannten Flüssigkeit gefüllt. Es fasst insgesamt 4 kg.",
 "geg": [
  "h = 45 cm",
  "r = 10 cm",
  "m = 4 kg"
 ],
 "ges": "Dichte ρ_Fl",
 "schritte": [
  {
   "f": "Gesucht ist eine Dichte. Welche Beziehung nutzt du?",
   "o": [
    [
     "ρ = m / V",
     "Dichte ist Masse pro Volumen – die Masse ist gegeben, das Volumen folgt aus der Geometrie."
    ],
    [
     "ρ = F / A",
     "Kraft pro Fläche ist ein Druck, keine Dichte."
    ],
    [
     "ρ = m · V",
     "Die Einheit wäre kg·m³ – keine Dichte."
    ],
    [
     "ρ = 1000 kg/m³, weil es Wasser ist",
     "Die Flüssigkeit ist unbekannt – genau das ist gesucht."
    ]
   ]
  },
  {
   "f": "Wie bekommst du das Volumen des Kegels?",
   "o": [
    [
     "V = π · r² · h / 3",
     "Ein Kegel hat ein Drittel des Volumens des Zylinders mit gleicher Grundfläche und Höhe."
    ],
    [
     "V = π · r² · h",
     "Das ist der Zylinder – dreimal zu groß."
    ],
    [
     "V = 4/3 · π · r³",
     "Das ist die Kugel."
    ],
    [
     "V = r · h / 2",
     "Das ist die Fläche eines Dreiecks, kein Volumen."
    ]
   ],
   "r": "V = π · 0,10² · 0,45 / 3 = 4,71 · 10⁻³ m³ = 4,71 l"
  },
  {
   "f": "Worauf achtest du beim Einsetzen?",
   "o": [
    [
     "Alles in m und kg umrechnen",
     "Mit cm gerechnet käme ein Volumen in cm³ heraus, und die Dichte wäre um den Faktor 10⁶ falsch."
    ],
    [
     "Die Masse in Tonnen angeben",
     "Dann stimmt die Einheit kg/m³ nicht mehr."
    ],
    [
     "Den Radius verdoppeln",
     "Der Durchmesser wäre 20 cm, in die Formel gehört aber der Radius."
    ],
    [
     "Nichts, die Einheiten kürzen sich",
     "Sie kürzen sich nur, wenn sie zusammenpassen."
    ]
   ]
  },
  {
   "f": "Was kommt heraus – und ist das plausibel?",
   "o": [
    [
     "Rund 849 kg/m³ – leichter als Wasser, etwa wie ein Öl",
     "Werte zwischen 700 und 1000 kg/m³ sind typisch für Öle oder Alkohole."
    ],
    [
     "Rund 0,85 kg/m³",
     "So leicht ist nur ein Gas – hier wurde ein Faktor 1000 vergessen."
    ],
    [
     "Rund 8490 kg/m³",
     "So schwer wie Stahl – das passt nicht zu 4 kg in 4,7 Litern."
    ],
    [
     "Genau 1000 kg/m³",
     "4 kg in 4,71 l sind weniger als Wasser."
    ]
   ],
   "r": "ρ = 4 kg / 4,71 · 10⁻³ m³ ≈ 849 kg/m³"
  }
 ],
 "fazit": "Dichte = Masse / Volumen. Erst die Geometrie (Kegel: π r² h / 3), dann konsequent in m und kg rechnen und das Ergebnis auf Plausibilität prüfen."
});
aufgabe({
 "id": "hydro-ue01-a14",
 "f": "hydro",
 "t": "Eigenschaften des Wassers",
 "titel": "Mindestdurchmesser eines Schauglases",
 "s": "Hydromechanik Übung 01, Aufgabe 1.4",
 "v": "kapillar",
 "angabe": "Ein seitliches Glasröhrchen zeigt den Wasserstand in einem Behälter an. Durch Kapillarität steht das Wasser darin höher als im Behälter. Der Anzeigefehler soll kleiner als f sein.",
 "geg": [
  "f = 5 mm",
  "σ = 0,073 N/m (20 °C)",
  "ρ_W = 1000 kg/m³",
  "vollständige Benetzung"
 ],
 "ges": "Mindestdurchmesser D",
 "schritte": [
  {
   "f": "Woher kommt der Anzeigefehler?",
   "o": [
    [
     "Vom kapillaren Aufstieg im dünnen Röhrchen",
     "Die Oberflächenspannung zieht das Wasser an der Glaswand hoch."
    ],
    [
     "Vom Luftdruck über dem Röhrchen",
     "Der Luftdruck wirkt auf Behälter und Röhrchen gleich."
    ],
    [
     "Von der Viskosität",
     "Viskosität bremst Bewegung, im Ruhezustand spielt sie keine Rolle."
    ],
    [
     "Von der Temperaturdehnung des Glases",
     "Die ist vernachlässigbar klein."
    ]
   ]
  },
  {
   "f": "Welches Gleichgewicht setzt du für die Steighöhe an?",
   "o": [
    [
     "Kapillarkraft am Umfang = Gewicht der gehobenen Wassersäule",
     "σ · π · D = ρ · g · h · π D²/4 – daraus folgt h = 4σ / (ρ · g · D)."
    ],
    [
     "Druck oben = Druck unten",
     "Damit fehlt die Kraft aus der Oberflächenspannung."
    ],
    [
     "Bernoulli zwischen Behälter und Röhrchen",
     "Es strömt nichts – Bernoulli hilft hier nicht."
    ],
    [
     "Auftrieb = Gewicht",
     "Im Röhrchen schwimmt nichts."
    ]
   ],
   "r": "h_kap = 4σ / (ρ · g · D)"
  },
  {
   "f": "Wie bekommst du daraus den Mindestdurchmesser?",
   "o": [
    [
     "h_kap ≤ f setzen und nach D auflösen",
     "D ≥ 4σ / (ρ · g · f): Je kleiner der erlaubte Fehler, desto dicker muss das Röhrchen sein."
    ],
    [
     "D = f setzen",
     "Fehler und Durchmesser sind verschiedene Größen."
    ],
    [
     "D = h_kap",
     "Die Steighöhe ist kein Durchmesser."
    ],
    [
     "Den Durchmesser möglichst klein wählen",
     "Dünne Röhrchen machen den Fehler größer."
    ]
   ],
   "r": "D ≥ 4 · 0,073 / (1000 · 9,81 · 0,005) = 5,95 · 10⁻³ m"
  },
  {
   "f": "Welchen Durchmesser wählst du?",
   "o": [
    [
     "Mindestens 6 mm",
     "5,95 mm aufgerundet – mit dickerem Rohr wird der Fehler noch kleiner."
    ],
    [
     "5 mm",
     "Bei 5 mm stiege das Wasser um 6 mm – zu viel."
    ],
    [
     "0,6 mm",
     "Faktor 10 vertan, dann stiege das Wasser fast 6 cm."
    ],
    [
     "60 mm",
     "Das ginge, ist aber unnötig dick."
    ]
   ],
   "r": "gewählt D = 6 mm"
  }
 ],
 "fazit": "Kapillare Steighöhe h = 4σ / (ρ g d): umgekehrt proportional zum Durchmesser. Für einen kleinen Anzeigefehler braucht man ein ausreichend dickes Röhrchen."
});
aufgabe({
 "id": "hydro-ue03-a32",
 "f": "hydro",
 "t": "Hydrodynamik",
 "titel": "Wasseruhr mit zwei Hähnen",
 "s": "Hydromechanik Übung 03, Aufgabe 3.2",
 "angabe": "Eine Wasseruhr zeigt bei zwei geöffneten Wasserhähnen einen Durchfluss Q₀ an. Beide Hähne haben die gleiche Ausflussgeschwindigkeit.",
 "geg": [
  "Q₀ = 1,0 l/s",
  "d₀ = 4 cm",
  "d₁ = 2 cm",
  "d₂ = 1 cm",
  "v₁ = v₂"
 ],
 "ges": "Wassermengen V₁ und V₂ in einer Stunde",
 "schritte": [
  {
   "f": "Welche Gleichung beschreibt die Verzweigung?",
   "o": [
    [
     "Kontinuität: Q₀ = Q₁ + Q₂",
     "Was in die Verzweigung hineinfließt, fließt auch wieder heraus."
    ],
    [
     "Q₀ = Q₁ = Q₂",
     "Dann käme doppelt so viel heraus wie hinein."
    ],
    [
     "Bernoulli zwischen Uhr und Hahn",
     "Die Geschwindigkeiten sind nicht gefragt und unnötig."
    ],
    [
     "v₀ = v₁ + v₂",
     "Geschwindigkeiten addieren sich nicht, Durchflüsse schon."
    ]
   ],
   "r": "Q₀ = v₁ · A₁ + v₂ · A₂"
  },
  {
   "f": "Wie nutzt du v₁ = v₂ = v?",
   "o": [
    [
     "v ausklammern: Q₀ = v · (A₁ + A₂)",
     "Mit einer gemeinsamen Geschwindigkeit bleibt nur eine Unbekannte."
    ],
    [
     "v = Q₀ / A₀ setzen",
     "Das ist die Geschwindigkeit in der Zuleitung, nicht an den Hähnen."
    ],
    [
     "v₁ = Q₀ / A₁",
     "Dann flösse alles aus Hahn 1."
    ],
    [
     "Gar nicht – die Bedingung ist überflüssig",
     "Ohne sie gäbe es zwei Unbekannte für eine Gleichung."
    ]
   ],
   "r": "A₁ = 3,14 cm² · A₂ = 0,785 cm²\nv = 1,0 · 10⁻³ / 3,93 · 10⁻⁴ = 2,55 m/s"
  },
  {
   "f": "Wie teilt sich der Durchfluss auf?",
   "o": [
    [
     "Im Verhältnis der Flächen: Q₁ : Q₂ = 4 : 1",
     "Gleiche Geschwindigkeit, also Q ~ A ~ d². Doppelter Durchmesser heißt vierfacher Durchfluss."
    ],
    [
     "Je zur Hälfte",
     "Das gälte nur bei gleich großen Hähnen."
    ],
    [
     "Im Verhältnis der Durchmesser 2 : 1",
     "Der Durchmesser geht quadratisch ein."
    ],
    [
     "Q₂ ist größer, weil der Hahn kleiner ist",
     "Bei gleicher Geschwindigkeit fließt durch den kleineren Querschnitt weniger."
    ]
   ],
   "r": "Q₁ = 0,8 l/s · Q₂ = 0,2 l/s"
  },
  {
   "f": "Wie kommst du zur Wassermenge in einer Stunde?",
   "o": [
    [
     "V = Q · t mit t = 3600 s",
     "Der Durchfluss ist Volumen pro Zeit – mal Zeit ergibt das Volumen."
    ],
    [
     "V = Q / t",
     "Dann käme ein winziges Volumen pro Quadratsekunde heraus."
    ],
    [
     "V = Q · 60",
     "60 s sind eine Minute, nicht eine Stunde."
    ],
    [
     "V = v · A",
     "Das ist wieder ein Durchfluss, kein Volumen."
    ]
   ],
   "r": "V₁ = 0,8 l/s · 3600 s = 2,88 m³\nV₂ = 0,2 l/s · 3600 s = 0,72 m³"
  }
 ],
 "fazit": "Verzweigungen: Q₀ = Q₁ + Q₂. Bei gleicher Geschwindigkeit teilt sich der Durchfluss im Verhältnis der Flächen, also mit d²."
});
aufgabe({
 "id": "hydro-ue03-a37",
 "f": "hydro",
 "t": "Energiesatz",
 "titel": "Durchfluss im Venturirohr",
 "s": "Hydromechanik Übung 03, Aufgabe 3.7",
 "angabe": "Ein waagerechtes Rohr verengt sich von d₁ auf d₂. Gemessen wird der Druckunterschied zwischen weitem und engem Querschnitt.",
 "geg": [
  "d₁ = 0,3 m",
  "d₂ = 0,1 m",
  "Δp/(ρ·g) = 0,65 m",
  "ρ_W = 1,0 t/m³",
  "g = 9,81 m/s²"
 ],
 "ges": "v₁, v₂ und Durchfluss Q",
 "schritte": [
  {
   "f": "Welche zwei Gleichungen brauchst du?",
   "o": [
    [
     "Kontinuität und Bernoulli",
     "Zwei Unbekannte (v₁, v₂) – Kontinuität verknüpft sie, Bernoulli bringt den gemessenen Druckunterschied ins Spiel."
    ],
    [
     "Nur Bernoulli",
     "Dann bleiben zwei unbekannte Geschwindigkeiten in einer Gleichung."
    ],
    [
     "Impulssatz und Kontinuität",
     "Der Impulssatz liefert Kräfte, die hier nicht gefragt sind."
    ],
    [
     "Hydrostatik",
     "Das Wasser strömt."
    ]
   ]
  },
  {
   "f": "Was liefert die Kontinuität?",
   "o": [
    [
     "v₂ = v₁ · (d₁/d₂)² = 9 · v₁",
     "Ein Drittel des Durchmessers heißt ein Neuntel der Fläche."
    ],
    [
     "v₂ = 3 · v₁",
     "Der Durchmesser geht quadratisch ein."
    ],
    [
     "v₂ = v₁",
     "Dann gäbe es keinen Druckunterschied."
    ],
    [
     "v₂ = v₁ / 9",
     "Im engen Querschnitt wird das Wasser schneller, nicht langsamer."
    ]
   ],
   "r": "v₂ = 9 · v₁"
  },
  {
   "f": "Wie setzt du Bernoulli an (Rohr waagerecht)?",
   "o": [
    [
     "Δp/(ρg) = (v₂² − v₁²)/(2g)",
     "Die Lagehöhe fällt weg. Der Druckabfall ist genau der Zuwachs an Geschwindigkeitshöhe."
    ],
    [
     "Δp/(ρg) = v₂²/(2g)",
     "Die Geschwindigkeit im weiten Rohr darf man hier nicht weglassen."
    ],
    [
     "Δp/(ρg) = (v₂ − v₁)²/(2g)",
     "Bernoulli enthält die Differenz der Quadrate, nicht das Quadrat der Differenz."
    ],
    [
     "Δp = ρ · g · v",
     "Die Einheiten passen nicht."
    ]
   ],
   "r": "0,65 m = (81 − 1) · v₁² / (2 · 9,81)"
  },
  {
   "f": "Wie bekommst du den Durchfluss?",
   "o": [
    [
     "Q = v₁ · A₁ (oder v₂ · A₂)",
     "Der Durchfluss ist in beiden Querschnitten gleich."
    ],
    [
     "Q = (v₁ + v₂) · A₁",
     "Geschwindigkeiten aus verschiedenen Querschnitten nicht mischen."
    ],
    [
     "Q = v₂ · A₁",
     "Geschwindigkeit und Fläche müssen zum selben Querschnitt gehören."
    ],
    [
     "Q = Δp · A₂",
     "Ein Druck mal Fläche ist eine Kraft."
    ]
   ],
   "r": "v₁ = 0,40 m/s · v₂ = 3,59 m/s\nQ = 0,40 · π · 0,3²/4 = 0,028 m³/s = 28 l/s"
  }
 ],
 "fazit": "Venturi-Messung: Kontinuität v₂ = v₁ (d₁/d₂)², Bernoulli Δp/(ρg) = (v₂² − v₁²)/(2g), dann Q = v₁ A₁."
});
aufgabe({
 "id": "hydro-ue04-a41",
 "f": "hydro",
 "t": "Impulssatz",
 "titel": "Kraft auf einen Rohrkrümmer",
 "s": "Hydromechanik Übung 04, Aufgabe 4.1",
 "v": "kruemmer",
 "angabe": "Ein horizontaler 60°-Krümmer verjüngt sich in Fließrichtung. Am Ausgang ist der Druck bekannt. Reibung wird wegen der kurzen Strecke vernachlässigt.",
 "geg": [
  "D₁ = 0,4 m",
  "D₂ = 0,2 m",
  "α = 60°",
  "p₂ = 49 kPa",
  "Q = 120 l/s"
 ],
 "ges": "Betrag und Richtung der Krümmerkraft F_K",
 "schritte": [
  {
   "f": "Was brauchst du zuerst?",
   "o": [
    [
     "Die Geschwindigkeiten aus der Kontinuität",
     "Für Bernoulli und die Impulsströme brauchst du v₁ und v₂."
    ],
    [
     "Sofort den Impulssatz",
     "Dafür fehlen noch v₁, v₂ und p₁."
    ],
    [
     "Das Gewicht des Wassers",
     "Der Krümmer liegt horizontal – das Gewicht wirkt senkrecht zur betrachteten Ebene."
    ],
    [
     "Die Reibungsverluste",
     "Die werden laut Aufgabe vernachlässigt."
    ]
   ],
   "r": "v₁ = 0,12/0,126 = 0,95 m/s · v₂ = 0,12/0,0314 = 3,82 m/s"
  },
  {
   "f": "Der Druck p₁ fehlt noch. Wie bekommst du ihn?",
   "o": [
    [
     "Bernoulli zwischen 1 und 2",
     "Horizontal, ohne Verluste: p₁ = p₂ + ρ/2 · (v₂² − v₁²)."
    ],
    [
     "p₁ = p₂",
     "Im engeren Querschnitt ist das Wasser schneller, also der Druck kleiner."
    ],
    [
     "p₁ = p₂ · A₂/A₁",
     "Drücke rechnet man nicht über Flächenverhältnisse um."
    ],
    [
     "Aus der Hydrostatik",
     "Das Wasser strömt."
    ]
   ],
   "r": "p₁ = 49 + 0,5 · (3,82² − 0,95²) = 55,8 kPa"
  },
  {
   "f": "Wie setzt du den Stützkraftsatz an?",
   "o": [
    [
     "S = p·A + ρ·Q·v in jedem Schnitt, Kraft = S₁ − S₂ vektoriell",
     "Druckkraft und Impulsstrom zusammen geben die Stützkraft. Die Differenz der Vektoren nimmt der Krümmer auf."
    ],
    [
     "Nur die Druckkräfte p·A",
     "Ohne Impulsströme fehlt der Anteil der Umlenkung."
    ],
    [
     "Nur die Impulsströme ρ·Q·v",
     "Die Druckkräfte sind hier sogar der größere Anteil."
    ],
    [
     "S₁ + S₂ als Zahlen addieren",
     "S₁ und S₂ zeigen in verschiedene Richtungen – nur vektoriell rechnen."
    ]
   ],
   "r": "S₁ = 55,8 · 0,126 + 1,0 · 0,12 · 0,95 = 7,13 kN\nS₂ = 49 · 0,0314 + 1,0 · 0,12 · 3,82 = 2,00 kN"
  },
  {
   "f": "Wie zerlegst du in x- und y-Richtung?",
   "o": [
    [
     "F_x = S₁ − S₂·cos 60°, F_y = −S₂·sin 60°",
     "S₁ liegt in x-Richtung, S₂ ist um 60° gedreht und wird zerlegt."
    ],
    [
     "F_x = S₁ − S₂, F_y = 0",
     "Das gälte nur ohne Umlenkung."
    ],
    [
     "F_x = S₁ · cos 60°",
     "S₁ liegt genau in x-Richtung, da gibt es nichts zu zerlegen."
    ],
    [
     "Mit sin und cos vertauscht",
     "cos gehört zur Komponente entlang der x-Achse."
    ]
   ],
   "r": "F_x = 7,13 − 2,00 · 0,5 = 6,13 kN\nF_y = −2,00 · 0,866 = −1,73 kN"
  },
  {
   "f": "Wie bekommst du Betrag und Winkel?",
   "o": [
    [
     "Pythagoras und arctan(|F_y|/F_x)",
     "Der Krümmer wird mit 6,4 kN schräg nach außen gedrückt – das muss ein Widerlager aufnehmen."
    ],
    [
     "Die Komponenten addieren",
     "Komponenten addiert man vektoriell, nicht als Zahlen."
    ],
    [
     "Nur F_x nehmen",
     "Dann fehlt die Querkomponente aus der Umlenkung."
    ],
    [
     "Winkel = 60°",
     "Der Winkel der Kraft ist nicht der Umlenkwinkel."
    ]
   ],
   "r": "F_K = √(6,13² + 1,73²) = 6,37 kN\nβ = arctan(1,73/6,13) = 15,8° zur x-Achse, nach außen"
  }
 ],
 "fazit": "Krümmerkraft: Kontinuität → Bernoulli für den fehlenden Druck → Stützkräfte S = pA + ρQv je Schnitt → vektoriell S₁ − S₂ → Betrag und Winkel."
});
aufgabe({
 "id": "hydro-ue05-a54",
 "f": "hydro",
 "t": "Energiesatz",
 "titel": "Pitot- und Piezometerrohr am Behälter",
 "s": "Hydromechanik Übung 05, Aufgabe 5.4",
 "v": "behaelter",
 "angabe": "Aus einem großen Behälter fließt Wasser durch ein Rohr mit wechselndem Querschnitt frei aus. Die Rohrachse liegt auf dem Bezugshorizont. Bei 1 steht ein Pitotrohr, bei 2 ein Piezometerrohr. Verluste werden vernachlässigt.",
 "geg": [
  "h₀ = 2,0 m",
  "v₀ = 0",
  "A₁ = 0,2 m²",
  "A₂ = 0,9 m²",
  "A₃ = 0,3 m² (Austritt)"
 ],
 "ges": "Wasserstände h₁ und h₂",
 "schritte": [
  {
   "f": "Womit beginnst du?",
   "o": [
    [
     "Bernoulli von der Behälteroberfläche bis zum freien Austritt 3",
     "Dort sind beide Drücke bekannt (Luftdruck) – es bleibt nur v₃ unbekannt."
    ],
    [
     "Bernoulli zwischen 1 und 2",
     "Dort sind Drücke und Geschwindigkeiten noch unbekannt."
    ],
    [
     "Kontinuität zwischen 0 und 1",
     "Im Behälter ist v₀ ≈ 0 – daraus folgt nichts."
    ],
    [
     "Impulssatz am Austritt",
     "Gesucht sind Höhen, keine Kräfte."
    ]
   ],
   "r": "v₃ = √(2 · g · h₀) = √(2 · 9,81 · 2,0) = 6,26 m/s"
  },
  {
   "f": "Wie kommst du zu den Geschwindigkeiten in 1 und 2?",
   "o": [
    [
     "Q = v₃ · A₃, dann v = Q / A",
     "Der Durchfluss ist im ganzen Rohr gleich."
    ],
    [
     "v₁ = v₂ = v₃",
     "Die Querschnitte sind verschieden."
    ],
    [
     "v = √(2g·h) an jeder Stelle",
     "Torricelli gilt nur am freien Austritt."
    ],
    [
     "Aus dem Pitotrohr ablesen",
     "Dazu bräuchtest du zusätzlich ein Piezometer an derselben Stelle."
    ]
   ],
   "r": "Q = 6,26 · 0,3 = 1,88 m³/s\nv₁ = 9,40 m/s · v₂ = 2,09 m/s"
  },
  {
   "f": "Was zeigt das Pitotrohr bei 1?",
   "o": [
    [
     "Die Energiehöhe – ohne Verluste also h₁ = h₀ = 2,0 m",
     "Das Pitotrohr staut die Strömung auf und zeigt Druck- plus Geschwindigkeitshöhe, also die Energielinie."
    ],
    [
     "Nur die Druckhöhe",
     "Das wäre ein Piezometerrohr."
    ],
    [
     "Die Geschwindigkeitshöhe allein",
     "Es zeigt die Summe."
    ],
    [
     "Null, weil das Wasser dort schnell ist",
     "Gerade die Geschwindigkeit wird im Pitotrohr in Höhe umgesetzt."
    ]
   ],
   "r": "h₁ = 2,0 m (die Druckhöhe selbst wäre 2,0 − 4,5 = −2,5 m, also Unterdruck)"
  },
  {
   "f": "Was zeigt das Piezometerrohr bei 2?",
   "o": [
    [
     "Die Druckhöhe: h₂ = h₀ − v₂²/(2g)",
     "Energiehöhe minus Geschwindigkeitshöhe ergibt die Drucklinie."
    ],
    [
     "Die Energiehöhe h₀",
     "Das zeigt nur das Pitotrohr."
    ],
    [
     "h₂ = v₂²/(2g)",
     "Das ist der Abstand zwischen Energie- und Drucklinie."
    ],
    [
     "h₂ = h₁",
     "Bei 2 ist das Wasser langsamer, die Druckhöhe also anders."
    ]
   ],
   "r": "h₂ = 2,0 − 2,09²/(2 · 9,81) = 1,78 m"
  }
 ],
 "fazit": "Pitotrohr = Energielinie, Piezometer = Drucklinie. Erst v am freien Austritt (Torricelli), dann Q, dann alle anderen Geschwindigkeiten über die Kontinuität."
});
aufgabe({
 "id": "bauko-ue01-decke",
 "f": "bauko",
 "t": "Lasten",
 "titel": "Lasten einer Holzbalkendecke",
 "s": "Baukonstruktion Übung 01, Beispiel 3",
 "angabe": "Holzbalkendecke zwischen zwei Wohnräumen. Gesucht sind Eigengewicht und Nutzlast als Streckenlast pro Balken.",
 "geg": [
  "Trockenestrich 4 cm",
  "Trittschalldämmung 3 cm",
  "Spanplatte 24 mm",
  "Ausgleichslattung",
  "Gipskarton 1,5 cm",
  "Balken C24 8/16, e = 60 cm",
  "leichte Trennwände 3–5 kN/m"
 ],
 "ges": "g_k und q_k pro Balken",
 "schritte": [
  {
   "f": "Womit beginnst du beim Eigengewicht?",
   "o": [
    [
     "Jede Schicht als Flächenlast in kN/m² ermitteln und addieren",
     "Wichte · Dicke oder Tabellenwert pro cm aus den Bautabellen, Schicht für Schicht."
    ],
    [
     "Gleich mit dem Balkenabstand multiplizieren",
     "Erst die Schichten summieren, dann umrechnen – sonst verrechnet man sich leicht."
    ],
    [
     "Nur den Balken ansetzen",
     "Der Aufbau ist hier der größte Anteil."
    ],
    [
     "Pauschal 5 kN/m² annehmen",
     "Das wäre für eine Holzbalkendecke viel zu viel."
    ]
   ],
   "r": "Estrich 0,88 · Dämmung 0,03 · Spanplatte 0,19 · Lattung 0,10 · Gipskarton 0,14\nΣ = 1,34 kN/m²"
  },
  {
   "f": "Wie wird daraus eine Last pro Balken?",
   "o": [
    [
     "Flächenlast × Balkenabstand, dazu das Eigengewicht des Balkens",
     "1,34 · 0,6 m plus Balken 4,2 kN/m³ · 0,08 · 0,16 m und die Dämmstreifen."
    ],
    [
     "Flächenlast ÷ Balkenabstand",
     "Teilen ergäbe eine falsche Einheit."
    ],
    [
     "Flächenlast × Spannweite",
     "Die Spannweite spielt erst bei den Auflagerkräften eine Rolle."
    ],
    [
     "Nur den Balken, der Aufbau zählt für die Decke",
     "Der Balken trägt den Aufbau seines Streifens mit."
    ]
   ],
   "r": "g_k = 1,34 · 0,6 + 0,054 + Dämmstreifen ≈ 0,89 kN/m"
  },
  {
   "f": "Welche Nutzlast setzt du an?",
   "o": [
    [
     "Kategorie A3: 2,0 kN/m², dazu Q_k = 1,0 kN",
     "Holzbalkendecken haben keine ausreichende Querverteilung."
    ],
    [
     "Kategorie A2: 1,5 kN/m²",
     "A2 gilt für Wohndecken mit ausreichender Querverteilung, etwa Massivdecken."
    ],
    [
     "Kategorie B1: 2,0 kN/m² für Büros",
     "Es sind Wohnräume."
    ],
    [
     "Keine, Wohnräume sind leicht",
     "Nutzlast ist immer anzusetzen."
    ]
   ],
   "r": "q_k = 2,0 kN/m² · Q_k = 1,0 kN"
  },
  {
   "f": "Was gehört noch zur Nutzlast?",
   "o": [
    [
     "Trennwandzuschlag 1,2 kN/m² für Wände von 3 bis 5 kN/m",
     "Leichte, versetzbare Trennwände werden als Zuschlag zur Nutzlast angesetzt."
    ],
    [
     "Nichts weiter",
     "Leichte Trennwände muss man berücksichtigen."
    ],
    [
     "Die Wände als Eigengewicht",
     "Versetzbare Trennwände zählen zur Nutzlast."
    ],
    [
     "Schnee",
     "Die Decke liegt zwischen zwei Wohnräumen."
    ]
   ],
   "r": "q_k,ges = 2,0 + 1,2 = 3,2 kN/m²"
  },
  {
   "f": "Wie groß ist die Nutzlast pro Balken – und für den Unterzug darunter?",
   "o": [
    [
     "3,2 · 0,6 = 1,92 kN/m, für stützende Bauteile (2,0 − 0,5 + 1,2) · 0,6 = 1,62 kN/m",
     "Für die Weiterleitung auf stützende Bauteile darf die Nutzlast um 0,5 kN/m² abgemindert werden."
    ],
    [
     "3,2 · 0,6 = 1,92 kN/m für alles",
     "Erlaubt, aber unwirtschaftlich – die Abminderung darf man nutzen."
    ],
    [
     "3,2 / 0,6 = 5,33 kN/m",
     "Durch den Abstand zu teilen ist falsch."
    ],
    [
     "2,0 · 0,6 = 1,2 kN/m",
     "Der Trennwandzuschlag fehlt."
    ]
   ],
   "r": "Balken: q_k = 1,92 kN/m (+ Q_k = 1,0 kN)\nUnterzug: 1,62 kN/m pro Balken"
  }
 ],
 "fazit": "Lastaufstellung: Schicht für Schicht in kN/m², mal Einzugsbreite, plus Eigengewicht des Trägers. Nutzlast nach Kategorie plus Trennwandzuschlag – bei Holzbalkendecken für stützende Bauteile um 0,5 kN/m² abgemindert."
});
aufgabe({
 "id": "bauko-ue02-schnee",
 "f": "bauko",
 "t": "Einwirkungen",
 "titel": "Schneelast auf einem Sparren",
 "s": "Baukonstruktion Übung 02, Beispiel 4",
 "v": "pfettendach",
 "angabe": "Pfettendach eines Wohnhauses in Aachen. Gesucht ist die Schneelast pro Sparren.",
 "geg": [
  "Aachen, 200 m ü. NN (Zone 2)",
  "α = 35°",
  "Sparrenabstand 0,65 m",
  "C_e = C_t = 1,0",
  "γ_Schnee = 3 kN/m³, k = 0,4"
 ],
 "ges": "s pro Sparren und Schneeüberhang",
 "schritte": [
  {
   "f": "Womit startest du?",
   "o": [
    [
     "Charakteristische Schneelast am Boden s_k aus Zone und Geländehöhe",
     "s_k ist der Ausgangswert. Die Dachform kommt erst danach."
    ],
    [
     "Direkt mit der Dachneigung",
     "Ohne s_k gibt es nichts, was man abmindern könnte."
    ],
    [
     "Mit der Windzone",
     "Wind und Schnee sind getrennte Einwirkungen."
    ],
    [
     "Mit der Sparrenlänge",
     "Schnee wird auf die Grundfläche bezogen."
    ]
   ],
   "r": "s_k = 0,25 + 1,91 · ((200 + 140)/760)² = 0,63 kN/m²"
  },
  {
   "f": "Die Formel liefert 0,63 kN/m². Was gilt?",
   "o": [
    [
     "Mindestwert Zone 2: s_k = 0,85 kN/m²",
     "Liegt der Formelwert darunter, ist der Mindestwert maßgebend."
    ],
    [
     "0,63 kN/m², die Formel ist genau",
     "Die Norm verlangt den Mindestwert."
    ],
    [
     "Mittelwert aus beiden",
     "Es gilt der größere Wert, nicht der Mittelwert."
    ],
    [
     "0 kN/m², Aachen hat kaum Schnee",
     "Schnee muss immer angesetzt werden."
    ]
   ],
   "r": "s_k = 0,85 kN/m²"
  },
  {
   "f": "Wie berücksichtigst du die Dachneigung?",
   "o": [
    [
     "Formbeiwert μ₁ = 0,8 · (60° − α)/30°",
     "Zwischen 30° und 60° nimmt μ₁ linear von 0,8 auf 0 ab."
    ],
    [
     "μ₁ = 0,8 wie bei flachen Dächern",
     "Das gilt nur bis 30°."
    ],
    [
     "μ₁ = cos α",
     "Der Formbeiwert ist tabelliert, nicht der Kosinus."
    ],
    [
     "Gar nicht",
     "Steile Dächer tragen weniger Schnee – das darf man nutzen."
    ]
   ],
   "r": "μ₁ = 0,8 · 25/30 = 0,67"
  },
  {
   "f": "Wie kommst du zur Last pro Sparren?",
   "o": [
    [
     "s = μ₁ · C_e · C_t · s_k, dann × Sparrenabstand",
     "Schnee wirkt auf die Grundrissfläche, der Sparren trägt einen Streifen von 0,65 m."
    ],
    [
     "s_k × Sparrenlänge",
     "Der Formbeiwert fehlt, und die Länge ist die falsche Bezugsgröße."
    ],
    [
     "s × Dachneigung",
     "Das ergibt keine Linienlast."
    ],
    [
     "s ÷ 0,65 m",
     "Teilen ist falsch – der Streifen wird mitgenommen, nicht herausgerechnet."
    ]
   ],
   "r": "s = 0,67 · 1,0 · 1,0 · 0,85 = 0,57 kN/m²\npro Sparren 0,57 · 0,65 = 0,37 kN/m"
  },
  {
   "f": "Was kommt an der Traufe noch dazu?",
   "o": [
    [
     "Schneeüberhang S_e = k · s²/γ als Einzellast am Sparrenende",
     "S_e = 0,4 · 0,57²/3 = 0,043 kN/m, pro Sparren × 0,65 m."
    ],
    [
     "Nichts",
     "Der Überhang muss bei Dachüberständen berücksichtigt werden."
    ],
    [
     "Doppelte Schneelast am ganzen Dach",
     "Der Überhang betrifft nur den Rand."
    ],
    [
     "Die Mannlast",
     "Mannlast und Schnee werden nicht überlagert."
    ]
   ],
   "r": "F_S = 0,043 · 0,65 = 0,03 kN"
  }
 ],
 "fazit": "Schnee: s_k aus Zone und Höhe (Mindestwert beachten) → μ₁ aus der Dachneigung → s = μ₁ C_e C_t s_k → × Lasteinzugsbreite. Bezug ist die Grundfläche."
});
aufgabe({
 "id": "bauko-ue02-wind",
 "f": "bauko",
 "t": "Einwirkungen",
 "titel": "Windlast im Dachbereich H",
 "s": "Baukonstruktion Übung 02, Beispiel 4",
 "angabe": "Satteldach, Wind senkrecht zum First. Gesucht ist die Windlast auf einen Sparren im Bereich H.",
 "geg": [
  "Firsthöhe 8 m (< 10 m)",
  "Aachen",
  "Breite quer zum Wind b = 6 m",
  "α = 35°",
  "Sparrenabstand 0,65 m",
  "c_pe,10 für H: 0,4 bei 30°, 0,6 bei 45°"
 ],
 "ges": "w_H pro Sparren",
 "schritte": [
  {
   "f": "Welche Größe holst du zuerst aus den Tabellen?",
   "o": [
    [
     "Den Geschwindigkeitsdruck q_p aus Windzone und Höhe",
     "Er gilt für das ganze Gebäude – bei Höhen bis 10 m vereinfacht ein Wert."
    ],
    [
     "Den Außendruckbeiwert c_pe",
     "Den brauchst du auch, aber er wird mit q_p multipliziert."
    ],
    [
     "Die Schneelast",
     "Wind und Schnee sind getrennte Einwirkungen."
    ],
    [
     "Die Sparrenlänge",
     "Der Wind wird auf die Dachfläche bezogen."
    ]
   ],
   "r": "q_p = 0,65 kN/m²"
  },
  {
   "f": "Wie legst du die Bereichsgrenzen fest?",
   "o": [
    [
     "e = min(b; 2h)",
     "Damit werden F, G, H, I, J abgegrenzt, etwa e/4 und e/10."
    ],
    [
     "e = Firsthöhe",
     "Dann fehlt die Gebäudebreite."
    ],
    [
     "e = b + h",
     "Es ist das Minimum, keine Summe."
    ],
    [
     "Alle Bereiche gleich groß",
     "Die Randbereiche sind kleiner, aber stärker belastet."
    ]
   ],
   "r": "e = min(6 m; 16 m) = 6 m → e/4 = 1,5 m, e/10 = 0,6 m"
  },
  {
   "f": "35° steht nicht in der Tabelle. Wie bekommst du c_pe,10 für H?",
   "o": [
    [
     "Linear zwischen 30° und 45° interpolieren",
     "Zwischenwerte werden geradlinig berechnet."
    ],
    [
     "Den Wert für 30° nehmen",
     "Das liegt hier auf der unsicheren Seite."
    ],
    [
     "Den Mittelwert von 30° und 45°",
     "35° liegt nicht in der Mitte."
    ],
    [
     "c_pe = 1,0 setzen",
     "Der Beiwert ist tabelliert."
    ]
   ],
   "r": "c_pe,10 = 0,4 + (0,6 − 0,4)/15° · 5° = 0,47"
  },
  {
   "f": "Wie groß ist die Windlast pro Sparren?",
   "o": [
    [
     "w = c_pe · q_p · Sparrenabstand",
     "Senkrecht zur Dachfläche, positiv heißt Druck."
    ],
    [
     "w = q_p · Sparrenabstand",
     "Der Beiwert fehlt."
    ],
    [
     "w = c_pe · q_p",
     "Das ist eine Flächenlast, noch keine Last pro Sparren."
    ],
    [
     "w = c_pe · q_p · Firsthöhe",
     "Die Höhe steckt schon in q_p."
    ]
   ],
   "r": "w_H = 0,47 · 0,65 · 0,65 = 0,20 kN/m (Druck)"
  },
  {
   "f": "Welches Vorzeichen haben die Bereiche I und J auf der Leeseite?",
   "o": [
    [
     "Negativ – Sog",
     "Auf der windabgewandten Seite zieht der Wind an der Dachfläche (I: −0,14, J: −0,18 kN/m)."
    ],
    [
     "Positiv – Druck",
     "Druck gibt es auf der Leeseite nicht."
    ],
    [
     "Null",
     "Auch die Leeseite wird belastet."
    ],
    [
     "Wie H",
     "Luv und Lee unterscheiden sich gerade im Vorzeichen."
    ]
   ],
   "r": "w_I = −0,14 kN/m · w_J = −0,18 kN/m"
  }
 ],
 "fazit": "Wind: q_p aus Zone und Höhe → Bereiche über e = min(b; 2h) → c_pe je Bereich (interpolieren) → w = c_pe · q_p · Einzugsbreite, senkrecht zur Fläche, + Druck, − Sog."
});
aufgabe({
 "id": "phys-b1-a1",
 "f": "phys",
 "t": "Einheiten",
 "titel": "Regen in acre-feet",
 "s": "Physik Übungsblatt 1, Aufgabe 1",
 "angabe": "Über einer Stadt fallen bei einem Gewitter in 30 Minuten 3,5 inch Regen. In den USA misst man Wasservolumen in acre-feet (1 acre Fläche, 1 foot tief).",
 "geg": [
  "A = 20 km²",
  "h = 3,5 in",
  "1 in = 25,4 mm",
  "1 ft = 304,8 mm",
  "1 ac = 4046,856 m²"
 ],
 "ges": "Regenmenge in ac·ft",
 "schritte": [
  {
   "f": "Wie gehst du vor?",
   "o": [
    [
     "V = h · A, dabei h in ft und A in ac umrechnen",
     "Rechnest du beide Größen gleich in die Zieleinheit um, entsteht direkt ac·ft."
    ],
    [
     "Alles in m³ rechnen und am Ende raten",
     "Am Ende brauchst du trotzdem einen Umrechnungsfaktor."
    ],
    [
     "Die Zeit 30 min einsetzen",
     "Die Dauer ist für das Volumen unwichtig."
    ],
    [
     "h und A addieren",
     "Ein Volumen ist ein Produkt."
    ]
   ]
  },
  {
   "f": "Wie rechnest du die Regenhöhe in Fuß um?",
   "o": [
    [
     "3,5 in · (25,4 mm / 1 in) · (1 ft / 304,8 mm)",
     "Jeder Bruch ist genau 1 – die Einheiten kürzen sich bis auf ft."
    ],
    [
     "3,5 · 304,8 / 25,4",
     "Der Bruch steht falsch herum – dann kämen 42 ft heraus."
    ],
    [
     "3,5 / 12 · 25,4",
     "Einheiten durcheinander."
    ],
    [
     "3,5 in = 3,5 ft",
     "Ein Fuß hat 12 inch."
    ]
   ],
   "r": "h = 0,292 ft"
  },
  {
   "f": "Und die Fläche in acre?",
   "o": [
    [
     "20 km² · (1000 m / 1 km)² · (1 ac / 4046,856 m²)",
     "Bei Flächen wird der Längenfaktor quadriert: 1 km² = 10⁶ m²."
    ],
    [
     "20 km² · 1000 / 4046,856",
     "Der Faktor 1000 muss quadriert werden."
    ],
    [
     "20 / 4046,856",
     "km² und m² passen nicht zusammen."
    ],
    [
     "20 km² = 20 ac",
     "Ein acre ist viel kleiner als ein km²."
    ]
   ],
   "r": "A = 2 · 10⁷ m² / 4046,856 = 4942 ac"
  },
  {
   "f": "Wie viel Wasser fiel?",
   "o": [
    [
     "V = 0,292 ft · 4942 ac ≈ 1440 ac·ft",
     "Rund 1,8 Millionen m³ Wasser."
    ],
    [
     "V = 4942 ac / 0,292 ft",
     "Volumen ist Fläche mal Höhe."
    ],
    [
     "V = 0,292 + 4942",
     "Ein Volumen ist ein Produkt."
    ],
    [
     "V = 1440 m³",
     "Die Einheit ist ac·ft, nicht m³."
    ]
   ],
   "r": "V ≈ 1441 ac·ft"
  }
 ],
 "fazit": "Einheiten umrechnen: mit Brüchen multiplizieren, die genau 1 ergeben, bis nur die Zieleinheit übrig bleibt. Bei Flächen den Faktor quadrieren, bei Volumen hoch drei."
});
aufgabe({
 "id": "phys-b1-a4",
 "f": "phys",
 "t": "Geradlinige Bewegung",
 "titel": "Weg aus dem v(t)-Diagramm",
 "s": "Physik Übungsblatt 1, Aufgabe 4",
 "v": "vt",
 "angabe": "Das Diagramm zeigt die Geschwindigkeit eines Fahrzeugs über 16 s.",
 "geg": [
  "0–2 s: 0 → 24 m/s",
  "2–10 s: 24 m/s",
  "10–12 s: 24 → 12 m/s",
  "12–16 s: 12 m/s"
 ],
 "ges": "Zurückgelegter Weg in 16 s",
 "schritte": [
  {
   "f": "Wie bekommst du aus v(t) den Weg?",
   "o": [
    [
     "Fläche unter der v(t)-Kurve",
     "Der Weg ist das Integral der Geschwindigkeit über die Zeit."
    ],
    [
     "Steigung der Kurve",
     "Die Steigung von v(t) ist die Beschleunigung."
    ],
    [
     "Höchste Geschwindigkeit × Gesamtzeit",
     "Damit überschätzt du den Weg – das Fahrzeug fährt nicht immer 24 m/s."
    ],
    [
     "Mittelwert der Eckwerte",
     "Die Abschnitte dauern unterschiedlich lang."
    ]
   ]
  },
  {
   "f": "Wie berechnest du die Fläche?",
   "o": [
    [
     "In Dreiecke und Rechtecke zerlegen",
     "Jeder Abschnitt ist eine einfache Figur."
    ],
    [
     "Alles als ein Rechteck",
     "Die Anfahr- und Bremsabschnitte sind schräg."
    ],
    [
     "Integrieren nach x",
     "Integriert wird nach der Zeit."
    ],
    [
     "Mit der Formel s = ½at²",
     "Die Beschleunigung ist nicht überall gleich."
    ]
   ],
   "r": "A₁ = ½ · 2 · 24 = 24 m\nA₂ = 8 · 24 = 192 m"
  },
  {
   "f": "Wie behandelst du den Abschnitt 10–12 s?",
   "o": [
    [
     "Dreieck über einem Rechteck: ½ · 2 · 12 + 2 · 12",
     "Die Geschwindigkeit sinkt von 24 auf 12 m/s – also ein Trapez."
    ],
    [
     "Nur das Dreieck ½ · 2 · 24",
     "Das Fahrzeug bremst nicht bis 0."
    ],
    [
     "Gar nicht, dort bremst es",
     "Auch beim Bremsen legt es Weg zurück."
    ],
    [
     "2 · 24 = 48 m",
     "Damit wäre es mit voller Geschwindigkeit weitergefahren."
    ]
   ],
   "r": "A₃ = 12 m (Dreieck) · Rechteck 10–16 s: 6 · 12 = 72 m"
  },
  {
   "f": "Wie weit ist das Fahrzeug gefahren?",
   "o": [
    [
     "Alle Teilflächen addieren",
     "24 + 192 + 12 + 72 = 300 m."
    ],
    [
     "Nur die größte Fläche",
     "Alle Abschnitte zählen."
    ],
    [
     "Die Flächen multiplizieren",
     "Wege addieren sich."
    ],
    [
     "Die Flächen mitteln",
     "Gesucht ist der Gesamtweg."
    ]
   ],
   "r": "s = 300 m"
  }
 ],
 "fazit": "Weg = Fläche unter v(t). Komplizierte Verläufe in Dreiecke, Rechtecke und Trapeze zerlegen und addieren."
});
aufgabe({
 "id": "phys-b3-a3",
 "f": "phys",
 "t": "Bewegung in 2D/3D",
 "titel": "Spitze eines Ventilatorblatts",
 "s": "Physik Übungsblatt 3, Aufgabe 3",
 "angabe": "Ein Ventilator dreht mit konstanter Winkelgeschwindigkeit und macht N Umdrehungen in der Zeit Δt. Betrachtet wird die Spitze eines Blatts mit Radius r.",
 "geg": [
  "N",
  "Δt",
  "r"
 ],
 "ges": "Weg pro Umdrehung, Bahngeschwindigkeit, Beschleunigung, Umlaufzeit",
 "schritte": [
  {
   "f": "Welchen Weg legt die Spitze bei einer Umdrehung zurück?",
   "o": [
    [
     "Den Kreisumfang 2πr",
     "Eine Umdrehung ist einmal um den Kreis."
    ],
    [
     "πr²",
     "Das ist die Kreisfläche."
    ],
    [
     "2r",
     "Das ist der Durchmesser."
    ],
    [
     "N · r",
     "Die Anzahl der Umdrehungen gehört nicht zum Weg einer Umdrehung."
    ]
   ],
   "r": "s = 2πr"
  },
  {
   "f": "Wie lange dauert eine Umdrehung?",
   "o": [
    [
     "T = Δt / N",
     "N Umdrehungen dauern Δt, eine also den N-ten Teil."
    ],
    [
     "T = N / Δt",
     "Das ist die Frequenz."
    ],
    [
     "T = Δt · N",
     "Das wäre die Zeit für N² Umdrehungen."
    ],
    [
     "T = 2π / Δt",
     "Damit fehlt N."
    ]
   ],
   "r": "T = Δt / N"
  },
  {
   "f": "Wie groß ist die Bahngeschwindigkeit?",
   "o": [
    [
     "v = 2πr / T = 2πrN / Δt",
     "Weg einer Umdrehung durch ihre Dauer."
    ],
    [
     "v = ω",
     "ω hat die Einheit 1/s – es fehlt der Radius."
    ],
    [
     "v = r / T",
     "Der Faktor 2π fehlt."
    ],
    [
     "v = 2πr · T",
     "Weg durch Zeit, nicht mal Zeit."
    ]
   ],
   "r": "v = 2πrN / Δt"
  },
  {
   "f": "Welche Beschleunigung hat die Spitze?",
   "o": [
    [
     "a = v²/r, zum Mittelpunkt gerichtet",
     "Bei gleichförmiger Kreisbewegung ändert sich nur die Richtung von v – das erzeugt die Zentripetalbeschleunigung."
    ],
    [
     "a = 0, weil |v| konstant ist",
     "Die Richtung ändert sich ständig, also gibt es eine Beschleunigung."
    ],
    [
     "a = v/r",
     "Die Einheit passt nicht."
    ],
    [
     "a = g",
     "Die Schwerkraft hat mit der Rotation nichts zu tun."
    ]
   ],
   "r": "a = v²/r = 4π²rN² / Δt²"
  }
 ],
 "fazit": "Kreisbewegung: T = Δt/N, v = 2πr/T, a = v²/r zum Mittelpunkt. Konstanter Betrag heißt nicht: keine Beschleunigung."
});
aufgabe({
 "id": "phys-b3-a2",
 "f": "phys",
 "t": "Bewegung in 2D/3D",
 "titel": "Teilchen mit Bremsbeschleunigung",
 "s": "Physik Übungsblatt 3, Aufgabe 2",
 "angabe": "Ein Teilchen startet im Ursprung mit v₀ = v₀ₓ e_x und hat eine konstante Beschleunigung a = aₓ e_x + a_y e_y.",
 "geg": [
  "v₀ₓ > 0",
  "aₓ < 0",
  "a_y < 0"
 ],
 "ges": "v und r beim Erreichen der größten x-Koordinate",
 "schritte": [
  {
   "f": "Wie behandelst du die Bewegung?",
   "o": [
    [
     "x und y getrennt, beide gleichmäßig beschleunigt",
     "Die Beschleunigung ist konstant – jede Richtung folgt v = v₀ + at und r = v₀t + ½at²."
    ],
    [
     "Als Kreisbewegung",
     "Die Beschleunigung ist konstant, nicht zum Mittelpunkt gerichtet."
    ],
    [
     "Nur in x-Richtung",
     "Auch in y wirkt eine Beschleunigung."
    ],
    [
     "Als gleichförmige Bewegung",
     "Es gibt eine Beschleunigung."
    ]
   ],
   "r": "v_x = v₀ₓ + aₓt · v_y = a_y t"
  },
  {
   "f": "Woran erkennst du die größte x-Koordinate?",
   "o": [
    [
     "v_x = 0",
     "Solange v_x > 0, wächst x weiter. Danach läuft das Teilchen zurück."
    ],
    [
     "a_x = 0",
     "aₓ ist konstant und nie null."
    ],
    [
     "y = 0",
     "Das betrifft die andere Richtung."
    ],
    [
     "v = 0",
     "v_y ist dann nicht null."
    ]
   ],
   "r": "t* = −v₀ₓ / aₓ (positiv, da aₓ < 0)"
  },
  {
   "f": "Welche Geschwindigkeit hat das Teilchen dann?",
   "o": [
    [
     "Nur noch eine y-Komponente: v = a_y t* e_y",
     "v_x ist gerade null geworden."
    ],
    [
     "v = 0",
     "In y-Richtung beschleunigt es weiter."
    ],
    [
     "v = v₀",
     "Es wurde abgebremst und umgelenkt."
    ],
    [
     "v = aₓ t* e_x",
     "Die x-Komponente ist in diesem Moment null."
    ]
   ],
   "r": "v = −a_y v₀ₓ / aₓ · e_y"
  },
  {
   "f": "Und der Ort?",
   "o": [
    [
     "t* in x(t) und y(t) einsetzen",
     "x = v₀ₓt* + ½aₓt*², y = ½a_y t*²."
    ],
    [
     "r = v · t*",
     "Die Bewegung ist beschleunigt."
    ],
    [
     "r = ½ a t*² allein",
     "In x fehlt der Anteil v₀ₓt*."
    ],
    [
     "r = 0",
     "Das Teilchen hat sich bewegt."
    ]
   ],
   "r": "r = −v₀ₓ²/(2aₓ) · e_x + a_y v₀ₓ²/(2aₓ²) · e_y"
  }
 ],
 "fazit": "Konstante Beschleunigung: Richtungen getrennt behandeln. Extremwerte einer Koordinate liegen dort, wo die zugehörige Geschwindigkeitskomponente null ist."
});
aufgabe({
 "id": "stat-ue01-ata",
 "f": "stat",
 "t": "Matrizen",
 "titel": "A′A berechnen und deuten",
 "s": "Angewandte Statistik Übung 1, Aufgabe 2",
 "angabe": "Gegeben ist A mit den Zeilen (1 1 4) und (0 3 2). Berechne B = A′A, nenne Eigenschaften und prüfe, ob B invertierbar ist.",
 "ges": "B, Eigenschaften, Invertierbarkeit",
 "schritte": [
  {
   "f": "Welche Ordnung hat B = A′A?",
   "o": [
    [
     "(3, 3)",
     "A′ ist (3, 2), mal (2, 3) ergibt (3, 3)."
    ],
    [
     "(2, 2)",
     "Das wäre AA′."
    ],
    [
     "(2, 3)",
     "Das ist A selbst."
    ],
    [
     "Nicht definiert",
     "A′ hat 2 Spalten, A hat 2 Zeilen – das passt."
    ]
   ]
  },
  {
   "f": "Wie rechnest du die Einträge am schnellsten?",
   "o": [
    [
     "b_ij = Spalte i von A mal Spalte j von A",
     "Jeder Eintrag ist ein Skalarprodukt zweier Spalten von A, und b_ij = b_ji spart die Hälfte."
    ],
    [
     "Jede Zeile von A mit sich selbst",
     "Das ergäbe AA′."
    ],
    [
     "A und A′ elementweise multiplizieren",
     "Matrizen multipliziert man Zeile mal Spalte."
    ],
    [
     "Mit Sarrus",
     "Sarrus berechnet Determinanten, keine Produkte."
    ]
   ],
   "r": "Spalten von A: (1, 0)′, (1, 3)′, (4, 2)′\nB = (1 1 4 / 1 10 10 / 4 10 20)"
  },
  {
   "f": "Welche Eigenschaft siehst du sofort?",
   "o": [
    [
     "B ist symmetrisch",
     "(A′A)′ = A′A. Die Diagonale ist nicht negativ, weil sie Quadratsummen enthält."
    ],
    [
     "B ist die Einheitsmatrix",
     "Die Diagonale ist 1, 10, 20."
    ],
    [
     "B ist eine Dreiecksmatrix",
     "Oberhalb und unterhalb der Diagonale stehen Werte."
    ],
    [
     "B ist schiefsymmetrisch",
     "Dafür müsste b_ij = −b_ji gelten."
    ]
   ]
  },
  {
   "f": "Ist B invertierbar?",
   "o": [
    [
     "Nein – rg(B) ≤ rg(A) = 2 < 3, also det B = 0",
     "Eine 3×3-Matrix ohne vollen Rang ist singulär. Sarrus bestätigt: 280 − 280 = 0."
    ],
    [
     "Ja, weil B symmetrisch ist",
     "Symmetrie sagt nichts über die Invertierbarkeit."
    ],
    [
     "Ja, weil alle Einträge positiv sind",
     "Positive Einträge garantieren keinen vollen Rang."
    ],
    [
     "Das lässt sich nicht sagen",
     "Rang oder Determinante entscheiden es eindeutig."
    ]
   ],
   "r": "det B = 0 → B ist singulär"
  }
 ],
 "fazit": "A′A ist immer quadratisch und symmetrisch. Hat A mehr Spalten als Zeilen, ist A′A nie invertierbar – das spart in der Klausur die Rechnung."
});
aufgabe({
 "id": "dap-l03-normal",
 "f": "dap",
 "t": "Verteilungen",
 "titel": "Anteile einer Normalverteilung",
 "s": "DAP L03 (Übungsaufgabe zur 68-95-99,7-Regel)",
 "v": "normal",
 "angabe": "Körpergrößen seien normalverteilt mit μ = 175 cm und σ = 7 cm.",
 "geg": [
  "μ = 175 cm",
  "σ = 7 cm"
 ],
 "ges": "Anteil über 189 cm und Anteil zwischen 168 und 189 cm",
 "schritte": [
  {
   "f": "Wie vergleichst du 189 cm mit der Verteilung?",
   "o": [
    [
     "z-standardisieren: z = (x − μ)/σ",
     "So sieht man, wie viele Standardabweichungen der Wert vom Mittelwert entfernt ist."
    ],
    [
     "189 durch 175 teilen",
     "Ein Verhältnis zum Mittelwert sagt nichts über die Streuung."
    ],
    [
     "189 − 175 = 14 % über dem Mittel",
     "Die Differenz in cm ist kein Anteil."
    ],
    [
     "Gar nicht, man braucht die Rohdaten",
     "Für eine Normalverteilung reichen μ und σ."
    ]
   ],
   "r": "z = (189 − 175)/7 = 2"
  },
  {
   "f": "Welcher Anteil liegt über z = 2?",
   "o": [
    [
     "(100 % − 95,5 %)/2 ≈ 2,3 %",
     "95,5 % liegen innerhalb ±2σ, der Rest verteilt sich symmetrisch auf beide Seiten."
    ],
    [
     "4,5 %",
     "Das sind beide Ränder zusammen."
    ],
    [
     "95,5 %",
     "Das ist der Anteil innerhalb von ±2σ."
    ],
    [
     "50 %",
     "Über dem Mittelwert liegen 50 %, über 2σ viel weniger."
    ]
   ],
   "r": "Anteil über 189 cm ≈ 2,3 %"
  },
  {
   "f": "Wie bekommst du den Anteil zwischen 168 und 189 cm?",
   "o": [
    [
     "Grenzen standardisieren (z = −1 und z = 2) und die Hälften der Regelbereiche addieren",
     "Zwischen −1σ und μ liegen 68,3/2 %, zwischen μ und +2σ 95,5/2 %."
    ],
    [
     "68,3 % + 95,5 %",
     "Damit wäre der Bereich um μ doppelt gezählt."
    ],
    [
     "95,5 % − 68,3 %",
     "Das ist der Anteil zwischen 1σ und 2σ auf beiden Seiten."
    ],
    [
     "Die Fläche ist ein Rechteck",
     "Unter einer Glockenkurve nicht."
    ]
   ],
   "r": "34,15 % + 47,75 % ≈ 81,9 %"
  },
  {
   "f": "Wie prüfst du das in R?",
   "o": [
    [
     "1 - pnorm(189, 175, 7) und pnorm(189, 175, 7) - pnorm(168, 175, 7)",
     "pnorm ist die Verteilungsfunktion (CDF) – Differenzen ergeben Anteile."
    ],
    [
     "dnorm(189, 175, 7)",
     "dnorm ist die Dichte, kein Anteil."
    ],
    [
     "mean(189)",
     "Der Mittelwert einer Zahl ist sie selbst."
    ],
    [
     "rnorm(189)",
     "rnorm erzeugt Zufallszahlen."
    ]
   ],
   "r": "R: 0,0228 und 0,8186"
  }
 ],
 "fazit": "Normalverteilung: z = (x − μ)/σ, dann 68,3 / 95,5 / 99,7 % für ±1/2/3σ. Ränder sind symmetrisch. In R: pnorm für Anteile."
});
