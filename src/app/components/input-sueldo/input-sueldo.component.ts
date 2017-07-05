import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-input-sueldo',
  templateUrl: './input-sueldo.component.html',
  styles: []
})
export class InputSueldoComponent implements OnInit {

	sueldo:number = null;
  meses_cotizados:number = 416;

  constructor( private router:Router,
  				private _datos:DatosService ) { 
    this.sueldo = this._datos.getItem('sueldo');
    this.meses_cotizados = this._datos.getItem('meses_cotizados');
  }

  ngOnInit() {
  }

  siguiente() {
  	this._datos.setItem('sueldo', this.sueldo);
    this._datos.setItem('meses_cotizados', this.meses_cotizados)
  	this.router.navigate(['paso3']);
  }
}
