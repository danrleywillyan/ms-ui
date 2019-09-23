import {DecimalPipe} from '@angular/common';
import {Component, OnInit } from '@angular/core';

import {ActivatedRoute, ParamMap, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { CEAF, CGAFB, CGAFME, CPFP } from './data/fake-data';


@Component({
  selector: 'generic-table-page',
  templateUrl: './generic-table-page.component.html',
  styleUrls: ['./generic-table-page.component.scss'],
  providers:
  [
    DecimalPipe
  ]
})

export class GenericPage implements OnInit {
  infoId;
  analitycData: Object[];
  headerData: Object[];

  constructor(
    private _Activatedroute:ActivatedRoute,
    pipe: DecimalPipe,
    private router:Router
  )
  {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateData( this.infoId );
    });
  }

  protected setHeaderData(data: Object[]) {
    this.headerData = data;
  }
  protected getHeaderData() {
    return this.headerData;
  }

  protected setAnalitycData(data: Object[]) {
    this.analitycData = data;
  }
  protected getAnalitycData(): Object[] {
    return this.analitycData;
  }

  sub;
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.infoId = params.get('id');
    });
    this.updateData( this.infoId );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateData(id: string ) {
    switch(id) {
      case "basic": {
        this.setAnalitycData( CGAFB );
        let localAnalitycData = this.getAnalitycData();
        for( let i=0; i< localAnalitycData.length; i++ ){
          this.setHeaderData( Object.keys( localAnalitycData[i]) );
        }
        break;
      }
      case "strategic": {
        this.setAnalitycData( CGAFME );
        let localAnalitycData = this.getAnalitycData();
        for( let i=0; i< localAnalitycData.length; i++ ){
          this.setHeaderData( Object.keys( localAnalitycData[i]) );
        }
        break;
      }
      case "specialized": {
        this.setAnalitycData( CEAF );
        let localAnalitycData = this.getAnalitycData();
        for( let i=0; i< localAnalitycData.length; i++ ){
          this.setHeaderData( Object.keys( localAnalitycData[i]) );
        }
        break;
      }
      case "farmpop": {
        this.setAnalitycData( CPFP );
        let localAnalitycData = this.getAnalitycData();
        for( let i=0; i< localAnalitycData.length; i++ ){
          this.setHeaderData( Object.keys( localAnalitycData[i]) );
        }
        break;
      }
      default: {
        

        break;
      }
    }
  }

}
