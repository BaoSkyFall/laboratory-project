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
import { SelectSetCriteriaComponent } from './step-two/select-set-criteria/select-set-criteria.component';
import { SelectCriteriaComponent } from './step-two/select-criteria/select-criteria.component';
import { CountNumberModule } from '../count-number/count-number.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    SelectSetCriteriaComponent,
    SelectCriteriaComponent
  ],
  exports: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    ErrorMessagesModule,
    LabNgZorroAntdModule,
    CountNumberModule,
    NgxMaskModule,
    PipeModule,

  ]
})
export class StepModule {
}
