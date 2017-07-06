import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso8',
  templateUrl: './paso8.component.html',
  styles: []
})
export class Paso8Component implements OnInit {

   resultado:number;
   gananciaPoder2013YCN:boolean = false;
  constructor( private _datos:DatosService ) { 
    debugger;
  	this.resultado = this._datos.calculaEscenario(2);

    this._datos.setItem('pensionCN', this.resultado);

    let pensionLimCN = this._datos.pensionLimitadaPara2013yCambioNorma(this.resultado);

    this._datos.setItem('pensionLimCN', pensionLimCN);

    this.resultado = this._datos.getItem('baseCotizacionMensual')-pensionLimCN;

  	this._datos.setItem('perdidaPoderCN', this.resultado);

    //Si en 2013 y en CN ha obtenido beneficio, se indica en la vista
    let perdidaPoder2013 = this._datos.getItem('perdidaPoder2013');
    if(perdidaPoder2013<0 && this.resultado<0){
      this.gananciaPoder2013YCN = true;
      this.resultado = -1*this.resultado;
    }


  }

  ngOnInit() {
  }

}
