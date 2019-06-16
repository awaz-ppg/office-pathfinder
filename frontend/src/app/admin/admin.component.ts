import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
   }

  ngOnInit() { }

  logOut() {
    this.authService.logOut();
 }
}
