import { Component, OnInit } from '@angular/core';
import { TopCoursesService } from '../../shared/services/Apis/top-courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  topRatedList: any = [];

  constructor(private topCoursesService: TopCoursesService) { }

  // coursesList: Array<object> = [
  //   {
  //     "id": 1,
  //     "image": "/assets/img/course_1.jpg",
  //     "name": "Neutrition",
  //     "rating": 4.3,
  //     "category": "nutrition",
  //     "specialty": "30$",

  //   },
  //   {
  //     "id": 2,
  //     "image": "/assets/img/course_2.jfif",
  //     "name": "30 Days Yoga",
  //     "rating": 4.0,
  //     "category": "nutrition",
  //     "specialty": "35$",
  //   },
  //   {
  //     "id": 2,
  //     "image": "/assets/img/course_3.jpg",
  //     "name": "Neutrition",
  //     "rating": 3.5,
  //     "category": "nutrition",
  //     "specialty": "40$",

  //   },
  //   {
  //     "id": 4,
  //     "image": "/assets/img/course_4.jpg",
  //     "name": "30 Days Yoga",
  //     "rating": 3.6,
  //     "category": "nutrition",
  //     "specialty": "25$",

  //   },
  // ];


  ngOnInit(): void {

    this.topCoursesService.topCourses.subscribe(result => {

      this.topRatedList = result;

      console.log(result);

    })

  }

}
