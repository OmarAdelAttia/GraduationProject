import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';
import { addToCart } from '../../../shared/services/store/cart.action';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  providers: [NgbRatingConfig]
})
export class ItemCardComponent implements OnInit {

  @Input('itemData') itemData: any;
  items;
  constructor(config: NgbRatingConfig, public authService: AuthService,
    private router: Router,
    private store: Store<{ cart }>) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {

    this.store.select('cart').subscribe((data) => {
      this.items = data
      // console.log(this.items);

    })

  }

  addToShoppingCart(item) {
    this.items.cartItems.find(itemData => itemData.id == item.id);
    this.store.dispatch(new addToCart(item))
  }


}
