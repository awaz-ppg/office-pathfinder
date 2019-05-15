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
import { GetService } from './get.service'


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

  select$ = this.select.asObservable();

  constructor(private http: HttpClient, getService: GetService) {
    
    getService.getDesk().subscribe(data => {
      this.desk = data;
    });
    getService.getOffice().subscribe(data => {
      this.office = data;
    });
    getService.getGuest().subscribe(data => {
      this.guest = data;
    });
    getService.getKitchen().subscribe(data => {
      this.kitchen = data;
    });
    getService.getPrinter().subscribe(data => {
      this.printer = data;
    });
    getService.getRoom().subscribe(data => {
      this.room = data;
    });


  }
  

  changeSelect(Select: string[]) {
    this.select.next(Select);
  }

}
