import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, filter, find, map, shareReplay, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  constructor(private http: HttpClient) { }

  getAllFakeStore(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
      tap(a => console.log(a))
    )
  }
}
