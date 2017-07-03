import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso6',
  templateUrl: './paso6.component.html',
  styles: []
})
export class Paso6Component implements OnInit {
  sueldo:number;
  pension:number;

  resultado:number; 
  constructor( private _datos:DatosService ) { 
  	this.resultado = this._datos.calculaEscenario(1) - this._datos.getItem('resultado1');
  }

  ngOnInit() {
  }

}
