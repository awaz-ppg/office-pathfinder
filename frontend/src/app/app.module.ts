import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ClickableOfficesComponent } from './map/clickable-offices/clickable-offices.component';
import { ClickableStationsComponent } from './map/clickable-stations/clickable-stations.component';
import { ClickableRoomsComponent } from './map/clickable-rooms/clickable-rooms.component';
import { InteractivePlacesComponent } from './map/interactive-places/interactive-places.component';
@NgModule({
  declarations: [
    AppComponent,
    ClickableOfficesComponent,
    ClickableStationsComponent,
    ClickableRoomsComponent,
    InteractivePlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
