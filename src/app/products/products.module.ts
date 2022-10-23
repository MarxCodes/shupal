import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { GalleryModule } from 'ng-gallery';

import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductsComponent } from './products/products.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { QuantitySelectComponent } from './components/quantity-select/quantity-select.component';
import { QuantityCounterComponent } from './components/quantity-counter/quantity-counter.component';
import { PurchaseOptionsComponent } from './components/purchase-options/purchase-options.component';

import { ReuseCheckboxComponent } from './components/reuse-checkbox/reuse-checkbox.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../cart/store';
import { prodReducer } from './store/prod-reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/prod-effects';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [

    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    ProductsComponent,
    CheckboxComponent,
    QuantitySelectComponent,
    QuantityCounterComponent,
    PurchaseOptionsComponent,
    ReuseCheckboxComponent,
    CartProductsComponent,
    CartItemComponent


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: ProductsComponent, data: { animation: 'productPage' }
      },
      {
        path: ':id', component: ProductDetailComponent, data: { animation: 'detailPage' }
      },
      // {
      //   path: 'cart', component: CartProductsComponent
      // }

    ]),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    NgImageSliderModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    StoreModule.forFeature('products', prodReducer),
    EffectsModule.forFeature([ProductEffects]),
    GalleryModule

  ],
  exports: [
    CartProductsComponent
  ]
})
export class ProductsModule { }
