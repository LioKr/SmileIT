import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote-thanks',
  templateUrl: './vote-thanks.component.html',
  styleUrls: ['./vote-thanks.component.scss']
})
export class VoteThanksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToVoteMenu() {
    this.router.navigate(['vote']);
  }
}
