import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-interactive-places]',
  templateUrl: './interactive-places.component.html',
  styleUrls: ['./interactive-places.component.scss']
})
export class InteractivePlacesComponent implements OnInit {

  subscription: Subscription;

  constructor(private MainService: MainService) {
    this.subscription = this.MainService.select$.subscribe(select => {
      if (select[0].includes(`wc`) || select[0].includes(`elevator`) || select[0].includes(`reception`)) {
        document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
        select.forEach(x => document.getElementById(`${x}`).classList.add("shining"))
      }
    });
  }

  ngOnInit() {
  }

}
