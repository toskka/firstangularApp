import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'passenger-edit',
    template: `
        <h1>Flight Edit</h1>
        <div class="card">
            
            <p>
                Id: {{id}}
            </p>
            <p>
                ShowDetails: {{showDetails}}
            </p>
        </div>
    `
})

export class PassengerEditComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    id: string;
    showDetails: string;

    ngOnInit() {

        this.route.params.subscribe(p => {

            this.id = p['id'];
            this.showDetails = p['showDetails'];

        });

     }
}