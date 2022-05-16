import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbMenuModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewsModule } from './views/admin-views.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    NbCardModule,
    FormsModule,
    NbMenuModule,
    NbIconModule,
    AdminRoutingModule,
    AdminViewsModule,
  ]
})
export class AdminModule { }
