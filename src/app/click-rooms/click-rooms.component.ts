import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-rooms',
  templateUrl: './click-rooms.component.html',
  styleUrls: ['./click-rooms.component.css']
})
export class ClickRoomsComponent implements OnInit {

  constructor() { }
  name: string;

  @Output()
  eventTask = new EventEmitter<string>()

  onClick(event: Event) {
    
    this.name = event.srcElement.id;
    this.eventTask.emit(event.srcElement.id);
    

  }


  ngOnInit() {
  }

}
