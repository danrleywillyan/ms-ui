import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title;
  public focus;
  public lastRoute;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = [].concat(...ROUTES.map(listTitle => listTitle.subItems));
  }

  getTitle() {
    // ROUTES
    // tslint:disable-next-line:forin
    for (const i in ROUTES) {
      const route = ROUTES[i];
      const currentLocation = window.location.href.indexOf(route.id) >= 0;
      console.log('currentLocation', currentLocation);
      if (currentLocation === this.lastRoute && this.title) { return this.title; }

      // tslint:disable-next-line:forin
      for (const sii in route.subItems) {
        const iRoute = route.subItems[sii];
        console.log('iRoute', iRoute);
        if (window.location.href.indexOf(iRoute['path']) >= 0) {
          console.log('this.title', this.title);
          return this.title = iRoute['title'];
        }
      }
    }

    if (!this.title) { return 'Título Padrão'; }
  }

}
