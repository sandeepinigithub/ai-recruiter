import { Component, OnInit } from '@angular/core';
import { VisualizeService } from '../services/visualize.service';

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

  constructor(private jobVisualize : VisualizeService) {
    this.jobTemp = sessionStorage.getItem('jobs');
    this.jobs = JSON.parse(this.jobTemp).data.jobs;

  }

  ngOnInit(): void {
  }
  view(data:any){
    this.jobView = data ;
  }
  visualize(id:string){ 
    this.jobVisualize.visualization(id).subscribe(data=>{
      // console.log(data);      
      sessionStorage.setItem("visualizeData", JSON.stringify(data));      
    });        
  }

}
