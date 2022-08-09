import { NgModule } from '@angular/core';
import { GenderPipe } from './gender.pipe';
import { NamePipe } from './personal-name.pipe';
import { ImageGenerateByGenderPipe } from './image-generate-by-gender.pipe';
import { DateTimeLabelPipe } from './datetime-label.pipe';
import { ErrorMessageControlPipe } from './error-message-control.pipe';
import { NumberLabelPipe } from './number-label.pipe';

@NgModule({
  imports: [],
  declarations: [GenderPipe, NamePipe, ImageGenerateByGenderPipe, DateTimeLabelPipe, ErrorMessageControlPipe, NumberLabelPipe],
  exports: [GenderPipe, NamePipe, ImageGenerateByGenderPipe, DateTimeLabelPipe, ErrorMessageControlPipe, NumberLabelPipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
