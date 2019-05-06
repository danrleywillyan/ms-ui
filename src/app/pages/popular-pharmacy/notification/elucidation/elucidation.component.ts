import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-elucidation',
  templateUrl: './elucidation.component.html',
  styleUrls: ['./elucidation.component.scss']
})
export class ElucidationComponent implements OnInit {

  public elucidations = [];

  constructor() {}

  ngOnInit() {
    if (localStorage.elucidations) this.elucidations = JSON.parse(localStorage.elucidations);
  }

  getAuthorizationsIds(elucidation) {
    const authorizations = [];
    for (const authorization of elucidation.authorizations) {
      authorizations.push(authorization.id);
    }

    return authorizations.join();
  }

  getOccurrencesIds(elucidation) {
    const authorizations = [];
    for (const authorization of elucidation.authorizations) {
      authorizations.push(authorization.occurrences.join());
    }

    return authorizations.join();
  }

}
