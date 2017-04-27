import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AwayComponent} from './away/away.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'away',
    component: AwayComponent
  }
];

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routes);
