import { Injectable } from '@angular/core';
import { Printer } from './../model/printer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PrinterSercive {

  url = environment.apiUrl + 'Printers';
  printer: Printer[];
  tmp = [];
  whatPrinter: string;
  constructor(private http: HttpClient) { }

  getPrinter() {
    return this.http.get<Printer[]>(this.url);
  }

}
