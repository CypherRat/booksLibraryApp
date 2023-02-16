import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  booksApiUrl: string = 'https://openlibrary.org/search.json?q=';

  constructor(private http: HttpClient) {}
  getBooks(term: any, limit: number = 10, offset: number = 0) {
    return this.http.get(
      this.booksApiUrl +
        term.toLowerCase().split(' ').join('+') +
        `&limit=${limit}&offset=${offset}`
    );
  }
}
