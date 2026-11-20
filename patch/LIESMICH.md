# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: **2.2 am 20.11.2026** (Stadt in echtem 3D im Vollbild mit three.js: Gesten, Tag/Nacht, Landschaft mit Fluss und Neuland, Bauphasen, Arbeiter, Verkehr, Zug, Bewohner, „Zur Stadt“, Stadtbild auf Heute; `three.min.js` liegt im Repo). Stand: 922 Fragen, 65 Aufgaben. Sicherungen: Branches `sicherung-2.0`, `sicherung-2.1`. Quellen der 3D-Stadt: /home/claude/app/c3/ (einbauen.py setzt sie in app.html ein). Wartend für **2.3** (App-Änderung `2026-11-20 App 2.3 Wirtschaft.diff`, Skizzen `2026-11-20 Skizzen 2.3 figs.diff` + `… Zuordnung.js`, Quellen in `stadt3d/`, in /home/claude/app schon eingebaut, APP_VERSION 2.3, Fragendatei `fragen_v23full.js`, Build `build_pwa23.py`): Ressourcen-Wirtschaft nach Toms Konzept „Klausurduell 2.3 – Ressourcen-Konzept“ – 9 Grund-Ressourcen aus Werken je Fach (produzieren nur durch Lernen, Stillstand nach 7 Tagen), Kieswerk und Stahlwerk neu, Umbenennungen (Wasserwerk, Zementwerk, Kraftwerk, Planungsbüro, Prüflabor), Lagerhaus, 5 Fabriken mit Rezepten und Warteschlange, Messdaten-Optimierungen und Messkampagne, Engpass-Diagramm, Fachkräfte und 3. Bautrupp, Ressourcenkosten ab Stufe 3, neue Stadtgebäude, 3 Wahrzeichen, 7 Deko, Auftragsblatt (8 Aufträge, 2 Lernaufträge), Stadtstufe mit XP, Tagesziel-Truhe, Serienschutz 1×/Woche (2 mit Feuerwache), Info-Karte, Verschieben per langem Drücken mit Tauschen und Rückgängig, Umbau-Modus, Bauleiste mit Kategorien, 7 neue Skizzen an 11 Fragen. Speicher neu in S.game: r, fj, opt, inv, orders, xp, lv, sh, sd, stat, best, kath, crew3, Werkvorrat b.st. Sicherung 2.2: app_v22_backup.html (Branch `sicherung-2.2` beim Patch anlegen). Neue Fragen: Stufe direkt als Feld `st` setzen, Skizzen per `ev`.

- `app/anmerkungen.py`: liest offene Anmerkungs-Issues (gh api)
- `app/pruefe.js`: Prüfskript (Fragen, Aufgaben, Korrekturen, Skizzen)
- `app/quellen/`: Generatoren für Rechenwerte, Formeln und das Folienpaket (Passwort nur in Toms Notizen)
- Neue Daten an bestehende Objekte anhängen: `Object.assign(KORREKTUR, …)`, `Object.assign(RECHNEN, …)`, `FORMELN.push(…)`, `SCHNEIDER`

## Offen
- Schneider 27. Aufl.: Seitenzahlen erledigt (Warteschlange); offen: Tafelseiten-Scans für die privaten Tabellen (Issue #10, Schritt 2), danach Nachschlage-Fragen
- Benachrichtigungen: Entscheidung von Tom offen
