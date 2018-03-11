import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})



export class CoursesComponent implements OnInit {
  title = 'List of courses';
  courses = [];

  isActive = true;
  email = 'mmagdi@ntgclarity.com';
  constructor() { }

  ngOnInit() {
  }



  onSave($event) {
    $event.stopPropagation();
    console.log('button save clicked', $event);
  }

  onKeyUp() {
    console.log('email: ' + this.email);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
      { id: 5, name: 'course4' },
      { id: 5, name: 'course5' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
