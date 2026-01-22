import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}  

  courses = [
    {
      title: 'Angular Fundamentals',
      instructor: 'John Doe',
      duration: '6 Weeks'
    },
    {
      title: 'TypeScript Basics',
      instructor: 'Jane Smith',
      duration: '4 Weeks'
    },
    {
      title: 'Web Development',
      instructor: 'Alex Johnson',
      duration: '8 Weeks'
    }
  ];

  totalStudents = 340;
  activeInstructors = 8;
  totalCourses= 6;

  
  enroll(courseTitle: string) {
    alert(`You have enrolled in ${courseTitle}`);
}

  viewDetails(courseTitle: string) {
  this.router.navigate(['/course', courseTitle]);
}

  

  
}

