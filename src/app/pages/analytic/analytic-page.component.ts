import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../services/analytic/analytic.service';
import { DecimalPipe } from '@angular/common';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'generic-table-page',
  templateUrl: './analytic-page.component.html',
  styleUrls: ['./analytic-page.component.scss'],
  providers:[DecimalPipe]
})

export class AnalyticPage implements OnInit {
  headerData: Object[];
  analitycData: Object[];
  tableTitle: String;
  tableOption: String;
  tableSubOption: String;
  tableView: Number = 0;
  viewType: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private analyticService: AnalyticService,
    // pipe: DecimalPipe,
    // private router: Router, 
  )
  {
    // router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   this.updateData( this.infoId );
    // });
  }

  protected setHeaderData(data: Object[]) {
    this.headerData = data;
  }
  protected getHeaderData() {
    return this.headerData;
  }

  protected setData(data: Object[]) {
    this.analitycData = data;
  }
  protected getAnalitycData(): Object[] {
    return this.analitycData;
  }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.tableOption = params.get('coord');
      this.tableSubOption = params.get('location');
      this.updateData();
    });
  }

  updateView(option: String) {
    for(let i=0; i<this.viewType.length ;i++){
      if(this.viewType[i].type.includes(option)){
        this.tableView = i;
        this.updateData();
        return;
      }
    }  
  }

  updateData() {
    switch(this.tableOption) {
      case "basic": {
        this.tableTitle = "Básica";
        this.viewType = [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
          {type: "transfer", btnTitle: "Repasses Financeiros"}
        ];
        if(this.tableView == 0){
          this.analyticService.getTableCGAFB().then(data => {
            this.setData( data.aquisition );
            this.setHeaderData(Object.keys(data.aquisition[0]));
          });
          console.log("basic/0");
        }
        if(this.tableView == 1){
          this.analyticService.getTableCGAFB().then(data => {
            this.setData( data.transfer );
            this.setHeaderData(Object.keys(data.transfer[0]));
          });
          console.log("basic/1");
        } 
        break;
      }
      case "strategic": {
        this.tableTitle = "Estratégica";
        this.viewType = [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
        ];
        if(this.tableView == 0){
          this.analyticService.getTableCGAFME().then(data => {
            this.setData( data.aquisition );
            this.setHeaderData(Object.keys(data.aquisition[0]));
          });
          console.log("strategic/0");
        }
        break;
      }
      case "specialized": {
        this.tableTitle = "Especializada";
        this.viewType = [
          {type: "aquisition", btnTitle: "Aquisição Centralizada"},
          {type: "locale", btnTitle: "Regionalização"}
        ];
        if(this.tableView == 0){
          this.analyticService.getTableCEAF().then(data => {
            this.setData( data.aquisition );
            this.setHeaderData(Object.keys(data.aquisition[0]));
          });
        }
        if(this.tableView == 1){
          this.analyticService.getTableCEAF().then(data => {
            this.setData( data.locale );
            this.setHeaderData(Object.keys(data.locale[0]));
          });
        }
        break;
      }
      case "farmpop": {
        this.tableTitle = "Farmácia Popular";
        this.viewType = [
          {type: "pharmacy", btnTitle: "Farmácias"},
          {type: "transfer", btnTitle: "Repasses Financeiros"}
        ];
        if(this.tableView == 0){
          this.analyticService.getTableCPFP().then(data => {
            this.setData( data.pharmacy );
            this.setHeaderData(Object.keys(data.pharmacy[0]));
          });  
        }
        if(this.tableView == 1){
          this.analyticService.getTableCPFP().then(data => {
            this.setData( data.transfer );
            this.setHeaderData(Object.keys(data.transfer[0]));
          });  
        }
        break;
      }
      default: {
        break;
      }
    }
  }

}
