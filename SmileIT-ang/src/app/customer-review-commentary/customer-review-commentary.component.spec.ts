import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewCommentaryComponent } from './customer-review-commentary.component';

describe('CustomerReviewCommentaryComponent', () => {
  let component: CustomerReviewCommentaryComponent;
  let fixture: ComponentFixture<CustomerReviewCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReviewCommentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
