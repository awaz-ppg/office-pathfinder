import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { MainService } from './../../../../services/main.service';

@Component({
  selector: '[app-clickable-others]',
  templateUrl: './clickable-others.component.html',
  styleUrls: ['../clickable.scss', './clickable-others.component.scss']
})
export class ClickableOthersComponent implements OnChanges {
  @Input() shiningOtherId = [''];
  @Output() otherId = new EventEmitter<string>();

  constructor(
    private MainService: MainService,
  ) { }

  ngOnChanges() {
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    if (this.shiningOtherId[0] != '' && this.shiningOtherId.length != 0) {
      this.shiningOtherId.forEach(x => document.getElementById(`${x}`).classList.add("shining"));
    }
  }

  onClickKitchen(event: Event) {
    this.otherId.emit(event.srcElement.id);
  }


  onClickPrinter(event: Event) {
    this.otherId.emit(event.srcElement.id);
  }
}
