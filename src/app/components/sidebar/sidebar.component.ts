import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    id?: string;
    path: string;
    title: string;
    icon: string;
    class: string;
    subItems?: [{}];
}
export const ROUTES: RouteInfo[] = [

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'predictive', path: '/predictive', title: 'Preditivos',  icon: 'ni-atom text-orange', class: '', subItems: [
    { path: '/predictive/epidemiological-research', title: 'Físico', icon: 'ni-app text-orange', disabled: true },
    { path: '/predictive/remedy-demand', title: 'Orçamentário', icon: 'ni-basket text-orange', disabled: true }, /*{ path: '/predictive/shortage', title: 'Previsão de Desabastecimento', icon: 'ni-delivery-fast text-orange', disabled: true }*/]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'budget', path: '/budget', title: 'Visão Orçamentária',  icon: 'ni-money-coins text-teal', class: '', subItems: [
    { path: 'dashboard', title: 'Painel Orçamentário', icon: 'ni-chart-pie-35 text-teal' },
    { path: 'ploa', title: 'Visão Analítica', icon: 'ni-bullet-list-67 text-teal' },
    { path: 'deals', title: 'Gestão Administrativa', icon: 'ni-chart-pie-35 text-teal', disabled: true },
    { path: 'basic', title: 'Básico (CGAFB)', icon: 'fa fa-stethoscope fa-4x text-pink' },
    { path: 'specialized', title: 'Especializado (CEAF)', icon: 'fa fa-pills fa-4x text-pink' },
    { path: 'strategic', title: 'Estratégico (CGAFME)', icon: 'fa fa-prescription-bottle-alt fa-4x text-pink' },
    { path: 'farmpop', title: 'FarmPop (CPFP)', icon: 'fa fa-clinic-medical fa-4x text-pink' }
  
  ]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'popular-pharmacy', path: '/popular-pharmacy', title: 'Farmácia Popular',  icon: 'ni-shop text-blue', class: '', subItems: [/*{ path: '/popular-pharmacy/dispensacao', title: 'Dispensação', icon: 'ni-box-2 text-blue', disabled: true },*/ { path: 'processes', title: 'Processos', icon: 'ni-sound-wave text-blue' }, /*{ path: '/popular-pharmacy/analise-fraude', title: 'Indicadores de Fraude', icon: 'ni-bulb-61 text-blue', disabled: true }, { path: '/popular-pharmacy/auditoria', title: 'Auditoria', icon: 'ni-paper-diploma text-blue', disabled: true }, */ { path: 'notification', title: 'Notificação', icon: 'ni-bell-55 text-blue' }, { path: 'mulct', title: 'Ressarcimento', icon: 'ni-single-copy-04 text-blue' }]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'training', path: '/training', title: 'Capacitação',  icon: 'ni-hat-3 text-indigo', class: '', subItems: [
    { path: 'courses', title: 'Educação Permanente em Saúde (Publicação)', icon: 'ni-books text-indigo'},
    { path: 'events', title: 'Eventos', icon: 'ni-calendar-grid-58 text-indigo', disabled: true }
  ]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'research', path: '/research', title: 'Estudos e Publicações',  icon: 'ni-book-bookmark text-indigo', class: '', subItems: [
    { path: 'processes', title: 'Processos', icon: 'ni-bullet-list-67 text-indigo' },
    { path: 'reportdata', title: 'Relatório de Dados', icon: 'ni-bullet-list-67 text-indigo'},
    { path: 'reportcnes', title: 'Relatório CNES', icon: 'ni-bullet-list-67 text-indigo'},
    { path: 'reportia', title: 'Relatório IA', icon: 'ni-bullet-list-67 text-indigo'},
    { path: 'reportiaf', title: 'Relatório IA Farmpop', icon: 'ni-bullet-list-67 text-indigo'},
    { href: 'https://gaesi.gitlab.io/msdaf/wiki', title: 'Wiki', icon: 'ni-bullet-list-67 text-indigo'}
  ]},

  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  isActiveRoute(item) {
    const section = item.id;
    return window.location.href.indexOf(section) >= 0;
  }

}
