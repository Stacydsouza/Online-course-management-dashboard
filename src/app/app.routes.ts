import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { CourseListComponent } from './components/course-list/course-list';
import { CourseDetailComponent } from './components/course-detail/course-detail';
import { StudentListComponent } from './components/student-list/student-list';
import { EnrollmentComponent } from './components/enrollment/enrollment';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'enroll', component: EnrollmentComponent }
];
