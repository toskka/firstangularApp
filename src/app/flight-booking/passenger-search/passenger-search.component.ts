import { Component, OnInit } from '@angular/core';
import { Passengers } from "app/entities/passengers";
import { URLSearchParams, Headers, Http } from '@angular/http';
import { PassengerService } from "app/flight-booking/passenger-search/passenger.service";

@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html',
    providers: [PassengerService]
})
export class PassengerSearchComponent implements OnInit {
    
    //private http: Http;

    constructor(private passengerService: PassengerService) { 
        // this.http = http;
    }

    name: string;
    firstname: string;
    bonusmiles: number
    passengerStatus: string
    passengers: Array<Passengers> = [];
    selectedPassenger: Passengers;
    message: string;

    basket: object = {
        "3": true,           
        "5": true,
        "17": true
   }

     select(p: Passengers): void {
         this.selectedPassenger = p;
    }

    search(): void {

        // keine Suche wenn name und fistname leer sind 
         if (!this.name || !this.firstname) return;

        this.passengerService
            .find(this.name, this.firstname)
            .subscribe(
                (passengers: Array<Passengers>) => { 
                    this.passengers = passengers;

                     

                 },
                (errResponse) => { 
                    console.error('Fehler beim Laden', errResponse);
                 }
            );

        // let url = 'http://www.angular.at/api/passenger';

        // let headers = new Headers();
        // headers.set('Accept', 'application/json');

        // let search = new URLSearchParams();
        // search.set('name', this.name);
        // search.set('firstname', this.firstname);

        // this
        //     .http
        //     .get(url, { headers, search })
        //     .subscribe(
        //         (response) => { 
        //             this.passengers = response.json();
        //          },
        //         (errResponse) => { 
        //             console.error('Fehler beim Laden', errResponse);
        //          }
        //     );
    }

    save(): void {

   
        // let url = 'http://www.angular.at/api/passenger';
        // let headers = new Headers();
        // headers.set('Accept', 'application/json');
        
        // this.passengerService
        //     .post(url, this.selectedPassenger, { headers })
        //     .map(resp => resp.json())
        //     .subscribe(
        //         passenger => {
        //             this.selectedPassenger = passenger;
        //             this.message = "Erfolgreich gespeichert!";
        //         },
        //         errResponse => {
        //             console.error('Fehler beim Laden', errResponse);
        //             this.message = "Fehler beim Speichern: " + errResponse.text();
        //         }
        //     );
         }


    ngOnInit() { 
    }
}