import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  getItem(): Observable<any> {
    console.log("UtilService");
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return this.http.get<any>(url);
  }
}
