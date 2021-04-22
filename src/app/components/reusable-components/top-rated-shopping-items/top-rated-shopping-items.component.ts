import { Component, OnInit } from '@angular/core';
import { TopShoppingItemsService } from '../../shared/services/Apis/top-shopping-items.service';

@Component({
  selector: 'app-top-rated-shopping-items',
  templateUrl: './top-rated-shopping-items.component.html',
  styleUrls: ['./top-rated-shopping-items.component.scss']
})
export class TopRatedShoppingItemsComponent implements OnInit {

  topShoppingItemsList: any = [];

  constructor(private topShoppingItemsService: TopShoppingItemsService) { }

  ngOnInit(): void {

    this.topShoppingItemsService.topShoppingItems.subscribe(result => {
      this.topShoppingItemsList = result;
      // console.log(result);
    })

  }

}
