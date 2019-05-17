import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Desk } from './../model/desk.model';
import { Office } from './../model/office.model';
import { Printer } from '../model/printer.model';
import { Room } from '../model/room.model';
import { Kitchen } from '../model/kitchen.model';
import { Guest } from '../model/guest.model';
import { DeskService } from './desk.service';
import { PrinterService } from './printer.service';
import { GuestService } from './guest.service';
import { KitchenService } from './kitchen.service';
import { OfficeService } from './office.service';
import { RoomService } from './room.service';


@Injectable({
  providedIn: 'root'
})

export class MainService {

  private select = new Subject<string[]>();

  desk = [];
  office = [];
  printer = [];
  room = [];
  kitchen = [];
  guest = [];
  all = [];

  select$ = this.select.asObservable();

  constructor(private http: HttpClient, deskService: DeskService,
    officeService: OfficeService, guestService: GuestService,
    kitchenService: KitchenService, printerService: PrinterService,
    roomService: RoomService) {


    deskService.getDesk().subscribe(data => {
      data.forEach(x => this.desk.push(new Desk(x)));
    });
    officeService.getOffice().subscribe(data => {
      data.forEach(x => this.office.push(new Office(x)));
    });
    guestService.getGuest().subscribe(data => {
      this.guest = data;
    });
    kitchenService.getKitchen().subscribe(data => {
      data.forEach(x => this.kitchen.push(new Kitchen(x)));
    });
    printerService.getPrinter().subscribe(data => {
      data.forEach(x => this.printer.push(new Printer(x)));
    });
    roomService.getRoom().subscribe(data => {
      data.forEach(x => this.room.push(new Room(x)));
    });

    setTimeout(x => {
      this.desk.forEach(y => {
        this.all.push(new Desk(y));
      });
      this.kitchen.forEach(y => {
        this.all.push(new Kitchen(y));
      });
      this.printer.forEach(y => {
        this.all.push(new Printer(y));
      });
      this.office.forEach(y => {
        this.all.push(new Office(y));
      });
      this.room.forEach(y => {
        this.all.push(new Room(y));
      });
    }, 10000);
  }

  changeSelect(Select: string[]) {
    this.select.next(Select);
  }

}
