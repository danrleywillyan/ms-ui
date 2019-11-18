import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../../services/analytic/analytic.service';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { NgbdSortableHeader, SortEvent } from '../sortable.directive';


@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './ploa.component.html',
  styleUrls: ['./ploa.component.scss'],
  providers:
    [
      DecimalPipe
    ]
})

export class PloaComponent implements OnInit {
  total$: Observable<number>;

  attrs: String[];
  headerData: Object[];
  ploaData: Object[];
  tableTitle: String;
  tableOption: String;
  tableAggregator: String;
  tableDetail: String;
  tableView: number = 0;
  tableSubView: number = 0;
  viewType: any;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private analyticService: AnalyticService,
    private _Activatedroute: ActivatedRoute,
  ) {

  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
  }

  updateView(option: String) {
    for (let i = 0; i < this.viewType.length; i++) {
      if (this.viewType[i].type.includes(option)) {
        this.tableView = i;
        this.updateData();
        return;
      }
    }
  }
  updateData() {
    throw new Error("Method not implemented.");
  }

  public diffPercent(ploa) {
    //return (this.dif(ploa)*100)/ploa.ploa_prevista;
    return this.dif(ploa);
  }
  dif(ploa: any) {
    throw new Error("Method not implemented.");
  }
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.tableOption = params.get('coord');
      this.tableView = Number(params.get('view'));
      this.tableAggregator = params.get('aggreg');
      this.tableDetail = params.get('detail');
      this.headerData = [];
      this.ploaData = [];
      this.updateData();
    });
  }
}
    //this.attrs = Object.keys(this.data[0]);


/*
this._Activatedroute.paramMap.subscribe((params : ParamMap)=> {
  this.tableOption = params.get('coord');
  this.updateData( this.tableOption );
});
}

createLink(data: any) {

if(!Object.values(data)[0]) return``

let info: string;
info = Object.values(data)[0].toString();
info = info.replace("/", "$$$");

if(!this.tableAggregator){
  return `${this.tableView}/${info}`;
}
//Ficha do medicamento (componente básico)
else if(this.tableView == 0){
  return `${info}/leaf3`;
}
//Pagina com duas colunas
else if(this.tableOption == 'basic'){
  return `${info}/leaf4`;
}
else if(this.tableOption == 'specialized'){
  return `${info}/leaf1`;
}
else if(this.tableOption == 'farmpop'){
  return `${info}/leaf2`;
}
}

updateData() {
this.analyticService.getPloaTable()
  .then((data: any) => {
    this.headerData = Object.keys(data[0]);
    this.ploaData = data;
    if(!data) this.headerData = ["Sem dados para exibir"]
  });
} */
