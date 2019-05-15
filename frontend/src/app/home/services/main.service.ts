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

  desk: Desk[];
  office: Office[];
  printer: Printer[];
  room: Room[];
  kitchen: Kitchen[];
  guest: Guest[];

  select$ = this.select.asObservable();

  constructor(private http: HttpClient, deskService: DeskService,
              officeService: OfficeService, guestService: GuestService,
              kitchenService: KitchenService, printerService: PrinterService,
              roomService: RoomService ) {



    deskService.getDesk().subscribe(data => {
      this.desk = data;
    });
    officeService.getOffice().subscribe(data => {
      this.office = data;
    });
    guestService.getGuest().subscribe(data => {
      this.guest = data;
    });
    kitchenService.getKitchen().subscribe(data => {
      this.kitchen = data;
    });
    printerService.getPrinter().subscribe(data => {
      this.printer = data;
    });
    roomService.getRoom().subscribe(data => {
      this.room = data;
    });


  }


  changeSelect(Select: string[]) {
    this.select.next(Select);
  }

}
