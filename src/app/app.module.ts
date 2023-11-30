import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsTableComponent } from './views/models-table/models-table.component';
import { Error404Component } from './views/error-404/error-404.component';
import { ModelDetailComponent } from './views/model-detail/model-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrandsTableComponent } from './views/brands-table/brands-table.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ModelCardComponent } from './views/model-card/model-card.component';
import { AuthenticationService } from './services/authentication.service';
import { UserSessionComponent } from './views/user-session/user-session.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsTableComponent,
    Error404Component,
    ModelDetailComponent,
    BrandsTableComponent,
    ModelCardComponent,
    UserSessionComponent,
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent
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
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp({ "projectId": "zevehicles", "appId": "1:872207582760:web:dca5f9e6fa712772da971d", "storageBucket": "zevehicles.appspot.com", "apiKey": "AIzaSyAzuumP1_iJOCJAMEXzm16tIcS3LuU5GLE", "authDomain": "zevehicles.firebaseapp.com", "messagingSenderId": "872207582760", "measurementId": "G-0EK5MG8TQR" })),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [ importProvidersFrom(HttpClientModule), AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
