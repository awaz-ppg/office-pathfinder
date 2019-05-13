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

  tab = [];
  subscription: Subscription;
  open: boolean;

  constructor(
    private MainService: MainService,
  ) {

    this.subscription = this.MainService.select$.subscribe(select => {
      if (select.length === 1) {
        this.open = true;
        if (select[0].includes('station')) {
          this.tab.length = 0;
          this.MainService.desk.forEach(element => {
            if (element.numberDeskSVG === select[0]) {
              this.tab = mapDesk(element);
            }
          });
        }
        if (select[0].includes('room')) {
          this.tab.length = 0;
          this.MainService.room.forEach(element => {
            if (element.roomNumberSVG === select[0]) {
              this.tab = mapRoom(element);
            }
          });
        }
        if (select[0].includes('kitchen')) {
          this.tab.length = 0;
          this.MainService.kitchen.forEach(element => {
            if (element.numberSVG === select[0]) {
              this.tab = mapKitchen(element);
            }
          });
        }
        if (select[0].includes('printer')) {
          this.tab.length = 0;
          this.MainService.printer.forEach(element => {
            if (element.numberSVG === select[0]) {
              this.tab = mapPrinter(element);
            }
          });
        }
        if (select[0].includes('office')) {
          this.tab.length = 0;
          this.MainService.office.forEach(element => {
            if (element.numberSVG === select[0]) {
              this.tab = mapOffice(element);
            }
          });
        }
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

