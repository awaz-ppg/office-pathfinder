import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MapComponent } from './map/map.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { ClickableOfficesComponent } from './map/clickable-offices/clickable-offices.component';
import { ClickableStationsComponent } from './map/clickable-stations/clickable-stations.component';
import { ClickableRoomsComponent } from './map/clickable-rooms/clickable-rooms.component';
import { InteractivePlacesComponent } from './map/interactive-places/interactive-places.component';
import { ClickableOthersComponent } from './map/clickable-others/clickable-others.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BurgerMenuComponent,
    DetailComponent,
    UserInterfaceComponent,
    AppComponent,
    ClickableOfficesComponent,
    ClickableStationsComponent,
    ClickableRoomsComponent,
    InteractivePlacesComponent,
    ClickableOthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
