import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  form = new FormGroup({
    checks: new FormControl('today'),
  });
  list = ['S', 'M', 'L', 'XL'];
  @Input() name!: '';
  constructor() { }

  ngOnInit(): void {
  }

}
