# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.5 am 23.11.2026** (Erinnerungen per Push: Modul push25 in app.html, Service Worker mit push/notificationclick in build_pwa25.py; Server Cloudflare Worker `klausurduell-push`, https://klausurduell-push.klausurduell.workers.dev, KV `klausurduell-push`, Cron */15, Quelle `app/push/worker.js`; VAPID-Schlüssel nur auf Toms PC). Stand: 958 Fragen, 66 Aufgaben, 302 Korrekturen. Fragendatei `fragen_v24full.js`, Build `build_pwa25.py`. Sicherungen: Branches `sicherung-2.0` bis `sicherung-2.2`, app_v23_backup.html. Warteschlange leer. Neue Fragen: Stufe als Feld `st`, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Nächste Patches geplant (Tom 23.11.): 2.5 Erinnerungen per Push (Weg A), dann Besucher mit Fragen, Klausur-Countdown, Stadtstufen/neue Gebiete – Plan im Docs-Konzept und in Projekte/Klausurduell App.md
