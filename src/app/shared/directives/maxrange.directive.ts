import { Attribute, Directive, forwardRef } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from "@angular/forms";

import { NumberValidators } from "./number.validator";

@Directive({
    selector: "[maxRangeAttr][ngModel]",
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxRangeValidatorDirective), multi: true }],
})
export class MaxRangeValidatorDirective implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute("maxRangeAttr") range: string) {
        const arr = range.split(",");
        let min = 1;
        let max = 100;
        if (arr[0]) {
            min = parseInt(arr[0], 10);
        }
        if (arr[1]) {
            max = parseInt(arr[1], 10);
        }
        this.validator = NumberValidators.range(min, max);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}
