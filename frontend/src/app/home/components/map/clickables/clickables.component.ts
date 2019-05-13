import { Component, OnInit } from '@angular/core';
import { MainService } from './../../../services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-clickables]',
  templateUrl: './clickables.component.html',
  styleUrls: ['./clickables.component.scss']
})
export class ClickablesComponent implements OnInit {

  subscription: Subscription;

  newStationId = [''];
  newOtherId = [''];
  newRoomId = [''];
  newOfficeId = [''];

  constructor(private MainService: MainService) {
    this.subscription = this.MainService.select$.subscribe(select => {

      if (select[0].includes(`station`)) {
        this.newStationId.length = 0;
        this.newStationId = select;
      }
      else if (select[0].includes(`office`)) {
        this.newOfficeId.length = 0;
        this.newOfficeId = select;
      }
      else if (select[0].includes(`room`)) {
        this.newRoomId.length = 0;
        this.newRoomId = select;
      }
      else if (select[0].includes(`printer`) || select[0].includes(`kitchen`)) {
        this.newOtherId.length = 0;
        this.newOtherId = select;
      }
    });
  }

  ngOnInit() {
  }

  idChanged(event: string) {
    this.MainService.changeSelect([event]);
  }
}
