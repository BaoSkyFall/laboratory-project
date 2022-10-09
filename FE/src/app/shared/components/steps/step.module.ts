import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '@shared/pipes/pipe.module';

import { InlineSVGModule } from 'ng-inline-svg';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    PipeModule,
  ]
})
export class StepModule {
}
