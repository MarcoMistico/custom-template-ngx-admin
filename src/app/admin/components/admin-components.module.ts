import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbMenuModule,
    ThemeModule,
  ],
  exports: [
    DashboardComponent,
  ],
  entryComponents: [
    DashboardComponent,
  ]
})
export class AdminComponentsModule { }
