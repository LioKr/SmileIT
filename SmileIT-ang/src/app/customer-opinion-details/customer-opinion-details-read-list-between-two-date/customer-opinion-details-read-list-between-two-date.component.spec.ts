import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOpinionDetailsReadListBetweenTwoDateComponent } from './customer-opinion-details-read-list-between-two-date.component';

describe('CustomerOpinionDetailsReadListBetweenTwoDateComponent', () => {
  let component: CustomerOpinionDetailsReadListBetweenTwoDateComponent;
  let fixture: ComponentFixture<CustomerOpinionDetailsReadListBetweenTwoDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOpinionDetailsReadListBetweenTwoDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOpinionDetailsReadListBetweenTwoDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
