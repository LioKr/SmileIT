import { Component, OnInit } from '@angular/core';
import { CustomerOpinionReadListBewteenTwoDateService } from '../../../shared/services/customer-opinion-read-list-bewteen-two-date.service'
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
//import { log } from 'console';

@Component({
  selector: 'app-customer-opinion-details-read-list-between-two-date-form',
  templateUrl: './customer-opinion-details-read-list-between-two-date-form.component.html',
  styleUrls: ['./customer-opinion-details-read-list-between-two-date-form.component.scss']
})
export class CustomerOpinionDetailsReadListBetweenTwoDateFormComponent implements OnInit {

  constructor(public serviceList: CustomerOpinionReadListBewteenTwoDateService) { }

  ngOnInit(): void {
  }

  onSubmit(formList: NgForm){
    console.log(formatDate(formList.value['dateStart'],'dd-MM-yyyy','en-US'));
    console.log(formatDate(formList.value['dateEnd'],'dd-MM-yyyy','en-US'));
    this.serviceList.getCustomerOpinionReadListBetweenTwoDate(
      formatDate(formList.value['dateStart'],'dd-MM-yyyy','en-US'),
      formatDate(formList.value['dateEnd'],'dd-MM-yyyy','en-US'));
    
  }
}
