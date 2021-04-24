import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromCart } from '../../shared/services/store/cart.action';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  items;
  itemsCount;
  totalPrice;
  constructor(private modalService: NgbModal,
    private store: Store<{ cart }>) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.items = data;

      // console.log(this.items.cartItems.Price);
      this.totalPrice = this.items.cartItems.reduce((acc, curr) => acc + +curr.Price.slice(1), 0)

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

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  userCheckOutForm(checkOutForm) {
    // console.log(checkOutForm);
  }

}
