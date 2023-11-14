import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenPage } from './citizen.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenPage
  },
  {
    path: 'citizen-otp',
    loadChildren: () => import('./citizen-otp/citizen-otp.module').then( m => m.CitizenOtpPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenPageRoutingModule {}
