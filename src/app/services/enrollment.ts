import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/enrollments';

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }

  createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post<Enrollment>(this.apiUrl, enrollment);
  }
}
