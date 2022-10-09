import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';

import { IconFactoryComponent } from './components/icon-factory/icon-factory.component';
import { NotAllowBlankDirective } from './directives/notAllowBlank.directive';
import { LabNgZorroAntdModule } from './ng-zorro-antd.module';


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
    RouterModule,
    LabNgZorroAntdModule,
    InlineSVGModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    IconFactoryComponent,
    NotAllowBlankDirective,
    InlineSVGModule,
    LabNgZorroAntdModule
  ]
})
export class SharedModule { }
