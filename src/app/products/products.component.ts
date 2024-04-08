import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  usersdata: any;
  dummay:any;
  randomdata:any;
  newdata: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.jewerallydata();
    this.dummydata();
    this.getrandomdata();
    
  }

  jewerallydata() {
    this.http
      .get('https://fakestoreapi.com/products/category/jewelery')
      .subscribe((res: any) => {
        this.usersdata = res;
      });
  }

  dummydata(){
    this.http.get('https://dummyjson.com/products/1').subscribe((res2: any) =>{
      this.dummay = res2;
    })
  }


  getrandomdata(){
    this.http.get('https://randomuser.me/api/').subscribe((res3: any)=> {
      this.randomdata = res3.results[0]
    })
  }


}
