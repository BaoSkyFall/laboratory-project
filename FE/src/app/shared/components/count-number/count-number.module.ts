import { LabNgZorroAntdModule } from '@shared/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '@shared/pipes/pipe.module';
import { CountNumberComponent } from './count-number.component';
import { NumberOnlyDirective } from '@cores/_directives';


@NgModule({
  declarations: [
    CountNumberComponent,
    NumberOnlyDirective,
  ],
  exports: [
    CountNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    LabNgZorroAntdModule
  ]
})
export class CountNumberModule {
}
