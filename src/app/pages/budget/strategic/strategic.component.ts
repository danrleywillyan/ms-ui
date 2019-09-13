import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import { OrcamentoEstrategico } from './orcamentoEstrategico';
import {OrcamentoEstrategicoService} from './strategic.service';
import {NgbdSortableHeader, SortEvent} from '../sortable.directive';


@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './strategic.component.html',
  styleUrls: ['./strategic.component.scss'],
  providers:
  [
    OrcamentoEstrategicoService, 
    DecimalPipe
  ]
})

export class StrategicComponent implements OnInit {
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

  ngOnInit() {
  }

}
