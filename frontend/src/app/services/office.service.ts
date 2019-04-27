import { Injectable } from '@angular/core';
import { Office } from './../model/office.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  url = environment.apiUrl + 'offices';
  office: Office[];
  tmp = [];
  isCliked = false;
  whatOffice: string;
  constructor(private http: HttpClient) { }

  getOffice() {
    return this.http.get<Office[]>(this.url);
  }

}
