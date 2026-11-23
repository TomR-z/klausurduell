/* Patch-Warteschlange · Physik · Vorlesung 7 Potenzielle Energie, Energiesatz (Nebel, 23.11.2026, 59 Folien) · erstellt 23.11.2026
   Neues Thema phys|Energie und Energiesatz. Zahlen an den Folien bzw. mit Python geprüft. Neue Skizzen wegunabh, epotdiag in „2026-11-23 neue Skizzen Physik V07 (FIG).js“. */
const PH7 = "Energie und Energiesatz";
const PH7z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);
THEMEN["phys|" + PH7] = "Vorlesung 7: Konservative Kräfte (Gewichtskraft, Federkraft) verrichten eine Arbeit, die nur vom Anfangs- und Endpunkt abhängt – auf einem geschlossenen Weg ist sie null. Dazu gehört eine potenzielle Energie: W = −ΔE_pot, umgekehrt F_x = −dE_pot/dx. Gewichtskraft in Erdnähe: E_pot = m·g·y; Feder: F_x = −k·x, E_pot = ½·k·x² (doppelte Auslenkung, vierfache Energie). Gleitreibung ist nicht konservativ: W_R = −F_R·s = −ΔE_th. Energiesatz: Die Gesamtenergie E_kin + E_pot + E_th + E_inn ändert sich nur durch Arbeit äußerer Kräfte, W = ΔE_ges; ohne äußere Arbeit bleibt sie konstant. Im Energiediagramm ist E_kin der Abstand zwischen E_mech und E_pot(x); Umkehrpunkte liegen bei E_pot = E_mech, Minima von E_pot sind stabile Gleichgewichtslagen.";

/* ── Konservative Kräfte ── */
mc("phys", PH7, "Woran erkennst du eine konservative Kraft?", ["Ihre Arbeit hängt nur vom Anfangs- und Endpunkt ab, nicht vom Weg dazwischen", "Sie ist immer konstant", "Sie zeigt immer nach unten", "Ihre Arbeit ist immer positiv"], "Bei einer konservativen Kraft ist es egal, ob der Körper über Weg A oder Weg B von 1 nach 2 kommt – die Arbeit ist gleich. Daraus folgt: Auf einem geschlossenen Weg (zurück zum Start) ist die Arbeit null. Beispiele: Gewichtskraft, Federkraft.", "Physik V07, Folien 3–5");
PH7z({ st: 1, ev: "wegunabh" });
pair("phys", PH7, "Konservativ oder nicht? Ordne zu.", [["Gewichtskraft", "konservativ – Arbeit wird als E_pot gespeichert"], ["Federkraft", "konservativ – Energie steckt in der gedehnten Feder"], ["Gleitreibung", "nicht konservativ – Arbeit wird zu Wärme"], ["Luftwiderstand", "nicht konservativ – bremst auf jedem Weg"]], "Hebst du eine Kiste, holst du die Arbeit beim Fallen zurück (konservativ). Schiebst du sie über den Boden, wird die Arbeit zu Wärme und ist weg (nicht konservativ).", "Physik V07, Folien 3 und 28");
PH7z({ st: 1 });
wf("phys", PH7, "Für eine konservative Kraft gilt: Die Arbeit auf einem geschlossenen Weg ist null.", true, "Richtig. Auf dem Rückweg ist die Arbeit genauso groß, aber mit umgekehrtem Vorzeichen – die Summe ist null. Das Integralzeichen mit Kreis ∮ F · ds = 0 steht genau dafür: Der Weg endet am Startpunkt.", "Physik V07, Folie 5");
PH7z({ st: 2, ev: "wegunabh" });
mc("phys", PH7, "Ein Wanderer steigt einmal über einen steilen und einmal über einen flachen, langen Weg auf denselben Gipfel. Was gilt für die Arbeit der Gewichtskraft?", ["Sie ist auf beiden Wegen gleich", "Auf dem langen Weg ist sie größer", "Auf dem steilen Weg ist sie größer", "Auf dem flachen Weg ist sie null"], "Die Gewichtskraft ist konservativ, nur der Höhenunterschied zählt: W_G = −m·g·(y₂ − y₁). Der flache Weg ist länger, aber die Kraft hat entlang des Weges einen kleineren Anteil – das gleicht sich genau aus.", "Physik V07, Folien 4 und 11–12");
PH7z({ st: 2, ev: "wegunabh" });

