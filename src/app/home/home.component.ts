import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navList = [{ name: 'All Products', url: '/products' },
  { name: 'Mens Clothes' },
  { name: 'Womens Clothes' },
  { name: 'Electronics' },
  { name: 'Jewellery' }]
  constructor() { }

  ngOnInit(): void {
  }

}
