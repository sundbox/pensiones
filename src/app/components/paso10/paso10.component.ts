import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso10',
  templateUrl: './paso10.component.html',
  styles: []
})
export class Paso10Component implements OnInit {

  perdidaPoderPensionMax = null;
debugger;
  constructor(private _datos:DatosService) {
  	this.perdidaPoderPensionMax = this.calculaPerdidaPoderAdq(this._datos.calculaEscenario(2));
  }

  ngOnInit() {
  }

  private calculaPerdidaPoderAdq(pension:number):any{
  	let perdidaPoderPensionMax = 0;
    let pensionMax = pension;
  	debugger;
  	if(pension<=2573.7 && pension>=2073.7){
  		perdidaPoderPensionMax = pension - 2073.7;
      pensionMax = 2073.7
  	}

    this._datos.setItem('pensionMax', pensionMax);
  	return perdidaPoderPensionMax;
  }

}
