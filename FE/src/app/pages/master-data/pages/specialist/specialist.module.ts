import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialistComponent } from './specialist.component';
import { RouterModule, Routes } from "@angular/router";



const routes: Routes = [
  {
    path: '',
    component: SpecialistComponent,

  },

];

@NgModule({
  declarations: [SpecialistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SpecialistModule { }
