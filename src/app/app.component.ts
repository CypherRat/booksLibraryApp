import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  inputData!: string;
  searchSubjectString = new Subject<string>();

  constructor(public router: Router) {}
  title: string = 'Books Library App';
  subjectName: string = '';
  faSearch = faSearch;
  subjectsArray: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  ngOnInit(): void {
    this.searchSubjectString
      .pipe(debounceTime(500))
      .subscribe((val: string): any => {
        if (!val.trim().length) return alert('Enter a subject name to search!');
        let searchTerm: any = val.trim();
        this.router.navigate(['/subject/' + searchTerm]);
      });
  }

  searchStringChanged(_event: string) {
    this.searchSubjectString.next(_event);
  }

  ngOnDestroy() {}

  // gotosubject(event: any): void {
  //   if (event.keyCode !== 13) return;
  //   alert(event.keyCode);
  //   let searchTerm: any = event.target.value;
  //   if (!searchTerm.length) return alert('Enter subject name to search!');
  //   this.router.navigate(['/subject/' + searchTerm]);
  // }
}
