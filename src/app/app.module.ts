import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp({"projectId":"zevehicles","appId":"1:872207582760:web:dca5f9e6fa712772da971d","storageBucket":"zevehicles.appspot.com","apiKey":"AIzaSyAzuumP1_iJOCJAMEXzm16tIcS3LuU5GLE","authDomain":"zevehicles.firebaseapp.com","messagingSenderId":"872207582760","measurementId":"G-0EK5MG8TQR"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
