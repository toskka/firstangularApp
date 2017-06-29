import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Passengers } from "app/entities/passengers";
import { BASE_URL} from "app/app.token";


@Injectable()
export class PassengerService {
    constructor(private http: Http,
     @Inject(BASE_URL) private baseUrl: string) {}


        find(name: string, firstname: string): Observable<Passengers[]> {
        
        let url = this.baseUrl + '/passenger';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('name', name);
        search.set('firstname', firstname);

        return this
                .http
                .get(url, { headers, search })
                .map(resp => resp.json());
        

        



    }
     
    
}