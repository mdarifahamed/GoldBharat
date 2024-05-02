import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // datausers: any;

  constructor(private http: HttpClient) {}
  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  products(){
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }
}
