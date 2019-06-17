import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private jwtHelper: JwtHelperService) { }

  logOut() {
    localStorage.removeItem('jwt');
  }
  isTokenValid() {
    let token = localStorage.getItem('jwt');
    if (token || !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }
}
