import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbiDashboardPage } from './rbi-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: RbiDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbiDashboardPageRoutingModule {}
