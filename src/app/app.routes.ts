import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { CourseDetails } from './course-details/course-details';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'course/:title', component: CourseDetails }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
