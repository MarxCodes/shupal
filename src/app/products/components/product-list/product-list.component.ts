import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { listStagger } from 'src/app/animations';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [listStagger]
})
export class ProductListComponent implements OnInit {
  // productList$ = this.productService.getAllFakeStore();
  productList$ = this.productService.getProducts$;
  @ViewChild('popped') popped?: ElementRef;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // console.log('triggered', this.productList$.subscribe(el => console.log(el)));
  }

}
