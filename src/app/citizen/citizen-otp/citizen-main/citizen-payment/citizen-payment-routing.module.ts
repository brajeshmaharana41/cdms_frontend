import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenPaymentPage } from './citizen-payment.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenPaymentPageRoutingModule {}
