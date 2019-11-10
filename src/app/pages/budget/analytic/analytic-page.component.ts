import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../../services/analytic/analytic.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'generic-table-page',
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
  viewType: any;

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

  ngOnInit() {
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
    for(let i = 0; i < this.viewType.length; i++){
      if(this.viewType[i].type.includes(option)){
        this.tableView = i;
        this.updateData();
        return;
      }
    }
  }
  
  updateData() {
    let configJSON = this.analyticService.configJSON(this.tableOption);
    this.tableTitle = configJSON["tableTitle"];
    this.viewType = configJSON["viewType"];
    this.analyticService.getTable(this.tableOption, this.tableView, this.tableAggregator, this.tableDetail).then((data: any) => {
      this.headerData = Object.keys(data[0]);
      this.analyticData = data;
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
    });
  }

  createLink(data: any) {
    const info = Object.values(data)[0];
    if(!this.tableAggregator){
      return `${this.tableView}/${info}`;
    }
    //Ficha do medicamento (componente básico)
    else if(this.tableView == 0){
      return `${info}/leaf3`;
    }
    //Pagina com duas colunas
    else if(this.tableOption == 'basic'){
      return `${info}/leaf1`;
    }
    else if(this.tableOption == 'specialized'){
      return `${info}/leaf4`;
    }
    else if(this.tableOption == 'farmpop'){
      return `${info}/leaf2`;
    }
  }

}
