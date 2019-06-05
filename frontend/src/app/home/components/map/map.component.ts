import { Component, OnInit } from '@angular/core';
import * as SvgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let svgPanZoom: SvgPanZoom.Instance = SvgPanZoom('#ppg-map', {
      minZoom: 0.1
      , maxZoom: 10

    });
    svgPanZoom.zoom(0.5);
  }

}
