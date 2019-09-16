import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { SpecializedBudget } from './specializedBudget';
import { CEAF } from './ceaf';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from '../sortable.directive';

interface SearchResult {
  data: SpecializedBudget[];
  total: number;
}
//estado da apresentação em tela
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

function sort(data: SpecializedBudget[], column: string, direction: string): SpecializedBudget[] {
  if (direction === '') {
    return data;
  } else {
    return [...data].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(data: SpecializedBudget, term: string, pipe: PipeTransform) {
  return data.estado.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(data.memCalculo).includes(term)
    || pipe.transform(data.aquisicao).includes(term)
    || pipe.transform(data.programaEstadual).includes(term)
    || pipe.transform(data.estoque).includes(term)
    || pipe.transform(data.distribuido).includes(term)
    || pipe.transform(data.distJudicial).includes(term);
}

@Injectable({providedIn: 'root'})
export class SpecializedBudgetService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _ceaf$ = new BehaviorSubject<SpecializedBudget[]>([]);
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
      this._ceaf$.next(result.data);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get ceaf$() { return this._ceaf$.asObservable(); }
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
    let data = sort(CEAF, sortColumn, sortDirection);

    // 2. filter
    data = data.filter(SpecializedBudget => matches(SpecializedBudget, searchTerm, this.pipe));
    const total = data.length;

    // 3. paginate
    data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({data, total});
  }
}
