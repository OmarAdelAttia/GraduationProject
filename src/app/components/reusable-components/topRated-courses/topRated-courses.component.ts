import { Component, OnInit } from '@angular/core';
import { TopCoursesService } from '../../shared/services/Apis/top-courses.service'

@Component({
  selector: 'app-topRated-courses',
  templateUrl: './topRated-courses.component.html',
  styleUrls: ['./topRated-courses.component.scss']
})

export class topRatedCoursesComponent implements OnInit {

  topRatedList: any = [];

  constructor(private topCoursesService: TopCoursesService) { }

  ngOnInit(): void {

    this.topCoursesService.topCourses.subscribe(result => {

      this.topRatedList = result;

      console.log(result);

    })

  }

}
