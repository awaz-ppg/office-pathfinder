import { Injectable } from '@angular/core';
import { Subject, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Desk } from './../model/desk.model';
import { Office } from './../model/office.model';
import { Printer } from '../model/printer.model';
import { Room } from '../model/room.model';
import { Kitchen } from '../model/kitchen.model';
import { Employee } from '../model/employee.model';
import { DeskService } from './desk.service';
import { PrinterService } from './printer.service';
import { GuestService } from './guest.service';
import { KitchenService } from './kitchen.service';
import { OfficeService } from './office.service';
import { RoomService } from './room.service';
import { EmployeeService } from './employee.service';
import { Guest } from '../model/guest.model';
import { SearchObject } from '../model/search-object';
import { MapObject } from '../model/map-object.model';


@Injectable({
  providedIn: 'root'
})

export class MainService {

  private select = new Subject<string[]>();

  desk: Desk[] = [];
  office: Office[] = [];
  printer: Printer[] = [];
  room: Room[] = [];
  kitchen: Kitchen[] = [];
  guest: Guest[] = [];
  employee: Employee[] = [];
  all: (Kitchen | Room | Office | Desk | Printer)[] = [];
  options = new Subject<SearchObject[][]>();


  select$ = this.select.asObservable();

  constructor(private http: HttpClient, deskService: DeskService,
    officeService: OfficeService, guestService: GuestService,
    kitchenService: KitchenService, printerService: PrinterService,
    roomService: RoomService, employeeService: EmployeeService) {

    forkJoin(
      deskService.getDesk(),
      officeService.getOffice(),
      kitchenService.getKitchen(),
      printerService.getPrinter(),
      roomService.getRoom(),
      guestService.getGuest(),
      employeeService.getEmployee(),
    ).subscribe(([desks, offices, kitchens, printers, rooms, guests, employees]) => {
      this.desk = desks.map(x => new Desk(x));
      this.office = offices.map(x => new Office(x));
      this.kitchen = kitchens.map(x => new Kitchen(x));
      this.printer = printers.map(x => new Printer(x));
      this.room = rooms.map(x => new Room(x));
      this.employee = employees.map(x => new Employee(x)); 
      this.guest = guests;
      this.options.next([[...this.kitchen.map(x => new SearchObject(x.name.toUpperCase(), x.id, "kitchen"))], 
      [...this.room.map(x => new SearchObject(x.roomName.toUpperCase(), x.id, "room"))],
      [...this.office.map(x => new SearchObject(`${x.firstName.toUpperCase()} ${x.lastName.toUpperCase()}`, x.id, "office"))],
      [...this.employee.map(x => new SearchObject(`${x.firstName.toUpperCase()} ${x.lastName.toUpperCase()}`, `${this.desk[this.desk.findIndex(y => (x.placeId == y.numberDesk))].id}`, "employee"))]]);
      this.all = [...this.kitchen, ...this.room, ...this.office, ...this.desk.map(x => x.addWorker(this.employee)), ...this.printer];
    });
  }

  changeSelect(Select: string[]) {
    this.select.next(Select);
  }

}
