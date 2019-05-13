import { DetailList } from './detail-list.model';

export class Printer {
  number: string;
  numberSVG: string;
  isColor: boolean;
  id: string;
}

export function mapPrinter(printer: Printer) {
  return [
    new DetailList(`Number`, printer.number),
    new DetailList(`Color`, printer.isColor.toString()),
    new DetailList(`Id`, printer.id),];
}