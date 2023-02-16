import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  inputData!: string;
  searchBookString = new Subject<string>();

  faSearch = faSearch;
  searchTerm: any;
  homeStatus: boolean = true;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.searchBookString
      .pipe(debounceTime(500))
      .subscribe((val: string): any => {
        if (!val) return (this.homeStatus = true);
        this.searchTerm = val;
        this.homeStatus = false;
      });
  }

  searchStringChanged(_event: string) {
    this.searchBookString.next(_event);
  }

  ngOnDestroy() {}

  // search(event: any): void {
  //   if (!event.target.value)
  //     return (this.homeStatus = true), alert('Please, enter a search term!');
  //   this.searchTerm = event.target.value;
  //   this.homeStatus = false;
  // }
}
