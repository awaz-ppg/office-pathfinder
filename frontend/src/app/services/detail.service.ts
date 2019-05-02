import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private open = new Subject<boolean>();
  private change = new Subject<boolean>();
  object = ``;

  constructor() { }

  open$ = this.open.asObservable();
  change$ = this.change.asObservable();

  changeOpenStatus(Status: boolean) {
    this.open.next(Status);
  }

  changeChangeStatus(Status: boolean) {
    this.change.next(Status);
  }

  changeObject(Object: string) {
    this.object = Object;
  }

}
