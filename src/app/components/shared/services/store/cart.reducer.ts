import {  ADD_TO_CART, REMOVE_FROM_CART } from './cart.action';

const INITIAL_STATE = {
  cartItems : [],
};

export function shopping_cart_reducer(state = INITIAL_STATE, action) {

  switch(action.type) {

    case 'ADD_TO_CART':
    return {
      cartItems: [...state.cartItems, action.payload],
    };

    case 'REMOVE_FROM_CART':
      console.log(action.payload);
    return {
      cartItems: action.payload,
    };

    default:
      return state;

  }
}
