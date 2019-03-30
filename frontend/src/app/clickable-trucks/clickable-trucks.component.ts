import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetIdAndTypeService} from '../my-service.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-clickable-trucks',
  templateUrl: './clickable-trucks.component.html',
  styleUrls: ['./clickable-trucks.component.css']
})
export class ClickableTrucksComponent implements OnInit {
  id = '';
  type = '';
  subscription: Subscription;
  constructor(private getIdAndTypeService: GetIdAndTypeService) {
    this.subscription = getIdAndTypeService.id$.subscribe(gotId => { this.id = gotId; });
    this.subscription = getIdAndTypeService.type$.subscribe(gotType => {this.type = gotType; });
  }

  ngOnInit() {
  }
  onClick(event: Event) {
    // console.log('to jest id: ' + this.id + '  a to type: ' + this.type);
    if (this.id !== 'id') {
      this.getIdAndTypeService.deleteHollyMolly();
    }
    this.getIdAndTypeService.returnId(event.srcElement.id);
    this.getIdAndTypeService.returnType(event.srcElement.parentElement.id);
    document.getElementById(this.id).setAttribute('class', 'hollymolly');
    // console.log('to jest id: ' + this.id + '  a to type: ' + this.type);
    // console.log(event.srcElement.parentNode);
  }


}