/* ── Potenzielle Energie ── */
mc("phys", PH7, "Wie hängen die Arbeit einer konservativen Kraft und die potenzielle Energie zusammen?", ["W = −ΔE_pot", "W = +ΔE_pot", "W = E_pot", "W = ΔE_kin − E_pot"], "Die Arbeit der konservativen Kraft ist gleich der Abnahme der potenziellen Energie: W = −(E_pot(r₂) − E_pot(r₁)). Leistet die Kraft positive Arbeit (Stein fällt), nimmt E_pot ab.", "Physik V07, Folie 6");
PH7z({ st: 1 });
mc("phys", PH7, "Ein Stein fällt nach unten. Was gilt?", ["Die Gewichtskraft verrichtet positive Arbeit, E_pot nimmt ab", "Die Gewichtskraft verrichtet negative Arbeit, E_pot nimmt zu", "Die Gewichtskraft verrichtet keine Arbeit", "E_pot bleibt gleich, nur E_kin ändert sich"], "Kraft (nach unten) und Weg (nach unten) zeigen in dieselbe Richtung → W > 0. Mit W = −ΔE_pot folgt ΔE_pot < 0. Beim Heben ist es genau umgekehrt.", "Physik V07, Folie 8");
PH7z({ st: 1 });
pair("phys", PH7, "Ordne die Eigenschaften der potenziellen Energie zu.", [["Hängt vom …", "Ort ab: E_pot(x, y, z)"], ["Gehört zum …", "System, z. B. Körper und Erde"], ["Ist ein …", "Skalar – Zahlenwert ohne Richtung"], ["Einheit", "Joule = N · m"]], "Potenzielle Energie ist Lageenergie. Sie steckt nicht im Stein allein, sondern im System Stein + Erde. Sie hat keine Richtung, nur einen Betrag in Joule.", "Physik V07, Folie 7");
PH7z({ st: 1 });
mc("phys", PH7, "Warum darfst du den Nullpunkt der potenziellen Energie (Boden, Tisch, Keller) frei wählen?", ["Physikalisch zählen nur Änderungen ΔE_pot – eine Konstante fällt bei der Differenz heraus", "Weil E_pot immer null ist", "Weil die Erdanziehung überall gleich ist", "Das darf man nicht, es muss immer der Erdboden sein"], "Der Wert von E_pot hängt von der Wahl ab, die Änderung ΔE_pot nicht. Darum gilt der Merksatz: Physikalisch wichtig ist nur ΔE_pot, nie der Absolutwert.", "Physik V07, Folie 9");
PH7z({ st: 2 });
mc("phys", PH7, "Wie bekommst du aus der Kurve E_pot(x) die Kraft auf den Körper?", ["F_x = −dE_pot/dx – die Kraft zeigt in der Kurve bergab", "F_x = +dE_pot/dx – die Kraft zeigt bergauf", "F_x = E_pot · x", "Gar nicht, dafür braucht man die Masse"], "Arbeit ist das Integral der Kraft, umgekehrt ist die Kraft die negative Ableitung der potenziellen Energie. Wo die Kurve fällt, zeigt die Kraft nach rechts, wo sie steigt, nach links – immer bergab.", "Physik V07, Folie 10");
PH7z({ st: 2, ev: "epotdiag" });

