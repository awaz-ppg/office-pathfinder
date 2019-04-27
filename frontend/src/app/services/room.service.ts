import { Injectable } from '@angular/core';
import { Room } from './../model/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url = environment.apiUrl + 'Rooms';
  room: Room[];
  tmp = [];
  isCliked = false;
  constructor(private http: HttpClient) { }
  whatRoom: string;

  getRoom() {
    return this.http.get<Room[]>(this.url);
  }

}

