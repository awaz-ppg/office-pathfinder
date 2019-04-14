import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  constructor() { }

  id: string = '0';

   view()
  {
    console.log('seriws: ' , this.id);
  }
}
