import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get fieldsParams(): any {
    return new this.fieldsParams().set('fiels', 'name,capital,flag,flags,population,cioc');
  }

  constructor(private http: HttpClient) { }

  searchCountry( searchingByCountryName:string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${searchingByCountryName}`;
    return this.http.get<Country[]>(url, {params:this.fieldsParams});
  }
  searchCapitalCity( searchingByCapitalCity:string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${searchingByCapitalCity}`;
    return this.http.get<Country[]>(url);
  }

  shownCountry( countryId : string): Observable<Country[]> {

    const url = `${this.apiUrl}/alpha/${countryId}`;
    return this.http.get<Country[]>(url);
  }

  searchingByRegion( region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }


}
