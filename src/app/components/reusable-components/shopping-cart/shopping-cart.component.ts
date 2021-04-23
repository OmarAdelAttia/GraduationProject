import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromCart } from '../../shared/services/store/cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  items;
  u;
  constructor(private store: Store<{cart}>) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.items = data;
      // console.log(this.items.length);

    })

    this.u = this.store.select('cart');

  }

  removeFromShoppingCart = (item) => {
    let arrayItems = this.items.cartItems.filter(x => x.id != item.id);
    this.store.dispatch(new removeFromCart(arrayItems))
  }

  userCheckOutForm(checkOutForm) {
    console.log(checkOutForm);
  }

}
