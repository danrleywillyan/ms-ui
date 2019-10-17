import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import { AutomatedPloa } from './ploaAutomated';
import {AutomatedPloaService} from './ploa.service';
import {NgbdSortableHeader, SortEvent} from '../sortable.directive';


@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './ploa.component.html',
  styleUrls: ['./ploa.component.scss'],
  providers:
  [
    AutomatedPloaService, 
    DecimalPipe
  ]
})

export class PloaComponent implements OnInit {
  ploa$: Observable<AutomatedPloa[]>;
  total$: Observable<number>;

  attrs: String[];
  tableOption: String;
  tableTitle: String;
  data: Object[];
  headerData: Object[];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: AutomatedPloaService) {
    this.ploa$ = service.ploa$;
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

  protected setHeaderData(data: Object[]) {
    this.headerData = data;
  }
  protected getHeaderData() {
    return this.headerData;
  }

  protected setData(data: Object[]) {
    this.data = data;
  }
  protected getData(): Object[] {
    return this.data;
  }
  
  public decimalToFloat(val) {
    return parseFloat(val.replace(/[.]/g, '').replace(',', '.'));
  }

  public dif(ploa) {
    if(isNaN(ploa.ploa_enviado) || isNaN(ploa.ploa_prevista)) return;
    const diff = ploa.ploa_enviado - ploa.ploa_prevista;
    return diff/ploa.ploa_prevista;
  }

  public diffPercent(ploa) {
    //return (this.dif(ploa)*100)/ploa.ploa_prevista;
    return this.dif(ploa);
  } 
  ngOnInit() {
    this.data = [
      {
        "acao": "20AE - Promoção da Assistência Farmacêutica e Insumos Estratégicos na Atenção Básica em Saúde",
        "dotacao": 27656512180,
        "reprogramado":29960484833,
        "saldo_rep": -2303972652,
        "empenhado": 8831160443,
        "saldo_empenhado": -21129324390,        
        "ploa_enviado": 17811727175,
        "ploa_prevista": 28259713416
      },
      {
        "acao": "20AH - Organização dos Serviços de Assistência Farmacêutica no SUS",
        "dotacao": 181000000000,
        "reprogramado":+ 645315396,
        "saldo_rep": 20186117255,
        "empenhado": 79668567349,
        "saldo_empenhado":0 ,
        "ploa_enviado": 148875000000,
        "ploa_prevista": 1588750000.00,
      },
      {
        "acao":"20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS	",
        "dotacao":18686977196, 
        "reprogramado":18686977196,
        "saldo_rep":0,
        "empenhado":3993666231,
        "saldo_empenhado": 14693310965,
        "ploa_enviado":18686977196, 
        "ploa_prevista":10383532202,
      },
      {
        "acao":"20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade	",
        "dotacao":203200059900, 
        "reprogramado":+ 734647232,
        "saldo_rep":111768223544,
        "empenhado":90697189124,
        "saldo_empenhado":0 ,
        "ploa_enviado":279400082363, 
        "ploa_prevista":254000074875,
      },
      {
        "acao":"20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento",
        "dotacao":56235300000, 
        "reprogramado":+ 174107632,
        "saldo_rep":34566422992,
        "empenhado":21494769376,
        "saldo_empenhado": 0,
        "ploa_enviado":77323537500, 
        "ploa_prevista":70294125000,
      },
      {
        "acao":"4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico",
        "dotacao":33278167738, 
        "reprogramado":36167199655,
        "saldo_rep":-2889031917,
        "empenhado":10829812512,
        "saldo_empenhado":25337387143,
        "ploa_enviado":35425540937, 
        "ploa_prevista":34655400039,
      },
      {
        "acao":"4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica",
        "dotacao":356380859197, 
        "reprogramado":356380859197,
        "saldo_rep":0,
        "empenhado":123491849431,
        "saldo_empenhado":-232889009767,
        "ploa_enviado":355809800488, 
        "ploa_prevista":371889999226,
      }
      
    ];

    //this.attrs = Object.keys(this.data[0]);


    /*
    this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.tableOption = params.get('coord');
      this.updateData( this.tableOption );
    });
    */
  }

}
