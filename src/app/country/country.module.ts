import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { LookAtCountryComponent } from './pages/look-at-country/look-at-country.component';
import { Error404Component } from './pages/error404/error404.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountrySearchInputComponent } from './components/country-search-input/country-search-input.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    LookAtCountryComponent,
    Error404Component,
    CountryTableComponent,
    CountrySearchInputComponent,

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
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
