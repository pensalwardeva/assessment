import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datamodel } from './register/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
   


  // register user

RegisterUser(data:datamodel){
return this.http.post<datamodel>("http://localhost:3000/posts", data)
}

getUser(){
  return this.http.get<datamodel[]>("http://localhost:3000/posts")
  }
}


