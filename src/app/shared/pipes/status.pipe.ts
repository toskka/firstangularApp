import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(value: any, fmt: string, lang: string ): any {

        let short, long;

        switch(value){
            case 'A':
                short = 'SEN';
                long = 'Senator';
                break;
            case 'B':
                short = 'FTL';
                long = 'Frequent Traveler';
                break;
            case 'C':
                short = 'NIX';
                long = 'Passenger';
                break;
            default:
                short = long = 'NIX';

        }

         if (fmt == 'long') {
            return long;
        }

        return short;       


    }
}


// Erweitern Sie Ihre Lösung um eine StatusPipe, die die Eigenschaft 
//passengerStatus (A, B, C) auf die folgenden
// Lang- bzw. Kurzbezeichnungen abbildet:
// • Senator (SEN)
// • Frequent Traveler (FTL)
// • Passenger (-)