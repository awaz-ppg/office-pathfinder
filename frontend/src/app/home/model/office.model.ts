import { DetailList } from './detail-list.model';

export class Office {
  firstName: string;
  lastName: string;
  number: string;
  numberSVG: string;
  position: string;
  isCoordinator: boolean;
  team: string;
  isVolunteer: boolean;
  id: string;

}

export function mapOffice(office: Office) {
  return [
    new DetailList(`First name`, office.firstName),
    new DetailList(`Last Name`, office.lastName),
    new DetailList(`Number`, office.number),
    new DetailList(`Position`, office.position),
    new DetailList(`Coordinator`, office.isCoordinator.toString()),
    new DetailList(`Team`, office.team),
    new DetailList(`Volunteer`, office.isVolunteer.toString()),
    new DetailList(`Id`, office.id),];
}