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
  public pdf: String;

  constructor() {}

  ngOnInit() {
    this.processes = [
      { title: 'Elaborar Termo de Referência', url: 'https://drive.google.com/open?id=153Wk1Pm0ph1g1vO-SvzQ3-_Ryay0hq3J', status: 'Em ajuste', pdf: `http://${window.location.host}/static/assets/pdfs/Coord - Elaborar Termo de Referência v2.pdf` },
      { title: 'Monitorar Estoque_Calamidade Pública', url: 'https://drive.google.com/open?id=153Wk1Pm0ph1g1vO-SvzQ3-_Ryay0hq3J', status: 'Elaboração', pdf: `http://${window.location.host}/static/assets/pdfs/Coord - Monitorar Estoque_Calamidade Pública.pdf` },
      { title: 'Monitorar Estoque_Saúde da Mulher e Insulina', url: 'https://drive.google.com/open?id=153Wk1Pm0ph1g1vO-SvzQ3-_Ryay0hq3J', status: 'Elaboração', pdf: `http://${window.location.host}/static/assets/pdfs/Coord - Monitorar Estoque_Saúde da Mulher e Insulina.pdf` },
      { title: 'Planejar Programação_Saúde da Mulher e Insulina', url: 'https://drive.google.com/open?id=153Wk1Pm0ph1g1vO-SvzQ3-_Ryay0hq3J', status: 'Elaboração', pdf: `http://${window.location.host}/static/assets/pdfs/Coord - Planejar Programação_Saúde da Mulher e Insulina.pdf` },
      { title: 'Realizar Aquisição Centralizada por Pregão e IRP', url: 'https://drive.google.com/open?id=153Wk1Pm0ph1g1vO-SvzQ3-_Ryay0hq3J', status: 'Em ajuste', pdf: `http://${window.location.host}/static/assets/pdfs/Coord - Realizar Aquisição Centralizada por Pregão e IRP.pdf` },
      { title: 'Realizar Aquisição Centralizada v2', url: 'https://drive.google.com/open?id=153Wk1Pm0ph1g1vO-SvzQ3-_Ryay0hq3J', status: 'Em ajuste', pdf: `http://${window.location.host}/static/assets/pdfs/Coord - Realizar Aquisição Centralizada v2.pdf` },
    ];
  }
  setPdf(pdf) {
    setTimeout(()=> {
      this.pdf = pdf;
    }, 500);
  }
}
