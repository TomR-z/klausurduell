# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: 1.7 am 09.11.2026 (lokal und Artifact; auf GitHub main seit 17.11.2026 nach Entsperrung des Kontos). Stand: 695 Fragen, 50 Aufgaben, 76 Korrekturen.
Wartend (Stand 17.11.2026, mit pruefe.js gegen 1.7 geprüft: 876 Fragen, 60 Aufgaben, 85 Korrekturen):
- `2026-11-09 Baustoffkunde V05 Gefüge und Verbundwerkstoffe.js` – 16 Fragen, Aufgabe bsk-v05-gfk
- `2026-11-11 Baukonstruktion Übung 04 Dächer.js` – Fragen + 3 Aufgaben (Durchbiegung, Gerberpfette, Deckenbalken)
- `2026-11-16 Physik Vorlesung 6 und Blatt 5 neu.js` – 29 Fragen, 3 Aufgaben, Korrektur „Blatt 5“ → „Blatt 6“
- `2026-11-17 Baustoffkunde V06 Phasendiagramme.js` – 27 Fragen
- `2026-11-17 DAP L04 L05 und Übung 03.js` – 37 Fragen, Aufgabe dap-l05-ki-mittel
- `2026-11-17 Bauinformatik Block 3 und Übung 04.js` – 31 Fragen
- `2026-11-17 Baukonstruktion V05 Stützen und Tragelemente.js` – 25 Fragen, 2 Aufgaben, Korrektur E_0,05 = 7333 N/mm² (Schneider) in bauko-knick-stuetze

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER` (Fundstellen 27. Aufl. nach Toms Scans)
- Neues Folienpaket: `folien/folien.bin` in main ersetzen

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
