import { Component, OnInit } from '@angular/core';
import { CustomerOpinionReadListBewteenTwoDateService } from 'src/app/shared/services/customer-opinion-read-list-bewteen-two-date.service';

@Component({
  selector: 'app-customer-opinion-details-read-list-between-two-date',
  templateUrl: './customer-opinion-details-read-list-between-two-date.component.html',
  styleUrls: ['./customer-opinion-details-read-list-between-two-date.component.scss']
})
export class CustomerOpinionDetailsReadListBetweenTwoDateComponent implements OnInit {

  constructor(public serviceList : CustomerOpinionReadListBewteenTwoDateService) { }

  ngOnInit(): void {
  }

}
