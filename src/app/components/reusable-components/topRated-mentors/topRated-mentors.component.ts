import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../shared/services/Apis/top-rated.service';

@Component({
  selector: 'app-topRated-mentors',
  templateUrl: './topRated-mentors.component.html',
  styleUrls: ['./topRated-mentors.component.scss']
})

export class topRatedMentorsComponent implements OnInit {

  topRatedList: any = [];

  constructor(private topRatedService: TopRatedService) { }

  ngOnInit(): void {

    this.topRatedService.topRated.subscribe(result => {
      this.topRatedList = result;
      console.log(result);
    })

  }

}
