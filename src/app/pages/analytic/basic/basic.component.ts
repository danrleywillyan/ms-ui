import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import { BasicAnalytic } from './basicAnalytic';
import {BasicAnalyticService} from './basic.service';
import {NgbdSortableHeader, SortEvent} from '../sortable.directive';


@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers:
  [
    BasicAnalyticService, 
    DecimalPipe
  ]
})

export class BasicComponent implements OnInit {
  cgafb$: Observable<BasicAnalytic[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: BasicAnalyticService) {
    this.cgafb$ = service.cgafb$;
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
