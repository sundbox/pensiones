import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-paso12',
  templateUrl: './paso12.component.html',
  styles: []
})
export class Paso12Component implements OnInit {

  public pension:number;

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Evolución Pensión Máxima'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Evolución Pensión Mínima'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Gastos'}
  ];

  public lineChartLabels:Array<any> = ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10'];
  public lineChartOptions:any = {
    responsive: true
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


  constructor( private _datos:DatosService  ) { 
  	this.pension = this._datos.getItem('resultado1');
  	this.calcula10anos();
  }

  ngOnInit() {
  }
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
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
  	let ing_min_temp = 2073.70;
  	while (contador <= 10) {
  		ingresos_min.push(ing_min_temp);
  		contador++;
  		ing_min_temp = ing_min_temp * 1.0025;
  	}

  	let ingresos_max:number[] = [];
  	 contador = 1;
  	let ing_max_temp = 2073.70;
  	while (contador <= 10) {
  		ingresos_max.push(ing_max_temp);
  		contador++;
  		ing_max_temp = ing_max_temp * 1.0276;
  	}

  	let gastos:number[] = [];
  	contador = 1;
  	let gastos_temp = 1658.96;
  	while (contador <= 10) {
  		gastos.push(gastos_temp);
  		contador++;
  		gastos_temp = gastos_temp * 1.0276;
  	}

  	this.lineChartData = [
    {data: ingresos_min, label: 'Evolución Pensión Mínima'},
    {data: ingresos_max, label: 'Evolución Pensión Máxima'},
    {data: gastos, label: 'Gastos'}
  ];
  }
}
