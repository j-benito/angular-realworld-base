import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: NoPreloading
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
