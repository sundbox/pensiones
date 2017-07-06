import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  data:any[] = [];

  meses_cotizados:number = 416;
  meses_computables:number = 300;

  divisor:number=350/12;

  cesta_consumo:number = 1658.96;

  ipc:number = 0.0226;

  resultado1:number;
  resultado2:number;
  resultado3:number;

  escenario1 = {
  	pension_max: 2573.70,
  	pension_min_sin_conyugue: 605.10,
  	tramo1: {
  		min: 0,
  		max: 180,
  		porcentaje: 0.5
  	}, //Primeros 180 meses
  	tramo2: {
  		min: 181,
  		max: 343,
  		porcentaje: 0.0021
  	}, //entre 181 y 343
  	tramo3: {
  		min: 344,
  		max: 426,
  		porcentaje: 0.0019
  	}, //entre 344 y 426
  	tramo4: {
  		min: 426,
  		max: 999999,
  		porcentaje: 1
  	} //a partir de 426
  }

  escenario2 = {
  	pension_max: 2573.70,
  	pension_min_sin_conyugue: 605.10,
  	tramo1: {
  		min: 0,
  		max: 180,
  		porcentaje: 0.5
  	}, //Primeros 180 meses
  	tramo2: {
  		min: 181,
  		max: 428,
  		porcentaje: 0.0019
  	}, //entre 181 y 343
  	tramo3: {
  		min: 429,
  		max: 443,
  		porcentaje: 0.0018
  	}, //entre 344 y 426
  	tramo4: {
  		min: 444,
  		max: 999999,
  		porcentaje: 1
  	} //a partir de 426
  }

  escenario3 = {
  	pension_max: 2073.70,
  	pension_min_sin_conyugue: 605.10,
  	tramo1: {
  		min: 0,
  		max: 180,
  		porcentaje: 0.5
  	}, //Primeros 180 meses
  	tramo2: {
  		min: 181,
  		max: 428,
  		porcentaje: 0.0019
  	}, //entre 181 y 343
  	tramo3: {
  		min: 429,
  		max: 443,
  		porcentaje: 0.0018
  	}, //entre 344 y 426
  	tramo4: {
  		min: 444,
  		max: 999999,
  		porcentaje: 1
  	} //a partir de 426
  }

	constructor() {
		this.cargarData();
	}

	actualizarData() {
		localStorage.setItem("data", JSON.stringify(this.data) );
	}

	cargarData() {
		if(localStorage.getItem("data")) {
			this.data = JSON.parse( localStorage.getItem("data") );
		}
	}

	setItem(nombre:string, valor:any) {
		if(this.data.length > 0) {
			let existe = false;
			for(let key in this.data) {
				if(this.data[key].nombre === nombre) { //Si existe
					 this.data[key].nombre = nombre;
					 this.data[key].valor = valor;
					 existe = true;
					 break;
				} 
			}

			if(existe === false) {
				this.data.push({nombre: nombre, valor: valor});
			}

		} else {
			this.data.push({nombre: nombre, valor: valor});
		}
		this.actualizarData();
	}

	getItem(nombre) {
		for(let key in this.data) {
			if(this.data[key].nombre == nombre) {
				return this.data[key].valor;
			}
		}
	}

	calculaEscenario(numero:number):any {
		let escenario = null;
		switch(numero) {
			case 1:
				escenario = this.escenario1;
				break;

			case 2:
				escenario = this.escenario2;
				break;

			case 3:
				escenario = this.escenario3;
				break;
		}

		let numAnyosCotizados = this.getItem('anyosCotizados');

		let numMesesCotizados = numAnyosCotizados * 12;


		//let base_cotizacion_25 = this.getItem('sueldo')  * Math.pow(1 + this.ipc, 23);

		debugger;

		let base_cotizacion_25 = this.calculoBaseCotizacionAnual(this.getItem('sueldo'));

		let base_cotizacion = base_cotizacion_25 / this.divisor;

		let base_cotizacion_mensual = base_cotizacion/12;

		this.setItem('baseCotizacionMensual', base_cotizacion_mensual);
		
		if(numMesesCotizados >= escenario.tramo4.min) {
		  return base_cotizacion_mensual * escenario.tramo4.porcentaje;
		} else {
		  if(numMesesCotizados == escenario.tramo1.max) {
		    return base_cotizacion_mensual * escenario.tramo1.porcentaje;
		  } else {
		    if(numMesesCotizados <= escenario.tramo2.max) {
		      return base_cotizacion_mensual * 
		          ( escenario.tramo1.porcentaje + ((numMesesCotizados - escenario.tramo2.min) * 
		          	escenario.tramo2.porcentaje));
		    } else {
		      if(numMesesCotizados <= escenario.tramo3.max) {
		        return ( escenario.tramo1.porcentaje +
		        		 (
		        		 	(escenario.tramo2.max - escenario.tramo2.min) * 
		              		escenario.tramo2.porcentaje
		              	 ) + 
		        		(
		        			(numMesesCotizados - escenario.tramo3.min) *
		              		escenario.tramo3.porcentaje)
		        		)
		        	* base_cotizacion_mensual;

		       

		      } else {
		        return "SUS MUERTO";
		      }
		    }
		  }
		}
	}

	calculoBaseCotizacionAnual(sueldo:number):any{

		let baseCotizacionTotal = 0;

		let sueldoAnual = sueldo * 12;

		let primeros2Anyos = sueldoAnual * 2;

		let sumAnyo25A3 = 0;

		for (var i=3; i<=25; i++) {
      		sumAnyo25A3 += sueldoAnual * Math.pow(1 + this.ipc,i);
    	}

    	baseCotizacionTotal = primeros2Anyos+sumAnyo25A3;

    	return baseCotizacionTotal;

	}

	pensionLimitadaPara2013yCambioNorma(pension:number):any{
		if(pension>2573.7){
			pension = 2573.7;
		}else if(pension<605.10){
			pension = 605.10;
		}
		return pension;
	}

}

