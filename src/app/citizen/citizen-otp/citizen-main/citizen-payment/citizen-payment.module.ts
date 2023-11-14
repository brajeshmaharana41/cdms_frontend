import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenPaymentPageRoutingModule } from './citizen-payment-routing.module';

import { CitizenPaymentPage } from './citizen-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenPaymentPageRoutingModule
  ],
  declarations: [CitizenPaymentPage]
})
export class CitizenPaymentPageModule {}
