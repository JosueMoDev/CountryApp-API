import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-country-search-input',
  templateUrl: './country-search-input.component.html',
  styleUrls: ['./country-search-input.component.css']
})
export class CountrySearchInputComponent implements OnInit {

  @Output() OnEnter     : EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  constructor() { }

  searchingByCountryName: string = ''

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.OnDebounce.emit(value)
      });
  }
  search() {
    this.OnEnter.emit(this.searchingByCountryName);
  }



  keyDonw() {

    this.debouncer.next( this.searchingByCountryName);
   }



}
