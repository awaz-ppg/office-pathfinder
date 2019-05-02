import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private status = new Subject<boolean>();
  object = ``;

  constructor() { }

  status$ = this.status.asObservable();

  changeStatus(Status: boolean) {
    this.status.next(Status);
  }

  changeObject(Object: string) {
    this.object = Object;
  }

}
