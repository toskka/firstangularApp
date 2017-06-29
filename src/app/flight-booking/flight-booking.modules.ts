
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { PassengerCardComponent } from "app/flight-booking/passenger-search/passenger-card.component";


@NgModule({
    imports: [CommonModule, FormsModule, SharedModule],
    declarations: [
        PassengerSearchComponent,
        PassengerCardComponent
    ],
    providers: [
        // FlightService 
    ],
    exports: [
        PassengerSearchComponent
    ]
})
export class FlightBookingModule { }