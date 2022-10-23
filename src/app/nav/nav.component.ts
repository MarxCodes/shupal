import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProducts, State } from '../products/store/prod-reducer';
import { Producto } from '../shared/models/Products.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cartItems$: Observable<Producto[]>;

  card: Producto[];
  constructor(private store: Store<State>) { }


  ngOnInit(): void {
    this.cartItems$ = this.store.select(getProducts);
    // this.card = this.store.select(getProducts).subscribe(el => console.log(el))
    // console.log(this.cartItems$)
    this.store.select(getProducts).subscribe(el => {
      console.log('cart item from nav: ', el);
      return this.card = el
    })
  }



}
