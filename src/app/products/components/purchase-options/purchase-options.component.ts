import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Producto } from 'src/app/shared/models/Products.model';
import { Product } from '../../models/Product.model';
import * as ShoppingListActions from '../../store/prod-action';
import { State } from '../../store/prod-reducer';
@Component({
  selector: 'app-purchase-options',
  templateUrl: './purchase-options.component.html',
  styleUrls: ['./purchase-options.component.scss']
})
export class PurchaseOptionsComponent implements OnInit {
  @Input() prod!: Product;
  quantity: number = 1;
  i = 1;

  form = this.fb.group({
    checks: ['', Validators.required],
    qty: [1, Validators.required]
  });
  list = ['S', 'M', 'L', 'XL'];
  @Input() name!: '';
  constructor(private fb: FormBuilder,
    private store: Store<State>
  ) { }
  //  private store: Store<{ cart: { shoppingCart: Producto[] } }>

  ngOnInit(): void {
    console.log(this.prod)
    // this.store.select('cart')

  }

  add() {
    if (this.i != 5) {
      this.i++;
      this.quantity = this.i
    }
    else {
      this.greedyPurchasingPopup()
    }
  }

  minus() {
    if (this.i <= 1) {
      this.removeLessThanOne()
    }
    else {
      this.i--;
      this.quantity = this.i;
    }
  }

  addToCart() {
    let newObj = { title: this.prod.title, price: this.prod.price, quantity: this.form.value.qty, category: this.prod.category, image: this.prod.image }
    // let newProduct = {this.prod.title, this.prod.price, this.form.value.qty, this.prod.category, this.prod.image);
    // console.log(newProduct)
    this.store.dispatch(ShoppingListActions.AddProducto({ products: newObj }))


  }
  greedyPurchasingPopup() {
    alert('stop hoarding!')
  }

  removeLessThanOne() {
    alert('to delete, remove item!')
  }
}
