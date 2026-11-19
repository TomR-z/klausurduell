# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.1 am 19.11.2026** (Stadt-Spiel: Bitcoin fürs Lernen, isometrische Bauingenieur-Stadt, abschaltbar unter Lernstand). Stand: 922 Fragen, 65 Aufgaben. Sicherung des Stands davor: Branch `sicherung-2.0`. Wartend für **2.2** (App-Änderung `2026-11-20 App 2.2 Stadt 3D.diff`, Quellen in `stadt3d/`, in /home/claude/app/app.html schon eingebaut, APP_VERSION 2.2): Stadt als echtes 3D im Vollbild (three.js r149, MIT, als eigene Datei `three.min.js` im Repo und im Offline-Speicher), Gesten (Ziehen, Zwei-Finger-Zoom/Drehen/Neigen, Doppeltippen), Tag/Nacht nach Uhrzeit, Landschaft mit Fluss, Wald, Hügeln und Neuland hinter dem Fluss, Bauphasen (Baugrube → Rohbau mit Gerüst und Kran → fertig), Arbeiter, Autos, Betonmischer, Zug, Bewohner, Rauch, Vögel, Münzregen, „Zur Stadt“ auf Ergebnisseiten, Punkt am Stadt-Tab, Stadtbild auf „Heute“. Ohne WebGL bleibt die 2D-Stadt aus 2.1. Speicher neu: S.game.seenC, S.game.news, localStorage `klausurduell.stadtbild`. Deploy: index.html, fragen.js, sw.js, manifest.webmanifest **und three.min.js** kopieren (build_pwa22.py). Sicherung des Stands 2.1: Branch `sicherung-2.1` (694bbfc). Neue Fragen: Stufe direkt als Feld `st` setzen, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
