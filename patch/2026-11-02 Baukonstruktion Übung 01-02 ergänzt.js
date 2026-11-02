/* Patch-Warteschlange · Baukonstruktion Übung 01 (Beispiele 1, 2, Selbstrechenaufgabe = Altklausur 09/2020) und Übung 02 (Einschub DFL/AFL/GFL, Hausübungen) · erstellt 02.11.2026
   Nutzt K7, K9 (aus „Baukonstruktion vertieft“) */
ord("bauko", K2, "Von der Wichte zur Einzellast: Bring die Schritte in Reihenfolge.", ["Wichte γ in kN/m³", "× Dicke → Flächenlast in kN/m²", "× Einzugsbreite → Streckenlast in kN/m", "× Länge → Einzellast in kN"], "Mit jedem Schritt kommt eine Länge dazu und eine Potenz von m fällt weg. Beispiel Stahlbeton: 25 kN/m³ · 0,16 m = 4,0 kN/m².", "Baukonstruktion Übung 01");
mc("bauko", K2, "Wie groß ist das Eigengewicht einer 16 cm dicken Stahlbetondecke?", ["4,0 kN/m²", "0,4 kN/m²", "16 kN/m²", "2,5 kN/m²"], "25 kN/m³ · 0,16 m = 4,0 kN/m². Bei Massivdecken ist die Rohdecke der mit Abstand größte Anteil – in Ü01 sind es 4,0 von 5,56 kN/m².", "Baukonstruktion Übung 01");
mc("bauko", K2, "Welche Nutzlastkategorie gilt für eine Massivdecke zwischen Wohnräumen?", ["A2: 1,5 kN/m² – mit ausreichender Querverteilung", "A3: 2,0 kN/m²", "A1: 1,0 kN/m²", "B1: 2,0 kN/m²"], "Massivdecken verteilen Lasten quer zur Spannrichtung. Holzbalkendecken können das nicht und bekommen deshalb A3 mit 2,0 kN/m².", "Baukonstruktion Übung 01");
mc("bauko", K3, "Holzbalken laufen über mehrere Felder. Welches Auflager gibt die größte Last an den Unterzug weiter?", ["Das erste Innenauflager (B) – größter Tafelwert", "Das Endauflager A", "Alle gleich viel", "Das letzte Auflager"], "Beim Vierfeldträger in Ü01: A = 0,393 · q · l, B = 1,143 · q · l, C = 0,929 · q · l. Der Unterzug unter B ist am stärksten belastet.", "Baukonstruktion Übung 01");
mc("bauko", K3, "Wie wird aus der Deckenlast eine Streckenlast auf den Unterzug?", ["Tafelwert × Flächenlast × Spannweite der Balken", "Flächenlast × Balkenabstand", "Tafelwert × Flächenlast", "Flächenlast / Spannweite"], "Die Auflagerkraft pro Meter Deckenbreite ist kN/m² · m = kN/m – genau die Last pro Meter Unterzug. Das Eigengewicht des Trägers kommt noch dazu.", "Baukonstruktion Übung 01");
mc("bauko", K5, "Wind wirkt senkrecht auf die Dachfläche. Wie groß sind seine Anteile auf Grundfläche (GFL) und Aufrissfläche (AFL)?", ["Beide sind so groß wie w – nur auf eine andere Bezugsfläche bezogen", "Auf der GFL w · cos α, auf der AFL w · sin α", "Auf beiden null", "Doppelt so groß wie w"], "Die Kraft auf das schräge Dach wird zerlegt, gleichzeitig wird die Bezugslänge kürzer. Beides hebt sich auf: w_GFL = w_AFL = w. Beim Eigengewicht ist das anders: g_GFL = g / cos α.", "Baukonstruktion Übung 02");
mc("bauko", K5, "Warum zerlegt man die Windlast überhaupt in GFL- und AFL-Anteile?", ["Damit sie sich mit den lotrechten Lasten (Eigengewicht, Schnee auf der Grundfläche) kombinieren lässt", "Weil der Wind sonst nicht wirkt", "Damit die Lasten kleiner werden", "Das ist nur bei Flachdächern nötig"], "Lasten mit verschiedenen Bezugsflächen kann man nicht einfach addieren. In Ü02 heißt es: „Lasten so nicht kombinierbar → Umrechnung in AFL und GFL“.", "Baukonstruktion Übung 02");
mc("bauko", K3, "Durchlaufträger mit ungleichen Feldern (l₁ : l₂ = 1 : 1,4): Wie bekommst du die Momente?", ["Mit der Tabelle für ungleiche Stützweiten: Beiwert · q · l₁²", "Mit q · l²/8 für jedes Feld", "Mit dem Mittelwert der Feldlängen", "Mit den Beiwerten für gleiche Felder"], "Die Tabelle liefert die Beiwerte für das Längenverhältnis. In der Altklausur 09/2020: M_b = −0,195 · q · 2,5².", "Bauko-Altklausur 09/2020 (Selbstrechenaufgabe Ü01)");
mc("bauko", K3, "Warum untersucht man bei Durchlaufträgern auch Verkehrslast nur in einzelnen Feldern?", ["Weil die feldweise Laststellung die größten Feldmomente liefern kann", "Weil Verkehr nie überall gleichzeitig steht", "Damit die Rechnung kürzer wird", "Das macht man nur bei Stahl"], "Altklausur 09/2020: Verkehr nur links ergibt im zweiten Feld 1,40 kNm, Verkehr überall nur 1,23 kNm. Für das Stützmoment ist dagegen die Vollbelastung maßgebend.", "Bauko-Altklausur 09/2020 (Selbstrechenaufgabe Ü01)");
mc("bauko", K7, "Was gilt für die Dynexite-Hausübungen in Baukonstruktion?", ["Alle 6 müssen mit mindestens 60 % bestanden sein; im Prüfungsmodus zählt der beste von 3 Versuchen", "Eine bestandene Hausübung reicht", "Die Hausübungen zählen zur Note", "Man hat unbegrenzt viele Prüfungsversuche"], "Sie sind Voraussetzung für die Klausur. Im Übungsmodus darf man beliebig oft üben, dort werden auch die Lösungen angezeigt.", "Baukonstruktion Übung 02");
wf("bauko", K7, "Dynexite wertet Folgefehler – ein falscher Zwischenwert kostet nur einen Punkt.", false, "Falsch – systembedingt gibt es keine Folgefehler. Ein falscher Zwischenwert macht alle Folgewerte falsch. Deshalb jede Zahl einzeln prüfen und auf Papier rechnen.", "Baukonstruktion Übung 02");
/* Lösungsweg-Aufgaben */
aufgabe({
 "id": "bauko-ue01-massivdecke",
 "f": "bauko",
 "t": "Lasten",
 "titel": "Eigengewicht einer Massivdecke",
 "s": "Baukonstruktion Übung 01, Beispiel 1",
 "angabe": "Massivdecke zwischen zwei Wohnräumen mit schwimmendem Estrich auf Trittschalldämmung.",
 "geg": [
  "Zementestrich 6 cm",
  "PE-Folie",
  "Trittschalldämmung 4 cm",
  "Stahlbeton 16 cm",
  "Gipsputz"
 ],
 "ges": "Eigengewicht g_k in kN/m²",
 "schritte": [
  {
   "f": "Wie gehst du beim Deckenaufbau vor?",
   "o": [
    [
     "Jede Schicht einzeln als Flächenlast aus den Bautabellen, dann summieren",
     "Für Estrich und Dämmung gibt es Werte je cm Dicke, für Folien und Putz feste Werte je m²."
    ],
    [
     "Nur den Stahlbeton ansetzen",
     "Die übrigen Schichten machen hier über 1,5 kN/m² aus."
    ],
    [
     "Alle Dicken addieren und mal 25 nehmen",
     "Jede Schicht hat ihre eigene Wichte."
    ],
    [
     "Einen Pauschalwert von 1 kN/m² nehmen",
     "Viel zu wenig für eine Massivdecke."
    ]
   ],
   "r": "Estrich: 0,22 kN/m² je cm · 6 cm = 1,32 kN/m²"
  },
  {
   "f": "Wie behandelst du dünne Lagen wie PE-Folie und Trittschalldämmung?",
   "o": [
    [
     "Mit den kleinen Tabellenwerten – sie gehören vollständig in die Summe",
     "PE-Folie 0,02 kN/m², Dämmung 0,01 kN/m² je cm · 4 cm = 0,04 kN/m²."
    ],
    [
     "Weglassen, sie wiegen nichts",
     "Klein, aber in der Aufstellung erwartet."
    ],
    [
     "Mit 25 kN/m³ rechnen",
     "Das ist die Wichte von Stahlbeton."
    ],
    [
     "Doppelt ansetzen zur Sicherheit",
     "Sicherheit kommt über γ_G, nicht über doppelte Lasten."
    ]
   ],
   "r": "PE-Folie 0,02 · Trittschalldämmung 0,04 kN/m²"
  },
  {
   "f": "Wie groß ist die Stahlbetonplatte?",
   "o": [
    [
     "25 kN/m³ · 0,16 m = 4,0 kN/m²",
     "Wichte mal Dicke ergibt die Flächenlast."
    ],
    [
     "25 · 16 = 400 kN/m²",
     "Die Dicke muss in Metern eingesetzt werden."
    ],
    [
     "24 kN/m³ · 0,16 m",
     "24 gilt für unbewehrten Beton."
    ],
    [
     "0,16 kN/m²",
     "Die Wichte fehlt."
    ]
   ],
   "r": "Stahlbeton 4,0 · Gipsputz 0,18 kN/m²"
  },
  {
   "f": "Wie lautet das Ergebnis – und welche Nutzlast gehört dazu?",
   "o": [
    [
     "g_k = 5,56 kN/m², Nutzlast A2 mit 1,5 kN/m² (Querverteilung vorhanden)",
     "Massivdecken verteilen Lasten quer, deshalb A2."
    ],
    [
     "g_k = 5,56 kN/m², Nutzlast A3",
     "A3 gilt für Decken ohne Querverteilung wie Holzbalkendecken."
    ],
    [
     "g_k = 4,0 kN/m²",
     "Der Fußbodenaufbau fehlt."
    ],
    [
     "g_k = 55,6 kN/m²",
     "Faktor 10 vertan."
    ]
   ],
   "r": "g_k = 1,32 + 0,02 + 0,04 + 4,0 + 0,18 = 5,56 kN/m²"
  }
 ],
 "fazit": "Deckenaufbau Schicht für Schicht aus den Tabellen aufsummieren. Bei Massivdecken dominiert die Rohdecke (25 kN/m³ · d)."
});
aufgabe({
 "id": "bauko-ue01-unterzug",
 "f": "bauko",
 "t": "Schnittgrößen und Aussteifung",
 "titel": "Lasten auf einen Unterzug",
 "s": "Baukonstruktion Übung 01, Beispiel 2",
 "angabe": "Eine Holzbalkendecke über einem Abstellraum (Büronutzung darüber) liegt auf Stahlträgern. Die Balken laufen über vier gleiche Felder von 1,5 m. Gesucht sind die Lasten auf den meistbelasteten Unterzug und dessen Last auf die Mittelstütze.",
 "geg": [
  "Estrich 4 cm, Dämmung 4 cm, 2 × Spanplatte 2 cm",
  "Balken: Vierfeldträger, l = 1,5 m",
  "Tafelwerte A 0,393 · B 1,143 · C 0,929",
  "Unterzug: Zweifeldträger, l = 2,5 m, Mitte 1,25",
  "Eigengewicht Träger 0,2 kN/m (Annahme)"
 ],
 "ges": "p und g auf den Unterzug B, Lasten auf die Mittelstütze",
 "schritte": [
  {
   "f": "Wie groß sind Eigengewicht und Nutzlast der Decke?",
   "o": [
    [
     "g_k = 1,24 kN/m², p_k = 2,0 kN/m² (Büro, B1)",
     "Estrich 0,88 + Dämmung 0,04 + Spanplatten 8 kN/m³ · 0,02 m · 2 = 0,32."
    ],
    [
     "p_k = 1,5 kN/m² (Wohnen)",
     "Es ist eine Bürofläche."
    ],
    [
     "g_k = 0,88 kN/m²",
     "Dämmung und Spanplatten fehlen."
    ],
    [
     "p_k = 5,0 kN/m²",
     "Das wäre eine Versammlungsfläche."
    ]
   ],
   "r": "g_k = 1,24 kN/m² · p_k = 2,0 kN/m²"
  },
  {
   "f": "Welcher Unterzug bekommt die meiste Last?",
   "o": [
    [
     "Der unter Auflager B – Tafelwert 1,143",
     "Beim Vierfeldträger ist das erste Innenauflager am stärksten belastet."
    ],
    [
     "Der unter A – Endauflager",
     "A bekommt nur 0,393 · q · l."
    ],
    [
     "Alle gleich viel",
     "Die Tafelwerte sind verschieden."
    ],
    [
     "Der unter der Mitte (C)",
     "C liegt mit 0,929 darunter."
    ]
   ]
  },
  {
   "f": "Wie groß ist die Streckenlast auf diesen Unterzug?",
   "o": [
    [
     "Tafelwert × Flächenlast × Balkenspannweite, beim Eigengewicht plus Träger",
     "Das ist die Auflagerkraft pro Meter Deckenbreite – also kN/m auf dem Unterzug."
    ],
    [
     "Flächenlast × 1,5 m ohne Tafelwert",
     "Der Tafelwert verteilt die Last auf die Auflager – ohne ihn fehlen 14 %."
    ],
    [
     "Tafelwert × Flächenlast",
     "Es fehlt die Spannweite, die Einheit wäre kN/m²."
    ],
    [
     "Tafelwert × Flächenlast × 2,5 m",
     "2,5 m ist die Spannweite des Unterzugs, nicht der Balken."
    ]
   ],
   "r": "p₂ = 1,143 · 2,0 · 1,5 = 3,43 kN/m\ng₂ = 1,143 · 1,24 · 1,5 + 0,2 = 2,33 kN/m"
  },
  {
   "f": "Welche Last gibt der Unterzug an die Mittelstütze ab?",
   "o": [
    [
     "Zweifeldträger: 1,25 · q · l je Lastart",
     "Das mittlere Auflager ist maßgebend, weil es den größten Tafelwert hat."
    ],
    [
     "q · l / 2",
     "Das gilt für den Einfeldträger."
    ],
    [
     "0,375 · q · l",
     "Das ist das Endauflager."
    ],
    [
     "p und g addieren und mit 1,35 multiplizieren",
     "Charakteristisch bleiben die Lastarten getrennt."
    ]
   ],
   "r": "P₂ = 1,25 · 3,43 · 2,5 = 10,71 kN\nG₂ = 1,25 · 2,33 · 2,5 = 7,27 kN"
  }
 ],
 "fazit": "Lastweitergabe: Flächenlast → über Tafelwerte des Durchlaufträgers zur Streckenlast auf den Unterzug → wieder über Tafelwerte zur Einzellast auf die Stütze. Lastarten bis zum Schluss getrennt halten.\nHinweis: Auf der Folie steht beim Eigengewicht g₂ = 2,236 kN/m – richtig ist 2,326 (damit stimmt G₂ = 7,27 kN)."
});
aufgabe({
 "id": "bauko-ak2020-decke",
 "f": "bauko",
 "t": "Holzbemessung",
 "titel": "Holzbalkendecke im Reihenhaus",
 "s": "Bauko-Altklausur 09/2020, Teil II, Aufgabe 1 (Selbstrechenaufgabe Ü01)",
 "angabe": "Holzbalkendecke ohne ausreichende Querverteilung, Balken als Zweifeldträger über eine Mittelwand. Die Ausgleichsfeuchte liegt unter 12 %.",
 "geg": [
  "NH C24, 8/16, e = 62,5 cm",
  "Fliesen 1 cm · Gipsestrich 4 cm · Spanplatte 2 cm · Dampfsperre · Sparschalung 2,4 cm · Gipskarton 1,5 cm · Dämmung 16 cm",
  "Stützweiten 2,5 m und 3,5 m (1 : 1,4)"
 ],
 "ges": "g_k und q_k pro Balken, Biege- und Schubnachweis",
 "schritte": [
  {
   "f": "Wie groß ist die Last pro Balken aus dem Aufbau?",
   "o": [
    [
     "Σ Schichten · e + Balken + Dämmung zwischen den Balken",
     "Der Aufbau ergibt 1,51 kN/m². Die Dämmung liegt nur zwischen den Balken: 0,16 · (0,625 − 0,08)."
    ],
    [
     "Σ Schichten · e, Balken und Dämmung weglassen",
     "Beides gehört zur ständigen Last."
    ],
    [
     "Σ Schichten / e",
     "Durch den Abstand zu teilen ist falsch."
    ],
    [
     "Dämmung über die volle Breite e",
     "Wo der Balken liegt, ist keine Dämmung."
    ]
   ],
   "r": "g_k = 1,51 · 0,625 + 0,05 + 0,09 = 1,08 kN/m\nq_k (A3) = 2,0 · 0,625 = 1,25 kN/m"
  },
  {
   "f": "Welche Nutzungsklasse und kmod-Werte gelten?",
   "o": [
    [
     "NKL 1 (Ausgleichsfeuchte < 12 %): g ständig 0,6 · q mittel 0,8",
     "Nutzlast auf Wohndecken ist „mittel“."
    ],
    [
     "NKL 2: q kurz 0,9",
     "Nutzlast ist nicht kurz, und die Feuchte spricht für NKL 1."
    ],
    [
     "NKL 3",
     "Innenraum mit trockenem Holz ist nicht NKL 3."
    ],
    [
     "kmod = 1,0 für alles",
     "Das gäbe es nur für Wind."
    ]
   ]
  },
  {
   "f": "Welche Kombination ist maßgebend?",
   "o": [
    [
     "g + q: (1,35 · 1,32 + 1,5 · 1,52) / 0,8 = 5,08 gegen nur g: 1,78 / 0,6 = 2,97",
     "Mit dem Stützmoment M_b = −0,195 · q · l₁² je Lastart."
    ],
    [
     "Nur g, weil kmod klein ist",
     "Hier überwiegt die Nutzlast deutlich."
    ],
    [
     "Das Feldmoment mit Verkehr links",
     "Das Stützmoment ist betragsmäßig größer."
    ],
    [
     "Ohne kmod nur M_Ed vergleichen",
     "Das kann die falsche Kombination liefern."
    ]
   ],
   "r": "M_Ed = 1,35 · 1,32 + 1,5 · 1,52 = 4,06 kNm (k_mod = 0,8)"
  },
  {
   "f": "Ist der Biegenachweis erfüllt?",
   "o": [
    [
     "Ja: σ = 406 / 341,3 = 1,19 kN/cm² ≤ 1,48 kN/cm², η = 0,80",
     "W = 8 · 16²/6 = 341,3 cm³, f_m,d = 0,8 · 2,4/1,3 = 1,48 kN/cm²."
    ],
    [
     "Nein, η = 1,19",
     "Dann wurde σ mit der Festigkeit verwechselt."
    ],
    [
     "Ja, η = 0,49",
     "Dann fehlt der Faktor 1,5 der Nutzlast."
    ],
    [
     "Nein, weil k_h = 1,3",
     "k_h ändert sich nicht zum Nachteil."
    ]
   ],
   "r": "η = 1,19 / 1,48 = 0,80 ✓"
  },
  {
   "f": "Und der Schubnachweis mit V_Ed aus dem Tafelwert 0,839?",
   "o": [
    [
     "τ = 1,5 · V_Ed / (k_cr · A) ≤ f_v,d",
     "V_Ed = 1,35 · 0,839 · 1,08 · 2,5 + 1,5 · 0,839 · 1,25 · 2,5 = 6,99 kN, k_cr = 0,5."
    ],
    [
     "τ = V_Ed / A ohne Faktoren",
     "Rechteck: Faktor 1,5, Vollholz: k_cr = 0,5."
    ],
    [
     "Schub muss man bei Decken nicht nachweisen",
     "Er ist Teil der Klausuraufgabe."
    ],
    [
     "τ = M_Ed / W",
     "Das ist die Biegespannung."
    ]
   ],
   "r": "τ = 1,5 · 6,99 / (0,5 · 128) = 0,164 kN/cm² ≤ 0,246 → η = 0,67 ✓"
  }
 ],
 "fazit": "Klausur-Holzbau in Kurzform: Lasten pro Balken (Dämmung nur zwischen den Balken!) → Momente mit Tabellen → Kombinationen über M_Ed/kmod → Biegung → Schub mit 1,5 und k_cr."
});
