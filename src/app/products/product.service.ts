import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, filter, find, map, shareReplay, tap } from 'rxjs/operators';

import { Product } from './models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts$: Observable<Product[]> = this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
    // map(hry => hry.)
    shareReplay(1),
    tap(x => console.log(typeof x))
  );
  copiedArray = [];
  constructor(private http: HttpClient) {
    // console.log(this.getProducts$)
  }

  getAllFakeStore(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
      tap(a => console.log(a))
    )
  }
  getProduct(od: any) {
    return this.getProducts$.pipe(
      // map(mate => mate.splice(id, 1))

      // map(mate => mate.find(jj => jj.id === id))
      map(hh => hh.find(g => od === g.id.toString())),
      // map(hh => console.log(hh)),

      // tap(gg => console.log('from inside get job', gg, typeof gg)),

      // tap(console.log)
      // tap(gg => console.log('from inside get job', gg.length)),
    //  map(hh => hh),

    //  map(hh => hh.find(g => id === g.id)),
      // tap(gg => console.log('from inside get job', gg)),
      )    //  )
  }

  // copyProductData() {
  //   this.getProducts$.pipe(
  //     map(element => element = this.copiedArray.push(element))
  //   )
  // }
}
