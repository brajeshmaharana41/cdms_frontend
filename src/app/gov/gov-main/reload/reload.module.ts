import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReloadPageRoutingModule } from './reload-routing.module';

import { ReloadPage } from './reload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReloadPageRoutingModule
  ],
  declarations: [ReloadPage]
})
export class ReloadPageModule {}
