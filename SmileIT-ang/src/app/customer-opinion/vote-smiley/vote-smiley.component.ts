import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerOpinionService } from '../../shared/services/customer-opinion.service';

@Component({
  selector: 'app-vote-smiley',
  templateUrl: './vote-smiley.component.html',
  styleUrls: ['./vote-smiley.component.scss']
})
export class VoteSmileyComponent implements OnInit {

  constructor(public service: CustomerOpinionService, private router: Router) { }

  ngOnInit(): void {
  }



  onVote1(form: NgForm){
    this.service.formData.SmileyId = 1;
    this.onSubmit(form);
    this.goToThanks();
  }
  onVote3(form: NgForm){
    this.service.formData.SmileyId = 3;
    this.onSubmit(form);
    this.goToThanks();
  }
  onVote5(form: NgForm){
    this.service.formData.SmileyId = 5;
    this.onSubmit(form);
    this.goToThanks();
  }

  goToThanks(){
    this.router.navigate(['thanks']);
  }

  onSubmit(form: NgForm) {
    this.service.formData.Created_at = new Date();
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCustomerOpinion().subscribe(
      res => {
        console.log("successfully voted");
      },
      err => { console.log(err); }
    );
  }
}

