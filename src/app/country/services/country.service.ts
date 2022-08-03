import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry( searchingByCountryName:string) {

    const url = `${this.apiUrl}/name/${searchingByCountryName}`;
  }


}
