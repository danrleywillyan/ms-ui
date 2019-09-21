"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TransactionsFilterPipe = (function () {
    function TransactionsFilterPipe() {
    }
    TransactionsFilterPipe.prototype.transform = function (items, v) {
        if (!items)
            return [];
        if (!v || v.length === 0)
            return items;
        return items.filter(function (it) { return it.length > 5 && (it[0].indexOf(v) >= 0 || it[2].indexOf(v) >= 0 || it[5].toLocaleLowerCase().indexOf(v) >= 0); });
    };
    return TransactionsFilterPipe;
}());
TransactionsFilterPipe = __decorate([
    core_1.Pipe({
        name: 'transactionsFilter'
    })
], TransactionsFilterPipe);
exports.TransactionsFilterPipe = TransactionsFilterPipe;
