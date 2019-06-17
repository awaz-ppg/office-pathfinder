import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;


  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isTokenValid()) {
      this.router.navigate(['/admin']);
    }
  }

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http.post(`${environment.apiUrl}Authorize`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (response as any).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['/admin']);
    }, err => {
      this.invalidLogin = true;
    });
  }


}
