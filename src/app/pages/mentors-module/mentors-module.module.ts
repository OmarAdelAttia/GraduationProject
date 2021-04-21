import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MentorsComponent } from './mentors/mentors.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { SharedModule } from '../../components/shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';

import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MentorsComponent,
    MentorDetailsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgbModule,
    OwlModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class MentorsModuleModule { }
