
import { Routes, RouterModule } from "@angular/router";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { PassengerEditComponent } from "app/flight-booking/passenger-edit/passenger-edit.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'passenger-edit/:id', // ;showDetails=true
        component: PassengerEditComponent
    }
];

export const FlightBookingRoutes = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);