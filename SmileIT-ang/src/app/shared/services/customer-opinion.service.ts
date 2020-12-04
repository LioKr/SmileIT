import {CustomerOpinion} from '../models/customer-opinion.model';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerOpinionService {

  formData: CustomerOpinion = new CustomerOpinion();
  readonly rootURL = "https://localhost:44356/api";
  list: CustomerOpinion[];

  constructor(private http: HttpClient) { }

  postCustomerOpinion(){
    return this.http.post(`${this.rootURL}/CustomerOpinion`, this.formData);
  }

  putCustomerOpinion(){
    return this.http.put(`${this.rootURL}/CustomerOpinion/${this.formData.Id}`, this.formData);
  }

  deleteCustomerOpinion(id){
    return this.http.delete(`${this.rootURL}/CustomerOpinion/${id}`);
  }

  getOneCustomerOpinion(id){
    return this.http.get(`${this.rootURL}/CustomerOpinion/${id}`);
  }

  refreshList(){
    this.http.get(`${this.rootURL}/CustomerOpinion/`)
    .toPromise()
    .then(res => this.list = res as CustomerOpinion[]);
  }

}
