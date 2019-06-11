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
var ElucidationService = (function (_super) {
    __extends(ElucidationService, _super);
    function ElucidationService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.app = 'elucidation';
        return _this;
    }
    /**
     * OCCURRENCES TYPES CRUD METHODS
     */
    // Occurrences Types CRUD
    ElucidationService.prototype.getOccurrencesTypes = function () {
        this.method = 'get';
        this.path = 'occurrence_codes';
        return this.perform();
    };
    // INSERT Occurrences records
    ElucidationService.prototype.insertOccurrenceTypes = function (params) {
        this.method = 'post';
        this.path = 'occurrence_codes';
        this.params = params;
        return this.perform();
    };
    // UPDATE Occurrences records
    ElucidationService.prototype.updateOccurrenceTypes = function (params) {
        this.method = 'put';
        this.path = "occurrence_codes/" + params._id;
        delete params._id;
        this.params = params;
        return this.perform();
    };
    // DELETE Occurrences records
    ElucidationService.prototype.deleteOccurrenceTypes = function (params) {
        this.method = 'delete';
        this.path = "occurrence_codes/" + params._id;
        return this.perform();
    };
    // RENEW Occurrences records (delete all & insert default)
    ElucidationService.prototype.renewOccurrenceTypes = function () {
        this.method = 'delete';
        this.path = "occurrence_codes/renew";
        return this.perform();
    };
    // Elucidations CRUD
    ElucidationService.prototype.getElucidations = function () {
        this.method = 'get';
        this.path = 'elucidations';
        return this.perform();
    };
    // INSERT Occurrences records
    ElucidationService.prototype.insertElucidation = function (params) {
        this.method = 'post';
        this.path = 'elucidations';
        this.params = params;
        return this.perform();
    };
    // UPDATE Elucidations records
    ElucidationService.prototype.updateElucidation = function (params) {
        this.method = 'put';
        this.path = "elucidations/" + params._id;
        delete params._id;
        this.params = params;
        return this.perform();
    };
    // DELETE Elucidations records
    ElucidationService.prototype.deleteElucidation = function (params) {
        this.method = 'delete';
        this.path = "elucidations/" + params._id;
        return this.perform();
    };
    /**
     * AUTHORIZATIONS CRUD METHODS
     */
    // GET ALL Authorizations records
    ElucidationService.prototype.getAuthorizations = function () {
        this.method = 'get';
        this.path = 'authorizations';
        return this.perform();
    };
    // INSERT Authorizations records
    ElucidationService.prototype.insertAuthorizations = function (params) {
        this.method = 'post';
        this.path = 'authorizations';
        this.params = params;
        return this.perform();
    };
    ElucidationService.prototype.getElucidationBody = function (params) {
        this.method = 'get';
        this.path = "elucidations/" + params._id + "/body";
        return this.perform();
    };
    return ElucidationService;
}(gateway_service_1.GatewayService));
ElucidationService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
    // @ts-ignore
], ElucidationService);
exports.ElucidationService = ElucidationService;
