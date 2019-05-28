import { MapObject } from './map-object.model';

export class Employee {
  firstName: string;
  lastName: string;
  isCoordinator: true;
  team: string;
  isVolunteer: true;
  placeId: string;
  id: string;

  constructor(employee: Employee) {
    Object.assign(this, employee);
  }
}