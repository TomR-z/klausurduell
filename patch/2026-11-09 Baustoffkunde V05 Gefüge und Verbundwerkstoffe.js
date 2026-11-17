/* Patch-Warteschlange · Baustoffkunde · V05 Gefügeaufbau, Verbundwerkstoffe (Vollpracht, 9.11.2026, 29 Folien) · erstellt 09.11.2026 · Zahlen mit Python nachgerechnet */
const B6 = "Ermüdung und Verbundwerkstoffe";
THEMEN["bsk|Ermüdung und Verbundwerkstoffe"] = "Bauteile versagen nicht nur unter einer einmaligen großen Last. Kerben erhöhen die Spannung örtlich, und wiederholte Lastwechsel können einen Werkstoff weit unter seiner statischen Festigkeit ermüden lassen. Das beschreiben Wöhlerlinie, Dauer- und Zeitfestigkeit und die Palmgren-Miner-Regel. Verbundwerkstoffe kombinieren mehrere Werkstoffe, zum Beispiel Stahlbeton oder GFK. Ihre Kennwerte schätzt man mit zwei Grundmodellen ab: Parallelanordnung (hartes Modell, gleiche Dehnung) als obere Grenze und Serienanordnung (weiches Modell, gleiche Spannung) als untere Grenze.";

