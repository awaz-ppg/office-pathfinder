import { ViewDesk } from './../model/viewModel.model';
import { PrinterSercive } from './../services/printer.service';
import { OfficeService } from './../services/office.service';
import { RoomService } from './../services/room.service';
import { Component, OnInit, Input } from '@angular/core';
import { DeskService } from '../services/desk.service';
import { KitchenService } from '../services/kitchen.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent implements OnInit {

  constructor(private DeskService: DeskService,
              private RoomService: RoomService,
              private KitchenService: KitchenService,
              private OfficeService: OfficeService,
              private PrinterSercive: PrinterSercive
              ) { }

  close: boolean;
  obj = new ViewDesk(this.DeskService, this.RoomService, this.KitchenService, this.OfficeService, this.PrinterSercive);


  ngOnInit() {

  }

  setObj()
  {
    this.obj.getArray();
  }

  closeWindow() {
    this.DeskService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;
    this.RoomService.isCliked = false;
  }

  windowButton() {

    if ( this.DeskService.isCliked ||
      this.KitchenService.isCliked ||
      this.OfficeService.isCliked ||
      this.PrinterSercive.isCliked ||
      this.RoomService.isCliked
      ) {
    this.close = true;
    } else {
      this.close = false;
    }
  }

}

