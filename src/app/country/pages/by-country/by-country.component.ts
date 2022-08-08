import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  searchingByCountryName: string = '';
  FoundError: boolean = false;
  countries: Country[] = [];
  countriesSuggested: Country[] = [];



  constructor( private countryService : CountryService) { }

  search( searchingByCountryName:string) {
    this.FoundError = false;
    this.searchingByCountryName = searchingByCountryName;

    this.countryService.searchCountry(this.searchingByCountryName)

      .subscribe({
        next: (contries) => {

          this.countries = contries;
        },
        error: (err) => {
          this.FoundError = true;
          this.countries = [];
        }
      })
  }

  suggestion(searchingByCountryName:string) {
    this.FoundError = false
    this.searchingByCountryName = searchingByCountryName;

    this.countryService.searchCountry(searchingByCountryName)
    .subscribe({
      next: (contries) => {
        this.countriesSuggested = contries.slice(0,5)
      },
      error: (err) => {

        this.countriesSuggested = [];
      }
    })
  }
  searchSuggested(searchingByCountryName :string) {
    this.search(searchingByCountryName);
  }



}
