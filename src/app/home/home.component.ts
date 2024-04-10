import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  today = Date();
  Data: any;
  list:any;
  random2:any;
 

  constructor(private http: HttpClient,) {
    setInterval(() => {
      this.today = Date();
    }, 1000);
  }
  ngOnInit(): void {
    this.getdata();
    this.buyOrder1();
    this.randomdata();
    
  }
  getdata() {
    this.http.get('http://stg-api.goldbharat.com:4200/api/aboutus').subscribe((res: any) => {
        this.Data = res;
    });
  }

  randomdata(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res2: any) =>{
      this.random2 = res2;
    })
  }


  buyOrder1(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsInJlZ2lzdGVyX3Bob25lX251bWJlciI6IjYzNjYxNzU0MzQiLCJuYW1lIjoiTW9uaWthIiwiaWF0IjoxNzExNzA0MDgwLCJleHAiOjE3MTk0ODAwODB9.HT_aW3_4ZXtS5CxHutQaK0r7jYghoKg2ol8prlEU0ok',
    });
    
    this.http.get('http://stg-api.goldbharat.com:4200/api/getMyOrders/BUY', { headers }).subscribe(response => {
      console.log('buy',response);
       this.list=response
    }, error => {
      console.error(error);
    });
    
  }

 

 
}

// console.log('response data',res)