/* ── Gewichtskraft in Erdnähe ── */
mc("phys", PH7, "Welche Formel gilt für die potenzielle Energie der Gewichtskraft in Erdnähe?", ["E_pot = m · g · y", "E_pot = ½ · m · g · y²", "E_pot = m · g / y", "E_pot = ½ · m · v²"], "Die Gewichtskraft ist in Erdnähe konstant (Betrag m·g, nach unten). Mit W_G = −m·g·(y₂ − y₁) = −ΔE_pot folgt E_pot = m·g·y. Gleiche Höhe heißt gleiche E_pot – im Raum sind das waagerechte Ebenen.", "Physik V07, Folien 11–12");
PH7z({ st: 1 });
mc("phys", PH7, "Eine Getränkekiste (12 kg) wird 6,0 m hoch in den 2. Stock getragen. Wie groß sind ΔE_pot und die Arbeit der Gewichtskraft?", ["ΔE_pot ≈ +706 J, W_G ≈ −706 J", "ΔE_pot ≈ −706 J, W_G ≈ +706 J", "ΔE_pot ≈ 72 J, W_G ≈ −72 J", "Hängt davon ab, ob Treppe oder Aufzug"], "ΔE_pot = m·g·Δy = 12 kg · 9,81 m/s² · 6,0 m ≈ 706 J. Die Gewichtskraft zeigt gegen die Bewegung, ihre Arbeit ist W_G = −ΔE_pot ≈ −706 J. Treppe oder Aufzug spielt keine Rolle – nur die Höhe zählt.", "Physik V07, Folien 13–14");
PH7z({ st: 3 });

/* ── Federkraft ── */
mc("phys", PH7, "Was sagt das Hookesche Gesetz F_x = −k · x?", ["Die Federkraft ist proportional zur Auslenkung und zeigt zurück zur Ruhelage", "Die Federkraft ist immer konstant", "Die Federkraft zeigt in Richtung der Auslenkung", "Die Federkraft wächst mit x²"], "Ziehst du den Klotz nach rechts (x > 0), zieht die Feder nach links (F_x < 0) – daher das Minuszeichen. k ist die Federkonstante in N/m: Je größer k, desto steifer die Feder.", "Physik V07, Folie 16");
PH7z({ st: 1 });
mc("phys", PH7, "Welche Energie speichert eine um x ausgelenkte Feder?", ["E_pot = ½ · k · x²", "E_pot = k · x", "E_pot = ½ · k · x", "E_pot = k · x²"], "Die Arbeit ist die Dreiecksfläche unter der Geraden F = k·x: ½ · x · (k·x) = ½·k·x². Nullpunkt ist die Ruhelage; Dehnen und Stauchen speichern beide Energie, weil x quadratisch eingeht.", "Physik V07, Folien 17–18");
PH7z({ st: 1, ev: "federarbeit" });
mc("phys", PH7, "Die Auslenkung einer Feder wird verdoppelt. Wie ändern sich Federkraft und gespeicherte Energie?", ["Kraft doppelt, Energie vierfach", "Kraft und Energie doppelt", "Kraft vierfach, Energie doppelt", "Beides vierfach"], "F = k·x wächst linear, E_pot = ½·k·x² quadratisch. Expander mit k = 500 N/m: 0,20 m → 100 N und 10 J; 0,40 m → 200 N und 40 J.", "Physik V07, Folien 18 und 20–22");
PH7z({ st: 2 });
mc("phys", PH7, "Eine Feder mit 400 N/m wird um 5,0 cm gedehnt. Wie groß sind Federkraft und gespeicherte Energie?", ["20 N und 0,50 J", "2000 N und 500 J", "20 N und 1,0 J", "8 N und 0,20 J"], "F = k·x = 400 N/m · 0,050 m = 20 N. E_pot = ½ · 400 N/m · (0,050 m)² = 0,50 J. Achtung: Zentimeter vorher in Meter umrechnen.", "Physik V07, Selbsttest Frage 5");
PH7z({ st: 3 });
wf("phys", PH7, "Auch Stahl, Glas und Keramik verhalten sich bei kleinen Verformungen wie eine Feder.", true, "Richtig. Die Verformung ist proportional zur Kraft, ohne Kraft kehren sie in ihre Form zurück. Grund: Die Atome hängen über chemische Bindungen zusammen und schwingen wie an einer Feder – deshalb gilt das Hookesche Gesetz auch für Baustoffe (Verbindung zum E-Modul in Baustoffkunde).", "Physik V07, Folie 19");
PH7z({ st: 2 });

