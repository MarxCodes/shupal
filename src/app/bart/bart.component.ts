import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Producto } from 'src/app/shared/models/Products.model'
@Component({
  selector: 'app-bart',
  templateUrl: './bart.component.html',
  styleUrls: ['./bart.component.css']
})
export class BartComponent implements OnInit {


  shoppingCart!: Observable<{ shoppingCart: Producto[] }>;
  constructor(private store: Store<{ shoppingCart: { shoppingCart: Producto[] } }>) {

  }

  ngOnInit(): void {
    this.shoppingCart = this.store.select('shoppingCart');
    this.shoppingCart.pipe()
    console.log(this.shoppingCart)
    this.shoppingCart.pipe(tap()).subscribe(hey => console.log(hey))
    // this.shoppingCart.pipe(tap(console.log)).subscribe(el => console.log(el));
  }

}
