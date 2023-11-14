import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbiPage } from './rbi.page';

const routes: Routes = [
  {
    path: '',
    component: RbiPage
  },
  {
    path: 'rbi-main',
    loadChildren: () => import('./rbi-main/rbi-main.module').then( m => m.RbiMainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbiPageRoutingModule {}
