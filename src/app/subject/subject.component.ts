import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectsService } from '../subjects.service';
import {
  faLink,
  faArrowLeft,
  faCircle,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  subjectName: string | null = null;
  isLoading: boolean = true;
  faLink = faLink;
  faArrowLeft = faArrowLeft;
  faBook = faBook;

  subjectsArray: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: SubjectsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectName = params.get('name');
      this.isLoading = true;
      this.getSubjectsResults(this.subjectName);
    });
  }
  getSubjectsResults(_subjectName: any) {
    this.service.getResults(_subjectName).subscribe((data) => {
      // console.log(data);
      this.subjectsArray = data;
      this.isLoading = false;
    });
  }
}
