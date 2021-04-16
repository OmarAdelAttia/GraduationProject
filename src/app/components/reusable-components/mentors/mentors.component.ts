import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../shared/services/Apis/top-rated.service';
@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {

  //   mentorsList: Array<object> = [
  //     {
  //        "id":1,
  //        "image": "/assets/img/trainer3.jpg",
  //        "name":"Reem Eltaweel",
  //        "rating": 4.8,
  //        "category": "Gold",
  //        "specialty": "Trainer",

  //     },
  //     {
  //       "id":2,
  //       "image": "/assets/img/trainer.jpg",
  //       "name":"Ahmed Ahmed",
  //       "rating": 4.0,
  //       "category": "Silver",
  //       "specialty": "Trainer",
  //     },
  //     {
  //         "id":3,
  //         "image": "/assets/img/trainer1.jpg",
  //         "name":"Jake Jake",
  //         "rating": 3.5,
  //         "category": "Bronze",
  //         "specialty": "Dietitian",

  //      },
  //      {
  //         "id":4,
  //         "image": "/assets/img/trainer2.jpg",
  //         "name":"Ali Ali",
  //         "rating": 5,
  //         "category": "Gold",
  //         "specialty": "Trainer",

  //      },
  //  ];

  topRatedList: any = [];
  results: any = [];
  resultsArray: any = [];
  x: any = [];

  constructor(private topRatedService: TopRatedService) { }

  ngOnInit(): void {
    this.topRatedService.getTopRated().subscribe(result => {
      this.results = result;
      console.log(this.results);

      let list = [0, 1, 2, 3];
      for (let i in list) {
        this.resultsArray = this.results.documents[i].fields;
        this.x = this.results.documents[i];
        console.log(this.x)
        this.topRatedList.push(this.resultsArray);
        console.log(this.topRatedList);

      }
    })
  }

}
