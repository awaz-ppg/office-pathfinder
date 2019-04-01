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
        let elementClass = event.srcElement.id.toString();
        var elementList = document.querySelectorAll("rect[id^=" + CSS.escape(event.srcElement.id.toString()) + "] ",
                                                    "polygon[id^=" + CSS.escape(event.srcElement.id.toString()) + "]",
                                                    "polyline[id^=" + CSS.escape(event.srcElement.id.toString()) + "]",
                                                    "path[id^=" + CSS.escape(event.srcElement.id.toString()) + "]",
                                                    "g[id^=" + CSS.escape(event.srcElement.id.toString()) + "]");
        elementList.forEach ((item, index) => {
            console.log(elementClass);
            document.getElementById(item.id).setAttribute('class', 'highlight_' + elementClass);
       });
    }


}
