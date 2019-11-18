import { Component, OnInit } from '@angular/core';
import { AnalyticService } from '../../../services/analytic/analytic.service';
import Chart from 'chart.js';

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartPercentData,
} from "../../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pageData = [];

  gCurrentData: any;
  gCommittedData: any;
  gHistoryData: any;
  gEvolutionData: any;
  gCommittedPaidData: any;
  gRapCurrentData: any;
  gRapAccumulatedData: any;
  gControlData: any;


  constructor(
    private analyticService: AnalyticService,
  ) { }

  ngOnInit() {

    this.analyticService.getDashGraph()
    .then((data: any) => {
      this.pageData = data;

      this.gCurrentData = JSON.parse(JSON.stringify(chartExample1.data));
      this.gCurrentData.datasets[0].data = Object.values(this.pageData[0]).map((e: any) => (Object.values(e)[1]));
      this.gCurrentData.datasets[1].data = Object.values(this.pageData[0]).map((e: any) => (Object.values(e)[2]));
      this.gCurrentData.datasets[2].data = Object.values(this.pageData[0]).map((e: any) => (Object.values(e)[3]));
      this.gCurrentData.datasets[3].data = Object.values(this.pageData[0]).map((e: any) => (Object.values(e)[4]));
      this.gCurrentData.datasets[4].data = Object.values(this.pageData[0]).map((e: any) => (Object.values(e)[5]));
      this.gCurrentData.datasets[5].data = Object.values(this.pageData[0]).map((e: any) => (Object.values(e)[6]));

      this.gCommittedData = JSON.parse(JSON.stringify(chartExample1.data));
      this.gCommittedData.datasets = this.gCommittedData.datasets.slice(1,2);
      this.gCommittedData.datasets[0].data = Object.values(this.pageData[1]).map((e: any) => (Object.values(e)[1]));

      let chartCurrentValues = document.getElementById('chart-current');
      parseOptions(Chart, chartOptions());
      let currentValuesChart: any = new Chart(chartCurrentValues, {
        type: 'bar',
        options: chartExample1.options,
        data: this.gCurrentData
      });

      let chartCommittedPercentage = document.getElementById('chart-committed');
      parseOptions(Chart, chartOptions());
      let committedPercentageChart: any = new Chart(chartCommittedPercentage, {
        type: 'bar',
        options: chartPercentData.options,
        data: this.gCommittedData
      });

      let chartCommittedHistory = document.getElementById('chart-history');
      parseOptions(Chart, chartOptions());
      let committedHistoryChart: any = new Chart(chartCommittedHistory, {
        type: 'bar',
        options: chartExample1.options,
        // data: chartCommittedHistoryData.data
      });

      let chartCommittedEvolution = document.getElementById('chart-evolution');
      parseOptions(Chart, chartOptions());
      let committedEvolutionChart: any = new Chart(chartCommittedEvolution, {
        type: 'bar',
        options: chartExample1.options,
        // data: chartCommittedEvolutionData.data
      });

      let chartComparative = document.getElementById('chart-committedpaid');
      parseOptions(Chart, chartOptions());
      let comparativeChart: any = new Chart(chartComparative, {
        type: 'bar',
        options: chartExample1.options,
        // data: chartComparativeData.data
      });

      let chartRapCurrent = document.getElementById('chart-rapcurrent');
      parseOptions(Chart, chartOptions());
      let rapcurrentChart: any = new Chart(chartRapCurrent, {
        type: 'bar',
        options: chartExample1.options,
        // data: chartComparativeData.data
      });

      let chartRapAccumulated = document.getElementById('chart-rapaccumulated');
      parseOptions(Chart, chartOptions());
      let rapaccumulatedChart: any = new Chart(chartRapAccumulated, {
        type: 'bar',
        options: chartExample1.options,
        // data: chartComparativeData.data
      });

      let chartControl = document.getElementById('chart-control');
      parseOptions(Chart, chartOptions());
      let controlChart: any = new Chart(chartControl, {
        type: 'bar',
        options: chartExample1.options,
        // data: chartComparativeData.data
      });
    });
  }
}