/* ── Gleitreibung ── */
mc("phys", PH7, "Warum ist die Gleitreibung nicht konservativ?", ["Ihre Arbeit ist immer negativ und wächst mit der Länge des Wegs – auf einem geschlossenen Weg ist sie nicht null", "Weil sie zu klein ist", "Weil sie senkrecht zur Bewegung wirkt", "Weil sie nur bei Bewegung nach unten auftritt"], "Die Gleitreibung zeigt immer gegen die Verschiebung: W_R = −F_R · s. Ein längerer Weg heißt mehr Reibungsarbeit. Deshalb gibt es zur Gleitreibung keine potenzielle Energie.", "Physik V07, Folien 24–26");
PH7z({ st: 1 });
mc("phys", PH7, "Wohin geht die Arbeit der Gleitreibung?", ["In thermische Energie von Körper und Unterlage: W_R = −ΔE_th", "In potenzielle Energie des Körpers", "Sie geht vollständig verloren und ist nirgends mehr", "In kinetische Energie der Unterlage"], "Reibung erzeugt Wärme (Hände reiben, heiße Bremsscheibe, warmer Hosenboden auf der Rutsche). ΔE_th ≥ 0 – thermische Energie kann durch Reibung nur zunehmen.", "Physik V07, Folien 23 und 27");
PH7z({ st: 1 });
mc("phys", PH7, "Eine Kiste wird 10 m weit über den Boden geschoben, die Gleitreibungskraft beträgt 50 N. Wie groß sind W_R und ΔE_th?", ["W_R = −500 J, ΔE_th = +500 J", "W_R = +500 J, ΔE_th = −500 J", "W_R = −5 J, ΔE_th = +5 J", "W_R = 0, weil die Kiste wieder stillsteht"], "W_R = −F_R · s = −50 N · 10 m = −500 J. Diese Energie wird zu Wärme: ΔE_th = −W_R = +500 J.", "Physik V07, Selbsttest Frage 8");
PH7z({ st: 3 });

