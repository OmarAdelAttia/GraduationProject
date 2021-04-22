import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../components/shared/services/Apis/courses.service';

import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // Fitness - Nutrition - Loss Weight - Yoga
  coursesList: any = [];
  fitnessList: any = [];
  nutritionList: any = [];
  lossWeightList: any = [];
  yogaList: any = [];

  show = {
    allCourses : true,
    fitness : false,
    nutrition : false,
    lossWeight : false,
    yoga : false,
  }

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {

    this.coursesService.courses.subscribe(result => {
      console.log(result);
      this.coursesList = result;
      console.log(this.coursesList);
    });

    this.coursesService.courses.subscribe(result => {
      this.fitnessList = result.filter(fitness => fitness.Category == 'Fitness');
      console.log(this.fitnessList);

    })

    this.coursesService.courses.subscribe(result => {
      this.nutritionList = result.filter(nutrition => nutrition.Category == 'Nutrition');
      console.log(this.nutritionList);

    })

    this.coursesService.courses.subscribe(result => {
      this.lossWeightList = result.filter(lossWeight => lossWeight.Category == 'Loss Weight');
      console.log(this.lossWeightList);

    })

    this.coursesService.courses.subscribe(result => {
      this.yogaList = result.filter(yoga => yoga.Category == 'Yoga');
      console.log(this.yogaList);

    })
  }

  owlData(e: SlidesOutputData) {
    console.log(e);
  }

  owlOptions: OwlOptions = {
    loop: true,
    margin: 5,
    // nav: true,
    //   navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 750,
    // navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      767: {
        items: 3
      },
      1024: {
        items: 4
      }
    },
    // nav: false
  }

}
