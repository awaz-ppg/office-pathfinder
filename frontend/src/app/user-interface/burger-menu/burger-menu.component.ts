import { Component, OnInit } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  lastSelected:string = "";
  menuOptions:Array<MenuItem> = [
        {elementSelector: 'wc', text: 'WC', icon: 'wc'},
        {elementSelector: 'office', text: 'BIURA', icon: 'business_center'},
        {elementSelector: 'room', text: 'SALE', icon: 'meeting_room'},
        {elementSelector: 'printer', text: 'DRUKARKI', icon: 'print'},
        {elementSelector: 'elevator', text: 'WINDY', icon: 'arrow_upward'},
        {elementSelector: 'kitchen', text: 'KUCHNIE', icon: 'restaurant'},
        {elementSelector: 'reception', text: 'RECEPCJA', icon: 'room'},
  ];
  constructor() { }

  ngOnInit() {
  }
    onClick(elementSelector:string){
        if(this.lastSelected)
        {
            var prevElementList = document.querySelectorAll(`[id^=${CSS.escape(this.lastSelected)}]`);
            prevElementList.forEach (item => {
                (item as HTMLElement).style.opacity="0";
            });
        }
        var elementList = document.querySelectorAll(`[id^=${CSS.escape(elementSelector)}]`);
        elementList.forEach (item => {
            (item as HTMLElement).style.opacity="0.6";
       });
       this.lastSelected = elementSelector;
    }


}
