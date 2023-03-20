import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable
  ({
    providedIn: 'root'
  })
export class AuthService {
  isUserLoggedIn: boolean = false;
  isauthen: boolean = false;

  login(username: string, password: string, email: string): Observable<boolean> {
    this.isUserLoggedIn = username == 'sowmya' && password == 'abcd' && email == 'abc@gmail.com';
    localStorage.setItem('isUserLoggedIn', JSON.stringify({ username, password, email }));
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("Authentication is successful: " + val);
      })
    );
  }
  public isAuthenticated(): boolean {
    localStorage.getItem('isUserLoggedIn') ? this.isauthen = true : this.isauthen = false
    return this.isauthen;
  }
  constructor() { }
}
