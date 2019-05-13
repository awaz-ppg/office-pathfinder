import { Component, OnInit } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainService } from './../../../services/main.service';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {


  constructor(private MainService: MainService) { }

  menuOptions: Array<MenuItem> = [
    { elementSelector: 'wc', text: 'WC', icon: 'wc' },
    { elementSelector: 'office', text: 'BIURA', icon: 'business_center' },
    { elementSelector: 'room', text: 'SALE', icon: 'meeting_room' },
    { elementSelector: 'printer', text: 'DRUKARKI', icon: 'print' },
    { elementSelector: 'elevator', text: 'WINDY', icon: 'arrow_upward' },
    { elementSelector: 'kitchen', text: 'KUCHNIE', icon: 'restaurant' },
    { elementSelector: 'reception', text: 'RECEPCJA', icon: 'room' },
  ];

  ngOnInit() {
  }

  onClick(elementSelector: string) {
    let elementList = document.querySelectorAll(`[id^=${CSS.escape(elementSelector)}]`);
    let idList = [''];
    elementList.forEach((x, index) => idList[index] = x.id);
    this.MainService.changeSelect(idList);
  }
}
