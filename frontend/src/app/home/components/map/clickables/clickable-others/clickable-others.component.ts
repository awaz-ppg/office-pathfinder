import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MainService } from './../../../../services/main.service';

@Component({
  selector: '[app-clickable-others]',
  templateUrl: './clickable-others.component.html',
  styleUrls: ['../clickable.scss', './clickable-others.component.scss']
})
export class ClickableOthersComponent implements OnChanges {
  @Input() shiningOtherId: [];
  @Output() otherId = new EventEmitter<string>();

  constructor(private mainService: MainService) { }
  tooltip: string;
  detailArray = [];
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
       if(element.numberSVG[0] == 'k'){
          this.tooltip = this.detailArray[1].data;
        }
        else{
          if(this.detailArray[1].data == "true"){
           this.tooltip = "Color";
          }
          else{
           this.tooltip = "Black/White";
          }
        
        }
      }
    });
  }

  onClickKitchen(event: Event) {
    this.otherId.emit(event.srcElement.id);
  }


  onClickPrinter(event: Event) {
    this.otherId.emit(event.srcElement.id);
  }
}
