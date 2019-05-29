import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MainService } from './../../../../services/main.service';
import { Subscription } from 'rxjs';
import * as $ from "jquery";
@Component({
  selector: '[app-clickable-others]',
  templateUrl: './clickable-others.component.html',
  styleUrls: ['../clickable.scss', './clickable-others.component.scss']
})
export class ClickableOthersComponent implements OnChanges {
  @Input() shiningOtherId: [];
  @Output() otherId = new EventEmitter<string>();
 

  detailArray = [];
  subscription: Subscription;
  open: boolean;
  isClicked: boolean;
  tooltip: string;
  constructor(
    private mainService: MainService,

  ) {
         
  }
  
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.shiningOtherId !== undefined) {
      document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
      if (this.shiningOtherId != undefined && this.shiningOtherId.length != 0) {
        this.shiningOtherId.forEach(x => document.getElementById(`${x}`).classList.add("shining"));
      }
    }
  }

  whatElement(event: Event){
      this.mainService.all.forEach(element => {
      if (element.numberSVG === event.srcElement.id ) {
        this.detailArray = element.map();
        
      }
    });
    this.tooltip = this.detailArray[1].data
  }

  onClickKitchen(event: Event) {
    this.otherId.emit(event.srcElement.id);
    this.isClicked  = true;

    
  }


  onClickPrinter(event: Event) {
    this.otherId.emit(event.srcElement.id);
  }
}
