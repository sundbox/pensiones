import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html'
})
export class Paso4Component implements OnInit {

  pensionLim2013:number;
  gananciaPoder:boolean = false;
  constructor( private _datos:DatosService ) { 
  	this.pensionLim2013 = this._datos.getItem('pensionLim2013');
  	//Comprobamos si ha perdido o ganando
	let pension2013 = this._datos.getItem('pension2013');


  	if(this.pensionLim2013>pension2013){
  		this.gananciaPoder = true;
      this._datos.setItem('gananciaPoderCantidad',this.pensionLim2013-pension2013);
  	}

  }

  ngOnInit() {
  }

}
