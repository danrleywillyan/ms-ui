import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-import-authorization',
  templateUrl: './import-authorization.component.html',
  styleUrls: ['./import-authorization.component.css']
})
export class ImportAuthorizationComponent implements OnInit {

  dataList = [];
  _cacheList = [];
  authorizations = [];

  constructor() { }

  ngOnInit() {
    if(localStorage.authorizations){
      this.dataList  = JSON.parse(localStorage.authorizations);
      this._cacheList = this.dataList.slice(0);
    } 
  }

  search(e:any){
    this.dataList = this._cacheList.filter((d)=>d[0].includes(e));
    if(!e){
      this.dataList = this._cacheList;
    }
  }

  onChange(files: File[]){
    if(files[0]){
      Papa.parse(files[0], {
        header: false,
        delimiter: ";",
        skipEmptyLines: true,
        complete: (result,file) => {
           this.dataList   = result.data.filter( (d,i) => i>0 && d[0] );
           this._cacheList = this.dataList.slice(0);
           localStorage.authorizations = JSON.stringify(this.dataList.slice(0));
        }
      });


    }
  }

}
