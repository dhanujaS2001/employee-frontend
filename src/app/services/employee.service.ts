import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrls:string="http://127.0.0.1:8000/api/v1/employee"
  constructor(private http:HttpClient) { 

  }

  getEmployee(){
    return this.http.get(this.baseUrls)
  }

  createEmployee(data:any){
    return this.http.post(this.baseUrls,data)
  }

  retrieveEmployee(id:number){
    return this.http.get(`${this.baseUrls}/${id}`)
  }

  updateEmployee(data:any,id:number){
    return this.http.put(`${this.baseUrls}/${id}`,data)
  }

  removeEmployee(id:number){
    return this.http.delete(`${this.baseUrls}/${id}`)
  }


}
