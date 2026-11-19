# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **1.9 am 18.11.2026** (75 neue Skizzen, 219 Fragen mit Erklär-Skizze in allen Fächern; Meldungen #11–#13 umgesetzt und geschlossen). Stand: 876 Fragen, 60 Aufgaben, 293 Korrektur-Einträge. Wartend für **2.0**: `2026-11-19 Tiefenstufen.js` (STUFE: alle 876 Fragen von Hand eingestuft – 1 Grundlagen 274, 2 Verstehen 409, 3 Anwenden 193; jedes Thema hat Stufe-1-Fragen) + App-Änderung `2026-11-19 App 2.0 Tiefenstufen.diff` (in /home/claude/app/app.html schon eingebaut, APP_VERSION 2.0): neue Fragen je Thema sanft von leicht nach schwer (niedrigste Stufe mit noch neuen Fragen zuerst, Wiederholungen und Probeklausur unverändert gemischt), Stufen-Anzeige in der Frage (Balken + Grundlagen/Verstehen/Anwenden), Stufe je Thema in der Fachansicht, Schalter „Von leicht nach schwer“ pro Fach (S.tiefeAus). Künftige Fragen: `Object.assign(STUFE, {...})`, ohne Eintrag gilt Stufe 2.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
