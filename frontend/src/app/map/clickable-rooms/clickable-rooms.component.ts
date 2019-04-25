import { PrinterSercive } from './../../services/printer.service';
import { KitchenService } from './../../services/kitchen.service';
import { RoomService } from './../../services/room.service';
import { ClickService } from './../../services/click.service';
import { DeskService } from './../../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../../services/office.service';

@Component({
  selector: '[app-clickable-rooms]',
  templateUrl: './clickable-rooms.component.html',
  styleUrls: ['../clickable.scss', './clickable-rooms.component.scss']
})
export class ClickableRoomsComponent implements OnInit {

  constructor(private ClickService: ClickService,
    private DeskService: DeskService,
    private RoomService: RoomService,
    private KitchenService: KitchenService,
    private OfficeService: OfficeService,
    private PrinterSercive: PrinterSercive
) { }

  ngOnInit() {
  }

  onClickRoom(event: Event) {
    this.ClickService.closeWindow = true;
    this.DeskService.isCliked = false;
    this.RoomService.isCliked = true;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.RoomService.getRoom().subscribe(data => {
    this.RoomService.room = data;
    });
  }

}
