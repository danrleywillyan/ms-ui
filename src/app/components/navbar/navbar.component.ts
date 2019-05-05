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
      if (currentLocation === this.lastRoute && this.title) { return this.title; }

      // tslint:disable-next-line:forin
      for (const sii in route.subItems) {
        const iRoute = route.subItems[sii];
        if (window.location.href.indexOf(iRoute['id']) >= 0) {
          return this.title = iRoute['title'];
        }
      }
    }

    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#'){
        titlee = titlee.slice( 2 );
    }
    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Painel Orçamentário';
  }

}
