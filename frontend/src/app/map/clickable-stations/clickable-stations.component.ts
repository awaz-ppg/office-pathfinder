import { PrinterSercive } from './../../services/printer.service';
import { KitchenService } from './../../services/kitchen.service';
import { RoomService } from './../../services/room.service';
import { ClickService } from './../../services/click.service';
import { DeskService } from './../../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../../services/office.service';

@Component({
  selector: '[app-clickable-stations]',
  templateUrl: './clickable-stations.component.html',
  styleUrls: ['../clickable.scss', './clickable-stations.component.scss']
})
export class ClickableStationsComponent implements OnInit {

  constructor(private ClickService: ClickService,
    private DeskService: DeskService,
    private RoomService: RoomService,
    private KitchenService: KitchenService,
    private OfficeService: OfficeService,
    private PrinterSercive: PrinterSercive
) { }

  ngOnInit() {
  }

  onClickDesk(event: Event) {
    this.ClickService.closeWindow = true;
    this.DeskService.isCliked = true;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.DeskService.getDesk().subscribe(data => {
    this.DeskService.desk = data;
    });
  }
}
