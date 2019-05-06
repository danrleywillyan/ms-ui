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
  authorizations: Authorization[];
}

@Component({
  selector: 'app-form-elucidation',
  templateUrl: './form-elucidation.component.html',
  styleUrls: ['./form-elucidation.component.scss']
})
export class FormElucidationComponent implements OnInit {

  public date: Date;
  public authorizations: Authorization[];
  public elucidationFormGroup: FormGroup;
  public authorizationFormGroup: FormGroup;
  public occurrencesTypes = JSON.parse(localStorage.occurrencesTypes);

  constructor(private fb: FormBuilder) {
    this.authorizations = [];

    this.elucidationFormGroup = new FormGroup({
      nup: new FormControl(null, Validators.minLength(2)),
      authorizations: new FormControl(null)
    });

    this.authorizationFormGroup = new FormGroup({
      authorizationCode: new FormControl(null, Validators.minLength(2)),
      authorizedAt: new FormControl(null, Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)),
      occurrences: new FormControl(null, null)
    });



    //
    // this.authorizationsCtrl = this.fb.array([], Validators.minLength(1));
    // // this.profile.emails.forEach((email: any) => this.emailsCtrl.push(this.initEmail(email)));
    //
    //
    // // date: new FormControl(null, Validators.minLength(2)),
    // //   codes: new FormControl(null),
    // //   authorization: new FormControl(null, Validators.minLength(2))
  }

  ngOnInit() {
  }

  remove(i) {

  }

  add() {

  }

  save() {

  }

}
