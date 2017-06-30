import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
// import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
// import { PassengerService } from "app/flight-booking/passenger-search/passenger.service";
import { FlightBookingModule } from "app/flight-booking/flight-booking.modules";
import { BASE_URL } from "app/app.token";
import { HomeComponent } from "app/home/home.component";
import { AppRouterModule } from "app/app.routes";
//import { SharedModule } from "app/shared/shared.module"

@NgModule({
   declarations: [
     AppComponent,
     HomeComponent     
  ],

  imports: [
    BrowserModule,
    FlightBookingModule,
    HttpModule,
    AppRouterModule
    
    
    //FormsModule, // -->im flightbooking Modul 
    
    //SharedModule  // --->im flightbooking Modul  
  ],
  providers: [ { provide: BASE_URL, useValue: 'http://www.angular.at/api'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
