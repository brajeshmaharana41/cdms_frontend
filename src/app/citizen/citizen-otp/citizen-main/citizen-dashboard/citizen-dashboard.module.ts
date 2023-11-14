import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenDashboardPageRoutingModule } from './citizen-dashboard-routing.module';

import { CitizenDashboardPage } from './citizen-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenDashboardPageRoutingModule
  ],
  declarations: [CitizenDashboardPage]
})
export class CitizenDashboardPageModule {}
