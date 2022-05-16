import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PendingApprovalComponent } from './pending-approval.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [{
  path: '',
  component: PendingApprovalComponent,
  children: [
    {
      path: 'message',
      component: MessageComponent,
    },
    {
      path: '',
      redirectTo: 'message',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingApprovalRoutingModule {
}
