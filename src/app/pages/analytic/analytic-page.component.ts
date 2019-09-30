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
  infoId: any;
  analitycData: Object[];
  headerData: Object[];

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
      this.infoId = params.get('id');
      this.updateData( this.infoId );
    });
  }

  updateData(id: string ) {
    switch(id) {
      case "basic": {
        this.analyticService.getTableCGAFB().then(data => {
          this.setData( data );
          this.setHeaderData(Object.keys(data[0]));
        });
        break;
      }
      case "strategic": {
        this.analyticService.getTableCGAFME().then(data => {
          this.setData( data );
          this.setHeaderData(Object.keys(data[0]));
        });
        break;
      }
      case "specialized": {
        this.analyticService.getTableCEAF().then(data => {
          this.setData( data );
          this.setHeaderData(Object.keys(data[0]));
        });
        break;
      }
      case "farmpop": {
        this.analyticService.getTableCPFP().then(data => {
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
