import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOpinionDetailsReadListBetweenTwoDateFormComponent } from './customer-opinion-details-read-list-between-two-date-form.component';

describe('CustomerOpinionDetailsReadListBetweenTwoDateFormComponent', () => {
  let component: CustomerOpinionDetailsReadListBetweenTwoDateFormComponent;
  let fixture: ComponentFixture<CustomerOpinionDetailsReadListBetweenTwoDateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOpinionDetailsReadListBetweenTwoDateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOpinionDetailsReadListBetweenTwoDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
