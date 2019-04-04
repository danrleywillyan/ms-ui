import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'request-elucidation-form',
  templateUrl: './request-elucidation.component.html',
  styleUrls: ['./request-elucidation.component.css']
})
export class RequestElucidationComponent implements OnInit {

  paragraphs = null;
  occurrences = [];
  occurrenceFormBuilder: FormGroup;
  occurrenceTypes = [
    {id: 1, name: '01 - [Assinatura] do paciente não conforme documento oficial'},
    {id: 2, name: '02 - [Assinatura] do procurador  no documento pessoal diverge da apresentada no cupom vinculado'},
    {id: 3, name: '03 - [Ausência] da cópia do documento do procurador'},
    {id: 4, name: '04 - [Ausência] de endereço da instituição'},
    {id: 5, name: '05 - [Ausência] da assinatura do médico'},
    {id: 6, name: '06 - [Ausência] da assinatura no cupom vinculado'},
    {id: 7, name: '07 - [Ausência] da data de emissão na receita médica'},
    {id: 8, name: '08 - [Ausência] da documentação do paciente (CPF)'},
    {id: 9, name: '09 - [Ausência] da documentação do responsável (menor)'},
    {id: 10, name: '10 - [Ausência] da receita médica'},
    {id: 11, name: '11 - [Ausência] de endereço do paciente na receita médica'},
    {id: 12, name: '12 - [Ausência] de endereço do paciente no cupom vinculado'},
    {id: 13, name: '13 - [Ausência] de toda documentação solicitada'},
    {id: 14, name: '14 - [Ausência] do cupom fiscal'},
    {id: 15, name: '15 - [Ausência] do cupom vinculado'},
    {id: 16, name: '16 - [Ausência] do CRM e nome do médico'},
    {id: 17, name: '17 - [Ausência] do nome do paciente na receita médica'},
    {id: 18, name: '18 - [Ausência] de autenticação da procuração em cartório'},
    {id: 19, name: '19 - [Ausencia] da posologia do medicamento'},
    {id: 20, name: '20 - [Cópia] do cupom fiscal ilegível'},
    {id: 21, name: '21 - [Cópia] do cupom vinculado ilegível'},
    {id: 22, name: '22 - [Cópia] da receita médica ilegível'},
    {id: 23, name: '23 - [Cópia] dos documentos do paciente ilegíveis'},
    {id: 24, name: '24 - [Cópia] da receita medica com nome ou CRM do médico ilegível'},
    {id: 25, name: '25 - [Cópia] da receita médica com CRM do médico diferente do apresentado no sistema autorizador de vendas'},
    {id: 26, name: '26 - [Cópia] do cupom vinculado não possui relação com o cupom fiscal'},
    {id: 27, name: '27 - [Cópia] da receita medica com data de emissão vencida'},
    {id: 28, name: '28 - [Cópia] do cupom vinculado assinado, porém o paciente não é alfabetizado'},
    {id: 29, name: '29 - [Cópia] da procuração ilegível'},
    {id: 30, name: '30 - [Cópia] da receita médica com data posterior ao dia da autorização'},
    {id: 31, name: '31 - [Cópia] da receita medica rasurada'},
    {id: 32, name: '32 - [Cópia] da procuração incompleta'},
    {id: 33, name: '33 - [Cópia] da documentação do paciente incompleta'},
    {id: 34, name: '34 - [Cópia] do cupom fiscal incompleta'},
    {id: 35, name: '35 - [Cópia] do cupom vinculado incompleta'},
    {id: 36, name: '36 - [Cópia] da documentação do procurador incompleta'},
    {id: 37, name: '37 - [Cópia] da receita medica com Data de emissão ilegível'},
    {id: 38, name: '38 - [Cópia] da receita medica com endereço do paciente ilegível'},
    {id: 39, name: '39 - [Cópia] do cupom vinculado assinado pelo paciente menor de idade'},
    {id: 40, name: '40 - [Cópia] do cupom vinculado com endereço do paciente divergente do apresentado na receita'},
    {id: 41, name: '41 - [Cópia] da receita medica com o nome do paciente ilegível'},
    {id: 42, name: '42 - [Dispensação] de medicamento sem procuração'},
    {id: 43, name: '43 - [Dispensação] de medicamento não prescrito na receita médica'},
    {id: 44, name: '44 - [Dispensação] de fralda geriátrica para paciente com idade inferior a 60 anos, ou ser pessoa sem deficiência'},
    {id: 45, name: '45 - [Dispensação] Intercambialidade incorreta do medicamento'},
    {id: 46, name: '46 - [Dispensação] Troca de dosagem do medicamento'},
    {id: 47, name: '47 - [Documento] do paciente divergente do apresentado no cupom vinculado'},
    {id: 48, name: '48 - [Procuração] com data posterior a dispensação do medicamento'}
  ];

