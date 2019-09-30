import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CEAF, CGAFB, CGAFME, CPFP } from './data/fake-data';

@Injectable({
  providedIn: 'root'
})
export class AnalyticService {

  tableCEAF: any;
  tableCGAFB: any;
  tableCGAFME: any;
  tableCPFP: any;

  constructor(private http: HttpClient) {
    console.log("AnalyticService Provider constructor()");
    this.load();
  }

  load() {
    // load external dependent data
    this.tableCEAF = this.getTableCEAF();
    this.tableCGAFB = this.getTableCGAFB();
    this.tableCGAFME = this.getTableCGAFME();
    this.tableCPFP = this.getTableCPFP();
  }

  getTableCEAF() {
    if (this.tableCEAF) {
      return Promise.resolve(this.tableCEAF);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:4200/', {
        headers: new HttpHeaders({
          // 'Authorization': `Bearer ${user.stsTokenManager.accessToken}`,
          'x-header': 'x-value',
        }),
      })
      .subscribe(data => {
        // Fix line below after correctly requests data from API.
        this.tableCEAF = CEAF;
        resolve(this.tableCEAF);
      });
    });
  }

  getTableCGAFB() {
    if (this.tableCGAFB) {
      return Promise.resolve(this.tableCGAFB);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:4200/', {
        headers: new HttpHeaders({
          // 'Authorization': `Bearer ${user.stsTokenManager.accessToken}`,
          'x-header': 'x-value',
        }),
      })
      .subscribe(data => {
        // Fix line below after correctly requests data from API.
        this.tableCGAFB = CGAFB;
        resolve(this.tableCGAFB);
      });
    });
  }

  getTableCGAFME() {
    if (this.tableCGAFME) {
      return Promise.resolve(this.tableCGAFME);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:4200/', {
        headers: new HttpHeaders({
          // 'Authorization': `Bearer ${user.stsTokenManager.accessToken}`,
          'x-header': 'x-value',
        }),
      })
      .subscribe(data => {
        // Fix line below after correctly requests data from API.
        this.tableCGAFME = CGAFME;
        resolve(this.tableCGAFME);
      });
    });
  }

  getTableCPFP() {
    if (this.tableCPFP) {
      return Promise.resolve(this.tableCPFP);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:4200/', {
        headers: new HttpHeaders({
          // 'Authorization': `Bearer ${user.stsTokenManager.accessToken}`,
          'x-header': 'x-value',
        }),
      })
      .subscribe(data => {
        // Fix line below after correctly requests data from API.
        this.tableCPFP = CPFP;
        resolve(this.tableCPFP);
      });
    });
  }
}
