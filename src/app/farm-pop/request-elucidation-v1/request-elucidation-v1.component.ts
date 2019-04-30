import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'request-elucidation-v1-form',
  templateUrl: './request-elucidation-v1.component.html',
  styleUrls: ['./request-elucidation-v1.component.css']
})
export class RequestElucidationV1Component implements OnInit {

  paragraphs = null;
  editId = -1;
  occurrences = [];
  nups = [];
  occurrenceTypes = [];
  occurrenceFormBuilder: FormGroup;

  constructor(fb: FormBuilder, private datePipe: DatePipe) {
    this.occurrenceFormBuilder = new FormGroup({
      nup: new FormControl(null),
      code: new FormControl(null),
      transaction: new FormControl(null, Validators.minLength(2)),
      occurredAt: new FormControl(null),
    });
  }

  ngOnInit() {
    localStorage.removeItem('occurrences');
    this.occurrences = [];
    if(localStorage.keepOccurrences) this.occurrenceTypes = JSON.parse(localStorage.keepOccurrences);
    if(localStorage.nups) this.nups = JSON.parse(localStorage.nups);
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  registerOccurrence() {

     for(const ocurrence of this.occurrenceFormBuilder.controls.code.value) {
       // TODO validate form
       const occurrence = {nup:'', code: '', occurredAt: '', transaction: '', medicine: ''};
       occurrence.nup = this.occurrenceFormBuilder.controls.nup.value;
       occurrence.code = ocurrence;
       occurrence.medicine = '---';
       occurrence.occurredAt = this.occurrenceFormBuilder.controls.occurredAt.value;
       occurrence.transaction = this.occurrenceFormBuilder.controls.transaction.value;
       this.occurrences.push(occurrence);
       this.nups.push(occurrence);
     }

     localStorage.occurrences[this.occurrenceFormBuilder.controls.nup.value] = JSON.stringify(this.occurrences);
     localStorage.nups = JSON.stringify(this.nups);
     this.occurrenceFormBuilder.controls.code.setValue(null);
  }

  removeOccurrence(id) {
    this.editId = -1;
    this.occurrences.splice(id, 1);
    localStorage.occurrences = JSON.stringify(this.occurrences);
  }

  clearOccurrence() {
    this.occurrenceFormBuilder.controls.nup.setValue(null);
    this.occurrenceFormBuilder.controls.transaction.setValue(null);
    this.occurrenceFormBuilder.controls.code.setValue(null);
    this.occurrenceFormBuilder.controls.occurredAt.setValue(null);
  }

  newRequest() {
    localStorage.removeItem('occurrences');
    this.occurrences = [];
  }

  generateParagraph() {
    this.paragraphs = {};
    this.paragraphs['byTransaction'] = [];
    this.paragraphs['byOccurrenceType'] = [];
    this.occurrenceTypes = JSON.parse(localStorage.keepOccurrences);
    const tmpByOccurrenceType = {};

    for(const occurrence of this.occurrences) {
      const nup = occurrence.nup;
      const transaction = occurrence.transaction;
      const occurredAt = occurrence.occurredAt;
      const occurrenceTypeName = this.occurrenceTypes[parseInt(occurrence.code)].name;

      let occurrenceTypeId = parseInt(occurrence.code);
      const occurrenceType = occurrenceTypeName;

      this.paragraphs['byTransaction'].push(`${transaction} - ${this.transformDate(occurredAt)} - ${occurrenceType};`);

      occurrenceTypeId = occurrenceTypeId;

      if(!tmpByOccurrenceType[occurrenceTypeId]) tmpByOccurrenceType[occurrenceTypeId] = {};
      if(tmpByOccurrenceType[occurrenceTypeId][occurredAt]) tmpByOccurrenceType[occurrenceTypeId][occurredAt].push(transaction);
      else tmpByOccurrenceType[occurrenceTypeId][occurredAt] = [transaction];
    }

    window['tmpByOccurrenceType'] = tmpByOccurrenceType;
    Object.keys(tmpByOccurrenceType).forEach(occurrenceTypeId => {

      const occurrenceTypeName = this.occurrenceTypes[occurrenceTypeId].name;
      Object.keys(tmpByOccurrenceType[occurrenceTypeId]).forEach(occurredAt => {
        const transactions = tmpByOccurrenceType[occurrenceTypeId][occurredAt];
        let transactionsStr = '';
        for(const transaction of transactions) transactionsStr += transaction+';';
        const newOccurrenceTypeName = occurrenceTypeName;
        this.paragraphs['byOccurrenceType'].push(`${newOccurrenceTypeName} (${this.transformDate(occurredAt)}): ${transactionsStr}`);
      });
    });
  }

  alterOccurrence(id) {
    this.editId = id;
  }

  saveOccurrence(id) {
    this.editId = -1;
    const occurrences = this.occurrences;
    const occurrence  = this.occurrences[id];
    localStorage.occurrences = JSON.stringify(occurrences);
    this.occurrences = occurrences;
  }

  searchNup(e:any){
    this.occurrenceFormBuilder.controls.occurredAt.setValue(null);
    this.occurrenceFormBuilder.controls.transaction.setValue(null);
    this.occurrences = this.nups.filter((d)=>(d.nup == e));

    if(!e){
      this.occurrences = [];
    }
  }

  searchAuthorization(e:any){
    const searchAuthorization = JSON.parse(localStorage.authorizations);
    const resultSearch = searchAuthorization.filter((d)=>(d[0] == e));
    if(resultSearch.length > 0){
      let date = resultSearch[0][2].split(" ")[0];
      const dateEn = this.formatDateEn(date);
      this.occurrenceFormBuilder.controls.occurredAt.setValue(dateEn);
    }else{
      this.occurrenceFormBuilder.controls.occurredAt.setValue(null);
    }
  }

  formatDateEn(date){
    let myDate1 = date.replace(/[\/"]/g, '-')  ;
    var arrDate = myDate1.split('-');
    var dateFormat = arrDate[1] + '-' + arrDate[0] + '-' +  arrDate[2];
    var data = new Date(dateFormat);

    let newDate = this.datePipe.transform(data, 'yyyy-MM-dd');
    return newDate;
  }

}
