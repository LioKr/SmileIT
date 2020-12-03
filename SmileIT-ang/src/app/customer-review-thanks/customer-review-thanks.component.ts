import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-review-thanks',
  templateUrl: './customer-review-thanks.component.html',
  styleUrls: ['./customer-review-thanks.component.scss'],
})
export class CustomerReviewThanksComponent implements OnInit, OnDestroy {

  @Input() isCommentComponentOver: boolean;
  doesWantComment: boolean = false;
  isCommentingOver: boolean = false;
  secondsOfCounter: number;
  counterTimeoutSubscription: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const counterTimeout = interval(1000);
    this.counterTimeoutSubscription = counterTimeout.subscribe(
      (value: number) => {
        this.secondsOfCounter = value;
      },
      (error) => {
        console.log('An error occured: ' + error);
      },
      () => {
        console.log('Observable completed . ');
      }
    );
  }

  ngOnDestroy(){
    this.counterTimeoutSubscription.unsubscribe();
  }

  noWantToComment() {
    this.doesWantComment = false;
    this.isCommentingOver = true;
  }

  yesWantToComment() {
    this.doesWantComment = true;
  }

  finishedWithComment() {
    this.isCommentingOver = true;
  }

  goToVoteMenu() {
    this.router.navigate(['vote']);
  }
}
