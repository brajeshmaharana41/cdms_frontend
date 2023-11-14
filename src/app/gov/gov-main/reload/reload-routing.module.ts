import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReloadPage } from './reload.page';

const routes: Routes = [
  {
    path: '',
    component: ReloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReloadPageRoutingModule {}
