/* Patch-Warteschlange · Baukonstruktion · Übung 3 Bemessung (04.11.2026, Geßler/Kimpeler) · Beispiel 5 Sparren, Beispiel 6 Dreifeldträger · erstellt 05.11.2026 · alle Zahlen nachgerechnet */
const BK_KOMBI = "Lastfallkombination";
THEMEN["bauko|Lastfallkombination"] = "Nach den Lastannahmen rechnest du die Schnittgrößen zuerst für jeden Lastfall getrennt und charakteristisch: Eigengewicht, Schnee, Wind, Nutzlast. Erst danach kombinierst du nach der Grundkombination: ständige Lasten mal 1,35, eine veränderliche Einwirkung als „führende“ voll mit 1,5, alle weiteren zusätzlich mit ψ₀ abgemindert. Weil vorher nicht klar ist, welche veränderliche Last führend den größten Wert liefert, probierst du jede einmal als führende aus. Bei Durchlaufträgern kommt die ungünstige Laststellung dazu: Veränderliche Lasten stellst du nur auf die Felder, die das gesuchte Moment vergrößern.";

/* ── Wiederholung Sicherheitskonzept ── */
ord("bauko", BK_KOMBI, "Vorgehen bei der Bemessung laut Übung 3: Reihenfolge?", ["Charakteristische Einwirkungen F_k bestimmen (Lastannahmen)", "Charakteristische Schnittgrößen E_k je Lastfall berechnen", "Mit Teilsicherheits- und Kombinationsbeiwerten zu E_d kombinieren", "Bemessungswiderstand R_d = R_k / γ_M bestimmen", "Nachweis E_d ≤ R_d führen"], "Die Teilsicherheitsbeiwerte kommen erst nach der Schnittgrößenberechnung ins Spiel. So kann man dieselben charakteristischen Schnittgrößen in mehreren Kombinationen verwenden.", "Baukonstruktion Übung 3, Folie 4");
mc("bauko", BK_KOMBI, "Was bedeutet „führende veränderliche Einwirkung“ in der Grundkombination?", ["Die eine veränderliche Last, die voll mit γ_Q = 1,5 angesetzt wird – alle anderen bekommen zusätzlich ψ₀", "Die größte ständige Last", "Die Last, die zuerst auftritt", "Die Last mit dem größten ψ₀"], "Dass Schnee und Wind gleichzeitig mit ihrem Höchstwert auftreten, ist unwahrscheinlich. Deshalb zählt nur eine voll, die anderen abgemindert. Welche führend ist, legt man nicht fest – man probiert jede aus.", "Baukonstruktion Übung 3, Folie 33/34");
mc("bauko", BK_KOMBI, "Beispiel 5 hat Schnee und Wind. Wie viele Kombinationen mit beiden Lasten rechnest du?", ["Zwei – einmal Wind führend, einmal Schnee führend", "Eine – Schnee ist immer führend", "Eine – die größere Last ist führend", "Vier – jede Last mit jedem ψ"], "Welche Kombination maßgebend wird, sieht man erst am Ergebnis. In Beispiel 5 liegt Schnee führend nur knapp vorn: −2,09 gegen −2,0 kNm.", "Baukonstruktion Übung 3, Folie 34");
pair("bauko", BK_KOMBI, "Welche Beiwerte nutzt Übung 3?", [["γ_G", "1,35"], ["γ_Q", "1,50"], ["ψ₀ Schnee", "0,5"], ["ψ₀ Wind", "0,6"], ["ψ₀ sonstige Last (Bsp. 6)", "0,8"]], "γ_G und γ_Q gelten für alle Materialien. Die ψ₀-Werte stehen im SBT (24. Aufl. S. 3.5). Die sonstige Last in Beispiel 6 hat der Bauherr mit ψ₀ = 0,8 vorgegeben.", "Baukonstruktion Übung 3, Folie 33/50");
mc("bauko", BK_KOMBI, "Beispiel 6 ist ein Versammlungsraum. Mit welchem ψ₀ wird die Nutzlast im Ergebnis tatsächlich abgemindert?", ["0,7 – Kategorie C (Versammlungsräume)", "0,5 – wie auf der Folie notiert", "0,6 – wie Wind", "1,0 – Nutzlast wird nie abgemindert"], "Auf der Folie steht ψ₀,q = 0,5, gerechnet wird aber mit 0,7: Nur damit kommen −6,76 und 5,1 kNm heraus. 0,7 passt zur Kategorie C. Im Zweifel selbst im SBT nachschlagen.", "Baukonstruktion Übung 3, Folie 50–52 (nachgerechnet)");

