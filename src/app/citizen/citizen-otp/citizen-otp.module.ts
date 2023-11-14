import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenOtpPageRoutingModule } from './citizen-otp-routing.module';

import { CitizenOtpPage } from './citizen-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenOtpPageRoutingModule
  ],
  declarations: [CitizenOtpPage]
})
export class CitizenOtpPageModule {}
