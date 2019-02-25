import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface LoginResponse {
  errorCode: number;
  errorMessage: string;
  data: LoginInfo;
}
export interface LoginInfo {
  userId: number;
  account: string;
  fullName: string;
  accessToken: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private api: ApiService, private http: HttpClient) { }
  login(userName: string, password: string): Observable<LoginResponse> {
    const requestData = {
      username: userName,
      password: password
    };
    return this.http.post<LoginResponse>(this.api.apiUrl.login, requestData);
  }
}
