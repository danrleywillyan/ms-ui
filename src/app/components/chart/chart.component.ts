import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

import {
  chartOptions,
  parseOptions
} from "../../variables/charts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';
  LineChart=[];

  constructor() { }

  ngOnInit() {
    // Line chart:
    this.LineChart = new Chart('chartComponent', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets: [{
          label: 'Number of Items Sold in Months',
          data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth: 1
        }]
      }, 
      options: {
        title:{
          text:"Line Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
    //  = document.getElementById('chartComponent').getContext('2d');
    //  let chartComponent = this.chart.nativeElement.getContext('2d');
    // let chart = new Chart(chartComponent, {
    //   type: 'line',

    //   data: {
    //     labels: ['2000', '2001', '2002', '2003', '2004', '2005'],
                    
    //     datasets: [
    //         {
    //             label: 'Crecimento Populacional',
    //             data: [173448346, 175885229, 178276128, 180619108, 182911487, 185150806]
    //         }
    //     ]
    //   }
    // }) 
  }
  // ngAfterViewInit() { this.createChart() }

  // createChart(){
  //   const ctx = this.chart.nativeElement.getContext('2d');
  // }

}
