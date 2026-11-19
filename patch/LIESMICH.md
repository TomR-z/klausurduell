# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **1.9 am 18.11.2026** (75 neue Skizzen, 219 Fragen mit Erklär-Skizze in allen Fächern; Meldungen #11–#13 umgesetzt und geschlossen). Stand: 876 Fragen, 60 Aufgaben, 293 Korrektur-Einträge. Wartend für **2.0**: `2026-11-19 Tiefenstufen.js` (STUFE: alle 876 Fragen von Hand eingestuft – 1 Grundlagen 274, 2 Verstehen 409, 3 Anwenden 193; jedes Thema hat Stufe-1-Fragen) + App-Änderung `2026-11-19 App 2.0 Tiefenstufen.diff` (in /home/claude/app/app.html schon eingebaut, APP_VERSION 2.0): neue Fragen je Thema sanft von leicht nach schwer (niedrigste Stufe mit noch neuen Fragen zuerst, Wiederholungen und Probeklausur unverändert gemischt), Stufen-Anzeige in der Frage (Balken + Grundlagen/Verstehen/Anwenden), Stufe je Thema in der Fachansicht, Schalter „Von leicht nach schwer“ pro Fach (S.tiefeAus). Künftige Fragen: `Object.assign(STUFE, {...})`, ohne Eintrag gilt Stufe 2.

Außerdem wartend (Eingang 19.11.): 46 neue Fragen + 5 Lösungsweg-Aufgaben – BSK Übung Baustoffkenngrößen (13 Fragen, Aufgaben bsk-ue02-kies/-reihe/-parallel), DAP Übung 04 Datenvisualisierung (11, neues Thema dap|Diagramme in R), Bauko Zusatzübung Schneider und Nautos (10, neues Thema bauko|Normen und Bautabellen), Statistik Übung 03 Tabellenkalkulation (10, neues Thema stat|Tabellenkalkulation), Bauinformatik Musterlösung Blatt 03 (2), Physik Übung 6 (Aufgaben phys-b6-a1, phys-b6-a4) + Skizze `schuettung`. Neue Fragen tragen ihre Stufe direkt als Feld `st` (gilt vor STUFE-Default). pruefe.js ok: 922 Fragen, 65 Aufgaben.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
