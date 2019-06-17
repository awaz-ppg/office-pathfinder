import { Injectable } from '@angular/core';
import { Room } from '../model/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getRoom() {
    return this.http.get<Room[]>(`${environment.apiUrl}Rooms`);
  }
}
