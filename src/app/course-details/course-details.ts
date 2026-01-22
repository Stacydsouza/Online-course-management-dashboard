import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
})
export class CourseDetails {
courseTitle = '';

  constructor(private route: ActivatedRoute) {
    this.courseTitle = this.route.snapshot.paramMap.get('title') || '';
}
}
