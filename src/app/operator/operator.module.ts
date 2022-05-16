import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbMenuModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { OperatorViewsModule } from './views/operator-views.module';
import { ViewDashboardComponent } from './views/view-dashboard/view-dashboard.component';
import { OperatorComponent } from './operator.component';
import { OperatorComponentsModule } from './components/operator-components.module';
import { OperatorRoutingModule } from './operator-routing.module';


@NgModule({
  declarations: [
    OperatorComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    NbCardModule,
    FormsModule,
    NbMenuModule,
    NbIconModule,
    OperatorRoutingModule,
    OperatorViewsModule,
  ]
})
export class OperatorModule { }
