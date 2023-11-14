import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenOtpPage } from './citizen-otp.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenOtpPage
  },
  {
    path: 'citizen-main',
    loadChildren: () => import('./citizen-main/citizen-main.module').then( m => m.CitizenMainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenOtpPageRoutingModule {}
