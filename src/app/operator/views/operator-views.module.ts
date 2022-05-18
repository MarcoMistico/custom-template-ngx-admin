import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { OperatorComponentsModule } from '../components/operator-components.module';
import { ViewHelloWorldComponent } from './view-hello-world/view-hello-world.component';



@NgModule({
  declarations: [
    ViewDashboardComponent,
    ViewHelloWorldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule,
    OperatorComponentsModule
  ]
})
export class OperatorViewsModule { }
