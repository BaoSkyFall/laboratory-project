import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '@shared/pipes/pipe.module';

import { InlineSVGModule } from 'ng-inline-svg';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { LabNgZorroAntdModule } from '@shared/ng-zorro-antd.module';
import { SharedModule } from '@shared/shared.module';
import { ErrorMessagesModule } from '../error-message/error-messages.module';


@NgModule({
  declarations: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  exports: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    ErrorMessagesModule,
    LabNgZorroAntdModule,
    PipeModule,

  ]
})
export class StepModule {
}
