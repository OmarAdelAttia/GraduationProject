import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromCart } from '../../shared/services/store/cart.action';
import { map } from 'rxjs/operators';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  items;
  itemsCount;
  constructor(private store: Store<{cart}>) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.items = data;

      console.log(this.items.cartItems.Price);

    })



    this.itemsCount = this.store.select('cart');

  }

  // getTotal() {
  //   return this.items.cartItems.map((x: []) => {
  //     return x.reduce((prev, curr ) => {
  //       return prev + curr.Price;
  //     }, 0);
  //   });
  // }

  removeFromShoppingCart = (item) => {
    let arrayItems = this.items.cartItems.filter(x => x.id != item.id);
    this.store.dispatch(new removeFromCart(arrayItems))
  }

  userCheckOutForm(checkOutForm) {
    console.log(checkOutForm);
  }

}
