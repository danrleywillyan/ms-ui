export interface DataTable {
  basic: any,
  strategic: any,
  specialized: any,
  farmpop: any
}

export const DATA: DataTable = {
  basic: [
    // aquisition 
    [
      {
        agrupador:"CALAMIDADE PÚBLICA (KIT) - MEDICAMENTOS DIVERSOS",
        pac:"0",
        fisico:"200",
        reprogramado:"50",
        contratado:"0",
        saldo:"50",
        distribuido:"0",
        previsto:"0"
      },
      {
        agrupador:"INSULINA",
        pac:"0",
        fisico:"17872012",
        reprogramado:"19188600",
        contratado:"0",
        saldo:"19188600",
        distribuido:"0",
        previsto:"0"
      },
      {
        agrupador:"SAÚDE DA MULHER",
        pac:"0",
        fisico:"26963782",
        reprogramado:"1153381",
        contratado:"0",
        saldo:"1153381",
        distribuido:"0",
        previsto:"0"
      }
    ],
    // transfer
    [
      {
        estado: 'Acre',
        programado: 7487885,
        repassado: 4790310,
        saldo: 2232248,
        previsto: 6785799,
      },
      {
        estado: 'Alagoas',
        programado: 31487885,
        repassado: 19790310,
        saldo: 12232248,
        previsto: 28785799,
      },
      {
        estado: 'Amapá',
        programado: 6487885,
        repassado: 4790310,
        saldo: 2232248,
        previsto: 6785799,
      },
      {
        estado: 'Amazonas',
        programado: 35487885,
        repassado: 21790310,
        saldo: 14232248,
        previsto: 31785799,
      },
      {
        estado: 'Bahia',
        programado: 143487885,
        repassado: 82390310,
        saldo: 57232248,
        previsto: 128785799,
      },
      {
        estado: 'Ceará',
        programado: 83487885,
        repassado: 52790310,
        saldo: 32232248,
        previsto: 77785799,
      },
      {
        estado: 'Distrito Federal',
        programado: 23487885,
        repassado: 12790310,
        saldo: 10232248,
        previsto: 21785799,
      },
      {
        estado: 'Espírito Santo',
        programado: 33487885,
        repassado: 22790310,
        saldo: 12232248,
        previsto: 31785799,
      },
      {
        estado: 'Goiás',
        programado: 63487885,
        repassado: 32790310,
        saldo: 22232248,
        previsto: 51785799,
      },
      {
        estado: 'Maranhão',
        programado: 63487885,
        repassado: 42790310,
        saldo: 22232248,
        previsto: 61785799,
      },
      {
        estado: 'Mato Grosso',
        programado: 33487885,
        repassado: 18790310,
        saldo: 12232248,
        previsto: 23785799,
      },
      {
        estado: 'Mato Grosso do Sul',
        programado: 23487885,
        repassado: 12790310,
        saldo: 9232248,
        previsto: 22785799,
      },
      {
        estado: 'Minas Gerais',
        programado: 193487885,
        repassado: 119790310,
        saldo: 72232248,
        previsto: 171785799,
      },
      {
        estado: 'Pará',
        programado: 73487885,
        repassado: 42790310,
        saldo: 32232248,
        previsto: 61785799,
      },
      {
        estado: 'Paraíba',
        programado: 33487885,
        repassado: 22790310,
        saldo: 12232248,
        previsto: 31785799,
      },
      {
        estado: 'Paraná',
        programado: 103487885,
        repassado: 62790310,
        saldo: 42232248,
        previsto: 91785799,
      },
      {
        estado: 'Pernambuco',
        programado: 89487885,
        repassado: 52790310,
        saldo: 32232248,
        previsto: 81785799,
      },
      {
        estado: 'Piauí',
        programado: 33487885,
        repassado: 19790310,
        saldo: 12232248,
        previsto: 21785799,
      },
      {
        estado: 'Rio de Janeiro',
        programado: 163487885,
        repassado: 92790310,
        saldo: 62232248,
        previsto: 141785799,
      },
      {
        estado: 'Rio Grande do Norte',
        programado: 33487885,
        repassado: 12790310,
        saldo: 12232248,
        previsto: 21785799,
      },
      {
        estado: 'Rio Grande do Sul',
        programado: 103487885,
        repassado: 62790310,
        saldo: 42232248,
        previsto: 91785799,
      },
      {
        estado: 'Rondônia',
        programado: 13487885,
        repassado: 92790310,
        saldo: 62232248,
        previsto: 11785799,
      },
      {
        estado: 'Santa Catarina',
        programado: 63487885,
        repassado: 32790310,
        saldo: 22232248,
        previsto: 51785799,
      },
      {
        estado: 'São Paulo',
        programado: 423487885,
        repassado: 252790310,
        saldo: 162232248,
        previsto: 371785799,
      },
      {
        estado: 'Sergipe',
        programado: 23487885,
        repassado: 12790310,
        saldo: 7232248,
        previsto: 18785799,
      },
      {
        estado: 'Tocatins',
        programado: 13487885,
        repassado: 8790310,
        saldo: 5232248,
        previsto: 11785799,
      }
    ]   
  ],
  strategic: [
    [
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
  ],
  specialized: [
    [
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
    ],
    // locale
    [
      {
        estado: 'Acre',
        memCalculo: 359856,
        repassado: 287885,
        saldo: 150310,
        previsto: 332248
      },
      {
        estado: 'Alagoas',
        memCalculo: 64359856,
        repassado: 3487885,
        saldo: 2790310,
        previsto: 6232248
      },
      {
        estado: 'Amapá',
        memCalculo: 4359856,
        repassado: 487885,
        saldo: 190310,
        previsto: 232248
      },
      {
        estado: 'Amazonas',
        memCalculo: 84359856,
        repassado: 5487885,
        saldo: 3790310,
        previsto: 7232248
      },
      {
        estado: 'Bahia',
        memCalculo: 136435985,
        repassado: 83487885,
        saldo: 52790310,
        previsto: 126232248
      },
      {
        estado: 'Ceará',
        memCalculo: 44359856,
        repassado: 2348885,
        saldo: 22790310,
        previsto: 46232248
      },
      {
        estado: 'Distrito Federal',
        memCalculo: 4435856,
        repassado: 2487885,
        saldo: 1790310,
        previsto: 4232248
      },
      {
        estado: 'Espírito Santo',
        memCalculo: 8359856,
        repassado: 5487885,
        saldo: 3790310,
        previsto: 7232248
      },
      {
        estado: 'Goiás',
        memCalculo: 24359856,
        repassado: 13487885,
        saldo: 10090310,
        previsto: 7232248
      },
      {
        estado: 'Maranhão',
        memCalculo: 30359856,
        repassado: 17487885,
        saldo: 12790310,
        previsto: 27232248
      },
      {
        estado: 'Mato Grosso',
        memCalculo: 4359856,
        repassado: 2487885,
        saldo: 1790310,
        previsto: 3232248
      },
      {
        estado: 'Mato Grosso do Sul',
        memCalculo: 4359856,
        repassado: 2487885,
        saldo: 1790310,
        previsto: 3232248
      },
      {
        estado: 'Minas Gerais',
        memCalculo: 226435986,
        repassado: 153487885,
        saldo: 122790310,
        previsto: 246232248
      },
      {
        estado: 'Pará',
        memCalculo: 44359856,
        repassado: 23487885,
        saldo: 12790310,
        previsto: 36232248
      },
      {
        estado: 'Paraíba',
        memCalculo: 64359856,
        repassado: 3487885,
        saldo: 2790310,
        previsto: 6232248
      },
      {
        estado: 'Paraná',
        memCalculo: 76435956,
        repassado: 43487885,
        saldo: 32790310,
        previsto: 66232248
      },
      {
        estado: 'Pernambuco',
        memCalculo: 56359856,
        repassado: 33487885,
        saldo: 30790310,
        previsto: 46232248
      },
      {
        estado: 'Piauí',
        memCalculo: 64359856,
        repassado: 4487885,
        saldo: 2790310,
        previsto: 6232248
      },
      {
        estado: 'Rio de Janeiro',
        memCalculo: 164359856,
        repassado: 103487885,
        saldo: 72790310,
        previsto: 150232248
      },
      {
        estado: 'Rio Grande do Norte',
        memCalculo: 64359856,
        repassado: 3487885,
        saldo: 2790310,
        previsto: 6232248
      },
      {
        estado: 'Rio Grande do Sul',
        memCalculo: 76435856,
        repassado: 43487885,
        saldo: 32790310,
        previsto: 71232248
      },
      {
        estado: 'Rondônia',
        memCalculo: 1359856,
        repassado: 1487885,
        saldo: 790310,
        previsto: 16232248
      },
      {
        estado: 'Roraima',
        memCalculo: 1559856,
        repassado: 87885,
        saldo: 690310,
        previsto: 14232248
      },
      {
        estado: 'Santa Catarina',
        memCalculo: 27359856,
        repassado: 16487885,
        saldo: 11790310,
        previsto: 24232248
      },
      {
        estado: 'São Paulo',
        memCalculo: 1188359856,
        repassado: 700987885,
        saldo: 442790310,
        previsto: 1006232248
      },
      {
        estado: 'Sergipe',
        memCalculo: 2359856,
        repassado: 1487885,
        saldo: 1290310,
        previsto: 2032248
      },
      {
        estado: 'Tocantins',
        memCalculo: 1359856,
        repassado: 787885,
        saldo: 590310,
        previsto: 16232248
      }
    ]
  ],
  farmpop: [
    // transfer
    [
      {
        estado: 'Acre',
        gratuidade: 155856,
        coPagamento: 128885,
        previstoGratuidade: 120310,
        previstoCoPagamento: 100558
      },
      {
        estado: 'Alagoas',
        gratuidade: 619856,
        coPagamento: 487885,
        previstoGratuidade: 559310,
        previstoCoPagamento: 420558
      },
      {
        estado: 'Amapá',
        gratuidade: 131856,
        coPagamento: 102885,
        previstoGratuidade: 118310,
        previstoCoPagamento: 92558
      },
      {
        estado: 'Amazonas',
        gratuidade: 689856,
        coPagamento: 537885,
        previstoGratuidade: 615310,
        previstoCoPagamento: 479558
      },
      {
        estado: 'Bahia',
        gratuidade: 2789856,
        coPagamento: 2147885,
        previstoGratuidade: 2559310,
        previstoCoPagamento: 1920558
      },
      {
        estado: 'Ceará',
        gratuidade: 1619856,
        coPagamento: 1227885,
        previstoGratuidade: 1459310,
        previstoCoPagamento: 1420558
      },
      {
        estado: 'Distrito Federal',
        gratuidade: 519856,
        coPagamento: 457885,
        previstoGratuidade: 359310,
        previstoCoPagamento: 320558
      },
      {
        estado: 'Espírito Santo',
        gratuidade: 690856,
        coPagamento: 537885,
        previstoGratuidade: 659310,
        previstoCoPagamento: 480558
      },
      {
        estado: 'Goiás',
        gratuidade: 1619856,
        coPagamento: 987885,
        previstoGratuidade: 1059310,
        previstoCoPagamento: 820558
      },
      {
        estado: 'Maranhão',
        gratuidade: 1219856,
        coPagamento: 1087885,
        previstoGratuidade: 1159310,
        previstoCoPagamento: 920558
      },
      {
        estado: 'Mato Grosso',
        gratuidade: 619856,
        coPagamento: 487885,
        previstoGratuidade: 559310,
        previstoCoPagamento: 420558
      },
      {
        estado: 'Mato Grosso do Sul',
        gratuidade: 419856,
        coPagamento: 387885,
        previstoGratuidade: 389310,
        previstoCoPagamento: 320558
      },
      {
        estado: 'Minas Gerais',
        gratuidade: 3619856,
        coPagamento: 2687885,
        previstoGratuidade: 3559310,
        previstoCoPagamento: 2420558
      },
      {
        estado: 'Pará',
        gratuidade: 1619856,
        coPagamento: 1487885,
        previstoGratuidade: 1359310,
        previstoCoPagamento: 1042558
      },
      {
        estado: 'Paraíba',
        gratuidade: 619856,
        coPagamento: 487885,
        previstoGratuidade: 659310,
        previstoCoPagamento: 520558
      },
      {
        estado: 'Paraná',
        gratuidade: 2619856,
        coPagamento: 1487885,
        previstoGratuidade: 1859310,
        previstoCoPagamento: 1420558
      },
      {
        estado: 'Pernambuco',
        gratuidade: 1619856,
        coPagamento: 1487885,
        previstoGratuidade: 1559310,
        previstoCoPagamento: 1220558
      },
      {
        estado: 'Piauí',
        gratuidade: 619856,
        coPagamento: 487885,
        previstoGratuidade: 559310,
        previstoCoPagamento: 420558
      },
      {
        estado: 'Rio de Janeiro',
        gratuidade: 3619856,
        coPagamento: 2487885,
        previstoGratuidade: 2059310,
        previstoCoPagamento: 2120558
      },
      {
        estado: 'Rio Grande do Norte',
        gratuidade: 619856,
        coPagamento: 487885,
        previstoGratuidade: 559310,
        previstoCoPagamento: 420558
      },
      {
        estado: 'Rio Grande do Sul',
        gratuidade: 2019856,
        coPagamento: 1487885,
        previstoGratuidade: 1859310,
        previstoCoPagamento: 1420558
      },
      {
        estado: 'Rondônia',
        gratuidade: 319856,
        coPagamento: 287885,
        previstoGratuidade: 259310,
        previstoCoPagamento: 220558
      },
      {
        estado: 'Roraima',
        gratuidade: 89856,
        coPagamento: 67885,
        previstoGratuidade: 79310,
        previstoCoPagamento: 62558
      },
      {
        estado: 'Santa Catarina',
        gratuidade: 1219856,
        coPagamento: 987885,
        previstoGratuidade: 1059310,
        previstoCoPagamento: 820558
      },
      {
        estado: 'São Paulo',
        gratuidade: 8619856,
        coPagamento: 6487885,
        previstoGratuidade: 7559310,
        previstoCoPagamento: 5420558
      },
      {
        estado: 'Sergipe',
        gratuidade: 419856,
        coPagamento: 317885,
        previstoGratuidade: 359310,
        previstoCoPagamento: 270558
      },
      {
        estado: 'Tocantins',
        gratuidade: 219856,
        coPagamento: 217885,
        previstoGratuidade: 234310,
        previstoCoPagamento: 190558
      }
    ],
     // pharmacy
     [
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
  ] 
}
