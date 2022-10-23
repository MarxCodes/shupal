import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-select',
  templateUrl: './quantity-select.component.html',
  styleUrls: ['./quantity-select.component.scss']
})
export class QuantitySelectComponent implements OnInit {
  @Output() itemChange = new EventEmitter<number>();
  @Input() item! : number;

  constructor() {}

  ngOnInit() {}
  updateVal($event: Event) {
    console.log(this.item);

    this.itemChange.emit(this.item);
  }
}
