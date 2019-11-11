import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import Chart from 'chart.js';

import {
  chartOptions,
  parseOptions,
  chartExample1,
} from "../../../../variables/charts";

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  public medicines = [ {id: 1, name: 'Insulina', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 134200 }, selection: 'RNA', price: 0.84} ];
  public states = [ [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
    ], [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
    ], [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
    ], [
      {id: 1, name: 'Acre', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 12000, RNA: 13400, LSTM: 13200 }, selection: 'RNA'},
    ],
  ];

  public totalStates = [
      {id: 1, name: 'Acre', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 2, name: 'Alagoas', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 3, name: 'Amapá', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 4, name: 'Amazonas', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 5, name: 'Bahia', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 6, name: 'Ceará', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 7, name: 'Distrito Federal', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 8, name: 'Espírito Santo', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 9, name: 'Goiás', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 10, name: 'Maranhão', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 11, name: 'Mato Grosso', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 12, name: 'mato Grosso do Sul', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 13, name: 'Minas Gerais', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 14, name: 'Pará', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 15, name: 'Paraíba', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 16, name: 'Paraná', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 17, name: 'Pernambuco', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 18, name: 'Piauí', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 19, name: 'Rio de Janeiro', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 20, name: 'Rio Grande do Norte', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 21, name: 'Rio Grande do Sul', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 22, name: 'Rondônia', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 23, name: 'Roraima', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 24, name: 'Santa Catarina', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 25, name: 'São Paulo', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 26, name: 'Sergipe', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
      {id: 27, name: 'Tocantins', predictions: { ARIMA: 120000, RNA: 134000, LSTM: 132000 }, selection: 'RNA'},
    ];

  public medicine: any;
  public selectedStates = [];
  public valuesChart: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.medicine = this.medicines.filter((d) => `${d.id}` === params.get('id'))[0];
      let chartValues = document.getElementById('chart-values');
      
      parseOptions(Chart, chartOptions());

      this.valuesChart = new Chart(chartValues, {
        type: 'line',
        options: chartExample1.options,
        data: this.buildData()
      });
    });
  }

  computeValue(state) {
    return state.predictions[state.selection] * this.medicine.price;
  }

  buildData() {
    let filteredStates;
    if(!this.selectedStates.length) {
      filteredStates = this.states;
    } else {
      filteredStates = this.states.map((p) => p.filter((s) => this.selectedStates.includes(s.name)));
    }
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const labels = [];
    const datasets = [
      {
        label: 'ARIMA',
        borderWidth: 2,
        data: [],
        backgroundColor: [],
        borderColor: [],
      }, {
        label: 'RNA',
        borderWidth: 2,
        data: [],
        backgroundColor: [],
        borderColor: [],
      }, {
        label: 'LSTM',
        borderWidth: 2,
        data: [],
        backgroundColor: [],
        borderColor: [],
      }
    ];
    const curr = new Date().getMonth();
    for (let i = 0; i < 4; i++) {
      labels.push(months[(curr + i) % months.length]);
      for(let j = 0; j < 3; j++) {
        datasets[j].data.push(filteredStates[i].reduce((a,b) => a + b.predictions[datasets[j].label], 0));
        datasets[j].backgroundColor.push(chartExample1.data.datasets[j].backgroundColor[0])
        datasets[j].borderColor.push(chartExample1.data.datasets[j].borderColor[0])
      }
    }

    const data = {
      labels,
      datasets,
    };
    console.log(chartExample1.options);
    return data;
  }

  selectAll($event) {
    const check = $event.target.checked;
    //@ts-ignore
    // eslint-disable-next-line
    $('td input:checkbox').prop('checked',check);
    this.selectStates();
  }

  selectStates() {
    //@ts-ignore
    // eslint-disable-next-line
    this.selectedStates =  $('td input:checkbox:checked').map((i,a) => a.name).toArray();
    this.valuesChart.data = this.buildData();
    this.valuesChart.update();
  }
}
