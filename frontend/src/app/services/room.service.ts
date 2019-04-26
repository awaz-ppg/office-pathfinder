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

  getRoom() {
    return this.http.get<Room[]>(this.url);
  }

  getRoomArray() {
    if(this.room != null){
    this.tmp[0] = this.room[0].numberOfPeople;
    this.tmp[1] = this.room[0].description;
    this.tmp[2] = this.room[0].roomName;
    this.tmp[3] = this.room[0].roomNumber;
    this.tmp[4] = this.room[0].isTV.toString();
    this.tmp[5] = this.room[0].isBlackboard.toString();
    this.tmp[6] = this.room[0].isPhone.toString();
    this.tmp[7] = this.room[0].id;
    return this.tmp;
    }
  }
}

