import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenReloadPageRoutingModule } from './citizen-reload-routing.module';

import { CitizenReloadPage } from './citizen-reload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenReloadPageRoutingModule
  ],
  declarations: [CitizenReloadPage]
})
export class CitizenReloadPageModule {}
