import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ActiveStatusComponent } from './components/activeStatus/activeStatus.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { IconFactoryComponent } from './components/icon-factory/icon-factory.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DndDirective } from './directives/dnd.directive';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DrawerImportExcelComponent } from './components/drawer-import-excel/drawer-import-excel.component';
import { NotAllowBlankDirective } from './directives/notAllowBlank.directive';
import { SelectTransportCenterComponent } from './components/select-transport-center/select-transport-center.component';

@NgModule({
  declarations: [
    ControlMessagesComponent,
    LanguageSelectorComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    ActiveStatusComponent,
    IconFactoryComponent,
    DndDirective,
    NotAllowBlankDirective,
    ProgressComponent,
    DrawerImportExcelComponent,
    SelectTransportCenterComponent
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

    ControlMessagesComponent,
    LanguageSelectorComponent,
    DrawerImportExcelComponent,
    NotFoundComponent,
    ActiveStatusComponent,
    IconFactoryComponent,
    DndDirective,
    NotAllowBlankDirective,
    ProgressComponent,
    SelectTransportCenterComponent
  ]
})
export class SharedModule { }
