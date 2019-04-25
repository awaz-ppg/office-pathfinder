import { PrinterSercive } from './../services/printer.service';
import { KitchenService } from './../services/kitchen.service';
import { RoomService } from './../services/room.service';
import { ClickService } from './../services/click.service';
import { DeskService } from './../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../services/office.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent implements OnInit {

  constructor(private ClickService: ClickService,
              private DeskService: DeskService,
              private RoomService: RoomService,
              private KitchenService: KitchenService,
              private OfficeService: OfficeService,
              private PrinterSercive: PrinterSercive
    ) { }

  room: EventTarget;


  ngOnInit() {
  }

  onClickDesk(event: Event) {
    this.DeskService.isCliked = true;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.DeskService.getDesk().subscribe(data => {
    this.DeskService.desk = data;
    });
  }

  onClickRoom(event: Event) {
    this.DeskService.isCliked = false;
    this.RoomService.isCliked = true;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.RoomService.getRoom().subscribe(data => {
    this.RoomService.room = data;
    });
  }

  onClickKitchen(event: Event) {
    this.DeskService.isCliked = false;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = true;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.KitchenService.getKitchen().subscribe(data => {
    this.KitchenService.kitchen = data;
    });
  }

  onClickOffice(event: Event) {
    this.DeskService.isCliked = false;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = true;
    this.PrinterSercive.isCliked = false;

    this.OfficeService.getOffice().subscribe(data => {
    this.OfficeService.office = data;
      });
  }
  onClickPrinter(event: Event) {
    this.DeskService.isCliked = false;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = true;

    this.PrinterSercive.getPrinter().subscribe(data => {
    this.PrinterSercive.printer = data;
      });
  }



  onClick(event: Event) {
    this.ClickService.id = event.srcElement.id;

  }


}
