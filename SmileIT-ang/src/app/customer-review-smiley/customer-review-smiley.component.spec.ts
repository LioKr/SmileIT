import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewSmileyComponent } from './customer-review-smiley.component';

describe('CustomerReviewSmileyComponent', () => {
  let component: CustomerReviewSmileyComponent;
  let fixture: ComponentFixture<CustomerReviewSmileyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReviewSmileyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewSmileyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
