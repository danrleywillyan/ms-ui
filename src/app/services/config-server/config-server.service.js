"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var gateway_service_1 = require("../gateway.service");
var ConfigServerService = (function (_super) {
    __extends(ConfigServerService, _super);
    function ConfigServerService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.app = 'config';
        return _this;
    }
    ConfigServerService.prototype.getUIConfig = function () {
        this.method = 'get';
        this.path = 'ui/default';
        var promise = this.perform();
        promise.then(function (data) {
            console.log('UIConfig from ZUUL', data);
        });
        return promise;
    };
    ConfigServerService.prototype.getRoutes = function () {
        this.method = 'get';
        this.path = 'routes';
        var promise = this.http.request(this.method, this.protocol + "://" + this.host + ":" + this.port + "/" + this.path, {}).toPromise();
        promise.then(function (data) {
            console.log('getRoutes from ZUUL', data);
        });
        return promise;
    };
    return ConfigServerService;
}(gateway_service_1.GatewayService));
ConfigServerService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ConfigServerService);
exports.ConfigServerService = ConfigServerService;
