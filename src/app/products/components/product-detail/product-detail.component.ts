import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { map, tap } from 'rxjs/operators';
import { detailEnterAnimation } from 'src/app/animations';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations: [detailEnterAnimation]
})
export class ProductDetailComponent implements OnInit {
  imageObject: GalleryItem[] = [
    // {
    //   image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //   thumbImage: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //   alt: 'alt of image',
    //   title: 'title of image'
    // },
    // {
    //   image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //   thumbImage: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //   alt: 'alt of image',
    //   title: 'title of image'
    // },    {
    //   image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //   thumbImage: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    //   alt: 'alt of image',
    //   title: 'title of image'
    // },
  ];

  data: any;
  quantity: number = 1;
  i = 1;
  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  // this.jobService.getJob(id).subscribe(
  //   el => {
  //     console.log(el)
  //     this.data = el
  //   }
  // )
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let id = params['id'];
        console.log('route params id: ', id);
        if (id === 'cart') { console.log('id === cart') };
        console.log('type of id when innit detail: ', typeof id)
        this.productService.getProduct(id).subscribe(
          el => {
            console.log(el)
            this.data = el;
            this.setimgArray(this.data)
          })
      });
    this.route.data.subscribe(data => console.log('routedata: ', data))
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe()
  }

  setimgArray(data: Product) {
    for (let i = 0; i < 3; i++) {
      this.imageObject = [...this.imageObject, new ImageItem({ src: data.image, thumb: data.image })]
      // this.imageObject.push({
      //   src: data.image,
      //   thumbImage: data.image
      // })
    }
  }

  add() {
    if (this.i != 5) {
      this.i++;
      this.quantity = this.i
    }
    else {
      this.greedyPurchasingPopup()
    }
  }

  minus() {
    if (this.i <= 1) {
      this.removeLessThanOne()
    }
    else {
      this.i--;
      this.quantity = this.i;
    }
  }

  greedyPurchasingPopup() {
    alert('stop hoarding!')
  }

  removeLessThanOne() {
    alert('to delete, remove item!')
  }

}
