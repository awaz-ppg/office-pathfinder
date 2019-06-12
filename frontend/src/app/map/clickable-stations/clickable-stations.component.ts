import { OnInit, Component } from '@angular/core';
import { PrinterService } from './../../home/services/printer.service';
import { OfficeService } from './../../home/services/office.service';
import { KitchenService } from './../../home/services/kitchen.service';
import { RoomService } from './../../home/services/room.service';
import { DeskService } from 'src/app/home/services/desk.service';


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
              private PrinterSercive: PrinterService
) { }

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
    this.DeskService.whatDesk = event.srcElement.id;
    });

  }
}
