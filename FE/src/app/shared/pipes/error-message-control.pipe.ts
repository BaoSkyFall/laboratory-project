import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from "@angular/forms";
import { ValidationService } from '@shared/services/validation.service';

@Pipe({
  name: 'errorMessageControl'
})
export class ErrorMessageControlPipe implements PipeTransform {

  transform(control: FormControl | AbstractControl, messageObject: any, ...args: unknown[]): string {
    // todo handle common fails control error
    for (const propertyName in control.errors) {
      return messageObject?.hasOwnProperty(propertyName) ? messageObject[propertyName] : ValidationService.getValidationErrorMessage(
        propertyName,
        control.errors[propertyName],
        messageObject.labelName,
        messageObject.labelCompare,
      );

    }
    return '';
  }

}
