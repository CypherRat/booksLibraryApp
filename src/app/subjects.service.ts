import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  subjectsApiUrl = 'https://openlibrary.org/subjects/';

  constructor(private http: HttpClient) {}
  getResults(term: any) {
    return this.http.get(
      this.subjectsApiUrl +
        term.toLowerCase().split(' ').join('_') +
        '.json?limit=10'
    );
  }
}
