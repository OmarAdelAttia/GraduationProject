import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../components/shared/shared.module';



@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
  ]
})
export class CoursesModuleModule { }
