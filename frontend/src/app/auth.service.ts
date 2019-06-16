import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }

  logOut() {
    localStorage.removeItem('jwt');
 }
}
