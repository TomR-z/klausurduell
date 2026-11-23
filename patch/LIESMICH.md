# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.4 am 23.11.2026** (Physik V07 Potenzielle Energie und Energiesatz: 30 Fragen, Aufgabe phys-v07-seilriss, Skizzen wegunabh/epotdiag; Hydromechanik Übung 1 und 2 neue Fassung: 6 Fragen). Stand: 958 Fragen, 66 Aufgaben, 302 Korrekturen. Fragendatei jetzt `fragen_v24full.js`, Build `build_pwa24.py`. Sicherungen: Branches `sicherung-2.0` bis `sicherung-2.2`, app_v23_backup.html. Quellen der 3D-Stadt und Wirtschaft: /home/claude/app/c3/. Warteschlange leer. Neue Fragen: Stufe als Feld `st`, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Nächste Patches geplant (Tom 23.11.): 2.5 Erinnerungen per Push (Weg A), dann Besucher mit Fragen, Klausur-Countdown, Stadtstufen/neue Gebiete – Plan im Docs-Konzept und in Projekte/Klausurduell App.md
