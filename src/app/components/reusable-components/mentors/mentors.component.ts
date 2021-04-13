import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {

  mentorsList: Array<object> = [
    {
       "id":1,
       "image": "/assets/img/trainer3.jpg",
       "name":"Reem Eltaweel",
       "rating": 4.8,
       "category": "Gold",
       "specialty": "Trainer",

    },
    {
      "id":2,
      "image": "/assets/img/trainer.jpg",
      "name":"Ahmed Ahmed",
      "rating": 4.0,
      "category": "Silver",
      "specialty": "Trainer",
    },
    {
        "id":3,
        "image": "/assets/img/trainer1.jpg",
        "name":"Jake Jake",
        "rating": 3.5,
        "category": "Bronze",
        "specialty": "Dietitian",
 
     },
     {
        "id":4,
        "image": "/assets/img/trainer2.jpg",
        "name":"Ali Ali",
        "rating": 5,
        "category": "Gold",
        "specialty": "Trainer",
 
     },
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
