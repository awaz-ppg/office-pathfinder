import { PrinterSercive } from './../services/printer.service';
import { OfficeService } from './../services/office.service';
import { RoomService } from './../services/room.service';
import { DeskService } from '../services/desk.service';
import { KitchenService } from '../services/kitchen.service';

export class ViewDesk {

  constructor(private DeskService: DeskService,
              private RoomService: RoomService,
              private KitchenService: KitchenService,
              private OfficeService: OfficeService,
              private PrinterSercive: PrinterSercive,
    ) {
    }
    tab = [];

    getArray() {
      if (this.DeskService.isCliked) {
        this.tab.length = 0;
        this.DeskService.desk.forEach(element => {
          if(element.numberDeskSVG === this.DeskService.whatDesk){
            this.tab[0] = element.numberDesk;
            this.tab[1] = element.numberDeskSVG;
            this.tab[2] = element.id;
          }
        });


      }
      if (this.RoomService.isCliked) {
        this.tab.length = 0;
        this.RoomService.room.forEach(element => {
          if(element.roomNumberSVG === this.RoomService.whatRoom){
            this.tab[0] = element.numberOfPeople;
            this.tab[1] = element.description;
            this.tab[2] = element.roomName;
            this.tab[3] = element.roomNumber;
            this.tab[4] = element.roomNumberSVG;
            this.tab[5] = element.isTV;
            this.tab[6] = element.isBlackboard;
            this.tab[7] = element.isPhone;
            this.tab[8] = element.id;
          }
        });

        }

      if (this.KitchenService.isCliked) {
          this.tab.length = 0;
          this.KitchenService.kitchen.forEach(element => {
            if(element.numberSVG === this.KitchenService.whatKitchen){
              this.tab[0] = element.number;
              this.tab[1] = element.numberSVG;
              this.tab[2] = element.name;
              this.tab[3] = element.isCoffee;
              this.tab[4] = element.isWater;
              this.tab[5] = element.id;
            }
          });
      }



      if (this.PrinterSercive.isCliked) {
        this.tab.length = 0;
        this.PrinterSercive.printer.forEach(element => {
          if(element.numberSVG === this.PrinterSercive.whatPrinter){
            this.tab[0] = element.number;
            this.tab[1] = element.numberSVG;
            this.tab[2] = element.isColor;
            this.tab[3] = element.id;
          }
        });
    }

      if(this.OfficeService.isCliked){
        this.tab.length = 0;
        this.OfficeService.office.forEach(element => {
            if(element.numberSVG === this.OfficeService.whatOffice){
              this.tab[0] = element.firstName;
              this.tab[1] = element.lastName;
              this.tab[2] = element.number;
              this.tab[3] = element.numberSVG;
              this.tab[4] = element.position;
              this.tab[5] = element.isCoordinator;
              this.tab[6] = element.team;
              this.tab[7] = element.isVolunteer;
              this.tab[8] = element.id;

            }
          });
      }
    }

  }





