import { PrinterSercive } from './../services/printer.service';
import { OfficeService } from './../services/office.service';
import { RoomService } from './../services/room.service';
import { Component, OnInit, Input } from '@angular/core';
import { DeskService } from '../services/desk.service';
import { KitchenService } from '../services/kitchen.service';
import { DetailService } from '../services/detail.service';
import { Subscription } from 'rxjs';
import { DetailList } from '../model/detail-list.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent implements OnInit {

  tab = [];
  subscription: Subscription;


  constructor(private DeskService: DeskService,
    private RoomService: RoomService,
    private KitchenService: KitchenService,
    private OfficeService: OfficeService,
    private PrinterSercive: PrinterSercive,
    private DetailService: DetailService,
  ) {
    this.subscription = this.DetailService.status$.subscribe(status => {
      if (status === true) {
        this.open = true;
        this.DetailService.changeStatus(false);
        this.setObj();
      }
    });
  }

  open: boolean;

  ngOnInit() {

  }

  setObj() {
    if (this.DetailService.object === 'station') {
      this.tab.length = 0;
      this.DeskService.desk.forEach(element => {
        if (element.numberDeskSVG === this.DeskService.whatDesk) {
          this.tab[0] = new DetailList(`Desk Number`, element.numberDesk);
          this.tab[1] = new DetailList(`Worker`, element.id);
        }
      });
    }
    if (this.DetailService.object === 'room') {
      this.tab.length = 0;
      this.RoomService.room.forEach(element => {
        if (element.roomNumberSVG === this.RoomService.whatRoom) {
          this.tab[0] = new DetailList(`Number of people`, element.numberOfPeople.toString());
          this.tab[1] = new DetailList(`Description`, element.description);
          this.tab[2] = new DetailList(`Room name`, element.roomName);
          this.tab[3] = new DetailList(`Room number`, element.roomNumber);
          this.tab[4] = new DetailList(`TV`, element.isTV.toString());
          this.tab[5] = new DetailList(`Blackboard`, element.isBlackboard.toString());
          this.tab[6] = new DetailList(`Phone`, element.isPhone.toString());
          this.tab[7] = new DetailList(`Id`, element.id);
        }
      });
    }
    if (this.DetailService.object === `kitchen`) {
      this.tab.length = 0;
      this.KitchenService.kitchen.forEach(element => {
        if (element.numberSVG === this.KitchenService.whatKitchen) {
          this.tab[0] = new DetailList(`Number`, element.number.toString());
          this.tab[1] = new DetailList(`Name`, element.name);
          this.tab[2] = new DetailList(`Coffee`, element.isCoffee.toString());
          this.tab[3] = new DetailList(`Water`, element.isWater.toString());
          this.tab[4] = new DetailList(`Id`, element.id);
        }
      });
    }
    if (this.DetailService.object === `printer`) {
      this.tab.length = 0;
      this.PrinterSercive.printer.forEach(element => {
        if (element.numberSVG === this.PrinterSercive.whatPrinter) {
          this.tab[0] = new DetailList(`Number`, element.number);
          this.tab[1] = new DetailList(`Color`, element.isColor.toString());
          this.tab[2] = new DetailList(`Id`, element.id);

        }
      });
    }
    if (this.DetailService.object === `office`) {
      this.tab.length = 0;
      this.OfficeService.office.forEach(element => {
        if (element.numberSVG === this.OfficeService.whatOffice) {
          this.tab[0] = new DetailList(`First name`, element.firstName);
          this.tab[1] = new DetailList(`Last Name`, element.lastName);
          this.tab[2] = new DetailList(`Number`, element.number);
          this.tab[3] = new DetailList(`Position`, element.position);
          this.tab[4] = new DetailList(`Coordinator`, element.isCoordinator.toString());
          this.tab[5] = new DetailList(`Team`, element.team);
          this.tab[6] = new DetailList(`Volunteer`, element.isVolunteer.toString());
          this.tab[7] = new DetailList(`Id`, element.id);
        }
      });
    }
  }



  closeWindow() {
    this.open = false;
  }

}

