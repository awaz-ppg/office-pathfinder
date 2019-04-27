import { PrinterSercive } from './../../services/printer.service';
import { KitchenService } from './../../services/kitchen.service';
import { RoomService } from './../../services/room.service';
import { DeskService } from './../../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../../services/office.service';

@Component({
  selector: '[app-clickable-others]',
  templateUrl: './clickable-others.component.html',
  styleUrls: ['../clickable.scss', './clickable-others.component.scss']
})
export class ClickableOthersComponent implements OnInit {

  constructor(private DeskService: DeskService,
    private RoomService: RoomService,
    private KitchenService: KitchenService,
    private OfficeService: OfficeService,
    private PrinterSercive: PrinterSercive
) { }

  ngOnInit() {
  }
  onClickKitchen(event: Event) {
    this.DeskService.isCliked = false;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = true;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.KitchenService.getKitchen().subscribe(data => {
    this.KitchenService.kitchen = data;
    this.KitchenService.whatKitchen = event.srcElement.id;
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
    this.PrinterSercive.whatPrinter = event.srcElement.id;
      });
  }
}
