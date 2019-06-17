import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  removeToken() {
    localStorage.removeItem('jwt');
  }
  isTokenValid() {
    const token = localStorage.getItem('jwt');
    if (token || !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }
  addToken(token: string) {
    localStorage.setItem('jwt', token);
  }
  authorizeLogin(credentials: string) {
    return this.http.post(`${environment.apiUrl}Authorize`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
