import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagesComponent } from './error-messages.component';
import { PipeModule } from '@shared/pipes/pipe.module';


@NgModule({
  declarations: [
    ErrorMessagesComponent
  ],
  exports: [
    ErrorMessagesComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
  ]
})
export class ErrorMessagesModule {
}
