# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: 1.6 am 04.11.2026 (Selbst rechnen, Formelsammlung, Klausurplan, Probeklausur, Schwachstellen, Vorlesungsfolien, Schneider-Wegweiser). Stand: 549 Fragen, 45 Aufgaben, 94 Formeln, 226 Folien. Wartend (05.11.2026): 100 Fragen, 4 Lösungsweg-Aufgaben mit Rechenwerten – Statistik Kapitel 3 + Übung 1/2 (44 Fragen, stat-ue02-inverse, stat-ue02-mischung), Bauinformatik Block 2 (23), Baukonstruktion Übung 3 (18, bauko-ue03-sparren, bauko-ue03-dreifeld), DAP Übung 2 (15). Neue Themen: stat|Deskriptive Statistik, binf|Kontrollstrukturen, bauko|Lastfallkombination. Dazu `2026-11-05 Schneider 27 Fundstellen.js`: s27 für alle 16 Wegweiser-Einträge + neuer Eintrag Durchlaufträger (Issue #10, Schritt 1).

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER` (Fundstellen 27. Aufl. nach Toms Scans)
- Neues Folienpaket: `folien/folien.bin` in main ersetzen

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
