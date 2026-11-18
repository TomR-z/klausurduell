# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **1.8 am 17.11.2026** (BSK V05/V06, Bauko Ü04/V05 Stützen, Physik V06 + neues Blatt 5, DAP L04/L05/Ü3, Bauinformatik Block 3/Ü4; Korrekturen Blatt 5 → 6 und E_0,05 = 7333). Stand: 876 Fragen, 60 Aufgaben, 85 Korrekturen. Wartend: `2026-11-18 Anmerkungen 2.js` (Issues #11–#13 als KORREKTUR, IDs bleiben) + `2026-11-18 neue Skizzen (FIG).js` (torricelli, sparren). Beim Patch Issues #11–#13 mit Kommentar schließen.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
