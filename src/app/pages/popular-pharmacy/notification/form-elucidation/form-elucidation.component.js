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
var Occurrence = (function () {
    function Occurrence() {
    }
    return Occurrence;
}());
exports.Occurrence = Occurrence;
var Authorization = (function () {
    function Authorization() {
    }
    return Authorization;
}());
exports.Authorization = Authorization;
var Elucidation = (function () {
    function Elucidation() {
    }
    return Elucidation;
}());
exports.Elucidation = Elucidation;
var FormElucidationComponent = FormElucidationComponent_1 = (function () {
    function FormElucidationComponent(fb, elucidationService) {
        var _this = this;
        this.fb = fb;
        this.elucidationService = elucidationService;
        this.csvTransactions = [];
        this.occurrencesTypes = [];
        this.authorizations = [];
        this.elucidationService.getOccurrencesTypes().then(function (data) {
            _this.occurrencesTypes = data;
        });
        this.elucidation = new Elucidation();
        if (window['elucidation']) {
            this.elucidation = window['elucidation'];
            window['elucidation'] = undefined;
            this.authorizations = this.elucidation.authorizations;
        }
        this.elucidationService.getAuthorizations()
            .then(function (data) {
            window['csv_authorizations'] = data.data;
            _this.csvTransactions = window['csv_authorizations'].slice(1).filter(function (i) { return i[0] !== ''; });
        });
        this.elucidationFormGroup = new forms_1.FormGroup({
            nup: new forms_1.FormControl(null, forms_1.Validators.minLength(2)),
            cnpj: new forms_1.FormControl(null, forms_1.Validators.minLength(2)),
            date: new forms_1.FormControl(null),
            authorizations: new forms_1.FormControl(null)
        });
        this.authorizationFormGroup = new forms_1.FormGroup({
            authorizationCode: new forms_1.FormControl(null, forms_1.Validators.minLength(2)),
            remedyName: new forms_1.FormControl(null, forms_1.Validators.minLength(2)),
            authorizedAt: new forms_1.FormControl(null, forms_1.Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)),
            occurrences: new forms_1.FormControl(null, null)
        });
    }
    FormElucidationComponent.formattedDate = function (deformedVal) {
        var datePieces = deformedVal.split('/');
        var day = ("0" + datePieces[0]).slice(-2);
        var month = ("0" + datePieces[1]).slice(-2);
        var year = datePieces[2].split(' ')[0];
        return year + "-" + month + "-" + day;
    };
    FormElucidationComponent.prototype.ngOnInit = function () {
    };
    FormElucidationComponent.prototype.remove = function (authorizationId) {
        this.authorizations.splice(authorizationId, 1);
    };
    FormElucidationComponent.prototype._validateForm = function () {
        this.elucidation = {
            _id: this.elucidation._id,
            nup: this.elucidationFormGroup.value.nup || this.elucidation.nup,
            cnpj: this.elucidationFormGroup.value.cnpj || this.elucidation.cnpj,
            date: this.elucidationFormGroup.value.date || this.elucidation.date,
            authorizations: this.authorizations
        };
        return !this.elucidation.nup || !this.elucidation.cnpj || this.authorizations.length === 0;
    };
    FormElucidationComponent.prototype.add = function () {
        var alreadyPersisted = false;
        var authorization = {
            id: this.authorizationFormGroup.value.authorizationCode,
            remedy: this.authorizationFormGroup.value.remedyName,
            date: this.authorizationFormGroup.value.authorizedAt,
            occurrences: this.authorizationFormGroup.value.occurrences
        };
        // tslint:disable-next-line:forin
        for (var i in this.authorizations) {
            var iAuthorization = this.authorizations[i];
            if (iAuthorization.id === authorization.id && iAuthorization.remedy === authorization.remedy) {
                alreadyPersisted = true;
                this.authorizations[i] = authorization;
            }
        }
        // @ts-ignore
        $('#occurrences option:selected').prop('selected', false);
        this.authorizationFormGroup.controls['authorizationCode'].setValue('');
        if (!alreadyPersisted)
            this.authorizations.push(authorization);
    };
    FormElucidationComponent.prototype.save = function () {
        var _this = this;
        if (!this.elucidation._id) {
            this.elucidationService.insertElucidation(this.elucidation)
                .then(function (data) {
                _this.clearInputs();
                setTimeout(function () { return alert('Solicitação registrada com sucesso!'); }, 300);
            });
        }
        else {
            this.elucidationService.updateElucidation(this.elucidation)
                .then(function (data) {
                _this.clearInputs();
                setTimeout(function () { return alert('Solicitação registrada com sucesso!'); }, 300);
            });
        }
    };
    FormElucidationComponent.prototype.clearInputs = function () {
        this.authorizations = [];
        this.elucidationFormGroup.controls['nup'].setValue('');
        this.elucidationFormGroup.controls['cnpj'].setValue('');
        this.elucidationFormGroup.controls['date'].setValue('');
        this.authorizationFormGroup.controls['authorizedAt'].setValue('');
        this.authorizationFormGroup.controls['authorizationCode'].setValue('');
    };
    FormElucidationComponent.prototype.selectTransaction = function (csvTransactionID) {
        var csvTransaction = this.csvTransactions[csvTransactionID];
        this.authorizationFormGroup.controls['authorizationCode'].setValue(csvTransaction[0]);
        this.authorizationFormGroup.controls['remedyName'].setValue(csvTransaction[4]);
        this.authorizationFormGroup.controls['authorizedAt'].setValue(FormElucidationComponent_1.formattedDate(csvTransaction[2]));
        window['ev'] = csvTransactionID;
        console.log('EVENT selectTransaction', this.csvTransactions[csvTransactionID]);
        console.log('selectedTransaction', this.csvSelectedTransaction);
    };
    return FormElucidationComponent;
}());
FormElucidationComponent = FormElucidationComponent_1 = __decorate([
    core_1.Component({
        selector: 'app-form-elucidation',
        templateUrl: './form-elucidation.component.html',
        styleUrls: ['./form-elucidation.component.scss']
    })
], FormElucidationComponent);
exports.FormElucidationComponent = FormElucidationComponent;
var FormElucidationComponent_1;
