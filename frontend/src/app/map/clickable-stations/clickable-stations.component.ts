import { DeskService } from './../../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { DetailService } from './../../services/detail.service';

@Component({
  selector: '[app-clickable-stations]',
  templateUrl: './clickable-stations.component.html',
  styleUrls: ['../clickable.scss', './clickable-stations.component.scss']
})
export class ClickableStationsComponent implements OnInit {

  constructor(private DeskService: DeskService,
    private DetailService: DetailService,
  ) { }


  ngOnInit() {
    this.DeskService.getDesk().subscribe(data => {
      this.DeskService.desk = data;
    });
  }

  onClickDesk(event: Event) {
    this.DeskService.whatDesk = event.srcElement.id;
    this.DetailService.changeObject(`station`);
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.DetailService.changeStatus(true);
  }
}
