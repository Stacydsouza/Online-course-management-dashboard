import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CourseService } from '../services/course';
import { StudentService } from '../services/student';
import { EnrollmentService } from '../services/enrollment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  private courseService = inject(CourseService);
  private studentService = inject(StudentService);
  private enrollmentService = inject(EnrollmentService);

  totalCourses = 0;
  totalStudents = 0;
  totalEnrollments = 0;

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.totalCourses = courses.length;
    });

    this.studentService.getStudents().subscribe(students => {
      this.totalStudents = students.length;
    });

    this.enrollmentService.getEnrollments().subscribe(enrollments => {
      this.totalEnrollments = enrollments.length;
    });
  }

  viewCourses(): void {
    this.router.navigate(['/courses']);
  }

  viewStudents(): void {
    this.router.navigate(['/students']);
  }

  enrollStudent(): void {
    this.router.navigate(['/enroll']);
  }
}
