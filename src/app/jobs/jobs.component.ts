import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobView: any = [];
  jobTemp: any;
  jobs: any;
  searchField : any ;

  constructor() {
    this.jobTemp = sessionStorage.getItem('jobs');
    this.jobs = JSON.parse(this.jobTemp).data.jobs;

  }

  ngOnInit(): void {
  }
  view(data:any){
    this.jobView = data ;
  }

}
