import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticService {

  dataJSON: any;

  constructor(private http: HttpClient) {

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

  getTable(coord, view, aggregator, detail) {

    const year = 2019;
    let urlDataM;
    let url: any;

    urlDataM = {
      basic:{
        0: `http://localhost:5000/basic/acquisition/${year}`, 
        1: `http://localhost:5000/basic/transfer`
      },
      strategic:{
        0: `http://localhost:5000/strategic/acquisition/${year}`
      },
      specialized:{
        0: `http://localhost:5000/specialized/acquisition/${year}`,
        1: `http://localhost:5000/specialized/transfer`
      },
      farmpop:{
        0: `http://localhost:5000/farmpop/financial/${year}`,
        1: `http://localhost:5000/farmpop/pharmacies`
      }
    }

    url = urlDataM[coord][view];
    if(aggregator) url += `/${aggregator}`;
    if(detail) url += `/${detail}`;

    return new Promise(resolve => {
      this.http.get(url).subscribe(response => {
        // console.log(response);
        this.dataJSON = response;
        console.log(this.dataJSON);
        resolve(this.dataJSON);
      });
    });
  }
}
