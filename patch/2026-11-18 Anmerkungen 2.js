/* Patch-Warteschlange · Anmerkungen aus der App (Issues #11–#13, Tom 18.11.2026) · Frage-IDs und Lernstand bleiben (KORREKTUR) · neue Skizzen „torricelli“ und „sparren“ in FIG */
Object.assign(KORREKTUR, {
 /* #11 Unklar erklärt: Torricelli verständlicher formuliert + Skizze in der Erklärung */
 "hydro-19q2zaw": {
  "q": "Aus einer kleinen Öffnung tief unten in einem sehr großen, offenen Behälter fließt Wasser aus. Der Wasserspiegel steht h über der Öffnung. Wie schnell tritt das Wasser aus?",
  "a": ["v = √(2·g·h)", "v = 2·g·h", "v = g·h / 2", "v = √(g / h)"],
  "e": "Energiesatz (Bernoulli) vom Wasserspiegel zur Öffnung: Am Spiegel ist der Druck null (Atmosphäre) und das Wasser steht praktisch still, weil der Behälter sehr groß ist. An der Öffnung ist der Druck ebenfalls null. Die ganze Höhe h wird also zu Geschwindigkeitshöhe: h = v²/(2g), daraus v = √(2·g·h) – genauso schnell wie ein Stein, der h tief fällt (Torricelli). Beispiel: h = 5 m → v ≈ 9,9 m/s.",
  "ev": "torricelli"
 },
 /* #12 Sonstiges „Was soll mir die Frage bringen?“ → statt Zahlen aus Übung 3 auswendig: was die Beiwerte bedeuten */
 "bauko-bqaea4": {
  "q": "Lastfallkombination im GZT: Wofür steht welcher Beiwert?",
  "pairs": [["γ_G = 1,35", "Sicherheitsbeiwert für ständige Lasten (Eigengewicht)"], ["γ_Q = 1,5", "Sicherheitsbeiwert für veränderliche Lasten"], ["ψ₀ = 0,5", "Kombinationsbeiwert Schnee (bis 1000 m ü. NN)"], ["ψ₀ = 0,6", "Kombinationsbeiwert Wind"]],
  "e": "Die ständige Last bekommt immer γ_G. Von den veränderlichen Lasten nimmt man eine als Leiteinwirkung voll mit γ_Q. Alle anderen sind Begleiteinwirkungen und werden zusätzlich mit ψ₀ abgemindert, weil es unwahrscheinlich ist, dass Schnee und Sturm gleichzeitig ihren Höchstwert erreichen. Beispiel Schnee führend: 1,35·g + 1,5·s + 1,5·0,6·w. Die Werte stehen im Schneider (Kap. 3, Grundlagen der Tragwerksplanung) und werden in jeder Holzbau-Aufgabe der Klausur gebraucht.",
  "s": "Baukonstruktion V01/V02 + Übung 3 (Kombinationsregeln, Schneider Kap. 3)"
 },
 /* #13 Sonstiges: allgemein statt mit Zahlen aus Übung 4 + Skizze in der Erklärung */
 "bauko-1uhx4lc": {
  "q": "Ein geneigter Sparren wird mit Lasten senkrecht zur Dachfläche (q⊥) berechnet. Welche Spannweite setzt du für Biegung und Durchbiegung an?",
  "a": ["Die schräge Länge entlang des Sparrens: l = √(lₕ² + h²)", "Die waagerechte Stützweite lₕ im Grundriss", "Die ganze Sparrenlänge mit Dachüberständen", "Die Dachbreite von Traufe zu Traufe"],
  "e": "Lasten und Spannweite müssen zusammenpassen: Wirkt die Last senkrecht zum Sparren, gehört dazu die Länge entlang des Sparrens. Rechnest du stattdessen mit der waagerechten Länge lₕ, musst du auch die Last auf den Grundriss beziehen. Beispiel aus Übung 4: lₕ = 3,58 m, h = 2,57 m → l = √(3,58² + 2,57²) = 4,41 m. Dachüberstände (Kragarme) wurden dort vernachlässigt.",
  "ev": "sparren"
 }
});
