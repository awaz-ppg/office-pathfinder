import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickRoomsComponent } from './click-rooms/click-rooms.component';
import { ClikOfficeComponent } from './clik-office/clik-office.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickRoomsComponent,
    ClikOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
