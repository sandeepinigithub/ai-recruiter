import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { VisualizeService } from '../services/visualize.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobView: any = [];
  jobTemp: any;
  jobs: any=[];
  searchField : string ;
  tempEmail : any;
  emails : any =[];

  postJobData = {
    hr_email : '',
    profile : '',
    description : '',
    qualifications : [] ,
    skills : [],
    eligibility : {},

  }

  constructor(private jobVisualize : VisualizeService , private jobService: JobsService ) {
    this.jobTemp = sessionStorage.getItem('jobs');
    this.jobs = JSON.parse(this.jobTemp).data.jobs;

    //email hr 
    this.tempEmail = JSON.parse(sessionStorage.getItem('sLoginData') || '{}');
    this.emails = this.tempEmail.data.hr_list;

  }

  ngOnInit(): void {
  }
  view(data:any){
    this.jobView = data ;
    this.visualize(data.id);
  }

  post(){
    // this.jobService.postJobs(this.postJobData);    
  }

  visualize(id:string){ 
    this.jobVisualize.visualization(id).subscribe(data=>{
      // console.log(data);      
      sessionStorage.setItem("visualizeData", JSON.stringify(data));      
    });        
  }

}
