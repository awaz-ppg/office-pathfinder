import { Injectable } from '@angular/core';
import { Kitchen } from './../model/kitchen.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  url = 'http://localhost:64513/api/Kitchens';
  kitchen: Kitchen[];
  tmp = [];
  isCliked = false;
  constructor(private http: HttpClient) { }

  getKitchen() {
    return this.http.get<Kitchen[]>(this.url);
  }

  getKitchenkArray() {
    if(this.kitchen != null){
    this.tmp[0] = this.kitchen[0].number;
    this.tmp[1] = this.kitchen[0].name;
    this.tmp[2] = this.kitchen[0].isCoffee.toString();;
    this.tmp[3] = this.kitchen[0].isWater.toString();
    this.tmp[4] = this.kitchen[0].id;
    return this.tmp;
    }
  }
}
