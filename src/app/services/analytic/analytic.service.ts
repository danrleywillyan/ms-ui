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
    return new Promise(resolve => {
      this.http.get('http://localhost:4200/', {
        headers: new HttpHeaders({
          // 'Authorization': `Bearer ${user.stsTokenManager.accessToken}`,
          'x-header': 'x-value',
        }),
      })
      .subscribe(data => {
        // Fix line below after correctly requests data from API.
        this.dataJSON = DATA[coord][view];
        resolve(this.dataJSON);
      });
    });
  }
}
