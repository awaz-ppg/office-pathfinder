import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Desk } from './../model/desk.model';
import { Office } from './../model/office.model';
import { Printer } from '../model/printer.model';
import { Room } from '../model/room.model';
import { Kitchen } from '../model/kitchen.model';
import { Guest } from '../model/guest.model';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  private select = new Subject<string[]>();

  desk: Desk[];
  office: Office[];
  printer: Printer[];
  room: Room[];
  kitchen: Kitchen[];
  guest: Guest[];


  constructor(private http: HttpClient) {
    this.getDesk().subscribe(data => {
      this.desk = data;
    });
    this.getOffice().subscribe(data => {
      this.office = data;
    });
    this.getGuest().subscribe(data => {
      this.guest = data;
    });
    this.getKitchen().subscribe(data => {
      this.kitchen = data;
    });
    this.getPrinter().subscribe(data => {
      this.printer = data;
    });
    this.getRoom().subscribe(data => {
      this.room = data;
    });


  }

  getDesk() {
    return this.http.get<Desk[]>(`${environment.apiUrl}desks`);
  }

  getOffice() {
    return this.http.get<Office[]>(`${environment.apiUrl}offices`);
  }

  getGuest() {
    return this.http.get<Guest[]>(`${environment.apiUrl}Guests`);
  }

  getKitchen() {
    return this.http.get<Kitchen[]>(`${environment.apiUrl}Kitchens`);
  }

  getPrinter() {
    return this.http.get<Printer[]>(`${environment.apiUrl}Printers`);
  }

  getRoom() {
    return this.http.get<Room[]>(`${environment.apiUrl}Rooms`);
  }

  select$ = this.select.asObservable();

  changeSelect(Select: string[]) {
    this.select.next(Select);
  }

}
