import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/Products.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Producto;
  constructor() { }

  ngOnInit(): void {
  }

}
