import { Injectable } from '@angular/core';
import { Desk } from './../model/desk.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient) { }

  getDesk() {
    return this.http.get<Desk[]>(`${environment.apiUrl}desks`);
  }


}
