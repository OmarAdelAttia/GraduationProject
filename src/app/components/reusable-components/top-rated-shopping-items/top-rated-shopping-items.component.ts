import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../shared/services/Apis/top-rated.service';

@Component({
  selector: 'app-top-rated-shopping-items',
  templateUrl: './top-rated-shopping-items.component.html',
  styleUrls: ['./top-rated-shopping-items.component.scss']
})
export class TopRatedShoppingItemsComponent implements OnInit {

  topMentorsList: any = [];

  constructor(private topRatedService: TopRatedService) { }

  ngOnInit(): void {

    this.topRatedService.topRated.subscribe(result => {
      this.topMentorsList = result;
      // console.log(result);
    })

  }

}
