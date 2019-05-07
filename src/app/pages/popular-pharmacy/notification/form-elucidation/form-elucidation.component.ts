import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
  date?: Date;
  authorizations: Authorization[];
}

@Component({
  selector: 'app-form-elucidation',
  templateUrl: './form-elucidation.component.html',
  styleUrls: ['./form-elucidation.component.scss']
})
export class FormElucidationComponent implements OnInit {

  public date: Date;
  public csvTransactions = [];
  public occurrencesTypes: object;
  public authorizations: Authorization[];
  public elucidationFormGroup: FormGroup;
  public authorizationFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authorizations = [];
    if (localStorage.occurrencesTypes) this.occurrencesTypes = JSON.parse(localStorage.occurrencesTypes);

    if (window['csv_authorizations']) {
      this.csvTransactions = window['csv_authorizations'];
      this.csvTransactions = this.csvTransactions.slice(1);
      console.log(this.csvTransactions);
    }

    this.elucidationFormGroup = new FormGroup({
      nup: new FormControl(null, Validators.minLength(2)),
      date: new FormControl(null),
      authorizations: new FormControl(null)
    });

    this.authorizationFormGroup = new FormGroup({
      authorizationCode: new FormControl(null, Validators.minLength(2)),
      authorizedAt: new FormControl(null, Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)),
      occurrences: new FormControl(null, null)
    });
  }

  ngOnInit() {
  }

  remove(authorizationId) {
    this.authorizations.splice(authorizationId, 1);
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
    let elucidations = [];
    if (localStorage.elucidations) elucidations = JSON.parse(localStorage.elucidations);

    const elucidation: Elucidation = {
      nup: this.elucidationFormGroup.value.nup,
      date: this.elucidationFormGroup.value.date,
      authorizations: this.authorizations
    };

    elucidations.push(elucidation);
    localStorage.elucidations = JSON.stringify(elucidations);

    this.clearInputs();
    alert('Solicitação registrada com sucesso!');
  }

  clearInputs() {
    this.authorizations = [];
    this.elucidationFormGroup.controls['nup'].setValue('');
    this.elucidationFormGroup.controls['date'].setValue('');
    this.authorizationFormGroup.controls['authorizedAt'].setValue('');
    this.authorizationFormGroup.controls['authorizationCode'].setValue('');
  }

}
