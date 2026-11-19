# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.0 am 19.11.2026** (Tiefenstufen 1 Grundlagen / 2 Verstehen / 3 Anwenden für alle Fragen, sanft von leicht nach schwer, Schalter pro Fach; Eingang 19.11.: 46 Fragen, 5 Lösungswege, Skizze schuettung). Stand: 922 Fragen, 65 Aufgaben. Warteschlange leer. Neue Fragen: Stufe direkt als Feld `st` setzen (oder `Object.assign(STUFE, {...})`), Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
