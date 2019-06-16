import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';

export class Office extends MapObject {
  firstName: string;
  lastName: string;
  number: string;
  position: string;
  isCoordinator: boolean;
  team: string;
  isVolunteer: boolean;

  constructor(office: Office) {
    super(office);
    Object.assign(this, office);
  }

  map() {
    return [
      new DetailList(`First name`, this.firstName),
      new DetailList(`Last Name`, this.lastName),
      new DetailList(`Number`, this.number),
      new DetailList(`Position`, this.position),
      new DetailList(`Coordinator`, this.isCoordinator.toString()),
      new DetailList(`Team`, this.team),
      new DetailList(`Volunteer`, this.isVolunteer.toString()),
      new DetailList(`Id`, this.id)];
  }

  tooltipText(){
    return `${this.firstName} ${this.lastName}`;
  }

}
