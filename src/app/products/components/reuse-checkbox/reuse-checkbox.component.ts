import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reuse-checkbox',
  templateUrl: './reuse-checkbox.component.html',
  styleUrls: ['./reuse-checkbox.component.scss']
})
export class ReuseCheckboxComponent implements OnInit {
  form = new FormGroup({
    checks: new FormControl('today'),
  });
  @Input() list? : string[];
  @Input() name!: '';
  constructor() { }

  ngOnInit(): void {
  }

}
