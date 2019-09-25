import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Projects } from '../Models/Projects';

@Injectable()
export class ProjectService{

  constructor(private http: HttpClient) {

  }
  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>("assets/data.json");
  }
}
