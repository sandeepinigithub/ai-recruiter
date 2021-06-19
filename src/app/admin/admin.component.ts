import { AfterContentChecked, Component, DoCheck, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { JobsService } from '../services/jobs.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, DoCheck {
  selectedEmail: string = '';
  tempSelectedEmail: string = '';
  tempData: any;
  emails: any;

  constructor(private jobService: JobsService) { }

  ngOnInit(): void {
    this.tempData = JSON.parse(sessionStorage.getItem('sLoginData') || '{}');
    this.emails = this.tempData.data.hr_list;
    console.log("HR list :" + this.emails);

  }

  getJobDetails(email: any) {
    this.jobService.getJobs({ "email": email }).subscribe(data => {
      sessionStorage.setItem("jobs", JSON.stringify(data));
    })
  }

  ngDoCheck() {
    console.log("selected mail : " + this.selectedEmail);
    if (this.selectedEmail != this.tempSelectedEmail) {
      this.tempSelectedEmail = this.selectedEmail;
      this.getJobDetails(this.selectedEmail)

    }

  }

}
