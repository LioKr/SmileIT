import {CustomerOpinionDetail} from '../models/customer-opinion-detail.model'
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerOpinionDetailService {

  formData: CustomerOpinionDetail = new CustomerOpinionDetail();
  readonly rootURL = "https://localhost:44356/api";
  list: CustomerOpinionDetail[];

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
    .then(res => this.list = res as CustomerOpinionDetail[]);
  }

}
