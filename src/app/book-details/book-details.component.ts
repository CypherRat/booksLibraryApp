import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BooksService } from '../books.service';
import { faLink, faSortAlphaAsc } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnChanges {
  @Input() searchTerm: string = '';
  @Input() isHome: boolean = true;

  term: string = '';
  isLoading!: boolean;
  booksArray: any = [];

  faLink = faLink;
  faSortAsc = faSortAlphaAsc;

  pageNumber: number = 1;
  limit: number = 10;
  offset!: number;
  sortOrderIsAccending: boolean = true;
  sortOrder: number = 1;

  constructor(private bookService: BooksService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.term = changes['searchTerm']?.currentValue;
    this.isLoading = true;
    this.pageNumber = 1;
    this.getBooksResults(this.term, this.limit, this.pageNumber);
  }
  getBooksResults(_searchTerm: any, _limit: number, _pageNumber: number) {
    if (!_searchTerm) return;
    this.offset = (_pageNumber - 1) * _limit;
    this.bookService
      .getBooks(_searchTerm, _limit, this.offset)
      .subscribe((data) => {
        // console.log(data);
        this.booksArray = data;
        this.isLoading = false;
      });
  }
  truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + '...' : str;
  }
  findLatestYear(yearArray: any) {
    return yearArray.reduce((r: any[], o: { date: number }) => {
      if (!r || r[0] < o) return [o];
      if (r[0] === o) r.push(o);
      return r;
    }, undefined);
  }

  changePageNumber(_newPageNumber: number) {
    this.isLoading = true;
    this.pageNumber = _newPageNumber;
    this.getBooksResults(this.term, this.limit, this.pageNumber);
  }

  dynamicSort(_property: any) {
    this.sortOrder = this.sortOrderIsAccending ? 1 : -1;
    this.sortOrderIsAccending = !this.sortOrderIsAccending;
    if (_property[0] === '-') {
      this.sortOrder = -1;
      _property = _property.substr(1);
    }
    return (a: { [x: string]: number }, b: { [x: string]: number }) => {
      var result =
        a[_property] < b[_property] ? -1 : a[_property] > b[_property] ? 1 : 0;

      return result * this.sortOrder;
    };
  }
}
