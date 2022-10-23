import { Action } from '@ngrx/store';
import { Producto } from 'src/app/shared/models/Products.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Producto) { }
  // payload!: Producto;
}
