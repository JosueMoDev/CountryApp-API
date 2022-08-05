import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedRegion: string = '';
  countries: Country[] = [];
  foundError = false;


  constructor(private countryService : CountryService) { }

  setRegion( region: string) {
    this.activatedRegion = region;

    this.countryService.searchingByRegion(this.activatedRegion)
    .subscribe({
      next: (countries) => {
        this.countries=countries
      },
      error: (err) => {
        this.foundError = true;
        this.countries = [];

      }
    })
  }

  setRegionClass(region: string){
    return (region===this.activatedRegion)?'btn btn-primary mx-1 my-1' : 'btn btn-outline-primary mx-1 my-1'
  }

  ngOnInit(): void {
  }

}
function next(next: any, arg1: (region: any) => void) {
  throw new Error('Function not implemented.');
}

