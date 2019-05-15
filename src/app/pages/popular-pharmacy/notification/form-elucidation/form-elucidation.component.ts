import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ElucidationService} from '../../../../services/elucidation/elucidation.service';

export class Occurrence {
  id: number;
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
}

@Component({
  selector: 'app-form-elucidation',
  templateUrl: './form-elucidation.component.html',
  styleUrls: ['./form-elucidation.component.scss']
})
export class FormElucidationComponent implements OnInit {

  constructor(private fb: FormBuilder, private elucidationService: ElucidationService) {
    this.authorizations = [];
    this.elucidationService.getOccurrencesTypes().then( (data: any) => {
      this.occurrencesTypes = data;
    });

    this.elucidation = new Elucidation();
    if(window['elucidation']) {
      this.elucidation = window['elucidation'];
      window['elucidation'] = undefined;
      this.authorizations = this.elucidation.authorizations;
    }

    this.elucidationService.getAuthorizations()
      .then((data: any) => {
      window['csv_authorizations'] = data.data;
      this.csvTransactions = window['csv_authorizations'];
      this.csvTransactions = this.csvTransactions.slice(1);
    });

    this.elucidationFormGroup = new FormGroup({
      nup: new FormControl(null, Validators.minLength(2)),
      cnpj: new FormControl(null, Validators.minLength(2)),
      date: new FormControl(null),
      authorizations: new FormControl(null)
    });

    this.authorizationFormGroup = new FormGroup({
      authorizationCode: new FormControl(null, Validators.minLength(2)),
      authorizedAt: new FormControl(null, Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)),
      occurrences: new FormControl(null, null)
    });
  }

  public date: Date;
  public csvTransactions = [];
  public occurrencesTypes = [];
  public csvSelectedTransaction: object;
  public authorizations: Authorization[];
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

  _validateForm() {
    this.elucidation = {
      _id: this.elucidation._id,
      nup: this.elucidationFormGroup.value.nup || this.elucidation.nup,
      cnpj: this.elucidationFormGroup.value.cnpj || this.elucidation.cnpj,
      date: this.elucidationFormGroup.value.date || this.elucidation.date,
      authorizations: this.authorizations
    };
    return !this.elucidation.nup || !this.elucidation.cnpj || !this.elucidation.date || this.authorizations.length == 0; 
  }

  add() {
    let alreadyPersisted = false;
    const authorization = {
      id: this.authorizationFormGroup.value.authorizationCode,
      date: this.authorizationFormGroup.value.authorizedAt,
      occurrences: this.authorizationFormGroup.value.occurrences
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
    this.authorizationFormGroup.controls['authorizationCode'].setValue('');
    if (!alreadyPersisted) this.authorizations.push(authorization);
  }

  save() {
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
          setTimeout(() => alert('Solicitação registrada com sucesso!'), 300);
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
  }

  selectTransaction(csvTransactionID) {
    const csvTransaction = this.csvTransactions[csvTransactionID];
    this.authorizationFormGroup.controls['authorizationCode'].setValue(csvTransaction[0]);
    console.log('formatted date: ', FormElucidationComponent.formattedDate(csvTransaction[2]));
    this.authorizationFormGroup.controls['authorizedAt'].setValue(FormElucidationComponent.formattedDate(csvTransaction[2]));
    window['ev'] = csvTransactionID;
    console.log('EVENT selectTransaction', this.csvTransactions[csvTransactionID]);
    console.log('selectedTransaction', this.csvSelectedTransaction);
  }
}
