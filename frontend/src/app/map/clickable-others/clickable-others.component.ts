import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-clickable-others]',
  templateUrl: './clickable-others.component.html',
  styleUrls: ['../clickable.scss', './clickable-others.component.scss']
})
export class ClickableOthersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showID(e: Event) {
    document.getElementById('station-to-show').textContent = e.srcElement.id;
  }

}
