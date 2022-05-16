import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { OperatorComponentsModule } from '../components/operator-components.module';



@NgModule({
  declarations: [
    ViewDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule,
    OperatorComponentsModule
  ]
})
export class OperatorViewsModule { }
