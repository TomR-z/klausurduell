# Patch-Warteschlange

Hier liegen neue Fragen und Aufgaben, bis Tom „Patch durchführen“ sagt.

Letzter Patch: 1.3 am 02.11.2026 (73 Fragen, 14 Lösungsweg-Aufgaben). Aktuell leer.

## Für den nächsten Patch gemerkt (Tom)
- **Fehler Fach-Blatt (02.11.2026):** Heute → Deine Fächer → Fach antippen öffnet das Blatt. Es lässt sich nicht herunterziehen/schließen; beim Wischen nach unten scrollt die Seite dahinter mit. Schließen geht nur über ein Thema und dann X.
  Plan: Wischen-zum-Schließen am Griff/Kopf des Blatts, Schließen-Knopf oben rechts, Hintergrund beim offenen Blatt sperren (overscroll-behavior: contain, body fixieren). Gilt für alle Blätter (Fach, Zurücksetzen).
- **Frage (02.11.2026):** Kann die App Benachrichtigungen schicken (Lern-Erinnerung, „X fällig“)? Web-Push ab iOS 16.4 nur mit Push-Server – klären.
- **Feedback aus Toms Test (02.11.2026, Screenshots):**
  1. `bauko` Zuordnen „Empfohlene Grenzwerte der Durchbiegung“: zweimal „l / 300“ rechts, die App wertet nur eine Zuordnung als richtig → Fehler. Lösung: Zuordnung per Text statt Index prüfen (App) + Build-Prüfung „keine doppelten Antworten in pair/mc“ (einzige betroffene Frage). Frage neu: rechte Seite eindeutig machen oder als Auswahlfragen; Erklärung ausführlich: w_inst = elastische Sofortdurchbiegung, w_fin = Enddurchbiegung mit Kriechen (w_inst + w_creep), w_net,fin = nur quasi-ständige Lasten mit Kriechen minus Überhöhung w_c; l/300 heißt z. B. bei 4 m höchstens 13,3 mm. Lernstand über EXTRA erhalten.
  2. Aufgabe `hydro-ue02-a28` Schritt 3 „Was brauchst du außerdem?“ zu ungenau – Ziel nennen, z. B. „Du kennst das Volumen. Welche zweite Größe brauchst du, um Kupfer- und Zinkanteil zu trennen?“. Alle 79 Schritte auf solche vagen Formulierungen prüfen („Womit beginnst du?“, „Wie geht es weiter?“ → jeweils sagen, wofür).
  3. `dap` matrix(c(5,6,7,8), nrow = 2) → „Spaltenweise“ ist richtig (byrow = FALSE ist Standard, Ergebnis [5 7; 6 8]). Erklärung ergänzen: mit byrow = TRUE zeilenweise.
  4. `bauko` γ_G ungünstig = 1,35 ist richtig. Erklärung ergänzen: 1,50 ist γ_Q für veränderliche Lasten (Nutzlast, Schnee, Wind); Eigengewicht ist genauer bekannt und streut weniger, deshalb kleinerer Beiwert; günstig γ_G = 1,00.
  Allgemein: Erklärungen bei Auswahlfragen sollen die naheliegende falsche Antwort mit erklären.
