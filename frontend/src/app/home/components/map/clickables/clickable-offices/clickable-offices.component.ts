import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../../../../services/office.service';
import { MainService } from './../../../../services/main.service';

@Component({
  selector: '[app-clickable-offices]',
  templateUrl: './clickable-offices.component.html',
  styleUrls: ['../clickable.scss', './clickable-offices.component.scss']
})
export class ClickableOfficesComponent implements OnInit {

  constructor(
    private OfficeService: OfficeService,
    private MainService: MainService,
  ) { }

  ngOnInit() {
  }

  onClickOffice(event: Event) {


    this.OfficeService.whatOffice = event.srcElement.id;
    this.MainService.changeObject(`office`);
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.MainService.changeStatus(true);
  }
}
