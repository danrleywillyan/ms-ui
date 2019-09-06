import { Component, OnInit } from '@angular/core';

interface OrcamentoEstrategico {
  estado: string;
  pac: number;
  solicitado: number;
  emAvaliacao: number;
  aprovado: number;
  dispensado: number;
}

const CGAFME: OrcamentoEstrategico[] = [
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
    solicitado: 613,
    emAvaliacao: 571,
    aprovado: 438,
    dispensado: 312,
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
    aprovado: 1393,
    dispensado: 1088,
  },
  {
    estado: 'Espírito Santo',
    pac: 3884,
    solicitado: 3025,
    emAvaliacao: 2500,
    aprovado: 1586,
    dispensado: 1562,
  },
  {
    estado: 'Goiás',
    pac: 5630,
    solicitado: 4506,
    emAvaliacao: 3605,
    aprovado: 2884,
    dispensado: 2306,
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
    solicitado: 14899,
    emAvaliacao: 11440,
    aprovado: 9154,
    dispensado: 7324,
  },
  {
    estado: 'Minas Gerais',
    pac: 26269,
    solicitado: 21019,
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
    dispensado: 15394,
  },
  {
    estado: 'Paraíba',
    pac: 56777,
    solicitado: 45402,
    emAvaliacao: 26245,
    aprovado: 29063,
    dispensado: 23555,
  },
  {
    estado: 'Paraná',
    pac: 83431,
    solicitado: 66855,
    emAvaliacao: 53666,
    aprovado: 42788,
    dispensado: 24005,
  },
  {
    estado: 'Pernambuco',
    pac: 122640,
    solicitado: 98114,
    emAvaliacao: 78432,
    aprovado: 62758,
    dispensado: 50111,
  },
  {
    estado: 'Piauí',
    pac: 180054,
    solicitado: 144225,
    emAvaliacao: 115381,
    aprovado: 92306,
    dispensado: 73254,
  },
  {
    estado: 'Rio de Janeiro',
    pac: 265,
    solicitado: 213,
    emAvaliacao: 171,
    aprovado: 138,
    dispensado: 112,
  },
  {
    estado: 'Rio Grande do Norte',
    pac: 385,
    solicitado: 309,
    emAvaliacao: 249,
    aprovado: 200,
    dispensado: 161,
  },
  {
    estado: 'Rio Grande do Sul',
    pac: 564,
    solicitado: 451,
    emAvaliacao: 363,
    aprovado: 291,
    dispensado: 235,
  },
  {
    estado: 'Rondônia',
    pac: 865,
    solicitado: 613,
    emAvaliacao: 571,
    aprovado: 438,
    dispensado: 312,
  },
  {
    estado: 'Roraima',
    pac: 1210,
    solicitado: 970,
    emAvaliacao: 777,
    aprovado: 624,
    dispensado: 501,
  },
  {
    estado: 'Santa Catarina',
    pac: 1777,
    solicitado: 1423,
    emAvaliacao: 1139,
    aprovado: 913,
    dispensado: 731,
  },
  {
    estado: 'São Paulo',
    pac: 2608,
    solicitado: 2088,
    emAvaliacao: 1671,
    aprovado: 1393,
    dispensado: 1088,
  },
  {
    estado: 'Sergipe',
    pac: 3884,
    solicitado: 3025,
    emAvaliacao: 2500,
    aprovado: 1586,
    dispensado: 1562,
  },
  {
    estado: 'Tocatins',
    pac: 5630,
    solicitado: 4506,
    emAvaliacao: 3605,
    aprovado: 2884,
    dispensado: 2306,
  }
]

@Component({
  selector: 'app-ploa',
  templateUrl: './strategic.component.html',
  styleUrls: ['./strategic.component.scss']
})
export class StrategicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cgafme = CGAFME;
}
