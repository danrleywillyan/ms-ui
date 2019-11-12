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
    
    console.log(option);
    
    if(option.detail) return json[option.coord]["detail"];
    return json[option.coord];
  }

  getTable(coord, view, aggregator, detail, subview) {

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
    if(aggregator) url += `/${aggregator.replace(/\//g,'$$$')}`;
    if(detail) url += `/${detail.replace(/\//g,'$$$')}`;

    console.log(subview, "url: ", url);

    return new Promise(resolve => {
      this.http.get(url).subscribe(response => {

        //check if is a 2x2 matrix
        //todo: make the pos be passed by url (pills)
        if(Array.isArray(response[Number(subview)])) this.dataJSON = this.resolveMatrix(response, Number(subview));
        else this.dataJSON = response;

        console.log(response);

        resolve(this.dataJSON);
      });
    });
  }

  resolveMatrix(data, pos){
    let aux = data[pos];
    console.log("unpacking matrix", data, aux);
    if(Array.isArray(aux[Number(pos)])) return this.resolveMatrix(aux, pos);
    return aux
  }
}
