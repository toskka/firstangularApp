
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { PassengerCardComponent } from "app/flight-booking/passenger-search/passenger-card.component";
import { FlightBookingRoutes } from "app/flight-booking/flight-booking.routes";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { PassengerEditComponent } from "app/flight-booking/passenger-edit/passenger-edit.component";


@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        FlightBookingRoutes
        ],
    declarations: [
        PassengerSearchComponent,
        PassengerCardComponent,
        PassengerEditComponent,
       FlightSearchComponent 


    ],
    providers: [
        // FlightService 
    ],
    exports: [
        PassengerSearchComponent,
         
    ]
})
export class FlightBookingModule { }