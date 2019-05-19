import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';

export class Kitchen extends MapObject {
  number: number;
  name: string;
  isCoffee: boolean;
  isWater: boolean;

  constructor(kitchen: Kitchen) {
    super(kitchen);
    this.number = kitchen.number;
    this.name = kitchen.name;
    this.isCoffee = kitchen.isCoffee;
    this.isWater = kitchen.isWater;
  }

  map() {
    return [
      new DetailList(`Number`, this.number.toString()),
      new DetailList(`Name`, this.name),
      new DetailList(`Coffee`, this.isCoffee.toString()),
      new DetailList(`Water`, this.isWater.toString()),
      new DetailList(`Id`, this.id)];
  }
}

