import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { namespaceHTML } from '@angular/core/src/render3';

@Component({
  selector: 'app-clik-office',
  templateUrl: './clik-office.component.html',
  styleUrls: ['./clik-office.component.css']
})



export class ClikOfficeComponent implements OnInit {

  constructor() { }

  names: string[][] = new Array(

  ['Geralt', ' Butcher of Blaviken'],
  ['Ciri', ' Lion Cub of Cintra'],
  ['Yennefer', ' Horsewoman of War'],
  ['Triss', ' Merigold the Fearless']);

  click: string;
  value: string[];
  id: number = 0;
  @Output()
  eventTask = new EventEmitter<string[]>();

  onEnter(value: string) {
    for (let i = 0; i < this.names.length ; i++) {
      if(this.names[i][0] == value ){
        this.eventTask.emit(this.names[i]);
        this.id = i;
      }
    }
  }

  ngOnInit() {
  }

  onClick(event: Event) {

    this.click = event.srcElement.id;
    this.eventTask.emit(this.names[this.click]);


  }

}
