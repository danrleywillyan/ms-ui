import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manter-ocorrencia',
  templateUrl: './manter-ocorrencia.component.html',
  styleUrls: ['./manter-ocorrencia.component.css']
})
export class ManterOcorrenciaComponent implements OnInit {

  keepOccurrences = [];
  keepOccurrenceFormBuilder: FormGroup;

  constructor(fb: FormBuilder, private datePipe: DatePipe) {
    this.keepOccurrenceFormBuilder = new FormGroup({
      id: new FormControl(null),
      idOccurrenceAlter: new FormControl(null),
      name: new FormControl(null, Validators.minLength(2))
    });
  }

  ngOnInit() {
    if(localStorage.keepOccurrences) this.keepOccurrences = JSON.parse(localStorage.keepOccurrences);
  }

  registerKeepOccurrence() {

    if(this.keepOccurrenceFormBuilder.controls.idOccurrenceAlter.value != null) {
      this.saveOccurrence(this.keepOccurrenceFormBuilder.controls.idOccurrenceAlter.value);
    } else {
      // TODO validate form
      const keepOccurrence = {id: '', name: ''};
      keepOccurrence.id = this.keepOccurrenceFormBuilder.controls.id.value;
      keepOccurrence.name = `${ this.keepOccurrenceFormBuilder.controls.id.value } - ${this.keepOccurrenceFormBuilder.controls.name.value}`;

      this.keepOccurrences.push(keepOccurrence);
      localStorage.keepOccurrences = JSON.stringify(this.keepOccurrences);
    }

    this.keepOccurrenceFormBuilder.controls.id.setValue(null);
    this.keepOccurrenceFormBuilder.controls.name.setValue(null);
    this.keepOccurrenceFormBuilder.controls.idOccurrenceAlter.setValue(null);

  }

  removeOccurrence(id) {
    this.keepOccurrences.splice(id, 1);
    localStorage.keepOccurrences = JSON.stringify(this.keepOccurrences);
  }

  alterOccurrence(id) {
   const occurrence = JSON.parse(localStorage.keepOccurrences);
   this.keepOccurrenceFormBuilder.controls.id.setValue(occurrence[id].id);
   this.keepOccurrenceFormBuilder.controls.name.setValue(occurrence[id].name);
   this.keepOccurrenceFormBuilder.controls.idOccurrenceAlter.setValue(id);
  }

  saveOccurrence(id=null) {
    const occurrences = JSON.parse(localStorage.keepOccurrences);
    if(id) {
      const occurrence  = JSON.parse(localStorage.keepOccurrences)[id];
      occurrence.id = this.keepOccurrenceFormBuilder.controls.id.value;
      occurrence.name = this.keepOccurrenceFormBuilder.controls.name.value;
      occurrences[id] = occurrence;
    }

    localStorage.keepOccurrences = JSON.stringify(occurrences);
    this.keepOccurrences = occurrences;
  }

}
