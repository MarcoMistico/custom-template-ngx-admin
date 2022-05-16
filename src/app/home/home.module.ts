import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [HomepageComponent, HomeComponent],
  imports: [
    ThemeModule,
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NbSelectModule,
    NbCardModule,
    NbListModule,
    NbIconModule
  ]
})

export class HomeModule { }
