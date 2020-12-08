import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  formData: User = new User();
  readonly rootURL = "https://localhost:44356/api";
  list: User[];

  constructor(private http: HttpClient) { }

  postUser(){
    return this.http.post(`${this.rootURL}/User`, this.formData);
  }

  putUser(){
    return this.http.put(`${this.rootURL}/User/${this.formData.Id}`, this.formData);
  }

  deleteUser(id){
    return this.http.delete(`${this.rootURL}/User/${id}`);
  }

  getOneUser(id){
    return this.http.get(`${this.rootURL}/User/${id}`);
  }

  refreshList(){
    this.http.get(`${this.rootURL}/User/`)
    .toPromise()
    .then(res => this.list = res as User[]);
  }

}
