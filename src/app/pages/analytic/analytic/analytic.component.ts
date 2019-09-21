import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../components/sidebar/sidebar.component';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.scss']
})
export class AnalyticComponent implements OnInit {
  public title;
  public coord;
  public listTitles: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  getTitle() {
    this.coord = this.route.snapshot.paramMap.get("coord")
    const currentLocation = window.location.href;

    // tslint:disable-next-line:forin
    for (const i in ROUTES) {
      const route = ROUTES[i];
      const foundRoute = currentLocation.indexOf(route.id) >= 0;
      if (foundRoute) {
        for(const ii in route.subItems) {
          const si = route.subItems[ii];
          const foundSI = si
          if(currentLocation.indexOf(si['path']) >= 0) {
            this.title = si['title'];
            return this.title;
          }  
        }
      }
    }
  }

/*
  cgafme$: Observable<OrcamentoEstrategico[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: OrcamentoEstrategicoService) {
    this.cgafme$ = service.cgafme$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  */
}
