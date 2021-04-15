import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MentorsComponent } from './mentors/mentors.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';



@NgModule({
  declarations: [
    MentorsComponent,
    MentorDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class MentorsModuleModule { }
