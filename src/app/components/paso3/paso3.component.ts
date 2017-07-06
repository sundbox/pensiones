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
    this._datos.setItem("pension2013", this.pension_mensual);

  }

  ngOnInit() {
  }

  evaluarYSeguir() {
    debugger;
  	if(this.pension_mensual > 2573.70) {
      this._datos.setItem('pension2013', this.pension_mensual);
      this._datos.setItem("pensionLim2013", 2573.70);
  		this.router.navigate(['/paso4']);
  	} else if(this.pension_mensual < 605.1) {
      this._datos.setItem('pension2013', this.pension_mensual);
      this._datos.setItem("pensionLim2013", 605.1);
      this.router.navigate(['/paso4']);
    } else {
      this._datos.setItem('pension2013', this.pension_mensual);
      this._datos.setItem("pensionLim2013", this.pension_mensual);
  		this.router.navigate(['/paso5']);
  	}
  }
}
