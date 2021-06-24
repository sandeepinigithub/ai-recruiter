import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VisualizeService {
  constructor(private http: HttpClient) { }
  visualization(id: string) {
    const apiUrl = 'https://ai-recruiter.herokuapp.com/api/job/visualization/' + id;
    return this.http.get(apiUrl);
  }
}
