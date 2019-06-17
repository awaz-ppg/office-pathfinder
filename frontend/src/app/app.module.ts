import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DetailComponent } from './home/components/detail/detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './data.service';

import { GuestListComponent } from './admin/components/guestlist/guestlist.component';
import { BurgerMenuComponent } from './home/components/menu/burger-menu/burger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule,
   MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';
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
import { NgxUiLoaderModule, NgxUiLoaderConfig, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { LoginComponent } from './login/login.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';
import { MatTableModule } from '@angular/material/table';

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

    ClickablesComponent,

    LoginComponent,

    GuestListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,

    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),

  ],
  providers: [
      DataService,
      JwtHelperService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
