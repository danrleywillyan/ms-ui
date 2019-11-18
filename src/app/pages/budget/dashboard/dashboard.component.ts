import { Component, OnInit } from '@angular/core';
import { AnalyticService } from '../../../services/analytic/analytic.service';
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
  pageData = [];

  constructor(
    private analyticService: AnalyticService,
  ) { }

  ngOnInit() {

    this.analyticService.getDashGraph()
    .then((data: any) => {
      this.pageData = data;
      this.graphCurrent(this.pageData);
    });

    let chartCurrentValues = document.getElementById('chart-current');
    parseOptions(Chart, chartOptions());
    let currentValuesChart: any = new Chart(chartCurrentValues, {
      type: 'bar',
      options: chartExample1.options,
      data: chartExample1.data
    });

    let chartCommittedPercentage = document.getElementById('chart-committed');
    parseOptions(Chart, chartOptions());
    let committedPercentageChart: any = new Chart(chartCommittedPercentage, {
      type: 'bar',
      options: chartCommittedPercentageData.options,
      data: chartCommittedPercentageData.data
    });

    let chartCommittedHistory = document.getElementById('chart-history');
    parseOptions(Chart, chartOptions());
    let committedHistoryChart: any = new Chart(chartCommittedHistory, {
      type: 'bar',
      options: chartCommittedHistoryData.options,
      data: chartCommittedHistoryData.data
    });

    let chartCommittedEvolution = document.getElementById('chart-evolution');
    parseOptions(Chart, chartOptions());
    let committedEvolutionChart: any = new Chart(chartCommittedEvolution, {
      type: 'bar',
      options: chartCommittedEvolutionData.options,
      data: chartCommittedEvolutionData.data
    });

    let chartComparative = document.getElementById('chart-committedpaid');
    parseOptions(Chart, chartOptions());
    let comparativeChart: any = new Chart(chartComparative, {
      type: 'bar',
      options: chartComparativeData.options,
      data: chartComparativeData.data
    });

    let chartRapCurrent = document.getElementById('chart-rapcurrent');
    parseOptions(Chart, chartOptions());
    let rapcurrentChart: any = new Chart(chartRapCurrent, {
      type: 'bar',
      options: chartComparativeData.options,
      data: chartComparativeData.data
    });

    let chartRapAccumulated = document.getElementById('chart-rapaccumulated');
    parseOptions(Chart, chartOptions());
    let rapaccumulatedChart: any = new Chart(chartRapAccumulated, {
      type: 'bar',
      options: chartComparativeData.options,
      data: chartComparativeData.data
    });

    let chartControl = document.getElementById('chart-control');
    parseOptions(Chart, chartOptions());
    let controlChart: any = new Chart(chartControl, {
      type: 'bar',
      options: chartComparativeData.options,
      data: chartComparativeData.data
    });
  }

  graphCurrent(data){
    console.log(data);
  }

  graphCommitted(data){
    console.log(data);
  }

  graphHistory(data){
    console.log(data);
  }
  
  graphEvolution(data){
    console.log(data);
  }

  graphCommittedPaid(data){
    console.log(data);
  }

  graphRapCurrent(data){
    console.log(data);
  }

  graphRapAccumulated(data){
    console.log(data);
  }

  graphControl(data){
    console.log(data);
  }
}
