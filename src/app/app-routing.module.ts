import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { LookAtCountryComponent } from './country/pages/look-at-country/look-at-country.component';
import { Error404Component } from './country/pages/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch:'full'
  },
  {
    path: 'capital',
    component:ByCapitalComponent
  },
  {
    path: 'region',
    component:ByRegionComponent
  },
  {
    path: 'alpha/:countryId',
    component:LookAtCountryComponent
  },
  {
    path: '**',
    component: Error404Component
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
