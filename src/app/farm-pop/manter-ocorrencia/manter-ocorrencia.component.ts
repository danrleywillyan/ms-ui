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
  occurrenceTypes = [];

  constructor(fb: FormBuilder, private datePipe: DatePipe) {
    this.keepOccurrenceFormBuilder = new FormGroup({
      id: new FormControl(null),
      idOccurrenceAlter: new FormControl(null),
      name: new FormControl(null, Validators.minLength(2))
    });
  }

  ngOnInit() {

    if(localStorage.keepOccurrences){
      this.keepOccurrences = JSON.parse(localStorage.keepOccurrences);
    }else{
      this.occurrenceTypes = [
        {id: 1, name: 'Assinatura do paciente não conforme documento oficial'},
        {id: 2, name: 'Assinatura do procurador  no documento pessoal diverge da apresentada no cupom vinculado'},
        {id: 3, name: 'Ausência da cópia do documento do procurador'},
        {id: 4, name: 'Ausência de endereço da instituição'},
        {id: 5, name: 'Ausência da assinatura do médico'},
        {id: 6, name: 'Ausência da assinatura no cupom vinculado'},
        {id: 7, name: 'Ausência da data de emissão na receita médica'},
        {id: 8, name: 'Ausência da documentação do paciente (CPF)'},
        {id: 9, name: 'Ausência da documentação do responsável (menor)'},
        {id: 10, name: 'Ausência da receita médica'},
        {id: 11, name: 'Ausência de endereço do paciente na receita médica'},
        {id: 12, name: 'Ausência de endereço do paciente no cupom vinculado'},
        {id: 13, name: 'Ausência de toda documentação solicitada'},
        {id: 14, name: 'Ausência do cupom fiscal'},
        {id: 15, name: 'Ausência do cupom vinculado'},
        {id: 16, name: 'Ausência do CRM e nome do médico'},
        {id: 17, name: 'Ausência do nome do paciente na receita médica'},
        {id: 18, name: 'Ausência de autenticação da procuração em cartório'},
        {id: 19, name: 'Ausencia da posologia do medicamento'},
        {id: 20, name: 'Cópia do cupom fiscal ilegível'},
        {id: 21, name: 'Cópia do cupom vinculado ilegível'},
        {id: 22, name: 'Cópia da receita médica ilegível'},
        {id: 23, name: 'Cópia dos documentos do paciente ilegíveis'},
        {id: 24, name: 'Cópia da receita medica com nome ou CRM do médico ilegível'},
        {id: 25, name: 'Cópia da receita médica com CRM do médico diferente do apresentado no sistema autorizador de vendas'},
        {id: 26, name: 'Cópia do cupom vinculado não possui relação com o cupom fiscal'},
        {id: 27, name: 'Cópia da receita medica com data de emissão vencida'},
        {id: 28, name: 'Cópia do cupom vinculado assinado, porém o paciente não é alfabetizado'},
        {id: 29, name: 'Cópia da procuração ilegível'},
        {id: 30, name: 'Cópia da receita médica com data posterior ao dia da autorização'},
        {id: 31, name: 'Cópia da receita medica rasurada'},
        {id: 32, name: 'Cópia da procuração incompleta'},
        {id: 33, name: 'Cópia da documentação do paciente incompleta'},
        {id: 34, name: 'Cópia do cupom fiscal incompleta'},
        {id: 35, name: 'Cópia do cupom vinculado incompleta'},
        {id: 36, name: 'Cópia da documentação do procurador incompleta'},
        {id: 37, name: 'Cópia da receita medica com Data de emissão ilegível'},
        {id: 38, name: 'Cópia da receita medica com endereço do paciente ilegível'},
        {id: 39, name: 'Cópia do cupom vinculado assinado pelo paciente menor de idade'},
        {id: 40, name: 'Cópia do cupom vinculado com endereço do paciente divergente do apresentado na receita'},
        {id: 41, name: 'Cópia da receita medica com o nome do paciente ilegível'},
        {id: 42, name: 'Dispensação de medicamento sem procuração'},
        {id: 43, name: 'Dispensação de medicamento não prescrito na receita médica'},
        {id: 44, name: 'Dispensação de fralda geriátrica para paciente com idade inferior a 60 anos, ou ser pessoa sem deficiência'},
        {id: 45, name: 'Dispensação Intercambialidade incorreta do medicamento'},
        {id: 46, name: 'Dispensação Troca de dosagem do medicamento'},
        {id: 47, name: 'Documento do paciente divergente do apresentado no cupom vinculado'},
        {id: 48, name: 'Procuração com data posterior a dispensação do medicamento'},
        {id: 49, name: 'Ausência da dosagem do medicamento na receita médica (mg/ml)'},
        {id: 50, name: 'Dispensado medicamento X em quantidade superior ao prescrito na receita médica'},
        {id: 51, name: 'Dispensado medicamento X em quantidade superior ao permitido pelo programa'},
        {id: 52, name: 'Ausência de impressão digital ou assinatura do paciente/outorgante na procuração'},
        {id: 53, name: 'Informações do cupom vinculado divergem da apresentada no sistema autorizador de vendas'},
        {id: 54, name: 'Outras'}
      ];

      localStorage.keepOccurrences = JSON.stringify(this.occurrenceTypes);
      this.keepOccurrences = JSON.parse(localStorage.keepOccurrences);
    }
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
