import { Injectable } from '@angular/core';
import { Office } from './../model/office.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  url = 'http://localhost:64513/api/Offices';
  office: Office[];
  tmp = [];
  isCliked = false;
  constructor(private http: HttpClient) { }

  getOffice() {
    return this.http.get<Office[]>(this.url);
  }

  getOfficeArray() {
    if(this.office != null){
    this.tmp[0] = this.office[0].firstName;
    this.tmp[1] = this.office[0].lastName;
    this.tmp[2] = this.office[0].numberDesk;
    this.tmp[3] = this.office[0].position;
    this.tmp[4] = this.office[0].isCoordinator.toString();
    this.tmp[5] = this.office[0].team;
    this.tmp[6] = this.office[0].isVolunteer.toString();
    this.tmp[7] = this.office[0].id;

    return this.tmp;
    }
  }
}
