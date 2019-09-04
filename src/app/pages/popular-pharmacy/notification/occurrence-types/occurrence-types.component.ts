import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ElucidationService} from '../../../../services/elucidation/elucidation.service';

export class OccurrenceType {
  _id: string;
  id: string;
  name: string;
}

@Component({
  selector: 'app-occurrence-types',
  templateUrl: './occurrence-types.component.html',
  styleUrls: ['./occurrence-types.component.scss']
})
export class OccurrenceTypesComponent implements OnInit {

  public occurrencesTypes: OccurrenceType[] = [];
  public occurrencesTypesFormBuilder: FormGroup;

  constructor(private fb: FormBuilder, private elucidationService: ElucidationService) {
    this.occurrencesTypesFormBuilder = new FormGroup({
      id: new FormControl(null),
      idOccurrenceEdit: new FormControl(null),
      name: new FormControl(null, Validators.minLength(2))
    });
  }

  ngOnInit() {
    this.setupList();
  }

  saveOccurrenceType() {
    // tslint:disable-next-line:radix
    const occ_id = `${parseInt(this.occurrencesTypesFormBuilder.controls.id.value)}`;
    const occurrence = this.occurrencesTypes.filter(i => i.id == occ_id)[0] || new OccurrenceType();
    occurrence.id = occ_id;
    occurrence.name = this.occurrencesTypesFormBuilder.controls.name.value;

    if (occurrence._id) {
      this.elucidationService.updateOccurrenceTypes(occurrence)
        .then(() => this.setupList());
    } else {
      this.elucidationService.insertOccurrenceTypes(occurrence)
        .then(() => this.setupList());
    }
  }

  removeOccurrenceType(id) {
    const occurrence = this.occurrencesTypes.filter(i => i.id === id)[0];

    this.elucidationService.deleteOccurrenceTypes(occurrence)
      .then(() => this.setupList());
  }

  reset() {
    this.elucidationService.renewOccurrenceTypes().then(() => {
      this.setupList();
    });
  }

  setupList() {
    this.elucidationService.getOccurrencesTypes()
      .then((data: Array<any>) => {
      this.occurrencesTypes = data.sort((a, b) => a.id - b.id);
    });
  }

}
