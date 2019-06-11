"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var OccurrenceType = (function () {
    function OccurrenceType() {
    }
    return OccurrenceType;
}());
exports.OccurrenceType = OccurrenceType;
var OccurrenceTypesComponent = (function () {
    function OccurrenceTypesComponent(fb, elucidationService) {
        this.fb = fb;
        this.elucidationService = elucidationService;
        this.occurrencesTypes = [];
        this.occurrencesTypesFormBuilder = new forms_1.FormGroup({
            id: new forms_1.FormControl(null),
            idOccurrenceEdit: new forms_1.FormControl(null),
            name: new forms_1.FormControl(null, forms_1.Validators.minLength(2))
        });
    }
    OccurrenceTypesComponent.prototype.ngOnInit = function () {
        this.setupList();
    };
    OccurrenceTypesComponent.prototype.saveOccurrenceType = function () {
        var _this = this;
        var occ_id = this.occurrencesTypesFormBuilder.controls.id.value;
        var occurrence = this.occurrencesTypes.filter(function (i) { return i.id === occ_id; })[0] || new OccurrenceType();
        occurrence.id = occ_id;
        occurrence.name = this.occurrencesTypesFormBuilder.controls.name.value;
        if (occurrence._id) {
            this.elucidationService.updateOccurrenceTypes(occurrence)
                .then(function () { return _this.setupList(); });
        }
        else {
            this.elucidationService.insertOccurrenceTypes(occurrence)
                .then(function () { return _this.setupList(); });
        }
    };
    OccurrenceTypesComponent.prototype.removeOccurrenceType = function (id) {
        var _this = this;
        var occurrence = this.occurrencesTypes.filter(function (i) { return i.id === id; })[0];
        this.elucidationService.deleteOccurrenceTypes(occurrence)
            .then(function () { return _this.setupList(); });
    };
    OccurrenceTypesComponent.prototype.reset = function () {
        this.setupList();
    };
    OccurrenceTypesComponent.prototype.setupList = function () {
        var _this = this;
        this.elucidationService.getOccurrencesTypes()
            .then(function (data) {
            _this.occurrencesTypes = data.sort(function (a, b) { return a.id - b.id; });
        });
    };
    return OccurrenceTypesComponent;
}());
OccurrenceTypesComponent = __decorate([
    core_1.Component({
        selector: 'app-occurrence-types',
        templateUrl: './occurrence-types.component.html',
        styleUrls: ['./occurrence-types.component.scss']
    })
], OccurrenceTypesComponent);
exports.OccurrenceTypesComponent = OccurrenceTypesComponent;
