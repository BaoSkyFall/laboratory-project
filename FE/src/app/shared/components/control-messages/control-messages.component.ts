import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent {
  @Input()
  public control: FormControl;
  @Input()
  public labelName?: string;

  constructor(private translate: TranslateService) {
  }

  get errorMessage(): boolean {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        return ValidationService.getValidationErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          this.labelName,
        );
      }
    }

    return undefined;
  }
}
