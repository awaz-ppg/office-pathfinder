import { PrinterSercive } from './../../services/printer.service';
import { KitchenService } from './../../services/kitchen.service';
import { RoomService } from './../../services/room.service';
import { DeskService } from './../../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../../services/office.service';
import { DetailService } from './../../services/detail.service';

@Component({
  selector: '[app-clickable-offices]',
  templateUrl: './clickable-offices.component.html',
  styleUrls: ['../clickable.scss', './clickable-offices.component.scss']
})
export class ClickableOfficesComponent implements OnInit {

  constructor(private DeskService: DeskService,
    private RoomService: RoomService,
    private KitchenService: KitchenService,
    private OfficeService: OfficeService,
    private PrinterSercive: PrinterSercive,
    private DetailService: DetailService,
  ) { }

  ngOnInit() {
    this.OfficeService.getOffice().subscribe(data => {
      this.OfficeService.office = data;
    });



  }

  onClickOffice(event: Event) {
    this.DeskService.isCliked = false;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = true;
    this.PrinterSercive.isCliked = false;

    this.OfficeService.whatOffice = event.srcElement.id;
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.DetailService.changeOpenStatus(true);
    this.DetailService.changeChangeStatus(true);
  }
}
