import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticService {

  dataJSON: any;
  public urlAPI = `http://${location.hostname}:`;
  public port = '8080/budget';
  constructor(private http: HttpClient) {
    if (this.urlAPI.includes('localhost')) this.port = '5000';
    this.urlAPI += this.port;
  }

  configJSON(option: any) {
    let json = {
      basic: {
        tableTitle: "Básica",
        viewType: [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
          {type: "transfer", btnTitle: "Repasses Financeiros"}
        ],
        detail: {
          tableTitle: "Detail",
          viewType: [
            {type: "obr", btnTitle: "Repasses Obrigatórios"},
            {type: "qua", btnTitle: "Repasses Qualifar"},
            {type: "pri", btnTitle: "Repasses Prisional"},
            {type: "fit", btnTitle: "Repasses Fitoterápicos"}
          ]
        }
      },
      strategic: {
        tableTitle: "Estratégica",
        viewType: [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
        ],
        detail: {
          tableTitle: "Detail",
          viewType: [
            {type: "fit", btnTitle: "Repasses Fitoterápicos"}
          ]
        }
      },
      specialized: {
        tableTitle: "Especializada",
        viewType: [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
          {type: "locale", btnTitle: "Regionalização"}
        ],
        detail: {
          tableTitle: "Detail",
          viewType: [
            {type: "fit", btnTitle: "Repasses Fitoterápicos"}
          ]
        }
      },
      farmpop: {
        tableTitle: "Farmácia Popular",
        viewType: [
          {type: "transfer", btnTitle: "Repasses Financeiros"},
          {type: "pharmacy", btnTitle: "Farmácias"}
        ],
        detail: {
          tableTitle: "Detail",
          viewType: [
            {type: "fit", btnTitle: "Repasses Fitoterápicos"}
          ]
        }
      }    
    };
    
    // console.log(option);
    
    if(option.detail) return json[option.coord]["detail"];
    return json[option.coord];
  }

  getTable(coord, view, aggregator, detail, subview) {

    const year = 2019;
    let urlDataM;
    let url: any;

    urlDataM = {
      basic:{
        0: `${this.urlAPI}/basic/acquisition/${year}`, 
        1: `${this.urlAPI}/basic/transfer`
      },
      strategic:{
        0: `${this.urlAPI}/strategic/acquisition/${year}`
      },
      specialized:{
        0: `${this.urlAPI}/specialized/acquisition/${year}`,
        1: `${this.urlAPI}/specialized/transfer`
      },
      farmpop:{
        0: `${this.urlAPI}/farmpop/financial/${year}`,
        1: `${this.urlAPI}/farmpop/pharmacies`
      }
    }

    url = urlDataM[coord][view];
    if(aggregator) url += `/${aggregator.replace(/\//g,'$$$')}`;
    if(detail) url += `/${detail.replace(/\//g,'$$$')}`;

    console.log(subview, "url: ", url);

    return new Promise(resolve => {
      this.http.get(url).subscribe(response => {
        //check if is a 2x2 matrix
        if(Array.isArray(response[Number(subview)])) this.dataJSON = this.resolveMatrix(response, Number(subview));
        else this.dataJSON = response;
        // console.log(response);
        resolve(this.dataJSON);
      });
    });
  }

  resolveMatrix(data, pos){
    let aux = data[pos];
    // console.log("unpacking matrix", data, aux);
    if(Array.isArray(aux[Number(pos)])) return this.resolveMatrix(aux, pos);
    return aux
  }

  getPloaTable(){
    const year = 2019;
    let url: any;
    url = `${this.urlAPI}/budgetary/${year}`;

    return new Promise(resolve => {
      this.http.get(url).subscribe(response => {
        this.dataJSON = response;
        // console.log(this.dataJSON);
        resolve(this.dataJSON);
      });
    });
    
  }
}
