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

        this.MainService.desk.forEach(element => {
          if (element.numberDeskSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapDesk(element);
          }
        });

        this.MainService.room.forEach(element => {
          if (element.roomNumberSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapRoom(element);
          }
        });

        this.MainService.kitchen.forEach(element => {
          if (element.numberSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapKitchen(element);
          }
        });

        this.MainService.printer.forEach(element => {
          if (element.numberSVG === select[0]) {
            this.array[select[0].split("-")[0]] = mapPrinter(element);
          }
        });

        this.MainService.office.forEach(element => {
            if (element.numberSVG === select[0]) {
              this.array[select[0].split("-")[0]] = mapOffice(element);
            }
          });
         this.datailArray = this.array[select[0].split("-")[0]]

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

