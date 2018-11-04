import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SuiModule, SuiSidebarModule, SuiAccordionModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FlightsComponent } from './user/flights/flights.component';
import { FlightService } from './user/services/flight.service';

import { HttpClientModule } from '@angular/common/http';
import { LaunchsiteComponent } from './user/launchsite/launchsite.component';
import { SpacexNavComponent } from './shared/spacex-nav/spacex-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FlightsComponent,
    LaunchsiteComponent,
    SpacexNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SuiModule,
    SuiSidebarModule,
    SuiAccordionModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
