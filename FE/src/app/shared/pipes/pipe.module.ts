import { NgModule } from '@angular/core';
import { GenderPipe } from './gender.pipe';
import { NamePipe } from './personal-name.pipe';
import { ImageGenerateByGenderPipe } from './image-generate-by-gender.pipe';
import { DateTimeLabelPipe } from './datetime-label.pipe';
import { ErrorMessageControlPipe } from './error-message-control.pipe';
import { NumberLabelPipe } from './number-label.pipe';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports: [],
  declarations: [GenderPipe, NamePipe, ImageGenerateByGenderPipe, DateTimeLabelPipe, ErrorMessageControlPipe, NumberLabelPipe, SearchFilterPipe],
  exports: [GenderPipe, NamePipe, ImageGenerateByGenderPipe, DateTimeLabelPipe, ErrorMessageControlPipe, NumberLabelPipe, SearchFilterPipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