/* ── Energiesatz ── */
pair("phys", PH7, "Ordne die Kräfte der richtigen Gruppe im Energiesatz zu.", [["Gewichtskraft, Federkraft", "W_kons = −ΔE_pot"], ["Gleitreibung, Luftwiderstand", "W_R = −ΔE_th"], ["Zug an einem Seil von außen", "W_sonst"]], "Die Arbeit der resultierenden Kraft ist die Summe: W_res = W_kons + W_R + W_sonst. Mit dem Arbeitssatz W_res = ΔE_kin folgt ΔE_kin + ΔE_pot + ΔE_th = W_sonst.", "Physik V07, Folien 28–29");
PH7z({ st: 2 });
mc("phys", PH7, "Was ist die mechanische Energie?", ["E_mech = E_kin + E_pot", "E_mech = E_kin − E_pot", "E_mech = E_pot + E_th", "E_mech = m · g · h · v"], "Bewegungsenergie und Lageenergie zusammen. Kommen thermische und innere (chemische) Energie dazu, hat man die Gesamtenergie E_ges = E_kin + E_pot + E_th + E_inn.", "Physik V07, Folien 29 und 31");
PH7z({ st: 1 });
mc("phys", PH7, "Wodurch kann sich die Gesamtenergie eines Systems ändern?", ["Nur durch Arbeit äußerer Kräfte: W = ΔE_ges", "Durch jede Kraft im System", "Durch Reibung im System", "Gar nicht – sie ist immer konstant"], "Merksatz der Vorlesung: Die Gesamtenergie eines Systems ändert sich nur durch Arbeit äußerer Kräfte. Reibung im System wandelt nur um (E_kin → E_th), die Summe bleibt.", "Physik V07, Folie 32");
PH7z({ st: 1 });
mc("phys", PH7, "Was beschreibt der Energiesatz pro Zeit, dE_ges/dt = P?", ["Wie schnell sich die Gesamtenergie ändert – gleich der Leistung der äußeren Kräfte", "Die Geschwindigkeit des Körpers", "Die Reibungskraft pro Sekunde", "Die potenzielle Energie pro Meter"], "Gleiche Aussage wie W = ΔE_ges, nur für eine kurze Zeitspanne. P ist die Leistung der äußeren Kräfte in Watt = J/s, z. B. ein Wasserkocher mit 2000 W.", "Physik V07, Folie 33");
PH7z({ st: 2 });
mc("phys", PH7, "Masse am Seil über eine Rolle an der Decke, System = Masse, Erde, Seil, Rolle. Welche Kraft ist eine innere Kraft?", ["Die Gewichtskraft F_G – sie steckt in E_pot", "Die Kraft am Seilende F_S", "Die Kraft der Decke F_D", "Keine – alle drei sind äußere Kräfte"], "Seilkraft und Deckenkraft greifen von außen an. F_S verrichtet die Arbeit W, F_D nicht (die Aufhängung ruht). Die Gewichtskraft wirkt zwischen Masse und Erde, beide gehören zum System – ihre Arbeit steckt in E_pot.", "Physik V07, Folien 34–35");
PH7z({ st: 2 });
mc("phys", PH7, "Das Seil reißt, Luftwiderstand vernachlässigt. Was gilt für die Masse?", ["ΔE_kin + ΔE_pot = 0 – E_pot nimmt ab, E_kin um denselben Betrag zu", "E_kin bleibt gleich", "Die Gesamtenergie nimmt ab", "E_pot wird zu Wärme"], "Ohne äußere Arbeit (W = 0) bleibt die mechanische Energie konstant. Aus ½·m·v² = m·g·h folgt v = √(2·g·h) – unabhängig von der Masse. Aus 5,0 m: v ≈ 9,9 m/s ≈ 36 km/h.", "Physik V07, Folien 37–40");
PH7z({ st: 2 });
mc("phys", PH7, "Ein Ball fällt ohne Luftwiderstand aus 1,25 m Höhe. Mit welcher Geschwindigkeit trifft er auf?", ["≈ 4,95 m/s", "≈ 24,5 m/s", "≈ 12,3 m/s", "Das hängt von der Masse ab"], "Energieerhaltung: ½·m·v² = m·g·h → v = √(2·g·h) = √(2 · 9,81 m/s² · 1,25 m) ≈ 4,95 m/s. Die Masse kürzt sich heraus.", "Physik V07, Selbsttest Frage 10");
PH7z({ st: 3 });
pair("phys", PH7, "Auto rollt mit abgeschaltetem Motor auf ebener Straße aus. Ordne zu.", [["ΔE_inn", "= 0 – kein Benzinverbrauch"], ["ΔE_pot", "= 0 – Straße eben"], ["ΔE_th", "> 0 – Luftwiderstand, Reibung"], ["ΔE_kin", "< 0 – Auto wird langsamer"]], "Keine Arbeit von außen, die Gesamtenergie bleibt. Die kinetische Energie wird bis zum Stillstand vollständig in thermische Energie umgewandelt.", "Physik V07, Folie 42");
PH7z({ st: 2 });

/* ── Energiediagramm ── */
mc("phys", PH7, "Wie liest du im Energiediagramm die kinetische Energie ab?", ["Als Abstand zwischen der waagerechten Linie E_mech und der Kurve E_pot(x)", "Als Höhe der Kurve E_pot(x)", "Als Steigung der Kurve E_pot(x)", "Als Fläche unter der Kurve"], "Ohne Reibung ist E_mech = E_kin + E_pot konstant – eine waagerechte Gerade. Also E_kin = E_mech − E_pot: Wo die Kurve tief liegt, ist der Körper schnell.", "Physik V07, Folien 44–45");
PH7z({ st: 2, ev: "epotdiag" });
mc("phys", PH7, "Was gilt an einem Umkehrpunkt im Energiediagramm?", ["E_pot = E_mech, also E_kin = 0 – der Körper steht kurz und kehrt um", "E_kin ist maximal", "E_pot ist minimal", "Die Kraft ist dort null"], "Am Umkehrpunkt berührt die Kurve E_pot(x) die Linie E_mech. Der Körper hat keine kinetische Energie mehr; die Kraft −dE_pot/dx zeigt zurück, er kehrt um. Bereiche mit E_pot > E_mech sind nicht erreichbar.", "Physik V07, Folien 46–47");
PH7z({ st: 2, ev: "epotdiag" });
mc("phys", PH7, "Liegt eine stabile Gleichgewichtslage im Minimum oder im Maximum von E_pot?", ["Im Minimum – nach kleiner Auslenkung zeigt die Kraft zurück", "Im Maximum – dort ist die Kraft am größten", "Überall, wo E_pot konstant ist", "Am Umkehrpunkt"], "Merksatz: Minima von E_pot sind stabile Gleichgewichtslagen (wie eine Kugel in einer Mulde). In einem Maximum würde die Kraft nach kleiner Auslenkung weiter wegtreiben.", "Physik V07, Folie 48");
PH7z({ st: 2, ev: "epotdiag" });

