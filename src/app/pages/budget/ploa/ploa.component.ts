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
        "dotacao": 143567610025,
        "reprogramado": 168944433714,
        "saldo_rep":25376823689,
        "empenhado": 74426697184,        
        "saldo_emp": 94517736530,        
        "ploa_env": 285524927000, 
        "ploa_prev": 0,         
      },           
      {
        "acao": "20AH - Organização dos Serviços de Assistência Farmacêutica no SUS",
        "dotacao": 8872850800,
        "reprogramado": 8872850800,
        "saldo_rep":0,
        "empenhado": 3728594800,        
        "saldo_emp": 5144256000,        
        "ploa_env": 16040795000, 
        "ploa_prev": 0,        
                
      },             
      {
        "acao":"20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS",
        "dotacao": 0,
        "reprogramado": 0,
        "saldo_rep":0,
        "empenhado": 0,        
        "saldo_emp": 0,        
        "ploa_env": 0, 
        "ploa_prev": 850000000,  
      },
      {
        "acao":"20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade	",
        "dotacao": 204000000000,
        "reprogramado": 204000000000,
        "saldo_rep":0,
        "empenhado": 139902541694,        
        "saldo_emp": 64097458306,        
        "ploa_env": 192685192800, 
        "ploa_prev": 0,  
      },
      {
        "acao":"20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento",
        "dotacao": 56235300000,
        "reprogramado": 56235300000,
        "saldo_rep":0,
        "empenhado": 32791732201,        
        "saldo_emp": 23443567799,        
        "ploa_env": 45494186200, 
        "ploa_prev": 0,  
      },
      {
        "acao":"4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico",
        "dotacao": 33074230614,
        "reprogramado": 27366383125,
        "saldo_rep":-5707847489,
        "empenhado": 0,        
        "saldo_emp": 27366383125,        
        "ploa_env": 34975747190, 
        "ploa_prev": 0,  
      },
      {
        "acao":"4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica",
        "dotacao": 544328127099,
        "reprogramado": 560137856373,
        "saldo_rep":15809729274,
        "empenhado": 25270823440,        
        "saldo_emp": 534867032933,        
        "ploa_env": 596932645893, 
        "ploa_prev": 0,  
      },
      {
        "acao":" - ",
        "dotacao": 990078118538,
        "reprogramado": 1025556824011,
        "saldo_rep": 0,
        "empenhado": 276120389319,        
        "saldo_emp": 0,        
        "ploa_env": 1172503494083, 
        "ploa_prev": 0,  
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
