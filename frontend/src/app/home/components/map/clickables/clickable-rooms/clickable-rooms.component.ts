import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MainService } from './../../../../services/main.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: '[app-clickable-rooms]',
  templateUrl: './clickable-rooms.component.html',
  styleUrls: ['../clickable.scss', './clickable-rooms.component.scss']
})
export class ClickableRoomsComponent implements OnChanges {
  @Input() shiningRoomId: [];
  @Output() roomId = new EventEmitter<string>();

  constructor(private mainService: MainService) { }
  tooltip: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.shiningRoomId !== undefined) {
      document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
      if (this.shiningRoomId != undefined && this.shiningRoomId.length != 0) {
        this.shiningRoomId.forEach(x => document.querySelector(`#${x}`).classList.add("shining"));
      }
    }
  }

  whatElement(event: Event){

    this.mainService.room.forEach(element =>{
      if (element.numberSVG === event.srcElement.id ){
        this.tooltip = element.tooltipText();
      }
    });
  }



  onClickRoom(event: Event) {
    this.roomId.emit(event.srcElement.id);
  }

}
