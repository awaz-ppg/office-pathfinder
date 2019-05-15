import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Subscription } from 'rxjs';
import { DetailList } from '../../model/detail-list.model';
import { mapDesk } from '../../model/desk.model';
import { mapOffice } from '../../model/office.model';
import { mapPrinter } from '../../model/printer.model';
import { mapRoom } from '../../model/room.model';
import { mapKitchen } from '../../model/kitchen.model';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})


export class DetailComponent implements OnInit {

  datailArray = [];
  subscription: Subscription;
  open: boolean;
  array = [];

  constructor(
    private MainService: MainService,
  ) {
 
    this.subscription = this.MainService.select$.subscribe(select => {
      if (select.length === 1) {

        this.open = true;
        // console.log(MainService.desk)
        this.MainService.desk.forEach(element => {
          if (element.numberDeskSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapDesk(element);
          }
        });
        //console.log(MainService.room)
        this.MainService.room.forEach(element => {
          if (element.roomNumberSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapRoom(element);
          }
        });
        //console.log(MainService.kitchen)
        this.MainService.kitchen.forEach(element => {
          if (element.numberSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapKitchen(element);
          }
        });
        //console.log(MainService.printer)
        this.MainService.printer.forEach(element => {
          if (element.numberSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapPrinter(element);
          }
        });
        //console.log(MainService.office)
        this.MainService.office.forEach(element => {
            if (element.numberSVG === select[0]) {
              this.array[select[0].split("-")[0]] = mapOffice(element);
            }
          });
         //console.log(this.array[select[0].split("-")[0]])
         this.datailArray = this.array[select[0].split("-")[0]]
        

        // if (select[0].includes('station')) {
        //   this.datailArray.length = 0;
        //   this.MainService.desk.forEach(element => {
        //     if (element.numberDeskSVG === select[0]) {
        //       this.datailArray = mapDesk(element);
        //     }
        //   });
        // }
        // if (select[0].includes('room')) {
        //   this.datailArray.length = 0;
        //   this.MainService.room.forEach(element => {
        //     if (element.roomNumberSVG === select[0]) {
        //       this.datailArray = mapRoom(element);
        //     }
        //   });
        // }
        // if (select[0].includes('kitchen')) {
        //   this.datailArray.length = 0;
        //   this.MainService.kitchen.forEach(element => {
        //     if (element.numberSVG === select[0]) {
        //       this.datailArray = mapKitchen(element);
        //     }
        //   });
        // }
        // if (select[0].includes('printer')) {
        //   this.datailArray.length = 0;
        //   this.MainService.printer.forEach(element => {
        //     if (element.numberSVG === select[0]) {
        //       this.datailArray = mapPrinter(element);
        //     }
        //   });
        // }
        // if (select[0].includes('office')) {
        //   this.datailArray.length = 0;
        //   this.MainService.office.forEach(element => {
        //     if (element.numberSVG === select[0]) {
        //       this.datailArray = mapOffice(element);
        //     }
        //   });
        // }

      }
    }
    );
  }

  ngOnInit() {

  }

  closeWindow() {
    this.open = false;
  }

}

