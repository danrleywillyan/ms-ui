import { Component, OnInit } from '@angular/core';
import * as data from './remedy-output.json';

@Component({
  selector: 'app-remedy-lifecycle',
  templateUrl: './remedy-lifecycle.component.html',
  styleUrls: ['./remedy-lifecycle.component.scss']
})

export class RemedyLifecycleComponent implements OnInit {

  remedyData: any = data['default'];

  constructor() { }

  ngOnInit() {
    console.log(this.remedyData);
  }

}
