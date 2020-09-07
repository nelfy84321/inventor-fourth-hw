import {FormControl} from '@angular/forms';

export class CustomValidators {

    static checkSpacing (control: FormControl): {[key: string]: boolean} {
        if (control.value.split('').some((e: string) => e === ' ')) {
                return {checkSpacing: true}
        }
        return null;
    }

    static isDigitLetter (control: FormControl): {[key: string]: boolean} {
        if (control.value.search(/\d/) == -1) {
            return {isDigitLetter: true};
        } else if (control.value.search(/[a-zA-Z]/) == -1) {
            return {isDigitLetter: true};
        }
        return null
    }
}