/* ── Beispiel 5: Sparren ── */
mc("bauko", BK_KOMBI, "Beispiel 5: Wie kommt die ständige Last g = 0,7 kN/m (auf der Dachfläche) auf die Grundfläche?", ["g′ = g / cos α = 0,7 / cos 35,7° = 0,86 kN/m", "g′ = g · cos α = 0,57 kN/m", "g′ = g · sin α", "g′ = g, die Bezugsfläche spielt keine Rolle"], "Die schräge Dachfläche ist länger als ihre Grundfläche. Damit die Gesamtlast gleich bleibt, wird die Last je Meter Grundfläche größer, also geteilt durch cos α, nicht multipliziert.", "Baukonstruktion Übung 3, Folie 11");
mc("bauko", BK_KOMBI, "Beispiel 5: Die Formel liefert in Aachen s_k = 0,63 kN/m². Mit welchem Wert rechnest du?", ["0,85 kN/m² – der Mindestwert für Zone 2", "0,63 kN/m²", "0,63 · 1,25 = 0,79 kN/m²", "0,85 · 0,63 = 0,54 kN/m²"], "Bei 200 m Höhe ergibt die Formel weniger als den Mindestwert. In Zone 2 gilt dann 0,85 kN/m². Der Faktor 1,25 gilt nur für Zone 1a.", "Baukonstruktion Übung 3, Folie 12");
mc("bauko", BK_KOMBI, "Wie wird aus der Flächenlast eine Linienlast pro Sparren?", ["Mit der Lasteinzugsbreite (Sparrenabstand) multiplizieren: s₁ = 0,55 · 0,62 = 0,34 kN/m", "Durch den Sparrenabstand teilen", "Mit der Sparrenlänge multiplizieren", "Mit der Dachbreite 7,44 m multiplizieren"], "Jeder Sparren trägt den Streifen zwischen den Mitten zu seinen Nachbarn – das ist die Lasteinzugsbreite, hier 0,62 m. Die Dachbreite brauchst du nur für das Windmaß e.", "Baukonstruktion Übung 3, Folie 13");
mc("bauko", BK_KOMBI, "Der Sparren kragt links 0,885 m und rechts 1,47 m über die Auflager. Wo liegt das größere Stützmoment?", ["Am Auflager B mit dem längeren Kragarm (1,47 m)", "Am Auflager A", "In Feldmitte", "Beide sind gleich groß"], "Das Kragmoment wächst mit dem Quadrat der Kraglänge: −q · l²/2. Bei g: M_B = −0,93 kNm gegen M_A = −0,34 kNm. Deshalb wird an B bemessen.", "Baukonstruktion Übung 3, Folie 22/31");
mc("bauko", BK_KOMBI, "Wie groß ist das Moment am Einspannpunkt eines Kragarms unter Gleichlast q?", ["M = −q · l² / 2", "M = −q · l² / 8", "M = −q · l", "M = q · l² / 8"], "Die Resultierende q · l greift in der Mitte des Kragarms an, also mit Hebelarm l/2. q · l²/8 ist das Feldmoment eines Einfeldträgers.", "Baukonstruktion Übung 3, Folie 20");
mc("bauko", BK_KOMBI, "Wo liegt das größte Feldmoment eines Trägers unter Gleichlast?", ["Am Querkraftnullpunkt", "Immer genau in Feldmitte", "Am Auflager", "Dort, wo die Last am größten ist"], "Die Querkraft ist die Ableitung des Moments, wo sie null ist, hat M ein Extremum. Mit Kragarmen liegt der Punkt nicht in Feldmitte – in Beispiel 5 bei x = 1,98 m.", "Baukonstruktion Übung 3, Folie 20/22");
wf("bauko", BK_KOMBI, "In Beispiel 5 liegen die maximalen Feldmomente von g, s und w genau an derselben Stelle.", false, "Falsch – die Tabelle vermerkt ausdrücklich, dass M_Feld,max nicht jeweils an der gleichen Stelle liegt (Wind: x = 2,59 m statt 1,98 m). Sie trotzdem zu addieren, liegt auf der sicheren Seite.", "Baukonstruktion Übung 3, Folie 31");

