import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { LookAtCountryComponent } from './pages/look-at-country/look-at-country.component';
import { Error404Component } from './pages/error404/error404.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    LookAtCountryComponent,
    Error404Component
  ],

  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    LookAtCountryComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountryModule { }
