import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenMainPageRoutingModule } from './citizen-main-routing.module';

import { CitizenMainPage } from './citizen-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenMainPageRoutingModule
  ],
  declarations: [CitizenMainPage]
})
export class CitizenMainPageModule {}
