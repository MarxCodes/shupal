import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Producto } from "src/app/shared/models/Products.model";
import * as ProductActions from './prod-action';
import * as AppState from "../../state/app.state";

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean,
  currentProoduct: Producto | null,
  products: Producto[],
  error: string
}

const initialState: ProductState = {
  showProductCode: true,
  currentProoduct: null,
  products: [],
  error: ''

};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
)

export const prodReducer = createReducer(
  initialState,
  on(createAction('[Product] Toggle Product Code', state => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  })),
  on(ProductActions.loadProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: ''
    }
  }),
  on(ProductActions.loadProductFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error
    }
  }),
  on(ProductActions.AddProducto, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.products],
      error: ''
    }
  })
)
