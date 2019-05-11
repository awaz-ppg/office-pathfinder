import { Desk } from './../model/desk.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DeskService {


  url = environment.apiUrl + 'desks';

  tmp = [];
  whatDesk: string;
  constructor(private http: HttpClient) { }



}
