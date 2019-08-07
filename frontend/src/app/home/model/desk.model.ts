import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';
import { Employee } from './employee.model';

export class Desk extends MapObject {
    numberDesk: string;
    worker: string = "empty";

    constructor(desk: Desk) {
        super(desk);
        Object.assign(this, desk);
    }

    map() {
        return [
            new DetailList(`Desk Number`, this.numberDesk),
            new DetailList(`Worker`, this.worker)];
    }

    addWorker(employees: Employee[]){
        let employeeIndex = employees.findIndex(x => x.placeId == this.numberDesk);
        if(employeeIndex != -1){
        this.worker = `${employees[employeeIndex].firstName} ${employees[employeeIndex].lastName}`;
        }
        return this;
    }

}

