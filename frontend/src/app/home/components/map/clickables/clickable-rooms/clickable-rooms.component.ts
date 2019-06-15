import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MainService } from './../../../../services/main.service';

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
  detailArray = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.shiningRoomId !== undefined) {
      document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
      if (this.shiningRoomId != undefined && this.shiningRoomId.length != 0) {
        this.shiningRoomId.forEach(x => document.querySelector(`#${x}`).classList.add("shining"));
      }
    }
  }

  whatElement(event: Event){

    this.mainService.all.forEach(element => {
      if (element.numberSVG === event.srcElement.id ) {
        this.detailArray = element.map();
        this.tooltip = this.detailArray[2].data + "\n Number of people: " + this.detailArray[0].data

        }
    });
  }

  onClickRoom(event: Event) {
    this.roomId.emit(event.srcElement.id);
  }

}
