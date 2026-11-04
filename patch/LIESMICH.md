# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: 1.5 am 02.11.2026 (156 Fragen, 26 Aufgaben, Anmerkungen per GitHub-Issue). Stand jetzt: 520 Fragen, 40 Aufgaben. Wartend (Reihenfolge beim Einspielen):
1. `2026-11-03 Physik V04 Blatt 04.js` – 25 Fragen, 5 Lösungsweg-Aufgaben, neues Thema P5 „Newtonsche Axiome“
2. `2026-11-04 Anmerkungen 1.js` – Issues #3–#9: 6 Korrekturen (u. a. Erklär-Skizze `emodul`), 4 neue Fragen
3. `2026-11-04 Rechenwerte Selbst rechnen.js` – `const RECHNEN`: 156 Zwischenergebnisse in 38 Aufgaben (Modus „Selbst rechnen“)
4. `2026-11-04 Formelsammlung.js` – `const FORMELN`: 94 Formeln in 7 Fächern
5. `2026-11-04 Schneider-Wegweiser.js` – `const SCHNEIDER`: 16 Fundstellen (24. Aufl. laut Folien, 27. Aufl. folgt nach Toms Scans)

App (ersetzt die Vorlage beim Build, APP_VERSION → 1.6):
- `app/app-1.6.html` – Reihenfolge per Ziehen, Skizzen in Erklärungen (`ev`), **Selbst rechnen** (Rechner, Hilfe in 3 Stufen), **Formelsammlung**, **Klausurplan** (Bauko nach Klausuranalyse gewichtet), **Probeklausur**, **Schwachstellen**, **Vorlesungsfolien** (verschlüsseltes Paket, IndexedDB), **Schneider-Wegweiser**
- `app/figs-1.6.js` – neue Skizze `emodul` (ersetzt figs.js)
- `app/folien/folien.bin` – 226 Schlüsselfolien, AES-GCM verschlüsselt (Passwort nur bei Tom und in Toms _Claude-Notizen). **Beim Patch nach main/folien/folien.bin kopieren.**
- `app/pruefe.js` – prüft auch `ev` und Korrekturen für Aufgaben-IDs
- `app/quellen/` – Generatoren (Rechenwerte, Formeln, Folienauswahl/-paket)
- Nach dem Patch Issues #3–#9 mit Kommentar schließen

Zusammen geprüft: 549 Fragen, 45 Aufgaben, 76 Korrekturen, 94 Formeln, 156 Rechenwerte, 16 Fundstellen.

## Offen
- **Frage (02.11.2026):** Benachrichtigungen – Optionen an Tom geschickt (Push mit kleinem Server, App-Symbol-Zähler, iPhone-Kurzbefehl). Entscheidung von Tom offen.
