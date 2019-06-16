import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  employees: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let token = localStorage.getItem('jwt');
    this.http.get(`${environment.apiUrl}Employees`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.employees = response;
    }, err => {
      console.log(err);
    });
  }
}
