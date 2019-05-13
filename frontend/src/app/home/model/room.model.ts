import { DetailList } from './detail-list.model';

export class Room {
  numberOfPeople: number;
  description: string;
  roomName: string;
  roomNumber: string;
  roomNumberSVG: string;
  isTV: boolean;
  isBlackboard: boolean;
  isPhone: boolean;
  id: string;

}

export function mapRoom(room: Room) {
  return [new DetailList(`Number of people`, room.numberOfPeople.toString()),
  new DetailList(`Description`, room.description),
  new DetailList(`Room name`, room.roomName),
  new DetailList(`Room number`, room.roomNumber),
  new DetailList(`TV`, room.isTV.toString()),
  new DetailList(`Blackboard`, room.isBlackboard.toString()),
  new DetailList(`Phone`, room.isPhone.toString()),
  new DetailList(`Id`, room.id),];
}

