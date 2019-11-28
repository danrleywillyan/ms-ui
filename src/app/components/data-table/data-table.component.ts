import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
  
  @Input() filtersData: any;
  @Input() tableData: any;

  headerData = [];
  analyticData = [];

  constructor(){}

  ngOnInit() {
    if(!this.tableData) return;

    this.headerData = Object.keys(this.tableData[0]);
    this.analyticData = this.tableData;
  } 
}
