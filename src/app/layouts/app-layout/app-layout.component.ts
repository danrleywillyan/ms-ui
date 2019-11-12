import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  providers: [LoginComponent],
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor(public login: LoginComponent) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if(!user) {
      this.login.start();
    } else {}
  }

}
