import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { InputSueldoComponent } from './components/input-sueldo/input-sueldo.component';
import { Paso3Component } from './components/paso3/paso3.component';

const APP_ROUTES: Routes = [
	{ path: 'portada', component: PortadaComponent},
	{ path: 'paso2', component: InputSueldoComponent},
	{ path: 'paso3', component: Paso3Component},
	{ path: '**', pathMatch: 'full', redirectTo: 'portada'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);