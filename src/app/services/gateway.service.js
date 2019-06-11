"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GatewayService = (function () {
    function GatewayService(http, lc) {
        this.http = http;
        this.lc = lc;
        this.headers = {};
        this.port = '8080';
        this.host = '34.74.146.146';
        this.protocol = 'http';
        this.loader = lc;
    }
    GatewayService.prototype.loading = function (promise) {
        var _this = this;
        this.loader.start();
        if (this.debugMsg) {
            console.log('className', this.constructor.name);
            console.log('debug message: ', this.debugMsg);
        }
        this.debugMsg = null;
        promise.then(function (data) {
            console.log('data', data);
            setTimeout(function () { _this.loader.stop(); }, 1000);
        }, function (error) {
            console.log('error', error);
            setTimeout(function () { _this.loader.stop(); }, 1000);
        });
    };
    GatewayService.prototype.perform = function () {
        var promise = this.http.request(this.method, this.mountURL(), this.options()).toPromise();
        this.loading(promise);
        this.headers = {};
        return promise;
    };
    GatewayService.prototype.mountURL = function () {
        return this.protocol + "://" + this.host + ":" + this.port + "/" + this.app + "/" + this.path;
    };
    GatewayService.prototype.options = function () {
        return {
            body: this.params,
            headers: this.headers
        };
    };
    return GatewayService;
}());
GatewayService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], GatewayService);
exports.GatewayService = GatewayService;
