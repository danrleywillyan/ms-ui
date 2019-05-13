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
  date?: Date;
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
    this.elucidationService.getOccurrencesTypes().subscribe( (data: any) => {
      this.occurrencesTypes = data;
    });

    this.elucidationService.getAuthorizations()
      .subscribe((data: any) => {
      window['csv_authorizations'] = data.data;
      this.csvTransactions = window['csv_authorizations'];
      this.csvTransactions = this.csvTransactions.slice(1);
    });

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

  public date: Date;
  public csvTransactions = [];
  public occurrencesTypes = [];
  public csvSelectedTransaction: object;
  public authorizations: Authorization[];
  public elucidationFormGroup: FormGroup;
  public authorizationFormGroup: FormGroup;

  public static formattedDate(deformedVal) {
    const datePieces = deformedVal.split('/');

    let day = datePieces[0];
    const month = datePieces[1];
    const year = datePieces[2].split(' ')[0];

    if (day.length === 1) day = `0${day}`;
    return `${year}-${month}-${day}`;
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
    const elucidation: Elucidation = {
      nup: this.elucidationFormGroup.value.nup,
      date: this.elucidationFormGroup.value.date,
      authorizations: this.authorizations
    };

    this.elucidationService.insertElucidation(elucidation)
      .subscribe((data) => {
        this.clearInputs();
        setTimeout(() => alert('Solicitação registrada com sucesso!'), 300);
      });
  }

  clearInputs() {
    this.authorizations = [];
    this.elucidationFormGroup.controls['nup'].setValue('');
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
