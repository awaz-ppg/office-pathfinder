import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MainService } from './../../../../services/main.service';

@Component({
  selector: '[app-clickable-rooms]',
  templateUrl: './clickable-rooms.component.html',
  styleUrls: ['../clickable.scss', './clickable-rooms.component.scss']
})
export class ClickableRoomsComponent implements OnChanges {
  @Input() shiningRoomId = [''];
  @Output() roomId = new EventEmitter<string>();

  constructor(
    private MainService: MainService,
  ) { }

  ngOnChanges() {
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    if (this.shiningRoomId[0] != '' && this.shiningRoomId.length != 0) {
      this.shiningRoomId.forEach(x => document.querySelector(`#${x}`).classList.add("shining"));
    }
  }

  onClickRoom(event: Event) {
    this.roomId.emit(event.srcElement.id);
  }

}
