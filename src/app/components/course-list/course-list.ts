import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { CourseFilterPipe } from '../../shared/pipes/course-filter-pipe';
import { HighlightCourseDirective } from '../../shared/directives/highlight-course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CourseFilterPipe,
    HighlightCourseDirective
  ],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.scss']
})
export class CourseListComponent implements OnInit {
  private courseService = inject(CourseService);
  private router = inject(Router);

  courses: Course[] = [];
  searchTerm = '';
  filterType: 'category' | 'level' | 'title' = 'title';

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  viewCourse(id: string): void {
    this.router.navigate(['/course', id]);
  }
}
