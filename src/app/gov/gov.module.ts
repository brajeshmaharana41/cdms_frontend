import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GovPageRoutingModule } from './gov-routing.module';

import { GovPage } from './gov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GovPageRoutingModule
  ],
  declarations: [GovPage]
})
export class GovPageModule {}
