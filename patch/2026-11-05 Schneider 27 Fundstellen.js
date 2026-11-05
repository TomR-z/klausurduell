/* Patch-Warteschlange · Schneider-Wegweiser: Fundstellen in Toms 27. Auflage (aus seinem Scan der Inhaltsverzeichnisse, 05.11.2026) · Seitenzahl = Anfang des Abschnitts laut Inhaltsverzeichnis, die Tafel steht dort oder wenige Seiten danach · erstellt 05.11.2026 */
const SBT27_FUND = {
 "Wichten von Baustoffen (Eigenlasten)": "S. 3.9–3.11 (Abschn. 3 B 2, Holz S. 3.11)",
 "Nutzlasten im Hochbau (Kategorien A bis E)": "S. 3.19–3.20 (3 C 3 Nutzungskategorien, 3 C 4.1 Decken, Treppen, Balkone)",
 "Trennwandzuschlag": "S. 3.19 (3 C 2.2 Lasten aus leichten Trennwänden)",
 "Schneelastzonen und s_k am Boden": "S. 3.53 (3 F 3 Schneelast auf dem Boden)",
 "Formbeiwerte μ für Schnee auf Dächern": "S. 3.54 (3 F 4 Schneelast auf dem Dach)",
 "Geschwindigkeitsdruck q_p vereinfacht (bis 25 m)": "ab S. 3.29 (3 E 5 Windzonen, Geschwindigkeitsdrücke)",
 "Höhenabhängiger Geschwindigkeitsdruck (Regelfall)": "ab S. 3.29 (3 E 5 Windzonen, Geschwindigkeitsdrücke)",
 "Außendruckbeiwerte c_pe für Wände und Dächer": "ab S. 3.33 (3 E 7 Winddruck auf Oberflächen)",
 "Modifikationsbeiwert k_mod": "S. 9.3 (9 1.5 Widerstände)",
 "Festigkeiten und Steifigkeiten Vollholz und BSH (C24, GL24h …)": "ab S. 9.6 (9 2.2 Vollholzprodukte)",
 "Querdruckbeiwert k_c,90": "S. 9.23 (9 6.1 Auflager- und Schwellendruck)",
 "Schubnachweis und k_cr": "S. 9.21 (9 5.4 Schub infolge Querkraft)",
 "Knickbeiwert k_c": "S. 9.27 (9 7.1 Knicken)",
 "Durchbiegung: k_def und Grenzwerte": "S. 9.14 (9 3.2 Steifigkeitskennwerte) und S. 9.15 (9 4.2 Durchbiegungen)",
 "Teilsicherheits- und Kombinationsbeiwerte (γ, ψ)": "S. 3.3–3.6 (3 A 3–5, Grenzzustand der Tragfähigkeit ab S. 3.4)",
 "Stahlprofile IPE, HEA, HEB (Querschnittswerte)": "ab S. 8.187 (8 G Stahlbauprofile)"
};
SCHNEIDER.forEach(e => { if (SBT27_FUND[e.was]) e.s27 = SBT27_FUND[e.was]; });
SCHNEIDER.push({
 "was": "Durchlaufträger: Tafelwerte und ungünstige Laststellung",
 "a24": "S. 4.14 und 4.20 (laut Übung 3)",
 "fol": null,
 "kap": "Baustatik",
 "tipp": "M = Tafelwert · q · l². Veränderliche Lasten feldweise stellen: Außenfelder für das größte Feldmoment, die zwei Felder neben der Stütze für das größte Stützmoment (Übung 3, Beispiel 6).",
 "s27": "ab S. 4.7 (4 A 1.4 Durchlaufträger)"
});
