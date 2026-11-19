# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.1 am 19.11.2026** (Stadt-Spiel: Bitcoin fürs Lernen, isometrische Bauingenieur-Stadt, abschaltbar unter Lernstand). Stand: 922 Fragen, 65 Aufgaben. Sicherung des Stands davor: Branch `sicherung-2.0`. Warteschlange leer. Neue Fragen: Stufe direkt als Feld `st` setzen, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
