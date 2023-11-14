import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UplodePageRoutingModule } from './uplode-routing.module';

import { UplodePage } from './uplode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UplodePageRoutingModule
  ],
  declarations: [UplodePage]
})
export class UplodePageModule {}
