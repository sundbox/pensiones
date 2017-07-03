import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { InputSueldoComponent } from './components/input-sueldo/input-sueldo.component';
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

const APP_ROUTES: Routes = [
	{ path: 'portada', component: PortadaComponent},
	{ path: 'paso2', component: InputSueldoComponent},
	{ path: 'paso3', component: Paso3Component},
	{ path: 'paso4', component: Paso4Component},
	{ path: 'paso5', component: Paso5Component},
	{ path: 'paso6', component: Paso6Component},
	{ path: 'paso7', component: Paso7Component},
	{ path: 'paso8', component: Paso8Component},
	{ path: 'paso9', component: Paso9Component},
	{ path: 'paso10', component: Paso10Component},
	{ path: 'paso11', component: Paso11Component},
	{ path: 'paso12', component: Paso12Component},
	{ path: '**', pathMatch: 'full', redirectTo: 'portada'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);