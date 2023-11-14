import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovMainPage } from './gov-main.page';

const routes: Routes = [
  {
    path: '',
    component: GovMainPage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
      },
      {
        path: 'uplode',
        loadChildren: () => import('./uplode/uplode.module').then( m => m.UplodePageModule)
      },
      {
        path: 'reload',
        loadChildren: () => import('./reload/reload.module').then( m => m.ReloadPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovMainPageRoutingModule {}
