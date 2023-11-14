import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RbiMainPageRoutingModule } from './rbi-main-routing.module';

import { RbiMainPage } from './rbi-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RbiMainPageRoutingModule
  ],
  declarations: [RbiMainPage]
})
export class RbiMainPageModule {}
