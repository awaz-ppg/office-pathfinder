import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-clickable-offices]',
  templateUrl: './clickable-offices.component.html',
  styleUrls: ['../clickable.scss', './clickable-offices.component.scss']
})
export class ClickableOfficesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showID(e: Event) {
    document.getElementById('station-to-show').textContent = e.srcElement.id;
  }

}
