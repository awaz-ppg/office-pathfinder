import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';

export class Room extends MapObject {
  numberOfPeople: number;
  description: string;
  roomName: string;
  roomNumber: string;
  roomNumberSVG: string;
  isTV: boolean;
  isBlackboard: boolean;
  isPhone: boolean;

  constructor(room: Room) {
    super(room);
    this.numberOfPeople = room.numberOfPeople;
    this.description = room.description;
    this.roomName = room.roomName;
    this.roomNumber = room.roomNumber;
    this.roomNumberSVG = room.roomNumberSVG;
    this.isTV = room.isTV;
    this.isBlackboard = room.isBlackboard;
    this.isPhone = room.isPhone;
  }

  map() {
    return [new DetailList(`Number of people`, this.numberOfPeople.toString()),
    new DetailList(`Description`, this.description),
    new DetailList(`Room name`, this.roomName),
    new DetailList(`Room number`, this.roomNumber),
    new DetailList(`TV`, this.isTV.toString()),
    new DetailList(`Blackboard`, this.isBlackboard.toString()),
    new DetailList(`Phone`, this.isPhone.toString()),
    new DetailList(`Id`, this.id),];
  }
}
