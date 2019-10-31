import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'report-ia',
  templateUrl: './report-ia.component.html',
  styleUrls: ['./report-ia.component.scss']
})

export class ReportIAComponent implements OnInit {

  
  @Input()
  pdf: any;

  constructor() { }

  ngOnInit() {
    this.pdf = `http://${window.location.host}/static/assets/pdfs/MLPMicroset.pdf`;
  }
}
