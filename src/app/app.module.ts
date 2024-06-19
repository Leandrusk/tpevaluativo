import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importaciones de Firebase
import { environment } from 'src/environments/environments'; //vincula a la BD con la app
import { AngularFireModule } from '@angular/fire/compat' // Trabaja con las colecciones de información
import { AngularFireAuthModule } from '@angular/fire/compat/auth' //Trabaja con la autentificación
import {AngularFireStorageModule } from '@angular/fire/compat/storage'//Trabaja con imagenes y archivos


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
