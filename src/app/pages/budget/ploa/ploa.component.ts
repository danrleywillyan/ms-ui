import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../../services/analytic/analytic.service';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {NgbdSortableHeader, SortEvent} from '../sortable.directive';


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

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
  }
  
  public decimalToFloat(val) {
    return parseFloat(val.replace(/[.]/g, '').replace(',', '.'));
  }

  public dif(ploa) {
    if(isNaN(ploa.ploa_enviado) || isNaN(ploa.ploa_prevista)) return;
    const diff = ploa.ploa_enviado - ploa.ploa_prevista;
    return diff/ploa.ploa_prevista;
  }

  public diffPercent(ploa) {
    //return (this.dif(ploa)*100)/ploa.ploa_prevista;
    return this.dif(ploa);
  } 
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.tableOption = params.get('coord');
      this.tableView = Number(params.get('view'));
      this.tableAggregator = params.get('aggreg');
      this.tableDetail = params.get('detail');
      this.headerData = [];
      this.ploaData = [];
      this.updateData();
    });

    //this.attrs = Object.keys(this.data[0]);


    /*
    this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.tableOption = params.get('coord');
      this.updateData( this.tableOption );
    });
    */
  }

  updateData() {
    this.analyticService.getPloaTable()
      .then((data: any) => {
        this.headerData = Object.keys(data[0]);
        this.ploaData = data;
        if(!data) this.headerData = ["Sem dados para exibir"]
      });
  }
}
