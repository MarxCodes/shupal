import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";
import { of } from 'rxjs';
import * as ProductActions from './prod-action';
@Injectable()

export class ProductEffects {
  constructor(private actions$: Actions) { }

  // loadProducts$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ProductActions.)
  //   )
  // })

  addProductToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.AddProducto),
      switchMap((action) =>
        of(ProductActions.addProductToCartSuccess({ product: action.products }))
      )
    )
  )
}
