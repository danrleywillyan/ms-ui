import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import { DrugstoreAnalytic } from './drugstoreAnalytic';
import {DrugstoreAnalyticService} from './drugstore.service';
import {NgbdSortableHeader, SortEvent} from '../sortable.directive';


@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './drugstore.component.html',
  styleUrls: ['./drugstore.component.scss'],
  providers:
  [
    DrugstoreAnalyticService, 
    DecimalPipe
  ]
})

export class DrugstoreComponent implements OnInit {
  cpfp$: Observable<DrugstoreAnalytic[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: DrugstoreAnalyticService) {
    this.cpfp$ = service.cpfp$;
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

  ngOnInit() {
  }

}
