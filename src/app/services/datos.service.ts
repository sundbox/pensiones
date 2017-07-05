import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  data:any[] = [];

  meses_cotizados:number = 416;
  meses_computables:number = 300;

  divisor:number=350;

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

		let base_cotizacion_25 = this.getItem('sueldo')  * Math.pow(1 + this.ipc, 23);

		let base_cotizacion = (base_cotizacion_25 * this.meses_computables) / this.divisor;
		
		if(this.meses_cotizados >= escenario.tramo4.max) {
		  return base_cotizacion * escenario.tramo4.porcentaje;
		} else {
		  if(this.meses_cotizados == escenario.tramo1.max) {
		    return base_cotizacion * escenario.tramo1.porcentaje;
		  } else {
		    if(this.meses_cotizados <= escenario.tramo2.max) {
		      return base_cotizacion * 
		          ( escenario.tramo2.porcentaje + ((this.meses_cotizados - escenario.tramo2.min) * 
		          	escenario.tramo2.porcentaje));
		    } else {
		      if(this.meses_cotizados <= escenario.tramo3.max) {
		        return ( escenario.tramo1.porcentaje +
		        		 (
		        		 	(escenario.tramo2.max - escenario.tramo2.min) * 
		              		escenario.tramo2.porcentaje
		              	 ) + 
		        		(
		        			(this.meses_cotizados - escenario.tramo3.min) *
		              		escenario.tramo3.porcentaje)
		        		)
		        	* base_cotizacion;

		       

		      } else {
		        return "SUS MUERTO";
		      }
		    }
		  }
		}
	}

}
