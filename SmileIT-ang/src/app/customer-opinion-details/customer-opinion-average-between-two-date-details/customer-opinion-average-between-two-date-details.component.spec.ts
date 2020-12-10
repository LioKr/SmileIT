import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOpinionAverageBetweenTwoDateDetailsComponent } from './customer-opinion-average-between-two-date-details.component';

describe('CustomerOpinionAverageBetweenTwoDateDetailsComponent', () => {
  let component: CustomerOpinionAverageBetweenTwoDateDetailsComponent;
  let fixture: ComponentFixture<CustomerOpinionAverageBetweenTwoDateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOpinionAverageBetweenTwoDateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOpinionAverageBetweenTwoDateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
