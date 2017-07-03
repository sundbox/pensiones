
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HeaderComponent } from './components/header/header.component';
import { InputSueldoComponent } from './components/input-sueldo/input-sueldo.component';

import { DatosService } from './services/datos.service';

import { APP_ROUTING } from './app.routes';
import { Paso3Component } from './components/paso3/paso3.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    InputSueldoComponent,
    Paso3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"},
    DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
