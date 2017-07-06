import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso8',
  templateUrl: './paso8.component.html',
  styles: []
})
export class Paso8Component implements OnInit {

   resultado:number;
   resultadoAbs:number;
   pensionLimCN:number;
   casoEspecialPBaja37A:boolean=false;
  constructor( private _datos:DatosService ) { 
    debugger;
  	this.resultado = this._datos.calculaEscenario(2);

    this._datos.setItem('pensionCN', this.resultado);

    let pensionLimCN = this._datos.pensionLimitadaPara2013yCambioNorma(this.resultado);

    this._datos.setItem('pensionLimCN', pensionLimCN);

    this.pensionLimCN = pensionLimCN;

    this.resultado = this._datos.getItem('baseCotizacionMensual')-pensionLimCN;

  	this._datos.setItem('perdidaPoderCN', this.resultado);

    //Si en 2013 y en CN ha obtenido beneficio, se indica en la vista
    let perdidaPoder2013 = this._datos.getItem('perdidaPoder2013');
    if(this.resultado<0){
      this.resultadoAbs = -1*this.resultado;
    }

    //Caso especial. Si la cotización se le ha elevado a la mínima (resultado<0) y ha trabajado 37 años exactamente, no afectará
    let anyosCotizados = this._datos.getItem('anyosCotizados');

    if(this.resultado<0 && anyosCotizados == 37){
      this.casoEspecialPBaja37A = true;
    }


  }

  ngOnInit() {
  }

}
