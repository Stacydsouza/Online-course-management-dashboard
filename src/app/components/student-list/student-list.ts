import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { StudentService } from '../../services/student';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.scss']
})
export class StudentListComponent implements OnInit {
  private studentService = inject(StudentService);
  private snackBar = inject(MatSnackBar);

  students: Student[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone'];
  
  newStudent: Student = {
    id: '',
    name: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  onSubmit(form: any): void {
    if (form.valid) {
      // Generate a simple mock ID
      this.newStudent.id = Math.random().toString(36).substr(2, 9);
      
      this.studentService.createStudent(this.newStudent).subscribe({
        next: (student) => {
          this.students = [...this.students, student];
          this.snackBar.open('Student registered successfully!', 'Close', { duration: 3000 });
          form.resetForm();
          this.newStudent = { id: '', name: '', email: '', phone: '' };
        },
        error: () => {
          this.snackBar.open('Failed to register student.', 'Close', { duration: 3000 });
        }
      });
    }
  }
}
