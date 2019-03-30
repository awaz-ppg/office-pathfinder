import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetIdAndTypeService} from '../my-service.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-userPanel',
  templateUrl: './userPanel.component.html',
  styleUrls: ['./userPanel.component.css']
})
export class UserPanelComponent implements OnInit {
  id = '';
  type = '';
  subscription: Subscription;

  constructor(private getIdAndTypeService: GetIdAndTypeService) {
    this.subscription = getIdAndTypeService.id$.subscribe(gotId => { this.id = gotId; });
    this.subscription = getIdAndTypeService.type$.subscribe(gotType => { this.type = gotType; });
   }

  ngOnInit() {
  }
  searchFunction(txt) {
    this.getIdAndTypeService.deleteHollyMolly();
    const element =  document.getElementById(txt);
   if (element == null) {
    alert('Nie ma takiego czegos');
   } else {
    if (element.children.length !== 0) {
      for (let i = 0; i < element.children.length; i++) {
        element.children.item(i).setAttribute('class', 'hollymolly');
      }
    } else {
      element.setAttribute('class', 'hollymolly');
    }
   }
  }
}
