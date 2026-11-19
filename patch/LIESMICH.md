# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.2 am 20.11.2026** (Stadt in echtem 3D im Vollbild mit three.js: Gesten, Tag/Nacht, Landschaft mit Fluss und Neuland, Bauphasen, Arbeiter, Verkehr, Zug, Bewohner, „Zur Stadt“, Stadtbild auf Heute; `three.min.js` liegt im Repo). Stand: 922 Fragen, 65 Aufgaben. Sicherungen: Branches `sicherung-2.0`, `sicherung-2.1`. Quellen der 3D-Stadt: /home/claude/app/c3/ (einbauen.py setzt sie in app.html ein). Warteschlange leer. Neue Fragen: Stufe direkt als Feld `st` setzen, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
