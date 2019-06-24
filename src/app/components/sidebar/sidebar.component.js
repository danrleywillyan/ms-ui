"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
exports.ROUTES = [
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    { id: 'budget', path: '/budget', title: 'Orçamento', icon: 'ni-money-coins text-teal', "class": '', subItems: [{ path: '/budget/dashboard', title: 'Painel Orçamentário', icon: 'ni-chart-pie-35 text-teal' }, { path: '/budget/remedy-lifecycle', title: 'Ciclo de vida dos Medicamentos', icon: 'ni-vector text-teal' }] },
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    { id: 'predictive', path: '/predictive', title: 'Preditivos', icon: 'ni-atom text-orange', "class": '', subItems: [{ path: '/predictive/epidemiological-research', title: 'Levantamento Epidemiológico', icon: 'ni-app text-orange' }, { path: '/predictive/remedy-demand', title: 'Previsão de Compras', icon: 'ni-basket text-orange' }, { path: '/predictive/shortage', title: 'Previsão de Desabastecimento', icon: 'ni-delivery-fast text-orange' }] },
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    { id: 'popular-pharmacy', path: '/popular-pharmacy', title: 'Farmácia Popular', icon: 'ni-shop text-blue', "class": '', subItems: [{ path: '/popular-pharmacy/dispensacao', title: 'Dispensação', icon: 'ni-box-2 text-blue' }, { path: '/popular-pharmacy/monitoramento', title: 'Monitoramento', icon: 'ni-sound-wave text-blue' }, { path: '/popular-pharmacy/analise-fraude', title: 'Indicadores de Fraude', icon: 'ni-bulb-61 text-blue' }, { path: '/popular-pharmacy/auditoria', title: 'Auditoria', icon: 'ni-paper-diploma text-blue' }, { path: '/popular-pharmacy/notificacao', title: 'Notificação', icon: 'ni-bell-55 text-blue' }, { path: '/popular-pharmacy/ressarcimento', title: 'Ressarcimento', icon: 'ni-single-copy-04 text-blue' }] },
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    { id: 'training', path: '/training', title: 'Capacitação', icon: 'ni-hat-3 text-indigo', "class": '', subItems: [{ path: '/training/courses', title: 'Cursos', icon: 'ni-books text-indigo' }, { path: '/training/events', title: 'Eventos', icon: 'ni-book-bookmark text-indigo' }, { path: '/training/workshops', title: 'Workshops', icon: 'ni-calendar-grid-58 text-indigo' }] }
];
var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
