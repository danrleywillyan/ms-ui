import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'report-cnes',
  templateUrl: './report-cnes.component.html',
  styleUrls: ['./report-cnes.component.scss']
})

export class ReportCNESComponent implements OnInit {

  
  @Input()
  pdf: any;

  constructor() { }

  ngOnInit() {
    this.pdf = `http://${window.location.host}/static/assets/pdfs/CNES BD.pdf`;
  }
}
