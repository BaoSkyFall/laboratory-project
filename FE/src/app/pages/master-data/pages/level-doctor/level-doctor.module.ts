import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelDoctorComponent } from './level-doctor.component';
import { RouterModule, Routes } from "@angular/router";
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from '@shared/shared.module';
import { PipeModule } from '@shared/pipes/pipe.module';
import { ErrorMessagesModule } from '@shared/components/error-message/error-messages.module';
import { NotificationService } from '@services/notification.service';


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
    DropdownMenusModule,
    WidgetsModule,
    PipeModule,
    ErrorMessagesModule,
    SharedModule
  ],
  providers: [NotificationService]
})
export class LevelDoctorModule { }
