import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DetailComponent } from './home/components/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


import { BurgerMenuComponent } from './home/components/menu/burger-menu/burger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MapComponent } from './home/components/map/map.component';
import { MenuComponent } from './home/components/menu/menu.component';
import { ClickableOfficesComponent } from './home/components/map/clickables/clickable-offices/clickable-offices.component';
import { ClickableStationsComponent } from './home/components/map/clickables/clickable-stations/clickable-stations.component';
import { ClickableRoomsComponent } from './home/components/map/clickables/clickable-rooms/clickable-rooms.component';
import { InteractivePlacesComponent } from './home/components/map/interactive-places/interactive-places.component';
import { ClickableOthersComponent } from './home/components/map/clickables/clickable-others/clickable-others.component';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ClickablesComponent } from './home/components/map/clickables/clickables.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  fgsColor: '#00ACC1',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'wandering-cubes',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: 'http://ppglive.azurewebsites.net/ppg/ppg-paints-ce/img/logos/2017/PPGRT5635A-trn.png',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#00ACC1',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  threshold: 500
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    DetailComponent,
    MenuComponent,
    AppComponent,
    ClickableOfficesComponent,
    ClickableStationsComponent,
    ClickableRoomsComponent,
    InteractivePlacesComponent,
    ClickableOthersComponent,

    BurgerMenuComponent,

    HomeComponent,

    AdminComponent,

    ClickablesComponent
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
    MatButtonModule,
    MatListModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
