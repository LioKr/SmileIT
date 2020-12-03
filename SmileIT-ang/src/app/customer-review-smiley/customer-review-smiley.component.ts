import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-review-smiley',
  templateUrl: './customer-review-smiley.component.html',
  styleUrls: ['./customer-review-smiley.component.scss']
})
export class CustomerReviewSmileyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onVote(){
    this.router.navigate(['thanks']);
  }

}
