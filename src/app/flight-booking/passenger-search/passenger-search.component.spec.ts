import { TestBed } from '@angular/core/testing';
import { FlightBookingModule } from "app/flight-booking/flight-booking.modules";
import { CommonModule } from "@angular/common";
import { BASE_URL } from "app/app.token";
import { PassengerSearchComponent } from "app/flight-booking//passenger-search/passenger-search.component";

import 'rxjs';
import { HttpModule } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { PassengerService } from "app/flight-booking/passenger-search/passenger.service";


let passengerServiceMock = {
    find(name: string, firstname: string) {
        return Observable.of([
            {
                id: 4711,
                name: 'Pinola',
                firstname: 'Javier',
                passengerStatus: 'A'
            },
            {
                id: 4712,
                name: 'Mintal',
                firstname: 'Marek',
                passengerStatus: 'A'
            }
        ])
    }
}



describe('PassengerSearchComponent', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                HttpModule,
                FlightBookingModule
            ],
            declarations: [
            ],
            providers: [
                {
                    provide: BASE_URL, useValue: 'http://testserver.intern/api'
                }
            ]
        }).compileComponents();

        TestBed.overrideComponent(PassengerSearchComponent, {
            set: {
                providers: [{
                    provide: PassengerService, 
                    useValue: passengerServiceMock
                }]
            }
        }).compileComponents();

    });

    it('--> Test 1: should have no loaded passengers initially', () => { 
	    let fixture = TestBed.createComponent(PassengerSearchComponent);
        let comp = fixture.componentInstance;
        expect(comp.passengers.length).toBe(0);
    });

   it('--> Test 2: should load passenger --> name and firstname / Test ob search Methode das search aufruft', () => { 
        // SpyOn vor dem Erzeugen der Komponenten aufrufen!
        spyOn(passengerServiceMock, 'find').and.callThrough();

        let fixture = TestBed.createComponent(PassengerSearchComponent);
        let comp = fixture.componentInstance;
  
        comp.name = 'Muster';
        comp.firstname = 'Max';

        comp.search();

        expect(comp.passengers.length).toBe(2);
        expect(passengerServiceMock.find).toHaveBeenCalled();
  });

   it('--> Test 3: should not load passenger without name and firstname / Test ob search Methode das search aufruft', () => { 
	    // SpyOn vor dem Erzeugen der Komponenten aufrufen!
        spyOn(passengerServiceMock, 'find').and.callThrough();

        let fixture = TestBed.createComponent(PassengerSearchComponent);
        let comp = fixture.componentInstance;

        comp.name = '';
        comp.firstname = '';

        comp.search();

        expect(comp.passengers.length).toBe(0);
        expect(passengerServiceMock.find).not.toHaveBeenCalled();
  }
  ); 


});