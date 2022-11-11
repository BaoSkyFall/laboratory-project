import { NumberLabelPipe } from '@shared/pipes/number-label.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicationUnitComponent } from './indication-unit.component';
import { RouterModule, Routes } from "@angular/router";
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from '@shared/shared.module';
import { PipeModule } from '@shared/pipes/pipe.module';
import { ErrorMessagesModule } from '@shared/components/error-message/error-messages.module';
import { NotificationService } from '@services/notification.service';


const routes: Routes = [
  {
    path: '',
    component: IndicationUnitComponent,

  },

];

@NgModule({
  declarations: [IndicationUnitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DropdownMenusModule,
    WidgetsModule,
    PipeModule,
    ErrorMessagesModule,
    SharedModule
  ],
  providers: [NotificationService, NumberLabelPipe]
})
export class IndicationUnitModule { }
