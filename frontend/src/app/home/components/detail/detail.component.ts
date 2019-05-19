import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Subscription } from 'rxjs';
import { DetailList } from '../../model/detail-list.model';
import { Desk } from '../../model/desk.model';
import { MapObject } from '../../model/map-object.model';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})

export class DetailComponent implements OnInit {

  detailArray = [];
  subscription: Subscription;
  open: boolean;

  constructor(
    private MainService: MainService,
  ) {
    this.subscription = this.MainService.select$.subscribe(select => {
      if (select.length === 1) {
        this.open = true;
        this.MainService.all.forEach(element => {
          if (element.numberSVG === select[0]) {
            this.detailArray = element.map();
          }
        });

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

