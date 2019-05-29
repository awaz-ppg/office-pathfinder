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

  newStationId: string[];
  newOtherId: string[];
  newRoomId: string[];
  newOfficeId: string[];
  point: number[];
  constructor(private mainService: MainService) {
    this.subscription = this.mainService.select$.subscribe(select => {
      
      if (select[0].includes(`station`)) {
        this.newStationId = [];
        this.newStationId = select;
      }
      else if (select[0].includes(`office`)) {
        this.newOfficeId = [];
        this.newOfficeId = select;
      }
      else if (select[0].includes(`room`)) {
        this.newRoomId = [];
        this.newRoomId = select;
      }
      else if (select[0].includes(`printer`) || select[0].includes(`kitchen`)) {
        this.newOtherId = [];
        this.newOtherId = select;
      }
    });
  }

  ngOnInit() {
  }

  addPoint(event: number[]){
    this.mainService.position = event;
    }

  

  

  idChanged(event: string) {
    this.mainService.changeSelect([event]);
  }
}
