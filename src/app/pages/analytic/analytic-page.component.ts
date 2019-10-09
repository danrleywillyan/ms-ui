import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../services/analytic/analytic.service';
import { DecimalPipe } from '@angular/common';

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
  viewType: Object[];

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
      this.updateData( this.tableOption );
    });
  }

  updateData(option: String ) {
    switch(option) {
      case "basic": {
        this.analyticService.getTableCGAFB().then(data => {
          this.tableTitle = "Básica"
          this.viewType = [
            {type: "aquisition", btnTitle: "Aquisição Centralizada"},
            {type: "transfer", btnTitle: "Repasses Financeiros"}
          ]
          this.setData( data );
          this.setHeaderData(Object.keys(data[0]));
        });
        break;
      }
      case "strategic": {
        this.analyticService.getTableCGAFME().then(data => {
          this.tableTitle = "Estratégica"
          this.viewType = [
            {type: "aquisition", btnTitle: "Aquisição Centralizada"},
          ]
          this.setData( data );
          this.setHeaderData(Object.keys(data[0]));
        });
        break;
      }
      case "specialized": {
        this.analyticService.getTableCEAF().then(data => {
          this.tableTitle = "Especializada"
          this.viewType = [
            {type: "aquisition", btnTitle: "Aquisição Centralizada"},
            {type: "locale", btnTitle: "Regionalização"}
          ]
          this.setData( data );
          this.setHeaderData(Object.keys(data[0]));
        });
        break;
      }
      case "farmpop": {
        this.analyticService.getTableCPFP().then(data => {
          this.tableTitle = "Farmácia Popular"
          this.viewType = [
            {type: "pharmacy", btnTitle: "Farmácias"},
            {type: "transfer", btnTitle: "Repasses Financeiros"}
          ]
          this.setData( data );
          this.setHeaderData(Object.keys(data[0]));
        });
        break;
      }
      default: {
        break;
      }
    }
  }

}
