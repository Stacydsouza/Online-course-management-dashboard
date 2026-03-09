import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../models/course.model';

@Pipe({
  name: 'courseFilter',
  standalone: true
})
export class CourseFilterPipe implements PipeTransform {

  transform(courses: Course[], searchTerm: string, filterType: 'category' | 'level' | 'title' = 'title'): Course[] {
    if (!courses || !searchTerm) {
      return courses;
    }

    const lowerCaseTerm = searchTerm.toLowerCase();

    return courses.filter(course => {
      const fieldToSearch = course[filterType]?.toString().toLowerCase() || '';
      return fieldToSearch.includes(lowerCaseTerm);
    });
  }

}
