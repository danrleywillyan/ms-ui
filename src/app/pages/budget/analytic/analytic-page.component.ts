import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../../services/analytic/analytic.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './analytic-page.component.html',
  styleUrls: ['./analytic-page.component.scss'],
  providers:[DecimalPipe]
})

export class AnalyticPage implements OnInit {
  headerData: Object[];
  analyticData: Object[];
  tableTitle: String;
  tableOption: String;
  tableAggregator: String;
  tableDetail: String;
  tableView: number = 0;
  tableSubView: number = 0;
  viewType: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private analyticService: AnalyticService,
    private router: Router
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
      this.updateData();
    }); 
  }
  
  updateView(option: String) {
    if(this.tableDetail){
      for(let i = 0; i < this.viewType.length; i++){
        if(this.viewType[i].type.includes(option)){
          this.tableSubView = i;
          this.updateData();
          return;
        }
      }  
    }
    else{
      for(let i = 0; i < this.viewType.length; i++){
        if(this.viewType[i].type.includes(option)){
          this.tableView = i;
          this.updateData();
          return;
        }
      }
    }
  }
  
  updateData() {
    let configJSON = this.analyticService.configJSON({
      coord: this.tableOption,
      view: this.tableView,
      detail: this.tableDetail
    });
    console.log("configJSON: ", configJSON);
    this.tableTitle = configJSON["tableTitle"];
    this.viewType = configJSON["viewType"];
    this.analyticService.getTable(this.tableOption,this.tableView,this.tableAggregator, this.tableDetail,this.tableSubView)
      .then((data: any) => {
        this.headerData = Object.keys(data[0]);
        this.analyticData = data;

        if(!data) this.headerData = ["Sem dados para exibir"]

        if(this.tableDetail){
          // @ts-ignore
          $(`.pill-${this.tableSubView}`).click();
        }else{
          // @ts-ignore
          $(`.pill-${this.tableView}`).click();
        }
        if(this.tableAggregator && !this.tableDetail){
          // @ts-ignore
          $(`.nav-pills`).hide();
        }
        else{
          // @ts-ignore
          $(`.nav-pills`).show();
        }
      });
    }

  createLink(data: any) {

    if(!Object.values(data)[0]) return``
    if(this.tableDetail) return

    let info: string;
    info = Object.values(data)[0].toString();
    info = info.replace("/", "$$$");

    if(!this.tableAggregator){
      return `${this.tableView}/${info}`;
    }
    //Ficha do medicamento (componente básico)
    else if(this.tableView == 0 && this.tableOption !== 'farmpop'){
      return `${info}/medication`;
    }
    else if(this.tableOption == 'farmpop') {
      return;
    }
    //Pagina com duas colunas
    else {
      return `${info}`;
    }
  }

}
