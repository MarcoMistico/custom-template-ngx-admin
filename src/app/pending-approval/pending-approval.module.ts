import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbMenuModule, NbSpinnerModule } from '@nebular/theme';
import { PendingApprovalRoutingModule } from './pending-approval-routing.module';
import { MessageComponent } from './message/message.component';
import { ThemeModule } from '../@theme/theme.module';
import { PendingApprovalComponent } from './pending-approval.component';



@NgModule({
  declarations: [
  MessageComponent,
  PendingApprovalComponent
],
  imports: [
    ThemeModule,
    RouterModule,
    PendingApprovalRoutingModule,
    NbMenuModule,
    NbCardModule,
    NbSpinnerModule
  ]
})
export class PendingApprovalModule { }
