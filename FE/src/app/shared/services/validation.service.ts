import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {


  public static getValidationErrorMessage(validatorName: string, validatorValue?: any, labelName?: string, labelCompare?: string): any {
    const config = {
      email: `sai định dạng`,
      required: `bắt buộc`,
      invalidPassword: 'invalid password. Password must be at least 6 characters long, and contain a number.',
      invalidPhone: 'sai định dạng',
      maxLength: `the field can't contain more than ${validatorValue.requiredLength} characters.`,
      mustMatch: `Those ${labelCompare} didn’t match`,
      greaterThan: `must be greater than ${labelCompare}`,
      lowerThan: `cannot be greater than ${labelCompare}`
    } as any;
    return validatorName === 'mustMatch' ? config[validatorName] : labelName + " " + config[validatorName];
  }
  public static patternValidatorPhone(control: AbstractControl): any {
    if (!control.value) { return; }

    if (control.value.match(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/)) {
      return null;
    } else {
      return { 'invalidPhone': true };
    }

    const regex = new RegExp(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/);
    return (control.value.match(regex) ? '' : { invalidPhone: true });


    // return (control: AbstractControl): { [key: string]: any } => {
    //   if (!control.value) {
    //     return null;
    //   }
    //   const regex = new RegExp(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/);
    //   const valid = regex.test(control.value);
    //   return valid ? null : { invalidPhone: true };
    // };
  }
}
