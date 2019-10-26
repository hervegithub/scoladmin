import { LoginComponent } from './pages/login/login.component';
import { SchoolServiceService } from './share/school-service/school-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { SchoolFormComponent } from './pages/school-form/school-form.component';
import * as firebase from "firebase";

let  config = {
  apiKey: "AIzaSyD_CDzLe7ejPZXAprarYeGRkjRkbmV3Vx8",
  authDomain: "httpapirest.firebaseapp.com",
  databaseURL: "https://httpapirest.firebaseio.com",
  projectId: "httpapirest",
  storageBucket: "httpapirest.appspot.com",
  messagingSenderId: "717738907388",
  appId: "1:717738907388:web:df692c38df4d03b8a7a979",
  measurementId: "G-Q535YNCX08"
};
firebase.initializeApp(config);


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,  
    AngularFirestoreModule,
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SchoolFormComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
