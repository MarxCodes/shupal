import { createAction, createReducer, on } from '@ngrx/store';
import { Producto } from '../../shared/models/Products.model'
import * as CART_ACTIONS from './cart-actions';

export interface ShoppingListState {
  shoppingCart: Producto[];
}


const initialState = {
  shoppingCart: [
    // new Producto('mine', 1, 1, 'crime', 'time')
  ]
}

// export const productReducer = createReducer({
//   showProductCode: true
// }, on(createAction('[Product] ToggleProduct Code'), state => {
//   return {
//     ...state,
//     showProductCode: !state.showProductCode
//   }
// }))
export function shoppingListReducer(
  state: ShoppingListState = initialState,
  action: CART_ACTIONS.AddProduct): ShoppingListState {

  switch (action.type) {
    case CART_ACTIONS.ADD_PRODUCT:
      console.log({
        shoppingCart: [...state.shoppingCart, action.payload]
      })
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload]
      }

    default:
      return state;
  }
}
