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

  getTable(coord, view, aggregator) {

    let urlDataM;

    if(!aggregator){
      urlDataM = {
        basic:{
          0: "http://localhost:5000/basic/acquisition/2019", 
          1: "http://localhost:5000/basic/transfer"
        },
        strategic:{
          0: "http://localhost:5000/strategic/acquisition/2019"
        },
        specialized:{
          0: "http://localhost:5000/specialized/acquisition/2019",
          1: "http://localhost:5000/specialized/transfer"
        },
        farmpop:{
          0: "http://localhost:5000/farmpop/financial",
          1: "http://localhost:5000/farmpop/pharmacies"
        }
      }
    }
    else{
      urlDataM = {
        basic:{
          0: `http://localhost:5000/basic/acquisition/2019/${aggregator}`, 
          1: `http://localhost:5000/basic/transfer/${aggregator}`
        },
        strategic:{
          0: `http://localhost:5000/strategic/acquisition/2019/${aggregator}`
        },
        specialized:{
          0: `http://localhost:5000/specialized/acquisition/2019/${aggregator}`,
          1: `http://localhost:5000/specialized/transfer/${aggregator}`
        },
        farmpop:{
          0: `http://localhost:5000/farmpop/financial/${aggregator}`,
          1: `http://localhost:5000/farmpop/pharmacies/${aggregator}`
        }
      }
    }

    return new Promise(resolve => {
      this.http.get(urlDataM[coord][view]).subscribe(response => {
        this.dataJSON = response;
        resolve(this.dataJSON);
      });
    });
  }
}
