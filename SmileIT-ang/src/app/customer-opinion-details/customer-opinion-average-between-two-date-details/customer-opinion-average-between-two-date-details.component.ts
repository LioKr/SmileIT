import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerOpinionAverageBetweenTwoDateService } from 'src/app/shared/services/customer-opinion-average-between-two-date.service';

@Component({
  selector: 'app-customer-opinion-average-between-two-date-details',
  templateUrl: './customer-opinion-average-between-two-date-details.component.html',
  styleUrls: ['./customer-opinion-average-between-two-date-details.component.scss']
})
export class CustomerOpinionAverageBetweenTwoDateDetailsComponent implements OnInit {

  constructor(public serviceAvg : CustomerOpinionAverageBetweenTwoDateService) { }

  ngOnInit(): void {
   
  }
}
