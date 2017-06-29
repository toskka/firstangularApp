import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passengers } from "app/entities/passengers";
import { PassengerService } from "app/flight-booking/passenger-search/passenger.service";

@Component({
    selector: 'passenger-card',
    templateUrl: './passenger-card.component.html'
})

export class PassengerCardComponent implements OnInit {

    @Input() item: Passengers;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }
   

    ngOnInit() { }
}