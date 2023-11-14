import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbiMainPage } from './rbi-main.page';

const routes: Routes = [
  {
    path: '',
    component: RbiMainPage,
    children:[
      {
        path: 'rbi-dashboard',
        loadChildren: () => import('./rbi-dashboard/rbi-dashboard.module').then( m => m.RbiDashboardPageModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbiMainPageRoutingModule {}
