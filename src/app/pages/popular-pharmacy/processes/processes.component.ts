import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

  public processes = [];
  public pdf: String;

  constructor() {}

  ngOnInit() {
    this.processes = [
      { title: 'Preparar ressarcimento mensal do PFPB [AS IS]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-OYlQxVHBSYTlZNi1uT0FSOTZNMGdGbFUxSG1z', status: 'concluído', pdf: `http://${window.location.host}/static/assets/pdfs/Assistência Farmacêutica 4.0  caminhos para a implementação.pdf` },
      { title: 'Preparar ressarcimento mensal do PFPB [AS IS]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-OdXMxYkRlNzMtRzVPbkpRSjlKZmRBNWxZckNn', status: 'concluído', pdf: '' },
      { title: 'Validar Dados do Cadastro da Farmácia [TO BE]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-OaGdkVzhRYVF2Q1RCYUZsMHVYTkdGOGlSZHBB', status: 'concluído', pdf: '' },
      { title: 'Realizar teste em homologação [TO BE]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-ORVlzOVdXSV9YM3lQclZRbGlsOHpQRk9SZWhB', status: 'concluído', pdf: '' },
    ];
  }
  setPdf(pdf) {
    setTimeout(()=> {
      this.pdf = pdf;
    }, 200);
  }
}
