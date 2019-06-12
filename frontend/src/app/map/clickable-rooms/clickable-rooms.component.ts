import { OnInit, Component } from '@angular/core';
import { PrinterService } from './../../home/services/printer.service';
import { OfficeService } from './../../home/services/office.service';
import { KitchenService } from './../../home/services/kitchen.service';
import { RoomService } from './../../home/services/room.service';
import { DeskService } from 'src/app/home/services/desk.service';

@Component({
  selector: '[app-clickable-rooms]',
  templateUrl: './clickable-rooms.component.html',
  styleUrls: ['../clickable.scss', './clickable-rooms.component.scss']
})
export class ClickableRoomsComponent implements OnInit {

  constructor(private DeskService: DeskService,
    private RoomService: RoomService,
    private KitchenService: KitchenService,
    private OfficeService: OfficeService,
    private PrinterSercive: PrinterSercive
) { }

  ngOnInit() {
  }

  onClickRoom(event: Event) {
    this.DeskService.isCliked = true;
    this.RoomService.isCliked = false;
    this.KitchenService.isCliked = false;
    this.OfficeService.isCliked = false;
    this.PrinterSercive.isCliked = false;

    this.RoomService.getRoom().subscribe(data => {
    this.RoomService.room = data;
    this.RoomService.whatRoom = event.srcElement.id
    });
  }

}
