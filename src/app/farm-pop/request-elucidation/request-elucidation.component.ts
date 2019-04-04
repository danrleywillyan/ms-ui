import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'request-elucidation-form',
  templateUrl: './request-elucidation.component.html',
  styleUrls: ['./request-elucidation.component.css']
})
export class RequestElucidationComponent implements OnInit {

  occurrenceCode: string;
  transactionCode: string;
  transactionDate: Date;
  occurrenceFormBuilder: FormGroup;

  constructor(fb: FormBuilder) {
    this.occurrenceFormBuilder = new FormGroup({
      transactionCode: new FormControl('Transaction Code', Validators.minLength(2)),
      occurrenceCode: new FormControl('Occurrence Code'),
    });
  }

  ngOnInit() {
  }

  generateParagraph() {}
}
