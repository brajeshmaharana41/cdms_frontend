import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GovMainPageRoutingModule } from './gov-main-routing.module';

import { GovMainPage } from './gov-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GovMainPageRoutingModule
  ],
  declarations: [GovMainPage]
})
export class GovMainPageModule {}
