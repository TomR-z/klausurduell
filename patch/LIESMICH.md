# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.3 am 20.11.2026** (Ressourcen-Wirtschaft: Werke produzieren durch Lernen, Fabriken, Lager, Aufträge, Truhe, Serienschutz, Wahrzeichen, Deko, Info-Karte, Verschieben per Ziehen; 7 neue Skizzen an 11 Fragen). Stand: 922 Fragen, 65 Aufgaben. Fragendatei jetzt `fragen_v23full.js`, Build `build_pwa23.py`. Sicherungen: Branches `sicherung-2.0`, `sicherung-2.1`, `sicherung-2.2`. Quellen der 3D-Stadt und Wirtschaft: /home/claude/app/c3/ (einbauen.py setzt sie in app.html ein). **Wartend (23.11.2026):** `2026-11-23 Physik Vorlesung 7 Potenzielle Energie und Energiesatz.js` (30 Fragen, Aufgabe phys-v07-seilriss, neues Thema phys|Energie und Energiesatz) + `2026-11-23 neue Skizzen Physik V07 (FIG).js` (wegunabh, epotdiag – in /home/claude/app/figs.js schon eingebaut). pruefe.js ok: 952 Fragen, 66 Aufgaben. Neue Fragen: Stufe direkt als Feld `st` setzen, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: kommen im nächsten App-Patch nach 2.3 (Tom 20.11.)
