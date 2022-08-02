import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { RouterModule, Routes } from "@angular/router";
import { InlineSVGModule } from 'ng-inline-svg';
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from '@shared/shared.module';
import { PipeModule } from '@shared/pipes/pipe.module';



const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,

  },

];

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    PipeModule,
    SharedModule
  ]
})

export class DoctorModule { }
