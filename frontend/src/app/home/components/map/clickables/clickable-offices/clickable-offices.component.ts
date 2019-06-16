import { element } from 'protractor';
import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: '[app-clickable-offices]',
  templateUrl: './clickable-offices.component.html',
  styleUrls: ['../clickable.scss', './clickable-offices.component.scss']
})
export class ClickableOfficesComponent implements OnChanges {
  @Input() shiningOfficeId: [];
  @Output() officeId = new EventEmitter<string>();

  constructor(private mainService: MainService) { }
  tooltip: string;


  ngOnChanges(changes: SimpleChanges) {
    if (changes.shiningOfficeId !== undefined) {
      document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
      if (this.shiningOfficeId !== undefined && this.shiningOfficeId.length != 0) {
        this.shiningOfficeId.forEach(x => document.getElementById(`${x}`).classList.add("shining"));
      }
    }
  }
  whatElement(event: Event){
    this.mainService.office.forEach(element => {
      if (element.numberSVG === event.srcElement.id ){
        this.tooltip = element.tooltipText();
      }
    })
  }

  onClickOffice(event: Event) {
    this.officeId.emit(event.srcElement.id);
  }
}
