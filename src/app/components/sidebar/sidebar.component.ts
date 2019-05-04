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
  { id: 'budget', path: '/budget', title: 'Orçamento',  icon: 'ni-money-coins text-teal', class: '', subItems: [{ path: '/budget/dashboard', title: 'Painel Orçamentário', icon: 'ni-chart-pie-35 text-teal' }, { path: '/budget/remedy-lifecycle', title: 'Ciclo de vida dos Medicamentos', icon: 'ni-vector text-teal' }]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'predictive', path: '/predictive', title: 'Preditivos',  icon: 'ni-atom text-orange', class: '', subItems: [{ path: '/predictive/epidemiological-research', title: 'Levantamento Epidemiológico', icon: 'ni-app text-orange' }, { path: '/predictive/remedy-demand', title: 'Previsão de Compras', icon: 'ni-basket text-orange' }, { path: '/predictive/shortage', title: 'Previsão de Desabastecimento', icon: 'ni-delivery-fast text-orange' }]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'farm-pop', path: '/farmacia-pop', title: 'Farmácia Popular',  icon: 'ni-shop text-blue', class: '', subItems: [{ path: '/farm-pop/dispensacao', title: 'Dispensação', icon: 'ni-box-2 text-blue' }, { path: '/farm-pop/monitoramento', title: 'Monitoramento', icon: 'ni-sound-wave text-blue' }, { path: '/farm-pop/analise-fraude', title: 'Indicadores de Fraude', icon: 'ni-bulb-61 text-blue' }, { path: '/farm-pop/auditoria', title: 'Auditoria', icon: 'ni-paper-diploma text-blue' }, { path: '/farm-pop/notificacao', title: 'Notificação', icon: 'ni-bell-55 text-blue' }, { path: '/farm-pop/multa', title: 'Multa', icon: 'ni-single-copy-04 text-blue' }]},

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  { id: 'training', path: '/training', title: 'Capacitação',  icon: 'ni-hat-3 text-indigo', class: '', subItems: [{ path: '/training/courses', title: 'Cursos', icon: 'ni-books text-indigo' }, { path: '/training/events', title: 'Eventos', icon: 'ni-book-bookmark text-indigo' }, { path: '/training/workshops', title: 'Workshops', icon: 'ni-calendar-grid-58 text-indigo' }]}
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
}
