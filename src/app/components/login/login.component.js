"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LoaderComponent = (function () {
    function LoaderComponent() {
        this.title = 'Aguarde, robôs trabalhando.';
        this.subtitle = 'Estamos carregando os dados e/ou persistindo as informações inseridas.';
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent.prototype.start = function () {
        // @ts-ignore
        $('#loader').modal({
            backdrop: 'static',
            keyboard: false,
            show: true // Display loader!
        });
    };
    LoaderComponent.prototype.stop = function () {
        // @ts-ignore
        $('#loader').modal('hide');
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    core_1.Component({
        selector: 'app-loader',
        templateUrl: './loader.component.html',
        styleUrls: ['./loader.component.scss']
    }),
    core_1.Injectable()
], LoaderComponent);
exports.LoaderComponent = LoaderComponent;
