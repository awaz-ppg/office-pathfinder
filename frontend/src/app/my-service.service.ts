import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GetIdAndTypeService {

  // Observable string sources
  private idSource = new Subject<string>();
  private typeSource = new Subject<string>();

  // Observable string streams
  id$ = this.idSource.asObservable();
  type$ = this.typeSource.asObservable();

  // Service message commands
  returnId(placeId: string) {
    this.idSource.next(placeId);
  }

  returnType(placeType: string) {
    this.typeSource.next(placeType);
  }
  deleteHollyMolly() {
    const elements = document.getElementsByClassName('hollymolly');
    console.log(elements);
    const carArray = Array.from(elements);
    for (let i = 0; i < carArray.length; i++) {
      carArray[i].setAttribute('class', 'st4');
    }
  }
}
