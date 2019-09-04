"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var selective_preloading_strategy_service_1 = require("./selective-preloading-strategy.service");
var templates_layout_component_1 = require("./layouts/templates-layout/templates-layout.component");
var app_layout_component_1 = require("./layouts/app-layout/app-layout.component");
var routes = [
    // Real & Final layout routes
    {
        path: '',
        component: app_layout_component_1.AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/app-layout/app-layout.module#AppLayoutModule'
            }
        ]
    },
    // Templates & documentations routes
    {
        path: 'templates',
        component: templates_layout_component_1.TemplatesLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/templates-layout/templates-layout.module#TemplatesLayoutModule'
            }
        ]
    },
    // Generic/Error Pages
    {
        path: '**',
        redirectTo: 'budget/dashboard'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes, {
                enableTracing: false,
                preloadingStrategy: selective_preloading_strategy_service_1.SelectivePreloadingStrategyService
            })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
