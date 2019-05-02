import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private open = new Subject<boolean>();
  object = ``;

  constructor() { }

  open$ = this.open.asObservable();

  changeOpenStatus(Status: boolean) {
    this.open.next(Status);
  }

  changeObject(Object: string) {
    this.object = Object;
  }

}
