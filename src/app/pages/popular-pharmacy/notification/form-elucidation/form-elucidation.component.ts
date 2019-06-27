import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ElucidationService} from '../../../../services/elucidation/elucidation.service';

declare var $: any;

export class Occurrence {
  id: number;
  remedy: string;
}

export class Authorization {
  id: number;
  date: Date;
  occurrences: Occurrence[];
}

export class Elucidation {
  nup: string;
  cnpj: string;
  date?: Date;
  _id?: string;
  authorizations: Authorization[];
  csv_authorizations?: any[];
}

@Component({
  selector: 'app-form-elucidation',
  templateUrl: './form-elucidation.component.html',
  styleUrls: ['./form-elucidation.component.scss']
})
export class FormElucidationComponent implements OnInit {

  public filterTransactions: string;

  constructor(private fb: FormBuilder, private elucidationService: ElucidationService) {
    this.authorizations = [];
    this.occurrences = [];
    this.elucidationService.getOccurrencesTypes().then( (data: any) => {
      this.occurrencesTypes = data;
    });

    this.elucidation = new Elucidation();
    if (window['elucidation']) {
      this.elucidation = window['elucidation'];
      window['elucidation'] = undefined;
      this.authorizations = this.elucidation.authorizations;
      this.csvTransactions = this.elucidation.csv_authorizations;
    }


    this.elucidationFormGroup = new FormGroup({
      nup: new FormControl(null, Validators.minLength(2)),
      cnpj: new FormControl(null, Validators.minLength(2)),
      date: new FormControl(null),
      authorizations: new FormControl(null),
      csv: new FormControl(null, null)
    });

    this.authorizationFormGroup = new FormGroup({
      authorizationCode: new FormControl(null, Validators.minLength(2)),
      remedyName: new FormControl(null, Validators.minLength(2)),
      authorizedAt: new FormControl(null, Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)),
      occurrences: new FormControl(null, null)

    });
  }

  public date: Date;
  public csvTransactions = [];
  public occurrencesTypes = [];
  public csvSelectedTransaction: object;
  public authorizations: Authorization[];
  public authorization: Authorization;
  public occurrences: Occurrence[];
  public elucidation: Elucidation;
  public elucidationFormGroup: FormGroup;
  public authorizationFormGroup: FormGroup;

  public static formattedDate(deformedVal) {
    const datePieces = deformedVal.split('/');

    const day = `0${datePieces[0]}`.slice(-2);
    const month = `0${datePieces[1]}`.slice(-2);
    const year = datePieces[2].split(' ')[0];

    return `${year}-${month}-${day}`;
  }

  ngOnInit() {
  }

  remove(authorizationId) {
    this.authorizations.splice(authorizationId, 1);
  }

  edit(authorizationId) {
    this.authorization = this.authorizations[authorizationId];
    this.authorizationFormGroup.controls['authorizationCode'].setValue(this.authorization.id);
    this.authorizationFormGroup.controls['authorizedAt'].setValue(this.authorization.date);
    this.occurrences = this.authorization.occurrences;
    $('#authorization')[0].scrollIntoView();
  }


  _validateForm() {
    this.elucidation = {
      _id: this.elucidation._id,
      nup: this.elucidationFormGroup.value.nup || this.elucidation.nup,
      cnpj: this.elucidationFormGroup.value.cnpj || this.elucidation.cnpj,
      date: this.elucidationFormGroup.value.date || this.elucidation.date,
      authorizations: this.authorizations,
      csv_authorizations: this.elucidation.csv_authorizations
    };

    return !this.elucidation.nup || !this.elucidation.cnpj ;
  }

  add() {
    let alreadyPersisted = false;
    const occurrence = {
      id: this.authorizationFormGroup.value.occurrences,
      remedy: this.authorizationFormGroup.value.remedyName,
    } as Occurrence;

    for (const c in this.occurrences) {
      const iOccurrence = this.occurrences[c];
      if (iOccurrence.id === occurrence.id) {
        alreadyPersisted = true;
        this.occurrences[c] = occurrence;
      }
    }
    if (!alreadyPersisted) this.occurrences.push(occurrence);

    alreadyPersisted = false;
    const authorization = this.authorization = {
      id: this.authorizationFormGroup.value.authorizationCode,
      date: this.authorizationFormGroup.value.authorizedAt,
      occurrences: this.occurrences
    } as Authorization;

    // tslint:disable-next-line:forin
    for (const i in this.authorizations) {
      const iAuthorization = this.authorizations[i];
      if (iAuthorization.id === authorization.id) {
        alreadyPersisted = true;
        this.authorizations[i] = authorization;
      }
    }

    // @ts-ignore
    $('#occurrences option:selected').prop('selected', false);
    if (!alreadyPersisted) this.authorizations.push(authorization);
  }

  removeOccurence(id) {
    this.occurrences.splice(id, 1);
  }

  save() {
    if (!this.elucidation._id) {
      this.elucidationService.insertElucidation(this.elucidation)
        .then((data:Elucidation) => {
          this.csvTransactions = data.csv_authorizations;
          this.elucidation = data;
          setTimeout(() => alert('Solicitação registrada com sucesso!'), 300);
        });
    } else {
      this.elucidationService.updateElucidation(this.elucidation)
        .then((data:Elucidation) => {
          this.csvTransactions = data.csv_authorizations;
          this.elucidation = data;
          setTimeout(() => alert('Solicitação atualizada com sucesso!'), 300);
        });
    }
    this.authorizationFormGroup.controls['authorizationCode'].setValue('');
  }

  saveAndClear() {
    if (!this.elucidation._id) {
      this.elucidationService.insertElucidation(this.elucidation)
        .then((data) => {
          this.clearInputs();
          setTimeout(() => alert('Solicitação registrada com sucesso!'), 300);
        });
    } else {
      this.elucidationService.updateElucidation(this.elucidation)
        .then((data) => {
          this.clearInputs();
          setTimeout(() => alert('Solicitação atualizada com sucesso!'), 300);
        });
    }
  }

  clearInputs() {
    this.authorizations = [];
    this.elucidationFormGroup.controls['nup'].setValue('');
    this.elucidationFormGroup.controls['cnpj'].setValue('');
    this.elucidationFormGroup.controls['date'].setValue('');
    this.authorizationFormGroup.controls['authorizedAt'].setValue('');
    this.authorizationFormGroup.controls['authorizationCode'].setValue('');
    this.csvTransactions = [];
  }

  selectTransaction(csvTransactionID) {
    if (!csvTransactionID) return;
    const csvTransaction = this.csvTransactions[csvTransactionID];
    this.authorizationFormGroup.controls['authorizationCode'].setValue(csvTransaction[0]);
    this.authorizationFormGroup.controls['remedyName'].setValue(csvTransaction[4]);
    this.authorizationFormGroup.controls['authorizedAt'].setValue(FormElucidationComponent.formattedDate(csvTransaction[2]));
    if (csvTransaction[0] !== this.authorization.id) this.occurrences = [];
    const authorization = this.authorization = {
      id: csvTransaction[0],
      date: new Date(csvTransaction[2]),
      occurrences: this.occurrences
    } as Authorization;
  }

  processCSV($event) {
    if ($event.target.files && $event.target.files[0]) {
      // Check for the various File API support.
      if (!window['FileReader']) return alert('FileReader are not supported in this browser.');
      else this.getAsText($event.target.files[0]);

      // @ts-ignore
      $('#csvTransactions').val('');
    } else {
      return alert('Nenhum arquivo encontrado, tente novamente');
    }
  }

  getAsText(fileToRead) {
    const reader = new FileReader();

    // attach event, that will be fired, when read is end
    reader.addEventListener('loadend', function() {
      // reader.result contains the contents of blob as a typed array
      // console.log('reader.result', reader.result);
    });

    // start reading a loaded file
    reader.readAsText(fileToRead);

    // Handle errors load
    reader.onload = this.loadHandler.bind(this);
    reader.onerror = this.errorHandler.bind(this);
  }

  loadHandler(event) {
    const csv = event.target.result;
    const allTextLines = csv.split(/\r\n|\n/);
    const lines = [];
    for (let i = 0; i < allTextLines.length; i++) {
      const data = allTextLines[i].split(';');
      const tArr = [];
      for (let j = 0; j < data.length; j++) {
        tArr.push(data[j]);
      }
      if(i!==0)lines.push(tArr);
    }

    this.elucidation.csv_authorizations = lines;

  }

  errorHandler(evt) {
    if (evt.target.error.name === 'NotReadableError' || !this.elucidation.csv_authorizations) {
      alert('O arquivo não é legível!');
    }
  }






}
