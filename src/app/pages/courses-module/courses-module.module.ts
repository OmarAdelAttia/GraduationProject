import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModuleModule { }
