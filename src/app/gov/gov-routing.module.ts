import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovPage } from './gov.page';

const routes: Routes = [
  {
    path: '',
    component: GovPage
  },
  {
    path: 'gov-main',
    loadChildren: () => import('./gov-main/gov-main.module').then( m => m.GovMainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovPageRoutingModule {}
