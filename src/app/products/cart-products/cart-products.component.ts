import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/shared/models/Products.model';
import { getProducts, State } from '../store/prod-reducer';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  cartItems$: Observable<Producto[]>;

  constructor(private store: Store<State>) {
    console.log('does this ever init')
  }

  ngOnInit(): void {
    this.cartItems$ = this.store.select(getProducts);
    console.log('cart items: ', this.cartItems$);
  }

}
