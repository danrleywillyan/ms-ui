import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface OrcamentoEspecializado {
  estado: string;
  pac: number;
  solicitado: number;
  emAvaliacao: number;
  aprovado: number;
  dispensado: number;
}

const CGAFME: OrcamentoEspecializado[] = [
  {
    estado: 'Acre',
    pac: 265,
    solicitado: 213,
    emAvaliacao: 171,
    aprovado: 138,
    dispensado: 112,
  },
  {
    estado: 'Alagoas',
    pac: 385,
    solicitado: 309,
    emAvaliacao: 249,
    aprovado: 200,
    dispensado: 161,
  },
  {
    estado: 'Amapá',
    pac: 564,
    solicitado: 451,
    emAvaliacao: 363,
    aprovado: 291,
    dispensado: 235,
  },
  {
    estado: 'Amazonas',
    pac: 865,
    solicitado: 662,
    emAvaliacao: 531,
    aprovado: 426,
    dispensado: 342,
  },
  {
    estado: 'Bahia',
    pac: 1210,
    solicitado: 970,
    emAvaliacao: 777,
    aprovado: 624,
    dispensado: 501,
  },
  {
    estado: 'Ceará',
    pac: 1777,
    solicitado: 1423,
    emAvaliacao: 1139,
    aprovado: 913,
    dispensado: 731,
  },
  {
    estado: 'Distrito Federal',
    pac: 2608,
    solicitado: 2088,
    emAvaliacao: 1671,
    aprovado: 1339,
    dispensado: 1071,
  },
  {
    estado: 'Espírito Santo',
    pac: 3831,
    solicitado: 3067,
    emAvaliacao: 2455,
    aprovado: 1966,
    dispensado: 1573,
  },
  {
    estado: 'Goiás',
    pac: 5630,
    solicitado: 4506,
    emAvaliacao: 3605,
    aprovado: 2886,
    dispensado: 2309,
  },
  {
    estado: 'Maranhão',
    pac: 8274,
    solicitado: 6621,
    emAvaliacao: 5298,
    aprovado: 4239,
    dispensado: 3394,
  },
  {
    estado: 'Mato Grosso',
    pac: 12160,
    solicitado: 9729,
    emAvaliacao: 7785,
    aprovado: 6229,
    dispensado: 4985,
  },
  {
    estado: 'Mato Grosso do Sul',
    pac: 17872,
    solicitado: 14299,
    emAvaliacao: 11440,
    aprovado: 9154,
    dispensado: 7324,
  },
  {
    estado: 'Minas Gerais',
    pac: 26269,
    solicitado: 21016,
    emAvaliacao: 16814,
    aprovado: 13453,
    dispensado: 10763,
  },
  {
    estado: 'Pará',
    pac: 38613,
    solicitado: 30892,
    emAvaliacao: 24714,
    aprovado: 19773,
    dispensado: 15820,
  },
  {
    estado: 'Paraíba',
    pac: 56758,
    solicitado: 45408,
    emAvaliacao: 36327,
    aprovado: 29063,
    dispensado: 23251,
  },
  {
    estado: 'Paraná',
    pac: 83431,
    solicitado: 66747,
    emAvaliacao: 53398,
    aprovado: 42721,
    dispensado: 34176,
  },
  {
    estado: 'Pernambuco',
    pac: 122640,
    solicitado: 98114,
    emAvaliacao: 78492,
    aprovado: 62795,
    dispensado: 50237,
  },
  {
    estado: 'Piauí',
    pac: 180278,
    solicitado: 144225,
    emAvaliacao: 115381,
    aprovado: 92306,
    dispensado: 73846,
  },
  {
    estado: 'Rio de Janeiro',
    pac: 265007,
    solicitado: 212007,
    emAvaliacao: 169606,
    aprovado: 135686,
    dispensado: 108551,
  },
  {
    estado: 'Rio Grande do Norte',
    pac: 389558,
    solicitado: 311648,
    emAvaliacao: 249319,
    aprovado: 199457,
    dispensado: 159567,
  },
  {
    estado: 'Rio Grande do Sul',
    pac: 572648,
    solicitado: 458118,
    emAvaliacao: 366496,
    aprovado: 293198,
    dispensado: 234560,
  },
  {
    estado: 'Rondônia',
    pac: 841788,
    solicitado: 673432,
    emAvaliacao: 538474,
    aprovado: 430998,
    dispensado: 344800,
  },
  {
    estado: 'Roraima',
    pac: 1237425,
    solicitado: 989941,
    emAvaliacao: 791955,
    aprovado: 633565,
    dispensado: 506854,
  },
  {
    estado: 'Santa Catarina',
    pac: 1819012,
    solicitado: 1455211,
    emAvaliacao: 1164170,
    aprovado: 931338,
    dispensado: 745071,
  },
  {
    estado: 'São Paulo',
    pac: 2673946,
    solicitado: 2139157,
    emAvaliacao: 1711328,
    aprovado: 1369063,
    dispensado: 1095252,
  },
  {
    estado: 'Sergipe',
    pac: 3930696,
    solicitado: 3144558,
    emAvaliacao: 2515649,
    aprovado: 2012520,
    dispensado: 1610016,
  },
  {
    estado: 'Tocatins',
    pac: 4359856,
    solicitado: 3487885,
    emAvaliacao: 2790310,
    aprovado: 2232248,
    dispensado: 1785799,
  }
]

function search(text: string, pipe: PipeTransform): OrcamentoEspecializado[] {
  return CGAFME.filter(data => {
    const term = text.toLowerCase();
    return data.estado.toLowerCase().includes(term);
  });
}

@Component({
  selector: '',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  providers: [DecimalPipe]
})
export class STransferComponent implements OnInit {

  cgafme$: Observable<OrcamentoEspecializado[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.cgafme$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
   }

  ngOnInit() {
  }

  // cgafme = CGAFME;
}
