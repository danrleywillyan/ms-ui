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
  tableView: number = 0;
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

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.tableOption = params.get('coord');
      this.tableSubOption = params.get('location');
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
    this.tableTitle = configJSON.tableTitle;
    this.viewType = configJSON.viewType;
    this.analyticService.getTable(this.tableOption, this.tableView, this.tableSubOption).then((data: any) => {
      this.analitycData = data;
      this.headerData = Object.keys(data[0]);
    }); 
  }
}
