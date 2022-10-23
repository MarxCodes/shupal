import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: object[] = []
  constructor() { }
  //add products to cart
  addToCart(item: object, qty: number) {
    this.cart.push({ ...item, qty })
  }
  // update cart quantity
  // delete item
  // delete cart
}
