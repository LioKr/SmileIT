import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewThanksComponent } from './customer-review-thanks.component';

describe('CustomerReviewThanksComponent', () => {
  let component: CustomerReviewThanksComponent;
  let fixture: ComponentFixture<CustomerReviewThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReviewThanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
