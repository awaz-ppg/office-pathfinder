import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-detal',
  templateUrl: './detal.component.html',
  styleUrls: ['./detal.component.css']
})
export class DetalComponent implements OnInit {

  constructor() {}

  @Input()
  id: string;


  office: string[] = ['Geralt  Butcher of Blaviken', 'Ciri Lion Cub of Cintra',
                      'Yennefer Horsewoman of War', 'Triss  Merigold the Fearless', 'Dandelion', 'Vesemir', 'Emhyr var Emreis']


  delate(event: Event){
    this.id = '';
  }

  view()
  {

    return this.office[this.id.substr(this.id.length - 1)];

  }

  ngOnInit() {
  }

}
