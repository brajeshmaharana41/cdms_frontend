import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenReloadPage } from './citizen-reload.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenReloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenReloadPageRoutingModule {}
