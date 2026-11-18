# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **1.9 am 18.11.2026** (75 neue Skizzen, 219 Fragen mit Erklär-Skizze in allen Fächern; Meldungen #11–#13 umgesetzt und geschlossen). Stand: 876 Fragen, 60 Aufgaben, 293 Korrektur-Einträge. Warteschlange leer.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
