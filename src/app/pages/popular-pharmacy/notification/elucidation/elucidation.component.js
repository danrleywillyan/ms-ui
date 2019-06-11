"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ElucidationComponent = (function () {
    function ElucidationComponent(elucidationService, router) {
        this.elucidationService = elucidationService;
        this.router = router;
        this.elucidations = [];
        this.elucidation = {};
        this.paragraph = '';
        this.csv_authorizations = [];
    }
    ElucidationComponent.prototype.ngOnInit = function () {
        this.setupList();
    };
    ElucidationComponent.prototype.getAuthorizationsIds = function (elucidation) {
        var authorizations = [];
        for (var _i = 0, _a = elucidation.authorizations; _i < _a.length; _i++) {
            var authorization = _a[_i];
            authorizations.push(authorization.id);
        }
        return authorizations.join();
    };
    ElucidationComponent.prototype.getOccurrencesIds = function (elucidation) {
        var authorizations = [];
        for (var _i = 0, _a = elucidation.authorizations; _i < _a.length; _i++) {
            var authorization = _a[_i];
            authorizations.push(authorization.occurrences.join());
        }
        return authorizations.join();
    };
    ElucidationComponent.prototype.remove = function (elucidation) {
        this.elucidationService.deleteElucidation(elucidation);
        this.setupList();
    };
    ElucidationComponent.prototype.processCSV = function ($event) {
        if ($event.target.files && $event.target.files[0]) {
            // Check for the various File API support.
            if (!window['FileReader'])
                return alert('FileReader are not supported in this browser.');
            else
                this.getAsText($event.target.files[0]);
            // @ts-ignore
            $('#csvTransactions').val('');
        }
        else {
            return alert('Nenhum arquivo encontrado, tente novamente');
        }
    };
    ElucidationComponent.prototype.getAsText = function (fileToRead) {
        var reader = new FileReader();
        // attach event, that will be fired, when read is end
        reader.addEventListener('loadend', function () {
            // reader.result contains the contents of blob as a typed array
            // console.log('reader.result', reader.result);
        });
        // start reading a loaded file
        reader.readAsText(fileToRead);
        // Handle errors load
        reader.onload = this.loadHandler.bind(this);
        reader.onerror = this.errorHandler.bind(this);
    };
    ElucidationComponent.prototype.loadHandler = function (event) {
        var _this = this;
        var csv = event.target.result;
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        for (var i = 0; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
            var tArr = [];
            for (var j = 0; j < data.length; j++) {
                tArr.push(data[j]);
            }
            lines.push(tArr);
        }
        this.csv_authorizations = lines;
        this.elucidationService.insertAuthorizations({ data: lines })
            .then(function (data) {
            _this.csv_authorizations = data.data;
            window['csv_authorizations'] = _this.csv_authorizations;
            // @ts-ignore
            _this.elucidationService.loader.stop();
            // @ts-ignore
            $('[data-dismiss="modal"]').click();
            setTimeout(function () { alert("Registros obtidos do CSV: " + _this.csv_authorizations.length + " elementos"); }, 2000);
        });
    };
    ElucidationComponent.prototype.errorHandler = function (evt) {
        if (evt.target.error.name === 'NotReadableError' || !this.csv_authorizations) {
            alert('O arquivo não é legível!');
        }
    };
    ElucidationComponent.prototype.setupList = function () {
        var _this = this;
        this.elucidationService.getElucidations()
            .then(function (data) {
            _this.elucidations = data;
        });
        this.elucidationService.getAuthorizations()
            .then(function (data) {
            _this.csv_authorizations = data.data;
            window['csv_authorizations'] = _this.csv_authorizations;
        });
    };
    ElucidationComponent.prototype.editElucidation = function (elucidation) {
        window['elucidation'] = elucidation;
        this.router.navigate(['/popular-pharmacy/notification/elucidation/form']);
    };
    ElucidationComponent.prototype.getParagraph = function (elucidation) {
        var _this = this;
        this.elucidation = elucidation;
        this.elucidationService.getElucidationBody(elucidation)
            .then(function (data) {
            _this.paragraph = data.body.map(function (line) { return line.replace(/\(([0-9]{4})-([0-9]{2})-([0-9]{2})\)/g, '($3/$2/$1)'); }).filter(function (line, i, data) { return line !== data[i + 1]; });
        });
    };
    return ElucidationComponent;
}());
ElucidationComponent = __decorate([
    core_1.Component({
        selector: 'app-elucidation',
        templateUrl: './elucidation.component.html',
        styleUrls: ['./elucidation.component.scss']
    })
], ElucidationComponent);
exports.ElucidationComponent = ElucidationComponent;