/* ── Lösungsweg-Aufgabe ── */
aufgabe({
 "id": "phys-v07-seilriss", "f": "phys", "t": PH7, "titel": "Fall nach dem Seilriss", "s": "Physik V07, Folien 38–40",
 "angabe": "Eine Masse m = 2,0 kg hängt in Ruhe h = 5,0 m über dem Boden. Das Seil reißt, der Luftwiderstand wird vernachlässigt. Mit welcher Geschwindigkeit trifft die Masse auf?",
 "geg": ["m = 2,0 kg", "h = 5,0 m", "v₁ = 0", "g = 9,81 m/s²"],
 "ges": "Aufprallgeschwindigkeit v₂",
 "schritte": [
  { "f": "Welcher Ansatz passt?", "o": [
    ["Energiesatz ohne äußere Arbeit: ΔE_kin + ΔE_pot = 0", "Nach dem Riss wirkt nur noch die Gewichtskraft – eine innere, konservative Kraft. W = 0, E_mech bleibt konstant."],
    ["W = F · s mit der Seilkraft", "Das Seil ist gerissen, die Seilkraft ist null."],
    ["ΔE_th = W_R", "Ohne Luftwiderstand entsteht keine Wärme."],
    ["F = m · a mit a = 0", "Die Masse wird beschleunigt, a = g."]],
   "r": "ΔE_kin + ΔE_pot = 0" },
  { "f": "Wie sehen die einzelnen Änderungen aus?", "o": [
    ["(½·m·v₂² − 0) + (0 − m·g·h) = 0", "E_kin wächst von 0 auf ½·m·v₂², E_pot sinkt von m·g·h auf 0 (Nullpunkt am Boden)."],
    ["(½·m·v₂²) + (m·g·h) = 0", "E_pot nimmt ab, die Änderung ist negativ: 0 − m·g·h."],
    ["½·m·v₂ = m·g·h", "In E_kin steht v im Quadrat."],
    ["m·v₂ = m·g·h", "Das wäre ein Impuls, keine Energie."]],
   "r": "½·m·v₂² = m·g·h" },
  { "f": "Wie stellst du nach v₂ um?", "o": [
    ["Masse kürzen, mal 2, Wurzel: v₂ = √(2·g·h)", "Das Ergebnis hängt nicht von der Masse ab."],
    ["v₂ = 2·g·h", "Es fehlt noch die Wurzel."],
    ["v₂ = √(g·h)", "Der Faktor ½ wurde vergessen: mal 2 auf beiden Seiten."],
    ["v₂ = √(2·m·g·h)", "Die Masse steht auf beiden Seiten und kürzt sich."]],
   "r": "v₂ = √(2·g·h)" },
  { "f": "Welcher Wert kommt heraus?", "o": [
    ["v₂ = √(2 · 9,81 · 5,0) ≈ 9,9 m/s ≈ 36 km/h", "2 · 9,81 · 5,0 = 98,1, Wurzel ≈ 9,9."],
    ["v₂ ≈ 98 m/s", "Die Wurzel fehlt."],
    ["v₂ ≈ 7,0 m/s", "Das wäre √(g·h) – der Faktor 2 fehlt."],
    ["v₂ ≈ 14 m/s", "Hier wurde mit der Masse 2,0 kg statt mit dem Faktor 2 gerechnet – die Masse kürzt sich."]],
   "r": "v₂ ≈ 9,9 m/s" }],
 "fazit": "Rezept: System festlegen → äußere Arbeit prüfen (hier W = 0) → ΔE_kin + ΔE_pot = 0 aufschreiben → umstellen. Fallgeschwindigkeit ohne Luftwiderstand: v = √(2·g·h), unabhängig von der Masse."
});
