import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorsComponent } from './mentors/mentors.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';



@NgModule({
  declarations: [
    MentorsComponent,
    MentorDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MentorsModuleModule { }
