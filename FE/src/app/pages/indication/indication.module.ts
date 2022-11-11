import { NotificationService } from '@services/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { StepModule } from '@shared/components/steps/step.module';
import { InlineSVGModule } from 'ng-inline-svg';


const routes: Routes = [
  {
    path: 'indication-unit',
    loadChildren: () => import('./pages/indication-unit/indication-unit.module').then(m => m.IndicationUnitModule)
  },
  {
    path: 'indication-technician',
    loadChildren: () => import('./pages/indication-technician/indication-technician.module').then(m => m.IndicationTechnicianModule)
  }

];
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class IndicationModule { }
