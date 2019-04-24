import { ClickService } from './../services/click.service';
import { DeskService } from './../services/http.services';
import { Component, OnInit } from '@angular/core';
import { Desk } from "../model/desk.model";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent implements OnInit {

  constructor(private ClickService: ClickService, private DeskService: DeskService) { }

  room: EventTarget;
  

  ngOnInit() {
  }

  onClickDesk(event: Event){
    this.DeskService.getDesk().subscribe(data => {
    this.DeskService.desk= data;
    console.log(this.DeskService.desk[0]);
    
    });
    
  }

  onClick(event: Event) {
    this.ClickService.id = event.srcElement.id;

  }


}
