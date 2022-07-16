import { IssuedTypePipe } from './issued-type.pipe';
import { TypeOfCardPipe } from './type-of-card.pipe';
import { NgModule } from '@angular/core';
import { FilterPropertiesPipe } from './filter-properties.pipe';
import { GenderPipe } from './gender.pipe';
import { ObjectTypePipe } from './object-type.pipe';
import { NamePipe } from './personal-name.pipe';

@NgModule({
  imports: [],
  declarations: [FilterPropertiesPipe, GenderPipe, NamePipe, ObjectTypePipe, TypeOfCardPipe, IssuedTypePipe],
  exports: [FilterPropertiesPipe, GenderPipe, NamePipe, ObjectTypePipe, TypeOfCardPipe, IssuedTypePipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
