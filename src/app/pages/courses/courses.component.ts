import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'show-pdf',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  
  @Input()
  pdf: any;

  constructor() { }

  ngOnInit() {
    this.pdf = `http://${window.location.host}/static/assets/pdfs/Assistência Farmacêutica 4.0  caminhos para a implementação.pdf`;
  }
}
