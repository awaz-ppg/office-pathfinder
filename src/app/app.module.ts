import { ClickableService } from './clickable.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickableSignedComponent } from './clickable-signed/clickable-signed.component';
import { StaticMapComponent } from './static-map/static-map.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ClickableSignedComponent,
    StaticMapComponent,
    InfoPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [ClickableService],
  bootstrap: [AppComponent],
  exports: [StaticMapComponent, InfoPanelComponent]
})
export class AppModule { }
