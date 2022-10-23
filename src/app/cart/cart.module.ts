import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPopUpComponent } from './nav-pop-up/nav-pop-up.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
// import { StoreModule dducer } from './store/cart-reducer';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavPopUpComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    // StoreModule.forRoot({
    //   cart: shoppingListReducer
    // }),
    SharedModule,
    // RouterModule.forChild([
    //   { path: 'cart', component: CartComponent }
    // ]),
  ]
})
export class CartModule { }
