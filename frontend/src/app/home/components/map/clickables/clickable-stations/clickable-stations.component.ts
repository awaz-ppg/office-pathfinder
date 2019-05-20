import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: '[app-clickable-stations]',
  templateUrl: './clickable-stations.component.html',
  styleUrls: ['../clickable.scss', './clickable-stations.component.scss']
})
export class ClickableStationsComponent implements OnChanges {
  @Input() shiningStationId: [];
  @Output() stationId = new EventEmitter<string>();

  constructor() { }


  ngOnChanges(changes: SimpleChanges) {

    if (changes.shiningStationId !== undefined) {
      document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));

      if (this.shiningStationId != undefined && this.shiningStationId.length != 0) {
        this.shiningStationId.forEach(x => document.getElementById(`${x}`).classList.add("shining"));
      }
    }
  }

  onClickDesk(event: Event) {
    this.stationId.emit(event.srcElement.id);
  }
}
