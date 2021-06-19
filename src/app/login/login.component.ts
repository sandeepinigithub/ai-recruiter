import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  d:any;

  constructor(private loginService: LoginService , private route :Router) { }

  ngOnInit(): void {
  }
  login() { 
    this.loginService.loginCredential({"email" : this.email}).subscribe(data=>{
      // console.log(data);
      this.d =data ;
      if(this.d.message == "Wrong email or password"){
        alert(this.d.message);
      }
      else{
        if(this.d.data.id != null){
          // console.log("not null");
          sessionStorage.setItem("sLoginData" , JSON.stringify(data));
          this.route.navigate(['home']);  
            
                       
        }
      }
      
      
    })
    
  }

}
