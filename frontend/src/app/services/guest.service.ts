import { Injectable } from '@angular/core';
import { Guest } from './../model/guest.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url = 'http://localhost:64513/api/Guests';
  room: Guest[];
  constructor(private http: HttpClient) { }

  getDesk() {
    return this.http.get<Guest[]>(this.url);
  }
}