pair("bsk", B5, "Welche Struktur steuert welche Eigenschaft? Ordne zu.", [["Festigkeit", "Bindungsart (Mikrostruktur)"], ["Wärmeausdehnung und E-Modul", "Bindungsenergie (Mikrostruktur)"], ["Wasseraufnahme von Ziegel", "Porosität (Grobstruktur)"], ["Fließgrenze von Stahl", "Korngröße (Grobstruktur)"]], "Mikrostruktur = Anordnung der Atome und Moleküle, Grobstruktur = Anordnung von Komponenten und Phasen. Beim Beton steuert die Gesteinskörnung die Steifigkeit.", "Baustoffkunde V05, Folie 3");
mc("bsk", B5, "Was gilt für einen amorphen Stoff im Vergleich zum kristallinen Stoff gleicher Zusammensetzung?", ["Er ist metastabil und reaktiver", "Er ist thermodynamisch stabiler", "Er leitet Wärme besser", "Er hat einen scharfen Schmelzpunkt statt eines Übergangsbereichs"], "Amorphe Stoffe streben nach Kristallisation und reagieren deshalb leichter. Typisch sind außerdem ein Glasübergangsbereich (T_g bis T_s), stärkere Temperaturabhängigkeit, Lichtdurchlässigkeit und geringere Wärmeleitfähigkeit.", "Baustoffkunde V05, Folie 7");
mc("bsk", B5, "Wie ist die Porosität p eines Werkstoffs definiert?", ["p = V_P / V – Porenvolumen durch Gesamtvolumen", "p = V / V_P", "p = Masse der Poren / Gesamtmasse", "p = Rohdichte / Reindichte"], "Die Porosität beeinflusst Rohdichte, Festigkeit, E-Modul, Dichtigkeit, Frost- und Korrosionswiderstand, Wärmeleitfähigkeit und Volumenstabilität.", "Baustoffkunde V05, Folie 11");
mc("bsk", B5, "Bei welchem Werkstoff ist die Porosität bewusst eingestellt?", ["Porenbeton", "Bims", "Holz", "Zementstein"], "Bewusst eingestellt: Porenbeton, Leichtziegel, geschäumte Kunststoffe. Natürlich porös: Gesteine wie Tuff oder Bims, Holz, Zementstein und Beton.", "Baustoffkunde V05, Folie 12");
mc("bsk", B6, "Wie stark erhöht eine Kerbe die Spannung typischerweise gegenüber der Nennspannung σ_m?", ["Etwa auf das 1,2- bis 2,5-Fache", "Gar nicht, nur die Fläche wird kleiner", "Etwa auf das 10-Fache", "Sie senkt die Spannung"], "Die Formziffer k = σ_max / σ_m hängt von der Kerbgeometrie ab: je schärfer die Kerbe (kleines r/d), desto größer k. Bei spröden Werkstoffen senken Kerben die Festigkeit erheblich, weil sie die Spitze nicht durch Fließen abbauen können.", "Baustoffkunde V05, Folie 15");
pair("bsk", B6, "Bruchbild – ordne zu.", [["Transkristalliner Spaltbruch", "ebene Spaltflächen quer durch die Körner"], ["Interkristalliner Spaltbruch", "Bruch entlang der Korngrenzen"], ["Duktiler Bruch", "Porenbildung und Einschnürung"]], "Spaltbrüche sind spröde. Beim transkristallinen Bruch sieht man „Zungen und Flüsse“, beim interkristallinen winklig zueinander liegende Korngrenzflächen.", "Baustoffkunde V05, Folie 16");
pair("bsk", B6, "Ermüdung: Ordne die Größe ihrer Formel zu.", [["Mittelspannung σ_m", "(σ_o + σ_u) / 2"], ["Spannungsamplitude σ_a", "(σ_o − σ_u) / 2"], ["Reine Wechselbeanspruchung", "σ_m = 0"]], "σ_o ist die Oberspannung, σ_u die Unterspannung. Bei Schwellbeanspruchung bleibt die Spannung immer auf einer Seite (nur Zug oder nur Druck).", "Baustoffkunde V05, Folie 18");
pair("bsk", B6, "Welche Festigkeit ist gemeint?", [["Zeitfestigkeit", "für eine bestimmte Zahl von Lastwechseln"], ["Wechselfestigkeit", "unendlich oft ertragbar bei σ_m = 0"], ["Dauerfestigkeit", "unendlich oft ertragbare Amplitude"], ["Betriebsfestigkeit", "bei veränderlicher Schwingbreite"]], "Wechsel- und Dauerfestigkeit gelten für unendlich viele Lastwechsel, die Wechselfestigkeit ist der Sonderfall ohne Mittelspannung.", "Baustoffkunde V05, Folie 19");
mc("bsk", B6, "Was zeigt ein Smith-Diagramm?", ["Die ertragbare obere und untere Grenzspannung abhängig von der Mittelspannung", "Die Spannung über der Lastspielzahl", "Die Kerbformzahl über r/d", "Den E-Modul über dem Volumenanteil"], "Die Spannung über der Lastspielzahl (logarithmisch) ist die Wöhlerlinie. Das Smith-Diagramm fasst die Dauerfestigkeit für verschiedene Mittelspannungen zusammen.", "Baustoffkunde V05, Folie 20");
ord("bsk", B6, "Wie läuft ein Ermüdungsbruch ab? Bring in die richtige Reihenfolge.", ["Riss beginnt an einer lokalen Fehlstelle", "Riss wächst langsam, Querschnitt nimmt ab (Rastlinien)", "Restquerschnitt bricht plötzlich"], "Auf der Bruchfläche sieht man daher eine glatte Zone mit Furchen oder Schwingungsstreifen und eine raue Restbruchfläche.", "Baustoffkunde V05, Folie 21");
mc("bsk", B6, "Was besagt die Palmgren-Miner-Regel?", ["Σ n_i / N_i ≤ 1 – die Teilschädigungen aller Laststufen addieren sich", "Die größte Laststufe allein entscheidet", "n_i muss größer als N_i sein", "Die Lastspiele werden multipliziert"], "n_i: Lastspiele im Bauwerk bei einer Kombination aus σ_m und σ_a, N_i: Lastspiele bis zum Bruch im Versuch. Ist die Summe 1 erreicht, ist das Bauteil rechnerisch ermüdet.", "Baustoffkunde V05, Folie 22");
mc("bsk", B6, "Wie ordnet die Vorlesung Beton und Stahlbeton als Verbundwerkstoffe ein?", ["Beton isotrop und heterogen, Stahlbeton anisotrop und heterogen", "Beide isotrop und homogen", "Beton anisotrop, Stahlbeton isotrop", "Beide homogen, aber anisotrop"], "Beton = Zementstein + Gesteinskörnung, in alle Richtungen etwa gleich. Der Stahl im Stahlbeton liegt in bestimmten Richtungen, daher anisotrop. Ebenso anisotrop: Mauerwerk, GFK, Sandwichplatten.", "Baustoffkunde V05, Folie 23");
pair("bsk", B6, "Grundmodelle der Verbundwerkstoffe – ordne zu.", [["Serienanordnung (weiches Modell)", "gleiche Spannung in beiden Komponenten"], ["Parallelanordnung (hartes Modell)", "gleiche Dehnung in beiden Komponenten"], ["Unterer Grenzwert des E-Moduls", "1/E = V₁/E₁ + V₂/E₂"], ["Oberer Grenzwert des E-Moduls", "E = V₁·E₁ + V₂·E₂"]], "Bei Serienanordnung addieren sich die Verformungen, bei Parallelanordnung die Kräfte. Der echte Wert liegt zwischen beiden Grenzen.", "Baustoffkunde V05, Folie 24–27");
mc("bsk", B6, "Wovon hängt die Rohdichte eines Verbundwerkstoffs ab?", ["Nur von den Volumenanteilen und Rohdichten: ρ = V₁ρ₁ + V₂ρ₂", "Von der Anordnung (Serie oder parallel)", "Vom E-Modul der Komponenten", "Nur von der dichteren Komponente"], "Masse addiert sich unabhängig davon, wie die Komponenten angeordnet sind. Beim E-Modul ist die Anordnung dagegen entscheidend.", "Baustoffkunde V05, Folie 25");
mc("bsk", B6, "Warum ist GFK in Faserrichtung steifer als quer dazu?", ["Längs wirken Fasern und Harz parallel (hartes Modell), quer in Serie (weiches Modell)", "Weil das Harz längs steifer ist", "Weil quer mehr Fasern liegen", "GFK ist in beiden Richtungen gleich steif"], "Längs müssen Glas und Harz gleich weit gedehnt werden, das steife Glas trägt den Großteil. Quer hintereinander bestimmt die weiche Komponente stark mit. Folienbeispiel: 64 500 längs, 51 220 N/mm² quer.", "Baustoffkunde V05, Folie 30");
mc("bsk", B6, "Beton: hartes Modell 48 750, weiches Modell 34 286 N/mm². Was misst man real?", ["Etwa 20 000 bis 50 000 N/mm² – die Modelle sind nur Grenzabschätzungen", "Immer genau 48 750 N/mm²", "Immer genau 34 286 N/mm²", "Deutlich über 60 000 N/mm²"], "Reale Gefüge sind weder rein parallel noch rein in Serie. Genauere Modelle sind z. B. das geschichtete Modell oder das Kugelmodell.", "Baustoffkunde V05, Folie 31");

