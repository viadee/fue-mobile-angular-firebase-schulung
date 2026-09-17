# Fruchtshop

Dieses Repository gehört zur Angular- und Firebase-Schulung im Capstone-Projekt der Universität zu Köln.

## Projekte

- `fruit-shop`: Ausgangsprojekt für die Coding-Aufgaben
- `solutions.md`: Musterlösungen zu den einzelnen Aufgaben

## Voraussetzungen

- [Node.js](https://nodejs.org/) in einer mit Angular 20 kompatiblen Version
- npm (ist in der Node.js-Installation enthalten)

## Anwendung lokal starten

Führe im Verzeichnis `fruit-shop` folgende Befehle aus:

```bash
npm ci
npm start
```

Anschließend ist die Anwendung unter <http://localhost:4200> erreichbar.

## Firebase einrichten (optional)

Firebase wird nur benötigt, wenn du die Anwendung mit Firestore und Firebase Hosting verbinden möchtest. Für die lokalen Coding-Aufgaben ist dieser Abschnitt optional.

Führe die folgenden Befehle im Verzeichnis des jeweiligen Angular-Projekts aus.

1. Erstelle ein Projekt in der [Firebase Console](https://console.firebase.google.com/).
   1. Verwende einen Projektnamen, der ausschließlich aus Kleinbuchstaben besteht.
   2. Erstelle eine Cloud-Firestore-Datenbank und aktiviere zunächst die Testregeln.
2. Verbinde das Angular-Projekt mit Firebase.
   1. Installiere die Firebase CLI global:
      ```bash
        npm install -g firebase-tools
      ```
   2. Melde dich bei Firebase an:
      ```bash
        firebase login
      ```
   3. Installiere und konfiguriere AngularFire:
      ```bash
        ng add @angular/fire
      ```
   4. Bestätige die Installation mit `Y`.
   5. Wähle `Firestore` als gewünschtes Feature aus.
   6. Wähle dein Google-Konto aus.
   7. Wähle dein Firebase-Projekt aus.
   8. Wähle `[CREATE NEW APP]`.
   9. Verwende denselben Namen wie für dein Angular-Projekt.
3. Erstelle den Produktions-Build:
   ```bash
    ng build
   ```
4. Konfiguriere Firebase Hosting:

   ```bash
    firebase init hosting
   ```

   1. Bestätige den Vorgang mit `Y`.
   2. Wähle `Use an existing project`.
   3. Wähle dein Firebase-Projekt aus.
   4. Gib `dist/fruit-shop/browser` als öffentliches Verzeichnis an.
   5. Beantworte die Frage nach einer Single-Page Application mit `Y`.
   6. Beantworte die Frage nach automatischen Builds und Deployments über GitHub mit `N`.
   7. Falls die vorhandene `index.html` überschrieben werden soll, antworte mit `N`.

5. Veröffentliche die Anwendung:
   ```bash
    firebase deploy
   ```
