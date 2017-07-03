import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html'
})
export class Paso4Component implements OnInit {

  pension:number;
  constructor( private _datos:DatosService ) { 
  	this.pension = this._datos.getItem('resultado1');
  }

  ngOnInit() {
  }

}
