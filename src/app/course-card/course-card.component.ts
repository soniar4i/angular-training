import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Output() courseSelected: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseView() {
    this.courseSelected.emit(this.course);
  }

}
