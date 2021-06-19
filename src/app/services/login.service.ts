import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient) { 
  }

  loginCredential(loginData:any){
    return this.http.post('https://ai-recruiter.herokuapp.com/api/company/login',loginData);
  }
  
}
