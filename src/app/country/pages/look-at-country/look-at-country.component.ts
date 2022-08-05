import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-look-at-country',
  templateUrl: './look-at-country.component.html',
  styleUrls: ['./look-at-country.component.css']
})
export class LookAtCountryComponent implements OnInit {
  @Output() countries: Country []=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ countryId }) => this.countryService.shownCountry(countryId)),
        tap(console.log)
      )
      .subscribe(country => this.countries = country )
      };

    // this.activatedRoute.params
    //   .subscribe(({ countryId }) => {
    //     console.log(countryId);
    //     this.countryService.shownCountry(countryId)
    //       .subscribe(country => {
    //         console.log(country)
    //       })
    //   });

  }
