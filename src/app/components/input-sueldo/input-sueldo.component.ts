import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-sueldo',
  templateUrl: './input-sueldo.component.html',
  styles: []
})
export class InputSueldoComponent implements OnInit {

	sueldo:number = null;
  meses_cotizados:number = 416;
  anyosCotizados:number = 34;

  constructor( private router:Router,
    private _datos:DatosService ) { 
    this.sueldo = this._datos.getItem('sueldo');
    this.meses_cotizados = this._datos.getItem('meses_cotizados');
    this.anyosCotizados = this._datos.getItem('anyosCotizados');
  }

  ngOnInit() {
  }

  siguiente(formulario:NgForm) {

    if(formulario.valid) {
      this._datos.setItem('sueldo', this.sueldo);
      this._datos.setItem('meses_cotizados', this.meses_cotizados);
      this._datos.setItem('anyosCotizados', this.anyosCotizados);
      this.router.navigate(['paso3']);
    }


  }
}