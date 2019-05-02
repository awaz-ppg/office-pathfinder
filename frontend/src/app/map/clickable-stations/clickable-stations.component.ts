import { PrinterSercive } from './../../services/printer.service';
import { KitchenService } from './../../services/kitchen.service';
import { RoomService } from './../../services/room.service';
import { DeskService } from './../../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../../services/office.service';
import { DetailService } from './../../services/detail.service';

@Component({
  selector: '[app-clickable-stations]',
  templateUrl: './clickable-stations.component.html',
  styleUrls: ['../clickable.scss', './clickable-stations.component.scss']
})
export class ClickableStationsComponent implements OnInit {

  constructor(private DeskService: DeskService,
    private RoomService: RoomService,
    private KitchenService: KitchenService,
    private OfficeService: OfficeService,
    private PrinterSercive: PrinterSercive,
    private DetailService: DetailService,
  ) { }


  ngOnInit() {
    this.DeskService.getDesk().subscribe(data => {
      this.DeskService.desk = data;
    });
  }

  onClickDesk(event: Event) {
    this.DeskService.isCliked = true;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.DeskService.whatDesk = event.srcElement.id;
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.DetailService.changeOpenStatus(true);
    this.DetailService.changeChangeStatus(true);
  }
}
