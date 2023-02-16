import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() limitPerPage: number = 10;
  @Input() totalPageNumber!: number;
  @Input() currentPageNumber!: number;
  @Output() newPageNumber = new EventEmitter<number>();

  faPrev = faChevronLeft;
  faNext = faChevronRight;
  totalPage!: number;

  ngOnInit(): void {
    this.totalPage = Math.ceil(this.totalPageNumber / this.limitPerPage);
  }

  changePageNumber(_type: string = '') {
    if (!_type.length) return;
    switch (_type) {
      case 'next':
        this.currentPageNumber++;
        break;
      case 'prev':
        this.currentPageNumber--;
        break;
      default:
        this.currentPageNumber;
    }
    this.newPageNumber.emit(this.currentPageNumber);
  }
}
