import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lost-page',
  templateUrl: './lost-page.component.html',
  styleUrls: ['./lost-page.component.scss'],
})
export class LostPageComponent {
  faArrowLeft = faArrowLeft;
}
