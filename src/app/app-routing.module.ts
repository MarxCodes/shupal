import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BartComponent } from './bart/bart.component';
import { HomeComponent } from './home/home.component';
import { CartProductsComponent } from './products/cart-products/cart-products.component';
// import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  // {path: '/'}
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', component: CartProductsComponent }

  // { path: 'bart', component: BartComponent, data: { animation: 'homePage' } },

  // {path: 'products',   loadChildren: () => {
  //     return import('./products/products.module').then(m => m.ProductsModule)
  // }}

  // { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
