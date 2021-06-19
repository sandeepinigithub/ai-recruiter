import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http : HttpClient) { }
  getJobs(bodyData:any){
    return this.http.post('https://ai-recruiter.herokuapp.com/api/job/filter',bodyData);
  }
}
