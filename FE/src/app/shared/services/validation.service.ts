import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public static getValidationErrorMessage(validatorName: string, validatorValue?: any, labelName?: string): any {
    const config = {
      email: `login.emailWrongValid`,
      required: `error.required`,
      invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      invalidPhone: 'error.invalidPhone',
      maxlength: `The field can't contain more than ${validatorValue.requiredLength} characters.`,
      BLACK_ExistedCardNo: `Card existed in blacklist`,
      MONTHCARD_NotFound: `error.cardNotFound`,
      BUS_SameKey: `BUS_SameKey`
    };
    if(validatorName == 'minlength')
    {
      return `error.MinLength${validatorValue.requiredLength}`
    }
    return config[validatorName];
  }

  public static passwordValidator(control: AbstractControl): any {
    if (!control.value) { return; }

    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    // (?!.*\s)          - Spaces are not allowed
    return (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) ? '' : { invalidPassword: true };
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
