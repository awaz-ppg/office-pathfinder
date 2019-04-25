import { Component, OnInit } from '@angular/core';
import {MatMenuModule, MatButtonModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  lastSelected:string = "";
  constructor() { }

  ngOnInit() {
  }
    onClick(event: Event){
        let elementClass;
        if(event.srcElement.children.length != 0)
            elementClass = event.srcElement.id.toString().replace(/button_/g,'');
        else
            elementClass = ( <HTMLElement>event.target ).parentElement.id.toString().replace(/button_/g,'');
        console.log(this.lastSelected);
        if(this.lastSelected)
        {
            var prevElementList = document.querySelectorAll("[id^=" + CSS.escape(this.lastSelected) + "] ");
            prevElementList.forEach ((item, index) => {
                (document.getElementById(item.id) as HTMLElement).style.opacity="0";
            });
        }
        var elementList = document.querySelectorAll("[id^=" + CSS.escape(elementClass) + "] ");
        elementList.forEach ((item, index) => {
            (document.getElementById(item.id) as HTMLElement).style.opacity="0.6";
       });
       this.lastSelected = elementClass;
    }


}
