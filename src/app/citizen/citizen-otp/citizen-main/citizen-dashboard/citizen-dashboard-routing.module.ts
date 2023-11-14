import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenDashboardPage } from './citizen-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenDashboardPageRoutingModule {}
