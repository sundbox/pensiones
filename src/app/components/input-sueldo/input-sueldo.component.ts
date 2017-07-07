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
  anyosCotizados:number = 34;

  constructor( private router:Router,
    private _datos:DatosService ) { 
    this.sueldo = this._datos.getItem('sueldo');
    this.meses_cotizados = this._datos.getItem('meses_cotizados');
    this.anyosCotizados = this._datos.getItem('anyosCotizados');
  }

  ngOnInit() {
  }

  siguiente() {
  	

    if(this.sueldo > 0 && 
      this.sueldo != null && 
      this.anyosCotizados > 0 &&
      this.anyosCotizados <= 37 && 
      this.anyosCotizados != null) {
      this._datos.setItem('sueldo', this.sueldo);
    this._datos.setItem('meses_cotizados', this.meses_cotizados);
    this._datos.setItem('anyosCotizados', this.anyosCotizados);
    this.router.navigate(['paso3']);
  }

  
}
}