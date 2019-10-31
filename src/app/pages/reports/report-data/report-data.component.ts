import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'report-data',
  templateUrl: './report-data.component.html',
  styleUrls: ['./report-data.component.scss']
})

export class ReportDataComponent implements OnInit {

  
  @Input()
  pdf: any;

  constructor() { }

  ngOnInit() {
    this.pdf = `http://${window.location.host}/static/assets/pdfs/(pt)DataReport.pdf`;
  }
}
