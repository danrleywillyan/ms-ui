interface DataTable {
  current: any
  percentage: any,
  history: any,
  evolution: any,
  comparative: any,
  // execution: any,
  // accumulated: any,
  control: any
}

export const DATA: DataTable = {
  current: [
    // current header
    [
      {
        header1: 'Ação Orçamentária',
        header2: 'Dotação (R$)',
        header3: 'Empenhado (R$)',
        header4: 'Liquidado (R$)',
        header5: 'Pago (R$)',
        header6: 'Disponível (R$)',
        header7: 'RAP Acumulado(R$)'
      }
    ],
    // current data
    [
      {
        acao: '20AE - Promoção da Assistência Farmacêutica e Insumos Estratégicos na Atenção Básica em Saúde',
        dotacao: '1.435.676.100,25',
        empenhado: '973.595.807,15',
        liquidado: '973.595.807,15',
        pago: '973.595.807,15',
        disponivel: '715.848.529,99',
        acumulado: '-'
      },
      {
        acao: '20AH - Organização dos Serviços de Assistência Farmacêutica no SUS',
        dotacao: '88.728.508,00',
        empenhado: '42.445.948,00',
        liquidado: '42.445.948,00',
        pago: '42.445.948,00',
        disponivel: '46.282.560,00',
        acumulado: '-'
      },
      {
        acao: '20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS',
        dotacao: '-',
        empenhado: '-',
        liquidado: '-',
        pago: '-',
        disponivel: '-',
        acumulado: '-'
      },
      {
        acao: '20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade',
        dotacao: '2.040.000.000,00',
        empenhado: '1.399.025.416,94',
        liquidado: '1.399.025.416,94',
        pago: '1.399.025.416,94',
        disponivel: '640.974.583,06',
        acumulado: '-'
      },
      {
        acao: '20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento',
        dotacao: '562.353.000,00',
        empenhado: '327.917.322,01',
        liquidado: '327.917.322,01',
        pago: '327.917.322,01',
        disponivel: '234.435.677,99',
        acumulado: '-'
      },
      {
        acao: '4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico',
        dotacao: '330.742.306,14',
        empenhado: '-',
        liquidado: '-',
        pago: '-',
        disponivel: '273.663.831,25',
        acumulado: '-'
      },
      {
        acao: '4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica',
        dotacao: '5.443.281.270,99',
        empenhado: '465.182.618,86',
        liquidado: '465.182.618,86',
        pago: '465.182.618,86',
        disponivel: '5.136.195.944,87',
        acumulado: '-'
      },
    ]
  ],
  percentage: [
    // percentage header
    [
      {
        header1: 'Ação Orçamentária',
        header2: '% Empenhado da Dotação Atual(R$)'
      }
    ],
    // percentage data
    [
      {
        acao: '20AE - Promoção da Assistência Farmacêutica e Insumos Estratégicos na Atenção Básica em Saúde',
        percentage: '67,81'
      },
      {
        acao: '20AH - Organização dos Serviços de Assistência Farmacêutica no SUS',
        percentage: '47,84'
      },
      {
        acao: '20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS',
        percentage: '-'
      },
      {
        acao: '20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade',
        percentage: '68,58'
      },
      {
        acao: '20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento',
        percentage: '58,31'
      },
      {
        acao: '4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico',
        percentage: '-'
      },
      {
        acao: '4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica',
        percentage: '8,55'
      },
    ]
  ],
  history: [
    // history header
    [
      {
        header1: 'Exercício',
        header2: 'Ação Orçamentária',
        header3: '% Empenhado da Dotação Atual(R$)'
      }
    ],
    // history data
    [
      {
        exercicio: '2019',
        acao: '20AE - Promoção da Assistência Farmacêutica e Insumos Estratégicos na Atenção Básica em Saúde',
        empenhado: '973.595.807,15'
      },
      {
        exercicio: '2019',
        acao: '20AH - Organização dos Serviços de Assistência Farmacêutica no SUS',
        empenhado: '42.445.948,00'
      },
      {
        exercicio: '2019',
        acao: '20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS',
        empenhado: '-'
      },
      {
        exercicio: '2019',
        acao: '20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade',
        empenhado: '1.399.025.416,94'
      },
      {
        exercicio: '2019',
        acao: '20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento',
        empenhado: '327.917.322,01'
      },
      {
        exercicio: '2019',
        acao: '4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico',
        empenhado: '-'
      },
      {
        exercicio: '2019',
        acao: '4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica',
        empenhado: '465.182.618,86'
      },
    ]
  ],
  evolution: [
    // evolution header
    [
      {
        header1: 'Exercício',
        header2: 'Ação Orçamentária',
        header3: 'Dotação Orçamentária (R$)'
      }
    ],
    // evolution data
    [
      {
        exercicio: '2019',
        acao: '20AE - Promoção da Assistência Farmacêutica e Insumos Estratégicos na Atenção Básica em Saúde',
        dotacao: '1.435.676.100,25'
      },
      {
        exercicio: '2019',
        acao: '20AH - Organização dos Serviços de Assistência Farmacêutica no SUS',
        dotacao: '88.728.508,00'
      },
      {
        exercicio: '2019',
        acao: '20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS',
        dotacao: '-'
      },
      {
        exercicio: '2019',
        acao: '20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade',
        dotacao: '2.040.000.000,00'
      },
      {
        exercicio: '2019',
        acao: '20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento',
        dotacao: '562.353.000,00'
      },
      {
        exercicio: '2019',
        acao: '4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico',
        dotacao: '330.742.306,14'
      },
      {
        exercicio: '2019',
        acao: '4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica',
        dotacao: '5.443.281.270,99'
      },
    ]
  ],
  comparative: [
    // comparative header
    [
      {
        header1: 'Exercício',
        header2: 'Ação Orçamentária',
        header3: 'Empenhado (R$)',
        header4: 'Pago (R$)',
        header5: '% Pago do Empenhado'
      }
    ],
    // comparative data
    [
      {
        exercicio: '2019',
        acao: '20AE - Promoção da Assistência Farmacêutica e Insumos Estratégicos na Atenção Básica em Saúde',
        empenhado: '973.595.807,15',
        pago: '973.595.807,15',
        percentage: '100,00'
      },
      {
        exercicio: '2019',
        acao: '20AH - Organização dos Serviços de Assistência Farmacêutica no SUS',
        empenhado: '42.445.948,00',
        pago: '42.445.948,00',
        percentage: '100,00'
      },
      {
        exercicio: '2019',
        acao: '20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS',
        empenhado: '-',
        pago: '-',
        percentage: '-'
      },
      {
        exercicio: '2019',
        acao: '20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade',
        empenhado: '1.399.025.416,94',
        pago: '1.399.025.416,94',
        percentage: '100,00'
      },
      {
        exercicio: '2019',
        acao: '20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento',
        empenhado: '327.917.322,01',
        pago: '327.917.322,01',
        percentage: '100,00'
      },
      {
        exercicio: '2019',
        acao: '4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico',
        empenhado: '-',
        pago: '-',
        percentage: '-'
      },
      {
        exercicio: '2019',
        acao: '4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica',
        empenhado: '465.182.618,86',
        pago: '465.182.618,86',
        percentage: '100,00'
      },
    ]
  ],
  control: [
    // control header
    [
      {
        header1: 'Ação Orçamentária',
        header2: 'Dotação (R$)',
        header3: 'Empenhado (R$)',
        header4: 'Liquidado (R$)',
        header5: 'Pago (R$)'
      }
    ],
    // control data
    [
      {
        acao: '20AE - Promoção da Assistência Farmacêutica e Insumos Estratégicos na Atenção Básica em Saúde',
        dotacao: '1.435.676.100,25',
        empenhado: '973.595.807,15',
        liquidado: '973.595.807,15',
        pago: '973.595.807,15'
      },
      {
        acao: '20AH - Organização dos Serviços de Assistência Farmacêutica no SUS',
        dotacao: '88.728.508,00',
        empenhado: '42.445.948,00',
        liquidado: '42.445.948,00',
        pago: '42.445.948,00'
      },
      {
        acao: '20K5 - Apoio ao Uso de Plantas Medicinais e Fitoterápicos no SUS',
        dotacao: '-',
        empenhado: '-',
        liquidado: '-',
        pago: '-'
      },
      {
        acao: '20YR - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil Pelo Sistema de Gratuidade',
        dotacao: '2.040.000.000,00',
        empenhado: '1.399.025.416,94',
        liquidado: '1.399.025.416,94',
        pago: '1.399.025.416,94'
      },
      {
        acao: '20YS - Manutenção e Funcionamento do Programa Farmácia Popular do Brasil pelo Sistema de Co-pagamento',
        dotacao: '562.353.000,00',
        empenhado: '327.917.322,01',
        liquidado: '327.917.322,01',
        pago: '327.917.322,01'
      },
      {
        acao: '4368 - Promoção da Assistência Farmacêutica por meio da aquisição de medicamentos do Componente Estratégico',
        dotacao: '330.742.306,14',
        empenhado: '-',
        liquidado: '-',
        pago: '-'
      },
      {
        acao: '4705 - Apoio Financeiro para Aquisição e Distribuição de Medicamentos do Componente Especializado da Assistência Farmacêutica',
        dotacao: '5.443.281.270,99',
        empenhado: '465.182.618,86',
        liquidado: '465.182.618,86',
        pago: '465.182.618,86'
      },
    ]
  ]
}