import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitCompanyComponent } from './unitCompany.component';
import { RouterModule, Routes } from "@angular/router";
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from '@shared/shared.module';
import { PipeModule } from '@shared/pipes/pipe.module';
import { ErrorMessagesModule } from '@shared/components/error-message/error-messages.module';
import { NotificationService } from '@services/notification.service';


const routes: Routes = [
  {
    path: '',
    component: UnitCompanyComponent,

  },

];

@NgModule({
  declarations: [UnitCompanyComponent],
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
export class UnitCompanyModule { }
