import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroListComponent }      from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';

const appRoutes: Routes = [
  {
	path: '',
	redirectTo: '/dashboard',
	pathMatch: 'full'
  },
  {
  path: 'dashboard',
  component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
  	path: 'detail/:id',
  	component: HeroDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
