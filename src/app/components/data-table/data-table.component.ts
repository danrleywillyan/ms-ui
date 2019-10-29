import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {

  
  @Input() tableData: any;
  headerTable: any;
  contentTable: any;
  headerContentTable: any;
  headerTableKeys: any;

  constructor() { }

  ngOnInit() {
    this.headerTable = this.tableData[0];
    this.headerTableKeys = Object.keys(this.headerTable[0]);
    
    this.contentTable = this.tableData[1];
    this.headerContentTable = Object.keys(this.contentTable[0]);
    
  }

}
