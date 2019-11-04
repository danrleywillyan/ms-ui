import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
 
} from "../../../variables/charts";

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
   export class MedicationComponent implements OnInit {

    datasets:any = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    constructor() { }

  ngOnInit() {

    let chartCurrentValues = document.getElementById('chart-current-values');

    parseOptions(Chart, chartOptions());
    let currentValuesChart: any = new Chart(chartCurrentValues, {
      type: 'bar',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }

}
