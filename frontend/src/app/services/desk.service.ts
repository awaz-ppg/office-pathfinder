import { Desk } from './../model/desk.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DeskService {


  url = environment.apiUrl + 'desks';
  desk: Desk[];
  tmp = [];
  isCliked = false;
  constructor(private http: HttpClient) { }

  getDesk() {
    return this.http.get<Desk[]>(this.url);
  }

  getDeskArray() {
    if(this.desk != null){
    this.tmp[0] = this.desk[0].firstName;
    this.tmp[1] = this.desk[0].lastName;
    this.tmp[2] = this.desk[0].numberDesk;
    this.tmp[3] = this.desk[0].isCoordinator.toString();
    this.tmp[4] = this.desk[0].team;
    this.tmp[5] = this.desk[0].isVolunteer.toString();
    this.tmp[6] = this.desk[0].id;
    return this.tmp;
    }
  }
}
