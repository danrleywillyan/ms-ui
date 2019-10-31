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
      { title: 'Preparar ressarcimento mensal do PFPB [AS IS]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-OdXMxYkRlNzMtRzVPbkpRSjlKZmRBNWxZckNn', status: 'concluído', pdf: `http://${window.location.host}/static/assets/pdfs/02_02 Ressarcimento.pdf` },
      { title: 'Solicitar Credenciamento no PFPB [TO BE]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-OYlQxVHBSYTlZNi1uT0FSOTZNMGdGbFUxSG1z', status: 'concluído', pdf: `http://${window.location.host}/static/assets/pdfs/01_01 Credenciamento.pdf` },
      { title: 'Validar Dados do Cadastro da Farmácia [TO BE]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-OaGdkVzhRYVF2Q1RCYUZsMHVYTkdGOGlSZHBB', status: 'concluído', pdf: `http://${window.location.host}/static/assets/pdfs/01_01_01 Validar Dados da Farmácia.pdf` },
      { title: 'Realizar teste em homologação [TO BE]', url: 'https://drive.google.com/open?id=0B1neC5Yco3-ORVlzOVdXSV9YM3lQclZRbGlsOHpQRk9SZWhB', status: 'concluído', pdf: `http://${window.location.host}/static/assets/pdfs/01_01_02 Teste em Homologação.pdf` },
      { title: 'Realizar publicação de credenciamento no DOU', url: '', status: 'elaborando pop', pdf: `` },
      { title: 'Multar empresa credenciada no PFPB', url: '', status: 'Em ajuste', pdf: `` },
      { title: 'Renovar Credenciamento de Empresa', url: '', status: 'a fazer', pdf: `` },
      { title: 'Realizar monitoramento eletrônico das empresas credenciadas no PFPB', url: '', status: 'a fazer', pdf: `` },
      { title: 'Apurar irregularidades ou indícios de fraude no PFPB', url: '', status: 'a fazer', pdf: `` },
    /*  { title: 'Receber denúncias para apuração relativas ao PFPB', url: '', status: 'a fazer', pdf: `` },
      { title: 'Requerer documentação impressa de empresas credenciadas no PFPB', url: '', status: 'a fazer', pdf: `` },
      { title: 'Realizar cobrança administrativa de farmácia credenciada no PFPB', url: '', status: 'a fazer', pdf: `` },
      { title: 'Descredenciar empresa por irregularidade no PFPB', url: '', status: 'a fazer', pdf: `` },
*/
    ];
    /*
 - Solicitar credenciamento no PFPB
Solicitar fusão e incorporação de empresa no PFPB
 - Realizar credenciamento de empresa no PFPB
Renovar Credenciamento de Empresa
Dispensar medicamentos pelas empresas credenciadas no PFPB
Preparar ressarcimento mensal do PFPB
Preparar ressarcimento de processos pendentes no PFPB
Realizar monitoramento eletrônico das empresas credenciadas no PFPB
Receber denúncias para apuração relativas ao PFPB
Apurar irregularidades ou indícios de fraude no PFPB
Requerer documentação impressa de empresas credenciadas no PFPB
Realizar auditoria em empresas credenciadas no PFPB
Multar empresa credenciada no PFPB
Realizar cobrança administrativa de farmácia credenciada no PFPB
Tratar empresa inadimplente no PFPB
Descredenciar empresa por irregularidade no PFPB
Planejar PFPB
Controlar PFPB
    */
  }
  setPdf(pdf) {
    setTimeout(()=> {
      this.pdf = pdf;
    }, 500);
  }
}
