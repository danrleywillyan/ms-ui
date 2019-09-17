import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { AutomatedPloa } from './ploaAutomated';
import { PLOA } from './ploa';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from '../sortable.directive';

interface SearchResult {
  data: AutomatedPloa[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(data: AutomatedPloa[], column: string, direction: string): AutomatedPloa[] {
  if (direction === '') {
    return data;
  } else {
    return [...data].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(data: AutomatedPloa, term: string, pipe: PipeTransform) {
  return data.acao.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(data.mediaExecucao).includes(term)
    || pipe.transform(data.dotacao).includes(term)
    || pipe.transform(data.empenhado).includes(term)
    || pipe.transform(data.liquidado).includes(term)
    || pipe.transform(data.pago).includes(term)
    || pipe.transform(data.enviada).includes(term)
    || pipe.transform(data.prevista).includes(term)
    || pipe.transform(data.diferenca).includes(term);
}

@Injectable({providedIn: 'root'})
export class AutomatedPloaService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _ploa$ = new BehaviorSubject<AutomatedPloa[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 20,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._ploa$.next(result.data);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get ploa$() { return this._ploa$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let data = sort(PLOA, sortColumn, sortDirection);

    // 2. filter
    data = data.filter(AutomatedPloa => matches(AutomatedPloa, searchTerm, this.pipe));
    const total = data.length;

    // 3. paginate
    data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({data, total});
  }
}
