import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-review-commentary',
  templateUrl: './customer-review-commentary.component.html',
  styleUrls: ['./customer-review-commentary.component.scss'],
})
export class CustomerReviewCommentaryComponent implements OnInit {
  isReviewOver: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.isReviewOver = true;
  }

  onCancel() {
    this.isReviewOver = true;
  }
}
