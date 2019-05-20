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

  constructor(private mainService: MainService) {
    this.subscription = this.mainService.select$.subscribe(select => {
      if (select[0].includes(`wc`) || select[0].includes(`elevator`) || select[0].includes(`reception`)
        || select[0].includes(`water-point`) || select[0].includes(`coffee-point`)
        || select[0].includes(`fire-extinguisher`) || select[0].includes(`first-aid-kit`)
        || select[0].includes(`wardrobe`)
      ) {
        document.querySelectorAll(".shining").forEach(element => element.classList.remove("shining"));
        select.forEach(x => document.getElementById(`${x}`).classList.add("shining"))
      }
    });
  }

  ngOnInit() {
  }

}
