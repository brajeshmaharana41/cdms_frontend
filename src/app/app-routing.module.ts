import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'gov',
    loadChildren: () => import('./gov/gov.module').then( m => m.GovPageModule)
  },
  {
    path: 'citizen',
    loadChildren: () => import('./citizen/citizen.module').then( m => m.CitizenPageModule)
  },
  {
    path: 'rbi',
    loadChildren: () => import('./rbi/rbi.module').then( m => m.RbiPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
