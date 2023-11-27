import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  displayedColumns = ['name', 'category'];

  constructor() {
    this.courses = [{ _id: '1', name: 'Angular', category: 'Front-end' }];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
