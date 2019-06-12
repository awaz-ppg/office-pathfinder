import { Component, OnInit } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainService } from './../../../services/main.service';
import { MenuItem } from './MenuItem';
import { Elements } from '../../../../constants/elements';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {


  constructor(private mainService: MainService) { }

  menuOptions: Array<MenuItem> = [
    { elementSelector: Elements.wc, text: 'WC', icon: 'wc' },
    { elementSelector: Elements.office, text: 'BIURA', icon: 'business_center' },
    { elementSelector: Elements.room, text: 'SALE', icon: 'meeting_room' },
    { elementSelector: Elements.printer, text: 'DRUKARKI', icon: 'print' },
    { elementSelector: Elements.elevator, text: 'WINDY', icon: 'arrow_upward' },
    { elementSelector: Elements.kitchen, text: 'KUCHNIE', icon: 'restaurant' },
    { elementSelector: Elements.reception, text: 'RECEPCJA', icon: 'room' },
    { elementSelector: Elements.water, text: 'WODA', icon: 'local_drink' },
    { elementSelector: Elements.coffee, text: 'KAWA', icon: 'local_cafe' },
    { elementSelector: Elements.fireExtinguisher, text: 'GAŚNICE', icon: 'whatshot' },
    { elementSelector: Elements.firstAidKit, text: 'APTECZKI', icon: 'local_hospital' },
    { elementSelector: Elements.wardrobe, text: 'SZAFY', icon: 'change_history' },
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
