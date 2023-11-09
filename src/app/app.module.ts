import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsTableComponent } from './models-table/models-table.component';
import { Error404Component } from './error-404/error-404.component';
import { ModelDetailComponent } from './model-detail/model-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsTableComponent,
    Error404Component,
    ModelDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp({"projectId":"zevehicles","appId":"1:872207582760:web:dca5f9e6fa712772da971d","storageBucket":"zevehicles.appspot.com","apiKey":"AIzaSyAzuumP1_iJOCJAMEXzm16tIcS3LuU5GLE","authDomain":"zevehicles.firebaseapp.com","messagingSenderId":"872207582760","measurementId":"G-0EK5MG8TQR"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
