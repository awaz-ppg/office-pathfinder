import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-clickable-stations]',
  templateUrl: './clickable-stations.component.html',
  styleUrls: ['../clickable.scss', './clickable-stations.component.scss']
})
export class ClickableStationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showID(e: Event) {
    document.getElementById('station-to-show').textContent = e.srcElement.id;
  }
}
