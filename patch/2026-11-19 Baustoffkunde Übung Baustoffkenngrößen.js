/* Patch-Warteschlange · Baustoffkunde · Übung Baustoffkenngrößen (Kamitter, 18.11.2026, 31 Folien: Dichten/Haufwerksporen, Reihen- und Parallelschaltung, Poissonzahl, Klausuraufgabe σ-ε-Linien) · erstellt 19.11.2026 · alle Zahlen mit Python nachgerechnet */
const BU19p = "Physikalische Eigenschaften", BU19m = "Mechanische Eigenschaften", BU19v = "Ermüdung und Verbundwerkstoffe";
const BU19z = o => Object.assign(FRAGEN[FRAGEN.length - 1], o);

/* ── Dichten einer Schüttung ── */
pair("bsk", BU19p, "Welche Dichte bezieht sich auf welches Volumen?", [["Reindichte", "nur der Feststoff, ohne jede Pore"], ["Kornrohdichte", "das Korn einschließlich seiner Kornporen"], ["Schüttdichte", "die ganze Schüttung mit Korn- und Haufwerksporen"]], "Die Masse ist immer dieselbe, nur das Volumen wächst: Je mehr Hohlräume mitgezählt werden, desto kleiner wird die Dichte. Darum gilt Reindichte > Kornrohdichte > Schüttdichte.", "BSK Übung Baustoffkenngrößen, Folie 7");
BU19z({ st: 1, ev: "schuettung" });
mc("bsk", BU19p, "Was sind Haufwerksporen?", ["Die Hohlräume zwischen den Körnern einer Schüttung", "Die Poren im Inneren eines einzelnen Korns", "Luftblasen im Zementstein", "Risse, die beim Brechen des Gesteins entstehen"], "Haufwerksporen entstehen, weil sich runde oder kantige Körner nicht lückenlos aneinanderlegen. Die Poren im Korn selbst heißen Kornporen.", "BSK Übung Baustoffkenngrößen, Folien 7–8");
BU19z({ st: 1, ev: "schuettung" });
mc("bsk", BU19p, "Mit welcher Dichte rechnest du, wenn du wissen willst, wie hoch eine Kiesschüttung aus einer bestellten Masse wird?", ["Mit der Schüttdichte", "Mit der Kornrohdichte", "Mit der Reindichte", "Mit der Dichte von Wasser"], "Die Schüttung besteht aus Körnern und den Lücken dazwischen. Nur die Schüttdichte (bei Kies rund 1300 kg/m³) enthält beide. Höhe = Masse ÷ (Fläche · Schüttdichte).", "BSK Übung Baustoffkenngrößen, Aufgabe 1a");
BU19z({ st: 2 });
mc("bsk", BU19p, "Jemand bestellt Kies und rechnet versehentlich mit der Kornrohdichte statt mit der Schüttdichte. Was passiert?", ["Die Schüttung wird viel höher als geplant – bei Kies etwa doppelt so hoch, weil rund die Hälfte des Schüttvolumens Lücken sind", "Es fehlt Kies, die Schüttung wird zu niedrig", "Nichts – beide Dichten sind bei Kies gleich", "Die Körner werden beim Einbau verdichtet und es passt genau"], "Kornrohdichte von Quarzkies ≈ 2600 kg/m³, Schüttdichte ≈ 1300 kg/m³. Wer mit 2600 rechnet, bestellt die Masse für das Volumen ohne Lücken – in der Übung wurden so aus geplanten 10 cm ganze 20 cm.", "BSK Übung Baustoffkenngrößen, Aufgabe 1b");
BU19z({ st: 2, ev: "schuettung" });
mc("bsk", BU19p, "Wie bestimmst du den Anteil der Haufwerksporen in einer Schüttung?", ["V_H ÷ V = 1 − ρ_Schütt ÷ ρ_Korn", "V_H ÷ V = ρ_Schütt ÷ ρ_Korn", "V_H ÷ V = 1 − ρ_Korn ÷ ρ_Rein", "V_H ÷ V = ρ_Rein − ρ_Schütt"], "Herleitung: V = V_K + V_H, also V_H ÷ V = 1 − V_K ÷ V. Mit V_K = m ÷ ρ_Korn und V = m ÷ ρ_Schütt kürzt sich die Masse: V_K ÷ V = ρ_Schütt ÷ ρ_Korn. Beispiel Kies: 1 − 1300 ÷ 2600 = 50 Vol.-%. 1 − ρ_Korn ÷ ρ_Rein wäre der Anteil der Kornporen.", "BSK Übung Baustoffkenngrößen, Aufgabe 1c");
BU19z({ st: 3, ev: "schuettung" });
mc("bsk", BU19p, "Welche Kornrohdichte ist für Quarzkies typisch?", ["Rund 2600 kg/m³", "Rund 1300 kg/m³", "Rund 1000 kg/m³", "Rund 7850 kg/m³"], "2600 kg/m³ liegt im typischen Bereich für Quarz. 1300 kg/m³ ist die Schüttdichte (mit Lücken), 1000 kg/m³ die von Wasser, 7850 kg/m³ die von Stahl.", "BSK Übung Baustoffkenngrößen, Aufgabe 1b");
BU19z({ st: 1 });

