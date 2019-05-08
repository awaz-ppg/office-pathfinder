import { PrinterSercive } from './../../../../services/printer.service';
import { KitchenService } from './../../../../services/kitchen.service';
import { Component, OnInit } from '@angular/core';
import { MainService } from './../../../../services/main.service';

@Component({
  selector: '[app-clickable-others]',
  templateUrl: './clickable-others.component.html',
  styleUrls: ['../clickable.scss', './clickable-others.component.scss']
})
export class ClickableOthersComponent implements OnInit {

  constructor(
    private KitchenService: KitchenService,
    private PrinterSercive: PrinterSercive,
    private DetailService: MainService,
  ) { }

  ngOnInit() {
    this.PrinterSercive.getPrinter().subscribe(data => {
      this.PrinterSercive.printer = data;
    });

    this.KitchenService.getKitchen().subscribe(data => {
      this.KitchenService.kitchen = data;
    });
  }
  onClickKitchen(event: Event) {
    this.KitchenService.whatKitchen = event.srcElement.id;
    this.DetailService.changeObject(`kitchen`);
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.DetailService.changeStatus(true);
  }


  onClickPrinter(event: Event) {
    this.PrinterSercive.whatPrinter = event.srcElement.id;
    this.DetailService.changeObject(`printer`);
    document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
    event.srcElement.classList.add("shining");
    this.DetailService.changeStatus(true);
  }
}
