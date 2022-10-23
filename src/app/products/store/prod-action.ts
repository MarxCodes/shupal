import { createAction, props } from "@ngrx/store";
import { Producto } from "src/app/shared/models/Products.model";

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code',

)
export const loadProductSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Producto[] }>()
);

export const loadProductFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
)

export const AddProducto = createAction(
  '[Product] Cart Added',
  props<{ products: Producto }>()
)


export const addProductToCartSuccess = createAction(
  '[Product] Cart Added Successfully',
  props<{ product: Producto }>()
)
