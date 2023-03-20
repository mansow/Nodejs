import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

// this service is for http api calls injecting this service to use this methods in display component 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  studentlist: any = []
  constructor(private http: HttpClient) { }

  apiurl ='http://localhost:3000/';
  
   token = 'abc@123';
   header = new HttpHeaders().set("authorization",this.token);
  
   getMethod() 
  {

    return this.http.get<any>(this.apiurl,{headers:this.header})
  }
  postMethod(data: any) {
    return this.http.post(this.apiurl, data)

  }

  putMethod(data: any,id: number)
  {
    return this.http.put(this.apiurl + id,data)
  }
 
  deleteMethod(id: number) {
    return this.http.delete<any>(this.apiurl + id)
  }
}
