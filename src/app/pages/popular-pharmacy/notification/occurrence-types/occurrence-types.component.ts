import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ElucidationService} from '../../../../services/elucidation/elucidation.service';

export class OccurrenceType {
  _id: string;
  id: number;
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
    let occ_id = this.occurrencesTypesFormBuilder.controls.id.value;
    const occurrence = this.occurrencesTypes.filter(i => i.id == occ_id)[0] || new OccurrenceType();
    occurrence.id = occ_id;
    occurrence.name = this.occurrencesTypesFormBuilder.controls.name.value;

    if(occurrence._id) this.elucidationService.updateOccurrenceTypes(occurrence)
      .subscribe(() => this.setupList());
    else this.elucidationService.insertOccurrenceTypes(occurrence)
      .subscribe(() => this.setupList());
  }

  removeOccurrenceType(id) {
    const occurrence = this.occurrencesTypes.filter(i => i.id == id)[0];
    console.log(occurrence)
    this.elucidationService.deleteOccurrenceTypes(occurrence)
      .subscribe(() => this.setupList());
  }

  reset() {
    this.setupList();
  }

  setupList() {
    this.elucidationService.getOccurrencesTypes()
      .subscribe((data:Array<any>) => {
      this.occurrencesTypes = data.sort((a,b) => a.id - b.id);
    });
  }

}
