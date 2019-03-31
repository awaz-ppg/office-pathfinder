import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biuro';
  room: string;





  click(event: Event) {
    this.room = event.srcElement.id;
  }

  view(event) {
    this.room = event;
  }
}