/* ── Durchlaufträger ── */
mc("bauko", BK_KOMBI, "Zweifeldträger mit Gleichlast q: Wie groß ist die Auflagerkraft der Mittelstütze?", ["B = 1,25 · q · l – je Feld 5/8 · q · l", "B = q · l", "B = 0,5 · q · l", "B = 2 · q · l"], "Die Mittelstütze bekommt mehr als bei zwei Einfeldträgern (das wären 2 · q · l/2 = q · l), weil die Durchlaufwirkung Last zur Mitte zieht.", "Baukonstruktion Übung 3, Folie 36");
mc("bauko", BK_KOMBI, "Wie rechnest du in Beispiel 6 Momente am Dreifeldträger mit gleichen Stützweiten?", ["M = Tafelwert · q · l², z. B. M₁ = 0,080 · 5 · 2² = 1,6 kNm", "M = q · l² / 8 in jedem Feld", "M = Tafelwert · q · l", "M = Tafelwert / (q · l²)"], "Die Tafelwerte stehen im SBT (24. Aufl. S. 4.14), einer je Laststellung und Stelle. q · l²/8 gilt nur für einen Einfeldträger, beim Durchlaufträger sind die Feldmomente kleiner.", "Baukonstruktion Übung 3, Folie 39");
mc("bauko", BK_KOMBI, "Dreifeldträger: Wo stellst du die Nutzlast hin, um das größte Feldmoment im Außenfeld zu bekommen?", ["In beide Außenfelder, das Mittelfeld bleibt frei", "In alle drei Felder", "Nur ins Mittelfeld", "Ins Außenfeld und das benachbarte Mittelfeld"], "Last im Mittelfeld hebt die Außenfelder an und verkleinert deren Feldmoment. Volllast ergibt nur 1,28 kNm, „links/rechts“ 1,62 kNm.", "Baukonstruktion Übung 3, Folie 46/49");
mc("bauko", BK_KOMBI, "Und für das größte Stützmoment über Stütze C?", ["In die beiden Felder neben C (Mitte und rechts)", "In alle drei Felder", "Nur ins linke Außenfeld", "In beide Außenfelder"], "Die zwei an C angrenzenden Felder biegen den Träger über C am stärksten. Mitte/rechts ergibt M_c = −1,87 kNm, Volllast nur −1,6 kNm.", "Baukonstruktion Übung 3, Folie 44/52");
wf("bauko", BK_KOMBI, "Das Eigengewicht stellt man bei der ungünstigen Laststellung ebenfalls nur feldweise auf.", false, "Falsch – ständige Lasten wirken immer auf allen Feldern. Nur veränderliche Lasten wie Nutzlast dürfen feldweise fehlen.", "Baukonstruktion Übung 3, Folie 39/49");
mc("bauko", BK_KOMBI, "Wie bekommst du in Beispiel 6 das Feldmoment, wenn die Tafel nur die Stützmomente liefert?", ["q · l²/8 plus die gemittelten Stützmomente in Feldmitte einhängen", "Die Stützmomente addieren", "q · l²/8 allein", "Das Feldmoment ist dann null"], "Man hängt die Einfeldträger-Parabel zwischen die Stützmomente: M₂ = 4 · 2²/8 + (−0,53 − 1,87)/2 = 0,80 kNm. Ohne Stützmomente wäre das Feldmoment viel zu groß.", "Baukonstruktion Übung 3, Folie 44");

