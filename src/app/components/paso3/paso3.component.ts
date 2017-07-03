import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styles: []
})
export class Paso3Component implements OnInit {
  pension_mensual:number = null; 
  constructor(private _datos:DatosService ) { 
  	this.pension_mensual = this._datos.calculaEscenario(1);
  }

  ngOnInit() {
  }

}
