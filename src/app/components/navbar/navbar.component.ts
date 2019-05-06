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
    this.listTitles = [].concat(...ROUTES.map(listTitle => listTitle.subItems));
  }

  getTitle() {
    // ROUTES
    // tslint:disable-next-line:forin
    for (const i in ROUTES) {
      const route = ROUTES[i];
      const currentLocation = window.location.href.indexOf(route.id) >= 0;
      if (currentLocation) {
        // tslint:disable-next-line:forin
        for (const sii in route.subItems) {
          const iRoute = route.subItems[sii];
          if (window.location.href.indexOf(iRoute['path']) >= 0) {
            this.lastRoute = iRoute['path'];
            return this.title = iRoute['title'];
          }
        }
      }
    }

    if (!this.title) {
      this.lastRoute = '/budget/dashboard';
      return 'Título Padrão';
    }
  }

}
