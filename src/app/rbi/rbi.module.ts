import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RbiPageRoutingModule } from './rbi-routing.module';

import { RbiPage } from './rbi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RbiPageRoutingModule
  ],
  declarations: [RbiPage]
})
export class RbiPageModule {}
