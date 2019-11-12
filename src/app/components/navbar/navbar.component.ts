import {Component, OnInit, ElementRef, Injectable} from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

@Injectable()
export class NavbarComponent implements OnInit {
  public focus;
  public title;
  public pageTitle;
  public lastRoute = '/';
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = [].concat(...ROUTES.map(listTitle => listTitle.subItems ? listTitle.subItems : listTitle));
  }

  getTitle() {
    const currentLocation = window.location.href;

    if (currentLocation.split('/')[3] === '') return this.title = 'Ciclo da Assistência Farmacêutica';
    if (currentLocation.indexOf('templates') >= 0) return this.title = 'Template URL';

    // tslint:disable-next-line:forin
    for (const i in ROUTES) {
      const route = ROUTES[i];
      const foundRoute = currentLocation.indexOf(route.id) >= 0;
      if (foundRoute) {
        // tslint:disable-next-line:forin
        for (const sii in this.listTitles) {
          const iRoute = this.listTitles[sii];
          if (window.location.href.indexOf(iRoute['path']) >= 0) {
            this.lastRoute = iRoute['path'];
            return this.title = iRoute['title'];
          }
        }
      }
    }
  }

  logout() {
    localStorage.clear();
    location.reload();
  }

}
