import { Injectable } from '@angular/core';
import { Printer } from './../model/printer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrinterSercive {

  url = 'http://localhost:64513/api/Printers';
  printer: Printer[];
  tmp = [];
  isCliked = false;
  constructor(private http: HttpClient) { }

  getPrinter() {
    return this.http.get<Printer[]>(this.url);
  }

  getPrinterArray() {
    if (this.printer != null) {
    this.tmp[0] = this.printer[0].number;
    this.tmp[1] = this.printer[0].isColor.toString();
    this.tmp[2] = this.printer[0].id;

    return this.tmp;
    }

  }
}
