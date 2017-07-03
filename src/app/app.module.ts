
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HeaderComponent } from './components/header/header.component';
import { InputSueldoComponent } from './components/input-sueldo/input-sueldo.component';

import { DatosService } from './services/datos.service';

import { APP_ROUTING } from './app.routes';
import { Paso3Component } from './components/paso3/paso3.component';
import { Paso4Component } from './components/paso4/paso4.component';
import { Paso5Component } from './components/paso5/paso5.component';
import { Paso6Component } from './components/paso6/paso6.component';
import { Paso7Component } from './components/paso7/paso7.component';
import { Paso8Component } from './components/paso8/paso8.component';
import { Paso9Component } from './components/paso9/paso9.component';
import { Paso10Component } from './components/paso10/paso10.component';
import { Paso11Component } from './components/paso11/paso11.component';
import { Paso12Component } from './components/paso12/paso12.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    InputSueldoComponent,
    Paso3Component,
    Paso4Component,
    Paso5Component,
    Paso6Component,
    Paso7Component,
    Paso8Component,
    Paso9Component,
    Paso10Component,
    Paso11Component,
    Paso12Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    ChartsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"},
    DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
