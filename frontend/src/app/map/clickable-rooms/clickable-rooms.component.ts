import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-clickable-rooms]',
  templateUrl: './clickable-rooms.component.html',
  styleUrls: ['../clickable.scss', './clickable-rooms.component.scss']
})
export class ClickableRoomsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showID(e: Event) {
    document.getElementById('station-to-show').textContent = e.srcElement.id;
  }
}
