import { ShoppingListState, shoppingListReducer } from "./cart-reducer";
import { Action, ActionReducerMap } from "@ngrx/store";

export const rootReducer = {};

export interface AppState {
  shoppingCart: ShoppingListState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  shoppingCart: shoppingListReducer
}
