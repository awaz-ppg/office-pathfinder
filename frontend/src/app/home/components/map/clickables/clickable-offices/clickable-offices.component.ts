import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from './../../../../services/main.service';

@Component({
  selector: '[app-clickable-offices]',
  templateUrl: './clickable-offices.component.html',
  styleUrls: ['../clickable.scss', './clickable-offices.component.scss']
})
export class ClickableOfficesComponent implements OnChanges {
  @Input() shiningOfficeId = [''];
  @Output() officeId = new EventEmitter<string>();

  constructor(
    private MainService: MainService,
  ) { }

  ngOnChanges() {

    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    if (this.shiningOfficeId[0] != '' && this.shiningOfficeId.length != 0) {
      this.shiningOfficeId.forEach(x => document.getElementById(`${x}`).classList.add("shining"));
    }
  }

  onClickOffice(event: Event) {
    this.officeId.emit(event.srcElement.id);
  }
}
