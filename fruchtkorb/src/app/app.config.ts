import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "fruchtkorb-34c87", appId: "1:913814188765:web:dfd8db31fadf830a622134", storageBucket: "fruchtkorb-34c87.firebasestorage.app", apiKey: "AIzaSyC7XdPnyBcVYOiG53g1BfNjm2HdGpgzme0", authDomain: "fruchtkorb-34c87.firebaseapp.com", messagingSenderId: "913814188765" })), provideFirestore(() => getFirestore())
  ]
};
