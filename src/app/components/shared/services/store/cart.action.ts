import { Action } from '@ngrx/store';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export class addToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: object) {}
}

export class removeFromCart implements Action {
  readonly type = REMOVE_FROM_CART;
  constructor(public payload: Array<object>) {}
}
