import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartCommittedPercentageData,
  chartCommittedHistoryData,
  chartCommittedEvolutionData,
  chartComparativeData
} from "../../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

    let chartCommittedPercentage = document.getElementById('chart-committed-percentage');
    
    parseOptions(Chart, chartOptions());

    let committedPercentageChart: any = new Chart(chartCommittedPercentage, {
      type: 'bar',
      options: chartCommittedPercentageData.options,
      data: chartCommittedPercentageData.data
    });

    let chartCommittedHistory = document.getElementById('chart-committed-history');
    
    parseOptions(Chart, chartOptions());

    let committedHistoryChart: any = new Chart(chartCommittedHistory, {
      type: 'bar',
      options: chartCommittedHistoryData.options,
      data: chartCommittedHistoryData.data
    });

    let chartCommittedEvolution = document.getElementById('chart-committed-evolution');
    
    parseOptions(Chart, chartOptions());

    let committedEvolutionChart: any = new Chart(chartCommittedEvolution, {
      type: 'bar',
      options: chartCommittedEvolutionData.options,
      data: chartCommittedEvolutionData.data
    });

    let chartComparative = document.getElementById('chart-comparative');
    
    parseOptions(Chart, chartOptions());

    let comparativeChart: any = new Chart(chartComparative, {
      type: 'bar',
      options: chartComparativeData.options,
      data: chartComparativeData.data
    });
  }

}
