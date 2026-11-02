/* Patch-Warteschlange · Baukonstruktion vertieft: V03 (Holz, Stahl, Stahlbeton), Ü06, Hausübung 1, Klausuranalyse, Altklausur 09/2022 · erstellt 02.11.2026
   Nutzt K7 aus Patch 1.3; definiert K8, K9 */
const K8 = "Stahl und Stahlbeton", K9 = "Schnittgrößen und Aussteifung";
mc("bauko", K6, "Welche Holzfehler mindern die Tragfähigkeit von Bauholz?", ["Äste, Risse, Faserneigung und Reaktionsholz", "Nur die Farbe", "Die Jahresringbreite allein", "Harzgehalt und Geruch"], "Faserneigung entsteht z. B. durch Drehwuchs, Reaktionsholz durch exzentrischen Wuchs. Diese Fehler sind der Grund, warum Holz in Festigkeitsklassen sortiert wird.", "Baukonstruktion V03");
mc("bauko", K6, "Welche Holzarten sind Nadelhölzer?", ["Fichte, Tanne, Kiefer, Lärche", "Eiche und Buche", "Fichte und Eiche", "Buche und Kiefer"], "Eiche und Buche sind Laubhölzer (Hartholz). Im Hochbau wird überwiegend Nadelholz verwendet, etwa als NH C24.", "Baukonstruktion V03");
mc("bauko", K6, "Was bedeutet „Anisotropie“ am Beispiel Holz?", ["Die Eigenschaften hängen von der Richtung ab – längs zur Faser fest und steif, quer dazu schwach", "Holz ist überall gleich fest", "Holz ist ein Verbundwerkstoff aus Stahl und Fasern", "Holz quillt nicht"], "Parallel zur Faser ist Holz rund zehnmal fester als quer dazu. Diese Frage kam in Teil I schon mehrfach.", "Baukonstruktion V03, Klausuranalyse Baukonstruktion");
mc("bauko", K4, "Was ist bei Biegung von Holz entscheidend?", ["Die Biegezugfestigkeit", "Die Querdruckfestigkeit", "Die Härte", "Die Rohdichte allein"], "Holz versagt bei Biegung meist auf der Zugseite, an Ästen und Fehlstellen. Die wirkliche Spannungsverteilung ist nicht linear – das Rechenmodell vereinfacht.", "Baukonstruktion V03");
mc("bauko", K4, "Wie lautet der Zugnachweis in Faserrichtung?", ["σ_t,0,d / (k_h · f_t,0,d) ≤ 1 mit σ = F/A_n", "σ_t,0,d / f_c,0,d ≤ 1", "F ≤ f_t,0,k · A", "σ_t,0,d / (k_c · f_t,0,d) ≤ 1"], "A_n ist der Nettoquerschnitt (ohne Bohrungen, Schwächungen). k_c gehört zum Knicken, nicht zum Zug. Diese Formel war schon dreimal Klausurfrage.", "Baukonstruktion V03, Klausuranalyse Baukonstruktion");
pair("bauko", K4, "Eulerfall – welcher Knicklängenbeiwert β?", [["Fall 1: unten eingespannt, oben frei", "β = 2"], ["Fall 2: beidseitig gelenkig", "β = 1"], ["Fall 3: eingespannt und gelenkig", "β = 0,7"], ["Fall 4: beidseitig eingespannt", "β = 0,5"]], "Knicklänge l_ef = β · l. Je besser gehalten, desto kürzer die Knicklänge und desto weniger knickgefährdet.", "Baukonstruktion V03, Ü06");
mc("bauko", K4, "Ein Kragstiel steht auf einem Fundament, das sich elastisch verdreht. Welche Knicklänge setzt man an?", ["l_ef = 1,2 · 2 · h = 2,4 · h", "l_ef = 2 · h", "l_ef = h", "l_ef = 0,7 · h"], "Die elastische Fundamentsohle ist keine perfekte Einspannung. Deshalb wird die Knicklänge des Eulerfalls 1 um 20 % vergrößert.", "Baukonstruktion V03");
mc("bauko", K4, "Was ist die Eulersche Knicklast?", ["N_cr = π² · E · I / l_ef²", "N_cr = E · A", "N_cr = f_c · A", "N_cr = π · E · I / l"], "Je länger der Stab, desto kleiner die Knicklast – mit dem Quadrat der Länge. Für die Bemessung ist sie über k_c in Tabellen aufbereitet.", "Baukonstruktion V03");
mc("bauko", K1, "Was gehört zu den Nachweisen im Grenzzustand der Gebrauchstauglichkeit bei Holz?", ["Durchbiegung und Schwingungen", "Biegung und Schub", "Knicken und Querdruck", "Zug in Faserrichtung"], "GZT: Zug, Druck, Biegung, Querkraft, Knicken. GZG: Verformungen und (Schwingungen). „Zwei Grenzzustände mit je zwei Holz-Nachweisen“ kam in 10 von 24 Klausuren.", "Baukonstruktion V03, Klausuranalyse Baukonstruktion");
mc("bauko", K4, "Wie berechnet man die Durchbiegung eines Einfeldträgers unter Gleichlast?", ["w = 5 · q · l⁴ / (384 · E · I)", "w = q · l² / 8", "w = q · l / (E · A)", "w = 5 · q · l³ / (384 · E · I)"], "Die Spannweite geht mit der vierten Potenz ein – doppelte Spannweite heißt 16-fache Durchbiegung. 384/5 = 76,8 steht so in der Musterlösung.", "Bauko-Altklausur 09/2022");
mc("bauko", K4, "Bei w_net,fin zählen nur quasi-ständige Anteile. Was bleibt bei Schnee und Wind (ψ₂ = 0) übrig?", ["Nur das Eigengewicht mit Kriechen: w_G · (1 + k_def)", "Alles wie bei w_fin", "Nur Schnee", "Nur Wind"], "Mit ψ₂ = 0 fallen Schnee und Wind heraus. In der Altklausur 09/2022: w_net,fin = 0,79 · 1,8 = 1,42 cm ≤ l/300.", "Bauko-Altklausur 09/2022");
mc("bauko", K1, "Welche Klimabedingungen gelten für Nutzungsklasse 1?", ["20 °C und höchstens 65 % relative Luftfeuchte", "20 °C und höchstens 85 % relative Luftfeuchte", "Frei bewittert", "Unter Wasser"], "NKL 2: bis 85 % Luftfeuchte (überdacht, offen). NKL 3: alles andere, z. B. frei bewittert.", "Baukonstruktion V03");
mc("bauko", K1, "Welche Einwirkung gehört zur KLED „lang“ (6 Monate bis 10 Jahre)?", ["Nutzlasten in Lagerhäusern", "Eigengewicht", "Wind", "Fahrzeuganprall"], "Eigenlast ist ständig, Verkehrslast auf Decken mittel, Wind kurz/sehr kurz, Anprall sehr kurz.", "Baukonstruktion V03");
mc("bauko", K4, "Der Biegenachweis ist nicht erfüllt. Was kannst du – außer einem Gerbergelenk – ändern?", ["Größeren Querschnitt oder höhere Festigkeitsklasse wählen", "Die Last weglassen", "kmod erhöhen", "γ_M auf 1,0 setzen"], "So steht es in der Musterlösung der Altklausur 09/2022. kmod und γ_M sind festgelegt und keine Stellschrauben.", "Bauko-Altklausur 09/2022");
mc("bauko", K9, "Was bewirkt ein Gerbergelenk in einem Durchlaufträger?", ["Es erzeugt einen Momentennullpunkt und gleicht Feld- und Stützmoment aus", "Es verstärkt den Träger über der Stütze", "Es verhindert Durchbiegung", "Es ersetzt ein Auflager"], "Liegt das Gelenk bei e = 0,1716 · l neben der Stütze, sind Feld- und Stützmoment gleich groß: ± 0,0858 · q · l².", "Bauko-Altklausur 09/2022");
pair("bauko", K2, "Welche Wichte hat das Nadelholz (SBT, V02)?", [["C16", "3,7 kN/m³"], ["C24", "4,2 kN/m³"], ["C30", "4,6 kN/m³"], ["C40", "5,0 kN/m³"]], "Höhere Festigkeitsklasse, dichteres Holz. In der Hausübung war C40 gefragt – wer 4,2 nimmt, verliert den Punkt.", "Baukonstruktion Hausübung 1");
mc("bauko", K5, "Wie berechnet man s_k in Schneelastzone 1a?", ["1,25 × Formelwert der Zone 1", "Wie Zone 1", "Wie Zone 2", "Immer 0,85 kN/m²"], "Die Zonen 1a und 2a liegen 25 % über ihrer Grundzone. München ist Zone 1a: s_k = 1,25 · (0,19 + 0,91 · ((A + 140)/760)²).", "Baukonstruktion Hausübung 1");
pair("bauko", K5, "Geschwindigkeitsdruck q_p im Binnenland bis 10 m Höhe – ordne zu.", [["Windzone 1", "0,50 kN/m²"], ["Windzone 2", "0,65 kN/m²"], ["Windzone 3", "0,80 kN/m²"], ["Windzone 4", "0,95 kN/m²"]], "Die Windzone nicht aus dem Kartenbild schätzen – in der Hausübung war München Zone 2, nicht 1.", "Baukonstruktion Hausübung 1");
mc("bauko", K5, "Was ist der Unterseitendruck am Dachüberstand?", ["Der Außendruck der Wand darunter, z. B. D = +0,8, E = −0,5", "Immer null", "Derselbe Wert wie auf der Dachoberseite", "Der halbe Geschwindigkeitsdruck"], "Der Wind drückt von unten gegen den Überstand. Man nimmt den Beiwert der darunterliegenden Wandfläche.", "Baukonstruktion Hausübung 1");
mc("bauko", K5, "Welche c_pe,10-Werte gelten am Satteldach mit genau 30° (Hausübung)?", ["F, G +0,7 · H +0,4 · J −0,5 · I −0,4", "Alle −0,5", "F +0,8, sonst 0", "Wie bei 35°, interpoliert"], "Bei 30° steht der Wert direkt in der Tabelle, Interpolieren ist nicht nötig. Sog mit Minus eintragen.", "Baukonstruktion Hausübung 1");
mc("bauko", K2, "Welche Kategorie und welche Last gelten für die Mannlast auf einem nicht begehbaren Dach?", ["Kategorie H: Q_k = 1,0 kN", "Kategorie A: 2,0 kN/m²", "Kategorie H: 2,0 kN", "Keine"], "1 kN entspricht etwa 100 kg – genau das wurde in einer Klausur gefragt.", "Baukonstruktion Hausübung 1, Klausuranalyse Baukonstruktion");
mc("bauko", K5, "Von welchen Faktoren hängt die Schneelast auf dem Dach ab?", ["Schneelastzone, Geländehöhe, Dachform/-neigung, Umgebung und Wärmedurchgang", "Nur von der Dachfarbe", "Nur vom Gewicht der Dachsteine", "Von der Windrichtung allein"], "s = μ_i · C_e · C_t · s_k: Zone und Höhe stecken in s_k, die Dachform in μ_i, die Umgebung in C_e und der Wärmedurchgang in C_t.", "Klausuranalyse Baukonstruktion");
pair("bauko", K5, "s = μ_i · C_e · C_t · s_k – was bedeutet welcher Faktor?", [["μ_i", "Formbeiwert (Dachform und -neigung)"], ["C_e", "Umgebungskoeffizient"], ["C_t", "Temperaturkoeffizient"], ["s_k", "charakteristische Schneelast am Boden"]], "Im Normalfall sind C_e = C_t = 1,0. Die Formel samt Komponenten war Teil-I-Frage.", "Klausuranalyse Baukonstruktion");
pair("bauko", K8, "Baustahl – Streckgrenze f_y,k ordnen.", [["S 235", "235 N/mm²"], ["S 355", "355 N/mm²"], ["S 460", "460 N/mm²"]], "Die Zahl im Namen ist die Streckgrenze. Die Zugfestigkeiten f_u liegen bei 360, 510 und 560 N/mm².", "Baukonstruktion V03");
pair("bauko", K8, "Was bedeutet S 235 J2?", [["S", "Baustahl (structural steel)"], ["235", "Streckgrenze in N/mm²"], ["J2", "Gütegruppe: Kerbschlagarbeit bei −20 °C"]], "Die Gütegruppe beschreibt die Zähigkeit aus dem Kerbschlagversuch.", "Baukonstruktion V03");
mc("bauko", K8, "Welcher Teilsicherheitsbeiwert gilt für den Querschnittswiderstand von Baustahl?", ["γ_M0 = 1,0", "γ_M = 1,3", "γ_S = 1,15", "γ_M = 1,5"], "Stahl ist sehr gleichmäßig. Holz 1,3, Betonstahl 1,15, Mauerwerk 1,5.", "Baukonstruktion V03, Ü06");
mc("bauko", K8, "Wie groß ist die Fließdehnung ε_y von S 235 ungefähr?", ["Rund 1 ‰", "Rund 10 %", "Rund 0,01 ‰", "Rund 5 %"], "ε_y = f_y / E = 235 / 210 000 ≈ 1,1 ‰. Danach fließt der Stahl, ohne dass die Spannung weiter steigt.", "Baukonstruktion V03");
mc("bauko", K8, "Was unterscheidet den plastischen vom elastischen Biegenachweis bei Stahl?", ["Plastisch zählt W_pl statt W_el – der ganze Querschnitt fließt", "Plastisch rechnet man ohne γ_M0", "Plastisch ist nur für Holz", "Es gibt keinen Unterschied"], "Das Verhältnis M_pl/M_el heißt plastischer Formbeiwert: rund 1,15 beim I-Profil, 1,5 beim Rechteck.", "Baukonstruktion V03");
mc("bauko", K8, "Warum trägt Beton im Stahlbeton keine Zugkräfte?", ["Seine Zugfestigkeit ist sehr gering und wird rechnerisch nicht angesetzt", "Beton ist zu schwer", "Zement löst sich unter Zug", "Er trägt Zug, aber nur bei Frost"], "Den Zug übernimmt der Betonstahl, den Druck der Beton. Spannstahl ist noch fester, aber teuer und sehr korrosionsanfällig.", "Baukonstruktion V03");
mc("bauko", K8, "Nenne Gründe für eine ausreichende Betondeckung.", ["Korrosionsschutz der Bewehrung, Verbund und Brandschutz", "Damit der Beton leichter wird", "Damit die Bewehrung sichtbar bleibt", "Damit Wasser abfließen kann"], "Die Deckung schützt den Stahl vor Feuchte und Feuer und sorgt dafür, dass Kräfte zwischen Stahl und Beton übertragen werden. Kam in 4 von 24 Klausuren.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Kragarm mit Einzellast am freien Ende: Wie sieht der Momentenverlauf aus?", ["Linear (Dreieck), Maximum an der Einspannung", "Parabel mit Maximum in der Mitte", "Konstant über die ganze Länge", "Null an der Einspannung"], "M = F · x wächst linear zur Einspannung hin. Bei Gleichlast wäre es eine Parabel mit q · l²/2 an der Einspannung.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Einfeldträger mit Einzellast F in der Mitte: Wie groß ist das größte Moment?", ["F · l / 4 in Feldmitte", "F · l / 8", "F · l", "F · l / 2 am Auflager"], "Der Verlauf ist ein Dreieck. Unter Gleichlast wäre es die Parabel mit q · l²/8.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Zweifeldträger unter Gleichlast: Wo liegt das betragsmäßig größte Moment?", ["Über der Mittelstütze: −0,125 · q · l²", "In Feldmitte: 0,070 · q · l²", "An den Endauflagern", "Überall gleich"], "Deshalb wird der Biegenachweis über der Stütze geführt (Altklausur 09/2022).", "Bauko-Altklausur 09/2022");
mc("bauko", K9, "Was ist der Unterschied zwischen Platten- und Scheibentragwirkung?", ["Platte: Last senkrecht zur Ebene (Biegung). Scheibe: Last in der Ebene", "Platten sind aus Holz, Scheiben aus Beton", "Scheiben tragen nur Eigengewicht", "Es gibt keinen Unterschied"], "Eine Decke trägt Nutzlast als Platte und Windlast als Scheibe zu den aussteifenden Wänden.", "Klausuranalyse Baukonstruktion");
mc("bauko", K9, "Wie viel Punkte bringt die Stabilisierung (Reihen- und Scheibenstabilisierung) in Teil I?", ["7–10 Punkte, in 23 von 24 Klausuren", "1 Punkt, selten", "Gar keine", "Sie kommt nur in Teil II"], "Die Aufgabe heißt meist: „Stabilisieren Sie die Konstruktion mit möglichst wenigen Diagonalen“ – einmal als reine Reihen-, einmal als reine Scheibenstabilisierung. Das Thema kommt in V07 (Aussteifung).", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Ab welcher Tiefe gilt eine Gründung als frostsicher?", ["Ab etwa 0,8 m", "Ab 0,2 m", "Ab 2 m", "Frost spielt keine Rolle"], "Wird in Gründungsaufgaben gern nebenbei abgefragt. Das Thema kommt in V11.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Wann gilt ein Fundament in den Musterlösungen noch als kippsicher?", ["Ausmitte e = M/N ≤ b/3", "e ≤ b/2", "e ≤ b", "Nur bei e = 0"], "Ohne klaffende Fuge muss e ≤ b/6 sein. Beim Kippen wirkt das Eigengewicht günstig, also γ = 1,0.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Was bedeutet HLzB 12-1,0-IIa?", ["Hochlochziegel B, Steinfestigkeitsklasse 12, Rohdichteklasse 1,0, Mörtelgruppe IIa", "Hohlblockstein, 12 cm dick", "Holz-Leichtbau, 12 Lagen", "Hochlochziegel mit 12 Löchern"], "Aus Festigkeitsklasse und Mörtelgruppe liest man f_k aus der Tabelle ab. Mauerwerk kommt in V09–V10.", "Klausuranalyse Baukonstruktion");
mc("bauko", K7, "Wie lautet der Bemessungswert der Mauerwerksdruckfestigkeit in den Musterlösungen?", ["f_d = 0,85 · f_k / 1,5", "f_d = f_k / 1,3", "f_d = kmod · f_k / 1,3", "f_d = f_k"], "Der Faktor 0,85 berücksichtigt Dauerstandseinflüsse, γ_M = 1,5 für Mauerwerk. Damit n_Rd = Φ · t · f_d.", "Klausuranalyse Baukonstruktion");
THEMEN["bauko|Stahl und Stahlbeton"] = "Baustahl ist gleichmäßig, zäh und fließt ab etwa 1 ‰ Dehnung – deshalb rechnet man mit γ_M0 = 1,0 und darf plastische Reserven nutzen. Im Stahlbeton teilen sich die Baustoffe die Arbeit: Beton nimmt Druck auf, der Betonstahl den Zug, und die Betondeckung schützt den Stahl vor Korrosion und Feuer.";
THEMEN["bauko|Schnittgrößen und Aussteifung"] = "Wer Momentenverläufe skizzieren kann, findet die maßgebende Stelle für den Nachweis sofort – beim Kragarm an der Einspannung, beim Durchlaufträger über der Stütze. Aussteifung sorgt dafür, dass Horizontallasten wie Wind sicher in den Baugrund kommen; in der Klausur ist die Stabilisierung mit möglichst wenigen Diagonalen fast immer dabei.";
/* Lösungsweg-Aufgaben */
aufgabe({
 "id": "bauko-ak2022-stuetze",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Zweifeldträger über der Stütze",
 "s": "Bauko-Altklausur 09/2022, Teil II, Aufgabe 1 b–d",
 "angabe": "Pos. 1 einer Scheune ist ein Zweifeldträger mit gleichen Feldern. Nachzuweisen ist die Biegung über der Mittelstütze, danach die Variante als Gerberträger. Überdachtes, offenes Tragwerk.",
 "geg": [
  "NH C24, 12/20",
  "l = 3,75 m je Feld",
  "g = 4,40 + 0,10 = 4,50 kN/m",
  "Schnee s = 2,10 kN/m",
  "200 m ü. NN"
 ],
 "ges": "Ausnutzung über der Stütze, mit und ohne Gerbergelenk",
 "schritte": [
  {
   "f": "Wo liegt das maßgebende Moment und wie bekommst du es?",
   "o": [
    [
     "Über der Mittelstütze: M = −0,125 · q · l² je Lastfall",
     "Beim Zweifeldträger unter Gleichlast ist das Stützmoment betragsmäßig am größten (Tafelwert)."
    ],
    [
     "In Feldmitte mit q · l²/8",
     "Das gilt für den Einfeldträger. Beim Zweifeldträger ist das Feldmoment kleiner (0,070 · q · l²)."
    ],
    [
     "Am Endauflager",
     "Dort ist das Moment null."
    ],
    [
     "Mit beiden Lastfällen zusammen, ohne Trennung",
     "Die Lastfälle müssen getrennt bleiben, damit man sie mit kmod vergleichen kann."
    ]
   ],
   "r": "M_g = −0,125 · 4,50 · 3,75² = −7,91 kNm\nM_s = −0,125 · 2,10 · 3,75² = −3,69 kNm"
  },
  {
   "f": "Welche Nutzungsklasse und welche kmod-Werte gelten?",
   "o": [
    [
     "NKL 2 (überdacht, offen): ständig 0,6 · Schnee kurz 0,9",
     "Schnee unter 1000 m ist „kurz“."
    ],
    [
     "NKL 1: alles 0,8",
     "Ein offenes Tragwerk ist nicht beheizt – NKL 2."
    ],
    [
     "NKL 3: Schnee 0,7",
     "NKL 3 gilt für frei bewitterte Bauteile."
    ],
    [
     "Schnee mittel: 0,8",
     "Mittel gilt für Schnee erst über 1000 m."
    ]
   ]
  },
  {
   "f": "Welche Kombination ist maßgebend?",
   "o": [
    [
     "Beide bilden und durch kmod teilen – der größere Quotient entscheidet",
     "1,35 · 7,91 / 0,6 = 17,8 gegen (1,35 · 7,91 + 1,5 · 3,69) / 0,9 = 18,0."
    ],
    [
     "Immer die mit der größten Last",
     "Ohne kmod-Vergleich ist das nicht gesichert."
    ],
    [
     "Nur Eigengewicht, weil kmod klein ist",
     "Hier gewinnt knapp die Kombination mit Schnee."
    ],
    [
     "Schnee allein",
     "Eigengewicht wirkt immer mit."
    ]
   ],
   "r": "M_Ed = 1,35 · 7,91 + 1,5 · 3,69 = 16,21 kNm (k_mod = 0,9)"
  },
  {
   "f": "Ist der Biegenachweis über der Stütze erfüllt?",
   "o": [
    [
     "Nein: σ = 16,21 · 100 / 800 = 2,03 kN/cm² > 1,66 kN/cm²",
     "W = 12 · 20²/6 = 800 cm³, f_m,d = 0,9 · 24/1,3 = 16,6 N/mm²."
    ],
    [
     "Ja, η = 0,82",
     "Dann wäre mit dem Feldmoment gerechnet worden."
    ],
    [
     "Ja, weil k_h = 1,3 gilt",
     "Bei h = 200 mm ist k_h = 1,0."
    ],
    [
     "Das hängt von der Durchbiegung ab",
     "Biegung im GZT ist ein eigener Nachweis."
    ]
   ],
   "r": "η = 2,03 / 1,66 = 1,22 > 1 → nicht erfüllt"
  },
  {
   "f": "Jetzt mit Gerbergelenk bei e = 0,1716 · l. Was ändert sich?",
   "o": [
    [
     "Feld- und Stützmoment werden gleich: ± 0,0858 · q · l²",
     "Das Gelenk schafft einen Momentennullpunkt – das Stützmoment sinkt deutlich."
    ],
    [
     "Das Stützmoment verdoppelt sich",
     "Das Gelenk entlastet die Stütze."
    ],
    [
     "Nichts",
     "Genau das Moment über der Stütze ändert sich."
    ],
    [
     "Das Moment wird überall null",
     "Im Feld und über der Stütze bleibt ein Moment."
    ]
   ],
   "r": "M_g = 5,43 kNm · M_s = 2,53 kNm → M_Ed = 11,13 kNm\nσ = 1,39 kN/cm² → η = 0,84 ✓"
  }
 ],
 "fazit": "Durchlaufträger: Stützmoment ist maßgebend. Kombinationen immer über M_Ed/kmod vergleichen. Reicht der Querschnitt nicht: Gerbergelenk, größerer Querschnitt oder höhere Festigkeitsklasse."
});
aufgabe({
 "id": "bauko-ak2022-durch",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Durchbiegung eines Sparrens",
 "s": "Bauko-Altklausur 09/2022, Teil II, Aufgabe 1 e",
 "angabe": "Pos. 2 (Sparren) wird als Einfeldträger betrachtet. Die Lasten wirken senkrecht zur Dachfläche. Überdachtes, offenes Tragwerk.",
 "geg": [
  "NH C30, 10/16",
  "Grundrissspannweite 4,0 m, α = 26,57°",
  "g⊥ = 0,62 kN/m",
  "s⊥ = 0,20 kN/m",
  "w = 0,16 kN/m",
  "E = 12 000 N/mm², I = 3413 cm⁴"
 ],
 "ges": "Nachweise w_inst, w_fin, w_net,fin",
 "schritte": [
  {
   "f": "Welche Spannweite setzt du an?",
   "o": [
    [
     "Die Länge entlang des Sparrens: l = 4,0 / cos 26,57° = 4,47 m",
     "Die Lasten wirken senkrecht zur Dachfläche – also gilt die schräge Länge."
    ],
    [
     "Die Grundrissspannweite 4,0 m",
     "Dann passen Last und Spannweite nicht zusammen."
    ],
    [
     "4,0 · cos 26,57° = 3,58 m",
     "Der Sparren ist länger als sein Grundriss, nicht kürzer."
    ],
    [
     "Die Firsthöhe",
     "Die Höhe ist keine Spannweite."
    ]
   ],
   "r": "l = 4,47 m"
  },
  {
   "f": "Wie bekommst du die Einzeldurchbiegungen?",
   "o": [
    [
     "w = q · l⁴ / (76,8 · E · I) je Lastart",
     "Das ist 5 · q · l⁴/(384 · E · I) für den Einfeldträger, getrennt für g, s und w."
    ],
    [
     "w = q · l² / 8",
     "Das ist ein Moment, keine Durchbiegung."
    ],
    [
     "Alle Lasten addieren und einmal rechnen",
     "Für die Kombination brauchst du die Anteile einzeln."
    ],
    [
     "w = q · l / (E · A)",
     "Das wäre eine Längenänderung unter Normalkraft."
    ]
   ],
   "r": "w_G = 0,79 cm · w_S = 0,25 cm · w_W = 0,20 cm"
  },
  {
   "f": "Wie kombinierst du für w_inst?",
   "o": [
    [
     "Eine Last führend, die andere mit ψ₀ (Schnee 0,5 · Wind 0,6) – beide Varianten prüfen",
     "Schnee führend: 0,79 + 0,25 + 0,6 · 0,20 = 1,16 cm. Wind führend: 1,12 cm."
    ],
    [
     "Alles voll addieren",
     "Zwei veränderliche Lasten treten selten gleichzeitig voll auf – deshalb ψ₀."
    ],
    [
     "Nur das Eigengewicht",
     "Die veränderlichen Lasten gehören zu w_inst dazu."
    ],
    [
     "Mit Teilsicherheitsbeiwerten 1,35 und 1,5",
     "Im GZG wird ohne Teilsicherheitsbeiwerte gerechnet."
    ]
   ],
   "r": "w_inst = 1,16 cm ≤ l/300 = 1,49 cm ✓"
  },
  {
   "f": "Was kommt bei w_fin dazu?",
   "o": [
    [
     "Das Kriechen: w_G · (1 + k_def) mit k_def = 0,8 für NKL 2",
     "Schnee und Wind haben ψ₂ = 0 und kriechen deshalb nicht mit."
    ],
    [
     "Nichts, w_fin = w_inst",
     "Holz verformt sich unter Dauerlast weiter."
    ],
    [
     "Alles mal 1,8",
     "Nur der quasi-ständige Anteil kriecht."
    ],
    [
     "k_def = 2,0",
     "Das gilt für NKL 3."
    ]
   ],
   "r": "w_fin = 0,79 · 1,8 + 0,25 + 0,6 · 0,20 = 1,79 cm ≤ l/200 = 2,24 cm ✓"
  },
  {
   "f": "Und die Netto-Enddurchbiegung?",
   "o": [
    [
     "Nur quasi-ständige Lasten mit Kriechen: w_G · (1 + k_def)",
     "Mit ψ₂ = 0 für Schnee und Wind bleibt nur das Eigengewicht, eine Überhöhung gibt es nicht."
    ],
    [
     "w_fin minus w_inst",
     "So ist w_net,fin nicht definiert."
    ],
    [
     "Wie w_inst",
     "Kriechen gehört dazu."
    ],
    [
     "Null",
     "Das Eigengewicht bleibt."
    ]
   ],
   "r": "w_net,fin = 0,79 · 1,8 = 1,42 cm ≤ l/300 = 1,49 cm ✓"
  }
 ],
 "fazit": "GZG: Einzeldurchbiegungen je Last, ohne Teilsicherheiten. w_inst mit ψ₀, w_fin mit Kriechen (k_def), w_net,fin nur quasi-ständig. Grenzwerte l/300, l/200, l/300."
});
aufgabe({
 "id": "bauko-hue1-dach",
 "f": "bauko",
 "t": "Lasten",
 "titel": "Lastermittlung Hausübung 1",
 "s": "Baukonstruktion Hausübung 1 (Übungsmodus)",
 "v": "pfettendach",
 "angabe": "Sparren eines Satteldachs in München. Die Fallen aus der Dynexite-Auswertung stecken in den Schritten.",
 "geg": [
  "Sparren NH C40, 8/16, e = 64 cm",
  "Dachaufbau Σ = 0,882 kN/m²",
  "α = 30°",
  "München, 519 m ü. NN",
  "Gebäude 10,045 m + 2 × 0,385 m Überstand",
  "Firsthöhe 9,11 m"
 ],
 "ges": "g pro Sparren (auch auf Grundfläche), Schnee, Windbereich-Grenze e",
 "schritte": [
  {
   "f": "Welche Wichte nimmst du für den Sparren?",
   "o": [
    [
     "5,0 kN/m³ – C40 laut Tabelle",
     "Die Wichte hängt von der Festigkeitsklasse ab: C24 4,2 · C30 4,6 · C40 5,0."
    ],
    [
     "4,2 kN/m³ wie immer",
     "4,2 gilt nur für C24 – genau dieser Fehler kostet in Dynexite den Punkt."
    ],
    [
     "25 kN/m³",
     "Das ist Stahlbeton."
    ],
    [
     "7,85 kN/m³",
     "Das ist eine falsche Einheit für Stahl (78,5 kN/m³)."
    ]
   ],
   "r": "g_Sparren = 5,0 · 0,08 · 0,16 = 0,064 kN/m"
  },
  {
   "f": "Wie kommst du auf die Last pro Sparren – und auf die Grundfläche?",
   "o": [
    [
     "0,882 · 0,64 + 0,064, dann durch cos 30° teilen",
     "Das Eigengewicht wirkt pro m Dachfläche. Auf die Grundrisslänge bezogen wird es größer."
    ],
    [
     "Mit cos 30° multiplizieren",
     "Dann würde die Last kleiner – sie muss auf die kürzere Grundlänge größer werden."
    ],
    [
     "Nur den Aufbau, ohne Sparren",
     "Der Sparren trägt sein eigenes Gewicht mit."
    ],
    [
     "Mit tan 30° umrechnen",
     "Die Umrechnung läuft über cos α."
    ]
   ],
   "r": "g = 0,63 kN/m · g′ = 0,63 / cos 30° = 0,73 kN/m"
  },
  {
   "f": "Wie bekommst du s_k für München (Zone 1a)?",
   "o": [
    [
     "Formel der Zone 1 mal 1,25",
     "Zone 1a liegt 25 % über Zone 1."
    ],
    [
     "Formel der Zone 2",
     "München liegt nicht in Zone 2 – das ergäbe 1,69 kN/m²."
    ],
    [
     "Mindestwert 0,65 kN/m²",
     "Der Formelwert liegt hier deutlich darüber."
    ],
    [
     "Formel der Zone 1 ohne Faktor",
     "Dann fehlen 25 %."
    ]
   ],
   "r": "s_k = 1,25 · (0,19 + 0,91 · ((519 + 140)/760)²) = 1,09 kN/m²"
  },
  {
   "f": "Welcher Formbeiwert gilt bei genau 30°?",
   "o": [
    [
     "μ₁ = 0,8",
     "Bis einschließlich 30° gilt 0,8; erst darüber wird abgemindert."
    ],
    [
     "μ₁ = 0,67",
     "Das wäre für 35°."
    ],
    [
     "μ₁ = 0",
     "Das gilt ab 60°."
    ],
    [
     "μ₁ = 1,0",
     "Den Wert gibt es für μ₁ nicht."
    ]
   ],
   "r": "s = 0,8 · 1,09 = 0,87 kN/m² → pro Sparren 0,87 · 0,64 = 0,56 kN/m"
  },
  {
   "f": "Was ist b in e = min(b; 2h)?",
   "o": [
    [
     "Die Länge des Dachgrundrisses inklusive Überstände",
     "So wertet Dynexite: 10,045 + 2 · 0,385 = 10,815 m."
    ],
    [
     "Die reine Gebäudelänge 10,045 m",
     "Diese Eingabe wurde als falsch gewertet."
    ],
    [
     "Die Gebäudetiefe in Windrichtung",
     "Das ist d, nicht b."
    ],
    [
     "Die Firsthöhe",
     "Die steckt in 2h."
    ]
   ],
   "r": "e = min(10,815; 18,22) = 10,815 m"
  }
 ],
 "fazit": "Hausübungs-Fallen: Wichte nach Festigkeitsklasse, g auf die Grundfläche mit /cos α, Zone 1a = 1,25 × Zone 1, μ₁ = 0,8 bis 30°, b inklusive Dachüberstand, Windzone nicht schätzen."
});
aufgabe({
 "id": "bauko-ue06-stahl",
 "f": "bauko",
 "t": "Stahl und Stahlbeton",
 "titel": "Stahlträger bemessen",
 "s": "Baukonstruktion Übung 06, Beispiel b",
 "v": "traeger",
 "angabe": "Der Einfeldträger aus Ü06 soll als Walzprofil der IPE-Reihe aus S 235 auf reine Biegung bemessen werden.",
 "geg": [
  "l = 4 m",
  "M_Ed = 12,6 kNm",
  "S 235: f_y,k = 235 N/mm²",
  "γ_M0 = 1,0"
 ],
 "ges": "IPE-Profil und Ausnutzung",
 "schritte": [
  {
   "f": "Braucht der Stahlträger auch einen kmod-Vergleich der Kombinationen?",
   "o": [
    [
     "Nein – kmod gibt es nur bei Holz, maßgebend ist das größte M_Ed",
     "Stahl hängt nicht von der Lastdauer ab. Hier ist M_Ed = 1,35 · 6 + 1,5 · 3 = 12,6 kNm."
    ],
    [
     "Ja, mit den gleichen kmod-Werten",
     "kmod ist ein Holzbeiwert."
    ],
    [
     "Ja, mit kmod = 1,0",
     "Den Beiwert gibt es bei Stahl gar nicht."
    ],
    [
     "Nur für Wind",
     "Auch dann nicht."
    ]
   ],
   "r": "M_Ed = 12,6 kNm"
  },
  {
   "f": "Wie groß ist die Bemessungsfestigkeit?",
   "o": [
    [
     "f_y,d = f_y,k / γ_M0 = 235 N/mm²",
     "Mit γ_M0 = 1,0 bleibt die Streckgrenze unverändert."
    ],
    [
     "235 / 1,3",
     "1,3 ist der Beiwert für Holz."
    ],
    [
     "235 / 1,15",
     "1,15 gilt für Betonstahl."
    ],
    [
     "360 N/mm² (f_u)",
     "Bemessen wird gegen Fließen, also mit f_y."
    ]
   ],
   "r": "f_y,d = 23,5 kN/cm²"
  },
  {
   "f": "Welches Widerstandsmoment brauchst du?",
   "o": [
    [
     "erf W = M_Ed / f_y,d",
     "Elastischer Biegenachweis: σ = M/W ≤ f_y,d."
    ],
    [
     "erf W = M_Ed · f_y,d",
     "Das ergibt eine falsche Einheit."
    ],
    [
     "erf A = M_Ed / f_y,d",
     "Für Biegung zählt W, nicht A."
    ],
    [
     "erf I = M_Ed / E",
     "Das wäre ein Verformungsansatz."
    ]
   ],
   "r": "erf W = 1260 kNcm / 23,5 kN/cm² = 53,6 cm³"
  },
  {
   "f": "Welches Profil wählst du?",
   "o": [
    [
     "IPE 140 mit W_el,y = 77,3 cm³ – das kleinste ausreichende",
     "IPE 120 hat nur 53,0 cm³ und reicht knapp nicht."
    ],
    [
     "IPE 100",
     "Viel zu klein."
    ],
    [
     "IPE 300",
     "Reicht, ist aber völlig überdimensioniert."
    ],
    [
     "Ein Profil mit W = 53,6 cm³ genau",
     "Man wählt aus der Tabelle das nächstgrößere."
    ]
   ],
   "r": "IPE 140: η = 1260 / 77,3 / 23,5 = 0,69 ≤ 1 ✓"
  }
 ],
 "fazit": "Stahl: kein kmod, γ_M0 = 1,0, erf W = M_Ed / f_y,d, nächstgrößeres Profil aus der Tabelle. Bei gleicher Last braucht der Stahlträger viel weniger W als Holz (53,6 statt 758 cm³)."
});
aufgabe({
 "id": "bauko-verband",
 "f": "bauko",
 "t": "Schnittgrößen und Aussteifung",
 "titel": "Zugkraft in einer Verbanddiagonale",
 "s": "Übungsaufgabe im Stil der Klausur Teil I (Verband, 5 von 24 Klausuren)",
 "angabe": "Ein Feld wird mit einer Stahldiagonale unter 45° ausgesteift. Oben greift eine horizontale Windlast an. Die Diagonale soll aus einem Vollkreisprofil bestehen und nicht fließen.",
 "geg": [
  "H_k = 80 kN (Wind)",
  "Diagonale unter 45°",
  "S 235: f_y = 235 N/mm²"
 ],
 "ges": "Zugkraft Z_d und erforderlicher Durchmesser d",
 "schritte": [
  {
   "f": "Wie bekommst du den Bemessungswert der Horizontallast?",
   "o": [
    [
     "H_d = 1,5 · H_k",
     "Wind ist eine veränderliche Einwirkung."
    ],
    [
     "H_d = 1,35 · H_k",
     "1,35 gilt für ständige Lasten."
    ],
    [
     "H_d = H_k",
     "Im GZT braucht es Teilsicherheitsbeiwerte."
    ],
    [
     "H_d = H_k / 1,5",
     "Einwirkungen werden vergrößert, nicht verkleinert."
    ]
   ],
   "r": "H_d = 1,5 · 80 = 120 kN"
  },
  {
   "f": "Wie groß ist die Zugkraft in der Diagonale?",
   "o": [
    [
     "Z_d = H_d / cos 45°",
     "Die Diagonale muss die waagerechte Last aufnehmen – ihre Horizontalkomponente ist Z · cos α."
    ],
    [
     "Z_d = H_d · cos 45°",
     "Dann wäre die Diagonalkraft kleiner als die Last – sie muss größer sein."
    ],
    [
     "Z_d = H_d",
     "Das gälte nur für einen waagerechten Stab."
    ],
    [
     "Z_d = H_d · tan 45°",
     "tan verknüpft Komponenten, nicht Stabkraft und Last."
    ]
   ],
   "r": "Z_d = 120 / 0,707 = 169,7 kN"
  },
  {
   "f": "Welche Fläche braucht der Stab mindestens?",
   "o": [
    [
     "A = Z_d / f_y",
     "Spannung σ = Z/A darf die Fließgrenze nicht überschreiten."
    ],
    [
     "A = Z_d · f_y",
     "Falsche Einheit."
    ],
    [
     "A = Z_d / f_u",
     "Gefordert ist „nicht fließen“ – also f_y."
    ],
    [
     "A = f_y / Z_d",
     "Kehrwert, falsche Einheit."
    ]
   ],
   "r": "A = 169 700 N / 235 N/mm² = 722 mm²"
  },
  {
   "f": "Wie bekommst du den Durchmesser?",
   "o": [
    [
     "d = √(4 · A / π), dann aufrunden",
     "Kreisfläche A = π · d²/4."
    ],
    [
     "d = A / π",
     "Das ergibt keine Länge."
    ],
    [
     "d = √A",
     "Das wäre die Seite eines Quadrats."
    ],
    [
     "d = 2 · A",
     "Falsche Einheit."
    ]
   ],
   "r": "d = √(4 · 722 / π) = 30,3 mm → gewählt d = 32 mm"
  }
 ],
 "fazit": "Verband: H_d mit γ_Q, Diagonalkraft Z_d = H_d / cos α, A = Z_d / f_y, d = √(4A/π). Diagonalen bekommen immer mehr Kraft als die Last selbst."
});
aufgabe({
 "id": "bauko-knick-stuetze",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Knicknachweis einer Holzstütze",
 "s": "Baukonstruktion V03/Ü06, Werte der Stütze Pos. 9 (Hausarbeitsbeispiel)",
 "angabe": "Die Stütze aus dem Querdruckbeispiel wird auf Knicken nachgewiesen (Kopf und Fuß gelenkig). Gerechnet wird mit der Formel aus Ü06 statt mit der Tabelle.",
 "geg": [
  "14/14 NH C24",
  "l = 3,27 m",
  "N_d = 53,41 kN",
  "k_mod = 1,0",
  "f_c,0,k = 21 N/mm²",
  "E_0,05 = 7400 N/mm²",
  "β_c = 0,2"
 ],
 "ges": "k_c und Ausnutzung",
 "schritte": [
  {
   "f": "Welche Knicklänge gilt?",
   "o": [
    [
     "Eulerfall 2, β = 1: l_ef = 3,27 m",
     "Beidseitig gelenkig gelagert – die Knicklänge ist die Stablänge."
    ],
    [
     "β = 2: l_ef = 6,54 m",
     "Das wäre ein Kragstiel."
    ],
    [
     "β = 0,5: l_ef = 1,64 m",
     "Das gilt für beidseitige Einspannung."
    ],
    [
     "β = 0,7",
     "Das wäre eingespannt und gelenkig."
    ]
   ],
   "r": "l_ef = 327 cm"
  },
  {
   "f": "Wie bekommst du die Schlankheit?",
   "o": [
    [
     "λ = l_ef / i mit i = h/√12",
     "Für den Rechteckquerschnitt ist der Trägheitsradius i = h/√12."
    ],
    [
     "λ = l_ef / h",
     "Dann fehlt der Faktor √12."
    ],
    [
     "λ = h / l_ef",
     "Kehrwert – je länger, desto schlanker."
    ],
    [
     "λ = l_ef · i",
     "Falsche Einheit."
    ]
   ],
   "r": "i = 14/√12 = 4,04 cm · λ = 327/4,04 = 80,9"
  },
  {
   "f": "Wie geht es zur bezogenen Schlankheit und zu k_c?",
   "o": [
    [
     "λ_rel = λ/π · √(f_c,0,k/E_0,05), dann k und k_c nach Formel oder Tabelle",
     "λ_rel = 1,37 → k = 0,5 · (1 + 0,2 · (1,37 − 0,3) + 1,37²) = 1,55 → k_c = 1/(k + √(k² − λ_rel²)) = 0,44."
    ],
    [
     "k_c = 1,0, weil die Stütze kurz ist",
     "Bei λ = 81 ist sie deutlich knickgefährdet."
    ],
    [
     "k_c = λ/100",
     "So ist k_c nicht definiert."
    ],
    [
     "k_c aus der Durchbiegung",
     "k_c hängt von der Schlankheit ab."
    ]
   ],
   "r": "λ_rel = 1,37 · k_c = 0,44"
  },
  {
   "f": "Wie lautet der Nachweis?",
   "o": [
    [
     "σ_c,0,d / (k_c · f_c,0,d) ≤ 1",
     "Druckspannung gegen die abgeminderte Druckfestigkeit."
    ],
    [
     "σ_c,0,d / f_c,0,d ≤ 1",
     "Ohne k_c fehlt die Knickgefahr."
    ],
    [
     "σ_c,0,d · k_c ≤ f_c,0,k",
     "k_c gehört zum Widerstand, und es fehlen kmod und γ_M."
    ],
    [
     "N_d ≤ N_cr",
     "Die ideale Knicklast allein ist kein Bemessungsnachweis."
    ]
   ],
   "r": "σ = 53,41 kN / 196 cm² = 2,73 N/mm² · f_c,0,d = 1,0 · 21/1,3 = 16,2 N/mm²\nη = 2,73 / (0,44 · 16,2) = 0,38 ✓"
  }
 ],
 "fazit": "Knicken: l_ef = β · l → i = h/√12 → λ → λ_rel → k_c (Tabelle oder Formel) → σ_c,0,d / (k_c · f_c,0,d) ≤ 1. Je schlanker, desto kleiner k_c."
});
