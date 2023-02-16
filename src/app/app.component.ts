import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
  gotosubject(event: any): void {
    if (event.keyCode !== 13) return;
    let searchTerm: any = event.target.value;
    if (!searchTerm.length) return alert('Enter subject name to search!');
    this.router.navigate(['/subject/' + searchTerm]);
  }
}
