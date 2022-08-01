import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelDoctorComponent } from './level-doctor.component';
import { RouterModule, Routes } from "@angular/router";



const routes: Routes = [
  {
    path: '',
    component: LevelDoctorComponent,

  },

];

@NgModule({
  declarations: [LevelDoctorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LevelDoctorModule { }
