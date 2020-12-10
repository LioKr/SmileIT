import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOpinionAverageBetweenTwoDateFormComponent } from './customer-opinion-average-between-two-date-form.component';

describe('CustomerOpinionAverageBetweenTwoDateFormComponent', () => {
  let component: CustomerOpinionAverageBetweenTwoDateFormComponent;
  let fixture: ComponentFixture<CustomerOpinionAverageBetweenTwoDateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOpinionAverageBetweenTwoDateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOpinionAverageBetweenTwoDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
