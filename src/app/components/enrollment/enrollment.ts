import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { EnrollmentService } from '../../services/enrollment';
import { CourseService } from '../../services/course';
import { StudentService } from '../../services/student';
import { Course } from '../../models/course.model';
import { Student } from '../../models/student.model';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './enrollment.html',
  styleUrls: ['./enrollment.scss']
})
export class EnrollmentComponent implements OnInit {
  private fb = inject(FormBuilder);
  private enrollmentService = inject(EnrollmentService);
  private courseService = inject(CourseService);
  private studentService = inject(StudentService);
  private snackBar = inject(MatSnackBar);

  enrollmentForm: FormGroup;
  courses: Course[] = [];
  students: Student[] = [];

  constructor() {
    this.enrollmentForm = this.fb.group({
      studentId: ['', Validators.required],
      courseId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => this.courses = data);
    this.studentService.getStudents().subscribe(data => this.students = data);
  }

  onSubmit(): void {
    if (this.enrollmentForm.valid) {
      const newEnrollment: Enrollment = {
        id: Math.random().toString(36).substr(2, 9),
        studentId: this.enrollmentForm.value.studentId,
        courseId: this.enrollmentForm.value.courseId,
        enrollmentDate: new Date().toISOString()
      };

      this.enrollmentService.createEnrollment(newEnrollment).subscribe({
        next: () => {
          this.snackBar.open('Enrollment successful!', 'Close', { duration: 3000 });
          this.enrollmentForm.reset();
        },
        error: () => {
          this.snackBar.open('Failed to enroll student.', 'Close', { duration: 3000 });
        }
      });
    }
  }
}
