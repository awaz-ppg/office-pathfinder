export class SearchObject {
    text: string;
    id: string;
    type: string;
  
    constructor(text: string, id: string, type: string) {
      this.text = text;
      this.id = id;
      this.type = type;
    }
}