/* ── Reihe und Parallel ── */
mc("bsk", BU19v, "Zwei Schichten liegen übereinander (Holz auf Hartschaum) und werden von oben gedrückt. Was gilt?", ["Beide haben dieselbe Spannung, ihre Verkürzungen addieren sich: Δl = Δl₁ + Δl₂", "Beide haben dieselbe Dehnung, die Kräfte addieren sich", "Nur die steifere Schicht verformt sich", "Die Spannung verteilt sich nach den E-Modulen auf die Schichten"], "Das ist eine Reihen- oder Serienschaltung (weiches Modell): Dieselbe Kraft geht durch dieselbe Fläche, also σ₁ = σ₂. Die weiche Schicht verformt sich dabei viel stärker – in der Übung trug der Hartschaum 0,59 von 0,62 mm Verkürzung.", "BSK Übung Baustoffkenngrößen, Aufgabe 2a");
BU19z({ st: 2, ev: "verbundmodell" });
mc("bsk", BU19v, "Eine Stütze besteht aus einem Betonkern mit Putzschicht. Wie bekommst du den Ersatz-E-Modul E*?", ["Flächengewichtet: E* = (A₁ ÷ A) · E₁ + (A₂ ÷ A) · E₂, weil beide Teile gleich stark gestaucht werden", "Einfacher Mittelwert: E* = (E₁ + E₂) ÷ 2", "Über die Schichtdicken wie bei der Reihenschaltung", "Es zählt nur der Beton, Putz trägt nichts"], "Kern und Putz sind nebeneinander angeordnet und werden zusammen gestaucht: Parallelschaltung (hartes Modell), gleiche Dehnung ε. Die Kräfte addieren sich, darum wird nach Flächenanteilen gewichtet. In der Übung: 0,87 · 35 000 + 0,13 · 20 000 ≈ 33 050 N/mm².", "BSK Übung Baustoffkenngrößen, Aufgabe 2b");
BU19z({ st: 2, ev: "verbundmodell" });
wf("bsk", BU19v, "Bei einer Reihenschaltung aus einem steifen und einem weichen Material liegt der Ersatz-E-Modul näher am weichen Material.", true, "Richtig. Die Dehnungen addieren sich, und die weiche Schicht dehnt sich am meisten. Darum bestimmt sie die Gesamtverformung – das weiche Modell liefert den unteren Grenzwert.", "BSK Übung Baustoffkenngrößen, Folie 11 und 29");
BU19z({ st: 2, ev: "verbundmodell" });
ord("bsk", BU19v, "Verformung eines Schichtaufbaus (Reihenschaltung): Bring die Schritte in Reihenfolge.", ["Last in Kraft umrechnen: F = m · g", "Spannung aus Kraft und Fläche: σ = F ÷ A (in allen Schichten gleich)", "Dehnung jeder Schicht: ε_i = σ ÷ E_i", "Verkürzung jeder Schicht: Δl_i = ε_i · l_i", "Verkürzungen addieren: Δl = Δl₁ + Δl₂"], "Der Rechenweg aus Aufgabe 2a. Alternativ rechnet man mit dem Ersatz-E-Modul der ganzen Schichtung – das Ergebnis ist dasselbe.", "BSK Übung Baustoffkenngrößen, Aufgabe 2a");
BU19z({ st: 3 });

