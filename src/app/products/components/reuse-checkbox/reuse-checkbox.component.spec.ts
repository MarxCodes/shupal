import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseCheckboxComponent } from './reuse-checkbox.component';

describe('ReuseCheckboxComponent', () => {
  let component: ReuseCheckboxComponent;
  let fixture: ComponentFixture<ReuseCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
