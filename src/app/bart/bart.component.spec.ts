import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BartComponent } from './bart.component';

describe('BartComponent', () => {
  let component: BartComponent;
  let fixture: ComponentFixture<BartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
