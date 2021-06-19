import { Component, DoCheck, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit ,DoCheck {
  selectedEmail : string = '';
  tempData : any ;
  emails : any ;


  constructor() {} 
  

  ngOnInit(): void {
    this.tempData = JSON.parse(sessionStorage.getItem('sLoginData') || '{}');
    this.emails = this.tempData.data.hr_list;
    console.log("HR list :" + this.emails);
       
  }
  ngDoCheck(){
    console.log("selected mail : " + this.selectedEmail);
  }

}
