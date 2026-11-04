# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: 1.6 am 04.11.2026 (Selbst rechnen, Formelsammlung, Klausurplan, Probeklausur, Schwachstellen, Vorlesungsfolien, Schneider-Wegweiser). Stand: 549 Fragen, 45 Aufgaben, 94 Formeln, 226 Folien. Wartend: nichts.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER` (Fundstellen 27. Aufl. nach Toms Scans)
- Neues Folienpaket: `folien/folien.bin` in main ersetzen

## Offen
- Schneider 27. Aufl.: Seitenzahlen und Nachschlage-Fragen, sobald Toms Scans da sind
- Benachrichtigungen: Entscheidung von Tom offen
