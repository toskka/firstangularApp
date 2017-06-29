import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusColor'
})

export class StatusColorPipe implements PipeTransform {
    transform(value: any, fmt: string, lang: string ): any {

        let color

        switch(value){
            case 'A':
                color = 'red';                
                break;
            case 'B':
                color = 'green';                 
                break;
            case 'C':
               color = 'orange';
                break;
            default:
                color= 'blue';

        }

         if (fmt == 'long') {
            return color;
        }

        return color;       


    }
}

