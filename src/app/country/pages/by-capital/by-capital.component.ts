import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  searchingByCapitalCity: string = '';
  noFoundError: boolean = false;
  countries: Country[] = [];


  constructor(private CountryService: CountryService) { }

  search(SearchingByCapitalCity:string) {

    this.noFoundError = false;
    this.searchingByCapitalCity = SearchingByCapitalCity;
    this.CountryService.searchCapitalCity(this.searchingByCapitalCity)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
        },
        error: (err) => {
          this.noFoundError = true;
          this.countries = [];
        }

      });
  }

  ngOnInit(): void {
  }

}
