import { NgModule } from '@angular/core';
import { GenderPipe } from './gender.pipe';
import { NamePipe } from './personal-name.pipe';
import { ImageGenerateByGenderPipe } from './image-generate-by-gender.pipe';
import { DateTimeLabelPipe } from './datetime-label.pipe';

@NgModule({
  imports: [],
  declarations: [GenderPipe, NamePipe, ImageGenerateByGenderPipe, DateTimeLabelPipe],
  exports: [GenderPipe, NamePipe, ImageGenerateByGenderPipe, DateTimeLabelPipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
