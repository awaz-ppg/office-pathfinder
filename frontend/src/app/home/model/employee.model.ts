import { MapObject } from './map-object.model';

export class Employee {
  firstName: string;
  lastName: string;
  isCoordinator: boolean;
  team: string;
  isVolunteer: boolean;
  placeId: string;
  id: string;

  constructor(employee: Employee) {
    Object.assign(this, employee);
  }

}