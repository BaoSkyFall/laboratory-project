import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { IconFactoryComponent } from './components/icon-factory/icon-factory.component';
import { NotAllowBlankDirective } from './directives/notAllowBlank.directive';


@NgModule({
  declarations: [
    IconFactoryComponent,
    NotAllowBlankDirective,

  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    IconFactoryComponent,
    NotAllowBlankDirective,
  ]
})
export class SharedModule { }