/* ── Poissonzahl, E-Modul aus der σ-ε-Linie ── */
mc("bsk", BU19m, "Wie berechnest du die Poissonzahl ν aus gemessenen Dehnungen?", ["ν = −ε_quer ÷ ε_längs", "ν = ε_längs ÷ ε_quer", "ν = ε_quer · ε_längs", "ν = E ÷ G"], "Die Poissonzahl ist das Verhältnis von Querdehnung zu Längsdehnung. Das Minus sorgt für einen positiven Wert, weil ein gestauchter Körper dicker wird (ε_längs < 0, ε_quer > 0). Mit ν folgt der Schubmodul: G = E ÷ (2 · (1 + ν)).", "BSK Übung Baustoffkenngrößen, Aufgabe 3 und Folie 28");
BU19z({ st: 2, ev: "querdehnung" });
mc("bsk", BU19m, "Du liest an einer σ-ε-Linie σ = 25 N/mm² bei ε = 1,25 ‰ ab. Wie rechnest du den E-Modul?", ["E = 25 ÷ 0,00125 = 20 000 N/mm² – Promille vorher durch 1000 teilen", "E = 25 ÷ 1,25 = 20 N/mm²", "E = 25 · 1,25 = 31,25 N/mm²", "E = 1,25 ÷ 25 = 0,05 N/mm²"], "E = Δσ ÷ Δε im geraden Teil der Linie. ε ist dimensionslos: 1,25 ‰ = 0,00125. Wer das Promille vergisst, liegt um den Faktor 1000 daneben.", "BSK Übung Baustoffkenngrößen, Klausuraufgabe");
BU19z({ st: 3, ev: "emodul" });
mc("bsk", BU19m, "Eine Stütze soll sich so wenig wie möglich verkürzen, damit sich die Decke darüber kaum durchbiegt. Welchen Werkstoff wählst du?", ["Den mit dem größten E-Modul – die steilste σ-ε-Linie", "Den mit der größten Bruchspannung", "Den mit der größten Bruchdehnung", "Den mit der flachsten σ-ε-Linie"], "Die Verkürzung ist Δl = σ · l ÷ E. Bei gleicher Last entscheidet also nur die Steifigkeit E, nicht die Festigkeit. In der Klausuraufgabe hatte der Werkstoff mit 20 000 N/mm² die steilste Linie.", "BSK Übung Baustoffkenngrößen, Klausuraufgabe");
BU19z({ st: 2, ev: "emodul" });

