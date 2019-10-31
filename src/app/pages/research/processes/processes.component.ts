import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class SProcessesComponent implements OnInit {

  public processes = [];

  constructor() {}

  ngOnInit() {
    this.processes = [
      { title: 'Preparar ressarcimento mensal do PFPB [AS IS]', url: '', status: 'concluído' },
    ];
 }
}
