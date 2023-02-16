import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { LostPageComponent } from './lost-page/lost-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Books Library App by Abhimanyu',
  },
  {
    path: 'subject/:name',
    component: SubjectComponent,
    title: 'Subjects',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: LostPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
