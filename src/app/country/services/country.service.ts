import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  private params: [] = [];

  constructor(private http: HttpClient) { }


  get searchPararms(){
    return new HttpParams().set('?fields','name,capital,region,corricies,flag,flags,cioc,languages,population');
  }

  searchCountry( searchingByCountryName:string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${searchingByCountryName}`;
    return this.http.get<Country[]>(url, {params:this.searchPararms});
  }
  searchCapitalCity( searchingByCapitalCity:string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${searchingByCapitalCity}`;
    return this.http.get<Country[]>(url, {params: this.searchPararms});
  }

  shownCountry( countryId : string): Observable<Country[]> {

    const url = `${this.apiUrl}/alpha/${countryId}`;
    return this.http.get<Country[]>(url, { params: this.searchPararms });
  }

  searchingByRegion( region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.searchPararms });
  }


}
