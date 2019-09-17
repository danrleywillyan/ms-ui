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
  { id:'caf', path: '/caf', title: 'Ciclo da Assistência Farmacêutica',  icon: 'ni-sound-wave text-black', class: ''},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'budget', path: '/analytic/transfer', title: 'Orçamento',  icon: 'ni-money-coins text-teal', class: '', subItems: [{ path: '/budget/dashboard', title: 'Painel', icon: 'ni-chart-pie-35 text-teal' }, { path: '/budget/ploa', title: 'Visão', icon: 'ni-bullet-list-67 text-teal' }]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'analytic', path: '/analytic/transfer', title: 'Visão Analítica',  icon: 'ni-ruler-pencil text-pink', class: '', subItems: [{ path: '/analytic/CGAFB', title: 'Básica (CGAFB)', icon: 'fa fa-stethoscope fa-4x text-pink' }, { path: '/analytic/CEAF', title: 'Especializada (CEAF)', icon: 'fa fa-pills fa-4x text-pink' }, { path: '/analytic/CGAFME', title: 'Estratégica (CGAFME)', icon: 'fa fa-prescription-bottle-alt fa-4x text-pink' },{ path: '/analytic/CPFP', title: 'FarmPop (CPFP)', icon: 'fa fa-clinic-medical fa-4x text-pink' }]},
  
   
  
  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'predictive', path: '/predictive', title: 'Preditivos',  icon: 'ni-atom text-orange', class: '', subItems: [{ path: '/predictive/epidemiological-research', title: 'Levantamento Epidemiológico', icon: 'ni-app text-orange', disabled: true }, { path: '/predictive/remedy-demand', title: 'Previsão de Compras', icon: 'ni-basket text-orange', disabled: true }, /*{ path: '/predictive/shortage', title: 'Previsão de Desabastecimento', icon: 'ni-delivery-fast text-orange', disabled: true }*/]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'popular-pharmacy', path: '/popular-pharmacy', title: 'Farmácia Popular',  icon: 'ni-shop text-blue', class: '', subItems: [/*{ path: '/popular-pharmacy/dispensacao', title: 'Dispensação', icon: 'ni-box-2 text-blue', disabled: true },*/ { path: '/popular-pharmacy/monitoramento', title: 'Monitoramento', icon: 'ni-sound-wave text-blue', disabled: true }, /*{ path: '/popular-pharmacy/analise-fraude', title: 'Indicadores de Fraude', icon: 'ni-bulb-61 text-blue', disabled: true }, { path: '/popular-pharmacy/auditoria', title: 'Auditoria', icon: 'ni-paper-diploma text-blue', disabled: true }, */ { path: '/popular-pharmacy/notification', title: 'Notificação', icon: 'ni-bell-55 text-blue' }, { path: '/popular-pharmacy/mulct', title: 'Ressarcimento', icon: 'ni-single-copy-04 text-blue' }]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'training', path: '/training', title: 'Capacitação',  icon: 'ni-hat-3 text-indigo', class: '', subItems: [{ path: '/training/courses', title: 'Cursos', icon: 'ni-books text-indigo', disabled: true }, { path: '/training/events', title: 'Eventos', icon: 'ni-book-bookmark text-indigo', disabled: true }, { path: '/training/workshops', title: 'Workshops', icon: 'ni-calendar-grid-58 text-indigo', disabled: true }]}
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
