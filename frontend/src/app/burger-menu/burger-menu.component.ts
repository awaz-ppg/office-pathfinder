import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  _is_selected:boolean = false;
  constructor() { }

  ngOnInit() {
  }
    onClick(event: Event){
        let elementClass = event.srcElement.id.toString().replace(/button_/g,'');
        var elementList = document.querySelectorAll("[id^=" + CSS.escape(elementClass) + "] ");
        elementList.forEach ((item, index) => {
            console.log(elementClass);
            document.getElementById(item.id).setAttribute('class', 'highlight_' + elementClass);
       });
    }


}
