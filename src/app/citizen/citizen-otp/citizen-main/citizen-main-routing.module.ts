import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenMainPage } from './citizen-main.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenMainPage,
    children:[
      {
        path: 'citizen-dashboard',
        loadChildren: () => import('./citizen-dashboard/citizen-dashboard.module').then( m => m.CitizenDashboardPageModule)
      },
      {
        path: 'citizen-payment',
        loadChildren: () => import('./citizen-payment/citizen-payment.module').then( m => m.CitizenPaymentPageModule)
      },
      {
        path: 'citizen-reload',
        loadChildren: () => import('./citizen-reload/citizen-reload.module').then( m => m.CitizenReloadPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenMainPageRoutingModule {}
