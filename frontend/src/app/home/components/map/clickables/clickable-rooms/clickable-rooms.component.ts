import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: '[app-clickable-rooms]',
  templateUrl: './clickable-rooms.component.html',
  styleUrls: ['../clickable.scss', './clickable-rooms.component.scss']
})
export class ClickableRoomsComponent implements OnChanges {
  @Input() shiningRoomId: [];
  @Output() roomId = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.shiningRoomId !== undefined) {
      document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
      if (this.shiningRoomId != undefined && this.shiningRoomId.length != 0) {
        this.shiningRoomId.forEach(x => document.querySelector(`#${x}`).classList.add("shining"));
      }
    }
  }

  onClickRoom(event: Event) {
    this.roomId.emit(event.srcElement.id);
  }

}
