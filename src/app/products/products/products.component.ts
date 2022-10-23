import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { listStagger } from 'src/app/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [listStagger]
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  mobileQuery: MediaQueryList;
  navigationList = [
    { title: 'Dashboard', svg: 'tune', route: '/user/dashboard' },
    { title: 'Saved Jobs', svg: 'star_rate', route: '/user/saved' },
    { title: 'Your Jobs', svg: 'backup', route: '/user/upload' },
    { title: 'Applications', svg: 'source', route: '/applications' },
    { title: 'Settings', svg: 'settings', route: '/settings' },
  ];
  panelOpenState = false;
  priceList = ['$0 - 19', '$20-39', '$40-59', '$60+'];
  categoryList = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  sizeList = ['S', 'M', 'L', 'XL'];
  ratingList = ['1', '2', '3', '4', '5'];

  accList = [{ name: 'Price', list: this.priceList }, { name: 'Category', list: this.categoryList }, { name: 'Size', list: this.sizeList }, { name: 'Rating', list: this.ratingList }]
  private _mobileQueryListener: () => void;

  constructor(private observer: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    console.log(this.mobileQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
  ngOnInit(): void {

    this.route.params.subscribe(el => console.log('called products route on route leave too?', el))
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe(
      res => {
        if (res.matches) {
          this.sideNav.mode = 'over';

          this.sideNav.close();
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open()
        }
      }
    )
  }
}
