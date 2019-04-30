import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-nup',
  templateUrl: './manter-nup.component.html',
  styleUrls: ['./manter-nup.component.css']
})
export class ManterNupComponent implements OnInit {

  dataList = [];
  _cacheListNup = [];
  nups = [];

  constructor() { }

  ngOnInit() {
    if(localStorage.nups) this.nups = JSON.parse(localStorage.nups);
    this._cacheListNup = this.nups.slice(0);
  }

  searchNup(e:any){
    this.nups = this._cacheListNup.filter((d)=>(d.nup == e));
    if(!e){
      this.nups = this._cacheListNup;
    }
  }
}
