import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

import { BurgerMenuComponent } from './user-interface/burger-menu/burger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MapComponent } from './map/map.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { ClickableOfficesComponent } from './map/clickable-offices/clickable-offices.component';
import { ClickableStationsComponent } from './map/clickable-stations/clickable-stations.component';
import { ClickableRoomsComponent } from './map/clickable-rooms/clickable-rooms.component';
import { InteractivePlacesComponent } from './map/interactive-places/interactive-places.component';
import { ClickableOthersComponent } from './map/clickable-others/clickable-others.component';
@NgModule({
  declarations: [
    MapComponent,
    UserInterfaceComponent,
    AppComponent,
    ClickableOfficesComponent,
    ClickableStationsComponent,
    ClickableRoomsComponent,
    InteractivePlacesComponent,
    ClickableOthersComponent,
    BurgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
