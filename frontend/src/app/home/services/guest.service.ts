import { Injectable } from '@angular/core';
import { Guest } from './../model/guest.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url = environment.apiUrl + 'Guests';
  room: Guest[];
  constructor(private http: HttpClient) { }

  getDesk() {
    return this.http.get<Guest[]>(this.url);
  }
}
