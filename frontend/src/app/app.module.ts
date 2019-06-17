import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DetailComponent } from './home/components/detail/detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './data.service';


import { GuestListComponent } from './admin/components/guestlist/guestlist.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BurgerMenuComponent } from './home/components/menu/burger-menu/burger-menu.component';
import { SearchComponent } from './home/components/menu/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatTooltipModule   } from '@angular/material';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';


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
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/PPG_Logo.svg',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#00ACC1',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'OFFICE PATHFINDER',
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
    SearchComponent,
    BurgerMenuComponent,

    HomeComponent,

    AdminComponent,

    ClickablesComponent,

    LoginComponent,

    GuestListComponent,
  ],
  imports: [
    MatSnackBarModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatTooltipModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,

    MatTableModule,

    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
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
