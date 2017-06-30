import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({ 
    selector: 'input[name]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: NameValidationDirective,
            multi: true
        }
    ]
 })
export class NameValidationDirective implements Validator {

    constructor() { }

    @Input() name: string;

    validate(control: AbstractControl): object {
        
        let value = control.value;

        let validNames = this.name.split(',');

        if (validNames.indexOf(value) > -1) {
            return { };
        }

        return {
            name: {
                actual: value,
                expected: validNames,
                reason: 42,
                tryAgain: '2J'
            }
        }


    }



}