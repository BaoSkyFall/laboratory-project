import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

interface MessageObject {
  [propName: string]: string;
}

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})

export class ErrorMessagesComponent {
  @Input() control: FormControl | AbstractControl;
  @Input() messageObject: MessageObject;
}
