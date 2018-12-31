import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.courseService.loadCourses();
  }
}
