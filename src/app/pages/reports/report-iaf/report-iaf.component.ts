import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'report-iaf',
  templateUrl: './report-iaf.component.html',
  styleUrls: ['./report-iaf.component.scss']
})

export class ReportIAFComponent implements OnInit {

  
  @Input()
  pdf: any;

  constructor() { }

  ngOnInit() {
    this.pdf = `http://${window.location.host}/static/assets/pdfs/exploratory_analisys.pdf`;
  }
}
