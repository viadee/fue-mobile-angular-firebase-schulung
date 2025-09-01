# Fruchtkorb

This project is for the angular and firebase course of the capstone project from the university of cologne.

## Initial Setup

1. Create and set up a [firebase project](https://console.firebase.google.com/)
   1. Create a project with a name that is all lower caps
   2. Initialize the Cloud Firestore with the test ruleset activated
2. Add angular fire to your project to connect your firebase and angular project
   1. run `ng add @angular/fire` and configure the setup like this:
   2. Select `Y`, when asked if you want to proceed
   3. Select `Firestore`, when asked what features you would like to set up
   4. Select your account
   5. Select your project
   6. Select `[CREATE NEW APP]`
   7. Use the same name as your angular project
3. We now build our project with `ng build`
4. Now we configure firebase hosting
   1. run `npm install -g firebase-tools`
   2. run `firebase login`
   3. run `firebase init hosting` and configure the setup like this:
   4. Select `Y`
   5. Select `Use existing project`
   6. Select your project
   7. Enter `dist/{your project name}/browser`
   8. Select `Y`
   9. Select `N`
   10. (If prompted to overwrite an existing index.html) Select `N`
5. Now we deploy the project by running `firebase deploy`
