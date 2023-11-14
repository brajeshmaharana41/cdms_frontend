import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RbiDashboardPageRoutingModule } from './rbi-dashboard-routing.module';

import { RbiDashboardPage } from './rbi-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RbiDashboardPageRoutingModule
  ],
  declarations: [RbiDashboardPage]
})
export class RbiDashboardPageModule {}
