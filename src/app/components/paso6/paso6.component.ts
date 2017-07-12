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
  resultadoAbs:number; 
  constructor( private _datos:DatosService ) {
  	//this.resultado = this._datos.calculaEscenario(1) - this._datos.getItem('resultado1');
    let perdidaPoder2013 = this._datos.getItem('baseCotizacionMensual')-this._datos.getItem('pensionLim2013');
    this._datos.setItem('perdidaPoder2013',perdidaPoder2013);
    this.resultado = perdidaPoder2013;

    if(this.resultado<0){
      this.resultadoAbs = this._datos.getItem('gananciaPoderCantidad');
      
    }
    
  }

  ngOnInit() {
  }

}
