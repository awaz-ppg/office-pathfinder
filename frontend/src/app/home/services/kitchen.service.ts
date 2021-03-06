import { Injectable } from '@angular/core';
import { Kitchen } from '../model/kitchen.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private http: HttpClient) { }

  getKitchen() {
    return this.http.get<Kitchen[]>(`${environment.apiUrl}Kitchens`);
  }
}
