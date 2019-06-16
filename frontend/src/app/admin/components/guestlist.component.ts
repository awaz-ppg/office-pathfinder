import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/home/model/guest.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GuestService } from 'src/app/home/services/guest.service';


@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.scss']
})
export class GuestListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Surname', 'Company', 'Visit Start', 'Visit End'];
  guests: Guest[];

  constructor(private http: HttpClient, guestService: GuestService) {
    guestService.getGuest().subscribe(guests => {
      this.guests = guests;
    });
  }
  ngOnInit() { }
}
