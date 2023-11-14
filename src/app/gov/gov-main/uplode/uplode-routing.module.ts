import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UplodePage } from './uplode.page';

const routes: Routes = [
  {
    path: '',
    component: UplodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UplodePageRoutingModule {}
