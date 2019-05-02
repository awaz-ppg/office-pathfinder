import { Component, OnInit } from '@angular/core';
import { OfficeService } from './../../services/office.service';
import { DetailService } from './../../services/detail.service';

@Component({
  selector: '[app-clickable-offices]',
  templateUrl: './clickable-offices.component.html',
  styleUrls: ['../clickable.scss', './clickable-offices.component.scss']
})
export class ClickableOfficesComponent implements OnInit {

  constructor(
    private OfficeService: OfficeService,
    private DetailService: DetailService,
  ) { }

  ngOnInit() {
    this.OfficeService.getOffice().subscribe(data => {
      this.OfficeService.office = data;
    });



  }

  onClickOffice(event: Event) {


    this.OfficeService.whatOffice = event.srcElement.id;
    this.DetailService.changeObject(`office`);
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.DetailService.changeStatus(true);
  }
}