aufgabe({
 "id": "bauko-ue03-sparren", "f": "bauko", "t": BK_KOMBI, "titel": "Bemessungsmoment am Sparren", "s": "Baukonstruktion Übung 3, Beispiel 5",
 "angabe": "Sparren Pos. 1 eines Pfettendachs (C24) mit Kragarmen 0,885 m links und 1,47 m rechts, Feld 3,58 m. Charakteristische Momente aus den Lastfällen: Eigengewicht M_B = −0,93, M_Feld = 0,76; Schnee M_B = −0,37, M_Feld = 0,29; Wind M_B = −0,31, M_Feld = 0,33 kNm. Am Auflager A: M_A,g = −0,34 kNm. γ_G = 1,35, γ_Q = 1,5, ψ₀,s = 0,5, ψ₀,w = 0,6.",
 "geg": ["M_B,g = −0,93", "M_B,s = −0,37", "M_B,w = −0,31", "M_F,g = 0,76", "M_F,s = 0,29", "M_F,w = 0,33"],
 "ges": "Maßgebendes Bemessungsmoment an der Stütze und im Feld",
 "schritte": [
  { "f": "An welcher Stütze bemisst du?", "o": [
    ["An B – das Kragmoment ist dort betragsmäßig größer", "Der Kragarm an B ist länger (1,47 m), M_B,g = −0,93 kNm gegen M_A,g = −0,34 kNm."],
    ["An A, weil A das Festlager ist", "Die Lagerart entscheidet nicht über die Größe des Moments."],
    ["An beiden gleichzeitig mit dem Mittelwert", "Bemessen wird an der ungünstigsten Stelle, nicht im Mittel."],
    ["Nur im Feld, Stützen sind unkritisch", "Hier ist das Stützmoment sogar größer als das Feldmoment."]],
   "r": "|M_B| > |M_A| in allen Lastfällen → Stütze B" },
  { "f": "Wie lautet die Kombination nur mit Eigengewicht?", "o": [
    ["M_B,d = 1,35 · (−0,93)", "Ständige Last mit γ_G = 1,35."],
    ["M_B,d = 1,5 · (−0,93)", "1,5 ist der Beiwert für veränderliche Lasten."],
    ["M_B,d = −0,93", "Ohne Teilsicherheitsbeiwert ist es kein Bemessungswert."],
    ["M_B,d = 1,35 · (−0,93) · 0,5", "ψ₀ gilt nur für begleitende veränderliche Lasten."]],
   "r": "M_B,d = −1,26 kNm · M_F,d = 1,35 · 0,76 = 1,03 kNm" },
  { "f": "Wind führend, Schnee begleitend: Wie sieht M_B,d aus?", "o": [
    ["1,35 · (−0,93) + 1,5 · (−0,31) + 1,5 · 0,5 · (−0,37)", "Wind voll mit 1,5, Schnee zusätzlich mit ψ₀,s = 0,5."],
    ["1,35 · (−0,93) + 1,5 · (−0,31) + 1,5 · (−0,37)", "Dann wären beide veränderlichen Lasten führend – ψ₀ fehlt."],
    ["1,35 · (−0,93) + 1,5 · 0,6 · (−0,31) + 1,5 · (−0,37)", "Das ist die Kombination mit Schnee führend."],
    ["1,35 · (−0,93 − 0,31 − 0,37)", "Veränderliche Lasten bekommen 1,5, nicht 1,35."]],
   "r": "M_B,d = −1,26 − 0,47 − 0,28 = −2,0 kNm" },
  { "f": "Schnee führend, Wind begleitend: Wie groß ist M_B,d?", "o": [
    ["1,35 · (−0,93) + 1,5 · (−0,37) + 1,5 · 0,6 · (−0,31)", "Schnee voll, Wind mit ψ₀,w = 0,6."],
    ["1,35 · (−0,93) + 1,5 · (−0,37) + 1,5 · 0,5 · (−0,31)", "Für den begleitenden Wind gilt ψ₀,w = 0,6, nicht der Schneewert 0,5."],
    ["1,35 · (−0,93) + 1,5 · (−0,37)", "Der Wind darf als Begleiter nicht weggelassen werden, er vergrößert hier das Moment."],
    ["1,5 · (−0,93 − 0,37 − 0,31)", "Das Eigengewicht bekommt γ_G = 1,35."]],
   "r": "M_B,d = −1,26 − 0,56 − 0,28 = −2,09 kNm → betraglich maßgebend" },
  { "f": "Welches Feldmoment ist maßgebend?", "o": [
    ["Auch mit Schnee führend: 1,35 · 0,76 + 1,5 · 0,29 + 1,5 · 0,6 · 0,33", "Im Feld liegt Schnee führend ebenfalls knapp vorn (1,76 gegen 1,74)."],
    ["Nur Eigengewicht: 1,35 · 0,76", "Die veränderlichen Lasten vergrößern das Feldmoment, sie gehören dazu."],
    ["1,35 · 0,76 + 1,5 · 0,29 + 1,5 · 0,33", "Hier fehlt ψ₀ für die begleitende Last."],
    ["Das Feldmoment aus dem Wind allein", "Bemessen wird mit der Kombination, nicht mit einem Lastfall."]],
   "r": "M_F,d = 1,026 + 0,435 + 0,297 = 1,76 kNm (Wind führend: 1,74 kNm)" }],
 "fazit": "Jede veränderliche Last einmal führend ansetzen und vergleichen. Die Unterschiede sind oft klein, deshalb nicht raten."
});

