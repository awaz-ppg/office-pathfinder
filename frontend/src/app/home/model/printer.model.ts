import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';

export class Printer extends MapObject {
  number: string;
  isColor: boolean;

  constructor(printer: Printer) {
    super(printer);
    this.number = printer.number;
    this.isColor = printer.isColor;
  }

  map() {
    return [
      new DetailList(`Number`, this.number),
      new DetailList(`Color`, this.isColor.toString()),
      new DetailList(`Id`, this.id)];
  }
}