  constructor(fb: FormBuilder, private datePipe: DatePipe) {
    this.occurrenceFormBuilder = new FormGroup({
      code: new FormControl(null),
      transaction: new FormControl(null, Validators.minLength(2)),
      occurredAt: new FormControl(null),
    });
  }

  ngOnInit() {
    if(localStorage.occurrences) this.occurrences = JSON.parse(localStorage.occurrences);
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  registerOccurrence() {
    // TODO validate form
    const occurrence = {code: '', occurredAt: '', transaction: ''};
    occurrence.code = this.occurrenceFormBuilder.controls.code.value;
    occurrence.occurredAt = this.occurrenceFormBuilder.controls.occurredAt.value;
    occurrence.transaction = this.occurrenceFormBuilder.controls.transaction.value;
    this.occurrences.push(occurrence);
    localStorage.occurrences = JSON.stringify(this.occurrences);

    this.occurrenceFormBuilder.controls.code.setValue(null);
    this.occurrenceFormBuilder.controls.occurredAt.setValue(null);
    this.occurrenceFormBuilder.controls.transaction.setValue(null);
  }

  removeOccurrence(id) {
    this.occurrences.splice(id, 1);
    localStorage.occurrences = JSON.stringify(this.occurrences);
  }

  newRequest() {
    localStorage.clear();
    this.occurrences = [];
  }

  generateParagraph() {
    this.paragraphs = {};
    this.paragraphs['byTransaction'] = [];
    this.paragraphs['byOccurrenceType'] = [];
    const tmpByOccurrenceType = {};

    for(const occurrence of this.occurrences) {
      const transaction = occurrence.transaction;
      const occurredAt = occurrence.occurredAt;
      const occurrenceTypeName = this.occurrenceTypes[occurrence.code].name;
      const occurrenceTypeId = parseInt(occurrenceTypeName.substr(0, 2), 10);
      const occurrenceType = occurrenceTypeName.substr(5, occurrenceTypeName.length);

      this.paragraphs['byTransaction'].push(`${transaction} - ${this.transformDate(occurredAt)} - ${occurrenceType};`);

      if(!tmpByOccurrenceType[occurrenceTypeId]) tmpByOccurrenceType[occurrenceTypeId] = {};
      if(tmpByOccurrenceType[occurrenceTypeId][occurredAt]) tmpByOccurrenceType[occurrenceTypeId][occurredAt].push(transaction);
      else tmpByOccurrenceType[occurrenceTypeId][occurredAt] = [transaction];
    }

    Object.keys(tmpByOccurrenceType).forEach(occurrenceTypeId => {
      const occurrenceTypeName = this.occurrenceTypes[occurrenceTypeId].name;
      Object.keys(tmpByOccurrenceType[occurrenceTypeId]).forEach(occurredAt => {
        const transactions = tmpByOccurrenceType[occurrenceTypeId][occurredAt];
        let transactionsStr = '';
        for(const transaction of transactions) transactionsStr += transaction+';';

        this.paragraphs['byOccurrenceType'].push(`${occurrenceTypeName} (${this.transformDate(occurredAt)}): ${transactionsStr}`);
      });
    });
  }

}
