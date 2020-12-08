import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public service: AuthenticationService) { }


  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form?: NgForm) {
    if (form != null){
      form.form.reset();
    }
    else {
    this.service.loginData = {
      Username: '',
      Password: ''
      };
    }
  }

  onSubmit(form: NgForm) {
      this.service.login().subscribe(
        res => {
          this.resetForm(form);
          console.log("logged in successfully!");
        },
        err => { console.log(err); }
      );
  }
}
