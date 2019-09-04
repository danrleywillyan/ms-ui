import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/templates/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/templates/icons', title: 'Icons',  icon: 'ni-planet text-blue', class: '' },
    { path: '/templates/maps', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/templates/user-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/templates/tables', title: 'Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/templates/login', title: 'Login',  icon: 'ni-key-25 text-info', class: '' },
    { path: '/templates/register', title: 'Register',  icon: 'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-templates-sidebar',
  templateUrl: './templates-sidebar.component.html',
  styleUrls: ['./templates-sidebar.component.scss']
})
export class TemplateSidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
