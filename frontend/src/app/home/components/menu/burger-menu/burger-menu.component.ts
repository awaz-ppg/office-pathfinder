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


  constructor(private mainService: MainService) { }

  menuOptions: Array<MenuItem> = [
    { elementSelector: 'wc', text: 'WC', icon: 'wc' },
    { elementSelector: 'office', text: 'BIURA', icon: 'business_center' },
    { elementSelector: 'room', text: 'SALE', icon: 'meeting_room' },
    { elementSelector: 'printer', text: 'DRUKARKI', icon: 'print' },
    { elementSelector: 'elevator', text: 'WINDY', icon: 'arrow_upward' },
    { elementSelector: 'kitchen', text: 'KUCHNIE', icon: 'restaurant' },
    { elementSelector: 'reception', text: 'RECEPCJA', icon: 'room' },
    { elementSelector: 'water-point', text: 'WODA', icon: 'local_drink' },
    { elementSelector: 'coffee-point', text: 'KAWA', icon: 'local_cafe' },
    { elementSelector: 'fire-extinguisher', text: 'GAŚNICE', icon: 'whatshot' },
    { elementSelector: 'first-aid-kit', text: 'APTECZKI', icon: 'local_hospital' },
    { elementSelector: 'wardrobe', text: 'SZAFY', icon: 'change_history' },
  ];

  ngOnInit() {
  }

  onClick(elementSelector: string) {
    let elementList = document.querySelectorAll(`[id^=${CSS.escape(elementSelector)}]`);
    let idList = [''];
    elementList.forEach((x, index) => idList[index] = x.id);
    this.mainService.changeSelect(idList);
  }
}
