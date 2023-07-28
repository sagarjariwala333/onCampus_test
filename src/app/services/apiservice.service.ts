import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private apiUrl = 'https://reqres.in/api/users?page=2';
  private singleUrl = 'https://reqres.in/api/users/'

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getUser(id:any): Observable<any> {

    return this.http.get<any>(`${this.singleUrl}${id}`);
  }
}
