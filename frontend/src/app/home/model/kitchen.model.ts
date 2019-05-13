import { DetailList } from './detail-list.model';

export class Kitchen {
  number: number;
  numberSVG: string;
  name: string;
  isCoffee: boolean;
  isWater: boolean;
  id: string;

}

export function mapKitchen(kitchen: Kitchen) {
  return [
    new DetailList(`Number`, kitchen.number.toString()),
    new DetailList(`Name`, kitchen.name),
    new DetailList(`Coffee`, kitchen.isCoffee.toString()),
    new DetailList(`Water`, kitchen.isWater.toString()),
    new DetailList(`Id`, kitchen.id),];
}