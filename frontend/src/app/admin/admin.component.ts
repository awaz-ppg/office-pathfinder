import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Guest } from '../home/model/guest.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Surname', 'Company', 'Visit Start', 'Visit End'];
  guests: Guest[];


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('jwt');
    this.http.get<Guest[]>(`${environment.apiUrl}Guests`)
    .subscribe(response => {
      this.guests = response;
    }, err => {
      console.log(err);
    });
  }
  logOut() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
 }
}
