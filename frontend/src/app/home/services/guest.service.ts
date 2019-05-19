import { Injectable } from '@angular/core';
import { Guest } from '../model/guest.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GuestService {

  constructor(private http: HttpClient) { }

  getGuest() {
    return this.http.get<Guest[]>(`${environment.apiUrl}Guests`);
  }
}
