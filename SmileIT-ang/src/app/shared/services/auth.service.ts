import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  loginData: UserLogin = new UserLogin();
  readonly rootURL = "https://localhost:44356/api";

  constructor(private http: HttpClient) { }

  loginUser(){
    return this.http.post(`${this.rootURL}/Auth/Login`, this.loginData);
  }

  // registerUser(){
  //   return this.http.put(`${this.rootURL}/Auth/Register`, this.registerData);
  // }
}
