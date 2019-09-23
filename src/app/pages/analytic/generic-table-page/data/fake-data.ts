export interface BasicAnalytic {
    estado: string;
    pac: number;
    programado: number;
    contratado: number;
    saldoAta: number;
    distribuido: number;
  }
  
  export const CGAFB: BasicAnalytic[] = [
    {
      estado: 'Acre',
      pac: 265,
      programado: 213,
      contratado: 171,
      saldoAta: 138,
      distribuido: 112,
    },
    {
      estado: 'Alagoas',
      pac: 385,
      programado: 309,
      contratado: 249,
      saldoAta: 200,
      distribuido: 161,
    },
    {
      estado: 'Amapá',
      pac: 564,
      programado: 451,
      contratado: 363,
      saldoAta: 291,
      distribuido: 235,
    },
    {
      estado: 'Amazonas',
      pac: 865,
      programado: 662,
      contratado: 531,
      saldoAta: 426,
      distribuido: 342,
    },
    {
      estado: 'Bahia',
      pac: 1210,
      programado: 970,
      contratado: 777,
      saldoAta: 624,
      distribuido: 501,
    },
    {
      estado: 'Ceará',
      pac: 1777,
      programado: 1423,
      contratado: 1139,
      saldoAta: 913,
      distribuido: 731,
    },
    {
      estado: 'Distrito Federal',
      pac: 2608,
      programado: 2088,
      contratado: 1671,
      saldoAta: 1339,
      distribuido: 1071,
    },
    {
      estado: 'Espírito Santo',
      pac: 3831,
      programado: 3067,
      contratado: 2455,
      saldoAta: 1966,
      distribuido: 1573,
    },
    {
      estado: 'Goiás',
      pac: 5630,
      programado: 4506,
      contratado: 3605,
      saldoAta: 2886,
      distribuido: 2309,
    },
    {
      estado: 'Maranhão',
      pac: 8274,
      programado: 6621,
      contratado: 5298,
      saldoAta: 4239,
      distribuido: 3394,
    },
    {
      estado: 'Mato Grosso',
      pac: 12160,
      programado: 9729,
      contratado: 7785,
      saldoAta: 6229,
      distribuido: 4985,
    },
    {
      estado: 'Mato Grosso do Sul',
      pac: 17872,
      programado: 14299,
      contratado: 11440,
      saldoAta: 9154,
      distribuido: 7324,
    },
    {
      estado: 'Minas Gerais',
      pac: 26269,
      programado: 21016,
      contratado: 16814,
      saldoAta: 13453,
      distribuido: 10763,
    },
    {
      estado: 'Pará',
      pac: 38613,
      programado: 30892,
      contratado: 24714,
      saldoAta: 19773,
      distribuido: 15820,
    },
    {
      estado: 'Paraíba',
      pac: 56758,
      programado: 45408,
      contratado: 36327,
      saldoAta: 29063,
      distribuido: 23251,
    },
    {
      estado: 'Paraná',
      pac: 83431,
      programado: 66747,
      contratado: 53398,
      saldoAta: 42721,
      distribuido: 34176,
    },
    {
      estado: 'Pernambuco',
      pac: 122640,
      programado: 98114,
      contratado: 78492,
      saldoAta: 62795,
      distribuido: 50237,
    },
    {
      estado: 'Piauí',
      pac: 180278,
      programado: 144225,
      contratado: 115381,
      saldoAta: 92306,
      distribuido: 73846,
    },
    {
      estado: 'Rio de Janeiro',
      pac: 265007,
      programado: 212007,
      contratado: 169606,
      saldoAta: 135686,
      distribuido: 108551,
    },
    {
      estado: 'Rio Grande do Norte',
      pac: 389558,
      programado: 311648,
      contratado: 249319,
      saldoAta: 199457,
      distribuido: 159567,
    },
    {
      estado: 'Rio Grande do Sul',
      pac: 572648,
      programado: 458118,
      contratado: 366496,
      saldoAta: 293198,
      distribuido: 234560,
    },
    {
      estado: 'Rondônia',
      pac: 841788,
      programado: 673432,
      contratado: 538474,
      saldoAta: 430998,
      distribuido: 344800,
    },
    {
      estado: 'Roraima',
      pac: 1237425,
      programado: 989941,
      contratado: 791955,
      saldoAta: 633565,
      distribuido: 506854,
    },
    {
      estado: 'Santa Catarina',
      pac: 1819012,
      programado: 1455211,
      contratado: 1164170,
      saldoAta: 931338,
      distribuido: 745071,
    },
    {
      estado: 'São Paulo',
      pac: 2673946,
      programado: 2139157,
      contratado: 1711328,
      saldoAta: 1369063,
      distribuido: 1095252,
    },
    {
      estado: 'Sergipe',
      pac: 3930696,
      programado: 3144558,
      contratado: 2515649,
      saldoAta: 2012520,
      distribuido: 1610016,
    },
    {
      estado: 'Tocatins',
      pac: 4359856,
      programado: 3487885,
      contratado: 2790310,
      saldoAta: 2232248,
      distribuido: 1785799,
    }
  ]
  export interface SpecializedBudget {
    estado: string;
    memCalculo: number;
    aquisicao: number;
    programaEstadual: number;
    estoque: number;
    distribuido: number;
    distJudicial: number;
  }
  
  export const CEAF: SpecializedBudget[] = [
    {
      estado: 'Acre',
      memCalculo: 23434,
      aquisicao: 233111,
      programaEstadual: 171,
      estoque: 138,
      distribuido: 112,
      distJudicial: 112
    },
    {
      estado: 'Bahia',
      memCalculo: 1210,
      aquisicao: 970,
      programaEstadual: 777,
      estoque: 624,
      distribuido: 501,
      distJudicial: 112
    },
    {
      estado: 'Ceará',
      memCalculo: 1777,
      aquisicao: 1423,
      programaEstadual: 1139,
      estoque: 913,
      distribuido: 731,
      distJudicial: 112
    },
    {
      estado: 'Distrito Federal',
      memCalculo: 2608,
      aquisicao: 2088,
      programaEstadual: 1671,
      estoque: 1339,
      distribuido: 1071,
      distJudicial: 112
    },
    {
      estado: 'Espírito Santo',
      memCalculo: 3831,
      aquisicao: 3067,
      programaEstadual: 2455,
      estoque: 1966,
      distribuido: 1573,
      distJudicial: 112
    },
    {
      estado: 'Goiás',
      memCalculo: 5630,
      aquisicao: 4506,
      programaEstadual: 3605,
      estoque: 2886,
      distribuido: 2309,
      distJudicial: 112
    },
    {
      estado: 'Maranhão',
      memCalculo: 8274,
      aquisicao: 6621,
      programaEstadual: 5298,
      estoque: 4239,
      distribuido: 3394,
      distJudicial: 112
    },
    {
      estado: 'Mato Grosso',
      memCalculo: 12160,
      aquisicao: 9729,
      programaEstadual: 7785,
      estoque: 6229,
      distribuido: 4985,
      distJudicial: 112
    },
    {
      estado: 'Mato Grosso do Sul',
      memCalculo: 17872,
      aquisicao: 14299,
      programaEstadual: 11440,
      estoque: 9154,
      distribuido: 7324,
      distJudicial: 112
    },
    {
      estado: 'Minas Gerais',
      memCalculo: 26269,
      aquisicao: 21016,
      programaEstadual: 16814,
      estoque: 13453,
      distribuido: 10763,
      distJudicial: 112
    },
    {
      estado: 'Pará',
      memCalculo: 38613,
      aquisicao: 30892,
      programaEstadual: 24714,
      estoque: 19773,
      distribuido: 15820,
      distJudicial: 112
    },
    {
      estado: 'Paraíba',
      memCalculo: 56758,
      aquisicao: 45408,
      programaEstadual: 36327,
      estoque: 29063,
      distribuido: 23251,
      distJudicial: 112
    },
    {
      estado: 'Paraná',
      memCalculo: 83431,
      aquisicao: 66747,
      programaEstadual: 53398,
      estoque: 42721,
      distribuido: 34176,
      distJudicial: 112
    },
    {
      estado: 'Pernambuco',
      memCalculo: 122640,
      aquisicao: 98114,
      programaEstadual: 78492,
      estoque: 62795,
      distribuido: 50237,
      distJudicial: 112
    },
    {
      estado: 'Piauí',
      memCalculo: 180278,
      aquisicao: 144225,
      programaEstadual: 115381,
      estoque: 92306,
      distribuido: 73846,
      distJudicial: 112
    },
    {
      estado: 'Rio de Janeiro',
      memCalculo: 265007,
      aquisicao: 212007,
      programaEstadual: 169606,
      estoque: 135686,
      distribuido: 108551,
      distJudicial: 112
    },
    {
      estado: 'Rio Grande do Norte',
      memCalculo: 389558,
      aquisicao: 311648,
      programaEstadual: 249319,
      estoque: 199457,
      distribuido: 159567,
      distJudicial: 112
    },
    {
      estado: 'Rio Grande do Sul',
      memCalculo: 572648,
      aquisicao: 458118,
      programaEstadual: 366496,
      estoque: 293198,
      distribuido: 234560,
      distJudicial: 112
    },
    {
      estado: 'Rondônia',
      memCalculo: 841788,
      aquisicao: 673432,
      programaEstadual: 538474,
      estoque: 430998,
      distribuido: 344800,
      distJudicial: 112
    },
    {
      estado: 'Roraima',
      memCalculo: 1237425,
      aquisicao: 989941,
      programaEstadual: 791955,
      estoque: 633565,
      distribuido: 506854,
      distJudicial: 112
    },
    {
      estado: 'Santa Catarina',
      memCalculo: 1819012,
      aquisicao: 1455211,
      programaEstadual: 1164170,
      estoque: 931338,
      distribuido: 745071,
      distJudicial: 112
    },
    {
      estado: 'São Paulo',
      memCalculo: 2673946,
      aquisicao: 2139157,
      programaEstadual: 1711328,
      estoque: 1369063,
      distribuido: 1095252,
      distJudicial: 112
    },
    {
      estado: 'Sergipe',
      memCalculo: 3930696,
      aquisicao: 3144558,
      programaEstadual: 2515649,
      estoque: 2012520,
      distribuido: 1610016,
      distJudicial: 112
    },
    {
      estado: 'Tocatins',
      memCalculo: 4359856,
      aquisicao: 3487885,
      programaEstadual: 2790310,
      estoque: 2232248,
      distribuido: 1785799,
      distJudicial: 112
    }
  ]
  export interface OrcamentoEstrategico {
    estado: string;
    pac: number;
    solicitado: number;
    emAvaliacao: number;
    aprovado: number;
    dispensado: number;
  }
  
  export const CGAFME: OrcamentoEstrategico[] = [
    {
      estado: 'Alagoas',
      pac: 22225,
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
  export interface DrugstoreAnalytic {
    estado: string;
    credenciadas: number;
    emAnalise: number;
    descredenciadas: number;
  }
  
  export const CPFP: DrugstoreAnalytic[] = [
    {
      estado: 'Acre',
      credenciadas: 265,
      emAnalise: 213,
      descredenciadas: 171
    },
    {
      estado: 'Alagoas',
      credenciadas: 385,
      emAnalise: 309,
      descredenciadas: 249
    },
    {
      estado: 'Amapá',
      credenciadas: 564,
      emAnalise: 451,
      descredenciadas: 363
    },
    {
      estado: 'Amazonas',
      credenciadas: 865,
      emAnalise: 662,
      descredenciadas: 531
    },
    {
      estado: 'Bahia',
      credenciadas: 1210,
      emAnalise: 970,
      descredenciadas: 777
    },
    {
      estado: 'Ceará',
      credenciadas: 1777,
      emAnalise: 1423,
      descredenciadas: 1139
    },
    {
      estado: 'Distrito Federal',
      credenciadas: 2608,
      emAnalise: 2088,
      descredenciadas: 1671
    },
    {
      estado: 'Espírito Santo',
      credenciadas: 3831,
      emAnalise: 3067,
      descredenciadas: 2455
    },
    {
      estado: 'Goiás',
      credenciadas: 5630,
      emAnalise: 4506,
      descredenciadas: 3605
    },
    {
      estado: 'Maranhão',
      credenciadas: 8274,
      emAnalise: 6621,
      descredenciadas: 5298
    },
    {
      estado: 'Mato Grosso',
      credenciadas: 12160,
      emAnalise: 9729,
      descredenciadas: 7785
    },
    {
      estado: 'Mato Grosso do Sul',
      credenciadas: 17872,
      emAnalise: 14299,
      descredenciadas: 11440
    },
    {
      estado: 'Minas Gerais',
      credenciadas: 26269,
      emAnalise: 21016,
      descredenciadas: 16814
    },
    {
      estado: 'Pará',
      credenciadas: 38613,
      emAnalise: 30892,
      descredenciadas: 24714
    },
    {
      estado: 'Paraíba',
      credenciadas: 56758,
      emAnalise: 45408,
      descredenciadas: 36327
    },
    {
      estado: 'Paraná',
      credenciadas: 83431,
      emAnalise: 66747,
      descredenciadas: 53398
    },
    {
      estado: 'Pernambuco',
      credenciadas: 122640,
      emAnalise: 98114,
      descredenciadas: 78492
    },
    {
      estado: 'Piauí',
      credenciadas: 180278,
      emAnalise: 144225,
      descredenciadas: 115381
    },
    {
      estado: 'Rio de Janeiro',
      credenciadas: 265007,
      emAnalise: 212007,
      descredenciadas: 169606
    },
    {
      estado: 'Rio Grande do Norte',
      credenciadas: 389558,
      emAnalise: 311648,
      descredenciadas: 249319
    },
    {
      estado: 'Rio Grande do Sul',
      credenciadas: 572648,
      emAnalise: 458118,
      descredenciadas: 366496
    },
    {
      estado: 'Rondônia',
      credenciadas: 841788,
      emAnalise: 673432,
      descredenciadas: 538474
    },
    {
      estado: 'Roraima',
      credenciadas: 1237425,
      emAnalise: 989941,
      descredenciadas: 791955
    },
    {
      estado: 'Santa Catarina',
      credenciadas: 1819012,
      emAnalise: 1455211,
      descredenciadas: 1164170
    },
    {
      estado: 'São Paulo',
      credenciadas: 2673946,
      emAnalise: 2139157,
      descredenciadas: 1711328
    },
    {
      estado: 'Sergipe',
      credenciadas: 3930696,
      emAnalise: 3144558,
      descredenciadas: 2515649
    },
    {
      estado: 'Tocatins',
      credenciadas: 4359856,
      emAnalise: 3487885,
      descredenciadas: 2790310
    }
  ]