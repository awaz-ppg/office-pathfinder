import { DeskService } from './../../../../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { MainService } from './../../../../services/main.service';

@Component({
  selector: '[app-clickable-stations]',
  templateUrl: './clickable-stations.component.html',
  styleUrls: ['../clickable.scss', './clickable-stations.component.scss']
})
export class ClickableStationsComponent implements OnInit {

  constructor(private DeskService: DeskService,
    private MainService: MainService,
  ) { }


  ngOnInit() {

  }

  onClickDesk(event: Event) {
    this.DeskService.whatDesk = event.srcElement.id;
    this.MainService.changeObject(`station`);
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.MainService.changeStatus(true);
  }
}