/* ── Lösungswege ── */
aufgabe({
 "id": "bsk-ue02-kies", "f": "bsk", "t": BU19p, "titel": "Kies für das Flachdach", "s": "BSK Übung Baustoffkenngrößen, Aufgabe 1",
 "angabe": "Ein Flachdach von 15 m × 15 m soll 10 cm hoch mit Kies 16/32 eingedeckt werden. Geliefert werden 58,5 t. Schüttdichte Kies ρ_Schütt ≈ 1300 kg/m³. Reicht die Menge – und wie viel Prozent der Schüttung sind Haufwerksporen?",
 "geg": ["A = 15 m · 15 m = 225 m²", "geplant h = 0,10 m", "m = 58 500 kg", "ρ_Schütt = 1300 kg/m³"],
 "ges": "Tatsächliche Höhe, Fehler bei der Bestellung, Anteil der Haufwerksporen",
 "schritte": [
  { "f": "Wie hoch wird die Schüttung mit 58,5 t?", "o": [
    ["h = m ÷ (A · ρ_Schütt) = 58 500 ÷ (225 · 1300) = 0,20 m", "ρ = m ÷ V und V = A · h, nach h umgestellt."],
    ["h = 58 500 ÷ (225 · 2600) = 0,10 m", "2600 kg/m³ ist die Kornrohdichte – die Lücken zwischen den Körnern fehlen."],
    ["h = 225 · 1300 ÷ 58 500 = 5,0 m", "Der Bruch ist umgedreht."],
    ["h = 58,5 ÷ (225 · 1300) = 0,0002 m", "Tonnen nicht in Kilogramm umgerechnet."]],
   "r": "h = 0,20 m – doppelt so hoch wie geplant" },
  { "f": "Welchen Fehler hat der Besteller vermutlich gemacht?", "o": [
    ["Er hat mit der Kornrohdichte gerechnet: 58 500 ÷ (225 · 0,1) = 2600 kg/m³ – typisch für Quarz", "Die bestellte Masse passt genau zur Kornrohdichte. Damit hat er die Hohlräume vergessen."],
    ["Er hat Kilogramm und Tonnen verwechselt", "Dann wäre der Fehler ein Faktor 1000, nicht 2."],
    ["Er hat mit der Reindichte von Wasser gerechnet", "Mit 1000 kg/m³ hätte er nur 22,5 t bestellt."],
    ["Er hat die Dachfläche doppelt gerechnet", "15 · 15 = 225 m² stimmt."]],
   "r": "Kornrohdichte statt Schüttdichte verwendet" },
  { "f": "Wie groß ist der Anteil der Haufwerksporen?", "o": [
    ["V_H ÷ V = 1 − ρ_Schütt ÷ ρ_Korn = 1 − 1300 ÷ 2600 = 0,50", "V = V_K + V_H, und V_K ÷ V = ρ_Schütt ÷ ρ_Korn, weil die Masse gleich bleibt."],
    ["V_H ÷ V = 1300 ÷ 2600 = 0,50 – das ist der Anteil der Körner", "Der Zahlenwert ist zufällig gleich, aber 1300 ÷ 2600 ist der Kornanteil. Die Poren sind 1 minus diesen Wert."],
    ["V_H ÷ V = 2600 ÷ 1300 = 2,0 = 200 %", "Mehr als 100 % geht nicht – der Bruch ist vertauscht."],
    ["V_H ÷ V = 1 − 2600 ÷ ρ_Rein", "Das wäre der Anteil der Kornporen im Korn."]],
   "r": "50 Vol.-% Haufwerksporen" }],
 "fazit": "Rezept: Für alles, was geschüttet wird, die Schüttdichte nehmen. Kornrohdichte ÷ Schüttdichte ≈ 2 heißt: Die Hälfte des Schüttvolumens ist Luft zwischen den Körnern."
});
aufgabe({
 "id": "bsk-ue02-reihe", "f": "bsk", "t": BU19v, "titel": "Fußboden unter einer Bronzefigur (Reihenschaltung)", "s": "BSK Übung Baustoffkenngrößen, Aufgabe 2a",
 "angabe": "Eine 8 t schwere Bronzefigur steht vollflächig auf 50 cm × 50 cm Fußboden. Aufbau von oben: 4 cm Holz (E = 370 N/mm²) auf 6 cm Hartschaum (E = 32 N/mm²). Wie stark drückt sich der Boden zusammen? g = 9,81 m/s².",
 "geg": ["m = 8000 kg", "A = 500 mm · 500 mm = 250 000 mm²", "Holz: l₁ = 40 mm, E₁ = 370 N/mm²", "Hartschaum: l₂ = 60 mm, E₂ = 32 N/mm²"],
 "ges": "Gesamtverkürzung Δl",
 "schritte": [
  { "f": "Wie groß ist die Spannung in den Schichten?", "o": [
    ["σ = 8000 · 9,81 ÷ 250 000 = 0,314 N/mm², in beiden Schichten gleich", "Reihenschaltung: dieselbe Kraft geht durch dieselbe Fläche."],
    ["σ = 8000 ÷ 250 000 = 0,032 N/mm²", "Masse ist keine Kraft – mit g multiplizieren."],
    ["σ₁ = 0,314, σ₂ = 0,314 · 32 ÷ 370 = 0,027 N/mm²", "Die Spannung teilt sich nicht nach den E-Modulen auf – das wäre bei der Parallelschaltung."],
    ["σ = 78 480 ÷ 0,25 = 313 920 N/mm²", "Fläche in m², Kraft in N – die Einheiten passen nicht zusammen."]],
   "r": "σ = 0,314 N/mm²" },
  { "f": "Wie stark verkürzen sich Holz und Hartschaum einzeln?", "o": [
    ["Δl₁ = 0,314 ÷ 370 · 40 = 0,03 mm; Δl₂ = 0,314 ÷ 32 · 60 = 0,59 mm", "ε_i = σ ÷ E_i, dann Δl_i = ε_i · l_i."],
    ["Δl₁ = 0,314 · 370 · 40 mm; Δl₂ = 0,314 · 32 · 60 mm", "Durch E teilen, nicht malnehmen: ε = σ ÷ E."],
    ["Δl₁ = Δl₂ = 0,314 ÷ 201 · 50 = 0,08 mm", "Die E-Module darf man nicht einfach mitteln."],
    ["Δl₁ = 0,314 ÷ 370 · 100 = 0,08 mm", "Jede Schicht nur mit ihrer eigenen Dicke."]],
   "r": "Δl₁ ≈ 0,03 mm, Δl₂ ≈ 0,59 mm" },
  { "f": "Wie groß ist die Gesamtverkürzung?", "o": [
    ["Δl = 0,03 + 0,59 = 0,62 mm", "In der Reihenschaltung addieren sich die Verkürzungen. Kontrolle über E*: ε = 0,314 · (0,4 ÷ 370 + 0,6 ÷ 32) = 6,2 ‰, mal 100 mm = 0,62 mm."],
    ["Δl = 0,59 mm – das Holz verformt sich nicht", "Es verformt sich wenig, aber nicht gar nicht."],
    ["Δl = (0,03 + 0,59) ÷ 2 = 0,31 mm", "Nicht mitteln – die Schichten liegen übereinander."],
    ["Δl = 0,03 · 0,59 = 0,02 mm", "Verkürzungen werden addiert, nicht multipliziert."]],
   "r": "Δl ≈ 0,62 mm" }],
 "fazit": "Reihenschaltung: gleiche Spannung, Dehnungen addieren sich. Die weiche Schicht macht fast die ganze Verformung (hier 95 %)."
});
aufgabe({
 "id": "bsk-ue02-parallel", "f": "bsk", "t": BU19v, "titel": "Betonstütze mit Putz (Parallelschaltung)", "s": "BSK Übung Baustoffkenngrößen, Aufgabe 2b",
 "angabe": "Unter der Figur (F = 78,48 kN) steht eine runde Stütze, Länge 3000 mm: Betonkern d = 140 mm (E = 35 000 N/mm²), außen 5 mm Putz (E = 20 000 N/mm²), Gesamtdurchmesser 150 mm. Wie stark verkürzt sie sich?",
 "geg": ["F = 78 480 N", "d_ges = 150 mm, d_Beton = 140 mm", "E_Beton = 35 000 N/mm², E_Putz = 20 000 N/mm²", "l = 3000 mm"],
 "ges": "Verkürzung Δl",
 "schritte": [
  { "f": "Wie groß ist die mittlere Spannung im Querschnitt?", "o": [
    ["σ = 78 480 ÷ (π · 150² ÷ 4) = 4,44 N/mm²", "Kraft durch die ganze Querschnittsfläche."],
    ["σ = 78 480 ÷ (π · 140² ÷ 4) = 5,10 N/mm²", "Der Putz trägt mit, die ganze Fläche zählt."],
    ["σ = 78 480 ÷ (π · 150²) = 1,11 N/mm²", "Kreisfläche ist π · d² ÷ 4."],
    ["σ = 78 480 ÷ 150² = 3,49 N/mm²", "Das wäre ein quadratischer Querschnitt."]],
   "r": "σ ≈ 4,44 N/mm²" },
  { "f": "Wie groß ist der Ersatz-E-Modul E*?", "o": [
    ["A_Beton ÷ A = 140² ÷ 150² = 0,87 → E* = 0,87 · 35 000 + 0,13 · 20 000 ≈ 33 050 N/mm²", "Parallelschaltung: gleiche Dehnung, Gewichtung nach Flächenanteilen."],
    ["E* = (35 000 + 20 000) ÷ 2 = 27 500 N/mm²", "Ohne Flächenanteile gemittelt – der dünne Putz zählt viel zu stark."],
    ["1 ÷ E* = 0,87 ÷ 35 000 + 0,13 ÷ 20 000 → E* ≈ 31 900 N/mm²", "Das ist die Formel der Reihenschaltung."],
    ["E* = 140 ÷ 150 · 35 000 + 10 ÷ 150 · 20 000 = 34 000 N/mm²", "Anteile über den Durchmesser statt über die Fläche."]],
   "r": "E* ≈ 33 050 N/mm²" },
  { "f": "Wie stark verkürzt sich die Stütze?", "o": [
    ["ε = 4,44 ÷ 33 050 = 0,13 ‰ → Δl = 0,000134 · 3000 ≈ 0,40 mm", "Die Musterlösung rundet ε auf 0,00013 und kommt so auf 0,39 mm."],
    ["Δl = 4,44 · 3000 ÷ 35 000 = 0,38 mm", "Nur mit dem Beton gerechnet – knapp daneben, weil der Putz weicher ist."],
    ["Δl = 4,44 ÷ 33 050 = 0,00013 mm", "Das ist die Dehnung, noch nicht mit der Länge multipliziert."],
    ["Δl = 33 050 · 3000 ÷ 4,44 mm", "Der Bruch ist umgedreht."]],
   "r": "Δl ≈ 0,4 mm" }],
 "fazit": "Parallelschaltung: gleiche Dehnung, Kräfte addieren sich, E* = Σ (A_i ÷ A) · E_i. Reihenschaltung dagegen: gleiche Spannung, Verformungen addieren sich."
});
