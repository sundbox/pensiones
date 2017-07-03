import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styles: []
})
export class Paso3Component implements OnInit {
  pension_mensual:number = null; 
  constructor(private _datos:DatosService,
  				private router:Router ) { 
  	this.pension_mensual = this._datos.calculaEscenario(1);

  }

  ngOnInit() {
  }

  evaluarYSeguir() {
  	if(this.pension_mensual > 2573.70) {
      this._datos.setItem('pension_real', this.pension_mensual);
      this._datos.setItem("resultado1", 2573.70);
  		this.router.navigate(['/paso4']);
  	} else {
      this._datos.setItem('pension_real', this.pension_mensual);
      this._datos.setItem("resultado1", this.pension_mensual);
  		this.router.navigate(['/paso5']);
  	}
  }


}
