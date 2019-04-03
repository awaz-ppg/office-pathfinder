import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickableService } from '../clickable.service';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: '.app-clickable-signed',
  templateUrl: './clickable-signed.component.html',
  styleUrls: ['./clickable-signed.component.css']
})
export class ClickableSignedComponent implements OnDestroy {

  objectID = '';
  objectType = '';
  objectIDHover = '';
  objectTypeHover = '';
  objectSub: Subscription;

  constructor(private clickableService: ClickableService) {
    this.objectSub = clickableService.getClickableID().subscribe(id => {this.objectID = id; });
    this.objectSub = clickableService.getClickableType().subscribe(type => {this.objectType = type; });
  }

  ngOnDestroy() {
    this.objectSub.unsubscribe();
  }

  onHover(event: Event){
    this.objectIDHover = event.srcElement.id;
    this.objectTypeHover = event.srcElement.parentElement.id;
  }

  onClick(event: Event) {

    if (this.objectID) {    // remove selection
      this.clickableService.removeSelection();
    }
    this.clickableService.sendClickableID(event.srcElement.id);
    this.clickableService.sendClickableType(event.srcElement.parentElement.id);
    document.getElementById(this.objectID).setAttribute('class', 'selected');
  }
  displayTooltip(event: Event): string {
    return 'ID:'+ this.objectIDHover + '\nName:' + this.objectTypeHover;
  }


}
