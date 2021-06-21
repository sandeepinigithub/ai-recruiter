import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  

  constructor(private http: HttpClient) { 
  }

  loginCredential(loginData:any){
    return this.http.post('https://ai-recruiter.herokuapp.com/api/company/login',loginData);
  }


  setLogin() {
    this.isLoggedIn = true;
  }

  setLogout() {
    this.isLoggedIn = false;
  }

  getLogin() {
    return this.isLoggedIn;
  }
  
}
