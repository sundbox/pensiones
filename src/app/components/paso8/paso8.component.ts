import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso8',
  templateUrl: './paso8.component.html',
  styles: []
})
export class Paso8Component implements OnInit {

   resultado:number;
  constructor( private _datos:DatosService ) { 
    debugger;
  	this.resultado = this._datos.calculaEscenario(2);

    this.resultado = this._datos.getItem('baseCotizacionMensual')-this.resultado;


  	this._datos.setItem('resultado2', this.resultado);


  }

  ngOnInit() {
  }

}
