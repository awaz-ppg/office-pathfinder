import { Injectable } from '@angular/core';
import { Subject, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Desk } from './../model/desk.model';
import { Office } from './../model/office.model';
import { Printer } from '../model/printer.model';
import { Room } from '../model/room.model';
import { Kitchen } from '../model/kitchen.model';
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

    forkJoin(
      deskService.getDesk(),
      officeService.getOffice(),
      kitchenService.getKitchen(),
      printerService.getPrinter(),
      roomService.getRoom(),
      guestService.getGuest()
    ).subscribe(([desks, offices, kitchens, printers, rooms, guests]) => {
      this.desk = desks.map(x => new Desk(x));
      this.office = offices.map(x => new Office(x));
      this.kitchen = kitchens.map(x => new Kitchen(x));
      this.printer = printers.map(x => new Printer(x));
      this.room = rooms.map(x => new Room(x));
      this.guest = guests;

      this.all = [...this.desk, ...this.office, ...this.kitchen, ...this.printer, ...this.room];
    });

  }

  changeSelect(Select: string[]) {
    this.select.next(Select);
  }

}
