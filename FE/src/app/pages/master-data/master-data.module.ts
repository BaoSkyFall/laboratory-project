import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'apartment',
    loadChildren: () => import('./pages/apartment/apartment.module').then(m => m.ApartmentModule)
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
  }
];
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MasterDataModule { }