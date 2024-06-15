import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.scss'],
})
export class MyproductsComponent {
  datausers: any
  product: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5; // Number of items per page
  totalPages: number = 0;
  data: any;
  constructor(private http: HttpClient, private api: ApiService) {}

  ngOnInit(): void {
    this.getproducts();
    this.getusers();
  }

 

  getusers() {
    this.api.users().subscribe((data: any) => {
      this.datausers = data;
      
    });
  }

  // getproducts(){
  //   this.api.products().subscribe((res: any) => {
  //     this.product = res;
  //   })
  // }

  // products() {
  //   this.http
  //     .get('https://api.escuelajs.co/api/v1/products')
  //     .subscribe((pro: any) =>{
  //       this.product = pro;      });
  // }

  getproducts() {
    this.api.products().subscribe((res: any) => {
      this.product = res;
      this.totalPages = Math.ceil(this.product.length / this.pageSize);
    });
  }

 

  get productSlice() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.product.slice(start, start + this.pageSize);
  }



  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  
}
