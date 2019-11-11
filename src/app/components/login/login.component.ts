import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {

  message = '';
  subtitle = 'Faça seu login para acessar o sistema';
  public user = { username: '', password: '' };
  constructor() { }

  ngOnInit() {
  }

  start() {
    // @ts-ignore
    $('#login').modal({
      backdrop: 'static', // remove ability to close modal with click
      keyboard: false, // remove option to close with keyboard
      show: true // Display login!
    });
  }

  stop() {
    // @ts-ignore
    $('#login').modal('hide');
  }

  submitLogin() {
      console.log('aaaaa');
    if(this.user.username == 'msdaf' && this.user.password == 'daf2019') {
      localStorage.setItem('user', JSON.stringify(this.user));
      this.stop();
    } else {
      this.message = 'Usuário e senha inválidos.'
    }
  }
}
