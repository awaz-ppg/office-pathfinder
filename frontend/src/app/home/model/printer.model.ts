import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';

export class Printer extends MapObject {
  number: string;
  isColor: boolean;

  constructor(printer: Printer) {
    super(printer);
    Object.assign(this, printer);
  }

  map() {
    return [
      new DetailList(`Number`, this.number),
      new DetailList(`Color`, this.isColor.toString()),
      //new DetailList(`Id`, this.id)
    ];
  }

  tooltipText(){
    return this.isColor ? 'Color' : 'Black/White';
  }
}
