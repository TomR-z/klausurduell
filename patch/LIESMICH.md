# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **3.0 am 26.11.2026** (neue Stadt mit Kenney-Modellen in `stadt.glb` + `gltf-umd.js`, Raster 12 × 12, Mein Haus, Ziele, Wochentruhe, Klausur-Countdown, Bitcoin ×2). Stadt-Code nur in `c3/*.js` ändern, dann `c3/einbauen.py`; Build `build_pwa30.py` (legt auch `v25/` an), Artifact `build30.py`. Stand: 973 Fragen, 68 Aufgaben, 302 Korrekturen, Fragendatei `fragen_v30full.js`. Sicherungen: Branches `sicherung-2.0` bis `sicherung-2.2`, `sicherung-2.5`; in der App unter `v25/`. Erinnerungs-Server: `app/push/worker.js` (Countdown-Pensum, Endspurt). Warteschlange leer. Neue Fragen: Stufe als Feld `st`, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Nächste Patches geplant (Tom 23.11.): 2.5 Erinnerungen per Push (Weg A), dann Besucher mit Fragen, Klausur-Countdown, Stadtstufen/neue Gebiete – Plan im Docs-Konzept und in Projekte/Klausurduell App.md
