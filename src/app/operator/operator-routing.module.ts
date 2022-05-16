import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OperatorComponent } from './operator.component';
import { ViewDashboardComponent } from './views/view-dashboard/view-dashboard.component';

const routes: Routes = [{
  path: '',
  component: OperatorComponent,
  children: [
    {
      path: 'dashboard',
      component: ViewDashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorRoutingModule {
}