aufgabe({
 "id": "bauko-ue03-dreifeld", "f": "bauko", "t": BK_KOMBI, "titel": "Dreifeldträger im Versammlungsraum", "s": "Baukonstruktion Übung 3, Beispiel 6",
 "angabe": "Dreifeldträger mit l = 2 m je Feld. Eigengewicht g = 5 kN/m, Nutzlast q = 4 kN/m (Versammlungsraum), sonstige veränderliche Last 3 kN/m, die nur auf zwei Feldern gleichzeitig wirkt (ψ₀ = 0,8). Tafelwerte aus der Übung: g voll M₁ = 1,6, M_b = M_c = −2,0 · q links/rechts M₁ = M₃ = 1,62 · q mitte/rechts M_c = −1,87 · sonstige (mitte/rechts) M_c = −1,40, M₃ = 0,80 kNm. γ_G = 1,35, γ_Q = 1,5, ψ₀,q = 0,7.",
 "ges": "Maximale Bemessungsmomente an der Stütze und im Feld",
 "schritte": [
  { "f": "Welche Laststellung der Nutzlast liefert das größte Stützmoment über C?", "o": [
    ["Mittelfeld und rechtes Feld belastet", "Die beiden an C angrenzenden Felder: M_c = −1,87 kNm."],
    ["Alle drei Felder", "Volllast ergibt nur −1,6 kNm."],
    ["Beide Außenfelder", "Diese Stellung liefert das größte Feldmoment, über der Stütze nur −0,8 kNm."],
    ["Nur das linke Feld", "Das entfernte Feld trägt über C sogar positiv bei (+0,27)."]],
   "r": "M_c,q = −1,87 kNm · M_c,sonst = −1,40 kNm (ebenfalls auf Mitte und rechts) · M_c,g = −2,0 kNm" },
  { "f": "Nutzlast führend: Wie groß ist M_Ed über C?", "o": [
    ["1,35 · (−2,0) + 1,5 · (−1,87) + 1,5 · 0,8 · (−1,4)", "q voll, die sonstige Last mit ihrem ψ₀ = 0,8."],
    ["1,35 · (−2,0) + 1,5 · (−1,87) + 1,5 · (−1,4)", "Die sonstige Last ist hier nur Begleiter und bekommt ψ₀."],
    ["1,35 · (−2,0 − 1,87 − 1,4)", "Veränderliche Lasten bekommen γ_Q = 1,5."],
    ["1,35 · (−2,0) + 1,5 · 0,7 · (−1,87) + 1,5 · (−1,4)", "Das ist die Kombination mit der sonstigen Last führend."]],
   "r": "M_Ed = −2,70 − 2,81 − 1,68 = −7,19 kNm" },
  { "f": "Und mit der sonstigen Last führend?", "o": [
    ["1,35 · (−2,0) + 1,5 · 0,7 · (−1,87) + 1,5 · (−1,4) = −6,76 kNm", "Jetzt wird die Nutzlast mit ψ₀ = 0,7 abgemindert. Die Kombination mit q führend bleibt maßgebend."],
    ["1,35 · (−2,0) + 1,5 · 0,5 · (−1,87) + 1,5 · (−1,4) = −6,20 kNm", "So steht ψ₀,q auf der Folie, gerechnet wird aber mit 0,7 (Kategorie C)."],
    ["Dieselbe Rechnung wie eben", "Die Rollen von führend und begleitend tauschen."],
    ["Nicht nötig, die Nutzlast ist größer", "Ob das reicht, zeigt erst die Rechnung."]],
   "r": "−6,76 kNm < 7,19 kNm (Betrag) → q führend maßgebend: M_Ed,Stütze = −7,19 kNm" },
  { "f": "Wo und mit welcher Nutzlaststellung wird das Feldmoment maximal?", "o": [
    ["In den Außenfeldern, Nutzlast auf beiden Außenfeldern", "Dann ist M₁ = M₃ = 1,62 kNm, das Mittelfeld bleibt frei."],
    ["Im Mittelfeld bei Volllast", "Bei Volllast ist M₂ = 0,4 kNm, viel kleiner."],
    ["In den Außenfeldern bei Volllast", "Volllast liefert nur 1,28 kNm, weil das Mittelfeld die Außenfelder entlastet."],
    ["Über den Stützen", "Dort entstehen Stützmomente, keine Feldmomente."]],
   "r": "maßgebend Feld 3: M_g = 1,6 · M_q = 1,62 · M_sonst = 0,80 kNm" },
  { "f": "Wie groß ist das Bemessungs-Feldmoment?", "o": [
    ["1,35 · 1,6 + 1,5 · 1,62 + 1,5 · 0,8 · 0,8", "q führend, die sonstige Last als Begleiter mit ψ₀ = 0,8."],
    ["1,35 · 1,6 + 1,5 · 1,62", "Die sonstige Last vergrößert das Moment in Feld 3 und gehört dazu."],
    ["1,5 · (1,6 + 1,62 + 0,8)", "Das Eigengewicht bekommt 1,35."],
    ["1,35 · 1,6 + 1,5 · 0,7 · 1,62 + 1,5 · 0,8", "Das ist die Variante mit der sonstigen Last führend (5,1 kNm)."]],
   "r": "M_Ed,Feld = 2,16 + 2,43 + 0,96 = 5,55 ≈ 5,5 kNm" }],
 "fazit": "Ungünstige Laststellung zuerst für jede Stelle getrennt suchen, dann jede veränderliche Last einmal führend kombinieren."
});

