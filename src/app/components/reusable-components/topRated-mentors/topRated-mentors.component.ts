import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../shared/services/Apis/top-rated.service';

@Component({
  selector: 'app-topRated-mentors',
  templateUrl: './topRated-mentors.component.html',
  styleUrls: ['./topRated-mentors.component.scss']
})

export class topRatedMentorsComponent implements OnInit {

  topMentorsList: any = [];

  constructor(private topRatedService: TopRatedService) { }

  ngOnInit(): void {

    this.topRatedService.topRated.subscribe(result => {
      this.topMentorsList = result;
      // console.log(result);
    })

  }

}
