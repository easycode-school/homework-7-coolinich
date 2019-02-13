import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth() {
    return localStorage.getItem('username') && localStorage.getItem('password') ? true : false;
  }
}
