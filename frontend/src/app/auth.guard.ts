import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router, private authService: AuthService ) { }

  canActivate() {
    const response = this.authService.isTokenValid();
    if (!response) {
      this.router.navigate(['login']);
    }
    return response;
  }
}
