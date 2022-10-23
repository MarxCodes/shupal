import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge'
import { GalleryModule } from 'ng-gallery';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
// improt { CartModule }
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './nav/nav.component';
// import { shoppingListReducer } from './cart/store/cart-reducer';
import { shoppingListReducer } from './bore/bore-reducer';
// import { CartModule } from './cart/cart.module';
import { reducers } from './cart/store';
// import { BartComponent } from './bart/bart.component';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    // BartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    StoreModule.forRoot({}),
    ProductsModule,
    SharedModule,
    // CartModule,
    EffectsModule.forRoot([]),
    MatBadgeModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