Object.assign(RECHNEN, {
 "bauko-ue03-sparren": {
  "1": [{ "l": "M_B,d", "w": -1.26, "u": "kNm", "h": "1,35 · (−0,93)" }],
  "2": [{ "l": "M_B,d", "w": -2.0, "u": "kNm", "h": "1,35 · (−0,93) + 1,5 · (−0,31) + 1,5 · 0,5 · (−0,37)" }],
  "3": [{ "l": "M_B,d", "w": -2.09, "u": "kNm", "h": "1,35 · (−0,93) + 1,5 · (−0,37) + 1,5 · 0,6 · (−0,31)" }],
  "4": [{ "l": "M_F,d", "w": 1.76, "u": "kNm", "h": "1,35 · 0,76 + 1,5 · 0,29 + 1,5 · 0,6 · 0,33" }]
 },
 "bauko-ue03-dreifeld": {
  "1": [{ "l": "M_Ed", "w": -7.19, "u": "kNm", "h": "1,35 · (−2,0) + 1,5 · (−1,87) + 1,5 · 0,8 · (−1,4)" }],
  "2": [{ "l": "M_Ed", "w": -6.76, "u": "kNm", "h": "1,35 · (−2,0) + 1,5 · 0,7 · (−1,87) + 1,5 · (−1,4)" }],
  "4": [{ "l": "M_Ed", "w": 5.55, "u": "kNm", "h": "1,35 · 1,6 + 1,5 · 1,62 + 1,5 · 0,8 · 0,8" }]
 }
});
