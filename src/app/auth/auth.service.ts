import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

constructor(private router: Router) {}

  message: string;
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  username: string;
  password: string;

  login(username,password): Observable<boolean> {

    if(username == 'admin' && password == 'admin'){
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      );
    }else {
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = false)
      );
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
