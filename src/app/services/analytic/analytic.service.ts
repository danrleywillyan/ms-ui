import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DATA } from './data/fake-data';

@Injectable({
  providedIn: 'root'
})
export class AnalyticService {

  dataJSON: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    // load external dependent data
  }

  configJSON(option: any) {
    let json = {
      basic: {
        tableTitle: "Básica",
        viewType: [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
          {type: "transfer", btnTitle: "Repasses Financeiros"}
        ]
      },
      strategic: {
        tableTitle: "Estratégica",
        viewType: [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
        ]
      },
      specialized: {
        tableTitle: "Especializada",
        viewType: [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
          {type: "locale", btnTitle: "Regionalização"}
        ]
      },
      farmpop: {
        tableTitle: "Farmácia Popular",
        viewType: [
          {type: "transfer", btnTitle: "Repasses Financeiros"},
          {type: "pharmacy", btnTitle: "Farmácias"}
        ]
      }
    };
    
    return json[option];
  }

  dataAcre(){
    return [{municipio:"ACRELANDIA",valor:"101658"},
    {municipio:"ASSIS BRASIL",valor:"31913"},
    {municipio:"BRASILEIA",valor:"125046.1"},
    {municipio:"BUJARI",valor:"44189"},
    {municipio:"CAPIXABA",valor:"50313"},
    {municipio:"CRUZEIRO DO SUL",valor:"381648.7"},
    {municipio:"EPITACIOLANDIA",valor:"79226.7"},
    {municipio:"FEIJO",valor:"151064.5"},
    {municipio:"JORDAO",valor:"35735.3"},
    {municipio:"MANCIO LIMA",valor:"81584.3"},
    {municipio:"MANOEL URBANO",valor:"52757.2"},
    {municipio:"MARECHAL THAUMATURGO",valor:"80914.6"},
    {municipio:"PLACIDO DE CASTRO",valor:"85262.4"},
    {municipio:"PORTO ACRE",valor:"79566.1"},
    {municipio:"PORTO WALTER",valor:"63424.4"},
    {municipio:"RIO BRANCO",valor:"1928274.74"},
    {municipio:"RODRIGUES ALVES",valor:"81207.6"},
    {municipio:"SANTA ROSA DO PURUS",valor:"27997.6"},
    {municipio:"SENADOR GUIOMARD",valor:"99365.8"},
    {municipio:"SENA MADUREIRA",valor:"206847.19"},
    {municipio:"TARAUACA",valor:"195285.52"},
    {municipio:"XAPURI",valor:"83207.1"}];
  }

  dataInsulina(){
    return [{medicamento:"AGULHA, AÇO INOXIDÁVEL, P/ CANETA APLICADORA",pac:"0",fisico:"0",reprogramado:"0",contratado:"0",saldo:"0",distribuido:"0",previsto:"0"},
    {medicamento:"INSULINA ANÁLOGA DE AÇu00c3O RÁPIDA",pac:"0",fisico:null,reprogramado:"4500000",contratado:"0",saldo:"4500000",distribuido:"0",previsto:"0"},
    {medicamento:"INSULINA NPH -frascos",pac:"0",fisico:"15133619",reprogramado:"0",contratado:"0",saldo:"0",distribuido:"0",previsto:"0"},
    {medicamento:"INSULINA NPH - tubetes (caneta)",pac:"0",fisico:null,reprogramado:"11832600",contratado:"0",saldo:"11832600",distribuido:"0",previsto:"0"},
    {medicamento:"INSULINA REGULAR 100 UI/ML - frascos",pac:"0",fisico:"2738393",reprogramado:"2237200",contratado:"0",saldo:"2237200",distribuido:"0",previsto:"0"},
    {medicamento:"INSULINA REGULAR 100 UI/ML - tubetes (caneta)",pac:"0",fisico:null,reprogramado:"618800",contratado:"0",saldo:"618800",distribuido:"0",previsto:"0"},
    {medicamento:"INSULINAS ANÁLOGAS DE AÇu00c3O PROLONGADA",pac:"0",fisico:null,reprogramado:"0",contratado:"0",saldo:"0",distribuido:"0",previsto:"0"}];
  }

  getTable(coord, view, aggregator) {
    
    if(aggregator == "Acre"){
      this.dataJSON = this.dataAcre();
    }
    else if(aggregator == "INSULINA") this.dataJSON = this.dataInsulina();
    
    console.log(aggregator);

    return new Promise(resolve => {
      setTimeout(() => {
        if((aggregator != "Acre") && (aggregator != "INSULINA")){
            this.dataJSON = DATA[coord][view];
        }
        resolve(this.dataJSON);
      }, 300);
    });
  }

}
