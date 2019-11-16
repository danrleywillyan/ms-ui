<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../../services/analytic/analytic.service';
import { DecimalPipe } from '@angular/common';
=======
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../../services/analytic/analytic.service';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {NgbdSortableHeader, SortEvent} from '../sortable.directive';
>>>>>>> aecdb832d44144b20d22ce2d32de1b177a8e461f


@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './ploa.component.html',
  styleUrls: ['./ploa.component.scss'],
<<<<<<< HEAD
  providers:[DecimalPipe]
})

export class PloaComponent implements OnInit {
  headerData: Object[];
  analyticData: Object[];
=======
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
>>>>>>> aecdb832d44144b20d22ce2d32de1b177a8e461f
  tableTitle: String;
  tableOption: String;
  tableAggregator: String;
  tableDetail: String;
  tableView: number = 0;
<<<<<<< HEAD
  viewType: any;
  ploaData: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private analyticService: AnalyticService,
    private router: Router, 
    // pipe: DecimalPipe,
  )
  {
    // router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   this.updateData( this.infoId );
    // });
  }

  ngOnInit(){
    this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.tableOption = params.get('coord');
      this.tableView = Number(params.get('view'));
      this.tableAggregator = params.get('aggreg');
      this.tableDetail = params.get('detail');      
      this.headerData = [];
      this.analyticData = [];
      
    }); 
=======
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
>>>>>>> aecdb832d44144b20d22ce2d32de1b177a8e461f
  }
  
  updateView(option: String) {
    for(let i = 0; i < this.viewType.length; i++){
      if(this.viewType[i].type.includes(option)){
        this.tableView = i;
        this.updateData();
        return;
      }
    }
  }
<<<<<<< HEAD
  
  updateData() {
    // let configJSON = this.analyticService.configJSON(this.tableOption);
    // this.tableTitle = configJSON["tableTitle"];
    // this.viewType = configJSON["viewType"];
    this.analyticService.getBudgetary().then((data: any) => {
      this.headerData = Object.keys(data[0]);
      this.analyticData = data;
      console.log(data);
      if(!data) {
        this.headerData = ["Sem dados para exibir"]
      }
      // @ts-ignore
      $(`.pill-${this.tableView}`).click();
      if(this.tableAggregator){
        // @ts-ignore
        $(`.nav-pills`).hide();
      }
      else{
        // @ts-ignore
        $(`.nav-pills`).show();
      }
=======

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
>>>>>>> aecdb832d44144b20d22ce2d32de1b177a8e461f
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
  }
}
