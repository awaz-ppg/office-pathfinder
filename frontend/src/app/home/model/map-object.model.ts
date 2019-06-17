export class MapObject {
    numberSVG: string;
    id: string;

    constructor(mapObject: MapObject) {
        this.id = mapObject.id;
        this.numberSVG = mapObject.numberSVG;
    }

    map() { }

    creatSearchString() { }
}