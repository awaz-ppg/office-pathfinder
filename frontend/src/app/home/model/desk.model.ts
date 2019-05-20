import { DetailList } from './detail-list.model';
import { MapObject } from './map-object.model';

export class Desk extends MapObject {
    numberDesk: string;
    numberDeskSVG: string;

    constructor(desk: Desk) {
        super(desk);
        Object.assign(this, desk);
    }

    map() {
        return [
            new DetailList(`Desk Number`, this.numberDesk),
            new DetailList(`Worker`, this.id)];
    }

}

