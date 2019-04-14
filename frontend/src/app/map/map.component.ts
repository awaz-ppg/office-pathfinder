import { ClickService } from './../services/click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent implements OnInit {

  constructor( private ClickService: ClickService) { }

  room: EventTarget;

  ngOnInit() {
  }
  onClick(event: Event) {
    this.ClickService.id = event.srcElement.id;


  }


}
