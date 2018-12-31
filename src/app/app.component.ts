import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  startDate = new Date(2018, 0, 1);
  title = COURSES[0].description;
  price = 9.992049349032;
  rate = 0.63;
  course = COURSES[0];

  onCourseSelected(course: Course) {
    console.log(course);
  }

}
