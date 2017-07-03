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
  constructor( private router:Router,
  				private _datos:DatosService ) { }

  ngOnInit() {
  }

  siguiente() {
  	this._datos.setItem('sueldo', this.sueldo);
  	this.router.navigate(['paso3']);
  }
}
