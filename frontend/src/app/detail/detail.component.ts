import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { ClickService } from './../services/click.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent implements OnInit {

  constructor(private ClickService: ClickService) { }
  id: string;
  element: string;
  kitchen = ['Number' , 'Name', 'Water', 'Coffe'];
  room = ['Number', 'Name', 'Persons', 'Copy pasta outlook', 'Description', 'TV', 'Table', 'Phone'];
  office = ['Name', 'Surname', 'Number', 'Team'];
  printer = ['Number', 'Color'];
  wc = ['Number' , 'Sex', 'Disabled'];
  reception = ['Name'];
  elevator = ['Number'];

  npkitchen = ['Number' , 'Name', 'Yes', 'Yes'];
  nproom = ['Number', 'Name', '15', 'Yes', 'The best room for sleep', 'Yew', 'Yes', 'No'];
  npoffice = ['Adrian', 'Wąż', 'Number', 'The best team'];
  npprinter = ['Number', 'Black/White'];
  npwc = ['Number', 'Asexual', 'Yes'];
  npreception = ['Name'];
  npelevator = ['Number'];


  tmp: string[];
  ngOnInit() {
  }

  atributes(id: number){
    this.tmp = this.elementClick();
    switch(this.whatElement()) {
      case 'kitchen': {
         this.npkitchen[0] = this.getID();
         this.npkitchen[1] = this.ClickService.id;
         return this.npkitchen[id];
         break;
      }
      case 'room': {
        this.nproom[0] = this.getID();
        this.nproom[1] = this.ClickService.id;
        return this.nproom[id];
        break;
      }
      case 'office': {
        this.npoffice[2] = this.getID();
        return this.npoffice[id];
        break;
      }
      case 'printer': {
        this.npprinter[0] = this.getID();
        return this.npprinter[id];
        break;
      }
      case 'wc': {
        this.npwc[0] = this.getID();
        return this.npwc[id];
        break;
      }
      case 'reception': {
        this.npreception[0]='Jagoda is the best';
        return this.npreception[id];
        break;
      }
      case 'elevator': {
        this.npelevator[0] = this.getID();
        return this.npelevator[id];
        break;
      }
    }


  }







    elementClick(){
    this.id = this.ClickService.id;

    switch(this.whatElement()) {
      case 'kitchen': {

         return this.kitchen;
         break;
      }
      case 'room': {

        return this.room;
        break;
      }
      case 'office': {
        return this.office;
        break;
      }
      case 'printer': {
        return this.printer;
        break;
      }
      case 'wc': {
        return this.wc;
        break;
      }
      case 'reception': {
        return this.reception;
        break;
      }
      case 'elevator': {
        return this.elevator;
        break;
      }
    }

  }
  getID(){
    if(this.id.slice(0, 7) === 'station'){
      return this.id.slice(7, 10);
    }

    if(this.id.slice(0, 13) === 'clickable-wc_') {
      return this.id.slice(13, 15);
    }

    if( this.id.slice(0, 18) === 'clickable-kitchen_') {
      return this.id.slice(18, 20);
    }

    if(this.id.slice(0, 18) === 'clickable-printer_'){
      return this.id.slice(18, 20);
    }

    if(this.id.slice(0, 19) === 'clickable-elevator_')    {
      return this.id.slice(19, 21);
    }
    if(this.id.slice(0, 15) === 'clickable-room_'){
      return this.id.slice(15, 17);
    }

    if(this.id.slice(0, 9) === 'reception'){
      return '1';
    }
    return 'none';
  }
  whatElement()
  {

    if(this.id.slice(0, 7) === 'station'){
      return this.element = 'office';
    }

    if(this.id.slice(0, 13) === 'clickable-wc_') {
      return this.element = 'wc';
    }

    if( this.id.slice(0, 18) === 'clickable-kitchen_') {
      return this.element = 'kitchen';
    }

    if(this.id.slice(0, 18) === 'clickable-printer_'){
      return this.element = 'printer';
    }

    if(this.id.slice(0, 19) === 'clickable-elevator_')    {
      return this.element = 'elevator';
    }
    if(this.id.slice(0, 15) === 'clickable-room_'){
      return this.element = 'room';
    }

    if(this.id.slice(0, 9) === 'reception'){
      return this.element = 'reception';
    }
    return 'none';
  }

}
