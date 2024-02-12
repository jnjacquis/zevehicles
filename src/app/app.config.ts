import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AuthenticationService } from './services/authentication.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      HttpClientModule,
      NoopAnimationsModule,
      provideFirebaseApp(() => initializeApp({ "projectId": "zevehicles", "appId": "1:872207582760:web:dca5f9e6fa712772da971d", "storageBucket": "zevehicles.appspot.com", "apiKey": "AIzaSyAzuumP1_iJOCJAMEXzm16tIcS3LuU5GLE", "authDomain": "zevehicles.firebaseapp.com", "messagingSenderId": "872207582760", "measurementId": "G-0EK5MG8TQR" })),      
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      provideAuth(() => getAuth()),
    ]), 
    AuthenticationService
  ]
};