aufgabe({
 "id": "bsk-v05-gfk",
 "f": "bsk",
 "t": "Ermüdung und Verbundwerkstoffe",
 "titel": "E-Modul von GFK längs und quer",
 "s": "Baustoffkunde V05, Folie 30",
 "angabe": "Ein glasfaserverstärkter Kunststoff besteht zu 90 % aus Glasfasern und zu 10 % aus Kunststoff (Volumenanteile). Die Fasern liegen alle in einer Richtung.",
 "geg": ["E_Glas = 70 000 N/mm²", "V_Glas = 0,9", "E_KS = 15 000 N/mm²", "V_KS = 0,1"],
 "ges": "E-Modul in Faserrichtung und quer zur Faserrichtung",
 "schritte": [
  { "f": "Welches Modell gilt in Faserrichtung?", "o": [
    ["Parallelanordnung (hartes Modell): gleiche Dehnung", "Fasern und Harz liegen nebeneinander und werden gemeinsam gleich weit gedehnt."],
    ["Serienanordnung (weiches Modell): gleiche Spannung", "Das gilt quer zur Faser, wo Glas und Harz hintereinanderliegen."],
    ["Nur der E-Modul des Glases zählt", "Das Harz trägt auch mit, wenn auch wenig."],
    ["Mittelwert (70 000 + 15 000) / 2", "Die Volumenanteile müssen gewichtet werden."]],
   "r": "E = V_Glas·E_Glas + V_KS·E_KS" },
  { "f": "Wie groß ist der E-Modul in Faserrichtung?", "o": [
    ["0,9 · 70 000 + 0,1 · 15 000 = 64 500 N/mm²", "63 000 + 1 500 = 64 500 N/mm²."],
    ["0,1 · 70 000 + 0,9 · 15 000 = 20 500 N/mm²", "Die Volumenanteile sind vertauscht."],
    ["70 000 + 15 000 = 85 000 N/mm²", "Ohne Volumenanteile wäre der Verbund steifer als reines Glas."],
    ["1 / (0,9/70 000 + 0,1/15 000) = 51 220 N/mm²", "Das ist das weiche Modell für quer zur Faser."]],
   "r": "E_längs = 64 500 N/mm²" },
  { "f": "Welches Modell gilt quer zur Faser?", "o": [
    ["Serienanordnung: 1/E = V_Glas/E_Glas + V_KS/E_KS", "Quer liegen Glas und Harz hintereinander, beide tragen dieselbe Spannung, die Dehnungen addieren sich."],
    ["Parallelanordnung wie längs", "Dann wären beide Richtungen gleich steif."],
    ["E = E_Glas · E_KS", "Diese Einheit wäre (N/mm²)²."],
    ["Nur der E-Modul des Harzes zählt", "Das Glas verformt sich quer auch, nur weniger."]],
   "r": "1/E = 0,9/70 000 + 0,1/15 000" },
  { "f": "Wie groß ist der E-Modul quer zur Faser?", "o": [
    ["1/E = 1,95·10⁻⁵ mm²/N → E ≈ 51 220 N/mm²", "1,286·10⁻⁵ + 0,667·10⁻⁵ = 1,952·10⁻⁵, der Kehrwert ist 51 220."],
    ["E = 1,95·10⁻⁵ N/mm²", "Das ist erst 1/E, der Kehrwert fehlt."],
    ["E ≈ 64 500 N/mm²", "Das ist der Wert längs."],
    ["E ≈ 15 000 N/mm²", "Das wäre reines Harz; die Fasern versteifen auch quer."]],
   "r": "E_quer ≈ 51 220 N/mm² (≈ 79 % von längs)" }],
 "fazit": "Längs parallel (E-Moduln gewichtet addieren), quer in Serie (Kehrwerte gewichtet addieren)."
});
Object.assign(RECHNEN, {
 "bsk-v05-gfk": {
  "1": [{ "l": "E_längs", "w": 64500, "u": "N/mm²", "h": "0,9 · 70000 + 0,1 · 15000" }],
  "3": [{ "l": "E_quer", "w": 51220, "u": "N/mm²", "h": "1 / (0,9/70000 + 0,1/15000)" }]
 }
});
