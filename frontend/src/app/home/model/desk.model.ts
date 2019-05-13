import { DetailList } from './detail-list.model';

export class Desk {
    numberDesk: string;
    numberDeskSVG: string;
    id: string;



}

export function mapDesk(desk: Desk) {
    return [
        new DetailList(`Desk Number`, desk.numberDesk),
        new DetailList(`Worker`, desk.id)];
}