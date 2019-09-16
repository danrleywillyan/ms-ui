import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import { SpecializedBudget } from './specializedBudget';
import { SpecializedBudgetService } from './specialized.service';
import { NgbdSortableHeader, SortEvent } from '../sortable.directive';


@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './specialized.component.html',
  styleUrls: ['./specialized.component.scss'],
  providers:
  [
    SpecializedBudgetService, 
    DecimalPipe
  ]
})

export class SpecializedComponent implements OnInit {
  ceaf$: Observable<SpecializedBudget[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: SpecializedBudgetService) {
    this.ceaf$ = service.ceaf$;
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
