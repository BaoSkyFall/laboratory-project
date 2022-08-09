import { NotificationService } from '@services/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'unit-company',
    loadChildren: () => import('./pages/unitCompany/unitCompany.module').then(m => m.UnitCompanyModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'level-doctor',
    loadChildren: () => import('./pages/level-doctor/level-doctor.module').then(m => m.LevelDoctorModule)
  },
  {
    path: 'specialist',
    loadChildren: () => import('./pages/specialist/specialist.module').then(m => m.SpecialistModule)
  }, {
    path: 'criteria',
    loadChildren: () => import('./pages/criteria/criteria.module').then(m => m.CriteriaModule)

  }
];
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class MasterDataModule { }
