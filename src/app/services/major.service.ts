import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
export interface MajorsResponse {
  errorCode: number;
  errorMessage: string;
  majors: Major[];
}
export interface MajorResponse {
  errorCode: number;
  errorMessage: string;
  majors: Major;
}
export interface Major {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable<MajorsResponse> {
    return this.http.get<MajorsResponse>(this.api.apiUrl.majors);
  }
  add(data: Major): Observable<MajorResponse> {
    return this.http.post<MajorResponse>(this.api.apiUrl.major, data);
  }
}
