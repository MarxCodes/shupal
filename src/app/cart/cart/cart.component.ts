import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Producto } from 'src/app/shared/models/Products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCart: Observable<{ shoppingCart: Producto[] }>;
  mineData: any;
  myList: any;
  constructor(private store: Store<{ cart: { shoppingCart: Producto[] } }>) {

  }

  ngOnInit(): void {
    this.shoppingCart = this.store.select('cart')
    this.store.select(state => state.cart.shoppingCart).subscribe(val => this.myList = val);


    console.log(this.shoppingCart)
    // this.shoppingCart.pipe(tap(console.log)).subscribe(el => console.log(el));
  }

}
