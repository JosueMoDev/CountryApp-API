import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {
  searchingByCountryName: string = "";
  constructor() { }

  search() {
    console.log(this.searchingByCountryName);
  }

  ngOnInit(): void {
  }

}
