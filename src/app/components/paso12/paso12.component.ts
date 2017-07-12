import { Component } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso12',
  templateUrl: './paso12.component.html',
  styles: []
})
export class Paso12Component {

  public pension:number;

  public lineChartData:any[] = [
  {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Evolución Pensión Mínima'},
  {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Evolución Pensión Máxima'},
  {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Gastos'}
  ];

  public lineChartLabels:Array<any> = ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10'];
  public lineChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true,   // minimum value will be 0.
                stepSize: 200,
                suggestedMax: 800, 
            }
        }]
    }
  };
  public lineChartColors:Array<any> = [
  { // azul
    backgroundColor: 'rgba(2, 117, 216, 0.3)',
    borderColor: 'rgba(2, 117, 216, 1)',
    pointBackgroundColor: 'rgba(2, 117, 216, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(2, 117, 216, 1)'
  },
  { // verde
    backgroundColor: 'rgba(92, 184, 92, 0.3)',
    borderColor: 'rgba(92, 184, 92, 1)',
    pointBackgroundColor: 'rgba(92, 184, 92, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(92, 184, 92, 1)'
  },
  { // rojo
    backgroundColor: 'rgba(217, 83, 79, 0.2)',
    borderColor: 'rgba(217, 83, 79, 1)',
    pointBackgroundColor: 'rgba(217, 83, 79, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(217, 83, 79, 1)'
  }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public graficaHelper = {
    temp1: null,
    temp2: null,
    temp3: null,
    mostrarTabla: false,
    mostrarMsg1: true,
    mostrarMsg2: false,
    mostrarMsg3: false,
    mostrarMsg4: false
  }


  constructor( private _datos:DatosService  ) { 
    this.pension = this._datos.getItem('resultado1');
    this.calcula10anos();
  }

  calcula10anos() {
  	//1.0276
  	//1.0025
  	//1.0226
  	//let ingresos_min = 2073.70;
  	//let ingresos_max = 2073.70;
  	//let gastos = 1658.96;

  	let ingresos_min:number[] = [];
  	let contador = 1;
  	let ing_min_temp = this._datos.getItem('pensionMax');
  	while (contador <= 10) {
  		ingresos_min.push(Math.round(ing_min_temp * 100) / 100);
  		contador++;
  		ing_min_temp = ing_min_temp * 1.0025;
  	}

  	let ingresos_max:number[] = [];
    contador = 1;
    let ing_max_temp = this._datos.getItem('pensionMax');
    while (contador <= 10) {
      ingresos_max.push(Math.round(ing_max_temp * 100) / 100);
      contador++;
      ing_max_temp = ing_max_temp * 1.0276;
    }

    let gastos:number[] = [];
    contador = 1;
    let gastos_temp = this._datos.getItem('pensionMax')*0.8;
    while (contador <= 10) {
      gastos.push(Math.round(gastos_temp * 100) / 100);
      contador++;
      gastos_temp = gastos_temp * 1.0226;
    }

    this.graficaHelper.temp3 = {data: ingresos_min, label: 'Evolución Pensión Mínima'};
    this.graficaHelper.temp2 = {data: ingresos_max, label: 'Evolución Pensión Máxima'};
    this.graficaHelper.temp1 = {data: gastos, label: 'Gastos'}
  }

  avanzaGrafica(paso:number) {
    switch(paso) {
      case 1:
        this.lineChartData[2] = this.graficaHelper.temp1;
        this.lineChartData = this.lineChartData.slice(); //Absurdo para forzar a angular a detectar el cambio
        this.graficaHelper.mostrarMsg1 = false;
        this.graficaHelper.mostrarMsg2 = true;
        this.graficaHelper.mostrarMsg3 = false;
        this.graficaHelper.mostrarMsg4 = false;
        break;

       case 2:
         this.lineChartData[1] = this.graficaHelper.temp2;
         this.lineChartData = this.lineChartData.slice(); //Absurdo para forzar a angular a detectar el cambio
        this.graficaHelper.mostrarMsg1 = false;
        this.graficaHelper.mostrarMsg2 = false;
        this.graficaHelper.mostrarMsg3 = true;
        this.graficaHelper.mostrarMsg4 = false;
         break;

       case 3:
         this.lineChartData[0] = this.graficaHelper.temp3;
         this.lineChartData = this.lineChartData.slice(); //Absurdo para forzar a angular a detectar el cambio
          this.graficaHelper.mostrarMsg1 = false;
          this.graficaHelper.mostrarMsg2 = false;
          this.graficaHelper.mostrarMsg3 = false;
          this.graficaHelper.mostrarMsg4 = true;
         break;
    }
  }
}
