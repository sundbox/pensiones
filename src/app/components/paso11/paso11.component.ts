import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso11',
  templateUrl: './paso11.component.html',
  styles: []
})
export class Paso11Component implements OnInit {

  pension:number;
  constructor( private _datos:DatosService ) { 
  	this.pension = this._datos.getItem('resultado1');
  }

  ngOnInit() {
  }

}
