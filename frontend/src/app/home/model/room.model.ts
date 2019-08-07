import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';

export class Room extends MapObject {
  numberOfPeople: number;
  description: string;
  roomName: string;
  roomNumber: string;
  isTV: boolean;
  isBlackboard: boolean;
  isPhone: boolean;

  constructor(room: Room) {
    super(room);
    Object.assign(this, room);
  }

  map() {
    return [new DetailList(`Number of people`, this.numberOfPeople.toString()),
    new DetailList(`Description`, this.description),
    new DetailList(`Room name`, this.roomName),
    new DetailList(`Room number`, this.roomNumber),
    new DetailList(`TV`, this.isTV.toString()),
    new DetailList(`Blackboard`, this.isBlackboard.toString()),
    new DetailList(`Phone`, this.isPhone.toString()),
    //new DetailList(`Id`, this.id),
  ];
  }
 
  tooltipText(){
    return this.roomName;
  }

}
