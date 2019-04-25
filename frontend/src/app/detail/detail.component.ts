import { PrinterSercive } from './../services/printer.service';
import { OfficeService } from './../services/office.service';
import { RoomService } from './../services/room.service';
import { Component, OnInit, Input } from '@angular/core';
import { ClickService } from './../services/click.service';
import { DeskService } from '../services/desk.service';
import { KitchenService } from '../services/kitchen.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent implements OnInit {

  constructor(private ClickService: ClickService,
              private DeskService: DeskService,
              private RoomService: RoomService,
              private KitchenService: KitchenService,
              private OfficeService: OfficeService,
              private PrinterSercive: PrinterSercive
              ) { }

  ngOnInit() {
  }

  elementClick() {
      if (this.DeskService.isCliked) {
      return this.DeskService.getDeskArray();
      }

      if (this.RoomService.isCliked) {
        return this.RoomService.getRoomArray();
      }

      if (this.KitchenService.isCliked) {
        return this.KitchenService.getKitchenkArray();
      }

      if (this.OfficeService.isCliked) {
        return this.OfficeService.getOfficeArray();
      }

      if (this.PrinterSercive.isCliked) {
        return this.PrinterSercive.getPrinterArray();
      }

  }

}

